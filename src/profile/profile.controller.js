"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
var common_1 = require("@nestjs/common");
var jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
var ProfileController = function () {
    var _classDecorators = [(0, common_1.Controller)('profile')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getMyProfile_decorators;
    var _getAllProfiles_decorators;
    var _getPublicProfile_decorators;
    var _updateProfile_decorators;
    var ProfileController = _classThis = /** @class */ (function () {
        function ProfileController_1(profileService) {
            this.profileService = (__runInitializers(this, _instanceExtraInitializers), profileService);
        }
        ProfileController_1.prototype.getMyProfile = function (req) {
            return this.profileService.getProfile(req.user.id);
        };
        ProfileController_1.prototype.getAllProfiles = function () {
            return this.profileService.getAllProfiles();
        };
        ProfileController_1.prototype.getPublicProfile = function (id) {
            return this.profileService.getPublicProfile(id);
        };
        ProfileController_1.prototype.updateProfile = function (req, updateProfileDto) {
            return this.profileService.updateProfile(req.user.id, updateProfileDto);
        };
        return ProfileController_1;
    }());
    __setFunctionName(_classThis, "ProfileController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getMyProfile_decorators = [(0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard), (0, common_1.Get)('me')];
        _getAllProfiles_decorators = [(0, common_1.Get)('all')];
        _getPublicProfile_decorators = [(0, common_1.Get)(':id')];
        _updateProfile_decorators = [(0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard), (0, common_1.Patch)('me')];
        __esDecorate(_classThis, null, _getMyProfile_decorators, { kind: "method", name: "getMyProfile", static: false, private: false, access: { has: function (obj) { return "getMyProfile" in obj; }, get: function (obj) { return obj.getMyProfile; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllProfiles_decorators, { kind: "method", name: "getAllProfiles", static: false, private: false, access: { has: function (obj) { return "getAllProfiles" in obj; }, get: function (obj) { return obj.getAllProfiles; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPublicProfile_decorators, { kind: "method", name: "getPublicProfile", static: false, private: false, access: { has: function (obj) { return "getPublicProfile" in obj; }, get: function (obj) { return obj.getPublicProfile; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateProfile_decorators, { kind: "method", name: "updateProfile", static: false, private: false, access: { has: function (obj) { return "updateProfile" in obj; }, get: function (obj) { return obj.updateProfile; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProfileController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProfileController = _classThis;
}();
exports.ProfileController = ProfileController;
