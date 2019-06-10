import { HttpHeaders, HttpParams } from '@angular/common/http';

export type Dictionary<T> = { [key: string]: T };

export type ApiResponse = {
  payload: any,
  service: any
};

export type HttpOptions = {
  body?: any;
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe: 'events';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType: 'blob';
  withCredentials?: boolean;
};
