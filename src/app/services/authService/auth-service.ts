import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  listUser : User[] = [
    {
      email : "admin",
      password : "test1234",
      username : "admin",
      role : 'admin'
    },
    {
      email : "user",
      password : "test1234",
      username : "user",
      role : "user"
    }
  ]

  // signaux du service
  isLogged = signal(false);
  isAdmin = signal(false);

  constructor(){
    const isAdmin = localStorage.getItem("isAdmin")
    const isLogged = localStorage.getItem("isLogged")

    if(isAdmin == "true")
    {
      this.isAdmin.set(true)
    }

    if(isLogged == "true")
    {
      this.isLogged.set(true)
    }
  }

  register()
  {

  }

  login(email : string , password : string)
  {
    const index = this.listUser.findIndex(u => u.email == email && u.password == password)
    if(index !== -1)
    {
      this.isLogged.set(true);
      localStorage.setItem("isLogged","true")
      // localstorage : zone de memoire du navigateur
      // localStorage.setItem("role" , "admin")
      // localStorage.getItem("role")
      // localStorage.removeItem("role")
      // localStorage.clear()

      const role = this.listUser[index].role;
      if(role == "admin")
      {
        this.isAdmin.set(true)
        localStorage.setItem("isAdmin","true")
      }
    }
  }

  logout()
  {
    this.isLogged.set(false)
   localStorage.setItem("isLogged","false") 

    this.isAdmin.set(false)
    localStorage.setItem("isAdmin","false")
  }
}
