import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { ShoppinglistComponent } from './main-container/shoppinglist/shoppinglist.component';
import { ReciepeBookComponent } from './main-container/recipes/reciepe-book.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ReciepeComponent } from './main-container/recipes/recipe-list/recipe-item/reciepe.component';
import { RecipeDetailComponent } from './main-container/recipes/recipe-list/recipe-detail/recipe-detail.component';
import { ReceipeListComponent } from './main-container/recipes/recipe-list/receipe-list.component';
import { ShoppingEditComponent } from './main-container/shoppinglist/shopping-edit/shopping-edit.component';
import { SiteAComponent } from './site-a/site-a.component';
import { SiteBComponent } from './site-b/site-b.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {GoogleAnalyticsEventsService} from "./google-analytics-events.service";
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileHeaderComponent } from './profile/profile-header/profile-header.component';
import { HeighlightTextDirective } from './heighlight-text.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ReciepeBookComponent,
    MainContainerComponent,
    ReciepeComponent,
    RecipeDetailComponent,
    ReceipeListComponent,
    ShoppingEditComponent,
    SiteAComponent,
    SiteBComponent,
    HomeComponent,
    ProfileComponent,
    ProfileHeaderComponent,
    HeighlightTextDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [
GoogleAnalyticsEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
