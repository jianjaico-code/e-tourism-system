webpackJsonp([30],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPageModule", function() { return AddProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_product__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddProductPageModule = /** @class */ (function () {
    function AddProductPageModule() {
    }
    AddProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_product__["a" /* AddProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_product__["a" /* AddProductPage */]),
            ],
        })
    ], AddProductPageModule);
    return AddProductPageModule;
}());

//# sourceMappingURL=add-product.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPage; });
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



var AddProductPage = /** @class */ (function () {
    function AddProductPage(navCtrl, toastCtrl, viewCtrl, loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.obj = false;
        this.key = navParams.data.key;
        this.initData();
        this.getData();
    }
    AddProductPage.prototype.initData = function () {
        this.editStatus = false;
        this.data = {
            name: "",
            price: "",
        };
    };
    AddProductPage.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files[0];
    };
    AddProductPage.prototype.getData = function () {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('product');
        ref.on('value', function (data) {
            var arr = [];
            data.forEach(function (data) {
                if (data.val().establishmentKey == _this.key) {
                    arr.push({
                        key: data.key,
                        establishmentKey: data.val().establishmentKey,
                        name: data.val().name,
                        price: data.val().price,
                        imageUrl: data.val().imageUrl
                    });
                    _this.obj = true;
                }
            });
            _this.dataArr = arr;
        });
    };
    AddProductPage.prototype.edit = function (key) {
        this.data = key;
        this.editStatus = true;
    };
    AddProductPage.prototype.update = function (key) {
        var _this = this;
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('product/' + key);
        var loading = this.loadingCtrl.create();
        loading.present();
        if (this.selectedFiles) {
            var file = this.selectedFiles;
            var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref('/ProductPic/' + file.name);
            storageRef.put(file).then(function (snapshot) {
                return snapshot.ref.getDownloadURL();
            }).then(function (downloadURL) {
                console.log("Successfully uploaded file and got download link - " + downloadURL);
                _this.imageUrl = downloadURL;
                loading.dismiss().then(function () {
                    _this.viewCtrl.dismiss();
                });
                return downloadURL;
            }).catch(function (error) {
                console.log("Failed to upload file and get link - " + error);
            });
        }
        else {
            this.imageUrl = this.data.imageUrl;
            loading.dismiss().then(function () {
                _this.initData();
            });
        }
        loading.onDidDismiss(function () {
            ref.set({
                establishmentKey: _this.key,
                name: _this.name.value,
                price: _this.price.value,
                imageUrl: _this.imageUrl
            });
        });
    };
    AddProductPage.prototype.savePhotoStorage = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        var file = this.selectedFiles;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref('/ProductPic/' + file.name);
        storageRef.put(file).then(function (snapshot) {
            return snapshot.ref.getDownloadURL();
        }).then(function (downloadURL) {
            console.log("Successfully uploaded file and got download link - " + downloadURL);
            _this.image = downloadURL;
            loading.dismiss();
            return downloadURL;
        }).catch(function (error) {
            console.log("Failed to upload file and get link - " + error);
        });
        loading.onDidDismiss(function () {
            var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('product');
            ref.push({
                establishmentKey: _this.key,
                name: _this.name.value,
                price: _this.price.value,
                imageUrl: _this.image
            });
            var toast = _this.toastCtrl.create({
                message: 'Succesfully Added',
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
            });
            toast.present();
            _this.name.value = "";
            _this.price.value = "";
            _this.selectedFiles = "";
        });
    };
    AddProductPage.prototype.exit = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('prodPrice'),
        __metadata("design:type", Object)
    ], AddProductPage.prototype, "price", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('prodName'),
        __metadata("design:type", Object)
    ], AddProductPage.prototype, "name", void 0);
    AddProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-product',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\add-product\add-product.html"*/'<ion-content padding>\n    <div class="prodHeader">Add Product (Optional)</div>\n    <ion-item>\n      <ion-label stacked>Product Name</ion-label>\n      <ion-input [(ngModel)]="data.name" type="text" placeholder="Name" name="prodName" #prodName></ion-input>\n    </ion-item>\n  \n    <ion-row>\n      <ion-col>\n          <ion-item>\n            <ion-label stacked>Product Price</ion-label>\n            <ion-input [(ngModel)]="data.price"  type="number" placeholder="Price" name="prodPrice" #prodPrice></ion-input>\n          </ion-item>\n      </ion-col>\n    </ion-row>\n  \n    <ion-item>\n      <label>\n        <input type="file" (change)="detectFiles($event)" multiple>\n      </label>\n    </ion-item>\n  \n    <ion-row>\n      <ion-col>\n        <button *ngIf="!editStatus" ion-button round block center [disabled]="!selectedFiles" (click)="savePhotoStorage()">Save</button>\n        <button *ngIf="editStatus" ion-button round block center (click)="update(data.key)">Update</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button round block center *ngIf="!selectedFiles" (click)="exit()">Skip</button>\n        <button ion-button round block center *ngIf="selectedFiles" [disabled]="!obj" (click)="exit()">Done</button>\n      </ion-col>\n    </ion-row>\n  \n    <ion-list *ngFor="let item of dataArr">\n      <ion-row>\n        <ion-col>\n          <p>{{item.name}}</p>\n        </ion-col>\n  \n        <ion-col>\n          <p>&#8369; {{item.price}}.00</p>\n        </ion-col>\n  \n        <ion-col>\n          <img [src]="item.imageUrl">\n        </ion-col>\n\n        <ion-col>\n          <button (click)="edit(item)" ion-button round clear>Edit</button>\n        </ion-col>\n\n      </ion-row>\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\add-product\add-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AddProductPage);
    return AddProductPage;
}());

//# sourceMappingURL=add-product.js.map

/***/ })

});
//# sourceMappingURL=30.js.map