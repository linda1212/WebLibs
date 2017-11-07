define(function(require,exports,module) {
    var changeText = require('desktop');

    var title= document.getElementById('title');
    title.innerHTML = changeText.text;

    var $ = require('jQuery');
});