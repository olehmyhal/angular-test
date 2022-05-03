import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() handleStart = new EventEmitter<undefined>()
  @Output() handleStop = new EventEmitter<undefined>()

  constructor() { }

  ngOnInit(): void {
  }

}
