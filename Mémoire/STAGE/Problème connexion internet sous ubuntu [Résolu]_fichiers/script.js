document.write("<iframe src='' name='nuggadsuperbannerIF' id='nuggadsuperbannerIF'  width='728' height='90'   scrolling='no' marginheight='0' marginwidth='0' frameborder='0'></iframe>");
var iframesuperbanner = document.getElementById('nuggadsuperbannerIF');




var	nuggBrowser = {
  Version: function() {
    var version = 999; // we assume a sane browser
    if (navigator.appVersion.indexOf("MSIE") != -1)
      // bah, IE again, lets downgrade version number
      version = parseFloat(navigator.appVersion.split("MSIE")[1]);
    return version;
  }
}


var docsuperbanner=document.getElementById('nuggadsuperbannerIF').contentWindow;


docsuperbanner.nuggadsuperbanner = {

	surveyLanguage: 'de',
	surveyDest: '',

	nutzerRechte: function() {
		return this.locale.privacyUrl;
	},
	


	layerId: 'nuggadsuperbanner',
	
	blockCheckCallUrl: 'http://eu.nuggad.net/blockstate',
	unblockCallUrl: 'http://eu.nuggad.net/unblock',
	
	Nutzerrechte: function() {
		var w = window.open(docsuperbanner.nuggadsuperbanner.nutzerRechte(),'nutzerrechte','scrollbars=1,toolbar=1,titlebar=0,status=0,resizable=1');
	},
	
	openSurveyWindow: function() {
		var w = window.open(docsuperbanner.nuggadsuperbanner.surveyDest);
	},

	initLayer: function() {
		var l = docsuperbanner.document.getElementById(this.layerId);
		l.style.display='block';
		l.innerHTML=this.getTemplate('layer.html.php');	
		hd=docsuperbanner.document.getElementById("nuggadsuperbannerHeaderHeadline");
		hd.innerHTML=this.locale.text.layerHeadline;
		mainText=docsuperbanner.document.getElementById("nuggadsuperbannerMainText");
		mainText.innerHTML=this.locale.text.layerText;		
		thisLogo="http://survey.nuggad.net/c/img-sitelogosuperbanner/s:"+this.site+"/"+this.siteLogo;


        docsuperbanner.document.getElementById("nuggadsuperbannerSiteLogo").src=thisLogo;
		this.appendStyleSheet(this.getTemplate('layer.css.php'));		
		docsuperbanner.document.getElementById("nuggadsuperbannerHeader").style.backgroundColor=this.headerBgColor;
	
	  l.onclick=function(e){
	  	var targ;
			if (!e || e==null) {var e = docsuperbanner.event;}
			if (e.target){ 
				targ = e.target;
			}else if (e.srcElement) {
				targ = e.srcElement;
			}
			if (targ.nodeType == 3){ // defeat Safari bug
						targ = targ.parentNode
			}
      var sourceE;
			sourceE=targ.id;
			if( (sourceE != "nuggadsuperbannerButtonspan") && (sourceE != "nuggadsuperbannerDisclaimerButton")) {
				 	docsuperbanner.nuggadsuperbanner.openSurveyWindow();
					docsuperbanner.nuggadsuperbanner.clickedParticipate();
			 }
	  };		
        partButton= docsuperbanner.document.getElementById("nuggadsuperbannerButtonPartitipate");
        partButton.onmouseup = function(){ //this.TurnLayer(0);           
 			docsuperbanner.nuggadsuperbanner.openSurveyWindow();
			docsuperbanner.nuggadsuperbanner.clickedParticipate();
        };
         docsuperbanner.document.getElementById("nuggadsuperbannerButtonspan").innerHTML=this.locale.text.participateButton;

        disclButton= docsuperbanner.document.getElementById("nuggadsuperbannerDisclaimerButton");
        disclButton.innerHTML=this.locale.text.disclaimerText;
        disclButton.onmouseup = function(){     
 			docsuperbanner.nuggadsuperbanner.Nutzerrechte();
        };
        if(this.networkID){
	        var ciPixel=new Image();
	        ciPixel.src="http://ci.nuggad.net/ci?nuggn="+this.networkID+"&campid=9229&ad_format_id=1&rand="+Math.random(); 
        }
        

        iframesuperbanner.contentDocument.getElementById("nuggadslide1").id="nuggadsuperbannerslide1";
        iframesuperbanner.contentDocument.getElementById("nuggadslide2").id="nuggadsuperbannerslide2";		        
        
        var nuggadtimer=1500; 
        if (nuggBrowser.Version() > 8) {

	        if( "superbanner"!="skyscraper"){ 
	        docsuperbanner.setInterval(function() {	 
						 docsuperbanner.nuggadsuperbanner.fadeOut("nuggadsuperbannerslide1", 100); 
						 docsuperbanner.setTimeout(  function() {docsuperbanner.nuggadsuperbanner.fadeIn("nuggadsuperbannerslide2", 0); 	},1000);	
						 docsuperbanner.setTimeout(  function() {docsuperbanner.nuggadsuperbanner.fadeOut("nuggadsuperbannerslide2", 100); 	},nuggadtimer*4);  // 
						 docsuperbanner.setTimeout(  function() {docsuperbanner.nuggadsuperbanner.fadeIn("nuggadsuperbannerslide1", 100); 	},nuggadtimer*4+1000);		// 
					}, nuggadtimer*8);	//
		    }
		}
	},	

	appendStyleSheet: function(cssStr) {
 			rawsheet = cssStr;
        	newcss = docsuperbanner.document.createElement("style");
			newcss.type="text/css";
			newcss.media="all";
			docsuperbanner.document.getElementsByTagName("head")[0].appendChild(newcss);       
 			cssrules = rawsheet.split("}");       
        	newcss = docsuperbanner.document.styleSheets[0];
			if(newcss.rules) { //IE
				for(i=cssrules.length-2;i>=0;i--) {
					newrule = cssrules[i].split("{");
					newcss.addRule(newrule[0],newrule[1]);
				}
		}else{
					    ffcss = docsuperbanner.document.createElement("style");
			        ffcss.setAttribute("type", "text/css");
			        ffcss.innerHTML = cssStr;
						  docsuperbanner.document.getElementsByTagName('body')[0].appendChild(ffcss); 	
		}	    
	},
	getTemplate: function(templateName) {
		return this.templates[templateName];
	},	
	createGenericLayer: function() {
		
		var l			= docsuperbanner.document.createElement('div');
		l.id			 = docsuperbanner.nuggadsuperbanner.layerId;
		l.style.display  = "block";
		docsuperbanner.document.getElementsByTagName('body')[0].appendChild(l);
        docsuperbanner.nuggadsuperbanner.initLayer();
	},
	
	setOpacity: function(obj,opacity) {
		opacity=(opacity==100)?99.999:opacity;
		obj.style.MozOpacity=opacity/100;
		obj.style.KHTMLOpacity=opacity/100;
		obj.style.opacity=opacity/100;
	    obj.style.filter="alpha(opacity:"+opacity+")";
	},
	fadeIn: function(objId,opacity) { 
		if(iframesuperbanner.contentDocument.getElementById) {
			var o = iframesuperbanner.contentDocument.getElementById(objId);
			if(opacity<=100) {
				this.setOpacity(o, opacity);
				opacity+=10;
				docsuperbanner.setTimeout(function() {
					docsuperbanner.nuggadsuperbanner.fadeIn(objId, opacity);
				}, 50);
			}
		}
	},		
	fadeOut: function(objId,opacity) { 
		if(iframesuperbanner.contentDocument.getElementById) {
			var o = iframesuperbanner.contentDocument.getElementById(objId);
			if(opacity>=0) {
				this.setOpacity(o, opacity);
				opacity-=10;
				docsuperbanner.setTimeout(function() {
					docsuperbanner.nuggadsuperbanner.fadeOut(objId, opacity);
				}, 50);
			}
		}
	},		
		

	clickedParticipate: function() {
		if(this.skipLayerAfterParticipation) this.setCookie('nugg_participated', '1', {expires: 1000 * 3600 * 24 * 365, path: '/'});
	},
	showSurveyLayer: function() {	
		var l = this.createGenericLayer();
	},
	
	setCookie: function(name, value, params) {
		var cstr = escape(name) + '=' + escape(value);
		
		if(params.expires) {
			var d = new Date();
			var dl = new Date(d.getTime() + params.expires);
			cstr += ' ;expires=' + dl.toGMTString();
		}
		
		if(params.path) {
			cstr += ' ;path=' + params.path;
		}
	
		docsuperbanner.document.cookie = cstr;
	},
	
	
		
	"brightButtonTheme":false,"frequencyCappingCount":3,"headerBgColor":"transparent","layerAlignHorizontal":"left","layerLeftAdjust":"150","layerProbability":1,"layerTimeout":15,"layerTopAdjust":"150","networkID":13981984,"noThanksButton":false,"siteID":793007028,"skipLayerAfterParticipation":false,"surveyDest":"http:\/\/survey.nuggad.net\/nugirq\/Start?si=405&cs=15152510&p1=3&p2=3","surveyLanguage":"fr","imgSrcRoot":"http:\/\/survey.nuggad.net\/c\/","siteLogo":"logo.png","site":"ASQ_CCM:ASQ_CCM_commentcamarche",
	

	
    "locale": {"privacyUrl":"http:\/\/www.nugg.ad\/fr\/produits\/protection_de_la_vie_privee.html","text":{"layerHeadline":"Votre avis compte!","closeButton":"fermer","participateButton":"participer","noThanxButton":"Nicht teilnehmen.","disclaimerText":"Informations sur la protection des donn\u00e9es et de la vie priv\u00e9e","layerText":"<div id='nuggadslide1'><div class='nuggadParagraph'>Aidez-nous \u00e0 rendre ensemble la publicit\u00e9 en ligne int\u00e9ressante!<\/div><div class='nuggadParagraph'>Nous vous remercions de bien vouloir prendre quelques minutes et r\u00e9pondre \u00e0 de simples questions. <\/div><\/div><div id='nuggadslide2'><div class='nuggadParagraph'>Bien s\u00fbr, toutes les informations que vous nous donnerez seront trait\u00e9es confidentiellement et analys\u00e9es de mani\u00e8re 100% anonyme.<\/div><div class='nuggadParagraph'><span class='nuggadBold'>Nous vous remercions de votre coop\u00e9ration!<\/span> <\/div><\/div>","mobileText":"<div id='nuggadslide1'><div class='nuggadParagraph'>Aidez-nous \u00e0 rendre ensemble la publicit\u00e9 en ligne int\u00e9ressante!<\/div><div class='nuggadParagraph'>Nous vous remercions de bien vouloir prendre quelques minutes et r\u00e9pondre \u00e0 de simples questions. <\/div><\/div><div id='nuggadslide2'><div class='nuggadParagraph'>Bien s\u00fbr, toutes les informations que vous nous donnerez seront trait\u00e9es confidentiellement et analys\u00e9es de mani\u00e8re 100% anonyme.<\/div><div class='nuggadParagraph'><span class='nuggadBold'>Nous vous remercions de votre coop\u00e9ration!<\/span> <\/div><\/div>"}},	

	templates: {
		'layer.css.php' :		'#nuggadsuperbanner *{font: inherit;font-family: "Franklin Gothic Book",Arial, Helvetica, sans-serif;margin: 0;padding: 0;border: 0;font-size: 12px;line-height: 110%;cursor:pointer;}#nuggadsuperbanner{width:728px;height:90px;overflow: hidden;background-image: url("http://survey.nuggad.net/c/img-common/bg_superbanner.jpg");font-size: 13px;font-family: "Franklin Gothic Book",Arial, Helvetica, sans-serif;position:relative;color:#3A3A3A;}#nuggadsuperbanner #nuggadsuperbannerHeaderTextWrap{position: absolute;left: 140px;top: 8px;width:420px;}#nuggadsuperbanner #nuggadsuperbannerButtonWrap{position: absolute;right:5px;top:30px;}#nuggadsuperbanner #nuggadsuperbannerDisclaimer a{color:#0048FF;font-size:10px;}#nuggadsuperbanner #nuggadsuperbannerMainText{position: relative;height:40px;overflow: hidden;}#nuggadsuperbanner  a.nuggadsuperbannerButton {    background: transparent url("http://survey.nuggad.net/c/img-common/bg_button_a.gif") no-repeat scroll top right;    color: #fff;    display: block;    float: left;    font: bold 12px arial, sans-serif;    height: 26px;    margin-right: 6px;    padding-right: 14px; /* sliding doors padding */    text-decoration: none;}#nuggadsuperbanner a.nuggadsuperbannerButton span#nuggadsuperbannerButtonspan {    background: transparent url("http://survey.nuggad.net/c/img-common/bg_button_span.gif") no-repeat;    display: block;    line-height: 14px;    padding: 6px 0px 6px 14px;    text-shadow: -1px -1px 0px #111, 1px 1px 0px #111;font-weight:bold;}#nuggadsuperbannerHeader{position: absolute;left:1px;top:1px;width:120px;height:88px;text-align: center;}#nuggadsuperbanner #nuggadsuperbannerHeaderHeadline{font-size:15px;font-weight:bold;margin-bottom:3px;}#nuggadsuperbanner .nuggadParagraph{margin:0px 0px 0px 0px;}#nuggadsuperbannerslide2{   filter:alpha(opacity=0);   opacity:0;}#nuggadsuperbannerslide1{filter:alpha(opacity=100);   opacity:1;} #nuggsuperbanneradslide1{position: absolute; top:0px; left:0px;}#nuggadsuperbannerslide2{position: absolute; top:0px; left:0px;}#nuggadsuperbanner #nuggadsuperbannerDisclaimer{margin-top:4px;}',
		'layer.html.php' :  '<div id="nuggadsuperbannerHeader"><table cellpadding="0" cellscpacing="0" width="120" height="88"><tr><td valign="middle" align="center"><img src="" id="nuggadsuperbannerSiteLogo" /></td></tr></table></div><div id="nuggadsuperbannerHeaderTextWrap">       <div id="nuggadsuperbannerHeaderHeadline"></div><div id="nuggadsuperbannerMainText"><div id="nuggadslide1"><div class="nuggadsuperbannerParagraph"></div><div class="nuggadsuperbannerParagraph"></div></div><div id="nuggadslide2"><div class="nuggadsuperbannerParagraph"></div><div class="nuggadsuperbannerParagraph"><span class="nuggadsuperbannerBold">Vielen Dank!</span> </div></div> </div>          <div id="nuggadsuperbannerDisclaimer"><a href="javascript:;"  id="nuggadsuperbannerDisclaimerButton">Hinweise zum Datenschutz</a></div> </div><div id="nuggadsuperbannerButtonWrap"><a class="nuggadsuperbannerButton"  id="nuggadsuperbannerButtonPartitipate" href="javascript:;"><span id="nuggadsuperbannerButtonspan">Teilnehmen</span></a></div>'
	}

}







function initIF(){
	if(iframesuperbanner,document.readyState != "complete"){
		window.setTimeout(initIF,200);
	}else{
			docsuperbanner.nuggadsuperbanner.showSurveyLayer(); 
	}
}
initIF();




