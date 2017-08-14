$(document).ready(function(){
  $('.form').submit(function(e){
    var largerThanThree = [];
    e.preventDefault();
    var inputText = document.getElementById('one').value;
    var newArray = inputText.split(' ');
    newArray.map(function(item){
      if (item.length > 3){
        largerThanThree.push(item);
      }
    });
    largerThanThree.reverse().join();
    console.log(largerThanThree);
  });
});
