webpackJsonp([18],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingPageModule", function() { return MappingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapping__ = __webpack_require__(775);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MappingPageModule = /** @class */ (function () {
    function MappingPageModule() {
    }
    MappingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mapping__["a" /* MappingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mapping__["a" /* MappingPage */]),
            ],
        })
    ], MappingPageModule);
    return MappingPageModule;
}());

//# sourceMappingURL=mapping.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MappingPage; });
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



var map;
var infowindow;
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 60000
};
var MappingPage = /** @class */ (function () {
    function MappingPage(navCtrl, platform, modalCtrl, navParams, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.markers = [];
        this.directionsDisplays = [];
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        if (this.platform.is('mobile')) {
            this.mobile = true;
            platform.ready().then(function () {
                _this.initMap();
            });
        }
        else {
            this.mobile = false;
            platform.ready().then(function () {
                _this.initMap();
            });
        }
        this.getEstablishment();
        this.fareShow = false;
        this.travelMode = "DRIVING";
    }
    MappingPage.prototype.showFare = function () {
        var modal = this.modalCtrl.create('FarePage');
        modal.present();
    };
    MappingPage.prototype.initMap = function () {
        var me = this;
        navigator.geolocation.getCurrentPosition(function (location) {
            map = new google.maps.Map(me.mapElement.nativeElement, {
                zoom: 8.5,
                center: { lat: 8.8230, lng: 125.0976 }
            });
            me.myPos = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
            var icon = {
                url: "../../assets/imgs/mylocationpin.png",
                scaledSize: new google.maps.Size(50, 60)
            };
            var myPosMarker = new google.maps.Marker({
                position: me.myPos,
                animation: google.maps.Animation.DROP,
                icon: icon,
                title: "Your Position"
            });
            myPosMarker.setMap(map);
        }, function (error) {
            console.log(error);
        }, options);
    };
    MappingPage.prototype.getEstablishment = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('establishment');
        ref.on('value', function (snapshot) {
            var arr = [];
            snapshot.forEach(function (snapshot) {
                if (snapshot.val().status == 1) {
                    arr.push({
                        name: snapshot.val().name,
                        latitude: snapshot.val().latitude,
                        longitude: snapshot.val().longitude
                    });
                    console.log(snapshot.val());
                }
            });
            _this.data = arr;
            _this.loadedData = arr;
        });
    };
    MappingPage.prototype.initializeItem = function () {
        this.data = this.loadedData;
    };
    MappingPage.prototype.getItems = function (searchbar) {
        this.initializeItem();
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.data = this.data.filter(function (data) {
            if (data.name && q) {
                if (data.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    MappingPage.prototype.initializeMapping = function (data) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
        var me = this;
        me.readData = data;
        var Establishment = new google.maps.LatLng(data.latitude, data.longitude);
        me.directionsDisplay.setMap(null);
        var icon = {
            url: "../../assets/imgs/pin.png",
            scaledSize: new google.maps.Size(50, 60)
        };
        var marker = new google.maps.Marker({
            position: Establishment,
            animation: google.maps.Animation.DROP,
            icon: icon,
            title: data.name
        });
        me.markers = [];
        var request = {
            origin: me.myPos,
            destination: Establishment,
            travelMode: me.mappingOption.value,
            unitSystem: google.maps.UnitSystem.METRIC
        };
        me.directionsService.route(request, function (result, status) {
            if (status === 'OK') {
                me.directionsDisplay.setMap(map);
                me.directionsDisplay.setDirections(result);
                var point = result.routes[0].legs[0];
                console.log('Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')');
                me.mappingEstTime = point.duration.text;
                me.mappingDistance = point.distance.text;
                marker.setMap(map);
                me.markers.push(marker);
            }
        });
    };
    MappingPage.prototype.changeData = function (event) {
        this.mappingOption.value = event;
        if (this.readData) {
            this.initializeMapping(this.readData);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('from'),
        __metadata("design:type", Object)
    ], MappingPage.prototype, "from", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('to'),
        __metadata("design:type", Object)
    ], MappingPage.prototype, "to", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mappingOption'),
        __metadata("design:type", Object)
    ], MappingPage.prototype, "mappingOption", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], MappingPage.prototype, "mapElement", void 0);
    MappingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mapping',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\mapping\mapping.html"*/'<ion-content *ngIf="!mobile" padding>\n  <ion-grid fixed>\n   \n    <ion-row>\n      <ion-col col-4>\n        <ion-card class="estSelector" padding>\n          <ion-searchbar (ionInput)="getItems($event)" placeholder="Search for a  Place"></ion-searchbar>\n\n          <ion-list *ngFor="let item of data">\n            <ion-item tappable (click)="initializeMapping(item)">\n                <ion-icon name="locate"></ion-icon>&nbsp; {{item.name}}\n            </ion-item>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-8>\n        <ion-card padding>\n          <ion-row>\n            <ion-col>\n              <ion-card>\n                <ion-item>\n                  <button ion-button (click)="showFare()">Show Fare</button>\n                </ion-item>\n                <ion-item>\n                  <ion-label stacked>Travel Mode</ion-label>\n                  <ion-select [(ngModel)]="travelMode" #mappingOption>\n                    <ion-option value="DRIVING" (ionSelect)="changeData($event)">DRIVING</ion-option>\n                    <ion-option value="WALKING" (ionSelect)="changeData($event)">WALKING</ion-option>\n                    <ion-option value="TRANSIT" (ionSelect)="changeData($event)">TRANSIT</ion-option>\n                    <ion-option value="BICYCLE" (ionSelect)="changeData($event)">BICYCLE</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col>\n              <ion-item class="border-bottom">\n                <ion-icon name="stopwatch"></ion-icon>\n                {{mappingEstTime}}\n              </ion-item>\n            </ion-col>\n\n            <ion-col>\n              <ion-item class="border-bottom">\n                <ion-icon name="bus"></ion-icon>\n                {{mappingDistance}}\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <div class="mapDiv">\n            <div #map id="map"></div>\n          </div>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-content padding *ngIf="mobile">\n  <ion-card padding>\n    <ion-item>\n      <ion-label stacked>Travel Mode</ion-label>\n      <ion-select [(ngModel)]="travelMode"#mappingOption>\n        <ion-option value="DRIVING" (ionSelect)="changeData($event)">DRIVING</ion-option>\n        <ion-option value="WALKING" (ionSelect)="changeData($event)">WALKING</ion-option>\n      </ion-select>\n    </ion-item>\n    <div class="mapDiv mapDivMobile">\n      <div #map id="map"></div>\n    </div>\n    <ion-row>\n      <ion-col>\n        <ion-item class="border-bottom">\n          <ion-icon name="stopwatch"></ion-icon>\n          {{mappingEstTime}}\n        </ion-item>\n      </ion-col>\n  \n      <ion-col>\n        <ion-item class="border-bottom">\n          <ion-icon name="bus"></ion-icon>\n          {{mappingDistance}}\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  \n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Search for a  Place"></ion-searchbar>\n\n    <ion-list *ngFor="let item of data">\n      <ion-item tappable (click)="initializeMapping(item)">\n          <ion-icon name="locate"></ion-icon>&nbsp; {{item.name}}\n      </ion-item>\n    </ion-list>\n\n    <div *ngIf="fareShow">\n      <h1 text-center>Within the city fare.</h1>\n          <ion-row>\n            <ion-col>\n              <ion-label>Sikad:</ion-label>\n              <ion-card>\n                <ion-item>\n                  Student - &#8369;6.00\n                </ion-item>\n              </ion-card>\n\n              <ion-card>\n                <ion-item>\n                  Regular - &#8369;7.00\n                </ion-item>\n              </ion-card>\n            </ion-col>\n\n            <ion-col>\n                <ion-label>Rela:</ion-label>\n                <ion-card>\n                  <ion-item>\n                    Student - &#8369;6.00\n                  </ion-item>\n                </ion-card>\n  \n                <ion-card>\n                  <ion-item>\n                    Regular - &#8369;7.00\n                  </ion-item>\n                </ion-card>\n              </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-label>Multicab:</ion-label>\n              <ion-card>\n                <ion-item>\n                  &#8369;20.00 - &#8369;30.00\n                </ion-item>\n              </ion-card>\n            </ion-col>\n\n            <ion-col>\n              <ion-label>Habal-Habal:</ion-label>\n              <ion-card>\n                <ion-item>\n                  &#8369;50.00\n                </ion-item>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\mapping\mapping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], MappingPage);
    return MappingPage;
}());

//# sourceMappingURL=mapping.js.map

/***/ })

});
//# sourceMappingURL=18.js.map