import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userid: any;
  user: User = new User();

  constructor(private _route: ActivatedRoute,
    private _httpClient: HttpClient, private _router: Router) {
    this.userid = this._route.snapshot.params.id;
  }

  ngOnInit(): void {
    this._httpClient.get<User>('http://jsonplaceholder.typicode.com/users/' + this.userid).subscribe(
      (result) => {
        this.user = result;
      }, (error) => { console.log('There are some errors : ' + error); }
    )
  }

  deleteUser(id: number): void {
    this._httpClient.delete('http://jsonplaceholder.typicode.com/users/' + id).subscribe(
      (result) => {
        console.log('User Deleted Successfully..!!');
        this._router.navigate(['/users']);
      },
      (error) => console.log('There are some errors : ' + error)
    )
  }

}
