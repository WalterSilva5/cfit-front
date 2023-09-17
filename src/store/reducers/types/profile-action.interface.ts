import { type AnyAction } from './any-action.interface';
export interface ProfileAction extends AnyAction {
  type: string;
  payload: any;
}
