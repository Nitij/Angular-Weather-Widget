import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidgetMainComponent } from './weather-widget-main.component';

describe('WeatherWidgetMainComponent', () => {
  let component: WeatherWidgetMainComponent;
  let fixture: ComponentFixture<WeatherWidgetMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherWidgetMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
