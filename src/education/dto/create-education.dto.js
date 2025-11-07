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
exports.CreateEducationDto = void 0;
var class_validator_1 = require("class-validator");
var CreateEducationDto = function () {
    var _a;
    var _school_decorators;
    var _school_initializers = [];
    var _school_extraInitializers = [];
    var _degree_decorators;
    var _degree_initializers = [];
    var _degree_extraInitializers = [];
    var _field_decorators;
    var _field_initializers = [];
    var _field_extraInitializers = [];
    var _startDate_decorators;
    var _startDate_initializers = [];
    var _startDate_extraInitializers = [];
    var _endDate_decorators;
    var _endDate_initializers = [];
    var _endDate_extraInitializers = [];
    var _current_decorators;
    var _current_initializers = [];
    var _current_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateEducationDto() {
                this.school = __runInitializers(this, _school_initializers, void 0);
                this.degree = (__runInitializers(this, _school_extraInitializers), __runInitializers(this, _degree_initializers, void 0));
                this.field = (__runInitializers(this, _degree_extraInitializers), __runInitializers(this, _field_initializers, void 0));
                this.startDate = (__runInitializers(this, _field_extraInitializers), __runInitializers(this, _startDate_initializers, void 0));
                this.endDate = (__runInitializers(this, _startDate_extraInitializers), __runInitializers(this, _endDate_initializers, void 0));
                this.current = (__runInitializers(this, _endDate_extraInitializers), __runInitializers(this, _current_initializers, void 0));
                this.description = (__runInitializers(this, _current_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                __runInitializers(this, _description_extraInitializers);
            }
            return CreateEducationDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _school_decorators = [(0, class_validator_1.IsString)()];
            _degree_decorators = [(0, class_validator_1.IsString)()];
            _field_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _startDate_decorators = [(0, class_validator_1.IsDateString)()];
            _endDate_decorators = [(0, class_validator_1.IsDateString)(), (0, class_validator_1.IsOptional)()];
            _current_decorators = [(0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
            _description_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _school_decorators, { kind: "field", name: "school", static: false, private: false, access: { has: function (obj) { return "school" in obj; }, get: function (obj) { return obj.school; }, set: function (obj, value) { obj.school = value; } }, metadata: _metadata }, _school_initializers, _school_extraInitializers);
            __esDecorate(null, null, _degree_decorators, { kind: "field", name: "degree", static: false, private: false, access: { has: function (obj) { return "degree" in obj; }, get: function (obj) { return obj.degree; }, set: function (obj, value) { obj.degree = value; } }, metadata: _metadata }, _degree_initializers, _degree_extraInitializers);
            __esDecorate(null, null, _field_decorators, { kind: "field", name: "field", static: false, private: false, access: { has: function (obj) { return "field" in obj; }, get: function (obj) { return obj.field; }, set: function (obj, value) { obj.field = value; } }, metadata: _metadata }, _field_initializers, _field_extraInitializers);
            __esDecorate(null, null, _startDate_decorators, { kind: "field", name: "startDate", static: false, private: false, access: { has: function (obj) { return "startDate" in obj; }, get: function (obj) { return obj.startDate; }, set: function (obj, value) { obj.startDate = value; } }, metadata: _metadata }, _startDate_initializers, _startDate_extraInitializers);
            __esDecorate(null, null, _endDate_decorators, { kind: "field", name: "endDate", static: false, private: false, access: { has: function (obj) { return "endDate" in obj; }, get: function (obj) { return obj.endDate; }, set: function (obj, value) { obj.endDate = value; } }, metadata: _metadata }, _endDate_initializers, _endDate_extraInitializers);
            __esDecorate(null, null, _current_decorators, { kind: "field", name: "current", static: false, private: false, access: { has: function (obj) { return "current" in obj; }, get: function (obj) { return obj.current; }, set: function (obj, value) { obj.current = value; } }, metadata: _metadata }, _current_initializers, _current_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateEducationDto = CreateEducationDto;
