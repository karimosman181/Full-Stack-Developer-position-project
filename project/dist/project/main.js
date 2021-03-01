(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/s+T":
/*!**********************************************************!*\
  !*** ./src/app/selective-preloading-strategy.service.ts ***!
  \**********************************************************/
/*! exports provided: SelectivePreloadingStrategyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectivePreloadingStrategyService", function() { return SelectivePreloadingStrategyService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let SelectivePreloadingStrategyService = /*@__PURE__*/ (() => {
    class SelectivePreloadingStrategyService {
        constructor() {
            this.preloadedModules = [];
        }
        preload(route, load) {
            if (route.data && route.data.preload) {
                // add the route path to the preloaded module array
                this.preloadedModules.push("/" + route.path);
                // log the route path to the console
                console.log('Preloaded: ' + route.path);
                return load();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
            }
        }
    }
    SelectivePreloadingStrategyService.ɵfac = function SelectivePreloadingStrategyService_Factory(t) { return new (t || SelectivePreloadingStrategyService)(); };
    SelectivePreloadingStrategyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SelectivePreloadingStrategyService, factory: SelectivePreloadingStrategyService.ɵfac, providedIn: 'root' });
    return SelectivePreloadingStrategyService;
})();



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\a\Desktop\Full Stack Developer position-project\project\src\main.ts */"zUnb");


/***/ }),

/***/ "6epW":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const authRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];
let AuthRoutingModule = /*@__PURE__*/ (() => {
    class AuthRoutingModule {
    }
    AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
    AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(authRoutes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return AuthRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();



/***/ }),

/***/ "AKn8":
/*!***************************************!*\
  !*** ./src/app/work-order.service.ts ***!
  \***************************************/
/*! exports provided: WorkOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderService", function() { return WorkOrderService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "AVqD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let WorkOrderService = /*@__PURE__*/ (() => {
    class WorkOrderService {
        constructor() { }
        getOrders() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(_data__WEBPACK_IMPORTED_MODULE_1__["WorkOrders"]);
        }
        getOrder(id) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(_data__WEBPACK_IMPORTED_MODULE_1__["WorkOrders"].find(Order => Order.Id == id));
        }
        addOrder(order) {
            _data__WEBPACK_IMPORTED_MODULE_1__["WorkOrders"].push(order);
        }
        addDetail(id, Detail) {
            var _a;
            (_a = _data__WEBPACK_IMPORTED_MODULE_1__["WorkOrders"].find(Order => Order.Id == id)) === null || _a === void 0 ? void 0 : _a.Details.push(Detail);
        }
    }
    WorkOrderService.ɵfac = function WorkOrderService_Factory(t) { return new (t || WorkOrderService)(); };
    WorkOrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WorkOrderService, factory: WorkOrderService.ɵfac, providedIn: 'root' });
    return WorkOrderService;
})();



/***/ }),

/***/ "AVqD":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: WorkOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrders", function() { return WorkOrders; });
const Details = [
    {
        Description: "this is the first item",
        location: "Beirut",
        progress: 60
    },
    {
        Description: "this is the second item",
        location: "Beirut",
        progress: 70
    },
    {
        Description: "this is the third item",
        location: "Beirut",
        progress: 30
    }
];
const WorkOrders = [
    { Id: 1,
        creationDate: "12/1/2018",
        OperationDescription: "this is the test operation",
        StartDate: "12/2/2019",
        EndDate: "12/2/2020",
        progress: 50,
        Details: Details
    },
    { Id: 2,
        creationDate: "10/7/2017",
        OperationDescription: "this is the second test operation",
        StartDate: "10/12/2017",
        EndDate: "12/2/2020",
        progress: 30,
        Details: Details
    },
];



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.



/***/ }),

/***/ "BtvF":
/*!**************************************************************!*\
  !*** ./src/app/work-order-list/work-order-list.component.ts ***!
  \**************************************************************/
