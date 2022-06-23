"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = "https://localhost:7194/api/user/";
    }
    UserService.prototype.login = function (body) {
        return this.httpClient.post(this.baseURL + "Login", body);
    };
    UserService.prototype.register = function (body) {
        return this.httpClient.post(this.baseURL + "RegisterUser", body);
    };
    UserService.prototype.getAllUser = function () {
        var token = localStorage.getItem('token');
        var headers = new http_1.HttpHeaders({
            'Authorization': "Bearer " + token
        });
        return this.httpClient.get(this.baseURL + "GetAllUser", { headers: headers });
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
