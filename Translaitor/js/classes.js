/**
 * Created by саша on 30.07.2016.
 */

class dropMenus {
    constructor() {}

    openHeaderMenuFunc() {
        if (parseInt(dropHeaderMenu.style.top) < 0) {
            dropHeaderMenu.style.top = '66px'
        } else if (parseInt(dropHeaderMenu.style.top) > 0) {
            dropHeaderMenu.style.top = '-550px'
        }
    }

    close_footer_func() {
        footer.style.bottom = '-224px';
        close_footer.innerHTML = ''
    }

    openFullAccountMenu() {
        var setting = document.getElementById('setting');
        var profile = document.getElementById('profile');
        var tabSetting = document.getElementById('tabSetting');
        var tabProfile = document.getElementById('tabProfile');
        setting.setAttribute('class', 'tab-pane fade');
        profile.setAttribute('class', 'tab-pane fade in active');
        tabSetting.setAttribute('class', '');
        tabProfile.setAttribute('class', 'active');
        if (parseInt(footer.style.bottom) < 0) {
            footer.style.bottom = '0px';
            openAccount.style.textDecoration = 'none';
            close_footer.innerHTML = 'close <i class="fa fa-times" aria-hidden="true"></i>'
        }

    }

    openFullConfigMenu() {
        var setting = document.getElementById('setting');
        var profile = document.getElementById('profile');
        var tabSetting = document.getElementById('tabSetting');
        var tabProfile = document.getElementById('tabProfile');

        setting.setAttribute('class', 'tab-pane fade in active');
        profile.setAttribute('class', 'tab-pane fade');
        tabSetting.setAttribute('class', 'active');
        tabProfile.setAttribute('class', '');
        if (parseInt(footer.style.bottom) < 0) {
            footer.style.bottom = '0px';
            openConfig.style.textDecoration = 'none';
            close_footer.innerHTML = 'close <i class="fa fa-times" aria-hidden="true"></i>'
        }
    }

}

class fastTranslate {
    constructor() {}






    send1() {
        if (fastTranslteField != '') {

            var a = "frog";
            var b = ['Жаба', 'Жабка', 'Жаба'];
            var wordsCame = [];

            if (startTranslate.value === a) {
                for (var i = 0; i < b.length; i++) {
                    wordsCame[i] = document.createElement("li");
                    wordsCame[i].className = 'translated';
                    wordsCame[i].innerHTML = b[i];
                   // wordsCame[i].style.display = "block";
                   // wordsCame[i].style.animationDuration = Math.random() + "s";

                    document.getElementById('fast_translate').appendChild(wordsCame[i]);
                }
            } else if (startTranslate.value == "" && wordsCame.length != 0) {
                for (var j = 0; j < b.length; j++) {
                    document.getElementById('fast_translate').removeChild(wordsCame[j]);
                }
            }


        }
    }


    refresh() {
        var translated = document.getElementsByClassName('translated');
        fastTranslteField.value = '';
       // if (translated.length > 0){
            for (var i = 0; i < translated.length; i++) {
                document.getElementById('fast_translate').removeChild(translated[i]);
           // }
        }
    }



    send() {
        if (fastTranslteField != '') {
            var a = "frog";
            var b;
            var urlLink = 'http://52.32.254.211:8080/tranlater-1.0-SNAPSHOT/getRusWord/' + fastTranslteField.value;
            $.ajax({
                type: "GET",
                dataType: 'json',
                url: urlLink,
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                }
            })
                .done(function (data) {
                    b = data;


                    if (startTranslate.value === a) {
                        for (var i = 0; i < b.length; i++) {
                            span[i] = document.createElement("span");
                            span[i].className = 'completeTranslate animated_Words';
                            span[i].innerHTML = b[i];
                            span[i].style.display = "block";
                            span[i].style.animationDuration = Math.random() + "s";

                            translateMain.appendChild(span[i]);
                        }
                    } else if (startTranslate.value == "" && span.length != 0) {
                        for (var j = 0; j < b.length; j++) {
                            translateMain.removeChild(span[j]);
                        }
                    }

                })
                .fail(function (xhr, textStatus, errorThrown) {
                    // alert(xhr.responseText);
                    //alert(textStatus);
                    alert('fail')
                });
        }
    }




}

