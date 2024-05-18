document.getElementById('toggleButton').addEventListener('click', function() {
    var hiddenContent = document.getElementById('hiddenContent');
    hiddenContent.classList.toggle('hidden');
  });

document.getElementById('toggleButton1').addEventListener('click', function() {
    var hiddenContent1 = document.getElementById('hiddenContent1');
    hiddenContent1.classList.toggle('hidden');
  });

document.getElementById('toggleButton2').addEventListener('click', function() {
    var hiddenContent2 = document.getElementById('hiddenContent2');
    hiddenContent2.classList.toggle('hidden');
  });
document.getElementById('toggleButton3').addEventListener('click', function() {
    var hiddenContent3 = document.getElementById('hiddenContent3');
    hiddenContent3.classList.toggle('hidden');
  });

  function myFunction() {
    var element = document.getElementById("mobilemenu");
    element.classList.toggle("mobile-sidebar-show");
  }
