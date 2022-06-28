var divs = document.querySelectorAll('#sites .site');

var ordem = [].map.call(divs, function(element) {
    return element;
});

ordem.sort(function(a,b) {
    var ca = parseInt(a.getAttribute('data'), 10);
    var cb = parseInt(b.getAttribute('data'), 10);
    return cb - ca;
});


var container = document.querySelector('#sites');
for(var i=0; i<ordem.length; i++) {
    container.appendChild(ordem[i]);   
}
