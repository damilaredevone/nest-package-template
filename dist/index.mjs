var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/default/default.module.ts
import { Module } from "@nestjs/common";

// src/default/default.service.ts
import { Injectable } from "@nestjs/common";
var DefaultService = class {
};
DefaultService = __decorateClass([
  Injectable()
], DefaultService);

// src/default/default.module.ts
var DefaultModule = class {
};
DefaultModule = __decorateClass([
  Module({
    providers: [DefaultService]
  })
], DefaultModule);
export {
  DefaultModule,
  DefaultService
};
