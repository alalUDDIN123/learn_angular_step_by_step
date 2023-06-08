import { Component } from '@angular/core';
import { CrudService } from './services/crud.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Crud Operation Using nxRx";
  data: any[] = [];
  newItem: any = { title: '', status: '' };
  editItem: any = { title: '', status: '' };
  isCreateFormVisible: boolean = true

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.loadData();
    console.log("load data getting called");

  }

  // load data
  loadData(): void {
    this.data = this.crudService.getAllData();
  }



  createData(): void {
    if (this.newItem.title == "" || this.newItem.status == "") {
      alert("Both title and status required")
    } else {
      this.crudService.createData(this.newItem);
      alert("New Item added")
      this.newItem = { title: '', status: '' };

    }

  }

  // delete item

  deleteItem(id: any): void {
    this.crudService.deleteData(id)
    alert("Item deeted succes with id" + id)
  }

  editData(item: any): void {
    this.isCreateFormVisible = false;
    this.editItem = { ...item };
  }

  updateData(): void {
    this.crudService.updateData(this.editItem);
    alert(`Item updated success with id : ${this.editItem.id} `)
    this.isCreateFormVisible = true;
    this.editItem = { title: '', status: '' };
  }


}
