webpackJsonp([19],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricalBackgroundPageModule", function() { return HistoricalBackgroundPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__historical_background__ = __webpack_require__(769);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HistoricalBackgroundPageModule = /** @class */ (function () {
    function HistoricalBackgroundPageModule() {
    }
    HistoricalBackgroundPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__historical_background__["a" /* HistoricalBackgroundPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__historical_background__["a" /* HistoricalBackgroundPage */]),
            ],
        })
    ], HistoricalBackgroundPageModule);
    return HistoricalBackgroundPageModule;
}());

//# sourceMappingURL=historical-background.module.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalBackgroundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoricalBackgroundPage = /** @class */ (function () {
    function HistoricalBackgroundPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoricalBackgroundPage.prototype.exit = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    HistoricalBackgroundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-historical-background',template:/*ion-inline-start:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\historical-background\historical-background.html"*/'<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col>\n        <ion-buttons>\n          <button (click)="exit()" clear ion-button icon-only><ion-icon name="ios-arrow-dropleft"></ion-icon>Back</button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col>\n        <img class="banner animated fadeInDown" src="assets/imgs/historical.jpg">\n      </ion-col>\n    </ion-row>\n\n    <p class="animated fadeIn">\n      &nbsp; &nbsp; &nbsp; Gingoog is a Manobo word for good luck.  The word implies good fortune, thus Gingoog means the city of Good Luck.  Gingoog originated from a thriving native settlement of Manobo tribe in the area, known today as Barangay Daan-Lungsod. The influx of migrants from neighboring places contributed to the city’s growth, giving rise to the necessity of expansion.\n\n      Being limited in area, the settlement had to be transferred to a more spacious site, and which was later relocated to the Gahub – Mangiskis area, the site of the present poblacion.  This was chosen due to its potentials for socio-economic development.\n      \n      In the realm of religion, the earliest natives had simply worshipped the anitos and held such respect and faith in the practice of “Diwata”.  After a year, Christian living was introduced by a Jesuit Missionary, Padre Felix Garcia who sowed the first seed of Christianity in the area.\n      \n      In 1868, Gingoog became a Spanish Pueblo, and a few years later it was made a regular municipality under the American Regime in 1903.  However, during the same period, it was reverted back to a barrio status under the municipality of Talisayan.  Shortly after this period, it later regained the municipality status through the efforts of its leaders and people.\n      \n      Along this period with its abundant natural resources, Gingoog slowly continued to edge forward their economic progress.  After the World War II, the fast and vast production output of agriculture (specifically coconut & coffee) and logging industry created a momentum of progress that led to the initiation of Gingoog’s early independence from the Province of Misamis Oriental.\n      \n      On June 18, 1960, Gingoog became a Chartered City by virtue of Republic Act No.\n    </p>\n    <p class="animated fadeIn">\n        &nbsp; &nbsp; &nbsp; 2668 signed by President Carlos P. Garcia.  The late Congressman Fausto Dugenio authored the Charter status of the city.  The city was created during the incumbency of Municipal Mayor Julio Ganaban and Vice-Mayor Arturo S. Lugod.  The first elected city officials were City Mayor Domingo de Lara and Vice Mayor Romulo S. Rodriguez, respectively.\n      \n        In the late sixties, Gingoog suffered a crunching economic slump brought about by the inflation rate of the peso and the low crop production. This was worsen by the infestation of the dreaded coffee borers in coffee farms coupled with the low buying price of coffee.  In later years, the city’s electric service was stopped when CEPALCO withdrew its electric power leaving the city without light, thus, plunging the city into darkness.\n        \n        On December 17, 1978, the city finally restored its electric power supply through the national government electrification program.  Electric power of the city was provided by MORESCO II, which put back Gingoog on the road again. The influx of investors, the establishment of business and small-scale industries as well as the people’s hardwork, were important factors of the city’s progress.\n        \n        The impact of infrastructure development and the utilization of agricultural resources boosted the trade, commerce and industry, bouncing back the city to its life.  In 1982, Gingoog, from a mere third class city was elevated to a first class City.  By 1984, it was adjudged as the most outstanding component city throughout Region 10 under the leadership of City Mayor Miguel P. Paderanga.\n    </p>\n\n    <p class="animated fadeIn">\n        &nbsp; &nbsp; &nbsp; &nbsp;Then came the unexpected EDSA REVOLUTION in 1986, the local government faced the challenge of restoring back the people’s faith in the government.  The concept of reconciliation and economic recovery posted the city into a new era with high hopes of alleviating the standard of living of the populace.  The economic recovery program was continued when President Fidel V. Ramos extended his vision towards “Philippines 2000” as becoming the newly industrialized country in the near future.\n        \n        At present, the city’s stance is to develop the potentials of the areas of tourism.  It was painfully accepted that with the absence of drivers for vigorous industries and manufacturing ventures, the city is unable to compete with the highly urbanized neighbors who are strategically located at the gates of transport networks for commerce and industry.\n        \n        In that direction, the present administration is vent on installing tourist-oriented facilities and infra-supports while offering tax incentives to potential investors.  Much effort was exerted and resources directed towards identifying potential area for economic growth in that stance.  The laudable efforts of the current LCE has greatly changed the facade and overlaying suburbs signifying shift and change and sent positive signal to investors that friendly environs for investment has actually been manifest.\n        \n        The thrust of the present administration creates a momentum of business atmosphere around the country.  Along this thrust, the local government is moving forward with its socio-economic development program of the city.  The massive infrastructure projects such as; road construction/development, building construction, and social services development are requirements toward the optimum development of the agri-commerce activities of the city.  The influx of investors and the increase in commercial and industrial activities will be expected in the coming years.\n    </p>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Work Files\Capstone Projects\Jadol\web\src\pages\historical-background\historical-background.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], HistoricalBackgroundPage);
    return HistoricalBackgroundPage;
}());

//# sourceMappingURL=historical-background.js.map

/***/ })

});
//# sourceMappingURL=19.js.map