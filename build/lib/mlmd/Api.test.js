"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Api_1 = require("./Api");
var __1 = require("..");
describe('Api', function () {
    it('Returns a singleton instance', function () {
        var api = Api_1.Api.getInstance();
        expect(api).toBeInstanceOf(Api_1.Api);
        expect(api.metadataStoreService).toBeInstanceOf(__1.MetadataStoreServicePromiseClient);
        expect(api).toBe(Api_1.Api.getInstance());
    });
});
//# sourceMappingURL=Api.test.js.map