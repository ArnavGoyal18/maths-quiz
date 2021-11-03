function login(){
    var player1=document.getElementById("player1_name_input");
    var player2=document.getElementById("player2_name_input");
    localStorage.setItem("player1_name",player1 );
    localStorage.setItem("player2_name",player2 );
window.location="quiz_game_page.html";
}