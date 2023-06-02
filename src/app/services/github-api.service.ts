import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private baseUrl = 'https://api.github.com';
  constructor(private http: HttpClient) { }
  getRepositoryReadmeContent(data: any): Observable<any> {
    const url = `${this.baseUrl}/repos/${data.username}/${data.repositoryName}/readme`;
    return this.http.get<any>(url);
  }

}
