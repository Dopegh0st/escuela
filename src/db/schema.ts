import { sqliteTable, text, integer, real, index, uniqueIndex } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

/**
 * D1 schema.
 *
 * Money is stored as INTEGER CENTS everywhere. Never floats: 0.1 + 0.2 !== 0.3,
 * and this is real money in a market where $25 is a meaningful sum.
 *
 * Timestamps are unix seconds (integer). Ecuador is UTC-5 year-round with no
 * DST, so display conversion is a constant offset and never a DST bug.
 *
 * D1 has NO row-level security. Every read must go through a scoped query
 * helper that filters by the acting user -- see src/db/scope.ts. The first IDOR
 * in a system like this is always a missing WHERE clause.
 */

const now = sql`(unixepoch())`;

/* ========================================================================== */
/* Auth — tables Better Auth owns. Field names follow its expected shape.      */
/* ========================================================================== */

export const user = sqliteTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: integer('email_verified', { mode: 'boolean' }).notNull().default(false),
  image: text('image'),
  /**
   * Roles. A single user may legitimately be more than one thing (a teacher who
   * also takes a course), so this is a comma-separated set rather than a single
   * value, and authorization checks test for membership.
   */
  roles: text('roles').notNull().default('alumno'),
  telefono: text('telefono'),
  /**
   * Date of birth, asked at registration in EVERY vertical -- not just Elena's.
   * Minors trigger LOPDP duties across the whole platform (Res.
   * SPDP-SPD-2025-0028-R Art. 10.1/10.3, "toda actividad"), and the signup flow
   * previously had no age question at all. Stored as a date, never a derived
   * "is_minor" boolean, so the answer stays correct as the person ages.
   */
  fechaNacimiento: integer('fecha_nacimiento'),
  createdAt: integer('created_at').notNull().default(now),
  updatedAt: integer('updated_at').notNull().default(now),
}, (t) => [index('idx_user_email').on(t.email)]);

/**
 * Sessions live in D1, NOT KV. The Cloudflare adapter wires Astro Sessions to a
 * KV namespace by default, and KV Free allows 1,000 writes/day -- logins would
 * start failing around 19:00 Ecuador time, the mid-evening study peak. D1 gives
 * 100k writes/day for $0 and is strongly consistent, which KV is not.
 */
export const session = sqliteTable('session', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  token: text('token').notNull().unique(),
  expiresAt: integer('expires_at').notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  /** Set when an admin is acting as this user, so audit trails stay honest. */
  impersonatedBy: text('impersonated_by'),
  createdAt: integer('created_at').notNull().default(now),
  updatedAt: integer('updated_at').notNull().default(now),
}, (t) => [
  index('idx_session_user').on(t.userId),
  index('idx_session_token').on(t.token),
]);

export const account = sqliteTable('account', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  accessTokenExpiresAt: integer('access_token_expires_at'),
  refreshTokenExpiresAt: integer('refresh_token_expires_at'),
  scope: text('scope'),
  idToken: text('id_token'),
  /** scrypt$N$r$p$salt$hash — see src/lib/auth.ts for why not bcrypt/argon2. */
  password: text('password'),
  createdAt: integer('created_at').notNull().default(now),
  updatedAt: integer('updated_at').notNull().default(now),
}, (t) => [index('idx_account_user').on(t.userId)]);

export const verification = sqliteTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: integer('expires_at').notNull(),
  createdAt: integer('created_at').notNull().default(now),
  updatedAt: integer('updated_at').notNull().default(now),
}, (t) => [index('idx_verification_identifier').on(t.identifier)]);

/* ========================================================================== */
/* Guardians                                                                   */
/* ========================================================================== */

/**
 * Links a guardian to a minor. This MUST be an invite-and-accept flow, never a
 * self-asserted id: the critics found that trusting a client-supplied ward id
 * lets anyone register an account, claim a ward, and read another child's
 * records. Every guardian-scoped query must filter on
 * `revoked_at IS NULL AND verified_at IS NOT NULL`.
 */
