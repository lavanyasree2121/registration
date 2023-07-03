import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regform!:FormGroup
  constructor( private fb:FormBuilder){}
   ngOnInit():void{
    this.regform=this.fb.group({
      uname:new FormControl("",[Validators.required,Validators.minLength(5)]),
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.minLength(8)]),
      confirmpassword:new FormControl("",[Validators.required]),
      gender:new FormControl(),
      subscribe:new FormControl(),
    },
    { validators:this.passwordMatch});
  }
passwordMatch(regform:FormGroup){
  return regform.controls['password'].value && regform.controls
  ['password'].value === regform.controls['confirmpassword'].value ? regform.controls
  ['confirmpassword'].setErrors(null) : regform.controls['confirmpassword'].setErrors({'misMatch':true})
  
}
show(){
  console.log(this.regform);
  this.regform.reset()
}
}
