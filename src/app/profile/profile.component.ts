import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';	
let clevertap = (<any>window).clevertap;  

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(router: Router) {

    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });

  }
   ngOnInit() {
     clevertap.event.push('e');
  }
  scrollTo($event){
    window.scrollTo(0,document.querySelector($event.target.getAttribute('ng-href')).offsetTop);
  }

}
