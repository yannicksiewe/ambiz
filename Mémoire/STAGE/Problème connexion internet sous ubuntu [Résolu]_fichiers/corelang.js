
jQuery.coredata={"user":{"DEV_SERVER":false,"COMMON_RESOURCE_HOST":"http://bstatic.ccmbg.com/ressource/","VARIANT_JS_CODESNIPPET":20140618094606,"VARIANT_JS_WARNINGCNIL":20150828152758,"VARIANT_CSS_CODESNIPPET":20140618094606,"VARIANT_CSS_JET.PROFILER":20140618094606,"VARIANT_JS_LINKMAKER":20150910162728,"VARIANT_JS_CROPPABLE":20150616163431,"VARIANT_JS_SOCIALBUTTONS":20140618094606,"VARIANT_JS_FANCYBOX":20140618094606,"VARIANT_JS_COMPLEXITY":20140618094606,"VARIANT_JS_COMPLEXITYUI":20140618094606,"VARIANT_JS_CCMUIEVENT":20140618094606,"VARIANT_JS_NOTE":20140618094606,"VARIANT_JS_CCMUITABS":20140618094606,"VARIANT_JS_LIVINGMOSAIC":20140618094606,"VARIANT_JS_ABUSE":20140618094606,"VARIANT_JS_UPLOAD":20150506164134,"VARIANT_JS_CMS":20140618094606,"VARIANT_JS_RATING":20140618094606,"VARIANT_JS_COVERFLOW":20140618094606,"VARIANT_JS_GEOLOCATION":20141007144140,"VARIANT_JS_GOOGLEANALYTICSEVENTS":20140618094606,"VARIANT_JS_PANELSUBSCRIBE":20140729175048,"VARIANT_JS_EVENTSFROMURL":20140618094606,"VARIANT_JS_MAGICLINKSMANAGER":20140618094606,"VARIANT_JS_CCMVIDEO":20150724102235,"VARIANT_JS_CCMVIDEOHTML5":20150925091614,"VARIANT_JS_SPIN":20140618094606,"VARIANT_JS_TRANSFORMER":20140618094606,"VARIANT_JS_HIGHCHARTS":20140618094606,"VARIANT_JS_MAPSTRACTION":20141104095659,"VARIANT_JS_MAPSTRACTION.GOOGLEV3":20140618094606,"VARIANT_JS_MAPSTRACTION.OPENLAYERS":20140918152335,"VARIANT_JS_HIGHCHARTS.OPENDATA":20140618094606,"VARIANT_JS_HIGHCHARTS.PROPERTYPRICES":20140618094606,"VARIANT_JS_IMGEDITOR":20140618094606,"VARIANT_JS_CONTENTS":20150923103530,"VARIANT_JS_CKEDITOR":20140930150115,"VARIANT_CSS_MAPAEL":20140618094606,"VARIANT_CSS_FANCYBOX":20150723123516,"VARIANT_CSS_CROPPABLE":20140618094606,"VARIANT_CSS_SOCIALBUTTONS":20150706151255,"VARIANT_CSS_RATING":20140618094606,"VARIANT_CSS_PANELSUBSCRIBE":20140729175048}};!window.console&&(console={log:function(){}});!console.info&&(console.info=console.warn=console.debug=console.log);!console.group&&(console.group=console.log&&(console.groupEnd=function(){}));!console.groupCollapsed&&(console.groupCollapsed=console.group);!console.assert&&(console.assert=function(){});console.now=(function()
{if(typeof performance=='object'&&typeof performance.now=='function'){return function(){return performance.now();};}
else if(typeof performance=='object'&&typeof performance.webkitNow=='function'){return function(){return performance.webkitNow();};}
else{return function(){return new Date().getTime();};}}());console.now.arrayTime=[];console.now.start=console.time=function(n)
{console.now.arrayTime[n]={s:console.now()};};console.now.end=console.timeEnd=function(n)
{if(typeof console.now.arrayTime[n]=='undefined')
{console.warn('Incorrect time label : '+n);return;}
console.now.arrayTime[n].e=console.now();var r=console.now.arrayTime[n].e-console.now.arrayTime[n].s;console.info(''+n+': '+r+'ms');return r;};jQuery.profile=window.document.URL.match(/jsprofile/i)!==null;jQuery.profile&&(console.time('core.start')||console.time('core.ready'));jQuery.debug=(window.document.URL.match(/dbgjs/i)&&window.console)?function(str){console.log(str);}:function(){};(function(w){'use strict';w.fluentPath=function(path,context,options)
{return new fluentPath.fn.init(path,context,options);};fluentPath.defaultOptions={cache:true};fluentPath.clone=function(item)
{if(!item){return item;}
var result,i=0,n='';if(typeof result=="undefined")
{if(Object.prototype.toString.call(item)==="[object Array]")
{result=[];for(i=0,l=item.length;i<l;++i)
{result[i]=fluentPath.clone(item[i]);}}else if(typeof item=="object")
{if(item.nodeType&&typeof item.cloneNode=="function")
{result=item.cloneNode(true);}else if(!item.prototype)
{if(item instanceof Date)
{result=new Date(item);}else
{result={};for(n in item)
{result[n]=fluentPath.clone(item[n]);}}}else
{if(false&&item.constructor)
{result=new item.constructor();}else
{result=item;}}}else
{result=item;}}
return result;};fluentPath.cache={};fluentPath.extend=function()
{var i=0,l=arguments.length,name='',recursive=typeof arguments[0]=='boolean'?(++i,arguments[0]):false,byReference=typeof arguments[1]=='boolean'?(++i,arguments[1]):false,target=arguments[i];for(i+=1;i<l;++i)
{for(name in arguments[i])
{switch(Object.prototype.toString.call(arguments[i][name]))
{case'[object Array]':recursive&&(target[name]=fluentPath.extend(true,byReference,(target[name]||[]),arguments[i][name]));break;case'[object Object]':recursive&&(target[name]=fluentPath.extend(true,byReference,(target[name]||{}),arguments[i][name]));break;case'[object RegExp]':case'[object Function]':target[name]=arguments[i][name];break;default:target[name]=byReference?arguments[i][name]:fluentPath.clone(arguments[i][name]);}}}
return target;};fluentPath.fn={version:'0.1a',init:function(path,context,options)
{this.parentContext=context||w;options=options||{cache:true};switch(typeof path)
{case'object':this._=path;this.path='direct';break;case'string':this._=this.parentContext;this.find(path,options);break;default:}
return this;},find:function(path,options)
{typeof this.path=='undefined'&&(this.path='');this.path+=path;if(options.cache&&typeof fluentPath.cache[path]!='undefined')
{this._=fluentPath.cache[path];}
else
{var fullPath=path.split(/\./),i=0,l=fullPath.length;this.parentContext=this._;for(;i<l;++i)
{typeof this._[fullPath[i]]=='undefined'&&(this._[fullPath[i]]={});this._=this._[fullPath[i]];}
fluentPath.cache[this.path]=this._;}
return this;},each:function(handler)
{for(var key in this._)
{handler.call(this._[key],handler);}
return this;},extend:function()
{var l=arguments.length,i=0,args=[],call;for(;i<l;++i){args[i]=arguments[i];}
call=[typeof arguments[0]=='boolean'?(args.shift(),arguments[0]):false,typeof arguments[1]=='boolean'?(args.shift(),arguments[1]):false,this._];for(l=args.length,i=0;i<l;++i){call[i+3]=args[i];}
fluentPath.extend.apply(this,call);return this;},clone:function()
{this._=fluentPath.clone(this);return this;}};fluentPath.fn.init.prototype=fluentPath.fn;typeof w._$=='undefined'&&(w._$=fluentPath);}(window));(function(w,$)
{var perform=function(perform)
{return new PerformBuilder(perform);},PerformBuilder=function(perform){this.perform=perform;this.retry=false;this.performed=false;return this;};PerformBuilder.prototype={onlyIf:function(isTrue)
{this.isTrue=isTrue;return this;},tryIt:function()
{if(this.isTrue()&&!this.performed){this.performed=true;this.perform();}
else if(this.retry){var self=this;setTimeout(function(){self.tryIt();},this.retryOn);}
return this;},orRetry:function(on)
{this.retry=true;this.retryOn=on;!this.performed&&this.tryIt();return this;},valueOf:function(){return'perform';}};if($)
{$.perform=perform;}
else{w&&(w.perform=perform);}}(window||global,jQuery||micro));typeof jQuery.support=='undefined'&&(jQuery.support={});jQuery.support.flash=(function(){var mimeTypes=navigator.mimeTypes;var plugins=navigator.plugins;if(plugins&&plugins.length>0){if(plugins['Shockwave Flash']){return true;}
return false;}else if(mimeTypes&&mimeTypes.length>0){var mimeTypesFlash=mimeTypes['application/x-shockwave-flash'];if(typeof mimeTypesFlash!=='undefined'){return mimeTypesFlash.enabledPlugin!==null;}
return false;}else if(window.ActiveXObject){try{new ActiveXObject('ShockwaveFlash.ShockwaveFlash');return true;}catch(e){return false;}}else{return false;}})();jQuery.support.touch=(function(){if(("ontouchstart"in window)||window.DocumentTouch&&document instanceof DocumentTouch){return true;}
return false;})();jQuery.support.svg=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");jQuery.support.canvas=!!window.HTMLCanvasElement;jQuery.support.placeholder=(function(){var i=document.createElement('input');return'placeholder'in i;})();jQuery.support.localStorage=(function()
{try{return typeof window.localStorage==='object'&&typeof window.JSON==='object';}
catch(e)
{return false;}}());jQuery.support.upload=(function(){var i=document.createElement('input');i.type="file";return!i.disabled;})();jQuery.support.progress=(function(){return!!('value'in document.createElement('progress'));}());jQuery.support.supports=(function()
{var div=document.createElement('div'),vendors='Khtml Ms O Moz Webkit'.split(' '),len=vendors.length;return function(prop){if(prop in div.style)return true;prop=prop.replace(/^[a-z]/,function(val){return val.toUpperCase();});while(len--){if(vendors[len]+prop in div.style){return true;}}
return false;};})();jQuery.support.transition=jQuery.support.supports('transition');(function($){"use strict";$.jet=$.core=$.extend(true,{version:'0.60',dev:typeof $.coredata!='undefined'&&typeof $.coredata.user!='undefined'&&typeof $.coredata.user.DEV_SERVER=='boolean'?$.coredata.user.DEV_SERVER:false,env:{dev:typeof $.coredata!='undefined'&&typeof $.coredata.user!='undefined'&&typeof $.coredata.user.DEV_SERVER=='boolean'?$.coredata.user.DEV_SERVER:false,packager:{host:typeof $.coredata!='undefined'&&typeof $.coredata.user!='undefined'&&typeof $.coredata.user.COMMON_RESOURCE_HOST=='string'?$.coredata.user.COMMON_RESOURCE_HOST:'/',defaultPackageTimestamp:'js_core',url:{js:'js.php',css:'css.php'},variants:(function()
{if(typeof $.coredata!='undefined'&&typeof $.coredata.user!='undefined')
{var variants={},variantName='';for(variantName in $.coredata.user)
{if($.coredata.user.hasOwnProperty(variantName)&&variantName.substr(0,8).toLowerCase()=='variant_')
{variants[variantName.substr(8).toLowerCase()]=$.coredata.user[variantName];}}
return variants;}
return{};}()),splitChar:"|",get:function(packageName,type)
{type=type||'js';var variantName=type+'_'+packageName.toLowerCase(),self=this;return(type=='css'?'css!':'')+$.jet.env.packager.host
+$.jet.env.packager.url[type]+'?m='+packageName.toLowerCase()
+'&v='+(function()
{if(typeof $.jet.env.packager.variants[variantName]!='undefined')
{return $.jet.env.packager.variants[variantName]+'_';}
var splittedPackages=packageName.split(self.splitChar),i=0,l=splittedPackages.length,currentPackage='';for(;i<l;++i)
{currentPackage=type+'_'+splittedPackages[i].toLowerCase();if(typeof $.jet.env.packager.variants[currentPackage]!='undefined')
{return $.jet.env.packager.variants[currentPackage]+'_';}}
return $.jet.env.packager.variants[self.defaultPackageTimestamp]+'_';}())
+$.jet.version
+(function(){var j=window.location.href.match(/jsprofile=?[^&]*/);return j===null?'':'&'+j[0];}());},isReady:{onFirstJs:function(url,result,key){return(url.indexOf($.jet.env.packager.url.js)>0);},fully:function(url,result,key,loadedResources){return loadedResources==this.resources.length;}}}},startList:{refresh:[]},startListToRefresh:[],started:false,lastStartOptions:{},events:{},eventData:'core-on',$fake:$(1),services:{},defaultStartOptions:{group:'global',animDuration:100,startServices:true},packet:{read:function(jqXHR,textStatus)
{var json;try{json=$.parseJSON(jqXHR.responseText);}
catch(e)
{return;}
json&&json.$data&&$.extend(true,$data,json.$data);return json;}},tryOn:function(n,f)
{var r;try{r=f()||undefined;}
catch(e){}
finally{return r;}}},$.jet||{});$.start=function(f,options)
{var handler={name:'unknown',priority:1,group:(typeof options=='string'?options:'global'),fn:f,refresh:false};typeof options=='object'&&$.extend(handler,options);typeof $.jet.startList[handler.group]!='object'&&($.jet.startList[handler.group]=[]);$.jet.startList[handler.group].push(handler);};$.fn.start=function(f,options)
{$.start(f,options);return this;};$(document).bind('behavior',function(e,options)
{var service='';for(service in options.services)
{if(options.services.hasOwnProperty(service)&&options.services[service].start&&typeof options.services[service].init=='function')
{if(typeof options.services[service].resources=='object'&&(options.services[service].resources.length>0||options.services[service].dynamicResources)&&(typeof options.services[service].isLoaded=='function'&&options.services[service].isLoaded.call(options.services[service])===false))
{(function(localService){var loadedResources=0;$.proxyLoader({load:localService.resources,callback:function(url,result,key){++loadedResources;try{localService.isReady.call(localService,url,result,key,loadedResources)&&localService.init.call(localService);}
catch(e)
{console.group('An error occured during a jet service loading');console.log(e);typeof e.stack!=='undefined'&&console.log(e.stack);console.groupEnd();}}});})($.extend({isReady:$.jet.env.packager.isReady.onFirstJs},service,options.services[service],{resources:(function(){var r=[],t=0;for(t in options.services[service].resources)
{options.services[service].resources.hasOwnProperty(t)&&typeof options.services[service].resources[t]=='string'&&r.push(options.services[service].resources[t]);}
return r;})()}));}
else{options.services[service].init.call(options.services[service]);}}}
$(document).trigger('behaviorEnd');}).bind('start refresh',function(e,options)
{var f,i,ts,perf=0,percent;if(e.type=='start')
{options=$.extend(true,{},$.jet.defaultStartOptions,{services:$.extend(true,{},$.jet.services)},options);$.jet.lastStartOptions=options;}
else
{options=arguments.length==2?$.extend(true,{startServices:true},{services:(function(lastServices){var services={};for(var name in lastServices)
{services[name]=$.extend(true,{},lastServices[name],{start:false});}
return services;}($.jet.lastStartOptions.services))},options):$.jet.lastStartOptions;options.group='refresh';$.jet.startList[options.group]=[];for(f in $.jet.startListToRefresh)
{$.jet.startListToRefresh.hasOwnProperty(f)&&$.jet.startList[options.group].push($.jet.startListToRefresh[f]);}}
for(i in options)
{if(options.hasOwnProperty(i)&&typeof options.services[i]=='object'&&typeof options[i]=='boolean'&&typeof options.services[i].start=='boolean')
{$.jet.env.dev&&console.warn('translating option '+i+' please convert this option to the new service structure !');options.services[i].start=options[i];}}
options.startServices&&$.start(function(){$(document).trigger('behavior',[options])},{priority:0,group:options.group,name:'Behavior',refresh:false});$.jet.startList[options.group].sort(function(a,b){return a.priority-b.priority;});for(f in $.jet.startList[options.group])
{if($.jet.startList[options.group].hasOwnProperty(f))
{$.jet.startList[options.group][f].fn&&$.jet.startList[options.group][f].fn.call(this,e,$.jet.startList[options.group][f]);e.type=='start'&&$.jet.startList[options.group][f].refresh&&$.jet.startListToRefresh.push($.jet.startList[options.group][f]);}}
options.group=='global'&&e.type=='start'&&($.jet.started=true);$(document).trigger(e.type+'End',[arguments[1],options]);});}(jQuery));(function($){'use strict';var _k='';$.$={caller:function()
{this.init();if($.$.aliases[this.name])
{$.$.aliases[this.name].apply(this,arguments);}
else{var loadedResources=0,self=this,args=arguments;$.proxyLoader({load:this.resources,callback:function(url,result,key){++loadedResources;self.isReady.call(self,url,result,key,loadedResources)&&self.launcher.apply(self,args);}});}},constructor:function(name,o){o=$.extend({resources:[],init:function(){this.resources.push($.jet.env.packager.get(this.name)+'?'+Math.random());},launcher:function()
{$.$.aliases[this.name]=$[this.name];$.$.aliases[this.name].apply(this,arguments);},isLoaded:function(){return false;},isReady:$.jet.env.packager.isReady.onFirstJs},o);return function()
{this.name=name;for(var k in o){this[k]=o[k];}
this.caller.apply(this,arguments);};},aliases:[]};$.$.delator=$.$.constructor('delator',{isLoaded:function(){return typeof $.delator=='object';}});}(jQuery));(function UMD(name,context,definition){context[name]=context[name]||definition();if(typeof module!="undefined"&&module.exports){module.exports=context[name];}
else if(typeof define=="function"&&define.amd){define(function $AMD$(){return context[name];});}})("Promise",typeof global!="undefined"?global:this,function DEF(){"use strict";var builtInProp,cycle,scheduling_queue,ToString=Object.prototype.toString,timer=(typeof setImmediate!="undefined")?function timer(fn){return setImmediate(fn);}:setTimeout;try{Object.defineProperty({},"x",{});builtInProp=function builtInProp(obj,name,val,config){return Object.defineProperty(obj,name,{value:val,writable:true,configurable:config!==false});};}
catch(err){builtInProp=function builtInProp(obj,name,val){obj[name]=val;return obj;};}
scheduling_queue=(function Queue(){var first,last,item;function Item(fn,self){this.fn=fn;this.self=self;this.next=void 0;}
return{add:function add(fn,self){item=new Item(fn,self);if(last){last.next=item;}
else{first=item;}
last=item;item=void 0;},drain:function drain(){var f=first;first=last=cycle=void 0;while(f){f.fn.call(f.self);f=f.next;}}};})();function schedule(fn,self){scheduling_queue.add(fn,self);if(!cycle){cycle=timer(scheduling_queue.drain);}}
function isThenable(o){var _then,o_type=typeof o;if(o!=null&&(o_type=="object"||o_type=="function")){_then=o.then;}
return typeof _then=="function"?_then:false;}
function notify(){for(var i=0;i<this.chain.length;i++){notifyIsolated(this,(this.state===1)?this.chain[i].success:this.chain[i].failure,this.chain[i]);}
this.chain.length=0;}
function notifyIsolated(self,cb,chain){var ret,_then;try{if(cb===false){chain.reject(self.msg);}
else{if(cb===true){ret=self.msg;}
else{ret=cb.call(void 0,self.msg);}
if(ret===chain.promise){chain.reject(TypeError("Promise-chain cycle"));}
else if(_then=isThenable(ret)){_then.call(ret,chain.resolve,chain.reject);}
else{chain.resolve(ret);}}}
catch(err){chain.reject(err);}}
function resolve(msg){var _then,def_wrapper,self=this;if(self.triggered){return;}
self.triggered=true;if(self.def){self=self.def;}
try{if(_then=isThenable(msg)){def_wrapper=new MakeDefWrapper(self);_then.call(msg,function $resolve$(){resolve.apply(def_wrapper,arguments);},function $reject$(){reject.apply(def_wrapper,arguments);});}
else{self.msg=msg;self.state=1;if(self.chain.length>0){schedule(notify,self);}}}
catch(err){reject.call(def_wrapper||(new MakeDefWrapper(self)),err);}}
function reject(msg){var self=this;if(self.triggered){return;}
self.triggered=true;if(self.def){self=self.def;}
self.msg=msg;self.state=2;if(self.chain.length>0){schedule(notify,self);}}
function iteratePromises(Constructor,arr,resolver,rejecter){for(var idx=0;idx<arr.length;idx++){(function IIFE(idx){Constructor.resolve(arr[idx]).then(function $resolver$(msg){resolver(idx,msg);},rejecter);})(idx);}}
function MakeDefWrapper(self){this.def=self;this.triggered=false;}
function MakeDef(self){this.promise=self;this.state=0;this.triggered=false;this.chain=[];this.msg=void 0;}
function Promise(executor){if(typeof executor!="function"){throw TypeError("Not a function");}
if(this.__NPO__!==0){throw TypeError("Not a promise");}
this.__NPO__=1;var def=new MakeDef(this);this["then"]=function then(success,failure){var o={success:typeof success=="function"?success:true,failure:typeof failure=="function"?failure:false};o.promise=new this.constructor(function extractChain(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}
o.resolve=resolve;o.reject=reject;});def.chain.push(o);if(def.state!==0){schedule(notify,def);}
return o.promise;};this["catch"]=function $catch$(failure){return this.then(void 0,failure);};try{executor.call(void 0,function publicResolve(msg){resolve.call(def,msg);},function publicReject(msg){reject.call(def,msg);});}
catch(err){reject.call(def,err);}}
var PromisePrototype=builtInProp({},"constructor",Promise,false);builtInProp(Promise,"prototype",PromisePrototype,false);builtInProp(PromisePrototype,"__NPO__",0,false);builtInProp(Promise,"resolve",function Promise$resolve(msg){var Constructor=this;if(msg&&typeof msg=="object"&&msg.__NPO__===1){return msg;}
return new Constructor(function executor(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}
resolve(msg);});});builtInProp(Promise,"reject",function Promise$reject(msg){return new this(function executor(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}
reject(msg);});});builtInProp(Promise,"all",function Promise$all(arr){var Constructor=this;if(ToString.call(arr)!="[object Array]"){return Constructor.reject(TypeError("Not an array"));}
if(arr.length===0){return Constructor.resolve([]);}
return new Constructor(function executor(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}
var len=arr.length,msgs=Array(len),count=0;iteratePromises(Constructor,arr,function resolver(idx,msg){msgs[idx]=msg;if(++count===len){resolve(msgs);}},reject);});});builtInProp(Promise,"race",function Promise$race(arr){var Constructor=this;if(ToString.call(arr)!="[object Array]"){return Constructor.reject(TypeError("Not an array"));}
return new Constructor(function executor(resolve,reject){if(typeof resolve!="function"||typeof reject!="function"){throw TypeError("Not a function");}
iteratePromises(Constructor,arr,function resolver(idx,msg){resolve(msg);},reject);});});return Promise;});(function(window,doc,undef){var docElement=doc.documentElement,sTimeout=window.setTimeout,firstScript=doc.getElementsByTagName("script")[0],toString={}.toString,execStack=[],started=0,noop=function(){},isGecko=("MozAppearance"in docElement.style),isGeckoLTE18=isGecko&&!!doc.createRange().compareNode,insBeforeObj=isGeckoLTE18?docElement:firstScript.parentNode,isOpera=window.opera&&toString.call(window.opera)=="[object Opera]",isIE=!!doc.attachEvent&&!isOpera,strJsElem=isGecko?"object":isIE?"script":"img",strCssElem=isIE?"script":strJsElem,isArray=Array.isArray||function(obj){return toString.call(obj)=="[object Array]";},isObject=function(obj){return Object(obj)===obj;},isString=function(s){return typeof s=="string";},isFunction=function(fn){return toString.call(fn)=="[object Function]";},globalFilters=[],scriptCache={},prefixes={timeout:function(resourceObj,prefix_parts){if(prefix_parts.length){resourceObj['timeout']=prefix_parts[0];}
return resourceObj;}},handler,yepnope;function isFileReady(readyState){return(!readyState||readyState=="loaded"||readyState=="complete"||readyState=="uninitialized");}
function injectJs(src,cb,attrs,timeout,err,internal){var script=doc.createElement("script"),done,i;timeout=timeout||yepnope['errorTimeout'];script.src=src;for(i in attrs){script.setAttribute(i,attrs[i]);}
cb=internal?executeStack:(cb||noop);script.onreadystatechange=script.onload=function(){if(!done&&isFileReady(script.readyState)){done=1;cb();script.onload=script.onreadystatechange=null;}};sTimeout(function(){if(!done){done=1;cb(1);}},timeout);err?script.onload():firstScript.parentNode.insertBefore(script,firstScript);}
function injectCss(href,cb,attrs,timeout,err,internal){var link=doc.createElement("link"),done,i;timeout=timeout||yepnope['errorTimeout'];cb=internal?executeStack:(cb||noop);link.href=href;link.rel="stylesheet";link.type="text/css";for(i in attrs){link.setAttribute(i,attrs[i]);}
if(!err){firstScript.parentNode.insertBefore(link,firstScript);sTimeout(cb,0);}}
function executeStack(){var i=execStack.shift();started=1;if(i){if(i['t']){sTimeout(function(){(i['t']=="c"?yepnope['injectCss']:yepnope['injectJs'])(i['s'],0,i['a'],i['x'],i['e'],1);},0);}
else{i();executeStack();}}
else{started=0;}}
function preloadFile(elem,url,type,splicePoint,dontExec,attrObj,timeout){timeout=timeout||yepnope['errorTimeout'];var preloadElem=doc.createElement(elem),done=0,firstFlag=0,stackObject={"t":type,"s":url,"e":dontExec,"a":attrObj,"x":timeout};if(scriptCache[url]===1){firstFlag=1;scriptCache[url]=[];}
function onload(first){if(!done&&isFileReady(preloadElem.readyState)){stackObject['r']=done=1;!started&&executeStack();preloadElem.onload=preloadElem.onreadystatechange=null;if(first){if(elem!="img"){sTimeout(function(){insBeforeObj.removeChild(preloadElem)},50);}
for(var i in scriptCache[url]){if(scriptCache[url].hasOwnProperty(i)){scriptCache[url][i].onload();}}}}}
if(elem=="object"){preloadElem.data=url;preloadElem.setAttribute("type","text/css");}else{preloadElem.src=url;preloadElem.type=elem;}
preloadElem.width=preloadElem.height="0";preloadElem.onerror=preloadElem.onload=preloadElem.onreadystatechange=function(){onload.call(this,firstFlag);};execStack.splice(splicePoint,0,stackObject);if(elem!="img"){if(firstFlag||scriptCache[url]===2){insBeforeObj.insertBefore(preloadElem,isGeckoLTE18?null:firstScript);sTimeout(onload,timeout);}
else{scriptCache[url].push(preloadElem);}}}
function load(resource,type,dontExec,attrObj,timeout){started=0;type=type||"j";if(isString(resource)){preloadFile(type=="c"?strCssElem:strJsElem,resource,type,this['i']++,dontExec,attrObj,timeout);}else{execStack.splice(this['i']++,0,resource);execStack.length==1&&executeStack();}
return this;}
function getYepnope(){var y=yepnope;y['loader']={"load":load,"i":0};return y;}
yepnope=function(needs){var i,need,chain=this['yepnope']['loader'];function satisfyPrefixes(url){var parts=url.split("!"),gLen=globalFilters.length,origUrl=parts.pop(),pLen=parts.length,res={"url":origUrl,"origUrl":origUrl,"prefixes":parts},mFunc,j,prefix_parts;for(j=0;j<pLen;j++){prefix_parts=parts[j].split('=');mFunc=prefixes[prefix_parts.shift()];if(mFunc){res=mFunc(res,prefix_parts);}}
for(j=0;j<gLen;j++){res=globalFilters[j](res);}
return res;}
function getExtension(url){var b=url.split('?')[0];return b.substr(b.lastIndexOf('.')+1);}
function loadScriptOrStyle(input,callback,chain,index,testResult){var resource=satisfyPrefixes(input),autoCallback=resource['autoCallback'],extension=getExtension(resource['url']);if(resource['bypass']){return;}
if(callback){callback=isFunction(callback)?callback:callback[input]||callback[index]||callback[(input.split("/").pop().split("?")[0])];}
if(resource['instead']){return resource['instead'](input,callback,chain,index,testResult);}
else{if(scriptCache[resource['url']]){resource['noexec']=true;}
else{scriptCache[resource['url']]=1;}
chain.load(resource['url'],((resource['forceCSS']||(!resource['forceJS']&&"css"==getExtension(resource['url']))))?"c":undef,resource['noexec'],resource['attrs'],resource['timeout']);if(isFunction(callback)||isFunction(autoCallback)){chain['load'](function(){getYepnope();callback&&callback(resource['origUrl'],testResult,index);autoCallback&&autoCallback(resource['origUrl'],testResult,index);scriptCache[resource['url']]=2;});}}}
function loadFromTestObject(testObject,chain){var testResult=!!testObject['test'],group=testResult?testObject['yep']:testObject['nope'],always=testObject['load']||testObject['both'],callback=testObject['callback']||noop,cbRef=callback,complete=testObject['complete']||noop,needGroupSize,callbackKey;function handleGroup(needGroup,moreToCome){if(!needGroup){!moreToCome&&complete();}
else if(isString(needGroup)){if(!moreToCome){callback=function(){var args=[].slice.call(arguments);cbRef.apply(this,args);complete();};}
loadScriptOrStyle(needGroup,callback,chain,0,testResult);}
else if(isObject(needGroup)){needGroupSize=(function(){var count=0,i
for(i in needGroup){if(needGroup.hasOwnProperty(i)){count++;}}
return count;})();for(callbackKey in needGroup){if(needGroup.hasOwnProperty(callbackKey)){if(!moreToCome&&!(--needGroupSize)){if(!isFunction(callback)){callback[callbackKey]=(function(innerCb){return function(){var args=[].slice.call(arguments);innerCb&&innerCb.apply(this,args);complete();};})(cbRef[callbackKey]);}
else{callback=function(){var args=[].slice.call(arguments);cbRef.apply(this,args);complete();};}}
loadScriptOrStyle(needGroup[callbackKey],callback,chain,callbackKey,testResult);}}}}
handleGroup(group,!!always);always&&handleGroup(always);}
if(isString(needs)){loadScriptOrStyle(needs,0,chain,0);}
else if(isArray(needs)){for(i=0;i<needs.length;i++){need=needs[i];if(isString(need)){loadScriptOrStyle(need,0,chain,0);}
else if(isArray(need)){yepnope(need);}
else if(isObject(need)){loadFromTestObject(need,chain);}}}
else if(isObject(needs)){loadFromTestObject(needs,chain);}};yepnope['addPrefix']=function(prefix,callback){prefixes[prefix]=callback;};yepnope['addFilter']=function(filter){globalFilters.push(filter);};yepnope['errorTimeout']=1e4;if(doc.readyState==null&&doc.addEventListener){doc.readyState="loading";doc.addEventListener("DOMContentLoaded",handler=function(){doc.removeEventListener("DOMContentLoaded",handler,0);doc.readyState="complete";},0);}
window['yepnope']=getYepnope();window['yepnope']['executeStack']=executeStack;window['yepnope']['injectJs']=injectJs;window['yepnope']['injectCss']=injectCss;})(this,document);(function($,w){"use strict";w.vow=function(url,options)
{return new Promise(function(resolve,reject)
{options=options||{};options.type=options.type||/\.css$/.test(url)?'css':'js';options.async=(typeof options.async==='boolean')?options.async:true;options.nodeType=options.nodeType||(options.type==='js'?'script':'link');if(typeof url!=='string'){reject({message:'incorrect url type (not a string)'});return;}
var node=document.createElement(options.nodeType),isModern=(typeof node.onload!=='undefined'),success=function()
{!isModern&&document.getElementsByTagName('head')[0].appendChild(node);resolve({url:url,options:options,node:node});},fail=function(){reject({url:url,options:options,node:node});};typeof node.async==='boolean'&&(node.async=options.async);if(isModern)
{node.onload=function(){success();};node.onerror=function(){fail();};}
else
{node.onreadystatechange=function()
{if(/loaded|complete/.test(this.readyState))
{if(node.readyState=='complete'){success();return;}
var firstState=node.readyState;node.children;firstState=='loaded'&&node.readyState=='loading'&&fail();}};}
node.type=(function(t){switch(t){case'js':node.src=url;return'text/javascript';case'css':node.href=url;node.rel='stylesheet';node.media='all';return'text/css';default:return t;}}(options.type));isModern&&document.getElementsByTagName('head')[0].appendChild(node);});};}(jQuery,window));(function($){'use strict';$.proxyLoader=function(options)
{options=$.extend({},$.proxyLoader.defaultOptions,options);var	resources=(function()
{switch(Object.prototype.toString.call(options.load)){case"[object String]":return[options.load];case"[object Array]":return options.load;case"[object Object]":var res=[];for(var url in options.load)
{res.push(url);}
return res;default:if($.jet.env.dev){throw('unknown type of resource given to the proxyloader');}}}()),vows=[],i=0,l=resources.length,loadedResources=[];for(;i<l;++i)
{(function(url,i)
{var param={async:typeof options.async==='boolean'?options.async:(resources.length==1)};if(/^css!/.test(url)){param.type='css';url=url.replace(/^css!/,'')};vows.push(vow(url,param).then(function(resource){loadedResources.push(resource.url);resource.resources=resources;options.callback.call(resource,url,'',i,loadedResources.length);return resource;})
['catch'](function(err){console.warn('Failed to load asset',url,err);}));}(resources[i],i));}
return Promise.all(vows).then(function(loaded)
{options.complete(loaded);})
['catch'](function(err){console.warn('Failed proxyLoader whole execution',resources,err);});};$.proxyLoader.defaultOptions={load:[],callback:function(){},complete:function(){},async:undefined};})(jQuery);(function($)
{$.fn.tryFn=function(fn){'use strict';if(typeof this[fn]=='function')
{var m=arguments.length,i=1,args=[];for(;i<m;++i){args.push(arguments[i]);}
return this[fn].apply(this,args);}
return this;};})(jQuery);NetworkPileManager=function(host)
{typeof NetworkPileManager.prototype.currentByHost[host]=='undefined'&&(NetworkPileManager.prototype.currentByHost[host]=0);$.extend(this,{pile:{todo:[],done:[],current:[],error:[]},current:NetworkPileManager.prototype.currentByHost[host],delta:1,maxCon:0,_depiling:false});this.maxCon=(function()
{var version=parseInt($.browser.version.substr(0,1));if(($.browser.msie&&version>7)||($.browser.mozilla&&version>=3)||$.browser.webkit){return 6;}
if(($.browser.msie&&version<=6)||($.browser.mozilla&&version<3)){return 2;}
return 4;}())
-this.delta;return this;};NetworkPileManager.prototype.currentByHost={};NetworkPileManager.prototype.sort=function()
{this.pile.todo.sort(function(a,b){return a.priority-b.priority;});};NetworkPileManager.prototype.add=function(handler,data,priority,context){this.pile.todo.push({data:data,handler:handler,priority:priority||0,context:context||this});this.sort();};NetworkPileManager.prototype.getStatusHandler=function(id)
{var self=this;return function(status)
{--self.current;self.pile[status].push(self.pile.current[id]);delete self.pile.current[id];self.pile.todo.length>0&&!self._depiling&&self.depile('handler');self.pile.todo.length==0&&(self.pile.current=[]);}};NetworkPileManager.prototype.depile=function(mode)
{var self=this;this._depiling=true;while(this.pile.todo.length>0&&this.maxCon>=this.current)
{++this.current;var id=this.pile.current.push(this.pile.todo.shift())-1;this.pile.current[id].handler.call(this.pile.current[id].context,this.pile.current[id].data,this.getStatusHandler(id));}
this._depiling=false;this.pile.length>0&&this.maxCon<=this.current&&setTimeout(function(){self.depile('retry');},100);};(function($){imagePile={pile:[],cachedUri:{},delta:1,current:0,maxCon:0,_depiling:false,add:function(src,data,handler,priority){this.pile.push({src:src,data:data,handler:handler,priority:priority||0,image:new Image()});this.sort();},getMaxCon:function()
{var version=parseInt($.browser.version.substr(0,1));if(($.browser.msie&&version>7)||($.browser.mozilla&&version>=3)||$.browser.webkit){return 6;}
else if(($.browser.msie&&version<=6)||($.browser.mozilla&&version<3)){return 2;}
return 4;},sort:function()
{this.pile.sort(function(a,b){return a.priority-b.priority;});},depile:function(maxPriority,mode)
{!this._initialized&&this.init();maxPriority=typeof maxPriority=='number'?maxPriority:false;this._depiling=true;var underPriority=true;while(underPriority&&this.pile.length>0&&this.maxCon>=this.current)
{++this.current;(function(){var img=imagePile.pile.shift(),onLoad=function(e,cached)
{imagePile.cachedUri[img.src]=true;--imagePile.current;img.handler.call(img,cached);$.profile&&console.log('---->',imagePile.pile.length,':',imagePile.current,'>=',imagePile.maxCon,cached?'cached':'loaded',imagePile._depiling?' depile ':' sleep ');!imagePile._depiling&&imagePile.pile.length>0&&imagePile.depile(maxPriority,'internal');};if(!img||!img.src||(!$.support.svg&&img.src.match(/^.*\.svg$/gi)!==null)){--imagePile.current;return;}
if(maxPriority!==false&&img.priority>maxPriority){underPriority=false;imagePile.pile.unshift(img);--imagePile.current;return;}
img.image.src=img.src;if(img.image.complete){onLoad.call(img.image,null,true);}
else{img.image.onload=onLoad;}})();}
this._depiling=false;mode!='internal'&&maxPriority===false&&this.pile.length>0&&this.maxCon<=this.current&&setTimeout(function(){imagePile.depile(maxPriority,'retry');},100);},init:function()
{this._initialized=true;this.maxCon=this.getMaxCon()-this.delta;}};})(jQuery);(function($)
{'use strict';var voidFn=function(){$.jet.env.dev&&console.warn('no such api support in that browser');};navigator.cookieEnabled&&(typeof localStorage=='undefined'&&(localStorage={setItem:voidFn,getItem:voidFn,removeItem:voidFn}));typeof JSON=='undefined'&&(JSON={parse:function(data){return(new Function("return "+data))();},serialize:voidFn});}(jQuery));(function($){if(typeof $.ui=='undefined'){return;}
var ourTabId=0;$.ui.tabs.prototype._tabId=function(a){$.core.$fake[0]=a;var title=a.title||$.core.$fake.attr('original-title'),getId=typeof getNextTabId=='function'?getNextTabId:function(){return'p'+ourTabId++};return title&&title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+getId();};})(jQuery);if(!Array.prototype.indexOf){Array.prototype.indexOf=function(searchElement){"use strict";if(this===void 0||this===null){throw new TypeError();}
var t=Object(this);var len=t.length>>>0;if(len===0){return-1;}
var n=0;if(arguments.length>0){n=Number(arguments[1]);if(n!==n){n=0;}else if(n!==0&&n!==window.Infinity&&n!==-window.Infinity){n=(n>0||-1)*Math.floor(Math.abs(n));}}
if(n>=len){return-1;}
var k=n>=0?n:Math.max(len-Math.abs(n),0);for(;k<len;k++){if(k in t&&t[k]===searchElement){return k;}}
return-1;};}
(function($){if(typeof $.ui=='undefined'){return;}
$.ui.draggable.prototype._getRelativeOffset=function()
{if(this.cssPosition=="relative"){var p=this.element.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0),left:p.left-(parseInt(this.helper.css("left"),10)||0)};}else{return{top:0,left:0};}};}(jQuery));(function($)
{$.evalOptions=function(options)
{if(typeof options=='object')
{if($.isArray(options))
{for(var m=options.length,i=0;i<m;++i)
{options.hasOwnProperty(i)&&typeof options[i]=='string'&&(options[i]=$.evalOptions.parse(options[i]));$.evalOptions(options[i]);}}
else
{for(var i in options)
{options.hasOwnProperty(i)&&typeof options[i]=='string'&&(options[i]=$.evalOptions.parse(options[i]));options[i]&&!options[i].jquery&&$.evalOptions(options[i]);}}}
return options;};$.evalOptions.parse=function(option)
{if(option.substr(0,3)==':=>')
{return eval('(function(){ return '+option.substr(3)+';})()')}
else if(option.substr(0,2)==':=')
{return(eval(option.substr(2)));}
return option;};})(jQuery);(function($)
{$.sanitize=function(s)
{return s.replace(/(<[^>]*>)/img,'');};$.replaceArray=function(str,obj)
{obj=obj||{};var s,r='';if($.browser.msie&&parseInt($.browser.version.substring(0,1))<9)
{for(s in str){if(!str.hasOwnProperty(s)){break;}
if(str[s]in obj){r+=obj[str[s]];}
else{r+=str[s];}}
return r;}
else
{for(s in obj)
{if(!obj.hasOwnProperty(s)){break;}
str=str.replace(new RegExp(s,'g'),obj[s]);}
return str;}};$.getParamFromUrl=function(param,url)
{var matches=(url==undefined?document.location.search:url).match(new RegExp('(\\?|&|^)'+param+'=(.*?)(&|$)'));return(matches==null||matches[2]==undefined)?undefined:decodeURIComponent(matches[2]).replace(/\+/g,' ');};$.htmlEntitiesDecode=function(str)
{return $("<p/>").html(str).text();};$.htmlEntitiesEncode=function(str)
{$.jet.dev&&console.warn('this function is there by principe but probably shouldn\'t be used on your side, are you really sure ?');return $("<p/>").text(str).html();};$.stringToUrl=function(str)
{return $.stripAccents(str).toLowerCase().replace(/[^0-9a-z_-]/g,'-');};$.stripAccents=function(str)
{return $.halfEscape(str,{'ä':'a','á':'a','à':'a','â':'a','Ä':'A','Á':'A','À':'A','Â':'A','é':'e','è':'e','ê':'e','ë':'e','É':'E','È':'E','Ê':'E','Ë':'E','ö':'o','Ö':'O','ó':'o','ò':'o','ô':'o','Ó':'O','Ò':'O','Ô':'O','ü':'u','Ü':'U','ú':'u','ù':'u','û':'u','Ú':'U','Ù':'U','Û':'U','ß':'s'});};$.halfEscape=function(str,obj)
{obj=obj||{'%':'%25',' ':'%20','\\$':'%24','&':'%26','`':'%60',':':'%3A','<':'%3C','>':'%3E','\\[':'%5B','\\]':'%5D','{':'%7B','}':'%7D','"':'%22','\\+':'%2B','#':'%23','@':'%40','/':'%2F',';':'%3B','\\?':'%3F','\\\\':'%5C','\\^':'%5E','\\|':'%7C','~':'%7E',"'":'%27',',':'%2C'};return $.replaceArray(str,obj);};}(jQuery));(function($){'use strict';typeof $.jet!=='object'&&($.jet={});$.extend(true,$.jet,{dataSeek:{$dataBuffer:[],defaultOptions:{target:'',parse:false,priority:1,load:'init'},seek:function(){this.$dataBuffer=$('script[type=application\\/x-jet-extend]').each(function()
{$.jet.$fake[0]=this;typeof $.jet.$fake.attr('data-load')=='undefined'&&$.jet.$fake.attr('data-load',$.jet.dataSeek.defaultOptions.load);});},parse:function(loadMode)
{this.$dataBuffer.filter('[data-load='+loadMode+']').each(function()
{$.jet.$fake[0]=this;try{var
target=$.jet.$fake.attr('data-target')||$.jet.dataSeek.defaultOptions.target,priority=parseInt($.jet.$fake.attr('data-priority')||$.jet.dataSeek.defaultOptions.priority,10),parse=$.jet.$fake.attr('data-parse')||$.jet.dataSeek.defaultOptions.parse,data=(parse=='true'?$.evalOptions($.parseJSON($.jet.$fake.html())):$.parseJSON($.jet.$fake.html())),refTarget=window,roadToTarget=target.split('.'),i=0,m=roadToTarget.length,dataType=$.type(data);}
catch(e)
{$.jet.dev&&console.warn('Error parsing ',this,e);return;}
if($.trim(roadToTarget[0])=='')
{$.jet.dev&&console.warn('Target error (empty) on ',this);return;}
for(;i<m;++i)
{if(typeof refTarget[roadToTarget[i]]=='undefined')
{refTarget[roadToTarget[i]]=(function(){switch(dataType)
{case'array':return[];case'object':default:return{};}}());}
refTarget=refTarget[roadToTarget[i]];}
switch(dataType)
{case'array':$.merge((priority==1?refTarget:data),(priority==1?data:refTarget));break;case'object':default:$.extend(true,refTarget,(priority==1?refTarget:data),(priority==1?data:refTarget));}
$.jet.$fake[0]=document;$.jet.$fake.trigger('dataSeek',[this,refTarget,loadMode]);});}}});$(document).bind('start ready',function(e){$.jet.dataSeek.seek();$.jet.dataSeek.parse(e.type);});$.jet.dataSeek.seek();$.jet.dataSeek.parse('init');}(jQuery));(function($){$.fn.ajaxUpdate=function(url,data,opt){$.fn.ajaxUpdate.defaults={type:'GET',duration:300,anim:true,scroll:false,manip:'',overlay:null,complete:null,error:null,beforeDomManip:null,dataType:'html'};opt=$.extend($.fn.ajaxUpdate.defaults,opt);$.isFunction(opt.overlay)&&opt.overlay.call(this);var _M=url.match(/#(.*)$/),_hash=null,self=this,_d=self;if(_M&&_M.length===2){url=url.replace(/#.*$/,'');_hash=_M[1];opt.scroll=false;}
$.ajax({url:url,type:opt.type,dataType:opt.dataType,data:data,complete:function(res,status){if(status==="success"||status==="notmodified"){var _html=(function(){switch(opt.dataType)
{case'html':return res.responseText;case'jsonp':case'json':return $.parseJSON(res.responseText).html;default:console.log('mode not supported');}});(opt.beforeDomManip)&&opt.beforeDomManip.call(this,_html,status,res);if(opt.manip){_d=$('<div style="margin:0;padding:0;word-wrap:normal" />');(opt.manip==='append')?self.append(_d):self.prepend(_d);}
if(opt.anim){_d.hide();}
_d.html(_html);var _f=function(){(opt.manip)&&_d.replaceWith(_html);(opt.complete)&&opt.complete.call(this,_html,status,res);};opt.scroll&&_d[0].scrollIntoView();(opt.anim)?_d.slideDown(opt.duration,_f):_f.call();}else{(opt.error)&&opt.error.call(this,status+" "+res.statusText,res.responseText);}
if(_hash){location.hash=_hash;}}});return this;}})(jQuery);(function($)
{$.microTemplate={langs:{},lang:'',setLang:function(lang){if(typeof(lang)!='string'){return false;}
lang=lang.toUpperCase();if(typeof(this.langs[lang])!='undefined'){this.lang=lang;return true;}
return false;},getLang:function(){var l=function(){var i=0;for(var l in this.langs){i++;}
return i;};switch(l.apply(this)){case 1:for(var lang in this.langs){return lang;}
break;default:return'EN';}},getTemplate:function(template,data){var self=this;return template.replace(/\${([^}]+)}/igm,function(r,a){return(typeof(data[a])=='undefined'?'':data[a]);}).replace(/\$l{([^}]+)}/igm,function(r,a){return self.langs[self.lang][a];});},microTemplateInit:function()
{if(this.lang===''){this.lang=this.getLang();}}};})(jQuery);(function($){'use strict';$.fn.updatable=function(options)
{options=$.extend({},$.fn.updatable.defaultOptions,options);return this.each(function()
{var $self=$(this),val=$self.val(),preVal,timerDelay,check=function(e)
{var curVal=$self.val();if(curVal!=val){preVal=val;val=curVal;}
if(((e.type in{keydown:1,keyup:1}&&((e.keyCode>47&&e.keyCode<112)||e.keyCode in{32:1,46:1,13:1,8:1}))||e.type=='pasted'))
{$(this).trigger('updated',[e,{val:val,preVal:preVal}]);}};$self.bind('pasted keyup',function(e){clearTimeout(timerDelay);var self=this,falseEvent={keyCode:e.keyCode,type:e.type};timerDelay=setTimeout(function()
{check.call(self,((typeof e.keyCode=='undefined')?e:falseEvent));},options.delay);}).bind('paste',function(){var $self=this;setTimeout(function(){$($self).trigger('pasted');},300);});});};$.fn.updatable.defaultOptions={delay:50};}(jQuery));(function($){$.jet.services.typeEmail={start:false,init:function(){$('input[type=email]').typeEmail();}};$.fn.typeEmail=function(options)
{options=$.extend({},{delay:$.fn.updatable.defaultOptions},options);return this.each(function()
{$.core.$fake[0]=this;$.core.$fake.updatable({delay:options.delay}).bind('updated',function checkTypeEmail()
{$.core.$fake[0]=this;if($.core.$fake.val().match(/^([a-z0-9_\-\+'\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i))
{$.core.$fake.removeClass('invalid').trigger('typeEmailValid');}
else{$.core.$fake.addClass('invalid').trigger('typeEmailInvalid');}});});};$.fn.typeUrl=function(options)
{options=$.extend({delay:400,completeSearch:false},options);return(this.hasClass('typeUrl')?this:this.addClass('typeUrl').each(function()
{$.core.$fake[0]=this;$.core.$fake.updatable({delay:options.delay}).bind('updated',function checkTypeUrl()
{$.core.$fake[0]=this;var val=$.core.$fake.val(),str,url;if((options.completeSearch&&((val.match(/mailto:[a-z\.0-9-_\+]+@[a-z\.0-9-_,]+?\.[a-z]{2,4}/i)!==null)||(val.match(/http[s]?:\/\/[a-z\.0-9-_,]+?\.[a-z]{2,4}[\?:=&#!+%~a-z\.0-9\/\-_,;]*/i)!==null)))||(val.match(/^mailto:[a-z\.0-9-_\+]+@[a-z\.0-9-_,]+?\.[a-z]{2,4}$/i)!==null||val.match(/^http[s]?:\/\/[a-z\.0-9-_,]+?\.[a-z]{2,4}[\?:=&#!+%~a-z\.0-9\/\-_,;]*$/i)!==null))
{if(options.completeSearch)
{str=val.match(/mailto:[a-z\.0-9-_\+]+@[a-z\.0-9-_,]+?\.[a-z]{2,4}/i);if(str===null)
{str=val.match(/http[s]?:\/\/[a-z\.0-9-_,]+?\.[a-z]{2,4}[\?:=&#!+%~a-z\.0-9\/\-_,;]*/i);}
url=str[0];}
else{url=val;}
$.core.$fake.removeClass('invalid').trigger('typeUrlValid',[url]);}
else if((options.completeSearch&&(str=val.match(/[a-z\.0-9-_,]+?\.[a-z]{2,4}[\?:=&#!+%~a-z\.0-9\/\-_,;]*/i)))||(val.match(/^[a-z\.0-9-_,]+?\.[a-z]{2,4}[\?:=&#!+%~a-z\.0-9\/\-_,;]*$/i)))
{if(options.completeSearch)
{if(typeof str!=='undefined')
{val=val.substring(0,str.index)+'http://'+val.substring(str.index,val.length);url='http://'+str[0];}}else{val=url='http://'+val;}
$.core.$fake.val(val).removeClass('invalid').trigger('typeUrlValid',[url]);}
else{$.core.$fake.addClass('invalid').trigger('typeUrlInvalid');}});}));};$.jet.services.maxLength={start:false,init:function(){$('textarea[maxlength]').maxLength();}};$.fn.maxLength=function()
{return this.each(function()
{var self=$(this),maxLength=self.attr('maxlength'),warnLength=self.attr('warnlength'),lastLength=0,check=function(e,oe)
{var self=$(this),val=self.val(),l=(oe.type=='keyup'?val.length-1:val.length);if(l>=warnLength)
{self.trigger('warnlengthin',[l,warnLength,maxLength]);}
else{self.trigger('warnlengthout',[l,warnLength,maxLength]);}
if(l>=maxLength)
{!$.browser.webkit&&self.val(val.substr(0,(oe.type=='pasted'?maxLength:maxLength-1)));self.trigger('maxlength',[maxLength]);}};self.updatable().bind('updated',check);});};})(jQuery);(function($)
{$.jet.services.inputDefault={start:true,options:{},init:function(){$('.inputdefault').initInputDefault(this.options);}};$.fn.ccmInputIsDefault=function()
{if(this.length===0){return false;}
return this.data('default')==this.val();};$.fn.ccmInputIsEmpty=function()
{if(this.length===0){return false;}
var val=this.val();return val===''||this.data('default')==val;};$.fn.ccmInputValue=function(value)
{if(value)
{this.each(function()
{var $this=$(this),options=$this.data('inputDefaultOptions');if(value&&value.length>0)
{$.profile&&console.log(this,value);$this.val(value).css('color','').removeClass(options.className||$.fn.initInputDefault.defaultOptions.className);}else
{$.profile&&console.log(this,$this.data('default'),$this.data('inputDefaultOptions'));$this.val($this.data('default')).css('color',options.color||$.fn.initInputDefault.defaultOptions.color).addClass(options.className||$.fn.initInputDefault.defaultOptions.className);}});}
if(this.length===0){return null;}
var val=this.val();if(val===''||this.data('default')==val)
{return null;}
return val;};$.fn.initInputDefault=function(options){options=$.extend({},$.fn.initInputDefault.defaultOptions,options);this.each(function(){var $this=$(this);options.clear.call(this,options);$this.data('default',options.getDefaultText.call(this,options)).data('inputDefaultOptions',options).closest('form').submit(function(){options.empty.call($this[0],options);});});return this.bind('keydown click',function(){options.empty.call(this,options);}).bind('focus',function(event,noempty){noempty=noempty||false;!noempty&&options.empty.call(this,options);}).bind('blur',function(){options.clear.call(this,options);});};$.fn.InitInputDefault=$.fn.initInputDefault;$.fn.initInputDefault.defaultOptions={caption:function()
{var $this=$(this),placeHolder=$this.attr('placeholder');if(typeof placeHolder==='undefined'||placeHolder==='')
{var value=$this.attr('default');if(typeof value==='undefined'||value==='')
{return null;}
return value;}
return placeHolder;},color:'#999',className:'defaultValue',defaultStart:function(options)
{$.core.$fake[0]=this;if(typeof $.core.$fake.attr('defaultStart')==='undefined'){return null;}else{return $.core.$fake.attr('defaultStart');}},getDefaultText:function(options)
{if(typeof options.caption==='function'){return options.caption.call(this,options);}else{return options.caption;}},getValue:function(options)
{$.core.$fake[0]=this;return $.core.$fake.val();},isEmpty:function(options)
{return options.getValue.call(this,options)===""||options.isDefault.call(this,options);},isDefault:function(options)
{return options.getValue.call(this,options)===options.getDefaultText.call(this,options);},clear:function(options)
{if(options.isEmpty.call(this,options)){$.core.$fake[0]=this;$.core.$fake.css('color',options.color).addClass(options.className).val(options.getDefaultText.call(this,options));}
return this;},empty:function(options)
{if(options.isDefault.call(this,options)){$.core.$fake[0]=this;$.core.$fake.css('color','').removeClass(options.className).val(options.defaultStart.call(this,options));}
return this;}};})(jQuery);(function($){$.jet.services.shortCutManager={start:false,options:{},init:function(){$(document).trigger('startShortCutManager',[this.options]);}};$.shortcutManager={shortcut:[],analyse:function(e){var key=e.keyCode+'_'+e.altKey+'_'+e.ctrlKey+'_'+e.shiftKey;typeof $.shortcutManager.shortcut[key]=='object'&&$.shortcutManager.shortcut[key].func.apply($.shortcutManager.shortcut[key].anchor,[e]);}};$.fn.addShortcut=function(func,config){config=$.extend(true,{},{keyCode:65,altKey:false,ctrlKey:false,shiftKey:false},config);return this.each(function(){$.shortcutManager.shortcut[config.keyCode+'_'+config.altKey+'_'+config.ctrlKey+'_'+config.shiftKey]={anchor:this,func:func};});};$(document).bind('startShortCutManager',function(){$.profile&&console.time('shortCutManager.start');$(document).bind('keydown',$.shortcutManager.analyse);$.profile&&console.timeEnd('shortCutManager.start');});})(jQuery);(function($){$.jet.services.dropDownBtn={start:false,options:{anim_duration:100},init:function(){$('.dropdownbtn').dropDownBtn(this.options);}};$.fn.dropDownBtn=function(options)
{$.fn.dropDownBtn.defaults={ddselector:'div:eq(0)',csstop:'top',duration:100,error:null,beforeClose:function(){return true;},beforeOpen:function(){},afterOpen:function(){},afterClose:function(){},selectNoClick:'.noclick',selectHover:'a.jOnHover'};options=$.extend({},$.fn.dropDownBtn.defaults,options);this.each(function()
{var ctn=$(this);if(ctn.hasClass('isDropDownBtn')){return;}
ctn.addClass('isDropDownBtn');var _lo=$.extend({},options,$.parseJSON(ctn.attr('data-dropDownBtnOptions'))),_o=$(_lo.ddselector,ctn),_a=$(document),_f=function(e)
{if($(e.target).is(options.selectNoClick))
{return true;}
if(options.beforeClose.call(e.target,options))
{_o.hide();_a.unbind('click.ddbtn');options.afterClose.call(e.target,options);return true;}},_d=parseInt(_lo.duration),_b=function()
{if(!_o.is(':visible'))
{_a.unbind('click.ddbtn');options.afterClose.call(this,_o,options);}
else{options.beforeOpen.call(this,_o,options);if(options.csstop)
{var m=_a.scrollTop()+$(window).height()-_o.height()-50;_o.toggleClass(_lo.csstop,ctn.offset().top>m);}
_a.bind('click.ddbtn',_f);options.afterOpen.call(this,_o,options);}};ctn.children('a').not(options.selectNoClick).bind('click',function()
{_o.is(":visible")&&options.beforeClose.call(this,_o,options);_o.toggle(_d,_b);return false;});ctn.children(options.selectHover).bind('mouseenter',function()
{!_o.is(":visible")&&_o.show(_d,_b);return false;});});return this;};})(jQuery);(function($){$.fn.dropDownPopup=function(options){$.fn.dropDownPopup.defaults={$node:null,mainClass:'isDropDownPopup',ajax:{type:'post',data:null,url:null,success:function(html){this.$node.html(html);this.$this.trigger('popupLoad',this);typeof this.options.onLoad=='function'&&this.options.onLoad.call(this);}},onLoad:null,onShow:null,onHide:null,onSubmit:null};options=$.extend(true,$.fn.dropDownPopup.defaults,options);this.each(function(){var $this=$(this);if($this.hasClass(options.mainClass)){return;}
$this.addClass(options.mainClass);var $element=$('<div class="'+options.mainClass+'"></div>');$this.before($element);$element.append($this);if($this.hasClass('floatRight')){$element.addClass('floatRight');$this.removeClass('floatRight');}
$this.click(function(){var $context={$this:$this,$element:$element,options:options};if($element.hasClass('dropDownRefresh')||!$element.hasClass('isDropDownBtn')){$element.removeClass('dropDownRefresh');if(options.$node&&options.$node.length[0]){options.$node.addClass('content box1 pad20');$element.append(options.$node);$context.$node=$element.find('.content');$this.trigger('popupLoad',$context);if(typeof options.onLoad=='function'){options.onLoad.call(this);}}else{if($element.find('.content .form.formS').length==0){$element.append('<div class="content box1 pad20">'
+'<div class="form formS">'
+'<img src="/skin/common/img/loadingS.gif" />'
+'</div>'
+'</div>');}else{$element.find('.content .form.formS').html('<img src="/skin/common/img/loadingS.gif" />');}
$context.$node=$element.find('.content .form.formS');if($this.attr('request')){options.ajax.data=$.extend(true,options.ajax.data,$.parseJSON($this.attr('request')));}
$.ajax($.extend(true,options.ajax,{context:$context}));}
$this.bind('popupLoad',function(evt,$ctx){if($ctx.$node.find('#btnCtrl').length==0){$ctx.$node.append('<div id="btnCtrl" class="txtR">'
+'<a id="btnClose" class="marR5" >Fermer</a>'
+'<input id="btnSend" type="button" value="Valider" class="buttonS-B">'
+'</div>');$ctx.$node.find('#btnClose').bind('click',function(){$this.trigger('click');});$ctx.$node.find('#btnSend').bind('click',function(){if(typeof $ctx.options.onSubmit=='function'){if(!$ctx.options.onSubmit.call($context.$this[0],$context)){return;}}
$this.trigger('popupHide',$ctx).trigger('click');});}});if(!$element.hasClass('isDropDownBtn')){$element.find('div').first().hide();$element.dropDownBtn({beforeClose:function(){var $parents=$(this).parents('.'+options.mainClass);if($parents.length==0){$this.trigger('popupHide',$context);if(typeof $context.options.onHide=='function'){$context.options.onHide.call($this[0],$context);}
$.fn.dropDownPopup.current=null;return true;}else{return false;}}});$element.find('a').first().trigger('click');}}else{$context.$node=$element.find('.content');if(!$context.$node.is(':visible')){if($.fn.dropDownPopup.current!=null&&$.fn.dropDownPopup.current[0]!=$this[0]){$.fn.dropDownPopup.current.trigger('click');}
$this.trigger('popupShow',$context);if(typeof options.onShow=='function'){options.onShow.call(this,$context);}
$.fn.dropDownPopup.current=$this;}else{$this.trigger('popupHide',$context);if(typeof options.onHide=='function'){options.onHide.call(this,$context);}
$.fn.dropDownPopup.current=null;}}});});return this;};})(jQuery);(function($){function Tipsy(element,options){this.$element=$(element);this.options=options;this.enabled=true;this.fixTitle();}
Tipsy.prototype={show:function(){var title=this.getTitle();if(title&&this.enabled){var $tip=this.tip();$tip.find('.tipsy-inner')[this.options.html?'html':'text'](title);$tip[0].className='tipsy';$tip.remove().css({top:0,left:0,visibility:'hidden',display:'block'}).appendTo(document.body);var pos=$.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight});var actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight;var gravity=(typeof this.options.gravity=='function')?this.options.gravity.call(this.$element[0]):this.options.gravity;var tp;switch(gravity.charAt(0)){case'n':tp={top:pos.top+pos.height+this.options.offset,left:pos.left+pos.width/2-actualWidth/2};break;case's':tp={top:pos.top-actualHeight-this.options.offset,left:pos.left+pos.width/2-actualWidth/2};break;case'e':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth-this.options.offset};break;case'w':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width+this.options.offset};break;}
if(gravity.length==2){if(gravity.charAt(1)=='w'){tp.left=pos.left+pos.width/2-15;}else{tp.left=pos.left+pos.width/2-actualWidth+15;}}
$tip.css(tp).addClass('tipsy-'+gravity);if(this.options.fade){$tip.stop().css({opacity:0,display:'block',visibility:'visible'}).animate({opacity:this.options.opacity});}else{$tip.css({visibility:'visible',opacity:this.options.opacity});}}
this.options.onShow.call(this);typeof this.$element!='undefined'&&this.$element.trigger('tipsyEnter',[this]);},hide:function(){if(this.options.fade)
{this.tip().stop().fadeOut(function(){$(this).remove();typeof this.$element!='undefined'&&this.$element.trigger('tipsyLeave',[this]);});}else{this.tip().remove();typeof this.$element!='undefined'&&this.$element.trigger('tipsyLeave',[this]);}},fixTitle:function(){var $e=this.$element;if($e.attr('title')||typeof($e.attr('original-title'))!='string'){$e.attr('original-title',$e.attr('title')||'').removeAttr('title');}},getTitle:function(){var title,$e=this.$element,o=this.options;this.fixTitle();var title,o=this.options;if(typeof o.title=='string'){title=$e.attr(o.title=='title'?'original-title':o.title);}else if(typeof o.title=='function'){title=o.title.call($e[0]);}
title=(''+title).replace(/(^\s*|\s*$)/,"");return title||o.fallback;},tip:function(){if(!this.$tip){this.$tip=$('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');}
return this.$tip;},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null;}},enable:function(){this.enabled=true;},disable:function(){this.enabled=false;},toggleEnabled:function(){this.enabled=!this.enabled;}};$.fn.tipsy=function(options){if(options===true){return this.data('tipsy');}else if(typeof options=='string'){var tipsy=this.data('tipsy');if(tipsy)tipsy[options]();return this;}
options=$.extend({},$.fn.tipsy.defaults,options);function get(ele){var tipsy=$.data(ele,'tipsy');if(!tipsy){tipsy=new Tipsy(ele,$.fn.tipsy.elementOptions(ele,options));$.data(ele,'tipsy',tipsy);}
return tipsy;}
function enter(){var tipsy=get(this);tipsy.hoverState='in';if(options.delayIn==0){tipsy.show();}else{tipsy.fixTitle();setTimeout(function(){if(tipsy.hoverState=='in')tipsy.show();},options.delayIn);}};function leave(){var tipsy=get(this);tipsy.hoverState='out';if(options.delayOut==0){tipsy.hide();}else{setTimeout(function(){if(tipsy.hoverState=='out')tipsy.hide();},options.delayOut);}};if(!options.live)this.each(function(){get(this);});if(options.trigger!='manual'){var binder=options.live?'live':'bind',eventIn=options.trigger=='hover'?'mouseenter':'focus',eventOut=options.trigger=='hover'?'mouseleave':'blur';this[binder](eventIn,enter)[binder](eventOut,leave);}
return this;};$.fn.tipsy.defaults={delayIn:0,delayOut:0,fade:false,fallback:'',gravity:'n',html:false,live:false,offset:0,opacity:1,title:'title',trigger:'hover',onShow:function(){}};$.fn.tipsy.elementOptions=function(ele,options){return $.metadata?$.extend({},options,$(ele).metadata()):options;};$.fn.tipsy.autoNS=function(){return $(this).offset().top>($(document).scrollTop()+$(window).height()/2)?'s':'n';};$.fn.tipsy.autoWE=function(){return $(this).offset().left>($(document).scrollLeft()+$(window).width()/2)?'e':'w';};})(jQuery);(function($){$.jet.services.tipsy={start:true,options:{selector:'[title]',exceptionSelector:'.notip',optionsName:'data-tipsy',optionsSelector:'[data-tipsy]',options:{delayIn:100,fade:false,opacity:0.75}},init:function(){typeof this.options.options.gravity=='undefined'&&(this.options.options.gravity=$.fn.tipsy.autoNS);$(this.options.selector).not(this.options.exceptionSelector).not(this.options.optionsSelector).tipsy(this.options.options);var self=this;$(this.options.selector).find(this.options.optionsSelector).not(this.options.exceptionSelector).each(function()
{var $this=$(this),options=$this.attr(self.options.optionsName);try{options=$.parseJSON(options);}catch(e){$.jet.env.dev&&$.console.warn('bad tipsy options !!');return;}
$this.tipsy($.extend(true,{},self.options.options,options));});$(document).bind('clearTips',function(e,filter){$(e.target).find((filter||'.tipsy')+':not(.tour)').remove();});}};$.fn.extendedTipsy=function(options)
{if(typeof options.title!='function')
{var realTitle=options.title;options.title=function(){return realTitle;};}
options=$.extend(true,{},{timeout:0,fade:true,gravity:$.fn.tipsy.autoNS,trigger:'manual',delayIn:100,opacity:0.75},options);return this.each(function()
{var self=$(this).tipsy("hide").removeData('tipsy').tipsy(options).tipsy("show");options.timeout>0&&setTimeout(function(){self.tipsy("hide").removeData('tipsy');},options.timeout);});};})(jQuery);;(function($){var $scrollTo=$.scrollTo=function(target,duration,settings){$(window).scrollTo(target,duration,settings);};$scrollTo.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1};$scrollTo.window=function(scope){return $(window)._scrollable();};$.fn._scrollable=function(){return this.map(function(){var elem=this,isWin=!elem.nodeName||$.inArray(elem.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)
return elem;var doc=(elem.contentWindow||elem).document||elem.ownerDocument||elem;return $.browser.safari||doc.compatMode=='BackCompat'?doc.body:doc.documentElement;});};$.fn.scrollTo=function(target,duration,settings){if(typeof duration=='object'){settings=duration;duration=0;}
if(typeof settings=='function')
settings={onAfter:settings};if(target=='max')
target=9e9;settings=$.extend({},$scrollTo.defaults,settings);duration=duration||settings.speed||settings.duration;settings.queue=settings.queue&&settings.axis.length>1;if(settings.queue)
duration/=2;settings.offset=both(settings.offset);settings.over=both(settings.over);return this._scrollable().each(function(){var elem=this,$elem=$(elem),targ=target,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break;}
targ=$(targ,this);case'object':if(targ.is||targ.style)
toff=(targ=$(targ)).offset();}
$.each(settings.axis.split(''),function(i,axis){var Pos=axis=='x'?'Left':'Top',pos=Pos.toLowerCase(),key='scroll'+Pos,old=elem[key],max=$scrollTo.max(elem,axis);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(settings.margin){attr[key]-=parseInt(targ.css('margin'+Pos))||0;attr[key]-=parseInt(targ.css('border'+Pos+'Width'))||0;}
attr[key]+=settings.offset[pos]||0;if(settings.over[pos])
attr[key]+=targ[axis=='x'?'width':'height']()*settings.over[pos];}else{var val=targ[pos];if(typeof(val)!='undefined'){attr[key]=val.slice&&val.slice(-1)=='%'?parseFloat(val)/100*max:val;}}
if(/^\d+$/.test(attr[key]))
attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&settings.queue){if(old!=attr[key])
animate(settings.onAfterFirst);delete attr[key];}});animate(settings.onAfter);function animate(callback){$elem.animate(attr,duration,settings.easing,callback&&function(){callback.call(this,target,settings);});};}).end();};$scrollTo.max=function(elem,axis){var Dim=axis=='x'?'Width':'Height',scroll='scroll'+Dim;if(!$(elem).is('html,body'))
return elem[scroll]-$(elem)[Dim.toLowerCase()]();var size='client'+Dim,html=elem.ownerDocument.documentElement,body=elem.ownerDocument.body;return Math.max(html[scroll],body[scroll])
-Math.min(html[size],body[size]);};function both(val){return typeof val=='object'?val:{top:val,left:val};};})(jQuery);;(function($){var URI=location.href.replace(/#.*/,'');var $localScroll=$.localScroll=function(settings){$('body').localScroll(settings);};$localScroll.defaults={duration:1000,axis:'y',event:'click',stop:true,target:window,reset:true};$localScroll.hash=function(settings){if(location.hash){settings=$.extend({},$localScroll.defaults,settings);settings.hash=false;if(settings.reset){var d=settings.duration;delete settings.duration;$(settings.target).scrollTo(0,settings);settings.duration=d;}
scroll(0,location,settings);}};$.fn.localScroll=function(settings){settings=$.extend({},$localScroll.defaults,settings);return settings.lazy?this.bind(settings.event,function(e){var a=$([e.target,e.target.parentNode]).filter(filter)[0];if(a)
scroll(e,a,settings);}):this.find('a,area').filter(filter).bind(settings.event,function(e){scroll(e,this,settings);}).end().end();function filter(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==URI&&(!settings.filter||$(this).is(settings.filter));};};function scroll(e,link,settings){var id=link.hash.slice(1),elem=document.getElementById(id)||document.getElementsByName(id)[0];if(!elem)
return;if(e)
e.preventDefault();var $target=$(settings.target);if(settings.lock&&$target.is(':animated')||settings.onBefore&&settings.onBefore.call(settings,e,elem,$target)===false)
return;if(settings.stop)
$target.stop(true);if(settings.hash){var attr=elem.id==id?'id':'name',$a=$('<a> </a>').attr(attr,id).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});elem[attr]='';$('body').prepend($a);location=link.hash;$a.remove();elem[attr]=id;}
$target.scrollTo(elem,settings).trigger('notify.serialScroll',[elem]);};})(jQuery);(function($)
{$.jet.services.localScroll={start:false,options:{lazy:true,filter:'a',duration:200,axis:'y',offset:{left:0,top:0}},init:function(){var $anchor,anchor;$.localScroll(this.options);anchor=location.href.match(/^#([a-zà-ÿ0-9_-]+)$/);anchor!==null&&($anchor=$('a[name='+anchor[1]+']'));$anchor&&$anchor.length>0&&$.scrollTo($anchor,this.options);}};})(jQuery);(function($){$.jet.services.goTop={start:true,options:{speed:100},init:function(){$.goTop(this.options);}};var _init=false;$.goTop=function(config)
{if(!_init&&$.fn.scrollTop){config=$.extend({template:'<div style="display:block;" id="gotop"><a href="javascript:void(0);"></a></div>',speed:100,min:100,checkDelay:200},config);var _$goTop=$(config.template).hide().click(function(){$('html,body').animate({scrollTop:0},config.speed);}).prependTo('body'),_scrollTimeout,_check=function()
{if($(window).scrollTop()>config.min)
{_$goTop.fadeIn(config.speed);}
else
{_$goTop.fadeOut(config.speed);}};$(window).scroll(function scrollTemporizer(){clearTimeout(_scrollTimeout);_scrollTimeout=setTimeout(_check,config.checkDelay);}).ready(_check);_init=true;}
return this;};})(jQuery);jQuery.fn.extend({findPos:function(){obj=jQuery(this).get(0);if(typeof(obj)=='undefined'){return{x:-5000,y:-5000};}
var curleft=obj.offsetLeft||0;var curtop=obj.offsetTop||0;while(obj=obj.offsetParent)
{curleft+=obj.offsetLeft;curtop+=obj.offsetTop;}
return{x:curleft,y:curtop};}});jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}
var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}
expires='; expires='+date.toUTCString();}
var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(unescape(cookie.substring(name.length+1)));break;}}}
return cookieValue;}};(function($)
{$.localCache={};$.ajaxProcess=$.ajax;$.ajaxLocalCacheDefaultOptions={localCache:false,localStorage:$.support.localStorage,localCacheTimeout:2*24*60*60*1000,storageDelay:1000,storageName:'ajaxLocalCache',localCacheTimeoutEmpty:2*60*1000,isEmptyContent:function(){return false;},maxLocalStorageLength:1024*100,overflowDeletionSize:10,isSibling:false,corePacket:true,success:function(){},complete:function(){}};$.ajax=function(acOptions)
{if((typeof acOptions.type=='string'&&acOptions.type=='post'))
{return $.ajaxProcess(acOptions);}
acOptions=$.extend({},$.ajaxLocalCacheDefaultOptions,acOptions,{cacheKey:acOptions.url+'_'
+(typeof(acOptions.data)==='string'?acOptions.data:($.isEmptyObject(acOptions.data)?'':(function(data){var key='';for(var i in data)
{key+='_'+data[i];}
return key;})(acOptions.data)))});acOptions.localStorage=acOptions.localStorage&&$.ajaxLocalCacheDefaultOptions.localStorage;if(acOptions.localStorage)
{var local=localStorage.getItem(acOptions.storageName);if(typeof(local)!='string'||!($.localCache[acOptions.storageName]=JSON.parse(local))){$.localCache={};$.localCache[acOptions.storageName]={};}}
var success=acOptions.success,complete=acOptions.complete,readLocal=function(key)
{return($.isEmptyObject($.localCache[acOptions.storageName])||typeof($.localCache[acOptions.storageName][key])=='undefined'?false:(typeof($.localCache[acOptions.storageName][key].timeStamp)=='undefined'||((new Date().getTime())-$.localCache[acOptions.storageName][key].timeStamp)>acOptions.localCacheTimeout?(acOptions.localCacheTimeout<=0?$.localCache[acOptions.storageName][key]:false):$.localCache[acOptions.storageName][key]));},writeLocal=function(key,val)
{typeof $.localCache[acOptions.storageName]=='undefined'&&($.localCache[acOptions.storageName]=[]);$.localCache[acOptions.storageName][key]=$.extend(val,{timeStamp:new Date().getTime()});if(acOptions.localStorage)
{var store=JSON.stringify($.localCache[acOptions.storageName]);if(store.length>acOptions.maxLocalStorageLength)
{var idel=0;for(var lkey in $.localCache[acOptions.storageName])
{idel++;delete $.localCache[acOptions.storageName][lkey];if(idel==acOptions.overflowDeletionSize){break;}}
store=JSON.stringify($.localCache[acOptions.storageName]);}
setTimeout(function(){localStorage.setItem(acOptions.storageName,store);},acOptions.storageDelay);}},checkSibling=function()
{var b=false;for(var k in $.localCache[acOptions.storageName])
{b=acOptions.isSibling(acOptions,$.localCache[acOptions.storageName][k]);if(b!==false){break;}}
return b;},cache=readLocal(acOptions.cacheKey),sibling=typeof(acOptions.isSibling)=='function'?checkSibling():false;acOptions.corePacket&&acOptions.dataType=='json'&&(acOptions.complete=function(jqXHR,textStatus){var json;acOptions.corePacket&&(json=$.core.packet.read(jqXHR,textStatus));return complete(jqXHR,textStatus,json);});if(acOptions.localCache&&((typeof(cache)!='undefined'&&cache)||sibling!==false))
{cache===false&&(cache=sibling);typeof(acOptions.complete)=='function'&&acOptions.complete(cache.XMLHttpRequest,cache.textStatus);return success(cache.result,cache.textStatus,cache.XMLHttpRequest);}
acOptions.success=function(data,textStatus,XMLHttpRequest)
{if(typeof(XMLHttpRequest)=='undefined')
{acOptions.isEmptyContent(data,textStatus)&&(acOptions.localCacheTimeout=acOptions.localCacheTimeoutEmpty);}
else{var c=parseInt((''+XMLHttpRequest.status).substring(0,1));(XMLHttpRequest.status==204||c==4||c==5||(XMLHttpRequest.status===0&&acOptions.isEmptyContent(data,textStatus,XMLHttpRequest)))&&(acOptions.localCacheTimeout=acOptions.localCacheTimeoutEmpty);}
acOptions.localCache&&writeLocal(acOptions.cacheKey,{result:data,textStatus:textStatus,XMLHttpRequest:XMLHttpRequest,url:acOptions.url,data:acOptions.data});return success.call(this,data,textStatus,XMLHttpRequest);};return $.ajaxProcess(acOptions);};})(jQuery);(function($)
{$.fn.inputRangeSetEnd=function()
{this.each(function()
{$(this).inputRangeSet($(this).val().length);});};$.fn.inputRangeGet=function()
{var e=this.jquery?this[0]:this;return(('selectionStart'in e&&function(){var l=e.selectionEnd-e.selectionStart;return{start:e.selectionStart,end:e.selectionEnd,length:l,text:e.value.substr(e.selectionStart,l)};})||(document.selection&&function(){e.focus();var r=document.selection.createRange();if(r===null){return{start:0,end:e.value.length,length:0};}
var re=e.createTextRange();var rc=re.duplicate();re.moveToBookmark(r.getBookmark());rc.setEndPoint('EndToStart',re);return{start:rc.text.length,end:rc.text.length+r.text.length,length:r.text.length,text:r.text};})||function(){return{start:0,end:e.value.length,length:0};})();};$.fn.inputRangeReplace=function(start,end,content,select)
{select=select||false;return this.each(function()
{var
$this=$(this),val=$this.val(),before=val.substring(0,start),after=val.substr(end);$this.val(before+content+after);select&&$this.inputRangeSet(start,start+content.length)||$this.inputRangeSet(start+content.length);});};$.fn.inputRangeSet=function(startPosition,endPosition)
{endPosition=endPosition||startPosition;return this.each(function()
{if(this.setSelectionRange){this.setSelectionRange(startPosition,endPosition);}else if(this.createTextRange){var _r=this.createTextRange();_r.collapse(true);_r.moveEnd('character',startPosition);_r.moveStart('character',endPosition);_r.select();}});};})(jQuery);(function($)
{$.fn.ccmCheckbox=function()
{return this.each(function()
{var self=$(this),chbx=$('<span class="'+((self.attr('checked')==='checked'||self.attr('checked')===true)?'checked':'nocheck')+'"></span>');if(typeof self.attr('ccmcheck')!=='undefined'){return;}
self.attr('ccmcheck',1).parent().prepend(chbx).css("cursor","pointer");self.parent().find('.checked,.nocheck,label[for='+self.attr('id')+']').bind('click',function(e){e.preventDefault();$.profile&&console.time('ccmCheckbox.click');var status=self.attr('checked');if(status===undefined||status===false){$.profile&&console.info('ccmCheckbox.checking');chbx.removeClass('nocheck').addClass('checked');self.attr('checked',true);}else{$.profile&&console.info('ccmCheckbox.unchecking');chbx.removeClass('checked').addClass('nocheck');self.attr('checked',false);}
$.profile&&console.timeEnd('ccmCheckbox.click');});});};})(jQuery);(function($){'$:nomunge';$.fn.replaceText=function(search,replace,text_only){return this.each(function(){var node=this.firstChild,val,new_val,remove=[];if(node){do{if(node.nodeType===3){val=$.halfEscape(node.nodeValue,{'<':'&lt;','>':'&gt;'});new_val=val.replace(search,replace);if(new_val!==val){if(!text_only&&/</.test(new_val)){$(node).before(new_val);remove.push(node);}else{node.nodeValue=new_val;}}}}while(node=node.nextSibling);}
remove.length&&$(remove).remove();});};})(jQuery);(function($)
{$.mark={markPureText:function(text,textToMark)
{return text.replace($.mark.prepareRegExp(textToMark),function(r)
{return $.microTemplate.getTemplate($.mark.options.nodeTemplate,{text:r});},true);},prepareRegExp:function(mark)
{return new RegExp($.trim(mark).split(' ').join('|').replace(/([\\\\\\\^\\\$\\\.\\\|\\\?\\\*\\\+\\\(\\\)\\\{\\\}])/g,function(a){return'\\\\\\'+a;}),'gi');},options:{nodeTemplate:"<mark>${text}</mark>"}};$.fn.mark=function(str)
{var r=$.mark.prepareRegExp(str);return this.each(function()
{$(this).replaceText(r,function(r){return $.microTemplate.getTemplate($.mark.options.nodeTemplate,{text:r});},false);});};})(jQuery);(function($)
{if(typeof $.ui=='undefined'){return;}
$.ccmComplete={opened:false};$.widget("custom.ccmComplete",$.ui.autocomplete,$.extend((typeof $.ui.autocomplete.prototype.__response=='function'?{__response:function(content,data)
{if(content){content=this._normalize(content);}
this._trigger("response",null,{content:content});if(!this.options.disabled&&content&&content.length&&!this.cancelSearch){this._suggest(content,data);this._trigger("open");}else{this._close();}}}:{_response:function(content,data)
{if(this.element.is(':visible')&&content&&content.length){content=this._normalize(content);this._suggest(content,data);this._trigger("open");var self=this;setTimeout(function(){if(!self.element.is(':visible')){self.close.apply(self);}},2000);}else{this.close();}
this.element.removeClass("ui-autocomplete-loading");}}),{options:{defaultClassNameContener:'inlineBlock box3 ',attrUl:undefined},_renderMenu:function(ul,items)
{var self=this,currentCategory='';typeof(self.options.onMenu)=='function'&&self.options.onMenu.apply(this,[items]);this.menu.options.blur=function(){};if(ul.parent()[0].tagName=='BODY')
{var parent=ul.bind('mouseleave',function(e)
{ul.is(':visible')&&typeof(self.options.mouseout)=='function'&&self.options.mouseout.apply(this,[e,items]);}).attr($.extend(true,{},(self.options.attrUl!=undefined)?self.options.attrUl:{})).wrap('<div>').parent().css({'z-index':(typeof self.options.anchor==='object'?self.options.anchor.zIndex()+1:'111'),position:self.options.fixed?'fixed':''}).addClass(self.options.defaultClassNameContener+'autoComplete '+(typeof self.options.className=='string'?self.options.className:'')).attr({viewBox:true});parent.find('*').attr({viewBox:true});if(self.options.footer)
{var footer;switch(typeof(self.options.footer))
{case'function':footer=self.options.footer.apply(self,[parent]);break;default:case'string':footer=self.options.footer;}
parent.append($('<div class="footer"></div>').append($(footer).find('*').each(function()
{if(!$(this).hasClass('cancel')){$(this).attr('viewBox','true');}})));}
if(self.options.header)
{var header;switch(typeof(self.options.header))
{case'function':header=self.options.header.apply(self,[parent]);break;default:case'string':header=self.options.header;}
parent.prepend($('<div class="header"></div>').append($(footer).find('*').each(function()
{if(!$(this).hasClass('cancel')){$(this).attr('viewBox','true');}})));}}
$.each(items,function(index,item)
{if(typeof item.category!='undefined'&&item.category!=currentCategory)
{ul.append("<li class='ui-autocomplete-category'>"+item.category+"</li>");currentCategory=item.category;}
self._renderItem(ul,item);});},_renderItem:function(ul,item)
{var a=$("<a>").attr({'viewBox':'true','href':typeof item.url=='string'?item.url:'javascript:void(0);'}).append($.type(item.label)=='string'?item.label.indexOf('<')!=-1?$('<div>'+item.label+'</div>'):item.label:(($.type(item.label)=='object')&&typeof item.label.jquery=='string'?item.label:''));typeof item.className=='string'&&a.addClass(item.className);return $("<li>").attr({'viewBox':'true'}).data("item.autocomplete",item).append(a).appendTo(ul);},_suggest:function(items,data){$.ccmComplete.opened=true;var ul=this.menu.element.empty().zIndex(this.element.zIndex()+1),parent=this.element.parent(),w=(typeof(this.options.anchor)==='object'?this.options.anchor.parent().width():parent.parent().width());$.profile&&console.time('3: _renderMenu');this._renderMenu(ul,items);$.profile&&console.timeEnd('3: _renderMenu');if(this.options.footer&&typeof(this.options.footer)=='function')
{ul.parent().find('.footer').html('').append($(this.options.footer.apply(this,[parent,items,data])));}
if(this.options.header&&typeof(this.options.header)=='function')
{ul.parent().find('.header').html('').append($(this.options.header.apply(this,[parent,items,data])));}
typeof this.menu.deactivate=='function'&&this.menu.deactivate();this.menu.refresh();ul.css('width',w+'px').fadeIn(100).parent().css('width',w+'px').show().position($.extend({of:(typeof(this.options.anchor)==='object'?this.options.anchor:parent)},this.options.position));typeof this.options.preSelectFirst=='boolean'&&this.options.preSelectFirst&&this._move("next",$.Event("click"));},close:function(event){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this._trigger("close",event);this.menu.element.parent().fadeOut(100);setTimeout(function(){jQuery.ccmComplete.opened=false;},300);typeof this.menu.deactivate=='function'&&this.menu.deactivate();}},_move:function(direction,event)
{if(!this.menu.element.is(":visible")){this.search(null,event);return;}
if(this.menu.first()&&/^previous/.test(direction)||this.menu.last()&&/^next/.test(direction)){this.menu.element.is(":visible")&&typeof(this.options.mouseout)=='function'&&this.options.mouseout.apply(this,[event]);this.element.val(this.term);typeof this.menu.deactivate=='function'&&this.menu.deactivate();return;}
this.menu[direction](event);}}));}(jQuery));(function($){$.ccmPaginator=function(options){options=$.extend(true,{getController:function(){return[$data.common.baseUrl,'/c/xhr_updateposition'].join('');},updateMode:'incremental',templateList:'<ol/>',templateItem:'<li/>',templateLink:'<a/>',templateImg:'<img/>',templateBody:'<div/>',templateAdd:'<li class="add"><a href="javascript:void(0);">+</a></li>',onAdd:function(e){console.log('defaultAdd function');},itemMarker:'pageItem',dataName:'paginatorData',data:[],titleLength:20,overFlowChar:'&hellip;',tipsyOptions:{gravity:$.fn.tipsy.autoNS,delayIn:100,fade:false,opacity:0.75},sortable:true,firstNotSortable:true,sortableOptions:{},orderedItems:[]},options);var $this=$(options.templateList),i,item,$item,$href,$itemBody,_trimTitle=function(title){return title.substring(0,options.titleLength)+(title.length>options.titleLength?options.overFlowChar:'');};for(i=0;i<options.data.length;++i)
{item=options.data[i];$item=$(options.templateItem);if(i===0&&options.firstNotSortable){$item.bind('dragstart',function(e){e.preventDefault();});}else{$item.addClass(options.itemMarker);}
(item.href&&($href=$(options.templateLink).attr('href',item.href)))||($href=false);if(item.src){$itemBody=$(options.templateImg).attr('src',item.src);}
else{$itemBody=$(options.templateBody).html(item.title?_trimTitle(item.title):i);}
item.title&&$item.attr('title',item.title).tipsy(options.tipsyOptions);item.data&&$item.data(options.dataName,item.data);$href&&$item.append($href);$href&&$itemBody&&$href.append($itemBody);$this.append($item);}
$this.data(options.dataName,options).append($(options.templateAdd).bind('click',options.onAdd));$this.bind('updateItemContent',function(e,id,title){$this.find('.'+options.itemMarker).each(function(){$.core.$fake[0]=this;$.core.$fake.data(options.dataName).id==id&&$.core.$fake.find(options.templateBody.replace(/\W*/gi,'')).html(_trimTitle(title));});});options.sortable&&$this.sortable($.extend(options.sortableOptions,{items:'.'+options.itemMarker})).bind('sortupdate',function(e,ui){$('.tipsy').remove();switch(options.updateMode)
{case'store':var orderedItems=[];$this.find('.'+options.itemMarker).each(function(i)
{$.core.$fake[0]=this;orderedItems.push($.core.$fake.data(options.dataName).id);});$this.data(options.dataName,$.extend($this.data(options.dataName),{orderedItems:orderedItems}));break;default:case'incremental':var ret={prev:null,id:null,pos:null};$this.find('.'+options.itemMarker).each(function(i)
{$.core.$fake[0]=this;if($.core.$fake[0]==ui.item[0])
{ret.id=$.core.$fake.data(options.dataName).id;ret.pos=i;return false;}
ret.prev=$.core.$fake.data(options.dataName).id;});$.ajax({url:options.getController(),dataType:"json",localCache:false,data:ret});break;}});return $this;};})(jQuery);(function($){"use strict";var feature={};feature.fileapi=$("<input type='file'/>").get(0).files!==undefined;feature.formdata=window.FormData!==undefined;$.fn.ajaxSubmit=function(options){if(!this.length){log('ajaxSubmit: skipping submit process - no element selected');return this;}
var method,action,url,$form=this;if(typeof options=='function'){options={success:options};}
method=this.attr('method');action=this.attr('action');url=(typeof action==='string')?$.trim(action):'';url=url||window.location.href||'';if(url){url=(url.match(/^([^#]+)/)||[])[1];}
options=$.extend(true,{url:url,success:$.ajaxSettings.success,type:method||'GET',iframeSrc:/^https/i.test(window.location.href||'')?'javascript:false':'about:blank'},options);var veto={};this.trigger('form-pre-serialize',[this,options,veto]);if(veto.veto){log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');return this;}
if(options.beforeSerialize&&options.beforeSerialize(this,options)===false){log('ajaxSubmit: submit aborted via beforeSerialize callback');return this;}
var traditional=options.traditional;if(traditional===undefined){traditional=$.ajaxSettings.traditional;}
var elements=[];var qx,a=this.formToArray(options.semantic,elements);if(options.data){options.extraData=options.data;qx=$.param(options.data,traditional);}
if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===false){log('ajaxSubmit: submit aborted via beforeSubmit callback');return this;}
this.trigger('form-submit-validate',[a,this,options,veto]);if(veto.veto){log('ajaxSubmit: submit vetoed via form-submit-validate trigger');return this;}
var q=$.param(a,traditional);if(qx){q=(q?(q+'&'+qx):qx);}
if(options.type.toUpperCase()=='GET'){options.url+=(options.url.indexOf('?')>=0?'&':'?')+q;options.data=null;}
else{options.data=q;}
var callbacks=[];if(options.resetForm){callbacks.push(function(){$form.resetForm();});}
if(options.clearForm){callbacks.push(function(){$form.clearForm(options.includeHidden);});}
if(!options.dataType&&options.target){var oldSuccess=options.success||function(){};callbacks.push(function(data){var fn=options.replaceTarget?'replaceWith':'html';$(options.target)[fn](data).each(oldSuccess,arguments);});}
else if(options.success){callbacks.push(options.success);}
options.success=function(data,status,xhr){var context=options.context||options;for(var i=0,max=callbacks.length;i<max;i++){callbacks[i].apply(context,[data,status,xhr||$form,$form]);}};var fileInputs=$('input:file:enabled[value]',this);var hasFileInputs=fileInputs.length>0;var mp='multipart/form-data';var multipart=($form.attr('enctype')==mp||$form.attr('encoding')==mp);var fileAPI=feature.fileapi&&feature.formdata;log("fileAPI :"+fileAPI);var shouldUseFrame=(hasFileInputs||multipart)&&!fileAPI;if(options.iframe!==false&&(options.iframe||shouldUseFrame)){if(options.closeKeepAlive){$.get(options.closeKeepAlive,function(){fileUploadIframe(a);});}
else{fileUploadIframe(a);}}
else if((hasFileInputs||multipart)&&fileAPI){fileUploadXhr(a);}
else{$.ajax(options);}
for(var k=0;k<elements.length;k++)
elements[k]=null;this.trigger('form-submit-notify',[this,options]);return this;function fileUploadXhr(a){var formdata=new FormData();for(var i=0;i<a.length;i++){formdata.append(a[i].name,a[i].value);}
if(options.extraData){for(var p in options.extraData)
if(options.extraData.hasOwnProperty(p))
formdata.append(p,options.extraData[p]);}
options.data=null;var s=$.extend(true,{},$.ajaxSettings,options,{contentType:false,processData:false,cache:false,type:'POST'});if(options.uploadProgress){s.xhr=function(){var xhr=jQuery.ajaxSettings.xhr();if(xhr.upload){xhr.upload.onprogress=function(event){var percent=0;if(event.lengthComputable)
percent=parseInt((event.position/event.total)*100,10);options.uploadProgress(event,event.position,event.total,percent);};}
return xhr;};}
s.data=null;var beforeSend=s.beforeSend;s.beforeSend=function(xhr,o){o.data=formdata;if(beforeSend)
beforeSend.call(o,xhr,options);};$.ajax(s);}
function fileUploadIframe(a){var form=$form[0],el,i,s,g,id,$io,io,xhr,sub,n,timedOut,timeoutHandle;var useProp=!!$.fn.prop;if($(':input[name=submit],:input[id=submit]',form).length){alert('Error: Form elements must not have name or id of "submit".');return;}
if(a){for(i=0;i<elements.length;i++){el=$(elements[i]);if(useProp)
el.prop('disabled',false);else
el.removeAttr('disabled');}}
s=$.extend(true,{},$.ajaxSettings,options);s.context=s.context||s;id='jqFormIO'+(new Date().getTime());if(s.iframeTarget){$io=$(s.iframeTarget);n=$io.attr('name');if(!n)
$io.attr('name',id);else
id=n;}
else{$io=$('<iframe name="'+id+'" src="'+s.iframeSrc+'" />');$io.css({position:'absolute',top:'-1000px',left:'-1000px'});}
io=$io[0];xhr={aborted:0,responseText:null,responseXML:null,status:0,statusText:'n/a',getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(status){var e=(status==='timeout'?'timeout':'aborted');log('aborting upload... '+e);this.aborted=1;$io.attr('src',s.iframeSrc);xhr.error=e;if(s.error)
s.error.call(s.context,xhr,e,status);if(g)
$.event.trigger("ajaxError",[xhr,s,e]);if(s.complete)
s.complete.call(s.context,xhr,e);}};g=s.global;if(g&&0===$.active++){$.event.trigger("ajaxStart");}
if(g){$.event.trigger("ajaxSend",[xhr,s]);}
if(s.beforeSend&&s.beforeSend.call(s.context,xhr,s)===false){if(s.global){$.active--;}
return;}
if(xhr.aborted){return;}
sub=form.clk;if(sub){n=sub.name;if(n&&!sub.disabled){s.extraData=s.extraData||{};s.extraData[n]=sub.value;if(sub.type=="image"){s.extraData[n+'.x']=form.clk_x;s.extraData[n+'.y']=form.clk_y;}}}
var CLIENT_TIMEOUT_ABORT=1;var SERVER_ABORT=2;function getDoc(frame){var doc=frame.contentWindow?frame.contentWindow.document:frame.contentDocument?frame.contentDocument:frame.document;return doc;}
var csrf_token=$('meta[name=csrf-token]').attr('content');var csrf_param=$('meta[name=csrf-param]').attr('content');if(csrf_param&&csrf_token){s.extraData=s.extraData||{};s.extraData[csrf_param]=csrf_token;}
function doSubmit(){var t=$form.attr('target'),a=$form.attr('action');form.setAttribute('target',id);if(!method){form.setAttribute('method','POST');}
if(a!=s.url){form.setAttribute('action',s.url);}
if(!s.skipEncodingOverride&&(!method||/post/i.test(method))){$form.attr({encoding:'multipart/form-data',enctype:'multipart/form-data'});}
if(s.timeout){timeoutHandle=setTimeout(function(){timedOut=true;cb(CLIENT_TIMEOUT_ABORT);},s.timeout);}
function checkState(){try{var state=getDoc(io).readyState;log('state = '+state);if(state&&state.toLowerCase()=='uninitialized')
setTimeout(checkState,50);}
catch(e){log('Server abort: ',e,' (',e.name,')');cb(SERVER_ABORT);if(timeoutHandle)
clearTimeout(timeoutHandle);timeoutHandle=undefined;}}
var extraInputs=[];try{if(s.extraData){for(var n in s.extraData){if(s.extraData.hasOwnProperty(n)){extraInputs.push($('<input type="hidden" name="'+n+'">').attr('value',s.extraData[n]).appendTo(form)[0]);}}}
if(!s.iframeTarget){$io.appendTo('body');if(io.attachEvent)
io.attachEvent('onload',cb);else
io.addEventListener('load',cb,false);}
setTimeout(checkState,15);form.submit();}
finally{form.setAttribute('action',a);if(t){form.setAttribute('target',t);}else{$form.removeAttr('target');}
$(extraInputs).remove();}}
if(s.forceSync){doSubmit();}
else{setTimeout(doSubmit,10);}
var data,doc,domCheckCount=50,callbackProcessed;function cb(e){if(xhr.aborted||callbackProcessed){return;}
try{doc=getDoc(io);}
catch(ex){log('cannot access response document: ',ex);e=SERVER_ABORT;}
if(e===CLIENT_TIMEOUT_ABORT&&xhr){xhr.abort('timeout');return;}
else if(e==SERVER_ABORT&&xhr){xhr.abort('server abort');return;}
if(!doc||doc.location.href==s.iframeSrc){if(!timedOut)
return;}
if(io.detachEvent)
io.detachEvent('onload',cb);else
io.removeEventListener('load',cb,false);var status='success',errMsg;try{if(timedOut){throw'timeout';}
var isXml=s.dataType=='xml'||doc.XMLDocument||$.isXMLDoc(doc);log('isXml='+isXml);if(!isXml&&window.opera&&(doc.body===null||!doc.body.innerHTML)){if(--domCheckCount){log('requeing onLoad callback, DOM not available');setTimeout(cb,250);return;}}
var docRoot=doc.body?doc.body:doc.documentElement;xhr.responseText=docRoot?docRoot.innerHTML:null;xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;if(isXml)
s.dataType='xml';xhr.getResponseHeader=function(header){var headers={'content-type':s.dataType};return headers[header];};if(docRoot){xhr.status=Number(docRoot.getAttribute('status'))||xhr.status;xhr.statusText=docRoot.getAttribute('statusText')||xhr.statusText;}
var dt=(s.dataType||'').toLowerCase();var scr=/(json|script|text)/.test(dt);if(scr||s.textarea){var ta=doc.getElementsByTagName('textarea')[0];if(ta){xhr.responseText=ta.value;xhr.status=Number(ta.getAttribute('status'))||xhr.status;xhr.statusText=ta.getAttribute('statusText')||xhr.statusText;}
else if(scr){var pre=doc.getElementsByTagName('pre')[0];var b=doc.getElementsByTagName('body')[0];if(pre){xhr.responseText=pre.textContent?pre.textContent:pre.innerText;}
else if(b){xhr.responseText=b.textContent?b.textContent:b.innerText;}}}
else if(dt=='xml'&&!xhr.responseXML&&xhr.responseText){xhr.responseXML=toXml(xhr.responseText);}
try{data=httpData(xhr,dt,s);}
catch(e){status='parsererror';xhr.error=errMsg=(e||status);}}
catch(e){log('error caught: ',e);status='error';xhr.error=errMsg=(e||status);}
if(xhr.aborted){log('upload aborted');status=null;}
if(xhr.status){status=(xhr.status>=200&&xhr.status<300||xhr.status===304)?'success':'error';}
if(status==='success'){if(s.success)
s.success.call(s.context,data,'success',xhr);if(g)
$.event.trigger("ajaxSuccess",[xhr,s]);}
else if(status){if(errMsg===undefined)
errMsg=xhr.statusText;if(s.error)
s.error.call(s.context,xhr,status,errMsg);if(g)
$.event.trigger("ajaxError",[xhr,s,errMsg]);}
if(g)
$.event.trigger("ajaxComplete",[xhr,s]);if(g&&!--$.active){$.event.trigger("ajaxStop");}
if(s.complete)
s.complete.call(s.context,xhr,status);callbackProcessed=true;if(s.timeout)
clearTimeout(timeoutHandle);setTimeout(function(){if(!s.iframeTarget)
$io.remove();xhr.responseXML=null;},100);}
var toXml=$.parseXML||function(s,doc){if(window.ActiveXObject){doc=new ActiveXObject('Microsoft.XMLDOM');doc.async='false';doc.loadXML(s);}
else{doc=(new DOMParser()).parseFromString(s,'text/xml');}
return(doc&&doc.documentElement&&doc.documentElement.nodeName!='parsererror')?doc:null;};var parseJSON=$.parseJSON||function(s){return window['eval']('('+s+')');};var httpData=function(xhr,type,s){var ct=xhr.getResponseHeader('content-type')||'',xml=type==='xml'||!type&&ct.indexOf('xml')>=0,data=xml?xhr.responseXML:xhr.responseText;if(xml&&data.documentElement.nodeName==='parsererror'){if($.error)
$.error('parsererror');}
if(s&&s.dataFilter){data=s.dataFilter(data,type);}
if(typeof data==='string'){if(type==='json'||!type&&ct.indexOf('json')>=0){data=parseJSON(data);}else if(type==="script"||!type&&ct.indexOf("javascript")>=0){$.globalEval(data);}}
return data;};}};$.fn.ajaxForm=function(options){options=options||{};options.delegation=options.delegation&&$.isFunction($.fn.on);if(!options.delegation&&this.length===0){var o={s:this.selector,c:this.context};if(!$.isReady&&o.s){log('DOM not ready, queuing ajaxForm');$(function(){$(o.s,o.c).ajaxForm(options);});return this;}
log('terminating; zero elements found by selector'+($.isReady?'':' (DOM not ready)'));return this;}
if(options.delegation){$(document).off('submit.form-plugin',this.selector,doAjaxSubmit).off('click.form-plugin',this.selector,captureSubmittingElement).on('submit.form-plugin',this.selector,options,doAjaxSubmit).on('click.form-plugin',this.selector,options,captureSubmittingElement);return this;}
return this.ajaxFormUnbind().bind('submit.form-plugin',options,doAjaxSubmit).bind('click.form-plugin',options,captureSubmittingElement);};function doAjaxSubmit(e){var options=e.data;if(!e.isDefaultPrevented()){e.preventDefault();$(this).ajaxSubmit(options);}}
function captureSubmittingElement(e){var target=e.target;var $el=$(target);if(!($el.is(":submit,input:image"))){var t=$el.closest(':submit');if(t.length===0){return;}
target=t[0];}
var form=this;form.clk=target;if(target.type=='image'){if(e.offsetX!==undefined){form.clk_x=e.offsetX;form.clk_y=e.offsetY;}else if(typeof $.fn.offset=='function'){var offset=$el.offset();form.clk_x=e.pageX-offset.left;form.clk_y=e.pageY-offset.top;}else{form.clk_x=e.pageX-target.offsetLeft;form.clk_y=e.pageY-target.offsetTop;}}
setTimeout(function(){form.clk=form.clk_x=form.clk_y=null;},100);}
$.fn.ajaxFormUnbind=function(){return this.unbind('submit.form-plugin click.form-plugin');};$.fn.formToArray=function(semantic,elements){var a=[];if(this.length===0){return a;}
var form=this[0];var els=semantic?form.getElementsByTagName('*'):form.elements;if(!els){return a;}
var i,j,n,v,el,max,jmax;for(i=0,max=els.length;i<max;i++){el=els[i];n=el.name;if(!n){continue;}
if(semantic&&form.clk&&el.type=="image"){if(!el.disabled&&form.clk==el){a.push({name:n,value:$(el).val(),type:el.type});a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});}
continue;}
v=$.fieldValue(el,true);if(v&&v.constructor==Array){if(elements)
elements.push(el);for(j=0,jmax=v.length;j<jmax;j++){a.push({name:n,value:v[j]});}}
else if(feature.fileapi&&el.type=='file'&&!el.disabled){if(elements)
elements.push(el);var files=el.files;for(j=0;j<files.length;j++){a.push({name:n,value:files[j],type:el.type});}}
else if(v!==null&&typeof v!='undefined'){if(elements)
elements.push(el);a.push({name:n,value:v,type:el.type});}}
if(!semantic&&form.clk){var $input=$(form.clk),input=$input[0];n=input.name;if(n&&!input.disabled&&input.type=='image'){a.push({name:n,value:$input.val()});a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});}}
return a;};$.fn.formSerialize=function(semantic){return $.param(this.formToArray(semantic));};$.fn.fieldSerialize=function(successful){var a=[];this.each(function(){var n=this.name;if(!n){return;}
var v=$.fieldValue(this,successful);if(v&&v.constructor==Array){for(var i=0,max=v.length;i<max;i++){a.push({name:n,value:v[i]});}}
else if(v!==null&&typeof v!='undefined'){a.push({name:this.name,value:v});}});return $.param(a);};$.fn.fieldValue=function(successful){for(var val=[],i=0,max=this.length;i<max;i++){var el=this[i];var v=$.fieldValue(el,successful);if(v===null||typeof v=='undefined'||(v.constructor==Array&&!v.length)){continue;}
if(v.constructor==Array)
$.merge(val,v);else
val.push(v);}
return val;};$.fieldValue=function(el,successful){var n=el.name,t=el.type,tag=el.tagName.toLowerCase();if(successful===undefined){successful=true;}
if(successful&&(!n||el.disabled||t=='reset'||t=='button'||(t=='checkbox'||t=='radio')&&!el.checked||(t=='submit'||t=='image')&&el.form&&el.form.clk!=el||tag=='select'&&el.selectedIndex==-1)){return null;}
if(tag=='select'){var index=el.selectedIndex;if(index<0){return null;}
var a=[],ops=el.options;var one=(t=='select-one');var max=(one?index+1:ops.length);for(var i=(one?index:0);i<max;i++){var op=ops[i];if(op.selected){var v=op.value;if(!v){v=(op.attributes&&op.attributes['value']&&!(op.attributes['value'].specified))?op.text:op.value;}
if(one){return v;}
a.push(v);}}
return a;}
return $(el).val();};$.fn.clearForm=function(includeHidden){return this.each(function(){$('input,select,textarea',this).clearFields(includeHidden);});};$.fn.clearFields=$.fn.clearInputs=function(includeHidden){var re=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var t=this.type,tag=this.tagName.toLowerCase();if(re.test(t)||tag=='textarea'||(includeHidden&&/hidden/.test(t))){this.value='';}
else if(t=='checkbox'||t=='radio'){this.checked=false;}
else if(tag=='select'){this.selectedIndex=-1;}});};$.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=='function'||(typeof this.reset=='object'&&!this.reset.nodeType)){this.reset();}});};$.fn.enable=function(b){if(b===undefined){b=true;}
return this.each(function(){this.disabled=!b;});};$.fn.selected=function(select){if(select===undefined){select=true;}
return this.each(function(){var t=this.type;if(t=='checkbox'||t=='radio'){this.checked=select;}
else if(this.tagName.toLowerCase()=='option'){var $sel=$(this).parent('select');if(select&&$sel[0]&&$sel[0].type=='select-one'){$sel.find('option').selected(false);}
this.selected=select;}});};$.fn.ajaxSubmit.debug=false;function log(){if(!$.fn.ajaxSubmit.debug)
return;var msg='[jquery.form] '+Array.prototype.join.call(arguments,'');if(window.console&&window.console.log){window.console.log(msg);}
else if(window.opera&&window.opera.postError){window.opera.postError(msg);}}})(jQuery);(function($){'use strict';$.fn.showInputError=function(msg)
{msg=msg||'undefined';return this.each(function(){$.core.$fake[0]=this;$.core.$fake.closest(".line,.jFormLine").addClass('lineError jFormLineError').find('.msg,.jMsg').html(msg).show();});};$.fn.hideInputError=function()
{return this.each(function(){$.core.$fake[0]=this;$.core.$fake.closest(".line,.jFormLine").removeClass('lineError jFormLineError').find('.msg,.jMsg').html('').hide();});};$.fn.hideFormError=function()
{return this.each(function(){$.core.$fake[0]=this;$.core.$fake.find('.lineError,.jFormLineError').removeClass('lineError jFormLineError').find('.msg,.jMsg').hide();});};}(jQuery));(function($)
{$.fn.sudoSlider=function(optionsOrg)
{var falsev=!1,truev=!falsev,defaults={controlsShow:truev,controlsFadeSpeed:400,controlsFade:truev,insertAfter:truev,firstShow:falsev,lastShow:falsev,vertical:falsev,speed:800,ease:'swing',auto:falsev,pause:2000,continuous:falsev,prevNext:truev,numeric:falsev,numericAttr:'class="controls"',numericText:[],clickableAni:falsev,history:falsev,speedhistory:400,autoheight:truev,customLink:falsev,fade:falsev,crossFade:truev,fadespeed:1000,updateBefore:falsev,ajax:falsev,preloadAjax:100,startSlide:falsev,ajaxLoadFunction:falsev,beforeAniFunc:falsev,afterAniFunc:falsev,uncurrentFunc:falsev,currentFunc:falsev,prevHtml:'<a href="#" class="prevBtn"> previous </a>',nextHtml:'<a href="#" class="nextBtn"> next </a>',loadingText:'Loading Content...',firstHtml:'<a href="#" class="firstBtn"> first </a>',controlsAttr:'id="controls"',lastHtml:'<a href="#" class="lastBtn"> last </a>',autowidth:truev,slideCount:1,resumePause:falsev,moveCount:1,overflow:truev,relElement:'rel'},baseSlider=this;optionsOrg=$.extend(defaults,optionsOrg);return this.each(function()
{var init,ul,li,liConti,s,t,ot,ts,overflow,clickable,buttonclicked,fading,ajaxloading,numericControls,numericContainer,destroyed,controls,html,firstbutton,lastbutton,nextbutton,prevbutton,timeout,destroyT,oldSpeed,dontCountinue,dontCountinueFade,autoOn,a,b,i,continuousClones,orgSlideCount,beforeAniFuncFired=falsev,asyncTimedLoad,callBackList=[],obj=$(this),options=optionsOrg,option=[],bigNumber=10000000;initSudoSlider(obj,falsev);function initSudoSlider(obj,destroyT)
{b=0;for(a in options){option[b]=options[a];b++;}
destroyed=falsev;init=truev;ul=obj.children("ul");li=ul.children("li");s=li.length;if(s<=0){return;}
if(option[25])
{if(ul.length==0)obj.append(ul=$('<ul></ul>'));if(option[25].length>s)
{for(a=1;a<=option[25].length-s;a++)ul.append('<li><p>'+option[35]+'</p></li>');li=ul.children("li");s=li.length;}}
t=0;ot=t;ts=s-1;clickable=truev;buttonclicked=falsev;fading=falsev;ajaxloading=falsev;numericControls=[];destroyed=falsev;if(obj.css("position")=="static")obj.css("position","relative");li.css({'float':'left','display':'block'});option[40]=parseInt10(option[40])
option[42]--;orgSlideCount=option[40];overflow=ts-orgSlideCount;if(!option[21])option[40]+=option[42];option[27]=parseInt10(option[27])||1;continuousClones=option[11]&&(!option[21]||option[40]>1);for(a=0;a<s;a++)
{option[15][a]=option[15][a]||(a+1);option[25][a]=option[25][a]||falsev;}
for(i=0;i<s;i++)
{if(callBackList[i]==undefined)callBackList[i]=[];callBackList[i].push(li.eq(i));}
if(continuousClones)
{for(i=option[40];i>=1;i--)
{var appendRealPos=getRealPos(-option[40]+i-1);var prependRealPos=getRealPos(option[40]-i);var appendClone=li.eq(appendRealPos).clone();var prependClone=li.eq(prependRealPos).clone();callBackList[appendRealPos].push(appendClone);callBackList[prependRealPos].push(prependClone);ul.prepend(appendClone).append(prependClone);}
liConti=ul.children("li");if(option[25])
{for(a=s-option[40];a<s;a++)
{if(option[25][a]&&a!=option[27]-1)ajaxLoad(a,falsev,0,falsev);}}}
option[2]=option[2]&&!option[11];ul[option[6]?'height':'width'](bigNumber);liConti=ul.children("li");controls=falsev;if(option[0])
{controls=$('<span '+option[37]+'></span>');$(obj)[option[3]?'after':'before'](controls);if(option[13]){numericContainer=controls.prepend('<ol '+option[14]+'></ol>').children();b=option[13]=='pages'?orgSlideCount:1;for(a=0;a<s-((option[11]||option[13]=='pages')?1:orgSlideCount)+1;a+=b)
{numericControls[a]=$("<li '+option[44]+'='"+(a+1)+"'><a href='#'><span>"+option[15][a]+"</span></a></li>").appendTo(numericContainer).click(function(){goToSlide($(this).attr(''+option[44]+'')-1,truev);return falsev;});};}
if(option[4])firstbutton=makecontrol(option[36],"first");if(option[5])lastbutton=makecontrol(option[38],"last");if(option[12]){nextbutton=makecontrol(option[34],"next");prevbutton=makecontrol(option[33],"prev");}};if(option[26]===truev)for(i=0;i<=ts;i++)if(option[25][i]&&option[27]-1!=i)ajaxLoad(i,falsev,0,falsev);b=[1,7,10,18,23];for(a in b){option[parseInt10(b[a])]=textSpeedToNumber(option[parseInt10(b[a])]);}
if(option[20])
{$(option[20]).live('click',function(){if(a=$(this).attr(''+option[44]+'')){if(a=='stop')
{option[9]=falsev;stopAuto();}
else if(a=='start')
{timeout=startAuto(option[10]);option[9]=truev;}
else if(a=='block')clickable=falsev;else if(a=='unblock')clickable=truev;else if(clickable)goToSlide((a==parseInt10(a))?a-1:a,truev);}
return falsev;});}
runOnImagesLoaded(liConti.slice(0,option[40]),truev,function()
{if(option[9])timeout=startAuto(option[10]);if(destroyT)animate(destroyT,falsev,falsev,falsev);else if(option[17]){a=$(window);if(i=a.hashchange)
{i(URLChange);}
else if(i=$.address)
{i.change(URLChange);}
else
{a.bind('hashchange',URLChange);}
URLChange();}
else animate(option[27]-1,falsev,falsev,falsev);});}
function URLChange()
{i=filterUrlHash(location.hash.substr(1));if(init)animate(i,falsev,falsev,falsev);else if(i!=t)goToSlide(i,falsev);}
function startAsyncDelayedLoad()
{if(option[25]&&parseInt10(option[26]))
{for(a in option[25])
{if(option[25][a])
{clearTimeout(asyncTimedLoad);asyncTimedLoad=setTimeout(function(){ajaxLoad(a,falsev,0,falsev);},parseInt10(option[26]));break;}}}}
function startAuto(pause)
{autoOn=truev;return setTimeout(function(){goToSlide("next",falsev);},pause);}
function stopAuto()
{clearTimeout(timeout);autoOn=falsev;}
function textSpeedToNumber(speed)
{return(parseInt10(speed)||speed==0)?parseInt10(speed):speed=='fast'?200:(speed=='normal'||speed=='medium')?400:speed=='slow'?600:400;};function makecontrol(html,action)
{return $(html).prependTo(controls).click(function(){goToSlide(action,truev);return falsev;});}
function goToSlide(i,clicked,speed)
{beforeAniFuncFired=falsev;if(!destroyed)
{if(option[9])
{var delay=option[7];if(fading&&option[22])delay=parseInt10((delay)*(3/5));else if(fading)delay=0;if(clicked){stopAuto();if(option[41])timeout=startAuto(delay+option[41]);}
else timeout=startAuto(option[10]+delay);}
if(option[21])
{fadeto(i,clicked,speed);}
else
{if(option[11])
{a=filterDir(i);i=a;var diff=Math.abs(t-a);if(a<option[40]-orgSlideCount+1&&Math.abs(t-a-s)<diff)
{i=a+s;diff=Math.abs(t-a-s);}
if(a>ts-option[40]&&Math.abs(t-a+s)<diff)
{i=a-s;}}
else
{i=filterDir(i);}
animate(i,clicked,truev,falsev,speed);}}};function fadeControl(fadeOpacity,fadetime,nextcontrol)
{if(nextcontrol)
{var eA=nextbutton,eB=lastbutton,directionA='next',directionB='last',firstlastshow=option[5];}
else
{var eA=prevbutton,eB=firstbutton,directionA='prev',directionB='first',firstlastshow=option[4];}
if(option[0])
{if(option[12])eA[fadeOpacity?'fadeIn':'fadeOut'](fadetime);if(firstlastshow)eB[fadeOpacity?'fadeIn':'fadeOut'](fadetime);}
if(option[20])
{$(option[20]).filter(function(index){return($(this).attr(''+option[44]+'')==directionA||$(this).attr(''+option[44]+'')==directionB);})
[fadeOpacity?"fadeIn":"fadeOut"](fadetime);}};function fadeControls(a,fadetime)
{fadeControl(a,fadetime,falsev);fadeControl(a<s-orgSlideCount,fadetime,truev);};function setCurrent(i)
{i=getRealPos(i)+1;if(option[13])for(a in numericControls)setCurrentElement(numericControls[a],i);if(option[20])setCurrentElement($(option[20]),i);};function setCurrentElement(element,i)
{if(element.filter)
{element.filter(".current").removeClass("current").each(function(){if(isFunc(option[31])){option[31].call(this,$(this).attr(''+option[44]+''));}});element.filter(function(){b=$(this).attr(''+option[44]+'');if(option[13]=='pages')
{for(a=0;a<orgSlideCount;a++)
{if(b==i-a)return truev;}}
else return b==i;return falsev;}).addClass("current").each(function(index){if(isFunc(option[32])){option[32].call(this,i);}});}};function filterUrlHash(a)
{for(i in option[15])if(option[15][i]==a)return i;return a?t:0;};function runOnImagesLoaded(target,allSlides,callback)
{var elems=target.add(target.find('img')).filter('img');var len=elems.length;if(!len)
{callback();return this;}
function loadFunction(that)
{$(that).unbind('load').unbind('error');if(that.naturalHeight&&!that.clientHeight)
{$(that).height(that.naturalHeight).width(that.naturalWidth);}
if(allSlides)
{len--;if(len==0)
{callback();}}
else
{callback();}}
elems.each(function(){var that=this;$(that).load(function(){loadFunction(that);}).error(function(){loadFunction(that);});if(that.readyState=="complete")
{$(that).trigger("load");}
else if(that.readyState)
{that.src=that.src;}
else if(that.complete)
{$(that).trigger("load");}
else if(that.complete===undefined)
{var src=that.src;that.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";that.src=src;}});}
function autoadjust(i,speed)
{if(option[19])autoheightwidth(i,speed,truev);if(option[39])autoheightwidth(i,speed,falsev);}
function autoheightwidth(i,speed,axis)
{obj.ready(function(){adjustHeightWidth(i,speed,axis);runOnImagesLoaded(li.eq(i),falsev,function(){adjustHeightWidth(i,speed,axis);});});};function adjustHeightWidth(i,speed,axis)
{var i=getRealPos(i);var target=li.eq(i);b=target[axis?"height":"width"]();obj.animate(axis?{height:b}:{width:b},{queue:falsev,duration:speed,easing:option[8]});}
function adjustPosition()
{if(!option[6])ul.css("margin-left","-"+bigNumber+"px");ul.css("margin-left",getSlidePos(t,false)).css("margin-top",getSlidePos(t,true));};function getSlidePos(slide,vertical)
{var slide=liConti.eq(slide+(continuousClones?option[40]:0));return slide.length?-slide.position()[vertical?'top':'left']:0;};function adjust()
{t=getRealPos(t);if(!option[24])setCurrent(t);adjustPosition();clickable=truev;if(option[17]&&buttonclicked)window.location.hash=option[15][t];if(!fading&&beforeAniFuncFired)
{AniCall(t,truev);}};function AniCall(i,after)
{i=getRealPos(i);for(a in callBackList[i])
{(after?afterAniCall:beforeAniCall)(callBackList[i][a],i+1);}}
function afterAniCall(el,a)
{if(isFunc(option[30]))option[30].call(el,a);}
function beforeAniCall(el,a)
{if(isFunc(option[29]))option[29].call(el,a);}
function filterDir(dir)
{return dir=='next'?getRealPos(t+1+option[42]):dir=='prev'?getRealPos(t-1-option[42]):dir=='first'?0:dir=='last'?ts:parseInt10(dir);};function ajaxLoad(i,adjust,speed,ajaxCallBack)
{if(asyncTimedLoad)clearTimeout(asyncTimedLoad);var target=option[25][i],targetslide=li.eq(i),ajaxInit=speed===truev,speed=(speed===truev)?0:speed,ajaxspeed=(fading)?(!option[22]?parseInt10(option[23]*(2/5)):option[23]):speed,tt=i+1,textloaded=falsev;$.ajax({url:target,success:function(data,textStatus,jqXHR){var type=jqXHR.getResponseHeader('Content-Type').substr(0,5);if(type!='image')
{textloaded=truev;targetslide.html(data);ajaxAdjust(i,speed,ajaxCallBack,adjust,ajaxInit,falsev);}},complete:function(jqXHR){if(!textloaded)
{image=new Image();targetslide.html('').append(image);image.src=target;ajaxAdjust(i,speed,ajaxCallBack,adjust,ajaxInit,truev);}}});option[25][i]=falsev;options.ajax[i]=falsev;};function ajaxAdjust(i,speed,ajaxCallBack,adjust,ajaxInit,img){var target=li.eq(i);if(continuousClones)
{var notFirst=falsev;for(a in callBackList[i])
{if(notFirst)callBackList[i][a].replaceWith($(target).clone());notFirst=truev;}
liConti=ul.children("li");}
if(adjust)autoadjust(i,speed);runOnImagesLoaded(target,truev,function(){if(ajaxInit===truev)adjustPosition();if(isFunc(ajaxCallBack))ajaxCallBack();startAsyncDelayedLoad();});if(isFunc(option[28])){option[28].call(target,parseInt10(i)+1,img);}
if(ajaxCallBack==2)
{AniCall(i,falsev);if(!beforeAniFuncFired)
{AniCall(i,truev);beforeAniFuncFired=truev;}}};function fadeto(i,clicked,ajaxcallback)
{if(filterDir(i)!=t&&!destroyed&&clickable)
{ajaxloading=falsev;if(option[24])setCurrent(filterDir(i));if(!(speed||speed==0))var speed=(!clicked&&!option[9]&&option[17])?option[23]*(option[18]/option[7]):option[23],ll=filterDir(i);if(option[2])fadeControls(ll,option[1]);if(ajaxcallback)
{speed=oldSpeed;if(dontCountinueFade)dontCountinueFade--;}
else if(option[25])
{dontCountinueFade=0;oldSpeed=speed;for(a=ll;a<ll+orgSlideCount;a++)
{if(option[25][a])
{ajaxLoad(getRealPos(a),falsev,speed,function(){fadeto(i,clicked,truev);});dontCountinueFade++;}}}
else
{dontCountinueFade=falsev;}
if(!dontCountinueFade)
{clickable=!clicked;autoadjust(ll,option[23]);AniCall(ll,falsev);if(option[22])
{var firstRun=truev,push=0;for(a=ll;a<ll+orgSlideCount;a++)
{var clone=li.eq(getRealPos(a)).clone().prependTo(obj);if(isFunc(option[29]))option[29].call(clone,getRealPos(a)+1);clone.css({'z-index':'10000','position':'absolute','list-style':'none','top':option[6]?push:0,'left':option[6]?0:push}).hide().fadeIn(option[23],option[8],function(){fixClearType(this);clickable=truev;fading=truev;if(firstRun)
{animate(ll,falsev,falsev,falsev);if(option[17]&&clicked)window.location.hash=option[15][t];AniCall(ll,truev);firstRun=falsev;}
$(this).remove();fading=falsev;});push+=li.eq(a)[option[6]?'outerHeight':'outerWidth'](truev);}}
else
{var fadeinspeed=parseInt10((speed)*(3/5));var fadeoutspeed=speed-fadeinspeed;liConti.each(function()
{$(this).animate({opacity:0.0001},{queue:falsev,duration:fadeoutspeed,easing:option[8],complete:function(){clickable=truev;fading=truev;animate(ll,falsev,falsev,falsev);clickable=!clicked;$(this).animate({opacity:1},{queue:falsev,duration:fadeinspeed,easing:option[8],complete:function(){fixClearType(this);if(option[17]&&clicked)window.location.hash=option[15][t];clickable=truev;fading=falsev;AniCall(ll,truev);}});}});});}}}};function animate(dir,clicked,time,ajaxcallback,speed)
{if((!destroyed&&(dir!=t||init))&&s>getRealPos(dir)||ajaxcallback)
{if(!ajaxcallback)ajaxloading=falsev;clickable=(!clicked&&!option[9])?truev:option[16];buttonclicked=clicked;ot=t;t=dir;!option[11]&&!option[43]&&ot<t&&(t+1>overflow)&&(t=overflow+1);if(option[24])setCurrent(t);var diff=Math.sqrt(Math.abs(ot-t));if(!(speed||speed==0))var speed=(!time)?0:((!clicked&&!option[9])?parseInt10(diff*option[18]):parseInt10(diff*option[7])),i=getRealPos(t);if(ajaxcallback)
{speed=oldSpeed;if(dontCountinue)dontCountinue--;}
else if(option[25])
{if(option[25][i])
{ajaxLoad(i,truev,init||speed,2);ajaxloading=truev;}
if(!fading)
{var aa=(ot>t)?t:ot,ab=(ot>t)?ot:t;dontCountinue=0;oldSpeed=speed;for(a=aa;a<=ab;a++)
{if(a<=ts&&a>=0&&option[25][a])
{ajaxLoad(a,falsev,speed,function(){animate(dir,clicked,time,truev);});dontCountinue++;}}}
for(a=i+1;a<=i+orgSlideCount;a++)
{if(option[25][a])ajaxLoad(a,falsev,0,falsev);}}
if(!dontCountinue)
{if(!fading&&!ajaxloading)
{AniCall(i,falsev);beforeAniFuncFired=truev;}
if(!fading)autoadjust(t,speed);ul.animate({marginTop:getSlidePos(t,true),marginLeft:getSlidePos(t,false)},{queue:falsev,duration:speed,easing:option[8],complete:adjust});if(option[2])
{var fadetime=option[1];if(!clicked&&!option[9])fadetime=(option[18]/option[7])*option[1];if(!time)fadetime=0;if(fading)fadetime=parseInt10((option[23])*(3/5));fadeControls(t,fadetime);}
if(init)if(!option[25][i])startAsyncDelayedLoad();init=falsev;};}};function getRealPos(a)
{a=parseInt10(a);s<=0&&(s=1);while(a<0)
{a+=s;}
return a%s;}
function isFunc(func)
{return $.isFunction(func);}
function parseInt10(num)
{return parseInt(num,10);}
function fixClearType(element)
{if(screen.fontSmoothingEnabled)element.style.removeAttribute("filter");}
baseSlider.getOption=function(a){return options[a];}
baseSlider.setOption=function(a,val){baseSlider.destroy();options[a]=val;baseSlider.init();return baseSlider;}
baseSlider.insertSlide=function(html,pos,numtext){baseSlider.destroy();if(pos>s)pos=s;var html='<li>'+html+'</li>';if(!pos||pos==0)ul.prepend(html);else li.eq(pos-1).after(html);if(pos<=destroyT||(!pos||pos==0))destroyT++;if(option[15].length<pos){option[15].length=pos;}
option[15].splice(pos,0,numtext||parseInt10(pos)+1);baseSlider.init();return baseSlider;}
baseSlider.removeSlide=function(pos){pos--;baseSlider.destroy();li.eq(pos).remove();option[15].splice(pos,1);if(pos<destroyT)destroyT--;baseSlider.init();return baseSlider;}
baseSlider.goToSlide=function(a,speed){goToSlide((a==parseInt10(a))?a-1:a,truev,speed);return baseSlider;}
baseSlider.block=function(){clickable=falsev;return baseSlider;}
baseSlider.unblock=function(){clickable=truev;return baseSlider;}
baseSlider.startAuto=function(){option[9]=truev;timeout=startAuto(option[10]);return baseSlider;}
baseSlider.stopAuto=function(){option[9]=falsev;stopAuto();return baseSlider;}
baseSlider.destroy=function(){destroyT=t;if(controls)controls.remove();destroyed=truev;$(option[20]).die("click");if(continuousClones)for(a=1;a<=option[40];a++)liConti.eq(a-1).add(liConti.eq(-a)).remove();adjustPosition();return baseSlider;}
baseSlider.init=function(){if(destroyed){initSudoSlider(obj,destroyT);}
return baseSlider;}
baseSlider.adjust=function(speed){if(!speed)speed=0;autoadjust(i,speed)
return baseSlider;}
baseSlider.getValue=function(a){return a=='currentSlide'?t+1:a=='totalSlides'?s:a=='clickable'?clickable:a=='destroyed'?destroyed:a=='autoAnimation'?autoOn:undefined;}});};})(jQuery);(function($){$.fn.originalSudoSlider=$.fn.sudoSlider;$.fn.sudoSlider=function(options){options=$.extend({showNavigation:false,bindKeys:true,prevShortcut:{keyCode:37,altKey:false,ctrlKey:false,shiftKey:false},nextShortcut:{keyCode:39,altKey:false,ctrlKey:false,shiftKey:false},labelAttr:'title',categoryAttr:'data-category',miniature:false,miniatureSrcAttr:'lowsrc',miniaturesTemplates:'<div class="sl_hme_clinks clear"><ul></ul></div>',miniatureTemplate:'<li data-target = "${id}"><a rel="${id}" class="customLink" href="#">'
+'<span><img src="${src}" title="${title}" class="notip"/></span>'
+'<div class="sl_hme_clinks_ft">${category}<p>${title}</p></div><span class="sl_hme_clinks_arrow"></span>'
+'</a></li>',customLink:'.customLink',miniatureBlurClass:'blured',miniatureOnHoverGo:false,direction:'ltr',speed:400,pause:4000,mouseWheel:true,history:false,startSlide:1},options);if(options.disableOnMobile==true&&(($(window).innerHeight()>$(window).innerWidth()&&$(window).width()<=980)||$(window).width()<=1024)){return false;}
if(options.direction=='rtl')
{var $ul=this.find('ul:first'),$lis=$ul.children('li').each(function(i)
{if(i===0){return;}
var
$this=$(this),$clone=$this.clone().prependTo($ul);$this.remove();});options.startSlide=$lis.length-options.startSlide+1;if(options.auto)
{options.auto=false;var intervalSlide=setInterval(function(){$slider&&$slider.goToSlide('prev');},options.pause);}}
var
$imgs=this.find('ul:first li img'),$slider=this.originalSudoSlider(options),navigateSlides=function(direction){var pos=$slider.getValue("currentSlide")-1;if((direction=='prev'&&pos<1)||(direction=='next'&&pos>=($slider.getValue("totalSlides")-$slider.getOption("slideCount")))){return;}
var moveCount=$slider.getOption('moveCount');$slider.setOption('moveCount',1).goToSlide(direction).setOption('moveCount',moveCount);};if(options.direction=='rtl'&&options.history&&location.hash.match(/^#.*/)==null&&$slider)
{$slider.goToSlide('last',0);}
if(options.miniature)
{var $miniaturesNode=$(options.miniaturesTemplates).bind('mouseleave',function(){$miniatures.removeClass(options.miniatureBlurClass);}).insertAfter($slider).find('ul'),$miniatures;$imgs.each(function(i)
{var $this=$(this),$node=$($.microTemplate.getTemplate(options.miniatureTemplate,{src:$this.attr(options.miniatureSrcAttr),id:i+1,title:$this.attr(options.labelAttr),category:$this.attr(options.categoryAttr)})).bind('mouseenter',function()
{var self=this,target=$(this).attr('data-target');$miniatures.each(function()
{if(this!=self)
{$(this).addClass(options.miniatureBlurClass);if(options.miniatureOnHoverGo)
{$(this).removeClass('current').find('a').removeClass('current');}}});$(self).removeClass(options.miniatureBlurClass);if(options.miniatureOnHoverGo)
{$(self).addClass('current').find('a').addClass('current');typeof intervalSlide!='indefined'&&clearInterval(intervalSlide);$slider&&$slider.goToSlide(target);}}).bind('mouseleave',function()
{if(options.miniatureOnHoverGo)
{typeof intervalSlide!='indefined'&&(intervalSlide=setInterval(function()
{$slider&&$slider.goToSlide('prev');},options.pause));}}).bind('click',function()
{$miniatures.removeClass(options.miniatureBlurClass).removeClass('current').find('a').removeClass('current');$(this).addClass('current');});options.miniatureOnHoverGo&&$node.find('a').attr('href',$this.closest('a').attr('href')).removeClass('customLink');i==options.startSlide-1&&$node.addClass('current').find('a').addClass('current');$miniaturesNode.append($node);});$miniatures=$miniaturesNode.children();}
options.mouseWheel&&$.fn.mousewheel&&$slider.bind('mousewheel',function(e,delta){e.preventDefault();navigateSlides(delta<0?'next':'prev');});options.bindKeys&&$slider.addShortcut(function(){navigateSlides('prev');},options.prevShortcut).addShortcut(function(){navigateSlides('next');},options.nextShortcut);return $slider;};})(jQuery);(function($){$.inputTags={defaultConfig:{source:function(){return'';},validateSource:function(){return'';},onChange:function(instance){},onStarted:function(instance){},direction:'ltr',tagsTemplate:'<a rel="tag" href="javascript:void(0);" class="marR5 tag tagS ${status} ${priority} ${main}" id="${id}"><span class="tag marR5" title="$l{edit_tag}">${tag}</span>&nbsp;<span title="$l{delete_tag}" class="cancel icoCancel-3"></span></a>',tagsStringTemplate:'<div class="bloc lastBloc" style="display:none;"><input class="tags inputTxt stringList" name="tags_list_visible" type="text" value="${value}"></div>',tagsVisualTemplate:'<div class="divErrorTagslist msg txtR"></div><div class="tagsList">${listTags}${incitation}',incitationTemplate:'<span class="incitation" style="color: #999999;">$l{enter_tags_short}</span></div>',tagsEmptyTemplate:'<span class="tagsList" style="color: #999999;">$l{enter_tags}</span>',tagsModifyTemplate:'<div class="msg" style="display:none;"><a href="javascript:void()" class="modify">$l{modify_tags}</a></div>',tagsHiddenTemplate:'<input type="hidden" name="tags_list" class="tags_list" value="${tags}">',tagNoResultyouMean:'<div class="pad5">$l{no_tag}<br>$l{do_you_mean} : </div>',tagNoResult:'<div class="pad5">$l{no_tag}</div>',tagCreateTag:'<div class="pad5 create_tag" style="cursor: pointer">$l{create_tag} <mark>${tag}</mark></div>',tagsMaxTag:'$l{max_tag_tipsy} (${nb_max})',effectSpeed:100,profile:0,maxNbTag:5,maxNbTagIncitation:2,maxSizeTag:20,onlyActive:false,sortable:false,sortableOptions:{items:'a.tag',placeholder:"marR5 tag tagS OFF tagHolder",containment:'.tagslistdiv'}},instanceArray:[],blurAllowed:true,addInstance:function(config,$self)
{this.microTemplateInit();var instanceId=this.instanceArray.push({config:config,$self:$self,tags:{},nbTags:0,ctlParams:$self.data('ctlparams')}),me=this,t,tags=$self.find('input[type=hidden][name=tags]').val();instanceId--;var instance=$.inputTags.instanceArray[instanceId];if(tags.length!==0&&tags)
{try{instance.tags=$.parseJSON(tags);}catch(e){instance.tags=[];$.jet.dev&&console.warn('tags parse JSON error !!');}}
for(t in instance.tags)
{if(!instance.tags.hasOwnProperty(t)){continue;}
instance.tags[t].display=true;}
$self.attr('tagId',instanceId).html('').append($.inputTags.renderStringDisplay(instanceId),$.inputTags.renderVisualDisplay(instanceId),$.inputTags.renderHidden(instanceId),$.inputTags.renderModifyTagList).bind('click',{instanceId:instanceId},$.inputTags.delegation).bind('addTag',{instanceId:instanceId},$.inputTags.addTag);instance.visualZone=$self.find('div.tagsList');instance.hiddenZone=$self.find("input.tags_list[type='hidden']");instance.modifyZone=$self.find('div.msg');instance.visualZone.find('*').tipsy({gravity:'s',delayIn:100,fade:false,opacity:0.75});instance.stringZone=$self.find('input.stringList').bind('blur',{instanceId:instanceId},$.inputTags.delegation).updatable().bind('updated',{instanceId:instanceId},$.inputTags.delegation);var position={},term;instance.stringZone.ccmComplete({delay:500,minLength:2,autoFill:true,cache:true,preSelectFirst:true,dataType:"json",header:function(parent,result,data)
{if(data&&data.typeResponse==-1){return $($.inputTags.getTemplate(config.tagNoResult));}
if(data&&data.typeResponse==1){return $($.inputTags.getTemplate(config.tagNoResultyouMean));}
return;},source:function(request,response)
{position.cursor=instance.stringZone.inputRangeGet().start;position.start=request.term.lastIndexOf(',',position.cursor-1);position.end=request.term.indexOf(',',position.cursor);position.start=(position.start==-1)?0:position.start+1;position.end=(position.end==-1)?request.term.length:position.end;term=$.sanitize($.trim(request.term.substring(position.start,position.end)));if(term.length===0){$(this).trigger('close');return;}
$.ajax({url:config.source.call(instance),dataType:"json",data:$.extend({},instance.ctlParams,{q:term}),localCache:true,localCacheTimeout:2*60*60*1000,storageName:'inputTags',success:function(data){if(data===null){if(config.profile===1)
{!instance.config.onlyActive&&response([{label:$.inputTags.getTemplate(config.tagCreateTag,{tag:term}),value:term,start:position.start,end:position.end,known:false}],{typeResponse:-1});}
else{response([{}],{typeResponse:-1});}}
else{var preFetch={};for(var r in data.r)
{if(!data.r.hasOwnProperty(r)){continue;}
preFetch[data.r[r][1].toLowerCase()]={name:data.r[r][1],display:false,status:data.r[r][4]&&data.r[r][4].s?data.r[r][4].s:'ACTIVE',priority:data.r[r][4]&&data.r[r][4].p?data.r[r][4].p:'DEFAULT',validated:true};}
$.extend(true,instance.tags,preFetch);response($.map(data.r,function(item){return{label:$.mark.markPureText(item[1],term)
+(item[2]?' <span class="em"> ('
+item[2]
+') '+(item[3]?item[3]:'')+'</span>':''),value:$.inputTags.stripComa(item[1]),id:item[0],count:item[2],start:position.start,end:position.end,known:true};}),{typeResponse:data.t,termSearch:term});}}});},select:function(e,item){var val=item.item.value,key=item.item.value.toLowerCase();(instance.stringZone.val()).indexOf(',',position.start)==-1&&(val=item.item.value+',');instance.stringZone.inputRangeReplace(item.item.start,item.item.end,' '+val);if($.type(instance.tags[key])!='object')
{instance.tags[key]={};}
$.extend(instance.tags[key],{name:item.item.value,id:item.item.id,display:true,status:item.item.known?'ACTIVE':'PROPOSAL'});return false;},focus:function(){return false;},open:function(){var
$this=$(this),pos=$this.findPos(),w=300,str=$this.val().substring(0,position.start),tmp=$('<div style="max-width:'+$this.width()+'px;display:inline;position:absolute;top:1px;left:1px;">'+str+'</div>').appendTo('body'),wid=tmp.width()+10;tmp.remove();$('div.box3 ul.ui-autocomplete').css({width:w}).parent().css({left:config.direction=='ltr'?pos.x+wid:-pos.x-wid+w+50,width:w});$.inputTags.blurAllowed=false;},close:function()
{this.focus();$.inputTags.blurAllowed=true;}});$.inputTags.unifyTagList(instanceId);instance.config.onStarted.call(this,instance);},unifyTagList:function(instanceId)
{$.profile&&console.time('inputTags.unifyTagList');var
nbrAct=0,t=0,tag,instance=$.inputTags.instanceArray[instanceId],anyActive=false,anyHighlight=false,anyNotValidated=false,listNotValidated=[];for(t in instance.tags)
{if(!instance.tags.hasOwnProperty(t)){continue;}
tag=instance.tags[t];tag.display&&nbrAct++;(nbrAct>instance.config.maxNbTag)&&(tag.display=false);tag.validated&&instance.config.onlyActive&&tag.status!=="ACTIVE"&&(tag.display=false);!anyActive&&tag.display&&tag.status==="ACTIVE"&&(anyActive=true);!anyHighlight&&tag.priority&&tag.priority==="HIGHLIGHT"&&(anyHighlight=true);!anyNotValidated&&tag.display&&!tag.validated&&(anyNotValidated=true);!tag.validated&&tag.display&&listNotValidated.push($.inputTags.stripComa(tag.name));}
instance.$self.data('anyActive',anyActive).data('anyHighlight',anyHighlight);anyActive&&instance.$self.parent().removeClass('lineError').find('.msg').html('');$.ajaxSettings.discrete=true;instance.nbTags=nbrAct;nbrAct>0&&!anyActive&&anyNotValidated&&$.ajax({url:instance.config.validateSource.call(instance),data:$.extend({},instance.ctlParams,{q:listNotValidated.join(',')}),dataType:"json",localCache:true,localCacheTimeout:2*60*60*1000,storageName:'validateGroups',success:function(data){for(var name in data)
{var lname=name.toLowerCase();if(typeof instance.tags[lname]=='object')
{switch(typeof data[name])
{case'string':instance.tags[lname].status=data[name];break;case'object':data[name].s&&(instance.tags[lname].status=data[name].s);data[name].p&&(instance.tags[lname].priority=data[name].p);break;default:}
instance.tags[lname].validated=true;}}
$.inputTags.refreshAll(instanceId);}});$.profile&&console.timeEnd('inputTags.unifyTagList');},renderModifyTagList:function(instanceId)
{return $.inputTags.getTemplate($.inputTags.instanceArray[instanceId].config.tagsModifyTemplate);},renderEmptyTagList:function(instanceId)
{return $.inputTags.getTemplate($.inputTags.instanceArray[instanceId].config.tagsEmptyTemplate);},renderStringDisplay:function(instanceId)
{return $.inputTags.getTemplate($.inputTags.instanceArray[instanceId].config.tagsStringTemplate,{value:$.inputTags.returnStringTagList(instanceId)});},renderHidden:function(instanceId)
{return $.inputTags.getTemplate($.inputTags.instanceArray[instanceId].config.tagsHiddenTemplate,{tags:$.inputTags.returnStringTagList(instanceId)});},renderVisualDisplay:function(instanceId)
{var
instance=$.inputTags.instanceArray[instanceId],$node=$($.inputTags.getTemplate($.inputTags.instanceArray[instanceId].config.tagsVisualTemplate,{listTags:$.inputTags.returnVisualTagList(instanceId),incitation:$.inputTags.instanceArray[instanceId].empty===true||$.inputTags.instanceArray[instanceId].nbTags>=$.inputTags.instanceArray[instanceId].config.maxNbTagIncitation?'':$.inputTags.getTemplate($.inputTags.instanceArray[instanceId].config.incitationTemplate)}));$.inputTags.instanceArray[instanceId].config.sortable&&$node.sortable($.inputTags.instanceArray[instanceId].config.sortableOptions).bind('sortupdate',function(e,ui)
{$node.find('a.tag:visible').not('.OFF').each(function(i)
{var label=$(this).find('span.tag').html();if(label)
{label=label.toLowerCase();instance.tags[label]&&(instance.tags[label].order=i);}});$.inputTags.sortTags(instanceId);$.inputTags.refreshAll(instanceId);instance.config.onChange.call(this,instance);}).bind('sortreceive',function(e,ui)
{$node.find('a.tag:visible').not('.OFF').each(function(i)
{ui.item[0]==this&&ui.sender.trigger('transfert',[instance.$self,ui.item.text(),i]);});});return $node;},refreshStringDisplay:function(instanceId)
{this.instanceArray[instanceId].stringZone.val($.inputTags.returnStringTagList(instanceId));},refreshHidden:function(instanceId)
{this.instanceArray[instanceId].hiddenZone.val($.inputTags.returnStringTagList(instanceId));},refreshVisualDisplay:function(instanceId)
{this.instanceArray[instanceId].visualZone.html($.inputTags.returnVisualTagList(instanceId)
+($.inputTags.instanceArray[instanceId].empty===true||$.inputTags.instanceArray[instanceId].nbTags>=$.inputTags.instanceArray[instanceId].config.maxNbTagIncitation?'':$.inputTags.getTemplate($.inputTags.instanceArray[instanceId].config.incitationTemplate))).find('*').tipsy({gravity:'s',delayIn:100,fade:false,opacity:0.75});},refreshAll:function(instanceId)
{$('div.tipsy').remove();$.inputTags.unifyTagList(instanceId);$.inputTags.refreshStringDisplay(instanceId);$.inputTags.refreshHidden(instanceId);$.inputTags.refreshVisualDisplay(instanceId);$.inputTags.instanceArray[instanceId].config.onChange.call(this,$.inputTags.instanceArray[instanceId]);},sortTags:function(instanceId)
{var t,instance=$.inputTags.instanceArray[instanceId];instance.orderedTags=[];for(t in instance.tags)
{if(!instance.tags.hasOwnProperty(t)){continue;}
instance.tags[t].display&&instance.orderedTags.push(instance.tags[t]);}
instance.orderedTags.sort(function(a,b){return a.order-b.order;});},returnVisualTagList:function(instanceId)
{var listeTag='',t,tag,i=0,instance=$.inputTags.instanceArray[instanceId];$.inputTags.sortTags(instanceId);$.inputTags.instanceArray[instanceId].empty=false;for(t in instance.orderedTags)
{tag=instance.orderedTags[t];tag.display&&(listeTag+=$.inputTags.getTemplate(instance.config.tagsTemplate,{tag:$.inputTags.stripEscape(tag.name),status:tag.status,priority:tag.priority,id:'tag'+instanceId+'_'+i}));i++;}
if(listeTag===''){$.inputTags.instanceArray[instanceId].empty=true;return $.inputTags.renderEmptyTagList(instanceId);}
return listeTag;},returnStringTagList:function(instanceId)
{var listeTag='',t,tag,instance=$.inputTags.instanceArray[instanceId],ordered=[];for(t in instance.tags)
{if(!instance.tags.hasOwnProperty(t)){continue;}
ordered.push(instance.tags[t]);}
ordered.sort(function(a,b){return a.order-b.order;});for(t in ordered)
{tag=ordered[t];tag.display&&(listeTag+=' '+$.inputTags.stripComa(tag.name)+',');}
return listeTag;},splitTxt:function(inputTxt)
{var list=inputTxt.replace(/\|,/g,'|@coma').split(','),m=list.length,i=0;for(;i<m;++i)
{list[i]=list[i].replace(/\|@coma/g,',');}
return list;},stripComa:function(txt)
{return txt.replace(/,/g,'|,');},stripEscape:function(txt)
{return txt.replace(/\|,/g,',');},getTagFromInput:function(instanceId)
{var inputTxt=$.sanitize($.inputTags.instanceArray[instanceId].stringZone.attr('value')),inputList=$.inputTags.splitTxt(inputTxt),t;for(t in $.inputTags.instanceArray[instanceId].tags)
{if(!$.inputTags.instanceArray[instanceId].tags.hasOwnProperty(t)){continue;}
$.inputTags.instanceArray[instanceId].tags[t].display=false;$.inputTags.instanceArray[instanceId].tags[t].order=-1;}
$.each(inputList,function(sel,val){val=$.trim(val);var key=val.toLowerCase();if(val!==''){if($.type($.inputTags.instanceArray[instanceId].tags[key])=='object')
{$.inputTags.instanceArray[instanceId].tags[key].display=true;$.inputTags.instanceArray[instanceId].tags[key].order=sel;}
else
{$.inputTags.instanceArray[instanceId].tags[key]={name:val,display:true,status:'PROPOSAL',validated:false,order:sel};}}});},addTag:function(e,tag)
{tag.display=true;var key,t,tagName=tag.name.toLowerCase(),preTag={};preTag[tagName]=tag;$.extend($.inputTags.instanceArray[e.data.instanceId].tags,preTag);for(key in $.inputTags.instanceArray[e.data.instanceId].tags)
{if(key!=tagName)
{t=$.inputTags.instanceArray[e.data.instanceId].tags[key];typeof t.order=='undefined'&&(t.order=0);t.display&&t.order>tag.order&&(t.order+=1);}}
$.inputTags.refreshAll(e.data.instanceId);},showVisualDisplay:function(instanceId,withoutRefresh)
{var
instance=$.inputTags.instanceArray[instanceId],stringZone=instance.stringZone,visualZone=instance.visualZone,modifyZone=instance.modifyZone;if($.inputTags.blurAllowed){!withoutRefresh&&($.inputTags.getTagFromInput(instanceId),$.inputTags.refreshAll(instanceId));stringZone.parent().hide();visualZone.show();if(!$.isEmptyObject(instance.tags)){modifyZone.show();}}},delegation:function(e,oe,data)
{var
instance=$.inputTags.instanceArray[e.data.instanceId],stringZone=instance.stringZone,visualZone=instance.visualZone,modifyZone=instance.modifyZone,listTags=instance.tags;switch(e.type)
{case'updated':var
listTag=$.inputTags.splitTxt(stringZone.val()),nbTagMax=instance.config.maxNbTag;if(listTag.length>nbTagMax){stringZone.extendedTipsy({title:$.inputTags.getTemplate(instance.config.tagsMaxTag,{nb_max:nbTagMax}),timeout:4000});}
break;case'blur':$.inputTags.showVisualDisplay(e.data.instanceId);break;default:case'click':switch(true){case $(e.target).hasClass('create_tag'):if((stringZone.val()).indexOf(',',e.data.position.start)==-1){stringZone.val(stringZone.val()+',');}
break;case $(e.target).hasClass('modify'):case $(e.target).hasClass('incitation'):case $(e.target).hasClass('tagsList'):$.inputTags.refreshAll(e.data.instanceId);stringZone.parent().show().children().focus().inputRangeSetEnd();visualZone.hide();modifyZone.hide();break;case $(e.target).hasClass('tag'):$.inputTags.refreshAll(e.data.instanceId);var tagText=$(e.target).text().replace(/(<[^>]+>|&nbsp;)/g,''),position=(stringZone.val()).indexOf(' '+tagText+',',0);if(position!==-1){stringZone.parent().show().children().focus().inputRangeSet(position+tagText.length+1);}else{stringZone.parent().show().children().focus().inputRangeSetEnd();}
visualZone.hide();modifyZone.hide();break;case $(e.target).hasClass('cancel'):var key=$(e.target).prev().text().toLowerCase();$.type(instance.tags[key])=='object'&&(instance.tags[key].display=false);$.inputTags.refreshAll(e.data.instanceId);if($.isEmptyObject(instance.tags)){modifyZone.hide();}
break;}
break;}}};$.extend($.inputTags,$.microTemplate);$.fn.inputTags=function(config)
{config=$.extend(true,{tags:{},main:null},$.inputTags.defaultConfig,config);$.isEmptyObject(config.tags)&&config.main!==null&&config.main!==''&&(config.tags[config.main.toLowerCase()]={display:true,name:config.main,status:'ACTIVE',validated:true,order:0});config.main!==null&&config.main!==''&&this.data('anyActive',true);return this.each(function()
{var $this=$(this);(typeof($this.attr('tagId'))=='undefined')&&$.inputTags.addInstance(config,$this);});};})(jQuery);(function($){$.fn.readMore=function(options)
{options=$.extend({lines:3,speed:100,textMax:"Lire la suite",textMin:"Fermer"},options);var self=$(1);return this.each(function()
{var mh,h,me=this;self[0]=this;if(self.hasClass("reduced")){return;}
h=parseInt(self.height());$clone=self.clone().html($.sanitize(self.html())).css({'position':'absolute','top':'-9999px','white-space':'nowrap'}).insertAfter(self);mh=$clone.height()*options.lines;$clone.remove();self.height(mh).addClass("reduced");$('<a href=javascript:void(0)></a>').text(options.textMax).bind("click",function(){self[0]=me;if(self.height()==mh){self.stop().animate({height:h},options.speed);$(this).text(options.textMin);}else{self.stop().animate({height:mh},options.speed);$(this).text(options.textMax);}
return;}).insertAfter(self);});};})(jQuery);(function($){$.jet.services.reportAbuse={start:false,options:{},init:function(){$('.reportAbuse').reportAbuse(this.options);}};$.fn.reportAbuse=function()
{return this.each(function()
{var $this=$(this);!$this.hasClass('reportAbuseBinded')&&$this.addClass('reportAbuseBinded').bind('click',function()
{if(typeof $.abuse=='object'){$.abuse.open($this);}
else{$.proxyLoader({load:$.coredata.user.COMMON_RESOURCE_HOST+'/js.php?m=abuse&v='+$.coredata.user.VARIANT_JS_ABUSE,callback:function(){$.abuse.open($this);}});}});});};})(jQuery);(function($){'use strict';$.toolBar={$document:null,$target:null,setPosition:true,timeToHide:null,defaultOptions:{template:'<ul class="list8"></ul>',className:'',onLoad:function(){},toolsArray:[],draggable:false,dragOptions:{},position:{my:'left top',at:'left top',offset:0},hideDelay:100},defaultToolOptions:{tool:'default',template:'<li><a href="javascript:void(0);"></a></li>',handler:function(){alert('this is a default handler');},options:{className:'',appendto:false}},onShow:function(e,$toolBar,$nodeEnd,$nodeStart,options){$.toolBar.timeToHide!==null&&clearTimeout($.toolBar.timeToHide);if($.toolBar.active){$('.toolbar').hide();}
$.toolBar.active=true;$.toolBar.$target=$nodeEnd;$toolBar.show().fadeIn();$.toolBar.setPosition&&$toolBar.position($.extend({},options.position,{of:$nodeStart}));options.draggable&&($.toolBar.setPosition=false);e.stopPropagation();},onTryHide:function(e,force)
{if($.toolBar.active){var $target=$(e.target);if((!$target.hasClass('tooled')||force)&&$target.parents('.tooled').length==0){$.toolBar.active=false;$('.toolbar').hide();}}},onClick:function(e){e.stopPropagation();$(e.target).data('toolHandler').apply($.toolBar.$target,[e.data.$toolbar,e.data.options,e]);}};$.fn.toolBar=function(options)
{options=$.extend(true,{},$.toolBar.defaultOptions,options);$.toolBar.$document===null&&($.toolBar.$document=$(document).bind('mouseover',function(e){var self=this;clearTimeout($.toolBar.timeToHide);$.toolBar.timeToHide=setTimeout(function(){$.toolBar.onTryHide.call(self,e);},options.hideDelay);}));return this.each(function()
{var $this=$(this).addClass('tooled');if(typeof $this.data('toolBar')==='object'){return;}
var $toolBar=$(options.template).bind('show',$.toolBar.onShow).bind('hide',$.toolBar.onTryHide).data('toolBarOptions',options).addClass('tooled toolbar '+options.className).css({position:'absolute',display:'none'}).position($.extend({},options.position,{of:$this})),i;for(i in options.toolsArray)
{if(options.toolsArray.hasOwnProperty(i)&&typeof options.toolsArray[i]!=='function')
{var tool=$.extend(true,{},$.toolBar.defaultToolOptions,options.toolsArray[i]),node;switch(typeof tool.tool)
{case'object':node=tool.tool.clone(true);break;case'string':default:node=$(tool.template);var children=node.children();break;}
node.data('toolHandler',tool.handler).addClass('tooled tool').find('*').addClass('tooled tool '+tool.options.className).data('toolHandler',tool.handler);if(tool.options.appendto){$toolBar.find(tool.options.appendto).append(node);}else{$toolBar.append(node);}}}
$toolBar.delegate('.tool','click',{$toolbar:$toolBar,$this:$this,options:options},$.toolBar.onClick).delegate('.tool','mouseenter mouseleave',{$toolbar:$toolBar,$this:$this,options:options},function(e){$(e.target).trigger('tool_'+e.type,[e.data]);});$this.data('toolBar',$toolBar);var $body=$('.body');$body.length==0&&($body=$('body'));$body.append($toolBar);options.onLoad.call($toolBar,$this);if(options.draggable){$toolBar.draggable(options.dragOptions).removeClass('toolbar').trigger('show',[$toolBar,$this,$this,options]);}else{$this.bind('mouseenter',function(){$toolBar.trigger('show',[$toolBar,$this,$this,options]);});}});};$.fn.attachToolBar=function($nodeEnd,$nodeStart)
{$nodeStart=$nodeStart||$nodeEnd;return this.each(function()
{var $this=$(this),options=$this.data('toolBarOptions');$this.trigger('show',[$this,$nodeEnd,$nodeStart,options]);options=$this.data('toolBarOptions');$nodeEnd.data('toolBar',$this).addClass('tooled');$nodeStart.bind('mouseenter',function(){$this.trigger('show',[$this,$nodeEnd,$nodeStart,options]);}).addClass('tooled').data('toolBar',$this);});};$.fn.getToolBar=function()
{return this.data('toolBar');};})(jQuery);(function($){$.fn.autoResize=function(options){var settings=$.extend({onResize:function(){},animate:true,animateDuration:150,animateCallback:function(){},extraSpace:20,limit:1000},options);this.filter('textarea').each(function(){var textarea=$(this).css({resize:'none','overflow-y':'hidden'}),paddingSUp=parseInt(textarea.css('paddingTop').split(/px/)[0],0)+parseInt(textarea.css('paddingBottom').split(/px/)[0],0),origHeight=textarea.height()+paddingSUp,clone=(function(){var props=['width','lineHeight','textDecoration','letterSpacing','padding','margin'],propOb={};$.each(props,function(i,prop){propOb[prop]=textarea.css(prop);});propOb.position='absolute';propOb.top=-2e4;propOb.left=-2e4;propOb.height="auto";return $('<div>').css(propOb).insertBefore(textarea);return textarea.clone().removeAttr('id').removeAttr('name').css({position:'absolute',top:200,left:200,borderColor:'red'}).css(propOb).attr('tabIndex','-1').insertBefore(textarea);})(),lastScrollTop=null,lastHeight=origHeight,lastEventBuffered=0,eventUpdateBuffer=function()
{clearTimeout(lastEventBuffered);var self=this;lastEventBuffered=setTimeout(function(){updateSize.call(self);},100);},updateSize=function()
{var $this=$(this),height=Math.max(clone.html($this.val().replace(/\n/g,'<br>')+'&nbsp;').height(),origHeight)+paddingSUp;if(lastHeight===height){return;}
lastHeight=height;if(height>=settings.limit){$this.css('overflow-y','');return;}
settings.onResize.call(this);settings.animate&&textarea.css('display')==='block'?textarea.stop().animate({height:height},settings.animateDuration,settings.animateCallback):textarea.height(height);};textarea.unbind('.dynSiz').bind('keyup.dynSiz',eventUpdateBuffer).bind('keydown.dynSiz',eventUpdateBuffer).bind('change.dynSiz',eventUpdateBuffer);});return this;};})(jQuery);(function($)
{if(typeof $.ui=='undefined'){return;}
$.widget("custom.ccmTabs",$.ui.tabs,{unload:function(index)
{$(this.anchors.eq(this._getIndex(index))[0]).removeData("cache.tabs");return this;},getPosition:function(name)
{typeof name!='undefined'&&(name.substr(0,1)!='#')&&(name='#'+name);var anchors=this.anchors,i;for(i in anchors)
{if(anchors.hasOwnProperty(i)&&!isNaN(parseInt(i))&&typeof $(anchors[i]).attr('href')!='undefined'&&$(anchors[i]).attr('href')==name)
{return parseInt(i);}}
return;},getContainerByPosition:function(position)
{if(typeof position=='undefined')
{position=this.options.selected;}
return $(this.panels[position]);},getPositionByContainer:function(element)
{for(var key in this.panels)
{if(!this.panels.hasOwnProperty(key)){continue;}
if($(this.panels[key])[0]==element[0])
{return key;}}
return null;},getAnchorByPosition:function(position)
{if(typeof position=='undefined')
{position=this.options.selected;}
return $(this.anchors[position]);},getContainerByDataKey:function(dataKey)
{var position=this.getPositionByDataKey(dataKey);if(typeof position=='undefined')
{return null;}
return this.getContainerByPosition(position);},getPositionByDataKey:function(dataKey)
{return this.getPosition(this.element.find('a[data-key="'+dataKey+'"]').attr('href'));},selectByDataKey:function(dataKey)
{this.select(this.getPositionByDataKey(dataKey));},load:function(index,event)
{index=this._getIndex(index);if($.ui.version.split('.')[1]<9)
{var self=this,o=this.options,a=this.anchors.eq(index)[0],url=$.data(a,"load.tabs");this.abort();if(!url||this.element.queue("tabs").length!==0&&$.data(a,"cache.tabs")){this.element.dequeue("tabs");return;}
this.lis.eq(index).addClass("ui-state-processing");if(o.spinner){var span=$('span',a),$clone;if(span.is(':visible')){$clone=span.css({display:'inline-block'}).clone(false,false).css({opacity:0.3});span.data('label.tabs',span.html()).empty().append($clone).spin(o.spinnerOptions);}}
this.xhr=$.ajax($.extend({},{global:false,url:url.indexOf('xhr')==-1?(url.indexOf('?')==-1?url+'?xhr':url+'&xhr'):url,success:function(r,s){typeof o.ajaxOptions.getParsedData==='function'&&(r=o.ajaxOptions.getParsedData.call(this,r));self.element.find(self._sanitizeSelector(a.hash)).html(r);self._cleanup();if(o.cache){$.data(a,"cache.tabs",true);}
self._trigger("load",null,self._ui(self.anchors[index],self.panels[index]));try{o.ajaxOptions.success(r,s);}
catch(e){}
self.element.dequeue("tabs");},error:function(xhr,s,e){self._cleanup();self._trigger("load",null,self._ui(self.anchors[index],self.panels[index]));try{o.ajaxOptions.error(xhr,s,index,a);}
catch(e){}
self.element.dequeue("tabs");}},o.ajaxOptions));return this;}}});$.ccmUITabs={historyBind:false,historyDelay:100,historyLastTimestamp:null,defaultOptions:{cache:true,tabHandlers:{load:{}},spinner:true,history:false,spinnerOptions:{width:2,radius:4,length:4},ajaxOptions:{dataType:'json',getParsedData:function(data)
{return data.html;}}},initTabs:function(options)
{var $self=$(this),_getSelected=function(){return parseInt($self.children('ul').attr('data-selected'),10);},_a=(location.hash.match(/#/)!==null?(function(){return $self.find(location.hash).length<1?_getSelected():location.hash.substr(1);})():_getSelected()),functionHandler;$self.ccmTabs(options);typeof _a!=="undefined"&&$self.ccmTabs('option','selected',_a);$.each(options.tabHandlers,function(eventName,values)
{$.each(values,function(tabId,functionUser)
{if(typeof functionUser=='function')
{var $divToHand=$self.ccmTabs('getContainerByDataKey',tabId);if($divToHand!=null&&$divToHand.length!==0)
{var paramId=tabId,tabId=$divToHand.attr('id');switch(eventName)
{case'load':$.trim($divToHand.html())!==''&&typeof options.tabHandlers[eventName][tabId]==='function'&&options.tabHandlers[eventName][tabId].call($divToHand[0],{type:'ccmtabsload'},eventName,options);$self.bind('ccmtabsload',function(e,panelObjet){$.ccmUITabs._handlerBindActions(e,panelObjet,eventName,options,tabId,paramId);});break;case'select':$self.bind('ccmtabsselect',function(e,panelObjet){panelObjet.panel==$divToHand[0]&&$.ccmUITabs._handlerBindActions(e,panelObjet,eventName,options,tabId,paramId);});break;case'show':$self.bind('ccmtabsshow',function(e,panelObjet){panelObjet.panel==$divToHand[0]&&$.ccmUITabs._handlerBindActions(e,panelObjet,eventName,options,tabId,paramId);});break;default:console.warn('this event is not yet handled !');}}}});});},_handlerBindActions:function(e,panelObject,type,options,tabId,paramId)
{$.core.$fake[0]=panelObject.panel;$.core.$fake.is('#'+tabId)&&(function(){var functionHandler=options.tabHandlers[type][paramId]||function(){};typeof functionHandler==='function'&&functionHandler.call(panelObject.panel,e,type,options);})();}};$.fn.ccmUITabs=function(options)
{options=$.extend(true,{},$.ccmUITabs.defaultOptions,options);var selector=this.selector;return this.each(function()
{$.ccmUITabs.initTabs.call(this,options);var $self=$(this),tabClass=$self.find('.ui-tabs-nav').attr('data-tabclass');typeof tabClass!="undefined"&&$self.find('div.ui-tabs-panel').addClass(tabClass);$self.bind('ccmtabsselect',function(e,ui)
{var $selTab=$(ui.tab);if(typeof $selTab.attr('data-directlink')!='undefined')
{window.location=$selTab.attr('data-url');return false;}
e.stopPropagation();}).find('.ui-tabs-nav:first li a[data-url]').each(function()
{var $this=$(this),url=$this.attr('data-url');$this.data('href.tabs',url).data('load.tabs',url).data('cache.tabs',true);});if(options.history==true)
{$.ccmUITabs.historyBind==false&&($.ccmUITabs.historyBind=true)&&History.Adapter.bind(window,'statechange',function(e)
{var State=History.getState();if(e.timeStamp-State.data.timestamp>$.ccmUITabs.historyDelay)
{$.ccmUITabs.historyLastTimestamp=e.timeStamp;$('.ui-tabs li a[data-key="'+State.data.dataKey+'"]').closest('.ui-tabs').ccmTabs('selectByDataKey',State.data.dataKey);}});var $actualTab=$self.ccmTabs('getAnchorByPosition');History.replaceState({timestamp:new Date().getTime(),dataKey:$actualTab.attr('data-key')},History.options.initialTitle,decodeURIComponent(window.location.pathname+window.location.search));$self.bind('ccmtabsselect',function(e,a)
{var $sTab=$(a.tab);e.stopPropagation();if(($.ccmUITabs.historyLastTimestamp==null)||(e.timeStamp-$.ccmUITabs.historyLastTimestamp)>$.ccmUITabs.historyDelay)
{History.pushState({timestamp:new Date().getTime(),dataKey:$sTab.attr('data-key')},History.options.initialTitle+' - '+$sTab.attr('title'),$sTab.data('load.tabs'));$.ccmUITabs.historyLastTimestamp=null;}});};});};})(jQuery);(function($)
{"use strict";$.tinyProfile={defaultOptions:{selector:'',delayIn:300,getSource:function(){return'/';},template:'',getBody:function(tid,options,data){return'';},className:'jTinyProfile'}};$.fn.tinyProfile=function(options)
{options=$.extend({},$.tinyProfile.defaultOptions,options);var $self=this,openTimer,hideAll=function()
{$('body').trigger('clearTips',['.tipsy.'+options.className]);return true;};return this.delegate(options.selector,'mouseenter',function(){var $this=$(this),tid=$this.attr('data-tid'),source=options.getSource.call($this),initProfile=function(data)
{var imageToLoad=0;$this.tipsy({title:function(){return options.getBody.call(this,tid,options,data);},html:true,trigger:'manual',gravity:$.fn.tipsy.autoNS,opacity:0.85,onShow:function()
{this.$tip.addClass(options.className).find('img').each(function()
{if(!this.complete&&!imagePile.cachedUri[this.src])
{++imageToLoad;imagePile.add(this.src,{},function(e,cached){--imageToLoad;if(imageToLoad<=0)
{$this.tipsy('show');}});}});imageToLoad>0&&imagePile.depile();}}).data('tinyProfile',true);clearTimeout(openTimer);openTimer=setTimeout(showProfile,options.delayIn);},showProfile=function(){$this.tipsy("show");};if(tid){!$this.data('tinyProfile')&&source&&source[tid]&&initProfile(source[tid]);}
else{!$this.data('tinyProfile')&&typeof source=='object'&&initProfile(source);}
clearTimeout(openTimer);openTimer=setTimeout(showProfile,options.delayIn);}).bind('mouseover',function(e){$.core.$fake[0]=e.target;!$.core.$fake.is(options.selector+', .tipsy, .tipsy-arrow, .tipsy-inner, .intip')&&hideAll()&&clearTimeout(openTimer);});};})(jQuery);(function($){$.jet.services.tour={start:false,options:{},init:function(){if($data&&$data.services&&$data.services.tour)
{$.tour.start($.evalOptions($data.services.tour));}
else
{console.warn('tour\'s data should be stored in $data.services.tour');}}};$.tour={defaultOptions:{scrollSpeed:250,template:'<div class="line"><a class="cancel tipsy-cancel" href="javascript:void(0);">X</a>${content}</div>'
+'<div class="txtR marT5"><span class="em">${stepCurrent}/${stepTotal}</span><a class="tipsy-btn ${classNext}" href="javascript:void(0);" >${nextLabel}</a></div>',className:'tour',classNext:'tourNext',scrollToOptions:{offset:{top:0,left:0}}},defaultItemOptions:{delay:5,scroll:true,selector:'p:first',content:'default content',onShow:function(){},onHide:function(){},tipsyOptions:{opacity:0.95},nextLabel:'next'},options:{},currentTip:{},currentItem:{},$currentNode:{},start:function(options)
{options=$.extend(true,{},this.defaultOptions,options,{stepTotal:options.items.length,stepCurrent:0});this.options=options;var self=this;$('body').delegate('.'+options.className+' .'+options.classNext,'click',function(){self.next();}).delegate('.'+options.className+' a.cancel','click',function()
{self.currentTip.hide();self.currentTip.disable();self.currentItem.onHide.call(self,self.currentItem,'close');});this.next();},next:function()
{if(this.currentTip.hide)
{this.currentTip.disable();this.currentTip.hide();this.currentItem.onHide.call(this,this.currentItem,'next');}
if(this.options.items.length<=0){return;}
++this.options.stepCurrent;var item=$.extend(true,{},this.defaultItemOptions,this.options.items.shift()),self=this;this.currentItem=item;setTimeout(function(){self.show.call(self,item);},item.delay);},show:function(item)
{var self=this,showItem=function()
{self.$currentNode=$(item.selector).extendedTipsy($.extend(item.tipsyOptions,{html:true,title:$.microTemplate.getTemplate(self.options.template,{content:item.content,nextLabel:item.nextLabel,classNext:self.options.classNext,stepTotal:self.options.stepTotal,stepCurrent:self.options.stepCurrent})}));self.currentTip=self.$currentNode.data('tipsy');self.currentTip.$tip.addClass(self.options.className);self.currentItem.onShow.call(self,item);};if(item.scroll)
{$.scrollTo(item.selector,this.options.scrollSpeed,$.extend(true,{},this.options.scrollToOptions,{onAfter:showItem}));}
else{showItem();}}};})(jQuery);(function($)
{$.jet.services.lazyResources={start:false,options:{delay:5,handler:function(){}},init:function(){if(typeof $data!='object'||typeof $data.lazyResources!='object'){return;}
for(var m=$data.lazyResources.length,i=0;i<m;++i)
{var r=$.extend({},this.options,$data.lazyResources[i]),f;switch(typeof r.resource)
{case'string':(function(r){setTimeout(function()
{$.profile&&console.info('lazy resource :',r);$.proxyLoader({load:[r.resource],callback:function(){$(document).trigger('lazyResourceLoaded',[r]);typeof r.handler=='function'&&r.handler.call(r);}});},r.delay);})(r);break;case'function':(function(r){setTimeout(function()
{$.profile&&console.info('lazy resource :',r);r.resource.call(r);$(document).trigger('lazyResourceLoaded',[r]);typeof r.handler=='function'&&r.handler.call(r);},r.delay);})(r);break;default:$.profile&&console.warn('unknown lazy resource type');}}}};})(jQuery);(function($){'use strict';$.fn.lazyHover=function(options)
{options=$.extend(true,{},$.fn.lazyHover.defaultOptions,options);if(!$.fn.lazyHover.delegations[options.classes.start])
{$('body').on('mouseenter mouseleave','.'+options.classes.start,function(e)
{var $target=$(this),data=$target.data(options.dataName);switch(e.type)
{case'mouseenter':clearTimeout($.fn.lazyHover.handlers[data.id]);$.fn.lazyHover.handlers[data.id]=setTimeout(function(){$target.addClass(options.classes.hover);},data.delay.enter);break;case'mouseleave':clearTimeout($.fn.lazyHover.handlers[data.id]);$.fn.lazyHover.handlers[data.id]=setTimeout(function(){$target.removeClass(options.classes.hover);},data.delay.exit);break;}});$.fn.lazyHover.delegations[options.classes.start]=true;}
return this.addClass(options.classes.start).each(function()
{$.jet.$fake[0]=this;$.jet.$fake.data(options.dataName,$.extend({id:++$.fn.lazyHover.maxId},options));});};$.fn.lazyHover.delegations=[];$.fn.lazyHover.handlers=[];$.fn.lazyHover.maxId=0;$.fn.lazyHover.defaultOptions={delay:{enter:500,exit:10},dataName:'lazyHover',classes:{start:'lazyHover',hover:'hover'}};}(jQuery));(function($){'use strict';$.warningCNIL=function(opts)
{opts=$.extend(true,{},$.warningCNIL.defaultOptions,opts);if($.warningCNIL.isExcluded(opts.excludePaths)){return;}
if(!$.cookie(opts.cookieName)){$.getStyle(opts.styleURL+'&v='+(_$('$.jet.env.packager.variants')._.css_warncnil?_$('$.jet.env.packager.variants')._.css_warncnil:''),function(){var removePopUp=function($node){var cookieDomain='';if(opts.setCookieOnDomain){var domainArray=document.location.hostname.split('.');cookieDomain=domainArray.slice(-2).join('.');}
$.cookie(opts.cookieName,1,{expires:30*13,path:'/',domain:cookieDomain});$node.remove();};var gaEvent=function(){if(typeof(_gaq)!=='undefined')
{_gaq.push(['_trackEvent','global','accept','popup use cookies']);}
if(typeof(gaCCMBG)!=='undefined')
{gaCCMBG('send','event','global','accept','popup use cookies');}};var $node=new $.Template(opts.template,true).getNode({innerText:opts.innerText,img:opts.img.show?'<img src="'+opts.img.src+'" alt="'+opts.img.alt+'">':'',moreURL:typeof opts.getMoreURL==='function'?opts.getMoreURL():'http://www.ccmbenchmark.com/donnees-personnelles'}).appendTo('body');$('#jOICClose').bind('click',function(){removePopUp($node);gaEvent();});$('#jOICAgree').bind('click',function(){removePopUp($node);gaEvent();});});}else{if(opts.setCookieOnDomain){var numCcmbgoicCookies=0,cookies=document.cookie.split(';');for(var i=0,cookiesLenght=cookies.length;i<cookiesLenght;++i)
{var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,opts.cookieName.length+1)===(opts.cookieName+'='))
{numCcmbgoicCookies++;}}
if(numCcmbgoicCookies===2){$.cookie(opts.cookieName,1,{expires:-1,path:'/'});}}}};$.warningCNIL.isExcluded=function(excludePaths)
{for(var i=0,l=excludePaths.length;i<l;++i)
{if(excludePaths[i].test(document.location.toString())){return true;}}
return false;};$.warningCNIL.defaultOptions={template:'<div class="ccmcss_oic" style="position: fixed; bottom: 20px; right: 20px;"><a href="javascript:void(0);" class="ccmcss_oic__close" id="jOICClose">&times;</a><a href="http://www.ccmbenchmark.com" target="_blank" class="ccmcss_oic__logo">${img}</a><p>${innerText}</p><a href="javascript:void(0)" class="ccmcss_oic__agree" id="jOICAgree">Fermer</a><a href="${moreURL}" target="_blank">En savoir plus <br>et paramétrer ses cookies</a></div>',innerText:"En poursuivant votre navigation, vous acceptez l’utilisation de cookies qui permettront notamment de vous offrir contenus, services, et publicit&eacute;s li&eacute;s &agrave; vos centres d'int&eacute;r&ecirc;t.",cookieName:'ccmbgoic',getMoreURL:function(){return'http://www.ccmbenchmark.com/donnees-personnelles?origin='+location.hostname;},styleURL:'http://static.ccmbg.com/fc/css.php?m=geste',img:{show:true,src:'http://static.ccmbg.com/fc/img/components/geste/logo_ccmbg.png',alt:'CCM Benchmark Group'},excludePaths:[/https?:\/\/[^\/]*hayatouki\.com/,/https?:\/\/[^\/]*kioskea\.net/,/https?:\/\/[^\/]*ccmbenchmark\.com/,/https?:\/\/([^\/]*\.)?ccm\.net/,/https?:\/\/[^\/]*\.recht\-finanzen\.de/,/\/cgi|asp|php\/backoffice\//],setCookieOnDomain:true};if(typeof $.fn.micro==='string')
{$(document).ready(function(){$.warningCNIL();});}}(jQuery));(function(micro){(function(µ){µ.getStyle=function(url,success)
{var s=document.createElement('link');s.type='text/css';s.rel='stylesheet';s.media='all';if(typeof success=='function')
{if(typeof s.onload!=='undefined')
{s.onload=success;}
else
{s.onreadystatechange=function(){(this.readyState=='loaded'||this.readyState=='complete')&&success();};}}
s.href=url;document.getElementsByTagName('head')[0].appendChild(s);};}(micro));(function(µ){µ.Template=function(sourceSelector,directTemplate)
{this.source=directTemplate?sourceSelector:µ(sourceSelector).html();this.fragment=document.createDocumentFragment();this.root=document.createElement('div');this.fragment.appendChild(this.root);return this;};µ.Template.prototype={getNode:function(data)
{this.clone=this.root.cloneNode(true);this.clone.innerHTML=this.getParsed(data);var i=0,l=this.clone.childNodes.length,nodes=[];for(;i<l;++i)
{this.clone.childNodes[i].nodeType==1&&nodes.push(this.clone.childNodes[i]);}
return micro(nodes);},getParsed:function(data)
{if(!data){throw"Missing template data";}
return this.source.replace(/\${([^}]+)}/gm,function(r,a)
{return(typeof(data[a])=='undefined'?'':data[a]);});}};}(micro));}(jQuery));(function($,w)
{'use strict';var c=w.cabestan=w.cabestan||{};$.extend(true,c,{computeCid:function()
{var url=window.location.hostname,domains={'linternaute.com':'lint','sante-medecine.journaldesfemmes.com':'smccm','droit-finances.commentcamarche.net':'dfccm','appstv.commentcamarche.net':'appsccm','commentcamarche.net':'ccm','journaldunet.com':'jdn','journaldesfemmes.com':'jdf','hugolescargot.com':'hle','marceletrose.com':'met','zebestof.com':'zbo'};$.jet.env.dev&&(domains['ccmbg.com']='jdf');for(var key in domains)
{if(url.indexOf(key)!==-1){return domains[key];}}
throw('No CID for this domain');}});}(jQuery,window));var cabestanRetargeting=function(options)
{'use strict';var opts=options||{},data='',computeSpage=function()
{var url=window.location.hostname+window.location.pathname;(/\.s?html?/.test(url))&&(url=url.substring(0,url.lastIndexOf('/')));(url.charAt(url.length-1)==='/')&&(url=url.substring(0,url.length-1));return'spage='+url.replace(/\//g,'_');},computeKpage=function()
{var kpage=(opts.keywordsString||window.OAS_query||''),match=[],keywords=[],i='';match=kpage.match(/keyword=([^&]*)/g);if(match)
{for(i in match){!match[i].match(/@.*@/)&&keywords.push(match[i].replace('keyword','kpage'));}}
else
{var tagsToReplace={'home=1':'home'};for(i in tagsToReplace)
{(kpage.indexOf(i)!==-1)&&keywords.push('kpage='+tagsToReplace[i]);}}
if(keywords.length>0){return keywords.join('&');}
else{return'kpage=';}},addOptionalParameters=function()
{var parameters={'md5':['md5','een'],'civilite':['civilite'],'nom':['nom'],'prenom':['prenom'],'cp':['cp']},getParams=window.location.search.replace('?','').split('&'),urlParams=[],temp=[],result='';for(var i=0,l=getParams.length;i<l;++i)
{temp=getParams[i].split('=');temp&&(urlParams[temp[0]]=temp[1]);}
for(var param in parameters)
{result+='&'+param+'=';if(opts[param])
{result+=encodeURI(opts[param]);}
else
{for(var getParam in parameters[param]){if(urlParams[parameters[param][getParam]]){result+=encodeURI(urlParams[parameters[param][getParam]]);break;}}}}
return result;},getSrc=function()
{var url=window.location.hostname,domains=['journaldesfemmes.com','linternaute.com','journaldunet.com','commentcamarche.net','hugolescargot.com','marceletrose.com','zebestof.com'];for(var i=0,l=domains.length;i<l;++i)
{if(url.indexOf(domains[i])!==-1){return domains[i];}}
return'ccmbg.com';};try{data=computeSpage()+'&'+computeKpage()+'&_cid='+window.cabestan.computeCid()+'&md5_opp=1&support=web&uinfo=1'+addOptionalParameters();window.dmbgclzvi7of={'data':data};var tag=document.createElement('script'),src='http://dm.'+getSrc()+'/6?';if(opts.signed)
{window.dmbgclzvi7of.signed=opts.signed;}
tag.setAttribute('src',src);document.body.appendChild(tag);}
catch(e)
{}};(function($,w)
{'use strict';var c=w.cabestan=w.cabestan||{};$.extend(true,c,{handlers:{get:[]},cookies:{segment:"ccmseg"},controlers:{get:'//ws.dm.ccmbg.com/api/ccm_sj?_cid=jdf&mdel=OAS_ONLINE'},isNotProfiled:function(){return new Promise(function(resolve,reject)
{$.cookie(c.cookies.segment)===null?resolve():reject('allready profiled');});},getSegments:function(){return new Promise(function(resolve,reject)
{$.ajax({dataType:'jsonp',url:c.controlers.get,data:{'_cid':c.computeCid(),mdel:'OAS_ONLINE'},success:function(datas){resolve(datas);},error:reject});});},get:function(){return c.isNotProfiled().then(c.getSegments).then(function(datas){$.cookie(c.cookies.segment,typeof datas.cpgid!=="undefined"?datas.cpgid:'',{expires:1,path:'/'});return datas;}).then(function(datas){for(var i=0,l=c.handlers.get.length;i<l;++i)
{typeof c.handlers.get[i]==='function'&&(function(i){setTimeout(function(){c.handlers.get[i](datas);},0);}(i));}
return datas;}).catch(function(err){err!=='allready profiled'&&console.warn('Error getting segment',err);});}});}(jQuery,window));(function(w){'use strict';w.weborama=function(options)
{var wrsc;if(!options||!options.host){return;}
w.WRP_HOST=options.host;w.WRP_SECTION_GRP=options.sectionGroup;w.WRP_SUBSECTION_GRP=options.subSectionGroup;w.WRP_ID_GRP=options.idGroup;w.WRP_ID=options.id;w.WRP_SECTION=options.section;w.WRP_SUBSECTION=options.subSection;wrsc=document.createElement('script');wrsc.type='text/javascript';wrsc.async=true;wrsc.src='//cstatic.weborama.fr/js/products.js';document.head.appendChild(wrsc);};})(window);(function($)
{$.jet.services.ccmprofiler={start:$.jet.env.dev,init:function(){if(typeof $.ui=='undefined'){return;}
$(document).ready(function(){$('.ccmpr_warn_cnt').draggable();});}};})(jQuery);(function($,w,d)
{'use strict';$.jet.services.zbo={start:true,options:{},getKeywords:function()
{if(typeof asl!=='undefined'&&_$('asl.conf.clients.oas.query')._.length>0)
{return this.getKeywordsFromASL();}
else if(typeof window.OAS_query!=='undefined')
{return this.getKeywordsFromOAS();}
else{return[];}},getKeywordsFromOAS:function()
{if(!window.OAS_query){return[];}
var match=window.OAS_query.match(/keyword=([^&]*)/g),keywords=[];if(match)
{for(var i in match){!match[i].match(/@.*@/)&&keywords.push(match[i].split(/=/)[1]);}}
return keywords;},getKeywordsFromASL:function()
{var keywords=[];asl.conf.clients.oas.query.map(function(q){return q.substr(String('keyword=').length);}).forEach(function(l){keywords.push(l);});return keywords;},init:function()
{var _zbo_ID=(function(){var host=w.location.hostname.split('.'),last=host.length,tld=host[last-1],domain=host[last-2],subDomain=host[last-3];switch(domain)
{case'linternaute':switch(subDomain)
{case'copainsdavant':return 676;default:return 675;}
break;case'journaldunet':switch(subDomain)
{case'reseau':return 752;default:return 751;}
break;case'commentcamarche':switch(subDomain)
{case'codes-sources':return 753;case'droit-finances':return 754;case'sante-medecine':return 755;default:return 678;}
break;case'journaldesfemmes':return 677;case'wikimat':return 756;case'magazinedelledonne':return 757;case'salon-litteraire':return 759;case'ccmbenchmark':return 760;case'jeux-gratuits':return 761;case'hugolescargot':return 762;case'expeert':return 763;case'hayatouki':return 764;case'marcel-et-rose':return 765;case'appstv':return 1081;case'com':if(tld==='br'&&subDomain==='arevistadamulher'){return	758;}
break;default:return false;}}());if(_zbo_ID)
{w._zbo_data={keywords:this.getKeywords()};w._zbo=w._zbo||{register:function(ev,d){this[ev]=this[ev]||[];this[ev].push(d);}};var g=d.createElement('script'),s=d.getElementsByTagName('script')[0];g.async=true;g.src='//tmgr.ccmbg.com/'+_zbo_ID+'/tag.js?external=1';s.parentNode.insertBefore(g,s);w._zbo.register('home');}}};})(jQuery,window,document);(function($){$.jet.services.videostep={start:$('.divVideoStep').length>0&&$('script[src*="kweb.videostep.com/GetLink"]').length===0,options:{},init:function()
{$.proxyLoader({load:"http://kweb.videostep.com/GetLink"});$(document).bind('ready',function(){_gaq.push(['_trackEvent','ccmcms/contents','advertising/videostep','show',1,true]);});}};})(jQuery);(function($){'use strict';$.jet.services.codeSnippet={start:false,options:{},init:function(){$(document).trigger('codeSnippetReady');},resources:[$.jet.env.packager.get('codesnippet'),$.jet.env.packager.get('codesnippet','css')],isLoaded:function(){return typeof $.fn.codeSnippet=='function';},isReady:$.jet.env.packager.isReady.onFirstJs};})(jQuery);(function($){$.jet.services.linkMaker={start:false,options:{},init:function(){$(document).trigger('linkMakerLoaded');},resources:[$.jet.env.packager.get('linkmaker')],isLoaded:function(){return typeof $.fn.linkMaker=='function';}};})(jQuery);(function($){$.jet.services.fileUpload={start:false,options:{},init:function(){$(document).trigger('fileUploadLoaded');},resources:[$.jet.env.packager.get('upload')],isLoaded:function(){return(typeof $.fn.fileupload!='undefined'||typeof $.fn.fileupload!='undefined');}};})(jQuery);(function($){$.jet.services.cms={start:false,options:{},init:function(){$(document).trigger('cmsLoaded');},resources:[$.jet.env.packager.get('cms')],isLoaded:function(){return typeof $.fn.cmsFieldEditor=='function';}};})(jQuery);(function($){$.jet.services.imgEditor={start:false,options:{},init:function(){$(document).trigger('imgEditorLoaded');},resources:[$.jet.env.packager.get('imgeditor')],isLoaded:function(){return typeof $.imgEditor=='object';}};})(jQuery);(function($){$.jet.services.ccmUIEvent={start:false,options:{},init:function(){$(document).trigger('ccmUIEventLoaded');},resources:[$.jet.env.packager.get('ccmuievent')],isLoaded:function(){return typeof $.ccmUIEvent=='object';}};})(jQuery);(function($){$.jet.services.contents={start:false,options:{},init:function(){$(document).trigger('contentsLoaded');},resources:[$.jet.env.packager.get('contents|contents.'
+(typeof $data!='undefined'&&typeof $data.common!='undefined'&&typeof $data.common.lang!='undefined'?$data.common.lang:'fr'))],isLoaded:function(){return typeof $.fn.contentCommonCommon=='function';}};})(jQuery);(function($){$.jet.services.fancybox={start:false,options:{speedIn:100,speedOut:100,cyclic:true,titlePosition:'inside'},init:function()
{$(document).trigger('fancyboxLoaded');$('.fancy').fancybox(this.options);},resources:[$.jet.env.packager.get('fancybox'),$.jet.env.packager.get('fancybox','css')],isLoaded:function(){return typeof $.fn.fancybox=='function';}};})(jQuery);(function($){$.jet.services.moduleMapGoogle={start:false,options:{},init:function(){$(document).trigger('moduleMapLoaded');},resources:[$.jet.env.packager.get('modulemapgoogle')],isLoaded:function(){return(typeof $.moduleMap!='undefined'&&typeof $.moduleMap.proxyMapGoogle=='function');}};})(jQuery);(function($){$.jet.services.moduleMapBing={start:false,options:{},init:function(){$(document).trigger('moduleMapLoaded');},resources:[$.jet.env.packager.get('modulemapbing')],isLoaded:function(){return(typeof $.moduleMap!='undefined'&&typeof $.moduleMap.proxyMapBing=='function');}};})(jQuery);(function($){'use strict';$.jet.services.croppable={start:false,options:{},init:function()
{$(document).trigger('croppableReady');},resources:[$.jet.env.packager.get('croppable'),$.jet.env.packager.get('croppable','css')],isLoaded:function()
{typeof Spinner!='function'&&this.resources.push($.jet.env.packager.get('spin'));return typeof $.fn.croppable==='function';},isReady:$.jet.env.packager.isReady.fully};}(jQuery));(function($){'use strict';var _isStarted=false;$.jet.services.socialButtons={start:false,options:$.extend(true,{publisherId:"ra-506574dd5ff1389b",minWidth:false,resizeable:false,selector:'#sidebar_follower',placeholder:false,alternativeSelector:'#alternative_sidebar_follower',alternativeRender:false,replaceOnScrollSelector:'nav[role=navigation]',replaceOnScrollOptions:{progressiveOpacity:false},readyStateInterval:50},_$('$.jet.services.socialButtons')._.options),init:(function(){return(($.browser.msie&&parseInt($.browser.version.split('.')[0],10)<=7)?false:function(options)
{if(!_isStarted)
{_isStarted=true;var self=this,start=function()
{$(document).trigger('socialButtonsReady');$.profile&&console.log('Start social buttons',self.options);switch(typeof self.options.selector)
{case'object':self.options.selector.length>0&&self.options.selector.socialButtons(self.options);break;case'string':$(self.options.selector).socialButtons(self.options);break;default:}},waitReadyState=function()
{if(typeof addthis=='object')
{start();}
else{setTimeout(waitReadyState,self.options.readyStateInterval);}};if(self.options.alternativeRender)
{self.options.selector=self.options.alternativeSelector;}
else if(self.options.minWidth){if($(window).width()<self.options.minWidth){$.profile&&console.log('reach window width',$(window).width());self.options.selector=self.options.alternativeSelector;self.options.alternativeRender=true;}else if(self.options.resizeable){var resizeTimeout=0;$(window).bind('resize',function(){clearTimeout(resizeTimeout);resizeTimeout=setTimeout(function()
{if(self.options.selector!=self.options.alternativeSelector&&$(this).width()<self.options.minWidth){$.profile&&console.log('alternative view at',$(this).width());$(self.options.selector).remove();self.options.selector=self.options.alternativeSelector;self.options.alternativeRender=true;$(self.options.selector).socialButtons(self.options);}},200);});}}
waitReadyState();}});})(),resources:[$.jet.env.packager.get('socialbuttons'),$.jet.env.packager.get('socialbuttons','css'),'http://s7.addthis.com/js/250/addthis_widget.js'],isLoaded:function()
{return typeof $.fn.socialButtons==='function';},isReady:$.jet.env.packager.isReady.fully};}(jQuery));(function($)
{'use strict';var _isStarted=false;$.jet.services.geolocation={start:false,options:{},init:function()
{if(!_isStarted)
{_isStarted=true;$.extend($.fn.geolocation.defaultOptions,this.options);$(document).trigger('geolocationLoaded');}},resources:[$.jet.env.packager.get('geolocation')],isReady:$.jet.env.packager.isReady.fully,isLoaded:function()
{var loaded=true,lang=this.options.lang||$data.services.geolocation.options.lang;typeof $.fn.geolocation==='function'&&(loaded=false);(typeof $.geolocation!='object'||typeof $.geolocation.langs[lang.toUpperCase()]=='undefined')&&(loaded=false),this.resources.push($.jet.env.packager.get('geolocation.'+lang.toLowerCase()));return loaded;}};}(jQuery));(function($)
{$.jet.services.autoResize={start:false,options:{},init:function(){$('.autoresize').autoResize(this.options).removeClass('autoresize');}};})(jQuery);(function($){$.jet.services.mapstraction={start:false,providers:{googlev3:{resources:['http://maps.google.com/maps/api/js?sensor=false',"http://maps.gstatic.com/intl/fr_ALL/mapfiles/api-3/9/17/main.js",$.jet.env.packager.get('mapstraction.googlev3')],isLoaded:function(){return typeof google=='object'&&typeof google.maps=='object';}},openlayers:{resources:['http://cdnjs.cloudflare.com/ajax/libs/openlayers/2.13.1/OpenLayers.js',$.jet.env.packager.get('mapstraction.openlayers')],isLoaded:function(){return typeof OpenLayers=='object';}}},options:{providers:['googlev3'],selector:''},init:function(){$(document).trigger('mapstractionReady');this.options.selector!=''&&$(this.options.selector).mapstraction();},resources:[$.jet.env.packager.get('mapstraction')],isReady:$.jet.env.packager.isReady.fully,isLoaded:function(){var loaded=true;typeof mxn!='object'&&(loaded=false);for(provider in this.options.providers)
{var currentProvider=$.jet.services.mapstraction.providers[this.options.providers[provider]];if(typeof currentProvider=='object')
{if(!currentProvider.isLoaded())
{for(var m=currentProvider.resources.length,i=0;i<m;++i)
{this.resources.push(currentProvider.resources[i]);}
loaded=false;}}}
return loaded;}};})(jQuery);(function($){'use strict';$.jet.services.rating={start:false,options:{selector:'input[type=radio]',eventTargetSelector:'.jRating',initAjaxOn:false,preventMultipleRatings:true,dataParamsName:'data-params',storageKeyName:'ccmratings',maxRatingKeys:100,ratingKeysToDrop:90,displayNote:false},init:function()
{var options=this.options;$(options.eventTargetSelector).each(function(key,container)
{var $container=$(container),$stars=$(options.selector,container),canRate=true,dataUrl=$container.attr("data-url");$stars.rating(options);setTimeout(function(){if(options.preventMultipleRatings){var userRatings=$.parseJSON(localStorage.getItem(options.storageKeyName)),dataParams=$.parseJSON($container.attr(options.dataParamsName)),ratingKey=dataParams?dataParams.key:'';canRate=!userRatings||(userRatings&&-1===userRatings.indexOf(ratingKey));}
if(false===canRate){$stars.rating('disable');}else{options.initAjaxOn&&(typeof dataUrl!=='undefined')&&$container.ajaxOn('ratingClick',function(opt,data){$(options.selector,this).rating('disable');this.unbind('ratingClick');if(options.preventMultipleRatings){var userRatings=$.parseJSON(localStorage.getItem(options.storageKeyName));userRatings||(userRatings=new Array());userRatings.push(ratingKey);(userRatings.length>options.maxRatingKeys)&&(userRatings.splice(options.maxRatingKeys-options.ratingKeysToDrop,options.maxRatingKeys));localStorage.setItem(options.storageKeyName,JSON.stringify(userRatings));}
options.displayNote&&$.note.note('Votre vote a bien &eacute;t&eacute; pris en compte.');});}},20);});},resources:[$.jet.env.packager.get('rating'),$.jet.env.packager.get('rating','css')],isLoaded:function()
{this.options.displayNote&&this.resources.push($.jet.env.packager.get('note'));return typeof $.fn.rating=='function'&&(this.options.displayNote?typeof $.note.note=='function':true);},isReady:$.jet.env.packager.isReady.fully};}(jQuery));(function($){$.jet.services.coverflow={start:false,options:{selector:'.jCoverflow',autoInit:true},init:function(){$(document).trigger('coverflowLoaded');this.options.autoInit&&$(this.options.selector).initCoverflow(this.options);$(this.options.selector).show();},resources:[$.jet.env.packager.get('coverflow')],isLoaded:function(){return typeof $.fn.initCoverflow!='undefined';}};})(jQuery);(function($){$.jet.services.wysiwygeditor={start:false,options:{element:'.editor'},init:function()
{$(this.options.element).redactor(this.options);},resources:[$.jet.env.packager.get('redactor'),$.jet.env.packager.get('redactor','css')],isLoaded:function()
{return typeof jQuery.fn.redactor=='function';}};})(jQuery);(function($)
{$.jet.services.panelSubscribe=$.extend(true,{start:false,options:{selector:'.jPanelSubscribe'},init:function()
{$(this.options.selector).panelSubscribe(this.options);$(document).trigger('panelSubscribeStart');},resources:[$.jet.env.packager.get('panelsubscribe'),$.jet.env.packager.get('panelsubscribe','css')],isLoaded:function()
{return typeof $.fn.panelSubscribe=='function';},isReady:$.jet.env.packager.isReady.onFirstJs},$.jet.services.panelSubscribe);})(jQuery);(function($)
{'use strict';$.jet.services.chartseek={start:true,options:{img:{selector:'img[src*=chartId]',intializedClass:'chartSeeked'},script:{selector:'script[type=application\\/x-chart]',className:'jChart'}},init:function()
{(this.$img.length>0||this.$script.length>0)&&$(document).trigger('chartSeekStarted');(this.$script.length>0)&&(typeof $.chartManager!=='undefined')&&$.chartManager.seek(this.$script);},fullTypeRessources:[],resources:[],packages:[],dynamicResources:true,isLoaded:function()
{this.resources=[];this.$img=$(this.options.img.selector);this.$script=$(this.options.script.selector);var start=true,self=this;if(this.$img.length>0)
{this.$img.each(function()
{$.jet.$fake[0]=this;var w=$.jet.$fake.width(),h=$.jet.$fake.height(),optionalCss=$.jet.$fake.attr('data-css'),$iframe=$('<iframe>').attr({src:$.jet.$fake.attr('src')
+'&getHtml=1'
+(!!optionalCss?'&css='+optionalCss:''),frameBorder:0,scrolling:'no'}).css({overflow:'hidden'});if(!(w>1&&h>1)||($.jet.$fake.offset().left+w)>window.innerWidth)
{$('<div>').css({position:'relative',maxWidth:'100%',overflow:'hidden',clear:'both',paddingBottom:Math.round(h/w*100)+'%'}).addClass(self.options.script.className+' '+this.className).append($iframe.css({position:'absolute',width:'100%',height:'100%'})).replaceAll($.jet.$fake);}
else
{$iframe.attr({width:w,height:h}).addClass(this.className).replaceAll($.jet.$fake);}});}
if(this.$script.length>0)
{start=true;this.$script.each(function()
{$.jet.$fake[0]=this;var fullType=$.jet.$fake.attr('data-type'),splittedType=fullType.split('.'),mainType=splittedType.shift();if($.jet.services.chartseek.fullTypeRessources.indexOf(fullType)!==-1)
{start=start&&true;}
else{if($.jet.services.chartseek.packages.indexOf(mainType)===-1)
{self.resources.push($.jet.env.packager.get(mainType.toLowerCase()));$.jet.services.chartseek.packages.push(mainType);start=start&&false;}
if((typeof $.chartManager!='object'||typeof $.chartManager.types[fullType]!='object')&&$.jet.services.chartseek.packages.indexOf(fullType)===-1)
{self.resources.push($.jet.env.packager.get(fullType.toLowerCase()));$.jet.services.chartseek.packages.push(fullType);$.jet.services.chartseek.fullTypeRessources.push(fullType);start=start&&false;}}});}
return start;},isReady:$.jet.env.packager.isReady.fully};}(jQuery));(function($){'use strict';$.jet.services.googleAnalyticsEvents={start:typeof _$('$data.common')._.GAEvents=='object',options:{},init:function(){$(document).trigger('googleAnalyticsEventsReady');$.googleAnalyticsEvents(this.options);},resources:[$.jet.env.packager.get('googleanalyticsevents')],isLoaded:function(){return typeof $.googleAnalyticsEvents=='function';},isReady:$.jet.env.packager.isReady.onFirstJs};}(jQuery));(function($){'use strict';$.jet.services.livingMosaic={start:false,options:{selector:'ul.livingMosaic'},init:function(){$(document).trigger('livingMosaicReady');$(this.options.selector).livingMosaic(this.options);},resources:[$.jet.env.packager.get('livingmosaic')],isLoaded:function(){return typeof $.fn.livingMosaic=='function';},isReady:$.jet.env.packager.isReady.onFirstJs};}(jQuery));(function($){'use strict';$.jet.services.videoOnScroll={start:true,options:{selector:'.jccmPlayer'},init:function()
{if(this.hasVideos)
{$(document).trigger('videoOnScrollReady');this.$videos.videoOnScroll();$.popupOnVideoEnded();}},resources:[],dynamicResources:true,isLoaded:function()
{this.$videos=$(this.options.selector);this.hasVideos=this.$videos.length>0;if(this.hasVideos)
{this.resources.push($.jet.env.packager.get('ccmvideohtml5'));return false;}
return true;},isReady:$.jet.env.packager.isReady.onFirstJs};}(jQuery));(function($)
{'use strict';$.jet.services.magicLinksManager={start:false,dynamicResources:true,options:{lang:'EN'},init:function()
{$.extend($.magicLinksManager.options,this.options);$(document).trigger('magicLinksManagerStarted');},resources:[],isReady:$.jet.env.packager.isReady.fully,isLoaded:function()
{if(typeof $.magicLinksManager!='object')
{this.resources.push($.jet.env.packager.get('magicLinksManager'));this.resources.push($.jet.env.packager.get('magicLinksManager.'+this.options.lang.toLowerCase()));return false;}
return true;}};}(jQuery));(function($)
{'use strict';var _isStarted=false;$.jet.services.eventsFromUrl={start:false,options:{targets:[],datas:{}},init:function()
{if($.jet.started==true)
{if(!_isStarted)
{$.eventsFromUrl(this.options.targets,this.options.datas);_isStarted=true;}}
else{var self=this;$(document).bind('startEnd',function()
{if(!_isStarted)
{$.eventsFromUrl(self.options.targets);_isStarted=true;}});}},resources:[$.jet.env.packager.get('eventsfromurl')],isLoaded:function(){return typeof $.eventsFromUrl=='function';},isReady:$.jet.env.packager.isReady.onFirstJs};}(jQuery));(function($){'use strict';$.jet.services.warningCNIL={start:true,options:{},init:function()
{$.warningCNIL(this.options);}};})(jQuery);(function($){'use strict';var preLoadedPlugins=['nbsp','contextmenu2'],noLanguagePlugins=['lineutils','tableresize'],ckVersion='4.5.3';$.jet.services.ckeditor={start:false,options:{selector:'.ckeditor',removePlugins:'',language:'fr',customConfig:'',extraPlugins:'',loadPlugins:'contextmenu2',base_url:$.coredata.user.COMMON_RESOURCE_HOST+'common/js/ckeditor/',js_variant:$.jet.env.packager.variants.js_ckeditor,packageSeparator:'|',disableAutoInline:false,disableNativeSpellChecker:false,config:{contextMenuEnabledOn:undefined},getUrl:function(resource)
{var notCDN=['plugins/contextmenu2/','plugins/image2/','plugins/image3/','plugins/htmlinsert/','plugins/lineutils/','plugins/nbsp/','plugins/sourcedialog/','plugins/youtube/','plugins/widget/','plugins/ccmsummary/','plugins/ccminsert/','plugins/ccmcall/','plugins/tableresize/','plugins/oembed/','plugins/dialog/'],baseurl=$.jet.services.ckeditor.options.base_url;if(resource.indexOf('//cdn.ckeditor.com/')===0)
{return resource;}
for(var i=0,l=notCDN.length;i<l;++i)
{if(resource.indexOf(notCDN[i])!==-1)
{var host=$.jet.env.packager.host,urljs=$.jet.env.packager.url.js,urlcss=$.jet.env.packager.url.css,baseUrlLength=baseurl.length;if(/\.js$/.test(resource))
{resource.indexOf(baseurl)===0&&(resource=resource.substring(baseUrlLength));resource=resource.replace('plugins/','').replace('lang/','');return host+urljs+'?m=ckeditor.'+resource.replace(/\.js$/,'').replace(/\//g,'.')+'&v='+$.jet.services.ckeditor.options.js_variant;}
if(resource.indexOf(host+urljs)===0||resource.indexOf(host+urlcss)===0||resource.indexOf(baseurl)===0)
{return resource;}
else if(resource.indexOf('common/js/ckeditor/')!==-1)
{resource.indexOf($.jet.services.ckeditor.options.base_url)!==0&&(baseurl+resource);return resource;}
else
{return baseurl+resource;}}}
resource.indexOf(baseurl)===0&&(resource=resource.replace(baseurl,''));return'//cdn.ckeditor.com/'+ckVersion+'/full/'+resource;}},dynamicResources:true,presets:{},init:function()
{var self=this,numInstances=0,instanceLoaded=0,startCKEditor=function(){if(this.options.disableAutoInline){for(var i in CKEDITOR.instances){CKEDITOR.instances[i].destroy();}}
if(this.options.selector){$(this.options.selector).ckeditor(this.options);}
$(document).trigger('ckeditorReady');};this.options.contextMenuEnabledOn&&(this.options.config.contextMenuEnabledOn=this.options.contextMenuEnabledOn);$.extend(true,CKEDITOR.config,this.options.config);if($.isEmptyObject(CKEDITOR.instances)){startCKEditor.call(this);}
else{var editors=CKEDITOR.instances;for(var editor in editors){numInstances++;if(CKEDITOR.instances[editor].status==="ready"){instanceLoaded++;if(instanceLoaded===numInstances){startCKEditor.call(this);}}
else{CKEDITOR.instances[editor].on('instanceReady',function(e){instanceLoaded++;if(instanceLoaded===numInstances){startCKEditor.call(self);}});}}}},resources:[],isLoaded:function()
{var loadPlugins=this.options.loadPlugins.split(','),packageList=['ckeditor'];(typeof window.CKEDITOR_BASEPATH==="undefined")&&(window.CKEDITOR_BASEPATH=this.options.base_url);(typeof window.CKEDITOR_GETURL==="undefined")&&(window.CKEDITOR_GETURL=this.options.getUrl);for(var i=0,l=loadPlugins.length;i<l;++i)
{if(preLoadedPlugins.indexOf(loadPlugins[i])===-1&&noLanguagePlugins.indexOf(loadPlugins[i])===-1)
{loadPlugins.push(loadPlugins[i]+'.'+this.options.language);}}
for(i=0,l=loadPlugins.length;i<l;++i)
{if(preLoadedPlugins.indexOf(loadPlugins[i])===-1)
{packageList.push('ckeditor.'+loadPlugins[i]);}}
this.resources.push('//cdn.ckeditor.com/'+ckVersion+'/full/ckeditor.js');this.resources.push($.jet.env.packager.get(packageList.join(this.options.packageSeparator)));return typeof jQuery.fn.ckeditor=='function';},isReady:$.jet.env.packager.isReady.fully};})(jQuery);(function($){'use strict';$.jet.services.cabestanRetargeting={start:false,options:{set:true,get:/cabestan\.get/.test(window.location.search)},init:function()
{this.options.set&&cabestanRetargeting(this.options);this.options.get&&cabestan.get(this.options);}};})(jQuery);(function($){$.jet.services.weborama={start:false,options:{},init:function()
{weborama(this.options);}};})(jQuery);(function($)
{'use strict';$.jet.services.ciminternetgemius={start:!/commentcamarche.net/.test(window.location.hostname),options:{},init:function()
{var tagcim=document.createElement('script');tagcim.async=true;tagcim.src='http://www.linternaute.com/ciminternet/cimtag.php?v=2';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(tagcim,s);}};}(jQuery));(function($){$.jet.services.hammer={start:false,options:{},init:function()
{$(document).trigger('hammerLoaded');},resources:[$.jet.env.packager.get('hammer')],isLoaded:function(){return typeof $.fn.hammer=='function';}};})(jQuery);(function($){'use strict';$.jet.services.breadCrumbResizer={start:false,options:{minWidth:640,selector:'.ccmcss_breadcrumb'},init:function()
{$(document).trigger('breadCrumbResizerReady');if(window.screen.width<=this.options.minWidth)
{$(this.options.selector).breadCrumbResizer(this.options);$(document).trigger('breadCrumbResizerStarted');}},resources:[$.jet.env.packager.get('breadcrumbresizer')],isLoaded:function(){return typeof $.fn.breadCrumbResizer==='function';}};}(jQuery));(function($)
{$.jet.services.affilizr={start:/linternaute\.com/.test(document.domain)||/affilizr/.test(document.location.search),options:{},init:function()
{window.affilizr_cid="pD6GRs7l1";var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src='http://script.affilizr.com/js/affilizr.js';document.getElementsByTagName('head')[0].appendChild(s);}};})(jQuery);(function($)
{"use strict";$.ccmEditor={defaultConfig:{defaultToolbarTemplate:'<ul class="txtEdit"></ul>',defaultActionTemplate:'<li class="rel"><a title="${toolTip}" href="javascript:void(0);" class="${className}" action="${actionName}" options="${options}"></a></li>',actions:[],active:true,onLoad:[],discreteToolbar:false,actionToolbar:false},instanceArray:[],onLoad:[],actions:{},commonStateHandlerStarted:false,addInstance:function(config,self)
{this.microTemplateInit();var $self=$(self),item;if(self.tagName=='TEXTAREA')
{var old=$self;self=$('<div>a</div>').attr({'id':old.attr('id'),'class':old.attr('class'),'name':old.attr('name')}).html(old.val()).insertAfter(old);old.remove();}
if($self.html()===''){$self.html('<br>');}
var instanceId=this.instanceArray.push({config:config,self:self,state:{editable:config.active,selection:{previousRange:false}}});instanceId--;$self.attr({'ccmId':instanceId,'contentEditable':config.active,'spellcheck':config.active}).addClass('contenteditable').bind('ccmEditorRemove',function()
{var id=$self.attr('ccmId');if(id)
{$.ccmEditor.instanceArray[id].state.toolbar.self.remove();delete($.ccmEditor.instanceArray[id]);$self.unbind().removeAttr('ccmId spellcheck contentEditable').removeClass('contenteditable');}});for(item in config.onLoad)
{typeof(config.onLoad[item])=='function'&&config.onLoad[item].apply(self);}
for(item in $.ccmEditor.onLoad)
{typeof($.ccmEditor.onLoad[item])=='function'&&$.ccmEditor.onLoad[item].apply(this,[instanceId]);}
config.active&&$.ccmEditor.addToolbar(instanceId);},getCurrentSelectionNode:function(){var range,sel,container;if(document.selection&&document.selection.createRange){range=document.selection.createRange();return range.parentElement();}
if(window.getSelection){sel=window.getSelection();if(sel.getRangeAt){if(sel.rangeCount>0){range=sel.getRangeAt(0);}}else{range=document.createRange();range.setStart(sel.anchorNode,sel.anchorOffset);range.setEnd(sel.focusNode,sel.focusOffset);if(range.collapsed!==sel.isCollapsed){range.setStart(sel.focusNode,sel.focusOffset);range.setEnd(sel.anchorNode,sel.anchorOffset);}}
if(range){container=range.commonAncestorContainer;return container.nodeType===3?container.parentNode:container;}}},addToolbar:function(instanceId)
{var
instance=$.ccmEditor.instanceArray[instanceId],self=instance.self,$self=$(self),forcesearch=false,$parent=$self.parent().parent().addClass('ccmeditorParent'),config=instance.config,toolbar=$(config.defaultToolbarTemplate).prependTo($(self).parent().parent().prepend());config.discreteToolbar&&toolbar.hide();instance.state.modes=[];$.browser.mozilla&&$self.bind('keypress',function(e)
{if(e.keyCode==13&&$.ccmEditor.inMode(instanceId,'format'))
{document.execCommand('insertHTML',false,'<p>');e.preventDefault();}});$self.bind('paste',function(e)
{$self.find('[contenteditable]').attr({'contenteditable':'','style':''}).removeClass('contenteditable edito content');}).delegate('*','mouseover',function(e){if(!config.actionToolbar)return;var actions=$.ccmEditor.getNodeActions(e.target);if(actions.length==0)return;var action=actions[0];if(action.toolbar){if(!action.toolbar.$instance)
{action.toolbar.$instance=$(e.target);var options=[];for(var i=0;i<action.toolbar.length;i++){var item={};item.tool=$($.ccmEditor.getTemplate('<a href="javascript:void(0);" class="inlb tooled tool ${className}" original-title="${caption}"></a>',action.toolbar[i]));if(action.toolbar[i].action){item.handler=action.toolbar[i].action;}
if(action.toolbar[i].className){item.options={className:action.toolbar[i].className};}
options.push(item);}
$(e.target).toolBar({template:'<div class="mod box3 inlb">'
+'<span class="tick tickTop tickSize10 tickGrey"></span>'
+'<span class="tick tickTop tickSize9 tickWhite"></span>'
+'</div>',className:'actionToolBar mod box3 inlb pad10',draggable:false,toolsArray:options,position:{my:'left top',at:'left bottom',offset:'10 -10',collision:'none none'}});action.toolbar.$instance=$(e.target).data('toolBar');$(action.toolbar.$instance).prepend($(action.toolbar.$instance).find('a'));$(action.toolbar.$instance).find('a').tipsy({gravity:$.fn.tipsy.autoNS,delayIn:100,fade:false,opacity:0.75});}
$parent=$(e.target).parents('.component').first();if($parent.length>0){$parent.data('toolBar',action.toolbar.$instance);action.toolbar.$instance.attachToolBar($parent);}else{$(e.target).data('toolBar',action.toolbar.$instance);action.toolbar.$instance.attachToolBar($(e.target));}
e.stopPropagation();}}).bind('click keyup refreshMode',function(e,action)
{if(e.type!='refreshMode'){$.ccmEditor.selectNode.lastInstance=false;}
var search=true;if(e.type=='keyup')
{switch(e.keyCode)
{case 13:$.browser.msie&&(search=false);break;case 86:!e.ctrlKey&&(search=false);break;case 8:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:break;default:search=forcesearch;break;}}
if(search)
{forcesearch=false;if(!action){toolbar.find('>li.txtActive').removeClass('txtActive');instance.state.modes=[];}
var target=(function(e)
{var node;switch(e.type)
{case'refreshMode':case'keyup':node=$.ccmEditor.getCurrentSelectionNode();break
default:node=e.target;}
return node||$self[0];})(e),tag=target.tagName,styles=$(target).attr('style'),addAction=function(actionId)
{var action=$.ccmEditor.actions[config.actions[actionId]];toolbar.find('a.'+action.className).parent().addClass('txtActive');instance.state.modes.push(config.actions[actionId]);},checkAction=function(tag,styles,target)
{!styles&&(styles='');for(var actionId in config.actions)
{if(typeof($.ccmEditor.actions[config.actions[actionId]])=='undefined'||(typeof($.ccmEditor.actions[config.actions[actionId]].matchTag)=='undefined'&&typeof($.ccmEditor.actions[config.actions[actionId]].matchStyle)=='undefined')){continue;}
if($.ccmEditor.actions[config.actions[actionId]].matchTag)
{for(var t in $.ccmEditor.actions[config.actions[actionId]].matchTag)
{if($.ccmEditor.actions[config.actions[actionId]].matchTag[t]==tag)
{addAction(actionId);}}}
if($.ccmEditor.actions[config.actions[actionId]].matchStyle)
{for(var style in $.ccmEditor.actions[config.actions[actionId]].matchStyle)
{if(typeof $.ccmEditor.actions[config.actions[actionId]].matchStyle[style]=='function'){continue;}
if(styles.match($.ccmEditor.actions[config.actions[actionId]].matchStyle[style]))
{addAction(actionId);}}}}
var parent=$(target).parent();parent.attr('contentEditable')!='true'&&parent[0]&&checkAction(parent[0].tagName,parent.attr('style'),parent[0]);};instance.state.selection.target=target;!action&&($(target).attr('contenteditable')!='true')&&checkAction(tag,styles,target);if(e.type=='refreshMode')
{forcesearch=true;if(action){for(var a in $.ccmEditor.actions)
{if($.ccmEditor.actions[a].children&&$.inArray(action,$.ccmEditor.actions[a].children)!=-1)
{action=a;break;}}
for(var actionId in config.actions)
{if(config.actions[actionId]==action)
{if($.ccmEditor.inMode(instanceId,action))
{$.ccmEditor.removeMode(instanceId,action);}
else
{$.ccmEditor.actions[config.actions[actionId]].discrete||addAction(actionId);if(typeof($.ccmEditor.actions[config.actions[actionId]].cancelActions)=='object'){var ca=$.ccmEditor.actions[config.actions[actionId]].cancelActions;for(var cid in ca)
{$.ccmEditor.removeMode(instanceId,ca[cid]);}}}
break;}}}}}
if(e.type=='keyup')
{for(actionId in config.actions)
{if(typeof($.ccmEditor.actions[config.actions[actionId]])=='undefined'||typeof($.ccmEditor.actions[config.actions[actionId]].onKey)=='undefined'){continue;}
$.ccmEditor.actions[config.actions[actionId]].onKey.apply(this,[e,instanceId]);}
instance.state.lastKey=e.keyCode;}});config.discreteToolbar&&$self.bind('active',function(e){toolbar.slideDown(100);}).bind('inactive',function(e){setTimeout(function(){toolbar.is(':visible')&&toolbar.slideUp(100);},100);});(config.discreteToolbar||config.defaultValue)&&!this.commonStateHandlerStarted&&(function(){$.ccmEditor.commonStateHandlerStarted=true;$('body').live('focus click',function(e){var
i,$c,$t=$(e.target),$p=$t.closest('.ccmeditorParent');if($p.length>0)
{$c=$p.find('.contenteditable:first').trigger('active');for(i=0;i<$.ccmEditor.instanceArray.length;++i)
{$.ccmEditor.instanceArray[i]&&$.ccmEditor.instanceArray[i].self!=$c[0]&&$($.ccmEditor.instanceArray[i].self).trigger('inactive');}}
else{for(i=0;i<$.ccmEditor.instanceArray.length;++i)
{$.ccmEditor.instanceArray[i]&&$($.ccmEditor.instanceArray[i].self).trigger('inactive');}}});var isComponentDown=false;$('.contenteditable').delegate('','mousedown',function(eventObject){var component=$(eventObject.target).parents('.component').first();if(component.length){isComponentDown=component[0];component.addClass('dragging');$('*',component[0]).addClass('dragging');if(window.getSelection&&!$.browser.msie){$.ccmEditor.selectNode(isComponentDown,true);}else{window.setTimeout(function(){$.ccmEditor.selectNode(isComponentDown,true);},1);}}else isComponentDown=false;});$('.contenteditable').delegate('','mouseup DOMNodeInserted',function(eventObject){if(isComponentDown){if($.browser.webkit){var targetNode=$('.component.dragging');$('.contenteditable .dragging').each(function(){if(!$(this).hasClass('component')&&$(this).parent('.component').length==0){targetNode.prepend(this);}});$.ccmEditor.selectNode(targetNode[0]);}else{$.ccmEditor.selectNode(eventObject.target);}
$('.contenteditable .dragging').removeClass('dragging');isComponentDown=false;}});})();toolbar.bind('click action',function(e,externalAction,externalOptions)
{e.type=='click'&&e.target.tagName=='LI'&&(e.target=$(e.target).find('a')[0]);var action=$(e.target).attr('action');if(typeof(externalAction)=='string'){action=externalAction;}
var self=$(this).parent().find('div[contenteditable=true]'),instanceId=$.ccmEditor.getNodeInstanceId(self[0]),selection=$.ccmEditor.getSelection();$.ccmEditor.imageManager.currentId=instanceId;(typeof(action)!='undefined'||$(e.target)[0].tagName=="A")&&((!$.browser.webkit&&!$.browser.opera))&&$self.focus();var
$target=$(e.target),fromAViewBox=$target.hasClass('restoreSelection'),actionDefined=typeof(action)!='undefined';if(!actionDefined&&$target[0].tagName=="A"&&!fromAViewBox&&((selection.toString)||(typeof selection.text!='undefined')))
{$.ccmEditor.saveSelection(selection,instanceId);}
else if(actionDefined&&fromAViewBox&&instance.state.selection.previousRange!==false)
{if(selection.removeAllRanges){selection.removeAllRanges();selection.addRange(instance.state.selection.previousRange);}
else{if(instance.state.selection.previousRange.select){instance.state.selection.previousRange.select();}}}
typeof(action)=='string'&&typeof($.ccmEditor.actions)=='object'&&typeof($.ccmEditor.actions[action])=='object'&&typeof($.ccmEditor.actions[action].action)=='function'&&$.ccmEditor.actions[action].action(instanceId,(typeof(externalOptions)!='undefined'?externalOptions:$(e.target).attr('options')));if(typeof(action)!='undefined'&&instance.state.selection.previousRange!==false){instance.state.selection.previousRange=false;}
($(e.target).attr('viewbox')!='true'||action)&&self.trigger('refreshMode',[action]);});$.ccmEditor.imageManager.currentId=instanceId;instance.state.toolbar={visible:true,self:toolbar};for(var actionId in config.actions)
{if(typeof($.ccmEditor.actions[config.actions[actionId]])=='undefined'){continue;}
var template=(typeof($.ccmEditor.actions[config.actions[actionId]].template)=='undefined'||$.ccmEditor.actions[config.actions[actionId]].template===''?instance.config.defaultActionTemplate:$.ccmEditor.actions[config.actions[actionId]].template);if(typeof($.ccmEditor.actions[config.actions[actionId]].template)=='function')
{template=$.ccmEditor.actions[config.actions[actionId]].template.apply(self,[config]);}
template=$.ccmEditor.getTemplate(template,$.extend({instanceId:instanceId},$.ccmEditor.actions[config.actions[actionId]]));var action=$(template).appendTo(toolbar);action.find('*').tipsy({gravity:$.fn.tipsy.autoNS,delayIn:100,fade:false,opacity:0.75});if(typeof($.ccmEditor.actions[config.actions[actionId]].onLoad)=='function')
{$.ccmEditor.actions[config.actions[actionId]].onLoad.apply(action,[config,instanceId]);}}},inMode:function(id,mode)
{for(var m in $.ccmEditor.instanceArray[id].state.modes){if($.ccmEditor.instanceArray[id].state.modes[m]==mode){return m;}}
return false;},removeMode:function(id,mode)
{var actionId=$.ccmEditor.inMode(id,mode);if(!actionId){return false;}
delete $.ccmEditor.instanceArray[id].state.modes[actionId];$.ccmEditor.instanceArray[id].state.toolbar.self.find('a.'+$.ccmEditor.actions[mode].className).parent().removeClass('txtActive');return actionId;}};$.extend($.ccmEditor,$.microTemplate);$.fn.ccmEditor=function(config)
{config=$.extend(true,{},$.ccmEditor.defaultConfig,config);return this.each(function()
{(typeof($(this).attr('ccmid'))=='undefined')&&$.ccmEditor.addInstance(config,this);});};})(jQuery);(function($)
{$.extend(true,$.ccmEditor.actions,{'bold':{action:function(id){document.execCommand('bold',false,false);},className:'bold',actionName:'bold',toolTip:'$l{TT_BOLD}',matchTag:['B','STRONG'],matchStyle:['font-weight: bold']},'italic':{action:function(id){document.execCommand('italic',false,false);},className:'italique',actionName:'italic',toolTip:'$l{TT_ITALIC}',matchTag:['I','EM'],matchStyle:['font-style: italic']},'underline':{action:function(id){document.execCommand('underline',false,false);},className:'underline',actionName:'underline',toolTip:'$l{TT_UNDERLINE}',matchTag:['U'],matchStyle:['text-decoration: underline']},'strike':{action:function(id){document.execCommand('strikethrough',false,false);},className:'delete',actionName:'strike',toolTip:'$l{TT_STRIKE}',matchTag:['S','STRIKE'],matchStyle:['text-decoration: line-through']},'code':{action:function(id)
{if($.ccmEditor.inMode(id,'code')){document.execCommand('formatBlock',false,'<p>');}
else{document.execCommand('formatBlock',false,'<pre>');$($.ccmEditor.instanceArray[id].self).trigger('codeFormating');}},className:'code',actionName:'code',toolTip:'$l{TT_CODE}',matchTag:['PRE'],onKey:function(e,id){if(e.keyCode==13)
{var modeId=$.ccmEditor.inMode(id,'code');if(modeId)
{if($.ccmEditor.instanceArray[id].state.lastKey==13)
{$.ccmEditor.removeMode(id,'code');document.execCommand('formatBlock',false,'<p>');$($.ccmEditor.instanceArray[id].self).trigger('codeFormating');}
else{$.ccmEditor.ui.showSelectionAlert($.ccmEditor.langs[$.ccmEditor.lang]['CODE_TWICE']);}}}}},'ul':{action:function(id){document.execCommand('insertUnorderedList',false,false);},className:'ul',actionName:'ul',toolTip:'$l{TT_UL}',matchTag:['UL'],cancelActions:['ol']},'ol':{action:function(id){document.execCommand('insertOrderedList',false,false);},className:'ol',actionName:'ol',toolTip:'$l{TT_OL}',matchTag:['OL'],cancelActions:['ul']},'right':{action:function(id){document.execCommand('justifyRight',false,false);},className:'imgR',actionName:'right',toolTip:'$l{TT_ALIGNRIGHT}'},'left':{action:function(id){document.execCommand('justifyLeft',false,false);},className:'imgL',actionName:'left',toolTip:'$l{TT_ALIGNLEFT}'},'center':{action:function(id){document.execCommand('justifyCenter',false,false);},className:'imgC',actionName:'center',toolTip:'$l{TT_ALIGNCENTER}'}});})(jQuery);(function($)
{$.extend(true,$.ccmEditor.actions,{'format':{children:['title','normal'],className:'font',template:['<li class="rel">','<a href="javascript:void(0);" class="${className}" title="${toolTip}"></a>','<div style="left:-1px;" class="mod" >','<div class="bd box3">','<ul class="list1">','<li><a action="normal" class="restoreSelection">$l{FORMAT_NORMAL}</a></li>','<li><a action="title" options="2" class="restoreSelection"><h2 action="title" options="2" class="restoreSelection">$l{FORMAT_TITLE} 1</h2></a></li>','<li><a action="title" options="3" class="restoreSelection"><h3 action="title" options="3" class="restoreSelection">$l{FORMAT_TITLE} 2</h3></a></li>','<li><a action="title" options="4" class="restoreSelection"><h4 action="title" options="4" class="restoreSelection">$l{FORMAT_TITLE} 3</h4></a></li>','<li><a action="title" options="5" class="restoreSelection"><h5 action="title" options="5" class="restoreSelection">$l{FORMAT_TITLE} 4</h5></a></li>','</ul>','</div>','</div>','</li>'].join(''),toolTip:'$l{TT_FORMAT}',matchTag:['H1','H2','H3','H4','H5','H6'],onLoad:function(config,instance)
{$(this).ccmEditorViewBox();}},'title':{action:function(id,options){document.execCommand('formatBlock',false,'<h'+options+'>');},actionName:'title'},'normal':{action:function(id){document.execCommand('formatBlock',false,'<p>');},actionName:'normal'}});})(jQuery);(function($)
{$.extend(true,$.ccmEditor.defaultConfig,{colors:['black','#e3034f','#3d93cd','#5a5a5a','#a8a8a8','rgb(137,112,224)']});$.extend(true,$.ccmEditor.actions,{'colors':{children:['color'],action:function(id){document.execCommand('bold',false,false);},className:'color',matchStyle:['color'],template:function(config){var template=['<li class="rel">','<a title="${toolTip}" href="javascript:void(0);" class="${className}"></a>','<div style="left: -1px; width: 82px;" class="mod box9" >','<div class="bd">','<ul class="list1"><li class="pickColor clear">'].join('');for(var color in config.colors)
{template+='<a action="color" onclick="return false;" href="javascript:void(0);" options="'+config.colors[color]+'" style="background-color:'+config.colors[color]+';">&nbsp;</a>';}
template+='</li></ul></div></div></li>';return template;},toolTip:'$l{TT_COLORS}',onLoad:function()
{$(this).ccmEditorViewBox();}},'color':{action:function(id,options){document.execCommand('foreColor',false,options);return false;},actionName:'color'}});})(jQuery);(function($)
{$.extend(true,$.ccmEditor.defaultConfig,{index:{onInsert:function(){return true;},allowTitle:false,allowAlign:false}});$.ccmEditor.indexManager={on_click:function(e){var
$this=$(e.target),$self=$(e.currentTarget);$.profile&&console.log('index popup : click',$this,$self);},init_values:function(self){$.profile&&console.log('index popup : init',self);var $target=$($.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].state.selection.target);if($target.length){var $title=$target.find('div.hd').first();if($target.hasClass('left')){$('#index_align',self).alignInput('select','left');}else{$('#index_align',self).alignInput('select','right');}
if($title.hasClass('default')){self.find('input#indexTitle').ccmInputValue('');}else{self.find('input#indexTitle').ccmInputValue($title.text());}}else{self.find('input#indexTitle').ccmInputValue('');$('#index_align',self).alignInput('select','left');}
return false;},getIndexContent:function(self){var title=self.find('input#indexTitle').ccmInputValue();var align=$('#index_align',self).alignInput();var css='hd';if(!title){css+=' default';title='Summary';}
return('<nav class="'+align+' summary box1 pad10 component">'
+'<div class="'+css+'">'
+title
+'</div>'
+'<div class="summary-preview"></div>'
+'</nav>');},insert:function(self){$.profile&&console.log('index popup : insert',self);$.ccmEditor.replaceTextSelection($.ccmEditor.imageManager.currentId,$.ccmEditor.indexManager.getIndexContent(self));self.find('a:first').trigger('hide');}};$.extend(true,$.ccmEditor.actions,{'index':{toolbar:[{caption:'$l{TB_IMG_UPDATE}',className:'icoOptionsPlus',action:function(toolbar,options){$.ccmEditor.getNodeEditor(this).state.selection.target=this;$.ccmEditor.raiseAction('index',this);}},{caption:'$l{TB_IMG_DELETE}',className:'icoSupp',action:function(toolbar,options){this.remove();toolbar.hide();}}],className:'summary',actionName:'undefined',toolTip:'$l{TT_INDEX}',matchTag:['NAV','H1'],template:function(config){var left='-1px';if($('html').attr('dir')==='rtl'){left='-500px';}
return['<li class="rel">','<a href="javascript:void(0);" class="${className}" title="${toolTip}"></a>','<div style="left: ',left,'; width: 500px;" class="mod box9 divModalImage" id="divModalIndex">','<div class="ct pad15">','<div class="marB15">','<a class="floatRight icoClose close" title="$l{TT_CLOSE}" href="javascript:void(0);"></a>','<h2 class="h1">$l{INDEX_INSERT}</h2>','</div>','<form action="#" class="formUpload" method="post">','<div class="line">','<label class="marB10 txtL" for="indexTitle">$l{INDEX_TITLE}</label>','<div class="clear input">','<input type="text" class="inputTxt" name="indexTitle" id="indexTitle" title="$l{INDEX_TITLE}" default="$l{INDEX_TITLE_HINT}" />',,'</div>','</div>','<div id="index_align" class="line">','<label class="marB10 txtL">$l{INDEX_ALIGN}</label>','</div>','<div class="form formS formError">','<div class="txtR">','<a href="javascript:void(0);" class="cancel" style="display: none" title="$l{TT_CANCEL}">$l{BUTTON_CANCEL}</a>','<a id="btnInsertImage" class="marL5 buttonM-B buttonSel insert restoreSelection" href="javascript:void(0);">$l{INDEX_BTN_INSERT}</a>','</div>','</div>','</form>','</div>','</li>'].join('');},onLoad:function(config,instanceId){var self=$(this);$('.inputTxt',self).InitInputDefault();$('.checkbox input',self).ccmCheckbox();$('#index_align',self).alignInput({items:{center:{enabled:false},full:{enabled:false}}});self.ccmEditorViewBox({hideItSelf:false,instanceId:instanceId,autoCloseOnValid:false,watched:[{selector:'input#indexTitle',event:'change click',group:'desktop',validators:[{type:'go',valid:function(config){return!($(this).val()==='');}}]}],beforeShow:function(popup,config){$.ccmEditor.indexManager.init_values(self);},onCancel:function(popup,config){popup.find('a.insert').focus();this.trigger('try');},onHide:function(){$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].state.selection.target=null;},onShow:function(popup,config){popup.find('a.insert').focus();this.trigger('try');},onValid:function(conf){var self=$(this).first();$.ccmEditor.indexManager.insert(self);return false;}}).bind('click',{id:instanceId},$.ccmEditor.indexManager.on_click);}}});})(jQuery);(function($)
{$.extend(true,$.ccmEditor.defaultConfig,{image:{uploader:function(){return((typeof $data.common!='undefined'&&typeof $data.common.baseUrl!='undefined')?$data.common.baseUrl:'/'+$.ccmEditor.lang.toLowerCase())+'/m/_xhr_upload_image/';},downloader:function(){return((typeof $data.common!='undefined'&&typeof $data.common.baseUrl!='undefined')?$data.common.baseUrl:'/'+$.ccmEditor.lang.toLowerCase())+'/m/_xhr_download_image/';},templateImage:'<img class="img_preview_image" viewbox="true" src="/image_temp/pixel.gif">',defaultWidth:200,maxWidth:600,currentContent:{'upload':null,'download':null},currentTypeAction:null,regexList:{'upload':'(.*)\.(?:jpg|jpeg|gif|png|JPG|JPEG|GIF|PNG)$','download':'^https?://(.*)\.(?:jpg|jpeg|gif|png|JPG|JPEG|GIF|PNG)$'},onInsert:function(){return true;},allowExternal:true,collapseExternal:true,allowUpload:true,collapseOptions:true,allowLegend:false,allowAlign:false,allowFigure:false,allowBatch:true,allowBatchChoice:false,defaultBatchChoice:true}});var _inBatch=false;$.ccmEditor.imageManager={currentId:0,on_click:function(e){var _this=$(e.target),_actid=_this.attr('actid'),self=$(e.currentTarget);if(!_actid){return;}
switch(_actid)
{case'submitUpload':e.stopPropagation();e.preventDefault();$.ccmEditor.imageManager.send_image(self,'upload',e.data.id,true);return false;case'submitDownload':e.stopPropagation();e.preventDefault();$.ccmEditor.imageManager.send_image(self,'download',e.data.id,true);return false;case'linkShowDownload':self.find('div.dlImage').fadeIn(100);self.find('div.introImage').css('display','none');self.find('input.downloadImage').focus();return false;case'linkShowOptions':self.find('div.optImage').fadeIn(100);self.find('div.introOptions').css('display','none');return false;case'refresh':$.ccmEditor.imageManager.refresh_preview(self);return true;}},refresh_preview:function(self){var $picture=self.find('div.container_preview_image img');if($picture.length>0){$.ccmEditor.imageManager.preview_image.apply(self,["[{code: 1, resultat: '"
+$picture.attr('src')
+"', width: "
+"'"+$picture.attr('width')+"'"
+" }]",'downloadImage',true]);}},send_image:function(self,type_action,currentId,previewMode){var
nomInput='input.'+type_action+'Image',input=self.find(nomInput),inputVal=input.val();if(previewMode)
{if(inputVal==='')
{$.ccmEditor.ui.addInputAlert(input,$.ccmEditor.langs[$.ccmEditor.lang]['IMAGE_'+type_action.toUpperCase()+'_ERROR_EMPTY']);return false;}else
{if(type_action=='upload')
{res_image=$.ccmEditor.imageManager.is_image(inputVal,type_action,currentId);if(res_image===null)
{$.ccmEditor.ui.addInputAlert(input,$.ccmEditor.langs[$.ccmEditor.lang]['IMAGE_'+type_action.toUpperCase()+'_ERROR_TYPE']);return false;}}}}
var currentContent=$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.currentContent[type_action],currentTypeAction=$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.currentTypeAction;if((inputVal!=currentContent)||(currentTypeAction!=type_action)){$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.currentContent[type_action]=inputVal;$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.currentTypeAction=type_action;eval('$.ccmEditor.imageManager.send_'+type_action+'(self,'+previewMode+')');$.ccmEditor.imageManager.currentId=currentId;}
return false;},init_values:function(self)
{var $instance=$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId];if(typeof $instance.config.usePercentageForImageResize=='undefined'){$instance.config.usePercentageForImageResize=false;}else if($instance.config.usePercentageForImageResize==true){$instance.config.image.defaultWidth='30%';}
self.find('input.uploadImage').val('');self.find('input#imgLegend_'+$.ccmEditor.imageManager.currentId).val('');self.find('input#imgCredit_'+$.ccmEditor.imageManager.currentId).val('');self.find('input#imgAlignNone').attr('checked','checked');$.ccmEditor.ui.removeInputAlert(self.find('input.btnUpload'));$.ccmEditor.ui.removeInputAlert(self.find('input.downloadImage'));$instance.config.image.currentContent.download=null;$instance.config.image.currentContent.upload=null;$instance.config.image.currentTypeAction=null;if($instance.config.image.collapseOptions)
{self.find('div.optImage').css('display','none');self.find('div.introOptions').css('display','block');}else{self.find('div.optImage').css('display','block');self.find('div.introOptions').css('display','none');}
if($.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.collapseExternal)
{self.find('div.dlImage').css('display','none');self.find('div.introImage').css('display','block');}
else{self.find('div.dlImage').css('display','block');self.find('div.introImage').css('display','none');setTimeout(function(){self.find('input.downloadImage').focus();},500);}
var target=$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].state.selection.target;if(target){var $img=$target=$(target);if($img[0].tagName!='IMG'){if($img[0].tagName=='FIGURE'){$img=$(target).find('img');}else{$img=null;}}
$.profile&&console.info($target,$img);}
if(target&&$img){src=$img.attr('src');if(src.substring(0,11)=='data:image/'){self.find('input.downloadImage').val('data-url');}else{self.find('input.downloadImage').val(src);}
$p=$target.find('p').clone();$p.find('span').remove();self.find('input#imgLegend_'+$.ccmEditor.imageManager.currentId).ccmInputValue($p.text());self.find('input#imgCredit_'+$.ccmEditor.imageManager.currentId).ccmInputValue($target.find('.author').text());if($.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.allowAlign){if($target.hasClass('right')){$('#imgAlign',self).alignInput('select','right');}else if($target.hasClass('center')){$('#imgAlign',self).alignInput('select','center');}else if($target.hasClass('left')){$('#imgAlign',self).alignInput('select','left');}else if($target.hasClass('full')){$('#imgAlign',self).alignInput('select','full');}}
$.ccmEditor.imageManager.preview_image.apply(self,["[{code: 1, resultat: '"
+src
+"', width: "
+$img.width()
+" }]",'downloadImage',true]);$.profile&&console.info('width',$img.width());}else{self.find('div.container_preview_image').html('');self.find('input.downloadImage').val('');self.find('input.inputTxt').ccmInputValue('');}
self.find('input.inputTxt').keyup(function(e){e.currentTarget=self;$.ccmEditor.imageManager.on_click(e);});return false;},send_upload:function(self,showPreview){$(self).find('form.formUpload').ajaxSubmit({url:$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.uploader(),dataType:'json',success:function(r){$.ccmEditor.imageManager.preview_image.apply(self,[r,'btnUpload',showPreview]);}});},send_download:function(self,showPreview){$.ajax({url:$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.downloader(),dataType:"json",async:true,data:{downloadImage:self.find('input.downloadImage').val()},success:function(data){$.ccmEditor.imageManager.preview_image.apply(self,[data,'downloadImage',showPreview]);}});},preview_image:function(responseText,targetButton,showPreview){var res=eval(responseText),$this=$(this),usePercentage=$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.usePercentageForImageResize;res=res[0];if(res.code==1){if(usePercentage==true){widthImage=$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.defaultWidth;}else{widthImage=$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.defaultWidth;if((res.width>0)&&(res.width<$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.maxWidth)){widthImage=res.width;}}
var css=null;if($.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.allowAlign){css=$this.find('#imgAlign').alignInput();if(css=='full'){if(usePercentage==true){widthImage='100%';}else{widthImage='1280';}}else if(!css){css='left';}else{if(widthImage=='1280'){widthImage='200';}else if(widthImage=='100%'){widthImage='30%';}
if(css=='center'){css+=' block';}}}
var id=$.ccmEditor.imageManager.currentId,html=$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.templateImage,legend=$this.find('input#imgLegend_'+id).ccmInputValue(),credit=$this.find('input#imgCredit_'+id).ccmInputValue();if(legend||credit){html+='<figcaption viewbox="true"><p>';if(credit){html+='<span class="author" viewbox="true">'+credit+'</span>';}
if(legend){html+=legend;}
html+='</p></figcaption>';}
if($.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.allowFigure)
{if(usePercentage==true){var unit='',dataWidthPer=' data-widthPer="'+widthImage+'"';}else{var unit='px',dataWidthPer='';}
$preview=$this.find('div.container_preview_image').html('<figure'+dataWidthPer+' style="width: '
+widthImage
+unit+'" class="img_preview_image component" viewbox="true">'
+html
+'</figure>');}else{$preview=$this.find('div.container_preview_image').html(html);}
$picture=$this.find('img',$preview);$picture.attr('src',res.resultat).bind('dragstart',function(e){e.preventDefault();});$.ccmEditor.ui.removeInputAlert($this.find('input.btnUpload'));$.ccmEditor.ui.removeInputAlert($this.find('input.downloadImage'));if(usePercentage==false){$picture.attr({width:widthImage}).width(widthImage);}else{var $edito=$this.parents('.ccmeditorParent').find('.edito');$edito.css('maxWidth',$edito.width()+'px');}
if($.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.allowFigure){$this.find('figure',$preview).addClass(css).addClass('image');}else{$picture.addClass(css).addClass('image');}
if(showPreview){$this.find('div.div_preview_image').css('display','block');}else{$.ccmEditor.imageManager.insert_image($this);}}else{$this.find('div.div_preview_image').css('display','none');$this.find('div.container_preview_image').html('');$.ccmEditor.ui.addInputAlert($this.find('input.'+targetButton),res.resultat);}},getImageNode:function(self){return this;},insert_image:function(self)
{if(self.find('div.container_preview_image').html()==='')
{$.ccmEditor.ui.addInputAlert(self.find('input.btnUpload'),$.ccmEditor.getTemplate('$l{IMAGE_UPLOAD_ERROR_EMPTY}'));return false;}
var img=self.find('.img_preview_image:first');$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.onInsert.apply(self,[img])&&$.ccmEditor.replaceTextSelection($.ccmEditor.imageManager.currentId,$.ccmEditor.imageManager.getImageNode.call(img.clone().removeClass('img_preview_image').wrap('<div/>').parent(),self).html(),$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.allowBatch&&_inBatch);self.find('a:first').trigger('hide');},is_image:function(value,type_action,currentId){var regex=$.ccmEditor.instanceArray[currentId].config.image.regexList[type_action];return(new RegExp(regex).exec(value));}};$.extend(true,$.ccmEditor.actions,{'image':{toolbar:[{caption:'$l{TB_IMG_UPDATE}',className:'icoOptionsPlus',action:function(toolbar,options){$.ccmEditor.selectNode(this[0]);$.ccmEditor.raiseAction('image',this);}},{caption:'$l{TB_IMG_DELETE}',className:'icoSupp',action:function(toolbar,options){this.remove();toolbar.hide();}},{caption:'$l{TB_IMG_SIZE_UP}',className:'icoMore',action:function(toolbar,options){$target=this.find('img').andSelf();$target.height('auto');$target.attr('height','auto');if($target.hasClass('floatSlide'))return;var width=$target.width();if(!width){var defaultWidth=$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.defaultWidth;$target.width(defaultWidth);$target.attr('width',defaultWidth);}else{if($.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.usePercentageForImageResize==true&&typeof $target.attr('data-widthPer')!='undefined'){width=parseInt($target.attr('data-widthPer').replace('%',''),10)+5;if(width<=75){width+='%';this.width(width);this.attr('width',width);this.attr('data-widthPer',width);}}else{width+=50;if(width<=450){$target.width(width);$target.attr('width',width);}}}
toolbar.trigger('show',[toolbar,this,this,options]);}},{caption:'$l{TB_IMG_SIZE_DOWN}',className:'icoLess',action:function(toolbar,options){$target=this.find('img').andSelf();$target.height('auto');$target.attr('height','auto');if($target.hasClass('floatSlide'))return;var width=$target.width();if(!width){var defaultWidth=$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.image.defaultWidth;$target.width(defaultWidth).attr('width',defaultWidth);}else{if($.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].config.usePercentageForImageResize==true&&typeof $target.attr('data-widthPer')!='undefined'){width=parseInt($target.attr('data-widthPer').replace('%',''),10)-5;if(width>0){width+='%';this.width(width);this.attr('width',width);this.attr('data-widthPer',width);}}else{width-=50;if(width>0){$target.width(width);$target.attr('width',width);}}}
toolbar.trigger('show',[toolbar,this,this,options]);}}],className:'img',actionName:'undefined',toolTip:'$l{TT_IMAGE}',matchTag:['FIGURE','IMG','FIGCAPTION','LEGEND'],templateParsing:function(template){return template;},template:function(config)
{var left='-1px';if($('html').attr('dir')==='rtl'){left='-500px';}
return	$.ccmEditor.actions.image.templateParsing(['<li class="rel">','<a href="javascript:void(0);" class="${className}" title="$l{TT_IMAGE}"></a>','<div style="left: ',left,'; width: 500px;" class="mod box9 divModalImage" id="divModalImage">','<div class="ct pad15">','<div class="marB15">','<a class="floatRight icoClose close" title="$l{TT_CLOSE}" href="javascript:void(0);"></a>','<h2 class="h1">$l{IMAGE_INSERT}</h2>','</div>','<form action="#" class="formUpload" method="post">','<input type="hidden" name="MAX_FILE_SIZE" value="5000000">','<div class="form formS formError">',(function(){if(config.image.allowUpload)
{return['<div class="line">','<label class="marB10 txtL" for="uploadImage_${instanceId}">$l{IMAGE_UPLOAD}</label>','<div class="clear input">','<div class="floatLeft">','<input type="file" viewbox="true" style="padding:2px;" class="uploadImage" id="uploadImage_${instanceId}" name="uploadImage" title="$l{IMAGE_UPLOAD_ADVICE}">','</div>','<div class="floatRight">','<input type="button" class="buttonS-G btnUpload" name="btnUpload" id="btnUpload" value="$l{IMAGE_PREVIEW}" actid="submitUpload">','</div>','</div>','</div>'].join('');}})(),(function(){if(config.image.allowExternal)
{return['<div class="line introImage" style="'+(config.image.collapseExternal?'':'display:none;')+'">','$l{IMAGE_CHOOSE_PART_1}<a href="javascript:void(0);" actid="linkShowDownload">$l{IMAGE_CHOOSE_PART_2}.</a>','</div>','<div class="line dlImage" style="'+(config.image.collapseExternal?'display:none;':'')+'">','<label class="marB10 txtL" for="downloadImage_${instanceId}">$l{IMAGE_GETURL}</label>','<div class="clear input">','<div class="floatLeft">','<input type="text" style="width: 350px;" class="inputTxt downloadImage" name="downloadImage" id="downloadImage_${instanceId}" title="$l{IMAGE_DOWNLOAD_ADVICE}">','</div>','<div class="floatRight">','<input type="button" class="buttonS-G" name="btnDownload" id="btnDownload" value="$l{IMAGE_PREVIEW}" actid="submitDownload">','</div>','</div>','</div>'].join('');}
return;})(),(function(){if(config.image.allowLegend||config.image.allowAlign)
{return['<div class="line introOptions" style="'+(config.image.collapseOptions?'':'display:none;')+'">','$l{IMAGE_OPTIONS_PART_1}<a href="javascript:void(0);" actid="linkShowOptions">$l{IMAGE_OPTIONS_PART_2}.</a>','</div>'].join('');}
return;})(),(function(){if(config.image.allowLegend)
{return['<div class="optImage" style="'+(config.image.collapseOptions?'display:none;':'')+'">','<label class="marB10 txtL" for="imgLegend_${instanceId}">$l{IMAGE_LEGEND}</label>','<div class="line">','<div class="input left" style="width: 45%;">','<input type="text" actid="refresh" id="imgLegend_${instanceId}" class="inputTxt" default="$l{IMAGE_LEGEND_INPUT}" title="$l{IMAGE_LEGEND_INPUT}" />','</div>','<div class="input right" style="width: 45%;">','<input type="text" actid="refresh" id="imgCredit_${instanceId}" class="inputTxt" default="$l{IMAGE_CREDITS_INPUT}" title="$l{IMAGE_CREDITS_INPUT}" />','</div>','</div>','</div>'].join('');}
return;})(),'<div class="div_preview_image">','<label class="marB10 txtL" for="1">$l{IMAGE_PREVIEW}</label>',(function(){if(config.image.allowAlign)
{return'<div id="imgAlign"></div>';}
return;})(),'<div class="line edit pad10 marB15 container_preview_image"></div>','</div>',(function()
{if(config.image.allowBatch&&config.image.allowBatchChoice&&document.createRange)
{return['<div class="txtR" title="$l{IMAGE_IN_BATCH_TITLE}">','$l{IMAGE_IN_BATCH} : <input type="checkbox" class="inBatch">','</div>'].join('');}
return;})(),'<div class="txtR">','<a href="javascript:void(0);" class="cancel" style="display:none;" title="$l{TT_CANCEL}">$l{BUTTON_CANCEL}</a>','<a id="btnInsertImage" class="marL5 buttonM-G buttonSel insert restoreSelection" href="javascript:void(0);">$l{IMAGE_BTN_INSERT}</a>','</div>','</div>','</form>','</div>','</div>','</li>'].join(''));},viewBoxOptions:{},onLoad:function(config,instanceId)
{var self=$(this);$('.inputTxt',self).InitInputDefault();$('.checkbox input',self).ccmCheckbox();$('#imgAlign',self).alignInput({items:{full:{enabled:true}}}).bind('change',function(){$.ccmEditor.imageManager.refresh_preview(self);});if(config.image.allowBatch)
{var $inBatch=$('.inBatch',self).bind('change',function()
{var $this=$(this),val=$this.prop('checked');_inBatch=val;localStorage&&localStorage.setItem('ccmeditor.image.inBatch',val);});if(localStorage)
{var stored=localStorage.getItem('ccmeditor.image.inBatch');_inBatch=stored===null?config.image.defaultBatchChoice:stored==='true';$inBatch.prop('checked',_inBatch);}}
self.ccmEditorViewBox($.extend(true,{hideItSelf:false,instanceId:instanceId,onHide:function(){$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].state.selection.target=null;},beforeShow:function(popup,config){$.ccmEditor.imageManager.init_values(self);},watched:[{selector:'input.uploadImage',event:'change click',group:'desktop',validators:[{type:'stop',valid:function(){return!($(this).val()==='');},msg:$.ccmEditor.langs[$.ccmEditor.lang].IMAGE_UPLOAD_ERROR_EMPTY},{type:'go',valid:function(config){return $.ccmEditor.imageManager.is_image($(this).val(),'upload',config.instanceId);},msg:$.ccmEditor.langs[$.ccmEditor.lang].IMAGE_UPLOAD_ERROR_TYPE}]},{selector:'input.downloadImage',group:'url',event:'keyup change click focus blur',validators:[{type:'stop',valid:function(){return!($(this).val()==='');},msg:$.ccmEditor.langs[$.ccmEditor.lang].IMAGE_DOWNLOAD_ERROR_EMPTY}]}],onValid:function(conf){var self=$(this).first();if(self.find('div.container_preview_image').html()!==''){$.ccmEditor.imageManager.insert_image(self);return false;}
if(config.image.allowUpload&&(self.find('input.uploadImage').val()!=='')){$.ccmEditor.imageManager.send_image(self,'upload',conf.instanceId,false);}
if(config.image.allowExternal&&(self.find('input.downloadImage').val()!=='')){$.ccmEditor.imageManager.send_image(self,'download',conf.instanceId,false);}
return false;},onCancel:function(popup,config)
{popup.find('a.insert').focus();this.trigger('try');$.ccmEditor.imageManager.init_values(self);},onShow:function(popup,config)
{popup.find('a.insert').focus();this.trigger('try');},autoCloseOnValid:false},$.ccmEditor.actions.image.viewBoxOptions)).bind('click',{id:instanceId},$.ccmEditor.imageManager.on_click);}}});})(jQuery);(function($)
{$.extend(true,$.ccmEditor.actions,{'source':{action:function(id,data){$($.ccmEditor.instanceArray[id].self).html(data.source);},className:'source',discrete:true,actionName:'source',toolTip:'$l{TT_SOURCE}',template:['<li class="rel">','<a href="javascript:void(0);" class="${className}" title="$l{TT_SOURCE}"></a>','<div style="left: -100px; width: 600px; display: none;" class="mod box9">','<div class="ct pad15">','<div class="marB15">','<a title="$l{TT_CLOSE}" class="floatRight icoClose close" href="javascript:void(0);"></a>','<h2 class="h1">$l{SOURCE_TITLE}</h2>','</div>','<div class="form formS formError">','<div class="line">',' <div class="input">','<textarea id="source_${instanceId}" name="source" class="inputTxt name viewSource" style="height:300px;overflow-y: scroll;">','</textarea>','</div>','</div>','<div class="txtR">','<a class="marL5 buttonM-B buttonSel addUrl insert" title="$l{TT_SOURCE_CANCEL}" href="javascript:void(0);">$l{BUTTON_ACCEPT}</a>','</div>','</div>','</div>','</div>','</li>'].join(''),onLoad:function(config,instanceId)
{var
$self=$(this),$modif=null,$editor=null,original=null;$self.ccmEditorViewBox({hideItSelf:false,instanceId:instanceId,onValid:function(conf){$(this).first().trigger('action',['source',{source:$modif.val()}]);},beforeShow:function($popup,config)
{$editor=$($.ccmEditor.instanceArray[config.instanceId].self);original=$editor.html();$modif=$popup.find('textarea[name=source]:first').val(original);},watched:[{selector:'textarea[name=source]:first',group:'main',event:'change focus keyup',validators:[{type:'stop',valid:function(){return true;},msg:$.ccmEditor.langs[$.ccmEditor.lang].SOURCE_ERROR}]}],onShow:function($popup,config)
{$modif.focus();}});}}});})(jQuery);(function($)
{'use strict';$.extend(true,$.ccmEditor.defaultConfig,{url:{provider:function(){return'/'+$.inputTags.lang.toLowerCase()+'/jquery/kb/suggest_links';},nameMaxNumberOfWordsAllowed:5,retrieveVideoHtmlPlayer:false,toolbar:true}});$.extend(true,$.ccmEditor.actions,{'url':{action:function(id,item)
{item.name===''&&(item.name=item.url);if(item.player_html)
{$.ccmEditor.replaceTextSelection(id,item.player_html);}
else if(item.data.isHtml&&item.data.isLink)
{item.data.$linkNode.attr({href:item.url});item.data.$linkNode.removeClass('tooled');item.data.isPureLink&&item.data.$linkNode.html(item.name);$.ccmEditor.replaceTextSelection(id,'<span>'+item.data.$abstractNode.html()+'</span>');}
else
{$.ccmEditor.replaceTextSelection(id,'<a href="'+item.url+'">'+item.name+'</a>');}
$($.ccmEditor.instanceArray[id].self).trigger('linkInsertion');},className:'link',actionName:'url',matchTag:['A'],template:['<li class="rel">','<a href="javascript:void(0);" class="${className}" title="$l{TT_URL}"></a>','<div style="width: 500px; display: none;" class="mod box9">','<div class="ct pad15">','<div class="marB15">','<a title="$l{TT_CLOSE}" class="floatRight icoClose close" href="javascript:void(0);"></a>','<h2 class="h1">$l{URL_TITLE}</h2>','</div>','<div class="marB15 urlWarn">','<mark></mark>','</div>','<div class="form formS formError">','<div class="line">','<label class="txtL marB5" for="url_name_${instanceId}">$l{URL_DISPLAY}</label>',' <div class="input" title="$l{TT_URL_LINKNAME}" >','<input type="text" id="url_name_${instanceId}" name="name" value="" class="inputTxt name">','</div>','</div>','<div class="line">','<label class="txtL marB5" for="url_url_${instanceId}">$l{URL_LINK}</label>','<div class="input" title="$l{TT_URL_LINKTO}">','<input type="text" name="url" id="url_url_${instanceId}" class="inputTxt url addUrl" >','</div>','</div>','<div class="preview"></div>','<div class="txtL">','<a href="javascript:void(0);" title="$l{TT_CANCEL}" style="display:none;" class="cancel cancelButton">$l{BUTTON_CANCEL}</a>','<a class="marL5 buttonM-G buttonSel addUrl insert restoreSelection" title="$l{TT_URL_INSERT}" href="javascript:void(0);">$l{BUTTON_INSERT}</a>','</div>','</div>','</div>','</div>','</li>'].join(''),onLoad:function(config,instanceId)
{var $self=$(this),urlInput=$self.find('input.url').typeUrl(),urlName=$self.find('input.name'),$preview=$self.find('div.preview'),$warn=$self.find('div.urlWarn').hide(),$warnText=$warn.find('mark'),$editor=$($.ccmEditor.instanceArray[instanceId].self),data={},warn=function(text){$warnText.html(text);$warn.fadeIn();};config.url.retrieveVideoHtmlPlayer&&$.linkCrawler&&urlInput.addLinkCrawler({getSource:function(){return[$data.common.baseUrl,'/c/suggest_media'].join('');},behaveInput:true}).bind('urlValid urlInvalid',function(e){switch(e.type){case'urlInvalid':urlInput.showInputError('url invalid')&&$self.attr('disable','');break;case'urlValid':urlInput.hideInputError();break;default:break;}}).bind('crawlerDuplicated',function(e,data,originalEvent){urlInput[0]==originalEvent.target&&urlInput.hideInputError()&&$self.attr('enable','');}).bind('crawlerNew',function(e,data,originalEvent){if(urlInput[0]==originalEvent.target)
{urlInput.hideInputError()&&$self.attr('enable','');data.player_html&&$preview.html(data.player_html);}}).bind('crawlerError',function(e,data,originalEvent){urlInput[0]==originalEvent.target&&$self.attr('disable','');}).bind('crawlerCrawling',function(e,originalEvent){urlInput[0]==originalEvent.target&&$self.attr('disable','');});$self.ccmEditorViewBox({hideItSelf:false,instanceId:instanceId,watched:[{selector:'input.url',group:'url',event:'change focus keyup',validators:[{type:'stop',valid:function(){var v=$(this).val();return!(v===''||v=='http://');},msg:$.ccmEditor.langs[$.ccmEditor.lang].URL_ERROR_URL},{type:'go',valid:function(){return!$(this).hasClass('invalid');},msg:$.ccmEditor.langs[$.ccmEditor.lang].URL_ERROR_URL_SHAPE}]},{selector:'input.name',group:'url',event:'change focus keyup'}],onValid:function(conf){var $self=$(this).first();$self.trigger('action',['url',{player_html:$preview.html(),url:$self.find('input.url').val(),name:$self.find('input.name').val(),data:data}]);$preview.html('');},canBeShown:function(dest,config)
{return true;},beforeShow:function(popup,config)
{$preview.html('');$warn.hide();data={name:$.ccmEditor.getCurrentTextSelection()||''};data.isHtml=data.name.match(/<.*>/)!==null?true:false;if(data.isHtml)
{data.$abstractNode=$('<div>').append(data.name);data.$linkNode=data.$abstractNode.find('a:first');data.isLink=data.$linkNode.length===1;data.isPureLink=!data.isLink?false:(data.$linkNode.html().match(/<.*>/)===null?true:false);data.isOnlyLink=$('<div>').append(data.$linkNode.clone()).html()==data.$abstractNode.html();data.href=data.$linkNode.attr('href');data.linkContent=data.$linkNode.html();data.content=data.$abstractNode.text();}
if(data.name)
{if(!data.isHtml||(data.isLink&&data.isPureLink))
{urlName.val(!data.isHtml?data.name:data.linkContent).removeAttr('readonly').parent().removeClass('readonly');data.isHtml&&data.isLink&&!data.isOnlyLink&&warn($.ccmEditor.langs[$.ccmEditor.lang].URL_WARN_LINKONLY);}
else
{urlName.val(data.name).attr('readonly','true').parent().addClass('readonly');warn($.ccmEditor.langs[$.ccmEditor.lang].URL_WARN_READONLY);}}else
{urlName.val('').removeAttr('readonly').parent().removeClass('readonly');}
urlInput.val(data.href||'');},onCancel:function(popup,config)
{urlInput.focus();$preview.html('');this.trigger('try');},onShow:function(popup,config)
{urlInput.focus();this.trigger('try');}});if(config.url.toolbar)
{var toolEnter=function(e,toolsData)
{var $this=$(e.target),nodeData=$this.data('toolData'),$node=toolsData.$toolbar.find('.toolLegend');$node.length==0&&($node=$('<div class="padL5 toolLegend">').appendTo(toolsData.$toolbar));$node.html(nodeData.legend).fadeIn(100);},reBindTimeout;$editor.bind('linkInsertion codeFormating linkOnStart paste input drop keypress',function(e){clearTimeout(reBindTimeout);reBindTimeout=setTimeout(function()
{$editor.find('a:not(.fancy)').bind('show').toolBar({position:{my:'left top',at:'left bottom',offset:0},className:'textActions',template:'<div/>',onLoad:function($self){var $toolBar=this;this.bind('show',function()
{$toolBar.find('.toolLegend').remove();var href=$self.attr('href');href&&$toolBar.find('.visitLink').attr('href',href);});},toolsArray:[{tool:$('<a href="javascript:void(0);"/>').html($.ccmEditor.langs[$.ccmEditor.lang].URL_EDIT).data('toolData',{legend:$.ccmEditor.langs[$.ccmEditor.lang].URL_EDIT_LEGEND}).bind('tool_mouseenter',toolEnter),handler:function(toolbar,options){$.ccmEditor.selectNode(this[0],true);$self.trigger('show');toolbar.trigger('hide',[true]);}},{tool:$('<a href="javascript:void(0);" class="visitLink"/>').html($.ccmEditor.langs[$.ccmEditor.lang].URL_VISIT).data('toolData',{legend:$.ccmEditor.langs[$.ccmEditor.lang].URL_VISIT_LEGEND}).bind('tool_mouseenter',toolEnter),handler:function(toolbar,options,e){e.preventDefault();window.open(this.attr('href'));toolbar.trigger('hide',[true]);}},{tool:$('<a href="javascript:void(0);"/>').html($.ccmEditor.langs[$.ccmEditor.lang].URL_REMOVE).data('toolData',{legend:$.ccmEditor.langs[$.ccmEditor.lang].URL_REMOVE_LEGEND}).bind('tool_mouseenter',toolEnter),handler:function(toolbar,options){this.replaceWith(this.html());toolbar.trigger('hide',[true]);}},{tool:$('<a href="javascript:void(0);"/>').html($.ccmEditor.langs[$.ccmEditor.lang].URL_DELETE).data('toolData',{legend:$.ccmEditor.langs[$.ccmEditor.lang].URL_DELETE_LEGEND}).bind('tool_mouseenter',toolEnter),handler:function(toolbar,options){this.remove();toolbar.trigger('hide',[true]);}}]});},150);}).trigger('linkOnStart');}}}});}(jQuery));(function($)
{$.extend(true,$.ccmEditor.defaultConfig,{video:{retrieveVideoHtmlPlayer:true}});$.extend(true,$.ccmEditor.actions,{'video':{action:function(id,item)
{$.ccmEditor.replaceTextSelection(id,item.player_html);},className:'video',actionName:'video',matchTag:['A'],template:['<li class="rel">','<a href="javascript:void(0);" class="${className}" title="$l{TT_VIDEO}"></a>','<div style="width: 500px; display: none;" class="mod box9">','<div class="ct pad15">','<div class="marB15">','<a title="$l{TT_CLOSE}" class="floatRight icoClose close" href="javascript:void(0);"></a>','<h2 class="h1">$l{URL_VIDEO}</h2>','</div>','<div class="form formS formError">','<div class="line" style="display:none">','<label class="txtL marB5" for="url_name_${instanceId}">$l{URL_DISPLAY}</label>',' <div class="input" title="$l{TT_URL_LINKNAME}" >','<input type="text" id="url_name_${instanceId}" name="name" value="" class="inputTxt name">','</div>','</div>','<div class="line">','<label class="txtL marB5" for="url_url_${instanceId}">$l{URL_LINK}</label>','<div class="input" title="$l{TT_URL_LINKTO}">','<input type="text" name="url" id="url_url_${instanceId}" class="inputTxt url addUrl" >','</div>','</div>','<div class="preview"></div>','<div class="txtR">','<a href="javascript:void(0);" title="$l{TT_CANCEL}" style="display:none;" class="cancel cancelButton">$l{BUTTON_CANCEL}</a>','<a class="marL5 buttonM-G buttonSel addUrl insert restoreSelection" title="$l{TT_URL_INSERT}" href="javascript:void(0);">$l{BUTTON_INSERT}</a>','</div>','</div>','</div>','</div>','</li>'].join(''),onLoad:function(config,instanceId)
{var self=$(this),urlInput=self.find('input.url').typeUrl(),urlName=self.find('input.name'),$preview=self.find('div.preview');config.video.retrieveVideoHtmlPlayer&&$.linkCrawler&&urlInput.addLinkCrawler({getSource:function(){return[$data.common.baseUrl,'/c/suggest_media'].join('');},behaveInput:true}).bind('urlValid urlInvalid',function(e){switch(e.type){case'urlInvalid':urlInput.showInputError('url invalid')&&self.attr('disable','');break;case'urlValid':urlInput.hideInputError();break;default:break;}}).bind('crawlerDuplicated',function(e,data,originalEvent){urlInput[0]==originalEvent.target&&urlInput.hideInputError()&&self.attr('enable','');}).bind('crawlerNew',function(e,data,originalEvent){if(urlInput[0]==originalEvent.target)
{urlInput.hideInputError()&&self.attr('enable','');data.player_html&&$preview.html(data.player_html);}}).bind('crawlerError',function(e,data,originalEvent){urlInput[0]==originalEvent.target&&self.attr('disable','');}).bind('crawlerCrawling',function(e,originalEvent){urlInput[0]==originalEvent.target&&self.attr('disable','');});self.ccmEditorViewBox({hideItSelf:false,instanceId:instanceId,watched:[{selector:'input.url',group:'video',event:'change focus keyup',validators:[{type:'stop',valid:function(){var v=$(this).val();return!(v===''||v=='http://');},msg:$.ccmEditor.langs[$.ccmEditor.lang].URL_ERROR_URL},{type:'go',valid:function(){return!$(this).hasClass('invalid');},msg:$.ccmEditor.langs[$.ccmEditor.lang].URL_ERROR_URL_SHAPE}]},{selector:'input.name',group:'video',event:'change focus keyup'}],onValid:function(conf){var self=$(this).first();self.trigger('action',['video',{player_html:$preview.html(),url:self.find('input.url').val(),name:self.find('input.name').val()}]);$preview.html('');},canBeShown:function(dest,config)
{return true;},beforeShow:function(popup,config)
{urlInput.val('');$preview.html('');var name=$.ccmEditor.getCurrentTextSelection();if(name){urlName.val(name).attr('readonly','true').parent().addClass('readonly');}else{urlName.val('').removeAttr('readonly').parent().removeClass('readonly');}},onCancel:function(popup,config)
{urlInput.focus();$preview.html('');this.trigger('try');},onShow:function(popup,config)
{urlInput.focus();this.trigger('try');}});}}});})(jQuery);(function($){$.fn.alignInput=function(options){if(!options){return $(this).attr('data-selected');}
if(options=='select'&&arguments[1]){var selectedItem=arguments[1];return this.each(function(){var $this=$(this);var selected=$this.attr('data-selected');if(selected!=selectedItem){var options=$this.data('ccmAlignInput');$this.find('.'+options.selectedCss).removeClass(options.selectedCss).addClass(options.unselectedCss);$this.find('a[data-value='+selectedItem+']').closest('.'+options.unselectedCss).removeClass(options.unselectedCss).addClass(options.selectedCss);$.profile&&console.log('Set',selectedItem,$this);$this.attr('data-selected',selectedItem);}});}
options=$.extend(true,{template:'<ul class="txtEdit">${items}</ul>',item:'<li class="rel ${selected}">'
+'<a class="${className}" '
+'data-value="${value}" '
+'title="${title}" '
+'href="javascript:void(0);">'
+'</a>'
+'</li>',selected:'left',selectedCss:'txtActive',unselectedCss:'txtNotActive',items:{left:{className:'imgL',title:'$l{ALIGN_LEFT}',enabled:true},center:{className:'imgC',title:'$l{ALIGN_CENTER}',enabled:true},right:{className:'imgR',title:'$l{ALIGN_RIGHT}',enabled:true},full:{className:'imgF',title:'$l{ALIGN_FULL}',enabled:false}}},options);return this.each(function(){var $this=$(this),tpl={items:''};if($this.hasClass('ccmAlignInput'))return;$this.data('ccmAlignInput',options);for(value in options.items){var item=options.items[value];if(item.enabled){if(!options.selected)options.selected=value;if(value==options.selected){item.selected=options.selectedCss;}else{item.selected=options.unselectedCss;}
item.value=value;item.title=$.ccmEditor.getTemplate(item.title);tpl.items+=$.ccmEditor.getTemplate(options.item,item);}}
$.profile&&console.log('Default Set',options.selected);$this.addClass('ccmAlignInput').attr('data-selected',options.selected).append($.ccmEditor.getTemplate(options.template,tpl)).find('a').tipsy({gravity:'s',delayIn:100,fade:false,opacity:0.75});$this.find('a').bind('click',function(evt){$.profile&&console.log(this);var value=$(this).attr('data-value');if($this.attr('data-selected')!=value){$this.find('.'+options.selectedCss).removeClass(options.selectedCss).addClass(options.unselectedCss);$(this).closest('.'+options.unselectedCss).removeClass(options.unselectedCss).addClass(options.selectedCss);$.profile&&console.log('Click Set',value);$this.attr('data-selected',value);$this.trigger('change',[options,value]);}});});};})(jQuery);(function($)
{$.ccmEditor.toggle=function(instanceId,start){var instance=$.ccmEditor.instanceArray[instanceId];$(instance.self).attr('contentEditable',start);$.ccmEditor.instanceArray[instanceId].state.editable=start;if(typeof(instance.state.toolbar)!='object'){$.ccmEditor.addToolbar(instanceId);}
if(start){instance.state.toolbar.self.show();$.ccmEditor.instanceArray[instanceId].state.toolbar.visible=true;}
else{instance.state.toolbar.self.hide();}};$.fn.ccmEditorToggle=function(config)
{config=$.extend(true,{activate:null},config);return this.each(function()
{var instanceId=parseInt($(this).attr('ccmid'));if(typeof(instanceId)=='undefined'){alert('target is not a ccmEditor !');}
else
{if(config.activate===false||(config.activate===null&&$.ccmEditor.instanceArray[instanceId].state.editable))
{$.ccmEditor.toggle(instanceId,false);}
else{$.ccmEditor.toggle(instanceId,true);}}});};})(jQuery);(function($){$.extend(true,$.ccmEditor.defaultConfig,{defaultValue:false,defaultValueClass:'defaultValue'});$.ccmEditor.onLoad.push(function(instanceId){if($.ccmEditor.instanceArray[instanceId].config.defaultValue){var
$self=$(this.instanceArray[instanceId].self),dv=$self.attr('data-defaultValue'),active=function(){$.profile&&console.time('CCME defaultValue.active');$self.html()==dv&&$self.removeClass($.ccmEditor.instanceArray[instanceId].config.defaultValueClass).html('<br>');$.profile&&console.timeEnd('CCME defaultValue.active');},inactive=function(e){$.profile&&console.time('CCME defaultValue.inactive');$self.html()=='<br>'&&$self.addClass($.ccmEditor.instanceArray[instanceId].config.defaultValueClass).html(dv);$.profile&&console.time('CCME defaultValue.inactive');};if(dv!==''&&dv!==undefined)
{active();$self.bind('active',active).bind('inactive',inactive);inactive.call($self);}}});$.fn.ccmEditorIsEmpty=function(){if(this.length===0){return false;}
var v=this.html();if(v==null){return false;}
return(v===''||v.toUpperCase()=='<BR>'||v==this.attr('data-defaultvalue'));};})(jQuery);(function($){$.extend(true,$.ccmEditor.defaultConfig,{filters:[]});$.ccmEditor.onLoad.push(function(instanceId){for(var item in $.ccmEditor.instanceArray[instanceId].config.filters){if(typeof($.ccmEditor.instanceArray[instanceId].config.filters[item].filter)=='function'){$(this.instanceArray[instanceId].self).bind($.ccmEditor.instanceArray[instanceId].config.filters[item].event,function(e){$.ccmEditor.instanceArray[instanceId].config.filters[item].filter.apply(this,[e]);});}}});})(jQuery);(function($)
{$.ccmEditor.ui={};$.ccmEditor.ui.addInputAlert=function(node,msg)
{var close=node.closest('div.line').addClass('lineError'),nm=close.find('div.msg');if(nm.length==0){$('<div class="msg txtR">'+msg+'</div>').fadeIn(100).insertAfter(node);}
else
{nm.html(msg).stop().fadeOut(100,function(){$(this).show();});}};$.ccmEditor.ui.removeInputAlert=function(node)
{node.closest('div.line').removeClass('lineError');node.parent().find('div.msg').fadeOut(100,function(){$(this).remove();});};$.ccmEditor.ui.showSelectionAlert=function(text,timeout,options){timeout=timeout||2000;var node=$($.ccmEditor.getCurrentSelectionNode());node.tipsy($.extend(true,{fade:true,gravity:'w',trigger:'manual',title:function(){return text;},delayIn:100,opacity:.75},options)).tipsy("show");;setTimeout(function(){node.tipsy("hide").data('tipsy','');},timeout);};$.fn.ccmEditorViewBox=function(config)
{config=$.extend(true,{onShow:function(){},canBeShown:function(){return true;},beforeShow:function(){},onHide:function(){},hideItSelf:true,effectSpeed:100,destination:false,watched:[],onCancel:function(){},autoCloseOnValid:true},config);return this.each(function()
{var self=$(this),destination=(destination?$(destination):self.find('div:eq(0)')),start=self.find('a:eq(0)'),cancel=self.find('a.cancel:eq(0)'),insert=self.find('a.insert:eq(0)'),form=self.closest('form'),doc=function(e)
{$(e.target).attr('viewBox')!='true'&&!$(e.target).hasClass('ui-autocomplete')&&e.target!=self[0]&&e.target!=destination[0]&&hide();},gValid=function(last)
{var res=[],nRes=[],warn=[];for(var c in config.watched){if(config.watched[c].self==undefined){continue;}
$.ccmEditor.ui.removeInputAlert(self.find(config.watched[c].selector));var d=config.watched[c];for(var v in d.validators){if(!d.validators.hasOwnProperty(v)||typeof d.validators[v]!='object'){continue;}
var y=d.validators[v],stop=(last||y.type=='stop');(typeof(res[d.group])=='undefined')&&(res[d.group]=true);if(res[d.group]&&stop&&!y.valid.apply(config.watched[c].self,[config])){res[d.group]=false;warn[c]=v;}}}
for(var r in res)
{nRes.push(res[r]);}
if(nRes&&$.inArray(true,nRes)==-1){if(last){for(var w in warn){var val=config.watched[w].validators[warn[w]];val.msg!=''&&$.ccmEditor.ui.addInputAlert(self.find(config.watched[w].selector),val.msg);}}
insert.addClass('buttonM-G buttonSel').removeClass('buttonM-B');return false;}
insert.removeClass('buttonM-G buttonSel').addClass('buttonM-B');return true;},stopSubmit=function(e){e.preventDefault();e.stopPropagation();return false;},onKey=function(e)
{if(e.keyCode==13&&!$.ccmComplete.opened)
{e.preventDefault();e.stopPropagation();onValid(e);return false;}
e.keyCode==27&&!$.ccmComplete.opened&&$(self).first().find('a:first').trigger('hide');},onValid=function(e)
{if(gValid(true))
{config.onValid.apply(self,[config]);config.autoCloseOnValid&&$(self).first().find('a:first').trigger('hide');}},show=function()
{if(config.canBeShown.apply(self,[destination,config])){$(document).bind('click',doc);form.bind('submit',stopSubmit);self.find('input').bind('keyup',onKey);$.ccmEditorViewBoxLastInstance&&$.ccmEditorViewBoxLastInstance!=self&&$.ccmEditorViewBoxLastInstance.trigger('hide');if($(self).hasClass('txtActive')){$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].state.edit=true;}else{$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId].state.edit=false;}
config.beforeShow.apply(self,[destination,config]);destination.fadeIn(config.effectSpeed,function(){config.onShow.apply(self,[destination,config]);for(var w in config.watched){var m=config.watched[w],h=function(e){var s=$(this);if(!cancel.is(':visible')){if(s.attr('savedValue')!=s.val()){cancel.fadeIn(100);}}
e.keyCode!=13&&e.keyCode!=27&&gValid();};self.find(m.selector).each(function(){var s=$(this);s.attr('savedValue',s.val());if(typeof(m.self)=='undefined'){s.bind(m.event,h);m.self=s;}})}});insert.addClass('buttonM-G buttonSel').removeClass('buttonM-B');$.ccmEditorViewBoxLastInstance=self;}},hide=function()
{$('div.tipsy').remove();$(document).unbind('click',doc).unbind('keyup',onKey);self.find('input').unbind('keyup',onKey);form.unbind('submit',stopSubmit);cancel.hide();destination.fadeOut(config.effectSpeed,function(){config.onHide.apply(self,[destination,config]);});};destination.find('*').each(function(){if(!$(this).hasClass('close')){$(this).attr('viewBox','true');}});self.bind('click',function(e){if(destination.is(':visible')){(config.hideItSelf||(e.target==self[0]||e.target==start[0]))&&hide();}else{show();}}).bind('hide',hide).bind('show',show).bind('try',function(){gValid(false);}).find('*').each(function(){if(!$(this).hasClass('close')){$(this).attr('viewBox','true');}});insert.unbind('click',onValid).bind('click',onValid);cancel.bind('click',function(e)
{for(var w in config.watched){var m=config.watched[w];self.find(m.selector).each(function(){var s=$(this);s.val(s.attr('savedValue'));});}
cancel.fadeOut(100,function(){config.onCancel.apply(self,[destination,config]);});});});};}(jQuery));(function($){$.extend(true,$.ccmEditor.defaultConfig,{history:false});$.ccmEditor.onLoad.push(function(instanceId){if($.ccmEditor.instanceArray[instanceId].config.history){$.ccmEditor.instanceArray[instanceId].state.history=[$($.ccmEditor.instanceArray[instanceId].self).html()];}});$.fn.ccmEditorHistoryCancel=function()
{return this.each(function()
{var instanceId=$(this).attr('ccmid');if(typeof(instanceId)!='undefined')
{$($.ccmEditor.instanceArray[instanceId].self).html($.ccmEditor.instanceArray[instanceId].state.history[0]);}});};})(jQuery);(function($)
{$.ccmEditor.getTextSelection=function(instanceId)
{var selection=$.ccmEditor.instanceArray[instanceId].state.selection.previousRange;if((selection.toString&&selection.toString()!==''&&selection.toString()!='false')||(typeof(selection.text)!='undefined'&&selection.text!==''))
{if(selection.toString){return selection.toString();}
return selection.text;}
return false;};$.ccmEditor.crcTableCalc=function()
{if($.ccmEditor.crcTable)return;$.ccmEditor.crcTable=new Array(256);for(var i=0;i<256;i++)
{var c=i;for(var k=0;k<8;k++)c=(c&1)?0xEDB88320^(c>>1):c>>1;$.ccmEditor.crcTable[i]=c;}};$.ccmEditor.crc32=function(str)
{var c=0xFFFFFFFF;var sL=str.length;$.ccmEditor.crcTableCalc();for(var n=0;n<sL;n++)c=$.ccmEditor.crcTable[(c^str.charCodeAt(n))&0xff]^(c>>8);return c^0xffffffff;};$.ccmEditor.getCurrentTextSelection=function(textOnly)
{var selection;textOnly=textOnly||false;if(($.browser.webkit||window.document.body.createTextRange)&&$.ccmEditor.selectNode.lastInstance!==false&&typeof $.ccmEditor.selectNode.lastInstance.state.selection!=='undefined'&&typeof $.ccmEditor.selectNode.lastInstance.state.selection.target!=='undefined')
{return $('<div>').append($($.ccmEditor.selectNode.lastInstance.state.selection.target).clone()).html();}
if(window.getSelection&&(selection=window.getSelection()))
{if(textOnly)
{selection=selection.toString();}
else{var
fragment=selection.getRangeAt(0).cloneContents(),vNode=document.createElement("div");vNode.appendChild(fragment);selection=vNode.innerHTML;}}
else if(document.selection&&(selection=document.selection.createRange()))
{selection=selection.text;}
if(selection!==''&&selection!='false'&&selection!==false){return selection;}
return false;};$.ccmEditor.getNodeEditor=function(node){return $.ccmEditor.instanceArray[$.ccmEditor.getNodeInstanceId(node)];};$.ccmEditor.getNodeInstanceId=function(node){return $(node).closest('[ccmid]').attr('ccmid');};$.ccmEditor.raiseAction=function(action,from){var $editor=$.ccmEditor.getNodeEditor(from);$.ccmEditor.imageManager.currentId=$(from).closest('.contenteditable').attr('ccmid');var btn='a.'+$.ccmEditor.actions[action].className,$item=$editor.state.toolbar.self.find(btn).first();$.ccmEditor.selectNode(from[0],true);$item.parent().addClass('txtActive');$item.trigger(jQuery.Event('click',{target:$item[0]}));};$.ccmEditor.getNodeActions=function(node){var ret=[],tag,config=$.ccmEditor.getNodeEditor(node).config;if(config){tag=node.tagName,styles=$(node).attr('style');!styles&&(styles='');for(var actionId in config.actions)
{if(typeof($.ccmEditor.actions[config.actions[actionId]])=='undefined'||(typeof($.ccmEditor.actions[config.actions[actionId]].matchTag)=='undefined'&&typeof($.ccmEditor.actions[config.actions[actionId]].matchStyle)=='undefined')){continue;}
if($.ccmEditor.actions[config.actions[actionId]].matchTag)
{for(var t in $.ccmEditor.actions[config.actions[actionId]].matchTag)
{if($.ccmEditor.actions[config.actions[actionId]].matchTag[t]==tag)
{ret.push($.ccmEditor.actions[config.actions[actionId]]);}}}
if($.ccmEditor.actions[config.actions[actionId]].matchStyle)
{for(var style in $.ccmEditor.actions[config.actions[actionId]].matchStyle)
{if(typeof $.ccmEditor.actions[config.actions[actionId]].matchStyle[style]=='function'){continue;}
if(styles.match($.ccmEditor.actions[config.actions[actionId]].matchStyle[style]))
{ret.push($.ccmEditor.actions[config.actions[actionId]]);}}}}}
return ret;};$.ccmEditor.getSelection=function()
{if(window.getSelection){return window.getSelection();}
else if(document.selection){return document.selection.createRange();}
return false;}
$.ccmEditor.saveSelection=function(selection,instanceId)
{if(selection&&selection.getRangeAt){try{var range=selection.getRangeAt(0);if(true)
{$.ccmEditor.instanceArray[instanceId].state.selection.previousRange=range;}}catch(e){}}
else{$.ccmEditor.instanceArray[instanceId].state.selection.previousRange=selection;}}
$.ccmEditor.selectNode=function(node,full){var doc=window.document,sel,range,instanceId=$.ccmEditor.getNodeInstanceId(node),instance=$.ccmEditor.instanceArray[instanceId],selection=$.ccmEditor.getSelection();if(full&&$.contains(instance.self,node))
{instance.state.selection.target=node;$.ccmEditor.selectNode.lastInstance=instance;}
if(window.getSelection&&doc.createRange){sel=window.getSelection();range=doc.createRange();if(full){range.setStartBefore(node);range.setEndAfter(node);}
else{range.selectNodeContents(node);}
sel.removeAllRanges();sel.addRange(range);}else if(doc.body.createTextRange){selection.moveToElementText(node);selection.select();}
$.ccmEditor.saveSelection(selection,instanceId);};$.ccmEditor.selectNode.lastInstance=false;$.ccmEditor.replaceFirstNotHtml=function(text,search,replace)
{var found=false,r=new RegExp(search,"g");return text.replace(r,function(target,index,string)
{if(found)return target;var sub=string.substring(0,index),open=sub.lastIndexOf('<'),close=sub.lastIndexOf('>');if(open===-1||close>open)
{found=true;return replace;}
return target;});};$.ccmEditor.urlCorrection=function(url)
{if(url.charAt(0)==='/')return url;url.match(/^([a-z]+)(:\/\/.*)$/i)&&RegExp.$1!=='http'&&RegExp.$1!=='https'&&(url='http'+RegExp.$2);url.match(/^(https{0,1}:\/\/).*$/)==null&&(url='http://'+url);return url;};$.ccmEditor.getRange=function(){var sel=(window.getSelection)?window.getSelection():document.selection;if(sel){return(sel.rangeCount>0)?sel.getRangeAt(0):sel.createRange();}else{return null;}};$.ccmEditor.createRange=function(){return(document.createRange)?document.createRange():document.selection.createRange();};$.ccmEditor.selectRange=function(range){if(window.getSelection){window.getSelection().removeAllRanges();window.getSelection().addRange(range);}else{range.select();}};$.ccmEditor.formatSpan=function(tagName,add){tagName=tagName.toUpperCase();if(add){var range=$.ccmEditor.getRange();var node=$('<'+tagName+'>'+range.toString()+'</'+tagName+'>')[0];range.deleteContents();range.insertNode(node);$.ccmEditor.selectRange(range);}else{var txt=$.ccmEditor.getCurrentSelectionNode();while(txt.tagName!=tagName){txt=$(txt).parent()[0];if(!txt)break;}
$.profile&&console.log(txt);}};$.ccmEditor.formatBlock=function(tagName,add){$.ccmEditor.formatSpan(tagName,add);};$.ccmEditor.replaceTextSelection=function(instanceId,content,tryToBlur)
{var $instance=$.ccmEditor.instanceArray[$.ccmEditor.imageManager.currentId],$oldNode=$($instance.state.selection.target);if($instance.state.edit&&$oldNode.length==1&&!$oldNode.hasClass('contenteditable')&&$.contains($instance.self,$oldNode[0]))
{var node=(content.indexOf('<')!=-1?$(content)[0]:document.createTextNode(content));$oldNode.after(node);$oldNode.remove();$.ccmEditor.selectNode(node);}
else
{$($instance.self).focus();var range=$instance.state.selection.previousRange,selection=null;if(window.getSelection&&(selection=window.getSelection())&&selection.removeAllRanges)
{if($.browser.webkit&&typeof range.commonAncestorContainer=='object'&&(range.commonAncestorContainer.nodeType==1||range.commonAncestorContainer.nodeType==3)&&range.commonAncestorContainer.nodeName!=='#text'&&!$.contains($instance.self,range.commonAncestorContainer))
{range=document.createRange();range.setStart($instance.self,0);}
if(range){selection.removeAllRanges();selection.addRange(range);}else{range=selection.getRangeAt(0);}
var node=(content.indexOf('<')!=-1?$(content)[0]:document.createTextNode(content));range.deleteContents();range.insertNode&&range.insertNode(node);$.ccmEditor.selectNode(node);}
else{if($instance.state.selection.previousRange.select&&$instance.state.selection.previousRange.offsetLeft!==0)
{$instance.state.selection.previousRange.select();}
range=document.selection.createRange();range.pasteHTML(content);range.select();}
tryToBlur&&node&&$.ccmEditor.cursorAfter(node);}};$.ccmEditor.cursorToEnd=function(el)
{el.focus&&el.focus();if(typeof window.getSelection!="undefined"&&typeof document.createRange!="undefined")
{var range=document.createRange();range.selectNodeContents(el);range.collapse(false);var sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);}else if(typeof document.body.createTextRange!="undefined")
{var textRange=document.body.createTextRange();textRange.moveToElementText(el);textRange.collapse(false);textRange.select();}};$.ccmEditor.cursorAfter=function(node)
{var textNode=document.createTextNode("\u00a0");$(node).after(textNode);$.ccmEditor.cursorToEnd(textNode);textNode.parentNode.removeChild(textNode);};})(jQuery);(function($)
{var blockSize=0,_html2Block=function(txt)
{var stopChar=':.;!',cleanedText=txt.replace(/(<br>|<br\/>)/img,' ').replace(/&nbsp;/img,' ').replace(/(<[^>]*>)/img,'').replace(/[\t\r\b\n_]|<[^>]+>/img,' ').replace(/((http:\/\/|https:\/\/)?(www.)?(([a-z0-9-]){2,}\.){1,4}([a-z]){2,6}(\/([a-z-_\/\.0-9#:?=&;,]*)?)?)/gi,'').replace(new RegExp('[^a-zà-ÿ0-9\u0600-\u06ff \'-'+stopChar+']','gi'),'').replace(/ {2,}/mg,' '),sentences=cleanedText.split(new RegExp('['+stopChar+']','gi')),blocks=[],sentenceTmp='',wordsSplit=[];for(var i in sentences)
{if(sentences[i].length<=blockSize)
{if((sentenceTmp.length+sentences[i].length+1)>blockSize)
{blocks.push(sentenceTmp);sentenceTmp=sentences[i];}
else{sentenceTmp=sentenceTmp+' '+sentences[i];}}
else{if(sentenceTmp.length>0)
{blocks.push(sentenceTmp);sentenceTmp='';}
wordsSplit=sentences[i].split(' ');for(var j in wordsSplit)
{if(wordsSplit[j].length>blockSize)
{}
else{if((sentenceTmp.length+wordsSplit[j].length+1)>blockSize)
{blocks.push(sentenceTmp);sentenceTmp=wordsSplit[j];}
else{sentenceTmp=sentenceTmp+' '+wordsSplit[j];}}}
if(sentenceTmp.length>0)
{blocks.push(sentenceTmp);sentenceTmp='';}
wordsSplit=[];}}
if(sentenceTmp.length>0)
{blocks.push(sentenceTmp);}
return blocks;};$.extend(true,$.ccmEditor.defaultConfig,{typingListener:{list:[],timeOut:3000,pasteActionAllowed:true,traitmentFunc:_html2Block,urlSize:250},magicLinks:{support:false,template:'<div id="jMagicLinks" class="box4 pad10"></div>'},magicTags:{support:false,template:'<div id="jMagicTags" class="box4 pad10"></div>',target:'.tagslistdiv:first'}});$.ccmEditor.onLoad.push(function(instanceId)
{var typingTimeout=null,pastedTxt=false;if(this.instanceArray[instanceId].config.magicTags.support)
{this.instanceArray[instanceId].config.typingListener.list.push($(this.instanceArray[instanceId].config.magicTags.template).magicTags({listeners:[this.instanceArray[instanceId].self],inputTagTgt:this.instanceArray[instanceId].config.magicTags.target}).insertAfter($(this.instanceArray[instanceId].self)));}
if(this.instanceArray[instanceId].config.magicLinks.support)
{this.instanceArray[instanceId].config.typingListener.list.push($(this.instanceArray[instanceId].config.magicLinks.template).magicLinks({listeners:[this.instanceArray[instanceId].self]}).insertAfter($(this.instanceArray[instanceId].self).bind('magicLinksInsertion',function(e,id,name,url)
{$(this).focus().html(function(index,old){return $.ccmEditor.replaceFirstNotHtml(old,name,'<a href="'+url+'" title="'+name+'">'+name+'</a>');});$.ccmEditor.selectNode($(this).find('a[title=\''+name+'\']')[0]);})));}
blockSize=$.ccmEditor.instanceArray[instanceId].config.typingListener.urlSize
-Math.max($.magicLinks.defaultConfig.source.length,$.magicTags.defaultConfig.source.length);if(this.instanceArray[instanceId].config.typingListener.list.length>0)
{$(this.instanceArray[instanceId].self).bind('keyup refreshTyping'+($.ccmEditor.instanceArray[instanceId].config.typingListener.pasteActionAllowed?' paste':''),function(e)
{if(['keyup','paste'].indexOf(e.type)!=-1)
{clearTimeout(typingTimeout);var self=this;typingTimeout=setTimeout(function()
{$(self).trigger('refreshTyping');},$.ccmEditor.instanceArray[instanceId].config.typingListener.timeOut+100);}
if(!$.ccmEditor.instanceArray[instanceId].lastTypingSubmission||([13,190].indexOf(e.keyCode)!=-1)||(pastedTxt===true)||(new Date().getTime()-$.ccmEditor.instanceArray[instanceId].lastTypingSubmission)>$.ccmEditor.instanceArray[instanceId].config.typingListener.timeOut)
{var doTypingActions=function()
{var blocks=$.ccmEditor.instanceArray[instanceId].config.typingListener.traitmentFunc($(this).html()),tempBuffer=[];(!$.ccmEditor.instanceArray[instanceId].lastBuffer)&&($.ccmEditor.instanceArray[instanceId].lastBuffer=[]);$.ccmEditor.instanceArray[instanceId].actualBuffer=[];for(var block in blocks)
{$.ccmEditor.instanceArray[instanceId].actualBuffer[$.ccmEditor.crc32(blocks[block])]=[blocks[block]];}
if($.ccmEditor.instanceArray[instanceId].lastBuffer.length>=1||(pastedTxt===true))
{$($.ccmEditor.instanceArray[instanceId].self).trigger('doTypingActionStart');for(var block in $.ccmEditor.instanceArray[instanceId].actualBuffer)
{if(!$.ccmEditor.instanceArray[instanceId].lastBuffer[block])
{tempBuffer.push($.ccmEditor.instanceArray[instanceId].actualBuffer[block]);}}
var l=tempBuffer.length,i=0;if(l>=1)
{for(;i<l;++i)
{$.each($.ccmEditor.instanceArray[instanceId].config.typingListener.list,function()
{this.trigger('addBlock',[(''+tempBuffer[i]),{priority:l}]);});$.ccmEditor.instanceArray[instanceId].lastTypingSubmission=new Date().getTime();}}
$.each($.ccmEditor.instanceArray[instanceId].config.typingListener.list,function(){this.trigger('searchInBlocks');});$($.ccmEditor.instanceArray[instanceId].self).trigger('doTypingActionEnd');pastedTxt=false;}
$.ccmEditor.instanceArray[instanceId].lastBuffer=$.ccmEditor.instanceArray[instanceId].actualBuffer;};switch(e.type)
{case'refreshTyping':doTypingActions.apply(this);break
default:case'keyup':switch(e.keyCode)
{case 13:case 16:case 32:case 188:case 190:case 223:doTypingActions.apply(this);break;default:}
break;}}
if($.ccmEditor.instanceArray[instanceId].config.typingListener.pasteActionAllowed&&e.type=='paste')
{pastedTxt=true;}});}});})(jQuery);(function($){'use strict';$.extend(true,$.ccmEditor.defaultConfig,{codeSnippet:false,codeSnippetOptions:{toolbar:true,editable:true}});var codeSnippetReady=false;$(document).bind('codeSnippetReady',function(){codeSnippetReady=true;});$.ccmEditor.onLoad.push(function(instanceId){if(this.instanceArray[instanceId].config.codeSnippet)
{if(codeSnippetReady)
{var $self=$(this.instanceArray[instanceId].self),config=this.instanceArray[instanceId].config,$pre=$self.find('pre');$pre.codeSnippet(config.codeSnippetOptions);$self.bind('click keydown keyup',function(){$pre.trigger('updateGhost');}).bind('keypress',function(){$pre.trigger('updateGhost');}).bind('codeFormating',function(){$self.find('pre.sh_sourceCode').remove();$pre=$self.find('pre').removeClass('codeSnippeted').codeSnippet(config.codeSnippetOptions);});}
else{$.jet.env.dev&&console.warn('codeSnippet not ready, but no retry coded yet ...');}}});})(jQuery);(function($)
{$.magicLinks={};$.magicLinks.piles={};$.magicLinks.defaultConfig={listeners:[],source:'http://suggest.commentcamarche.net/kw',useJsonp:true,linkTemplate:'<span class="magicLink" magicLink="${id}"><a target="_blank" class="magictxt" href="${url}" title="$l{TT_LINK}">${name}</a>&nbsp;<a  title="$l{TT_ADD_LINK}" act="add" class="icoValid-1" href="javascript:void(0);"></a>&nbsp;<a title="$l{TT_DEL_LINK}" act="del" class="icoCancel-1" href="javascript:void(0);"></a></span> ',footerTemplate:'<span class="mlfoot"><a title="$l{TT_CANCEL_ALL}" act="none" class="buttonS-G" href="javascript:void(0);">$l{CANCEL_ALL}&nbsp;&nbsp;<span class="icoCancel-1"></span></a> <a title="$l{TT_ACCEPT_ALL}" class="buttonS-B" href="javascript:void(0);" act="all">$l{ACCEPT_ALL}&nbsp;&nbsp;<span class="icoValid-2"></span></a></span>',effectSpeed:100,rootHost:'http://www.commentcamarche.com',universe:'www.commentcamarche.net'};$.magicLinks.instanceArray=[];$.magicLinks.addInstance=function(config,self)
{this.microTemplateInit();var instanceId=this.instanceArray.push({config:config,self:self,magicLinks:{}}),me=this,host=config.source.replace(/^(.*\/\/([^\/?#]*)).*$/,"$2");instanceId--;if(typeof $.magicLinks.piles[host]=='undefined')
{$.magicLinks.piles[host]=new NetworkPileManager(host);}
$(self).css('display','none').attr('mlId',instanceId).bind('addBlock',function(e,content,options)
{$.magicLinks.piles[host].add(function(data,successHandler)
{$.magicLinks.send.apply(me,[data,options,instanceId,e,successHandler]);},content,options.priority,me);}).bind('searchInBlocks',function()
{$.magicLinks.piles[host].depile();}).bind('click',$.magicLinks.delegation).append('<span id="linkZone"></span>');};$.magicLinks.delegation=function(e)
{var action=$(e.target).attr('act');if(action)
{var instanceId=$(e.target).closest('[mlid]').attr('mlid');e.stopPropagation();e.preventDefault();switch(action)
{case'add':$.magicLinks.insertLink(instanceId,$(e.target).parent().attr('magiclink'));case'del':$(e.target).parent().fadeOut($.magicLinks.instanceArray[instanceId].config.effectSpeed,function(){$(this).remove();});$($.magicLinks.instanceArray[instanceId].config.listeners[0]).focus();break;case'all':$($.magicLinks.instanceArray[instanceId].self).find('[magiclink]').each(function(){$.magicLinks.insertLink(instanceId,$(this).attr('magiclink'));});case'none':$($.magicLinks.instanceArray[instanceId].self).find('span#linkZone').fadeOut($.magicLinks.instanceArray[instanceId].config.effectSpeed,function(){$(this).html('');});break;}
setTimeout(function(){$.magicLinks.manageFooter(instanceId);},500);}};$.magicLinks.insertLink=function(instanceId,id)
{for(var listener in $.magicLinks.instanceArray[instanceId].config.listeners)
{$($.magicLinks.instanceArray[instanceId].config.listeners[listener]).trigger('magicLinksInsertion',[id,$.magicLinks.instanceArray[instanceId].magicLinks[id].name,$.magicLinks.instanceArray[instanceId].magicLinks[id].url,$.magicLinks.instanceArray[instanceId].magicLinks[id].lastNodeStart,$.magicLinks.instanceArray[instanceId].magicLinks[id].lastNodeEnd]);}};$.magicLinks.send=function(content,options,instanceId,e,successHandler)
{var self=this.instanceArray[instanceId],me=this;$.ajaxSettings.discrete=true;$.ajax({url:self.config.source+(self.config.source.indexOf('?')==-1?'?':'&')+'q='+$.halfEscape(content),cache:true,dataType:self.config.useJsonp?"jsonp":"json",localCache:true,data:{u:self.config.universe},error:function()
{successHandler('error');},success:function(data)
{successHandler('done');if(!data)return false;for(var magicLinkId in data.sg)
{$.magicLinks.addLink.apply(me,[instanceId,data.sg[magicLinkId][0],data.sg[magicLinkId][1],data.sg[magicLinkId][2],data.sg[magicLinkId][3],data.sg[magicLinkId][4]]);}}});};$.magicLinks.addLink=function(instanceId,id,name,url,nodeStart,nodeEnd)
{if(typeof($.magicLinks.instanceArray[instanceId].magicLinks[id])=='undefined')
{$.magicLinks.instanceArray[instanceId].magicLinks[id]={};}
$.extend(true,$.magicLinks.instanceArray[instanceId].magicLinks[id],{id:id,name:name,url:$.magicLinks.instanceArray[instanceId].config.rootHost+url,lastNodeStart:nodeStart,lastNodeEnd:nodeEnd});if(!$.magicLinks.instanceArray[instanceId].magicLinks[id].inserted)
{var self=$($.magicLinks.instanceArray[instanceId].self);if(self.css('display')=='none')
{self.slideDown(200);}
var zone=$($.magicLinks.instanceArray[instanceId].self).find('span#linkZone').fadeIn();$.magicLinks.displayItem(instanceId,$.magicLinks.getTemplate($.magicLinks.instanceArray[instanceId].config.linkTemplate,$.magicLinks.instanceArray[instanceId].magicLinks[id]),zone);$.magicLinks.instanceArray[instanceId].magicLinks[id].inserted=true;$.magicLinks.manageFooter(instanceId);}};$.magicLinks.displayItem=function(instanceId,template,target)
{$(template).css('display','none').appendTo(target).fadeIn($.magicLinks.instanceArray[instanceId].config.effectSpeed).find('*').tipsy({gravity:'n',opacity:0.75});};$.magicLinks.manageFooter=function(instanceId)
{$('div.tipsy').remove();var self=$($.magicLinks.instanceArray[instanceId].self);switch(self.find('span.magicLink').length)
{case 0:self.slideUp(200);case 1:$.magicLinks.removeFooter(instanceId);break;case 2:$.magicLinks.addFooter(instanceId);break;}};$.magicLinks.addFooter=function(instanceId)
{$($.magicLinks.instanceArray[instanceId].self).find('span.mlfoot').length===0&&$.magicLinks.displayItem(instanceId,$.magicLinks.getTemplate($.magicLinks.instanceArray[instanceId].config.footerTemplate),$.magicLinks.instanceArray[instanceId].self);};$.magicLinks.removeFooter=function(instanceId)
{$($.magicLinks.instanceArray[instanceId].self).find('span.mlfoot').fadeOut(100,function(){$(this).remove();})};$.extend($.magicLinks,$.microTemplate);$.fn.magicLinks=function(config)
{config=$.extend(true,{},$.magicLinks.defaultConfig,config);return this.each(function()
{(typeof($(this).attr('mlId'))=='undefined')&&$.magicLinks.addInstance(config,this);});};})(jQuery);(function($)
{$.magicTags={};$.magicTags.piles={};$.magicTags.defaultConfig={listeners:[],source:'/fr/r/magictags',useJsonp:true,linkTemplate:'<span class="magicTags" magicTags="${id}"><a target="_blank" class="magictxt" href="${url}" title="$l{TT_LINK}">${name}</a>&nbsp;<a  title="$l{TT_ADD_LINK}" act="add" class="icoValid-1" href="javascript:void(0);"></a>&nbsp;<a title="$l{TT_DEL_LINK}" act="del" class="icoCancel-1" href="javascript:void(0);"></a></span> ',footerTemplate:'<span class="mlfoot"><a title="$l{TT_CANCEL_ALL}" act="none" class="buttonS-G" href="javascript:void(0);">$l{CANCEL_ALL}&nbsp;&nbsp;<span class="icoCancel-1"></span></a> <a title="$l{TT_ACCEPT_ALL}" class="buttonS-B" href="javascript:void(0);" act="all">$l{ACCEPT_ALL}&nbsp;&nbsp;<span class="icoValid-2"></span></a></span>',effectSpeed:100,rootHost:'',inputTagTgt:'.tagslistdiv',funcSendSuccess:function(data,config)
{if(typeof data.tags=='undefined')
{return false;}
var idDataTags=0;for(idDataTags in data.tags)
{$(config.inputTagTgt).trigger('addTag',{name:data.tags[idDataTags][1],display:true,status:'ACTIVE',priority:'DEFAULT',validated:true});}}};$.magicTags.instanceArray=[];$.magicTags.addInstance=function(config,self)
{this.microTemplateInit();var instanceId=this.instanceArray.push({config:config,self:self,magicTags:{}}),me=this,$self=$(self),host=document.location.hostname;instanceId--;if(typeof $.magicTags.piles[host]=='undefined')
{$.magicTags.piles[host]=new NetworkPileManager(host);}
$self.css('display','none').attr('mlId',instanceId).bind('addBlock',function(e,content,options)
{$.magicTags.piles[host].add(function(data,successHandler)
{$.magicTags.send.apply(me,[data,options,instanceId,e,successHandler]);},content,options.priority,me);}).bind('searchInBlocks',function()
{$.magicTags.piles[host].depile();});};$.fn.magicTags=function(config)
{config=$.extend(true,{},$.magicTags.defaultConfig,config);return this.each(function()
{(typeof($(this).attr('mlId'))=='undefined')&&$.magicTags.addInstance(config,this);});};$.magicTags.send=function(content,options,instanceId,e,successHandler)
{var self=this.instanceArray[instanceId],me=this;$.ajax({type:'POST',url:self.config.source+(self.config.source.indexOf('?')==-1?'?':'&')+'q='+$.halfEscape(content),cache:true,dataType:self.config.useJsonp?"jsonp":"json",localCache:true,data:{u:self.config.universe},error:function()
{successHandler('error');},success:function(data)
{successHandler('done');if(!data)
{return false;}
self.config.funcSendSuccess(data,self.config);}});};$.magicTags.delegation=function(e)
{var action=$(e.target).attr('act');if(action)
{var instanceId=$(e.target).closest('[mlid]').attr('mlid');e.stopPropagation();e.preventDefault();switch(action)
{case'add':$.magicTags.insertLink(instanceId,$(e.target).parent().attr('magicTags'));case'del':$(e.target).parent().fadeOut($.magicTags.instanceArray[instanceId].config.effectSpeed,function(){$(this).remove();});$($.magicTags.instanceArray[instanceId].config.listeners[0]).focus();break;case'all':$($.magicTags.instanceArray[instanceId].self).find('[magicTags]').each(function(){$.magicTags.insertLink(instanceId,$(this).attr('magicTags'));});case'none':$($.magicTags.instanceArray[instanceId].self).find('span#tagZone').fadeOut($.magicTags.instanceArray[instanceId].config.effectSpeed,function(){$(this).html('');});break;}
setTimeout(function(){$.magicTags.manageFooter(instanceId);},500);}};$.magicTags.insertLink=function(instanceId,id)
{for(var listener in $.magicTags.instanceArray[instanceId].config.listeners)
{$($.magicTags.instanceArray[instanceId].config.listeners[listener]).trigger('magicTagsInsertion',[id,$.magicTags.instanceArray[instanceId].magicTags[id].name,$.magicTags.instanceArray[instanceId].magicTags[id].url,$.magicTags.instanceArray[instanceId].magicTags[id].lastNodeStart,$.magicTags.instanceArray[instanceId].magicTags[id].lastNodeEnd]);}};$.magicTags.addLink=function(instanceId,id,name,url,nodeStart,nodeEnd)
{if(typeof($.magicTags.instanceArray[instanceId].magicTags[id])=='undefined')
{$.magicTags.instanceArray[instanceId].magicTags[id]={};}
$.extend(true,$.magicTags.instanceArray[instanceId].magicTags[id],{id:id,name:name,url:$.magicTags.instanceArray[instanceId].config.rootHost+url,lastNodeStart:nodeStart,lastNodeEnd:nodeEnd});if(!$.magicTags.instanceArray[instanceId].magicTags[id].inserted)
{var self=$($.magicTags.instanceArray[instanceId].self);if(self.css('display')=='none')
{self.slideDown(200);}
var zone=$($.magicTags.instanceArray[instanceId].self).find('span#tagZone').fadeIn();$.magicTags.displayItem(instanceId,$.magicTags.getTemplate($.magicTags.instanceArray[instanceId].config.linkTemplate,$.magicTags.instanceArray[instanceId].magicTags[id]),zone);$.magicTags.instanceArray[instanceId].magicTags[id].inserted=true;$.magicTags.manageFooter(instanceId);}};$.magicTags.displayItem=function(instanceId,template,target)
{$(template).css('display','none').appendTo(target).fadeIn($.magicTags.instanceArray[instanceId].config.effectSpeed).find('*').tipsy({gravity:'n',opacity:0.75});};$.magicTags.manageFooter=function(instanceId)
{$('div.tipsy').remove();var self=$($.magicTags.instanceArray[instanceId].self);switch(self.find('span.magicTags').length)
{case 0:self.slideUp(200);case 1:$.magicTags.removeFooter(instanceId);break;case 2:$.magicTags.addFooter(instanceId);break;}};$.magicTags.addFooter=function(instanceId)
{$($.magicTags.instanceArray[instanceId].self).find('span.mlfoot').length===0&&$.magicTags.displayItem(instanceId,$.magicTags.getTemplate($.magicTags.instanceArray[instanceId].config.footerTemplate),$.magicTags.instanceArray[instanceId].self);};$.magicTags.removeFooter=function(instanceId)
{$($.magicTags.instanceArray[instanceId].self).find('span.mlfoot').fadeOut(100,function(){$(this).remove();})};$.extend($.magicTags,$.microTemplate);})(jQuery);
(function($){$.extend(true,$.ccmEditor.langs,{'FR':{'TT_BOLD':'Gras','TT_ITALIC':'Italique','TT_UNDERLINE':'Souligné','TT_STRIKE':'Barré','TT_LEGEND':'Légende','TT_CODE':'Extrait de code','TT_UL':'Liste à puce','TT_OL':'Liste ordonnée','TT_FORMAT':'Taille du texte','TT_COLORS':'Couleur du texte','TT_URL':'Insérer ou éditer un lien','TT_SOURCE':'Editer la source','TT_IMAGE':'Insérer une image','TT_VIDEO':'Insérer une vidéo','TT_INDEX':'Insérer un sommaire','TT_URL_LINKTO':'Votre lien (exemple : http://expeert.com )','TT_URL_LINKNAME':'Nom du lien (exemple : expeert )','TT_URL_INSERT':'Insérer le lien','TT_SOURCE_CANCEL':'Appliquer les changements','TT_CLOSE':'Fermer cette fenêtre','TT_CANCEL':'Annuler les changements','TT_QUIZZ':'Inserer un quiz','TB_IMG_UPDATE':'Modifier','TB_IMG_DELETE':'Supprimer','TB_IMG_SIZE_UP':'Agrandir','TB_IMG_SIZE_DOWN':'Diminuer','ALIGN_LEFT':'Aligner à gauche','ALIGN_RIGHT':'Aligner à droite','ALIGN_CENTER':'Centrer','ALIGN_FULL':'Mode diapo','FORMAT_NORMAL':'Normal','FORMAT_TITLE':'Titre','URL_DISPLAY':'Texte à afficher','URL_LINK':'Lien vers ','URL_TITLE':'Ajouter ou éditer un lien','URL_ERROR_URL':'Un lien est nécessaire','URL_ERROR_URL_SHAPE':'URL mal formée (exemple : http://expeert.com/ )','URL_TOO_MUCH_WORDS':'Votre sélection contient trop de mots (${current}), merci de selectionner un maximum de ${max} mots','URL_TOO_MUCH_WORDS_SIMPLE':'Merci d\'utiliser moins de ${max} mots','URL_REMOVE':'Enlever','URL_REMOVE_LEGEND':'Enleve le lien mais conserve le texte','URL_DELETE':'Effacer','URL_DELETE_LEGEND':'Supprime complètement le lien','URL_VISIT':'Tester','URL_VISIT_LEGEND':'Ouvre une fenêtre vers le lien','URL_EDIT':'Modifier','URL_EDIT_LEGEND':'Ouvre le dialogue d\'édition du lien','URL_VIDEO':'Ajouter une video','URL_WARN_READONLY':'Votre sélection contient du formatage, vous ne pourrez donc en modifier ici que l\'url du premier lien, pour modifier le texte retournez dans l\'éditeur','URL_WARN_LINKONLY':'Votre sélection contenant déja un lien elle a été réduite à celui-ci','SOURCE_TITLE':'Source','BUTTON_INSERT':'Insérer','BUTTON_ACCEPT':'Accepter','BUTTON_CANCEL':'Annuler','INDEX_INSERT':'Insérer un sommaire','INDEX_BTN_INSERT':'Insérer le sommaire','INDEX_TITLE':'Titre du sommaire','INDEX_ALIGN':'Alignement','IMAGE_PREVIEW':'Aperçu','IMAGE_INSERT':'Insérer une image','IMAGE_UPLOAD':'Par upload','IMAGE_ALIGN':'Alignement','IMAGE_LEGEND':'Légende','IMAGE_LEGEND_INPUT':'Légende de l\'image','IMAGE_CREDITS_INPUT':'Crédits','IMAGE_GETURL':'En utilisant une image d\'un site web','IMAGE_UPLOAD_ADVICE':'Déposez une image depuis votre disque dur','IMAGE_DOWNLOAD_ADVICE':'Saisissez l\'URL d\'une image sur un site web','IMAGE_DOWNLOAD_ERROR_EMPTY':'Veuillez saisir l\'adresse d\'une image','IMAGE_DOWNLOAD_ERROR_TYPE':'Le type de l\'image est incorrect. Types acceptés : .jpg, .png, .gif','IMAGE_UPLOAD_ERROR_EMPTY':'Veuillez d&eacute;poser un fichier','IMAGE_UPLOAD_ERROR_TYPE':'Le type de fichier déposé est incorrect. Types autorisés : .jpg, .png, .gif','IMAGE_BTN_INSERT':'Insérer l\'image','IMAGE_CHOOSE_PART_1':'Ou vous pouvez choisir ','IMAGE_CHOOSE_PART_2':'une image sur un site','IMAGE_OPTIONS_PART_1':'Et vous pouvez configurer ','IMAGE_OPTIONS_PART_2':'certaines options','IMAGE_AS_GALLERY':'Activer le mode diapo ou slide','CODE_TWICE':'Entrée une seconde fois pour sortir du bloc de code','IMAGE_IN_BATCH':'Cette image fait partie d\'un lot','IMAGE_IN_BATCH_TITLE':'L\'image sera ou non selectionnée de manière à pouvoir insérer l\'image suivante ou simplement utiliser celle-ci.','QUIZZ_TITLE':'Ajoutez un quiz','QUIZZ_DISPLAY':'Quizz code','QUIZZ_TT_INSERT':'Insérer le quiz'}});}(jQuery));(function($){$.extend(true,$.magicLinks.langs,{'FR':{'ACCEPT_ALL':'Tout accepter','CANCEL_ALL':'Tout refuser','TT_LINK':'Voir ce lien dans une nouvelle page','TT_ADD_LINK':'Accepter et ajouter ce lien','TT_DEL_LINK':'Refuser ce lien','TT_CANCEL_ALL':'Refuser tous les liens actuellements proposés','TT_ACCEPT_ALL':'Accepter et ajouter tous les liens actuellements proposés'}});})(jQuery);(function($){$.extend(true,$.inputTags.langs,{'FR':{'enter_tags':'Indiquez vos tags ici, en les séparant par des virgules','enter_tags_short':'Indiquez vos tags ici','modify_tags':'Modifiez la liste de tags','edit_tag':'Modifier ce tag','delete_tag':'Supprimer ce tag','create_tag':'Proposer le tag','no_tag':'Aucun tag correspondant','do_you_mean':'Vouliez vous dire','max_tag_tipsy':'Nombre maximum de tags atteint','main_tag':'Ceci est le groupe principal'}});})(jQuery);(function($){if(typeof $.ui=='undefined'){return;}
!$.ui.datepicker.regional&&($.ui.datepicker.regional=[]);!$.ui.datepicker.defaults&&($.ui.datepicker.defaults=[]);$.ui.datepicker.regional['fr']={renderer:$.ui.datepicker.defaultRenderer,monthNames:['Janvier','F&eacute;vrier','Mars','Avril','Mai','Juin','Juillet','Ao&ucirc;t','Septembre','Octobre','Novembre','D&eacute;cembre'],monthNamesShort:['Jan','F&eacute;v','Mar','Avr','Mai','Jun','Jul','Ao&ucirc;','Sep','Oct','Nov','D&eacute;c'],dayNames:['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],dayNamesShort:['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],dayNamesMin:['Di','Lu','Ma','Me','Je','Ve','Sa'],dateFormat:'dd/mm/yy',firstDay:1,prevText:'&#x3c;Pr&eacute;c',prevStatus:'Voir le mois pr&eacute;c&eacute;dent',prevJumpText:'&#x3c;&#x3c;',prevJumpStatus:'Voir l\'ann&eacute;e pr&eacute;c&eacute;dent',nextText:'Suiv&#x3e;',nextStatus:'Voir le mois suivant',nextJumpText:'&#x3e;&#x3e;',nextJumpStatus:'Voir l\'ann&eacute;e suivant',currentText:'Courant',currentStatus:'Voir le mois courant',todayText:'Aujourd\'hui',todayStatus:'Voir aujourd\'hui',clearText:'Effacer',clearStatus:'Effacer la date s&eacute;lectionn&eacute;e',closeText:'Fermer',closeStatus:'Fermer sans modifier',yearStatus:'Voir une autre ann&eacute;e',monthStatus:'Voir un autre mois',weekText:'Sm',weekStatus:'Semaine de l\'ann&eacute;e',dayStatus:'\'Choisir\' le DD d MM',defaultStatus:'Choisir la date',isRTL:false};$.extend($.ui.datepicker.defaults,$.ui.datepicker.regional['fr']);})(jQuery);