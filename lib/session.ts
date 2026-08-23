// lib/session.ts
// Shared constants for signalling an expired/invalid access token from a
// proxy route to the client, instead of passing Django's raw token-error
// text through. Import from route handlers (server) and page components
// (client) alike -- no next/server dependency here on purpose.

export const SESSION_EXPIRED_CODE = 'session_expired'
export const SESSION_EXPIRED_MESSAGE = 'Your session expired. Please log in again.'

export function isSessionExpired(data: any): boolean {
  return Boolean(data) && data.error === SESSION_EXPIRED_CODE
}
