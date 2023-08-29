/* =========================Menu=========================*/
/* =========================Menu=========================*/
$(document).ready(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active-nav-list');
        $('.nav-list').toggleClass('active-nav-list');
    });

});


/* =========================Select header menu link =========================*/
/* =========================Select header menu link =========================*/
function open_window_service() {
    var window_service = document.getElementById('service');
    if (window_service.value === "vl-sacada") {
        window.location.replace("sacada.html");
    } else if (window_service.value === "vl-banheiro") {
        location.href = "banheiro.html";
    } else if (window_service.value === "vl-portas") {
        window.location.replace("portas.html");
    } else if (window_service.value === "vl-janelas") {
        location.href = "janelas.html";
    } else if (window_service.value === "vl-espelhos") {
        window.location.replace("espelhos.html");
    }
    /*Note: use window.location.replace("sacada.html"); or location.href = "janelas.html"; we have the same result*/
}

/* =========================Aba para calcular em cm ou m=========================*/
/* =========================Aba para calcular em cm ou m=========================*/
function openUnit(evt, unit) {
    var i, x, tablinks;
    x = document.getElementsByClassName("unit");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("button-tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("background-template13", "");
    }
    document.getElementById(unit).style.display = "block";
    evt.currentTarget.className += " background-template13";
}

/* ========================= Inicio sacada=========================*/
/* ========================= Inicio sacada=========================*/
/* ========================= Inicio sacada=========================*/


/* =========================Realizar o calculo em cm=========================*/
/* =========================Realizar o calculo em cm=========================*/
function sacada_calcular_cm() {
    var resultado = (((document.getElementById('sacada-altura-cm').value) / 100) * ((document.getElementById('sacada-largura-cm').value) / 100));
    var corvidro = document.getElementById('sacada-coresvidro-cm');
    if (corvidro.value === "incolor") {
        resultado = resultado * 550;
    } else if (corvidro.value === "verde") {
        resultado = resultado * 700;
    } else {
        resultado = resultado * 700;
    }

    /* form_sacada_orcamento_cm.resultado_orcamento.value = resultado.toFixed(2);*/
    /* form_sacada_orcamento_cm.resultado_orcamento_altura.value = 'Altura: ' + (document.getElementById('altura-cm').value) + 'cm';*/
    document.getElementById('sacada-resultado-cm-altura').innerHTML = 'Altura: ' + (document.getElementById('sacada-altura-cm').value) + 'cm';
    document.getElementById('sacada-resultado-cm-largura').innerHTML = 'Largura: ' + (document.getElementById('sacada-largura-cm').value) + 'cm';
    document.getElementById('sacada-resultado-cm-cor').innerHTML = 'Cor: ' + document.getElementById('sacada-coresvidro-cm').value;
    document.getElementById('sacada-resultado-cm').innerHTML = 'Seu orçamento: ' + resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('sacada-resultado-cm-note').innerHTML = 'Nota: **Sempre revise "Altura", "Largura" e "Cor escolhida".';
}

function sacada_reset_cm() {
    document.getElementById('sacada-resultado-cm-altura').innerHTML = ' ';
    document.getElementById('sacada-resultado-cm-largura').innerHTML = ' ';
    document.getElementById('sacada-resultado-cm-cor').innerHTML = ' ';
    document.getElementById('sacada-resultado-cm').innerHTML = ' ';
    document.getElementById('sacada-resultado-cm-note').innerHTML = ' ';
}

/* =========================Realizar o calculo em m=========================*/
/* =========================Realizar o calculo em m=========================*/
function sacada_calcular_m() {
    var resultado = (((document.getElementById('sacada-altura-m').value)) * ((document.getElementById('sacada-largura-m').value)));
    var corvidro = document.getElementById('sacada-coresvidro-m');
    if (corvidro.value === "incolor") {
        resultado = resultado * 550;
    } else if (corvidro.value === "verde") {
        resultado = resultado * 700;
    } else {
        resultado = resultado * 700;
    }
    /* form_sacada_orcamento_m.resultado_orcamento.value = resultado.toFixed(2);*/
    document.getElementById('sacada-resultado-m-altura').innerHTML = 'Altura: ' + (document.getElementById('sacada-altura-m').value) + 'm';
    document.getElementById('sacada-resultado-m-largura').innerHTML = 'Largura: ' + (document.getElementById('sacada-largura-m').value) + 'm';
    document.getElementById('sacada-resultado-m-cor').innerHTML = 'Cor: ' + document.getElementById('sacada-coresvidro-m').value;
    document.getElementById('sacada-resultado-m').innerHTML = 'Seu orçamento: ' + resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('sacada-resultado-m-note').innerHTML = 'Nota: **Sempre revise "Altura", "Largura" e "Cor escolhida".';
}

