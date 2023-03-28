// let num = 3.1415
// console.log(num.toFixed(3))   
let number = 20
let life = 15
let lorem = document.querySelector(".lorem")
console.log(lorem.innerHTML)
let rec = document.querySelector(".record")
let bt = document.querySelector(".try")
lorem.innerHTML = life

// alert("Ы")


function check() {
    if (life > 0) {
            if (document.querySelector(".inputik").value == number) {
                document.querySelector(".inputik").placeholder = "Верно"
                console.log("верно")
                recordin()
                number = Math.trunc(Math.random() * 100)+ 1 
                returnn()
            }

            else if (number < document.querySelector(".inputik") .value){
                document.querySelector(".inputik").value = ""
                document.querySelector(".inputik").placeholder = "Неверно,число меньше"
                console.log(number)

                life--;
                lorem.innerHTML = life
                game_over()
            }
            else if (number > document.querySelector(".inputik") .value){
                document.querySelector(".inputik").value = ""
                document.querySelector(".inputik") .placeholder = "Неверно,число больше"
                console.log(number)
                life--
                lorem.innerHTML = life
                game_over()}
    }
    else {
        document.querySelector(".inputik") .placeholder = "Нет жизней"
    }

}
function game_over() {
    if (life == 0) {
        bt.disabled = true
    }
}
function recordin() {
    if (rec.innerHTML == "-"){
        rec.innerHTML = 15-lorem.innerHTML + 1
    }
    else if (rec > 15-lorem.innerHTML) {
        rec = 15-lorem.innerHTML +1
        rec.innerHTML = rec
    }
}
function returnn() {
    life = 15
    lorem.innerHTML = life
    number = Math.trunc(Math.random() * 100)+ 1 
    document.querySelector(".inputik").value = ""
}