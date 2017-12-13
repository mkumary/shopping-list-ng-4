import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {GoogleAnalyticsEventsService} from "./google-analytics-events.service";
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
username ='';
	constructor(public router: Router, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    })
}
  
  onbuttonCLicked(){
    this.username = '';
  }
  submitEvent() {
    this.googleAnalyticsEventsService.emitEvent("testCategory", "testAction", "testLabel", 10);
  }
}
