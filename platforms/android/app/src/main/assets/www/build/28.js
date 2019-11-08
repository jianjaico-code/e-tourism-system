webpackJsonp([28],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewsPageModule", function() { return AddNewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_news__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddNewsPageModule = /** @class */ (function () {
    function AddNewsPageModule() {
    }
    AddNewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_news__["a" /* AddNewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_news__["a" /* AddNewsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTablesModule */]
            ],
        })
    ], AddNewsPageModule);
    return AddNewsPageModule;
}());

//# sourceMappingURL=add-news.module.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNewsPage = /** @class */ (function () {
    function AddNewsPage(navCtrl, modalCtrl, alertCtrl, viewCtrl, afAuth, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
    }
    AddNewsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('postNews');
        ref.on('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                var strDate = data.val().date;
                var date = strDate.substring(0, 10);
                arr.push({
                    key: data.key,
                    date: date,
                    title: data.val().title,
                    name: data.val().name,
                    image: data.val().image,
                    description: data.val().description,
                });
            });
            _this.news = arr;
        });
    };
    AddNewsPage.prototype.functionNews = function (key, status) {
        var modal = this.modalCtrl.create('FuncNewsPage', { key: key, status: status });
        modal.present();
    };
    AddNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-news',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\add-news\add-news.html"*/'<ion-content>\n  <ion-grid fixed>\n    <ion-card no-margin margin-bottom class="full-width">\n      <ion-item class="border-bottom">\n\n        <ion-row>\n          <ion-col>\n            <ion-icon tappable menuToggle style="zoom:1.5;" name="menu"></ion-icon>\n          </ion-col>\n\n          <ion-col>\n            <div class="pull-right">\n              <ion-icon name="add-circle" color="primary"></ion-icon>\n          <span tappable (click)="functionNews(null, false)">Add News</span>\n            </div>\n          </ion-col>\n        </ion-row>\n    \n      </ion-item>\n      <ion-item class="animated fadeIn">\n        <table *ngIf="news" datatable [dtOptions]="dtOptions">\n          <thead>\n            <tr>\n              <th>News Title</th>\n              <th>News Date</th>\n              <th>News Image</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor="let item of news" text-center center>\n              <td class="dataTitle">{{ item.title }}</td>\n              <td>{{ item.date }}</td>\n              <td><img *ngIf="item.image" class="dataImage" [src]="item.image"></td>\n              <td><button ion-button (click)="functionNews(item.key, true)">Edit</button></td>\n            </tr>\n          </tbody>\n          </table>\n      </ion-item>\n      </ion-card>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\add-news\add-news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AddNewsPage);
    return AddNewsPage;
}());

//# sourceMappingURL=add-news.js.map

/***/ })

});
//# sourceMappingURL=28.js.map