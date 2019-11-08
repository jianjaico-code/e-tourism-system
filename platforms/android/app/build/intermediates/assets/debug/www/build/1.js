webpackJsonp([1],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRatePageModule", function() { return AddRatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_rate__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddRatePageModule = /** @class */ (function () {
    function AddRatePageModule() {
    }
    AddRatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_rate__["a" /* AddRatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_rate__["a" /* AddRatePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], AddRatePageModule);
    return AddRatePageModule;
}());

//# sourceMappingURL=add-rate.module.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(26);


var noop = function () {
};
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return Ionic2Rating; }),
    multi: true
};
var Ionic2Rating = (function () {
    function Ionic2Rating() {
        this._max = 5;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(Ionic2Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            this._max = this.getNumberPropertyValue(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.ngOnInit = function () {
        // ngFor needs an array
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    Ionic2Rating.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            else {
                return this.starIconName;
            }
        }
        else {
            return this.emptyStarIconName;
        }
    };
    Object.defineProperty(Ionic2Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Ionic2Rating.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    Ionic2Rating.prototype.registerOnTouched = function (fn) {
    };
    Ionic2Rating.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    Ionic2Rating.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    Ionic2Rating.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    Ionic2Rating.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    Ionic2Rating.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{
                    selector: 'rating',
                    styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "],
                    template: "\n    <ul class=\"rating\" (keydown)=\"onKeyDown($event)\">\n      <li *ngFor=\"let starIndex of starIndexes\" tappable (click)=\"rate(starIndex + 1)\">\n        <ion-icon [name]=\"getStarIconName(starIndex)\">\n        </ion-icon>\n      </li>\n    </ul>",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Ionic2Rating.ctorParameters = [];
    Ionic2Rating.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'readOnly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'emptyStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'halfStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'starIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
        'nullable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    };
    return Ionic2Rating;
}());
//# sourceMappingURL=ionic2-rating.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__ = __webpack_require__(756);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic2_rating__ = __webpack_require__(753);
/* unused harmony reexport Ionic2Rating */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2RatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__ = __webpack_require__(753);




var Ionic2RatingModule = (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */]
                    ],
                    schemas: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ionic2RatingModule.ctorParameters = [];
    return Ionic2RatingModule;
}());
//# sourceMappingURL=ionic2-rating.module.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddRatePage = /** @class */ (function () {
    function AddRatePage(platform, navCtrl, alertCtrl, afAuth, viewCtrl, navParams) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.dateToday = new Date().toISOString();
        if (this.platform.is('mobile')) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        this.key = this.navParams.data.key;
        this.name = this.navParams.data.name;
        this.email = this.afAuth.auth.currentUser.email;
        this.profilePic = this.afAuth.auth.currentUser.photoURL;
        this.ratingCleanlinessLegend = "Please Click to Rate";
        this.ratingServiceLegend = "Please Click to Rate";
        this.ratingFacilitiesLegend = "Please Click to Rate";
        this.ratingLocationLegend = "Please Click to Rate";
        this.ratingFoodsLegend = "Please Click to Rate";
        this.ratingRoomsLegend = "Please Click to Rate";
        this.ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('rating');
        this.checkRating();
    }
    AddRatePage.prototype.checkRating = function () {
        var _this = this;
        this.ref.on('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                if (_this.key == data.val().establishmentKey) {
                    arr.push({
                        key: data.key,
                        email: data.val().email
                    });
                }
            });
            _this.allRating = arr;
            console.log(_this.allRating);
        });
    };
    AddRatePage.prototype.sendRatings = function () {
        var _this = this;
        this.allRating.forEach(function (element) {
            if (_this.email == element.email) {
                var alert = _this.alertCtrl.create({
                    message: "You already gave your review, do want to change it?",
                    buttons: [
                        {
                            text: 'Disagree',
                            handler: function () {
                                console.log("Disagree Clicked");
                                _this.dismiss();
                            }
                        },
                        {
                            text: 'Agree',
                            handler: function () {
                                _this.editRate();
                            }
                        }
                    ]
                });
                alert.present();
                return _this.userRated = true;
            }
        });
        if (this.userRated == true) {
            console.log("User Rated");
        }
        else {
            var rating = [];
            var activityLog = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('activityLog');
            rating.push(this.ratingCleanliness, this.ratingService, this.ratingFacilities, this.ratingLocation, this.ratingFoods, this.ratingRooms);
            var rate = rating.reduce(function (total, score) { return total + score; }) / rating.length;
            console.log(rate);
            this.ref.push({
                establishmentKey: this.key,
                establishmentName: this.name,
                cleanlinessRating: this.ratingCleanliness,
                serviceRating: this.ratingService,
                facilitiesRating: this.ratingFacilities,
                locationRating: this.ratingLocation,
                foodsRating: this.ratingFoods,
                rating: Math.round(rate),
                roomsRating: this.ratingRooms,
                comments: this.comments.value,
                email: this.email,
                profilePic: this.profilePic
            });
            activityLog.push({
                Description: "You have rated " + this.name,
                Date: this.dateToday,
                email: this.email
            });
            this.dismiss();
        }
    };
    AddRatePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AddRatePage.prototype.editRate = function () {
        var _this = this;
        var rating = [];
        rating.push(this.ratingCleanliness, this.ratingService, this.ratingFacilities, this.ratingLocation, this.ratingFoods, this.ratingRooms);
        var rate = rating.reduce(function (total, score) { return total + score; }) / rating.length;
        this.allRating.forEach(function (element) {
            if (_this.email == element.email) {
                console.log(rate);
                var activityLog = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('activityLog');
                var refToPush = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('rating/' + element.key);
                refToPush.set({
                    establishmentKey: _this.key,
                    establishmentName: _this.name,
                    cleanlinessRating: _this.ratingCleanliness,
                    serviceRating: _this.ratingService,
                    facilitiesRating: _this.ratingFacilities,
                    locationRating: _this.ratingLocation,
                    foodsRating: _this.ratingFoods,
                    roomsRating: _this.ratingRooms,
                    rating: Math.round(rate),
                    comments: _this.comments.value,
                    email: _this.email,
                    profilePic: _this.profilePic
                });
                activityLog.push({
                    Description: "You change your rating in " + _this.name,
                    Date: _this.dateToday,
                    email: _this.email
                });
                _this.dismiss();
            }
        });
    };
    AddRatePage.prototype.onCleanlinessModelChange = function (event) {
        this.ratingCleanliness = event;
        if (event == 1) {
            this.ratingCleanlinessLegend = "Terrible";
        }
        else if (event == 2) {
            this.ratingCleanlinessLegend = "Poor";
        }
        else if (event == 3) {
            this.ratingCleanlinessLegend = "Average";
        }
        else if (event == 4) {
            this.ratingCleanlinessLegend = "Very Good";
        }
        else if (event == 5) {
            this.ratingCleanlinessLegend = "Excellent";
        }
        else {
            this.ratingCleanlinessLegend = "Please Click to Rate";
        }
    };
    AddRatePage.prototype.onServiceModelChange = function (event) {
        this.ratingService = event;
        if (event == 1) {
            this.ratingServiceLegend = "Terrible";
        }
        else if (event == 2) {
            this.ratingServiceLegend = "Poor";
        }
        else if (event == 3) {
            this.ratingServiceLegend = "Average";
        }
        else if (event == 4) {
            this.ratingServiceLegend = "Very Good";
        }
        else if (event == 5) {
            this.ratingServiceLegend = "Excellent";
        }
        else {
            this.ratingServiceLegend = "Please Click to Rate";
        }
    };
    AddRatePage.prototype.onFacilitiesModelChange = function (event) {
        this.ratingFacilities = event;
        if (event == 1) {
            this.ratingFacilitiesLegend = "Terrible";
        }
        else if (event == 2) {
            this.ratingFacilitiesLegend = "Poor";
        }
        else if (event == 3) {
            this.ratingFacilitiesLegend = "Average";
        }
        else if (event == 4) {
            this.ratingFacilitiesLegend = "Very Good";
        }
        else if (event == 5) {
            this.ratingFacilitiesLegend = "Excellent";
        }
        else {
            this.ratingFacilitiesLegend = "Please Click to Rate";
        }
    };
    AddRatePage.prototype.onLocationModelChange = function (event) {
        this.ratingLocation = event;
        if (event == 1) {
            this.ratingLocationLegend = "Terrible";
        }
        else if (event == 2) {
            this.ratingLocationLegend = "Poor";
        }
        else if (event == 3) {
            this.ratingLocationLegend = "Average";
        }
        else if (event == 4) {
            this.ratingLocationLegend = "Very Good";
        }
        else if (event == 5) {
            this.ratingLocationLegend = "Excellent";
        }
        else {
            this.ratingLocationLegend = "Please Click to Rate";
        }
    };
    AddRatePage.prototype.onFoodsModelChange = function (event) {
        this.ratingFoods = event;
        if (event == 1) {
            this.ratingFoodsLegend = "Terrible";
        }
        else if (event == 2) {
            this.ratingFoodsLegend = "Poor";
        }
        else if (event == 3) {
            this.ratingFoodsLegend = "Average";
        }
        else if (event == 4) {
            this.ratingFoodsLegend = "Very Good";
        }
        else if (event == 5) {
            this.ratingFoodsLegend = "Excellent";
        }
        else {
            this.ratingFoodsLegend = "Please Click to Rate";
        }
    };
    AddRatePage.prototype.onRoomsModelChange = function (event) {
        this.ratingRooms = event;
        if (event == 1) {
            this.ratingRoomsLegend = "Terrible";
        }
        else if (event == 2) {
            this.ratingRoomsLegend = "Poor";
        }
        else if (event == 3) {
            this.ratingRoomsLegend = "Average";
        }
        else if (event == 4) {
            this.ratingRoomsLegend = "Very Good";
        }
        else if (event == 5) {
            this.ratingRoomsLegend = "Excellent";
        }
        else {
            this.ratingRoomsLegend = "Please Click to Rate";
        }
    };
    AddRatePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('comments'),
        __metadata("design:type", Object)
    ], AddRatePage.prototype, "comments", void 0);
    AddRatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-rate',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\add-rate\add-rate.html"*/'<ion-content *ngIf="!mobile" padding class="main-view">\n  <!-- <div class="overlay" (click)="dismiss()">\n    \n  </div> -->\n  <ion-buttons end>\n      <button color="theme_font" (click)="close()" clear ion-button icon-only><ion-icon name="ios-close-circle-outline"></ion-icon></button>\n  </ion-buttons>\n\n    <ion-row>\n      <ion-col col-7>\n        <ion-label>Cleanliness</ion-label>\n        <rating #rating [(ngModel)]="ratingCleanliness" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onCleanlinessModelChange($event)"></rating>\n      </ion-col>\n      <ion-col col-5>\n        <div class="legend" padding>{{ratingCleanlinessLegend}}</div>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col col-7>\n        <ion-label>Service</ion-label>\n        <rating #rating [(ngModel)]="ratingService" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onServiceModelChange($event)"></rating>\n      </ion-col>\n      <ion-col col-5>\n        <div class="legend" padding>{{ratingServiceLegend}}</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-7>\n        <ion-label>Facilities</ion-label>\n        <rating #rating [(ngModel)]="ratingFacilities" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onFacilitiesModelChange($event)"></rating>\n      </ion-col>\n      <ion-col col-5>\n        <div class="legend" padding>{{ratingFacilitiesLegend}}</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-7>\n        <ion-label>Location</ion-label>\n        <rating #rating [(ngModel)]="ratingLocation" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onLocationModelChange($event)"></rating>\n      </ion-col>\n      <ion-col col-5>\n        <div class="legend" padding>{{ratingLocationLegend}}</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-7>\n        <ion-label>Foods</ion-label>\n        <rating #rating [(ngModel)]="ratingFoods" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onFoodsModelChange($event)"></rating>\n      </ion-col>\n      <ion-col col-5>\n        <div class="legend" padding>{{ratingFoodsLegend}}</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-7>\n        <ion-label>Rooms</ion-label>\n        <rating #rating [(ngModel)]="ratingRooms" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onRoomsModelChange($event)"></rating>\n      </ion-col>\n      <ion-col col-5>\n        <div class="legend" padding>{{ratingRoomsLegend}}</div>\n      </ion-col>\n    </ion-row>\n  \n  \n    <ion-textarea #comments placeholder="Write your Review here..."></ion-textarea>\n    <button ion-button color="logo_border" block (click)="sendRatings()">Submit</button>        \n\n</ion-content>\n\n\n<ion-content padding *ngIf="mobile">\n\n    <ion-buttons end>\n        <button color="theme_font" (click)="close()" clear ion-button icon-only><ion-icon name="ios-close-circle-outline"></ion-icon></button>\n    </ion-buttons>\n  \n      <ion-row class="border-bottom">\n        <ion-col col-12>\n          <ion-label>Cleanliness</ion-label>\n          <rating #rating [(ngModel)]="ratingCleanliness" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onCleanlinessModelChange($event)"></rating>\n        </ion-col>\n        <ion-col col-12>\n          <div class="legend legendMobile" padding>{{ratingCleanlinessLegend}}</div>\n        </ion-col>\n      </ion-row>\n  \n  \n      <ion-row class="border-bottom">\n        <ion-col col-12>\n          <ion-label>Service</ion-label>\n          <rating #rating [(ngModel)]="ratingService" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onServiceModelChange($event)"></rating>\n        </ion-col>\n        <ion-col col-12>\n          <div class="legend legendMobile" padding>{{ratingServiceLegend}}</div>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row class="border-bottom">\n        <ion-col col-12>\n          <ion-label>Facilities</ion-label>\n          <rating #rating [(ngModel)]="ratingFacilities" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onFacilitiesModelChange($event)"></rating>\n        </ion-col>\n        <ion-col col-12>\n          <div class="legend legendMobile" padding>{{ratingFacilitiesLegend}}</div>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row class="border-bottom">\n        <ion-col col-12>\n          <ion-label>Location</ion-label>\n          <rating #rating [(ngModel)]="ratingLocation" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onLocationModelChange($event)"></rating>\n        </ion-col>\n        <ion-col col-12>\n          <div class="legend legendMobile" padding>{{ratingLocationLegend}}</div>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row class="border-bottom"> \n        <ion-col col-12>\n          <ion-label>Foods</ion-label>\n          <rating #rating [(ngModel)]="ratingFoods" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onFoodsModelChange($event)"></rating>\n        </ion-col>\n        <ion-col col-12>\n          <div class="legend legendMobile" padding>{{ratingFoodsLegend}}</div>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row class="border-bottom">\n        <ion-col col-12>\n          <ion-label>Rooms</ion-label>\n          <rating #rating [(ngModel)]="ratingRooms" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false" (ngModelChange)="onRoomsModelChange($event)"></rating>\n        </ion-col>\n        <ion-col col-12>\n          <div class="legend legendMobile" padding>{{ratingRoomsLegend}}</div>\n        </ion-col>\n      </ion-row>\n    \n    \n      <ion-textarea #comments placeholder="Write your Review here..."></ion-textarea>\n      <button ion-button color="logo_border" block (click)="sendRatings()">Submit</button>        \n  \n</ion-content>\n\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\add-rate\add-rate.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _f || Object])
    ], AddRatePage);
    return AddRatePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=add-rate.js.map

/***/ })

});
//# sourceMappingURL=1.js.map