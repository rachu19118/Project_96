function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          like:0,
          message:msg,
          name:user_name
    });
    document.getElementById("msg").value="";
}