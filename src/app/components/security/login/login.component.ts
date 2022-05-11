import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/security/login.model';
import { LoginService } from 'src/app/services/security/login/login.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  dateToday: any = new Date();
  constructor(
    private router: Router,
    private loginService: LoginService,
    private messageService: MessageService,
    private datePipe: DatePipe
  ) { 
   this.dateToday = this.datePipe.transform(this.dateToday, 'MM/dd/yyyy');
  }

  isProcessing: boolean = false;
  loginModel: LoginModel = {
    username: "",
    password: ""
  };

  signIn() {
    this.isProcessing = true;
    let date_now: any = this.datePipe.transform(new Date(this.dateToday), 'MM/dd/yyyy')
    this.loginService.userlogin(this.loginModel).subscribe(
      response => {
        let data = response;
        if (data != null) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user_id', data.data.id);
          localStorage.setItem('warehouse_id', data.data.warehouse_id);
          localStorage.setItem('user_type', data.data.user_type);
          localStorage.setItem('email', data.data.email);
          localStorage.setItem('dateToday', date_now);
          this.messageService.add({
            severity: 'success',
            summary: 'Login Successful',
            detail: 'You have successfully logged in your account.'
          })

          location.reload();
        }
      }, (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: error.error.message
        });
        this.isProcessing = false;
      })
  }

  ngOnInit(): void {
  }
}
