let animado = document.querySelectorAll(".animacion");

function mostrarscroll()
{
    let scrolltop = document.documentElement.scrollTop;
    //contador de las clases animado
    for(var i =0;i<animado.length;i++)
    {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado + 700 <  scrolltop)
        {
            animado[i].style.opacity=1;
            
        }
    }
}
window.addEventListener('scroll',mostrarscroll);