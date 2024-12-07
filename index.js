// Início do Evento
document.addEventListener(
    "DOMContentLoaded", // DOMContentLoaded": Garante que o JavaScript irá ocorrer somente depois que a página HTML for carregada
    function () { 
        // Seleciona o elemento <menu> do HTML pelo nome do elemento
        const menu = document.querySelector("menu");
        const topo = menu.offsetTop // Obtém a distância em PX entre o topo da página e do menu.
        window.addEventListener("scroll", function(){
            const posicaoScroll = document.documentElement.scrollTop || document.body.scrollTop; // Permite que essa função ocorra tanto em navegadores atuais, quanto nos antigos.

            //Criando uma condicional
            if (posicaoScroll>=topo){ //Se a posição do scroll for maior ou igual ao topo da página

                //Fixo o meu menu
                menu.classList.add("fixed");
            } else { // Senão
                menu.classList.remove("fixed");
            }
        });
    }
);