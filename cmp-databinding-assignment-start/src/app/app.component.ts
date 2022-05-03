import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: Array<number> = []
  oddNumbers: Array<number> = []
  interval: any

  onStartGame(){
    this.interval = setInterval(() => {
      const newVal = Math.round(Math.random() * 10)
      if(newVal % 2 === 0){
        this.evenNumbers.push(newVal)
      } else {
        this.oddNumbers.push(newVal)
      }
    }, 1000)
  }

  onEndGame(){
    clearInterval(this.interval)
  }
}
