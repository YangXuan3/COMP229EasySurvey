import { Injectable } from "@angular/core";
import { SurveyInfo } from "./surveyInfo.model";
@Injectable()
export class Answer {
    public id!: number;
    public name!: string;
    public a1!: string;
    public a2!: string;
    public a3!: string;
    public a4!: string;
    public a5!: string;
    public confirmed: boolean = false;
    constructor(public surveyInfo: SurveyInfo) { }
    clear() {
        this.id = 0;
        this.name = this.a1 = this.a2 = "";
        this.a3 = this.a4 = this.a5 = "";
        this.confirmed = false;
        this.surveyInfo.clear();
    }
}


