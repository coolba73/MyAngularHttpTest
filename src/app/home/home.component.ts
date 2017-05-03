import { Component, OnInit } from '@angular/core';
import { LoginService } from "../_service/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
     private _loginSvc : LoginService
    ,private _router : Router
    ) { }

  ngOnInit() {
    if ( !this._loginSvc.CheckLogin())
    {
      this._router.navigate(['./adduser']);
    }
  }
}
