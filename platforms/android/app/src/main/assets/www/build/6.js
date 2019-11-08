webpackJsonp([6],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductServicePageModule", function() { return ViewProductServicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_product_service__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ViewProductServicePageModule = /** @class */ (function () {
    function ViewProductServicePageModule() {
    }
    ViewProductServicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_product_service__["a" /* ViewProductServicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_product_service__["a" /* ViewProductServicePage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTablesModule */]
            ],
        })
    ], ViewProductServicePageModule);
    return ViewProductServicePageModule;
}());

//# sourceMappingURL=view-product-service.module.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProductServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewProductServicePage = /** @class */ (function () {
    function ViewProductServicePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.key = this.navParams.data.key;
        this.initData();
    }
    ViewProductServicePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ViewProductServicePage.prototype.initData = function () {
        if (this.navParams.data.view == 1) {
            this.getProducts();
            console.log(this.data);
        }
        else if (this.navParams.data.view == 2) {
            this.getServices();
            console.log(this.data);
        }
    };
    ViewProductServicePage.prototype.getProducts = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('product');
        ref.on('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                if (data.val().establishmentKey == _this.key) {
                    arr.push(data.val());
                }
            });
            _this.data = arr;
        });
    };
    ViewProductServicePage.prototype.getServices = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('service');
        ref.on('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                if (data.val().establishmentKey == _this.key) {
                    arr.push(data.val());
                }
            });
            _this.data = arr;
        });
    };
    ViewProductServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-view-product-service',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\view-product-service\view-product-service.html"*/'<ion-content padding>\n  <ion-buttons>\n      <button (click)="close()" clear ion-button icon-only><ion-icon name="ios-arrow-dropleft"></ion-icon>Back</button>\n  </ion-buttons>\n  <ion-card>\n    <ion-item class="animated fadeIn">\n      <table *ngIf="data" datatable [dtOptions]="dtOptions">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Price</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let item of data" text-center center>\n            <td>{{item.name}}</td>\n            <td>&#8369; {{item.price}}.00</td>\n            <td><img class="itemImage" [src]="item.imageUrl"></td>\n          </tr>\n        </tbody>\n        </table>\n    </ion-item>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\view-product-service\view-product-service.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _c || Object])
    ], ViewProductServicePage);
    return ViewProductServicePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=view-product-service.js.map

/***/ })

});
//# sourceMappingURL=6.js.map