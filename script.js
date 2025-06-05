// Add Friend Feature Same Button.

var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0

btn.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Request"
        check = 1    
        console.log("Status changed to Friends");
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Request"
        check = 0
        console.log("Status changed to Stranger");
    }

    console.log("Current check value:", check);
});