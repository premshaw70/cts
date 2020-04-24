var students = [];
var counter=1;
var selectedRow=null;
function addStudents() {
    var student = {};
    student.counter=counter;
    student.id = document.getElementById("id").value;
    student.firstName = document.getElementById("firstName").value;
    student.lastName = document.getElementById("lastName").value;
    student.email = document.getElementById("email").value;


    var table = document.getElementById("studentsTable").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);


    var idCell = row.insertCell(0);
    var idFirstName = row.insertCell(1);
    var idLastName = row.insertCell(2);
    var idEmail = row.insertCell(3);
    var idBtn1 = row.insertCell(4)
    var idBtn2 = row.insertCell(5)

    idCell.innerText = student.id;
    idFirstName.innerText = student.firstName;
    idLastName.innerText = student.lastName;
    idEmail.innerText = student.email;
    idBtn1.innerHTML = idBtn1.innerHTML + '<button type="button" class="btn btn-success" onclick="updateStudents(this)">edit</button>'
    idBtn2.innerHTML = idBtn2.innerHTML + '<button type="button" class="btn btn-danger" onclick="deleteStudents(this)">delete</button>'

    students.push(student)
;
    counter++;
   // console.log(counter);
   //reset();
}

function updateStudents(td) {
    selectedRow=td.parentElement.parentElement;
    document.getElementById("custom").disabled=false;
    document.getElementById("id").value=selectedRow.cells[0].innerHTML;
    document.getElementById("firstName").value=selectedRow.cells[1].innerHTML;
    document.getElementById("lastName").value=selectedRow.cells[2].innerHTML;
    document.getElementById("email").value=selectedRow.cells[3].innerHTML;
    
 }

 function updateRecord(){
    selectedRow.cells[0].innerHTML=document.getElementById("id").value;
    selectedRow.cells[1].innerHTML=document.getElementById("firstName").value;
    selectedRow.cells[2].innerHTML=document.getElementById("lastName").value;
    selectedRow.cells[3].innerHTML=document.getElementById("email").value;
    document.getElementById("custom").disabled=true;
 }
 function deleteStudents(td){
     if(confirm('sure about delete the data?')){
    row=td.parentElement.parentElement;
    document.getElementById("studentsTable").deleteRow(row.rowIndex);
     }
 }
 function reset(){
    document.getElementById("id").value=""
    document.getElementById("firstName").value=""
    document.getElementById("lastName").value=""
    document.getElementById("email").value=""
 }
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentsTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];  //all datas
        tdd = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            txtValue2 = tdd.textContent || tdd.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function checkNum() {
    let num = document.getElementById("id").value;
    
    if (isNaN(num))
        alert("Please enter only numbers in ID field");
}
function checkFirstName() {
    let fname = document.getElementById("firstName").value;
    var matches = fname.match(/\d+/g);
    if (matches != null)
        alert("Please enter only alphabets in First Name field");
}

function checkLastName() {
    let lname = document.getElementById("lastName").value;
    var matches = lname.match(/\d+/g);
    if (matches != null)
        alert("Please enter only alphabets in Last Name field");
}

function checkEmail() {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(document.getElementById("email").value) != true)
        alert("Email format is wrong");
}