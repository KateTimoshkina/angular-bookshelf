import { Injectable } from '@angular/core';
import { HttpParams, HttpRequest } from '@angular/common/http';
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

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
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

  public build(): HttpRequest<any> {
    const queryParameters = new HttpParams();

    for (const key in this.queryParams) {
      if (this.queryParams.hasOwnProperty(key)) {
        queryParameters.set(key, this.queryParams[key]);
      }
    }

    const url = this.baseUrl + this.buildPath();
    const request = new HttpRequest(this.method, url, this.body, {
      params: queryParameters,
      withCredentials: true
    });

    request.headers.set('Content-Type', 'application/json');

    if (!!this.extraHeaders) {
      for (const key in this.extraHeaders) {
        if (this.extraHeaders.hasOwnProperty(key)) {
          request.headers.set(key, this.extraHeaders[key]);
        }
      }
    }

    return request;
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
