document.getElementById("calculate").onclick=function(){
    let fullname=document.getElementById("fullname").value;
    let kw=+document.getElementById("kw").value;
    let tien=0;
    let kw1=0;
    if (kw<=50)
    {
        tien=kw*500;
    }
    else if (kw>50 && kw<=100)
    {
        kw1=kw-50;
        tien= kw1*650+50*500;
    }
    else if (kw>100 && kw <=200)
    {
        kw1=kw-100;
        tien=kw1*850+50*500+50*650;
    }
    else if (kw>200 && kw<350)
    {
        kw1=kw-200;
        tien=kw1*1100+50*500+50*650+100*850;
    }
    else
    {
        kw1=kw-350;
        tien=kw1*1300+150*1100+100*850+50*650+50*500;
    }
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML="Họ tên: "+fullname+ "; " + "Tiền điện: "+tien ;
    console.log("Họ tên: "+fullname+"; "+"Tiền điện: "+tien);
   
}