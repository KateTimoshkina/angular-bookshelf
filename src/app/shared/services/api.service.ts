import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { RequestBuilder } from './request-builder';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public performRequest<T>(requestBuild: RequestBuilder): Observable<T> {
    let request = requestBuild.build();
    return this.http.request(request)
      .map((response: HttpResponse<any>) => {
        let jsonData = response.body;
        if (jsonData.service.successful) {
          return jsonData;
        } else {
          throw jsonData.service;
        }
      })
      .catch((error: HttpErrorResponse) => {
        throw error.error;
      })
      .share();
  }

}
