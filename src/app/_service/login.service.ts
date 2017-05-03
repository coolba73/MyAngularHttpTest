import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService{
    constructor( private _http:Http){}

    CreateUser(UserId:string, UserName:string, Password:string){
        let url = 'http://localhost:51047/api/Values';
        let body = JSON.stringify({
            ID : UserId,
            Name : UserName,
            Password : Password
        });

        // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: "post" });

        return this._http.post(url, body, options).map(res=>res.json()).catch(this.handleError);
        
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

    CheckLogin() : boolean{
        return false;
    }

}