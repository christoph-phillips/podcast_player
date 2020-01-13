import { humanReadableTime, next, prev } from "./index";

const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

describe("Utils", () => {
  it("humanReadableTime", () => {
    expect(humanReadableTime(65000)).toEqual({ minutes: "1", seconds: "05" });
  });
  it("next returns the next item in the array", () => {
    expect(next(list, 1).id).toEqual(2);
  });
  it("if last item in array, next returns first item", () => {
    expect(next(list, 4).id).toEqual(1);
  });
  it("prev returns the previous item in the array", () => {
    expect(prev(list, 2).id).toEqual(1);
  });
  it("if last item in array, prev returns last item", () => {
    expect(prev(list, 1).id).toEqual(4);
  });
});
