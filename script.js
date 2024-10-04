function findMaxMin() {
    // Nhập vào dãy số từ người dùng, tách thành mảng các số
    let input = prompt("Nhập vào dãy số, cách nhau bằng dấu phẩy:");
    let numbers = input.split(',').map(Number); // Chuyển dãy số sang mảng

    // Tìm số lớn nhất và nhỏ nhất
    let maxNumber = Math.max(...numbers);
    let minNumber = Math.min(...numbers);

    // In ra kết quả
    document.getElementById("result").innerHTML = `<h2>Số lớn nhất: ${maxNumber}</h2>`;
    document.getElementById("result").innerHTML += `<h2>Số nhỏ nhất: ${minNumber}</h2>`;
}

