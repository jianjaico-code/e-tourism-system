webpackJsonp([23],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncCategoryPageModule", function() { return FuncCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__func_category__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FuncCategoryPageModule = /** @class */ (function () {
    function FuncCategoryPageModule() {
    }
    FuncCategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__func_category__["a" /* FuncCategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__func_category__["a" /* FuncCategoryPage */]),
            ],
        })
    ], FuncCategoryPageModule);
    return FuncCategoryPageModule;
}());

//# sourceMappingURL=func-category.module.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncCategoryPage; });
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



var FuncCategoryPage = /** @class */ (function () {
    function FuncCategoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.initCategory();
    }
    FuncCategoryPage.prototype.initCategory = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('category');
        ref.on('value', function (snapshot) {
            var arr = [];
            snapshot.forEach(function (snapshot) {
                arr.push(snapshot.val());
            });
            _this.data = arr;
        });
    };
    FuncCategoryPage.prototype.addCategory = function () {
        var incrementer = this.data.length;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('category');
        if (this.data === undefined || this.data.length == 0) {
            ref.push({
                cat_val: incrementer + 1,
                name: this.catname.value
            });
        }
        else {
            ref.push({
                cat_val: incrementer + 1,
                name: this.catname.value
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('catname'),
        __metadata("design:type", Object)
    ], FuncCategoryPage.prototype, "catname", void 0);
    FuncCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-func-category',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\func-category\func-category.html"*/'<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label stacked>Category Name</ion-label>\n        <ion-input type="text" placeholder="Category Name" name="catname" #catname></ion-input>\n      </ion-item>\n    </ion-col>\n\n    <ion-col>\n      <button ion-button (click)="addCategory()">Add Category</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-item *ngFor="let item of data">\n    {{item.name}}\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\func-category\func-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FuncCategoryPage);
    return FuncCategoryPage;
}());

//# sourceMappingURL=func-category.js.map

/***/ })

});
//# sourceMappingURL=23.js.map