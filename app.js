System.register(['@angular/core', "@angular/platform-browser", "@angular/platform-browser-dynamic"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, platform_browser_1, platform_browser_dynamic_1;
    var Product, InventoryApp, ProductsList, ProductRow, ProductImage, PriceDisplay, ProductDepartment, InventoryAppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }],
        execute: function() {
            Product = (function () {
                function Product(sku, name, imageUrl, department, price) {
                    this.sku = sku;
                    this.name = name;
                    this.imageUrl = imageUrl;
                    this.department = department;
                    this.price = price;
                }
                return Product;
            }());
            InventoryApp = (function () {
                function InventoryApp() {
                    this.products = [
                        new Product('MYSHOES', 'Black Running Shoes', '/resources/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
                        new Product('NEATOJACKET', 'Blue Jacket', '/resources/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
                        new Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
                    ];
                }
                InventoryApp.prototype.productWasSelected = function (product) {
                    console.log('Product clicked: ', product);
                };
                InventoryApp = __decorate([
                    core_1.Component({
                        selector: 'inventory-app',
                        template: "\n\t<div class=\"inventory-app\">\n\t\t<products-list [productList]=\"products\" (onProductSelected)=\"productWasSelected($event)\">\n\t\t</products-list>\n\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], InventoryApp);
                return InventoryApp;
            }());
            ProductsList = (function () {
                function ProductsList() {
                    this.onProductSelected = new core_1.EventEmitter();
                }
                ProductsList.prototype.clicked = function (product) {
                    this.currentProduct = product;
                    this.onProductSelected.emit(product);
                };
                ProductsList.prototype.isSelected = function (product) {
                    if (!product || !this.currentProduct) {
                        return false;
                    }
                    return product.sku === this.currentProduct.sku;
                };
                ProductsList = __decorate([
                    core_1.Component({
                        selector: 'products-list',
                        inputs: ['productList'],
                        outputs: ['onProductSelected'],
                        template: "\n\t\t<div class=\"ui items\">\n\t\t\t<product-row \n\t\t\t\t*ngFor=\"let myProduct of productList\"\n\t\t\t\t[product]=\"myProduct\"\n\t\t\t\t(click)='clicked(myProduct)'\n\t\t\t\t[class.selected]=\"isSelected(myProduct)\">\n\t\t\t</product-row>\n\t\t</div>\n\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductsList);
                return ProductsList;
            }());
            ProductRow = (function () {
                function ProductRow() {
                }
                ProductRow = __decorate([
                    core_1.Component({
                        selector: 'product-row',
                        inputs: ['product'],
                        host: { 'class': 'item' },
                        template: "\n\t\t<product-image [product]=\"product\"></product-image>\n\t\t<div class=\"content\">\n\t\t\t<div class=\"header\">{{product.name}}</div>\n\t\t\t<div class=\"meta\">\n\t\t\t\t<div class=\"product-sku\">SKU #{{product.sku}}</div>\n\t\t\t\t<div class=\"description\">\n\t\t\t\t\t<product-department [product]=\"product\"></product-department>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<price-display [price]=\"product.price\"></price-display>\n\t\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductRow);
                return ProductRow;
            }());
            ProductImage = (function () {
                function ProductImage() {
                }
                ProductImage = __decorate([
                    core_1.Component({
                        selector: 'product-image',
                        host: { class: 'ui small image' },
                        inputs: ['product'],
                        template: "\n\t<img class=\"product-image\" [src]=\"product.imageUrl\">\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductImage);
                return ProductImage;
            }());
            PriceDisplay = (function () {
                function PriceDisplay() {
                }
                PriceDisplay = __decorate([
                    core_1.Component({
                        selector: 'price-display',
                        inputs: ['price'],
                        template: "\n\t<div class=\"price-display\">${{price}}</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PriceDisplay);
                return PriceDisplay;
            }());
            ProductDepartment = (function () {
                function ProductDepartment() {
                }
                ProductDepartment = __decorate([
                    core_1.Component({
                        selector: 'product-department',
                        inputs: ['product'],
                        template: "\n\t<div class=\"product-department\">\n\t\t<span *ngFor=\"let name of product.department; let i=index\">\n\t\t\t<a href=\"#\">{{name}}</a>\n\t\t\t<span>{{i <(product.department.length-1)?'>':''}}</span>\n\t\t</span>\n\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductDepartment);
                return ProductDepartment;
            }());
            InventoryAppModule = (function () {
                function InventoryAppModule() {
                }
                InventoryAppModule = __decorate([
                    core_2.NgModule({
                        declarations: [
                            InventoryApp,
                            ProductImage,
                            ProductDepartment,
                            PriceDisplay,
                            ProductRow,
                            ProductsList
                        ],
                        imports: [platform_browser_1.BrowserModule],
                        bootstrap: [InventoryApp]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InventoryAppModule);
                return InventoryAppModule;
            }());
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(InventoryAppModule);
        }
    }
});
//# sourceMappingURL=app.js.map