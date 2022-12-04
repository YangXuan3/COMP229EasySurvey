import { Component } from "@angular/core";
import { Survey } from "../model/survey.model";
import { SurveyRepository } from "../model/survey.repository";
import { SurveyInfo } from "../model/surveyInfo.model";
import { Router } from "@angular/router";
@Component({
    selector: "easySurvey",
    templateUrl: "easySurvey.component.html"
})
export class EasySurveyComponent {
  public selectedType = "";
  public surveysPerPage = 4;
  public selectedPage = 1;
    constructor(private repository: SurveyRepository,
      private surveyInfo: SurveyInfo, private router: Router) { }
    get surveys(): Survey[] {
      let pageIndex = (this.selectedPage - 1) * this.surveysPerPage
        return this.repository.getSurveys(this.selectedType)
            .slice(pageIndex, pageIndex + this.surveysPerPage);
    }
     //return this.repository.getSurveys(this.selectedType);
    //}
    get types(): string[] {
        return this.repository.getCategories();
    }
    changeType(newType: string="") {
      this.selectedType = newType;
  }
  changePage(newPage: number) {
    this.selectedPage = newPage;
}
changePageSize(newSize: number) {
    this.surveysPerPage = Number(newSize);
    this.changePage(1);
}
get pageCount(): number {
  return Math.ceil(this.repository
      .getSurveys(this.selectedType).length / this.surveysPerPage)
}
addSurveyToSurveyInfo(survey: Survey) {
  this.surveyInfo.addLine(survey);
  this.router.navigateByUrl("/surveyInfo");
}
//get pageNumbers(): number[] {
  //  return Array(Math.ceil(this.repository
    //    .getSurveys(this.selectedType).length / this.surveysPerPage))
      //      .fill(0).map((x, i) => i + 1);
//}

}

