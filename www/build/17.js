webpackJsonp([17],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListTouristPageModule", function() { return MessageListTouristPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_list_tourist__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageListTouristPageModule = /** @class */ (function () {
    function MessageListTouristPageModule() {
    }
    MessageListTouristPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message_list_tourist__["a" /* MessageListTouristPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message_list_tourist__["a" /* MessageListTouristPage */]),
            ],
        })
    ], MessageListTouristPageModule);
    return MessageListTouristPageModule;
}());

//# sourceMappingURL=message-list-tourist.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListTouristPage; });
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




var MessageListTouristPage = /** @class */ (function () {
    function MessageListTouristPage(platform, modalCtrl, navCtrl, navParams, afAuth, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.items = [];
        if (this.platform.is('mobile')) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        this.userData = "";
        this.key = afAuth.auth.currentUser.uid;
        this.senderEmail = afAuth.auth.currentUser.email;
        this.getMessageRecepient();
        setTimeout(function () {
            for (var i = 0; i < 100; i++) {
                _this.items[i] = i;
            }
        }, 300);
    }
    ;
    MessageListTouristPage.prototype.callFunction = function () {
        var element = document.getElementById("messageBox");
        element.scrollTop = element.scrollHeight - element.clientHeight;
    };
    MessageListTouristPage.prototype.messageOwner = function (data) {
        var modal = this.modalCtrl.create('TouristMessageToBusinessmanPage', data);
        modal.present();
    };
    MessageListTouristPage.prototype.getMessageRecepient = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('Tourist-Message-Log/' + this.key);
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user');
        ref.on('value', function (data) {
            data.forEach(function (data) {
                if (_this.key == data.val().myKey) {
                    user.on('value', function (user) {
                        var arr = [];
                        user.forEach(function (user) {
                            if (user.key == data.val().key) {
                                var dateData = new Date(data.val().time);
                                var dateDMY = dateData.getMonth() + 1 + "/" + dateData.getDate() + "/" + dateData.getFullYear();
                                var hours = dateData.getHours();
                                var ampm = hours >= 12 ? 'pm' : 'am';
                                hours = hours % 12;
                                hours = hours ? hours : 12;
                                var strTime = hours + ':' + (dateData.getMinutes() < 10 ? '0' : '') + dateData.getMinutes() + ' ' + ampm;
                                arr.push({
                                    image: user.val().profilePicUrl,
                                    name: user.val().name,
                                    userEmail: user.val().email,
                                    userType: user.val().usertypeid,
                                    key: user.key,
                                    date: dateDMY,
                                    time: strTime,
                                    status: data.val().status
                                });
                            }
                        });
                        _this.recepient = arr;
                    });
                }
            });
        });
    };
    MessageListTouristPage.prototype.pushChat = function (key) {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user');
        ref.on('value', function (data) {
            data.forEach(function (data) {
                if (key == data.key) {
                    _this.recieverEmail = data.key;
                    _this.userData = data.val();
                }
                if (data.key == _this.afAuth.auth.currentUser.uid) {
                    _this.key = key;
                    var ref_1 = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('message/' + key + '/' + _this.afAuth.auth.currentUser.uid);
                    ref_1.on('value', function (data) {
                        var arr = [];
                        data.forEach(function (data) {
                            arr.push(data.val());
                        });
                        _this.chat = arr;
                    });
                }
            });
        });
    };
    MessageListTouristPage.prototype.sendMessage = function () {
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
            if (this.userData == "") {
                var alert2 = this.alertCtrl.create({
                    message: "Please select a user you want to message",
                    buttons: [
                        {
                            text: "OK",
                            role: 'cancel'
                        }
                    ]
                });
                alert2.present();
            }
            else {
                var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('message/' + this.recieverEmail + '/' + this.afAuth.auth.currentUser.uid);
                var TML = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('Tourist-Message-Log/' + this.afAuth.auth.currentUser.uid + '/' + this.recieverEmail);
                ref.push({
                    email: this.senderEmail,
                    message: this.message,
                    date: Date(),
                    usertypeid: this.userData.usertypeid
                });
                TML.set({
                    key: this.recieverEmail,
                    time: Date(),
                    status: false,
                    myKey: this.afAuth.auth.currentUser.uid
                });
                this.getMessageRecepient();
            }
        }
        this.message = "";
        this.getMessageRecepient();
    };
    MessageListTouristPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-message-list-tourist',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\message-list-tourist\message-list-tourist.html"*/'<ion-content *ngIf="!mobile">\n  <ion-grid fixed>\n    <ion-card no-margin margin-bottom>\n      <ion-item class="animated fadeIn">\n        \n        <ion-row>\n          <ion-col class="messageList">\n            <ion-list *ngFor="let item of recepient">\n              <ion-item tappable (click)="pushChat(item.key, item.userType)" class="border-bottom">\n                <ion-avatar item-start>\n                  <img [src]="item.image">\n                </ion-avatar>\n                <h2>{{item.name}} &nbsp;<span *ngIf="item.status" class="dot"></span></h2>\n                <h3 *ngIf="item.userType == 1">Tourist</h3>\n                <h3 *ngIf="item.userType == 2">Local Businessman</h3>\n                <h3 *ngIf="item.userType == 3">Tourism Officer</h3>\n                <p>{{item.date}}</p>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col>\n            <div class="messageBox" id="messageBox" #messageBox>\n              <ion-list>\n                <ion-item *ngFor="let item of chat; let last = last" no-lines>\n                  <div *ngIf="item.email == senderEmail" class="chat-message" text-right>\n                    <div class="right-bubble">\n                      <span class="msg-name">Me</span>\n                      <span class="chat-date">{{item.date | date:\'short\'}}</span>\n                      <ion-card-content text-wrap>\n                        <p>{{item.message}}</p>\n                        {{last ? callFunction() : \'\'}}\n                      </ion-card-content>\n                    </div>\n                  </div>\n            \n                  <div class="chat-message" text-left *ngIf="item.email !== senderEmail && item.email">\n                    <div class="left-bubble">\n                      <span class="msg-name">{{item.email}}</span>\n                      <span class="msg-date">{{item.date | date:\'short\'}}</span>\n                      <ion-card-content text-wrap>\n                        <p>{{item.message}}</p>\n                        {{last ? callFunction() : \'\'}}\n                      </ion-card-content>\n                    </div>\n                  </div>\n                </ion-item>\n              </ion-list>\n            </div>\n            <ion-row class="chatBox">\n              <ion-col col-10>\n               <ion-item>\n                <ion-input type="text" placeholder="Type a message" [(ngModel)]="message" name="message" (keyup.enter)="sendMessage()"></ion-input>\n               </ion-item>\n              </ion-col>\n              <ion-col col-2>\n                <ion-icon name="paper-plane"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n      </ion-item>\n    </ion-card>   \n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf="mobile">\n  <ion-list *ngFor="let item of recepient">\n    <ion-item tappable (click)="messageOwner(item)" class="border-bottom">\n      <ion-avatar item-start>\n        <img [src]="item.image">\n      </ion-avatar>\n      <h2>{{item.name}} &nbsp;<span *ngIf="item.status" class="dot"></span></h2>\n      <h3 *ngIf="item.userType == 1">Tourist</h3>\n      <h3 *ngIf="item.userType == 2">Local Businessman</h3>\n      <h3 *ngIf="item.userType == 3">Tourism Officer</h3>\n      <p>{{item.date}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\message-list-tourist\message-list-tourist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MessageListTouristPage);
    return MessageListTouristPage;
}());

//# sourceMappingURL=message-list-tourist.js.map

/***/ })

});
//# sourceMappingURL=17.js.map