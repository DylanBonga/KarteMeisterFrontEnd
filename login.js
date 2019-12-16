


function getLogin(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var rowObj = [username,password];
  console.log(rowObj);
  if(nullCheckRow(rowObj)) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 202) {
        console.log("XMLHttpRequest started..");
      }
    }
    xhttp.open("POST", "http://localhost:8084/"+username); //+api?
  	xhttp.setRequestHeader("Content-type", "application/json");
  	xhttp.send(JSON.stringify(rowObj));
  }
}

function nullCheckRow(obj){
  if(Boolean(obj.username) && Boolean(obj.password) ){
    return true;
  }
}
