import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkerComponent } from './home-worker.component';

describe('HomeWorkerComponent', () => {
  let component: HomeWorkerComponent;
  let fixture: ComponentFixture<HomeWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
