import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private data: any[] = [
    { id: 1, title: 'Task 1', status: 'Pending', description: 'Description 1' },
    { id: 2, title: 'Task 2', status: 'Completed', description: 'Description 2' },
    { id: 3, title: 'Task 3', status: 'Pending', description: 'Description 3' },
    { id: 4, title: 'Task 4', status: 'Completed', description: 'Description 4' }
  ];

  getAllData(): any[] {
    return this.data;
  }

  getDataById(id: number): any {
    return this.data.find(item => item.id === id);
  }

  createData(item: any): void {
    item.id = this.data.length + 1;
    this.data.push(item);
  }

  updateData(item: any): void {
    const index = this.data.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.data[index] = item;
    }
  }

  deleteData(id: number): void {
    const index = this.data.findIndex(item => item.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }
}
