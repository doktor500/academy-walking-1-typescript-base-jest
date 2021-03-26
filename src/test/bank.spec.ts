import { BankAccount, SystemConsole, TransactionsVault } from "../main/systemConsole";

describe("Bank account", () => {
    describe("given a customer uses this account", () => {
        const vault = new TransactionsVault();
        const console = new SystemConsole();
        const bankAccount = new BankAccount(vault, console);

        describe("when the customer asks for the bank statements", () => {
            bankAccount.deposit(1000);
            bankAccount.deposit(2000);
            bankAccount.withdraw(500);

            it("transactions should be reported", () => {
                bankAccount.printStatement();

                const expectedStatement =
                    "Date       || Amount || Balance\n" +
                    "14/01/2012 || -500   || 2500\n" +
                    "13/01/2012 || 2000   || 3000\n" +
                    "10/01/2012 || 1000   || 1000";

                expect(console.getLines()).toEqual(expectedStatement);
            });
        });
    });
});
