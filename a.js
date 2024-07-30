const data = [{
    "phoneimage": "img/phone7.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (DayBreak Blue,6GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "19,999",
    "mrp": "24,499",
    "offer": "51",
    "getit": "Friday 2 August",
    "outoffstock": false,
    "itemcondition": "new",
    "star": 4,
    "delivery": "payondelivery",
    "primemember": 1

},
{
    "phoneimage": "img/p2.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (Thunder Grey,6GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |..",
    "amount": "19,999",
    "mrp": "24,999",
    "offer": "18",
    "getit": "Friday 2 August",
    "itemcondition": "new",
    "star": 1,
    "delivery": "payondeliver",
    "primemember": 1

},
{
    "phoneimage": "img/phone1.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (Moonlight Blue,6GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "19,999",
    "mrp": "24,999",
    "offer": "18",
    "getit": "Friday 2 August",
    "itemcondition": "new",
    "star": 1

},
{
    "phoneimage": "img/p1.jpg",
    "phonediscrip": "Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)",
    "amount": "89,990",
    "mrp": "1,49,999",
    "offer": "40",
    "getit": "Tomorrow, 29 July",
    "itemcondition": "new",
    "star": 1

},
{
    "phoneimage": "img/phone2.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (Moonlight Blue,8GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "14,480",
    "mrp": "24,499",
    "offer": "39",
    "getit": "Friday 26 July",
    "itemcondition": "new",
    "star": 1

},
{
    "phoneimage": "img/PHONE5.jpg",
    "phonediscrip": "Samsung Galaxy M34 5G (Waterfall Blue,6GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS...",
    "amount": "14,880",
    "mrp": "24,499",
    "offer": "39",
    "getit": "Friday 26 July",
    "itemcondition": "new",
    "star": 1

},
{
    "phoneimage": "img/phone1.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (Moonlight Blue,8GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "21,499",
    "mrp": "25,999",
    "offer": "17",
    "getit": "Friday 26 July",
    "itemcondition": "new",
    "star": 2

},
{
    "phoneimage": "img/phone4.jpg",
    "phonediscrip": "Samsung Galaxy M14 4G (Arctic Blue,4GB,64GB) | 50MP Triple Cam | 5000mAh Battery | Snapdragon 680 Processor | 2 Gen. OS Upgrade & 4 Ye..",
    "amount": "8,799",
    "mrp": "13,999",
    "offer": "37",
    "getit": "Friday 26 July",
    "itemcondition": "new",
    "star": 3

},
{
    "phoneimage": "img/s23.jpg",
    "phonediscrip": "Samsung Galaxy S23 Ultra 5G AI Smartphone (Cream, 12GB, 256GB Storage)",
    "amount": "89,999",
    "mrp": "1,49,99",
    "offer": "40",
    "getit": "Friday 26 July",
    "itemcondition": "new",
    "star": 3

},
{
    "phoneimage": "img/phone7.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (DayBreak Blue,8GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "21,499",
    "mrp": "1,49,99",
    "offer": "40",
    "getit": "Friday 26 July",
    "itemcondition": "new",
    "star": 4


},
{
    "phoneimage": "img/phone1.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (Moonlight Blue,8GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "21,499",
    "mrp": "29,999",
    "offer": "40",
    "getit": "Friday 26 July",
    "itemcondition": "renewed",
    "star": 4

},
{
    "phoneimage": "img/p2.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (Thunder Grey,8GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "21,499",
    "mrp": "25,499",
    "offer": "40",
    "getit": "Friday 26 July",
    "itemcondition": "renewed",
    "star": 4


}
]




