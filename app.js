let serialNumber = 1;
function printInfo() {
    const inputValue = document.getElementById("value").value.trim();
    const info = document.getElementById("Info");

     // before starting the function, checing if there is any value in the input .
    if (inputValue == ""){
        alert("please enter a name !");
        return;
    }
    let studentInfo = document.createElement("div");
    studentInfo.className = "friend";

    const studentName = document.createElement("span");
    studentName.className = "span";
    studentName.innerText = inputValue;


   

  
    
    const voteIndex = document.createElement("span");
    voteIndex.className = "span";
    voteIndex.innerHTML = "0";

    const smtBtn = document.createElement("button");
    smtBtn.className = "button";
    smtBtn.innerHTML = "vote";

    smtBtn.addEventListener("click", function (){
        voteIndex.innerHTML = +voteIndex.innerHTML + 1;

    })

    const serial = document.createElement("span");
    serial.className = "serial";

    serial.innerHTML = serialNumber;
    serialNumber++;

    // Append the voteIndex and smtBtn to studentInfo
    studentInfo.appendChild(serial);

    studentInfo.appendChild(studentName);
    studentInfo.appendChild(voteIndex);
    studentInfo.appendChild(smtBtn);
    

    // Append studentInfo to the main container (info)
    info.appendChild(studentInfo);
}