function sacada_reset_m() {
    document.getElementById('sacada-resultado-m-altura').innerHTML = ' ';
    document.getElementById('sacada-resultado-m-largura').innerHTML = ' ';
    document.getElementById('sacada-resultado-m-cor').innerHTML = ' ';
    document.getElementById('sacada-resultado-m').innerHTML = ' ';
    document.getElementById('sacada-resultado-m-note').innerHTML = ' ';

}

/* =========================Automatic Slideshow - sacada=========================*/
/* =========================Automatic Slideshow - sacada=========================
showSlides_sacada();

function showSlides_sacada() {
    let s;
    let slides_sacada = document.getElementsByClassName("mySlides-sacada");
    let dots_sacada = document.getElementsByClassName("dot-sacada");
    for (s = 0; s < slides_sacada.length; s++) {
        slides_sacada[s].style.display = "none";
    }
    slideIndex_sacada++;
    if (slideIndex_sacada > slides_sacada.length) { slideIndex_sacada = 1 }
    for (s = 0; s < slides_sacada.length; s++) {
        dots_sacada[s].className = dots_sacada[s].className.replace(" active", "");
    }
    slides_sacada[slideIndex_sacada - 1].style.display = "block";
    dots_sacada[slideIndex_sacada - 1].className += " active";
    setTimeout(showSlides_sacada, 3500); // Change image every 3.5 seconds
}*/
let slideIndex_sacada = 0;
/* ========================= Fim sacada=========================*/
/* ========================= FIm sacada=========================*/
/* ========================= Fim sacada=========================*/


/* ========================= Inicio banheiro=========================*/
/* ========================= Inicio banheiro=========================*/
/* ========================= Inicio banheiro=========================*/


/* =========================Realizar o calculo em cm=========================*/
/* =========================Realizar o calculo em cm=========================*/
function banheiro_calcular_cm() {
    var resultado = (((document.getElementById('banheiro-altura-cm').value) / 100) * ((document.getElementById('banheiro-largura-cm').value) / 100));
    var corvidro = document.getElementById('banheiro-coresvidro-cm');
    if (corvidro.value === "incolor") {
        resultado = resultado * 550;
    } else if (corvidro.value === "verde") {
        resultado = resultado * 700;
    } else {
        resultado = resultado * 700;
    }

    /* form_banheiro_orcamento_cm.resultado_orcamento.value = resultado.toFixed(2);*/
    /* form_banheiro_orcamento_cm.resultado_orcamento_altura.value = 'Altura: ' + (document.getElementById('altura-cm').value) + 'cm';*/
    document.getElementById('banheiro-resultado-cm-altura').innerHTML = 'Altura: ' + (document.getElementById('banheiro-altura-cm').value) + 'cm';
    document.getElementById('banheiro-resultado-cm-largura').innerHTML = 'Largura: ' + (document.getElementById('banheiro-largura-cm').value) + 'cm';
    document.getElementById('banheiro-resultado-cm-cor').innerHTML = 'Cor: ' + document.getElementById('banheiro-coresvidro-cm').value;
    document.getElementById('banheiro-resultado-cm').innerHTML = 'Seu orçamento: ' + resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('banheiro-resultado-cm-note').innerHTML = 'Nota: **Sempre revise "Altura", "Largura" e "Cor escolhida".';
}

function banheiro_reset_cm() {
    document.getElementById('banheiro-resultado-cm-altura').innerHTML = ' ';
    document.getElementById('banheiro-resultado-cm-largura').innerHTML = ' ';
    document.getElementById('banheiro-resultado-cm-cor').innerHTML = ' ';
    document.getElementById('banheiro-resultado-cm').innerHTML = ' ';
    document.getElementById('banheiro-resultado-cm-note').innerHTML = ' ';
}

