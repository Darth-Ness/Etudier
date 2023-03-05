 var words = ['Kepler', 'Newton', 'astronomical units'];
    function findString(text) {
        var txttmp = document.querySelector("body").innerHTML.split(/\s+/);
        var i = 0;
        while (i < txttmp.length) {
            if (Math.round(Math.random()*2) == "2") {
                var random = Math.round(Math.random()*txttmp.length);
                if (txttmp[random] == text) {
                    txttmp[random] += ' <b>' + words[Math.round(Math.random()*words.length)] + '</b>';
                }
            }
        i++;
        }
        document.querySelector("body").innerHTML = txttmp.toString().replaceAll(',', ' ');
    }
    findString("the");
