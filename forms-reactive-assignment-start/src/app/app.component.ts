import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  customForm: FormGroup
  arrayOptions: Array<string> = ['Stable', 'Critical', 'Finished']

  ngOnInit(): void {
    this.customForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], [this.nameValidation.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('stable', Validators.required)
    })
  }

  // nameValidation(control: FormControl): {[s: string]: boolean} {
  //   if(control.value === 'Test') {
  //     return { nameIsForbidden: true }
  //   } else {
  //     return null
  //   }
  // }

  nameValidation(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Test') {
          resolve({ nameIsForbidden: true })
        } else {
          resolve(null)
        }
      }, 1500)
    })

    return promise
  }

  onSubmit() {
    console.log(this.customForm.value)
    this.customForm.reset()
  }
}
