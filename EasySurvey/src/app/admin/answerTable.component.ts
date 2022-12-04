import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Answer } from "../model/answer.model";
import { AnswerRepository } from "../model/answer.repository";
@Component({
    templateUrl: "answerTable.component.html"
})
export class AnswerTableComponent implements OnInit{ 
    includeConfirmed = false;
    constructor(private repository: AnswerRepository,
        private router: Router) {}
    
    ngOnInit(): void {
    }

    getAnswers(): Answer[] {
        return this.repository.getAnswers()
            .filter(o => this.includeConfirmed || !o.confirmed);
    }
    markConfirmed(answer: Answer) {
        answer.confirmed = true;
        this.repository.updateAnswer(answer);
    }
    delete(id: number) {
        this.repository.deleteAnswer(id);
    }
}