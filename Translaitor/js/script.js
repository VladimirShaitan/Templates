var openHeaderMenuBtn = document.getElementsByClassName('nav_search')[0];
var dropHeaderMenu = document.getElementsByClassName('drop_menu')[0];
var footer = document.getElementsByTagName('footer')[0];
var openAccount = document.getElementById('openAccount');
var openConfig = document.getElementById('openConfig');
var fastTranslteField = document.getElementById('fast_translate_word');
var fastTraslateBtn = document.getElementById('translate');
var fastRefreshTranslateField = document.getElementById('refresh');

var close_footer = document.getElementById('close_footer');

var startTranslate = document.getElementById('fast_translate_word');


let dropTopMenu = new dropMenus();
openHeaderMenuBtn.addEventListener('click', dropTopMenu.openHeaderMenuFunc, false);


let dropFooterMenu = new dropMenus();
openAccount.addEventListener('click', dropFooterMenu.openFullAccountMenu, false);
openConfig.addEventListener('click', dropFooterMenu.openFullConfigMenu, false);
close_footer.addEventListener('click', dropFooterMenu.close_footer_func, false);


let FastTranslate = new fastTranslate();
fastTraslateBtn.addEventListener('click', FastTranslate.send1, false);
fastRefreshTranslateField.addEventListener('click', FastTranslate.refresh, false);


//let checkWords = new CheckWords(ask.value, answer.value);
//saveAndAddBtn.addEventListener("click", checkWords.check, false);
//refreshAddingWordBtn.addEventListener("click", checkWords.refresh, false);
//checkWords.send();