import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: IProduct[] = [];

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
    this.client.get('https://localhost:5001/api/products?pageSize=50')
      .subscribe((response: IPagination) => {
        this.products = response.data;
      })
  }

}
