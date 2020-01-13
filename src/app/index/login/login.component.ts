import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { AlertToastService } from 'src/app/core/toast/alert-toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    public alert: AlertToastService
  ) {}

  ngOnInit() {}

  login() {
    if (this.loginForm.invalid) {
      this.alert.warning(
        'Oops, an error has ocurred',
        'There is an error with the credentials'
      );
      return;
    }

    this.accountService.login(this.loginForm.value).subscribe(
      (res: any) => {
        if (res.success) {
          console.log('login successful');
          this.router.navigateByUrl('/dashboard');
        }
      },
      (err: any) => {
        this.alert.warning(
          err.error.message,
          'The credentials are invalid, please try again with correct information'
        );
      }
    );
  }
}
