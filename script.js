// // Progress bar Section //

// $(document).ready(function () {


//     $('.counter').counterUp({
//         delay: 10,
//         time: 100,
        
//     });

    


//     if ($('.progress-line').length) {
//         $('.progress-line').appear(function () {
//             var el = $(this);
//             var percent = el.data('width');
//             $(el).css('width', percent + '%');
//         }, { accY: 0 });
//     };



// })

$(document).ready(function() {
    $('.progress-line').each(function() {
        var width = $(this).data('width');
        $(this).css('width', width + '%');
    });
});

