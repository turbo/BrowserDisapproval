function disapproveOf(t) {
  var u = navigator.userAgent,
      o = ~u.indexOf("Opera") || ~u.indexOf('OPR'),
      e = ~u.indexOf("Edge"),
      v = function v() {
        var a = window.navigator.userAgent,
        b = a.indexOf("MSIE "),
        rv = -1;
        if (~b || !!navigator.userAgent.match(/Trident.*rv\:11\./)) return isNaN(parseInt(a.substring(b + 5, a.indexOf(".", b)))) ? navigator.appName == 'Netscape' && new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null ? parseFloat(RegExp.$1) : '' : parseInt(a.substring(b + 5, a.indexOf(".", b)));
      };
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      if (isSafari && ~t.indexOf("Safari")){alert("No one gives a 💩 about Safari.");return "ಠ_ಠ'";}
      
      if (t == "Opera" && o || ~t.indexOf("IE") && (~u.indexOf("MSIE") || !!document.documentMode == true) && t == 'IE' + v() || t == "Edge" && e || ~u.indexOf(t) && !e && !o) alert('ಠ_ಠ');
}
