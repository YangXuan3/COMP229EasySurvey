import { Injectable } from "@angular/core";
import { User } from "./user.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
@Injectable()
export class UserRepository {
    private users: User[] = [];
    constructor(private dataSource: RestDataSource) {
        dataSource.getUsers().subscribe(data => {
            this.users = data;
        });
    }
    getUsers(type: string = ""): User[] {
        return this.users;
    }
    getUser(id: string): User {
        return(this.users.find(p => p.id == id)!);
    }
    saveUser(user: User) {
      if (user.id == null || user.id == "") {
          this.dataSource.registerUser(user)
              .subscribe(p => this.users.push(p));
      } else {
          this.dataSource.updateUser(user)
              .subscribe(p => {
                  this.users.splice(this.users.
                      findIndex(p => p.id == user.id), 1, user);
              });
      }
  }
}
