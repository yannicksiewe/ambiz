
var Prototype={Version:'1.4.0_pre10_ajax',emptyFunction:function(){},K:function(x){return x}};var Class={create:function(){return function(){this.initialize.apply(this,arguments);}}};var Abstract=new Object();Object.extend=function(destination,source){for(property in source){destination[property]=source[property];}
return destination;};Object.inspect=function(object){try{if(object==undefined)return'undefined';if(object==null)return'null';return object.inspect?object.inspect():object.toString();}catch(e){if(e instanceof RangeError)return'...';throw e;}};if(!Function.prototype.bind){Function.prototype.bind=function(oThis){if(typeof this!=='function'){throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');}
var aArgs=Array.prototype.slice.call(arguments,1),fToBind=this,fNOP=function(){},fBound=function(){return fToBind.apply(this instanceof fNOP?this:oThis,aArgs.concat(Array.prototype.slice.call(arguments)));};if(this.prototype){fNOP.prototype=this.prototype;}
fBound.prototype=new fNOP();return fBound;};}
Function.prototype.bindAsEventListener=function(object){var __method=this;return function(event){return __method.call(object,event||window.event);};};Object.extend(Number.prototype,{toColorPart:function(){var digits=this.toString(16);if(this<16)return'0'+digits;return digits;},succ:function(){return this+1;},times:function(iterator){$R(0,this,true).each(iterator);return this;}});var Try={these:function(){var returnValue;for(var i=0;i<arguments.length;i++){var lambda=arguments[i];try{returnValue=lambda();break;}catch(e){}}
return returnValue;}};var PeriodicalExecuter=Class.create();PeriodicalExecuter.prototype={initialize:function(callback,frequency){this.callback=callback;this.frequency=frequency;this.currentlyExecuting=false;this.registerCallback();},registerCallback:function(){setInterval(this.onTimerEvent.bind(this),this.frequency*1000);},onTimerEvent:function(){if(!this.currentlyExecuting){try{this.currentlyExecuting=true;this.callback();}finally{this.currentlyExecuting=false;}}}};function $(){var elements=new Array();for(var i=0;i<arguments.length;i++){var element=arguments[i];if(typeof element=='string')
element=document.getElementById(element);if(arguments.length==1)
return element;elements.push(element);}
return elements;};var Ajax={getTransport:function(){return Try.these(function(){return new ActiveXObject('Msxml2.XMLHTTP')},function(){return new ActiveXObject('Microsoft.XMLHTTP')},function(){return new XMLHttpRequest()})||false;}};Ajax.Base=function(){};Ajax.Base.prototype={setOptions:function(options){this.options={method:'post',asynchronous:true,parameters:''};Object.extend(this.options,options||{});},responseIsSuccess:function(){return this.transport.status==undefined||this.transport.status==0||(this.transport.status>=200&&this.transport.status<300);},responseIsFailure:function(){return!this.responseIsSuccess();}};Ajax.Request=Class.create();Ajax.Request.Events=['Uninitialized','Loading','Loaded','Interactive','Complete'];Ajax.Request.prototype=Object.extend(new Ajax.Base(),{initialize:function(url,options){this.transport=Ajax.getTransport();this.setOptions(options);this.request(url);},request:function(url){var parameters=this.options.parameters||'';if(parameters.length>0)parameters+='&_=';try{if(this.options.method=='get')
url+='?'+parameters;this.transport.open(this.options.method,url,this.options.asynchronous);if(this.options.asynchronous){this.transport.onreadystatechange=this.onStateChange.bind(this);setTimeout((function(){this.respondToReadyState(1)}).bind(this),10);}
this.setRequestHeaders();var body=this.options.postBody?this.options.postBody:parameters;this.transport.send(this.options.method=='post'?body:null);if(!this.options.asynchronous&&this.transport.overrideMimeType){this.onStateChange();}}catch(e){};},setRequestHeaders:function(){var requestHeaders=[];if(this.options.method=='post'){requestHeaders.push('Content-type','application/x-www-form-urlencoded');if(this.transport.overrideMimeType&&(navigator.userAgent.match(/Gecko\/(\d{4})/)||[0,2005])[1]<2005)requestHeaders.push('Connection','close');}
if(this.options.requestHeaders)
requestHeaders.push.apply(requestHeaders,this.options.requestHeaders);for(var i=0;i<requestHeaders.length;i+=2)
this.transport.setRequestHeader(requestHeaders[i],requestHeaders[i+1]);},onStateChange:function(){var readyState=this.transport.readyState;if(readyState!=1)
this.respondToReadyState(this.transport.readyState);},evalJSON:function(){try{var json=this.transport.getResponseHeader('X-JSON'),object;object=eval(json);return object;}catch(e){}},respondToReadyState:function(readyState){var event=Ajax.Request.Events[readyState];var transport=this.transport,json=this.evalJSON();event=='Complete'&&typeof jQuery=='function'&&typeof jQuery.fn.trigger=='function'&&jQuery(document).trigger('ajaxComplete');if(event=='Complete')
(this.options['on'+this.transport.status]||this.options['on'+(this.responseIsSuccess()?'Success':'Failure')]||Prototype.emptyFunction)(transport,json);(this.options['on'+event]||Prototype.emptyFunction)(transport,json);if(event=='Complete')
this.transport.onreadystatechange=Prototype.emptyFunction;}});Ajax.Updater=Class.create();Ajax.Updater.ScriptFragment='(?:<script.*?>)((\n|.)*?)(?:<\/script>)';Object.extend(Object.extend(Ajax.Updater.prototype,Ajax.Request.prototype),{initialize:function(container,url,options){this.containers={success:container.success?$(container.success):$(container),failure:container.failure?$(container.failure):(container.success?null:$(container))};this.transport=Ajax.getTransport();this.setOptions(options);var onComplete=this.options.onComplete||Prototype.emptyFunction;this.options.onComplete=(function(transport,object){this.updateContent();onComplete(transport,object);}).bind(this);this.request(url);},updateContent:function(){var receiver=this.responseIsSuccess()?this.containers.success:this.containers.failure;var match=new RegExp(Ajax.Updater.ScriptFragment,'img');var response=this.transport.responseText.replace(match,'');var scripts=this.transport.responseText.match(match);if(receiver){if(this.options.insertion){receiver.innerHTML+=response;}else{receiver.innerHTML=response;}}
if(this.responseIsSuccess()){if(this.onComplete)
setTimeout(this.onComplete.bind(this),10);}
if(this.options.evalScripts&&scripts){match=new RegExp(Ajax.Updater.ScriptFragment,'im');setTimeout((function(){for(var i=0;i<scripts.length;i++)
eval(scripts[i].match(match)[1]);}).bind(this),10);}}});Ajax.PeriodicalUpdater=Class.create();Ajax.PeriodicalUpdater.prototype=Object.extend(new Ajax.Base(),{initialize:function(container,url,options){this.setOptions(options);this.onComplete=this.options.onComplete;this.frequency=(this.options.frequency||2);this.decay=(this.options.decay||1);this.updater={};this.container=container;this.url=url;this.start();},start:function(){this.options.onComplete=this.updateComplete.bind(this);this.onTimerEvent();},stop:function(){this.updater.options.onComplete=undefined;clearTimeout(this.timer);(this.onComplete||Prototype.emptyFunction).apply(this,arguments);},updateComplete:function(request){if(this.options.decay){this.decay=(request.responseText==this.lastText?this.decay*this.options.decay:1);this.lastText=request.responseText;}
this.timer=setTimeout(this.onTimerEvent.bind(this),this.decay*this.frequency*1000);},onTimerEvent:function(){this.updater=new Ajax.Updater(this.container,this.url,this.options);}});var tooltip=function($)
{var top=3,left=11,maxw=670,$tt,$t,$c,$b,h,ie=document.all?true:false;return{show:function(v,w,ntt)
{ntt=ntt||'';$tt=$('#'+ntt+'tt');$c=$('#'+ntt+'ttcont');$b=$('#ttbot');$t=$('#tttop');if($tt.length>0&&v)
{document.onmousemove=this.pos;$tt.css({display:'block'});$c[0].innerHTML=v;$tt.css({width:w?w+'px':'auto'});if(!w&&ie){if($t.length>0)
{$t.css({display:'none'});}
if($b.length>0)
{$b.css({display:'none'});}
$tt.css({width:$tt[0].offsetWidth});if($t.length>0)
{$t.css({display:'block'});}
if($b.length>0)
{$b.css({display:'block'});}}
if($tt[0].offsetWidth>maxw)
{$tt.css({width:maxw+'px'});}
h=parseInt($tt[0].offsetHeight)+top;}},pos:function(e)
{var u=ie?event.clientY+document.documentElement.scrollTop:e.pageY;var l=ie?event.clientX+document.documentElement.scrollLeft:e.pageX;var scrolledX,scrolledY;if(window.pageYOffset){scrolledX=window.pageXOffset;scrolledY=window.pageYOffset;}
else if(document.documentElement&&document.documentElement.scrollTop){scrolledX=document.documentElement.scrollLeft;scrolledY=document.documentElement.scrollTop;}
else if(document.body){scrolledX=document.body.scrollLeft;scrolledY=document.body.scrollTop;}
$tt.css({top:((u-scrolledY-h)>0)?((u-h)+'px'):(u+'px')});$tt.css({left:(l+left)+'px'});},hide:function()
{document.onmousemove=null;if($tt.length>0)
{$tt.css({display:'none'});}}};}(jQuery);function BulleWrite(txt)
{tooltip.show(txt);}
function BulleHide()
{tooltip.hide();}
function BulleWriten(txt)
{tooltip.show(txt,false,'n');}
ccm_universe='www.commentcamarche.net';magiclink=function($)
{return{lastpos:0,processed_keywords:[],spaces_counter:0,processed_input_strings:[],num_btns_in_ul:2,textarea:null,ad_sl:function(str)
{return(str+'').replace(/([\\"'])/g,"\\$1");},re_esc:function(s)
{return s.replace(/([.*+?^${}()|[\]\/\\])/g,'\\$1');},unht_en:function(wText)
{if(typeof(wText)!="string")
{wText=wText.toString();}
return wText.replace(/\&amp;/g,"&").replace(/\&quot;/g,"\"").replace(/\&lt;/g,"<").replace(/\&gt;/g,">");},ht_en:function(wText)
{if(typeof(wText)!="string")
{wText=wText.toString();}
return wText.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");},gs:function()
{var textarea=magiclink.textarea||$('#message')[0];if(typeof textarea.selectionStart!='undefined')
{return textarea.selectionStart;}
textarea.focus();var range=textarea.createTextRange();range.moveToBookmark(document.selection.createRange().getBookmark());range.moveEnd('character',textarea.value.length);return(textarea.value.length-range.text.length);},cm:function(m)
{var output='',i=0;for(;i<m.length;i++)
{output+='*';}
return output;},mask:function(txt)
{txt=txt.replace(/\[.*?\]/g,magiclink.cm);txt=txt.replace(/[.a-zA-Z0-9_+-]+@[.a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,}/g,magiclink.cm);txt=txt.replace(/\s*[=]+[^=\r\n]+[=]+/g,magiclink.cm);txt=txt.replace(/http:\/\/\S+[\w#!:.?+=&%@!\-\/]*/g,magiclink.cm);txt=txt.replace(/\<confi?g?\>.*?\<\/confi?g?\>/g,magiclink.cm);return txt;},cancel:function(id)
{magiclink.processed_keywords.push(id);var suggestElement=$('#suggest'+id)[0];suggestElement.parentNode.removeChild(suggestElement);magiclink.traitementBtnInUl();return false;},apply:function(id,txt,url)
{txt=magiclink.unht_en(txt);magiclink.processed_keywords.push(id);var textarea=magiclink.textarea||$('#message')[0],oldPos=textarea.scrollTop,suggestElement=$('#suggest'+id)[0],dummy=magiclink.mask(strip_accents(textarea.value)),reg=new RegExp("\\b"+magiclink.re_esc(strip_accents(txt))+"\\b"),s_p=dummy.search(reg);if(s_p>=0)
{e_p=s_p+txt.length;textarea.value=textarea.value.substr(0,s_p)+'['+url+' '+txt+']'+textarea.value.substr(e_p);}
suggestElement.parentNode.removeChild(suggestElement);textarea.scrollTop=oldPos;magiclink.traitementBtnInUl();return false;},traitementBtnInUl:function()
{if($('#suggest_ph')[0].getElementsByTagName('li').length<=magiclink.num_btns_in_ul)
{$('#apply_all').css({display:'none'});$('#cancel_all').css({display:'none'});}},action_all:function(is_apply)
{var prefix=(is_apply)?'apply':'cancel',fils=$('#suggest_ph')[0].childNodes,nbFils=fils.length,reg=/[0-9]+/,id=0,filsArray=[],i=0;for(;i<nbFils;i++)
{id=0;if(fils[i].nodeName.toLowerCase()=='li')
{if(fils[i].id!='apply_all'&&fils[i].id!='cancel_all')
{id=reg.exec(fils[i].id);if(id!=0)
{filsArray.push(id);}}}}
for(i=0;i<filsArray.length;i++){$('#'+prefix+filsArray[i])[0].onclick();}
$('#apply_all').css({display:'none'});$('#cancel_all').css({display:'none'});},apply_all:function()
{magiclink.action_all(true);},cancel_all:function()
{magiclink.action_all(false);},add:function(su)
{if(su.length)
{for(var i=0,size=su.length;i<size;i++)
{id=su[i][0];tx=su[i][1];ur=su[i][2];if($.inArray(id,magiclink.processed_keywords)==-1)
{if(!$('#suggest'+id)[0]&&suggest_this_url!=ur)
{li=document.createElement('li');li.id='suggest'+id;li.innerHTML='<input type="hidden" name="suggest['+id+']" value="'+magiclink.ht_en(tx)+'" /><input type="hidden" name="suggest_url['+id+']" value="'+magiclink.ht_en(ur)+'" /><a href="'+ur+'" target="_blank">'+magiclink.ht_en(tx)+'</a><a href="#" class="apply" id="apply'+id+'" onclick="return magiclink.apply('+id+',\''+magiclink.ad_sl(magiclink.ht_en(tx))+'\',\''+ur+'\');"></a><a href="#" class="cancel" id="cancel'+id+'" onclick="return magiclink.cancel('+id+');"></a>';$('#suggest_ph')[0].appendChild(li);$('#apply_all').css({display:'block'});$('#cancel_all').css({display:''});}}}}},dorequest:function(ccm_c_p)
{var textarea=magiclink.textarea||$('#message')[0],text=textarea.value;if(text.charCodeAt(ccm_c_p)==10||text.charCodeAt(ccm_c_p)==13)
{ccm_c_p=ccm_c_p-1;}
var p_lb=text.lastIndexOf("\n",ccm_c_p);if(p_lb<0)
{p_lb=text.lastIndexOf("\r",ccm_c_p);}
if(p_lb>=0)
{text=text.substring(p_lb+1);}
var n_lb=text.indexOf("\n");if(n_lb<0){n_lb=text.indexOf("\r");}
var l_l='';if(n_lb<0){l_l=text.replace(/[-\s]+$/g,'');}
else{l_l=text.substring(0,n_lb).replace(/[-\s]+$/g,'');}
if(l_l.length>=2)
{var escaped_string=escape(magiclink.mask(l_l).replace(/[*]+/g,'*'));if($.inArray(escaped_string,magiclink.processed_input_strings)==-1)
{magiclink.processed_input_strings.push(escaped_string);var u_s='http://suggest.commentcamarche.net/kw?q='+escaped_string+'&u='+ccm_universe,headTag=document.getElementsByTagName('head')[0];if($('#magiclinkScript')[0])
{headTag.removeChild($('#magiclinkScript')[0]);}
script=document.createElement('script');script.id='magiclinkScript';script.type='text/javascript';script.src=''+u_s;headTag.appendChild(script);}}},on_click:function()
{magiclink.dorequest(magiclink.gs());},on_keyup:function(e)
{switch((window.event)?window.event.keyCode:e.which)
{case 13:case 10:magiclink.dorequest(magiclink.gs()-1);break;case 32:magiclink.spaces_counter++;if(magiclink.spaces_counter==10)
{magiclink.spaces_counter=0;magiclink.dorequest(magiclink.gs());}
break;}}};}(jQuery);tagActions=function($)
{return{insert:function(txt,tag,enclose,skip_tag,force_text)
{skip_tag=skip_tag||false;force_text=force_text||false;var closeTag,Tag;if(skip_tag)
{closeTag='';Tag=tag;}else{closeTag=((enclose)?"</"+tag+">":"");Tag="<"+tag+">";}
var txtObj=$(txt)[0];if(navigator.appName=="Microsoft Internet Explorer")
{var str=(force_text)?force_text:document.selection.createRange().text;txtObj.focus();var sel=document.selection.createRange();sel.text=Tag+str+closeTag;return;}
else
{oldPos=txtObj.scrollTop;oldHght=txtObj.scrollHeight;str=(force_text)?force_text:txtObj.value.substr(txtObj.selectionStart,txtObj.selectionEnd-txtObj.selectionStart);pos=txtObj.selectionEnd+Tag.length+closeTag.length+((force_text)?str.length:0);txtObj.value=txtObj.value.substr(0,txtObj.selectionStart)+Tag+
str+
closeTag+txtObj.value.substr(txtObj.selectionEnd);txtObj.selectionStart=pos;txtObj.selectionEnd=pos;newHght=txtObj.scrollHeight-oldHght;txtObj.scrollTop=oldPos+newHght;}
txtObj.focus();}};}(jQuery);headerAction=function($)
{var ref_k='';return{searchformFocusedAction:function()
{if($('#searchform_focused')[0].value==0)
{$('#searchform_input')[0].value='';$('#searchform_focused')[0].value=1;}},searchformInputUpdate:function(q)
{if($('#searchform_input').length>0&&q&&q!=' ')
{$('#searchform_input')[0].value=q;$('#searchform_focused')[0].value=1;}},similiTableUpdate:function()
{if($('#similiTable')[0].className=='hidelast')
{$('#similiTable')[0].className='';$('#similiMore')[0].innerHTML=minus;}
else
{$('#similiTable')[0].className='hidelast';$('#similiMore')[0].innerHTML=plus;}
return false;},similiShowUpdate:function()
{if($('#similishowhide')[0].className=='hide')
{$('#similishowhide')[0].className='show';$('#similiShowHideLbl')[0].innerHTML=minus;}
else
{$('#similishowhide')[0].className='hide';$('#similiShowHideLbl')[0].innerHTML=plus;}
return false;},cleanRefk:function()
{var refk=headerAction.refk().replace(/</g,' ').replace(/>/g,' ').replace(/"/g,' ').replace(/&/g,' ');return refk.charAt(0).toUpperCase()+refk.substr(1);},refk:function()
{var ptn=/(google|bing|yahoo)[.]/i,q='',u_p,u_a,kv;if(ref_k)
{q=ref_k;}
else{if(ptn.exec(document.referrer)!=null)
{u_p=document.referrer.split('?');if(u_p[1])
{u_a=u_p[1].split('&');for(var i=0;i<u_a.length;i++)
{kv=u_a[i].split('=');if(kv[0]=='q')
{q=decodeURIComponent(kv[1]).replace(/(allinanchor|allintext|allintitle|allinurl|author|cache|define|filetype|group|id|inanchor|info|insubject|intext|intitle|inurl|location|phonebook|related|rphonebook|site|source)[:][^ +]+/,'');q=q.replace(/[+]/g,' ');}}}}
if(q.search(/:\/\//)>=0)
{q='';}
ref_k=q;}
return q;}};}(jQuery);function strip_accents(str){var s=str;var rExps=[/[\xC0-\xC2]/g,/[\xE0-\xE2]/g,/[\xC8-\xCA]/g,/[\xE8-\xEB]/g,/[\xCC-\xCE]/g,/[\xEC-\xEE]/g,/[\xD2-\xD4]/g,/[\xF2-\xF4]/g,/[\xD9-\xDB]/g,/[\xF9-\xFB]/g];var repChar=['A','a','E','e','I','i','O','o','U','u'];for(var i=0;i<rExps.length;i++)
s=s.replace(rExps[i],repChar[i]);return s;};function compareStringLengths(a,b){if(a.length<b.length)
return 1;if(a.length>b.length)
return-1;return 0;};function c_n_g(child,color){var node=document.createElement('span');node.style.fontWeight='bold';node.appendChild(child);return node;};function h_j(te,container){var gtc='#000000';var glc=new Array('#ffff66','#a0ffff','#99ff99','#ff9999','#ff66ff');var reg=new RegExp("[-:;,+=(){}/?<>!*'\\\"\\[\\]\\ ]+","g");var words=strip_accents(te).toLowerCase().split(reg);words.sort(compareStringLengths);if(words.length>0){var c=0;for(var i=0;i<words.length;i++){if(words[i].length>2&&container){h_g(words[i],container,glc[c]);c=(c==glc.length-1)?0:c+1;}}}}
function h_g(te,container,color){var t_l=te.toLowerCase();for(var i=0;i<container.childNodes.length;i++){var node=container.childNodes[i];if(node.nodeType==3){var data=node.data;var d_l=strip_accents(data.toLowerCase());if(d_l.indexOf(t_l)!=-1){var n_n=document.createElement('span');node.parentNode.replaceChild(n_n,node);var res;while((res=d_l.indexOf(t_l))!=-1){n_n.appendChild(document.createTextNode(data.substr(0,res)));n_n.appendChild(c_n_g(document.createTextNode(data.substr(res,te.length)),color));data=data.substr(res+te.length);d_l=d_l.substr(res+te.length);}
n_n.appendChild(document.createTextNode(data));}}
else{h_g(te,node,color);}}};var ccm_language='fr';function google_ad_request_done(google_ads)
{var i,google_ad_title='Google Ads';switch(ccm_language)
{case'fr':google_ad_title='Annonces Google';break;case'en':google_ad_title='Google Ads';break;case'es':google_ad_title='Anuncios Google';break;case'pt':google_ad_title='An�ncios Google';break;case'it':google_ad_title='Annunci Google';break;case'de':google_ad_title='Google-Anzeigen';break;case'nl':google_ad_title='Google Ads';break;}
if(google_ads.length==0)
{return;}
if(google_ads.length)
{var html='<div class="marB10 marT10 afc_container">'+'<a class="ftGrey2 afc_feedback" href="'+google_info.feedback_url+'" target="_blank">'+google_ad_title+'</a>',ad;for(var i=0;i<google_ads.length;i++)
{ad=google_ads[i];html+=''+'<div class="marT10 afc_block">'+'<a class="ftBlue ftBold afc_title" href="'+ad.url+'" target="_blank">'+ad.line1+'</a>'+'<p style="margin:0" class="afc_content">'+
ad.line2+' '+ad.line3+'</p>'+'<a class="ftGrey2 afc_url" href="'+ad.url+'" target="_blank">'+ad.visible_url+'</a>'+'</div>';}
html+='</div>';document.write(html);}
return;}
gg_afs_query='';function google_afs_request_done(google_ads)
{var google_num_ads=google_ads.length,google_ad_title='Google Ads';if(google_num_ads<=0)
{return;}
switch(ccm_language)
{case'fr':google_ad_title='Annonces Google';break;case'en':google_ad_title='Google Ads';break;case'es':google_ad_title='Anuncios Google';break;case'pt':google_ad_title='An�ncios Google';break;case'it':google_ad_title='Annunci Google';break;case'de':google_ad_title='Google-Anzeigen';break;}
var wideAds="",narrowAds="";for(i=0;i<google_num_ads;i++)
{var isTop=(google_ads[i].position=="Top"||google_ads[i].type=="text/wide"),padding='14px';if(isTop)
{wideAds+='<div class="section"';wideAds+=' onmouseover="window.status=\''+google_ads[i].visible_url+'\'" onmouseout="window.status=\'\'" style="padding-bottom:'+padding+'"><div class="article">';wideAds+='<h2><a href="'+google_ads[i].url+'" target="_blank" style="color:rgb(20, 91, 201);font-weight:normal;text-decoration:underline">'+google_ads[i].line1+'</a></h2>';wideAds+='<p>'+google_ads[i].line2;if(google_ads[i].line3)
{wideAds+='&nbsp;'+google_ads[i].line3;}
wideAds+='</p></div>';wideAds+='<div><a href="'+google_ads[i].url+'" style="color:#009900;" target="_blank">'+google_ads[i].visible_url+'</a></div>';wideAds+='</div>';}else{narrowAds+='<div class="section"';narrowAds+=' onmouseover="window.status=\''+google_ads[i].visible_url+'\'" onmouseout="window.status=\'\'" style="padding-bottom:'+padding+'"><div class="article">';narrowAds+='<h2><a href="'+google_ads[i].url+'" target="_blank" style="color:rgb(20, 91, 201);font-weight:normal;text-decoration:underline">'+google_ads[i].line1+'</a></h2>';narrowAds+='<p>'+google_ads[i].line2;if(google_ads[i].line3)
{narrowAds+='&nbsp;'+google_ads[i].line3;}
narrowAds+='</p></div>';narrowAds+='<div><a href="'+google_ads[i].url+'" style="color:#009900;" target="_blank">'+google_ads[i].visible_url+'</a></div>';narrowAds+='</div>';}}
feedbck='<a href="https://www.google.com/adsense/support/bin/request.py?contact=afs_violation" target="_blank" style="float:right;color:#898994;">'+google_ad_title+'</a>';feedsmall='<a href="https://www.google.com/adsense/support/bin/request.py?contact=afs_violation" target="_blank" style="float:right;color:#898994;">'+google_ad_title+'</a>';if(narrowAds!='')
{narrowAds=feedbck+narrowAds;jQuery('#narrow_ads_unit').html(narrowAds).css({'background-color':'#F5F6FC'});}
if(wideAds!='')
{wideAds=feedsmall+wideAds;jQuery('#wide_ads_unit').html(wideAds).css({'background-color':'#F5F6FC'});}};function google_rs_request_done(google_rs_response)
{if(!google_rs_response.ads&&google_rs_response.link_units&&google_rs_response.link_units.length>0)
{var google_link_units=google_rs_response.link_units,relatedSearches='';for(var i=0;i<google_link_units.length;i++)
{relatedSearches+='<p class="padT5"><a class="ftUnderline ftSize14" style="color:#145BC9" href="/s/'+
encodeURIComponent(google_link_units[i].term).replace(/%20/g,'+')+'?qlc'+'&afdt='+google_link_units[i].token+'">'+
google_link_units[i].term+'</a></p>';if(i==Math.round(google_link_units.length/2)-1)
{if(jQuery('#related_search_left').length>0)
{jQuery('#related_search_left').html(relatedSearches);relatedSearches='';}}}
if(jQuery('#related_search_right').length>0)
{jQuery('#related_search_right').html(relatedSearches);}}}
mmenu=function($)
{return{timer:0,select:function(cur_el,def)
{def=def||false;$("#mmenu_ul_id").children('li').removeClass('selected').each(function()
{var $this=$(this),is_cur=$this.hasClass('current');if((cur_el&&$this[0]===cur_el)||(is_cur&&def))
{$this.addClass('selected');return false;}});},tempo:function()
{if(mmenu.timer)
{clearTimeout(mmenu.timer);}
mmenu.timer=setTimeout("mmenu.select(null, true)",2000);}};}(jQuery);hputils=function($)
{return{slideshow:{mod_img:function(newType)
{var $slideshow=$('#slideshow'),actualType=$slideshow.attr('data-type');actualType&&$slideshow.removeClass(actualType);$slideshow.addClass(newType).attr('data-type',newType).find('li a').removeClass('selected');}}};}(jQuery);ccmu=function($)
{return{dom:{loaded_css:{},css_include:function(css,media,id)
{id=id||css;if(ccmu.dom.loaded_css[id]){return true;}
try{var _css=document.createElement('link');_css.rel='stylesheet';_css.href=css;_css.type='text/css';_css.setAttribute('ccmskin',id);if(media){_css.media=media;}
var head=document.getElementsByTagName('head').item(0);head.appendChild(_css);ccmu.dom.loaded_css[id]=css;}catch(e){if(ccmu.dbg){ccmu.dbg('Erreur css_include '+css+': '+e);}
return e;}
return true;},remove_all_ccmcss:function(key){var _els=document.getElementsByTagName('link');for(var i=_els.length-1;i>=0;i--){var _ccmid=_els[i].getAttribute('ccmskin');if(_els[i].getAttribute('href')!==null&&_ccmid!==null){if(!key||_ccmid===key){delete ccmu.dom.loaded_css[_ccmid];_els[i].parentNode.removeChild(_els[i]);}}}},print:function(css){ccmu.dom.css_include(css,'print','print');setTimeout(function(){window.print();},200);},reload:function(prm,elt,url){url=url||window.document.URL.replace(/(\?|#).*$/,'');if(prm&&elt){ccmu.dom.oldAjaxUpdater($(elt),url,{method:'get',parameters:'xhr&'+prm,evalScripts:false});}
return false;},getProperElement:function(elt)
{return(typeof elt=="string")?$('#'+elt):$(elt);},oldAjaxUpdater:function(elt,url,params)
{var paramsAjax={url:url},$eltSuccess=ccmu.dom.getProperElement(elt),paramData={};if(typeof elt=="object"&&typeof elt.success!="undefined")
{$eltSuccess=$('#'+elt.success);}
if(typeof params.parameters!='undefined'){var dataList=params.parameters.split('&'),dataParams=[];for(var i=0;i<dataList.length;i++){dataParams=dataList[i].split('=');if(dataParams.length==1){paramData[dataParams[0]]=null;}else if(dataParams.length==2){paramData[dataParams[0]]=decodeURIComponent(dataParams[1]);}}
paramsAjax.data=paramData;}
if(typeof params.method!='undefined'){paramsAjax.type=params.method;}else{paramsAjax.type='post';}
if(typeof params.evalScripts!='undefined'&&params.evalScripts==true){paramsAjax.dataType='html';};paramsAjax.success=function(e)
{$eltSuccess.html(e);if(typeof params.onComplete!='undefined')
{params.onComplete.call();}};if(typeof params.onFailure!='undefined')
{paramsAjax.error=function(e)
{params.onFailure.call();};};$.ajax(paramsAjax);}},evt:{get_event_infos:function(event)
{var _tgt=event.target||event.srcElement,_actid;if(_tgt){_actid=_tgt.getAttribute('actid')||false;var _tn=_tgt.tagName.toLowerCase();if(!_actid&&(_tn==='img'||_tn==='span')&&_tgt.parentNode&&_tgt.parentNode.getAttribute('actid')){_tgt=_tgt.parentNode;_actid=_tgt.getAttribute('actid')||false;}}
return[_tgt,_actid];},stop_event:function(event)
{if(event.stopPropagation)
{event.stopPropagation();}else{event.cancelBubble=true;}
ccmu.evt.cancel_event(event);},cancel_event:function(event)
{if(event.preventDefault)
{event.preventDefault();}else{event.returnValue=false;}},_odr:{observers:[],done:false,timer:null},_get_type:function(type){var _ie=(window.attachEvent&&!window.addEventListener);switch(type){case'focus':return(_ie)?'focusin':'focus';case'blur':return(_ie)?'focusout':'blur';default:return type;}},on:function(el,type,cb,obj,scope){var _capture=((type=='focus'||type=='blur')&&window.addEventListener)?true:false;var context=el;if(scope){context=(scope===true)?obj:scope;}
var _cb=function(event){if(cb.call(context,event||window.event,obj)===false){ccmu.evt.stop_event(event||window.event);}},_type=ccmu.evt._get_type(type);if(el.addEventListener){el.addEventListener(_type,_cb,(_capture));}else if(el.attachEvent){el.attachEvent("on"+_type,_cb);}else{return false;}
return true;}},frm:{frm2qs:function(frm)
{var _aqs=[],_ori=false,$frm=ccmu.dom.getProperElement(frm);frm=$frm[0];for(i=0;i<frm.elements.length;i++){var _el=frm.elements[i];if(!_el||!_el.name){continue;}
switch(_el.tagName.toLowerCase()){case"input":switch(_el.type){case"text":case"hidden":case"file":case"password":case"reset":case"submit":_ori=ccmu.frm._get_ori_attr(_el);_aqs.push(_el.name+"="+((!_ori||(_el.value!==_ori))?encodeURIComponent(_el.value):''));break;case"checkbox":if(_el.checked){_aqs.push(_el.name+"="+encodeURIComponent(_el.value));}else{_aqs.push(_el.name+"=0");}
break;case"radio":if(_el.checked){_aqs.push(_el.name+"="+encodeURIComponent(_el.value));}
break;}
break;case"button":switch(_el.type){case"reset":case"submit":case"button":_ori=ccmu.frm._get_ori_attr(_el);_aqs.push(_el.name+"="+((!_ori||(_el.value!==_ori))?encodeURIComponent(_el.value):''));break;}
break;case"textarea":_ori=_el.getAttribute('_ori')||false;_aqs.push(_el.name+"="+((!_ori||(_el.value!==_ori))?encodeURIComponent(_el.value):''));break;case"select":switch(_el.type){case'select-one':_aqs.push(_el.name+"="+encodeURIComponent(_el.options[_el.selectedIndex].value));break;case'select-multiple':for(var j=0;j<_el.options.length;j++)
if(_el.options[j].selected)
_aqs.push(_el.name+"="+encodeURIComponent(_el.options[j].value));break;}
break;}}
return _aqs.join('&');},treecat_chk:function()
{var _ret=true;if(this.elts.opts_form&&this.elts.opts_form.addcat&&this.elts.opts_form.addcat.value&&this.config.addconfmsg){_ret=confirm(this.config.addconfmsg);}
if(this.elts.opts_form&&this.elts.opts_form.movetocat&&(this.elts.opts_form.movetocat.value>=0)&&this.config.moveconfmsg){_ret=confirm(this.config.moveconfmsg);}
if(this.elts.opts_form&&this.elts.opts_form.deletecat&&this.elts.opts_form.deletecat.checked&&this.config.deleteconfmsg){_ret=confirm(this.config.deleteconfmsg);}
return _ret;},_get_ori_attr:function(_tgt)
{var _ori=null,_actid;if(typeof _tgt.value=='string')
{_actid=_tgt.getAttribute('actid')||null;_ori=_tgt.getAttribute('_ori')||null;if((_ori===null)&&(_actid==='ofempty'))
{_ori=_tgt.value;_tgt.setAttribute('_ori',_tgt.value);}}
return _ori;}},cookie:{set:function(name,val,days,path)
{path=path||'/';var _exp='';if(days){var _d=new Date();_d.setTime(_d.getTime()+(days*24*60*60*1000));_exp="; expires="+_d.toGMTString();}
document.cookie=name+"="+val+_exp+"; path="+path;},remove:function(name)
{ccmu.cookie.set(name,'',-1);},get:function(name)
{var _s=name+"=",_a=document.cookie.split(';'),_c;for(var i=0;i<_a.length;i++){_c=_a[i];while(_c.charAt(0)==' '){_c=_c.substring(1,_c.length);}
if(_c.indexOf(_s)===0){return _c.substring(_s.length,_c.length);}}
return null;}}};}(jQuery);if(!window.console){console={log:function(str){}}}
ccmu.dbg=(window.document.URL.match(/dbgjs/i)&&window.console)?function(str){console.log(str);}:function(){};(function($)
{'use strict';$.fn.fancy=function(options)
{options=$.extend({},$.fn.fancy.defaultOptions,options);var self=this;typeof $.fn.fancybox==='function'?self.fancybox(options):$(document).on('fancyboxLoaded',function(){self.fancybox(options);});return this;};$.fn.fancy.defaultOptions={};}(jQuery));ccmboxes={boxes:{},msgs:{ajax_start:"Loading ...",ajax_ok:"Completed",ajax_error:"Request error"}};ccmboxes.box=function(container,elts,config)
{this.container=$(container);if(this.container){this.id=this.container.id;}
this.config=config||{};elts=elts||{};if(elts.options&&(elts.options=='_auto_modale_')){this._opt_auto_modal=true;elts.options=document.body.insertBefore(document.createElement('div'),document.body.firstChild);elts.options.className='modale';elts.options.style.display='none';var _self=this;elts.options.onclick=function(event){event=event||window.event;return _self.on_click.call(_self,event);};}
this.elts={options:(elts.options)?$(elts.options):null,content:(elts.content)?$(elts.content):null};if(this.config.xhrprm){this.config.xhrprm+='&';}else{this.config.xhrprm='';}
this.create_events();if(this.config.reload){this.reload();}};ccmboxes.box.prototype={container:null,config:null,id:null,elts:null,_opt_auto_modal:false,toString:function(){return(' ccmbox id='+this.id);},create_events:function(){var _self=this;if(this.container){this.container.onclick=function(event){return _self.on_click.call(_self,event||window.event);};}
if(this.config.with_omo){var _el=$(this.config.with_omo);if(_el){$(this.config.with_omo).onmouseover=function(event){return _self.on_mouse_over.call(_self,event||window.event);};}}},on_click:function(event){var _tgt=event.target||event.srcElement,_actid=_tgt.getAttribute('actid')||false,_ret=false;if(!_actid){_tgt=_tgt.parentNode;_actid=_tgt.getAttribute('actid')||false;}
switch(_actid){default:_ret=true;break;case'optlink':if(this.config._zoom){this.toggle_zoom();}
_ret=this.toggle_opt();break;case'hidelink':if(this.config._zoom){this.toggle_zoom();}
if(this.elts.content.style.display==='none'){this.elts.content.style.display='block';_tgt.getElementsByTagName('span')[0].className='arrowDown';}else{this.elts.content.style.display='none';_tgt.getElementsByTagName('span')[0].className='arrowUp';}
ccmu.cookie.set('ccmbox_'+this.id,this.elts.content.style.display,3);break;case'delmyi':var _delid=_tgt.getAttribute('delid')||0;if(_delid&&(!this.config.msgdel||confirm(this.config.msgdel))){ccmu.dom.oldAjaxUpdater(this.elts.content,this.config.url,{method:'get',parameters:this.config.xhrprm+'mode=remove&delid='+parseInt(_delid,10)});}
break;case'loadoptbynum':var _numact=_tgt.getAttribute('numact')||0;this.load_opt_frm('numact='+_numact+'&');break;case'showallchilds':if(!this.config.showallchilds||!this.config.showallchilds.parent){return false;}
var _sac=this.config.showallchilds;_sac.num=_sac.num||5;_sac.tag_name=_sac.tag_name||'li';var _els=$(_sac.parent).getElementsByTagName(_sac.tag_name);for(var i=_sac.num;i<_els.length;i++){_els[i].style.display=(_els[i].style.display==='none')?'':'none';}
var _el=_tgt.getElementsByTagName('span')[0];if(_el){_el.className=(_el.className==='arrowUp')?'arrowDown':'arrowUp';}
break;case'fullscreen':this.toggle_zoom();break;}
return _ret;},on_submit:function(event)
{var _tgt=event.target||event.srcElement,_actid=_tgt.getAttribute('actid')||false,_ret=false;ccmu.dbg('on_submit actid='+_actid);switch(_actid){default:break;case'optform':if(this.config._zoom){this.toggle_zoom();}
this.elts.opts_form=_tgt;if(this.config.withfile){var _sepa=(this.config.url.match(/\?/))?'&':'?',_self=this;this.elts.opts_form.action=this.config.url+_sepa+this.config.xhrprm+'mode=valid_opt';_ret=ajax_upload.submit(_self.elts.opts_form,{'onComplete':function(responseText){_self.callback_on_complete_upload.call(_self,responseText);}});}
else{_ret=this.submit_options_form();}
break;}
return _ret;},on_mouse_over:function(event)
{var _tgt=event.target||event.srcElement,_actid=_tgt.getAttribute('actid')||false,_ret=false;switch(_actid){default:break;case'slide':var _els=this.elts.content.getElementsByTagName('div'),_num=_tgt.getAttribute('num')||0,_tgts=_tgt.parentNode.parentNode.getElementsByTagName(_tgt.tagName),_curind=0;for(var i=0;i<_els.length;i++){var _inum=_els[i].getAttribute('num')||-1;if(_inum>=0){if(_inum==_num){jQuery(_tgts[_curind]).addClass('selected');jQuery(_els[i]).removeClass('hide');}else{jQuery(_tgts[_curind]).removeClass('selected');jQuery(_els[i]).addClass('hide');}
_curind++;}}
break;}
return _ret;},toggle_opt:function(){if(!this.elts.options){return false;}
var _opt_el=this.elts.options;if(_opt_el.style.display==='none'){_opt_el.style.display='block';this.load_opt_frm();}else{_opt_el.style.display='none';}
return false;},toggle_zoom:function(){var _st=this.container.style,_cnt=this.elts.content.style,_cnf=this.config;_cnf._zoom=_cnf._zoom||false;if(!_st||!_cnt){return;}
if(!_cnf._zoom){_cnt.display='none';jQuery(this.container).addClass('zoom_box_right');_cnf._ovl=document.createElement('div');_cnf._ovl.innerHTML='&nbsp;';jQuery(_cnf._ovl).addClass('overlayDivBlack');$('content').appendChild(_cnf._ovl);_cnf._ovl.style.display='block';_cnf._zoom=true;if(_cnf.onzoom){_cnf.onzoom.call();}}else{_cnt.display='';jQuery(this.container).removeClass('zoom_box_right');if(_cnf._ovl){$('content').removeChild(_cnf._ovl);}
_cnf._zoom=false;if(_cnf.onunzoom){_cnf.onunzoom.call();}}
if(_cnf.anchor_zoom){location.hash=_cnf.anchor_zoom;}},load_opt_frm:function(more_prm)
{var _opt_el=this.elts.options,_self=this;more_prm=more_prm||'';new Ajax.Request(this.config.url,{method:'post',parameters:this.config.xhrprm+more_prm+'mode=opt',onSuccess:function(transport){_opt_el.innerHTML=transport.responseText;_self.set_options_form.call(_self);},onFailure:function(transport){_opt_el.innerHTML=transport.responseText;}});},reload:function(){if(this.elts.content){ccmu.dom.oldAjaxUpdater(this.elts.content,this.config.url,{method:'get',parameters:this.config.xhrprm+'mode=content',evalScripts:false});}
return false;},set_options_form:function(){ccmu.dbg(this.elts.options);if(this.elts.options){var _self=this;setTimeout(function(){_self.elts.opts_form=_self.elts.options.getElementsByTagName('form')[0];ccmu.dbg(_self.elts.opts_form);if(_self.elts.opts_form){_self.elts.opts_form.onsubmit=function(event){ccmu.dbg('submit opts_form');event=event||window.event;return _self.on_submit.call(_self,event);}}},300);}},submit_options_form:function()
{if(this.config.callback_frm_check){var _ok=this.config.callback_frm_check.call(this);if(!_ok){return false;}}
ccmu.dom.oldAjaxUpdater(this.elts.content,this.config.url,{method:'post',parameters:this.config.xhrprm+'mode=valid_opt&'+ccmu.frm.frm2qs(this.elts.opts_form),evalScripts:false});this.toggle_opt();return false;},callback_on_complete_upload:function(responseText)
{this.elts.content.innerHTML=responseText;this.toggle_opt();}};ccmboxes.skin={on_change:function(event){var _ret=false,_gei=ccmu.evt.get_event_infos(event),_tgt=_gei[0],_actid=_gei[1];if(_actid==='ofempty'){return true;}
switch(_actid){case'sel_skin':var _css=_tgt.value,_key=_tgt.id;if(_css<0||typeof(_css)=='undefined'){_key=_tgt.getAttribute('data-key');_css=_tgt.getAttribute('data-value');if(_css<0||typeof(_css)=='undefined'){return false;}}
new Ajax.Request('/xhr/save_ccmskin',{method:'get',parameters:'key='+_key+'&val='+_css,evalScripts:false,onSuccess:function(transport){transport.responseJSON=JSON.parse(transport.response);if(transport.responseJSON.result===true){ccmu.dom.remove_all_ccmcss(_key);if(!_css||_css==='ccm'){return false;}
ccmu.dom.css_include(transport.responseJSON.message,'screen',_key);}else{alert(transport.responseJSON.message);}
return false;},onFailure:function(transport){transport.responseJSON=JSON.parse(transport.response);alert(transport.responseJSON.message);}});break;default:return true;}
return _ret;}}
ccmboxes.myfav={add:function(el){new Ajax.Request('/xhr/myfav/',{method:'post',parameters:'url='+window.document.URL+'&title='+encodeURIComponent(document.title)+'&mode=add',evalScripts:false,onSuccess:function(transport){ccmboxes.myfav._linklbl=el.innerHTML;el.innerHTML='OK '+transport.responseText.replace(/</g,"&lt;").replace(/>/g,"&gt;");setTimeout(function(){el.innerHTML=ccmboxes.myfav._linklbl},3000);var _cte=ccmboxes.topic.colors.ok,_box=ccmboxes.boxes.myfav;if(_box){_box.container.style.display='';if(_box.config.anchor_zoom){location.hash=_box.config.anchor_zoom;}
_box.reload();(new ccmu.dom.fade(_box.elts.content,{from:_cte.fade_from,to:_cte.fade_to,w_return:true,final_reset:true})).go();}
return false;},onFailure:function(transport){el.innerHTML=transport.responseText;var _cte=ccmboxes.topic.colors.err;(new ccmu.dom.fade(el,{from:_cte.fade_from,to:_cte.fade_to,w_return:true,final_reset:true})).go();return false;}});}}
articlesutils={activate_tab:function(el){var _cur_tab=el.parentNode;for(var _i in articlesutils.config.tabs){var _tab=$(articlesutils.config.tabs[_i][0])||null,_ctn=$(articlesutils.config.tabs[_i][1])||null;if(!_tab||!_ctn){continue;}
if(_tab===_cur_tab){_ctn.style.display='block';_tab.className='selected';}else{_ctn.style.display='none';_tab.className='';}}
return false;},elts:{},config:{},msg:{},el:null,listeningExit:false,before_unload:function(){return articlesutils.msg.confirm_exit||"You haven't finished your post yet. Do you want to leave without finishing?";},init_edt_mode:function(prms,msg){articlesutils.elts={options:$('article_edit_opt'),content:$('article_cnt'),dlprogress:null,advanced_options:null,opts_form:null}
articlesutils.config=prms||{};articlesutils.msg=msg||{start_upload:"Processing ...",ok_upload:"Done !",error:"Request error"};if($('lnk_edit_article')){$('lnk_edit_article').onclick=function(){return articlesutils.toggle_opt('edit');}}
if($('lnk_update_article')){$('lnk_update_article').onclick=function(){return articlesutils.toggle_opt('update');}}
if($('lnk_add_article')){$('lnk_add_article').onclick=function(){return articlesutils.toggle_opt('add');}}
if($('lnk_add_sepa')){$('lnk_add_sepa').onclick=function(){return articlesutils.toggle_opt('addsepa');}}
articlesutils.elts.options.onclick=function(event){return articlesutils.on_click_form.call(articlesutils,event||window.event);};magiclink.num_btns_in_ul=1;},toggle_opt:function(act){if(!articlesutils.elts.options){return false;}
var _opt_el=articlesutils.elts.options;articlesutils.config.cur_act=act;if(_opt_el.style.display==='none'){_opt_el.innerHTML='';_opt_el.style.display='block';if(act=='edit'||act=='add'||act=='update'){if($('lnk_edit_article')){$('lnk_edit_article').style.display='none';}
if($('lnk_update_article')){$('lnk_update_article').style.display='none';}
if($('lnk_add_article')){$('lnk_add_article').style.display='none';}
if(!articlesutils.listeningExit){articlesutils.listeningExit=true;jQuery(window).bind('beforeunload',articlesutils.before_unload);}}
var _prm='';for(var _i in articlesutils.config){if((typeof _i==='string')&&(_i!=='url')&&(typeof articlesutils.config[_i]==='string')){_prm+='&'+_i+'='+articlesutils.config[_i];}}
ccmu.dom.oldAjaxUpdater(_opt_el,articlesutils.config.url,{method:'post',parameters:'act='+act+_prm,evalScripts:true});}else{_opt_el.style.display='none';if(articlesutils.listeningExit){articlesutils.listeningExit=false;jQuery(window).unbind('beforeunload',articlesutils.before_unload);}
if(act=='edit'||act=='add'||act=='update'){if($('lnk_edit_article')){$('lnk_edit_article').style.display='block';}
if($('lnk_update_article')){$('lnk_update_article').style.display='block';}
if($('lnk_add_article')){$('lnk_add_article').style.display='block';}}}
return false;},toggle_preview:function(){if(!articlesutils.elts.opts_form){return false;}
var _f=$('frm_art_fields'),_pr=$('artpreview'),_cl=$('artclose'),_su=articlesutils.elts.opts_form.artsubmit,_be=articlesutils.elts.opts_form.backtoedit,_ur=$('frm_edit_url');if(_f.style.display==='none'){_f.style.display='block';_be.style.display='none';if(_cl){_cl.style.display='none';}
if(_pr){_pr.style.display='inline';}
if(_ur){_ur.style.display='block';}
articlesutils.show_msg('','');}else{_f.style.display='none';_be.style.display='inline';if(_pr){_pr.style.display='none';}}
if(_su&&_be&&_pr){_su.style.display=_be.style.display;}
else if(_su&&_be){_su.style.display=(_be.style.display=='none')?'inline':'none';}},widget:function(widget_name){if(!widget_name||!$(widget_name)){return false;}
ccmu.dom.oldAjaxUpdater($(widget_name),'/xhr/widget_'+widget_name+'/',{method:'get',parameters:'xhr&'+location.search.substr(1),evalScripts:true});return false;},toggle_adv:function(){if(!articlesutils.elts.advanced_options){return false;}
var _opt_el=articlesutils.elts.advanced_options;if(_opt_el.style.display==='none'){_opt_el.style.display='block';}else{_opt_el.style.display='none';}
return false;},detect_language:function(){var language=window.navigator.userLanguage||window.navigator.language;return language.substring(0,2);},appmob:function(elt,id){var cur_os=articlesutils.detect_os().toLowerCase(),ret='other';if((cur_os==='iphone')||(cur_os==='ipad')){elt.href='/download/app/?src='+cur_os+'#'+id;ret='ios';}
else if(cur_os==='android'){elt.href='/download/app/?src='+cur_os+'#'+id;ret='android';}
return ret;},detect_os:function(){var OS="Unknown";var av=navigator.appVersion;var ua=navigator.userAgent;if(av.indexOf("Win")!==-1)OS="Windows";if(av.indexOf("Mac")!==-1)OS="Mac";if(av.indexOf("X11")!==-1)OS="Unix";if(av.indexOf("Linux")!==-1)OS="Linux";if(ua.indexOf("Android")!==-1)OS="Android";if(ua.indexOf("iPhone")!==-1)OS="iPhone";if(ua.indexOf("iPad")!==-1)OS="iPad";if(ua.indexOf("iPod")!==-1)OS="iPhone";return OS;},countdown:function(){if(!articlesutils.config){return false;}
articlesutils.config.c1--;articlesutils.config.c2--;if(articlesutils.config.c2==0){}
if(articlesutils.config.c1==0){window.location='/#ID='+articlesutils.config.id+'&module='+articlesutils.config.module;}
else if($('countdown')){$('countdown').innerHTML=articlesutils.config.c1;}},init:function(prms){if(!prms){return false;}
articlesutils.config=prms||{};setInterval(articlesutils.countdown,1000);if($('countdown')){$('countdown').innerHTML=articlesutils.config.c1;}
else{setTimeout(init,50);}},start_download:function(){var ele=document.createElement('iframe');if(articlesutils.config.module=='download')
ele.src="/download/get/download-"+articlesutils.config.id+'-';else if(articlesutils.config.module=='faq')
ele.src="/faq/pdf/"+articlesutils.config.id+'-';else if(articlesutils.config.module=='contents')
ele.src="/contents/pdf/"+articlesutils.config.id+'-';ele.style.display="none";document.body.appendChild(ele);},set_options_form:function(){if(!articlesutils.elts.options){return false;}
articlesutils.elts.opts_form=articlesutils.elts.options.getElementsByTagName('form')[0];if(articlesutils.elts.opts_form){articlesutils.elts.opts_form.onsubmit=function(event){return articlesutils.on_submit.call(articlesutils,event||window.event);};articlesutils.elts.opts_form.onmouseover=function(event){return articlesutils.on_mover_form.call(articlesutils,event||window.event);};articlesutils.elts.opts_form.onmouseout=function(event){return articlesutils.on_mout_form.call(articlesutils,event||window.event);};articlesutils.elts.textarea=articlesutils.elts.opts_form.getElementsByTagName('textarea')[0];if(articlesutils.elts.textarea){articlesutils.elts.textarea.onfocus=function(event){document.onkeyup=magiclink.on_keyup;return true;};articlesutils.elts.textarea.onblur=function(event){document.onkeyup=null;return true;};articlesutils.elts.textarea.onclick=function(event){magiclink.on_click();return true;};if(articlesutils.elts.opts_form.act.value==='add'){if($('art_title')){$('art_title').innerHTML='...';}
if(articlesutils.elts.content)articlesutils.elts.content.innerHTML='...';}}
if($('lnk_adv_opt')){articlesutils.elts.advanced_options=$('article_adv_opt');$('lnk_adv_opt').onclick=function(){return articlesutils.toggle_adv();}}
if($('artpreview')){$('artpreview').disabled=false;}}},test_regexp:function(){var _url=($('urlregexp')&&$('urlregexp').value)?encodeURIComponent($('urlregexp').value):'';var _regexp=($('strregexp')&&$('strregexp').value)?encodeURIComponent($('strregexp').value):'';var _div=$('urlregexp_div');var _msg=$('urlregexp_msg');if(!_div||!_msg)return false;_div.className='';_msg.innerHTML='';new Ajax.Request('/xhr/testregexp/',{method:'get',parameters:'url='+_url+'&regexp='+_regexp,evalScripts:false,onComplete:function(transport){if(transport&&transport.responseText){_j=eval("("+transport.responseText+")");if(_j.res==true){_div.className='validMsg';_msg.innerHTML=_j.msg;}else{_div.className='error';_msg.innerHTML=_j.msg;}}}});return false;},on_submit:function(event){articlesutils.submit_option_form();},submit_option_form:function(){document.location='#topedit';articlesutils.show_msg(articlesutils.msg.start_upload,'boxInfos');articlesutils.show_overlay();switch(articlesutils.elts.opts_form.mode.value){case'artsubmit':if($('download_url')&&$('download_url').value!=''&&(($('download_previous_url')&&$('download_previous_url').value!==$('download_url').value)||($('previous_version')&&$('version')&&$('previous_version').value!==$('version').value))&&articlesutils.elts.opts_form.ID){articlesutils.elts.dlprogress=new Ajax.PeriodicalUpdater('ajaxmsg','/download/_xhr_/progress/',{method:'get',parameters:'ID='+articlesutils.elts.opts_form.ID.value,frequency:0.2,decay:4,evalScripts:false,onComplete:function(transport){var response=(transport&&transport.responseText)?transport.responseText:"no response text";if(response.match(/<!--STOP-->/i)){articlesutils.elts.dlprogress.stop();articlesutils.elts.dlprogress=null;}}});}
break;}
new Ajax.Request(articlesutils.config.url,{method:'post',parameters:ccmu.frm.frm2qs(articlesutils.elts.opts_form),evalScripts:false,onSuccess:function(transport){if(articlesutils.elts.dlprogress)articlesutils.elts.dlprogress.stop();articlesutils.hide_overlay();switch(articlesutils.elts.opts_form.mode.value){case'artpreview':articlesutils._after_submit(transport);break;case'artsubmit':if(articlesutils.listeningExit){articlesutils.listeningExit=false;jQuery(window).unbind('beforeunload',articlesutils.before_unload);}
articlesutils._after_submit(transport);if($('artsubmit')){$('artsubmit').style.display='none';}
if($('artclose')){$('artclose').style.display='';}
break;}},onFailure:function(transport){articlesutils.hide_overlay();switch(articlesutils.elts.opts_form.mode.value){case'artpreview':case'artsubmit':try{if(transport&&transport.status&&transport.status==504){}
else{if(articlesutils.elts.dlprogress)articlesutils.elts.dlprogress.stop();var _a=eval("("+transport.responseText+")");_a.msg=_a.msg||articlesutils.msg.error;articlesutils.show_msg(_a.msg,'boxError');}}catch(e){if(articlesutils.elts.dlprogress)articlesutils.elts.dlprogress.stop();articlesutils.show_msg(articlesutils.msg.error,'boxError');}
break;}}});return false;},_after_submit:function(transport)
{try{var _a=(transport.responseText)?eval("("+transport.responseText+")"):transport;_a.msg=_a.msg||articlesutils.msg.ok_upload;if(_a.res){if(_a.title&&$('art_title')){$('art_title').innerHTML=_a.title;}
if(_a.content){articlesutils.elts.content.innerHTML=_a.content;}
articlesutils.show_msg(_a.msg,'boxValid');if(_a.titletoc&&articlesutils.elts.opts_form.titletoc){articlesutils.elts.opts_form.titletoc.value=_a.titletoc;}
if(_a.url&&articlesutils.elts.opts_form.url){articlesutils.elts.opts_form.url.value=_a.url;}
if(_a.url&&_a.title){if(history.pushState)history.pushState({},_a.title,_a.url);}
if(_a.id&&articlesutils.elts.opts_form.ID){articlesutils.elts.opts_form.ID.value=_a.id;articlesutils.elts.opts_form.act.value='edit';}
if($('toc_ctn')&&_a.toc){$('toc_ctn').innerHTML=_a.toc;}}else{articlesutils.show_msg(_a.msg,'boxError');if(transport.error){for(var key in transport['error']){articlesutils.show_msg(articlesutils.msg.error+': '+transport['error'][key]+"<br />",'boxError');}}}}catch(e){articlesutils.show_msg(articlesutils.msg.error,'boxError');}},direct_download:function()
{$j.fancybox({'autoScale':true,'transitionIn':'elastic','transitionOut':'elastic','speedIn':500,'speedOut':300,'autoDimensions':true,'centerOnScroll':true,'href':'#direct_download'});},before_download:function(cur_lang)
{articlesutils.config.return_val=true;var platform=articlesutils.detect_os().toLowerCase().replace(' ','_');var isTouch=document.createTouch!==undefined;if(articlesutils.config.lang.length){var MyRequest=new Ajax.Request('/public/_skin/_common/js/env.php?l='+cur_lang,{method:'get',asynchronous:false});var lang=MyRequest.transport.responseText||articlesutils.detect_language();lang=lang.substring(0,2).toLowerCase();for(var i=0;i<articlesutils.config.lang.length;i++){var config_lang=articlesutils.config.lang[i].toLowerCase();if(config_lang===lang){if($('choose_flag_'+config_lang)){$('choose_flag_'+config_lang).style.display='block';}
$j.fancybox({'autoScale':true,'transitionIn':'elastic','transitionOut':'elastic','speedIn':500,'speedOut':300,'autoDimensions':true,'centerOnScroll':true,'fixed':false,'href':'#choose_language'});articlesutils.config.return_val=false;break;}}}
if(articlesutils.config.return_val&&articlesutils.config.os.length){for(var i=0;i<articlesutils.config.os.length;i++){var config_os=articlesutils.config.os[i].toLowerCase().replace(' ','_');if(config_os===platform){if($('choose_os_'+config_os)){$('choose_os_'+config_os).style.display='block';}
$j.fancybox({'autoScale':true,'transitionIn':'elastic','transitionOut':'elastic','speedIn':500,'speedOut':300,'autoDimensions':true,'centerOnScroll':true,'fixed':false,'href':'#choose_os'});articlesutils.config.return_val=false;break;}}}
return articlesutils.config.return_val;},show_overlay:function()
{if($('overlay')){$('overlay').style.display='';}
setTimeout(function(){if($('cancel_request')){$('cancel_request').style.display='';}},5);},hide_overlay:function()
{if($('overlay')){$('overlay').style.display='none';}},on_click_form:function(event){var _tgt=event.target||event.srcElement,_actid=_tgt.getAttribute('actid')||false,_ret=false;if(!_actid){_tgt=_tgt.parentNode;_actid=_tgt.getAttribute('actid')||false;}
switch(_actid){default:_ret=true;break;case'optlink':_ret=articlesutils.toggle_opt(articlesutils.config.cur_act);break;case'textfmt':var _acttype=_tgt.getAttribute('acttype')||false;tagActions.insert(articlesutils.elts.textarea,_acttype,true);break;case'mlcancelall':magiclink.cancel_all();break;case'testregexp':articlesutils.test_regexp();break;case'mlapplyall':magiclink.apply_all();break;case'loadimgart':articlesutils.elts.opts_form.action=articlesutils.config.url;articlesutils.elts.opts_form.mode.value='loadimgart';_ret=ajax_upload.submit(articlesutils.elts.opts_form,{'onStart':articlesutils.callback_start_upload,'onComplete':articlesutils.callback_on_complete_upload});if(_ret){articlesutils.elts.opts_form.submit();}
_ret=false;break;case'sendimgform':articlesutils.toggle_preview();articlesutils.elts.opts_form.mode.value='artpreview';articlesutils.hide_overlay();_ret=ajax_upload.submit(articlesutils.elts.opts_form,{'onStart':articlesutils.callback_start_upload,'onComplete':function(responseText){articlesutils._after_submit_image_frm(responseText)}});if(_ret){articlesutils.elts.opts_form.submit();}
_ret=false;break;case'artpreview':articlesutils.toggle_preview();articlesutils.elts.opts_form.mode.value='artpreview';articlesutils.submit_option_form();break;case'togglepreview':articlesutils.toggle_preview();break;case'toggleedit':articlesutils.toggle_opt('edit');break;case'artsubmit':if($('frm_art_fields').style.display!=='none'){articlesutils.toggle_preview();}
articlesutils.elts.opts_form.mode.value='artsubmit';articlesutils.submit_option_form();break;}
return _ret;},_after_submit_image_frm:function(responseText){try{var infos=eval("("+responseText+")");if(infos.image){$('infoimageUpload').style.display="block";$('imagePreview').src=infos.image;$('imageUploadedName').value=infos.image;}
articlesutils._after_submit(infos);}
catch(e){articlesutils.show_msg(articlesutils.msg.error+':'+e.message+"<br />"+responseText,'boxError');}},callback_start_upload:function(){articlesutils.show_msg(articlesutils.msg.start_upload,'boxInfos');return true;},callback_on_complete_upload:function(responseText){try{var _a=eval(responseText);if(_a[0]===true){articlesutils.show_msg(articlesutils.msg.ok_upload,'boxValid');tagActions.insert(articlesutils.elts.textarea,_a[1],false,true);}else{articlesutils.show_msg(_a[1],'boxError');}}catch(e){articlesutils.show_msg(articlesutils.msg.error,'boxError');}},on_mover_form:function(event){var _tgt=event.target||event.srcElement,_actid=_tgt.getAttribute('actid')||false,_ret=false;if(!_actid){_tgt=_tgt.parentNode;_actid=_tgt.getAttribute('actid')||false;}
switch(_actid){default:_ret=true;break;case'textfmt':var _actlbl=_tgt.getAttribute('actlbl')||false;BulleWrite(_actlbl);break;}
return _ret;},on_mout_form:function(event){var _tgt=event.target||event.srcElement,_actid=_tgt.getAttribute('actid')||false,_ret=false;if(!_actid){_tgt=_tgt.parentNode;_actid=_tgt.getAttribute('actid')||false;}
switch(_actid){default:_ret=true;break;case'textfmt':BulleHide();break;}
return _ret;},show_msg:function(msg,css){msg=msg||'';var _el=$('ajaxmsg');if(msg!==''){_el.style.display='block';css=css||'boxInfos';}else{_el.style.display='none';}
_el.className=css;_el.innerHTML=msg;location.hash='top';}};ajax_upload={frame:function(c){var n='f'+Math.floor(Math.random()*99999);var d=document.createElement('DIV');d.innerHTML='<iframe style="display:none" src="about:blank" id="'+n+'" name="'+n+'" onload="ajax_upload.loaded(\''+n+'\')"></iframe>';document.body.appendChild(d);var i=document.getElementById(n);if(c&&typeof(c.onComplete)=='function'){i.onComplete=c.onComplete;}
return n;},form:function(f,name){f.setAttribute('target',name);},submit:function(f,c){ajax_upload.form(f,ajax_upload.frame(c));return(c&&typeof(c.onStart)=='function')?c.onStart():true;},loaded:function(id){var i=document.getElementById(id),d;d=i.contentWindow?i.contentWindow.document:i.contentDocument?i.contentDocument:i.document;if(d.location.href=="about:blank"){return;}
if(typeof(i.onComplete)=='function'){var ret=(null===d.body.innerHTML.match(/^<pre.*<\/pre>$/i))?d.body.innerHTML:d.documentElement.textContent;i.onComplete(ret);}}}
ccmboxes=window.ccmboxes||{boxes:{}}
ccmboxes.topic={question_id:0,forum_id:0,get_prms:{},uforum:{},container:null,main_tabs:[['content_tab','content_ctn'],['forumlist_tab','forumlist_ctn']],msgs:{show_cmts:'',hide_cmts:'',post_error:'',solve_lnk:'',unsolve_lnk:''},urls:{prefix:'/forum/_xhr_/',pmm:'/forum/_xhr_/postmodomenu/'},colors:{err:{fade_from:['EF','EF','EF'],fade_to:['D6','07','1B']},ok:{fade_from:['E3','EB','F5'],fade_to:['AE','B5','BD'],fade_anchor:['FD','98','1E']}},constants:{CCM_MSG_QUESTION:1,CCM_MSG_QUESTION_COMMENT:2,CCM_MSG_ANSWER:3,CCM_MSG_ANSWER_COMMENT:4},_is:{cim:0,frmqa_init:false,msgrsz:null},topicfrms:{},init:function(question_id,w_qa_evt){this.question_id=question_id;this.container=$('ctn_'+question_id);if(!this.container){return false;}
var _r=this._init_events();if(_r&&w_qa_evt){_r=this.init_qafrm_events($('message'));}
var _M=window.document.URL.match(/#newanswer$/);if(_M){this.abm.load_frm('newa',this.question_id,this.question_id);location.hash='';}
_M=window.document.URL.match(/#.*?(new|edit)(q|a|c)_(\d+)_(\d+)_(\d)/);if(_M&&_M.length===6){this._is._cur_star=_M[5]||false;_M[3]=parseInt(_M[3],10)||this.question_id;_M[4]=parseInt(_M[4],10)||this.question_id;ccmboxes.topic.abm.load_frm(_M[1]+_M[2],_M[3],_M[4]);location.hash='';}
this.uforum.get_prms=(this.uforum.module?'&ufmodule='+encodeURIComponent(this.uforum.module):'')
+(this.uforum.info_id?'&ufinfoid='+this.uforum.info_id:'')
+(this.uforum.title?'&uftitle='+encodeURIComponent(this.uforum.title):'')
+(this.uforum.info_url?'&ufurl='+encodeURIComponent(this.uforum.info_url):'')
+(this.uforum.info_aid?'&ufaid='+encodeURIComponent(this.uforum.info_aid):'')
+(this.uforum.info_anick?'&ufanick='+encodeURIComponent(this.uforum.info_anick):'')
+(this.uforum.info_atok?'&ufatok='+encodeURIComponent(this.uforum.info_atok):'')
+(this.get_prms.tcp?'&tcp='+encodeURIComponent(this.get_prms.tcp):'');return _r;},toggle_shmore:function(){var _el=$('qdispctn');if(_el){$('qshowmore').style.display=(_el.scrollHeight>_el.clientHeight)?'block':'none';}},get_common_prms:function(exclude_cat){if(exclude_cat)
return'parentx='+this.question_id+(this.get_prms.s?'&s=s':'')+this.uforum.get_prms;else
return'parentx='+this.question_id+'&cat='+this.forum_id+(this.get_prms.s?'&s=s':'')+this.uforum.get_prms;},_init_events:function(){var _self=ccmboxes.topic;if(!_self.container){return false;}
ccmu.evt.on(_self.container,'click',_self.on_click,_self,true);ccmu.evt.on(_self.container,'dblclick',_self.on_dbl_click,_self,true);ccmu.evt.on(_self.container,'focus',_self.on_focus,_self,true);ccmu.evt.on(_self.container,'blur',_self.on_blur,_self,true);_self.init_tooltip_events();var _mdn=$('modo_div_new');if(_mdn){ccmu.evt.on(_mdn,'click',_self.on_click,_self,true);ccmu.evt.on(_mdn,'focus',_self.on_focus,_self,true);ccmu.evt.on(_mdn,'blur',_self.on_blur,_self,true);}
_mdn=$('newqcmt');if(_mdn){ccmu.evt.on(_mdn,'click',_self.on_click,_self,true);}
_mdn=$('stars_digest_eval');if(_mdn){ccmu.evt.on(_mdn,'click',_self.on_click,_self,true);}
return true;},init_tooltip_events:function()
{var _el=$('forumlist_ctn'),_els=$('forumsublist_ctn'),_self=ccmboxes.topic;if(_el){ccmu.evt.on(_el,'mouseover',_self.on_mouse_over,_self,true);ccmu.evt.on(_el,'mouseout',_self.on_mouse_out,_self,true);}
if(_els){ccmu.evt.on(_els,'mouseover',_self.on_mouse_over,_self,true);ccmu.evt.on(_els,'mouseout',_self.on_mouse_out,_self,true);}
return true;},init_modo_events:function()
{var _mdn=$('mod_selact'),_self=ccmboxes.topic;if(_mdn){ccmu.evt.on(_mdn,'change',_self.on_change,_self,true);}},start_upload:function()
{_ret=ajax_upload.submit(articlesutils.elts.opts_form,{'onStart':articlesutils.callback_start_upload,'onComplete':articlesutils.callback_on_complete_upload});if(_ret){articlesutils.elts.opts_form.submit();}},init_qafrm_events:function(_el)
{if(!_el){return false;}
if(_el){ccmu.evt.on(_el,'keyup',function(event){magiclink.on_keyup(event);return true;});if(!this._is.frmqa_init){ccmu.evt.on(_el,'click',function(event){magiclink.on_click();return true;});}
ccmu.evt.on(_el,'focus',function(event){magiclink.textarea=event.target||event.srcElement;});(new ccmu.dom.ta_resize(_el)).go();_el=$('icnbar');if(_el){ccmu.evt.on(_el,'mouseover',this.on_mouse_over,this,true);ccmu.evt.on(_el,'mouseout',this.on_mouse_out,this,true);}
magiclink.num_btns_in_ul=1;this._is.frmqa_init=true;return true;}
return false;},_init_question_events:function(){var _el=$('topic_question');if(!_el||!_el.innerHTML){return false;}
var _self=ccmboxes.topic;ccmu.evt.on(_el,'dblclick',_self.on_dbl_click,_self,true);return true;},on_click:function(event){var _ret=false,_gei=ccmu.evt.get_event_infos(event),_tgt=_gei[0],_actid=_gei[1],_msg_id=0,i,_ctnfrm,_parent_id,_el,_cmt_toggle,_self=this,_abm=ccmboxes.topic.abm;if(_actid==='ofempty'){return true;}
if(!_actid&&_tgt&&_tgt.parentNode&&_tgt.parentNode.id&&(_tgt.parentNode.id.search(/_tab$/)>=0)){_tgt=_tgt.parentNode;_actid='toggle_tab';}
if(_actid){_msg_id=this.get_msg_id(_tgt);}
else if(_tgt&&_tgt.hash&&_tgt.href&&_tgt.tagName.toLowerCase()==='a'){var _docu=window.document.URL.replace(/#.*$/,''),_href=_tgt.href.replace(/#.*$/,'');if(_href.match(/itunes\.apple\.com\//)){_tgt.href=_href+'&at=1l3v7Mj&ct=appstv';}
return(_docu===_href)?ccmu.dom.scroll.go(_tgt):true;}else{if(_tgt.href&&_tgt.tagName.toLowerCase()==='a'){if(_tgt.href.match(/itunes\.apple\.com\//)){_tgt.href=_tgt.href+'&at=1l3v7Mj&ct=appstv';}}
return true;}
var _mode=_tgt.getAttribute('mode')||false;ccmu.dbg('click '+_actid+' on id '+_tgt.id+' => msg_id='+_msg_id+', mode='+_mode);switch(_actid){case'toggle_tab':return this.activate_tab.call(this,_tgt);break;case'shlog':_ctnfrm=_tgt.parentNode.parentNode;if(_ctnfrm&&(_ctnfrm.className==='login')){_ctnfrm.style.display='none';_el=_ctnfrm.nextSibling;while(_el&&_el.nodeName.toUpperCase()!=='DIV'){_el=_el.nextSibling;}
if(_el){_el.style.display='block';}}
break;case'hilog':_ctnfrm=_tgt.parentNode.previousSibling;while(_ctnfrm&&_ctnfrm.nodeName.toUpperCase()!=='DIV'){_ctnfrm=_ctnfrm.previousSibling;}
if(_ctnfrm&&(_ctnfrm.className==='login')){_ctnfrm.style.display='block';_el=_ctnfrm.nextSibling;while(_el&&_el.nodeName.toUpperCase()!=='DIV'){_el=_el.nextSibling;}
if(_el){_el.style.display='none';}}
break;case'qshowmore':case"shqafrmdcq":_el=$('qdispctn');var _el2=$('qshowmore');if(_el&&_el2){_el.style.maxHeight='';_el.style.height='';_el.style.overflow='hidden';_el2.style.display='none';}
_ret=true;break;case'shcmts':if($('comments_'+_msg_id)&&$('comments_'+_msg_id).firstChild){_cmt_toggle=$('comments_'+_msg_id).firstChild;while(_cmt_toggle&&_cmt_toggle.nodeName.toUpperCase()!=='DIV'){_cmt_toggle=_cmt_toggle.nextSibling;}}
else{_cmt_toggle=_tgt.parentNode;}
_el=_cmt_toggle;while(_el){if(_el.id&&_el.style.display=='none'){_el.style.display='block';}
_el=_el.nextSibling;while(_el&&_el.nodeName.toUpperCase()!=='DIV'){_el=_el.nextSibling;}}
_cmt_toggle.style.display='none';break;case'goanchor':_ret=ccmu.dom.scroll.go(_tgt);break;case'shcmtfrm':_parent_id=this.get_msg_id(_tgt,true);_abm.load_frm(_mode||'newc',_msg_id,_parent_id);break;case'newqcmt':this._is._cur_star=_tgt.getAttribute('actnum')||false;_abm.load_frm(_mode||'newc',this.question_id,this.question_id);break;case'cancelcmt':_parent_id=_self.get_msg_id(_tgt,true);if(_mode.search(/^edit/)>=0){_abm.reload_ori(_mode,_msg_id,_parent_id);}
_abm.close_frm(_mode||'newc',_msg_id,_parent_id);break;case'postcmt':case'pviewcmt':_parent_id=_self.get_msg_id(_tgt,true);_abm.submit_frm(_mode||'newc',_msg_id,_parent_id,(_actid=='pviewcmt'));break;case'shqafrm':_abm.load_frm(_mode||'newa',_msg_id,this.question_id);break;case'cancelqa':if(_mode.search(/^edit/)>=0){_abm.reload_ori(_mode,_msg_id,this.question_id);}
_abm.close_frm(_mode||'newa',_msg_id,this.question_id);break;case'postqa':case'pviewqa':_abm.submit_frm(_mode||'newa',_msg_id,this.question_id,(_actid=='pviewqa'));break;case'backedit':_abm.toggle_display(_mode||'newa','none',_msg_id,this.question_id);break;case'shmodomenu':case'solve':case'signal':case'addmyi':_ctnfrm=$('modo_div_new');if(!_ctnfrm){return false;}
if(_self._is.cim>0){_ctnfrm.style.display='none';_ctnfrm.innerHTML='';if((_actid!=='solve'&&_actid!=='addmyi')&&(_self._is.cim===_msg_id)){_self._is.cim=0;return false;}}
ccmboxes.topic.mod.place(event);_ctnfrm.innerHTML='&nbsp;';_ctnfrm.style.display='block';_self._is.cim=_msg_id;ccmboxes.topic.mod.load(_msg_id,_actid);break;case'votep':case'votem':_ctnfrm=$('vote_'+_msg_id);if(!_ctnfrm){return false;}
_ctnfrm.innerHTML='&nbsp;';jQuery(_ctnfrm).addClass('waiting');new Ajax.Request(_self.urls.prefix+'vote/',{method:'get',parameters:_self.get_common_prms()+'&ID='+_msg_id+'&vote='+_actid,evalScripts:false,onSuccess:function(transport){_ctnfrm.innerHTML=transport.responseText;_shcmtsfrm=$('shcmts'+_msg_id);if(_shcmtsfrm){if(_shcmtsfrm.fireEvent){(_shcmtsfrm.fireEvent('onclick'));}else{var evObj=document.createEvent('Events');evObj.initEvent('click',true,false);_shcmtsfrm.dispatchEvent(evObj);}}
jQuery(_ctnfrm).removeClass('waiting');},onFailure:function(transport)
{jQuery(_ctnfrm).removeClass('waiting');_ctnfrm.innerHTML='ERR';}});break;case'reloadtopic':this.reload_topic();break;case'textfmt':var _acttype=_tgt.getAttribute('acttype')||false;if(!_acttype){return true;}
var _force_txt=(_acttype==='conf')?_tgt.title:false,_ta=_tgt.parentNode.parentNode.getAttribute('taid')||'message';tagActions.insert($(_ta),_acttype,true,false,_force_txt);break;case'mlcancelall':magiclink.cancel_all();break;case'mlapplyall':magiclink.apply_all();break;case'manual_upload_pic':ccmboxes.topic.start_upload();case'insertpic':if(articlesutils.config.url!='/forum/_xhr_/uploadimg/'){articlesutils.config={url:'/forum/_xhr_/uploadimg/',ID:'0',title:''};articlesutils.msg={start_upload:"Processing ...",ok_upload:"Done !",error:"Request error"};_el=(jQuery.browser.msie||jQuery.browser.opera)?false:$('filename_frm');if(_el){ccmu.evt.on(_el,'change',_self.on_change,_self,true);}}
articlesutils.elts.opts_form=_abm.get_frm(_mode,_msg_id,this.question_id);articlesutils.elts.textarea=$('message');if(jQuery.browser.msie||jQuery.browser.opera){$j('#upload_div').show();}
else{$j('#filename_frm').click();}
break;case'showdsclmr':_el=$('dsclmr');if(_el){_el.style.display=(_el.style.display=='none')?'block':'none';}
break;case'modnewreason':if($("tareason")){$("tareason").value+="* "+_tgt.title+"\n\n";_tgt.style.color='#FD981E';}
break;case'modsubmit':ccmboxes.topic.mod.submit(_msg_id);break;case'stareval':_mode=_tgt.parentNode.parentNode.getAttribute('mode')||false;var _ev=_tgt.getAttribute('actnum')||false,_frm=_abm.get_frm(_mode,_msg_id,this.question_id),_t=_tgt.parentNode.getElementsByTagName('div')[0],_cto=this.colors.ok;if(_ev&&_frm&&_t&&_t.className==='currentNote'){_frm.stareval.value=_ev;_t.style.width=(16*parseInt(_ev,10))+'px';(new ccmu.dom.fade(_tgt,{from:_cto.fade_from,to:_cto.fade_anchor,w_return:true,final_reset:true})).go();_frm.message.focus();}
break;case'starevalrst':_mode=_tgt.parentNode.parentNode.getAttribute('mode')||false;_frm=_abm.get_frm(_mode,_msg_id,this.question_id);_t=_tgt.parentNode.parentNode.getElementsByTagName('div')[0].getElementsByTagName('div')[0];if(_frm&&_t&&_t.className==='currentNote'){_frm.stareval.value='';_t.style.width='0px';_frm.message.focus();}
break;default:_ret=true;break;}
return _ret;},on_focus:function(event){var _gei=ccmu.evt.get_event_infos(event),_tgt=_gei[0],_actid=_gei[1];switch(_actid){case'author':break;case'ofempty':if(typeof _tgt.value=='string'){var _ori=ccmu.frm._get_ori_attr(_tgt);if((_ori===null)||(_tgt.value==_ori)){_tgt.value='';}}
break;}
return true;},on_blur:function(event){var _ret=false,_gei=ccmu.evt.get_event_infos(event),_tgt=_gei[0],_actid=_gei[1];switch(_actid){case'author':break;case'ofempty':if(typeof _tgt.value=='string'){var _ori=ccmu.frm._get_ori_attr(_tgt);if(!_tgt.value&&_ori){_tgt.value=_ori;}}
break;default:_ret=true;break;}
return _ret;},on_mouse_over:function(event){var _ret=true,_gei=ccmu.evt.get_event_infos(event),_tgt=_gei[0],_actid=_gei[1];switch(_actid){case'textfmt':BulleWriten(_tgt.getAttribute('actlbl')||_tgt.title||'');break;}
return _ret;},on_mouse_out:function(event){var _ret=true,_gei=ccmu.evt.get_event_infos(event),_tgt=_gei[0],_actid=_gei[1];switch(_actid){case'textfmt':BulleHide();break;}
return _ret;},on_change:function(event){var _ret=false,_gei=ccmu.evt.get_event_infos(event),_tgt=_gei[0],_actid=_gei[1],_msg_id=0;if(_actid=='upload_pic'){}
else if(_actid){_msg_id=this.get_msg_id(_tgt);}else{return true;}
switch(_actid){case'upload_pic':ccmboxes.topic.start_upload();break;case'mod_selact':ccmboxes.topic.mod.load(_msg_id);break;default:_ret=true;break;}
return _ret;},on_dbl_click:function(event){var _ret=false,_gei=ccmu.evt.get_event_infos(event),_tgt=_gei[0],_actid=_gei[1],_msg_id=0;if(_actid){_msg_id=this.get_msg_id(_tgt);}else{return true;}
var _mode=_tgt.getAttribute('mode')||false,_abm=ccmboxes.topic.abm;ccmu.dbg('dblclick '+_actid+' on id '+_tgt.id+' => msg_id='+_msg_id+', mode='+_mode);switch(_actid){case'shqafrmdc':case"shqafrmdcq":_abm.load_frm(_mode||'editq',_msg_id,this.question_id);this._is.titlefocus=(_tgt.id&&_tgt.id==='qtitle');break;case'shcmtfrmdc':_parent_id=this.get_msg_id(_tgt,true);_abm.load_frm(_mode||'edicc',_msg_id,_parent_id);break;}
return _ret;},activate_tab:function(el){var _ret=false;for(var _i in this.main_tabs){var _tab=$(this.main_tabs[_i][0])||null,_ctn=$(this.main_tabs[_i][1])||null;if(!_tab||!_ctn){continue;}
if(_tab===el){if(_tab.className==='selected'&&_tab.id==='content_tab'){_ret=true;}
_ctn.style.display='block';_tab.className='selected';}else{_ctn.style.display='none';_tab.className='';}}
return _ret;},reload_topic:function(){var _t=ccmboxes.topic;ccmu.dom.oldAjaxUpdater(_t.container,_t.urls.prefix+'fulltopic/',{method:'get',parameters:_t.get_common_prms(true)+'&ID='+this.question_id+(this.get_prms.sort?'&sort='+this.get_prms.sort:'')+'&page='+this.get_prms.page+(this.get_prms.full?'&full':''),evalScripts:true,onComplete:function(){_t.topicfrms=[];_t.abm.mode='';_t._is.cim=0;_t.init_tooltip_events();_ctnfrm=$('modo_div_new');if(_ctnfrm){_ctnfrm.style.display='none';}}});},get_msg_id:function(el,qa_only){qa_only=qa_only||false;var _node=el||null,_m;while((_node!=document.body)&&(_node!==null)){_m=(qa_only)?_node.id.match(/^(a|ctn_)(\d+)$/):_node.id.match(/^(a|c|ctn_|f)(\d+)$/);if(_m){return parseInt(_m[2],10);}
if(_node.id==='frmactmod'){_m=(qa_only)?_node.parent.value:_node.ID.value;if(_m){return parseInt(_m,10);}}
_node=_node.parentNode;}
return 0;},go_to_url_anchor:function(){var _M=window.document.URL.match(/#(p?[0-9]+)$/i);if(!_M||!_M[1]){return;}
var _el=document.createElement("A");_el.href="#"+_M[1];if(!ccmu.dom.scroll.go(_el)){window.name='';}else{var _anchor=ccmu.dom.scroll._anchor;if(window.name==_anchor){return;}
new Ajax.Request(window.document.URL,{method:'post',parameters:'anchor='+_anchor,evalScripts:false,onSuccess:function(transport){if(transport.responseText.match(/^\/forum\/affich-/)){window.location=transport.responseText;window.name=_anchor;}}});}},trigger_error_in_el:function(el,msg){if(!el||!msg){return;}
el.style.display='block';el.className='ftRed radius5 marB5';el.innerHTML=msg;var _cte=ccmboxes.topic.colors.err;(new ccmu.dom.fade(el,{from:_cte.fade_from,to:_cte.fade_to,w_return:true,final_reset:true})).go();},trigger_ok_in_el:function(el,msg,w_reset){if(!el){return;}
w_reset=(w_reset===true)?true:false;el.style.display='';if(msg){el.className='ftGreen radius5 marB5';el.innerHTML=msg;}
var _cto=ccmboxes.topic.colors.ok;(new ccmu.dom.fade(el,{from:_cto.fade_from,to:_cto.fade_to,w_return:true,final_reset:w_reset})).go();},_upd_title_from_json:function(_j){var _el=$('qtitle');if((_j.msg_type==ccmboxes.topic.constants.CCM_MSG_QUESTION)&&_el){if(_j.inf_title&&_j.inf_title.title){_el.innerHTML=_j.inf_title.title;}
if(_j.inf_title&&_j.inf_title.css){_el.className=_j.inf_title.css;if($('togglesolved')){$('togglesolved').innerHTML=(_j.inf_title.css==='best')?this.msgs.unsolve_lnk:this.msgs.solve_lnk;}}}},_parse_and_check_json:function(transport,el){var _j,_s='';try{_j=eval("("+transport.responseText+")");}catch(e){this.trigger_error_in_el(el,transport.responseText+' ('+e.message+')');return null;}
if((_j.res===false)&&_j.msgs){for(var i=0;i<_j.msgs.length;i++){_s+='<li>'+((_j.msgs[i]instanceof Array)?_j.msgs[i][1]:_j.msgs[i])+'</li>';}
_s=(_s==='')?_j.msg:'<ul class="disc">'+_s+'</ul>';this.trigger_error_in_el(el,_s);return null;}
return _j;}}
ccmboxes.topic.abm={mode:'',get_frm_ctn:function(mode,msg_id,parent_id){ccmu.dbg('get_frm_ctn '+mode+', '+msg_id+', '+parent_id);switch(mode){case'newa':return $('newanswer_ctn');case'newq':case'editq':return $('editques_ctn');case'newc':return $('g'+parent_id);case'editc':case'edita':return $('e'+msg_id);}},get_frm:function(mode,msg_id,parent_id){ccmu.dbg('get_frm '+mode+', '+msg_id+', '+parent_id);switch(mode){case'newa':case'edita':case'newq':case'editq':return $('frmqa');case'newc':case'editc':return $('f'+msg_id);}},toggle_ovl_display:function(mode,force,msg_id,parent_id){ccmu.dbg('toggle_ovl_display '+mode+', '+force+', '+msg_id+', '+parent_id);var _el;switch(mode){case'newa':_el=$('newanswer_ovl');if(_el){_el.style.display=force?force:((_el.style.display==='none')?'block':'none');}
break;case'editq':_el=$('o'+parent_id);if(_el){_el.style.display=force?force:((_el.style.display==='none')?'block':'none');}
break;case'newc':_el=$('o'+parent_id);if(_el){_el.style.display=force?force:((_el.style.display==='none')?'block':'none');}
break;case'editc':case'edita':_el=$('o'+msg_id);if(_el){_el.style.display=force?force:((_el.style.display==='none')?'block':'none');}
break;}},toggle_ovl_frm:function(mode,force,msg_id,parent_id){ccmu.dbg('toggle_ovl_frm '+mode+', '+force+', '+msg_id+', '+parent_id);var _el;_el=this.get_frm(mode,msg_id,parent_id);if(_el){var _wd=_el.nextSibling;while(_wd&&_wd.nodeName.toUpperCase()!=='DIV'){_wd=_wd.nextSibling;}
_wd.style.display=force?force:((_wd.style.display==='none')?'block':'none');_el=_el.getElementsByTagName('textarea')[0];if(_el){_el.disabled=(_wd.style.display!=='none');}}},toggle_editor:function(mode,force,msg_id,parent_id){var _el;ccmu.dbg('toggle_editor '+mode+', '+force+', '+msg_id+', '+parent_id);_el=$('a0');if(_el){_el.parentNode.removeChild(_el);}
switch(mode){case'newa':_el=$('newanswer_'+ccmboxes.topic.question_id);if(_el){_el.style.display=force?force:((_el.style.display==='none')?'block':'none');}
break;case'newq':case'editq':_el=$('ctnedtmsg');if(_el){_el.style.display=force?force:((_el.style.display==='none')?'block':'none');}
break;case'editc':case'edita':_el=$('e'+msg_id);if(_el){_el.style.display=force?force:((_el.style.display==='none')?'block':'none');}
break;case'newc':var _frmctn=this.get_frm_ctn(mode,msg_id,parent_id);if(_frmctn){_el=_frmctn.parentNode.getElementsByTagName('form')[0];if(force==='none'){if(_el){_el.style.display='block';}else{_frmctn.parentNode.style.display='none';}}else{if(_el){_el.style.display='none';}else{_frmctn.style.display='block';}
_frmctn.style.display='block';_frmctn.parentNode.style.display='block';}}
break;}},close_frm:function(mode,msg_id,parent_id){ccmu.dbg('close_frm '+mode+', '+msg_id+', '+parent_id);var _abm=ccmboxes.topic.abm;_abm.toggle_editor(mode,'none',msg_id,parent_id);_abm.toggle_display(mode,'block',msg_id,parent_id);if($('ivgaabtm')){$('ivgaabtm').style.display='block';}
var _el;switch(mode){case'newa':_el=$('a0');break;case'newq':break;case'editq':break;case'newc':_el=$('c0');break;case'editc':case'edita':break;}
if(_el){_el.parentNode.removeChild(_el);}
var _frmctn=_abm.get_frm_ctn(mode,msg_id,parent_id);if(_frmctn&&_frmctn.innerHTML!==''){_frmctn.innerHTML='';}
this.mode='';},is_ok_for_edit:function(mode,msg_id,parent_id){ccmu.dbg('is_ok_for_edit '+mode+', '+msg_id+', '+parent_id+' (old_mode='+this.mode+')');switch(mode){case'newa':case'newq':case'edita':case'editq':if(this.mode){if(this.mode===mode&&this.cur_msg_id===msg_id){this.goto_editor(mode,msg_id);return false;}
var _self=ccmboxes.topic;var _frmctn=this.get_frm_ctn(this.mode,this.cur_msg_id,this.cur_parent_id);if(_frmctn&&_frmctn.innerHTML!==''){ccmu.dbg('autre saisie en cours');this.close_frm(this.mode,this.cur_msg_id,this.cur_parent_id);}}
this.mode=mode;this.cur_msg_id=msg_id;this.cur_parent_id=parent_id;return true;}
return true;},load_frm:function(mode,msg_id,parent_id){ccmu.dbg('load_frm '+mode+', '+msg_id+', '+parent_id);var _ctnfrm=this.get_frm_ctn(mode,msg_id,parent_id);if(!_ctnfrm||!mode||(mode.search(/^(new|edit)[qac]$/)===-1)){return;}
if(!this.is_ok_for_edit(mode,msg_id,parent_id)){return;}
var _url=((mode==='newc')||(mode==='editc'))?'shcmtfrm/':'shqafrm/',_ct=ccmboxes.topic;this.goto_editor(mode,msg_id);this.toggle_ovl_display(mode,'block',msg_id,parent_id);var _se=(_ct._is._cur_star)?'&stareval='+_ct._is._cur_star:'';_ct._is._cur_star=false;ccmu.dom.oldAjaxUpdater(_ctnfrm,_ct.urls.prefix+_url,{method:'get',parameters:_ct.get_common_prms()+'&ID='+msg_id+'&mode='+mode+_se,evalScripts:true,onComplete:function(){_ct.abm.toggle_editor(mode,'block',msg_id,parent_id);_ct.abm.toggle_ovl_display(mode,'none',msg_id,parent_id);if(mode.indexOf('edit')!==-1){_ct.abm.toggle_display(mode,'none',msg_id,parent_id);}
_ct.abm.finalize_editor(mode,msg_id,parent_id);},onFailure:function(transport){_ct.abm.toggle_ovl_display(mode,'none',msg_id,parent_id);_ctnfrm.innerHTML+='<div class="boxError">'+transport.responseText+'</div>';}});},submit_frm:function(mode,msg_id,parent_id,pview){pview=pview||false;ccmu.dbg('submit_frm '+mode+', '+msg_id+', '+parent_id+', '+pview);var _ctnfrm=this.get_frm_ctn(mode,msg_id,parent_id);if(!_ctnfrm||!mode||(mode.search(/^(new|edit)[qac]$/)===-1)){ccmu.dbg('submit_frm : error '+mode+'/'+msg_id+'/'+parent_id);return;}
var _key=((mode==='newc')||(mode==='editc'))?mode+msg_id:mode+'qa',_ct=ccmboxes.topic;if(!_ct.topicfrms[_key]){_ct.topicfrms[_key]=new ccmboxes.topicfrm();}
_ct.topicfrms[_key].init(mode,msg_id,parent_id);_ct.topicfrms[_key].submit(pview);},reload_ori:function(mode,msg_id,parent_id){ccmu.dbg('reload_ori '+mode+', '+msg_id+', '+parent_id);var _key=((mode==='newc')||(mode==='editc'))?mode+msg_id:mode+'qa',_ct=ccmboxes.topic;if(!_ct.topicfrms[_key]||!_ct.topicfrms[_key]._pview){return;}
_ct.topicfrms[_key].init(mode,msg_id,parent_id);_ct.topicfrms[_key].reload();},toggle_display:function(mode,force,msg_id,parent_id){ccmu.dbg('toggle_display '+mode+', '+force+', '+msg_id+', '+parent_id);var _el;switch(mode){case'editq':case'newq':_el=$('quesfullctn');break;case'editc':_el=$('d'+msg_id);break;case'edita':_el=$('d'+msg_id);break;}
if(_el){_el.style.display=force?force:((_el.style.display==='none')?'block':'none');}},goto_editor:function(mode){switch(mode){case'newa':location.hash='#newanswer';break;}},finalize_editor:function(mode,msg_id,parent_id){ccmu.dbg('finalize_editor '+mode+', '+msg_id+', '+parent_id);var _frm=this.get_frm(mode,msg_id,parent_id),_ct=ccmboxes.topic;if(_ct._is.titlefocus&&_frm&&_frm.titre){_frm.titre.focus();}else if(_frm&&_frm.message){if((mode==='editc')||(mode==='newc')){(new ccmu.dom.ta_resize(_frm.message)).go();}
_ct.init_qafrm_events(_frm.message);_frm.message.focus();if((mode==='newa')||(mode==='newq')||(mode==='newc')){if(_frm.message.setSelectionRange){_frm.message.setSelectionRange(0,0);}else if(_frm.message.createTextRange){var _r=_frm.message.createTextRange();_r.collapse(true);_r.moveEnd('character',0);_r.moveStart('character',0);_r.select();}}}
switch(mode){case'newa':(new ccmu.dom.fade($('newanswer_ctn'),{from:_ct.colors.ok.fade_from,to:_ct.colors.ok.fade_to,w_return:true,final_reset:true})).go();if($('ivgaabtm')){$('ivgaabtm').style.display='none';}
break;case'newc':var _el=this.get_frm_ctn(mode,msg_id,parent_id);if(_el){_el=_el.parentNode;}
(new ccmu.dom.fade(_el,{from:_ct.colors.ok.fade_from,to:_ct.colors.ok.fade_to,w_return:true,final_reset:true})).go();break;}},update_display:function(mode,html,msg_id,parent_id,pview){ccmu.dbg('update_display '+mode+', '+msg_id+', '+parent_id+',pview='+pview);var _el;switch(mode){case'newa':_el=$('a0');if(_el){_el.parentNode.removeChild(_el);}
_el=$('answers');if(_el){_el.innerHTML+=html;}
break;case'newq':_el=(pview)?$('quesfullctn'):$('topic_question');if(_el){_el.innerHTML=html;}
break;case'editq':_el=$('quesfullctn');if(_el){_el.innerHTML=html;}
break;case'newc':_el=$('c0');if(_el){_el.parentNode.removeChild(_el);}
_el=$('comments_'+parent_id);if(_el){_el.innerHTML+=html;}
break;case'editc':case'edita':_el=$('d'+msg_id);if(_el){_el.innerHTML=html;}
break;}
return(_el);},goto_pview:function(mode,msg_id,parent_id,cat){ccmu.dbg('goto_pview '+mode+', '+msg_id+', '+parent_id);switch(mode){case'newa':case'edita':break;case'newq':case'editq':location.hash='#breadScrumb';break;case'newc':case'editc':break;}},finalyse_update:function(mode,msg_id,parent_id,cat){ccmu.dbg('finalyse_update '+mode+', '+msg_id+', '+parent_id);var _el,_ct=ccmboxes.topic;switch(mode){case'newa':case'edita':_el=$('a'+msg_id);break;case'newq':_ct.question_id=msg_id;_ct.forum_id=cat;if($('ctn_0')){$('ctn_0').id='ctn_'+msg_id;}
if($('newanswer_0')){$('newanswer_0').id='newanswer_'+msg_id;}
_el=$('content_ctn');if(_el){jQuery(_el).removeClass('container');}
_el=$('quesfullctn');if(ccmboxes.boxes.myinterv){ccmboxes.boxes.myinterv.reload();}
break;case'editq':_el=$('quesfullctn');break;case'newc':case'editc':_el=$('c'+msg_id);break;}
if(_el){(new ccmu.dom.fade(_el,{from:_ct.colors.ok.fade_from,to:_ct.colors.ok.fade_to,w_return:true,final_reset:true})).go();}}}
ccmboxes.topic.mod={place:function(event){var _ctnfrm=$('modo_div_new'),_ctn=$('content'),_cpos=0;if(typeof event=='string'){_cpos=event.indexOf(',');if(_cpos>=0){_ctnfrm.style.top=event.substring(0,_cpos)+'px';_ctnfrm.style.left=(_ctn.offsetLeft+parseInt(event.substring(_cpos+1)))+'px';}
else{_ctnfrm.style.left=(_ctn.offsetLeft+_ctn.offsetWidth-331)+'px';_ctnfrm.style.top=event;}}else{_ctnfrm.style.top=((document.all)?event.clientY+document.documentElement.scrollTop:event.pageY)-27+'px';_ctnfrm.style.left=((document.all)?event.clientX+document.documentElement.scrollLeft:event.pageX)+18+'px';}},load:function(msg_id,actid){var _ctnfrm=$('modo_div_new'),_ct=ccmboxes.topic;if(!_ctnfrm){return;}
var _frm=$('frmselactmod'),_prms=(_frm)?ccmu.frm.frm2qs(_frm)+_ct.uforum.get_prms:_ct.get_common_prms()+'&ID='+msg_id+'&actid='+actid;_ct.mod.toggle_ovl(_ctnfrm);new Ajax.Request(_ct.urls.prefix+'shmodomenu/',{method:'get',parameters:_prms,evalScripts:false,onSuccess:function(transport){_ct.mod.toggle_ovl(_ctnfrm);_ctnfrm.innerHTML=transport.responseText;_ct.init_modo_events();if(actid==='solve'||actid==='addmyi'){_ct.mod.submit(msg_id);}},onFailure:function(transport){_ct.mod.toggle_ovl(_ctnfrm);_ctnfrm.innerHTML+='<div class="boxError">'+transport.responseText+'</div>';}});},submit:function(msg_id){var _ctnfrm=$('modo_div_new'),_frm=$('frmactmod'),_ct=ccmboxes.topic;if(!_ctnfrm||!_frm){return;}
_ct.mod.toggle_ovl(_ctnfrm);new Ajax.Request(_ct.urls.pmm,{method:'post',parameters:ccmu.frm.frm2qs(_frm)+_ct.uforum.get_prms,evalScripts:false,onSuccess:function(transport){_ct.mod.toggle_ovl(_ctnfrm);var _j=_ct._parse_and_check_json(transport,$('modmsg'));if(!_j){return;}
_ct.trigger_ok_in_el($("modmsg"),_j.msg);_ct.reload_topic.call(_ct);if(_j.act==='addmyi'&&_ct.myinterv){_ct.myinterv.reload();}},onFailure:function(transport){_ct.mod.toggle_ovl(_ctnfrm);_ct.trigger_error_in_el($('modmsg'),transport.responseText);}});},toggle_ovl:function(ctn){var _el=$('modo_ovl');if(!_el){ctn.innerHTML+='<div id="modo_ovl" class="overlayDiv waiting" style="display:none"></div>';_el=$('modo_ovl')}
if(!_el){return;}
_el.style.display=(_el.style.display==='none')?'block':'none';}}
ccmboxes.topicfrm=function()
{return this;}
ccmboxes.topicfrm.prototype={msg_id:0,parent_id:0,mode:'',elts:{frm:null},_pview:false,init:function(mode,msg_id,parent_id){this.msg_id=msg_id;this.parent_id=parent_id;this.elts.frm=ccmboxes.topic.abm.get_frm(mode,msg_id,parent_id);this.mode=mode;return this;},submit:function(pview){pview=pview||false;var _ct=ccmboxes.topic;_ct.abm.toggle_ovl_frm(this.mode,'block',this.msg_id,this.parent_id);if(this._fields_error){for(i=0;i<this._fields_error.length;i++){jQuery(this._fields_error[i]).removeClass('wrong');}}
var _self=this;new Ajax.Request(_ct.urls.prefix+'postmsgfrm/',{method:'post',parameters:ccmu.frm.frm2qs(this.elts.frm)+(pview?'&pview=1':'')+_ct.uforum.get_prms,onSuccess:function(transport){if(pview){_self._pview=true;}
_ct.abm.toggle_ovl_frm(_self.mode,'none',_self.msg_id,_self.parent_id);_self.callback_on_submit.call(_self,transport.responseText,pview);$j('#qdispctn .fancy').fancybox();},onFailure:function(transport){_ct.abm.toggle_ovl_frm(_self.mode,'none',_self.msg_id,_self.parent_id);_self.trigger_error.call(_self,transport.responseText);}});return false;},reload:function(){var _self=this,_ct=ccmboxes.topic;new Ajax.Request(_ct.urls.prefix+'shmsg/',{method:'post',parameters:ccmu.frm.frm2qs(this.elts.frm)+_ct.uforum.get_prms,onSuccess:function(transport){_ct.abm.toggle_ovl_frm(_self.mode,'none',_self.msg_id,_self.parent_id);_self.callback_on_submit.call(_self,transport.responseText,false);},onFailure:function(transport){_ct.abm.toggle_ovl_frm(_self.mode,'none',_self.msg_id,_self.parent_id);_self.trigger_error.call(_self,transport.responseText);}});return false;},callback_on_submit:function(responseText,pview)
{var _s='',_key,i,_j;try{_j=eval("("+responseText+")");}catch(e){this.trigger_error(responseText,e);return false;}
var _mode=_j.mode,_el=$('m'+this.mode+this.msg_id),_ct=ccmboxes.topic;if(_el){_el.style.display='none';}
if(_j.res===false){this._fields_error=[];if(_j.msgs){for(i=0;i<_j.msgs.length;i++){_key=_j.msgs[i][0];_s+='<li>'+((_j.msgs[i]instanceof Array)?_j.msgs[i][1]:_j.msgs[i])+'</li>';if(!this.elts.frm[_key]){continue;}
this._fields_error.push(this.elts.frm[_key]);jQuery(this.elts.frm[_key]).addClass('wrong');}}
_s=(_s==='')?_j.msg:'<ul class="disc">'+_s+'</ul>';this.trigger_error(_s);if(_j.acjs){eval(_j.acjs);}
return false;}
if(!pview){if(!_j.html||(_j.html=='')||!_ok){window.location.href=window.location.href.replace(/#.*$/g,'')+'#p'+_j.ID;}
if(_mode=='newq'&&_j.url){window.location.href=_j.url;return true;}
var _ok=_ct.abm.update_display(_mode,_j.html,_j.ID,this.parent_id,pview);_ct.abm.close_frm(_mode,_j.ID,this.parent_id);_ct.abm.finalyse_update(_mode,_j.ID,this.parent_id,_j.cat);}else{var _ok=_ct.abm.update_display(_mode,_j.html,_j.ID,this.parent_id,pview);_ct.abm.toggle_display(_mode,'block',_j.ID,this.parent_id);_ct.abm.goto_pview(_mode,_j.ID,this.parent_id);}
return true;},trigger_error:function(msg,exception){var _id='m'+this.mode+this.msg_id,_ctnfrm=this.elts.frm.parentNode,_s=msg+(exception?' ('+exception.message+')':'');if(!$(_id)){var _el=document.createElement('DIV');_el.id=_id;if(_ctnfrm){_ctnfrm.insertBefore(_el,this.elts.frm);}else{this.elts.frm.appendChild(_el);}}
_id=$(_id);ccmboxes.topic.trigger_error_in_el(_id,_s);}}
ccmu.dom.fade=function(el,opt)
{this.el=$(el)||null;opt=opt||{};for(var i in this.opt){if(opt[i]!==undefined){this.opt[i]=opt[i];}}
var ie=!!(window.attachEvent&&!window.opera);if(ie){this.opt.duration=50;this.opt.steps=1;}
return this;}
ccmu.dom.fade.prototype={opt:{duration:300,steps:10,w_return:true,final_reset:true,from:['E3','EB','F5'],to:['AE','B5','BD']},el:null,hex:new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"),timer:null,_intv:0,_curstep:0,sbc:[0,0,0],d2h:function(num){return(num<0)?'00':((num>255)?'FF':""+this.hex[Math.floor(num/16)]+this.hex[num%16]);},go:function(){if(!this.el){return;}
if(ccmu._curfade){ccmu._curfade._curstep=ccmu._curfade.opt.steps+1;ccmu._curfade.opt.w_return=false;ccmu._curfade._fade.call(ccmu._curfade);}
ccmu._curfade=this;this._intv=Math.ceil(this.opt.duration/this.opt.steps);for(var i=0;i<3;i++){if(typeof this.opt.to[i]==='string'){this.opt.to[i]=parseInt(this.opt.to[i],16);}
if(typeof this.opt.from[i]==='string'){this.opt.from[i]=parseInt(this.opt.from[i],16);}
this.sbc[i]=(this.opt.to[i]-this.opt.from[i])/this.opt.steps;}
this._curstep=0;this._fade();return;},_fade:function(){if(this._curstep>this.opt.steps){clearTimeout(this.timer);this.timer=null;if(this.opt.w_return===true){var _tmp=this.opt.to;this.opt.to=this.opt.from;this.opt.from=_tmp;this._intv=null;this.opt.w_return=false;this.go();return false;}
if(this.opt.final_reset===true){this.el.style.backgroundColor='';this.el.style.backgroundImage='';this.el.style.backgroundPosition='';this.el.style.backgroundRepeat='';this.el.style.backgroundAttachment='';}
ccmu._curfade=null;return false;}
var _self=this,c=[0,0,0];if(this._curstep===this._intv){c=this.opt.to;}else{for(i=0;i<3;i++){c[i]=this.opt.from[i]+Math.round(this.sbc[i]*this._curstep);}}
this._set_bg_color(c);this._curstep++;this.timer=setTimeout(function(){_self._fade.call(_self);},_self._intv);return false;},_set_bg_color:function(c){this.el.style.background='#'+this.d2h(c[0])+this.d2h(c[1])+this.d2h(c[2]);}}
ccmu.dom.scroll={opt:{re_display_sibling:/^c(\d+)$/,fade_on_found:true},el:null,_target:null,_anchor:'',_find_target:function(){var _links=document.getElementsByTagName('a'),i;this._anchor=(this.el.hash)?this.el.hash.substr(1):null;this._target=null;if(this._anchor){for(i=0;i<_links.length;i++){if(_links[i].name&&(_links[i].name==this._anchor)){this._target=_links[i];break;}}}
return(this._target!==null);},force_display:function(el){var _el=el,_do=false;while(_el&&(_el!==document.body)){_do=false;if(_el.style.display=='none'){_el.style.display='';_do=true;}
if(_el.style.visibility=='hidden'){_el.style.visibility='';_do=true;}
if(_do&&_el.id&&this.opt.re_display_sibling.test(_el.id)){var _par=_el.parentNode.firstChild;while(_par&&_el.nodeName.toUpperCase()!=='DIV'){_par=_par.nextSibling;}
while(_par){if(_par.id&&this.opt.re_display_sibling.test(_par.id)){if(_par.style.display=='none'){_par.style.display='';}
if(_par.style.visibility=='hidden'){_par.style.visibility='';}}
_par=_par.nextSibling;while(_par&&_el.nodeName.toUpperCase()!=='DIV'){_par=_par.nextSibling;}}}
_el=_el.parentNode;}},go:function(el,opt){this.el=$(el)||null;opt=opt||{};for(var i in this.opt){if(opt[i]!=undefined){this.opt[i]=opt[i];}}
if(!this._find_target()){ccmu.dbg('tgt '+this._anchor+' not found');return true;}
this.force_display(this._target);location.hash=this._anchor;this._fade_tgt();return false;},_fade_tgt:function(){if(!this.opt.fade_on_found||!this._target.parentNode){return;}
var _ctc=ccmboxes.topic.colors;(new ccmu.dom.fade(this._target.parentNode,{from:_ctc.err.fade_from,to:_ctc.ok.fade_anchor,duration:200,steps:5,w_return:true,final_reset:true})).go();}}
ccmu.dom.ta_resize=function(el){if(el){this.el=$(el);this.el.style.resize='none';this.el.style.overflowY='hidden';this._ori_height=parseInt(this.el.style.height,10)||0;var _self=this;this._cl=document.createElement('textarea');this._cl.style.position='absolute';this._cl.style.top=0;this._cl.style.left='-9999px';this._cl.tabIndex=-1;var _p=['height','width','lineHeight','textDecoration','letterSpacing'];for(var i in _p){this._cl.style[_p[i]]=this.el.style[_p[i]];}
this.el.parentNode.insertBefore(this._cl,this.el);ccmu.evt.on(this.el,'keyup',function(){_self.go.call(_self)});ccmu.evt.on(this.el,'click',function(){_self.go.call(_self)});}
return this;}
ccmu.dom.ta_resize.prototype={el:null,max:900,_ori_height:0,_last_st:0,_cl:null,go:function(){this._cl.style.height=0;this._cl.value=this.el.value;this._cl.scrollTop=10000;var _st=Math.max(this._cl.scrollTop,this._ori_height)+0;if(this._last_st===_st){return;}
if(this.max&&(_st>this.max)){this.el.style.height=this.max+'px';this.el.style.overflowY='';return;}
this._last_st=_st;this.el.style.height=_st+'px';}}
function fixUnload(){if(document.readyState=='interactive'){function stop(){document.detachEvent('onstop',stop);unload();}
document.attachEvent('onstop',stop);window.setTimeout(function(){document.detachEvent('onstop',stop);},0);}}
function unload(){if(typeof CollectGarbage=='function'){CollectGarbage();}}
if(window.attachEvent){window.attachEvent('onunload',unload);window.attachEvent('onbeforeunload',fixUnload);}else if(window.addEventListener){window.addEventListener("unload",unload,false);}
if(typeof _comscore=="undefined"){var _comscore=_comscore||[];try{if($ccmprms&&$ccmprms.user&&($ccmprms.user.connected===false)&&!($ccmprms.app&&($ccmprms.app.is_portable===true))){_comscore.push({c1:"2",c2:"13184767"});(function(){var s=document.createElement("script"),el=document.getElementsByTagName("script")[0];s.async=true;s.src=(document.location.protocol=="https:"?"https://sb":"http://b")+".scorecardresearch.com/beacon.js";el.parentNode.insertBefore(s,el);})();}}catch(e){}}