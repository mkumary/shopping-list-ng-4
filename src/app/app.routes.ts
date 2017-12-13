import {Routes} from "@angular/router";
import {SiteAComponent} from "./site-a/site-a.component";
import {SiteBComponent} from "./site-b/site-b.component";
import {HomeComponent} from  "./home/home.component";
import {ProfileComponent} from  "./profile/profile.component";


 
export const appRoutes: Routes = [
  {path:'my-profile', component:ProfileComponent},
  {path:'ng-project', component:HomeComponent},
  {path: 'site-a', component: SiteAComponent},
  {path: 'site-b', component: SiteBComponent},
  {path: '**', redirectTo: '/my-profile'}
];