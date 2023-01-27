function mapToSquare(input) {
  // TODO ใช้ .map สร้าง array ที่เป็นเลขยกกำลังสองของ input
  let num = input.map((value) => {
    if (value % 2 == 0) {
      return value ** 2;
    } else {
      return value;
    }
  });
  return num;
}

function convertTemperature(input) {
  // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()

  function fah_to_celsius(fah) {
    let cel = ((fah - 32) * 5) / 9;
    return Number(cel.toFixed(1));
  }
  input.map((value) => {
    value.temperature = fah_to_celsius(value.temperature);
  });
  return input;
}

function filterEvenNumber(input) {
  // TODO: filter input เอาเลขคู่เท่านั้น
  return input.filter(({index,value}) => {
    return value % 2 == 0;
  });
}

function filterAgeRange(input) {
  // TODO: กรอง input.people ตามช่วงอายุ
  return input.people.filter(
    (value) => value.age > input.min && value.age < input.max
  );
}

function removeByFilter(input) {
  // TODO: ลบ Object ใน Array ด้วยการ filter
  return input.people.filter((value) => value.id != input.removeId);
}

function replaceBySplice(input) {
  // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **เปลี่ยน (replace)** สมาชิกใน Array
  // เรียงลำดับตัวเลขให้ถูกต้อง
  input.splice(4, 1);
  return input;
}
