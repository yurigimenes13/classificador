import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoRegrasComponent } from './configuracao-regras.component';

describe('ConfiguracaoRegrasComponent', () => {
  let component: ConfiguracaoRegrasComponent;
  let fixture: ComponentFixture<ConfiguracaoRegrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracaoRegrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoRegrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
