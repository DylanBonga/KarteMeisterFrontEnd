
function veranderTabel(){

  var eerste = document.getElementById("cell1");
  eerste.innerHTML = "boioioioi";


  // var xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function(){
  //   if(this.readyState>=3){
  //     //alert("In xhr"+this.readyState+this.responseText);
  //     var jojo = JSON.parse(this.responseText)
  //     console.log(jojo)
  //     document.getElementById("bijnaEinde").innerHTML = jojo.id;
  //     document.getElementById("einde").innerHTML = jojo.kleur;
  //   }
  //
  // }
  // xhr.open("GET", "http://localhost:8082/hoi", true);
  // xhr.send();
}

function funXML(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(this.readyState==4){
      alert("In xhr "+this.readyState+this.responseText);
      var parseInput = JSON.parse(this.responseText);
      console.log(parseInput);
    }
    xhr.open("GET", "http://localhost:8082/hoi", true);
    xhr.send();
  }
}


function sendXML(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 202) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "http://localhost:8082/"+api, true); //+api?
	//xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(data);
}

function addRow(row1){
  var row = document.createElement("TR");
  var id = document.createElement("TD");
  var name = document.createElement("TD");
  var location = document.createElement("TD");
  var date = document.createElement("TD");
  var time = document.createElement("TD");
  var descr = document.createElement("TD");

  var obj = JSON.parse(row1);
  id.innerHTML = obj.id;
  name.innerHTML = obj.naam;
  location.innerHTML = obj.locatie;
  date.innerHTML = obj.datum;
  time.innerHTML = obj.tijd;
  descr.innerHTML = obj.beschrijving;

  row.appendChild(id);
  row.appendChild(name);
  row.appendChild(location);
  row.appendChild(date);
  row.appendChild(time);
  row.appendChild(descr);

  var tabel = document.getElementById("table1");
  tabel.appendChild(row);
}

function giveRow(){
  var row1 = '{"id":"01", "naam":"ZZ Top", "locatie":"Ziggo Dome", "datum":"24 juni", "tijd":"13:00", "beschrijving":"Puik feestje, bijzijn is meemaken"}';
  return row1;
}

function setId(){

  return id;
}



function makeRow(){
  var id = makeJSONstring("id",document.getElementById("idQ").value);
  var name = makeJSONstring("naam",document.getElementById("naamQ").value);
  var location = makeJSONstring("locatie",document.getElementById("locatieQ").value);
  var date = makeJSONstring("datum",document.getElementById("datumQ").value);
  var time = makeJSONstring("tijd",document.getElementById("tijdQ").value);
  var descr = makeJSONstring("beschrijving", document.getElementById("BeschrijvingQ").value);
  var newJSONrow = createJSON([id,name,location,date,time,descr]);
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
