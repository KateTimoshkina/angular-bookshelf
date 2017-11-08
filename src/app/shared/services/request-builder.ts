import { Injectable } from '@angular/core';
import { Request } from '@angular/http';
import { Dictionary } from '../interfaces/dictionary.interface';

@Injectable()
export class RequestBuilder {
  private baseUrl: string = null;
  private method: string;
  private path: string = '/';
  private pathParams: Dictionary<string> = {};
  private queryParams: Dictionary<string> = {};
  private body: string = '';
  private extraHeaders: Dictionary<string> = {};

  public constructor(baseUrl: string, method: string) {
    this.baseUrl = baseUrl;
    this.method = method;
  }

  public withPath(path: string) {
    this.path = path;
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

  public withJsonBody(body: Dictionary<any>) {
    this.body = JSON.stringify(body);
    return this;
  }

  public build(): Request {
    const queryParameters = new URLSearchParams();

    for (const key in this.queryParams) {
      if (this.queryParams.hasOwnProperty(key)) {
        queryParameters.set(key, this.queryParams[key]);
      }
    }

    const request = new Request({
      url: this.baseUrl + this.buildPath(),
      method: this.method,
      body: this.body,
      search: queryParameters,
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
