import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, RouterStateSnapshot,
    Router
} from "@angular/router";
import { EasySurveyComponent } from "./easySurvey/easySurvey.component";
@Injectable()
export class EasySurveyFirstGuard {
    private firstNavigation = true;
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != EasySurveyComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}
