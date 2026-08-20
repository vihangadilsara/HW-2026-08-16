

let customerList = [];

function btnAddCustomerOnAction(){
    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;

    let customer={
        name:txtName,
        address:txtAddress,
        age:txtAge,
        email:txtEmail,
        salary:txtSalary
    }

    customerList.push(customer);
    loadTable();

    console.log(customerList);
      
}

function loadTable(){
    let tblCustomers = document.getElementById("tblCustomers");

    let body ="";

    for(let i =0; i<customerList.length; i++){
            body+=`<tr>
            <td>${customerList[i].name}</td>
            <td>${customerList[i].address}</td>
            <td>${customerList[i].age}</td>
            <td>${customerList[i].email}</td>
            <td>${customerList[i].salary}</td>
        </tr>`;
    }

    tblCustomers.innerHTML=body;

    console.log(tblCustomers);
    
}


