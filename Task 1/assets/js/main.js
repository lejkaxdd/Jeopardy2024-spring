let btns = document.getElementsByClassName("btn");

for (let i=0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        let buttonStyle = getComputedStyle(this);
        let buttonBgColor = buttonStyle["backgroundColor"];

        if (String(buttonBgColor) == "rgba(128, 37, 198, 0.8)") {
            let token = ("../assets/css/main.css")
            document.getElementById("purpule").style.display = 'block';
            document.getElementById("red").style.display = 'none';
            document.getElementById("green").style.display = 'none';

        }
        else if (String(buttonBgColor) == "rgba(0, 128, 0, 0.8)"){
            document.getElementById("green").style.display = 'block';
            document.getElementById("red").style.display = 'none';
            document.getElementById("purpule").style.display = 'none';
        }
        else {
            document.getElementById("purpule").style.display = 'none';
            document.getElementById("red").style.display = 'block';
            document.getElementById("green").style.display = 'none';
        }
        
    });
}