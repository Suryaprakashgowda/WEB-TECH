function door(){
    let i=0
    while(i<=3){
        let passwd=prompt("enter a password")
        if(passwd==1234){
            confirm("Door opened successfully")
            break;
        }else if(i==3){
            alert("system block")
        }else{
            alert("invalid password")
        }
        i++;
    }
    
}
let password=1234
let attempts=0
function door2(){
    let user=prompt("enter a password")
    if(user==password){
        confirm("Door opened successfully")
    }else if(user!=password && attempts<=2){
        alert("invalid password")
        attempts++
        door2()
    }
    else{
        alert("system block")
    }
}