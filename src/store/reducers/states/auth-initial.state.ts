import { User } from "src/models/user.model";

export const INITIAL_STATE = {
  accessToken: null,
  refreshToken: null,
  user: null as User | null,
};
