import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  IsLogged : boolean;
  ActiveUser: string;
  constructor(private authService: AuthService, private router:Router) { 
   
  }
  

  ngOnInit(): void {

  }

 ngDoCheck(){
  if(this.authService.currentUserValue){
    this.IsLogged =true
    this.ActiveUser= this.authService.currentUserValue.username;
  }else{
    this.IsLogged =false
  }

 }
  Logout(){
    this.authService.logout();
    this.router.navigate(['/shop']);
  }

}
