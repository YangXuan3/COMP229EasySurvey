import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AnswerRepository } from "../model/answer.repository";
import { Answer } from "../model/answer.model";

@Component({
  templateUrl: "answer.component.html",
    //styleUrls: ["answer.component.css"]
})
export class AnswerComponent {
  answerSent: boolean = false;
  submitted: boolean = false;
  constructor(public repository: AnswerRepository,
              public answer: Answer) {}
  submitAnswer(form: NgForm) {
      this.submitted = true;
      if (form.valid) {
          this.repository.saveAnswer(this.answer).subscribe(answer => {
              this.answer.clear();
              this.answerSent = true;
              this.submitted = false;
          });
      }
  }
}
