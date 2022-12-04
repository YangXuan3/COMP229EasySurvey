import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { RegisterComponent } from './register/register.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SurveyTableComponent } from "./surveyTable.component";
import { SurveyEditorComponent } from "./surveyEditor.component";
import { AnswerTableComponent } from "./answerTable.component";
import { EmailValidateDirective } from './email-validator';

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    { path: "main", component: AdminComponent, canActivate: [AuthGuard],
    
    children: [
        { path: "surveys/:mode/:id", component: SurveyEditorComponent, data: {title: 'Edit Survey'}, canActivate: [AuthGuard] },
        { path: "surveys/:mode", component: SurveyEditorComponent, data: {title: 'Add Survey'}, canActivate: [AuthGuard] },
        { path: "surveys", component: SurveyTableComponent, data: {title: 'Survey Table'}, canActivate: [AuthGuard] },
        { path: "answers", component: AnswerTableComponent, data: {title: 'Answer Table'}, canActivate: [AuthGuard] },
        { path: "**", redirectTo: "surveys" }
    ]},
    { path: 'login', component: LoginComponent, data: {title: 'Login'}},
    { path: 'register', component: RegisterComponent, data: {title: 'Register'}},
    { path: 'update', component: UpdateUserComponent,  data: {title: 'Update Account'}, canActivate: [AuthGuard]},
    { path: "**", redirectTo: "auth" }
]);
@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent,
        SurveyTableComponent, SurveyEditorComponent, AnswerTableComponent,
        LoginComponent, RegisterComponent, UpdateUserComponent, EmailValidateDirective]
})
export class AdminModule { }
