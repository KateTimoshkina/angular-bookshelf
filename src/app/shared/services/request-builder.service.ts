import { Injectable } from '@angular/core';
import { Request } from '@angular/http';

@Injectable()
export class RequestBuilderService {
  private baseUrl: string = null;
  private method: string;
  private path: string;
  private pathParams: {[key: string]: string} = {};
  private queryParams: {[key: string]: string} = {};
  private body: string;
  private extraHeaders: {[key: string]: string} = {};

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
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
      search: queryParameters
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

  private buildPath() {
    let path = this.path;
    for (const key in this.pathParams) {
      if (this.pathParams.hasOwnProperty(key)) {
        path = path.replace(':' + key, this.pathParams[key]);
      }
    }
    return path;
  }
}
