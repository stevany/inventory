import {
  Component,
  EventEmitter
} from '@angular/core';

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
class Product{
	constructor(
		public sku: string,
		public name: string,
		public imageUrl: string,
		public department: string,
		public price: number ){

		}
}
@Component({
	selector: 'inventory-app',
	template: `
	<div class="inventory-app">
		<products-list [productList]="products" (onProductSelected)="productWasSelected($event)">
		</products-list>
	</div>
	`
})

class InventoryApp{
	products: Product[];

	constructor(){
		this.products=[
			new Product(
				'MYSHOES',
				'Black Running Shoes',
				'/resources/images/products/black-shoes.jpg',
				['Men','Shoes','Running Shoes'],
				109.99),
			new Product(
				'NEATOJACKET',
				'Blue Jacket',
				'/resources/images/products/blue-jacket.jpg',
				['Women','Apparel','Jackets & Vests'],
				238.99),
			new Product(
				'NICEHAT',
				'A Nice Black Hat',
				'/resources/images/products/black-hat.jpg',
				['Men','Accessories', 'Hats'],
				29.99)
				];
	}
	productWasSelected(product: Product):void{
		console.log('Product clicked: ', product);
	}
}
@Component({
	selector: 'products-list',
	inputs:['productList'],
	outputs: ['onProductSelected'],
	template: `
		<div class="ui items">
			<product-row 
				*ngFor="let myProduct of productList"
				[product]="myProduct"
				(click)='clicked(myProduct)'
				[class.selected]="isSelected(myProduct)">
			</product-row>
		</div>
		`
})
class ProductsList{
	productList:Product[];

	onProductSelected: EventEmitter<Product>;
	
	private currentProduct: Product;
	
	constructor(){
		this.onProductSelected=new EventEmitter();
	}
	clicked(product: Product):void{
		this.currentProduct=product;
		this.onProductSelected.emit(product);
	}
	isSelected(product:Product):boolean{
		if(!product || !this.currentProduct){
			return false;
		}
		return product.sku === this.currentProduct.sku;
	}
}

@Component({
	selector: 'product-row',
	inputs: ['product'],
	host: {'class': 'item'},
	template: `
		<product-image [product]="product"></product-image>
		<div class="content">
			<div class="header">{{product.name}}</div>
			<div class="meta">
				<div class="product-sku">SKU #{{product.sku}}</div>
				<div class="description">
					<product-department [product]="product"></product-department>
				</div>
			</div>
			<price-display [price]="product.price"></price-display>
			`

})
class ProductRow{
	product: Product;
}

@Component({
	selector: 'product-image',
	host: {class: 'ui small image'},
	inputs: ['product'],
	template: `
	<img class="product-image" [src]="product.imageUrl">
	`
})
class ProductImage{
	prodcut:Product;
}
@Component({
	selector: 'price-display',
	inputs: ['price'],
	template: `
	<div class="price-display">\${{price}}</div>
	`
})
class PriceDisplay{
	price: number;
}

@Component({
	selector:'product-department',
	inputs:['product'],
	template:`
	<div class="product-department">
		<span *ngFor="let name of product.department; let i=index">
			<a href="#">{{name}}</a>
			<span>{{i <(product.department.length-1)?'>':''}}</span>
		</span>
	</div>
	`
})
class ProductDepartment{
	product: Product;
}

@NgModule({
	declarations:[
		InventoryApp,
		ProductImage,
		ProductDepartment,
		PriceDisplay,
		ProductRow,
		ProductsList
		],
	imports: [BrowserModule],
	bootstrap: [InventoryApp]
})
class InventoryAppModule{}

platformBrowserDynamic().bootstrapModule(InventoryAppModule);