/*! exports provided: WorkOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderListComponent", function() { return WorkOrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _work_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../work-order.service */ "AKn8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function WorkOrderListComponent_li_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const WorkOrder_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/workOrderDetails/", WorkOrder_r1.Id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](WorkOrder_r1.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](WorkOrder_r1.OperationDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width:", WorkOrder_r1.progress, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", WorkOrder_r1.progress, "%");
    }
}
let WorkOrderListComponent = /*@__PURE__*/ (() => {
    class WorkOrderListComponent {
        constructor(workOrderService) {
            this.workOrderService = workOrderService;
        }
        ngOnInit() {
            this.getOrders();
            this.getprogress();
        }
        getOrders() {
            this.workOrderService.getOrders().subscribe(WorkOrder => this.orders = WorkOrder);
        }
        getprogress() {
            var _a;
            var progress = 0;
            var count = 0;
            var i = 1;
            (_a = this.orders) === null || _a === void 0 ? void 0 : _a.forEach(item => {
                var _a;
                progress = 0;
                count = 0;
                item.Details.forEach(element => {
                    progress += element.progress;
                    count++;
                });
                (_a = this.progresses) === null || _a === void 0 ? void 0 : _a.push(progress / count);
            });
        }
    }
    WorkOrderListComponent.ɵfac = function WorkOrderListComponent_Factory(t) { return new (t || WorkOrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_work_order_service__WEBPACK_IMPORTED_MODULE_1__["WorkOrderService"])); };
    WorkOrderListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkOrderListComponent, selectors: [["app-work-order-list"]], decls: 16, vars: 1, consts: [[1, "header"], [1, "row"], [1, "column", "side"], [1, "column", "middle"], ["class", "orders", 4, "ngFor", "ngForOf"], [1, "footer"], [1, "orders"], [3, "routerLink"], [1, "discription"], ["id", "ID"], [1, "w3-light-grey", "w3-round-xlarge"], [1, "w3-container", "w3-blue", "w3-round-xlarge"]], template: function WorkOrderListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " to your Work Order");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "please click on one of the orders to see there details");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WorkOrderListComponent_li_11_Template, 9, 7, "li", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "login to go to the site engineer webpage");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["li[_ngcontent-%COMP%]{\r\n  list-style-type: none;\r\n  margin-bottom : 7%;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n}\r\n\r\n.orders[_ngcontent-%COMP%]{\r\n  box-shadow: 10px 10px 5px grey;\r\n  border-radius: 20px;\r\n  background-color: rgb(187, 185, 185);\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {background-color: #ddd;}\r\n\r\n.discription[_ngcontent-%COMP%]{\r\n  font-family: \"Times New Roman\", Times, serif;\r\n  font-weight: bolder;\r\n  font-size: larger;\r\n  padding-top: 3%;\r\n  padding-bottom: 3%;\r\n}\r\n\r\n#ID[_ngcontent-%COMP%]{\r\n  padding-right: 30%;\r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmstb3JkZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQ7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUMsU0FBUyxzQkFBc0IsQ0FBQzs7QUFFakM7RUFDRSw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCOztBQUVwQiIsImZpbGUiOiJ3b3JrLW9yZGVyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFdvcmtvcmRlcnNsaXN0Q29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcblxyXG5saXtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbSA6IDclO1xyXG59XHJcbmF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ub3JkZXJze1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDE4NSwgMTg1KTtcclxufVxyXG5cclxuIGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG5cclxuLmRpc2NyaXB0aW9ue1xyXG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG4jSUR7XHJcbiAgcGFkZGluZy1yaWdodDogMzAlO1xyXG4gXHJcbn0iXX0= */"] });
    return WorkOrderListComponent;
})();



/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



