import { FormsModule, FormGroup } from '@angular/forms';
import { Component} from '@angular/core';
import { ApiService } from '../services/api.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'soulskill-frontend';
  user: any = {
    name: '',
    phone_number: '',
    email: '',
    job_title: '',
    resume: ''
  }

  constructor(public service: ApiService) { }

  submit() {
    var validatePhoneNumber = String(this.user.phone_number)

    if (this.user.name == "" || this.user.phone_number == "" || this.user.email == "" || this.user.job_title == '') {
      alert("Please fill all the details")
    } else if (validatePhoneNumber.length < 10 || validatePhoneNumber.length > 10) {
      alert("Please enter phone number equal to 10 characters")
    } else {
      this.service.submit(this.user).subscribe((response: any) => {
        if (response.success) {
          alert("Data submitted successfully")
        } else {
          console.log(response)
          alert("Incorrect data")
        }
      })
    }
  }
}




