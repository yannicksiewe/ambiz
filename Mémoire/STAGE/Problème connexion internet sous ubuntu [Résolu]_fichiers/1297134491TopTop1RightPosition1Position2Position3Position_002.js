/** DO NOT MODIFY ! This is compiled with DAM. */

(function(w,d)
{var deactivateAudienceScience=false,dev=/\.local\./.test(w.location.hostname),getSegments=function()
{var cookies=d.cookie.split(/; /),cookie=[],i=0,l=cookies.length,j=0,m=0,segs=[],output='';for(;i<l;++i)
{cookie=cookies[i].split(/=/);if(cookie[0]==="ccmseg")
{segs=unescape(cookie[1]).split(/;/);for(j=0,m=segs.length;j<m;++j)
{output+='&p_s='+encodeURIComponent(segs[j]);}
return output;}}
return"";},getScript=function(url,success)
{var s=d.createElement('script');s.type='text/javascript';s.async=true;if(typeof success=='function')
{if(typeof s.onload!=='undefined')
{s.onload=success;}
else
{s.onreadystatechange=function(){(this.readyState=='loaded'||this.readyState=='complete')&&success();};}}
s.src=url;d.getElementsByTagName('head')[0].appendChild(s);},getRootTagUrl=function()
{if(dev){return'http://ba.commentcamarche.net/4/fr_linternaute_actualite/1337139336@x01,x02,TopLeft,Middle1,Right,Position1,Position2,Right2,Position4,Top,Top1,Middle3?keyword=controller-content&keyword=format-news&keyword=education&keyword=resultat-bac&keyword=bac';}
var script_tags=d.getElementsByTagName("script");for(var i=0;i<script_tags.length;i++)
{if(script_tags[i].src.match(/\/4\/.*\/[0-9]+@/gi))
{return script_tags[i].src;}}
return false;},routeToOAS=function()
{if(!routeToOAS.launched)
{var as_query="";if(typeof asiPlacements!="undefined")
{for(var p in asiPlacements)
{w["ASPQ_"+p]="";for(var key in asiPlacements[p].data)
{w["ASPQ_"+p]+="PQ_"+p+"="+key;as_query+="&ASPQ_"+p+"="+key;}}}
var url=getRootTagUrl();if(url)
{var args="?";if(url.match(/\?/gi)){args="";}
d.write('<scr'+'ipt type="text/javascript" src="'
+url.replace(/\/4\//gi,'/8/')
+args
+getSegments()
+as_query+'"><\/script>');}}},withAS=false;(function(d){var key=(function(dd)
{if(deactivateAudienceScience||dd.match(/^m\..*$/i)){return'';}
if(dd.match(/linternaute\.com$/i)){return'mSe5zh,dCaRvl,N0RzGK,zcly15,JnOgnV,F9sQP3,wt8P6C,220FW2';}
if(dd.match(/(journaldesfemmes\.com|sante-medecine\.commentcamarche\.net|hugolescargot\.com|jeux-gratuits\.com)$/i)){return'HEE751,IF6tMI,2pbeIc,HkDgUk,7dzA0Y,w2opTJ,gdsPVn,Z1Tzmm,fkgJFC,dEUOKS,xAj667,JKL7R,q6BCTm,oQyaM4,gdsPVn';}
if(dd.match(/journaldunet\.com$/i)){return'dsUAHk,qYllpq,7XmL2z,H2CTEB,nKmDtA,Ae43zO,0Lfp1a,OurKMS';}
if(dd.match(/www\.commentcamarche\.net$/i)){return'Y5JQpF,MHuQiW,DPKPw1,pHupT6,lWzBLX,jxmZIB,4I06XH,9Q84hS';}
return'';}(d.domain));if(key!=='')
{withAS=true;d.write("<sc"+"ript type='text/javascript' language='JavaScript' src='//pq-direct.revsci.net/pql?placementIdList="+key+"&cb="+new Date().getTime()+"'></sc"+"ript>");var msie=w.navigator.userAgent.match(/MSIE ([0-9\.]{3,5})/);if(msie!==null&&parseInt(msie[1].split(/\./)[0],10)<10)
{OAS_RICH=function(){};d.write("<sc"+"ript src='//ba.ccmbg.net/js/oas_ie.js'></sc"+"ript>");}
else{d.write("<sc"+"ript >routeToOAS(2);</sc"+"ript>");}}}(d));!withAS&&routeToOAS(1);if(typeof _eStat_Whap_loaded=='undefined')
{(function(D){if(D.domain.match(/^m\..*$/i)!==null||D.domain.match(/(journaldunet|linternaute|journaldesfemmes|copainsdavant)\.com$/i)===null){return;}
(function(t,a,g,d,o,c){a&&a('DOMContentLoaded',function(){!d&&(d=o),c();},false);t=setInterval(function(){if(d||D.readyState=='complete'){!d&&c();(d=o);clearInterval(t);}},g);}(0,w.addEventListener,100,false,true,function(){if(typeof _eStat_Loaded=='undefined'?true:_eStat_Loaded){return;}var s=D.getElementsByTagName('script'),m=s.length,i=0,l=D.createElement('script'),f=function(){if(typeof eStatWhap!='undefined'){eStatWhap.serial("800000206960");eStatWhap.send();}};for(;i<m;++i){if(s[i].src.match(/tags\.js/)!==null){return;}}
l.type='text/javascript';l.async=true;if(typeof l.onload!=='undefined')
{l.onload=f;}
else{l.onreadystatechange=function(){(this.readyState=='loaded'||this.readyState=='complete')&&setTimeout(f,200);};}
l.src='http://w.estat.com/js/whap.js';D.getElementsByTagName('head')[0].appendChild(l);}));}(d));}
if(typeof w._comscore=="undefined")
{w._comscore=w._comscore||[];w._comscore.push({c1:"2",c2:"13184767"});getScript((d.location.protocol=="https:"?"https://sb":"http://b")+".scorecardresearch.com/beacon.js");}
getScript('//js.revsci.net/gateway/gw.js?csid=F09828&auto=t&bpid=ccmbenchmark');w.asiPqTag=false;w.routeToOAS=routeToOAS;}(window,window.document));