function Tell(){
  var email=$('#emailval').val()
  if (email.length < 1){
    alert('Please input your email')
  }
  else{
    alert(email.concat(' has been successfully added to our email list'))
  }
}
$('document').ready(function () {
  $('.sidebar').click(function () {
    console.log('triggered');
    $('#zeroth').show();
  });
  $('.timess').click(function(){
    console.log('closed');
    $('#zeroth').hide();
  });
});