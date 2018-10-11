
var gStartNum=0

function initGame() {
    createBoard()
}


function createBoard() {
    var elTable = document.querySelector('.main-table');
    var strHtml = '';
   var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    for (var i = 0; i < 4; i++) {
        document.querySelectorAll('td').
        strHtml += '<tr>'
        for (var j = 0; j < 4; j++) {
           var  number= numbers[Math.floor(Math.random()*numbers.length)]
            numbers.splice(numbers.indexOf(number),1)
            strHtml += `
          <td onclick="checkNum(this)">
           ${number}
          </td>`
        }
        strHtml += '</tr>'
    }
    elTable.innerHTML = strHtml;
}

function checkNum(data) {
    console.log(data.innerText)
    console.log(gStartNum+1)

    if (data.innerText==gStartNum+1) {
        data.classList.add('change-color')
        gStartNum++
    }
    else return
}


