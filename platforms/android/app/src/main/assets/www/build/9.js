webpackJsonp([9],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristPlacesPageModule", function() { return TouristPlacesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tourist_places__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TouristPlacesPageModule = /** @class */ (function () {
    function TouristPlacesPageModule() {
    }
    TouristPlacesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tourist_places__["a" /* TouristPlacesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tourist_places__["a" /* TouristPlacesPage */]),
            ],
        })
    ], TouristPlacesPageModule);
    return TouristPlacesPageModule;
}());

//# sourceMappingURL=tourist-places.module.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouristPlacesPage; });
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



var TouristPlacesPage = /** @class */ (function () {
    function TouristPlacesPage(platform, navCtrl, alertCtrl, navParams) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        if (this.platform.is('mobile')) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        this.getEstablishments(5);
    }
    TouristPlacesPage.prototype.getEstablishments = function (element) {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('establishment');
        ref.on('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                if (data.val().status == 1) {
                    var info = {
                        key: data.key,
                        name: data.val().name,
                        address: data.val().address,
                        peopleRated: data.val().peopleRated,
                        averageRate: data.val().averageRate,
                        description: data.val().description,
                        latitude: data.val().latitude,
                        longitude: data.val().longitude,
                        permits: data.val().permits,
                        imageurl: data.val().images,
                        category: data.val().category,
                        phone: data.val().phone,
                        status: data.val().status,
                        website: data.val().website,
                        userEmail: data.val().userEmail,
                        userType: data.val().userType
                    };
                    if (element == 5) {
                        arr.push(info);
                    }
                    else if (element == 1) {
                        if (info.category == 1) {
                            arr.push(info);
                        }
                    }
                    else if (element == 2) {
                        if (info.category == 2) {
                            arr.push(info);
                        }
                    }
                    else if (element == 3) {
                        if (info.category == 3) {
                            arr.push(info);
                        }
                    }
                    else if (element == 4) {
                        if (info.category == 4) {
                            arr.push(info);
                        }
                    }
                }
                return false;
            });
            _this.establishments = arr.sort(function (a, b) { return parseFloat(a.averageRate) - parseFloat(b.averageRate); }).reverse();
            _this.loadedEst = arr.sort(function (a, b) { return parseFloat(a.averageRate) - parseFloat(b.averageRate); }).reverse();
            console.log(_this.establishments);
        });
    };
    TouristPlacesPage.prototype.initializeItem = function () {
        this.establishments = this.loadedEst;
    };
    TouristPlacesPage.prototype.getItems = function (searchbar) {
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
    };
    TouristPlacesPage.prototype.filterEst = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Category');
        alert.addInput({
            type: 'radio',
            label: 'Restaurant',
            value: '1',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Beach',
            value: '2',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Hotel',
            value: '3',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Landmark',
            value: '4',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'All',
            value: '5',
            checked: false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.getEstablishments(data);
            }
        });
        alert.present();
    };
    TouristPlacesPage.prototype.pushEst = function (key) {
        this.navCtrl.setRoot('EstablishmentPage', key);
    };
    TouristPlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tourist-places',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\tourist-places\tourist-places.html"*/'<ion-content *ngIf="!mobile">\n  <div class="subBanner"></div>\n  <ion-grid fixed>\n\n      <ion-row class="menuRow">\n        <ion-col col-6>\n          <ion-searchbar (ionInput)="getItems($event)" placeholder="Search for a  Place"></ion-searchbar>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button icon-only outline color="logo_border" (click)="filterEst()"><ion-icon name="ios-funnel"></ion-icon>Category &nbsp;</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-card class="places animated fadeIn" ion-col *ngFor="let item of establishments" col-12 col-md-4 col-lg-12>  \n            <ion-card-content>\n            <ion-row>\n              <ion-col>\n                 <img class="imageSlider" [src]="item.imageurl[0]">\n              </ion-col>\n\n              <ion-col>\n                  <ion-card-title center text-center>{{item.name}}</ion-card-title>\n                  <ion-row>\n                    <ion-col class="infoData">\n                    <div *ngIf="item.averageRate == 0">\n                      <ion-icon color="theme_font" id="star1" name="star-outline"></ion-icon>\n                      <ion-icon color="theme_font" id="star2" name="star-outline"></ion-icon>\n                      <ion-icon color="theme_font" id="star3" name="star-outline"></ion-icon>\n                      <ion-icon color="theme_font" id="star4" name="star-outline"></ion-icon>\n                      <ion-icon color="theme_font" id="star5" name="star-outline"></ion-icon>\n                      {{item.peopleRated}} Reviews\n                    </div>\n                    <div *ngIf="item.averageRate == 1">\n                      <ion-icon color="theme_font" id="star1" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star2" name="star-outline"></ion-icon>\n                      <ion-icon color="theme_font" id="star3" name="star-outline"></ion-icon>\n                      <ion-icon color="theme_font" id="star4" name="star-outline"></ion-icon>\n                      <ion-icon color="theme_font" id="star5" name="star-outline"></ion-icon>\n                      {{item.peopleRated}} Reviews\n                    </div>\n                    <div *ngIf="item.averageRate == 2">\n                      <ion-icon color="theme_font" id="star1" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star2" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star3" name="star-outline"></ion-icon>\n                      <ion-icon color="theme_font" id="star4" name="star-outline"></ion-icon>\n                      <ion-icon color="theme_font" id="star5" name="star-outline"></ion-icon>\n                      {{item.peopleRated}} Reviews\n                    </div>\n                    <div *ngIf="item.averageRate == 3">\n                      <ion-icon color="theme_font" id="star1" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star2" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star3" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star4" name="star-outline"></ion-icon>\n                      <ion-icon color="theme_font" id="star5" name="star-outline"></ion-icon>\n                      {{item.peopleRated}} Reviews\n                    </div>\n                    <div *ngIf="item.averageRate == 4">\n                      <ion-icon color="theme_font" id="star1" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star2" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star3" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star4" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star5" name="star-outline"></ion-icon>\n                      {{item.peopleRated}} Reviews\n                    </div>\n                    <div *ngIf="item.averageRate == 5">\n                      <ion-icon color="theme_font" id="star1" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star2" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star3" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star4" name="star"></ion-icon>\n                      <ion-icon color="theme_font" id="star5" name="star"></ion-icon>\n                      {{item.peopleRated}} Reviews\n                    </div>  \n                    </ion-col>\n                    <ion-col text-center class="infoData">\n                      <span>{{item.address}}</span>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col text-center class="infoData">\n                      <span *ngIf="item.category == 1">Restaurant</span>\n                      <span *ngIf="item.category == 2">Beach</span>\n                      <span *ngIf="item.category == 3">Hotel</span>\n                      <span *ngIf="item.category == 4">Landmark</span>\n                    </ion-col>\n                  </ion-row>\n                  <div id="content">{{item.description}}</div>\n                  <button ion-button round block color="dark" (click)="pushEst(item)">Click for More</button>\n              </ion-col>\n            </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n<ion-content *ngIf="mobile">\n  <ion-row class="menuRow">\n    <ion-col>\n      <ion-searchbar (ionInput)="getItems($event)" placeholder="Search for a  Place"></ion-searchbar>\n    </ion-col>\n  </ion-row>\n\n  <div padding>\n    <button ion-button icon-only outline block (click)="filterEst()"><ion-icon name="ios-funnel"></ion-icon> Filter</button>\n  </div>\n  \n\n  <ion-card (click)="pushEst(item)" *ngFor="let item of establishments">\n    <ion-card-header>\n      <img [src]="item.imageurl[0]">\n      <ion-card-title center text-center>{{item.name}}</ion-card-title>\n      \n      <ion-row>\n          <div *ngIf="item.averageRate == 0">\n            <ion-icon color="theme_font" id="star1" name="star-outline"></ion-icon>\n            <ion-icon color="theme_font" id="star2" name="star-outline"></ion-icon>\n            <ion-icon color="theme_font" id="star3" name="star-outline"></ion-icon>\n            <ion-icon color="theme_font" id="star4" name="star-outline"></ion-icon>\n            <ion-icon color="theme_font" id="star5" name="star-outline"></ion-icon>\n            <div class="contentMobile">{{item.peopleRated}} Reviews</div>\n          </div>\n          <div *ngIf="item.averageRate == 1">\n            <ion-icon color="theme_font" id="star1" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star2" name="star-outline"></ion-icon>\n            <ion-icon color="theme_font" id="star3" name="star-outline"></ion-icon>\n            <ion-icon color="theme_font" id="star4" name="star-outline"></ion-icon>\n            <ion-icon color="theme_font" id="star5" name="star-outline"></ion-icon>\n            <div class="contentMobile">{{item.peopleRated}} Reviews</div>\n          </div>\n          <div *ngIf="item.averageRate == 2">\n            <ion-icon color="theme_font" id="star1" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star2" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star3" name="star-outline"></ion-icon>\n            <ion-icon color="theme_font" id="star4" name="star-outline"></ion-icon>\n            <ion-icon color="theme_font" id="star5" name="star-outline"></ion-icon>\n            <div class="contentMobile">{{item.peopleRated}} Reviews</div>\n          </div>\n          <div *ngIf="item.averageRate == 3">\n            <ion-icon color="theme_font" id="star1" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star2" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star3" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star4" name="star-outline"></ion-icon>\n            <ion-icon color="theme_font" id="star5" name="star-outline"></ion-icon>\n            <div class="contentMobile">{{item.peopleRated}} Reviews</div>\n          </div>\n          <div *ngIf="item.averageRate == 4">\n            <ion-icon color="theme_font" id="star1" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star2" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star3" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star4" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star5" name="star-outline"></ion-icon>\n            <div class="contentMobile">{{item.peopleRated}} Reviews</div>\n          </div>\n          <div *ngIf="item.averageRate == 5">\n            <ion-icon color="theme_font" id="star1" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star2" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star3" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star4" name="star"></ion-icon>\n            <ion-icon color="theme_font" id="star5" name="star"></ion-icon>\n            <div class="contentMobile">{{item.peopleRated}} Reviews</div>\n          </div>  \n        </ion-row>\n\n    </ion-card-header>\n    <ion-card-content>\n      <div id="content" class="contentMobile">{{item.description}}</div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\tourist-places\tourist-places.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TouristPlacesPage);
    return TouristPlacesPage;
}());

//# sourceMappingURL=tourist-places.js.map

/***/ })

});
//# sourceMappingURL=9.js.map