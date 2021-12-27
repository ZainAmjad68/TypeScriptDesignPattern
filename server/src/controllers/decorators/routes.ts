import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';

interface RouteHandlerDescriptor extends PropertyDescriptor {   // makes sure that any method that doesn't have a req, res arguments can't be binded to out get() decorator
    value?: RequestHandler
}

function RouteBinder(method:string) {
    return function(path: string) {
        return function(target: any, key: string, desc: RouteHandlerDescriptor) {
            Reflect.defineMetadata(MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys.method, method, target, key);
        }
    }
}

export const get = RouteBinder(Methods.get);
export const post = RouteBinder(Methods.post);
export const del = RouteBinder(Methods.del);
export const put = RouteBinder(Methods.put);
export const patch = RouteBinder(Methods.patch);