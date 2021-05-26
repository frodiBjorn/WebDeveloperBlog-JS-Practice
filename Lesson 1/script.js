function fun2() {
    let radio = document.getElementsByName('r1');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            alert('Выбран ' + i + " элемент");
        }
       
    }
}






// function fun1() {
//     let chkbox1 = document.getElementById('first');

//     if (chkbox1.checked) {
//         alert('Выбран 1 чебокс')
//     } else {
//         alert('Не выбран 1 чекбокс')
//     }
// }
