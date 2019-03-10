function question1Atoggle() {
    var answer1A = document.getElementById("answer1A");
    var question1A2 = document.getElementById("question1A2");
    var question1A2A3 = document.getElementById("question1A2A3");
    var warning1A2B =
        document.getElementById("warning1A2B");
    if (question1A2.style.display === "none") {
    question1A2.style.display = "grid";
    answer1A.style.backgroundColor = "white";
    answer1A.style.color = "#0E98BE";
    }
    else {
        question1A2.style.display = "none";
        answer1A.style.backgroundColor = "#0E98BE";
        answer1A.style.color = "white";
        question1A2A3.style.display = "none";
        warning1A2B.style.display = "none";
        } }

function question1A2Atoggle() {
    var answer1A2A = document.getElementById("answer1A2A");
    var question1A2A3 = document.getElementById("question1A2A3");
    var warning1A2B =
        document.getElementById("warning1A2B");
    var answer1A2B = document.getElementById("answer1A2B");
    if (question1A2A3.style.display === "none") {
        question1A2A3.style.display = "grid";
        answer1A2A.style.backgroundColor = "white";
        answer1A2A.style.color = "#0E98BE";
        warning1A2B.style.display = "none";
        answer1A2B.style.backgroundColor = "#0E98BE";
        answer1A2B.style.color = "white";
    }
    else {
        question1A2A3.style.display = "none";
        answer1A2A.style.backgroundColor = "#0E98BE";
        answer1A2A.style.color = "white";
        } }

function question1A2Btoggle() {
    var answer1A2B = document.getElementById("answer1A2B");
    var warning1A2B =
        document.getElementById("warning1A2B");
    var answer1A2A = document.getElementById("answer1A2A");
    var question1A2A3 = document.getElementById("question1A2A3");
    if (warning1A2B.style.display === "none")
        {
            warning1A2B.style.display = "grid"
            answer1A2B.style.backgroundColor = "white";
            answer1A2B.style.color = "#0E98BE";
            question1A2A3.style.display = "none";
            answer1A2A.style.backgroundColor = "#0E98BE";
            answer1A2A.style.color = "white";
        }
    else {
        warning1A2B.style.display = "none";
        answer1A2B.style.backgroundColor = "#0E98BE";
        answer1A2B.style.color = "white";
    }
}