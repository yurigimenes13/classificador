import { Component, OnInit } from '@angular/core';

import { ProAppConfigService } from 'protheus-lib-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private configService: ProAppConfigService  ) {}

  title = 'Classificador Fiscal';

  ngOnInit(): void {
    this.configService.loadAppConfig();
  }
}
