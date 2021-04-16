import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  public router: string;

  constructor(private _router: Router) {
  }


  hasRoute(route: string) {
    return this._router.url.includes(route);
  }

  ngOnInit(): void {
  }

}
