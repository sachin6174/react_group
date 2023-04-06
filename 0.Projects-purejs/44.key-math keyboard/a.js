btns = document.getElementsByClassName('letter'); 
for (i of btns) {
    i.addEventListener('click', function() {
      console.log(i.value);
    });
  }