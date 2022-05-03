import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isParagraphVisible = false
  logs = []

  handleClick(){
    this.isParagraphVisible = !this.isParagraphVisible

    this.logs.push(new Date().toISOString())
  }

  getColorText(val: number | string){
    return val >= 5 ? 'blue' : 'white'
  }

}
