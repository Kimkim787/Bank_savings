document.addEventListener("DOMContentLoaded", function(){
    set_display()
    deposit_withdraw()
})
let state = false;
function deposit_withdraw(){
    const deposit_button = document.getElementById("deposit");
    deposit_button.addEventListener("click", function(){
        let amount = parseFloat(prompt("Enter the amount to deposit: "))
        if(amount){
            add_value(amount, 1)
            set_display()
        }
    })
    const withdraw_button = document.getElementById("withdraw");
    withdraw_button.addEventListener("click", function(){
        let amount = parseFloat(prompt("Enter the amount to withdraw: "))
        if(amount){
            add_value(amount, 2)
            set_display()
        }
    })
}
function set_display() {
    const amount_label = document.getElementById("amount");
    let data = start_local_storage();
    amount_label.textContent = data[data.length - 1].balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log(data);
}

function get_current_date(){
    let  currentDate = new Date()
    let  day = currentDate.getDate();
    let  month = currentDate.getMonth() + 1; // Note: months are zero-based
    let  year = currentDate.getFullYear()
    let  formattedDate = month + '-' + day + '-' + year;
    return formattedDate
}
function start_local_storage(){
    let data = localStorage.getItem("Bank_Savings_Data");
    if(!data){
        let formattedDate = get_current_date()
        const default_value = [{date: formattedDate, balance: 0.00, value: 0.0, type: 0}]

        localStorage.setItem("Bank_Savings_Data", JSON.stringify(default_value))
        data = JSON.stringify(default_value)
    }
    return JSON.parse(data)
}
function add_value(value, type){
    let data = start_local_storage();
    let date = get_current_date()
    let balance = undefined
    if(type === 1){
        balance = (data[data.length - 1].balance)+value; 
    }
    else if(type === 2){
        balance = (data[data.length - 1].balance)-value;
    }

    data.push({date: date, balance: balance, value: value, type: type})
    localStorage.setItem("Bank_Savings_Data", JSON.stringify(data))
}
function hide_value(){
    console.log(state)
    const hide = document.getElementById("hide")
    if(state){
        hide.style.backgroundImage = 'url("../images/eye_open.svg")';
        set_display()
    }
    else{
        hide.style.backgroundImage = 'url("../images/eye_closed.svg")';
        const amount_label = document.getElementById("amount");
        amount_label.textContent ="**.**";
    }
    state = !state
}