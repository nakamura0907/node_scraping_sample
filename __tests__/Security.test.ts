import Security from "../lib/Security";

const s1 = new Security("https://123.456.jp/");
const s2 = new Security("false");
const s3 = new Security("http://nakamura0907.html.xdomain.jp/");
const s4 = new Security("http://nakamura0907.html.xdomain.jp/test");

describe("Security Class", () => {
  describe("public method check", () => {
    it("s1 expected false", () => {
      expect(s1.check()).toBeFalsy();
    });
    it("s2 expected false", () => {
      expect(s2.check()).toBeFalsy();
    });
    it("s3 expected true", () => {
      expect(s3.check()).toBeTruthy();
    });
    it("s4 expected true", () => {
      expect(s4.check()).toBeTruthy();
    });
  });

  describe("checkFormat Method", () => {
    it("s1 expected true", () => {
      expect((s1 as any).checkFormat()).toBeTruthy();
    });
    it("s2 expected false", () => {
      expect((s2 as any).checkFormat()).toBeFalsy();
    });
    it("s3 expected true", () => {
      expect((s3 as any).checkFormat()).toBeTruthy();
    });
    it("s4 expected true", () => {
      expect((s4 as any).checkFormat()).toBeTruthy();
    });
  });

  describe("checkWhitelist Method", () => {
    it("s1 expected false", () => {
      expect((s1 as any).checkWhitelist()).toBeFalsy();
    });
    it("s2 expected false", () => {
      expect((s2 as any).checkWhitelist()).toBeFalsy();
    });
    it("s3 expected true", () => {
      expect((s3 as any).checkWhitelist()).toBeTruthy();
    });
    it("s4 expected true", () => {
      expect((s4 as any).checkWhitelist()).toBeTruthy();
    });
  });
});
