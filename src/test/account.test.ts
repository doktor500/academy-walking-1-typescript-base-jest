import { BankAccount, Clock, Console } from "../main/account";
import { mock } from "jest-mock-extended";

describe("Account", () => {
    it("prints account transaction history", () => {
        const clock = mock<Clock>();
        const console = mock<Console>();
        const account = new BankAccount(clock, console);
        clock.getCurrentDate
        .mockReturnValueOnce("10/01/2012")
        .mockReturnValueOnce("13/01/2012")
        .mockReturnValueOnce("14/01/2012");

        account.deposit(1000);
        account.deposit(2000);
        account.withdraw(500);

        account.printStatement();

        expect(console.print).toHaveBeenNthCalledWith(1, "Date || Amount || Balance");
        expect(console.print).toHaveBeenNthCalledWith(2, "10/01/2012 || 1000 || 1000");
        expect(console.print).toHaveBeenNthCalledWith(3, "13/01/2012 || 2000 || 3000");
        expect(console.print).toHaveBeenNthCalledWith(4, "14/01/2012 || -500 || 2500");
    });
});
