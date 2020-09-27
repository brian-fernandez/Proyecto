let animado = document.querySelectorAll(".animacion");



function mostrarscroll()
{
    let scrolltop = document.documentElement.scrollTop;
    //contador de las clases animado
    for(var i =0;i<animado.length;i++)
    {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado + 600 <  scrolltop)
        {
            animado[i].style.opacity=1;
            animado[i].classList.add("animacionMostraArriba");
            
        }
    }
}
window.addEventListener('scroll',mostrarscroll);

let animado2 = document.querySelectorAll(".animacion2");
function mostrarscroll2()
{
    let scrolltop2 = document.documentElement.scrollTop;
    //contador de las clases animado
    for(var i =0;i<animado2.length;i++)
    {
        let alturaAnimado2 = animado2[i].offsetTop;
        if(alturaAnimado2 -400 <  scrolltop2)
        {
            animado2[i].style.opacity=1;
            animado2[i].classList.add("animacionMostraArriba");
            
        }
    }
}


window.addEventListener('scroll',mostrarscroll2);

let animado3 = document.querySelectorAll(".animacion3");
function mostrarscroll3()
{
    let scrolltop3 = document.documentElement.scrollTop;
    //contador de las clases animado
    for(var i =0;i<animado3.length;i++)
    {
        let alturaAnimado3 = animado3[i].offsetTop;
        if(alturaAnimado3 -300 <  scrolltop3)
        {
            animado3[i].style.opacity=1;
            animado3[i].classList.add("animacionMostraArriba");
            
        }
    }
}


window.addEventListener('scroll',mostrarscroll3);

let animado4= document.querySelectorAll(".animacion4");
function mostrarscroll4()
{
    let scrolltop3 = document.documentElement.scrollTop;
    //contador de las clases animado
    for(var i =0;i<animado4.length;i++)
    {
        let alturaAnimado3 = animado4[i].offsetTop;
        if(alturaAnimado3 -300 <  scrolltop3)
        {
            animado4[i].style.opacity=1;
            animado4[i].classList.add("animacionMostraArriba");
            
        }
    }
}


window.addEventListener('scroll',mostrarscroll4);






let animado5= document.querySelectorAll(".animacion5");
function mostrarscroll5()
{
    let scrolltop5 = document.documentElement.scrollTop;
    //contador de las clases animado
    for(var i =0;i<animado5.length;i++)
    {
        let alturaAnimado5 = animado5[i].offsetTop;
        if(alturaAnimado5 +1900 <  scrolltop5)
        {
            animado5[i].style.opacity=1;
            animado5[i].classList.add("animacionMostraIzquierda");
            
            
        }
    }
}


window.addEventListener('scroll',mostrarscroll5);

let animado6= document.querySelectorAll(".animacion6");
function mostrarscroll6()
{
    let scrolltop3 = document.documentElement.scrollTop;
    //contador de las clases animado
    for(var i =0;i<animado6.length;i++)
    {
        let alturaAnimado3 = animado6[i].offsetTop;
        if(alturaAnimado3 +1900 <  scrolltop3)
        {
            animado6[i].style.opacity=1;
            animado6[i].classList.add("animacionMostraDerecha");
            
        }
    }
}


window.addEventListener('scroll',mostrarscroll6);

let animado7= document.querySelectorAll(".animacion7");
function mostrarscroll7()
{
    let scrolltop3 = document.documentElement.scrollTop;
    //contador de las clases animado
    for(var i =0;i<animado7.length;i++)
    {
        let alturaAnimado3 = animado7[i].offsetTop;
        if(alturaAnimado3 +2750 <  scrolltop3)
        {
            animado7[i].style.opacity=1;
            animado7[i].classList.add("animacionMostraIzquierda");
            
        }
    }
}


window.addEventListener('scroll',mostrarscroll7);


let animado8= document.querySelectorAll(".animacion8");
function mostrarscroll8()
{
    let scrolltop3 = document.documentElement.scrollTop;
    //contador de las clases animado
    for(var i =0;i<animado8.length;i++)
    {
        let alturaAnimado3 = animado8[i].offsetTop;
        if(alturaAnimado3 +3250 <  scrolltop3)
        {
            animado8[i].style.opacity=1;
            animado8[i].classList.add("animacionMostraDerecha");
            
        }
    }
}


window.addEventListener('scroll',mostrarscroll8);

let animado9= document.querySelectorAll(".animacion9");
function mostrarscroll9()
{
    let scrolltop3 = document.documentElement.scrollTop;
    //contador de las clases animado
    for(var i =0;i<animado9.length;i++)
    {
        let alturaAnimado3 = animado9[i].offsetTop;
        if(alturaAnimado3 +3750 <  scrolltop3)
        {
            animado9[i].style.opacity=1;
            animado9[i].classList.add("animacionMostraIzquierda");
            
        }
    }
}


window.addEventListener('scroll',mostrarscroll9);