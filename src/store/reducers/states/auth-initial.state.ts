import { User } from "src/models/user.model";

export const INITIAL_STATE = {
  access_token: null,
  refresh_token: null,
  user: null as User | null,
};
