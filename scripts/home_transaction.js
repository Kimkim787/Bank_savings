document.addEventListener("DOMContentLoaded", function(){
    show_table_data();
});

function show_table_data(){
    let data = start_local_storage();
    const table_data_container = document.getElementById("table_data");
    let tableContent = '';
    
    for(let i = 0; i < data.length; i++){
        let type;
        let operation;
        if(data[i].type == 1){
            type = "Deposit";
            operation = "+"
        }
        else if(data[i].type == 2){
            type = "Withdraw";
            operation = "-"
        }
        else{
            type = "None";
            operation=""
        }
        
        tableContent += `
        <tr>
        <td>${data[i].date}</td>
        <td>&#8369;${data[i].balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        <td>${type}</td>
        <td>${operation}&#8369;${data[i].value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        </tr>`;
    }
    
    table_data_container.innerHTML = tableContent;
    const container = document.getElementById("table")
    container.scrollTop = container.scrollHeight
}

function start_local_storage(){
    let data = localStorage.getItem("Bank_Savings_Data");
    if(!data){
        let formattedDate = get_current_date();
        const default_value = [{date: formattedDate, balance: 0.00, value: 0.0, type: 0}];

        localStorage.setItem("Bank_Savings_Data", JSON.stringify(default_value));
        data = JSON.stringify(default_value);
    }
    return JSON.parse(data);
}
