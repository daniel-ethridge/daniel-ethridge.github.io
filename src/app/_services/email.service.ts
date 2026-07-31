import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Email } from "../_models/Email";

@Injectable({
    providedIn: 'root'
})

export class EmailService {

  constructor(private http: HttpClient) {}

  sendEmail(form: Email) {
    return this.http.post(
      '/.netlify/functions/send-email',
      form
    );
  }
}