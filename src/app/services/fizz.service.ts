import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class FizzService {

  constructor(private http: HttpClient) {
  }

  getPosts() {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1', {headers: headers});
  }
}
