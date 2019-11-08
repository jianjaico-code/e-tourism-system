webpackJsonp([5],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(776);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 756:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tourist_tabs_tourist__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, viewCtrl, modalCtrl, afAuth, authData, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.afAuth = afAuth;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            var charles = this.alertCtrl.create({
                title: "Attention",
                subTitle: "Login Unsuccesfull please try again",
            });
            charles.present();
        }
        else {
            this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (authData) {
                var ref = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('user');
                ref.on('value', function (data) {
                    data.forEach(function (data) {
                        if (data.key == _this.afAuth.auth.currentUser.uid) {
                            var user = data.val().usertypeid;
                            if (user == 1) {
                                if (data.val().status == 1) {
                                    console.log("Tourist");
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tourist_tabs_tourist__["a" /* TabsTouristPage */]).then(function () {
                                        _this.loading.dismiss();
                                    });
                                }
                                else {
                                    _this.errorAlert();
                                }
                            }
                            else if (user == 2) {
                                if (data.val().status == 1) {
                                    console.log("BusinessmanPage");
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */], {
                                        userPrivilage: 2,
                                        key: data.key,
                                        name: data.val().name,
                                        pic: data.val().profilePicUrl
                                    }).then(function () {
                                        _this.loading.dismiss();
                                    });
                                }
                                else {
                                    _this.errorAlert();
                                }
                            }
                            else if (user == 3) {
                                console.log("Tourism Officer");
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */], {
                                    userPrivilage: 3,
                                    key: data.key,
                                    name: data.val().name,
                                    pic: data.val().profilePicUrl
                                }).then(function () {
                                    _this.loading.dismiss();
                                });
                            }
                            else if (user == 4) {
                                console.log("Super Admin");
                            }
                        }
                    });
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                    _this.authData.logoutUser();
                });
            });
            this.loading = this.loadingCtrl.create({
                content: "Logging In, Please Wait...",
            });
            this.loading.present();
        }
    };
    LoginPage.prototype.errorAlert = function () {
        var _this = this;
        this.loading.dismiss().then(function () {
            var alert = _this.alertCtrl.create({
                message: "Your account has been deactivated due to bad behaviour, please contact the Tourism Officer to re-activate your account: khomarlou11@gmail.com"
            });
            _this.authData.logoutUser();
            alert.present();
        });
    };
    LoginPage.prototype.goToResetPassword = function () {
        var modal = this.modalCtrl.create('ResetPasswordPage');
        modal.present();
    };
    LoginPage.prototype.exit = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.signup = function () {
        var modal = this.modalCtrl.create('SignupPage', { key: true });
        modal.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\login\login.html"*/'<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-buttons>\n        <button (click)="exit()" color="logo_border" class="exitBtn" clear ion-button icon-only><ion-icon name="close-circle"></ion-icon></button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n  <ion-grid fixed>\n      <ion-row>\n        <ion-col>\n            <img class="loginLogo animated fadeInDown"  src="../../assets/imgs/logo.png">\n        </ion-col>\n      </ion-row>\n      <h1 text-center>Login To Continue</h1>\n      <p text-center>Don\'t Have An Account? <a (click)="signup()" tappable="">Sign Up</a></p>\n\n    <div class="formContainer">\n        <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n          <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input #email formControlName="email" type="email" placeholder="Your email address"\n              [class.invalid]="!loginForm.controls.email.valid &&\n                loginForm.controls.email.dirty"></ion-input>\n          </ion-item>\n          <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid  &&\n            loginForm.controls.email.dirty">\n            <p>Please enter a valid email.</p>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input #password formControlName="password" type="password" placeholder="Your password"\n              [class.invalid]="!loginForm.controls.password.valid &&\n                loginForm.controls.password.dirty"></ion-input>\n          </ion-item>\n          <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid  &&\n            loginForm.controls.password.dirty">\n            <p>Your password needs more than 6 characters.</p>\n          </ion-item>\n      \n          <button color="logo_border" ion-button block type="submit">\n            Login\n          </button>\n        </form>\n\n        <button color="logo_border" ion-button block clear (click)="goToResetPassword()">\n          I forgot my password\n        </button>\n    </div>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=5.js.map