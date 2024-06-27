export interface JwtPayload {
  sub: string; // Subject (typically the user's ID or username)
  email: string;
  username: string;
  iat?: number; // Issued At (UNIX timestamp)
  exp?: number; // Expiration (UNIX timestamp)
  roles?: string[]; // User roles or permissions
}
