webpackJsonp([13],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristEventsPageModule", function() { return TouristEventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tourist_events__ = __webpack_require__(780);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TouristEventsPageModule = /** @class */ (function () {
    function TouristEventsPageModule() {
    }
    TouristEventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tourist_events__["a" /* TouristEventsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tourist_events__["a" /* TouristEventsPage */]),
            ],
        })
    ], TouristEventsPageModule);
    return TouristEventsPageModule;
}());

//# sourceMappingURL=tourist-events.module.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouristEventsPage; });
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



var TouristEventsPage = /** @class */ (function () {
    function TouristEventsPage(platform, navCtrl, modalCtrl, navParams) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        if (this.platform.is('mobile')) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        this.initEvents();
    }
    TouristEventsPage.prototype.initEvents = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('event');
        ref.on('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                arr.push(data.val());
            });
            _this.events = arr;
        });
    };
    TouristEventsPage.prototype.pushEvent = function (key) {
        var modal = this.modalCtrl.create('EventPage', key);
        modal.present();
    };
    TouristEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tourist-events',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\tourist-events\tourist-events.html"*/'<ion-content *ngIf="!mobile">\n  <ion-grid fixed>\n\n  <img class="banner animated fadeInDown" src="assets/imgs/eventsBanner.jpg">\n  <h1>Featured Annual Events & Festivals</h1>\n  <ion-row>\n    <ion-card class="information animated fadeIn" ion-col *ngFor="let items of events" col-6 col-md-4 col-lg-6>\n      <ion-card-header center text-center>\n          {{items.title}}\n      </ion-card-header>\n      <ion-card-content>\n          <img class="infoImage" [src]="items.image">\n          <button (click)="pushEvent(items)" ion-button round outline block color="logo-border">Click for More</button>\n          <div id="content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{items.description}}</div>\n      </ion-card-content> \n    </ion-card>\n  </ion-row> \n  </ion-grid>\n</ion-content>\n\n\n<ion-content *ngIf="mobile">\n  <img class="animated fadeInDown" src="assets/imgs/eventsBanner.jpg">\n  <h1 text-center>Featured Events & Festivals</h1>\n\n  <ion-card (click)="pushEvent(items)" class="animated fadeIn" *ngFor="let items of events">\n    <ion-card-header class="headerMobile" center text-center>\n        {{items.title}}\n    </ion-card-header>\n    <ion-card-content>\n        <img class="infoImage" [src]="items.image">\n        <div text-justify >\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{items.description}}\n        </div>\n    </ion-card-content> \n  </ion-card>\n</ion-content>'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\tourist-events\tourist-events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TouristEventsPage);
    return TouristEventsPage;
}());

//# sourceMappingURL=tourist-events.js.map

/***/ })

});
//# sourceMappingURL=13.js.map