let AuthGuard = /*@__PURE__*/ (() => {
    class AuthGuard {
        constructor(authService, router) {
            this.authService = authService;
            this.router = router;
        }
        canActivate(route, state) {
            const url = state.url;
            return this.checkLogin(url);
        }
        canActivateChild(route, state) {
            return this.canActivate(route, state);
        }
        canLoad(route) {
            const url = `/${route.path}`;
            return this.checkLogin(url);
        }
        checkLogin(url) {
            if (this.authService.isLoggedIn) {
                return true;
            }
            // Store the attempted URL for redirecting
            this.authService.redirectUrl = url;
            // Create a dummy session id
            const sessionId = 123456789;
            // Set our navigation extras object
            // that contains our global query params and fragment
            const navigationExtras = {
                queryParams: { session_id: sessionId },
                fragment: 'anchor'
            };
            // Navigate to the login page with extras
            this.router.navigate(['/login'], navigationExtras);
            return false;
        }
    }
    AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
    return AuthGuard;
})();



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let AppComponent = /*@__PURE__*/ (() => {
    class AppComponent {
        constructor() {
            this.title = 'project';
        }
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 1, consts: [[1, "topnav"], ["routerLink", "/workOrderList"], [1, "logo", 2, "font-size", "120%", "font-weight", "bold"], ["routerLink", "/login", "routerLinkActive", "active", 1, "login"]], template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".topnav[_ngcontent-%COMP%] {\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background-color: grey;\r\n    color: white;\r\n  }\r\n\r\n\r\n.login[_ngcontent-%COMP%]{\r\n      margin-left: 85%;\r\n  }\r\n\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n    font-size: 70%;\r\n  }\r\n\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .login[_ngcontent-%COMP%]{\r\n        margin-left: 50%;\r\n    }\r\n  }\r\n\r\n\r\n@media (width: 280px){\r\n      .login[_ngcontent-%COMP%]{\r\n          margin-left: 20%;\r\n      }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDs7O0FBR3ZEO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7O0FBRUEsOENBQThDOzs7QUFDOUM7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7OztBQUVBLHVDQUF1Qzs7O0FBQ3ZDO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7O0FBRUEsMkNBQTJDOzs7QUFDM0M7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOzs7QUFFQTtNQUNJLGdCQUFnQjtFQUNwQjs7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOzs7QUFHQTtJQUNFO1FBQ0ksZ0JBQWdCO0lBQ3BCO0VBQ0Y7OztBQUNBO01BQ0k7VUFDSSxnQkFBZ0I7TUFDcEI7RUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXHJcblxyXG5cclxuLnRvcG5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cclxuICAudG9wbmF2IGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIHRoZSBjb2xvciBvZiBsaW5rcyBvbiBob3ZlciAqL1xyXG4gIC50b3BuYXYgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBjb2xvciB0byB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayAqL1xyXG4gIC50b3BuYXYgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5sb2dpbntcclxuICAgICAgbWFyZ2luLWxlZnQ6IDg1JTtcclxuICB9XHJcblxyXG4gIC5sb2dve1xyXG4gICAgZm9udC1zaXplOiA3MCU7XHJcbiAgfVxyXG4gXHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5sb2dpbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKHdpZHRoOiAyODBweCl7XHJcbiAgICAgIC5sb2dpbntcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgIH1cclxuICB9Il19 */"] });
    return AppComponent;
})();



/***/ }),

/***/ "VOiv":
/*!********************************************************************!*\
  !*** ./src/app/work-order-details/work-order-details.component.ts ***!
  \********************************************************************/
