let user={
            name:"surya",
            dept:"aiml",
            city:"Bengaluru"

        }
        console.log(Object.keys(user));
        console.log(Object.values(user));
        console.log(Object.entries(user));
        console.table(user)
        
function CreateBankAccount(){
            let balance=0
            return {
                deposit:function(amount){
                    if(amount<=0){
                        alert("Invalid amount");
                    }else{
                        balance=amount+balance
                        console.log(`Deposited amount:${amount},New balance:${balance}`);
                        
                    }
                },
                withdraw:function(amount){
                        if(amount<=0){
                        console.log('Invalid amount');  
                }else if(amount>balance){
                    console.log("Insufficient balance");    
                }else{
                    balance=balance-amount
                    console.log(`withdraw:${amount},Current Balance:${balance}`);
                }
            }
        }
    }
let Surya=CreateBankAccount()
Surya.deposit(10000)
Surya.deposit(1500)
Surya.withdraw(500)
Surya.withdraw(1000)