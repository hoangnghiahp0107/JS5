document.getElementById("calculate").onclick=function(){
    let fullname=document.getElementById("fullname").value;
    let income=document.getElementById("income").value;
    let accessary=document.getElementById("accessary").value;
    let thunhapchiuthue =income-4000000 -accessary*1600000;
    let thunhapcanhan=0;
    let vat=0;
    if (thunhapchiuthue<=60000000)
    {
        vat=5/100;
    }
    else if (thunhapchiuthue>60000000 && thunhapchiuthue<=120000000)
    {
        vat=10/100;
    }
    else if (thunhapchiuthue>120000000 && thunhapchiuthue<=210000000)
    {
        vat=15/100;
    }
    else if (thunhapchiuthue>210000000 && thunhapchiuthue<=384000000)
    {
        vat=20/100;
    }
    else if (thunhapchiuthue>384000000 && thunhapchiuthue<=624000000)
    {
        vat=25/100;
    }
    else if (thunhapchiuthue>624000000 && thunhapchiuthue<=960000000)
    {
        vat=30/100;
    }
    else
    {
        vat=35/100;
    }
    thunhapcanhan=thunhapchiuthue*vat;
    console.log("Họ tên: "+fullname+"; "+"Tiền thuế thu nhập cá nhân: "+thunhapcanhan+" VND");
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML="Họ tên: "+fullname+ "; " + "Tiền thuế thu nhập cá nhân: "+thunhapcanhan+" VND" ;
}