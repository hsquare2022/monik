var pict =1;
var tout = 10;
function valide(x){    
    pict = pict + x
    var select =  document.getElementById('image');
    select.src= 'image/imag' + pict + '.jpg';
    if(pict>=tout){
     pict = 1;
    }

    if(pict<1){
       tout
    }
}
function valide(){    
    pict = pict + 1
    var select =  document.getElementById('image');
    select.src= 'image/imag' + pict + '.jpg';
    if(pict>=tout){
     pict = 1;
    }

    if(pict<1){
       tout;
    }
}
window.setInterval(valide, 3000);



const ratio = 0.1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const handleIntersect = function (entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('apparition')
            observer.unobserve(entry.target)
        }
       
    })
}
const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelector('disparition'))

