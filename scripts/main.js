$(function () {
    /*aos configs*/
    AOS.init({
        duration: 800,
    });
    /*Tabs wizard logic*/
    // var tabEls = document.querySelectorAll('button[data-bs-toggle="tab"]');
    // var tabContents = document.querySelectorAll('.tab-pane');
            
    // function showTab(tabId) {
    //     tabContents.forEach(function(content) {
    //         content.classList.remove('show', 'active');
    //     });
                
    //     var tabContent = document.querySelector(tabId);
    //         if (tabContent) {
    //         tabContent.classList.add('show', 'active');
    //     }
    // }

    // tabEls.forEach(function(tabEl) {
    //     tabEl.addEventListener('shown.bs.tab', function(e) {
    //         showTab(e.target.getAttribute('data-bs-target'));
    //     });
    // });

    // $('.next-step').click(function() {
    //     var currentTab = $(this).closest('.tab-pane');
    //     var nextTab = currentTab.next('.tab-pane');
                
    //     if (nextTab.length) {
    //         var nextTabButton = $('[data-bs-target="#' + nextTab.attr('id') + '"]');
    //         nextTabButton.removeAttr('disabled');
                    
    //         var currentTabButton = $('[data-bs-target="#' + currentTab.attr('id') + '"]');
    //         currentTabButton.removeClass('active').addClass('completed');
                    
    //         nextTabButton.tab('show');
    //     }
    // });

    // $('.prev-step').click(function() {
    //     var currentTab = $(this).closest('.tab-pane');
    //     var prevTab = currentTab.prev('.tab-pane');
                
    //     if (prevTab.length) {
    //         $('[data-bs-target="#' + prevTab.attr('id') + '"]').tab('show');
    //     }
    // });

    // $('.skip-step').click(function() {
    //     $('#complete-tab').removeAttr('disabled').tab('show');
                
    //     $('.nav-link').removeClass('active').addClass('completed');
    // });
    
    /* teggify plugin*/
    // document.querySelectorAll('.tag-input').forEach(function(input) {
    //     new Tagify(input);
    // });

    /*file reader*/
    // const fileInput = document.getElementById('fileInput');
    // const avatarPreview = document.getElementById('avatarPreview').querySelector('img');

    // fileInput.addEventListener('change', function () {
    //     const file = this.files[0];
    //     if (!file) return;

    //     if (file.size > 2 * 1024 * 1024) {
    //     alert("Файл слишком большой! Максимум 2 МБ.");
    //     return;
    //     }

    //     const reader = new FileReader();

    //     reader.onload = function (e) {
    //     avatarPreview.src = e.target.result;
    //     };

    //     reader.readAsDataURL(file);
    // });
    $('.slick-slider').each(function () {
    let slider = $(this);
    let options = {
        prevArrow: slider.parent().find('.slider-prev'),
        nextArrow: slider.parent().find('.slider-next'),
        infinite: true,
        autoPlay: true,
    }
    let extraOptions = {}
    if (slider.hasClass('photogallery')) {
        extraOptions = {
        slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: false,
            arrows: true,
            autoPlay: true,
        responsive: [
    {
        breakpoint: 1200,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        }
    },
    {
        breakpoint: 992,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        }
    },
    {
        breakpoint: 576,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        }
            },
    ]
        }
    }
  slider.slick($.extend({}, extraOptions, options ));
})
});