export const guardianLink = sqliteTable('guardian_link', {
  id: text('id').primaryKey(),
  guardianUserId: text('guardian_user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  wardUserId: text('ward_user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  parentesco: text('parentesco'),
  /** Null until the link is proven. Never trust an unverified link. */
  verifiedAt: integer('verified_at'),
  verifiedBy: text('verified_by'),
  revokedAt: integer('revoked_at'),
  createdAt: integer('created_at').notNull().default(now),
}, (t) => [
  uniqueIndex('uq_guardian_ward').on(t.guardianUserId, t.wardUserId),
  index('idx_guardian_ward').on(t.wardUserId),
]);

/* ========================================================================== */
/* Teachers                                                                    */
/* ========================================================================== */

export const profesor = sqliteTable('profesor', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().unique().references(() => user.id, { onDelete: 'cascade' }),
  slug: text('slug').notNull().unique(),
  titular: text('titular').notNull(),
  bio: text('bio'),
  color: text('color').notNull().default('#e0522c'),
  /** Credential shown publicly. For a regulated professional this is the sale. */
  credencial: text('credencial'),
  registroProfesional: text('registro_profesional'),
  /**
   * Vetting gate. No teacher may be assigned to a session until this is set:
   * adults deliver 1:1 classes to children here, and the plan set had zero
   * safeguarding controls until the critics flagged it.
   */
  vettingCompletadoAt: integer('vetting_completado_at'),
  vettingVerificadoPor: text('vetting_verificado_por'),
  antecedentesPenalesAt: integer('antecedentes_penales_at'),
  tituloVerificadoAt: integer('titulo_verificado_at'),
  /** Share of the sale, in basis points. 6000 = 60%. */
  comisionBps: integer('comision_bps').notNull().default(6000),
  activo: integer('activo', { mode: 'boolean' }).notNull().default(false),
  createdAt: integer('created_at').notNull().default(now),
}, (t) => [index('idx_profesor_slug').on(t.slug)]);

/* ========================================================================== */
/* Catalogue                                                                   */
/* ========================================================================== */

export const curso = sqliteTable('curso', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  titulo: text('titulo').notNull(),
  resumen: text('resumen').notNull(),
  descripcion: text('descripcion'),
  profesorId: text('profesor_id').notNull().references(() => profesor.id),
  materia: text('materia').notNull(),
  nivel: text('nivel').notNull().default('principiante'),
  formato: text('formato').notNull().default('grupal'),
  /** Course shape, per D14: fixed scope, one payment, no subscription. */
  clasesTotal: integer('clases_total').notNull().default(6),
  clasesPorSemana: integer('clases_por_semana').notNull().default(2),
  duracionMin: integer('duracion_min').notNull().default(40),
  cupoMax: integer('cupo_max').notNull().default(8),
  /** INTEGER CENTS. $25.00 -> 2500. */
  precioCentavos: integer('precio_centavos').notNull(),
  estado: text('estado').notNull().default('borrador'), // borrador | publicado | archivado
  publicadoAt: integer('publicado_at'),
  createdAt: integer('created_at').notNull().default(now),
  updatedAt: integer('updated_at').notNull().default(now),
}, (t) => [
  index('idx_curso_profesor').on(t.profesorId),
  index('idx_curso_estado').on(t.estado),
]);

export const modulo = sqliteTable('modulo', {
  id: text('id').primaryKey(),
  cursoId: text('curso_id').notNull().references(() => curso.id, { onDelete: 'cascade' }),
  titulo: text('titulo').notNull(),
  orden: integer('orden').notNull().default(0),
}, (t) => [index('idx_modulo_curso').on(t.cursoId)]);

export const leccion = sqliteTable('leccion', {
  id: text('id').primaryKey(),
  moduloId: text('modulo_id').notNull().references(() => modulo.id, { onDelete: 'cascade' }),
  titulo: text('titulo').notNull(),
  /**
   * Lesson content as an ordered list of typed blocks
   * ({type: video|texto|actividad|quiz|descarga}). One shape covers every
   * lesson type, which is what keeps the authoring UI from sprawling.
   */
  bloques: text('bloques', { mode: 'json' }).notNull().default(sql`'[]'`),
  duracionMin: integer('duracion_min'),
  orden: integer('orden').notNull().default(0),
  estado: text('estado').notNull().default('borrador'),
}, (t) => [index('idx_leccion_modulo').on(t.moduloId)]);

/* ========================================================================== */
/* Live classes                                                                */
/* ========================================================================== */

/**
 * A scheduled group class. The earlier schema modelled only 1:1 bookings, with
 * a unique constraint that made a group class physically impossible to
 * represent -- while the business plan sold groups of up to 8. Retrofitting
 * this after live bookings exist is a painful migration, so it lands now.
 */
