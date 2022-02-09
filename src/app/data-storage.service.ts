import { Injectable } from '@angular/core';
import data from '../assets/DATA.json';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    getProducts() {
        const products: Product[] = data;
        return products.slice();
    }
}
