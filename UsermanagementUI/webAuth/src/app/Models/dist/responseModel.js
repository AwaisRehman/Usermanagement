"use strict";
exports.__esModule = true;
exports.ResponseModel = void 0;
var responseCode_1 = require("../enums/responseCode");
var ResponseModel = /** @class */ (function () {
    function ResponseModel() {
        this.ResponseCode = responseCode_1.ResponseCode.NotSet;
        this.ResponseMessage = "";
    }
    return ResponseModel;
}());
exports.ResponseModel = ResponseModel;
