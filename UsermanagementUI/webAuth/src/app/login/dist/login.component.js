"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.loginForm = this.formBuilder.group({
            email: ['', [forms_1.Validators.email, forms_1.Validators.required]],
            password: ['', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log("on Submit");
        var payLoad = {
            email: this.loginForm.controls["email"].value,
            password: this.loginForm.controls["password"].value
        };
        this.userService.login(payLoad).subscribe(function (res) {
            console.log(res.dataSet.token);
            localStorage.setItem('token', res.dataSet.token);
        });
        // if (payLoad.ResponseCode == 1) 
        // {
        //   localStorage.setItem("userInfo",JSON.stringify(payLoad.gem));
        //   this.router.navigate(["/user-mana
        //   );
        // }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
