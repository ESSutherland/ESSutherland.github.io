function setCookie(cookieName, cookieVal, expDays) {
    var date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    var expires = date.toUTCString();
    document.cookie = cookieName + "=" + cookieVal + ";expires=" + expires + ";";
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function updateCookie(cookieName, newVal) {
    document.cookie = cookieName + "=" + newVal;
}
