export interface JwtPayload {
  sub: string; // Subject (typically the user's ID or username)
  iat?: number; // Issued At (UNIX timestamp)
  exp?: number; // Expiration (UNIX timestamp)
  roles?: string[]; // User roles or permissions
  // Add any other custom fields that your JWT payload contains

}
