webpackJsonp([20],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingHerePageModule", function() { return GettingHerePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getting_here__ = __webpack_require__(768);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GettingHerePageModule = /** @class */ (function () {
    function GettingHerePageModule() {
    }
    GettingHerePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__getting_here__["a" /* GettingHerePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__getting_here__["a" /* GettingHerePage */]),
            ],
        })
    ], GettingHerePageModule);
    return GettingHerePageModule;
}());

//# sourceMappingURL=getting-here.module.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GettingHerePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GettingHerePage = /** @class */ (function () {
    function GettingHerePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GettingHerePage.prototype.exit = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    GettingHerePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-getting-here',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\getting-here\getting-here.html"*/'<ion-content>\n    <div class="subBanner"></div>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col>\n        <ion-buttons>\n          <button (click)="exit()" clear ion-button icon-only><ion-icon name="ios-arrow-dropleft"></ion-icon>Back</button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row class="main animated fadeIn" align-items-center>\n      <ion-col>\n        <div class="imgSrc">\n          <img src="assets/imgs/plane.gif">\n        </div>\n      </ion-col>\n\n      <ion-col>\n        <div class="container">\n          <h1>By Air</h1>\n          <p padding-button>\n            Laguindingan airport (approx. 130 kms away) and Butuan City airport (approx. 75 kms away) have daily flights to and from Manila through Philippine Airlines and Cebu Pacific Air. Both airports also have daily flights to and from Cebu City through Philippine Airlines, Cebu Pacific Air and Air Philippines. From the airport, you may take a taxi or jeepney ride to the bus terminal and from there, different bus lines will take you to Gingoog City.\n          </p>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="main animated fadeIn" align-items-center>\n        <ion-col>\n          <div class="container">\n            <h1>By Sea</h1>\n            <p padding-button>\n                SuperFerry has a 4 times weekly sailing schedule from Cagayan de Oro seaport to and from Manila and 2 times weekly sailing schedule from Butuan (Nasipit seaport) to and from Manila. Both Cagayan de Oro seaport and Butuan (Nasipit seaport) also have nightly sailing schedule to and from Cebu City through a number of different vessels.\n            </p>\n          </div>\n        </ion-col>\n\n        <ion-col>\n            <div class="imgSrc">\n              <img src="assets/imgs/ferry.jpg">\n            </div>\n          </ion-col>\n      </ion-row>\n\n      <ion-row class="main animated fadeIn" align-items-center>\n          <ion-col>\n            <div class="imgSrc">\n              <img src="assets/imgs/gettinghere.jpg">\n            </div>\n          </ion-col>\n    \n          <ion-col>\n            <div class="container">\n              <h1>By Land</h1>\n              <p padding-button>\n                  Gingoog City is accessible by land travel to and from Cagayan de Oro City (122 kms) and Butuan City (74 kms) through the Bagong Lipunan Transit, Bachelor Express (aircon & non-aircon buses), Mini Buses, Public Utility Vans and Public Utility Jeepneys.\n              </p>\n            </div>\n          </ion-col>\n        </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\getting-here\getting-here.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], GettingHerePage);
    return GettingHerePage;
}());

//# sourceMappingURL=getting-here.js.map

/***/ })

});
//# sourceMappingURL=20.js.map