
// alert("Welcome to our bank ATM");
// alert("Insert the card");

// let balance = 10000;

// let card = prompt("Enter 1.Yes 2.No");

// if (card === "1") {
//     let pin = prompt("Enter your PIN");

//     if (pin === "1234") {
//         let language = prompt("Select language: 1.English 2.Kannada 3.Hindi");

//         if (language === "1") {
//             let choice = prompt("Choose: 1.Balance Enquiry 2.Withdraw Amount");

//             if (choice === "1") {
//                 alert("Your balance is " + balance);
//             } 
//             else if (choice === "2") {
//                 let amt = parseInt(prompt("Enter amount to withdraw"));

//                 if (amt <= balance) {
//                     alert("Your transaction is under process...");

//                     setTimeout(() => {

//                         if (amt % 100 === 0) {
//                             alert("Please collect your cash");

//                             setTimeout(() => {
//                                 let choice2 = prompt("Enter 1.Check Balance 2.No");

//                                 if (choice2 === "1") {
//                                     alert("Your balance is " + (balance - amt));
//                                 } else {
//                                     alert("Visit again Thank you!");
//                                 }

//                             }, 2000);

//                         } else {
//                             alert("Enter amount in multiples of 100");
//                         }

//                     }, 2000);

//                 } else {
//                     alert("Insufficient Balance");
//                 }
//             } 
//             else {
//                 alert("Incorrect choice");
//             }
//         } 
//         else {
//             alert("Please select English only");
//         }
//     } 
//     else {
//         alert("Enter correct PIN");
//     }
// } 
// else {
//     alert("Please insert card");
// }


alert("Welcome to our bank ATM");
alert("Insert the card");

let balance = 10000;
let card=prompt("insert u r card 1 ,if not 2")
        if(card=="1"){
        let lang=prompt("enter our language 1.english 2. kannada 3.hindi ")
                if(lang==1){
                    let choice=prompt("enter your choice 1.balance enquiry 2.withdraw amount")
                    if(choice==1){
                        alert("your balance is "+balance)
                    }
                    else if(choice==2){
                        let amt=parseInt(prompt("enter the amount to withdraw"))
                        if(amt<=balance){
                            alert("your transaction is under process")
                            setTimeout(()=>{
                                if(amt%100==0){
                                    alert("please collect your cash")
                                    setTimeout(()=>{
                                        let choice2=prompt("enter 1.check balance 2.no")
                                        if(choice2==1){
                                            alert("your balance is "+(balance-amt))
                                        }
                                        else{
                                            alert("visit again thank you")
                                        }
                                    },2000)
                                }
                                else{
                                    alert("enter the amount in multiples of 100")
                                }
                            },2000)
                        }else{
                            alert("insufficient balance")   
                        }
                    }   
                    else{
                        alert("incorrect choice")
                    }
                }
                else{
                    alert("please select english only")
        }
            
        }
        else{
            alert("Please insert card")
        }