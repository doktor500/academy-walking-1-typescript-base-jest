import { SystemClock } from "../main/account";

describe("Clock returns current date", () => {
    it("when get current date method is envoked", () => {
        const clock = new SystemClock();

        expect(clock.getCurrentDate()).toEqual('19/03/2021');
    });
});
