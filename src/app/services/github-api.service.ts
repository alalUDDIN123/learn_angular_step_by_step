import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private baseUrl = 'https://api.github.com';


  constructor(private http: HttpClient) { }

  // get repository readme content
  getRepositoryReadmeContent(userEnteredData: any): Observable<any> {
    const url = `${this.baseUrl}/repos/${userEnteredData?.username}/${userEnteredData.repositoryName}/readme`;
    // console.log("url", url);

    return this.http.get<any>(url);
  }

  // get repositories list

  getRepositories(gethubUsername: any) {
    const url = `${this.baseUrl}/users/${gethubUsername}/repos`;
    return this.http.get<any>(url);
  }

}
