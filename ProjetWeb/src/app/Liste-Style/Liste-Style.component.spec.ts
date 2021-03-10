/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListeStyleComponent } from './Liste-Style.component';

describe('ListeStyleComponent', () => {
  let component: ListeStyleComponent;
  let fixture: ComponentFixture<ListeStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