console.log(data[0].primemember == 1)
firstadd(data)
function firstadd(data) {
    let a = document.getElementsByClassName("mainright")

    let card = document.createElement("div")
    card.setAttribute("class", "card")
    for (let i = 0; i < data.length; i++) {

        let threecard = document.createElement("div")
        threecard.setAttribute("class", "threecard")

        let phonephoto = document.createElement("div")
        phonephoto.setAttribute("class", "phonephoto")

        let phoneimg = document.createElement("img")
        phoneimg.setAttribute("src", data[i].phoneimage)
        phonephoto.appendChild(phoneimg)
        threecard.appendChild(phonephoto)

        let phonediscrip = document.createElement("p")
        phonediscrip.setAttribute("class", "phonediscrip")
        phonediscrip.innerHTML = data[i].phonediscrip
        threecard.appendChild(phonediscrip)
        var star = document.createElement("div")
        star.setAttribute("class", "starss")
        var starimg = document.createElement("img")
        starimg.setAttribute("src", `img/${data[i].star}star.png`)
        star.appendChild(starimg)
        threecard.appendChild(star)

        let past = document.createElement("p")
        past.setAttribute("class", "pastmonth")
        past.innerHTML = "5K+ bought in past month"
        threecard.appendChild(past)

        let pricemrp = document.createElement("div")
        pricemrp.setAttribute("class", "pricemrp")

        let rats = document.createElement("span")
        rats.setAttribute("class", "rats")
        rats.innerHTML = "₹"
        pricemrp.appendChild(rats)
        let amoun = document.createElement("p")
        amoun.setAttribute("class", "amount")
        amoun.innerHTML = data[i].amount
        pricemrp.appendChild(amoun)
        let rate = document.createElement("p")
        rate.setAttribute("class", "rate")
        rate.innerHTML = `M.R.P: <span class="strike">₹${data[0].mrp}</span>`
        pricemrp.appendChild(rate)
        let percent = document.createElement("p")
        percent.setAttribute("class", "percent")
        percent.innerHTML = `(${data[i].offer}% off)`
        pricemrp.appendChild(percent)


        threecard.appendChild(pricemrp)

        let extra = document.createElement("p")
        extra.setAttribute("class", "extra")
        extra.innerHTML = "Save extra with No Cost EMI"
        threecard.appendChild(extra)

        if (data[i].primemember == 1) {




            let pri = document.createElement("div")
            pri.setAttribute("class", "pri")
            let primeee = document.createElement("div")
            primeee.setAttribute("class", "primeee")
            let primeimg = document.createElement("img")
            primeimg.setAttribute("src", "img/pri.png")
            primeee.appendChild(primeimg)
            let dat = document.createElement("p")

            dat.innerHTML = `Get it by <span class="dar">${data[i].getit}</span>`


            pri.appendChild(primeee)
            pri.appendChild(dat)
            threecard.appendChild(pri)
        }

        let free = document.createElement("p")
        free.setAttribute("class", "free")
        free.innerHTML = "Free Delivery on Amazon"

        let service = document.createElement("p")
        service.setAttribute("class", "service")
        service.innerHTML = "Service: Installation"


        threecard.appendChild(free)
        threecard.appendChild(service)
        card.appendChild(threecard)
    }
    a[0].appendChild(card);
}
let count = 0;
let startdate = new Date("2015-08-04")
let startdate1 = new Date("2015-09-04")
let five = document.getElementsByClassName("five")
five[0].onclick = function () {
    price(0)
}
let ten = document.getElementsByClassName("ten")
ten[0].onclick = function () {
    price(1)
}
let tewnty = document.getElementsByClassName("tewnty")
tewnty[0].onclick = function () {
    price(2)
}
let tenper = document.getElementsByClassName("tenper")
tenper[0].onclick = function () {
    price(3)
}
let twentyper = document.getElementsByClassName("twentyper")
twentyper[0].onclick = function () {
    price(4)
}
let thirtyfive = document.getElementsByClassName("thirtyfive")
thirtyfive[0].onclick = function () {
    price(5)
}
let fifty = document.getElementsByClassName("fifty")
fifty[0].onclick = function () {
    price(6)
}
let sixty = document.getElementsByClassName("sixty")
sixty[0].onclick = function () {
    price(7)
}
let newed = document.getElementsByClassName("new1")
newed[0].onclick = function () {
    price(8)
}
let renewed = document.getElementsByClassName("renewed")
renewed[0].onclick = function () {
    price(9)
}
let fourstar = document.getElementsByClassName("fourstar")
fourstar[0].onclick = function () {
    price(10)
}
let threestar = document.getElementsByClassName("threestar")
threestar[0].onclick = function () {
    price(11)
}
let twostar = document.getElementsByClassName("twostar")
twostar[0].onclick = function () {
    price(12)
}
let onestar = document.getElementsByClassName("onestar")
onestar[0].onclick = function () {
    price(13)
}





