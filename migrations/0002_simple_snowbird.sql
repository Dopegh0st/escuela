CREATE TABLE `articulo` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`titulo` text NOT NULL,
	`resumen` text DEFAULT '' NOT NULL,
	`cuerpo` text DEFAULT '' NOT NULL,
	`autor_user_id` text,
	`autor_nombre` text NOT NULL,
	`categoria` text NOT NULL,
	`minutos_lectura` integer DEFAULT 4 NOT NULL,
	`color` text DEFAULT '#5b4bc4' NOT NULL,
	`emoji` text DEFAULT '📝' NOT NULL,
	`estado` text DEFAULT 'borrador' NOT NULL,
	`publicado_at` integer,
	`revisado_por` text,
	`revisado_at` integer,
	`nota_revision` text,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`autor_user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`revisado_por`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `articulo_slug_unique` ON `articulo` (`slug`);--> statement-breakpoint
CREATE INDEX `idx_articulo_estado` ON `articulo` (`estado`,`publicado_at`);--> statement-breakpoint
CREATE INDEX `idx_articulo_autor` ON `articulo` (`autor_user_id`);