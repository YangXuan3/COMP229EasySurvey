import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { EasySurveyModule } from "./easySurvey/easySurvey.module";
import { EasySurveyComponent } from "./easySurvey/easySurvey.component";
import { AnswerComponent } from "./easySurvey/answer.component";
import { SurveyInfoDetailComponent } from "./easySurvey/surveyInfoDetail.component";
import { EasySurveyFirstGuard } from "./easySurveyFirst.guard";

const routes: Routes = [
  {path: 'home', component: EasySurveyComponent, data: {title: 'Easy Survey'}},
{path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},
{path: 'surveyInfo', component: SurveyInfoDetailComponent, data: { title: 'SurveyInfo'}, canActivate: [EasySurveyFirstGuard]},
{path: 'answer', component: AnswerComponent, data: { title: 'Answer'}, canActivate: [EasySurveyFirstGuard]},
{path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: '**', redirectTo: '/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ EasySurveyFirstGuard]
})
export class AppRoutingModule { }
