webpackJsonp([24],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRatingPageModule", function() { return EditRatingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_rating__ = __webpack_require__(764);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditRatingPageModule = /** @class */ (function () {
    function EditRatingPageModule() {
    }
    EditRatingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_rating__["a" /* EditRatingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_rating__["a" /* EditRatingPage */]),
            ],
        })
    ], EditRatingPageModule);
    return EditRatingPageModule;
}());

//# sourceMappingURL=edit-rating.module.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRatingPage; });
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




var EditRatingPage = /** @class */ (function () {
    function EditRatingPage(navCtrl, afAuth, viewCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.rate = false;
        this.dateTodaty = new Date();
        this.name = this.navParams.data.name;
        this.key = this.navParams.data.key;
        console.log(this.dateTodaty);
        this.initRating();
    }
    EditRatingPage.prototype.exit = function () {
        this.viewCtrl.dismiss();
    };
    EditRatingPage.prototype.initRating = function () {
        var _this = this;
        if (this.navParams.data.userEmail == this.afAuth.auth.currentUser.email) {
            this.userRestricted = true;
        }
        else {
            this.userRestricted = false;
        }
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/');
        var ratingRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('rating');
        var user;
        ref.on('value', function (data) {
            data.forEach(function (data) {
                user = data.val();
            });
            ratingRef.on('value', function (data) {
                var tmp = [];
                data.forEach(function (data) {
                    if (user.email == data.val().email) {
                        if (data.val().establishmentName == _this.name) {
                            _this.rate = true;
                            tmp.push({
                                key: data.key,
                                establishmentName: data.val().establishmentName,
                                email: data.val().email,
                                rating: data.val().rating,
                                comments: data.val().comments,
                                profilePic: user.profilePicUrl
                            });
                        }
                    }
                });
                _this.ratings = tmp.reverse();
                _this.loadedRatings = tmp;
                _this.peopleRated = _this.ratings.length;
                _this.getAverageRating();
                // this.setNewData();
            });
        });
    };
    EditRatingPage.prototype.initializeItem = function () {
        this.ratings = this.loadedRatings;
    };
    EditRatingPage.prototype.getItems = function (searchbar) {
        this.initializeItem();
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.ratings = this.ratings.filter(function (data) {
            if (data.email && q) {
                if (data.email.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    EditRatingPage.prototype.removeRating = function (data) {
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('rating/' + data);
        var alert = this.alertCtrl.create({
            message: 'Are you sure you want to delete this rating?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel Clicked');
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
    EditRatingPage.prototype.getAverageRating = function () {
        var rating = [];
        this.ratings.map(function (data) {
            return rating.push(data.rating);
        });
        if (rating.length == 0) {
            this.averageRate = 0;
        }
        else {
            var rate = rating.reduce(function (total, score) { return total + score; }) / rating.length;
            this.averageRate = Math.round(rate);
        }
    };
    EditRatingPage.prototype.setNewData = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('establishment/' + this.key);
        ref.set({
            name: this.navParams.data.name,
            address: this.navParams.data.address,
            description: this.navParams.data.description,
            phone: this.navParams.data.phone,
            latitude: this.navParams.data.latitude,
            longitude: this.navParams.data.longitude,
            website: this.navParams.data.website,
            category: this.navParams.data.category,
            status: this.navParams.data.status,
            images: this.navParams.data.imageurl,
            averageRate: this.averageRate,
            peopleRated: this.peopleRated
        });
    };
    EditRatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-rating',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\edit-rating\edit-rating.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-row>\n        <ion-col col-10>\n          <ion-searchbar (ionInput)="getItems($event)" placeholder="Search For Email"></ion-searchbar>\n        </ion-col>\n    \n        <ion-col col-2>\n          <ion-buttons end>\n            <button (click)="exit()" color="theme_font" clear ion-button icon-only><ion-icon name="ios-close-circle-outline"></ion-icon></button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid fixed>\n      <ion-card class="ratingCard" *ngFor="let item of ratings">\n        <ion-row *ngIf="rate" padding>\n          <ion-col col-6>\n            <ion-avatar>\n              <img class="profilePic" [src]="item.profilePic">\n            </ion-avatar>\n          </ion-col>\n  \n          <ion-col text-center center class="ratingInfo" col-6>\n            <div>{{item.email}}</div>\n              <div *ngIf="item.rating == 1">\n                <ion-icon id="star1" name="star"></ion-icon>\n              </div>\n              <div *ngIf="item.rating == 2">\n                <ion-icon id="star1" name="star"></ion-icon>\n                <ion-icon id="star2" name="star"></ion-icon>\n              </div>\n              <div *ngIf="item.rating == 3">\n                <ion-icon id="star1" name="star"></ion-icon>\n                <ion-icon id="star2" name="star"></ion-icon>\n                <ion-icon id="star3" name="star"></ion-icon>\n              </div>\n              <div *ngIf="item.rating == 4">\n                <ion-icon id="star1" name="star"></ion-icon>\n                <ion-icon id="star2" name="star"></ion-icon>\n                <ion-icon id="star3" name="star"></ion-icon>\n                <ion-icon id="star4" name="star"></ion-icon>\n              </div>\n              <div *ngIf="item.rating == 5">\n                <ion-icon id="star1" name="star"></ion-icon>\n                <ion-icon id="star2" name="star"></ion-icon>\n                <ion-icon id="star3" name="star"></ion-icon>\n                <ion-icon id="star4" name="star"></ion-icon>\n                <ion-icon id="star5" name="star"></ion-icon>\n              </div>\n          </ion-col>\n        </ion-row>\n  \n       <div class="ratingComment" padding center text-justify>{{item.comments}}</div>\n       <ion-row text-center center>\n         <ion-col *ngIf="!userRestricted">\n            <button center color="logo_border" ion-button round (click)="removeRating(item.key)">Delete</button>\n         </ion-col>\n       </ion-row>\n      </ion-card>\n\n      <ion-card *ngIf="!rate" padding>\n        <ion-row>\n          <ion-col center text-center>\n            <div class="rateHeader">No Ratings/Reviews Posted Yet</div>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\edit-rating\edit-rating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], EditRatingPage);
    return EditRatingPage;
}());

//# sourceMappingURL=edit-rating.js.map

/***/ })

});
//# sourceMappingURL=24.js.map