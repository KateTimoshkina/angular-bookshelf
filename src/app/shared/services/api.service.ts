import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_SERVER } from '../constants/url-constants';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  private getApiUrl(endPoint: string, authToken?: string) {
    const queryTail = !!authToken ? '?auth=' + authToken : '';
    return API_SERVER + endPoint + '.json' + queryTail;
  }

  public get(endPoint: string, authToken?: string): Observable<Response> {
    const url = this.getApiUrl(endPoint, authToken);
    return this.http.get(url);
  }

  public put(endPoint: string, data: any, authToken?: string): Observable<Response> {
    const url = this.getApiUrl(endPoint, authToken);
    return this.http.put(url, data);
  }

  public post(endPoint: string, data: any, authToken?: string): Observable<Response> {
    const url = this.getApiUrl(endPoint, authToken);
    return this.http.post(url, data);
  }

}
