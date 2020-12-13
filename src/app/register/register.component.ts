import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from  '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private builder: FormBuilder, private userService: UserService, private router: Router) { }

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
    let data = this.registerForm.value
    let user: User = new User(data.id,data.name,data.email,data.username,data.password)
    this.userService.registerUser(user).subscribe(()=>
    this.router.navigate(['/shop']) );
    }

}
