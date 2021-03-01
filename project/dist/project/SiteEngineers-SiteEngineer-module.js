(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SiteEngineers-SiteEngineer-module"],{

/***/ "0rls":
/*!**********************************************************************************************************!*\
  !*** ./src/app/SiteEngineers/site-engineer-work-orders-list/site-engineer-work-orders-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SiteEngineerWorkOrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteEngineerWorkOrdersListComponent", function() { return SiteEngineerWorkOrdersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_work_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/work-order.service */ "AKn8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function SiteEngineerWorkOrdersListComponent_li_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const WorkOrder_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../OrderDetails/", WorkOrder_r1.Id, "");
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
let SiteEngineerWorkOrdersListComponent = /*@__PURE__*/ (() => {
    class SiteEngineerWorkOrdersListComponent {
        constructor(workOrderService) {
            this.workOrderService = workOrderService;
        }
        ngOnInit() {
            this.getOrders();
        }
        getOrders() {
            this.workOrderService.getOrders().subscribe(WorkOrder => this.orders = WorkOrder);
        }
    }
    SiteEngineerWorkOrdersListComponent.ɵfac = function SiteEngineerWorkOrdersListComponent_Factory(t) { return new (t || SiteEngineerWorkOrdersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_work_order_service__WEBPACK_IMPORTED_MODULE_1__["WorkOrderService"])); };
    SiteEngineerWorkOrdersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SiteEngineerWorkOrdersListComponent, selectors: [["app-site-engineer-work-orders-list"]], decls: 17, vars: 1, consts: [[1, "header"], [1, "row"], [1, "column", "side"], [1, "column", "middle"], ["class", "orders", 4, "ngFor", "ngForOf"], ["routerLink", "../newOrder"], [1, "neworder"], [1, "footer"], [1, "orders"], [3, "routerLink"], [1, "discription"], ["id", "ID"], [1, "w3-light-grey", "w3-round-xlarge"], [1, "w3-container", "w3-blue", "w3-round-xlarge"]], template: function SiteEngineerWorkOrdersListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " to your Work Order");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "please click on one of the orders to see or update the details");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SiteEngineerWorkOrdersListComponent_li_11_Template, 9, 7, "li", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "+");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 7);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["li[_ngcontent-%COMP%]{\r\n    list-style-type: none;\r\n    margin-bottom : 7%;\r\n  }\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n  }\r\n\r\n.orders[_ngcontent-%COMP%]{\r\n    box-shadow: 10px 10px 5px grey;\r\n    border-radius: 20px;\r\n    background-color: rgb(187, 185, 185);\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover {background-color: #ddd;}\r\n\r\n.discription[_ngcontent-%COMP%]{\r\n    font-family: \"Times New Roman\", Times, serif;\r\n    font-weight: bolder;\r\n    font-size: larger;\r\n    padding-top: 3%;\r\n    padding-bottom: 3%;\r\n  }\r\n\r\n#ID[_ngcontent-%COMP%]{\r\n    padding-right: 30%;\r\n   \r\n  }\r\n\r\n.neworder[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: dodgerblue;\r\n    color: ghostwhite;\r\n    font-size: larger;\r\n    font-weight: bolder;\r\n    padding-top:20px;\r\n    padding-bottom: 20px;\r\n    width:70px;\r\n    border-radius: 50%;\r\n    text-align:center;  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUtZW5naW5lZXItd29yay1vcmRlcnMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlEQUFpRDs7QUFFakQ7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixvQ0FBb0M7RUFDdEM7O0FBRUMsU0FBUyxzQkFBc0IsQ0FBQzs7QUFFakM7SUFDRSw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0Usa0JBQWtCOztFQUVwQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNpdGUtZW5naW5lZXItd29yay1vcmRlcnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogV29ya29yZGVyc2xpc3RDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuXHJcbmxpe1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbSA6IDclO1xyXG4gIH1cclxuICBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAub3JkZXJze1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDE4NSwgMTg1KTtcclxuICB9XHJcbiAgXHJcbiAgIGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG4gIFxyXG4gIC5kaXNjcmlwdGlvbntcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgfVxyXG4gIFxyXG4gICNJRHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwJTtcclxuICAgXHJcbiAgfVxyXG5cclxuICAubmV3b3JkZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICBjb2xvcjogZ2hvc3R3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOjcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjsgIFxyXG4gIH0iXX0= */"] });
    return SiteEngineerWorkOrdersListComponent;
})();



