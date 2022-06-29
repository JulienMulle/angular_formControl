import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/User';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User("","","");
  
  UserName = new FormControl('');
  Email = new FormControl('');
  Password = new FormControl('');

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(): void{
   this.user.UserName = this.UserName.value,
    this.user.Email= this.Email.value,
    this.user.Password =this.Password.value
    console.log(this.user)
   
  }

}
