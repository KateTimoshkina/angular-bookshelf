import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_SERVER } from '../constants/url-constants';
import 'rxjs/Rx';
import { RequestBuilder } from './request-builder';

@Injectable()
export class ApiService {
  private defaultOptions: RequestOptions;

  constructor(private http: Http) {
    this.defaultOptions = new RequestOptions({
      withCredentials: true
    });
  }

  public performRequest(requestBuild: RequestBuilder): Observable<any> {
    let request = requestBuild.build();
    const observable = this.http.request(request)
      .map(
        (response: Response) => {
          let jsonData = response.json();
          if (jsonData.service.successful) {
            return jsonData;
          } else {
            throw jsonData.service;
          }
        }
      )
      .catch(
        (error: Response) => {
          let jsonData = error.json();
          throw jsonData.service;
        }
      )
      .share();

    return observable;
  }


  // TODO: remove code below
  private getApiUrl(endPoint: string) {
    return API_SERVER + endPoint;
  }

  public get(endPoint: string, options?: RequestOptions): Observable<Response> {
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
