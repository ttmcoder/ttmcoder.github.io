function showit(var1) {
  // Hide the one div that is shown
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'none';
  document.getElementById('page5').style.display = 'none';
  document.getElementById('page6').style.display = 'none';
  // show the one div that you sent to this function
  document.getElementById(var1).style.display = 'inline';
}
