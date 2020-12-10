import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from  '@angular/forms';

/**
 *
 * @param form
 */

function passwordsMatchValidator(form) {
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if(password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true })
  } else {
    confirmPassword.setErrors(null)
  }

  return null
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.registerForm =this.builder.group({
    name: ['', Validators.required],
    email: ['',[Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5)] ],
    confirmPassword: ''

    },{
      validators: passwordsMatchValidator
    })
  }

  register(){
    console.log(this.registerForm.value);
    
  }

}
