import { Component, OnInit } from '@angular/core';

import { CounterService } from './counter.service';
import { UsersService } from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CounterService]
})
export class AppComponent implements OnInit{
  activeActions: number = 0
  inactiveActions: number = 0
  constructor(private usersCounter: CounterService){}

  ngOnInit(): void {
    this.activeActions = this.usersCounter.activeActions
    this.inactiveActions = this.usersCounter.inactiveActions
  }
}
