webpackJsonp([12],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristMessageToBusinessmanPageModule", function() { return TouristMessageToBusinessmanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tourist_message_to_businessman__ = __webpack_require__(784);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TouristMessageToBusinessmanPageModule = /** @class */ (function () {
    function TouristMessageToBusinessmanPageModule() {
    }
    TouristMessageToBusinessmanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tourist_message_to_businessman__["a" /* TouristMessageToBusinessmanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tourist_message_to_businessman__["a" /* TouristMessageToBusinessmanPage */]),
            ],
        })
    ], TouristMessageToBusinessmanPageModule);
    return TouristMessageToBusinessmanPageModule;
}());

//# sourceMappingURL=tourist-message-to-businessman.module.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouristMessageToBusinessmanPage; });
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




var TouristMessageToBusinessmanPage = /** @class */ (function () {
    function TouristMessageToBusinessmanPage(navCtrl, navParams, alertCtrl, afAuth, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.viewCtrl = viewCtrl;
        this.items = [];
        this.senderEmail = this.afAuth.auth.currentUser.email;
        this.data = this.navParams.data;
        this.initUserProfile();
        setTimeout(function () {
            for (var i = 0; i < 100; i++) {
                _this.items[i] = i;
            }
        }, 300);
    }
    TouristMessageToBusinessmanPage.prototype.exitChat = function () {
        this.viewCtrl.dismiss();
    };
    TouristMessageToBusinessmanPage.prototype.initUserProfile = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('user/');
        ref.on('value', function (data) {
            data.forEach(function (data) {
                if (data.val().email == _this.senderEmail) {
                    _this.userData = data.val();
                    _this.userKey = data.key;
                    _this.type = data.val().usertypeid;
                }
                else if (data.val().email == _this.data.userEmail) {
                    _this.recieverEmail = data.key;
                    console.log(_this.recieverEmail);
                }
            });
        });
    };
    TouristMessageToBusinessmanPage.prototype.callFunction = function () {
        this.contentArea.scrollToBottom(0);
    };
    TouristMessageToBusinessmanPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.type == 1) {
            var ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('message/' + this.recieverEmail + '/' + this.userKey);
            ref.on('value', function (data) {
                var arr = [];
                data.forEach(function (data) {
                    arr.push(data.val());
                });
                _this.chat = arr;
                console.log(_this.chat);
            });
        }
        else if (this.type == 2) {
            var ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('message/' + this.userKey + '/' + this.navParams.data.key);
            ref.on('value', function (data) {
                var arr = [];
                data.forEach(function (data) {
                    arr.push(data.val());
                });
                _this.chat = arr;
                console.log(_this.chat);
            });
        }
    };
    TouristMessageToBusinessmanPage.prototype.sendMessage = function () {
        var _this = this;
        if (!this.message || this.message.length === 0 || /^\s*$/.test(this.message)) {
            var alert_1 = this.alertCtrl.create({
                message: "Its EMPTY",
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel'
                    }
                ]
            });
            alert_1.present();
        }
        else {
            if (this.type == 1) {
                var ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('message/' + this.recieverEmail + '/' + this.afAuth.auth.currentUser.uid);
                var TML_1 = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('Tourist-Message-Log/' + this.afAuth.auth.currentUser.uid + '/' + this.recieverEmail);
                ref.push({
                    email: this.senderEmail,
                    message: this.message,
                    date: Date(),
                    usertypeid: this.userData.usertypeid
                }).then(function () {
                    TML_1.set({
                        key: _this.recieverEmail,
                        time: Date(),
                        status: false,
                        myKey: _this.afAuth.auth.currentUser.uid
                    });
                });
            }
            else if (this.type == 2) {
                var ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('message/' + this.userKey + '/' + this.navParams.data.key);
                var TML_2 = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('Tourist-Message-Log/' + this.navParams.data.key);
                ref.push({
                    email: this.senderEmail,
                    message: this.message,
                    date: Date(),
                    usertypeid: this.navParams.data.userType
                }).then(function () {
                    TML_2.set({
                        key: _this.navParams.data.key,
                        time: Date(),
                        status: true,
                        myKey: _this.afAuth.auth.currentUser.uid
                    });
                });
            }
        }
        this.message = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], TouristMessageToBusinessmanPage.prototype, "contentArea", void 0);
    TouristMessageToBusinessmanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tourist-message-to-businessman',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\tourist-message-to-businessman\tourist-message-to-businessman.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Message {{data.name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="exitChat()">\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of chat; let last = last" no-lines>\n      <div *ngIf="item.email == senderEmail" class="chat-message" text-right>\n        <div class="right-bubble">\n          <span class="msg-name">Me</span>\n          <span class="chat-date">{{item.date | date:\'short\'}}</span>\n          <ion-card-content>\n            <p text-wrap>{{item.message}}</p>\n            {{last ? callFunction() : \'\'}}\n          </ion-card-content>\n        </div>\n      </div>\n\n      <div class="chat-message" text-left *ngIf="item.email !== senderEmail && item.email">\n        <div class="left-bubble">\n          <span class="msg-name">{{item.email}}</span><br>\n          <span class="msg-date">{{item.date | date:\'short\'}}</span>\n          <ion-card-content>\n            <p text-wrap>{{item.message}}</p>\n            {{last ? callFunction() : \'\'}}\n          </ion-card-content>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer class="messageBox">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-10>\n        <ion-input type="text" placeholder="Type a message" [(ngModel)]="message" name="message" (keyup.enter)="sendMessage()"></ion-input>\n      </ion-col>\n      <ion-col col-2 (click)="sendMessage()">\n        <ion-icon name="paper-plane"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\tourist-message-to-businessman\tourist-message-to-businessman.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], TouristMessageToBusinessmanPage);
    return TouristMessageToBusinessmanPage;
}());

//# sourceMappingURL=tourist-message-to-businessman.js.map

/***/ })

});
//# sourceMappingURL=12.js.map