/***/ }),

/***/ "Ellv":
/*!*************************************************************!*\
  !*** ./src/app/SiteEngineers/SiteEngineerRouting.module.ts ***!
  \*************************************************************/
/*! exports provided: SiteEngineerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteEngineerRoutingModule", function() { return SiteEngineerRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.guard */ "P+IX");
/* harmony import */ var _site_engineer_site_engineer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-engineer/site-engineer.component */ "s65J");
/* harmony import */ var _site_engineer_work_order_details_site_engineer_work_order_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-engineer-work-order-details/site-engineer-work-order-details.component */ "UaNH");
/* harmony import */ var _site_engineer_work_orders_list_site_engineer_work_orders_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site-engineer-work-orders-list/site-engineer-work-orders-list.component */ "0rls");
/* harmony import */ var _create_new_order_create_new_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-new-order/create-new-order.component */ "HKSQ");
/* harmony import */ var _create_new_detail_create_new_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-new-detail/create-new-detail.component */ "t4M+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const adminRoutes = [
    {
        path: '',
        component: _site_engineer_site_engineer_component__WEBPACK_IMPORTED_MODULE_2__["SiteEngineerComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [
            {
                path: '',
                canActivateChild: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
                children: [
                    { path: 'orderlist', component: _site_engineer_work_orders_list_site_engineer_work_orders_list_component__WEBPACK_IMPORTED_MODULE_4__["SiteEngineerWorkOrdersListComponent"] },
                    { path: 'OrderDetails/:id', component: _site_engineer_work_order_details_site_engineer_work_order_details_component__WEBPACK_IMPORTED_MODULE_3__["SiteEngineerWorkOrderDetailsComponent"] },
                    { path: 'newOrder', component: _create_new_order_create_new_order_component__WEBPACK_IMPORTED_MODULE_5__["CreateNewOrderComponent"] },
                    { path: 'newDetail/:id', component: _create_new_detail_create_new_detail_component__WEBPACK_IMPORTED_MODULE_6__["CreateNewDetailComponent"] }
                ]
            }
        ]
    }
];
let SiteEngineerRoutingModule = /*@__PURE__*/ (() => {
    class SiteEngineerRoutingModule {
    }
    SiteEngineerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SiteEngineerRoutingModule });
    SiteEngineerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function SiteEngineerRoutingModule_Factory(t) { return new (t || SiteEngineerRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(adminRoutes)
            ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return SiteEngineerRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SiteEngineerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();



/***/ }),

/***/ "HKSQ":
/*!******************************************************************************!*\
  !*** ./src/app/SiteEngineers/create-new-order/create-new-order.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateNewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewOrderComponent", function() { return CreateNewOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_work_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/work-order.service */ "AKn8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




