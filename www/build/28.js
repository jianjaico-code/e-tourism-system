webpackJsonp([28],{

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessmanMessagePageModule", function() { return BusinessmanMessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__businessman_message__ = __webpack_require__(765);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BusinessmanMessagePageModule = /** @class */ (function () {
    function BusinessmanMessagePageModule() {
    }
    BusinessmanMessagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__businessman_message__["a" /* BusinessmanMessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__businessman_message__["a" /* BusinessmanMessagePage */]),
            ],
        })
    ], BusinessmanMessagePageModule);
    return BusinessmanMessagePageModule;
}());

//# sourceMappingURL=businessman-message.module.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessmanMessagePage; });
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




var BusinessmanMessagePage = /** @class */ (function () {
    function BusinessmanMessagePage(navCtrl, navParams, afAuth, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.key = afAuth.auth.currentUser.uid;
        this.getMessageRecepient();
    }
    BusinessmanMessagePage.prototype.getMessageRecepient = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('message/' + this.key);
        ref.on('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                arr.push(data.key);
                console.log(data.key);
            });
            _this.recepient = arr;
            _this.loadedRec = arr;
            console.log(_this.recepient);
        });
    };
    BusinessmanMessagePage.prototype.pushChat = function (key) {
        var modal = this.modalCtrl.create('MessageTouristFromBusinessmanPage', { key: key, businessman: this.key });
        modal.present();
    };
    BusinessmanMessagePage.prototype.delete = function (key) {
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('message/' + this.key + '/' + key);
        var alert = this.alertCtrl.create({
            message: 'Are you sure you want to delete this message?',
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
    BusinessmanMessagePage.prototype.messageAdmin = function () {
        var modal = this.modalCtrl.create('TouristMessagePage');
        modal.present();
    };
    BusinessmanMessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-businessman-message',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\businessman-message\businessman-message.html"*/'<ion-content>\n  <div class="subBanner"></div>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-list inset>\n              <ion-item-sliding *ngFor="let item of recepient">\n                <ion-item ion-item (click)="pushChat(item)">\n                  {{item}}\n                </ion-item> \n                <ion-item-options side="right">\n                  <button ion-button color="danger" (click)="delete(item)"></button>\n                </ion-item-options>\n              </ion-item-sliding>\n            </ion-list>  \n        </ion-card>\n      </ion-col>\n\n      <ion-col>\n        <button ion-button round outline (click)="messageAdmin()">Message Tourism Officer</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\businessman-message\businessman-message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BusinessmanMessagePage);
    return BusinessmanMessagePage;
}());

//# sourceMappingURL=businessman-message.js.map

/***/ })

});
//# sourceMappingURL=28.js.map