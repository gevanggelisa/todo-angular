import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-angular';

  ngOnInit(): void {
    localStorage.setItem('email', 'test@mail.com');
    localStorage.setItem('password', '123');
  }
}
