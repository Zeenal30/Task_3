let page = 0;
var data = new Array();
data.push(["Kena Doshi", "D22CE162", "9999955555","d22ce162@charusat.edu.in", "7.20 CGPA"]);
data.push(["Zeenal Makati", "D22CE168", "8888855555","d22ce168@charusat.edu.in", "7.19 CGPA"]);
data.push(["Parthvi Patel", "D22CE177", "9999989855","d22ce177@charusat.edu.in", "7.10 CGPA"]);
data.push(["Het Tala", "D22CE157", "9109955555","d22ce157@charusat.edu.in", "7.13 CGPA"]);
data.push(["Parth Shah", "21CE130", "9936555555","21ce130@charusat.edu.in", "7.09 CGPA"]);
data.push(["Kathan Shah", "21CE126", "9999648555","21ce126@charusat.edu.in", "7.05 CGPA"]);
data.push(["Manan Patel", "21CE096", "9965475555","21ce096@charusat.edu.in", "7.10 CGPA"]);
data.push(["Nishil Patel", "21CE101", "9999933333","21ce101@charusat.edu.in", "7.11 CGPA"]);
data.push(["Kalpit Patel", "21CE096", "9994444433","21ce096@charusat.edu.in", "7.06 CGPA"]);
data.push(["Ramya Patel", "21CE183", "9999555553","21ce183@charusat.edu.in", "7.21 CGPA"]);
data.push(["Dhruvi Makati", "21CE182", "9999944444","21ce182@charusat.edu.in", "7.19 CGPA"]);
data.push(["Diya Patel", "21CE183", "9999666664","21ce0183@charusat.edu.in", "7.15 CGPA"]);
data.push(["Manali Patel", "21CE184", "9999666664","21ce184@charusat.edu.in", "7.20 CGPA"]);

function load() {
  console.warn("loaded");
  createTable(data);
  createButtons();
}

function createTable(arr, start = 0) {
  var table = document.getElementById("tbl").getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  var end = Math.min(start + 5, arr.length);
  for (var i = start; i < end; i++) {
    var row = table.insertRow(-1);

    for (const data of arr[i]) {
      var cell = row.insertCell(-1);
      cell.innerHTML = data;
    }
  }
}

function createButtons() {
  var body = document.getElementById("body");
  var div = document.createElement("div");

  // prev
  var prevBtn = document.createElement("button");
  prevBtn.onclick = function () {
    if (page > 0) {
      page--;
      var start = page * 5;
      createTable(data, start);
    }
  };
  prevBtn.innerHTML = "Prev";
  div.appendChild(prevBtn);

  // numbers
  var btns = Math.ceil(data.length / 5);
  for (var i = 0; i < btns; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = i + 1;
    btn.value = i;
    btn.onclick = function () {
      NumberClick(this.value);
    };
    div.appendChild(btn);
  }

  // next
  var nextBtn = document.createElement("button");
  nextBtn.onclick = function () {
    var start = (page + 1) * 4;
    if (start < data.length) {
      page++;
      createTable(data, start);
    }
  };
  nextBtn.innerHTML = "Next";
  div.appendChild(nextBtn);

  // all buttons to div
  body.appendChild(div);
}

function NumberClick(pg) {
  page = parseInt(pg);
  createTable(data, page * 4);
}