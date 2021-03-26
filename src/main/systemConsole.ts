interface Console {
    format(transactions: Array<string>): string;
}

export class SystemConsole implements Console {
    private lines: string = "";

    format(transactions: Array<string>): string {
        this.lines = "Date       || Amount || Balance\n" + transactions.join("\n");
        return this.lines;
    }

    getLines() {
        return this.lines;
    }
}

interface Vault {
    getTransactions(): Array<string>;
}

export class TransactionsVault implements Vault {
    getTransactions(): Array<string> {
        return [
            "14/01/2012 || -500   || 2500",
            "13/01/2012 || 2000   || 3000",
            "10/01/2012 || 1000   || 1000"
        ]
    }
}

export class BankAccount {
    private readonly vault: Vault;
    private readonly console: Console;

    constructor(vault: Vault, console: Console) {
        this.vault = vault;
        this.console = console;
    }

    deposit(number: number) {

    }

    withdraw(number: number) {

    }

    printStatement() {
        const transactions = this.vault.getTransactions()
        this.console.format(transactions);
    }
}
