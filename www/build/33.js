webpackJsonp([33],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEstablishmentPageModule", function() { return AddEstablishmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_establishment__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddEstablishmentPageModule = /** @class */ (function () {
    function AddEstablishmentPageModule() {
    }
    AddEstablishmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_establishment__["a" /* AddEstablishmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_establishment__["a" /* AddEstablishmentPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTablesModule */]
            ],
        })
    ], AddEstablishmentPageModule);
    return AddEstablishmentPageModule;
}());

//# sourceMappingURL=add-establishment.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEstablishmentPage; });
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




var map;
var AddEstablishmentPage = /** @class */ (function () {
    function AddEstablishmentPage(navCtrl, menuCtrl, modalCtrl, afAuth, alertCtrl, loadingCtrl, platform, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        if (this.platform.is('mobile')) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        this.initUser();
    }
    AddEstablishmentPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    AddEstablishmentPage.prototype.initUser = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user');
        ref.on('value', function (data) {
            data.forEach(function (data) {
                if (data.key == _this.afAuth.auth.currentUser.uid) {
                    _this.userType = data.val().usertypeid;
                }
            });
        });
    };
    AddEstablishmentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('establishment');
        var catRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('category');
        ref.on('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                catRef.once('value', function (category) {
                    category.forEach(function (category) {
                        if (category.val().cat_val == data.val().category) {
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
                                imageurl: data.val().images,
                                status: data.val().status,
                                phone: data.val().phone,
                                userEmail: data.val().userEmail,
                                category: category.val().name,
                                userType: data.val().userType,
                                website: data.val().website
                            });
                        }
                    });
                    _this.places = arr.sort(function (a, b) { return parseFloat(a.averageRate) - parseFloat(b.averageRate); });
                    _this.loadedEst = arr.sort(function (a, b) { return parseFloat(a.averageRate) - parseFloat(b.average); });
                });
            });
        });
    };
    AddEstablishmentPage.prototype.initializeItem = function () {
        this.places = this.loadedEst;
    };
    AddEstablishmentPage.prototype.getItems = function (searchbar) {
        this.initializeItem();
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.places = this.places.filter(function (data) {
            if (data.name && q) {
                if (data.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    AddEstablishmentPage.prototype.functionPlace = function (key, status, user) {
        var modal = this.modalCtrl.create('FuncPlacesPage', { key: key, status: status, user: user });
        modal.present();
    };
    AddEstablishmentPage.prototype.functionCategory = function () {
        var modal = this.modalCtrl.create('FuncCategoryPage');
        modal.present();
    };
    AddEstablishmentPage.prototype.viewPlace = function (data, user) {
        this.navCtrl.push('EstablishmentPage', { data: data, user: user });
    };
    AddEstablishmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-establishment',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\add-establishment\add-establishment.html"*/'<ion-content *ngIf="!mobile">\n  <ion-grid fixed>\n    <ion-card no-margin margin-bottom class="full-width">\n      <ion-item class="border-bottom">\n        <h1>Places</h1>\n        <ion-row>\n          <ion-col>\n            <ion-icon tappable menuToggle style="zoom:1.5;" name="menu"></ion-icon>\n          </ion-col>\n\n          <ion-col>\n            <div class="pull-right">\n              <ion-icon name="cube" color="primary"></ion-icon>\n              <span tappable (click)="functionCategory()">Add a Category</span>\n            </div>\n            <div class="pull-right">\n              <ion-icon name="pin" color="primary"></ion-icon>\n              <span tappable (click)="functionPlace(null, false, userType)">Add a Landmark &nbsp;</span>\n            </div>\n          </ion-col>\n        </ion-row>\n    \n      </ion-item>\n      <ion-item class="animated fadeIn">\n        <table *ngIf="places" datatable [dtOptions]="dtOptions">\n          <thead>\n            <tr>\n              <th>Ratings</th>\n              <th>Name</th>\n              <th>Category</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor="let item of places" text-center center>\n              <td>\n                <div *ngIf="item.averageRate == 0">\n                  <ion-icon color="dark" id="star1" name="star-outline"></ion-icon>\n                  <ion-icon color="dark" id="star2" name="star-outline"></ion-icon>\n                  <ion-icon color="dark" id="star3" name="star-outline"></ion-icon>\n                  <ion-icon color="dark" id="star4" name="star-outline"></ion-icon>\n                  <ion-icon color="dark" id="star5" name="star-outline"></ion-icon>\n                  {{item.peopleRated}} Reviews\n                </div>\n                <div *ngIf="item.averageRate == 1">\n                  <ion-icon color="dark" id="star1" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star2" name="star-outline"></ion-icon>\n                  <ion-icon color="dark" id="star3" name="star-outline"></ion-icon>\n                  <ion-icon color="dark" id="star4" name="star-outline"></ion-icon>\n                  <ion-icon color="dark" id="star5" name="star-outline"></ion-icon>\n                  {{item.peopleRated}} Reviews\n                </div>\n                <div *ngIf="item.averageRate == 2">\n                  <ion-icon color="dark" id="star1" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star2" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star3" name="star-outline"></ion-icon>\n                  <ion-icon color="dark" id="star4" name="star-outline"></ion-icon>\n                  <ion-icon color="dark" id="star5" name="star-outline"></ion-icon>\n                  {{item.peopleRated}} Reviews\n                </div>\n                <div *ngIf="item.averageRate == 3">\n                  <ion-icon color="dark" id="star1" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star2" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star3" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star4" name="star-outline"></ion-icon>\n                  <ion-icon color="dark" id="star5" name="star-outline"></ion-icon>\n                  {{item.peopleRated}} Reviews\n                </div>\n                <div *ngIf="item.averageRate == 4">\n                  <ion-icon color="dark" id="star1" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star2" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star3" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star4" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star5" name="star-outline"></ion-icon>\n                  {{item.peopleRated}} Reviews\n                </div>\n                <div *ngIf="item.averageRate == 5">\n                  <ion-icon color="dark" id="star1" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star2" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star3" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star4" name="star"></ion-icon>\n                  <ion-icon color="dark" id="star5" name="star"></ion-icon>\n                  {{item.peopleRated}} Reviews\n                </div>  \n              </td>\n              <td class="dataTitle">{{ item.name }}</td>\n              <td>\n                <span>{{item.category}}</span>\n              </td>\n              <td><button ion-button (click)="viewPlace(item, userType)">View</button></td>\n            </tr>\n          </tbody>\n          </table>\n      </ion-item>\n      </ion-card>\n  </ion-grid>\n</ion-content>\n\n<ion-header *ngIf="mobile">\n  <ion-navbar padding color="navbar_color" >\n    <ion-row>\n      <ion-col col-3>\n        <ion-icon tappable (click)="toggleMenu()" style="zoom:1.5;" name="menu"></ion-icon>\n      </ion-col>\n\n      <ion-col col-9>\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="Search for a  Place"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="mobile">\n  <ion-list *ngFor="let item of places">\n    <ion-item (click)="functionPlace(item.key, true, userType)" class="border-bottom">\n      <h2>{{item.name}} &nbsp;<span *ngIf="item.status" class="dot"></span></h2>\n      <div id="inactive" *ngIf="item.status == 2">Inactive</div>\n      <div id="active" *ngIf="item.status == 1">Active</div>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\add-establishment\add-establishment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], AddEstablishmentPage);
    return AddEstablishmentPage;
}());

//# sourceMappingURL=add-establishment.js.map

/***/ })

});
//# sourceMappingURL=33.js.map