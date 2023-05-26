import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from '../models/survey.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://localhost:3201/api/";

  constructor
  (
    private http: HttpClient
  ) { }

  getSurveys(): Observable<Survey[]>
  {
    return this.http.get<Survey[]>(this.url + "get-surveys");
  }

  postSurvey(newSurvey: Survey)
  {
    return this.http.post<Survey>(this.url + "post-survey", newSurvey);
  }

  putSurvey(editedSurvey: Survey, id: number)
  {
    return this.http.put<Survey>(this.url + id, editedSurvey);
  }

  deleteSurvey(id: number)
  {
    return this.http.delete<Survey>(this.url + id);
  }
  // postSurvey(data:any){
  //   return this.http.post<any>("http://localhost:3000/posts/", data).pipe(map((res:any)=>{
  //     return res;
  //   }));
  // }

  // getSurvey(){
  //   return this.http.get<any>("http://localhost:3000/posts/").pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  // //update and delete require id number to track the http://localhost:3000/posts/id
  // updateSurvey(data:any,id:number){
  //   return this.http.put<any>("http://localhost:3000/posts/" + id, data).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  // deleteSurvey(id:number){
  //   return this.http.delete<any>("http://localhost:3000/posts/" + id).pipe(map((res:any)=>{
  //     return res;
  //   }))  
  // }

}

