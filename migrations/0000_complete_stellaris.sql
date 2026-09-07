CREATE TABLE `account` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`account_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`access_token` text,
	`refresh_token` text,
	`access_token_expires_at` integer,
	`refresh_token_expires_at` integer,
	`scope` text,
	`id_token` text,
	`password` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_account_user` ON `account` (`user_id`);--> statement-breakpoint
CREATE TABLE `audit_log` (
	`id` text PRIMARY KEY NOT NULL,
	`actor_user_id` text,
	`accion` text NOT NULL,
	`entidad` text NOT NULL,
	`entidad_id` text,
	`motivo` text,
	`metadatos` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`actor_user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `idx_audit_entidad` ON `audit_log` (`entidad`,`entidad_id`);--> statement-breakpoint
CREATE INDEX `idx_audit_actor` ON `audit_log` (`actor_user_id`);--> statement-breakpoint
CREATE TABLE `clase_gratis` (
	`id` text PRIMARY KEY NOT NULL,
	`solicitante_user_id` text,
	`nombre` text NOT NULL,
	`telefono` text NOT NULL,
	`profesor_id` text,
	`materia` text,
	`estado` text DEFAULT 'solicitada' NOT NULL,
	`sesion_id` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`solicitante_user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`profesor_id`) REFERENCES `profesor`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`sesion_id`) REFERENCES `clase_sesion`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `idx_gratis_estado` ON `clase_gratis` (`estado`);--> statement-breakpoint
CREATE INDEX `idx_gratis_telefono` ON `clase_gratis` (`telefono`);--> statement-breakpoint
CREATE TABLE `clase_sesion` (
	`id` text PRIMARY KEY NOT NULL,
	`curso_id` text,
	`profesor_id` text NOT NULL,
	`inicio_at` integer NOT NULL,
	`duracion_min` integer DEFAULT 40 NOT NULL,
	`cupo` integer DEFAULT 8 NOT NULL,
	`meeting_url` text,
	`estado` text DEFAULT 'programada' NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`curso_id`) REFERENCES `curso`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`profesor_id`) REFERENCES `profesor`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `idx_sesion_profesor_inicio` ON `clase_sesion` (`profesor_id`,`inicio_at`);--> statement-breakpoint
CREATE INDEX `idx_sesion_curso` ON `clase_sesion` (`curso_id`);--> statement-breakpoint
CREATE TABLE `curso` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`titulo` text NOT NULL,
	`resumen` text NOT NULL,
	`descripcion` text,
	`profesor_id` text NOT NULL,
	`materia` text NOT NULL,
	`nivel` text DEFAULT 'principiante' NOT NULL,
	`formato` text DEFAULT 'grupal' NOT NULL,
	`clases_total` integer DEFAULT 6 NOT NULL,
	`clases_por_semana` integer DEFAULT 2 NOT NULL,
	`duracion_min` integer DEFAULT 40 NOT NULL,
	`cupo_max` integer DEFAULT 8 NOT NULL,
	`precio_centavos` integer NOT NULL,
	`estado` text DEFAULT 'borrador' NOT NULL,
	`publicado_at` integer,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`profesor_id`) REFERENCES `profesor`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `curso_slug_unique` ON `curso` (`slug`);--> statement-breakpoint
CREATE INDEX `idx_curso_profesor` ON `curso` (`profesor_id`);--> statement-breakpoint
CREATE INDEX `idx_curso_estado` ON `curso` (`estado`);--> statement-breakpoint
CREATE TABLE `guardian_link` (
	`id` text PRIMARY KEY NOT NULL,
	`guardian_user_id` text NOT NULL,
	`ward_user_id` text NOT NULL,
	`parentesco` text,
	`verified_at` integer,
	`verified_by` text,
	`revoked_at` integer,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`guardian_user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`ward_user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `uq_guardian_ward` ON `guardian_link` (`guardian_user_id`,`ward_user_id`);--> statement-breakpoint
CREATE INDEX `idx_guardian_ward` ON `guardian_link` (`ward_user_id`);--> statement-breakpoint
CREATE TABLE `leccion` (
	`id` text PRIMARY KEY NOT NULL,
	`modulo_id` text NOT NULL,
	`titulo` text NOT NULL,
	`bloques` text DEFAULT '[]' NOT NULL,
	`duracion_min` integer,
	`orden` integer DEFAULT 0 NOT NULL,
	`estado` text DEFAULT 'borrador' NOT NULL,
	FOREIGN KEY (`modulo_id`) REFERENCES `modulo`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_leccion_modulo` ON `leccion` (`modulo_id`);--> statement-breakpoint
CREATE TABLE `matricula` (
	`id` text PRIMARY KEY NOT NULL,
	`estudiante_user_id` text NOT NULL,
	`curso_id` text NOT NULL,
	`orden_item_id` text,
	`origen` text DEFAULT 'compra' NOT NULL,
	`estado` text DEFAULT 'activa' NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`estudiante_user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`curso_id`) REFERENCES `curso`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`orden_item_id`) REFERENCES `orden_item`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `uq_matricula_estudiante_curso` ON `matricula` (`estudiante_user_id`,`curso_id`);--> statement-breakpoint
