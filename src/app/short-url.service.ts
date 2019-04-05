import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShortenedUrl } from './shortened-url';
import { Observable, of } from 'rxjs';
import { SHORTENED_URLS } from './mock-shortened-urls';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  //baseUrl : string = 'http://localhost:3000/';
  baseUrl : string = 'https://ror-url-shortener.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getUrls(): Observable<ShortenedUrl[]> {
    return this.http.get<ShortenedUrl[]>(this.baseUrl+'top.json');
  }

  shorten(longUrl): Observable<any> {
    return this.http.post(this.baseUrl+'url.json', {url: longUrl});
  }
}