function price(a) {

    if (count == 0) {
        if (a == 0) {
            var result = data.filter(obj => re(obj.amount) < 10000);
            var result = data.filter(obj => re(obj.amount) > 5000 && re(obj.amount) < 10000);


            removeadd(result, a)

        }
        else if (a == 1) {
            var result = data.filter(obj => re(obj.amount) > 10000 && re(obj.amount) < 20000);
            removeadd(result, a)

        }
        else if (a == 2) {
            var result = data.filter(obj => re(obj.amount) > 20000);
            removeadd(result, a)

        }
        else if (a == 3) {
            var result = data.filter(obj => re(obj.offer) >= 10);
            removeadd(result, a)
        }
        else if (a == 4) {
            var result = data.filter(obj => re(obj.offer) >= 25);
            removeadd(result, a)
        }
        else if (a == 5) {
            var result = data.filter(obj => re(obj.offer) >= 35);
            removeadd(result, a)
        }
        else if (a == 6) {
            var result = data.filter(obj => re(obj.offer) >= 50);
            removeadd(result, a)
        }
        else if (a == 7) {
            var result = data.filter(obj => re(obj.offer) >= 60);
            removeadd(result, a)
        }
        else if (a == 8) {
            var result = data.filter(obj => obj.itemcondition == "new");
            removeadd(result, a)
        }
        else if (a == 9) {
            var result = data.filter(obj => obj.itemcondition == "renewed");
            removeadd(result, a)
        }
        else if (a == 10) {
            if (pc%2== 0 && co%2 == 0) {
                var result = data.filter(obj => obj.star >= 4);
                removeadd(result, a)
            }
            else if(co%2== 1 && pc%2 == 0){
                var result = data.filter(obj => obj.star >= 4 && obj.delivery == "payondelivery");
                removeadd(result, a)
            }
            else if(pc%2== 1 && co%2 == 0){
                var result = data.filter(obj => obj.star >= 4 && obj.primemember == 1);
                removeadd(result, a)
            }
            else{
                var result = data.filter(obj => obj.star >= 4 && obj.primemember == 1 && obj.delivery == "payondelivery");

            }
        }
        else if (a == 11) {
            var result = data.filter(obj => obj.star >= 3);
            removeadd(result, a)
        }
        else if (a == 12) {
            var result = data.filter(obj => obj.star >= 2);
            removeadd(result, a)
        }
        else if (a == 13) {
            var result = data.filter(obj => obj.star >= 1);
            removeadd(result, a)
        }


    }
    count++
}
function re(x) {
    let str1 = x.replace(/,/g, "");

    str1 = parseInt(str1)
    return str1
}
function clear(x, y, w) {
    x[0].style.display = "block"
    y[0].style.display = "block"
    w.remove()
    removeadd(data, 20)
    count = 0


}

function clearadd(x, y) {
    let q = document.getElementsByClassName("price")
    let w = document.createElement("p")
    w.setAttribute("class", "last1")
    w.setAttribute("id", "clear")
    w.innerHTML = "Clear"
    q[0].appendChild(w)
    w.onclick = function () {
        clear(x, y, w)
    }


}




