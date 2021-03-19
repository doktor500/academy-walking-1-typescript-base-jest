import { BankAccount, Clock, Console } from "../main/account";
import { mock } from "jest-mock-extended";

describe("Account", () => {
    it("prints account transaction history", () => {
        const clock = mock<Clock>();
        const console = mock<Console>();
        const account = new BankAccount(clock, console);
        clock.getCurrentDate.mockReturnValueOnce("10/01/2012").mockReturnValueOnce("13/01/2012");

        account.deposit(1000);
        account.deposit(2000);

        account.printStatement();

        expect(console.print).toHaveBeenCalledWith("Date || Amount || Balance");
        expect(console.print).toHaveBeenCalledWith("10/01/2012 || 1000 || 1000");
        expect(console.print).toHaveBeenCalledWith("13/01/2012 || 2000 || 3000");
    });
});
