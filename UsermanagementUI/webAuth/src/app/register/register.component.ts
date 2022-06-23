import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm =this.formBuilder.group({
    fullName:['',[Validators.required]],
    email:['',[Validators.email,Validators.required]],
    password:['',Validators.required]
  })
  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("on Submit");

 let  payLoad = {
    fullName :this.registerForm.controls["fullName"].value,
    email : this.registerForm.controls["email"].value,
    password:this.registerForm.controls["password"].value,
 }

    this.userService.register(payLoad).subscribe( res=> console.log(res))
   
  }

  

}
