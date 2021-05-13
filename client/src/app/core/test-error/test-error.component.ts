import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
  baseUrl = environment.apiUrl;
  validationErrors: any;
  constructor(private client: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error() {
    this.client.get(this.baseUrl + 'products/42').subscribe(response => console.log(response),
      error => console.error(error));
  }

  get500Error() {
    this.client.get(this.baseUrl + 'buggy/servererror').subscribe(response => console.log(response),
      error => console.error(error));
  }

  get400Error() {
    this.client.get(this.baseUrl + 'buggy/badrequest/1').subscribe(response => console.log(response),
      error => console.error(error));
  }

  get400ValidationError() {
    this.client.get(this.baseUrl + 'products/forty-two').subscribe(response => console.log(response),
      error => {
        console.error(error);
        this.validationErrors = error.errors;
      });
  }
}
