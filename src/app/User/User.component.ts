import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/User';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User("","","",0,"",0,"");
  
  UserName = new FormControl('');
  Email = new FormControl('');
  Password = new FormControl('');
  StreetNumber = new FormControl(0);
  Street = new FormControl('');
  CityZip = new FormControl(0);
  City = new FormControl('');



  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(): void{
   this.user.UserName = this.UserName.value,
    this.user.Email= this.Email.value,
    this.user.Password= this.Password.value,
    this.user.StreetNumber = this.StreetNumber.value ,
    this.user.Street = this.Street.value,
    this.user.CityZip = this.CityZip.value,
    this.user.City = this.City.value
    console.log(this.user)
   
  }

}
