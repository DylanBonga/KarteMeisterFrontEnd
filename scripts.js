
eventArray = [];

function funXML(){
  console.log(eventArray);
  if(document.getElementById("table1").hasChildNodes()){
    removeTable();
  }
  makeTable();

  for(index in eventArray){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(this.readyState==4){
        console.log("XMLHttpRequest started..");
        var parseInput = JSON.parse(this.responseText);

        addRow(parseInput);
      }
    }
    xhr.open("GET", "http://localhost:8084/attraction/"+eventArray[index]+"/", true);
    xhr.send();
  }
}

//hoi
function sendXML(api){
  var rowObj = {};
  rowObj.id = document.getElementById("idQ").value;
  rowObj.location = document.getElementById("locatieQ").value;
  rowObj.dateAndTime = document.getElementById("datumQ_tijdQ").value;
  rowObj.description = document.getElementById("BeschrijvingQ").value;
  rowObj.eventName = document.getElementById("eventNaamQ").value;
  eventArray.push(document.getElementById("eventNaamQ").value)
  if(nullCheckRow(rowObj)) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 202) {
        console.log("XMLHttpRequest started..");
      }
    }
    xhttp.open("POST", "http://localhost:8084/"+api); //+api?
  	xhttp.setRequestHeader("Content-type", "application/json");
    console.log(JSON.stringify(rowObj));

  	xhttp.send(JSON.stringify(rowObj));
  }
}

function nullCheckRow(obj){
  if(Boolean(obj.id) && Boolean(obj.eventName) && Boolean(obj.location) && Boolean(obj.dateAndTime) && Boolean(obj.description) ){
    return true;
  }
}


// function makeRow(){
//   var id = makeJSONstring("id",document.getElementById("idQ").value);
//   var eventName = makeJSONstring("eventName",document.getElementById("naamQ").value);
//   var location = makeJSONstring("location",document.getElementById("locatieQ").value);
//   var dateAndTime = makeJSONstring("dateAndTime",document.getElementById("datumQ_tijdQ").value);
//   var descr = makeJSONstring("description", document.getElementById("BeschrijvingQ").value);
//   var newJSONrow = createJSON([id,eventName,location,dateAndTime,descr]);
//   return newJSONrow;
// }
function removeTable(){
  var tab = document.getElementById("table2");
  tab.remove();
}

function makeTable(){
  var divje = document.getElementById("table1");

  var tab = document.createElement("TABLE")
  var row = document.createElement("TR");
  var id = document.createElement("TH");
  var eventName = document.createElement("TH");
  var location = document.createElement("TH");
  var dateAndTime = document.createElement("TH");
  var description = document.createElement("TH");

  id.innerHTML = "ID";
  eventName.innerHTML = "NAAM";
  location.innerHTML = "LOCATIE";
  dateAndTime.innerHTML = "DATUM EN TIJD";
  description.innerHTML = "BESCHRIJVING";

  row.appendChild(id);
  row.appendChild(eventName);
  row.appendChild(location);
  row.appendChild(dateAndTime);
  row.appendChild(description);
  tab.appendChild(row);

  tab.setAttribute("id", "table2")
  divje.appendChild(tab);

  //return(tab);
}



function addRow(row1){
  var row = document.createElement("TR");
  var id = document.createElement("TD");
  var eventName = document.createElement("TD");
  var location = document.createElement("TD");
  var dateAndTime = document.createElement("TD");
  var description = document.createElement("TD");

  //var obj = JSON.parse(row1);
  id.innerHTML = row1.id;
  eventName.innerHTML = row1.eventName;
  location.innerHTML = row1.location;
  dateAndTime.innerHTML = row1.dateAndTime;
  description.innerHTML = row1.description;

  row.appendChild(id);
  row.appendChild(eventName);
  row.appendChild(location);
  row.appendChild(dateAndTime);
  row.appendChild(description);

  table = document.getElementById("table2");
  table.appendChild(row);
}

function addBRow(row1){
  var row = document.createElement("DIV");

  var id = document.createElement("TD");
  var eventName = document.createElement("TD");
  var location = document.createElement("TD");
  var dateAndTime = document.createElement("TD");
  var description = document.createElement("TD");


  var tabel = document.getElementById("table2");
  tabel.appendChild(row);
}


function giveRow(){
  var row1 = '{"id":"01", "naam":"ZZ Top", "locatie":"Ziggo Dome", "datum en tijd":"13:00", "beschrijving":"Puik feestje, bijzijn is meemaken"}';
  return row1;
}

function makeRow(){
  var id = makeJSONstring("id",document.getElementById("idQ").value);
  var eventName = makeJSONstring("eventName",document.getElementById("eventNaamQ").value);
  var location = makeJSONstring("location",document.getElementById("locatieQ").value);
  var dateAndTime = makeJSONstring("dateAndTime",document.getElementById("datumQ_tijdQ").value);
  var descr = makeJSONstring("description", document.getElementById("BeschrijvingQ").value);
  var newJSONrow = createJSON([id,eventName,location,dateAndTime,descr]);
  return newJSONrow;
}

function makeJSONstring(catString, inString){
  return("\""+catString+"\""+":"+"\""+inString+"\"")
}

function createJSON(row){
  var str = "{";
  for(el in row){
    str = str.concat(row[el], ",");
  }
  var endStr = str.slice(0,((str.length)-1))+"}"
  console.log(endStr);
  return endStr;
}
