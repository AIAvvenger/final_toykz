import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
  text: string = 'The number of new ads (Places, Toasters, Food, Cameraman, Enterainment)';
  numbers: number[]=[120,20,35,55,14]
  isGreen: boolean = false;

  cash: number = 560.99;
    cash1: number = 760.59;
      cash2: number = 250.55;
        cash3: number = 230.09;
          cash4: number = 890.99;

  date = new Date();

  public name="Example";
  userText: string = 'example'

  constructor() { }

  ngOnInit(): void {
  }

}
