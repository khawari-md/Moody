var rain = document.getElementById("hujan");
var storm = document.getElementById("petir");
storm.volume = 0.5;

function ganti(){
	if($("#volume").attr("src")=="gambar/volumeWhite3.png"){
		$("#volume").attr("src","gambar/volumeWhite2.png");
		rain.volume = 0.6;
		storm.volume = 0.3;
	}
	else if($("#volume").attr("src")=="gambar/volumeWhite2.png"){
		$("#volume").attr("src","gambar/volumeWhite1.png");
		rain.volume = 0.3;
		storm.volume = 0.1;
	}
	else if($("#volume").attr("src")=="gambar/volumeWhite1.png"){
		$("#volume").attr("src","gambar/volumeWhite0.png");
		rain.volume = 0.0;
		storm.volume = 0.0;
	}
	else if($("#volume").attr("src")=="gambar/volumeWhite0.png"){
		$("#volume").attr("src","gambar/volumeWhite3.png");
		rain.volume = 1.0;
		storm.volume = 0.5;
	}
}