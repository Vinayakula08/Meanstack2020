function addRow() {
          
    var myName = document.getElementById("name");
    var myAge = document.getElementById("age");
    var myGender = document.getElementById("gender");
    var myBranch = document.getElementById("branch");
    var mySection = document.getElementById("section");
    var myMarks = document.getElementById("marks");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= myName.value;
    row.insertCell(2).innerHTML= myAge.value;
    row.insertCell(3).innerHTML= myGender.value;
    row.insertCell(4).innerHTML= myBranch.value;
    row.insertCell(5).innerHTML= mySection.value;
    row.insertCell(6).innerHTML= myMarks.value;
 
}

 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}


   