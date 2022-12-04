import { Component } from "@angular/core";
import { SurveyInfo } from "../model/surveyInfo.model";
@Component({

  templateUrl: "surveyInfoDetail.component.html"
})


export class SurveyInfoDetailComponent {
  constructor(public surveyInfo: SurveyInfo) { }
}
