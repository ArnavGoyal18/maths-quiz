function login(){
    var player1=document.getElementById("player_1").value;
    var player2=document.getElementById("player_2").value;
    localStorage.setItem("player1_name",player1 );
    localStorage.setItem("player2_name",player2 );
window.location="quiz_game_page.html";
}