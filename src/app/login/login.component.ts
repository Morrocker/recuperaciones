import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ILogin, LoginResp  } from '../login';
import { LoginService  } from '../login.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginResp: LoginResp;
  loginForm: FormGroup;
  formData = new ILogin();
  message: string;
  loginState: string;
  id;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public authService: AuthService,
    private loginService: LoginService,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authService.logout();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    } else {
      this.formData = this.loginForm.value;
      // this.loginService.requestLogin(this.formData).subscribe( resp => this.loginResp = resp );
      this.loginResp = this.loginService.requestLogin2(this.formData);
      if ( this.loginResp.authLogin === true ) {
        console.log('Login successful');
        // this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', `${this.loginResp.userId}`);
        localStorage.setItem('isAdmin', `${this.loginResp.isAdmin}`);
        this.router.navigate([`/dashboard`]);
      } else {
        this.message = 'Verificar correo o contrasena';
      }
    }
  }
}
