function decode(a){var b,c,d,e,f,g,h,i="",j=0,k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");j<a.length;)e=k.indexOf(a.charAt(j++)),f=k.indexOf(a.charAt(j++)),g=k.indexOf(a.charAt(j++)),h=k.indexOf(a.charAt(j++)),b=e<<2|f>>4,c=(15&f)<<4|g>>2,d=(3&g)<<6|h,i+=String.fromCharCode(b),64!=g&&(i+=String.fromCharCode(c)),64!=h&&(i+=String.fromCharCode(d));var l="";j=0;for(var m=0,n=0;j<i.length;)if(m=i.charCodeAt(j),128>m)l+=String.fromCharCode(m),j++;else if(m>191&&224>m)n=i.charCodeAt(j+1),l+=String.fromCharCode((31&m)<<6|63&n),j+=2;else{n=utftext.charCodeAt(j+1);var o=utftext.charCodeAt(j+2);l+=String.fromCharCode((15&m)<<12|(63&n)<<6|63&o),j+=3}return l}function response(a,b){window.parent.postMessage(JSON.stringify(a),b),window.parent.postMessage(a,b)}function listener(a){var b;if(a.data){if("string"==typeof a.data)try{b=JSON.parse(a.data)}catch(c){return}else b=a.data;if(b&&"MBR_STORAGE"===b.type)switch(storage.version||storage.init(),b.command){case"get":b.value=storage.get(b.key,b.session),response(b,a.origin);break;case"set":storage.set(b.key,b.value,b.session),response(b,a.origin);break;case"remove":storage.remove(b.key),response(b,a.origin);break;case"loadSettings":b.value=storage.loadSettings(),storage.synchronize(function(){response(b,a.origin)});break;case"loadPartnerSettings":b.value=storage.loadSettings(),storage.synchronize(function(){response(b,a.origin)});break;case"loadUserSettings":b.value=storage.loadSettings(!0),storage.synchronize(function(){response(b,a.origin)});break;case"saveSettings":storage.saveSettings(b.value);break;case"getSelector":b.value=storage.getSelector(b.domain),response(b,a.origin);break;case"testStorage":b.value=storage.testStorage(),response(b,a.origin);break;case"getCookies":b.value=storage.getCookies(),response(b,a.origin);break;case"getLocalStorage":b.value=storage.getLocalStorage(),response(b,a.origin);break;case"getDomainInfo":b.domains&&(localStorage.setItem("useDomainsData",!0),localStorage.removeItem("blacklist"),localStorage.removeItem("selectors"),"string"==typeof b.domains&&(b.domains=JSON.parse(b.domains)),b.value=storage.getDomainInfo(b.domains)),response(b,a.origin)}}}var mbr=window.mbr||mbr||{};window.mbr=mbr,function(){var a={set:function(a,b,c,d,e){var f=a+"="+window.escape(b)+";";c&&(c instanceof Date?window.isNaN(c.getTime())&&(c=new Date):c=new Date((new window.Date).getTime()+1e3*window.parseInt(c,10)*60*60*24),f+="expires="+c.toGMTString()+";"),d&&(f+="path="+d+";"),e&&(f+="domain="+e+";"),window.document.cookie=f},get:function(a){var b=new window.RegExp("(?:^"+a+"|;\\s*"+a+")=(.*?)(?:;|$)","g"),c=b.exec(window.document.cookie);return null===c?null:c[1]},remove:function(a){this.set(a,"",new Date(1970,1,1,1,1),"/")}};"object"==typeof mbr?mbr.cookie=a:window.cookie=a}(),mbr.xhr={isCORSSupported:function(){return!!this._getXHR("https://yandex.ru","GET",!0)},_getXHR:function(a,b,c){var d;if("undefined"!=typeof XMLHttpRequest&&(d=new XMLHttpRequest),c)if("withCredentials"in d)try{d.open(b,a,!0),d.withCredentials=!0}catch(e){d=null}else d=null;else d.open(b,a,!0);return d},get:function(a,b,c,d){var e,f,g=b?-1===(a||"").indexOf("?")?"?":"&":"";b=b||{};var h=[];for(f in b)b.hasOwnProperty(f)&&h.push(encodeURIComponent(f)+"="+encodeURIComponent(b[f]));g+=h.join("&");var i=this._getXHR(a+g,"GET",!d);i||c&&c({error:"CORS not supported"}),i.onreadystatechange=function(){if(e){var a=(new Date).getTime()-e;mbr&&mbr.hub&&mbr.hub.trigger("server:responseEnd",a)}if(4===i.readyState)if(200===i.status)c&&c(JSON.parse(i.responseText));else{var b;if("number"==typeof i.status||"string"==typeof i.status?(b=i.status,"string"==typeof i.statusText&&(b+=" "+i.statusText)):b="Unknown code",i.responseText)try{var d=JSON.parse(i.responseText);return void(c&&c(d))}catch(f){}c&&c({error:"Error with XHR",errorMessage:b})}},e=(new Date).getTime(),i.send(null)},post:function(a,b,c){var d=this._getXHR(a,"POST",!0)||this._getXHR(a,"POST");d.setRequestHeader("Content-Type","application/json;charset=UTF-8"),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&c&&c(JSON.parse(d.responseText))},d.send(JSON.stringify(b))}},mbr.JSONP=function(){function a(a,b){var c=window.document.createElement("script"),d=!1;c.src=a,c.async=!0;var f=b||g.error;"function"==typeof f&&(c.onerror=function(b){f({url:a,event:b})}),c.onload=c.onreadystatechange=function(){d||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(d=!0,c.onload=c.onreadystatechange=null,c&&c.parentNode&&c.parentNode.removeChild(c))},e||(e=window.document.getElementsByTagName("head")[0]),e.appendChild(c)}function b(a){return encodeURIComponent(a)}function c(c,d,e,h){var i,j=-1===(c||"").indexOf("?")?"?":"&";h=h||g.callbackName||"callback";var k="metabar_"+h+"_json"+ ++f;d=d||{};for(i in d)d.hasOwnProperty(i)&&(j+=b(i)+"="+b(d[i])+"&");return window[k]=function(a){e(a);try{delete window[k]}catch(b){}window[k]=null},a(c+j+h+"="+k),k}function d(a){g=a}var e,f=0,g={};return{get:c,init:d}}(),mbr.config={_current:{apiHost:"%SOVETNIK_API_HOST%",storageHost:"%SOVETNIK_STORAGE_HOST%",settingsHost:"%SOVETNIK_SETTINGS_HOST%",statsDHost:"%SOVETNIK_STATSD_HOST%"},_production:{apiHost:"https://sovetnik.market.yandex.ru",storageHost:"https://dl.metabar.ru",settingsHost:"https://dl.metabar.ru",statsDHost:"https://s.sovetnik.yandex.net"},_isPatched:function(a){return!/^%[^%]+%$/.test(a)},_getHost:function(a){return this._current[a]&&this._isPatched(this._current[a])?this._current[a]:this._production[a]},getApiHost:function(){return this._getHost("apiHost")},getStorageHost:function(){return this._getHost("storageHost")},getSettingsHost:function(){return this._getHost("settingsHost")},getStatsDHost:function(){return this._getHost("statsDHost")}};var utils={defaults:function(a,b){if(a=a||{},b&&"object"==typeof b)for(var c in b)b.hasOwnProperty(c)&&!a.hasOwnProperty(c)&&(a[c]=b[c]);return a}};!function(){function a(){var a=(new Date).getTime()+864e5;mbr.cookie.set("script-data-updated","true",new Date(a),"/")}function b(){return!!mbr.cookie.get("script-data-updated")}function c(){var a=document.createElement("script"),b=new Date;a.src="/static/script-data/script-data.js?tmp="+b.getFullYear()+b.getMonth()+b.getDate(),a.onload=function(){window.scriptData&&!localStorage.getItem("useDomainsData")&&(localStorage.setItem("blacklist",decode(JSON.stringify(scriptData.blacklist))),localStorage.setItem("selectors",JSON.stringify(scriptData.selectors)))},document.body.appendChild(a)}function d(){var b=document.createElement("script"),c=new Date;b.src="/static/script-data/domains.js?tmp="+c.getFullYear()+c.getMonth()+c.getDate(),b.onload=function(){window.domains&&(localStorage.setItem("domains",JSON.stringify(window.domains)),localStorage.getItem("useDomainsData")&&(localStorage.removeItem("blacklist"),localStorage.removeItem("selectors")),a())},document.body.appendChild(b)}b()||(c(),d())}();var storage={init:function(){this.version=2,localStorage.getItem("domains")&&(this.version=3),this.set("version",this.version)},get:function(a,b){if("cookies"===a)return this.getCookies();if("localStorage"===a)return this.getLocalStorage();var c=null;if(b)c=mbr.cookie.get(a);else try{var d=localStorage.getItem(a);if(d&&(c=JSON.parse(d),"clientId"===a)){var e=new Date((new Date).getTime()+31536e6);mbr.cookie.set(a,d,e,"/")}}catch(f){}return c},set:function(a,b,c){try{if(c)mbr.cookie.set(a,b,null,"/");else{var d=JSON.stringify(b);localStorage.setItem(a,d)}}catch(e){}return b},remove:function(a){try{localStorage.removeItem(a)}catch(b){}},_saveSettingsParam:function(a,b){var c=new Date((new Date).getTime()+12096e5);mbr.cookie.set(a,b,c,"/")},_getSettingsParam:function(a,b){b=b||"";var c=mbr.cookie.get(b+a);return c?(c=unescape(c),"true"!==c&&"false"!==c?c:"true"===c):(c=localStorage.getItem(a))?JSON.parse(c):null},saveSettings:function(a){if(a){var b=this._getSettingsParam("affId"),c=this._getSettingsParam("clid"),d=!b&&!c;if(d||(1048==b?d=a.affId==b:c?d=c==a.clid:b&&(d=b==a.affId)),d)for(var e in a)this._saveSettingsParam(e,a[e])}},loadSettings:function(a){for(var b,c={},d=a?"user-":"",e=["affId","clid","trackingId","applicationName","campaignName","offerEnabled","affSource","affSub","source","autoShowShopList","mbrApplication","statsDisabled"],f=0;f<e.length;f++)b=this._getSettingsParam(e[f],d),null!==b&&void 0!==b&&(c[e[f]]=b);return c},getSelector:function(a){var b=localStorage.getItem("selectors");if(b&&(b=JSON.parse(decode(b)))){var c,d=null;for(b[a]&&(c=b[a],d=!1);-1!=a.indexOf(".");)if(a=a.substr(a.indexOf(".")+1),b[a]){c=utils.defaults(c,b[a]),null===d&&(d=!0);break}if(c){if(c.nameSelector||c.priceSelector||c.currencySelector)return c;if("review"===c.type&&!d)return c}}return null},getCookies:function(){return document.cookie.split(";").map(function(a){return"|"+a.replace("=","|")+"|"}).join("\n")},getLocalStorage:function(){var a="";for(var b in localStorage)"blacklist"!==b&&"selectors"!==b&&(a+="|"+b+"|"+localStorage.getItem(b)+"|\n");return a},testStorage:function(){var a=!1;try{localStorage.getItem("test"),mbr.cookie.get("test"),a=!0}catch(b){}return a},getDomainInfo:function(a){var b=null,c=localStorage.getItem("domains");if(c){c=JSON.parse(c);for(var d=0;d<a.length;d++)if(c[a[d]]){b=c[a[d]];break}}return b},_getActualSettings:function(){var a={},b=["affId","clid","applicationName","offerEnabled","affSub","aviaEnabled","autoShowShopList","clientId","activeCity","activeCountry","otherRegions","firstStartTime","eulaAcceptTime","noRandomize","logEnabled","adultOffer"],c=this.loadSettings(!0),d=this.loadSettings();for(var e in d)d.hasOwnProperty(e)&&!c.hasOwnProperty(e)&&(c[e]=d[e]);return b.forEach(function(b){c.hasOwnProperty(b)?a[b]=c[b]:null!==this.get(b)&&(a[b]=this.get(b))}.bind(this)),null!==this.get("mbr.offerAccepted")&&(a.offerAccepted=this.get("mbr.offerAccepted")),null!==this.get("optOutAccepted")&&(a.optOutAccepted=this.get("optOutAccepted")),a.sovetnikRemoved="true"===this.get("sovetnikRemoved"),a.pricebarShown=!!this.get("firstStart"),a.otherRegions="otherRegionsDisabled"!==this.get("otherRegions"),a.affId||a.clid||(a=null),a},synchronize:function(a){var b=parseInt(this.get("syncDate"),10)||0;if((new Date).getTime()-b>18e6&&this._getActualSettings()&&!this._syncRequestSent){this._syncRequestSent=!0;var c=mbr.xhr&&mbr.xhr.isCORSSupported()||!mbr.JSONP?mbr.xhr:mbr.JSONP,d={settings:JSON.stringify(this._getActualSettings())};c.post?c.post(mbr.config.getApiHost()+"/settings",d,function(b){this.set("syncDate",(new Date).getTime()),a()}.bind(this)):this.set("syncDate",(new Date).getTime())}else a()}};window.addEventListener?window.addEventListener("message",listener,!0):window.attachEvent("onmessage",listener);