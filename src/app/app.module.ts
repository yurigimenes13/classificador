import { LOCALE_ID, NgModule }  from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule }         from '@angular/router';
import { registerLocaleData }   from '@angular/common';

import localeUs from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';
import localePt from '@angular/common/locales/pt';
import localeRu from '@angular/common/locales/ru';

import { PoI18nConfig, PoI18nModule, PoModule } from '@po-ui/ng-components';

import { LiteralsService }      from './services/literals.service';

import { MenuComponent }    from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { HomeComponent }    from './Views/home/home.component';
import { ROUTES }           from './app.routes';
import { literalsEnUS }     from './i18n/classificador-EnUS';
import { literalsEsES }     from './i18n/classificador-EsES';
import { literalsPtBR }     from './i18n/classificador-PtBR';
import { literalsRuRU }     from './i18n/classificador-RuRU';
import { PerfisComponent }  from './Views/perfis/perfis.component';
import { MonitorComponent } from './Views/monitor/monitor.component';
import { RegrasComponent }  from './Views/regras/regras.component';
import { RelatorioComponent }           from './Views/relatorio/relatorio.component';
import { ConfiguracaoRegrasComponent }  from './Views/configuracao-regras/configuracao-regras.component';

registerLocaleData(localePt);
registerLocaleData(localeEs);
registerLocaleData(localeUs);
registerLocaleData(localeRu);

const i18nConfig: PoI18nConfig = {
  default: {
    language: 'pt-BR',
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': literalsPtBR,
      'en-US': literalsEnUS,
      'es-ES': literalsEsES,
      'ru-RU': literalsRuRU
    }
  }
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PerfisComponent,
    MonitorComponent,
    ConfiguracaoRegrasComponent,
    RegrasComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoI18nModule.config(i18nConfig),
    RouterModule.forRoot(ROUTES, {
      useHash: false,
      relativeLinkResolution: 'legacy'
    })
  ],
  providers: [
    {provide: LOCALE_ID, useValue: navigator.language},
    LiteralsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
