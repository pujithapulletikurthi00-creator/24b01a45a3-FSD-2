class DigitalWallet {

    // PUBLIC: Visible everywhere
    public holderName: string;

    // PRIVATE: Accessible only inside this class
    private balance: number;
    private secretPin: number;

    // PROTECTED: Accessible inside this class and child classes
    protected loyaltyPoints: number = 0;

    constructor(name: string, initialDeposit: number, pin: number) {
        this.holderName = name;
        this.balance = initialDeposit;
        this.secretPin = pin;
    }

    // Deposit money
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.loyaltyPoints += Math.floor(amount / 100);
            console.log(`₹${amount} deposited successfully.`);
        }
    }

    // Withdraw money
    public withdraw(amount: number, pin: number): void {

        if (pin !== this.secretPin) {
            console.log("Incorrect PIN!");
            return;
        }

        if (amount > this.balance) {
            console.log("Insufficient Balance!");
            return;
        }

        this.balance -= amount;
        console.log(`₹${amount} withdrawn successfully.`);
    }

    // View Balance
    public checkBalance(pin: number): void {

        if (pin === this.secretPin) {
            console.log(`Available Balance: ₹${this.balance}`);
        } else {
            console.log("Incorrect PIN!");
        }
    }

    // Wallet Details
    public showWalletDetails(): void {
        console.log("---- Wallet Details ----");
        console.log(`Holder Name: ${this.holderName}`);
        console.log(`Loyalty Points: ${this.loyaltyPoints}`);
        console.log("------------------------");
    }
}

// Using the class

const wallet = new DigitalWallet("Rahul", 5000, 1234);

wallet.showWalletDetails();

wallet.deposit(2000);

wallet.checkBalance(1234);

wallet.withdraw(1000, 1234);

wallet.checkBalance(1234);
