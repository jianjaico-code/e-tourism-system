webpackJsonp([16],{

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListPageModule", function() { return MessageListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_list__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageListPageModule = /** @class */ (function () {
    function MessageListPageModule() {
    }
    MessageListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message_list__["a" /* MessageListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message_list__["a" /* MessageListPage */]),
            ],
        })
    ], MessageListPageModule);
    return MessageListPageModule;
}());

//# sourceMappingURL=message-list.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListPage; });
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




var MessageListPage = /** @class */ (function () {
    function MessageListPage(navCtrl, menuCtrl, platform, alertCtrl, afAuth, navParams, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.items = [];
        if (this.platform.is('mobile')) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        this.senderEmail = this.afAuth.auth.currentUser.email;
        this.getMessageRecepient();
        setInterval(function () {
            _this.getMessageRecepient();
        }, 10000);
        setTimeout(function () {
            for (var i = 0; i < 100; i++) {
                _this.items[i] = i;
            }
        }, 300);
    }
    ;
    MessageListPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    MessageListPage.prototype.callFunction = function () {
        var element = document.getElementById("messageBox");
        element.scrollTop = element.scrollHeight - element.clientHeight;
    };
    MessageListPage.prototype.getMessageRecepient = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user');
        var normalRec = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('message/' + this.afAuth.auth.currentUser.uid);
        var adminRec = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('message/Admin/');
        var adminMessageLog = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('message log');
        ref.once('value', function (user) {
            user.forEach(function (user) {
                if (user.key == _this.afAuth.auth.currentUser.uid) {
                    console.log(user.key);
                    if (user.val().usertypeid == 2) {
                        _this.modalSelector = true;
                        var arr_1 = [];
                        normalRec.once('value', function (recepient) {
                            recepient.forEach(function (recepient) {
                                var last = recepient.val()[Object.keys(recepient.val())[Object.keys(recepient.val()).length - 1]];
                                var dateData = new Date(last.date);
                                var dateDMY = dateData.getMonth() + 1 + "/" + dateData.getDate() + "/" + dateData.getFullYear();
                                var hours = dateData.getHours();
                                var ampm = hours >= 12 ? 'pm' : 'am';
                                hours = hours % 12;
                                hours = hours ? hours : 12;
                                var strTime = hours + ':' + (dateData.getMinutes() < 10 ? '0' : '') + dateData.getMinutes() + ' ' + ampm;
                                ref.once('value', function (user) {
                                    user.forEach(function (user) {
                                        if (recepient.key == user.key) {
                                            arr_1.push({
                                                image: user.val().profilePicUrl,
                                                name: user.val().name,
                                                userType: user.val().usertypeid,
                                                key: user.key,
                                                date: dateDMY,
                                                lastEmail: last.email,
                                                time: strTime,
                                            });
                                            arr_1.sort(function (a, b) {
                                                var data = new Date(b.date + " " + b.time).getTime();
                                                var data2 = new Date(a.date + " " + a.time).getTime();
                                                return data - data2;
                                            });
                                        }
                                    });
                                });
                            });
                            _this.recepient = arr_1;
                        });
                    }
                    else if (user.val().usertypeid == 3) {
                        _this.modalSelector = false;
                        var myKey_1 = [];
                        var myLog_1 = [];
                        var arr_2 = [];
                        adminRec.once('value', function (recepient) {
                            recepient.forEach(function (recepient) {
                                myKey_1.push(recepient.key);
                            });
                            adminMessageLog.once('value', function (log) {
                                log.forEach(function (log) {
                                    myKey_1.forEach(function (key) {
                                        if (log.key == key) {
                                            myLog_1.push(log.val());
                                        }
                                    });
                                });
                                ref.once('value', function (user) {
                                    user.forEach(function (user) {
                                        myKey_1.forEach(function (key) {
                                            if (user.key == key) {
                                                myLog_1.forEach(function (log) {
                                                    if (log.key == key) {
                                                        var last = recepient.val()[Object.keys(recepient.val())[Object.keys(recepient.val()).length - 1]];
                                                        var dateData = new Date(log.date);
                                                        var dateDMY = dateData.getMonth() + 1 + "/" + dateData.getDate() + "/" + dateData.getFullYear();
                                                        var hours = dateData.getHours();
                                                        var ampm = hours >= 12 ? 'pm' : 'am';
                                                        hours = hours % 12;
                                                        hours = hours ? hours : 12;
                                                        var strTime = hours + ':' + (dateData.getMinutes() < 10 ? '0' : '') + dateData.getMinutes() + ' ' + ampm;
                                                        arr_2.push({
                                                            image: user.val().profilePicUrl,
                                                            name: user.val().name,
                                                            userEmail: user.val().email,
                                                            userType: user.val().usertypeid,
                                                            key: user.key,
                                                            date: dateDMY,
                                                            time: strTime,
                                                            status: log.status
                                                        });
                                                        arr_2.sort(function (a, b) {
                                                            var data = new Date(b.date + " " + b.time).getTime();
                                                            var data2 = new Date(a.date + " " + a.time).getTime();
                                                            return data - data2;
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    });
                                    _this.recepient = arr_2;
                                });
                            });
                        });
                    }
                }
            });
        });
    };
    MessageListPage.prototype.messageUser = function (item) {
        if (this.modalSelector) {
            var modal = this.modalCtrl.create('TouristMessageToBusinessmanPage', item);
            modal.present();
        }
        else {
            var modal = this.modalCtrl.create('TouristMessagePage', item);
            modal.present();
        }
    };
    MessageListPage.prototype.pushChat = function (key) {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user');
        ref.on('value', function (data) {
            data.forEach(function (data) {
                if (data.key == _this.afAuth.auth.currentUser.uid) {
                    if (data.val().usertypeid == 2) {
                        _this.key = key;
                        var ref_1 = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('message/' + _this.afAuth.auth.currentUser.uid + '/' + key);
                        ref_1.on('value', function (data) {
                            var arr = [];
                            data.forEach(function (data) {
                                arr.push(data.val());
                            });
                            _this.chat = arr;
                        });
                    }
                    else if (data.val().usertypeid == 3) {
                        _this.key = key;
                        var ref_2 = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('message/Admin/' + key);
                        ref_2.on('value', function (data) {
                            var arr = [];
                            data.forEach(function (data) {
                                arr.push(data.val());
                            });
                            _this.chat = arr;
                        });
                    }
                }
            });
        });
    };
    // addMessage(){
    //   let alert = this.alertCtrl.create({
    //     message: 'Send To:',
    //     inputs: [
    //       {
    //         name: 'email',
    //         placeholder: 'Email'
    //       }
    //     ],
    //     buttons: [
    //       {
    //         text: 'Cancel',
    //         role: 'cancel',
    //         handler: data => {
    //           console.log('Cancel clicked');
    //         }
    //       },
    //       {
    //         text: 'Send',
    //         handler: element => {
    //           let userRef = firebase.database().ref('user/');
    //           userRef.on('value', data => {
    //             data.forEach(data => {
    //               if(data.val().email == element.email){
    //                 this.userData = data.val();
    //                 this.key = data.key;
    //                 let ref = firebase.database().ref('message/Admin/' + this.key);
    //                 ref.push({
    //                   email: this.senderEmail,
    //                   message: "Hello, this is an automated message. If you have some problem, please message an admin so that we can help you. Enjoy Gingoog City. ",
    //                   date: Date(),
    //                   usertypeid: this.userData.usertypeid
    //                 });
    //               }
    //             });
    //           });
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    // }
    // delete(key){
    //   let ref = firebase.database().ref('message/Admin/' + key);
    //   let alert = this.alertCtrl.create({
    //     message: 'Are you sure you want to delete this message?',
    //     buttons: [
    //       {
    //         text: 'Cancel',
    //         role: 'cancel',
    //         handler: () => {
    //           console.log('Cancel Clicked');
    //         }
    //       },
    //       {
    //         text: 'Yes',
    //         handler: () => { 
    //            ref.remove();
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    // }
    MessageListPage.prototype.sendMessage = function () {
        var _this = this;
        if (!this.message || this.message.length === 0 || /^\s*$/.test(this.message)) {
            var alert_1 = this.alertCtrl.create({
                message: "Empty",
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
            var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user');
            ref.on('value', function (user) {
                user.forEach(function (user) {
                    if (user.key == _this.afAuth.auth.currentUser.uid) {
                        if (user.val().usertypeid == 2) {
                            var ref_3 = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('message/' + _this.afAuth.auth.currentUser.uid + '/' + _this.key);
                            var TML = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('Tourist-Message-Log/' + _this.key + '/' + _this.afAuth.auth.currentUser.uid);
                            ref_3.push({
                                email: _this.senderEmail,
                                message: _this.message,
                                date: Date(),
                                usertypeid: user.val().usertypeid
                            });
                            TML.set({
                                key: _this.afAuth.auth.currentUser.uid,
                                time: Date(),
                                status: true,
                                myKey: _this.key
                            });
                        }
                        else if (user.val().usertypeid == 3) {
                            var ref_4 = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('message/Admin/' + _this.key);
                            var messageLog_1 = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('message log/' + _this.key);
                            ref_4.push({
                                email: _this.senderEmail,
                                message: _this.message,
                                date: Date(),
                                usertypeid: user.val().usertypeid
                            }).then(function () {
                                messageLog_1.set({
                                    status: true,
                                    key: _this.key,
                                    date: Date()
                                });
                                _this.getMessageRecepient();
                            });
                        }
                    }
                });
            });
        }
        this.message = "";
        this.getMessageRecepient();
    };
    MessageListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-message-list',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\message-list\message-list.html"*/'<ion-content *ngIf="!mobile">\n  <ion-grid fixed>\n    <ion-card no-margin margin-bottom>\n        <ion-item class="border-bottom">\n\n            <ion-row>\n              <ion-col>\n                <ion-icon tappable menuToggle style="zoom:1.5;" name="menu"></ion-icon>\n              </ion-col>\n            </ion-row>\n        \n          </ion-item>\n      <ion-item class="animated fadeIn">\n        \n        <ion-row>\n          <ion-col class="messageList">\n            <ion-list *ngFor="let item of recepient">\n              <ion-item tappable (click)="pushChat(item.key, item.userType)" class="border-bottom">\n                <ion-avatar item-start>\n                  <img [src]="item.image">\n                </ion-avatar>\n                <h2>{{item.name}} &nbsp;<span *ngIf="item.lastEmail != senderEmail" class="dot"></span></h2>\n                <h3 *ngIf="item.userType == 1">Tourist</h3>\n                <h3 *ngIf="item.userType == 2">Local Businessman</h3>\n                <h3 *ngIf="item.userType == 3">Tourism Officer</h3>\n                <p>{{item.date}} {{item.time}}</p>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col>\n            <div class="messageBox" id="messageBox" #messageBox>\n              <ion-list>\n                <ion-item *ngFor="let item of chat; let last = last" no-lines>\n                  <div *ngIf="item.email == senderEmail" class="chat-message" text-right>\n                    <div class="right-bubble">\n                      <span class="msg-name">Me</span>\n                      <span class="chat-date">{{item.date | date:\'short\'}}</span>\n                      <ion-card-content text-wrap>\n                        <p>{{item.message}}</p>\n                        {{last ? callFunction() : \'\'}}\n                      </ion-card-content>\n                    </div>\n                  </div>\n            \n                  <div class="chat-message" text-left *ngIf="item.email !== senderEmail && item.email">\n                    <div class="left-bubble">\n                      <span class="msg-name">{{item.email}}</span>\n                      <span class="msg-date">{{item.date | date:\'short\'}}</span>\n                      <ion-card-content text-wrap>\n                        <p>{{item.message}}</p>\n                        {{last ? callFunction() : \'\'}}\n                      </ion-card-content>\n                    </div>\n                  </div>\n                </ion-item>\n              </ion-list>\n            </div>\n            <ion-row class="chatBox">\n              <ion-col col-10>\n               <ion-item>\n                <ion-input type="text" placeholder="Type a message" [(ngModel)]="message" name="message" (keyup.enter)="sendMessage()"></ion-input>\n               </ion-item>\n              </ion-col>\n              <ion-col col-2>\n                <ion-icon name="paper-plane"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n      </ion-item>\n    </ion-card>   \n  </ion-grid>\n </ion-content>\n\n <ion-header *ngIf="mobile">\n  <ion-navbar padding color="navbar_color" >\n      <ion-icon tappable (click)="toggleMenu()" style="zoom:1.5;" name="menu"></ion-icon>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="mobile">\n  <ion-list *ngFor="let item of recepient">\n    <ion-item tappable (click)="messageUser(item)" class="border-bottom">\n      <ion-avatar item-start>\n        <img [src]="item.image">\n      </ion-avatar>\n      <h2>{{item.name}} &nbsp;<span *ngIf="item.status" class="dot"></span></h2>\n      <h3 *ngIf="item.userType == 1">Tourist</h3>\n      <h3 *ngIf="item.userType == 2">Local Businessman</h3>\n      <h3 *ngIf="item.userType == 3">Tourism Officer</h3>\n      <p>{{item.date}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\message-list\message-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], MessageListPage);
    return MessageListPage;
}());

//# sourceMappingURL=message-list.js.map

/***/ })

});
//# sourceMappingURL=16.js.map