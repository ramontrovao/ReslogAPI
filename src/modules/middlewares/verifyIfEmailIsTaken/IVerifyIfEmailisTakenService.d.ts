export interface IVerifyIfEmailisTakenService {
  execute(user_email: string): boolean;
}