CREATE INDEX `idx_matricula_curso` ON `matricula` (`curso_id`);--> statement-breakpoint
CREATE TABLE `modulo` (
	`id` text PRIMARY KEY NOT NULL,
	`curso_id` text NOT NULL,
	`titulo` text NOT NULL,
	`orden` integer DEFAULT 0 NOT NULL,
	FOREIGN KEY (`curso_id`) REFERENCES `curso`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_modulo_curso` ON `modulo` (`curso_id`);--> statement-breakpoint
CREATE TABLE `orden` (
	`id` text PRIMARY KEY NOT NULL,
	`comprador_user_id` text NOT NULL,
	`total_centavos` integer NOT NULL,
	`moneda` text DEFAULT 'USD' NOT NULL,
	`estado` text DEFAULT 'pendiente' NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`comprador_user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `idx_orden_comprador` ON `orden` (`comprador_user_id`);--> statement-breakpoint
CREATE INDEX `idx_orden_estado` ON `orden` (`estado`);--> statement-breakpoint
CREATE TABLE `orden_item` (
	`id` text PRIMARY KEY NOT NULL,
	`orden_id` text NOT NULL,
	`curso_id` text NOT NULL,
	`beneficiario_user_id` text NOT NULL,
	`precio_centavos` integer NOT NULL,
	FOREIGN KEY (`orden_id`) REFERENCES `orden`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`curso_id`) REFERENCES `curso`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`beneficiario_user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `idx_item_orden` ON `orden_item` (`orden_id`);--> statement-breakpoint
CREATE INDEX `idx_item_beneficiario` ON `orden_item` (`beneficiario_user_id`);--> statement-breakpoint
CREATE TABLE `pago` (
	`id` text PRIMARY KEY NOT NULL,
	`orden_id` text NOT NULL,
	`pasarela` text DEFAULT 'payphone' NOT NULL,
	`client_transaction_id` text,
	`pasarela_transaction_id` text,
	`monto_centavos` integer NOT NULL,
	`estado` text DEFAULT 'pendiente' NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`orden_id`) REFERENCES `orden`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `pago_client_transaction_id_unique` ON `pago` (`client_transaction_id`);--> statement-breakpoint
CREATE INDEX `idx_pago_orden` ON `pago` (`orden_id`);--> statement-breakpoint
CREATE INDEX `idx_pago_estado` ON `pago` (`estado`);--> statement-breakpoint
CREATE TABLE `pago_evento` (
	`id` text PRIMARY KEY NOT NULL,
	`pago_id` text,
	`fuente` text NOT NULL,
	`payload` text NOT NULL,
	`firma_valida` integer,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`pago_id`) REFERENCES `pago`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `idx_evento_pago` ON `pago_evento` (`pago_id`);--> statement-breakpoint
CREATE TABLE `profesor` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`slug` text NOT NULL,
	`titular` text NOT NULL,
	`bio` text,
	`color` text DEFAULT '#e0522c' NOT NULL,
	`credencial` text,
	`registro_profesional` text,
	`vetting_completado_at` integer,
	`vetting_verificado_por` text,
	`antecedentes_penales_at` integer,
	`titulo_verificado_at` integer,
	`comision_bps` integer DEFAULT 6000 NOT NULL,
	`activo` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `profesor_user_id_unique` ON `profesor` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `profesor_slug_unique` ON `profesor` (`slug`);--> statement-breakpoint
CREATE INDEX `idx_profesor_slug` ON `profesor` (`slug`);--> statement-breakpoint
CREATE TABLE `progreso` (
	`id` text PRIMARY KEY NOT NULL,
	`matricula_id` text NOT NULL,
	`leccion_id` text NOT NULL,
	`completada` integer DEFAULT false NOT NULL,
	`segundos_vistos` integer DEFAULT 0 NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`matricula_id`) REFERENCES `matricula`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`leccion_id`) REFERENCES `leccion`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `uq_progreso_matricula_leccion` ON `progreso` (`matricula_id`,`leccion_id`);--> statement-breakpoint
CREATE TABLE `sesion_asistente` (
	`id` text PRIMARY KEY NOT NULL,
	`sesion_id` text NOT NULL,
	`estudiante_user_id` text NOT NULL,
	`asistio` integer,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`sesion_id`) REFERENCES `clase_sesion`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`estudiante_user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `uq_sesion_estudiante` ON `sesion_asistente` (`sesion_id`,`estudiante_user_id`);--> statement-breakpoint
CREATE INDEX `idx_asistente_estudiante` ON `sesion_asistente` (`estudiante_user_id`);--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`token` text NOT NULL,
	`expires_at` integer NOT NULL,
	`ip_address` text,
	`user_agent` text,
	`impersonated_by` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `session_token_unique` ON `session` (`token`);--> statement-breakpoint
CREATE INDEX `idx_session_user` ON `session` (`user_id`);--> statement-breakpoint
CREATE INDEX `idx_session_token` ON `session` (`token`);--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`email_verified` integer DEFAULT false NOT NULL,
	`image` text,
	`roles` text DEFAULT 'alumno' NOT NULL,
	`telefono` text,
	`fecha_nacimiento` integer,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE INDEX `idx_user_email` ON `user` (`email`);--> statement-breakpoint
CREATE TABLE `verification` (
	`id` text PRIMARY KEY NOT NULL,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expires_at` integer NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_verification_identifier` ON `verification` (`identifier`);