import { Component } from '@angular/core';

import {
  PoButtonModule,
  PoFieldModule,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'home-root',
  standalone: true,
  imports: [
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    PoButtonModule,
    PoFieldModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

}
