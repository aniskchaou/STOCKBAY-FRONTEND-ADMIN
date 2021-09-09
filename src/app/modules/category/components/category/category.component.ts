import { Component, OnInit } from '@angular/core';
import CategoryMessage from 'src/app/main/messages/CategoryMessage';
import CategoryTestService from 'src/app/main/mocks/CategoryTestService';
import { URLLoader } from '../../../../main/configs/URLLoader';
import showMessage from '../../../../main/notification/notification'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  categorys$
  id = 0


  constructor(private categoryTestService: CategoryTestService, private messageService: CategoryMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.categoryTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you sure you want remove this record ?");
    if (r) {
      this.setId(id)
      this.categoryTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.categorys$ = this.categoryTestService.getAll()

  }

}
