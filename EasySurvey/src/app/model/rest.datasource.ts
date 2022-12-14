import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Survey } from "./survey.model";
import { SurveyInfo } from "./surveyInfo.model";
import { Answer } from "./answer.model";
import { map, switchMap } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './user.model';


const PROTOCOL = "http";
const PORT = 3500;
@Injectable()
export class RestDataSource {
  user: User;
  baseUrl: string;
  auth_token!: string;

  private httpOptions =
  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    })
  };

  constructor(private http: HttpClient,
              private jwtService: JwtHelperService) {
    this.user = new User();
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;

    //this.baseUrl = `https://comp229004-f22-easysurvey.onrender.com/`;
  }
  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(this.baseUrl + "survey/get");
  }
  saveAnswer(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(this.baseUrl + "answers/add", answer);
  }

  authenticate(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login/', user, this.httpOptions);
  }


storeUserData(token: any, user: User): void{
    // * 'bearer ' not needed for deploy on heroku
    // localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.auth_token = token;
    this.user = user;
}

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + "users/");
}
logout(): Observable<any>{
    this.auth_token = null;
    this.user = null;
    localStorage.clear();

    return this.http.get<any>(this.baseUrl + 'logout/', this.httpOptions);
}
loggedIn(): boolean
  {
    return !this.jwtService.isTokenExpired(this.auth_token);
  }

registerUser(user: User): Observable<any> {
    return this.http.post<User>( this.baseUrl + 'processregister/', user, this.httpOptions);
}

updateUser(user: User): Observable<any> {
    this.loadToken();
    return this.http.post<User>( this.baseUrl + 'update/', user, this.httpOptions);
}

  // updates the headers with the bearer token
private loadToken(): void{
    const token = localStorage.getItem('id_token');
    this.auth_token = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.auth_token);
}

saveSurvey(survey: Survey): Observable<Survey> {
  return this.http.post<Survey>(this.baseUrl + "survey/add",
      survey, this.httpOptions);
}
updateSurvey(survey: Survey): Observable<Survey> {
  return this.http.put<Survey>(`${this.baseUrl}survey/update/${survey.id}/`,
      survey, this.httpOptions);
}
deleteSurvey(id: number): Observable<Survey> {
  return this.http.delete<Survey>(`${this.baseUrl}survey/delete/${id}/`,
      this.httpOptions);
}
getAnswers(): Observable<Answer[]> {
  return this.http.get<Answer[]>(this.baseUrl + "answers/", this.httpOptions);
}
deleteAnswer(id: number): Observable<Answer> {
  return this.http.delete<Answer>(`${this.baseUrl}answers/${id}/`,
      this.httpOptions);
}
updateAnswer(answer: Answer): Observable<Answer> {
  return this.http.put<Answer>(`${this.baseUrl}answers/${answer.id}/`,
      answer, this.httpOptions);
}
private getOptions() {
  return {
      headers: new HttpHeaders({
          "Authorization": `Bearer<${this.auth_token}>`
      })
  }
}
}
