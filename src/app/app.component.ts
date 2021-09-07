import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = new FormControl('');
  email = new FormControl('');

  constructor(private http: HttpClient) {}

  addUser() {
    this.http
      .post('https://jsonplaceholder.typicode.com/users', {
        name: this.name.value,
        email: this.email.value,
        username: this.name.value
      })
      .subscribe(() => {
        console.log('added');
      });
  }
}
