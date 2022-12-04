import { Component } from "@angular/core";
import { SurveyInfo } from "../model/surveyInfo.model";
@Component({
    selector: "surveyInfo-summary",
    templateUrl: "surveyInfoSummary.component.html"
})
export class SurveyInfoSummaryComponent {
    constructor(public surveyInfo: SurveyInfo) { }
}