let CreateNewOrderComponent = /*@__PURE__*/ (() => {
    class CreateNewOrderComponent {
        constructor(WorkOrderService, location) {
            this.WorkOrderService = WorkOrderService;
            this.location = location;
            this.submitted = false;
            this.model = {
                Id: 0,
                creationDate: "",
                OperationDescription: " ",
                StartDate: "",
                EndDate: "",
                progress: 0,
            };
        }
        ngOnInit() {
        }
        newHero() {
            this.model = {
                Id: 0,
                creationDate: " ",
                OperationDescription: " ",
                StartDate: " ",
                EndDate: " ",
                progress: 0
            };
        }
        onSubmit() { this.submitted = true; }
        save() {
            this.Order = {
                Id: this.model.Id,
                creationDate: this.model.creationDate,
                OperationDescription: this.model.OperationDescription,
                StartDate: this.model.StartDate,
                EndDate: this.model.EndDate,
                progress: this.model.progress,
                Details: []
            };
            this.WorkOrderService.addOrder(this.Order);
            this.location.back();
        }
        showFormControls(form) {
            return form && form.controls.name &&
                form.controls.name.value; // Dr. IQ
        }
    }
    CreateNewOrderComponent.ɵfac = function CreateNewOrderComponent_Factory(t) { return new (t || CreateNewOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_work_order_service__WEBPACK_IMPORTED_MODULE_1__["WorkOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
    CreateNewOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateNewOrderComponent, selectors: [["app-create-new-order"]], decls: 78, vars: 14, consts: [[3, "hidden"], [1, "header"], [1, "row"], [1, "column", "side"], ["id", "newOrder", 1, "column", "middle"], [1, "container"], [3, "ngSubmit"], ["Form", "ngForm"], [1, "form-group"], ["for", "Id"], ["type", "number", "id", "Id", "required", "", "name", "Id", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "OperationDescription"], ["type", "text", "id", "OperationDescription", "required", "", "name", "OperationDescription", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "creationDate"], ["type", "date", "id", "creationDate", "required", "", "name", "creationDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "StartDate"], ["type", "date", "id", "StartDate", "required", "", "name", "StartDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "EndDate"], ["type", "date", "id", "EndDate", "required", "", "name", "EndDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "success", 3, "disabled"], ["type", "button", 1, "reset", 3, "click"], [1, "footer"], [1, "reset", 3, "click"], [1, "success", 3, "click"]], template: function CreateNewOrderComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6, 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateNewOrderComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Id");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateNewOrderComponent_Template_input_ngModelChange_13_listener($event) { return ctx.model.Id = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Operation Description");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateNewOrderComponent_Template_input_ngModelChange_17_listener($event) { return ctx.model.OperationDescription = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "creationDated");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateNewOrderComponent_Template_input_ngModelChange_22_listener($event) { return ctx.model.creationDate = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "StartDate");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateNewOrderComponent_Template_input_ngModelChange_27_listener($event) { return ctx.model.StartDate = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "End Date");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateNewOrderComponent_Template_input_ngModelChange_32_listener($event) { return ctx.model.EndDate = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Submit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateNewOrderComponent_Template_button_click_36_listener() { return ctx.newHero(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "reset");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "You submitted the following:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Id : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "OperationDescription : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "progress : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "creationDate : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "StartDate : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "EndDate : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateNewOrderComponent_Template_button_click_72_listener() { return ctx.submitted = false; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Edit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateNewOrderComponent_Template_button_click_74_listener() { return ctx.save(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "save");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 21);
            }
            if (rf & 2) {
                const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submitted);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.Id);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.OperationDescription);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.creationDate);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.StartDate);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.EndDate);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submitted == false);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.model.Id, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.model.OperationDescription, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.progress);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.creationDate);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.StartDate);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.EndDate);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["#newOrder[_ngcontent-%COMP%]{\r\n    box-shadow: 10px 10px 5px grey;\r\n    border-radius: 20px;\r\n    background-color: rgb(187, 185, 185);\r\n  height: inherit;\r\n    margin-bottom: 50px;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n.success[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: dodgerblue;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.success[_ngcontent-%COMP%] {\r\n    background-color: rgb(1, 73, 146);\r\n  }\r\n\r\n.container[_ngcontent-%COMP%]{\r\n      padding:10px;\r\n  }\r\n\r\n.reset[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: dodgerblue;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.reset[_ngcontent-%COMP%] {\r\n    background-color: rgb(1, 73, 146);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1uZXctb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsb0NBQW9DO0VBQ3RDLGVBQWU7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGlDQUFpQztFQUNuQzs7QUFFQTtNQUNJLFlBQVk7RUFDaEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGlDQUFpQztFQUNuQyIsImZpbGUiOiJjcmVhdGUtbmV3LW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmV3T3JkZXJ7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTg1LCAxODUpO1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLnN1Y2Nlc3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDczLCAxNDYpO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgICAgcGFkZGluZzoxMHB4O1xyXG4gIH1cclxuICBcclxuICAucmVzZXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnJlc2V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxLCA3MywgMTQ2KTtcclxuICB9Il19 */"] });
    return CreateNewOrderComponent;
})();



/***/ }),

/***/ "TMTr":
/*!******************************************************!*\
  !*** ./src/app/SiteEngineers/SiteEngineer.module.ts ***!
  \******************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _SiteEngineerRouting_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SiteEngineerRouting.module */ "Ellv");
/* harmony import */ var _site_engineer_site_engineer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-engineer/site-engineer.component */ "s65J");
/* harmony import */ var _site_engineer_work_order_details_site_engineer_work_order_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site-engineer-work-order-details/site-engineer-work-order-details.component */ "UaNH");
/* harmony import */ var _site_engineer_work_orders_list_site_engineer_work_orders_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./site-engineer-work-orders-list/site-engineer-work-orders-list.component */ "0rls");
/* harmony import */ var _create_new_order_create_new_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-new-order/create-new-order.component */ "HKSQ");
/* harmony import */ var _create_new_detail_create_new_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-new-detail/create-new-detail.component */ "t4M+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









