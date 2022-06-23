"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.UserService = void 0;

var http_1 = require("@angular/common/http");

var core_1 = require("@angular/core");

var rxjs_1 = require("rxjs");

var responseCode_1 = require("../enums/responseCode");

var user_1 = require("../Models/user");

var UserService =
/** @class */
function () {
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
    var userInfo = JSON.parse(localStorage.getItem("userInfo")); // userinfor mian kuch he he nai 
    //three users register kya ha login hota ha register hota users but show nahi karta
    // getAllUser kilye Authrozation token chye han woh nai ahn esilye show nai ho raha
    // app empty token pass kar rahy hu 
    //ok but regsiter and login sahi kam kar  raha ha wait I will show you

    console.log(userInfo);
    var token = '#636geehgehgheghgehhgeghgehgehgegehgeheghehggehegh';
    var headers = new http_1.HttpHeaders({
      'Authorization': "Bearer " + token
    });
    return this.httpClient.get(this.baseURL + "GetAllUser", {
      headers: headers
    }).pipe(rxjs_1.map(function (res) {
      var userList = new Array();

      if (res.ResponseCode == responseCode_1.ResponseCode.OK) {
        if (res.dataSet) {
          res.dataSet.map(function (x) {
            userList.push(new user_1.User(x.fullName, x.email, x.userName));
          });
        }
      }

      return userList;
    }));
  };

  UserService = __decorate([core_1.Injectable({
    providedIn: 'root'
  })], UserService);
  return UserService;
}();

exports.UserService = UserService;