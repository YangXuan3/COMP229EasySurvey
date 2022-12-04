import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
@Injectable()
export class SurveyInfo {
    public lines: SurveyInfoLine[] = [];
    public nickname: string="";
    public surveyToAnswer: Survey;
    addLine(survey: Survey, nickname: string = "") {
        let line = this.lines.find(line => line.survey.id == survey.id);
        if (line != undefined) {
            line.nickname = nickname;
        } else {
            this.lines.push(new SurveyInfoLine(survey, nickname));
        }
        this.surveyToAnswer=survey;
    }
    updateNickname(survey: Survey, nickname: string) {
        let line = this.lines.find(line => line.survey.id == survey.id);
        if (line != undefined) {
            line.nickname = String(nickname);
            this.nickname=nickname;
        }
    }
    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.survey.id == id);
        this.lines.splice(index, 1);
    }
    clear() {
        this.lines = [];
    }
}
export class SurveyInfoLine {
    constructor(public survey: Survey,
        public nickname: string) {}
    get lineName() {
        return this.nickname!;
    }
}