/* =========================Realizar o calculo em m=========================*/
/* =========================Realizar o calculo em m=========================*/
function banheiro_calcular_m() {
    var resultado = (((document.getElementById('banheiro-altura-m').value)) * ((document.getElementById('banheiro-largura-m').value)));
    var corvidro = document.getElementById('banheiro-coresvidro-m');
    if (corvidro.value === "incolor") {
        resultado = resultado * 550;
    } else if (corvidro.value === "verde") {
        resultado = resultado * 700;
    } else {
        resultado = resultado * 700;
    }
    /* form_banheiro_orcamento_m.resultado_orcamento.value = resultado.toFixed(2);*/
    document.getElementById('banheiro-resultado-m-altura').innerHTML = 'Altura: ' + (document.getElementById('banheiro-altura-m').value) + 'm';
    document.getElementById('banheiro-resultado-m-largura').innerHTML = 'Largura: ' + (document.getElementById('banheiro-largura-m').value) + 'm';
    document.getElementById('banheiro-resultado-m-cor').innerHTML = 'Cor: ' + document.getElementById('banheiro-coresvidro-m').value;
    document.getElementById('banheiro-resultado-m').innerHTML = 'Seu orçamento: ' + resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('banheiro-resultado-m-note').innerHTML = 'Nota: **Sempre revise "Altura", "Largura" e "Cor escolhida".';
}

function banheiro_reset_m() {
    document.getElementById('banheiro-resultado-m-altura').innerHTML = ' ';
    document.getElementById('banheiro-resultado-m-largura').innerHTML = ' ';
    document.getElementById('banheiro-resultado-m-cor').innerHTML = ' ';
    document.getElementById('banheiro-resultado-m').innerHTML = ' ';
    document.getElementById('banheiro-resultado-m-note').innerHTML = ' ';

}

/* =========================Automatic Slideshow - banheiro=========================*/
/* =========================Automatic Slideshow - banheiro=========================
let slideIndex_banheiro = 0;
showSlides_banheiro();

function showSlides_banheiro() {
    let b;
    let slides_banheiro = document.getElementsByClassName("mySlides-banheiro");
    let dots_banheiro = document.getElementsByClassName("dot-banheiro");
    for (b = 0; b < slides_banheiro.length; b++) {
        slides_banheiro[b].style.display = "none";
    }
    slideIndex_banheiro++;
    if (slideIndex_banheiro > slides_banheiro.length) { slideIndex_banheiro = 1 }
    for (b = 0; b < slides_banheiro.length; b++) {
        dots_banheiro[b].className = dots_banheiro[b].className.replace(" active", "");
    }
    slides_banheiro[slideIndex_banheiro - 1].style.display = "block";
    dots_banheiro[slideIndex_banheiro - 1].className += " active";
    setTimeout(showSlides_banheiro, 3500); // Change image every 3.5 seconds
}*/
/* ========================= Fim banheiro=========================*/
/* ========================= FIm banheiro=========================*/
/* ========================= Fim banheiro=========================*/


/* ========================= Inicio porta=========================*/
/* ========================= Inicio porta=========================*/
/* ========================= Inicio porta=========================*/


/* =========================Realizar o calculo em cm=========================*/
/* =========================Realizar o calculo em cm=========================*/
function porta_calcular_cm() {
    var resultado = (((document.getElementById('porta-altura-cm').value) / 100) * ((document.getElementById('porta-largura-cm').value) / 100));
    var corvidro = document.getElementById('porta-coresvidro-cm');
    if (corvidro.value === "incolor") {
        resultado = resultado * 550;
    } else if (corvidro.value === "verde") {
        resultado = resultado * 700;
    } else {
        resultado = resultado * 700;
    }

    /* form_porta_orcamento_cm.resultado_orcamento.value = resultado.toFixed(2);*/
    /* form_porta_orcamento_cm.resultado_orcamento_altura.value = 'Altura: ' + (document.getElementById('altura-cm').value) + 'cm';*/
    document.getElementById('porta-resultado-cm-altura').innerHTML = 'Altura: ' + (document.getElementById('porta-altura-cm').value) + 'cm';
    document.getElementById('porta-resultado-cm-largura').innerHTML = 'Largura: ' + (document.getElementById('porta-largura-cm').value) + 'cm';
    document.getElementById('porta-resultado-cm-cor').innerHTML = 'Cor: ' + document.getElementById('porta-coresvidro-cm').value;
    document.getElementById('porta-resultado-cm').innerHTML = 'Seu orçamento: ' + resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('porta-resultado-cm-note').innerHTML = 'Nota: **Sempre revise "Altura", "Largura" e "Cor escolhida".';
}

