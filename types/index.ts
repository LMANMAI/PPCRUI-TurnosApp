export interface IMeta {
  method: string;
  operation: string;
  status?: number;
}

export interface IAppResponse<T> {
  data?: any;
  errors: any[];
  meta: IMeta;
  response?: T;
}
