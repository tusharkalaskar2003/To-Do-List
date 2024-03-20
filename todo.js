
const inputbox = document.getElementById("input-box");
const List = document.getElementById("list");
function addTask() {
    if (inputbox.value == '') {
        alert("you must write something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        List.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputbox.value = "";
    savethelist();
}

List.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        savethelist();
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        savethelist();
    }
}, false);

function savethelist() {
    localStorage.setItem("data", List.innerHTML);
}

function showtask() {
    List.innerHTML = localStorage.getItem("data");
}
showtask();




// Get the current date
const currentDate = new Date();

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const day = dayNames[currentDate.getDay()];
const date = currentDate.getDate();
const month = monthname[currentDate.getMonth()];

const dateDisplay = document.getElementById("dateDisplay");
dateDisplay.textContent = `${day} ${date} ${month}`;
