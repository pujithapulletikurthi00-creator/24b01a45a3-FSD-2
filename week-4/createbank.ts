class BankAccount {

    public accountHolder: string;
    private balance: number;

    constructor(name: string, initialBalance: number) {
        this.accountHolder = name;
        this.balance = initialBalance;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log("₹" + amount + " deposited successfully.");
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    public withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient Balance.");
        } else {
            this.balance -= amount;
            console.log("₹" + amount + " withdrawn successfully.");
        }
    }

    public displayBalance(): void {
        console.log("Account Holder: " + this.accountHolder);
        console.log("Available Balance: ₹" + this.balance);
    }
}

let name = prompt("Enter Account Holder Name:") || "";
let balance = Number(prompt("Enter Initial Balance:"));

let account = new BankAccount(name, balance);

account.displayBalance();

let depositAmount = Number(prompt("Enter Deposit Amount:"));
account.deposit(depositAmount);

let withdrawAmount = Number(prompt("Enter Withdraw Amount:"));
account.withdraw(withdrawAmount);

account.displayBalance();
