import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Email } from 'src/app/_models/Email';
import { EmailService } from 'src/app/_services/email.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: false
})

export class ContactComponent {
  form: Email = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private titleService: Title, private emailService: EmailService) {
    this.titleService.setTitle("Daniel Ethridge | Contact");
  }

  sendEmail(): void {
    const isValid = this.form.name.trim() &&
      this.form.email.trim() &&
      this.form.subject.trim() &&
      this.form.message.trim();

    if (!isValid) {
      alert('Please complete all fields before sending.');
      return;
    }

    this.emailService.sendEmail(this.form).subscribe({
      next: () => {
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        alert('Sent!');
      },
      error: (err) => {
        console.error(err);
        alert('Unable to send email.');
      }
    });
  }
}