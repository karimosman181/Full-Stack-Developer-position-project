import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewDetailComponent } from './create-new-detail.component';

describe('CreateNewDetailComponent', () => {
  let component: CreateNewDetailComponent;
  let fixture: ComponentFixture<CreateNewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
