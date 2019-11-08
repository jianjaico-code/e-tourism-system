webpackJsonp([34],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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



var HomePage = /** @class */ (function () {
    function HomePage(platform, navCtrl, modalCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        if (this.platform.is('mobile')) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        this.getNews();
    }
    HomePage.prototype.getNews = function () {
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
                    image: data.val().image,
                    name: data.val().name,
                    title: data.val().title,
                    description: data.val().description,
                });
            });
            _this.data = arr.reverse();
        });
    };
    HomePage.prototype.news = function (key) {
        var modal = this.modalCtrl.create('TouristNewsPage', key);
        modal.present();
    };
    HomePage.prototype.pushHistoricalBackground = function () {
        this.navCtrl.setRoot('HistoricalBackgroundPage');
    };
    HomePage.prototype.pushGettingHere = function () {
        this.navCtrl.setRoot('GettingHerePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\home\home.html"*/'<ion-content *ngIf="!mobile">\n    <ion-slides class="animated fadeInDown" autoplay="3000" loop="true" speed="2000">\n      <ion-slide>\n        <img class="banner" src="../../assets/imgs/banner2.jpg">\n      </ion-slide>\n      <ion-slide>\n        <img class="banner" src="../../assets/imgs/banner.jpg">\n      </ion-slide>\n      <ion-slide>\n        <img class="banner" src="../../assets/imgs/banner4.jpg">\n      </ion-slide>\n    </ion-slides>\n  <ion-grid fixed>\n\n    <ion-row>\n      <ion-col>\n        <ion-card class="information">\n          <ion-card-header center text-center>\n            HISTORICAL BACKGROUND\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row>\n              <ion-col>\n                  <img class="infoImage" src="../../assets/imgs/historical.jpg">\n                  <button (click)="pushHistoricalBackground()" ion-button round outline block color="logo-border">Click for More</button>\n              </ion-col>\n              <ion-col class="infoText">\n                  Gingoog is a Manobo word for good luck.  The word implies good fortune, thus Gingoog means the city of Good Luck.  Gingoog originated from a thriving native settlement of Manobo tribe in the area, known today as Barangay Daan-Lungsod.\n              </ion-col>\n            </ion-row>\n           \n          </ion-card-content> \n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <ion-card class="information">\n          <ion-card-header center text-center>\n            GETTING HERE \n          </ion-card-header>\n          <ion-card-content>\n          <ion-row>\n            <ion-col class="infoText">\n                Laguindingan airport (approx. 130 kms away) and Butuan City airport (approx. 75 kms away) have daily flights to and from Manila through Philippine Airlines and Cebu Pacific Air.\n            </ion-col>\n            <ion-col>\n                <img class="infoImage" src="../../assets/imgs/gettinghere.jpg">\n                <button (click)="pushGettingHere()" ion-button round outline block color="logo-border">Click for More</button>\n            </ion-col>\n          </ion-row>\n          </ion-card-content> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card class="visionCard">\n          <img class="visionMission" src="../../assets/imgs/Mission Vision.jpg">\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <h1>Featured News</h1>\n    <ion-scroll scrollX="true" direction="x">\n        <ion-card class="newsContent" ion-col *ngFor="let item of data" col-6 col-md-4 col-lg-4>\n          <img *ngIf="item.image" [src]="item.image">\n          <ion-card-content padding>\n              <div class="newsTitle" text-wrap>{{item.title}}</div>\n            <button (click)="news(item)" ion-button color="hellow_world" round block small icon-start>\n              <ion-icon name=\'ios-book-outline\'></ion-icon>\n              Read More \n            </button>\n            <ion-row>\n              <ion-col center text-center>\n                <p>by: {{item.name}}</p>\n              </ion-col>\n              <ion-col center text-center>\n                <span>{{item.date}}</span>\n              </ion-col>\n            </ion-row>\n            <div *ngIf="item.image" id="content">{{item.description}}...</div>\n            <div *ngIf="!item.image" id="noImage">{{item.description}}</div>\n          </ion-card-content>\n        </ion-card>\n    </ion-scroll>\n\n    <ion-row>\n      <ion-col>\n                <div class="faqHeader">FAQ</div>\n                <hr>\n                <ion-row>\n                  <ion-col>\n                    <h1>Q. Where is the Tourism Office?</h1>\n                    <p>A. The Tourism Officer is located at Barangay Sample</p>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <h1>Q. Where can I find information about the City?</h1>\n                    <p>A. The Tourism Officer is located at Barangay Sample</p>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <h1>Q. How can I contact the Establishment Owner for more details?</h1>\n                    <p>A. The Tourism Officer is located at Barangay Sample</p>\n                  </ion-col>\n                </ion-row>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n<ion-content *ngIf="mobile">\n    <ion-slides class="animated fadeInDown slidesMobile" autoplay="3000" loop="true" speed="2000">\n      <ion-slide>\n        <img class="bannerMobile" src="../../assets/imgs/banner2.jpg">\n      </ion-slide>\n      <ion-slide>\n        <img class="bannerMobile" src="../../assets/imgs/banner.jpg">\n      </ion-slide>\n      <ion-slide>\n        <img class="bannerMobile" src="../../assets/imgs/banner4.jpg">\n      </ion-slide>\n    </ion-slides>\n\n    <ion-row>\n        <ion-col>\n          <ion-card class="information">\n            <ion-card-header center text-center>\n              HISTORICAL BACKGROUND\n            </ion-card-header>\n            <ion-card-content>\n              <ion-row>\n                <ion-col>\n                    <img class="infoImageMobile" src="../../assets/imgs/historical.jpg">\n                    <button (click)="pushHistoricalBackground()" ion-button round outline block color="logo-border">Click for More</button>\n                </ion-col>\n                <ion-col class="infoTextMobile">\n                    Gingoog is a Manobo word for good luck.  The word implies good fortune, thus Gingoog means the city of Good Luck.  Gingoog originated from a thriving native settlement of Manobo tribe in the area, known today as Barangay Daan-Lungsod.\n                </ion-col>\n              </ion-row>\n             \n            </ion-card-content> \n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n            <ion-card class="information">\n              <ion-card-header center text-center>\n                GETTING HERE \n              </ion-card-header>\n              <ion-card-content>\n              <ion-row>\n                <ion-col class="infoTextMobile">\n                    Laguindingan airport (approx. 130 kms away) and Butuan City airport (approx. 75 kms away) have daily flights to and from Manila through Philippine Airlines and Cebu Pacific Air.\n                </ion-col>\n                <ion-col>\n                    <img class="infoImageMobile" src="../../assets/imgs/gettinghere.jpg">\n                    <button (click)="pushGettingHere()" ion-button round outline block color="logo-border">Click for More</button>\n                </ion-col>\n              </ion-row>\n              </ion-card-content> \n            </ion-card>\n          </ion-col>\n      </ion-row>\n\n      <h1>Featured News</h1>\n    <ion-scroll class="newsScrollMobile" scrollX="true" direction="x">\n        <ion-card class="newsContent newsContentMobile" ion-col *ngFor="let item of data" col-6 col-md-4 col-lg-4>\n          <img class="newsMobile" *ngIf="item.image" [src]="item.image">\n          <ion-card-content padding>\n              <div class="newsTitle" text-wrap>{{item.title}}</div>\n            <button (click)="news(item)" ion-button color="hellow_world" round block small icon-start>\n              <ion-icon name=\'ios-book-outline\'></ion-icon>\n              Read More \n            </button>\n            <ion-row>\n              <ion-col center text-center>\n                <p>by: {{item.name}}</p>\n              </ion-col>\n              <ion-col center text-center>\n                <span>{{item.date}}</span>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n    </ion-scroll>\n</ion-content>\n\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-establishment/add-establishment.module": [
		722,
		33
	],
	"../pages/add-event/add-event.module": [
		723,
		32
	],
	"../pages/add-news/add-news.module": [
		724,
		31
	],
	"../pages/add-product/add-product.module": [
		725,
		30
	],
	"../pages/add-rate/add-rate.module": [
		752,
		1
	],
	"../pages/add-service/add-service.module": [
		726,
		29
	],
	"../pages/businessman-message/businessman-message.module": [
		727,
		28
	],
	"../pages/edit-profile/edit-profile.module": [
		730,
		27
	],
	"../pages/edit-rating/edit-rating.module": [
		731,
		26
	],
	"../pages/establishment/establishment.module": [
		753,
		0
	],
	"../pages/event/event.module": [
		728,
		25
	],
	"../pages/fare/fare.module": [
		729,
		24
	],
	"../pages/func-category/func-category.module": [
		732,
		23
	],
	"../pages/func-events/func-events.module": [
		736,
		22
	],
	"../pages/func-news/func-news.module": [
		735,
		21
	],
	"../pages/func-places/func-places.module": [
		755,
		2
	],
	"../pages/getting-here/getting-here.module": [
		733,
		20
	],
	"../pages/historical-background/historical-background.module": [
		734,
		19
	],
	"../pages/login/login.module": [
		738,
		5
	],
	"../pages/mapping/mapping.module": [
		737,
		18
	],
	"../pages/message-list-tourist/message-list-tourist.module": [
		739,
		17
	],
	"../pages/message-list/message-list.module": [
		754,
		16
	],
	"../pages/news/news.module": [
		740,
		15
	],
	"../pages/places/places.module": [
		745,
		14
	],
	"../pages/reset-password/reset-password.module": [
		741,
		4
	],
	"../pages/signup/signup.module": [
		743,
		3
	],
	"../pages/tourist-events/tourist-events.module": [
		742,
		13
	],
	"../pages/tourist-message-to-businessman/tourist-message-to-businessman.module": [
		746,
		12
	],
	"../pages/tourist-message/tourist-message.module": [
		748,
		11
	],
	"../pages/tourist-news/tourist-news.module": [
		744,
		10
	],
	"../pages/tourist-places/tourist-places.module": [
		747,
		9
	],
	"../pages/tourist-profile/tourist-profile.module": [
		751,
		8
	],
	"../pages/view-permit/view-permit.module": [
		749,
		7
	],
	"../pages/view-product-service/view-product-service.module": [
		750,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessmanPage; });
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




