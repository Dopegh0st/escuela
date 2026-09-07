/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    actor?: { userId: string; roles: string };
    usuario?: { id: string; nombre: string; email: string; roles: string };
  }
}
