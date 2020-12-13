import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }
  IsLogged = this.authService.currentUserValue

  ngOnInit(): void {
  
  }

  Logout(){
    this.authService.logout();
    this.router.navigate(['/shop']);
  }

}
