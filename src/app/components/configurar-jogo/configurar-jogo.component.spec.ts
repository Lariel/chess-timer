import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurarJogoComponent } from './configurar-jogo.component';

describe('ConfigurarJogoComponent', () => {
  let component: ConfigurarJogoComponent;
  let fixture: ComponentFixture<ConfigurarJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurarJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
