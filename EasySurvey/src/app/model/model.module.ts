import { NgModule } from "@angular/core";
import { SurveyRepository } from "./survey.repository";
import { StaticDataSource } from "./static.datasource";
import { SurveyInfo } from "./surveyInfo.model";
import { Answer } from "./answer.model";
import { AnswerRepository } from "./answer.repository";
import { User } from "./user.model";
import { UserRepository } from "./user.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [SurveyRepository, SurveyInfo, Answer, AnswerRepository, User, UserRepository,
    { provide: StaticDataSource, useClass: RestDataSource }, RestDataSource, AuthService]
})
export class ModelModule { }
