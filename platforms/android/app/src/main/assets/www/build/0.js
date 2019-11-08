webpackJsonp([0],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishmentPageModule", function() { return EstablishmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__establishment__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EstablishmentPageModule = /** @class */ (function () {
    function EstablishmentPageModule() {
    }
    EstablishmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__establishment__["a" /* EstablishmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__establishment__["a" /* EstablishmentPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], EstablishmentPageModule);
    return EstablishmentPageModule;
}());

//# sourceMappingURL=establishment.module.js.map

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

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstablishmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
var infowindow;
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 60000
};
var EstablishmentPage = /** @class */ (function () {
    function EstablishmentPage(navCtrl, modalCtrl, alertCtrl, navParams, viewCtrl, platform, authData, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.authData = authData;
        this.afAuth = afAuth;
        this.images = [];
        if (this.platform.is('mobile')) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        platform.ready().then(function () {
            _this.user = navParams.data.user;
            _this.initData();
            _this.initRating();
            _this.initMap();
            console.log(_this.data);
        });
    }
    EstablishmentPage.prototype.close = function () {
        if (this.user == 2 || this.user == 3) {
            this.navCtrl.pop();
        }
        else {
            this.navCtrl.setRoot('TouristPlacesPage');
        }
    };
    EstablishmentPage.prototype.initData = function () {
        var _this = this;
        if (this.user == 2 || this.user == 3) {
            this.navParams.data.data.imageurl.forEach(function (element) {
                _this.images.push(element);
            });
            this.data = {
                key: this.navParams.data.data.key,
                name: this.navParams.data.data.name,
                address: this.navParams.data.data.address,
                description: this.navParams.data.data.description,
                phone: this.navParams.data.data.phone,
                latitude: this.navParams.data.data.latitude,
                longitude: this.navParams.data.data.longitude,
                permits: this.navParams.data.data.permits,
                website: this.navParams.data.data.website,
                category: this.navParams.data.data.category,
                status: this.navParams.data.data.status,
                images: this.navParams.data.data.imageurl,
                userEmail: this.navParams.data.data.userEmail,
                userType: this.navParams.data.data.userType
            };
        }
        else {
            this.navParams.data.imageurl.forEach(function (element) {
                _this.images.push(element);
            });
            this.data = {
                key: this.navParams.data.key,
                name: this.navParams.data.name,
                address: this.navParams.data.address,
                description: this.navParams.data.description,
                permits: this.navParams.data.permits,
                phone: this.navParams.data.phone,
                latitude: this.navParams.data.latitude,
                longitude: this.navParams.data.longitude,
                website: this.navParams.data.website,
                category: this.navParams.data.category,
                status: this.navParams.data.status,
                images: this.navParams.data.imageurl,
                userEmail: this.navParams.data.userEmail,
                userType: this.navParams.data.userType
            };
        }
    };
    EstablishmentPage.prototype.messageOwner = function () {
        var modal = this.modalCtrl.create('TouristMessageToBusinessmanPage', this.data);
        modal.present();
    };
    EstablishmentPage.prototype.viewPermit = function (value) {
        var modal = this.modalCtrl.create('ViewPermitPage', value);
        modal.present();
    };
    EstablishmentPage.prototype.initMap = function () {
        var me = this;
        var directionsService = new google.maps.DirectionsService();
        var directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        var Establishment = { lat: me.data.latitude, lng: me.data.longitude };
        navigator.geolocation.getCurrentPosition(function (location) {
            console.log(location);
            map = new google.maps.Map(me.mapElement.nativeElement, {
                center: Establishment,
                zoom: 8.5,
            });
            var myPos = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
            var myIcon = {
                url: "../../assets/imgs/mylocationpin.png",
                scaledSize: new google.maps.Size(50, 60)
            };
            var myPosMarker = new google.maps.Marker({
                position: myPos,
                animation: google.maps.Animation.DROP,
                icon: myIcon,
                title: "Your Position"
            });
            var icon = {
                url: "../../assets/imgs/pin.png",
                scaledSize: new google.maps.Size(50, 60)
            };
            var marker = new google.maps.Marker({
                position: Establishment,
                animation: google.maps.Animation.DROP,
                icon: icon,
                title: me.data.name
            });
            marker.addListener('click', function () {
                map.setZoom(15);
                map.setCenter(marker.getPosition());
            });
            myPosMarker.setMap(map);
            marker.setMap(map);
            directionsDisplay.setMap(map);
            var request = {
                origin: myPos,
                destination: Establishment,
                travelMode: 'DRIVING',
                unitSystem: google.maps.UnitSystem.METRIC
            };
            directionsService.route(request, function (result, status) {
                if (status == 'OK') {
                    directionsDisplay.setDirections(result);
                    var point = result.routes[0].legs[0];
                    console.log('Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')');
                    me.mappingEstTime = point.duration.text;
                    me.mappingDistance = point.distance.text;
                }
            });
        }, function (error) {
            console.log(error);
        }, options);
    };
    EstablishmentPage.prototype.edit = function (key, user, status) {
        var modal = this.modalCtrl.create('FuncPlacesPage', { key: key, user: user, status: status });
        modal.present();
    };
    EstablishmentPage.prototype.initRating = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('rating');
        ref.on('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                if (data.val().establishmentKey == _this.data.key) {
                    arr.push({
                        key: data.key,
                        establishmentKey: data.val().establishmentKey,
                        comments: data.val().comments,
                        email: data.val().email,
                        establishment: data.val().establishmentName,
                        profilePic: data.val().profilePic,
                        cleanlinessRating: data.val().cleanlinessRating,
                        serviceRating: data.val().serviceRating,
                        facilitiesRating: data.val().facilitiesRating,
                        locationRating: data.val().locationRating,
                        foodsRating: data.val().foodsRating,
                        roomsRating: data.val().roomsRating,
                        rating: data.val().rating
                    });
                }
            });
            _this.rate = arr.reverse();
            _this.peopleRated = _this.rate.length;
            _this.getAverageRating();
            _this.setNewData();
        });
    };
    EstablishmentPage.prototype.getAverageRating = function () {
        var rating = [];
        var cleanliness = [];
        var service = [];
        var facilities = [];
        var location = [];
        var foods = [];
        var rooms = [];
        this.rate.map(function (data) {
            return cleanliness.push(data.cleanlinessRating);
        });
        this.rate.map(function (data) {
            return service.push(data.serviceRating);
        });
        this.rate.map(function (data) {
            return facilities.push(data.facilitiesRating);
        });
        this.rate.map(function (data) {
            return location.push(data.locationRating);
        });
        this.rate.map(function (data) {
            return foods.push(data.foodsRating);
        });
        this.rate.map(function (data) {
            return rooms.push(data.roomsRating);
        });
        this.rate.map(function (data) {
            return rating.push(data.rating);
        });
        if (rating.length == 0) {
            this.aveCleanliness = 0;
            this.aveService = 0;
            this.aveFacilities = 0;
            this.aveLocation = 0;
            this.aveFoods = 0;
            this.aveRooms = 0;
            this.averageRate = 0;
        }
        else {
            var aveCleanliness = cleanliness.reduce(function (total, score) { return total + score; }) / cleanliness.length;
            var aveService = service.reduce(function (total, score) { return total + score; }) / service.length;
            var aveFacilities = facilities.reduce(function (total, score) { return total + score; }) / facilities.length;
            var aveLocation = location.reduce(function (total, score) { return total + score; }) / location.length;
            var aveFoods = foods.reduce(function (total, score) { return total + score; }) / foods.length;
            var aveRooms = rooms.reduce(function (total, score) { return total + score; }) / rooms.length;
            var rate = rating.reduce(function (total, score) { return total + score; }) / rating.length;
            this.aveCleanliness = Math.round(aveCleanliness);
            this.aveService = Math.round(aveService);
            this.aveFacilities = Math.round(aveFacilities);
            this.aveLocation = Math.round(aveLocation);
            this.aveFoods = Math.round(aveFoods);
            this.aveRooms = Math.round(aveRooms);
            this.averageRate = Math.round(rate);
        }
    };
    EstablishmentPage.prototype.setNewData = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('establishment/' + this.data.key);
        ref.set({
            name: this.data.name,
            address: this.data.address,
            description: this.data.description,
            phone: this.data.phone,
            latitude: this.data.latitude,
            longitude: this.data.longitude,
            website: this.data.website,
            permits: this.data.permits,
            category: this.data.category,
            status: this.data.status,
            images: this.images,
            averageRate: this.averageRate,
            peopleRated: this.peopleRated,
            userEmail: this.data.userEmail,
            userType: this.data.userType
        });
    };
    EstablishmentPage.prototype.addRating = function () {
        var modal = this.modalCtrl.create('AddRatePage', this.data);
        modal.present();
    };
    EstablishmentPage.prototype.viewProdandService = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "What do you want to view?",
            buttons: [
                {
                    text: "Product",
                    handler: function () {
                        var modal = _this.modalCtrl.create('ViewProductServicePage', { key: _this.data.key, view: 1 });
                        modal.present();
                    }
                },
                {
                    text: "Service",
                    handler: function () {
                        var modal = _this.modalCtrl.create('ViewProductServicePage', { key: _this.data.key, view: 2 });
                        modal.present();
                    }
                }
            ]
        });
        alert.present();
    };
    EstablishmentPage.prototype.addProdSer = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "What do you want to Add?",
            buttons: [
                {
                    text: "Product",
                    handler: function () {
                        var modal = _this.modalCtrl.create('AddProductPage', { key: _this.data.key });
                        modal.present();
                    }
                },
                {
                    text: "Service",
                    handler: function () {
                        var modal = _this.modalCtrl.create('AddServicePage', { key: _this.data.key });
                        modal.present();
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
    ], EstablishmentPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('rating'),
        __metadata("design:type", Object)
    ], EstablishmentPage.prototype, "rating", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('comments'),
        __metadata("design:type", Object)
    ], EstablishmentPage.prototype, "comments", void 0);
    EstablishmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-establishment',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\establishment\establishment.html"*/'<ion-content *ngIf="!mobile">\n  <ion-grid fixed>\n      <ion-row>\n        <ion-col>\n          <ion-buttons>\n            <button (click)="close()" clear ion-button icon-only><ion-icon name="ios-arrow-dropleft"></ion-icon>Back</button>\n            <button *ngIf="user" (click)="viewPermit(data.permits)" float-right clear ion-button icon-only><ion-icon name="document"></ion-icon>View Permit</button>\n            <button *ngIf="user" float-right (click)="edit(data.key, user, true)" clear ion-button icon-only><ion-icon name="create"></ion-icon>Edit</button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n\n    <div center text-center class="header">{{data.name}}</div>\n    <ion-slides pager autoplay="3000" loop="true" speed="2000">\n      <ion-slide *ngFor="let item of images">\n        <img class="imageSlider" [src]="item">\n      </ion-slide>\n    </ion-slides>\n\n    <ion-row>\n\n      <ion-col ion-col col-6>\n          <ion-card>\n              <ion-card-content>\n                <p padding text-center class="desc">\n                  {{data.description}}\n                </p>\n\n                <ion-row>\n                    <ion-col *ngIf="data.category == 1 || data.category == 2 || data.category == 3" center text-center>\n                      <ion-icon name=\'md-globe\'></ion-icon>\n                      {{data.website}}\n                    </ion-col>\n                    <ion-col *ngIf="data.category == 1 || data.category == 2 || data.category == 3" center text-center>\n                      <ion-icon name=\'ios-phone-portrait-outline\'></ion-icon>\n                      {{data.phone}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col center text-center>\n                      <ion-icon name="ios-navigate-outline"></ion-icon>\n                      {{data.address}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n      \n                    \n                  <ion-col center text-center>\n                    <div *ngIf="averageRate == 0">\n                      <ion-icon id="star1" name="star-outline"></ion-icon>\n                      <ion-icon id="star2" name="star-outline"></ion-icon>\n                      <ion-icon id="star3" name="star-outline"></ion-icon>\n                      <ion-icon id="star4" name="star-outline"></ion-icon>\n                      <ion-icon id="star5" name="star-outline"></ion-icon>\n                      ({{peopleRated}})\n                    </div>\n                    <div *ngIf="averageRate == 1">\n                      <ion-icon id="star1" name="star"></ion-icon>\n                      <ion-icon id="star2" name="star-outline"></ion-icon>\n                      <ion-icon id="star3" name="star-outline"></ion-icon>\n                      <ion-icon id="star4" name="star-outline"></ion-icon>\n                      <ion-icon id="star5" name="star-outline"></ion-icon>\n                      ({{peopleRated}})\n                    </div>\n                    <div *ngIf="averageRate == 2">\n                      <ion-icon id="star1" name="star"></ion-icon>\n                      <ion-icon id="star2" name="star"></ion-icon>\n                      <ion-icon id="star3" name="star-outline"></ion-icon>\n                      <ion-icon id="star4" name="star-outline"></ion-icon>\n                      <ion-icon id="star5" name="star-outline"></ion-icon>\n                      ({{peopleRated}})\n                    </div>\n                    <div *ngIf="averageRate == 3">\n                      <ion-icon id="star1" name="star"></ion-icon>\n                      <ion-icon id="star2" name="star"></ion-icon>\n                      <ion-icon id="star3" name="star"></ion-icon>\n                      <ion-icon id="star4" name="star-outline"></ion-icon>\n                      <ion-icon id="star5" name="star-outline"></ion-icon>\n                      ({{peopleRated}})\n                    </div>\n                    <div *ngIf="averageRate == 4">\n                      <ion-icon id="star1" name="star"></ion-icon>\n                      <ion-icon id="star2" name="star"></ion-icon>\n                      <ion-icon id="star3" name="star"></ion-icon>\n                      <ion-icon id="star4" name="star"></ion-icon>\n                      <ion-icon id="star5" name="star-outline"></ion-icon>\n                      ({{peopleRated}})\n                    </div>\n                    <div *ngIf="averageRate == 5">\n                      <ion-icon id="star1" name="star"></ion-icon>\n                      <ion-icon id="star2" name="star"></ion-icon>\n                      <ion-icon id="star3" name="star"></ion-icon>\n                      <ion-icon id="star4" name="star"></ion-icon>\n                      <ion-icon id="star5" name="star"></ion-icon>\n                      ({{peopleRated}})\n                    </div>\n                  </ion-col>\n                </ion-row>\n                <div padding>\n                  <ion-row>\n                    <ion-col *ngIf="!user && data.category != \'4\'">\n                      <button class="rateBtn" color="logo_border" ion-button block (click)="messageOwner()">Message Owner</button>\n                    </ion-col>\n                    <ion-col *ngIf="!user && data.category != \'4\'">\n                      <button class="rateBtn" color="logo_border" ion-button block (click)="viewProdandService()">View Products & Services</button>\n                    </ion-col>\n                  </ion-row>\n                  <button *ngIf="!user" class="rateBtn" color="logo_border" ion-button block (click)="addRating()">Submit Rating/Review</button>\n                  <button *ngIf="user" class="rateBtn" color="logo_border" ion-button block (click)="addProdSer()">Add/Edit Products or Services</button>\n                </div>\n              </ion-card-content>\n            </ion-card>\n      </ion-col>\n\n      <ion-col ion-col col-6>\n        <ion-card padding>\n            <ion-row>\n              <ion-col>\n                <ion-icon name="stopwatch"></ion-icon>\n                {{mappingEstTime}}\n              </ion-col>\n              <ion-col>\n                <ion-icon name="bus"></ion-icon>\n                {{mappingDistance}}\n              </ion-col>\n            </ion-row>\n            <div class="mapDiv">\n                <div #map id="map"></div>\n            </div>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n      <div center text-center class="header">Ratings and Reviews</div>\n\n      <ion-card padding>\n        <ion-row>\n          <ion-col center text-center>\n            <div *ngIf="aveCleanliness == 0">\n              <ion-label>Cleanliness</ion-label>\n              <ion-icon id="star1" name="star-outline"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveCleanliness == 1">\n              <ion-label>Cleanliness</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveCleanliness == 2">\n              <ion-label>Cleanliness</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveCleanliness == 3">\n              <ion-label>Cleanliness</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveCleanliness == 4">\n              <ion-label>Cleanliness</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveCleanliness == 5">\n              <ion-label>Cleanliness</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star"></ion-icon>\n            </div>\n          </ion-col>\n\n          <ion-col center text-center>\n            <div *ngIf="aveService == 0">\n              <ion-label>Service</ion-label>\n              <ion-icon id="star1" name="star-outline"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveService == 1">\n              <ion-label>Service</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveService == 2">\n              <ion-label>Service</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveService == 3">\n              <ion-label>Service</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveService == 4">\n              <ion-label>Service</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveService == 5">\n              <ion-label>Service</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star"></ion-icon>\n            </div>\n          </ion-col>\n\n          <ion-col center text-center>\n            <div *ngIf="aveFacilities == 0">\n              <ion-label>Facilities</ion-label>\n              <ion-icon id="star1" name="star-outline"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFacilities == 1">\n              <ion-label>Facilities</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFacilities == 2">\n              <ion-label>Facilities</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFacilities == 3">\n              <ion-label>Facilities</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFacilities == 4">\n              <ion-label>Facilities</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFacilities == 5">\n              <ion-label>Facilities</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star"></ion-icon>\n            </div>\n          </ion-col>\n\n          <ion-col center text-center>\n            <div *ngIf="aveLocation == 0">\n              <ion-label>Location</ion-label>\n              <ion-icon id="star1" name="star-outline"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveLocation == 1">\n              <ion-label>Location</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveLocation == 2">\n              <ion-label>Location</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveLocation == 3">\n              <ion-label>Location</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveLocation == 4">\n              <ion-label>Location</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveLocation == 5">\n              <ion-label>Location</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star"></ion-icon>\n            </div>\n          </ion-col>\n\n          <ion-col center text-center>\n            <div *ngIf="aveFoods == 0">\n              <ion-label>Foods</ion-label>\n              <ion-icon id="star1" name="star-outline"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFoods == 1">\n              <ion-label>Foods</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFoods == 2">\n              <ion-label>Foods</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFoods == 3">\n              <ion-label>Foods</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFoods == 4">\n              <ion-label>Foods</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFoods == 5">\n              <ion-label>Foods</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star"></ion-icon>\n            </div>\n          </ion-col>\n\n          <ion-col center text-center>\n            <div *ngIf="aveRooms == 0">\n              <ion-label>Rooms</ion-label>\n              <ion-icon id="star1" name="star-outline"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveRooms == 1">\n              <ion-label>Rooms</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveRooms == 2">\n              <ion-label>Rooms</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveRooms == 3">\n              <ion-label>Rooms</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveRooms == 4">\n              <ion-label>Rooms</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveRooms == 5">\n              <ion-label>Rooms</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star"></ion-icon>\n            </div>\n          </ion-col>\n            \n        </ion-row>\n      </ion-card>\n\n      <ion-card ion-col class="ratingCard" *ngFor="let item of rate" col-12 col-md-12 col-lg-12>\n        <ion-row padding>\n          <ion-col col-3>\n            <ion-avatar>\n              <img class="profilePic" [src]="item.profilePic">\n            </ion-avatar>\n          </ion-col>\n  \n          <ion-col class="ratingInfo" col-9>\n            <div>{{item.email}}</div>\n              <div *ngIf="item.rating == 1">\n                <ion-icon id="star1" name="star"></ion-icon>\n              </div>\n              <div *ngIf="item.rating == 2">\n                <ion-icon id="star1" name="star"></ion-icon>\n                <ion-icon id="star2" name="star"></ion-icon>\n              </div>\n              <div *ngIf="item.rating == 3">\n                <ion-icon id="star1" name="star"></ion-icon>\n                <ion-icon id="star2" name="star"></ion-icon>\n                <ion-icon id="star3" name="star"></ion-icon>\n              </div>\n              <div *ngIf="item.rating == 4">\n                <ion-icon id="star1" name="star"></ion-icon>\n                <ion-icon id="star2" name="star"></ion-icon>\n                <ion-icon id="star3" name="star"></ion-icon>\n                <ion-icon id="star4" name="star"></ion-icon>\n              </div>\n              <div *ngIf="item.rating == 5">\n                <ion-icon id="star1" name="star"></ion-icon>\n                <ion-icon id="star2" name="star"></ion-icon>\n                <ion-icon id="star3" name="star"></ion-icon>\n                <ion-icon id="star4" name="star"></ion-icon>\n                <ion-icon id="star5" name="star"></ion-icon>\n              </div>\n          </ion-col>\n        </ion-row>\n  \n        <div class="ratingComment" padding center text-justify>{{item.comments}}</div>\n      </ion-card>\n     \n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf="mobile">\n    <ion-grid fixed>\n    <ion-row>\n        <ion-col>\n          <ion-buttons>\n            <button (click)="close()" clear ion-button icon-only><ion-icon name="ios-arrow-dropleft"></ion-icon>Back</button>\n            <button *ngIf="user" (click)="viewPermit(data.permits)" float-right clear ion-button icon-only><ion-icon name="document"></ion-icon>View Permit</button>\n            <button *ngIf="user" float-right (click)="edit(data.key, user, true)" clear ion-button icon-only><ion-icon name="create"></ion-icon>Edit</button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n\n    <div center text-center class="header">{{data.name}}</div>\n    <ion-slides pager autoplay="3000" loop="true" speed="2000">\n      <ion-slide *ngFor="let item of images">\n        <img class="imageSlider" [src]="item">\n      </ion-slide>\n    </ion-slides>\n\n    <ion-row>\n\n      <ion-col ion-col col-12>\n          <ion-card>\n              <ion-card-content>\n                <p padding text-center class="desc">\n                  {{data.description}}\n                </p>\n\n                <ion-row>\n                    <ion-col *ngIf="data.category == 1 || data.category == 2 || data.category == 3" center text-center>\n                      <ion-icon name=\'md-globe\'></ion-icon>\n                      {{data.website}}\n                    </ion-col>\n                    <ion-col *ngIf="data.category == 1 || data.category == 2 || data.category == 3" center text-center>\n                      <ion-icon name=\'ios-phone-portrait-outline\'></ion-icon>\n                      {{data.phone}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col center text-center>\n                      <ion-icon name="ios-navigate-outline"></ion-icon>\n                      {{data.address}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n      \n                    \n                  <ion-col center text-center>\n                    <div *ngIf="averageRate == 0">\n                      <ion-icon id="star1" name="star-outline"></ion-icon>\n                      <ion-icon id="star2" name="star-outline"></ion-icon>\n                      <ion-icon id="star3" name="star-outline"></ion-icon>\n                      <ion-icon id="star4" name="star-outline"></ion-icon>\n                      <ion-icon id="star5" name="star-outline"></ion-icon>\n                      ({{peopleRated}})\n                    </div>\n                    <div *ngIf="averageRate == 1">\n                      <ion-icon id="star1" name="star"></ion-icon>\n                      <ion-icon id="star2" name="star-outline"></ion-icon>\n                      <ion-icon id="star3" name="star-outline"></ion-icon>\n                      <ion-icon id="star4" name="star-outline"></ion-icon>\n                      <ion-icon id="star5" name="star-outline"></ion-icon>\n                      ({{peopleRated}})\n                    </div>\n                    <div *ngIf="averageRate == 2">\n                      <ion-icon id="star1" name="star"></ion-icon>\n                      <ion-icon id="star2" name="star"></ion-icon>\n                      <ion-icon id="star3" name="star-outline"></ion-icon>\n                      <ion-icon id="star4" name="star-outline"></ion-icon>\n                      <ion-icon id="star5" name="star-outline"></ion-icon>\n                      ({{peopleRated}})\n                    </div>\n                    <div *ngIf="averageRate == 3">\n                      <ion-icon id="star1" name="star"></ion-icon>\n                      <ion-icon id="star2" name="star"></ion-icon>\n                      <ion-icon id="star3" name="star"></ion-icon>\n                      <ion-icon id="star4" name="star-outline"></ion-icon>\n                      <ion-icon id="star5" name="star-outline"></ion-icon>\n                      ({{peopleRated}})\n                    </div>\n                    <div *ngIf="averageRate == 4">\n                      <ion-icon id="star1" name="star"></ion-icon>\n                      <ion-icon id="star2" name="star"></ion-icon>\n                      <ion-icon id="star3" name="star"></ion-icon>\n                      <ion-icon id="star4" name="star"></ion-icon>\n                      <ion-icon id="star5" name="star-outline"></ion-icon>\n                      ({{peopleRated}})\n                    </div>\n                    <div *ngIf="averageRate == 5">\n                      <ion-icon id="star1" name="star"></ion-icon>\n                      <ion-icon id="star2" name="star"></ion-icon>\n                      <ion-icon id="star3" name="star"></ion-icon>\n                      <ion-icon id="star4" name="star"></ion-icon>\n                      <ion-icon id="star5" name="star"></ion-icon>\n                      ({{peopleRated}})\n                    </div>\n                  </ion-col>\n                </ion-row>\n                <div padding>\n                  <ion-row>\n                    <ion-col  col-12 *ngIf="!user && data.category != \'4\'">\n                      <button class="rateBtn" color="logo_border" ion-button block (click)="messageOwner()">Message Owner</button>\n                    </ion-col>\n                    <ion-col  col-12 *ngIf="!user && data.category != \'4\'">\n                      <button class="rateBtn" color="logo_border" ion-button block (click)="viewProdandService()">View Products & Services</button>\n                    </ion-col>\n                  </ion-row>\n                  <button *ngIf="!user" class="rateBtn" color="logo_border" ion-button block (click)="addRating()">Submit Rating/Review</button>\n                  <button *ngIf="user" class="rateBtn" color="logo_border" ion-button block (click)="addProdSer()">Add/Edit Products or Services</button>\n                </div>\n              </ion-card-content>\n            </ion-card>\n      </ion-col>\n\n      <ion-col ion-col col-12>\n        <ion-card padding>\n            <ion-row>\n              <ion-col>\n                <ion-icon name="stopwatch"></ion-icon>\n                {{mappingEstTime}}\n              </ion-col>\n              <ion-col>\n                <ion-icon name="bus"></ion-icon>\n                {{mappingDistance}}\n              </ion-col>\n            </ion-row>\n            <div class="mapDiv">\n                <div #map id="map"></div>\n            </div>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n      <div center text-center class="header">Ratings and Reviews</div>\n\n      <ion-card padding>\n        <ion-row>\n          <ion-col center text-center>\n            <div *ngIf="aveCleanliness == 0">\n              <ion-label>Cleanliness</ion-label>\n              <ion-icon id="star1" name="star-outline"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveCleanliness == 1">\n              <ion-label>Cleanliness</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveCleanliness == 2">\n              <ion-label>Cleanliness</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveCleanliness == 3">\n              <ion-label>Cleanliness</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveCleanliness == 4">\n              <ion-label>Cleanliness</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveCleanliness == 5">\n              <ion-label>Cleanliness</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star"></ion-icon>\n            </div>\n          </ion-col>\n\n          <ion-col center text-center>\n            <div *ngIf="aveService == 0">\n              <ion-label>Service</ion-label>\n              <ion-icon id="star1" name="star-outline"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveService == 1">\n              <ion-label>Service</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveService == 2">\n              <ion-label>Service</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveService == 3">\n              <ion-label>Service</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveService == 4">\n              <ion-label>Service</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveService == 5">\n              <ion-label>Service</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star"></ion-icon>\n            </div>\n          </ion-col>\n\n          <ion-col center text-center>\n            <div *ngIf="aveFacilities == 0">\n              <ion-label>Facilities</ion-label>\n              <ion-icon id="star1" name="star-outline"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFacilities == 1">\n              <ion-label>Facilities</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFacilities == 2">\n              <ion-label>Facilities</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFacilities == 3">\n              <ion-label>Facilities</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFacilities == 4">\n              <ion-label>Facilities</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFacilities == 5">\n              <ion-label>Facilities</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star"></ion-icon>\n            </div>\n          </ion-col>\n\n          <ion-col center text-center>\n            <div *ngIf="aveLocation == 0">\n              <ion-label>Location</ion-label>\n              <ion-icon id="star1" name="star-outline"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveLocation == 1">\n              <ion-label>Location</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveLocation == 2">\n              <ion-label>Location</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveLocation == 3">\n              <ion-label>Location</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveLocation == 4">\n              <ion-label>Location</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveLocation == 5">\n              <ion-label>Location</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star"></ion-icon>\n            </div>\n          </ion-col>\n\n          <ion-col center text-center>\n            <div *ngIf="aveFoods == 0">\n              <ion-label>Foods</ion-label>\n              <ion-icon id="star1" name="star-outline"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFoods == 1">\n              <ion-label>Foods</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFoods == 2">\n              <ion-label>Foods</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFoods == 3">\n              <ion-label>Foods</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFoods == 4">\n              <ion-label>Foods</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveFoods == 5">\n              <ion-label>Foods</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star"></ion-icon>\n            </div>\n          </ion-col>\n\n          <ion-col center text-center>\n            <div *ngIf="aveRooms == 0">\n              <ion-label>Rooms</ion-label>\n              <ion-icon id="star1" name="star-outline"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveRooms == 1">\n              <ion-label>Rooms</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star-outline"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveRooms == 2">\n              <ion-label>Rooms</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star-outline"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveRooms == 3">\n              <ion-label>Rooms</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star-outline"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveRooms == 4">\n              <ion-label>Rooms</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star-outline"></ion-icon>\n            </div>\n            <div *ngIf="aveRooms == 5">\n              <ion-label>Rooms</ion-label>\n              <ion-icon id="star1" name="star"></ion-icon>\n              <ion-icon id="star2" name="star"></ion-icon>\n              <ion-icon id="star3" name="star"></ion-icon>\n              <ion-icon id="star4" name="star"></ion-icon>\n              <ion-icon id="star5" name="star"></ion-icon>\n            </div>\n          </ion-col>\n            \n        </ion-row>\n      </ion-card>\n\n      <ion-card ion-col class="ratingCard" *ngFor="let item of rate" col-12 col-md-12 col-lg-12>\n        <ion-row padding>\n          <ion-col col-3>\n            <ion-avatar>\n              <img class="profilePic" [src]="item.profilePic">\n            </ion-avatar>\n          </ion-col>\n  \n          <ion-col class="ratingInfo" col-9>\n            <div>{{item.email}}</div>\n              <div *ngIf="item.rating == 1">\n                <ion-icon id="star1" name="star"></ion-icon>\n              </div>\n              <div *ngIf="item.rating == 2">\n                <ion-icon id="star1" name="star"></ion-icon>\n                <ion-icon id="star2" name="star"></ion-icon>\n              </div>\n              <div *ngIf="item.rating == 3">\n                <ion-icon id="star1" name="star"></ion-icon>\n                <ion-icon id="star2" name="star"></ion-icon>\n                <ion-icon id="star3" name="star"></ion-icon>\n              </div>\n              <div *ngIf="item.rating == 4">\n                <ion-icon id="star1" name="star"></ion-icon>\n                <ion-icon id="star2" name="star"></ion-icon>\n                <ion-icon id="star3" name="star"></ion-icon>\n                <ion-icon id="star4" name="star"></ion-icon>\n              </div>\n              <div *ngIf="item.rating == 5">\n                <ion-icon id="star1" name="star"></ion-icon>\n                <ion-icon id="star2" name="star"></ion-icon>\n                <ion-icon id="star3" name="star"></ion-icon>\n                <ion-icon id="star4" name="star"></ion-icon>\n                <ion-icon id="star5" name="star"></ion-icon>\n              </div>\n          </ion-col>\n        </ion-row>\n  \n        <div class="ratingComment" padding center text-justify>{{item.comments}}</div>\n      </ion-card>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\establishment\establishment.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _j || Object])
    ], EstablishmentPage);
    return EstablishmentPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=establishment.js.map

/***/ })

});
//# sourceMappingURL=0.js.map