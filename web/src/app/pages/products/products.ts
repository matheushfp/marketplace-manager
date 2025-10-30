import { Component, inject, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IProductDataResponse } from '../../interfaces/product-data-response';
import { ProductsService } from '../../services/products';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [ReactiveFormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  products: IProductDataResponse[] = [];
  filteredProducts: IProductDataResponse[] = [];
  filterForm = new FormGroup({
    title: new FormControl(''),
    status: new FormControl('')
  });

  private readonly _productsService = inject(ProductsService);

  ngOnInit() {
    this._productsService.getProducts().pipe(take(1)).subscribe({
      next: (response) => {
        this.products = response.data;
        this.filteredProducts = response.data;
      }
    });
  }

  filterProducts() {
    const title = this.filterForm.get('title')?.value?.toLowerCase();
    const status = this.filterForm.get('status')?.value?.toLowerCase();

    this.filteredProducts = this.products.filter((product) =>
      (!title || product.title.toLowerCase().includes(title)) &&
      (!status || product.status.toLowerCase().includes(status))
    );
  }

  clearFilters() {
    this.filterForm.reset();
    this.filterForm.get('status')?.setValue('');

    this.filteredProducts = this.products;
  }
}
