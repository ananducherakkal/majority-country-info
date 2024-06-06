import { describe, it, expect } from "vitest";
import { daysToSeconds, daysToMilliseconds } from "../time";

describe("daysToSeconds", () => {
  describe("when passed with 1", () => {
    it("should return with 86400", () => {
      expect(daysToSeconds(1)).toBe(86400);
    });
  });
});

describe("daysToMilliseconds", () => {
  describe("when passed with 1", () => {
    it("should return with 86400000", () => {
      expect(daysToMilliseconds(1)).toBe(86400000);
    });
  });
});
