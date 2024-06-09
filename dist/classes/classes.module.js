"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const classes_service_1 = require("./classes.service");
const classes_controller_1 = require("./classes.controller");
const class_schema_1 = require("./schemas/class.schema");
let ClassModule = class ClassModule {
};
exports.ClassModule = ClassModule;
exports.ClassModule = ClassModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: class_schema_1.Class.name, schema: class_schema_1.ClassSchema }])],
        providers: [classes_service_1.ClassService],
        controllers: [classes_controller_1.ClassController],
    })
], ClassModule);
//# sourceMappingURL=classes.module.js.map