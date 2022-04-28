import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.local";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private http: HttpClient) { }

  composeHeaders() {
    const token = localStorage.getItem('gomedtoken');
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Authorization': `bearer ${token}`
    });
    return headers;
  }

  get(urlName: string): Observable<any> {
    return this.http.get(`${environment.api}${urlName}`, {
      params: {},
      observe: "response",
      headers: this.composeHeaders(),
    });
  }

  getById(urlName: string, id: string): Observable<any> {
    return this.http.get(`${environment.api}${urlName}` + "/" + id, {
      params: {},
      observe: "response",
      headers: this.composeHeaders(),
    });
  }

  getPromisse(urlName: string): Promise<any> {
    return this.http
      .get(`${environment.api}${urlName}`, {
        params: {},
        observe: "response",
        headers: this.composeHeaders(),
      })
      .toPromise();
  }

  post(urlName: string, body: any): Observable<any> {
    return this.http.post(`${environment.api}${urlName}`, body, {
      params: {},
      observe: "response",
      headers: this.composeHeaders(),
    });
  }

  postWithOutHeader(urlName: string, body: any): Observable<any> {
    return this.http.post(`${environment.api}${urlName}`, body, {
      params: {},
      observe: "response",
    });
  }

  put(urlName: string, body: any): Observable<any> {
    return this.http.put(`${environment.api}${urlName}`, body, {
      params: {},
      observe: "response",
      headers: this.composeHeaders(),
    });
  }

  delete(urlName: string, id: string): Observable<any> {
    return this.http.delete(`${environment.api}${urlName}` + "/" + id, {
      params: {},
      observe: "response",
      headers: this.composeHeaders(),
    });
  }

}
