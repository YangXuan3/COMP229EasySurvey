import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { Observable, from } from "rxjs";
import { Answer } from "./answer.model";
@Injectable()
export class StaticDataSource {
    
    private surveys: Survey[] = [
        new Survey(1, "Survey 1", "Type 1", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(2, "Survey 2", "Type 1", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(3, "Survey 3", "Type 1", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(4, "Survey 4", "Type 1", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(5, "Survey 5", "Type 1", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(6, "Survey 6", "Type 2", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(7, "Survey 7", "Type 2", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(8, "Survey 8", "Type 2", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(9, "Survey 9", "Type 2", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(10, "Survey 10", "Type 2", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(11, "Survey 11", "Type 3", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(12, "Survey 12", "Type 3", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(13, "Survey 13", "Type 3", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(14, "Survey 14", "Type 3", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
        new Survey(15, "Survey 15", "Type 3", "2022-11-26", "2022-12-20","q1","q2","q3","q4","q5"),
    ];
    getSurveys(): Observable<Survey[]> {
        return from([this.surveys]);
    }
    saveAnswer(answer: Answer): Observable<Answer> {
      console.log(JSON.stringify(answer));
      return from([answer]);
  }
}
