// จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array

let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john,jo,jin];

function getAverageAge(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum +=(arr[i].age)
    }
    const averageAge =  (sum / arr.length).toFixed(2)
    return averageAge
}

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33