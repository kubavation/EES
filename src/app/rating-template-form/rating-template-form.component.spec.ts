import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingTemplateFormComponent } from './rating-template-form.component';

describe('RatingTemplateFormComponent', () => {
  let component: RatingTemplateFormComponent;
  let fixture: ComponentFixture<RatingTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