function porta_reset_cm() {
    document.getElementById('porta-resultado-cm-altura').innerHTML = ' ';
    document.getElementById('porta-resultado-cm-largura').innerHTML = ' ';
    document.getElementById('porta-resultado-cm-cor').innerHTML = ' ';
    document.getElementById('porta-resultado-cm').innerHTML = ' ';
    document.getElementById('porta-resultado-cm-note').innerHTML = ' ';
}

/* =========================Realizar o calculo em m=========================*/
/* =========================Realizar o calculo em m=========================*/
function porta_calcular_m() {
    var resultado = (((document.getElementById('porta-altura-m').value)) * ((document.getElementById('porta-largura-m').value)));
    var corvidro = document.getElementById('porta-coresvidro-m');
    if (corvidro.value === "incolor") {
        resultado = resultado * 550;
    } else if (corvidro.value === "verde") {
        resultado = resultado * 700;
    } else {
        resultado = resultado * 700;
    }
    /* form_porta_orcamento_m.resultado_orcamento.value = resultado.toFixed(2);*/
    document.getElementById('porta-resultado-m-altura').innerHTML = 'Altura: ' + (document.getElementById('porta-altura-m').value) + 'm';
    document.getElementById('porta-resultado-m-largura').innerHTML = 'Largura: ' + (document.getElementById('porta-largura-m').value) + 'm';
    document.getElementById('porta-resultado-m-cor').innerHTML = 'Cor: ' + document.getElementById('porta-coresvidro-m').value;
    document.getElementById('porta-resultado-m').innerHTML = 'Seu orçamento: ' + resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('porta-resultado-m-note').innerHTML = 'Nota: **Sempre revise "Altura", "Largura" e "Cor escolhida".';
}

function porta_reset_m() {
    document.getElementById('porta-resultado-m-altura').innerHTML = ' ';
    document.getElementById('porta-resultado-m-largura').innerHTML = ' ';
    document.getElementById('porta-resultado-m-cor').innerHTML = ' ';
    document.getElementById('porta-resultado-m').innerHTML = ' ';
    document.getElementById('porta-resultado-m-note').innerHTML = ' ';

}

/* =========================Automatic Slideshow - porta=========================*/
/* =========================Automatic Slideshow - porta=========================
let slideIndex_porta = 0;
showSlides_porta();

function showSlides_porta() {
    let p;
    let slides_porta = document.getElementsByClassName("mySlides-porta");
    let dots_porta = document.getElementsByClassName("dot-porta");
    for (p = 0; p < slides_porta.length; p++) {
        slides_porta[p].style.display = "none";
    }
    slideIndex_porta++;
    if (slideIndex_porta > slides_porta.length) { slideIndex_porta = 1 }
    for (p = 0; p < slides_porta.length; p++) {
        dots_porta[p].className = dots_porta[p].className.replace(" active", "");
    }
    slides_porta[slideIndex_porta - 1].style.display = "block";
    dots_porta[slideIndex_porta - 1].className += " active";
    setTimeout(showSlides_porta, 3500); // Change image every 3.5 seconds
}*/
/* ========================= Fim porta=========================*/
/* ========================= FIm porta=========================*/
/* ========================= Fim porta=========================*/


/* ========================= Inicio Janela=========================*/
/* ========================= Inicio Janela=========================*/
/* ========================= Inicio Janela=========================*/


/* =========================Realizar o calculo em cm=========================*/
/* =========================Realizar o calculo em cm=========================*/
function janela_calcular_cm() {
    var resultado = (((document.getElementById('janela-altura-cm').value) / 100) * ((document.getElementById('janela-largura-cm').value) / 100));
    var corvidro = document.getElementById('janela-coresvidro-cm');
    if (corvidro.value === "incolor") {
        resultado = resultado * 550;
    } else if (corvidro.value === "verde") {
        resultado = resultado * 700;
    } else {
        resultado = resultado * 700;
    }

    /* form_janela_orcamento_cm.resultado_orcamento.value = resultado.toFixed(2);*/
    /* form_janela_orcamento_cm.resultado_orcamento_altura.value = 'Altura: ' + (document.getElementById('altura-cm').value) + 'cm';*/
    document.getElementById('janela-resultado-cm-altura').innerHTML = 'Altura: ' + (document.getElementById('janela-altura-cm').value) + 'cm';
    document.getElementById('janela-resultado-cm-largura').innerHTML = 'Largura: ' + (document.getElementById('janela-largura-cm').value) + 'cm';
    document.getElementById('janela-resultado-cm-cor').innerHTML = 'Cor: ' + document.getElementById('janela-coresvidro-cm').value;
    document.getElementById('janela-resultado-cm').innerHTML = 'Seu orçamento: ' + resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('janela-resultado-cm-note').innerHTML = 'Nota: **Sempre revise "Altura", "Largura" e "Cor escolhida".';
}

