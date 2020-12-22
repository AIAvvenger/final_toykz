import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';



@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss'],
})
export class AdminpanelComponent implements OnInit {
  allUser: Object;
  isEdit=false;
  userObj={
    name:'',
    email:'',
    bankcard:'',
    password:'',
    id:''
  }


  constructor(private commonService:CommonService){}

  ngOninit(){
    this.getLatestUser();
  }

  addUser(formObj){
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe((response)=>{this.getLatestUser();})
  }
  getLatestUser(){
    this.commonService.getAlluser().subscribe((response)=>{this.allUser = response})
  }

  editUser(user){
    this.isEdit = true;
    this.userObj = user;
  }

  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(()=>{this.getLatestUser();})
  }

  updateUser(){
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{this.getLatestUser();})
  }


 
  ngOnInit(): void {
 
  }

}
