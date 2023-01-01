import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { slider } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slider]
})
export class AppComponent {
  _router = inject(Router);

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