function janela_reset_cm() {
    document.getElementById('janela-resultado-cm-altura').innerHTML = ' ';
    document.getElementById('janela-resultado-cm-largura').innerHTML = ' ';
    document.getElementById('janela-resultado-cm-cor').innerHTML = ' ';
    document.getElementById('janela-resultado-cm').innerHTML = ' ';
    document.getElementById('janela-resultado-cm-note').innerHTML = ' ';
}

/* =========================Realizar o calculo em m=========================*/
/* =========================Realizar o calculo em m=========================*/
function janela_calcular_m() {
    var resultado = (((document.getElementById('janela-altura-m').value)) * ((document.getElementById('janela-largura-m').value)));
    var corvidro = document.getElementById('janela-coresvidro-m');
    if (corvidro.value === "incolor") {
        resultado = resultado * 550;
    } else if (corvidro.value === "verde") {
        resultado = resultado * 700;
    } else {
        resultado = resultado * 700;
    }
    /* form_janela_orcamento_m.resultado_orcamento.value = resultado.toFixed(2);*/
    document.getElementById('janela-resultado-m-altura').innerHTML = 'Altura: ' + (document.getElementById('janela-altura-m').value) + 'm';
    document.getElementById('janela-resultado-m-largura').innerHTML = 'Largura: ' + (document.getElementById('janela-largura-m').value) + 'm';
    document.getElementById('janela-resultado-m-cor').innerHTML = 'Cor: ' + document.getElementById('janela-coresvidro-m').value;
    document.getElementById('janela-resultado-m').innerHTML = 'Seu orçamento: ' + resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('janela-resultado-m-note').innerHTML = 'Nota: **Sempre revise "Altura", "Largura" e "Cor escolhida".';
}

function janela_reset_m() {
    document.getElementById('janela-resultado-m-altura').innerHTML = ' ';
    document.getElementById('janela-resultado-m-largura').innerHTML = ' ';
    document.getElementById('janela-resultado-m-cor').innerHTML = ' ';
    document.getElementById('janela-resultado-m').innerHTML = ' ';
    document.getElementById('janela-resultado-m-note').innerHTML = ' ';

}

/* =========================Automatic Slideshow - Janela=========================*/
/* =========================Automatic Slideshow - Janela=========================
let slideIndex_janela = 0;
showSlides_janela();

function showSlides_janela() {
    let j;
    let slides_janela = document.getElementsByClassName("mySlides-janela");
    let dots_janela = document.getElementsByClassName("dot-janela");
    for (j = 0; j < slides_janela.length; j++) {
        slides_janela[j].style.display = "none";
    }
    slideIndex_janela++;
    if (slideIndex_janela > slides_janela.length) { slideIndex_janela = 1 }
    for (j = 0; j < slides_janela.length; j++) {
        dots_janela[j].className = dots_janela[j].className.replace(" active", "");
    }
    slides_janela[slideIndex_janela - 1].style.display = "block";
    dots_janela[slideIndex_janela - 1].className += " active";
    setTimeout(showSlides_janela, 3500); // Change image every 3.5 seconds
}*/
/* ========================= Fim Janela=========================*/
/* ========================= FIm Janela=========================*/
/* ========================= Fim Janela=========================*/

/* ========================= Inicio espelho=========================*/
/* ========================= Inicio espelho=========================*/
/* ========================= Inicio espelho=========================*/


