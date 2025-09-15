// lib/session.ts
export const SESSION_KEY = "chantier_session_token";

export function setSession(token: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SESSION_KEY, token);
  }
}

export function getSession(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem(SESSION_KEY);
  }
  return null;
}

export function clearSession() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(SESSION_KEY);
  }
}
