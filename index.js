window.addEventListener('scroll', function(){var header = document.getElementById("header")
if(scrollY>0){
    header.classList.add("onScroll")
}else{
    header.classList.remove("onScroll")
}})
