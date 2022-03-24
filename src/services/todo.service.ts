import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  public  todoList=[
    {"id":"1","task":"Sample data"},
    {"id":"2","task":"Test data"},
    {"id":"3","task":"Sample data,sample"},
    {"id":"4","task":"Test,Sample data"},
 

  ];

  addTask(data:any){
  this.todoList.unshift(data)
  }

  delete(id:number){
    this.todoList = this.todoList.filter((v,i)=> i!==id)
  }

  edit(id:number){
    this.todoList
  }
}
