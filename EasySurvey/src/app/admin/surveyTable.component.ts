import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Survey } from "../model/survey.model";
import { SurveyRepository } from "../model/survey.repository";
@Component({
    templateUrl: "surveyTable.component.html"
})
export class SurveyTableComponent implements OnInit {
    constructor(private repository: SurveyRepository,
        private router: Router) { }
    ngOnInit(): void {
    }
    getSurveys(): Survey[] {
        return this.repository.getSurveys();
    }
    deleteSurvey(id: number) {
        this.repository.deleteSurvey(id);
        
    }
}