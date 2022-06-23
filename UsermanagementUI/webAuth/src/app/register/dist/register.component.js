"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.registerForm = this.formBuilder.group({
            fullName: ['', [forms_1.Validators.required]],
            email: ['', [forms_1.Validators.email, forms_1.Validators.required]],
            password: ['', forms_1.Validators.required]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        console.log("on Submit");
        var payLoad = {
            fullName: this.registerForm.controls["fullName"].value,
            email: this.registerForm.controls["email"].value,
            password: this.registerForm.controls["password"].value
        };
        this.userService.register(payLoad).subscribe(function (res) { return console.log(res); });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
