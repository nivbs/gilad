const TMI_PASSWORD = "NIVTHEKING";

export function isTmiPasswordValid(password: string): boolean {
  return password.trim() === TMI_PASSWORD;
}
