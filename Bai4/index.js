document.getElementById("calculate").onclick=function(){
    let customer=+document.getElementById("customer").value;
    let channel=+document.getElementById("channel").value;
    let chonlua=document.getElementById("chonlua").value;
    let connect=+document.getElementById("connect").value;
    let phi1=0;
    let phi2=0;
    let phi3=0;
    if (chonlua==="A")
    {
        phi1=4.5;
        phi2=20.5
        phi3=7.5*channel;
    }
    else if (chonlua==="B")
    {
        phi1=15;
        if (connect<=10)
        {
            phi2=75;
        }
        else
        {
            connect=connect-10;
            phi2=75+connect*5;
        }
        phi3= 50*channel;
    }
    let tiencap=phi1+phi2+phi3;
    console.log("Mã khách hàng: "+customer+ "; "+"Tiền cáp: $"+tiencap);
    document.getElementById("result-wrapper").style.display = "block";
    document.getElementById("result").innerHTML="Mã khách hàng: "+customer+ "; "+"Tiền cáp: $"+tiencap;
}