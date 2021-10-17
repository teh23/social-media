export type Token = string;
export interface Todo {
  id: string;
}
export interface MenuState {
  toggleMenu: boolean;
  listMenu: string[];
}
export interface LoginState {
  userCredentials: userCredentials;
  logIn: boolean;
  signIn: boolean;
}
type userCredentials = {
  username: string;
  password: string;
};
