import { Injectable } from '@angular/core';

import { PoI18nConfig, PoI18nService } from '@po-ui/ng-components';

import { literalsPtBR } from '../i18n/classificador-PtBR';
import { literalsEnUS } from '../i18n/classificador-EnUS';
import { literalsEsES } from '../i18n/classificador-EsES';
import { literalsRuRU } from '../i18n/classificador-RuRU';
import { LiteralsWords } from '../i18n/literals.model';

export const i18nConfig: PoI18nConfig = {
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

@Injectable()
export class LiteralsService {
  language: string = navigator.language;
  literalService: any;
  literals: any;

  constructor(thfI18nService: PoI18nService) {
    const fixLanguage = this.language.substr(0, 2).toLowerCase();

    if (fixLanguage === 'en') {
      this.language = 'en-US';
    } else if (fixLanguage === 'pt') {
      this.language = 'pt-BR';
    } else if (fixLanguage === 'es') {
      this.language = 'es-ES';
    } else if (fixLanguage === 'ru') {
      this.language = 'ru-RU';
    }

  thfI18nService
      .getLiterals({ language: this.language })
  }

  getLiteralModule(): LiteralsWords  {
    return this.literals;
  };
}
