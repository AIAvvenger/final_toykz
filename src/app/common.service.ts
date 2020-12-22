import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private __http:HttpClient) { }

  createUser(user){
    return this.__http.post("http://localhost:3000/users", user);
  }
  getAlluser(){
    return this.__http.get("http://localhost:3000/users")
  }
  updateUser(user){
    return this.__http.put("http://localhost:3000/users" + user.id, user)
  }
  deleteUser(user){
    return this.__http.delete("http://localhost:3000/users/" + user.id)
  }

}