let AdminModule = /*@__PURE__*/ (() => {
    class AdminModule {
    }
    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AdminModule });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _SiteEngineerRouting_module__WEBPACK_IMPORTED_MODULE_2__["SiteEngineerRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ]] });
    return AdminModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_site_engineer_site_engineer_component__WEBPACK_IMPORTED_MODULE_3__["SiteEngineerComponent"],
            _site_engineer_work_order_details_site_engineer_work_order_details_component__WEBPACK_IMPORTED_MODULE_4__["SiteEngineerWorkOrderDetailsComponent"],
            _site_engineer_work_orders_list_site_engineer_work_orders_list_component__WEBPACK_IMPORTED_MODULE_5__["SiteEngineerWorkOrdersListComponent"],
            _create_new_order_create_new_order_component__WEBPACK_IMPORTED_MODULE_6__["CreateNewOrderComponent"],
            _create_new_detail_create_new_detail_component__WEBPACK_IMPORTED_MODULE_7__["CreateNewDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _SiteEngineerRouting_module__WEBPACK_IMPORTED_MODULE_2__["SiteEngineerRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] });
})();



/***/ }),

/***/ "UaNH":
/*!**************************************************************************************************************!*\
  !*** ./src/app/SiteEngineers/site-engineer-work-order-details/site-engineer-work-order-details.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SiteEngineerWorkOrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteEngineerWorkOrderDetailsComponent", function() { return SiteEngineerWorkOrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_work_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/work-order.service */ "AKn8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function SiteEngineerWorkOrderDetailsComponent_tr_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SiteEngineerWorkOrderDetailsComponent_tr_28_Template_input_ngModelChange_2_listener($event) { const Detail_r1 = ctx.$implicit; return Detail_r1.Description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SiteEngineerWorkOrderDetailsComponent_tr_28_Template_input_ngModelChange_4_listener($event) { const Detail_r1 = ctx.$implicit; return Detail_r1.location = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SiteEngineerWorkOrderDetailsComponent_tr_28_Template_input_ngModelChange_6_listener($event) { const Detail_r1 = ctx.$implicit; return Detail_r1.progress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const Detail_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", Detail_r1.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", Detail_r1.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", Detail_r1.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", Detail_r1.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", Detail_r1.progress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", Detail_r1.progress);
    }
}
let SiteEngineerWorkOrderDetailsComponent = /*@__PURE__*/ (() => {
    class SiteEngineerWorkOrderDetailsComponent {
        constructor(route, WorkOrderService, location) {
            this.route = route;
            this.WorkOrderService = WorkOrderService;
            this.location = location;
        }
        ngOnInit() {
            var _a, _b, _c, _d, _e, _f, _g;
            this.getOrder();
            this.Details = (_a = this.Order) === null || _a === void 0 ? void 0 : _a.Details;
            this.Details = (_b = this.Order) === null || _b === void 0 ? void 0 : _b.Details;
            this.getprogress();
            this.id = (_c = this.Order) === null || _c === void 0 ? void 0 : _c.Id;
            this.creationdate = (_d = this.Order) === null || _d === void 0 ? void 0 : _d.creationDate;
            this.startdate = (_e = this.Order) === null || _e === void 0 ? void 0 : _e.StartDate;
            this.enddate = (_f = this.Order) === null || _f === void 0 ? void 0 : _f.EndDate;
            this.Operationdescription = (_g = this.Order) === null || _g === void 0 ? void 0 : _g.OperationDescription;
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
    SiteEngineerWorkOrderDetailsComponent.ɵfac = function SiteEngineerWorkOrderDetailsComponent_Factory(t) { return new (t || SiteEngineerWorkOrderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_work_order_service__WEBPACK_IMPORTED_MODULE_2__["WorkOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
    SiteEngineerWorkOrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SiteEngineerWorkOrderDetailsComponent, selectors: [["app-site-engineer-work-order-details"]], decls: 40, vars: 11, consts: [[1, "header"], [2, "width", "60%", "margin-left", "20%"], [1, "w3-light-grey", "w3-round-xlarge"], [1, "w3-container", "w3-blue", "w3-round-xlarge"], [1, "row"], [1, "column", "side"], [1, "column", "middle"], ["Id", "Details"], [4, "ngFor", "ngForOf"], [1, "footer"], [1, "backbutton", 3, "click"], [3, "routerLink"], [1, "neworder"], [1, "DetailDescription", 3, "ngModel", "placeholder", "ngModelChange"], [1, "Detailprogess", 3, "ngModel", "placeholder", "ngModelChange"], ["type", "number", 1, "Detailprogess", 3, "ngModel", "placeholder", "ngModelChange"]], template: function SiteEngineerWorkOrderDetailsComponent_Template(rf, ctx) {
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
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SiteEngineerWorkOrderDetailsComponent_tr_28_Template, 7, 6, "tr", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiteEngineerWorkOrderDetailsComponent_Template_button_click_32_listener() { return ctx.getprogress(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "update");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SiteEngineerWorkOrderDetailsComponent_Template_button_click_35_listener() { return ctx.goBack(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "go back");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "+");
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
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "../../newDetail/", ctx.id, "");
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: ["#Details[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\n#Details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #Details[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n  }\r\n\r\n#Details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#Details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: #ddd;}\r\n\r\n#Details[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #333;\r\n    color: white;\r\n  }\r\n\r\n.Detailprogess[_ngcontent-%COMP%]{\r\n      width: 50px;\r\n  }\r\n\r\n.DetailDescription[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n  }\r\n\r\n.backbutton[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    color: black;\r\n    border: 2px solid #e7e7e7;\r\n    border-radius: 12px;\r\n  }\r\n\r\n.backbutton[_ngcontent-%COMP%]:hover {background-color: #e7e7e7;}\r\n\r\n.neworder[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: dodgerblue;\r\n    color: ghostwhite;\r\n    font-size: larger;\r\n    font-weight: bolder;\r\n    padding-top:20px;\r\n    padding-bottom: 20px;\r\n    width:70px;\r\n    border-radius: 50%;\r\n    text-align:center;  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUtZW5naW5lZXItd29yay1vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0RBQW9EOztBQUVwRDtJQUNJLHlDQUF5QztJQUN6Qyx5QkFBeUI7SUFDekIsV0FBVztFQUNiOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7QUFFQSw0QkFBNEIseUJBQXlCLENBQUM7O0FBRXRELG1CQUFtQixzQkFBc0IsQ0FBQzs7QUFFMUM7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztBQUVBO01BQ0ksV0FBVztFQUNmOztBQUNBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCOztBQUVBLG1CQUFtQix5QkFBeUIsQ0FBQzs7QUFFN0M7SUFDRSxlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7SUFDUiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzaXRlLWVuZ2luZWVyLXdvcmstb3JkZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogV29ya29yZGVyc2RldGFpbHNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuXHJcbiNEZXRhaWxzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAjRGV0YWlscyB0ZCwgI0RldGFpbHMgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgI0RldGFpbHMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gIFxyXG4gICNEZXRhaWxzIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuICBcclxuICAjRGV0YWlscyB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuRGV0YWlscHJvZ2Vzc3tcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG4gIC5EZXRhaWxEZXNjcmlwdGlvbntcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcblxyXG4gIC5iYWNrYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcblxyXG4gIC5iYWNrYnV0dG9uOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O31cclxuXHJcbiAgLm5ld29yZGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgY29sb3I6IGdob3N0d2hpdGU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB3aWR0aDo3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7ICBcclxuICB9Il19 */"] });
    return SiteEngineerWorkOrderDetailsComponent;
})();



/***/ }),

/***/ "s65J":
/*!************************************************************************!*\
  !*** ./src/app/SiteEngineers/site-engineer/site-engineer.component.ts ***!
  \************************************************************************/
/*! exports provided: SiteEngineerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteEngineerComponent", function() { return SiteEngineerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


let SiteEngineerComponent = /*@__PURE__*/ (() => {
    class SiteEngineerComponent {
        constructor() { }
        ngOnInit() {
        }
    }
    SiteEngineerComponent.ɵfac = function SiteEngineerComponent_Factory(t) { return new (t || SiteEngineerComponent)(); };
    SiteEngineerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SiteEngineerComponent, selectors: [["app-site-engineer"]], decls: 1, vars: 0, template: function SiteEngineerComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
        }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXRlLWVuZ2luZWVyLmNvbXBvbmVudC5jc3MifQ== */"] });
    return SiteEngineerComponent;
})();



/***/ }),

