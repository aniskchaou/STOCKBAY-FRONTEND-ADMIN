import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) {
  }


  hasRoute(route: string) {
    return this._router.url.includes(route);
  }

  ngOnInit(): void {
  }

}
