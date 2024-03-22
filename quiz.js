let gvn_answer_1;
let gvn_answer_2;
let gvn_answer_3;
let gvn_answer_4;

document.getElementById("btn_1").onclick = function (event) {
  event.preventDefault();
  gvn_answer_1 = document.getElementById("question_1").value;
  if (gvn_answer_1 == 4) {
    document.getElementById("p1").textContent = "Correct";
  } else {
    document.getElementById("p1").textContent = "Wrong";
  }
};

document.getElementById("btn_2").onclick = function (event) {
  event.preventDefault();
  gvn_answer_2 = document.getElementById("question_2").value;
  if (gvn_answer_2 == 2) {
    document.getElementById("p2").textContent = "Correct";
  } else {
    document.getElementById("p2").textContent = "Wrong";
  }
};

document.getElementById("btn_3").onclick = function (event) {
  event.preventDefault();
  gvn_answer_3 = document.getElementById("question_3").value.toLowerCase();
  if (gvn_answer_3 === "Neues Gymnasium Rüsselsheim".toLowerCase()) {
    document.getElementById("p3").textContent = "Correct";
  } else {
    document.getElementById("p3").textContent = "Wrong";
  }
};

document.getElementById("btn_4").onclick = function (event) {
  event.preventDefault();
  gvn_answer_4 = document.getElementById("question_4").value.toLowerCase();
  if (gvn_answer_4 === "Nein".toLowerCase()) {
    document.getElementById("p4").textContent = "Correct";
  } else {
    document.getElementById("p4").textContent = "Wrong";
  }
};
