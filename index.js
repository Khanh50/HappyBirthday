let x = 10;
const arr =["Hey! OVER HERE!!!","3!", "2!", "1...","You are Great" , "And Beautiful", "And Awesome", "Love U A Ton", "Love U 3000", "Love U Best"]
let i = 0;
setInterval(()=>{
    $(".final-speak").html(arr[i]);
    i++;
    if (i === 10){
        i = 0;
    }
},900)
let j = 1;
setInterval(()=>{
    $(".main-img").attr("src", "image/pic"+ j +".png");
    j++;
    if (j === 4)
    {
        j = 1;
    }
}, 300)


