"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var argon2 = require("argon2");
var crypto_1 = require("crypto");
var AuthService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AuthService = _classThis = /** @class */ (function () {
        function AuthService_1(users, jwt, config, tokens) {
            this.users = users;
            this.jwt = jwt;
            this.config = config;
            this.tokens = tokens;
        }
        AuthService_1.prototype.register = function (dto, ua) {
            return __awaiter(this, void 0, void 0, function () {
                var hash, user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.users.findByEmail(dto.email)];
                        case 1:
                            if (_a.sent())
                                throw new common_1.ForbiddenException('El correo ya está registrado.');
                            return [4 /*yield*/, argon2.hash(dto.password)];
                        case 2:
                            hash = _a.sent();
                            return [4 /*yield*/, this.users.create(dto.email, hash)];
                        case 3:
                            user = _a.sent();
                            return [2 /*return*/, this.issueSession(user.id, user.email, ua)];
                    }
                });
            });
        };
        AuthService_1.prototype.issueSession = function (userId, email, ua) {
            return __awaiter(this, void 0, void 0, function () {
                var sessionId, pair;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            sessionId = (0, crypto_1.randomUUID)();
                            return [4 /*yield*/, this.signTokens(userId, email, sessionId)];
                        case 1:
                            pair = _a.sent();
                            return [4 /*yield*/, this.persist(sessionId, userId, pair.refreshToken, ua)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, pair];
                    }
                });
            });
        };
        AuthService_1.prototype.signTokens = function (sub, email, sessionId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, accessToken, refreshToken;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Promise.all([
                                this.jwt.signAsync({ sub: sub, email: email, sessionId: sessionId }, {
                                    secret: this.config.get('JWT_ACCESS_SECRET'),
                                    expiresIn: this.config.get('JWT_ACCESS_EXPIRES'),
                                }),
                                this.jwt.signAsync({ sub: sub, email: email, sessionId: sessionId }, {
                                    secret: this.config.get('JWT_REFRESH_SECRET'),
                                    expiresIn: this.config.get('JWT_REFRESH_EXPIRES'),
                                }),
                            ])];
                        case 1:
                            _a = _b.sent(), accessToken = _a[0], refreshToken = _a[1];
                            return [2 /*return*/, { accessToken: accessToken, refreshToken: refreshToken }];
                    }
                });
            });
        };
        AuthService_1.prototype.persist = function (id, userId, token, ua) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d;
                var _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            _b = (_a = this.tokens).save;
                            _d = (_c = this.tokens).create;
                            _e = {
                                id: id,
                                userId: userId
                            };
                            return [4 /*yield*/, argon2.hash(token)];
                        case 1: return [4 /*yield*/, _b.apply(_a, [_d.apply(_c, [(_e.hashedToken = _f.sent(),
                                        _e.userAgent = ua !== null && ua !== void 0 ? ua : null,
                                        _e.revoked = false,
                                        _e.expiresAt = this.refreshExpiry(),
                                        _e)])])];
                        case 2:
                            _f.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AuthService_1.prototype.refreshExpiry = function () {
            var d = new Date();
            d.setDate(d.getDate() + 7);
            return d;
        };
        AuthService_1.prototype.login = function (dto, ua) {
            return __awaiter(this, void 0, void 0, function () {
                var user, ok;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.users.findByEmail(dto.email)];
                        case 1:
                            user = _a.sent();
                            if (!user)
                                throw new common_1.UnauthorizedException('Credenciales inválidas');
                            return [4 /*yield*/, argon2.verify(user.password, dto.password)];
                        case 2:
                            ok = _a.sent();
                            if (!ok)
                                throw new common_1.UnauthorizedException('Credenciales inválidas');
                            return [2 /*return*/, this.issueSession(user.id, user.email, ua)];
                    }
                });
            });
        };
        AuthService_1.prototype.refreshTokens = function (userId, email, sessionId, presented, ua) {
            return __awaiter(this, void 0, void 0, function () {
                var session, ok, pair, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.tokens.findOne({ where: { id: sessionId } })];
                        case 1:
                            session = _b.sent();
                            if (!(!session || session.revoked || session.expiresAt < new Date())) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.revokeAll(userId)];
                        case 2:
                            _b.sent();
                            throw new common_1.ForbiddenException('Sesión inválida. Inicia sesión de nuevo.');
                        case 3: return [4 /*yield*/, argon2.verify(session.hashedToken, presented)];
                        case 4:
                            ok = _b.sent();
                            if (!!ok) return [3 /*break*/, 6];
                            return [4 /*yield*/, this.revokeAll(userId)];
                        case 5:
                            _b.sent(); // reúso de token rotado
                            throw new common_1.ForbiddenException('Reúso detectado. Se cerraron todas las sesiones.');
                        case 6: return [4 /*yield*/, this.signTokens(userId, email, sessionId)];
                        case 7:
                            pair = _b.sent();
                            _a = session;
                            return [4 /*yield*/, argon2.hash(pair.refreshToken)];
                        case 8:
                            _a.hashedToken = _b.sent();
                            session.expiresAt = this.refreshExpiry();
                            session.userAgent = ua !== null && ua !== void 0 ? ua : session.userAgent;
                            return [4 /*yield*/, this.tokens.save(session)];
                        case 9:
                            _b.sent();
                            return [2 /*return*/, pair];
                    }
                });
            });
        };
        AuthService_1.prototype.logout = function (sessionId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.tokens.update({ id: sessionId }, { revoked: true })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AuthService_1.prototype.revokeAll = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.tokens.update({ userId: userId, revoked: false }, { revoked: true })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AuthService_1.prototype.listSessions = function (userId) {
            return this.tokens.find({
                where: { userId: userId, revoked: false },
                select: {
                    id: true,
                    userAgent: true,
                    createdAt: true,
                    expiresAt: true,
                },
            });
        };
        return AuthService_1;
    }());
    __setFunctionName(_classThis, "AuthService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthService = _classThis;
}();
exports.AuthService = AuthService;