var BusinessmanPage = /** @class */ (function () {
    function BusinessmanPage(navCtrl, menuCtrl, platform, navParams, afAuth, modalCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.modalCtrl = modalCtrl;
        if (this.platform.is('mobile')) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        this.key = afAuth.auth.currentUser.email;
        this.initUser();
    }
    BusinessmanPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    BusinessmanPage.prototype.initUser = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/');
        ref.on('value', function (data) {
            data.forEach(function (data) {
                if (data.key == _this.afAuth.auth.currentUser.uid) {
                    _this.userType = data.val().usertypeid;
                }
            });
        });
    };
    BusinessmanPage.prototype.functionPlace = function (key, status, user) {
        var modal = this.modalCtrl.create('FuncPlacesPage', { key: key, status: status, user: user });
        modal.present();
    };
    BusinessmanPage.prototype.ngOnInit = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('establishment');
        var catRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('category');
        ref.on('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                catRef.once('value', function (category) {
                    category.forEach(function (category) {
                        if (category.val().cat_val == data.val().category) {
                            if (data.val().userEmail == _this.key) {
                                if (data.val().userType == 2) {
                                    arr.push({
                                        key: data.key,
                                        name: data.val().name,
                                        address: data.val().address,
                                        peopleRated: data.val().peopleRated,
                                        averageRate: data.val().averageRate,
                                        description: data.val().description,
                                        latitude: data.val().latitude,
                                        permits: data.val().permits,
                                        longitude: data.val().longitude,
                                        status: data.val().status,
                                        imageurl: data.val().images,
                                        website: data.val().website,
                                        phone: data.val().phone,
                                        userEmail: data.val().userEmail,
                                        category: category.val().name,
                                        userType: data.val().userType
                                    });
                                }
                            }
                        }
                    });
                    _this.places = arr.sort(function (a, b) { return parseFloat(a.averageRate) - parseFloat(b.averageRate); });
                });
            });
        });
    };
    BusinessmanPage.prototype.viewPlace = function (data, user) {
        this.navCtrl.push('EstablishmentPage', { user: user, data: data });
    };
    BusinessmanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-businessman',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\businessman\businessman.html"*/'<ion-content *ngIf="!mobile" padding>\n    <ion-grid fixed>\n        \n        <ion-card no-margin margin-bottom>\n          <ion-item class="border-bottom">\n\n              <ion-row>\n                  <ion-col>\n                    <ion-icon tappable menuToggle style="zoom:1.5;" name="menu"></ion-icon>\n                  </ion-col>\n        \n                  <ion-col>\n                    <div class="pull-right">\n                      <ion-icon name="pin" color="primary"></ion-icon>\n                      <span tappable (click)="functionPlace(null, false, userType)">Add a Place</span>\n                    </div>\n                  </ion-col>\n                </ion-row>\n\n          </ion-item>  \n\n          <ion-item class="animated fadeIn">\n            <table *ngIf="places" id="dd" datatable [dtOptions]="dtOptions">\n              <thead>\n                <tr>\n                  <th>Rating</th>\n                  <th>Name</th>\n                  <th>Category</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor="let item of places" text-center center>\n                  <td>\n                    <div *ngIf="item.averageRate == 0">\n                      <ion-icon color="dark" id="star1" name="star-outline"></ion-icon>\n                      <ion-icon color="dark" id="star2" name="star-outline"></ion-icon>\n                      <ion-icon color="dark" id="star3" name="star-outline"></ion-icon>\n                      <ion-icon color="dark" id="star4" name="star-outline"></ion-icon>\n                      <ion-icon color="dark" id="star5" name="star-outline"></ion-icon>\n                      {{item.peopleRated}} Reviews\n                    </div>\n                    <div *ngIf="item.averageRate == 1">\n                      <ion-icon color="dark" id="star1" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star2" name="star-outline"></ion-icon>\n                      <ion-icon color="dark" id="star3" name="star-outline"></ion-icon>\n                      <ion-icon color="dark" id="star4" name="star-outline"></ion-icon>\n                      <ion-icon color="dark" id="star5" name="star-outline"></ion-icon>\n                      {{item.peopleRated}} Reviews\n                    </div>\n                    <div *ngIf="item.averageRate == 2">\n                      <ion-icon color="dark" id="star1" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star2" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star3" name="star-outline"></ion-icon>\n                      <ion-icon color="dark" id="star4" name="star-outline"></ion-icon>\n                      <ion-icon color="dark" id="star5" name="star-outline"></ion-icon>\n                      {{item.peopleRated}} Reviews\n                    </div>\n                    <div *ngIf="item.averageRate == 3">\n                      <ion-icon color="dark" id="star1" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star2" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star3" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star4" name="star-outline"></ion-icon>\n                      <ion-icon color="dark" id="star5" name="star-outline"></ion-icon>\n                      {{item.peopleRated}} Reviews\n                    </div>\n                    <div *ngIf="item.averageRate == 4">\n                      <ion-icon color="dark" id="star1" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star2" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star3" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star4" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star5" name="star-outline"></ion-icon>\n                      {{item.peopleRated}} Reviews\n                    </div>\n                    <div *ngIf="item.averageRate == 5">\n                      <ion-icon color="dark" id="star1" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star2" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star3" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star4" name="star"></ion-icon>\n                      <ion-icon color="dark" id="star5" name="star"></ion-icon>\n                      {{item.peopleRated}} Reviews\n                    </div>  \n                  </td>\n                  <td class="dataTitle">{{ item.name }}</td>\n                  <td>\n                    <span>{{item.category}}</span>\n                  </td>\n                  <td><button ion-button (click)="viewPlace(item, userType)">View</button></td>\n                </tr>\n              </tbody>\n              </table>\n          </ion-item>\n        </ion-card>\n       </ion-grid>\n</ion-content>\n\n<ion-header *ngIf="mobile">\n  <ion-navbar padding color="navbar_color" >\n      <ion-row>\n        <ion-col col-3>\n          <ion-icon tappable (click)="toggleMenu()" style="zoom:1.5;" name="menu"></ion-icon>\n        </ion-col>\n  \n        <ion-col col-9>\n          <ion-searchbar (ionInput)="getItems($event)" placeholder="Search for a  Place"></ion-searchbar>\n        </ion-col>\n      </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="mobile">\n  <ion-list *ngFor="let item of places">\n    <ion-item class="border-bottom">\n      <h2>{{item.name}} &nbsp;<span *ngIf="item.status" class="dot"></span></h2>\n      <div id="inactive" *ngIf="item.status == 2">Inactive</div>\n      <div id="active" *ngIf="item.status == 1">Active</div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\businessman\businessman.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], BusinessmanPage);
    return BusinessmanPage;
}());

