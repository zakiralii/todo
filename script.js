let serial = 0;

function addTask() {

    let textfield = document.getElementById("field").value

    let table_body = document.querySelector("tbody")

    serial+=1    
    table_body.innerHTML += `<tr id=${serial}>
        <td>${serial}</td>
        <td>${textfield}</td>
        <td>${new Date().toLocaleString()}</td>
        <td>
            <img src="./delete.png" class="icon" onclick="deleteTodo(${serial})" />
            <img src="./done.png" class="icon" onclick="markAsDone(${serial})"/>

        </td>
    </tr>`;
    // Numbers data types, where x and y are variables. 5 and 10 are values. let is keyword. 
    // let x = 98
    // let y = 10    
    // let sum = x+y

}

function markAsDone(id){
    let row = document.getElementById(id)
    if(row){
        row.style.backgroundColor="#76c893"
    }
}
function deleteTodo(id){

    let row = document.getElementById(id)
    if(row){
        row.remove();
    }

}