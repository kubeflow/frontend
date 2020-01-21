import {Api} from './Api';
import {MetadataStoreServicePromiseClient} from "..";

describe('Api', () => {
  it('Returns a singleton instance', () => {
    const api = Api.getInstance();
    expect(api).toBeInstanceOf(Api);
    expect(api.metadataStoreService).toBeInstanceOf(MetadataStoreServicePromiseClient);
    expect(api).toBe(Api.getInstance());
  });
});
