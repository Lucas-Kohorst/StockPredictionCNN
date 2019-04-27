/**
 * Function to get the stocks from IEX finnance
 */
window.onload = function getRepo() {

    $.getJSON("https://api.iextrading.com/1.0/ref-data/symbols", function(json) {
        createTable(json);
    });

}

/** 
 * Function to add a table 
 * @param json the JSON file iterating over.
 */
function createTable(json) {
    var myTableDiv = document.getElementById("stock-table");

    var table = document.createElement('table');
    table.className = 'table table-hover';
    table.id = 'myTable';

    var tableHead = document.createElement('thead');
    table.appendChild(tableHead);

    var tr = document.createElement('tr');
    tableHead.appendChild(tr);

    var th = document.createElement('th');
    th.scope = 'col';
    th.appendChild(document.createTextNode("Company"));
    tr.appendChild(th);
    var th = document.createElement('th');
    th.scope = 'col';
    th.appendChild(document.createTextNode("Symbol"));
    tr.appendChild(th);

    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    for (var i = 0; i < json.length; i++) {
        var tr = document.createElement('tr');
        var rowId = 'table-row-' + i;
        tr.id = rowId;

        tableBody.appendChild(tr);

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(json[i].name));
        tr.appendChild(td);

        var td = document.createElement('td');
        td.id = "symbol-" + i;
        td.appendChild(document.createTextNode(json[i].symbol));
        tr.appendChild(td);
    }
    myTableDiv.appendChild(table);

    for (var j = 0; j < json.length; j++) {
        (function(j) {
            // Adding action listeners for link redirect
            document.getElementById('table-row-' + j).addEventListener("click", function() {
                document.getElementById('company').value = json[j].symbol;
                document.getElementById('getCompany').click();
            }, false);
        }(j));
    }
}

/**
 * Function to filter the table
 */
function filterTable() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("company");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}