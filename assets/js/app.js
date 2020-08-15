const wrap = document.querySelector(".wrap");
const okBtn = document.getElementById("ok-btn");
const header = document.querySelector("header");
const bg = document.getElementById("bg");
const yesCtn = document.querySelector(".yes-container");
const noCtn = document.querySelector(".no-container");
const msg = document.querySelector(".msg");
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector("#close-btn");

document.addEventListener("DOMContentLoaded", () => {
	wrap.style.display = 'flex';
	bg.style.filter = 'blur(5px)';
	header.style.filter = 'blur(5px)';
	yesCtn.style.filter = 'blur(5px)';
	noCtn.style.filter = 'blur(5px)';
});
okBtn.addEventListener("click", () => {
	wrap.style.display = 'none';
	bg.style.filter = 'blur(0)';
	header.style.filter = 'blur(0)';
	yesCtn.style.filter = 'blur(0)';
	noCtn.style.filter = 'blur(0)';
});
function move(){
	var x = Math.random()*500
	var y = Math.random()*500
	var left=x+'px'
	var top=y+'px'
	noCtn.style.left=left
	noCtn.style.top=top
};
yesCtn.addEventListener('click', () => {
	msg.style.top = "50%"
	overlay.style.opacity = '0.7';
	overlay.style.display = 'block';
	msg.style.opacity = '1';
	msg.addEventListener('transitionend', () => {
		msg.style.display = 'block';
	});
});
closeBtn.addEventListener('click', () => {
	msg.style.top ="-35%";
	overlay.style.opacity = '0';
	overlay.addEventListener('transitionend', () => {
		overlay.style.display = 'none';
	});
	msg.style.opacity = '0';
	msg.addEventListener('transitionend', () => {
		msg.style.display = 'none';
	});
});
var a=new Array(),n=""
	a[1]='Đ';
	a[2]='ú';
	a[3]='n';
	a[4]='g';
	a[5]=' ';
	a[6]='v';
	a[7]='ậ';
	a[8]='y';
	a[9]='!';
	a[10]=' ';
	a[11]='e';
	a[12]='m';
	a[13]=' ';
	a[14]='y';
	a[15]='ê';
	a[16]='u';
	a[17]=' ';
	a[18]='a';
	a[19]='n';
	a[20]='h';
	a[21]=' ';
	a[22]='n';
	a[23]='h';
	a[24]='ấ';
	a[25]='t';
	a[26]=' ';
	a[27]='v';
	a[28]='ũ';
	a[29]=' ';
	a[30]='t';
	a[31]='r';
	a[32]='ụ';
	a[33]=' ';
	a[34]='l';
	a[35]='u';
	a[36]='ô';
	a[37]='n';
	a[38]=' ';
	a[39]='♥';
	a[40]='♥';
	a[41]='♥';
	a[42]='♥';
	a[43]='♥';
	a[44]='♥';
	a[45]='♥';
function one(){
	t=document.f.txt.value;
	j=t.length;
	if(j>0){
		for(var i=1; i<=j; i++){
			n=n+a[i];
			if(i==45){
				document.f.txt.value=""
				n=""
		}
	}
}
	document.f.txt.value=n
	n=""
	setTimeout("one()",1)
}
function on(){
	one()
}
function Yeu()
{
	if ($('#message').val() == "") {
		$("#divResult").fadeOut(0);
		$("#divResult").html("</br><h2>Em đã nhập gì đâu :v, định lừa anh à :((</h2>");
		$("#divResult").fadeIn(1000,function()
		{});
	}else{
		if($('#message').val().length < "4") {
		$("#divResult").fadeOut(0);
		$("#divResult").html("</br><h2>Thêm mấy chữ nữa đi em :))</h2>");
		$("#divResult").fadeIn(1000,function()
		{});
		}else{
			$("#divResult").fadeOut(0);
			$("#divResult").html("</br><h2>Hahahahhah đừng có chối nữa nhé ! <img src='assets/image/3.gif'</img></h2>");
			$("#divResult").fadeIn(1500,function(){
				$("#divResult2").fadeOut(0);
				$("#divResult2").html("<p>Anh cũng yêu em nhiều lắm<img src='assets/image/2.gif'/></p></br>");
				$("#divResult2").fadeIn(1500,function(){
					$("#divResult3").fadeOut(0);
					$("#divResult3").html("<p>Dù sau này có như thế nào hãy luôn bên anh và yêu anh như thế này em nhé! <img src='assets/image/4.gif'/></p></br>");
					$("#divResult3").fadeIn(1500);
				}
			);
		}
	);
		}
	}
}
if(document.documentElement.clientWidth <= 500){
	document.getElementById("wall").setAttribute("src", "assets/css/bgm.jpg");
	function move(){
		var x = Math.random()*250
		var y = Math.random()*500
		var left=x+'px'
		var top=y+'px'
		noCtn.style.left=left
		noCtn.style.top=top
	};
}
