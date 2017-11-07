import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_SERVER } from '../constants/url-constants';

@Injectable()
export class ApiService {
  private defaultOptions: RequestOptions;

  // TODO: create request builder
  constructor(private http: Http) {
    this.defaultOptions = new RequestOptions({
      withCredentials: true
    });
  }

  private getApiUrl(endPoint: string) {
    return API_SERVER + endPoint;
  }

  public get(endPoint: string, options?: RequestOptions): Observable<Response> {
    // TODO: figure out options
    options = Object.assign(this.defaultOptions, options || {});
    const url = this.getApiUrl(endPoint);
    return this.http.get(url, options);
  }

  public put(endPoint: string, data: any, options?: RequestOptions): Observable<Response> {
    options = Object.assign(this.defaultOptions, options || {});
    const url = this.getApiUrl(endPoint);
    return this.http.put(url, data, options);
  }

  public post(endPoint: string, data: any, options?: RequestOptions): Observable<Response> {
    options = Object.assign(this.defaultOptions, options || {});
    const url = this.getApiUrl(endPoint);
    return this.http.post(url, data, options);
  }

  public patch(endPoint: string, data: any, options?: RequestOptions): Observable<Response> {
    options = Object.assign(this.defaultOptions, options || {});
    const url = this.getApiUrl(endPoint);
    return this.http.patch(url, data, options);
  }

}
