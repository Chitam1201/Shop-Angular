import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
islogin: boolean = true;
constructor() { }

isAuthenticates(){
  const promise = new Promise<boolean>((resovle, reject)=>{
    setTimeout(()=>resovle(this.islogin), 800);
  });
  return promise;
}

login(){
  this.islogin = true;
}
logout(){
  this.islogin = false;
}

}
