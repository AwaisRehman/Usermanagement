import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm =this.formBuilder.group({
    email:['',[Validators.email,Validators.required]],
    password:['',Validators.required]
  })
  constructor(private formBuilder:FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("on Submit");

 let  payLoad:any = {
    email : this.loginForm.controls["email"].value,
    password:this.loginForm.controls["password"].value,
 }

    this.userService.login(payLoad).subscribe( res=>{
      console.log(res.dataSet.token)
      localStorage.setItem('token', res.dataSet.token )
    })

    // if (payLoad.ResponseCode == 1) 
    // {
    //   localStorage.setItem("userInfo",JSON.stringify(payLoad.gem));
    //   this.router.navigate(["/user-mana
    //   );
     
    // }
   
  }

}
