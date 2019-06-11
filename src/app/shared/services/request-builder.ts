import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Dictionary } from '../types';

@Injectable()
export class RequestBuilder {
  baseUrl: string = null;
  method: string;
  path: string = '/';
  pathParams: Dictionary<string> = {};
  queryParams: Dictionary<string> = {};
  body: string = '';
  extraHeaders: Dictionary<string> = {};
  responseType: 'arraybuffer' | 'blob' | 'json' | 'text';

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public build(): HttpRequest<string> {
    const queryParameters = new HttpParams();
    for (const key in this.queryParams) {
      if (this.queryParams.hasOwnProperty(key)) {
        queryParameters.set(key, this.queryParams[key]);
      }
    }

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    for (const key in this.extraHeaders) {
      if (this.extraHeaders.hasOwnProperty(key)) {
        headers.set(key, this.extraHeaders[key]);
      }
    }

    return new HttpRequest<string>(this.method, this.baseUrl + this.buildPath(), this.body, {
      responseType: this.responseType || 'json',
      headers: headers,
      params: queryParameters,
      withCredentials: true
    });
  }

  public withPath(path: string) {
    this.path = path;
    return this;
  }

  public withMethod(method: string): RequestBuilder {
    this.method = method;
    return this;
  }

  public withExtraHeaders(extraHeaders: Dictionary<string>) {
    this.extraHeaders = extraHeaders;
    return this;
  }

  public withPathParams(pathParams: Dictionary<string>) {
    this.pathParams = pathParams;
    return this;
  }

  public withQueryParams(queryParams: Dictionary<string>) {
    this.queryParams = queryParams;
    return this;
  }

  public withBody(body: Dictionary<any>) {
    this.body = JSON.stringify(body);
    return this;
  }

  public withResponseType(responseType: 'arraybuffer' | 'blob' | 'json' | 'text') {
    this.responseType = responseType;
    return this;
  }

  protected buildPath() {
    let path = this.path;
    for (const key in this.pathParams) {
      if (this.pathParams.hasOwnProperty(key)) {
        path = path.replace(':' + key, this.pathParams[key]);
      }
    }
    return path;
  }
}
