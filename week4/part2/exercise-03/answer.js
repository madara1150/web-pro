// ข้อ 3.1
function getDogDemo(url) {
  // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
  // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร
  let time = document.getElementById("dogTime");
  let count = 10;
  let countdown = setInterval(() => {
    count -= 1;
    time.innerHTML = `${count}`;
    if (count == 0) {
      clearInterval(countdown);
      time.innerHTML = "";
      getAPI("https://dog.ceo/api/breeds/image/random", success, err);
    }
  }, 1000);
}
let success = (success) => {
  document.getElementById("dogImg").src = `${success.message}`;
};

let err = (err) => {
  alert(err);
};

// ข้อ 3.2
function Rainbow() {
  //TODO
  // 1. ในกรณีที่ status = 'success' ให้แสดงตัวเลขเป็นสีตามที่กำหนดในแต่ละ STATE
  // 2. ให้แสดงชื่อ STATE (STATE 1 หรือ STATE 2 หรือ STATE 3) ในกล่องข้อความเมื่อเกิด Error
  // 3. เปลี่ยนสีข้อความเป็นสีแดงเมื่อเกิด Error (class = 'has-text-error')

  const rainbow = document.getElementById("rainbow");
  
 
    
    setTimeout(() => {
      let ans1 = getResult()
      if(ans1.status == 'success'){
        rainbow.className = "has-text-primary";
        rainbow.innerHTML = `${ans1.text}`;
      }
      else{
        rainbow.className = "has-text-danger";
        rainbow.innerHTML = `STATE 1 'has-text-primary'`;
      }
      // STATE 1 color = 'has-text-primary'
      
      setTimeout(() => {
        // STATE 2 color = 'has-text-success'
        let ans2 = getResult()
        if(ans2.status == 'success'){
          rainbow.className = "has-text-success";
          rainbow.innerHTML = `${ans2.text}`;
        }
        else{
          rainbow.className = "has-text-danger";
          rainbow.innerHTML = `STATE 2 'has-text-success'`;
        }
        setTimeout(() => {
          let ans3 = getResult()
          // STATE 3 color = 'has-text-success'
          if(ans3.status == 'success'){
            rainbow.className = "has-text-success";
            rainbow.innerHTML = `${ans3.text}`;
          }
          else{
            rainbow.className = "has-text-danger";
            rainbow.innerHTML = `STATE 3 'has-text-success'`;
          }
        }, 2000);
      }, 2000);
    }, 2000);
 
    
  
}

function getResult() {
  const num = Math.floor(Math.random() * 10);
  console.log(num);
  if (num > 5) {
    return {
      status: "success",
      text: num,
    };
  } else {
    return {
      status: "error",
      text: num,
    };
  }
}

// ข้อ 3.3
function evenNumber(num) {
  console.log(num);
  // hint : ทำการสร้าง promise และเรียกใช้
  new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve(`success : ${num} is an even number`);
    } else {
      reject(`Error : ${num} is not an even number`);
    }
  })
    .then((val) => {
      document.getElementById("result").innerHTML = `${val}`;
    })
    .catch((val) => {
      document.getElementById("result").innerHTML = `${val}`;
    });
}

// ข้อ 3.4
function task(id) {
  const delay = parseInt(Math.random() * 1000);

  let proms = new Promise((resolve, reject) => {
    if (delay < 500) {
      resolve(`task ${id}: ${delay}ms ... PASS!`);
    } else {
      reject(`task ${id}: ${delay}ms ... NOTPASS!`);
    }
  })
    .then((val) => {
      return val;
    })
    .catch((val) => {
      return val;
    });
  // return promise
  return {proms, delay};
}

function tester() {
  // hint : task(1).then().catch() ..... task(4)...
  // ต้องเรียก function task 4 ครั้ง เปลี่ยน id ไปเรื่อยๆ
  for(let i = 1;i<5;i++){
    let ans1 = task(i)
  setTimeout(()=>{
    ans1.proms.then((val) => {
      console.log(val);
    })
    .catch((val) => {
      console.log(val);
    });
  },ans1.delay)
  }
  
    


}

// ข้อ 3.5
// hint : เรียก getAPI() ที่ url = https://api.thecatapi.com/v1/images/search
// อย่าลืม console.log() ดูข้อมูลที่ได้ด้วยว่ามีโครงสร้างแบบใด
function checkAuth(password) {
  let proms = new Promise((resolve, reject)=>{
      if(password == "Cisco"){
        resolve("รหัสผ่านถูกต้อง")
        getAPI("https://api.thecatapi.com/v1/images/search", suc, err)
      }
      else{
        reject("รหัสผ่านไม่ถูกต้อง")
      }
  }).catch((val) =>{
    return val
  }).catch((val)=>{
    return val
  })

  return proms
}

function fetchData(password) {
  let pwd = password
  let ans = checkAuth(pwd)
  
  ans.then((val) =>{
    alert(val)
    
  }).catch((val)=>{
    alert(val)
  })
}

let suc = (suc) =>{
  console.log(suc[0]);
  document.getElementById("cat").src = `${suc[0].url}`
}


  
// GET API
function getAPI(url, success, error) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.response);
      success(res);
    } else if (this.readyState == 4) {
      const res = JSON.parse(this.response);
      error(res);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send();
}
