webpackJsonp([10],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristNewsPageModule", function() { return TouristNewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tourist_news__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TouristNewsPageModule = /** @class */ (function () {
    function TouristNewsPageModule() {
    }
    TouristNewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tourist_news__["a" /* TouristNewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tourist_news__["a" /* TouristNewsPage */]),
            ],
        })
    ], TouristNewsPageModule);
    return TouristNewsPageModule;
}());

//# sourceMappingURL=tourist-news.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouristNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TouristNewsPage = /** @class */ (function () {
    function TouristNewsPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.data = navParams.data;
    }
    TouristNewsPage.prototype.exit = function () {
        this.viewCtrl.dismiss();
    };
    TouristNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tourist-news',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\tourist-news\tourist-news.html"*/'<ion-content padding>\n  <div class="subBanner"></div>\n  <ion-row>\n    <ion-col>\n      <ion-buttons>\n        <button (click)="exit()" clear ion-button icon-only><ion-icon name="ios-arrow-dropleft"></ion-icon>Back</button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n  \n  <div center text-center class="title">{{data.title}}</div>\n  <ion-row center text-center>\n    <ion-col>by: {{data.name}}</ion-col>\n    <ion-col>{{data.date}}</ion-col>\n  </ion-row>\n  <img *ngIf="data.image" [src]="data.image">\n  <div padding center text-justify class="desc">\n    {{data.description}}\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\tourist-news\tourist-news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TouristNewsPage);
    return TouristNewsPage;
}());

//# sourceMappingURL=tourist-news.js.map

/***/ })

});
//# sourceMappingURL=10.js.map