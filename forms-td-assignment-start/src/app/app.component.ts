import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) customForm: NgForm 
  formSubmitted: boolean = false
  formData: null

  submitForm() {
    this.formSubmitted = true
    this.formData = this.customForm.form.value
    this.customForm.reset()
  }
}
