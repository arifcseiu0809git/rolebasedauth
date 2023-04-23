import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  apiurl='http://localhost:3000/user';

  Proceedregister(inputdata:any)
  {
    return this.http.post(this.apiurl,inputdata)
  }

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }

  Getall(){
    return this.http.get(this.apiurl);
  }

  GetbyCode(code: any){
    return this.http.get(this.apiurl+'/'+code);
  }
 
  GelAllRole()
  {
    return this.http.get('http://127.0.0.1:3000/role');
  }

  updateuser(code:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+code,inputdata);
  }

  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  GetAllCustomer(){
    return this.http.get('http://127.0.0.1:3000/customer');
  }
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://127.0.0.1:3000/roleaccess?role='+role+'&menu='+menu)
  }
}
