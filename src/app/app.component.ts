import { FormsModule, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'soulskill-frontend';
  submit_disable: boolean = false
  userCount: any = 0
  user: any = {
    name: '',
    phone_number: '',
    email: '',
    job_title: '',
    resume: ''
  }

  constructor(public service: ApiService) { }

  ngOnInit() {
    this.userCount = localStorage.getItem('userCount');
    this.userCount = Number(this.userCount) + 1
    localStorage.setItem('userCount', this.userCount);
  }

  submit() {
    var validatePhoneNumber = String(this.user.phone_number)
    if (this.submit_disable) return
    if (this.user.name == "" || this.user.phone_number == "" || this.user.email == "" || this.user.job_title == "") {
      alert("Please fill all the details")
    } else if (!this.user.resume) {
      alert("File not uploaded")
    } else if (validatePhoneNumber.length < 10 || validatePhoneNumber.length > 10) {
      alert("Please enter phone number equal to 10 characters")
    } else {
      this.service.submit(this.user).subscribe((response: any) => {
        if (response.success) {
          alert("Data submitted successfully")
        } else {
          alert("Incorrect data")
        }
      })
    }
  }

  upload(event) {
    this.submit_disable = true
    this.service.upload(event.target.files[0]).subscribe((response: any) => {
      this.submit_disable = false
      if (response.success) {
        this.user.resume = response.data.imageUrl
      } else {
        alert("Incorrect upload")
      }
    })
  }
}




