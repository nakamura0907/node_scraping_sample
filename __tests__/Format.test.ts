import Format from "../lib/Format";

const obj = [
  {
    id: 1,
    name: "hoge",
  },
  {
    id: 2,
    name: "huga",
  },
  {
    id: 3,
    name: "piyo",
  },
];
const s = new Format(obj);

describe("Format Class", () => {
  describe("toJson Method", () => {
    it("toJson", () => {
      expect((s as any).toJson()).toBe(JSON.stringify(obj));
    });
  });
});
