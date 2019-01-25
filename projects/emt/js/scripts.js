/* start search */

new UISearch(document.getElementById('sb-search'));

$(document).ready(function () {

  var searchTitle = document.querySelector('#search_title');
  
    $('#sb-search').on('click', function () {
        if($('#menu_block').css('display') === 'flex'){
            $('#menu_block').css('display', 'none');
            $(this).find('#search_title').css('display', 'block');
        }
        else{
            $('#menu_block').css('display', 'flex');
            $(this).find('#search_title').css('display', 'none');
        }
    })
    $('#sb-search').on('submit', function () {
      $(this).css('width', '0');
    })
    
    $('body').on('click', function () {
            $('#menu_block').css('display', 'flex');    
            $(searchTitle).css('display', 'none');     
    })
    
    $('body').on('contextmenu', function () {
            $('#menu_block').css('display', 'flex');       
            $(searchTitle).css('display', 'none');    
    })
        

});

/* end search */

/* start DatePicker*/
    $(function () {

      $("#datepicker1").datepicker({
        showOn: "button",
        buttonImage: "images/calendar.png",
        buttonImageOnly: true,
        showButtonPanel: true,
        navigationAsDateFormat: true,
        buttonText: "Выберите дату",
        prevText: "",
        nextText: "",
        currentText: "Сегодня",
        closeText: "Закрыть",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
          "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
          "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
        ],
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
      });
      $("#datepicker2").datepicker({
        showOn: "button",
        buttonImage: "images/calendar.png",
        buttonImageOnly: true,
        showButtonPanel: true,
        navigationAsDateFormat: true,
        buttonText: "Выберите дату",
        prevText: "",
        nextText: "",
        currentText: "Сегодня",
        closeText: "Закрыть",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
          "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
          "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
        ],
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
      });
          /* Clear input if refresh page*/
      var old_goToToday = $.datepicker._gotoToday
      $.datepicker._gotoToday = function (id) {
        old_goToToday.call(this, id)
        this._selectDate(id)
      }
    });
    
    /* end DatePicker*/
    
    
/*при обновлении страницы очищает input */
jQuery(document).ready(function () {
    $('input').val('');
  });
  
  
/* Mmenu */

jQuery(document).ready(function ($) {
    var c = $(".navbar-collapse").mmenu({
        wrappers: ["bootstrap4"],
        "extensions": [
          /* "pagedim-black", */
          "position-front",
          "position-right"
        ],
        "navbars": [{
          "position": "top",
          "content": [
            "searchfield"
          ]
        }],


        /*                             "iconbar": {
                                   "add": true,
                                "top": [
                                      "<a href='#/'><i class='fa fa-home'></i></a>",
                                      "<a href='#/'><i class='fa fa-user'></i></a>"
                                   ], 
                                   "bottom": [
                                      "<a href='#/'><i class='fa fa-twitter'></i></a>",
                                      "<a href='#/'><i class='fa fa-facebook'></i></a>",
                                      "<a href='#/'><i class='fa fa-linkedin'></i></a>"
                                   ]
                                }  */
      }).data("mmenu"),
      d = $("#hamburger").on("click", function (e) {
        e.preventDefault(), t.hasClass("mm-opened") ? c.close() : c.open()
      }).children(".hamburger");
    c.bind("close:finish", function () {
      setTimeout(function () {
        d.removeClass("is-active")
      }, 10)
    }), c.bind("open:finish", function () {
      setTimeout(function () {
        d.addClass("is-active")
      }, 10)
    });

  });
  
  
  