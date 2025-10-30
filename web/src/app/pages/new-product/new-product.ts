import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products';
import { INewProductRequest } from '../../interfaces/new-product-request';
import { take } from 'rxjs';

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {
  productImageBase64 = '';
  successMessage = '';

  productForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    category: new FormControl('', [Validators.required])
  });

  private readonly _producsService = inject(ProductsService);

  saveProduct() {
    if(this.productForm.invalid || !this.productImageBase64)
      return;

    const newProduct: INewProductRequest = {
      title: this.productForm.get('title')?.value as string,
      description: this.productForm.get('description')?.value as string,
      price: this.productForm.get('price')?.value as number,
      category: this.productForm.get('category')?.value as string,
      imageBase64: this.productImageBase64
    }

    // Recebe 1 valor e já se desinscreve do Observable
    this._producsService.saveProduct(newProduct).pipe(take(1)).subscribe({
      next: (response) => {
        this.successMessage = response.message;
      }
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if(input.files && input.files.length > 0) {
      const file = input.files[0];

      this.convertFileToBase64(file);
    }
  }

  convertFileToBase64(file: File) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const imageBase64 = e.target.result as string;

      this.productImageBase64 = imageBase64;
    }

    reader.onerror = (_) => {
      this.productImageBase64 = '';
    }

    reader.readAsDataURL(file);
  }
}
