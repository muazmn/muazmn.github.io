$('.page-scroll').on('click', function(e){
    // 1# ambil isi href
    var tujuan = $(this).attr('href');
    // 2# tangkap elemen ybs
    var elemenTujuan = $(tujuan);
        // console.log(elemenTujuan.offset().top);
     // 3# pindahkan scroll
     // *body adalah elemen yang membungkus semua halaman
    $('html,body').animate({
        // $('html,body').scrollTop(elemenTujuan.offset().top);
    //      //*offset menunjukkan nilai jarak yang kita klik
         scrollTop: elemenTujuan.offset().top - 50
     },1000, 'swing');


    // // // preventDefault mencegah tampilnya nilai href
        e.preventDefault();
});
// about parallax
$(window).on('load', function() {
    $('.pKiri').addClass('muncul');
    $('.pKanan').addClass('muncul');


})

// parallax jumbotron
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
$('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/4+'%)'
  });

$('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/2+'%)'
  });

 $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/1.2+'%)'
  });

//portfolio jumbotron
if( wScroll > $('.portfolio').offset().top - 250) {
    $('.portfolio .thumbnail').each(function(i){
        setTimeout(function() {
            $('.portfolio .thumbnail').eq(i).addClass('muncul')           
        }, 300 * (i+1));
    });
}
});

