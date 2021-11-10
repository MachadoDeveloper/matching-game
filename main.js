import CardGame from "./src/components/CardGame";
import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
const $root = document.querySelector('#root'); // $ notação usada para se referir ao DOM
//$root.innerHTML = 'Texto'; Não utilizar innerHTML
//$root.textContent = 'Nunca desista dos seus sonhos';
const $htmlCardGame = CardGame(); //chamada da função
//$root.textContent = $htmlCardGame; fica estranho porque aparece as tags html
//$root.innerHTML = $htmlCardGame; // não usar por questoes de segurança
$root.insertAdjacentHTML("beforeend", $htmlCardGame); // tem outras formas de inserir