//# sourceMappingURL=businessman.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, platform, menuCtrl, alertCtrl, modalCtrl, loadingCtrl, authData, afAuth) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authData = authData;
        this.afAuth = afAuth;
        if (this.platform.is('mobile')) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
    }
    AdminPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    AdminPage.prototype.initUpdate = function (key) {
        var _this = this;
        var status;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/' + key.key);
        if (key.status) {
            status = "2";
        }
        else if (!key.status) {
            status = "1";
        }
        var data = this.alertCtrl.create({
            message: "Are you sure to change " + key.email + " Status?",
            buttons: [
                {
                    text: "No",
                    handler: function () { }
                },
                {
                    text: "Yes",
                    handler: function () {
                        console.log(key.key);
                        var loader = _this.loadingCtrl.create();
                        loader.present();
                        setTimeout(function () {
                            ref.update({
                                email: key.email,
                                address: key.address,
                                name: key.name,
                                status: status,
                                profilePicUrl: key.profilePicUrl,
                                usertypeid: key.usertypeid
                            }).then(function () {
                                loader.dismiss();
                            });
                        }, 2000);
                    }
                },
            ]
        });
        data.present();
    };
    AdminPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/');
        ref.once('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                var reference = data.val().status;
                var status;
                if (reference == 1) {
                    status = true;
                }
                else if (reference == 2) {
                    status = false;
                }
                if (data.val().usertypeid != 3) {
                    arr.push({
                        key: data.key,
                        email: data.val().email,
                        name: data.val().name,
                        address: data.val().address,
                        status: status,
                        profilePicUrl: data.val().profilePicUrl,
                        usertypeid: data.val().usertypeid
                    });
                }
            });
            _this.users = arr.reverse();
            _this.loadedUser = arr.reverse();
        });
    };
    AdminPage.prototype.initializeItem = function () {
        this.users = this.loadedUser;
    };
    AdminPage.prototype.getItems = function (searchbar) {
        this.initializeItem();
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.users = this.users.filter(function (data) {
            if (data.name && q) {
                if (data.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    AdminPage.prototype.updateStatus = function (user) {
        var loader = this.loadingCtrl.create();
        loader.present();
        var status;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/' + user.key);
        if (user.status) {
            status = "1";
        }
        else if (!user.status) {
            status = "2";
        }
        setTimeout(function () {
            ref.set({
                email: user.email,
                address: user.address,
                name: user.name,
                status: status,
                profilePicUrl: user.profilePicUrl,
                usertypeid: user.usertypeid
            }).then(function () {
                loader.dismiss();
            });
        }, 2000);
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\admin\admin.html"*/'<ion-content *ngIf="!mobile">\n    <ion-grid fixed>\n      <ion-card no-margin margin-bottom class="full-width">\n        <ion-item class="border-bottom">\n            <h1>Users</h1>\n            <ion-icon tappable (click)="toggleMenu()" style="zoom:1.5;" name="menu"></ion-icon>\n        </ion-item>\n        <ion-item class="animated fadeIn">\n          <table *ngIf="users" datatable [dtOptions]="dtOptions">\n            <thead>\n              <tr>\n                <th></th>\n                <th>Email</th>\n                <th>Name</th>\n                <th>User Type</th>\n                <th>Activate/Deactivate</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor="let item of users" text-center center>\n                <td><img class="userProfilePic" [src]="item.profilePicUrl"></td>\n                <td>{{ item.email }}</td>\n                <td>{{ item.name }}</td>\n                <td>\n                  <span *ngIf="item.usertypeid == 2">Local Businessman</span>\n                  <span *ngIf="item.usertypeid == 1">Tourist</span>\n                </td>\n                <td>\n                  <ion-item>\n                      <ion-toggle [(ngModel)]="item.status" (ngModelChange)="updateStatus(item)"></ion-toggle>\n                  </ion-item>\n                </td>\n              </tr>\n            </tbody>\n            </table>\n        </ion-item>\n        </ion-card>\n    </ion-grid>\n  </ion-content>\n\n  <ion-header *ngIf="mobile">\n    <ion-navbar padding color="navbar_color" >\n        <ion-row>\n          <ion-col col-3>\n            <ion-icon tappable (click)="toggleMenu()" style="zoom:1.5;" name="menu"></ion-icon>\n          </ion-col>\n    \n          <ion-col col-9>\n            <ion-searchbar (ionInput)="getItems($event)" placeholder="Search for a  Place"></ion-searchbar>\n          </ion-col>\n        </ion-row>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding *ngIf="mobile">\n    <ion-list *ngFor="let item of users">\n      <ion-item (click)="initUpdate(item)" class="border-bottom">\n        <ion-avatar item-start>\n          <img [src]="item.profilePicUrl">\n        </ion-avatar>\n        <h2>{{item.name}} &nbsp;<span *ngIf="item.status" class="dot"></span></h2>\n        <span text-right *ngIf="item.status"><ion-icon color="activated" name="radio-button-on"></ion-icon></span>\n        <span *ngIf="!item.status"><ion-icon color="danger" name="radio-button-on"></ion-icon></span>\n        <span *ngIf="item.usertypeid == 2">Local Businessman</span>\n        <span *ngIf="item.usertypeid == 1">Tourist</span>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsTouristPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsTouristPage = /** @class */ (function () {
    function TabsTouristPage(platform, modalCtrl, authData, navCtrl) {
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.authData = authData;
        this.navCtrl = navCtrl;
        this.tabsPlacement = 'top';
        this.tabsLayout = 'title-hide';
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = 'TouristPlacesPage';
        this.tab3Root = 'TouristProfilePage';
        this.tab4Root = 'TouristEventsPage';
        this.tab5Root = 'MessageListTouristPage';
        this.tab6Root = 'MappingPage';
        if (!this.platform.is('mobile')) {
            this.tabsPlacement = 'top';
            this.tabsLayout = 'icon-left';
        }
    }
    TabsTouristPage.prototype.logOut = function () {
        var _this = this;
        this.authData.logoutUser().then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__main_main__["a" /* MainPage */]);
            setTimeout(function () {
                location.reload();
            }, 200);
        });
    };
    TabsTouristPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\tabs-tourist\tabs-tourist.html"*/'<ion-tabs [tabsPlacement]="tabsPlacement" [tabsLayout]="tabsLayout">\n\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="ios-home-outline"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Places" tabIcon="ios-map-outline"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Events" tabIcon="logo-instagram"></ion-tab>\n\n    <ion-tab [root]="tab5Root" tabTitle="Messages" tabIcon="mail"></ion-tab>\n\n    <ion-tab [root]="tab6Root" tabTitle="Map" tabIcon="pin"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="ios-person-outline"></ion-tab>\n\n    <ion-tab tabTitle="Logout" tabIcon="ios-log-out-outline" (ionSelect)="logOut()"></ion-tab>  \n\n</ion-tabs>\n\n\n\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\tabs-tourist\tabs-tourist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], TabsTouristPage);
    return TabsTouristPage;
}());

//# sourceMappingURL=tabs-tourist.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__businessman_businessman__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, modalCtrl, data, loadingCtrl, authData) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.data = data;
        this.loadingCtrl = loadingCtrl;
        this.authData = authData;
        this.pages = [];
        this.privilage = this.data.data.userPrivilage;
        this.initUser();
    }
    MenuPage.prototype.ionViewWillEnter = function () {
        if (this.privilage == 3) {
            this.openPage(__WEBPACK_IMPORTED_MODULE_5__admin_admin__["a" /* AdminPage */]);
        }
        else if (this.privilage == 2) {
            this.openPage(__WEBPACK_IMPORTED_MODULE_3__businessman_businessman__["a" /* BusinessmanPage */]);
        }
    };
    MenuPage.prototype.initUser = function () {
        this.info = {
            name: this.data.data.name,
            pic: this.data.data.pic,
            privilage: this.privilage
        };
        if (this.privilage == 3) {
            this.pages = [
                { title: 'Users', page: __WEBPACK_IMPORTED_MODULE_5__admin_admin__["a" /* AdminPage */], icon: 'ios-people' },
                { title: 'Events', page: 'AddEventPage', icon: 'ios-football' },
                { title: 'News', page: 'AddNewsPage', icon: 'globe' },
                { title: 'Places', page: 'AddEstablishmentPage', icon: 'map' },
                { title: 'Messages', page: 'MessageListPage', icon: 'chatbubbles' }
            ];
        }
        else if (this.privilage == 2) {
            this.pages = [
                { title: 'Home', page: __WEBPACK_IMPORTED_MODULE_3__businessman_businessman__["a" /* BusinessmanPage */], icon: 'home' },
                { title: 'Messages', page: 'MessageListPage', icon: 'chatbubbles' }
            ];
        }
    };
    MenuPage.prototype.logout = function () {
        var _this = this;
        this.authData.logoutUser().then(function () {
            var loading = _this.loadingCtrl.create();
            loading.present();
            _this.authData.logoutUser().then(function () {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__main_main__["a" /* MainPage */]);
                setTimeout(function () {
                    location.reload();
                }, 200);
            });
        });
    };
    MenuPage.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    MenuPage.prototype.editProfile = function () {
        var modal = this.modalCtrl.create('EditProfilePage', { key: this.data.data.key });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\menu\menu.html"*/'<ion-menu side="left" [content]="content">\n  <ion-header>\n    <ion-toolbar class="user-profile">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n              <div class="user-avatar">\n                <img [src]="info.pic">\n              </div>\n          </ion-col>\n          <ion-col padding-top col-8>\n            <h2 ion-text class="no-margin bold text-white">\n              {{info.name}}\n            </h2>\n            <span *ngIf="info.privilage == 1" ion-text color="light">\n              Tourist\n            </span>\n            <span *ngIf="info.privilage == 2" ion-text color="light">\n              Businessman\n            </span>\n            <span *ngIf="info.privilage == 3" ion-text color="light">\n              Tourism Officer\n            </span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row no-padding class="other-data">\n          <ion-col no-padding class="column">\n            <button ion-button (click)="editProfile()" icon-left small full color="light" menuClose>\n              <ion-icon name="contact"></ion-icon>\n              Edit Profile\n            </button>\n          </ion-col>\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n              <ion-icon name="log-out"></ion-icon>\n              Log Out\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-toolbar>\n  </ion-header>\n \n  <ion-content>\n    <ion-list>\n      <button class="sideMenu-Btn" ion-item detail-none block menuClose *ngFor="let p of pages" (click)="openPage(p.page)">\n        <ion-icon item-start [name]="p.icon"></ion-icon>\n        {{ p.title }}\n      </button>\n    </ion-list>\n \n  </ion-content>\n</ion-menu>\n \n<ion-nav #content main [root]="rootPage"></ion-nav>'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], MenuPage);
    return MenuPage;
}());

