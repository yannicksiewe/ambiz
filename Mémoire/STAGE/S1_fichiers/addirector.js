// Dynamic Search integration
function DcsDynamicSearch(cid){
	// private members
	var cname="WT_DSAI";
	var WT=(typeof(_tag.WT)=="object")?_tag.WT:{};

	// private methods
	function setAdInfo(){
		var value=getQueryParam("cshift_ck");
		if (value.length>0){
			var cur=new Date();
			var exp=new Date(cur.getTime()+315360000000);
			document.cookie=cname+"="+value+"; expires="+exp.toGMTString()+"; path=/";
		}
	}
	function getQueryParam(key){
		var qry=window.location.search.substring(1);
		if (qry.length>0){
			var params=qry.split("&");
			var count=params.length;
			for (var i=0;i<count;i++){
				var p=params[i].split("=");
				if (p[0]==key){
					return p[1];
				}
			}
		}
		return "";
	}

	// privileged methods
	this.getClientId=function(){
		return cid;
	};
	this.getProductInfo=function(){
		var info="";
		try{
			//replicated var id to split WT.pn_sku based on pipe and not semi-colon - DO 07/2008 (originally, 02/2008)
            var id=WT.pn_sku.split("|");
			var price=WT.tx_ls.split(";");
			var qty=WT.tx_u.split(";");
			var pr;
			for (var i=0;i<id.length;i++){
				pr=(parseFloat(price[i])*100)/parseInt(qty[i]);
				info+=(i?",":"")+escape(id[i])+"#"+pr.toFixed(4)+"*"+qty[i];
			}
		}
		catch(e){
		}
		return info;
	};
	this.getOrderInfo=function(){
		return WT.tx_i||"";
	};
	this.getIsNew=function(){
		return 1;
	};
	this.getAdInfo=function(){
		var info="";
		var pos=document.cookie.indexOf(cname+"=");
		if (pos!=-1){
			var start=pos+cname.length+1;
			var end=document.cookie.indexOf(";",start);
			if (end==-1){
				end=document.cookie.length;
			}
			info=unescape(document.cookie.substring(start,end));
		}
		return info;
	};
	this.getAttribution=function(){
		return "";
	};
	this.isConvPage=function(){
		return ((typeof(WT)=="object")&&(WT.tx_e=="p"))?true:false;
	};

	// read query parameter, set cookie
	setAdInfo();
}

var dcsDS=new DcsDynamicSearch(wtDScid);
if (dcsDS.isConvPage()){
	f2convert(dcsDS.getClientId(),dcsDS.getProductInfo(),dcsDS.getOrderInfo(),dcsDS.getIsNew(),dcsDS.getAdInfo());
}
