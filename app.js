



$('body').on('click','.dropdown-item',function(){
  var data=$(this).closest('.dropdown').data('value');
  console.log(data);
var b=$(this).closest('.dropdown').children('.btn').html($(this).text());
});

$('body').on('click','.selecttt',function(){
  $(this).closest('ul').children('li:not(.selecttt)').toggle();
});

var alldata =$('ul').children('li:not(.selecttt)');
$('body').on('click','li:not(.selettt)',function(){
  $("ul").children('.selecttt').html($(this).html());
  alldata.toggle();
});
