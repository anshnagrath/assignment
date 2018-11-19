import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class AppService {

  constructor(public http: HttpClient) { }
  data() {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`).toPromise();
  }
}
