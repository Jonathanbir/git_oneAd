var myMovie = document.getElementById('myMovie');
var mutedButton= document.getElementById('mutedButton');
var playButton = document.getElementById('playButton');
var stopButton = document.getElementById('stopButton');
var bar = document.querySelectorAll(".bar");
var news = document.getElementById("news");
var closebtn = document.getElementById("close-btn");

function init(){
    myMovie.volume =0;

    //先跟HTML畫面產生關連
    document.getElementById("linkButton").onclick = linkNews;
    // mutedButton.onclick = muted;
    var time ;
    time = setInterval(()=>{
        for(let i =0 ; i <=3 ; i++){
            let num = Math.ceil(Math.random()*15);
            // console.log(num);
            bar[i].style.height = num+"px";
        }
    },200)
	
    //再建事件聆聽的功能
    closebtn.addEventListener('click',closeNews);
    news.addEventListener('click',linkNews);
    playButton.addEventListener('click',replayVideo);
    myMovie.addEventListener('click',playVideo)
	mutedButton.addEventListener('click',muted);
}


console.log(Boolean(myMovie.paused));
//點擊跳至連結
var aaa = false;
function linkNews(e){
    // window.open("https://www.onead.com.tw");
    // myMovie.pause();
    if(aaa){
        aaa = false;
        myMovie.play();
        console.log("NoOpen",aaa);
    }else if(!aaa){
        console.log("open",aaa);
        window.open("https://www.onead.com.tw");
        myMovie.pause();
        aaa = true;
    }
    console.log("最後",aaa);

}

function playVideo(){
    myMovie.play();
}


//關閉廣告的按鈕
function closeNews(){
     //終止預設行為
    event.preventDefault();
    //終止事件傳導
    event.stopPropagation();
    document.getElementById("onead-news").style.display = "none";
    if(myMovie.volume !=0 ){
		originVolume=myMovie.volume;
		console.log('originVolume='+originVolume);
		myMovie.volume=0;
		console.log(myMovie.volume);
	}else{
		console.log(originVolume);
		myMovie.volume=originVolume;
		console.log(myMovie.volume);
	}
}


//播放廣告影片

//靜音linear-gradient(yellow,red)
var flag =true;
function muted(){
    //終止預設行為
    // console.log("2u03");
    event.preventDefault();
    //終止事件傳導
    event.stopPropagation();
    flag = !flag;
    myMovie.muted = flag;
	if(flag){
		originVolume=myMovie.volume;
		console.log('originVolume='+originVolume);
		myMovie.volume=0;
        console.log(myMovie.volume);
        for(let i =0 ; i <=3 ; i++){
            bar[i].style.background = "linear-gradient(rgb(189, 188, 188),rgb(57, 57, 57))";
        }
	}else{
        myMovie.volume = 1;
        console.log(myMovie.volume);
        for(let i =0 ; i <=3 ; i++){
           bar[i].style.background =" linear-gradient(rgb(94, 255, 0),green)";
       }
    }
    
}

//播放&暫停
    // if(myMovie.ended){
    //     console.log(11);
    //     playButton.style.display='block';
    // }else{
    playButton.style.display='none';  linkButton.style.display='none';
    // }

    // myMovie.onended = ()=>{
    //     playButton.style.display='block';
    // }
    myMovie.addEventListener("ended",()=>{
        playButton.style.display='block';
        linkButton.style.display='block';
    })


function replayVideo(){
    //終止預設行為
    event.preventDefault();
    //終止事件傳導
    event.stopPropagation();
    myMovie.play();
    playButton.style.display='none';  linkButton.style.display='none';
}

window.addEventListener('load',init);

