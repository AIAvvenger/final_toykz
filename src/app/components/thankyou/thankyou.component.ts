import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor(private _router: Router) { }

  toCancel():void{
    this._router.navigate(['/checkout']);
  }
  

  ngOnInit(): void {
  }

}