/*! exports provided: WorkOrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrderDetailsComponent", function() { return WorkOrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _work_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../work-order.service */ "AKn8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function WorkOrderDetailsComponent_tr_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WorkOrderDetailsComponent_tr_28_Template_input_ngModelChange_6_listener($event) { const Detail_r1 = ctx.$implicit; return Detail_r1.progress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const Detail_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Detail_r1.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](Detail_r1.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", Detail_r1.progress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", Detail_r1.progress);
    }
}
let WorkOrderDetailsComponent = /*@__PURE__*/ (() => {
    class WorkOrderDetailsComponent {
        constructor(route, WorkOrderService, location) {
            this.route = route;
            this.WorkOrderService = WorkOrderService;
            this.location = location;
        }
        ngOnInit() {
            var _a, _b, _c, _d, _e, _f;
            this.getOrder();
            this.Details = (_a = this.Order) === null || _a === void 0 ? void 0 : _a.Details;
            this.getprogress();
            this.id = (_b = this.Order) === null || _b === void 0 ? void 0 : _b.Id;
            this.creationdate = (_c = this.Order) === null || _c === void 0 ? void 0 : _c.creationDate;
            this.startdate = (_d = this.Order) === null || _d === void 0 ? void 0 : _d.StartDate;
            this.enddate = (_e = this.Order) === null || _e === void 0 ? void 0 : _e.EndDate;
            this.Operationdescription = (_f = this.Order) === null || _f === void 0 ? void 0 : _f.OperationDescription;
        }
        getOrder() {
            let nb;
            if ((nb = this.route.snapshot.paramMap.get('id')) != null) {
                const id = +nb;
                this.WorkOrderService.getOrder(id).subscribe(order => this.Order = order);
            }
        }
        goBack() {
            this.location.back();
        }
        getprogress() {
            var _a;
            var progress = 0;
            var count = 0;
            (_a = this.Details) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                progress += item.progress.valueOf();
                count++;
            });
            this.progress = progress / count;
        }
    }
    WorkOrderDetailsComponent.ɵfac = function WorkOrderDetailsComponent_Factory(t) { return new (t || WorkOrderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_work_order_service__WEBPACK_IMPORTED_MODULE_2__["WorkOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
    WorkOrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkOrderDetailsComponent, selectors: [["app-work-order-details"]], decls: 39, vars: 10, consts: [[1, "header"], [2, "width", "60%", "margin-left", "20%"], [1, "w3-light-grey", "w3-round-xlarge"], [1, "w3-container", "w3-blue", "w3-round-xlarge"], [1, "row"], [1, "column", "side"], [1, "column", "middle"], ["Id", "Details"], [4, "ngFor", "ngForOf"], [1, "footer"], [1, "backbutton", 3, "click"], ["type", "number", 1, "Detailprogess", 3, "ngModel", "placeholder", "ngModelChange"]], template: function WorkOrderDetailsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Work Order ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Description");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "location");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "progress");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, WorkOrderDetailsComponent_tr_28_Template, 7, 4, "tr", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkOrderDetailsComponent_Template_button_click_32_listener() { return ctx.getprogress(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "update");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkOrderDetailsComponent_Template_button_click_34_listener() { return ctx.goBack(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "go back");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "login to go to the site engineer webpage");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ID : ", ctx.id, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Operationdescription : ", ctx.Operationdescription, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("creationdate : ", ctx.creationdate, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("startdate : ", ctx.startdate, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("enddate : ", ctx.enddate, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width:", ctx.progress, "%");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.progress, "%");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Details);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["#Details[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\n#Details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #Details[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#Details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#Details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: #ddd;}\r\n\r\n#Details[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #333;\r\n    color: white;\r\n  }\r\n\r\n.Detailprogess[_ngcontent-%COMP%]{\r\n      width: 50px;\r\n  }\r\n\r\n.backbutton[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    border: 2px solid #e7e7e7;\r\n    border-radius: 12px;\r\n  }\r\n\r\n.backbutton[_ngcontent-%COMP%]:hover {background-color: #e7e7e7;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmstb3JkZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDs7QUFFcEQ7SUFDSSx5Q0FBeUM7SUFDekMseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0FBRUEsNEJBQTRCLHlCQUF5QixDQUFDOztBQUV0RCxtQkFBbUIsc0JBQXNCLENBQUM7O0FBRTFDO0lBQ0UsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7QUFFQTtNQUNJLFdBQVc7RUFDZjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjs7QUFFQSxtQkFBbUIseUJBQXlCLENBQUMiLCJmaWxlIjoid29yay1vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBXb3Jrb3JkZXJzZGV0YWlsc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5cclxuI0RldGFpbHMge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNEZXRhaWxzIHRkLCAjRGV0YWlscyB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuICBcclxuICAjRGV0YWlscyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgXHJcbiAgI0RldGFpbHMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG4gIFxyXG4gICNEZXRhaWxzIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5EZXRhaWxwcm9nZXNze1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICB9XHJcblxyXG4gIC5iYWNrYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcblxyXG4gIC5iYWNrYnV0dG9uOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O30iXX0= */"] });
    return WorkOrderDetailsComponent;
})();



/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "6epW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let AuthModule = /*@__PURE__*/ (() => {
    class AuthModule {
    }
    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AuthModule });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]
            ]] });
    return AuthModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]] });
})();



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _work_order_list_work_order_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work-order-list/work-order-list.component */ "BtvF");
/* harmony import */ var _work_order_details_work_order_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-order-details/work-order-details.component */ "VOiv");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let AppModule = /*@__PURE__*/ (() => {
    class AppModule {
        constructor(router) { }
        ;
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"]
            ]] });
    return AppModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _work_order_list_work_order_list_component__WEBPACK_IMPORTED_MODULE_4__["WorkOrderListComponent"],
            _work_order_details_work_order_details_component__WEBPACK_IMPORTED_MODULE_5__["WorkOrderDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"]] });
})();



