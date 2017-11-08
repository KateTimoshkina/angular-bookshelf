import { Injectable } from '@angular/core';
import { Request, RequestMethod } from '@angular/http';
import { Dictionary } from '../interfaces/dictionary.interface';

@Injectable()
export class RequestBuilder{
  baseUrl: string = null;
  method: RequestMethod;
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
    if (method === 'post') {
      this.method = RequestMethod.Post;
    } else if (method === 'get') {
      this.method = RequestMethod.Get;
    } else if (method === 'patch') {
      this.method = RequestMethod.Patch;
    }
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
