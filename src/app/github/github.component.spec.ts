/*
* File: github.component.spec.ts
* Author: Lukács Eszter
* Copyright: 2023, Lukács Eszter
* Group: Szoft II N
* Date: 2023-02-07
* Github: https://github.com/lukacseszter/
* Licenc: GNU GPL
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubComponent } from './github.component';

describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
