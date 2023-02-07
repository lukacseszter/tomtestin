/*
* File: main.component.spec.ts
* Author: Lukács Eszter
* Copyright: 2023, Lukács Eszter
* Group: Szoft II N
* Date: 2023-02-07
* Github: https://github.com/lukacseszter/
* Licenc: GNU GPL
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
