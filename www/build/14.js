webpackJsonp([14],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPageModule", function() { return PlacesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__places__ = __webpack_require__(783);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlacesPageModule = /** @class */ (function () {
    function PlacesPageModule() {
    }
    PlacesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__places__["a" /* PlacesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__places__["a" /* PlacesPage */]),
            ],
        })
    ], PlacesPageModule);
    return PlacesPageModule;
}());

//# sourceMappingURL=places.module.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
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



var PlacesPage = /** @class */ (function () {
    function PlacesPage(navCtrl, alertCtrl, viewCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.checkEstablishment();
    }
    PlacesPage.prototype.addEstablishment = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Choose Type',
            buttons: [
                {
                    text: 'Establishment',
                    handler: function () {
                        console.log("Establishment");
                        var modal = _this.modalCtrl.create('AddEstablishmentPage', { key: true });
                        modal.present();
                    }
                },
                {
                    text: 'Landmark',
                    handler: function () {
                        var modal = _this.modalCtrl.create('AddEstablishmentPage', { key: false });
                        modal.present();
                    }
                }
            ]
        });
        alert.present();
    };
    PlacesPage.prototype.addService = function (key) {
        var modal = this.modalCtrl.create('AddServicePage', { key: key });
        modal.present();
    };
    PlacesPage.prototype.addProduct = function (key) {
        var modal = this.modalCtrl.create('AddProductPage', { key: key });
        modal.present();
    };
    PlacesPage.prototype.checkEstablishment = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('establishment');
        ref.on('value', function (data) {
            var tmp = [];
            data.forEach(function (data) {
                tmp.push({
                    key: data.key,
                    name: data.val().name,
                    address: data.val().address,
                    peopleRated: data.val().peopleRated,
                    averageRate: data.val().averageRate,
                    description: data.val().description,
                    latitude: data.val().latitude,
                    longitude: data.val().longitude,
                    imageurl: data.val().images,
                    status: data.val().status,
                    userEmail: data.val().userEmail,
                    category: data.val().category,
                    userType: data.val().userType,
                    website: data.val().website
                });
            });
            _this.establishments = tmp;
            _this.loadedEst = tmp;
            console.log(_this.establishments);
        });
    };
    PlacesPage.prototype.initializeItem = function () {
        this.establishments = this.loadedEst;
    };
    PlacesPage.prototype.getItems = function (searchbar) {
        this.initializeItem();
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.establishments = this.establishments.filter(function (data) {
            if (data.name && q) {
                if (data.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.establishments.length);
    };
    PlacesPage.prototype.update = function (key) {
        var modal = this.modalCtrl.create('EditEstablishmentPage', { key: key, userRestriction: false });
        modal.present();
    };
    PlacesPage.prototype.rating = function (key) {
        var modal = this.modalCtrl.create('EditRatingPage', key);
        modal.present();
    };
    PlacesPage.prototype.remove = function (key) {
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('establishment/' + key);
        ref.remove();
    };
    PlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-places',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\places\places.html"*/'<ion-content>\n    <div class="subBanner"></div>\n  <ion-grid fixed>\n      <ion-row>\n        <ion-col col-4>\n          <ion-searchbar (ionInput)="getItems($event)" placeholder="Search for a Place"></ion-searchbar>\n        </ion-col>\n        <ion-col col-2>\n          <button ion-button outline color="theme_font" (click)="addEstablishment()">Add Place</button>\n        </ion-col>\n      </ion-row>\n    <ion-row>\n      <ion-card ion-col *ngFor="let item of establishments" col-6 col-md-4 col-lg-6>\n        <ion-row>\n            <ion-col *ngIf="item.status == 2" class="activationAlert">\n              <ion-icon item-start name="alert"></ion-icon>\n              Pending for Activation\n            </ion-col>\n            <ion-col *ngIf="item.status == 1" class="activationAlert activated">\n              <ion-icon name="checkmark-circle"></ion-icon>\n              Activated\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <button (click)="update(item.key)" ion-button color="logo_border" clear small icon-start>\n                <ion-icon name="md-brush"></ion-icon>\n                Update\n              </button>\n            </ion-col>\n\n            <ion-col text-right>\n              <button (click)="rating(item)" ion-button color="logo_border" clear small icon-start>\n                <ion-icon name="md-star"></ion-icon>\n                Edit Ratings\n              </button>\n            </ion-col>\n      \n          </ion-row>\n        <ion-card-content>\n        <ion-slides pager>\n          <ion-slide *ngFor="let item of item.imageurl">\n            <img class="imageSlider" [src]="item">\n          </ion-slide>\n        </ion-slides>\n          <ion-card-title>{{item.name}}</ion-card-title>\n          <ion-row>\n            <ion-col class="infoData">\n            <div *ngIf="item.averageRate == 0">\n              <ion-icon color="logo_border" id="star1" name="star-outline"></ion-icon>\n              <ion-icon color="logo_border" id="star2" name="star-outline"></ion-icon>\n              <ion-icon color="logo_border" id="star3" name="star-outline"></ion-icon>\n              <ion-icon color="logo_border" id="star4" name="star-outline"></ion-icon>\n              <ion-icon color="logo_border" id="star5" name="star-outline"></ion-icon>\n              {{item.peopleRated}} Reviews\n            </div>\n            <div *ngIf="item.averageRate == 1">\n              <ion-icon color="logo_border" id="star1" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star2" name="star-outline"></ion-icon>\n              <ion-icon color="logo_border" id="star3" name="star-outline"></ion-icon>\n              <ion-icon color="logo_border" id="star4" name="star-outline"></ion-icon>\n              <ion-icon color="logo_border" id="star5" name="star-outline"></ion-icon>\n              {{item.peopleRated}} Reviews\n            </div>\n            <div *ngIf="item.averageRate == 2">\n              <ion-icon color="logo_border" id="star1" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star2" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star3" name="star-outline"></ion-icon>\n              <ion-icon color="logo_border" id="star4" name="star-outline"></ion-icon>\n              <ion-icon color="logo_border" id="star5" name="star-outline"></ion-icon>\n              {{item.peopleRated}} Reviews\n            </div>\n            <div *ngIf="item.averageRate == 3">\n              <ion-icon color="logo_border" id="star1" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star2" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star3" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star4" name="star-outline"></ion-icon>\n              <ion-icon color="logo_border" id="star5" name="star-outline"></ion-icon>\n              {{item.peopleRated}} Reviews\n            </div>\n            <div *ngIf="item.averageRate == 4">\n              <ion-icon color="logo_border" id="star1" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star2" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star3" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star4" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star5" name="star-outline"></ion-icon>\n              {{item.peopleRated}} Reviews\n            </div>\n            <div *ngIf="item.averageRate == 5">\n              <ion-icon color="logo_border" id="star1" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star2" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star3" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star4" name="star"></ion-icon>\n              <ion-icon color="logo_border" id="star5" name="star"></ion-icon>\n              {{item.peopleRated}} Reviews\n            </div>  \n            </ion-col>\n            <ion-col class="infoData">\n              <span>{{item.address}}</span>\n            </ion-col>\n          </ion-row>\n          <div id="content">{{item.description}}</div>\n          <ion-row *ngIf="item.category == 1 || item.category == 2 || item.category == 3">\n            <ion-col>\n                <button ion-button block round (click)="addService(item.key)">Add Service</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button block round (click)="addProduct(item.key)">Add Product</button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\places\places.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PlacesPage);
    return PlacesPage;
}());

//# sourceMappingURL=places.js.map

/***/ })

});
//# sourceMappingURL=14.js.map