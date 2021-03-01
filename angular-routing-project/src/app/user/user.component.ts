import { UserService } from './../models/userService';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  userList: any;

  constructor(private _httpClient: HttpClient, private _userService: UserService) { }

  ngOnInit() {

    // this._httpClient.get('http://jsonplaceholder.typicode.com/users').subscribe(
    //   (result) => {
    //     this.userList = result;
    //   },
    //   (error) => console.log('There are some errors : ' + error))

    this._userService.getUsers().subscribe(
      (result) => {
        this.userList = result;
      }, (error) => console.log('There are some errors : ' + error)
    )

  }





}
