import { Component, OnInit } from '@angular/core';
import Company from 'src/app/main/configs/company';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import CurrentUser from 'src/app/main/configs/user';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent extends URLLoader implements OnInit {

  company = new Company()
  user = new CurrentUser()

  constructor() { super() }

  ngOnInit(): void {
    super.loadScripts()
  }

}
