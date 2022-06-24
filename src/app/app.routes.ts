import { PerfisComponent }              from './Views/perfis/perfis.component';
import { Routes, RouterModule }         from '@angular/router';
import { HomeComponent }                from './Views/home/home.component';
import { RegrasComponent }              from './Views/regras/regras.component';
import { RelatorioComponent }           from './Views/relatorio/relatorio.component';
import { MonitorComponent }             from './Views/monitor/monitor.component';
import { ConfiguracaoRegrasComponent }  from './Views/configuracao-regras/configuracao-regras.component';


export const ROUTES: Routes = [
  {path: '#',         component: HomeComponent              },
  {path: 'inicio',    component: HomeComponent              },
  {path: 'perfis',    component: PerfisComponent            },
  {path: 'monitor',   component: MonitorComponent           },
  {path: 'configura', component: ConfiguracaoRegrasComponent},
  {path: 'regras',    component: RegrasComponent            },
  {path: 'relatorio', component: RelatorioComponent         },
]

export class RoutesModule {
 }