function removeadd(y, x) {
    let d = document.getElementsByClassName("card")
    d[0].remove()
    firstadd(y)
    if (x == 0) {
        let m = document.getElementsByClassName("ten")
        m[0].style.display = "none"
        let e = document.getElementsByClassName("tewnty")
        e[0].style.display = "none"
        clearadd(m, e)


    }
    else if (x == 1) {
        let m = document.getElementsByClassName("five")
        m[0].style.display = "none"
        let e = document.getElementsByClassName("tewnty")
        e[0].style.display = "none"
        clearadd(m, e)


    }
    else if (x == 20) {
        console.log("hi")
    }
    else if (x == 2) {
        let m = document.getElementsByClassName("five")
        m[0].style.display = "none"
        let e = document.getElementsByClassName("ten")
        e[0].style.display = "none"
        clearadd(m, e)

    }
    else if (x == 3) {
        let k = document.getElementsByClassName("dis")
        none(x, k)
        pecentaddclear(x, k)

    }
    else if (x == 4) {
        let k = document.getElementsByClassName("dis")
        none(x, k)
        pecentaddclear(x, k)

    }
    else if (x == 5) {
        let k = document.getElementsByClassName("dis")
        none(x, k)
        pecentaddclear(x, k)

    }
    else if (x == 6) {
        let k = document.getElementsByClassName("dis")
        none(x, k)
        pecentaddclear(x, k)

    }
    else if (x == 7) {
        let k = document.getElementsByClassName("dis")
        none(x, k)
        pecentaddclear(x, k)

    }
    else if (x == 8) {
        let k = document.getElementsByClassName("itemcondition")
        k[0].children[2].style.display = "none"
        pecentaddclear(x, k)

    }
    else if (x == 9) {
        let k = document.getElementsByClassName("itemcondition")
        k[0].children[1].style.display = "none"
        pecentaddclear(x, k)

    }
    else if (x == 10) {
        let k = document.getElementsByClassName("f3")
        let kk = document.getElementsByClassName("f2")
        let kkk = document.getElementsByClassName("f1")
        let kkkk = document.getElementsByClassName("average")


        k[0].style.display = "none"
        kk[0].style.display = "none"
        kkk[0].style.display = "none"
        // k[0].children[3].style.display="none",
        // k[0].children[4].style.display="none"

        starclearadd(k, kk, kkk, kkkk)

    }
    else if (x == 11) {
        let k = document.getElementsByClassName("f4")
        let kk = document.getElementsByClassName("f2")
        let kkk = document.getElementsByClassName("f1")
        let kkkk = document.getElementsByClassName("average")


        k[0].style.display = "none"
        kk[0].style.display = "none"
        kkk[0].style.display = "none"
        // k[0].children[3].style.display="none",
        // k[0].children[4].style.display="none"

        starclearadd(k, kk, kkk, kkkk, x)

    }
    else if (x == 12) {
        let k = document.getElementsByClassName("f4")
        let kk = document.getElementsByClassName("f3")
        let kkk = document.getElementsByClassName("f1")
        let kkkk = document.getElementsByClassName("average")


        k[0].style.display = "none"
        kk[0].style.display = "none"
        kkk[0].style.display = "none"
        // k[0].children[3].style.display="none",
        // k[0].children[4].style.display="none"

        starclearadd(k, kk, kkk, kkkk, x)

    }
    else if (x == 13) {
        let k = document.getElementsByClassName("f4")
        let kk = document.getElementsByClassName("f3")
        let kkk = document.getElementsByClassName("f2")
        let kkkk = document.getElementsByClassName("average")


        k[0].style.display = "none"
        kk[0].style.display = "none"
        kkk[0].style.display = "none"
        // k[0].children[3].style.display="none",
        // k[0].children[4].style.display="none"

        starclearadd(k, kk, kkk, kkkk, x)

    }

}
function starclearadd(k, kk, kkk, kkkk) {
    let w = document.createElement("p")
    w.setAttribute("class", "last1")
    w.setAttribute("id", "clear")
    w.innerHTML = "Clear"
    kkkk[0].appendChild(w)
    w.onclick = function () {
        starclear(k, kk, kkk, w)
    }

}
function starclear(k, kk, kkk, w) {
    k[0].style.display = "flex"
    kk[0].style.display = "flex"
    kkk[0].style.display = "flex"

    w.remove()
    removeadd(data, 20)
    count = 0



}
function pecentaddclear(x, k) {

    let w = document.createElement("p")
    w.setAttribute("class", "last1")
    w.setAttribute("id", "clear")
    w.innerHTML = "Clear"
    k[0].appendChild(w)
    w.onclick = function () {
        clearpercent(x, k, w)
    }

}
function clearpercent(x, k, w) {
    if (x == 3) {
        block(x, k)
        w.remove()
        removeadd(data, 20)
        count = 0


    }
    else if (x == 4) {
        block(x, k)
        w.remove()
        removeadd(data, 20)
        count = 0


    }
    else if (x == 5) {
        block(x, k)
        w.remove()
        removeadd(data, 20)
        count = 0


    }
    else if (x == 6) {
        block(x, k)
        w.remove()
        removeadd(data, 20)
        count = 0


    }
    else if (x == 7) {
        block(x, k)
        w.remove()
        removeadd(data, 20)
        count = 0


    }
    else if (x == 8) {
        k[0].children[2].style.display = "block"
        w.remove()
        removeadd(data, 20)
        count = 0


    }
    else if (x == 9) {
        k[0].children[1].style.display = "block"
        w.remove()
        removeadd(data, 20)
        count = 0


    }


}
function block(x, k) {
    for (i = 1; i <= 5; i++) {
        if (i == x - 2) {
            continue
        }
        k[0].children[i].style.display = "block"

    }

}
function none(x, k) {
    for (i = 1; i <= 5; i++) {
        if (i == x - 2) {
            continue
        }
        k[0].children[i].style.display = "none"

    }

}


let co = 0
let pc = 0
var payondelivery = document.getElementsByClassName("payondelivery")
payondelivery[0].onclick = function () {
    countincrement()
}
var primecheck = document.getElementsByClassName("primecheck")
primecheck[0].onclick = function () {
    primeincrement()
}


function countincrement() {
    co++
    if (co % 2 != 0) {
        if (pc == 0) {
            var result = data.filter(obj => obj.delivery == "payondelivery");
            removeadds(result)
        }
        else {
            var result = data.filter(obj => obj.primemember == 1 && obj.delivery == "payondelivery");
            removeadds(result)


        }

    }
    else {
        if (pc == 0) {
            removeadds(data)

        }
        else {
            var result = data.filter(obj => obj.primemember == 1);
            removeadds(result)

        }

    }

}
function primeincrement() {
    pc++
    if (pc % 2 != 0) {
        if (co % 2 == 0) {
            var result = data.filter(obj => obj.primemember == 1);
            removeadds(result)
        }
        else {
            var result = data.filter(obj => obj.primemember == 1 && obj.delivery == "payondelivery");
            removeadds(result)

        }

    }
    else {
        removeadds(data)
    }

}



function removeadds(y) {
    let d = document.getElementsByClassName("card")
    d[0].remove()
    firstadd(y)
}