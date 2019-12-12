
function funXML(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(this.readyState==4){
      alert("In xhr "+this.readyState+this.responseText);
      var parseInput = JSON.parse(this.responseText);
      console.log(parseInput);
      addRow(parseInput);
    }
  }
  xhr.open("GET", "http://localhost:8084/attraction", true);
  xhr.send();



}

//hoi
function sendXML(api){
  var rowObj = {};
  rowObj.id = document.getElementById("idQ").value;
  rowObj.eventName = document.getElementById("eventNaamQ").value;
  rowObj.location = document.getElementById("locatieQ").value;
  rowObj.dateAndTime = document.getElementById("datumQ_tijdQ").value;
  rowObj.description = document.getElementById("BeschrijvingQ").value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 202) {
      document.getElementById("veranderen").innerHTML = "bobbedieboob";
    }
  }
  xhttp.open("POST", "http://localhost:8082/"+api, true); //+api?
	xhttp.setRequestHeader("Content-type", "application/json");
  console.log(rowObj);
	xhttp.send(rowObj);
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

  var tabel = document.getElementById("table1");
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
