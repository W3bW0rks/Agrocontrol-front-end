export class User {
  id: number
  username: string
  password: string
  roles: string[];

  constructor(user: {id?: number, username?: string, password?: string, roles?: string[]}) {
    this.id = user.id || 0;
    this.username = user.username || '';
    this.password = user.password || '';
    this.roles = user.roles || [];
  }
}
