function show(){
    let mobile = document.querySelector('.menu');

    if(mobile.classList.contains('open')){
        mobile.classList.remove('open');
        document.querySelector('.icone').src = "img/list.svg";
    }
    else{
        mobile.classList.add('open');
        document.querySelector('.icone').src = "img/x-lg.svg";
    }
}