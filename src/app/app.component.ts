import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    router: Router
  ) {
    const navEndEvent$ = router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );
    navEndEvent$.subscribe((e: NavigationEnd) => {
      gtag('config', 'G-0X51F76LV0', {
        page_path : e.urlAfterRedirects
      });
    });
  }

}
