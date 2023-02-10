// ข้อ 2.1

function display(msg) {
  let div = document.getElementById("ex01-div");
  if(msg){
    div.innerHTML = "ยืนยันจ้า";
  }
  else{
    div.innerHTML = "ไม่ดีกว่า";
  }
  
  
}

function showConfirm(callback) {
  // You code here
  
  if (window.confirm("ยืนยันไหม")) {
    callback(true)
  }else{
    callback(false)
  }
  
}

// ข้อ 2.2
function start() {
  // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()
  setTimeout(() => {
    console.log("Program started");
    document.getElementById("start").innerHTML = "Program started"
  }, 0);
  setTimeout(() => {
    console.log("Hello World");
    document.getElementById("process").innerHTML = "Hello World"
    setTimeout(() => {
      console.log("Program ended");
      document.getElementById("end").innerHTML = "Program ended"
    }, 3000);
  }, 2000);
}

// ข้อ 2.3


function stopTime() {
  let time = document.getElementById("Time").value;
  
    let setMin = document.getElementById("setMinute");
    let setSec = document.getElementById("setSecond");

    let madara = setInterval(() => {
      time -= 1;
      setSec.innerHTML = `${
        time % 60 < 10
          ? `0${Math.floor((time % 60)).toFixed(0)}`
          : `${(Math.floor(time % 60)).toFixed(0)}`
      }`;
      setMin.innerHTML = `${
        time / 60 < 10
          ? `0${Math.floor((time / 60)).toFixed(0)}`
          : `${Math.floor((time / 60)).toFixed(0)}`
      }`;
      if (time <= 0) {
        clearInterval(madara);
        setMin.innerHTML = "00"
        setSec.innerHTML = "00"
      }
    }, 1000);
  
  
}

// Math.floor((time/60)).toFixed(0)
