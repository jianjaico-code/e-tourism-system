webpackJsonp([22],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncEventsPageModule", function() { return FuncEventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__func_events__ = __webpack_require__(766);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FuncEventsPageModule = /** @class */ (function () {
    function FuncEventsPageModule() {
    }
    FuncEventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__func_events__["a" /* FuncEventsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__func_events__["a" /* FuncEventsPage */]),
            ],
        })
    ], FuncEventsPageModule);
    return FuncEventsPageModule;
}());

//# sourceMappingURL=func-events.module.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncEventsPage; });
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



var FuncEventsPage = /** @class */ (function () {
    function FuncEventsPage(navCtrl, navParams, viewCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.key = navParams.data.key;
        this.status = navParams.data.status;
        this.initPost();
    }
    FuncEventsPage.prototype.initPost = function () {
        var _this = this;
        if (this.status == true) {
            var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('event');
            ref.on('value', function (data) {
                data.forEach(function (data) {
                    if (data.key == _this.key) {
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
    FuncEventsPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    FuncEventsPage.prototype.detectFiles = function (event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
    };
    FuncEventsPage.prototype.checkData = function (key) {
        if (key) {
            if (this.title.value == "") {
                this.validData = true;
                var alert_1 = this.alertCtrl.create({
                    title: "Attention",
                    subTitle: "Event Title is Empty",
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else if (this.desc.value == "") {
                this.validData = true;
                var alert_2 = this.alertCtrl.create({
                    title: "Attention",
                    subTitle: "Event Description is Empty",
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
                    subTitle: "Event Title is Empty",
                    buttons: ['OK']
                });
                alert_3.present();
            }
            else if (this.data.desc == "") {
                this.validData = true;
                var alert_4 = this.alertCtrl.create({
                    title: "Attention",
                    subTitle: "Event Description is Empty",
                    buttons: ['OK']
                });
                alert_4.present();
            }
            else {
                this.validData = false;
            }
        }
    };
    FuncEventsPage.prototype.addEvent = function () {
        var _this = this;
        this.checkData(true);
        if (!this.validData) {
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            if (this.selectedFile) {
                var file = this.selectedFile;
                var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref('/Events Picture/' + this.title.value + '/' + file.name);
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
                var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('event');
                ref.push({
                    title: _this.title.value,
                    description: _this.desc.value,
                    image: _this.imageUrl
                }).then(function () {
                    _this.viewCtrl.dismiss();
                });
            });
        }
    };
    FuncEventsPage.prototype.editEvent = function () {
        var _this = this;
        this.checkData(false);
        if (!this.validData) {
            var ref_1 = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('event/' + this.key);
            var loading_2 = this.loadingCtrl.create();
            loading_2.present();
            if (this.selectedFile) {
                var file = this.selectedFile;
                var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref('/Events Picture/' + this.data.title + '/' + file.name);
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
                    title: _this.data.title,
                    description: _this.data.description,
                    image: _this.imageUrl
                }).then(function () {
                    _this.viewCtrl.dismiss();
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('title'),
        __metadata("design:type", Object)
    ], FuncEventsPage.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('desc'),
        __metadata("design:type", Object)
    ], FuncEventsPage.prototype, "desc", void 0);
    FuncEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-func-events',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\func-events\func-events.html"*/'<ion-content padding class="animated fadeIn common-bg">\n    <ion-buttons end>\n      <button ion-button tappable (click)="closeModal()">\n        <ion-icon name="ios-close-circle-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-item>\n        <ion-label stacked>Event Title</ion-label>\n        <ion-input *ngIf="!this.status" type="text" placeholder="Title" name="title" #title></ion-input>\n        <ion-input *ngIf="this.status" type="text" placeholder="Title" name="title" [(ngModel)]="data.title"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label stacked>Event Description</ion-label>\n        <ion-textarea *ngIf="!this.status" placeholder="Description" name="desc" #desc></ion-textarea>\n        <ion-textarea *ngIf="this.status" placeholder="Description" name="Description" [(ngModel)]="data.description"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <label>\n          <input type="file" (change)="detectFiles($event)">\n        </label>\n      </ion-item>\n\n      <ion-item *ngIf="this.status">\n        <img class="dataImage" [src]="data.image">\n      </ion-item>\n\n    <button *ngIf="!this.status" ion-button round block center (click)="addEvent()">Add Event</button>\n    <button *ngIf="this.status" ion-button round block center (click)="editEvent()">Edit Event</button>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\func-events\func-events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], FuncEventsPage);
    return FuncEventsPage;
}());

//# sourceMappingURL=func-events.js.map

/***/ })

});
//# sourceMappingURL=22.js.map