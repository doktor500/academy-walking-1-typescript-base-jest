interface Account {
    deposit(amount: number): void;
    withdraw(amount: number): void;
    printStatement(): void;
}

const HEADER = "Date || Amount || Balance";

class Transaction {
    readonly date: string;
    readonly amount: number;

    constructor(date: string, amount: number) {
        this.date = date;
        this.amount = amount;
    }
}

export class BankAccount implements Account {
    readonly clock: Clock;
    readonly console: Console;
    readonly transactions: Transaction[] = [];

    constructor(clock: Clock, console: Console) {
        this.clock = clock;
        this.console = console;
    }

    deposit(amount: number): void {
        this.transactions.push(new Transaction(this.clock.getCurrentDate(), amount));
    }

    withdraw(amount: number): void {
        throw new Error("Not implemented");
    }

    printStatement(): void {
        this.console.print(HEADER);
        this.transactions.forEach(transaction => {
            this.console.print(`${transaction.date} || ${transaction.amount} || 1000`);
        })
    }
}

export interface Clock {
    getCurrentDate(): string;
}

export interface Console {
    print(line: string): void;
}

export class SystemConsole implements Console {
    print(line: string): void {
        throw new Error("Not implemented");
    }
}
