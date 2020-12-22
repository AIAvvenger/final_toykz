import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
myEmail = "Your email...";
myCard = "4561 7521 5854 4812";
  onSubmit(value: any){
     console.log(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
