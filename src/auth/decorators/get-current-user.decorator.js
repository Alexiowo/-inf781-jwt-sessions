"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentUser = void 0;
var common_1 = require("@nestjs/common");
exports.GetCurrentUser = (0, common_1.createParamDecorator)(function (data, ctx) {
    var req = ctx.switchToHttp().getRequest();
    return data ? req.user[data] : req.user;
});
