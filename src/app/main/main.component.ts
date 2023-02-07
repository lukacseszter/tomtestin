/*
* File: main.components.ts
* Author: Lukács Eszter
* Copyright: 2023, Lukács Eszter
* Group: Szoft II N
* Date: 2023-02-07
* Github: https://github.com/lukacseszter/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  weightone !: FormGroup;
  weighttwo !: number;

  ngOnInit(): void {
    this.weightone = new FormGroup({
      weight: new FormControl(0),
      height: new FormControl(0)
    });
  }

  getweightone() {
    const {weight, height} = this.weightone.value;
    this.weighttwo = weight / Math.pow(height, 2);
  }

  onKeyup(event: any) {
    console.log(event.key);
    if (event.key === "Enter")
    {console.log("Gomb megnyomásra került")};
  }
}


