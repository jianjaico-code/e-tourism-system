webpackJsonp([8],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouristProfilePageModule", function() { return TouristProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tourist_profile__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TouristProfilePageModule = /** @class */ (function () {
    function TouristProfilePageModule() {
    }
    TouristProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tourist_profile__["a" /* TouristProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tourist_profile__["a" /* TouristProfilePage */]),
            ],
        })
    ], TouristProfilePageModule);
    return TouristProfilePageModule;
}());

//# sourceMappingURL=tourist-profile.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouristProfilePage; });
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




var TouristProfilePage = /** @class */ (function () {
    function TouristProfilePage(navCtrl, modalCtrl, afAuth, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.caption = "EDIT";
        this.isDisabled = true;
        this.profilePic = this.afAuth.auth.currentUser.photoURL;
        this.userEmail = this.afAuth.auth.currentUser.email;
        this.getUserInfo();
        this.initActivityLog();
    }
    TouristProfilePage.prototype.chat = function () {
        var modal = this.modalCtrl.create('TouristMessagePage');
        modal.present();
    };
    TouristProfilePage.prototype.getUserInfo = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user');
        ref.on('value', function (data) {
            data.forEach(function (data) {
                if (data.val().email == _this.userEmail) {
                    _this.key = data.key;
                    _this.data = data.val();
                }
            });
            console.log(_this.data);
        });
    };
    TouristProfilePage.prototype.initActivityLog = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('activityLog');
        ref.on('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                var strDate = data.val().Date;
                var date = strDate.substring(0, 10);
                var newDate = new Date(data.val().Date);
                var hrs = newDate.getHours();
                var mins = newDate.getMinutes();
                if (data.val().email == _this.userEmail) {
                    arr.push({
                        Date: date,
                        Key: data.key,
                        Hours: hrs + ":" + mins,
                        Description: data.val().Description,
                        email: data.val().email
                    });
                }
            });
            _this.activityLog = arr.reverse();
            console.log(_this.activityLog);
        });
    };
    TouristProfilePage.prototype.saveUserData = function () {
        var passRef = this.afAuth.auth.currentUser;
        if (this.password.value != "") {
            passRef.updatePassword(this.password.value).then(function () {
                console.log("Update successful");
            }).catch(function (error) {
                console.log("Error in - " + error);
            });
        }
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/' + this.key);
        ref.set({
            name: this.name.value,
            email: this.afAuth.auth.currentUser.email,
            profilePicUrl: this.data.profilePicUrl,
            address: this.address.value,
            status: this.data.status,
            usertypeid: this.data.usertypeid
        });
    };
    TouristProfilePage.prototype.getPicture = function () {
        this.fileInput.nativeElement.click();
    };
    TouristProfilePage.prototype.detectFiles = function (event) {
        var _this = this;
        var profilePic;
        var loading = this.loadingCtrl.create();
        loading.present();
        var imageData = event.target.files[0];
        var refProfile = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref('/User Picture/' + imageData.name);
        refProfile.put(imageData).then(function (snapshot) {
            return snapshot.ref.getDownloadURL();
        }).then(function (downloadURL) {
            console.log("Successfully uploaded file and got download link - " + downloadURL);
            profilePic = downloadURL;
            loading.dismiss();
            return downloadURL;
        }).catch(function (error) {
            loading.dismiss();
            console.log("Failed to upload file and get link - " + error);
        });
        loading.onDidDismiss(function () {
            var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
            user.updateProfile({
                displayName: _this.name.value,
                photoURL: profilePic
            }).then(function () {
                console.log("Update Successful");
            }).catch(function (error) {
                console.log("Erorr in - " + error);
            });
            var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user/' + _this.key);
            ref.set({
                name: _this.name.value,
                email: _this.afAuth.auth.currentUser.email,
                profilePicUrl: profilePic,
                address: _this.address.value,
                status: _this.data.status,
                usertypeid: _this.data.usertypeid
            });
        });
    };
    TouristProfilePage.prototype.editProfile = function () {
        if (this.caption == "EDIT") {
            this.caption = "SAVE";
            this.isDisabled = false;
        }
        else if (this.caption == "SAVE") {
            this.caption = "EDIT";
            this.isDisabled = true;
            this.saveUserData();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], TouristProfilePage.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('address'),
        __metadata("design:type", Object)
    ], TouristProfilePage.prototype, "address", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fullname'),
        __metadata("design:type", Object)
    ], TouristProfilePage.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], TouristProfilePage.prototype, "password", void 0);
    TouristProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tourist-profile',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\tourist-profile\tourist-profile.html"*/'<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col>\n          <div class="profileDiv animated fadeInDown">\n              <div class="upperDiv">\n                <ion-row>\n                  <ion-col>\n                    <div class="editBtn" (click)="editProfile()">{{caption}}</div>\n                  </ion-col>\n                  <ion-col>\n                    <div class="chatBtn" (click)="chat()">MESSAGE ADMIN</div>\n                  </ion-col>\n                </ion-row>\n                <input type="file" #fileInput style="visibility: hidden; height: 0px;" (change)="detectFiles($event)"/>\n                <div class="profile-image-wrapper" (click)="getPicture()">\n                  <img class="profile-image" [src]="profilePic">\n                  <div class="cameraOutline"><ion-icon name="ios-camera-outline" class="ios-camera-outline" md="ios-camera-outline" style="color: white !important"></ion-icon></div>\n                </div>\n              </div>\n            \n              <ion-list>\n                <ion-item>\n                  <ion-label class="label_here">Full Name:</ion-label>\n                  <ion-input [(ngModel)]="data.name" disabled="{{isDisabled}}" type="text" #fullname></ion-input>\n                </ion-item>\n            \n                <ion-item>\n                  <ion-label class="label_here">Address:</ion-label>\n                  <ion-input [(ngModel)]="data.address" disabled="{{isDisabled}}" type="text" #address></ion-input>\n                </ion-item>\n            \n                <ion-item>\n                  <ion-label class="label_here">Password:</ion-label>\n                  <ion-input disabled="{{isDisabled}}" type="password" #password></ion-input>\n                </ion-item>\n              </ion-list>\n            </div>\n      </ion-col>\n\n      <ion-col>\n        <ion-card class="animated fadeIn activityLog" padding>\n          <h2 center text-center>Activity Log</h2>\n          <ion-list>\n            <ion-card class="activityList" *ngFor="let item of activityLog">\n  \n                <ion-row>\n                  <ion-col>\n                    {{item.Description}}\n                  </ion-col>\n                  <ion-col>\n                    {{item.Date}} - {{item.Hours}}\n                  </ion-col>\n                </ion-row>\n            </ion-card>\n          </ion-list>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\tourist-profile\tourist-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TouristProfilePage);
    return TouristProfilePage;
}());

//# sourceMappingURL=tourist-profile.js.map

/***/ })

});
//# sourceMappingURL=8.js.map