/* =========================Realizar o calculo em cm=========================*/
/* =========================Realizar o calculo em cm=========================*/
function espelho_calcular_cm() {
    var resultado = (((document.getElementById('espelho-altura-cm').value) / 100) * ((document.getElementById('espelho-largura-cm').value) / 100));
    var corvidro = document.getElementById('espelho-coresvidro-cm');
    if (corvidro.value === "incolor") {
        resultado = resultado * 550;
    } else if (corvidro.value === "verde") {
        resultado = resultado * 700;
    } else {
        resultado = resultado * 700;
    }

    /* form_espelho_orcamento_cm.resultado_orcamento.value = resultado.toFixed(2);*/
    /* form_espelho_orcamento_cm.resultado_orcamento_altura.value = 'Altura: ' + (document.getElementById('altura-cm').value) + 'cm';*/
    document.getElementById('espelho-resultado-cm-altura').innerHTML = 'Altura: ' + (document.getElementById('espelho-altura-cm').value) + 'cm';
    document.getElementById('espelho-resultado-cm-largura').innerHTML = 'Largura: ' + (document.getElementById('espelho-largura-cm').value) + 'cm';
    document.getElementById('espelho-resultado-cm-cor').innerHTML = 'Cor: ' + document.getElementById('espelho-coresvidro-cm').value;
    document.getElementById('espelho-resultado-cm').innerHTML = 'Seu orçamento: ' + resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('espelho-resultado-cm-note').innerHTML = 'Nota: **Sempre revise "Altura", "Largura" e "Cor escolhida".';
}

function espelho_reset_cm() {
    document.getElementById('espelho-resultado-cm-altura').innerHTML = ' ';
    document.getElementById('espelho-resultado-cm-largura').innerHTML = ' ';
    document.getElementById('espelho-resultado-cm-cor').innerHTML = ' ';
    document.getElementById('espelho-resultado-cm').innerHTML = ' ';
    document.getElementById('espelho-resultado-cm-note').innerHTML = ' ';
}

/* =========================Realizar o calculo em m=========================*/
/* =========================Realizar o calculo em m=========================*/
function espelho_calcular_m() {
    var resultado = (((document.getElementById('espelho-altura-m').value)) * ((document.getElementById('espelho-largura-m').value)));
    var corvidro = document.getElementById('espelho-coresvidro-m');
    if (corvidro.value === "incolor") {
        resultado = resultado * 550;
    } else if (corvidro.value === "verde") {
        resultado = resultado * 700;
    } else {
        resultado = resultado * 700;
    }
    /* form_espelho_orcamento_m.resultado_orcamento.value = resultado.toFixed(2);*/
    document.getElementById('espelho-resultado-m-altura').innerHTML = 'Altura: ' + (document.getElementById('espelho-altura-m').value) + 'm';
    document.getElementById('espelho-resultado-m-largura').innerHTML = 'Largura: ' + (document.getElementById('espelho-largura-m').value) + 'm';
    document.getElementById('espelho-resultado-m-cor').innerHTML = 'Cor: ' + document.getElementById('espelho-coresvidro-m').value;
    document.getElementById('espelho-resultado-m').innerHTML = 'Seu orçamento: ' + resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('espelho-resultado-m-note').innerHTML = 'Nota: **Sempre revise "Altura", "Largura" e "Cor escolhida".';
}

function espelho_reset_m() {
    document.getElementById('espelho-resultado-m-altura').innerHTML = ' ';
    document.getElementById('espelho-resultado-m-largura').innerHTML = ' ';
    document.getElementById('espelho-resultado-m-cor').innerHTML = ' ';
    document.getElementById('espelho-resultado-m').innerHTML = ' ';
    document.getElementById('espelho-resultado-m-note').innerHTML = ' ';

}

/* =========================Automatic Slideshow - espelho=========================*/
/* =========================Automatic Slideshow - espelho=========================
let slideIndex_espelho = 0;
showSlides_espelho();

function showSlides_espelho() {
    let e;
    let slides_espelho = document.getElementsByClassName("mySlides-espelho");
    let dots_espelho = document.getElementsByClassName("dot-espelho");
    for (e = 0; e < slides_espelho.length; e++) {
        slides_espelho[e].style.display = "none";
    }
    slideIndex_espelho++;
    if (slideIndex_espelho > slides_espelho.length) { slideIndex_espelho = 1 }
    for (e = 0; e < slides_espelho.length; e++) {
        dots_espelho[e].className = dots_espelho[e].className.replace(" active", "");
    }
    slides_espelho[slideIndex_espelho - 1].style.display = "block";
    dots_espelho[slideIndex_espelho - 1].className += " active";
    setTimeout(showSlides_espelho, 3500); // Change image every 3.5 seconds
}*/
/* ========================= Fim espelho=========================*/
/* ========================= FIm espelho=========================*/
/* ========================= Fim espelho=========================*/