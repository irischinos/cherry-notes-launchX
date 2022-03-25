
/* Texto circular */
circ = document.getElementById('circular');
textarr = circ.textContent.split('');
circ.textContent = '';

for (var i = 0; i < textarr.length; i++) {
  circ.innerHTML += '<span style="-webkit-transform: rotate('+((i+1)*10)+'deg);transform: rotate('+((i+1)*10)+'deg);">'+textarr[i]+'</span>';
}
