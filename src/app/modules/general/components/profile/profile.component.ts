import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
    super.loadScripts();
  }

}
