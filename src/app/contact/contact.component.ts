import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    ContactForm = new FormGroup({

      username: new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      message :new FormControl('',Validators.required),
    });

  constructor() { }

    
  ngOnInit(): void {
  }
    get username(){
      return this.ContactForm.get('username');
    }
    get email(){
      return this.ContactForm.get('email');
    }
    get message(){
      return this.ContactForm.get('message');
    }
  }


