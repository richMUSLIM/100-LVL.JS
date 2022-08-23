//LEVEL 100//
const tabLVL = document.querySelector('.header__timer-extra');
let sekn = 20
let ortacha = 100
let tez = 300



function lvl(i = 0) {
    tabLVL.innerHTML = i
    i++
    if (i <= 50) {
        setTimeout(() => {
            lvl(i)
        }, sekn);
    }else if (i <= 70) {
        setTimeout(() => {
            lvl(i)
        }, ortacha);
    }else if (i <= 100) {
        setTimeout(() => {
            lvl(i)
        }, tez);
    }
}
lvl()