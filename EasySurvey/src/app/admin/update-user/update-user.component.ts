import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User;
  public errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user.password = '';
    this.user.newPassword = '';
  }

  onUpdateSubmit(form: NgForm): void {

    if (form.valid)
    {
      // So the user can update info without changing password
      if (this.user.newPassword === '' || this.user.newPassword === null) {
        this.user.newPassword = this.user.password;
      }
      this.authService.updateUser(this.user).subscribe(data => {
        if (data.success) {
          localStorage.setItem('user', JSON.stringify(this.user));
          // this.router.navigate(['/']);
        } else
        {
          this.errorMessage = 'Form Data Invalid';
        }
      });

      this.user.newPassword = '';
    }
  }


}
