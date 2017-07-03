import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  apiURL = '/api';
  products = [];
  filter = '';
  doFilter = false;

  constructor(private http: Http) {

  }

  ngOnInit() {

    this.updateProducts();
  }


  onFilter = () => {
    if (!this.filter || this.filter === '') {
      this.doFilter = false;

    } else {
      this.doFilter = true;
    }
    console.log("filter", this.filter);
    this.updateProducts();
  };

  updateProducts = () => {
    // $window.ga('send', {
    //   hitType: 'event',
    //   eventCategory: 'api request',
    //   eventAction: 'update products',
    //   eventLabel: '23123'
    // });

    this.getProducts()
      .map((res: Response) => res.json())
      .subscribe(data => {
        console.log(data);
        this.products = data;
      })
  };

  getProducts = () => {
    var url = this.apiURL + '/product';
    if (this.doFilter) {
      url += '?name=' + this.filter;
    }
    console.log('request: ', url);
    return this.http.get(url);
  };

}
