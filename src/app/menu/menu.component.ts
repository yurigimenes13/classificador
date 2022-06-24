import { LiteralsWords } from 'src/app/i18n/literals.model';
import { LiteralsService } from '../services/literals.service';
import { ProAppConfigService } from 'protheus-lib-core';
import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  literals: LiteralsWords;
  menus: Array<PoMenuItem>;

  constructor(
    private literalService: LiteralsService,
    private configService: ProAppConfigService
  ) {
    this.literals = this.literalService.getLiteralModule();
    this.menus = this.menuOpc();
   }

   menuOpc(): Array<PoMenuItem> {
    return[
      {
        label: 'Iní­cio',
        link: 'inicio'
      },
      {
        label: 'Perfis',
        link: 'perfis'
      },
      {
        label: 'Monitor de perfis',
        link: 'monitor'
      },
      {
        label: 'Configuração das regras',
        link: 'configura'
      },
      {
        label: 'Regras',
        link: 'regras'
      },
      {
        label: 'Relatório',
        link: 'relatorio'
      }
    ]

  }

  ngOnInit(): void {
    this.MontaMenu()
  }
  MontaMenu() {
    this.menus = this.menuOpc();
  }

}
