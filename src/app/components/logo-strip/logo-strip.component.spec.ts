import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoStripComponent } from './logo-strip.component';

describe('LogoStripComponent', () => {
  let component: LogoStripComponent;
  let fixture: ComponentFixture<LogoStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoStripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
