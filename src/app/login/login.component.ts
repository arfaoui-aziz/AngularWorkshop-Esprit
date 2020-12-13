import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}
    error = '';

  constructor(private authService: AuthService,private router: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }

  login() {
   

    this.authService.login(this.model.username, this.model.password)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['/shop',data.id]);
            console.log(data);
            
        },
        error => {
            this.error = "Username or password is incorrect";
        });

  }

}
