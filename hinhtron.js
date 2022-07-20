function hinhtron() {
    var bankinh = parseInt(document.forms["hinhtronform"]["bankinh"].value);
    var chuvi = 2 * bankinh * (Math.PI);
    var dientich = bankinh * bankinh * (Math.PI);
    document.getElementById("chuvi").innerHTML= "Chu vi hình tròn là " + chuvi;
    document.getElementById("dientich").innerHTML= "Diện tích hình tròn là " + dientich;
}