export const claseSesion = sqliteTable('clase_sesion', {
  id: text('id').primaryKey(),
  cursoId: text('curso_id').references(() => curso.id, { onDelete: 'set null' }),
  profesorId: text('profesor_id').notNull().references(() => profesor.id),
  inicioAt: integer('inicio_at').notNull(),
  duracionMin: integer('duracion_min').notNull().default(40),
  cupo: integer('cupo').notNull().default(8),
  /**
   * One freshly generated link per session, never a reusable personal room, and
   * nulled on cancel/refund. As originally specified this was a permanent
   * unauthenticated bearer URL: anyone ever forwarded it in a WhatsApp group
   * could rejoin a class with children in it, indefinitely.
   */
  meetingUrl: text('meeting_url'),
  estado: text('estado').notNull().default('programada'), // programada | dictada | cancelada
  createdAt: integer('created_at').notNull().default(now),
}, (t) => [
  index('idx_sesion_profesor_inicio').on(t.profesorId, t.inicioAt),
  index('idx_sesion_curso').on(t.cursoId),
]);

export const sesionAsistente = sqliteTable('sesion_asistente', {
  id: text('id').primaryKey(),
  sesionId: text('sesion_id').notNull().references(() => claseSesion.id, { onDelete: 'cascade' }),
  estudianteUserId: text('estudiante_user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  /** Marked server-side by the teacher, never inferred from the client. */
  asistio: integer('asistio', { mode: 'boolean' }),
  createdAt: integer('created_at').notNull().default(now),
}, (t) => [
  uniqueIndex('uq_sesion_estudiante').on(t.sesionId, t.estudianteUserId),
  index('idx_asistente_estudiante').on(t.estudianteUserId),
]);

/* ========================================================================== */
/* Commerce                                                                    */
/* ========================================================================== */

export const orden = sqliteTable('orden', {
  id: text('id').primaryKey(),
  /** Who PAID. Not necessarily who studies -- see ordenItem.beneficiario. */
  compradorUserId: text('comprador_user_id').notNull().references(() => user.id),
  totalCentavos: integer('total_centavos').notNull(),
  moneda: text('moneda').notNull().default('USD'),
  /**
   * `pending_transfer` and `reversed` exist because the checkout writes them:
   * manual bank transfer is a first-class rail in this market, not a fallback.
   */
  estado: text('estado').notNull().default('pendiente'),
  // pendiente | pending_transfer | pagada | cancelada | reversed
  createdAt: integer('created_at').notNull().default(now),
  updatedAt: integer('updated_at').notNull().default(now),
}, (t) => [
  index('idx_orden_comprador').on(t.compradorUserId),
  index('idx_orden_estado').on(t.estado),
]);

export const ordenItem = sqliteTable('orden_item', {
  id: text('id').primaryKey(),
  ordenId: text('orden_id').notNull().references(() => orden.id, { onDelete: 'cascade' }),
  cursoId: text('curso_id').notNull().references(() => curso.id),
  /**
   * THE most common purchase in this market is a mother buying for her child.
   * The original schema bound orders only to the payer, which made that
   * purchase impossible to represent. Defaults to the buyer when they are
   * studying themselves.
   */
  beneficiarioUserId: text('beneficiario_user_id').notNull().references(() => user.id),
  precioCentavos: integer('precio_centavos').notNull(),
}, (t) => [
  index('idx_item_orden').on(t.ordenId),
  index('idx_item_beneficiario').on(t.beneficiarioUserId),
]);

export const pago = sqliteTable('pago', {
  id: text('id').primaryKey(),
  ordenId: text('orden_id').notNull().references(() => orden.id, { onDelete: 'cascade' }),
  pasarela: text('pasarela').notNull().default('payphone'), // payphone | transferencia | efectivo
  /**
   * PayPhone's correlation key, returned on the redirect and required to
   * reconcile a payment. UNIQUE makes the webhook idempotent -- without it a
   * retried callback double-grants enrolment. Max 15 chars per PayPhone.
   */
  clientTransactionId: text('client_transaction_id').unique(),
  pasarelaTransactionId: text('pasarela_transaction_id'),
  montoCentavos: integer('monto_centavos').notNull(),
  /** `pending_verification` is the manual-transfer state: money claimed, not yet confirmed. */
  estado: text('estado').notNull().default('pendiente'),
  // pendiente | pending_verification | aprobado | rechazado | reembolsado
  createdAt: integer('created_at').notNull().default(now),
  updatedAt: integer('updated_at').notNull().default(now),
}, (t) => [
  index('idx_pago_orden').on(t.ordenId),
  index('idx_pago_estado').on(t.estado),
]);

/** Raw gateway callbacks, appended never updated. The only way to debug money. */
export const pagoEvento = sqliteTable('pago_evento', {
  id: text('id').primaryKey(),
  pagoId: text('pago_id').references(() => pago.id, { onDelete: 'set null' }),
  fuente: text('fuente').notNull(),
  payload: text('payload').notNull(),
  firmaValida: integer('firma_valida', { mode: 'boolean' }),
  createdAt: integer('created_at').notNull().default(now),
}, (t) => [index('idx_evento_pago').on(t.pagoId)]);

/* ========================================================================== */
/* Enrolment & progress                                                        */
/* ========================================================================== */

export const matricula = sqliteTable('matricula', {
  id: text('id').primaryKey(),
  /** The STUDENT, which is orden_item.beneficiario -- not the payer. */
  estudianteUserId: text('estudiante_user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  cursoId: text('curso_id').notNull().references(() => curso.id, { onDelete: 'cascade' }),
  ordenItemId: text('orden_item_id').references(() => ordenItem.id),
  origen: text('origen').notNull().default('compra'), // compra | prueba_gratis | cortesia
  estado: text('estado').notNull().default('activa'), // activa | completada | revocada
  createdAt: integer('created_at').notNull().default(now),
}, (t) => [
  uniqueIndex('uq_matricula_estudiante_curso').on(t.estudianteUserId, t.cursoId),
  index('idx_matricula_curso').on(t.cursoId),
]);

export const progreso = sqliteTable('progreso', {
  id: text('id').primaryKey(),
  matriculaId: text('matricula_id').notNull().references(() => matricula.id, { onDelete: 'cascade' }),
  leccionId: text('leccion_id').notNull().references(() => leccion.id, { onDelete: 'cascade' }),
  completada: integer('completada', { mode: 'boolean' }).notNull().default(false),
  segundosVistos: integer('segundos_vistos').notNull().default(0),
  updatedAt: integer('updated_at').notNull().default(now),
}, (t) => [
  uniqueIndex('uq_progreso_matricula_leccion').on(t.matriculaId, t.leccionId),
]);

/* ========================================================================== */
/* Free trial — the site's main conversion mechanic                            */
/* ========================================================================== */

export const claseGratis = sqliteTable('clase_gratis', {
  id: text('id').primaryKey(),
  solicitanteUserId: text('solicitante_user_id').references(() => user.id, { onDelete: 'set null' }),
  /** Captured before signup: most requests arrive via WhatsApp, not a form. */
  nombre: text('nombre').notNull(),
  telefono: text('telefono').notNull(),
  profesorId: text('profesor_id').references(() => profesor.id),
  materia: text('materia'),
  estado: text('estado').notNull().default('solicitada'),
  // solicitada | agendada | dictada | no_asistio | convertida
  sesionId: text('sesion_id').references(() => claseSesion.id),
  createdAt: integer('created_at').notNull().default(now),
}, (t) => [
  index('idx_gratis_estado').on(t.estado),
  /** One per phone number. Free 1:1 time is the scarcest resource in the business. */
  index('idx_gratis_telefono').on(t.telefono),
]);

/* ========================================================================== */
/* Audit                                                                       */
/* ========================================================================== */

/**
 * Every destructive or money-touching admin action writes here with a reason.
 * Append-only. Required by LOPDP accountability duties, and it is also the only
 * way to answer "who revoked this enrolment" three months from now.
 */
export const auditLog = sqliteTable('audit_log', {
  id: text('id').primaryKey(),
  actorUserId: text('actor_user_id').references(() => user.id, { onDelete: 'set null' }),
  accion: text('accion').notNull(),
  entidad: text('entidad').notNull(),
  entidadId: text('entidad_id'),
  motivo: text('motivo'),
  metadatos: text('metadatos', { mode: 'json' }),
  createdAt: integer('created_at').notNull().default(now),
}, (t) => [
  index('idx_audit_entidad').on(t.entidad, t.entidadId),
  index('idx_audit_actor').on(t.actorUserId),
]);

export type Usuario = typeof user.$inferSelect;
export type Curso = typeof curso.$inferSelect;
export type Matricula = typeof matricula.$inferSelect;
export type Orden = typeof orden.$inferSelect;