/***/ "t4M+":
/*!********************************************************************************!*\
  !*** ./src/app/SiteEngineers/create-new-detail/create-new-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreateNewDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewDetailComponent", function() { return CreateNewDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_work_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/work-order.service */ "AKn8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function CreateNewDetailComponent_option_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const loc_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", loc_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loc_r1);
    }
}
let CreateNewDetailComponent = /*@__PURE__*/ (() => {
    class CreateNewDetailComponent {
        constructor(WorkOrderService, Location, route) {
            this.WorkOrderService = WorkOrderService;
            this.Location = Location;
            this.route = route;
            this.location = ["Beirut", "saida", "Baabda"];
            this.submitted = false;
            this.model = {
                Description: "",
                location: "",
                progress: 0
            };
        }
        ngOnInit() {
        }
        newDetail() {
            this.model = {
                Description: "",
                location: "",
                progress: 0
            };
        }
        onSubmit() { this.submitted = true; }
        save() {
            this.Detail = {
                Description: this.model.Description,
                location: this.model.location,
                progress: this.model.progress
            };
            var nb;
            if ((nb = this.route.snapshot.paramMap.get('id')) != null) {
                const id = +nb;
                this.WorkOrderService.addDetail(id, this.Detail);
                this.Location.back();
            }
        }
    }
    CreateNewDetailComponent.ɵfac = function CreateNewDetailComponent_Factory(t) { return new (t || CreateNewDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_work_order_service__WEBPACK_IMPORTED_MODULE_1__["WorkOrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    CreateNewDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateNewDetailComponent, selectors: [["app-create-new-detail"]], decls: 55, vars: 9, consts: [[3, "hidden"], [1, "header"], [1, "row"], [1, "column", "side"], ["id", "newOrder", 1, "column", "middle"], [1, "container"], [1, "form-group"], ["for", "Id"], ["type", "text", "id", " Description", "required", "", "name", " Description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "OperationDescription"], ["id", "location", "required", "", "name", "location", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "creationDate"], ["type", "number", "id", "progress", "required", "", "name", "progress", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "success", 3, "click"], ["type", "button", 1, "reset", 3, "click"], [1, "footer"], [1, "reset", 3, "click"], [1, "success", 3, "click"], [3, "value"]], template: function CreateNewDetailComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Adding new Detial");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Description");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateNewDetailComponent_Template_input_ngModelChange_12_listener($event) { return ctx.model.Description = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "location");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateNewDetailComponent_Template_select_ngModelChange_16_listener($event) { return ctx.model.location = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateNewDetailComponent_option_17_Template, 2, 2, "option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "progress");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateNewDetailComponent_Template_input_ngModelChange_21_listener($event) { return ctx.model.progress = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateNewDetailComponent_Template_button_click_22_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Submit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateNewDetailComponent_Template_button_click_25_listener() { return ctx.newDetail(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "reset");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "You submitted the following:");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Description : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "progress : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "location : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateNewDetailComponent_Template_button_click_49_listener() { return ctx.submitted = false; });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Edit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateNewDetailComponent_Template_button_click_51_listener() { return ctx.save(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "save");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 16);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submitted);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.Description);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.location);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.location);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.progress);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.submitted == false);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.model.Description, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.progress);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model.location);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["#newOrder[_ngcontent-%COMP%]{\r\n    box-shadow: 10px 10px 5px grey;\r\n    border-radius: 20px;\r\n    background-color: rgb(187, 185, 185);\r\n  height: inherit;\r\n    margin-bottom: 50px;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n.success[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: dodgerblue;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.success[_ngcontent-%COMP%] {\r\n    background-color: rgb(1, 73, 146);\r\n  }\r\n\r\n.container[_ngcontent-%COMP%]{\r\n      padding:10px;\r\n  }\r\n\r\n.reset[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: dodgerblue;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.reset[_ngcontent-%COMP%] {\r\n    background-color: rgb(1, 73, 146);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1uZXctZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9DQUFvQztFQUN0QyxlQUFlO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0FBRUE7TUFDSSxZQUFZO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxpQ0FBaUM7RUFDbkMiLCJmaWxlIjoiY3JlYXRlLW5ldy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuZXdPcmRlcntcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxODUsIDE4NSk7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAuc3VjY2VzcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgNzMsIDE0Nik7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXNldCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAucmVzZXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDczLCAxNDYpO1xyXG4gIH0iXX0= */"] });
    return CreateNewDetailComponent;
})();



/***/ })

}]);
//# sourceMappingURL=SiteEngineers-SiteEngineer-module.js.map