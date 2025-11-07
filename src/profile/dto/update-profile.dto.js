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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileDto = void 0;
var class_validator_1 = require("class-validator");
var UpdateProfileDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _headline_decorators;
    var _headline_initializers = [];
    var _headline_extraInitializers = [];
    var _location_decorators;
    var _location_initializers = [];
    var _location_extraInitializers = [];
    var _about_decorators;
    var _about_initializers = [];
    var _about_extraInitializers = [];
    var _photoUrl_decorators;
    var _photoUrl_initializers = [];
    var _photoUrl_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UpdateProfileDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.headline = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _headline_initializers, void 0));
                this.location = (__runInitializers(this, _headline_extraInitializers), __runInitializers(this, _location_initializers, void 0));
                this.about = (__runInitializers(this, _location_extraInitializers), __runInitializers(this, _about_initializers, void 0));
                this.photoUrl = (__runInitializers(this, _about_extraInitializers), __runInitializers(this, _photoUrl_initializers, void 0));
                __runInitializers(this, _photoUrl_extraInitializers);
            }
            return UpdateProfileDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _headline_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _location_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _about_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _photoUrl_decorators = [(0, class_validator_1.IsUrl)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _headline_decorators, { kind: "field", name: "headline", static: false, private: false, access: { has: function (obj) { return "headline" in obj; }, get: function (obj) { return obj.headline; }, set: function (obj, value) { obj.headline = value; } }, metadata: _metadata }, _headline_initializers, _headline_extraInitializers);
            __esDecorate(null, null, _location_decorators, { kind: "field", name: "location", static: false, private: false, access: { has: function (obj) { return "location" in obj; }, get: function (obj) { return obj.location; }, set: function (obj, value) { obj.location = value; } }, metadata: _metadata }, _location_initializers, _location_extraInitializers);
            __esDecorate(null, null, _about_decorators, { kind: "field", name: "about", static: false, private: false, access: { has: function (obj) { return "about" in obj; }, get: function (obj) { return obj.about; }, set: function (obj, value) { obj.about = value; } }, metadata: _metadata }, _about_initializers, _about_extraInitializers);
            __esDecorate(null, null, _photoUrl_decorators, { kind: "field", name: "photoUrl", static: false, private: false, access: { has: function (obj) { return "photoUrl" in obj; }, get: function (obj) { return obj.photoUrl; }, set: function (obj, value) { obj.photoUrl = value; } }, metadata: _metadata }, _photoUrl_initializers, _photoUrl_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdateProfileDto = UpdateProfileDto;
