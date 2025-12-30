import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  constructor(private _Router: Router , private _ProductService:ProductService){}
  logOUT(){
    localStorage.removeItem('_token')
    this._Router.navigate(['./login'])
  }

  products:any[]=[]

ngOnInit(): void {
  this._ProductService.getProducts().subscribe((data: any[]) => {
    // console.log(data);

    for (let i = 0; i < data.length; i++) {
      if (data[i].stock > 0) {
        data[i].inStock = 'In Stock';
      } else {
        data[i].inStock = 'Out Of Stock';
      }
    }

    this.products = data;
  });
}


}
