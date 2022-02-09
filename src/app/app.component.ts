import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'artcom-test';
  products = this.dataStorageService.getProducts();
  selectedProduct!: Product | undefined;
  
  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
  }

  selectProduct(e: any) {
    const result = this.products.find(item => item.ProductDescription === e.target.textContent);
    this.selectedProduct = result;
  }

  closeSelectedProduct() {
    this.selectedProduct = undefined;
  }
}