// if (this.authProvider.isAdmin()) {
//   this.pages = [
//     { title: 'Admin Dashboard', page: 'AdminPage', icon: 'home' },
//     { title: 'Admin Second Page', page: 'AdminSecondPage', icon: 'planet' }
//   ];
//   this.openPage('AdminPage');
// } else {
//   this.pages = [
//     { title: 'User Dashboard', page: 'UserPage', icon: 'home' },
//     { title: 'User Second Page', page: 'UserSecondPage', icon: 'planet' }
//   ];
//   this.openPage('UserPage');
// }
// this.username = this.authProvider.currentUser.name; 
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_main_main__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tourist_tabs_tourist__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_businessman_businessman__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_menu_menu__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_datatables__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var firebaseConfig = {
    apiKey: "AIzaSyBDp_zTJo-WgCT9GaqzHqOWQXt9AEP-Ppw",
    authDomain: "onlinetourist.firebaseapp.com",
    databaseURL: "https://onlinetourist.firebaseio.com",
    projectId: "onlinetourist",
    storageBucket: "onlinetourist.appspot.com",
    messagingSenderId: "713223999576"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_businessman_businessman__["a" /* BusinessmanPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tourist_tabs_tourist__["a" /* TabsTouristPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_18_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-establishment/add-establishment.module#AddEstablishmentPageModule', name: 'AddEstablishmentPage', segment: 'add-establishment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-event/add-event.module#AddEventPageModule', name: 'AddEventPage', segment: 'add-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-news/add-news.module#AddNewsPageModule', name: 'AddNewsPage', segment: 'add-news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-product/add-product.module#AddProductPageModule', name: 'AddProductPage', segment: 'add-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-service/add-service.module#AddServicePageModule', name: 'AddServicePage', segment: 'add-service', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/businessman-message/businessman-message.module#BusinessmanMessagePageModule', name: 'BusinessmanMessagePage', segment: 'businessman-message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fare/fare.module#FarePageModule', name: 'FarePage', segment: 'fare', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-rating/edit-rating.module#EditRatingPageModule', name: 'EditRatingPage', segment: 'edit-rating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/func-category/func-category.module#FuncCategoryPageModule', name: 'FuncCategoryPage', segment: 'func-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/getting-here/getting-here.module#GettingHerePageModule', name: 'GettingHerePage', segment: 'getting-here', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historical-background/historical-background.module#HistoricalBackgroundPageModule', name: 'HistoricalBackgroundPage', segment: 'historical-background', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/func-news/func-news.module#FuncNewsPageModule', name: 'FuncNewsPage', segment: 'func-news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/func-events/func-events.module#FuncEventsPageModule', name: 'FuncEventsPage', segment: 'func-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapping/mapping.module#MappingPageModule', name: 'MappingPage', segment: 'mapping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-list-tourist/message-list-tourist.module#MessageListTouristPageModule', name: 'MessageListTouristPage', segment: 'message-list-tourist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tourist-events/tourist-events.module#TouristEventsPageModule', name: 'TouristEventsPage', segment: 'tourist-events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tourist-news/tourist-news.module#TouristNewsPageModule', name: 'TouristNewsPage', segment: 'tourist-news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/places/places.module#PlacesPageModule', name: 'PlacesPage', segment: 'places', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tourist-message-to-businessman/tourist-message-to-businessman.module#TouristMessageToBusinessmanPageModule', name: 'TouristMessageToBusinessmanPage', segment: 'tourist-message-to-businessman', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tourist-places/tourist-places.module#TouristPlacesPageModule', name: 'TouristPlacesPage', segment: 'tourist-places', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tourist-message/tourist-message.module#TouristMessagePageModule', name: 'TouristMessagePage', segment: 'tourist-message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-permit/view-permit.module#ViewPermitPageModule', name: 'ViewPermitPage', segment: 'view-permit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-product-service/view-product-service.module#ViewProductServicePageModule', name: 'ViewProductServicePage', segment: 'view-product-service', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tourist-profile/tourist-profile.module#TouristProfilePageModule', name: 'TouristProfilePage', segment: 'tourist-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-rate/add-rate.module#AddRatePageModule', name: 'AddRatePage', segment: 'add-rate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/establishment/establishment.module#EstablishmentPageModule', name: 'EstablishmentPage', segment: 'establishment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-list/message-list.module#MessageListPageModule', name: 'MessageListPage', segment: 'message-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/func-places/func-places.module#FuncPlacesPageModule', name: 'FuncPlacesPage', segment: 'func-places', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_businessman_businessman__["a" /* BusinessmanPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tourist_tabs_tourist__["a" /* TabsTouristPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_menu_menu__["a" /* MenuPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
    }
    AuthProvider.prototype.loginUser = function (newEmail, newPassword) {
        return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider.prototype.signupUser = function (newEmail, newPassword) {
        return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
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



var MainPage = /** @class */ (function () {
    function MainPage(platform, navCtrl, modalCtrl, navParams) {
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
    }
    MainPage.prototype.login = function () {
        var modal = this.modalCtrl.create('LoginPage');
        modal.present();
    };
    MainPage.prototype.signup = function () {
        var modal = this.modalCtrl.create('SignupPage');
        modal.present();
    };
    MainPage.prototype.getNewsData = function () {
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
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\main\main.html"*/'<ion-header *ngIf="!mobile" fixed>\n\n  <ion-navbar>\n    <ion-row>\n      <ion-col>\n        <img class="logo animated fadeInDown" src="assets/imgs/logo.png">\n      </ion-col>\n      <ion-col col-3>\n        <ion-buttons>\n          <button class="btnApplied" (click)="login()" ion-button>Login</button>\n          <button class="btnApplied" (click)="signup()" ion-button>Sign Up</button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content *ngIf="!mobile">\n  <ion-grid fixed>\n\n   \n\n    <ion-row class="main" align-items-center>\n      <ion-col>\n          <div class="container">\n            <h5>Gingoog City, Misamis Oriental, Philippines</h5>\n            <hr>\n          </div>\n         <ion-card>\n           <ion-card-header>\n           </ion-card-header>\n            <ion-card-content>\n                <video style="width: 100%;" controls src="assets/imgs/vid.mp4"></video>\n            </ion-card-content>\n         </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="main animated fadeInDown" align-items-center>\n      <ion-col>\n        <div class="phoneImage">\n          <img src="assets/imgs/phoneImage.png">\n        </div>\n      </ion-col>\n\n      <ion-col>\n        <div class="container">\n          <h1>Download our App Now!!!</h1>\n          <p padding-button>\n            If you are a traveller or just passin\' by in Gingoog, you can download our app so that you can easily get updated on whats happening here. You can also submit ratings and reviews to places you have been.\n          </p>\n          <button color="logo_border" block ion-button margin-top round><span class="button-inner">\n            Download Now\n          </span><div class="button-effect"></div></button>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col center text-center>\n          <h1>Gingoog City, Misamis Oriental, Philippines</h1>\n          <hr>\n          <div class="subHeader">"City of Good Luck"</div>\n          <div class="subContent">\n            The term Gingoog originally came from the word “Hingoog”, which means “Goodluck”, from a Lumad tribe of Manobo who settled in the area.The word implies good fortune, thus Gingoog City means the City of Good Luck. The natives of this place are the ones with the family names of “Gingco”, and “Gingoyon”.\n          </div>\n      </ion-col>\n    </ion-row>\n    \n  </ion-grid>\n  \n  <div class="devInfo">\n    <ion-row>\n      <ion-col><div class="devHeader" text-center center>The Development Team</div></ion-col>\n    </ion-row>\n    <ion-row class="divInfoImage">\n      <ion-col>\n        <img class="infoImage" src="assets/imgs/1.jpg">\n        <h5 text-center center>Charles H. Sumugat</h5>\n        <h6 text-center center>System Designer</h6>\n        \n      </ion-col>\n      <ion-col>\n        <img class="infoImage" src="assets/imgs/4.jpg">\n        <h5 text-center center>Vinson J. Jadol</h5>\n        <h6 text-center center>System Programmer</h6>\n       \n      </ion-col>\n      <ion-col>\n        <img class="infoImage" src="assets/imgs/2.jpg">\n        <h5 text-center center>Marlou Sean E. Kho</h5>\n        <h6 text-center center>System Analyst & Technical Writer</h6>\n        <ion-row>\n          <ion-col>\n           \n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>      \n  </div>\n\n<ion-row>\n  <ion-col>\n    <div class="myFooter">\n      <ion-row>\n        <ion-col>\n          <p text-center center>&copy;2019 Copyright All Right Reserved</p>\n        </ion-col>\n\n        <ion-col>\n          <ion-row>\n            <ion-col>\n              <p text-center center>Powered by: Bracket Logic</p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-col>\n</ion-row>\n</ion-content>\n\n<ion-content padding *ngIf="mobile">\n  <ion-card class="mobileInfo" padding>\n      <img center src="assets/imgs/logo.png">\n    <button (click)="login()" block ion-button>Login</button>\n    <button (click)="signup()" block ion-button>Sign Up</button>\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_main_main__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, afAuth, splashScreen, statusBar) {
        // let mySelf = this;
        // const authObserver = afAuth.authState.subscribe( user => {
        //   if (user) {
        //     mySelf.rootPage = HomePage;
        //     authObserver.unsubscribe();
        //   } else {
        //     mySelf.rootPage = 'LoginPage';
        //     authObserver.unsubscribe();
        //   }
        // });
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_main_main__["a" /* MainPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[372]);
//# sourceMappingURL=main.js.map