document.getElementById("calculate  ").onclick=function(){
    // Nhập điểm 3 môn
    let X=+document.getElementById("X").value;
    let a=+document.getElementById("a").value;
    let b=+document.getElementById("b").value;
    let c=+document.getElementById("c").value;
    let area=document.getElementById("area").value;
    let type=document.getElementById("type").value;
    let diemkv=0;
    let diemut=0;
    if (area==="X")
    {
        diemkv=0;
    }
    else if (area==="A")
    {
        diemkv=2;
    }
    else if (area==="B")
    {
        diemkv=1;
    }
    else if (area==="C")
    {
        diemkv=0.5;
    }
    if (type==="0")
    {
        diemut=0;
    }
    else if (type==="1")
    {
        diemut=2.5;
    }
    else if (type==="2")
    {
        diemut=1.5;
    }
    else if (type==="3")
    {
        diemut=1;
    }
    let tongdiem=a+b+c+diemkv+diemut;
    if (a>0 && b>0 && c>0 && tongdiem>=X)
    {
        document.getElementById("result-wrapper").style.display = "block";
        document.getElementById("result").innerHTML="Bạn đã đậu. Tổng điểm: "+ tongdiem;
        console.log("Bạn đã đậu. Tổng điểm: "+tongdiem);
    }
    else 
    {
        document.getElementById("result-wrapper").style.display = "block";
        document.getElementById("result").innerHTML="Bạn đã rớt. Tổng điểm: "+ tongdiem;
        console.log("Bạn đã rớt. Tông điểm: "+tongdiem);
    }
    
}