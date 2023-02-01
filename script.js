let count = 0;
let margin = document.querySelector(".s1").style.marginLeft;
let pause = false;

slideShow();
ifSelected();





function slideShow() {
    count = count + 1;
    setInterval(function () {

        if (count == 4) {
            margin = "25%";
            count = 0;
            document.querySelector(".s1").style.marginLeft = margin;
        }

        margin = +margin.slice(0, -1) - 25 + "%";
        document.querySelector(".s1").style.marginLeft = margin;
        count = count + 1;
        console.log(count);
        console.log(margin);

        ifSelected();
    }, 3000);
};


function ifSelected(){
    if(count == 1){
        document.querySelector(".bar1").classList.add("selected");
        document.querySelector(".bar4").classList.remove("selected");
    } else if(count == 2){
        document.querySelector(".bar2").classList.add("selected");
        document.querySelector(".bar1").classList.remove("selected");
    } else if(count == 3){
        document.querySelector(".bar3").classList.add("selected");
        document.querySelector(".bar2").classList.remove("selected");
    } else if(count == 4){
        document.querySelector(".bar4").classList.add("selected");
        document.querySelector(".bar3").classList.remove("selected");
    } 
}