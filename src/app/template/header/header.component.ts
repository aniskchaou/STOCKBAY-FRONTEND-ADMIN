import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/main/security/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router, private authService: AuthentificationService) {
  }


  hasRoute(route: string) {
    return this._router.url.includes(route);
  }

  ngOnInit(): void {
  }

  logOut()
  {
    this.authService.logOut()
    this._router.navigate(['login'])
  }
}
