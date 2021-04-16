import { Component, OnInit } from '@angular/core';
import Company from 'src/app/main/configs/company';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import CurrentUser from 'src/app/main/configs/user';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent extends URLLoader implements OnInit {



  constructor() { super() }

  ngOnInit(): void {
    super.loadScripts()
  }

}
