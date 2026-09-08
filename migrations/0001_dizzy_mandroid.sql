CREATE TABLE `aviso` (
	`id` text PRIMARY KEY NOT NULL,
	`curso_id` text,
	`autor_user_id` text NOT NULL,
	`titulo` text NOT NULL,
	`cuerpo` text NOT NULL,
	`importante` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`curso_id`) REFERENCES `curso`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`autor_user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_aviso_curso` ON `aviso` (`curso_id`);--> statement-breakpoint
CREATE INDEX `idx_aviso_fecha` ON `aviso` (`created_at`);--> statement-breakpoint
CREATE TABLE `aviso_leido` (
	`id` text PRIMARY KEY NOT NULL,
	`aviso_id` text NOT NULL,
	`user_id` text NOT NULL,
	`leido_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`aviso_id`) REFERENCES `aviso`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `uq_aviso_usuario` ON `aviso_leido` (`aviso_id`,`user_id`);--> statement-breakpoint
CREATE INDEX `idx_leido_usuario` ON `aviso_leido` (`user_id`);