import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ClientMessage from 'src/app/main/messages/ClientMessage';
import ClientTestService from 'src/app/main/mocks/ClientTestService';
import ClientValidation from 'src/app/main/validations/ClientValidation';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent extends URLLoader implements OnInit {

  clientForm: FormGroup
  msg: ClientMessage
  submitted = false


  get f() { return this.clientForm.controls; }

  constructor(private validation: ClientValidation, private message: ClientMessage, private clientTestService: ClientTestService) {
    super()
    this.clientForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.clientForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.clientTestService.create(this.clientForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')

    }
  }
}
