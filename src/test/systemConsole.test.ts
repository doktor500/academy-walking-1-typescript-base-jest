import { Formatter } from "../main/bank";

describe("Formatter", () => {
    it("Get Lines return the correct statement joined with new lines", () => {
        const formatter = new Formatter();
        const testTransaction = {
            date: '01/01/2000',
            amount: 500,
            balance: 4000
        }
        const transactions = [testTransaction]
        formatter.format(transactions);
        expect(formatter.getFormattedLines()).toEqual('Date       || Amount || Balance\n01/01/2000 || 500 || 4000');
    });
});
