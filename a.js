const data = [{
    "phoneimage": "img/phone7.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (DayBreak Blue,6GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "19,999",
    "mrp": "24,499",
    "offer": "18",
    "getit": "Friday 2 August"

},
{
    "phoneimage": "img/p2.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (Thunder Grey,6GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |..",
    "amount": "19,999",
    "mrp": "24,999",
    "offer": "18",
    "getit": "Friday 2 August"

},
{
    "phoneimage": "img/phone1.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (Moonlight Blue,6GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "19,999",
    "mrp": "24,999",
    "offer": "18",
    "getit": "Friday 2 August"

},
{
    "phoneimage": "img/p1.jpg",
    "phonediscrip": "Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)",
    "amount": "89,990",
    "mrp": "1,49,999",
    "offer": "40",
    "getit": "Tomorrow, 29 July"

},
{
    "phoneimage": "img/phone2.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (Moonlight Blue,8GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "14,480",
    "mrp": "24,499",
    "offer": "39",
    "getit": "Friday 26 July"

},
{
    "phoneimage": "img/PHONE5.jpg",
    "phonediscrip": "Samsung Galaxy M34 5G (Waterfall Blue,6GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS...",
    "amount": "14,880",
    "mrp": "24,499",
    "offer": "39",
    "getit": "Friday 26 July"

},
{
    "phoneimage": "img/phone1.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (Moonlight Blue,8GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "21,499",
    "mrp": "25,999",
    "offer": "17",
    "getit": "Friday 26 July"

},
{
    "phoneimage": "img/phone4.jpg",
    "phonediscrip": "Samsung Galaxy M14 4G (Arctic Blue,4GB,64GB) | 50MP Triple Cam | 5000mAh Battery | Snapdragon 680 Processor | 2 Gen. OS Upgrade & 4 Ye..",
    "amount": "8,799",
    "mrp": "13,999",
    "offer": "37",
    "getit": "Friday 26 July"

},
{
    "phoneimage": "img/s23.jpg",
    "phonediscrip": "Samsung Galaxy S23 Ultra 5G AI Smartphone (Cream, 12GB, 256GB Storage)",
    "amount": "89,999",
    "mrp": "1,49,99",
    "offer": "40",
    "getit": "Friday 26 July"

},
{
    "phoneimage": "img/phone7.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (DayBreak Blue,8GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "21,499",
    "mrp": "1,49,99",
    "offer": "40",
    "getit": "Friday 26 July"

},
{
    "phoneimage": "img/phone1.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (Moonlight Blue,8GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "21,499",
    "mrp": "29,999",
    "offer": "40",
    "getit": "Friday 26 July"

},
{
    "phoneimage": "img/p2.jpg",
    "phonediscrip": "Samsung Galaxy M35 5G (Thunder Grey,8GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber |",
    "amount": "21,499",
    "mrp": "25,499",
    "offer": "40",
    "getit": "Friday 26 July"

}
]




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
        let pri = document.createElement("div")
        pri.setAttribute("class", "pri")
        let primeee = document.createElement("div")
        primeee.setAttribute("class", "primeee")
        let primeimg = document.createElement("img")
        primeimg.setAttribute("src", "img/pri.png")
        primeee.appendChild(primeimg)
        let dat = document.createElement("p")
        dat.innerHTML = `Get it by <span class="dar">${data[0].getit}</span>`


        pri.appendChild(primeee)
        pri.appendChild(dat)

        let free = document.createElement("p")
        free.setAttribute("class", "free")
        free.innerHTML = "Free Delivery on Amazon"

        let service = document.createElement("p")
        service.setAttribute("class", "service")
        service.innerHTML = "Service: Installation"

        threecard.appendChild(pri)
        threecard.appendChild(free)
        threecard.appendChild(service)
        card.appendChild(threecard)
    }
    a[0].appendChild(card);
}
let count = 0;
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
        else {
            var result = data.filter(obj => re(obj.amount) > 20000);
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
    count=0


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
    else {
        let m = document.getElementsByClassName("five")
        m[0].style.display = "none"
        let e = document.getElementsByClassName("ten")
        e[0].style.display = "none"
        clearadd(m, e)

    }

}