/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LoginComponent_h2_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " login as a Site Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function LoginComponent_h1_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function LoginComponent_button_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
function LoginComponent_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
}
let LoginComponent = /*@__PURE__*/ (() => {
    class LoginComponent {
        constructor(authService, router) {
            this.authService = authService;
            this.router = router;
        }
        login() {
            this.authService.login().subscribe(() => {
                if (this.authService.isLoggedIn) {
                    const redirectUrl = '/SiteEngineer/orderlist';
                    // Set our navigation extras object
                    // that passes on our global query params and fragment
                    const navigationExtras = {
                        queryParamsHandling: 'preserve',
                        preserveFragment: true
                    };
                    // Redirect the user
                    this.router.navigate([redirectUrl], navigationExtras);
                }
            });
        }
        logout() {
            this.authService.logout();
        }
    }
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 11, vars: 4, consts: [[1, "header"], [1, "row"], [1, "column", "side"], ["Id", "login", 1, "column", "middle"], ["style", "margin-bottom: 10%;", 4, "ngIf"], ["class", "loginbutton", 3, "click", 4, "ngIf"], [1, "footer"], [2, "margin-bottom", "10%"], [1, "loginbutton", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_h2_4_Template, 2, 0, "h2", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_h1_5_Template, 2, 0, "h1", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_button_7_Template, 3, 0, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_button_8_Template, 3, 0, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#login[_ngcontent-%COMP%]{\r\n    box-shadow: 10px 10px 5px grey;\r\n    border-radius: 20px;\r\n    background-color: rgb(187, 185, 185);\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.loginbutton[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    border-radius: 4px;\r\n    background-color: #161414;\r\n    border: none;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 28px;\r\n    padding: 20px;\r\n    width: 200px;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 5px;\r\n  }\r\n\r\n.loginbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: relative;\r\n    transition: 0.5s;\r\n  }\r\n\r\n.loginbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n    content: '\\00bb';\r\n    position: absolute;\r\n    opacity: 0;\r\n    top: 0;\r\n    right: -20px;\r\n    transition: 0.5s;\r\n  }\r\n\r\n.loginbutton[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n    padding-right: 25px;\r\n  }\r\n\r\n.loginbutton[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\r\n    opacity: 1;\r\n    right: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLFVBQVU7SUFDVixRQUFRO0VBQ1YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbntcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxODUsIDE4NSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmxvZ2luYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE0MTQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW5idXR0b24gc3BhbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuICBcclxuICAubG9naW5idXR0b24gc3BhbjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnXFwwMGJiJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuICBcclxuICAubG9naW5idXR0b246aG92ZXIgc3BhbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfSJdfQ== */"] });
    return LoginComponent;
})();



/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




let AuthService = /*@__PURE__*/ (() => {
    class AuthService {
        constructor(route) {
            this.route = route;
            this.isLoggedIn = false;
            // store the URL so we can redirect after logging in
            this.redirectUrl = this.route.snapshot.url.toString();
        }
        login() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(val => this.isLoggedIn = true));
        }
        logout() {
            this.isLoggedIn = false;
        }
    }
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    return AuthService;
})();



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _work_order_list_work_order_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work-order-list/work-order-list.component */ "BtvF");
/* harmony import */ var _work_order_details_work_order_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-order-details/work-order-details.component */ "VOiv");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selective-preloading-strategy.service */ "/s+T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _work_order_list_work_order_list_component__WEBPACK_IMPORTED_MODULE_1__["WorkOrderListComponent"] },
    { path: 'workOrderList', component: _work_order_list_work_order_list_component__WEBPACK_IMPORTED_MODULE_1__["WorkOrderListComponent"] },
    { path: 'workOrderDetails/:id', component: _work_order_details_work_order_details_component__WEBPACK_IMPORTED_MODULE_2__["WorkOrderDetailsComponent"] },
    {
        path: 'SiteEngineer',
        loadChildren: () => __webpack_require__.e(/*! import() | SiteEngineers-SiteEngineer-module */ "SiteEngineers-SiteEngineer-module").then(__webpack_require__.bind(null, /*! ./SiteEngineers/SiteEngineer.module */ "TMTr")).then(m => m.AdminModule),
        canLoad: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
let AppRoutingModule = /*@__PURE__*/ (() => {
    class AppRoutingModule {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                    enableTracing: false,
                    preloadingStrategy: _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_4__["SelectivePreloadingStrategyService"],
                })
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return AppRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map