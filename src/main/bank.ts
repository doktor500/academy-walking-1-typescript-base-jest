interface Console {
    format(transactions: Array<Transaction>): string;
}

interface Transaction {
    date: string,
    amount: number,
    balance: number
}

export class Formatter implements Console {
    private formatted_lines: string = ''

    format(transactions: Array<Transaction>) : string {
        this.formatted_lines = "Date       || Amount || Balance\n" + transactions.map((transaction) => {
            return transaction.date + ' || ' + transaction.amount + ' || ' + transaction.balance
        }).join('\n')
        return this.formatted_lines
    }

    getFormattedLines() : string {
        return this.formatted_lines
    }
}

interface Vault {
    getTransactions(): Array<Transaction>;
}

export class TransactionsVault implements Vault {
    getTransactions(): Array<Transaction> {
        return [
            {
                date: '14/01/2012',
                amount: -500,
                balance: 2500
            },
            {
                date: '13/01/2012',
                amount: 2000,
                balance: 3000
            },
            {
                date: '10/01/2012',
                amount: 1000,
                balance: 1000
            },
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
