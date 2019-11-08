webpackJsonp([24],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarePageModule", function() { return FarePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fare__ = __webpack_require__(767);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FarePageModule = /** @class */ (function () {
    function FarePageModule() {
    }
    FarePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fare__["a" /* FarePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fare__["a" /* FarePage */]),
            ],
        })
    ], FarePageModule);
    return FarePageModule;
}());

//# sourceMappingURL=fare.module.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarePage; });
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


var FarePage = /** @class */ (function () {
    function FarePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FarePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FarePage');
    };
    FarePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-fare',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\fare\fare.html"*/'<ion-content padding>\n    <h1 text-center>Within the city fare.</h1>\n    <ion-row>\n      <ion-col>\n        <ion-label>Sikad:</ion-label>\n        <ion-card>\n          <ion-item>\n            Student - &#8369;6.00\n          </ion-item>\n        </ion-card>\n\n        <ion-card>\n          <ion-item>\n            Regular - &#8369;7.00\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n          <ion-label>Rela:</ion-label>\n          <ion-card>\n            <ion-item>\n              Student - &#8369;6.00\n            </ion-item>\n          </ion-card>\n\n          <ion-card>\n            <ion-item>\n              Regular - &#8369;7.00\n            </ion-item>\n          </ion-card>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label>Multicab:</ion-label>\n        <ion-card>\n          <ion-item>\n            &#8369;20.00 - &#8369;30.00\n          </ion-item>\n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-label>Habal-Habal:</ion-label>\n        <ion-card>\n          <ion-item>\n            &#8369;50.00\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\fare\fare.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FarePage);
    return FarePage;
}());

//# sourceMappingURL=fare.js.map

/***/ })

});
//# sourceMappingURL=24.js.map