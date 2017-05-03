import { Component, OnInit } from "@angular/core";
import { LoginService } from "../_service/login.service";

@Component({
    selector : 'user-adduser',
    templateUrl : './adduser.component.html'
})
export class AddUserComponent implements OnInit{

    constructor(private _logSvc : LoginService){}

    ngOnInit() {
        
    }

    public btnAddClick()
    {
        this._logSvc.CreateUser("testid","testname", "1234").subscribe(
            data => console.log(data),
            error => console.log(error)
        );
    }
    
}