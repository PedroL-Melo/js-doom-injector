# js-doom-injector
# DOOM > DOM 🔫

Um script JavaScript injetor ("Stager") que substitui o conteúdo do corpo (`<body>`) de qualquer página da web por uma versão totalmente jogável do clássico **DOOM** rodando via WebAssembly.

> **Nota:** Este projeto é puramente educacional e para fins de diversão (Easter Egg).

## 🚀 Funcionalidades

- **Injeção Imediata:** Substitui todo o HTML da página atual por um iframe em tela cheia.
- **Compatibilidade Cross-Browser:** Tenta detectar diferentes métodos de carregamento (`readyState`, `addEventListener` para modernos e `attachEvent` para legados/IE).
- **Fallback de Emergência:** Possui um loop de verificação caso os eventos de carregamento padrão falhem.
- **Estilização Automática:** Garante que o jogo ocupe 100% da viewport e fique sobreposto a qualquer outro elemento (`z-index` alto).

## 📦 Como Usar

Existem duas formas principais de utilizar este script:

### 1. Via Console do Desenvolvedor
1. Acesse qualquer site na internet.
2. Abra as Ferramentas de Desenvolvedor (Pressione `F12` ou `Ctrl+Shift+I`).
3. Vá na aba **Console**.
4. Cole o código JavaScript.
5. Pressione **Enter** e o jogo iniciará.

### 2. Como um Bookmarklet (Favorito)
Você pode salvar o código como um botão na sua barra de favoritos para transformar qualquer site em DOOM com um clique.

1. Crie um novo favorito no seu navegador.
2. No campo "URL" ou "Endereço", cole o código abaixo (minificado):

```javascript
javascript:(function(){function inject(){console.log("Stager: Injetando...");document.title="DOOM > DOM";document.body.innerHTML='<iframe src="[https://diekmann.github.io/wasm-fizzbuzz/doom/](https://diekmann.github.io/wasm-fizzbuzz/doom/)" allowfullscreen style="position:fixed;top:0;left:0;bottom:0;right:0;width:100%;height:100%;border:none;margin:0;padding:0;overflow:hidden;z-index:999999;">';}if(document.readyState==="complete"||document.readyState==="interactive"){inject();}else{window.addEventListener('load',inject);}})();

```
## 🛡️ Uso em Security Research (XSS Payload)

Este script serve como uma excelente **Proof of Concept (PoC)** visual para demonstrar vulnerabilidades de **Cross-Site Scripting (XSS)**.

Ao contrário do clássico e discreto `alert(1)`, injetar o **DOOM** demonstra de forma inegável o impacto da vulnerabilidade, provando que o atacante tem controle total sobre o DOM e a renderização da página.

### Exemplo de Injeção
Em campos de input vulneráveis (sem sanitização adequada), você pode utilizar a versão minificada dentro de uma tag script:

```html
<script>
(function(){function i(){document.body.innerHTML='<iframe src="[https://diekmann.github.io/wasm-fizzbuzz/doom/](https://diekmann.github.io/wasm-fizzbuzz/doom/)" style="position:fixed;top:0;left:0;width:100%;height:100%;border:none;z-index:999999;"></iframe>'}if(document.readyState==="complete"){i()}else{window.addEventListener('load',i)}})();
</script>
```
## Credits

- **DOOM Wasm Port:** O porte do jogo para WebAssembly é mantido por [diekmann](https://github.com/diekmann/wasm-fizzbuzz).
