import crypto from "node:crypto";

export class User {
  id?: string;
  created_at?: Date;
  updated_at?: Date;
  admin?: boolean;
  name: string;
  email: string;

  constructor() {
    if (!this.id) {
      this.id = crypto.randomUUID();
    }

    if (!this.created_at) {
      this.created_at = new Date();
    }

    if (!this.updated_at) {
      this.updated_at = new Date();
    }

    if (!this.admin) {
      this.admin = false;
    }
  }
}
