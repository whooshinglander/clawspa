import crypto from "crypto";

export function generateApiKey(): string {
  return "csk_" + crypto.randomBytes(32).toString("hex");
}

export function hashApiKey(key: string): string {
  return crypto.createHash("sha256").update(key).digest("hex");
}

export function hashIp(ip: string): string {
  return crypto.createHash("sha256").update(ip).digest("hex");
}
