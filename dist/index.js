var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DefaultModule: () => DefaultModule,
  DefaultService: () => DefaultService
});
module.exports = __toCommonJS(src_exports);

// src/default/default.module.ts
var import_common2 = require("@nestjs/common");

// src/default/default.service.ts
var import_common = require("@nestjs/common");
var DefaultService = class {
};
DefaultService = __decorateClass([
  (0, import_common.Injectable)()
], DefaultService);

// src/default/default.module.ts
var DefaultModule = class {
};
DefaultModule = __decorateClass([
  (0, import_common2.Module)({
    providers: [DefaultService]
  })
], DefaultModule);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultModule,
  DefaultService
});
