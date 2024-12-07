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

var list=['-','-','-','-','-','-','-','-','-']
var count=1

function select(input) {
if (count < 10) {
if (count % 2 === 0) {
		document.getElementById(input.id).className = "used1"
    document.getElementById(input.id).innerText = "X"
	}
	else
	{
		document.getElementById(input.id).className = "used2"
    document.getElementById(input.id).innerText = "O"
	}
  count+=1
  }
}
