import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) {

  }
  onBackButtonClick():void{
    this._router.navigate(['/login']);
  }
  toRestaurant():void{
    this._router.navigate(['/store']);
  }
  toCheckout():void{
    this._router.navigate(['/checkout']);
  }


  ngOnInit(): void {
  }

}
