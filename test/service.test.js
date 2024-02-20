import "../src/types.js";
import { describe, it } from "node:test";
import assert from 'node:assert';

import { parseUser } from "../src/service.js";

describe("Service", () => {
  it("should parse user", () => {
    /** @type {IncomingUser} */
    const user = {
      email: "test@test.com",
      name: "test",
      password: "123123",
    };

    const result = parseUser(user);
    assert.deepStrictEqual(result, {
        email: user.email,
        name: user.name.toUpperCase(),
    })
  });
});
