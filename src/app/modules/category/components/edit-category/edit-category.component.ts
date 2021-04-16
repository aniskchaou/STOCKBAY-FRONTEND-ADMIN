import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import CategoryMessage from 'src/app/main/messages/CategoryMessage';
import CategoryTestService from 'src/app/main/mocks/CategoryTestService';
import Category from 'src/app/main/models/Category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent extends URLLoader implements OnInit {

  model: Category


  constructor(private categoryTestService: CategoryTestService,
    private message: CategoryMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Category(0, '', '', '')
  }

  ngOnInit(): void {

    this.categoryTestService.ID.subscribe(idd => {

      this.model = this.categoryTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.categoryTestService.update(this.model)
    super.show('Confirmation', this.message.confirmations.edit, 'success')
  }

}
