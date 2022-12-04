import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Answer } from "./answer.model";
import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
@Injectable()
export class AnswerRepository {
    private answers: Answer[] = [];
    private loaded: boolean = false;
    constructor(private dataSource: RestDataSource) {}
    loadAnswers() {
      this.loaded = true;
      this.dataSource.getAnswers()
          .subscribe(answers => this.answers = answers);
  }
    getAnswers(): Answer[] {
      if (!this.loaded) {
        this.loadAnswers();
    }
        return this.answers;
    }
    saveAnswer(answer: Answer): Observable<Answer> {
        return this.dataSource.saveAnswer(answer);
    }
    updateAnswer(answer: Answer) {
      this.dataSource.updateAnswer(answer).subscribe(answer => {
          this.answers.splice(this.answers.
              findIndex(o => o.id == answer.id), 1, answer);
      });
  }
  deleteAnswer(id: number) {
      this.dataSource.deleteAnswer(id).subscribe(answer => {
          this.answers.splice(this.answers.findIndex(o => id == o.id), 1);
      });
}
}
