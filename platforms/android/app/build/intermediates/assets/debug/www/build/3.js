webpackJsonp([3],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(776);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            invalidEmail: true,
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = /** @class */ (function () {
    function SignupPage(nav, toastCtrl, navParams, modalCtrl, viewCtrl, afAuth, authData, formBuilder, loadingCtrl, alertCtrl) {
        this.nav = nav;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.afAuth = afAuth;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.signupForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        this.checkData();
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            if (!this.validData) {
                this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password).then(function () {
                    var user = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser;
                    user.updateProfile({
                        displayName: _this.name.value,
                        photoURL: "https://firebasestorage.googleapis.com/v0/b/onlinetourist.appspot.com/o/system%2Fhd-avatar.png?alt=media&token=7b90ff0a-f139-4503-b199-18839ee7bccb"
                    }).then(function () {
                        console.log("Update Successful");
                    }).catch(function (error) {
                        console.log("Erorr in - " + error);
                    });
                    _this.ref = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref("user/" + _this.afAuth.auth.currentUser.uid);
                    if (_this.usertypeid.value == 2) {
                        _this.ref.set({
                            email: _this.email.value,
                            name: _this.name.value,
                            profilePicUrl: "https://firebasestorage.googleapis.com/v0/b/onlinetourist.appspot.com/o/system%2Fhd-avatar.png?alt=media&token=7b90ff0a-f139-4503-b199-18839ee7bccb",
                            address: _this.address.value,
                            usertypeid: _this.usertypeid.value,
                            status: "2"
                        }).then(function () {
                            _this.loading.dismiss();
                            var toast = _this.toastCtrl.create({
                                message: 'User was added successfully',
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__main_main__["a" /* MainPage */]);
                        });
                    }
                    else {
                        _this.ref.set({
                            email: _this.email.value,
                            name: _this.name.value,
                            profilePicUrl: "https://firebasestorage.googleapis.com/v0/b/onlinetourist.appspot.com/o/system%2Fhd-avatar.png?alt=media&token=7b90ff0a-f139-4503-b199-18839ee7bccb",
                            address: _this.address.value,
                            usertypeid: _this.usertypeid.value,
                            status: "1"
                        }).then(function () {
                            _this.loading.dismiss();
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__main_main__["a" /* MainPage */]);
                            var toast = _this.toastCtrl.create({
                                message: 'User was added successfully',
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                        });
                    }
                }, function (error) {
                    _this.loading.dismiss().then(function () {
                        var errorMessage = error.message;
                        var alert = _this.alertCtrl.create({
                            message: errorMessage,
                            buttons: [
                                {
                                    text: "Ok",
                                    role: 'cancel'
                                }
                            ]
                        });
                        alert.present();
                    });
                });
                this.loading.present();
            }
        }
    };
    SignupPage.prototype.exit = function () {
        this.viewCtrl.dismiss();
    };
    SignupPage.prototype.login = function () {
        var _this = this;
        if (this.navParams.data.key) {
            this.viewCtrl.dismiss();
        }
        else {
            var modal = this.modalCtrl.create('LoginPage');
            modal.present().then(function () {
                _this.viewCtrl.dismiss();
            });
        }
    };
    SignupPage.prototype.checkData = function () {
        if (this.name.value == "") {
            this.validData = true;
            var alert_1 = this.alertCtrl.create({
                title: "Attention",
                subTitle: "Name is Empty",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.address.value == "") {
            this.validData = true;
            var alert_2 = this.alertCtrl.create({
                title: "Attention",
                subTitle: "Address is Empty",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.usertypeid.value == "") {
            this.validData = true;
            var alert_3 = this.alertCtrl.create({
                title: "Attention",
                subTitle: "Please choose a Type of Account",
                buttons: ['OK']
            });
            alert_3.present();
        }
        else {
            this.validData = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("name"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("address"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "address", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("usertypeid"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "usertypeid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("status"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "status", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("email"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "password", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\signup\signup.html"*/'<ion-content>\n  <ion-grid fixed>\n      <ion-row>\n          <ion-col>\n            <ion-buttons>\n              <button (click)="exit()" color="logo_border" clear ion-button icon-only><ion-icon name="ios-close-circle-outline"></ion-icon></button>\n            </ion-buttons>\n          </ion-col>\n          <ion-col>\n            <ion-buttons end>\n              <button (click)="login()" color="logo_border" ion-button clear ion-button>Login</button>\n            </ion-buttons>\n          </ion-col>\n        </ion-row>\n    <div class="formContainer">\n      <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n        <ion-item>\n          <ion-label stacked>Email</ion-label>\n          <ion-input formControlName="email" type="email" placeholder="Your email address"\n            [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty" #email></ion-input>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid  && signupForm.controls.email.dirty">\n          <p>Please enter a valid email.</p>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked>Password</ion-label>\n          <ion-input formControlName="password" type="password"  placeholder="Your password"\n            [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty" #password></ion-input>\n        </ion-item>\n        <ion-item class="error-message" *ngIf="!signupForm.controls.password.valid  && signupForm.controls.password.dirty">\n          <p>Your password needs more than 6 characters.</p>\n        </ion-item>\n    \n          <ion-item>\n            <ion-label stacked>Full Name</ion-label>\n            <ion-input type="text" placeholder="Full Name" name="fullname" #name></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Address</ion-label>\n            <ion-input type="text" placeholder="Address" name="address" #address></ion-input>\n          </ion-item>\n    \n          <ion-item>\n            <ion-label stacked>Type</ion-label>\n            <ion-select #usertypeid>\n              <ion-option value="1">Tourist</ion-option>\n              <ion-option value="2">Local Businessman</ion-option>\n            </ion-select>\n          </ion-item>\n      \n        <button color="logo_border" ion-button block type="submit">\n          Create an Account\n        </button>\n    \n      </form>\n    </div>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=3.js.map