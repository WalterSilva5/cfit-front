export interface AnyAction {
  type: any;
  [extraProps: string]: any;
}
