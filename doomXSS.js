// Sobrescreve o corpo (body) do documento
function inject() {
    console.log("Stager: Injetando o iframe...");
    
    // Título da aba do navegador
    document.title = "DOOM > DOM"; 
    
    // Substitui todo o HTML do <body> pelo iframe do jogo
    document.getElementsByTagName('body')[0].innerHTML = '<iframe src="https://diekmann.github.io/wasm-fizzbuzz/doom/" allowfullscreen style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">';
}

// Verifica se o DOM pode ser injetado imediatamente ou se precisa esperar eventos de carregamento
// Nota: "complete" e "interactive" são status do navegador e não podem ser traduzidos.
if (document.readyState === "complete" || document.readyState === "interactive") {
    console.log("Stager: O DOM está pronto. Executando agora.");
    inject();

} else if (window.attachEvent) {
    // Suporte para navegadores muito antigos (IE)
    console.log("Stager: Navegador antigo detectado. Anexando ao 'onload'.");
    window.attachEvent('onload', inject);

} else if (window.addEventListener) {
    // Suporte para navegadores modernos (Chrome, Firefox, Edge)
    console.log("Stager: Navegador moderno. Adicionando ouvinte para o evento 'load'.");
    window.attachEvent('load', inject, false);

} else {
    // Plano de emergência (Fallback) caso os eventos falhem
    console.log("Stager: Métodos padrão falharam. Recorrendo à contagem de iframes.");
    
    fc = document.getElementsByTagName('iframe').length;
    
    // Cria um loop que verifica a cada 300ms se algo mudou
    setInterval(
        function() {
            if (document.getElementsByTagName('iframe').length != fc) {
                return;
            } else {
                inject();
            }
        },
        300
    );
}