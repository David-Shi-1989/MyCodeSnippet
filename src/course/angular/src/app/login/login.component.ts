import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[id=login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: String = 'admin'
  password: String = ''
  message: String = '这个人很懒，什么也没留下'

  constructor() { }

  ngOnInit() {
  }
  onLoginClick () {
    alert('登录按钮click ' + this.username + ',' + this.password)
  }
  onRegisterClick () {
    alert('注册按钮click ' + this.username + ',' + this.password)
  }
}
