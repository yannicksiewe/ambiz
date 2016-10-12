document.write("<iframe src='' name='nuggadcontentadIF' id='nuggadcontentadIF'  width='300' height='250'   scrolling='no' marginheight='0' marginwidth='0' frameborder='0'></iframe>");
var iframecontentad = document.getElementById('nuggadcontentadIF');




var	nuggBrowser = {
  Version: function() {
    var version = 999; // we assume a sane browser
    if (navigator.appVersion.indexOf("MSIE") != -1)
      // bah, IE again, lets downgrade version number
      version = parseFloat(navigator.appVersion.split("MSIE")[1]);
    return version;
  }
}


var doccontentad=document.getElementById('nuggadcontentadIF').contentWindow;


doccontentad.nuggadcontentad = {

	surveyLanguage: 'de',
	surveyDest: '',

	nutzerRechte: function() {
		return this.locale.privacyUrl;
	},
	


	layerId: 'nuggadcontentad',
	
	blockCheckCallUrl: 'http://eu.nuggad.net/blockstate',
	unblockCallUrl: 'http://eu.nuggad.net/unblock',
	
	Nutzerrechte: function() {
		var w = window.open(doccontentad.nuggadcontentad.nutzerRechte(),'nutzerrechte','scrollbars=1,toolbar=1,titlebar=0,status=0,resizable=1');
	},
	
	openSurveyWindow: function() {
		var w = window.open(doccontentad.nuggadcontentad.surveyDest);
	},

	initLayer: function() {
		var l = doccontentad.document.getElementById(this.layerId);
		l.style.display='block';
		l.innerHTML=this.getTemplate('layer.html.php');	
		hd=doccontentad.document.getElementById("nuggadcontentadHeaderHeadline");
		hd.innerHTML=this.locale.text.layerHeadline;
		mainText=doccontentad.document.getElementById("nuggadcontentadMainText");
		mainText.innerHTML=this.locale.text.layerText;		
		thisLogo="http://survey.nuggad.net/c/img-sitelogocontentad/s:"+this.site+"/"+this.siteLogo;


        doccontentad.document.getElementById("nuggadcontentadSiteLogo").src=thisLogo;
		this.appendStyleSheet(this.getTemplate('layer.css.php'));		
		doccontentad.document.getElementById("nuggadcontentadHeader").style.backgroundColor=this.headerBgColor;
	
	  l.onclick=function(e){
	  	var targ;
			if (!e || e==null) {var e = doccontentad.event;}
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
			if( (sourceE != "nuggadcontentadButtonspan") && (sourceE != "nuggadcontentadDisclaimerButton")) {
				 	doccontentad.nuggadcontentad.openSurveyWindow();
					doccontentad.nuggadcontentad.clickedParticipate();
			 }
	  };		
        partButton= doccontentad.document.getElementById("nuggadcontentadButtonPartitipate");
        partButton.onmouseup = function(){ //this.TurnLayer(0);           
 			doccontentad.nuggadcontentad.openSurveyWindow();
			doccontentad.nuggadcontentad.clickedParticipate();
        };
         doccontentad.document.getElementById("nuggadcontentadButtonspan").innerHTML=this.locale.text.participateButton;

        disclButton= doccontentad.document.getElementById("nuggadcontentadDisclaimerButton");
        disclButton.innerHTML=this.locale.text.disclaimerText;
        disclButton.onmouseup = function(){     
 			doccontentad.nuggadcontentad.Nutzerrechte();
        };
        if(this.networkID){
	        var ciPixel=new Image();
	        ciPixel.src="http://ci.nuggad.net/ci?nuggn="+this.networkID+"&campid=9229&ad_format_id=3&rand="+Math.random(); 
        }
        

        iframecontentad.contentDocument.getElementById("nuggadslide1").id="nuggadcontentadslide1";
        iframecontentad.contentDocument.getElementById("nuggadslide2").id="nuggadcontentadslide2";		        
        
        var nuggadtimer=1500; 
        if (nuggBrowser.Version() > 8) {

	        if( "contentad"!="skyscraper"){ 
	        doccontentad.setInterval(function() {	 
						 doccontentad.nuggadcontentad.fadeOut("nuggadcontentadslide1", 100); 
						 doccontentad.setTimeout(  function() {doccontentad.nuggadcontentad.fadeIn("nuggadcontentadslide2", 0); 	},1000);	
						 doccontentad.setTimeout(  function() {doccontentad.nuggadcontentad.fadeOut("nuggadcontentadslide2", 100); 	},nuggadtimer*4);  // 
						 doccontentad.setTimeout(  function() {doccontentad.nuggadcontentad.fadeIn("nuggadcontentadslide1", 100); 	},nuggadtimer*4+1000);		// 
					}, nuggadtimer*8);	//
		    }
		}
	},	

	appendStyleSheet: function(cssStr) {
 			rawsheet = cssStr;
        	newcss = doccontentad.document.createElement("style");
			newcss.type="text/css";
			newcss.media="all";
			doccontentad.document.getElementsByTagName("head")[0].appendChild(newcss);       
 			cssrules = rawsheet.split("}");       
        	newcss = doccontentad.document.styleSheets[0];
			if(newcss.rules) { //IE
				for(i=cssrules.length-2;i>=0;i--) {
					newrule = cssrules[i].split("{");
					newcss.addRule(newrule[0],newrule[1]);
				}
		}else{
					    ffcss = doccontentad.document.createElement("style");
			        ffcss.setAttribute("type", "text/css");
			        ffcss.innerHTML = cssStr;
						  doccontentad.document.getElementsByTagName('body')[0].appendChild(ffcss); 	
		}	    
	},
	getTemplate: function(templateName) {
		return this.templates[templateName];
	},	
	createGenericLayer: function() {
		
		var l			= doccontentad.document.createElement('div');
		l.id			 = doccontentad.nuggadcontentad.layerId;
		l.style.display  = "block";
		doccontentad.document.getElementsByTagName('body')[0].appendChild(l);
        doccontentad.nuggadcontentad.initLayer();
	},
	
	setOpacity: function(obj,opacity) {
		opacity=(opacity==100)?99.999:opacity;
		obj.style.MozOpacity=opacity/100;
		obj.style.KHTMLOpacity=opacity/100;
		obj.style.opacity=opacity/100;
	    obj.style.filter="alpha(opacity:"+opacity+")";
	},
	fadeIn: function(objId,opacity) { 
		if(iframecontentad.contentDocument.getElementById) {
			var o = iframecontentad.contentDocument.getElementById(objId);
			if(opacity<=100) {
				this.setOpacity(o, opacity);
				opacity+=10;
				doccontentad.setTimeout(function() {
					doccontentad.nuggadcontentad.fadeIn(objId, opacity);
				}, 50);
			}
		}
	},		
	fadeOut: function(objId,opacity) { 
		if(iframecontentad.contentDocument.getElementById) {
			var o = iframecontentad.contentDocument.getElementById(objId);
			if(opacity>=0) {
				this.setOpacity(o, opacity);
				opacity-=10;
				doccontentad.setTimeout(function() {
					doccontentad.nuggadcontentad.fadeOut(objId, opacity);
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
	
		doccontentad.document.cookie = cstr;
	},
	
	
		
	"brightButtonTheme":false,"frequencyCappingCount":3,"headerBgColor":"transparent","layerAlignHorizontal":"left","layerLeftAdjust":"150","layerProbability":1,"layerTimeout":15,"layerTopAdjust":"150","networkID":13981984,"noThanksButton":false,"siteID":793007028,"skipLayerAfterParticipation":false,"surveyDest":"http:\/\/survey.nuggad.net\/nugirq\/Start?si=405&cs=15152510&p1=3&p2=3","surveyLanguage":"fr","imgSrcRoot":"http:\/\/survey.nuggad.net\/c\/","siteLogo":"logo.png","site":"ASQ_CCM:ASQ_CCM_commentcamarche",
	

	
    "locale": {"privacyUrl":"http:\/\/www.nugg.ad\/fr\/produits\/protection_de_la_vie_privee.html","text":{"layerHeadline":"Votre avis compte!","closeButton":"fermer","participateButton":"participer","noThanxButton":"Nicht teilnehmen.","disclaimerText":"Informations sur la protection des donn\u00e9es et de la vie priv\u00e9e","layerText":"<div id='nuggadslide1'><div class='nuggadParagraph'>Aidez-nous \u00e0 rendre ensemble la publicit\u00e9 en ligne int\u00e9ressante!<\/div><div class='nuggadParagraph'>Nous vous remercions de bien vouloir prendre quelques minutes et r\u00e9pondre \u00e0 de simples questions. <\/div><\/div><div id='nuggadslide2'><div class='nuggadParagraph'>Bien s\u00fbr, toutes les informations que vous nous donnerez seront trait\u00e9es confidentiellement et analys\u00e9es de mani\u00e8re 100% anonyme.<\/div><div class='nuggadParagraph'><span class='nuggadBold'>Nous vous remercions de votre coop\u00e9ration!<\/span> <\/div><\/div>","mobileText":"<div id='nuggadslide1'><div class='nuggadParagraph'>Aidez-nous \u00e0 rendre ensemble la publicit\u00e9 en ligne int\u00e9ressante!<\/div><div class='nuggadParagraph'>Nous vous remercions de bien vouloir prendre quelques minutes et r\u00e9pondre \u00e0 de simples questions. <\/div><\/div><div id='nuggadslide2'><div class='nuggadParagraph'>Bien s\u00fbr, toutes les informations que vous nous donnerez seront trait\u00e9es confidentiellement et analys\u00e9es de mani\u00e8re 100% anonyme.<\/div><div class='nuggadParagraph'><span class='nuggadBold'>Nous vous remercions de votre coop\u00e9ration!<\/span> <\/div><\/div>"}},	

	templates: {
		'layer.css.php' :		'#nuggadcontentad *{font: inherit;font-family: "Franklin Gothic Book",Arial, Helvetica, sans-serif;font-weight:normal;font-size: 12px;margin: 0;padding: 0;border: 0;font-size: 100%;vertical-align: baseline;cursor:pointer;}#nuggadcontentad{width:300px;height:250px;overflow: hidden;background-image: url("http://survey.nuggad.net/c/img-common/bg_contentad.jpg");font-size: 12px;        font-family:"Franklin Gothic Book", "Arial",sans-serif;position:relative;color:#3A3A3A;}#nuggadcontentadHeaderTextWrap{            position: relative;left: 20px;top: 65px;width:255px;}#nuggadcontentad #nuggadcontentadButtonWrap{    margin:0px auto;    display: table;margin-top:6px;}#nuggadcontentad #nuggadcontentadDisclaimer{    margin:0px auto;    display: table;margin-top:7px;}#nuggadcontentad #nuggadcontentadDisclaimer a{color:#0048FF;font-size:11px;}#nuggadcontentad #nuggadcontentadMainText{position: relative;height:90px;overflow: hidden;}#nuggadcontentad a.nuggadcontentadButton {    background: transparent url("http://survey.nuggad.net/c/img-common/bg_button_a.gif") no-repeat scroll top right;    color: #fff;    display: block;    float: left;    font: bold 12px arial, sans-serif;    height: 26px;    margin-right: 6px;    padding-right: 14px; /* sliding doors padding */    text-decoration: none;}#nuggadcontentad a.nuggadcontentadButton span#nuggadcontentadButtonspan {    background: transparent url("http://survey.nuggad.net/c/img-common/bg_button_span.gif") no-repeat;    display: block;    line-height: 14px;    padding: 6px 0 6px 14px;    text-shadow: -1px -1px 0px #111, 1px 1px 0px #111;font-weight:bold;}#nuggadcontentad #nuggadcontentadHeader{position: absolute;left:1px;top:1px;width:298px;height:49px;}#nuggadcontentad #nuggadcontentadHeader img{margin-top:10px;margin-left: 20px;}#nuggadcontentad  #nuggadcontentadHeaderHeadline{font-size:15px;font-weight:bold;width:280px;margin-bottom: 2px;}#nuggadcontentad .nuggadParagraph{margin:0px 0px 5px 0px;}#nuggadcontentadslide2{   filter:alpha(opacity=0);   opacity:0;}#nuggadcontentadslide1{filter:alpha(opacity=100);   opacity:1;} #nuggadcontentadslide1{position: absolute; top:0px; left:0px;} #nuggadcontentadslide2{position: absolute; top:0px; left:0px;opacity:0;}#nuggadcontentad #naggadcontentadSiteLogo{margin-right:20px;margin-top:20px;}',
		'layer.html.php' :  '<div id="nuggadcontentadHeader"><img src="" id="nuggadcontentadSiteLogo" /></div><div id="nuggadcontentadHeaderTextWrap">      <div id="nuggadcontentadHeaderHeadline"></div><div id="nuggadcontentadMainText"><div id="nuggadslide1"><div class="nuggadcontentadParagraph"></div><div class="nuggadcontentadParagraph"></div></div><div id="nuggadslide2"><div class="nuggadcontentadParagraph"></div><div class="nuggadcontentadParagraph"><span class="nuggadcontentadBold"></span> </div></div></div><div id="nuggadcontentadButtonWrap"><a class="nuggadcontentadButton"  id="nuggadcontentadButtonPartitipate" href="javascript:;"><span id="nuggadcontentadButtonspan">Teilnehmen</span></a></div><div style="clear:both;"></div> <div id="nuggadcontentadDisclaimer"><a href="javascript:;"  id="nuggadcontentadDisclaimerButton">Hinweise zum Datenschutz</a></div> </div>'
	}

}







function initIF(){
	if(iframecontentad,document.readyState != "complete"){
		window.setTimeout(initIF,200);
	}else{
			doccontentad.nuggadcontentad.showSurveyLayer(); 
	}
}
initIF();




