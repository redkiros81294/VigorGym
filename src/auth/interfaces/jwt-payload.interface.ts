export interface JwtPayload {
  sub: string;
  email: string;// Subject (typically the user's ID or username)
  username: string; // Add username to the payload
  iat?: number; // Issued At (UNIX timestamp)
  exp?: number; // Expiration (UNIX timestamp)
  roles?: string[]; // User roles or permissions
}
