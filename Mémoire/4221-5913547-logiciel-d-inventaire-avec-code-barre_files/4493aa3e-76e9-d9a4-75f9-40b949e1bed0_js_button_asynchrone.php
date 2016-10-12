function version_compare(localJQuery, avisverifiesJQuery) {
    var v1parts = localJQuery.split('.');
    var v2parts = avisverifiesJQuery.split('.');
    for (var i = 0; i < v1parts.length; ++i) {
        if (v2parts.length == i) {
            return 1;
        }
        if (v1parts[i] == v2parts[i]) {
            continue;
        }
        else if (v1parts[i] > v2parts[i]) {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (v1parts.length != v2parts.length) {
        return 2;
    }
    return 1;
}

function getInternetExplorerVersion()
{
   var rv = -1; // Return value assumes failure.
   if (navigator.appName == 'Microsoft Internet Explorer')
   {
      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
         rv = parseFloat( RegExp.$1 );
   }
   return rv;
}

var modeTAG_Tracker=false;
var modeTAG_TrackerID='--';
	
var modeQuirksIE=false;
if(document.compatMode == 'CSS1Compat') {
	// Mode normal
} else {
	// Mode Quirks
	if(getInternetExplorerVersion() != -1) {
		// IE Sous Quirks mode
		modeQuirksIE=true; 
	}
}


if(typeof ac_mbox_site === 'undefined') {

	var ac_widget = {
		init : function() {
			ac_widget.docMode = document.documentMode;
			ac_widget.docCompatibilite = document.compatMode;
			ac_widget.displayWidget();
			
		},
		
		displayWidget : function() {

			var url_protocol = "http://www.avis-verifies.com/avis-clients/widget/4/4/9/4493aa3e-76e9-d9a4-75f9-40b949e1bed0/"; //http://wwww.avis ou https://www.avis...
			var url_protocol_count = "http://www.avis-verifies.com/index.php?action=act_count";

			url_protocol = url_protocol.replace("https:","");
			url_protocol = url_protocol.replace("http:","");	
			url_protocol = document.location.protocol + url_protocol;

			url_protocol_count = url_protocol_count.replace("https:","");
			url_protocol_count = url_protocol_count.replace("http:","");	
			url_protocol_count = document.location.protocol + url_protocol_count;	


			if(!modeQuirksIE) {
				if(modeTAG_Tracker)
					var content = '<div id="aviscertifies_widget_4493aa3e-76e9-d9a4-75f9-40b949e1bed0_wf1_3" class="aviscertifies_widget_4493aa3e-76e9-d9a4-75f9-40b949e1bed0_wf1_3 AC_position-fixed-top"><a href="http://ums.sddan.com/click.aspx?wid=70922&adv='+modeTAG_TrackerID+'&mid=2&target=http://www.avis-verifies.com/index.php?action=act_count&client=www.techni-contact.com&widget=wf1_3" id="aviscertifies_widget_4493aa3e-76e9-d9a4-75f9-40b949e1bed0" rel="ac_mbox_site" title="Voir les avis de nos clients" target="_blank"><img src="'+url_protocol+'4493aa3e-76e9-d9a4-75f9-40b949e1bed0_wf1_3.png?time=1457918337" style="border: 1px solid transparent;" alt="Voir les avis vérifiés de nos clients"></a></div>';
				else
					var content = '<div id="aviscertifies_widget_4493aa3e-76e9-d9a4-75f9-40b949e1bed0_wf1_3" class="aviscertifies_widget_4493aa3e-76e9-d9a4-75f9-40b949e1bed0_wf1_3 AC_position-fixed-top"><a href="'+url_protocol_count+'&client=www.techni-contact.com&widget=wf1_3" id="aviscertifies_widget_4493aa3e-76e9-d9a4-75f9-40b949e1bed0" rel="ac_mbox_site" title="Voir les avis de nos clients" target="_blank"><img src="'+url_protocol+'4493aa3e-76e9-d9a4-75f9-40b949e1bed0_wf1_3.png?time=1457918337" style="border: 1px solid transparent;" alt="Voir les avis vérifiés de nos clients"></a></div>';					
			} else {
				if(modeTAG_Tracker)
					var content = '<div id="aviscertifies_widget_4493aa3e-76e9-d9a4-75f9-40b949e1bed0_wf1_3" class="aviscertifies_widget_4493aa3e-76e9-d9a4-75f9-40b949e1bed0_wf1_3 AC_position-fixed-top"><a href="http://ums.sddan.com/click.aspx?wid=70922&adv='+modeTAG_TrackerID+'&mid=2&target=http://www.avis-verifies.com/index.php?action=act_count&client=www.techni-contact.com&widget=wf1_3" id="aviscertifies_widget_4493aa3e-76e9-d9a4-75f9-40b949e1bed0" rel="ac_mbox_site" title="Voir les avis de nos clients" target="_blank"><img src="'+url_protocol+'4493aa3e-76e9-d9a4-75f9-40b949e1bed0_wf1_3.png?time=1457918337" style="border: 1px solid transparent;" alt="Voir les avis vérifiés de nos clients"></a></div>';
				else
					var content = '<div id="aviscertifies_widget_4493aa3e-76e9-d9a4-75f9-40b949e1bed0_wf1_3" class="aviscertifies_widget_4493aa3e-76e9-d9a4-75f9-40b949e1bed0_wf1_3 AC_position-fixed-top"><a href="'+url_protocol_count+'&client=www.techni-contact.com&widget=wf1_3" id="aviscertifies_widget_4493aa3e-76e9-d9a4-75f9-40b949e1bed0" rel="ac_mbox_site" title="Voir les avis de nos clients" target="_blank"><img src="'+url_protocol+'4493aa3e-76e9-d9a4-75f9-40b949e1bed0_wf1_3.png?time=1457918337" style="border: 1px solid transparent;" alt="Voir les avis vérifiés de nos clients"></a></div>';
			}

		
			window.addEventListener("load", function load(event){
                window.removeEventListener("load", load, false); //remove listener, no longer needed
                
                var element = document.createElement('div');
              	element.innerHTML = content;                
                if(document.body != null){
                    document.body.appendChild(element);
                }
            },false);


		}
	}
	var ac_mbox_site = {
		
		init : function() {
			ac_mbox_site.largeur=740;
			ac_mbox_site.hauteur=500;
			ac_mbox_site.docMode = document.documentMode;
			ac_mbox_site.docCompatibilite = document.compatMode;
			
			
			if (typeof jQuery("body").on === "function") {
                jQuery("body").on('click','a[rel="ac_mbox_site"]',function( event ) {
                    event.preventDefault();
                    event.stopPropagation();             	
                    ac_mbox_site.lien = jQuery(this).attr('href');
                    ac_mbox_site.openCertificat(ac_mbox_site.lien);
                    return false;
                });
            }
            else if(typeof jQuery("body").live === "function") {
               jQuery("a[id^='aviscertifies_widget']").live('click',function( event ) {
                    event.preventDefault();
                    event.stopPropagation();
                    ac_mbox_site.lien = jQuery(this).attr('href');
                    ac_mbox_site.openCertificat(ac_mbox_site.lien);
                    return false;
                }); 
            }
			
			jQuery(window).resize(ac_mbox_site.redim);
		},
		
		openCertificat : function(lien) {
			ac_mbox_site.lien = lien;
			jQuery("body").append('<div id="ac_mbox_conteneur" style="width: 780px;height: 500px;"><div id="ac_mbox_close" style="z-index:99999999;"></div><div id="ac_mbox_contenu" style="overflow: auto !important;-webkit-overflow-scrolling: touch !important;height: 500px;z-index: 99999998;position: relative;"><iframe src="'+ac_mbox_site.lien+'" width="100%" height="100%" style="border: none"/></div></div>');
			jQuery("#ac_mbox_conteneur").fadeIn(250);
			jQuery("#ac_mbox_close").click(ac_mbox_site.close);
			ac_mbox_site.redim();
		},
		close : function() {
			jQuery("#ac_mbox_conteneur").fadeOut(function () {
				jQuery("#ac_mbox_conteneur").remove();
			});
		},
		redim: function() {
			//jQuery("#ac_mbox_conteneur").css('left', ((ac_mbox_site.windowW() - ac_mbox_site.largeur) / 2)+'px');
			//jQuery("#ac_mbox_conteneur").css('top', ((ac_mbox_site.windowH() - ac_mbox_site.hauteur) / 2)+'px');
			if(ac_mbox_site.windowW() > 800){
				jQuery("#ac_mbox_conteneur").css('left', ((ac_mbox_site.windowW() - ac_mbox_site.largeur) / 2)+'px');
				jQuery("#ac_mbox_conteneur").css('width', '780px');
				jQuery("#ac_mbox_conteneur").css('max-width', '780px');
				jQuery("#ac_mbox_conteneur").css('height', '500px');
				jQuery("#ac_mbox_close").css('position', 'absolute');
				jQuery("#ac_mbox_close").css('right', '-20px');
				jQuery("#ac_mbox_close").css('top', '-20px');
			} else {
				jQuery("#ac_mbox_conteneur").css('left', '2%');
				jQuery("#ac_mbox_conteneur").css('width', '96%');
				jQuery("#ac_mbox_conteneur").css('max-width', '780px');
				jQuery("#ac_mbox_close").css('position', 'fixed');
				jQuery("#ac_mbox_close").css('right', '5%');
				jQuery("#ac_mbox_close").css('top', '10px');
			}
			if(ac_mbox_site.windowH() > 600){
				jQuery("#ac_mbox_conteneur").css('top', ((ac_mbox_site.windowH() - ac_mbox_site.hauteur) / 2)+'px');
				jQuery("#ac_mbox_conteneur").css('height', '500px');
				if(ac_mbox_site.windowW() <= 800){
					jQuery("#ac_mbox_close").css('top', ((ac_mbox_site.windowH() - ac_mbox_site.hauteur) / 2)+'px');
					jQuery("#ac_mbox_close").css('right', '3%');
				}
			} else {
				jQuery("#ac_mbox_conteneur").css('top', '2%');
				jQuery("#ac_mbox_conteneur").css('height', '96%');
				
			}
		},
		windowH: function() {
			if(ac_mbox_site.docMode) {
				if(ac_mbox_site.docMode>6)
					return document.documentElement.clientHeight;
				else
					return document.body.clientHeight;
			} else
				return window.innerHeight;
		},
		windowW: function() {
			if(ac_mbox_site.docMode) {
				if(ac_mbox_site.docMode>6)
					return document.documentElement.clientWidth;
				else 
					return document.body.clientWidth;
			} else
				return window.innerWidth;
		},
		scrollY: function() {
			scrOfY = 0;
			if(typeof(window.pageYOffset) == 'Number') {
				scrOfY = window.pageYOffset;
			} else if(document.body && (document.body.scrollTop)) {
				scrOfY = document.body.scrollTop;
			} else if(document.documentElement && (document.documentElement.scrollTop)) {
				scrOfY = document.documentElement.scrollTop;
			}		
			return scrOfY;
		}
	}
	

	
	

	try {			
		ac_widget.init();
        jQuery(document).ready(function() {
			ac_mbox_site.init();
		});
        
        
	} catch(err) {
		jQueryIsLoaded=false;
	}
	
	
}

var av_css = "";
var url_protocol_css = "http://www.avis-verifies.com/";
url_protocol_css = url_protocol_css.replace("https:","");
url_protocol_css = url_protocol_css.replace("http:","");
url_protocol_css = url_protocol_css.replace("aviscertifies","avis-verifies");
url_protocol_css = document.location.protocol + url_protocol_css;

if(!modeQuirksIE) { 
	av_css = av_css + '#ac_mbox_conteneur{ position:fixed; display:none; top:50px; left:50px; background:#e8e8e8; z-index:99999997; border-style: solid; border-color: #b0b0b0; border-width: 2px; background:url(\''+url_protocol_css+'images/loading_orange.gif\') #e8e8e8 center center no-repeat;}';
	av_css = av_css + '#ac_mbox_relative{ padding:3px; position:relative; }';
	av_css = av_css + '#ac_mbox_close{ position:absolute; top:-20px; right:-20px; width:40px; height:40px; background:url(\''+url_protocol_css+'images/close_popin.png\');cursor:pointer;}';
	av_css = av_css + '#ac_mbox_logo{ position:absolute; top:-25px; left:-25px; width:90px; height:92px; background:url(\''+url_protocol_css+'images/Sceau_90.png\');}';

	av_css = av_css + '.AC_position-fixed-top {';
	av_css = av_css + 'position:fixed !important;';
	av_css = av_css + 'top: 0;';
	av_css = av_css + '}';
	av_css = av_css + '.AC_position-fixed-center {';
	av_css = av_css + 'position:fixed !important;';
	av_css = av_css + 'top: 50%;';
	av_css = av_css + '}';
	av_css = av_css + '.AC_position-fixed-bottom {';
	av_css = av_css + 'position:fixed !important;';
	av_css = av_css + 'bottom:0;';
	av_css = av_css + '}';
} else {
	av_css = av_css + '#ac_mbox_conteneur{ position:absolute !important; display:none; top:50px; left:50px; background:#e8e8e8; z-index:99999997; border-style: solid; border-color: #b0b0b0; border-width: 2px; background:url(\''+url_protocol_css+'images/loading_orange.gif\') #e8e8e8 center center no-repeat;}';
	av_css = av_css + '#ac_mbox_relative{ padding:3px; position:relative; }';
	av_css = av_css + '#ac_mbox_close{ position:absolute; top:-20px; right:-20px; width:40px; height:40px; background:url(\''+url_protocol_css+'images/close_popin.png\');cursor:pointer;}';
	av_css = av_css + '#ac_mbox_logo{ position:absolute; top:-25px; left:-25px; width:90px; height:92px; background:url(\''+url_protocol_css+'images/Sceau_90.png\');}';

	av_css = av_css + '.AC_position-fixed-top {';
	av_css = av_css + 'position: absolute !important;';
	av_css = av_css + 'bottom:auto;';
	av_css = av_css + 'top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + (!this.offsetHeight && 0)) + "px");';
	av_css = av_css + '}';
	av_css = av_css + '.AC_position-fixed-center {';
	av_css = av_css + 'position: absolute !important;';
	av_css = av_css + 'top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + ((((document.documentElement.clientHeight || document.body.clientHeight) + (!this.offsetHeight && 0)) / 2) >> 0)) + "px");';
	av_css = av_css + '}';
	av_css = av_css + '.AC_position-fixed-bottom {';
	av_css = av_css + 'position: absolute !important;';
	av_css = av_css + 'top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight) + "px");';
	av_css = av_css + '}';
}


av_css = av_css + '.aviscertifies_widget_4493aa3e-76e9-d9a4-75f9-40b949e1bed0_wf1_3 {';
av_css = av_css + 'right:0;';
av_css = av_css + 'cursor: pointer;';
av_css = av_css + 'padding:0px;';
av_css = av_css + 'width:120px;';
av_css = av_css + 'height:85px;';
av_css = av_css + 'margin-top:0px;';
av_css = av_css + 'z-index:999000;';
av_css = av_css + '}';

av_head = document.getElementsByTagName('head')[0];
av_style = document.createElement('style');
av_style.type = 'text/css';

if (av_style.styleSheet){
  av_style.styleSheet.cssText = av_css;
} else {
  av_style.appendChild(document.createTextNode(av_css));
}
av_head.appendChild(av_style);
