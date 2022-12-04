import { Component,OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Survey } from "../model/survey.model";
import { SurveyRepository } from "../model/survey.repository";
@Component({
    templateUrl: "surveyEditor.component.html"
})
export class SurveyEditorComponent implements OnInit {
    editing: boolean = false;
    survey: Survey = new Survey();
    constructor(private repository: SurveyRepository,
                private router: Router,
                activeRoute: ActivatedRoute) {
                    this.editing = activeRoute.snapshot.params["mode"] === 'edit';
        if (this.editing) {
            Object.assign(this.survey,
                repository.getSurvey(activeRoute.snapshot.params["id"]));
        }
    }
    ngOnInit(): void {
    }
    save(form: NgForm) {
        this.repository.saveSurvey(this.survey);
        this.router.navigateByUrl("/admin/main/surveys");
    }
 }