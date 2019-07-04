/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserRatingformComponent } from './user-ratingform.component';

describe('UserRatingformComponent', () => {
  let component: UserRatingformComponent;
  let fixture: ComponentFixture<UserRatingformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRatingformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRatingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
