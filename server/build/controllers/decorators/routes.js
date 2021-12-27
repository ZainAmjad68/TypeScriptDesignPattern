"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.put = exports.del = exports.post = exports.get = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
var Methods_1 = require("./Methods");
function RouteBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = RouteBinder(Methods_1.Methods.get);
exports.post = RouteBinder(Methods_1.Methods.post);
exports.del = RouteBinder(Methods_1.Methods.del);
exports.put = RouteBinder(Methods_1.Methods.put);
exports.patch = RouteBinder(Methods_1.Methods.patch);
