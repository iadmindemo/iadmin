/*------------------------------------------------------------------
* iAdmin - Bootstrap 4 Web Application Admin Template
* Version: 1.2
* Author: Codefactor
-------------------------------------------------------------------*/
// Toggle sidebar on Menu button click
$('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
    $('#body').toggleClass('active');
});

// Auto-hide sidebar on window resize if window size is small
// $(window).on('resize', function () {
//     if ($(window).width() <= 768) {
//         $('#sidebar, #body').addClass('active');
//     }
// });

// Initiate time picker
$('.timepicker').mdtimepicker();