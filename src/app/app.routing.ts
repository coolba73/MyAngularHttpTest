import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddUserComponent } from "./User/adduser.component";

const appRoutes : Routes = [
    {path : '', component : HomeComponent  },
    {path : 'adduser', component : AddUserComponent  },
    {path : '**', redirectTo:''}
];

export const routing = RouterModule.forRoot(appRoutes);
