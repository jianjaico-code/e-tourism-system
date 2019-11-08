webpackJsonp([21],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncNewsPageModule", function() { return FuncNewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__func_news__ = __webpack_require__(773);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FuncNewsPageModule = /** @class */ (function () {
    function FuncNewsPageModule() {
    }
    FuncNewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__func_news__["a" /* FuncNewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__func_news__["a" /* FuncNewsPage */]),
            ],
        })
    ], FuncNewsPageModule);
    return FuncNewsPageModule;
}());

//# sourceMappingURL=func-news.module.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncNewsPage; });
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




var FuncNewsPage = /** @class */ (function () {
    function FuncNewsPage(navCtrl, navParams, loadingCtrl, alertCtrl, viewCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.afAuth = afAuth;
        this.myDate = new Date().toISOString();
        this.key = navParams.data.key;
        this.status = navParams.data.status;
        this.initData();
        this.checkUser();
    }
    FuncNewsPage.prototype.initData = function () {
        var _this = this;
        if (this.status == true) {
            var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('postNews');
            ref.on('value', function (data) {
                data.forEach(function (data) {
                    if (_this.key == data.key) {
                        _this.data = {
                            title: data.val().title,
                            description: data.val().description,
                            name: data.val().name,
                            date: data.val().date,
                            image: data.val().image
                        };
                    }
                });
                console.log(_this.data);
            });
        }
        else {
            console.log("This is not a data formed");
        }
    };
    FuncNewsPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    FuncNewsPage.prototype.checkUser = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('user');
        ref.on('value', function (data) {
            data.forEach(function (data) {
                if (data.val().email == _this.afAuth.auth.currentUser.email) {
                    _this.name = data.val().name;
                }
            });
        });
    };
    FuncNewsPage.prototype.detectFiles = function (event) {
        this.selectedFile = event.target.files[0];
    };
    FuncNewsPage.prototype.checkData = function (key) {
        if (key) {
            if (this.title.value == "") {
                this.validData = true;
                var alert_1 = this.alertCtrl.create({
                    title: "Attention",
                    subTitle: "News Title is Empty",
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else if (this.desc.value == "") {
                this.validData = true;
                var alert_2 = this.alertCtrl.create({
                    title: "Attention",
                    subTitle: "News Description is Empty",
                    buttons: ['OK']
                });
                alert_2.present();
            }
            else {
                this.validData = false;
            }
        }
        else {
            if (this.data.title == "") {
                this.validData = true;
                var alert_3 = this.alertCtrl.create({
                    title: "Attention",
                    subTitle: "News Title is Empty",
                    buttons: ['OK']
                });
                alert_3.present();
            }
            else if (this.data.desc == "") {
                this.validData = true;
                var alert_4 = this.alertCtrl.create({
                    title: "Attention",
                    subTitle: "News Description is Empty",
                    buttons: ['OK']
                });
                alert_4.present();
            }
            else {
                this.validData = false;
            }
        }
    };
    FuncNewsPage.prototype.savePost = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('postNews');
        this.checkData(true);
        if (!this.validData) {
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            if (this.selectedFile) {
                var file = this.selectedFile;
                var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref('/News Picture/' + this.title.value + '/' + file.name);
                storageRef.put(file).then(function (snapshot) {
                    return snapshot.ref.getDownloadURL();
                }).then(function (downloadURL) {
                    console.log("Successfully uploaded file and got download link - " + downloadURL);
                    _this.imageUrl = downloadURL;
                    loading_1.dismiss().then(function () {
                        _this.viewCtrl.dismiss();
                    });
                    return downloadURL;
                }).catch(function (error) {
                    console.log("Failed to upload file and get link - " + error);
                });
            }
            else {
                this.imageUrl = null;
                loading_1.dismiss().then(function () {
                    _this.viewCtrl.dismiss();
                });
            }
            loading_1.onDidDismiss(function () {
                ref.push({
                    title: _this.title.value,
                    name: _this.name,
                    description: _this.desc.value,
                    image: _this.imageUrl,
                    date: _this.myDate
                });
            });
        }
    };
    FuncNewsPage.prototype.updatePost = function () {
        var _this = this;
        this.checkData(false);
        if (!this.validData) {
            var ref_1 = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('postNews/' + this.key);
            var loading_2 = this.loadingCtrl.create();
            loading_2.present();
            if (this.selectedFile) {
                var file = this.selectedFile;
                var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref('/News Picture/' + this.data.title + '/' + file.name);
                storageRef.put(file).then(function (snapshot) {
                    return snapshot.ref.getDownloadURL();
                }).then(function (downloadURL) {
                    console.log("Successfully uploaded file and got download link - " + downloadURL);
                    _this.imageUrl = downloadURL;
                    loading_2.dismiss().then(function () {
                        _this.viewCtrl.dismiss();
                    });
                    return downloadURL;
                }).catch(function (error) {
                    console.log("Failed to upload file and get link - " + error);
                });
            }
            else {
                this.imageUrl = this.data.image;
                loading_2.dismiss().then(function () {
                    _this.viewCtrl.dismiss();
                });
            }
            loading_2.onDidDismiss(function () {
                ref_1.set({
                    name: _this.data.name,
                    description: _this.data.description,
                    image: _this.imageUrl,
                    title: _this.data.title,
                    date: _this.data.date,
                });
            });
        }
    };
    FuncNewsPage.prototype.removePost = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('postNews/' + this.key);
        var alert = this.alertCtrl.create({
            message: 'Are you sure you want to REMOVE this Post?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        ref.remove().then(function () {
                            _this.viewCtrl.dismiss();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('postDesc'),
        __metadata("design:type", Object)
    ], FuncNewsPage.prototype, "desc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('postTitle'),
        __metadata("design:type", Object)
    ], FuncNewsPage.prototype, "title", void 0);
    FuncNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-func-news',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\func-news\func-news.html"*/'<ion-content padding class="animated fadeIn common-bg">\n\n    <ion-buttons end>\n      <button ion-button tappable (click)="closeModal()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-item>\n      <ion-label stacked>News Title</ion-label>\n      <ion-input *ngIf="!status" type="text" placeholder="Title" name="Title" #postTitle></ion-input>\n      <ion-input *ngIf="status" type="text" placeholder="Title" name="Title" [(ngModel)]="data.title" ></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>News Content</ion-label>\n      <ion-textarea *ngIf="!status" placeholder="Description" name="Description" #postDesc></ion-textarea>\n      <ion-textarea *ngIf="status" placeholder="Description" name="Description" [(ngModel)]="data.description" ></ion-textarea>  \n    </ion-item>\n  \n    <ion-item>\n      <label>\n        <input type="file" (change)="detectFiles($event)">\n      </label>\n    </ion-item>\n\n    <ion-item *ngIf="status && data.image">\n      <img class="dataImage" [src]="data.image">\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n    </ion-item>\n  \n    <button *ngIf="!status" color="primary" ion-button round block center (click)="savePost()">Save</button>\n    <ion-row *ngIf="status">\n      <ion-col>\n        <button color="primary" ion-button round block center (click)="updatePost()">Update</button>\n      </ion-col>\n\n      <ion-col>\n        <button color="danger" ion-button round block center (click)="removePost()">Remove</button>\n      </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\func-news\func-news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], FuncNewsPage);
    return FuncNewsPage;
}());

//# sourceMappingURL=func-news.js.map

/***/ })

});
//# sourceMappingURL=21.js.map