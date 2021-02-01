import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
  }

  add() {
    super.show('StockBay', 'cette fonctionnalité est en cours de développement.', 'warning')
  }
}
