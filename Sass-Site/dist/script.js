
$(document).ready(function() {
    
    $(".theme__inner").click(function() {
        $(".theme__box").toggleClass("active");

    });
    $(".overview__nav").click(function() {
        $(".overview_link").toggleClass("active");
    });
    //==============================================
    let flag = false;

    function pic() {
      let pic = $(".icon-pic");
      if (flag) {
          pic.attr("src", "./img/logo-dark.png");
    
      } else {
          pic.attr("src", "./img/logo-light.png");
        }
        
        flag = !flag;
    
    }
    $('#checkbox').change(function() {
        
        $("body").toggleClass("dark");
        $(".header").toggleClass("dark-light");
        $(".search__results").toggleClass("dark");
        $(".search__input").toggleClass("dark-lighter");
        $(".sidebar").toggleClass("dark-light");
        $(".theme__inner").toggleClass("dark");
        $(".theme__box").toggleClass("light");
        $(".card__wrap").toggleClass("dark-light");
        $(".card__right").toggleClass("dark-light");
        $(".tip__icon svg").toggleClass("light");
        $(".header__btns button:first-child").toggleClass("light");
        $(".overview__nav").toggleClass("dark");
        $(".overview_link").toggleClass("dark");
        $(".sidebar__home").toggleClass("dark-lighter");
        pic()
        
   
    });
    // ===============================================
    $('.dropdown-el').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("here")
        $(this).toggleClass('expanded');
        $('#' + $(e.target).attr('for')).prop('checked', true);
    });
    $(document).click(function() {
        console.log("there")
        $('.dropdown-el').removeClass('expanded');
    });
    // ========================================================

});
let ctx = document.getElementById("myChart").getContext('2d');
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["22", "23", "24", "25", "26", "27", "28"],
    datasets: [{
      label: '',
      data: [12, 19, 3, 17, 28, 24, 7],
      backgroundColor: "rgba(47, 44, 200, 0.653)"
    }]
  },
  options:{
    legend: {display:false}
  }
});
