import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceScrollComponent } from './service-scroll.component';

describe('ServiceScrollComponent', () => {
  let component: ServiceScrollComponent;
  let fixture: ComponentFixture<ServiceScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceScrollComponent]
    });
    fixture = TestBed.createComponent(ServiceScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
