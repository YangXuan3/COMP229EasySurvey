import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
@Injectable()
export class SurveyRepository {
    private surveys: Survey[] = [];
    private types: string[] = [];
    constructor(private dataSource: RestDataSource) {
        dataSource.getSurveys().subscribe(data => {
            this.surveys = data;
            this.types = data.map(p => p.type!)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }
    getSurveys(type: string = ""): Survey[] {
        return this.surveys
            .filter(p => type == "" || type == p.type);
    }
    getSurvey(id: number): Survey {
        return(this.surveys.find(p => p.id == id)!);
    }
    getCategories(): string[] {
        return this.types;
    }
    saveSurvey(survey: Survey) {
      if (survey.id == null || survey.id == 0) {
          this.dataSource.saveSurvey(survey)
              .subscribe(p => this.surveys.push(p));
      } else {
          this.dataSource.updateSurvey(survey)
              .subscribe(p => {
                  this.surveys.splice(this.surveys.
                      findIndex(p => p.id == survey.id), 1, survey);
              });
      }
  }
  deleteSurvey(id: number) {
      this.dataSource.deleteSurvey(id).subscribe(p => {
          this.surveys.splice(this.surveys.
              findIndex(p => p.id == id), 1);
      })
  }
}
