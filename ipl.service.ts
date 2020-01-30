import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IplService {
  //baseUrl = "https://192.168.10.140:5000/ipl/";
  baseUrl = "https://ipl-2020.herokuapp.com/ipl/";
  //baseUrl = "https://103.89.235.250:5000/ipl";
  constructor(private http: HttpClient) { }

  teamLabels(): Observable<any> {
    let url = `${this.baseUrl}labels`;
    return this.http.get(url);
  }
  getPlayersByTeamName(teamName): Observable<any> {
    let url = `${this.baseUrl}team/${teamName}`;
    return this.http.get(url);
  }
  getTeamRoleStat(teamname): Observable<any> {
    let url = `${this.baseUrl}team/rolestat/${teamname}`;
  return this.http.get(url);
}



}
