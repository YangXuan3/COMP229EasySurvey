import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { EasySurveyModule } from "./easySurvey/easySurvey.module";
import { EasySurveyComponent } from "./easySurvey/easySurvey.component";
import { AnswerComponent } from "./easySurvey/answer.component";
import { SurveyInfoDetailComponent } from "./easySurvey/surveyInfoDetail.component";
import { RouterModule } from "@angular/router";
import { EasySurveyFirstGuard } from "./easySurveyFirst.guard";
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';

export function jwtTokenGetter(): string
{
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [BrowserModule, EasySurveyModule, AppRoutingModule,
      JwtModule.forRoot({
        config: {
          tokenGetter: jwtTokenGetter
        }})
  ],
     providers: [],
    //declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
