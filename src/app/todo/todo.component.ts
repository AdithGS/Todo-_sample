import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from 'src/services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  closeResult= '';
  searchText = '';
  // public  todoList=[
  //   {"id":"1","task":"Sample data"},
  //   {"id":"2","task":"Test data"},
  //   {"id":"3","task":"Sample data,sample"},
  //   {"id":"4","task":"Test,Sample data"},
 

  // ];
todoNew = new FormGroup({
  task:new FormControl('')

})

  constructor(private modalService: NgbModal,public todo:TodoService) { }



  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',
    centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
   data:any ={
      
  };

  

  ngOnInit() {
  }

  todoSubmit(){
    console.log("Form Submitted", this.todoNew.value)
   
  this.todo.addTask(this.todoNew.value);

  }
del(id:number){
  this.todo.delete(id);
}
  
   
}
