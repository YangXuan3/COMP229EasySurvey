import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { EasySurveyComponent } from "./easySurvey.component";
import { CounterDirective } from "./counter.directive";
import { SurveyInfoSummaryComponent } from "./surveyInfoSummary.component";
import { SurveyInfoDetailComponent } from "./surveyInfoDetail.component";
import { AnswerComponent } from "./answer.component";
import { RouterModule } from "@angular/router";
@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [EasySurveyComponent, CounterDirective, SurveyInfoSummaryComponent, SurveyInfoDetailComponent, AnswerComponent],
    exports: [EasySurveyComponent]
})
export class EasySurveyModule { }
