## Browser Disapproval

Browser Disapproval is a microscopic JS plugin that allows you to show your disapproval of your user's browser choice.

- Disapprove efficiently and *without jQuery&trade;*
- Disapprove one or more browsers
- Disapprove in less than 670 bytes of JS
- This repo has the best share URL ever to exist: [git.io/ಠ_ಠ](https://git.io/ಠ_ಠ)

![](http://i.imgur.com/gYQBr16.png)

## Code

```js
function disapproveOf(t){var u=navigator.userAgent,o=~u.indexOf("Opera")||~u.indexOf('OPR'),e=~u.indexOf("Edge"),v=function(){var a=window.navigator.userAgent,b=a.indexOf("MSIE "),rv=-1;if(~b||!!navigator.userAgent.match(/Trident.*rv\:11\./))return(isNaN(parseInt(a.substring(b+5,a.indexOf(".",b)))))?(((navigator.appName=='Netscape')&&(new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent)!=null))?parseFloat(RegExp.$1):''):parseInt(a.substring(b+5,a.indexOf(".",b)));};if((t=="Opera"&&o)||(~t.indexOf("IE")&&(~u.indexOf("MSIE")||(!!document.documentMode==true))&&t=='IE'+v())||((t=="Edge"&&e)||(~u.indexOf(t)&&!e&&!o)))alert('ಠ_ಠ');}
```

## Tutorial

Include the above JS, then call `disapproveOf(ID)`, where ID is

          ID | disapproves of
 ----------- | --------------
  `'Chrome'` | Chrome (Beta, Canary)
    `'Edge'` | Edge
   `'Opera'` | Opera
     `'IE?'` | IE, where `?` is a version number from 6 to 11 inclusive
 `'Firefox'` | Firefox
 
To disapprove of more browsers, just add another call to the `disapproveOf` function.
