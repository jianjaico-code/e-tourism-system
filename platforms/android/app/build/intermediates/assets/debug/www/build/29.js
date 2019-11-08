webpackJsonp([29],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventPageModule", function() { return AddEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_event__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddEventPageModule = /** @class */ (function () {
    function AddEventPageModule() {
    }
    AddEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_event__["a" /* AddEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_event__["a" /* AddEventPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTablesModule */]
            ],
        })
    ], AddEventPageModule);
    return AddEventPageModule;
}());

//# sourceMappingURL=add-event.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
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



var AddEventPage = /** @class */ (function () {
    function AddEventPage(navCtrl, modalCtrl, alertCtrl, loadingCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    AddEventPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('event');
        ref.on('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                arr.push({
                    key: data.key,
                    description: data.val().description,
                    title: data.val().title,
                    image: data.val().image
                });
            });
            _this.event = arr;
        });
    };
    AddEventPage.prototype.functionEvent = function (key, status) {
        var modal = this.modalCtrl.create('FuncEventsPage', { key: key, status: status });
        modal.present();
    };
    AddEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-event',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\add-event\add-event.html"*/'<ion-content>\n    <ion-grid fixed>\n      <ion-card no-margin margin-bottom class="full-width">\n        <ion-item class="border-bottom">\n\n          <ion-row>\n            <ion-col>\n              <ion-icon tappable menuToggle style="zoom:1.5;" name="menu"></ion-icon>\n            </ion-col>\n\n            <ion-col>\n              <div class="pull-right">\n                <ion-icon  name="add-circle" color="primary"></ion-icon>\n                <span tappable (click)="functionEvent(null, false)">Add Event</span>\n              </div>\n            </ion-col>\n          </ion-row>\n      \n        </ion-item>\n        <ion-item class="animated fadeIn">\n            <table *ngIf="event" datatable [dtOptions]="dtOptions">\n              <thead>\n                <tr>\n                  <th>Event Title</th>\n                  <th>Event Image</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor="let item of event" text-center center>\n                  <td>{{ item.title }}</td>\n                  <td><img class="dataImage" [src]="item.image"></td>\n                  <td><button ion-button (click)="functionEvent(item.key, true)">Edit</button></td>\n                </tr>\n              </tbody>\n              </table>\n          </ion-item>\n        </ion-card>\n    </ion-grid>\n  </ion-content>'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\add-event\add-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AddEventPage);
    return AddEventPage;
}());

//# sourceMappingURL=add-event.js.map

/***/ })

});
//# sourceMappingURL=29.js.map