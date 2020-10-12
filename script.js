document.addEventListener("mouseover", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(Layer=>{
        const speed= layer.getAttribute('data-speed')
        const x= (window.innerWidht - e.pageX*speed)/100
        const y= (window.innerHeight - e.pageY*speed)/100
        layer.style.transform= `translateX(${x}px) translate(${y}px)`
    })
}