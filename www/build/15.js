webpackJsonp([15],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(778);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]),
            ],
        })
    ], NewsPageModule);
    return NewsPageModule;
}());

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
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



var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, modalCrtl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCrtl = modalCrtl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.checkNews();
    }
    NewsPage.prototype.addNews = function () {
        var modal = this.modalCrtl.create('AddNewsPage');
        modal.present();
    };
    NewsPage.prototype.checkNews = function () {
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
                return false;
            });
            _this.data = arr.reverse();
            _this.loadedEst = arr;
        });
    };
    NewsPage.prototype.initializeItem = function () {
        this.data = this.loadedEst;
    };
    NewsPage.prototype.getItems = function (searchbar) {
        this.initializeItem();
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.data = this.data.filter(function (data) {
            if (data.title && q) {
                if (data.title.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.data.length);
    };
    NewsPage.prototype.update = function (key) {
        var modal = this.modalCrtl.create('EditNewsPage', { key: key });
        modal.present();
    };
    NewsPage.prototype.remove = function (key) {
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('postNews/' + key);
        var alert = this.alertCtrl.create({
            message: 'Are you sure you want to REMOVE this Post?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        ref.remove();
                    }
                }
            ]
        });
        alert.present();
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\news\news.html"*/'<ion-content>\n    <div class="subBanner"></div>\n  <ion-grid fixed>\n      <ion-row>\n        <ion-col col-4>\n          <ion-searchbar (ionInput)="getItems($event)" placeholder="Search For News Title"></ion-searchbar>\n        </ion-col>\n        <ion-col col-2>\n          <button ion-button outline color="logo_border" (click)="addNews()">Add News</button>\n        </ion-col>\n      </ion-row>\n    <ion-row>\n      <ion-card ion-col *ngFor="let item of data" col-6 col-md-4 col-lg-4>\n\n        <img *ngIf="item.image" [src]="item.image">\n        <img *ngIf="!item.image" src="../../assets/imgs/noImage.jpg">\n\n        \n        <ion-card-content>\n          <ion-card-title>{{item.title}}</ion-card-title>\n          <ion-row>\n            <ion-col center text-center>\n              <p>by: {{item.name}}</p>\n            </ion-col>\n            <ion-col center text-center>\n              <span>{{item.date}}</span>\n            </ion-col>\n          </ion-row>\n          <div id="content">{{item.description}}</div>\n        </ion-card-content>\n\n        <ion-row>\n          <ion-col>\n            <button (click)="update(item.key)" ion-button color="logo_border" clear small icon-start>\n              <ion-icon name="md-brush"></ion-icon>\n              Update\n            </button>\n          </ion-col>\n          <ion-col text-right>\n            <button ion-button (click)="remove(item.key)" color="danger" clear small icon-start>\n              <ion-icon name="ios-trash-outline"></ion-icon>\n              Remove\n            </button>\n          </ion-col>\n        </ion-row>\n      \n      </ion-card>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ })

});
//# sourceMappingURL=15.js.map