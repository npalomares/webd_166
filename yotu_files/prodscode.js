var s_tc_prodscode=new TagContainer('prodscode');

function TagContainer(n){var t=this,w=t.w=window;t.d=w.document;t._c='s_t';if(!w.s_c_il){w.s_c_il=[];w.s_c_in=0}t._il=w.s_c_il;t._in=w.s_c_in;t._il[t._in]=t;w.s_c_in++;t.tcn=t.l=0;t.stc=function(n){
var t=this,l=t.w.s_c_il,i,x;t.tcn=n;if(l)for(i=0;i<l.length;i++){x=l[i];if(x&&x._c=='s_l'&&x.tagContainerName==n)t.l=x}};t.stc(n);t.xd=function(s){var t=this,x=0;if(
t.d.implementation&&t.d.implementation.createDocument)x=(new DOMParser).parseFromString(s,'text/xml');else if(t.w.ActiveXObject){x=new ActiveXObject('Microsoft.XMLDOM');x.async='false';x.loadXML(s)}
return x};t.xe=function(x,t){var a,b=[],i,j;for(i=0;i<2;i++){if(i>0)t=t.toLowerCase();a=x.getElementsByTagName(t);if(a)for(j=0;j<a.length;j++)b[b.length]=a[j]}return b};t.xt=function(x){var t=this,b=
"",l,i;l=x.childNodes;if(l)for(i=0;i<l.length;i++)b+=t.xt(l[i]);if(x.data)b+=x.data;return b};t.cp=function(x){var t=this,tn=Math.floor((new Date).getTime()/1000),ts=x.s,te=x.e,tp=1,l=t.d.location,h=
l.hostname,hm=x.h,hp=1,p=l.pathname,pm=x.p,pp=1,q=l.search,qm=x.q,qp=1,qi,qv,c=t.d.cookie,cm=x.c,cp=1,ci,cv,i;if(ts)tp=(tn>=ts&&(!te||tn<=te));if(hm){hp=0;if(h){i=0;while(!hp&&i<hm.length){if(
h.indexOf(hm[i])>=0)hp=1;i++}}}if(pm){pp=0;if(p){i=0;while(!pp&&i<pm.length){if(p.indexOf(pm[i])>=0)pp=1;i++}}}if(qm){qp=0;if(q){if(q.substring(0,1)=='?')q=q.substring(1);q='&'+q+'&';i=0;while(
!qp&&i<qm.length){qi=q.indexOf('&'+qm[i].k+'=');if(!qm[i].v&&qi<0)qi=q.indexOf('&'+qm[i].k+'&');if(qi>=0)if(qm[i].v){qv=q.substring(qi+qm[i].k.length+2);qi=qv.indexOf('&');if(qi>=0){qv=unescape(
qv.substring(0,qi));if(qv==qm[i].v)qp=1}}else qp=1;i++}}}if(cm){cp=0;if(c){c=';'+c+';';c=c.split('; ').join(';');i=0;while(!cp&&i<cm.length){ci=c.indexOf(';'+cm[i].k+'=');if(!cm[i].v&&ci<0)ci=
c.indexOf(';'+cm[i].k+';');if(ci>=0)if(cm[i].v){cv=c.substring(ci+cm[i].k.length+2);ci=cv.indexOf(';');if(ci>=0){cv=unescape(cv.substring(0,ci));if(cv==cm[i].v)cp=1}}else cp=1;i++}}}return(
tp&&hp&&pp&&qp&&cp)};t.cl=[];t.cn=t.cpn=0;t.crt=0;t.bl=[];t.crl=function(cn,cpn){var t=this;if(cn==t.cn&&cpn==t.cpn)t.cr()};t.cr=function(){var t=this,d=t.d,b,c,p,n=1,o,u,x,y,l,i;if(t.cl.length>0){if(
!d.body){if(!t.crt)t.crt=setTimeout(function(){t.crt=0;t.cr()},13)}else{b=d.body;while(n&&t.cn<t.cl.length){c=t.cl[t.cn];if(t.cdwb){u=t.cdwb;t.cdwb=0;u='<div>'+u.replace(/&/g,'&amp;').replace(
/<img /gi,'<IMG ').replace(/<\/img>/gi,'</IMG>').replace(/<script /gi,'<SCRIPT ').replace(/<script>/gi,'<SCRIPT>').replace(/<\/script>/gi,'</SCRIPT>').replace(/<iframe /gi,'<IFRAME ').replace(
/<\/iframe>/gi,'</IFRAME>')+'</div>';x=t.xd(u);l=t.xe(x,'IMG');for(i=0;i<l.length;i++){u=l[i].getAttribute('src');if(u)c.p.splice(t.cpn,0,{t:'i',u:u})}l=t.xe(x,'SCRIPT');for(i=0;i<l.length;i++){u=l[i]
.getAttribute('src');if(u)c.p.splice(t.cpn,0,{t:'s',u:u});else{u=t.xt(l[i]);if(u)c.p.splice(t.cpn,0,{t:'c',c:u})}}l=t.xe(x,'IFRAME');for(i=0;i<l.length;i++){u=l[i].getAttribute('src');if(u)c.p.splice(
t.cpn,0,{t:'f',u:u})}}if((t.cpn>0||!c.x||t.cp(c.x))&&c.p&&t.cpn<c.p.length){p=c.p[t.cpn];if(p.t=='b'&&p.u){u=p.u;o=new Image;t.bl[t.bl.length]=o;o.onload=function(){var i;for(i=0;i<t.bl.length;i++)if(
t.bl[i]&&t.bl[i].src==u){t.bl.splice(i,1);return}};o.src=u}if((p.t=='s'&&p.u)||(p.t=='c'&&p.c)){n=0;t.cpn++;u=p.u;o=d.createElement('script');o.type='text/javascript';o.setAttribute('async','async')
x='s_c_il['+t._in+']';y=x+'.crl('+t.cn+','+t.cpn+')';if(p.t=='s'){o.n=new Function(y);o.t=0;o.i=setInterval(function(){if(o.readyState=='loaded')o.t++;if(o.readyState=='complete'||o.t>2){o.c();o.n()}}
,50);o.c=function(){if(o.i){clearInterval(o.i);o.i=0}};o.onreadystatechange=function(){if(o.readyState=='complete'){o.c();o.n()}};o.onload=function(){o.c();o.n()};o.src=u}else o.text=x+'.cdw='+x+
'.d.write;'+x+'.cdwb="";'+x+'.d.write=function(m){'+x+'.cdwb+=m};'+"\n"+p.c+"\n"+x+'.d.write='+x+'.cdw;'+y;x=b;l=d.getElementsByTagName('HEAD');if(l&&l[0])x=l[0];if(x.firstChild)x.insertBefore(o,
x.firstChild);else x.appendChild(o)}if(p.t=='f'&&p.u){u=p.u;o=d.createElement('IFRAME');o.setAttribute('style','display:none');o.setAttribute('width','0');o.setAttribute('height','0');o.setAttribute(
'src',u);b.appendChild(o)}if(n)t.cpn++}else{t.cn++;t.cpn=0}}if(n&&t.l){for(x in t.l.wl)if(!Object.prototype[x]){u=t.w[x];x=t.l.wl[x];if(u&&x)for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!=
'function'||(''+x[i]).indexOf('s_c_il')<0)u[i]=x[i]}}for(i=0;i<t.l.wq.length;i++){c=t.l.wq[i];u=c.f;if(u)if(c.o)x=t.w[c.o];else x=t.w;if(x[u]&&typeof(x[u])=='function'&&(''+x[u]).indexOf('s_c_il')<0){
if(c.a)x[u].apply(x,c.a);else x[u].apply(x)}}}}}};}

//s_account set on page, defaults to dev and logs an error.
//remove global

/* 
   * add as the top line of the AppMeasurement file. 
   * Indicates what AppMeasurement File is being run.  
   * Format is: [ATM container name]|v[Date last update in YYYYMMDD format]
*/
var s_code_version = "prodscode|v20160127";


/*Define Chartbeat Variables */
var _sf_startpt=(new Date()).getTime()
var _sf_async_config=_sf_async_config||{};

if(window.s_account){
	if(window.s_account.indexOf(',nflglobal') > 0) window.s_account = window.s_account.replace(',nflglobal','');
	if(window.s_account.indexOf('nflglobal,') > 0) window.s_account = window.s_account.replace('nflglobal,','');
}

if(!window.s_account) {
	window.s_account="nfldev";
	try { console.error("ERROR: s_account is undefined, defaulting to dev"); }
	catch (e) {}
}

var s_analytics=s_gi(window.s_account);

if (typeof(s) == "undefined") s=s_analytics;
if (window.s) window.s=s_analytics;
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
/* Link Tracking Config */
s_analytics.trackDownloadLinks=true
s_analytics.trackExternalLinks=true
s_analytics.trackInlineStats=true
s_analytics.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s_analytics.linkInternalFilters="javascript:,nfl.com,dallascowboys.com,patriots.com,steelers.com,packers.com,denverbroncos.com,vikings.com,seahawks.com,philadelphiaeagles.com,panthers.com,buffalobills.com,chicagobears.com,redskins.com,raiders.com,nfl.com,chargers.com,newyorkjets.com,bengals.com,azcardinals.com,detroitlions.com,clevelandbrowns.com,atlantafalcons.com,houstontexans.com,stlouisrams.com,colts.com,kcchiefs.com,neworleanssaints.com,titansonline.com,buccaneers.com,jaguars.com,superbowl.com,therams.com,nflnetwork.com,nflshop.com,nflnetwork.calreply.net,sso.nfl.com,nfl.apply2jobs.com,nflcommunications.com,nflhealthplaybook.com,gamepass.support.nfl.com,gamepass.nfl.com,nflrush.com,sf49ers.com,giants.com,49ers.com,baltimoreravens.com,miamidolphins.com,nfluk.com,gamepassuk.support.nfl.com"
s_analytics.linkLeaveQueryString=true
s_analytics.linkTrackVars="prop30,prop28,prop3,prop4,prop17,eVar7,events,products"
s_analytics.linkTrackEvents="event11,event13,event6,event7,event10,event14,event15,event16,event17,event18"
s_analytics.charSet="UTF-8"

/* Plugin Config */

/*regional tracking*/
s_analytics.plTrack=true;
var runCamelotOnce = true;
var runSoundViewOnce = true;
s_analytics.usePlugins=true
function s_analytics_doPlugins(s_analytics) {
	/* Add calls to plugins here */
/* captures AppMeasurement Version, visitor API version, and DTM build date */

s_analytics.contextData['coreCodeVersion']=s_code_version + "|" + s_analytics.version;
try {
      s_analytics.contextData['coreCodeVersion']+= "|" + s_analytics.visitor.version;
} catch(e) {
      s_analytics.contextData['coreCodeVersion']+="|Visitor API Version Not Available";
}
s_analytics.contextData['coreCodeVersion']+="|ATM Container";

/* capture visitor ID */
s_analytics.prop50 = "D=mid";
		
	//External Campaigns
	s_analytics.campaign=s_analytics.getQueryParam('campaign,fb_ref');
	s_analytics.campaign=s_analytics.getValOnce(s_analytics.campaign,"s_campaign",0)
	if(s_analytics.campaign && s_analytics.getQueryParam('fb_ref'))s_analytics.events=s_analytics.apl(s_analytics.events,'event26',',',2)
	
	//Internal Campaigns
	s_analytics.eVar1=s_analytics.getQueryParam('icampaign');
	s_analytics.eVar1=s_analytics.getValOnce(s_analytics.eVar1,"s_eVar1",0)
	
	//time parting rows
	s_analytics.eVar9=s_analytics.getTimeParting('h','-5'); //Set hour
	s_analytics.prop9=s_analytics.getTimeParting('h','-5'); 
	//s_analytics.prop8=s_analytics.getTimeParting('d','-5'); // Set day
	//s_analytics.eVar8=s_analytics.getTimeParting('d','-5');		
	s_analytics.prop10=s_analytics.getTimeParting('w','-5'); // Set Weekend / Weekday
	s_analytics.eVar10=s_analytics.getTimeParting('w','-5'); 
	
	//Get new/repeat visitor
	s_analytics.prop24=s_analytics.getNewRepeat();
	
	//For Clickmap objectIDs
	s_analytics.setupDynamicObjectIDs();
		
	// Lowercase variables
	if(s_analytics.prop6)
		s_analytics.prop6=s_analytics.prop6.toLowerCase()
	
	// Copy search term to eVar
	if(s_analytics.prop6){
		s_analytics.eVar5=s_analytics.prop6
	
		/* Set de-duped onsite search event */
		var t_search=s_analytics.getValOnce(s_analytics.eVar5,'ev5',0)
		if(t_search)
				s_analytics.events=s_analytics.apl(s_analytics.events,'event2',',',2)
	}
	
	//PageView event
	s_analytics.events=s_analytics.apl(s_analytics.events,'event1',',',2)
	
	// Copy Page Name & Channel to eVars
	if(s_analytics.pageName)
		s_analytics.eVar2=s_analytics.pageName
	if(s_analytics.channel)
		s_analytics.eVar3=s_analytics.channel
		
	//Days since last visit
	s_analytics.prop21=s_analytics.getDaysSinceLastVisit();
	s_analytics.eVar6=s_analytics.getDaysSinceLastVisit();	
	
        //Override for TNF Page - added 10/20/15 ALK
	if(s_analytics.pageName){
		if(s_analytics.pageName=="nfl:tnf"){
			s_analytics.pageName="nfl:network:tnf";
			s_analytics.eVar2=s_analytics.pageName;
			s.channel="network";
			s_analytics.hier1="nfl|network|tnf|landing";
		}
	}		
	   
	/*Homepage Module tracking*/

	if(!s_analytics.eVar16){
		s_analytics.eVar16=s_analytics.getQueryParam('module');
	}
	/*Set eVar17 and 18 in Custom Plugin*/
	s_analytics.getNflHomepageClick()

	/*trackTNT 1.0*/
	s_analytics.tnt = s_analytics.trackTNT();

	/*dedupe referrer*/	
	s_analytics.referrer = s_analytics.dedupeReferrer();
	
	if(s_analytics.prop1)s_analytics.eVar26="D=c1";
	
	s_analytics.prop52=s_analytics.getPreviousValue(s_analytics.pageName,"s_pv");
	if (s_analytics.prop52){
		if(s_analytics.prop52=="nfl:home:landing")s_analytics.prop29=s_analytics.channel
		s_analytics.prop53=s_analytics.getPercentPageViewed();
	}

	//passing purchaseID to next page for Convertro
	if(s_analytics.purchaseID){
	var hasRevenue = s_analytics.products.split(';')
		if(hasRevenue[2] && hasRevenue[3]){
			var nflpurchase = s_analytics.products
			if(hasRevenue[4]){
				nflpurchase = hasRevenue[0]+';'+ hasRevenue[1] +';'+ hasRevenue[2] +';'+ hasRevenue[3];
			}
			nflpurchase = nflpurchase +';|'+ s_analytics.purchaseID;
			if(s_analytics.prop36)nflpurchase = nflpurchase + ';|' + s_analytics.prop36;
			s_analytics.c_w('nflpurchase',nflpurchase);
		}
	}

	var yr; 
	today = new Date(); 
	yr = today.getFullYear().toString();

/*serialize Free Fantasy and League Manager*/
	if(s_analytics.inList("event29", s_analytics.events) && s_analytics.prop36){
		s_analytics.events=s_analytics.apl(s_analytics.events,'event56:' + s_analytics.prop36 + ':' + yr,',',2)
	}
	
	if(s_analytics.inList("event30", s_analytics.events) && s_analytics.prop36){
		s_analytics.events=s_analytics.apl(s_analytics.events,'event57:' + s_analytics.prop36 + ':' + yr,',',2)
	}
	
	//Passing in ID for convertro only on logins or registrations
	if(s_analytics.prop36){
		//code to account for bad username
		if(s_analytics.prop36.indexOf('username,') >= 0){
			var spaceLocal = s_analytics.prop36.indexOf(' ')
			s_analytics.prop36 = s_analytics.prop36.substr(spaceLocal+1);
		}		
		var cnvtroDate=new Date();
		cnvtroDate.setDate(cnvtroDate.getDate()+1825);
		if(s_analytics.c_r('p36')){
			var p36val = s_analytics.c_r('p36').split('|');
			if(p36val && !(p36val[0]==s_analytics.prop36)){
				s_analytics.c_w('p36',s_analytics.prop36+'|fire',cnvtroDate)
			}
			if(p36val && p36val[0]==s_analytics.prop36){
				s_analytics.c_w('p36',s_analytics.prop36+'|hold',cnvtroDate)
			}
		}
		else{
			s_analytics.c_w('p36',s_analytics.prop36+'|fire',cnvtroDate)
		}	

		/*Playoff and Perfect Challenge*/
		if(s_analytics.inList("event22", s_analytics.events) && !(typeof $CVO == "undefined")){ 
			if(s_analytics.pageName.indexOf("playoffchallenge") > -1){
				fireCnvrtroPlayChall();
			}
			if(s_analytics.pageName.indexOf("perfectchallenge") > -1){
				$CVO.trackEvent('perfect_challenge', s_analytics.prop36,'1.00');
			}
		}
		
	}
	if(!s_analytics.prop36 && s_analytics.c_r('p36')){
		s_analytics.c_w('p36','',0)
	}

	if(s_analytics.prop22)s_analytics.eVar25="D=c22";
	if(s_analytics.prop36)s_analytics.eVar75="D=c36";
	if(s_analytics.purchaseID) s_analytics.eVar59=s_analytics.purchaseID;

//Get AAM Segments
	s_analytics.list1=s_analytics.getAamSegments('aam_sc','aamsc');

if(runCamelotOnce){
		runCamelotOnce = false;
		var cat = "";
		if(s_analytics.prodscodeUrlCheck("http://www.nfl.com/mobile")){
			cat = "nfl_m461";
		}
		if(s_analytics.prodscodeUrlCheck("http://www.nfl.com/fantasyfootball")){
			cat = "nfl_f957";
		}
		
		if(!(cat == "")){
			if (typeof axel=='undefined') {
				var axel=Math.random()*10000000000000000;
			}
			if(axel < 1) axel = axel*10000000000000000
			var camelotMobileFrame= document.createElement('iframe');		
			camelotMobileFrame.setAttribute('src', "http://4189174.fls.doubleclick.net/activityi;src=4189174;type=count881;cat="+cat+";ord=" + axel+ "?");
			camelotMobileFrame.setAttribute('height','1');
			camelotMobileFrame.setAttribute('width','1');
			camelotMobileFrame.setAttribute('frameBorder','0');
			camelotMobileFrame.setAttribute('style','display:none');
			document.body.appendChild(camelotMobileFrame);
		}
		
	}

if(runSoundViewOnce){
	runSoundViewOnce = false;
	if (s_analytics.prodscodeUrlCheck("http://www.nfl.com/fantasyfootball") || ("http://fantasy.nfl.com/registration/privateleaguecreateconfirm") || ("http://fantasy.nfl.com/registration/publicleaguejoinconfirm")){
			if (typeof axel=='undefined') {var axel=Math.random()*10000000000000000;}
			if(axel < 1) axel = axel*10000000000000000
			var soundViewFrame= document.createElement('iframe');
			soundViewFrame.setAttribute('src', "http://ad.doubleclick.net/activity;src=4226212;type=count921;cat=fanta660;ord=" + axel+ "?");
			soundViewFrame.setAttribute('height','1');
			soundViewFrame.setAttribute('width','1');
			soundViewFrame.setAttribute('frameBorder','0');
			soundViewFrame.setAttribute('style','display:none');
			document.body.appendChild(soundViewFrame);
		}
	
	}

	s_analytics.prop71 = "ATM - prodscode";
	s_analytics.prop72 = document.location.href;
	s_analytics.prop33 = "nfl";
	s_analytics.eVar33 = "nfl";
	s_analytics.eVar24="desktop browser";

/*if(typeof (window.analyticsDataNFLcom) === "object"){
      if (window.analyticsDataNFLcom.page.page_info.sponsor!=undefined) {
	    s_analytics.prop73=window.analyticsDataNFLcom.page.page_info.sponsor;
      }
}*/
	
}
s_analytics.doPlugins=s_analytics_doPlugins
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */

/*Replace*/
s_analytics.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * Plugin: getQueryParam 2.3
 */
s_analytics.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s_analytics.pageURL?s_analytics.pageURL:s_analytics.wd.locati"
+"on);if(u=='f')u=s_analytics.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s_analytics.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s_analytics.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s_analytics.pt(q,'&','p_gvf',k)}return v");
s_analytics.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s_analytics."
+"epa(v)}return ''");

/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s_analytics.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

/*
 * Plugin: getTimeParting 3.0 - Set timeparting values based on time zone - valid through 2014 
 */
s_analytics.getTimeParting=new Function("t","z",""
+"var s=this,d,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;d=new Date();A"
+"=d.getFullYear();if(A=='2009'){B='08';C='01'}if(A=='2010'){B='14';C"
+"='07'}if(A=='2011'){B='13';C='06'}if(A=='2012'){B='11';C='04'}if(A="
+"='2013'){B='10';C='03'}if(A=='2014'){B='09';C='02'}if(!B||!C){B='08"
+"';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;D=new Date('1/1/2000');if("
+"D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=p"
+"arseFloat(z);E=new Date(B);F=new Date(C);G=F;H=new Date();if(H>E&&H"
+"<G){z=z+1}else{z=z};I=H.getTime()+(H.getTimezoneOffset()*60000);J=n"
+"ew Date(I+(3600000*z));K=['Sunday','Monday','Tuesday','Wednesday','"
+"Thursday','Friday','Saturday'];L=J.getHours();M=J.getMinutes();N=J."
+"getDay();O=K[N];P='AM';Q='Weekday';R='00';if(M>30){R='30'}if(L>=12)"
+"{P='PM';L=L-12};if(L==0){L=12};if(N==6||N==0){Q='Weekend'}T=L+':'+R"
+"+P;if(t=='h'){return T}if(t=='d'){return O}if(t=='w'){return Q}}");

/* DynamicObjectIDs config */
function s_analytics_getObjectID(o) {
	var ID=o.href;
	return ID;
}
s_analytics.getObjectID=s_analytics_getObjectID

/*
 * DynamicObjectIDs v1.1: Setup Dynamic Object IDs based on URL
 */
s_analytics.setupDynamicObjectIDs=new Function(""
+"var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv"
+">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else"
+" if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa"
+"lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho"
+"re=1}");
s_analytics.setOIDs=new Function("e",""
+"var s=s_c_il["+s_analytics._in+"],b=s.eh(s.wd,'onload'),o='onclick',l,u,c,x,i"
+",a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links)"
+"{for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b"
+"=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_"
+"objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','').substri"
+"ng(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='s_objectID=\"'+u+'_'+a[u"
+"]+'\";return this.s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.set"
+"Attribute(o,x);l[o]=new Function('e',x)}}}s.wd.s_semaphore=0;return"
+" true");

/*
 * Plugin: getNewRepeat 1.0 - Return whether user is new or repeat
 */
s_analytics.getNewRepeat=new Function(""
+"var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime"
+"(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w("
+"'s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s"
+".c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cv"
+"al+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else retur"
+"n 'Repeat';");


/*
 * Plugin: Days since last Visit 1.0.H - capture time from last visit
 */
s_analytics.getDaysSinceLastVisit=new Function(""
+"var s=this,e=new Date(),cval,ct=e.getTime(),c='s_lastvisit',day=24*"
+"60*60*1000;e.setTime(ct+3*365*day);cval=s.c_r(c);if(!cval){s.c_w(c,"
+"ct,e);return 'First page view or cookies not supported';}else{var d"
+"=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);return 'More t"
+"han 30 days';}if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);return 'More "
+"than 7 days';}if(d<7*day+1 && d>day){s.c_w(c,ct,e);return 'Less tha"
+"n 7 days';}if(d<day+1){s.c_w(c,ct,e);return 'Less than 1 day';}}els"
+"e return '';}"
);

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s_analytics.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin Utility: apl v1.1
 */
s_analytics.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

/*
* TNT Integration Plugin v1.0
*/
s_analytics.trackTNT =new Function("v","p","b",""
+"var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s."
+"getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v"
+"]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;");

/*
 * Plugin: dedupeReferrer v1.0 - prevents the duplication of referrers
 */
s_analytics.dedupeReferrer=new Function("c","b",""
+"var s=this,a,g,i,j,k,l,m,n,o;g=s.referrer?s.referrer:document.refer"
+"rer;g=g.toLowerCase();if(g){i=g.indexOf('?')>-1?g.indexOf('?'):g.le"
+"ngth;j=g.substring(0,i);k=s.linkInternalFilters.toLowerCase();k=s.s"
+"plit(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k[m])>-1?g:'';i"
+"f(n)o=n}if(!o){c=c?c:'_dr';b=b?b-1:'1';a=g;a=s.getValOnce(a,c,0);if"
+"(a){return a}else{return k[b]}}}");

/*
 * Function - read combined cookies v 0.3
 */
if(!s_analytics.__ccucr){s_analytics.c_rr=s_analytics.c_r;s_analytics.__ccucr = true;
s_analytics.c_r=new Function("k",""
+"var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret"
+"urn v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i="
+"c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'"
+",i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:"
+"m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get"
+"Time()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}ret"
+"urn v;");}

/*
 * Function - write combined cookies v 0.3
 */
if(!s_analytics.__ccucw){s_analytics.c_wr=s_analytics.c_w;s_analytics.__ccucw = true;
s_analytics.c_w=new Function("k","v","e",""
+"this.new2 = true;"
+"var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,"
+"c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s"
+".ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr"
+"ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv"
+".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i"
+"ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())"
+"{pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'"
+"='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t"
+".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i"
+"ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set"
+"Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");}

/*Custom HomePage Module Tracking Plugin*/
var runOnce=true;
s_analytics.getNflHomepageClick=new Function("",""
+"if(runOnce){var s=this,a='',b='';a=s.c_r('SC_NFLLINKS');runOnce=fal"
+"se;if(a){b=a.split('|');if(b.length==2){s.eVar18=b[0];s.eVar17=b[1]"
+";}if(b.length==3){s.eVar18=b[0];s.eVar17=b[1];s.eVar16=b[2];}s.c_w("
+"'SC_NFLLINKS','');}}");

/*
 * Plugin getPercentPageViewed v1.4 - determine percent of page viewed
 */
s_analytics.handlePPVevents=new Function (""
+"var s=s_c_il["+s_analytics._in+"];"
+"if(!s.getPPVid)return;var dh=Math.max(Math.max(s.d.body.scrollHeigh"
+"t,s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,"
+"s.d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s."
+"d.documentElement.clientHeight));var vph=s.wd.innerHeight||(s.d.doc"
+"umentElement.clientHeight||s.d.body.clientHeight),st=s.wd.pageYOffs"
+"et||(s.wd.document.documentElement.scrollTop||s.wd.document.body.sc"
+"rollTop),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c=s.c_r('"
+"s_ppv'),a=(c.indexOf(',')>-1)?c.split(',',4):[],id=(a.length>0)?(a["
+"0]):escape(s.getPPVid),cv=(a.length>1)?parseInt(a[1]):(0),p0=(a.len"
+"gth>2)?parseInt(a[2]):(pv),cy=(a.length>3)?parseInt(a[3]):(0),cn=(p"
+"v>0)?(id+','+((pv>cv)?pv:cv)+','+p0+','+((vh>cy)?vh:cy)):('');s.c_w"
+"('s_ppv',cn);");

s_analytics.getPercentPageViewed=new Function("pgid",""
+"var s=this,pgid=(arguments.length>0)?(arguments[0]):('-'),ist=(!s.ge"
+"tPPVid)?(true):(false);if(typeof(s.linkType)!='undefined'&&s.linkTy"
+"pe!='e')return'';var v=s.c_r('s_ppv'),a=(v.indexOf(',')>-1)?v.split"
+"(',',4):[];if(a.length<4){for(var i=3;i>0;i--)a[i]=(i<a.length)?(a["
+"i-1]):('');a[0]='';}a[0]=unescape(a[0]);s.getPPVpid=pgid;s.c_w('s_p"
+"pv',escape(pgid));if(ist){s.getPPVid=(pgid)?(pgid):(s.pageName?s.pa"
+"geName:document.location.href);s.c_w('s_ppv',escape(s.getPPVid));if"
+"(s.wd.addEventListener){s.wd.addEventListener('load',s.handlePPVeve"
+"nts,false);s.wd.addEventListener('scroll',s.handlePPVevents,false);"
+"s.wd.addEventListener('resize',s.handlePPVevents,false);}else if(s."
+"wd.attachEvent){s.wd.attachEvent('onload',s.handlePPVevents);s.wd.a"
+"ttachEvent('onscroll',s.handlePPVevents);s.wd.attachEvent('onresize"
+"',s.handlePPVevents);}}return(pgid!='-')?(a):(a[1]);");

/*
 * Plugin: getPreviousValue v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s_analytics.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * SocialPlugin v 1.0
 */
s_analytics.socialPlugins=new Function("a","b","c","d","e","f","g",""
+"var s=this;s.fbICount=s.fbICount+1;if(s.fbICount>=5){clearInterval("
+"socialInterval);}if(typeof(FB)!='undefined'){clearInterval(socialIn"
+"terval);bTrue=b.toLowerCase()=='none'?false:true;cTrue=c.toLowerCas"
+"e()=='none'?false:true;dTrue=d.toLowerCase()=='none'?false:true;eTr"
+"ue=e.toLowerCase()=='none'?false:true;fTrue=f.toLowerCase()=='none'"
+"?false:true;gTrue=g.toLowerCase()=='none'?false:true;if(bTrue==true"
+"){b=s.split(b,'>');FB.Event.subscribe('edge.create',function(href,w"
+"idget){s.sendFBData(b[0],b[1]);});}if(cTrue==true){c=s.split(c,'>')"
+";FB.Event.subscribe('edge.remove',function(href,widget){s.sendFBDat"
+"a(c[0],c[1]);});}if(dTrue==true){d=s.split(d,'>');FB.Event.subscrib"
+"e('comment.create',function(href,widget){s.sendFBData(d[0],d[1]);})"
+";}if(eTrue==true){e=s.split(e,'>');FB.Event.subscribe('comment.remo"
+"ve',function(href,widget){s.sendFBData(e[0],e[1]);});}if(fTrue==tru"
+"e){f=s.split(f,'>');FB.Event.subscribe('auth.login',function(href,w"
+"idget){s.sendFBData(f[0],f[1]);});}if(gTrue==true){g=s.split(g,'>')"
+";FB.Event.subscribe('auth.logout',function(href,widget){s.sendFBDat"
+"a(g[0],g[1]);});}s.sendFBData=function(m,n){s.ltVT=s.linkTrackVars;"
+"s.ltET=s.linkTrackEvents;s.etE=s.events;s.linkTrackVars=a+',events'"
+";s.linkTrackEvents=n;s.events=n;if(a.toLowerCase()!='none'){s[a]=m;"
+"}s.tl(this,'o',m);s.linkTrackVars=s.ltVT;s.linkTrackEvents=s.ltET;s"
+".events=s.etE;}};");
s_analytics.fbICount = 0;
var socialInterval = setInterval( function() { s_analytics.socialPlugins('eVar48','fb:like>event38','fb:unlike>event39','none','none','none','none'); }, 1000);


//Custom function called from Facebook window.fbAsyncInit function
s_analytics.setupFacebookMeasurement = function(){
}

/*
 * Utility: inList v1.1 - find out if a value is in a list
 */

s_analytics.inList=new Function("v","l","d","tlc","mt",""
+"var s=this,ar=Array(),i=0,d=(d)?d:',',v=(tlc)?v.toLowerCase():v,l=("
+"tlc)?l.toLowerCase():l,mt=(mt)?mt:0;if(typeof(l)=='string'){if(s.sp"
+"lit)ar=s.split(l,d); else if(l.split)ar=l.split(d); else return-1;}"
+" else ar=l;while(i<ar.length){if(!mt){if(v==ar[i])return true;} els"
+"e if(mt){if(v.indexOf(ar[i])!=-1)return true;}i++;}return false;");

/* 
*Utility: Check if current URL is exact match(regardless of Query String)
*/
s_analytics.prodscodeUrlCheck=new Function("a",""
+"var currentURL=document.URL;if(currentURL.indexOf(a)>-1){if(current"
+"URL.indexOf('?')>-1){currentURL=currentURL.substr(0,currentURL.inde"
+"xOf('?'));}if(currentURL===a)return true;else return false;}");

/*
*Gets the AAM segments out of a cookie. Requires replace (repl)
*
*/
s_analytics.getAamSegments=new Function("a","b",""
+"var s=this;var c=s_analytics.c_r(a);if(c){c=s.repl(c,b+'=','');}ret"
+"urn c");


/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s_analytics.visitorNamespace="cbs"
s_analytics.trackingServer="metrics.nfl.com"
s_analytics.trackingServerSecure="smetrics.nfl.com"
s_analytics.dc=112

if(typeof Visitor != 'undefined'){
s_analytics.visitor = Visitor.getInstance("F75C3025512D2C1D0A490D44@AdobeOrg", {});
}

/* setting visitor IDs */
s_analytics.contextData['visitorAPI'] = (typeof(Visitor) != "undefined" ? "VisitorAPI Present" : "VisitorAPI Missing");

/*Config Video Variables*/

s_analytics.loadModule("Media")
s_analytics.Media.autoTrack=false
s_analytics.Media.trackWhilePlaying=true; 
s_analytics.Media.trackVars = "events,eVar7,eVar32,products,prop22,prop23,prop36,eVar25"; 
s_analytics.Media.trackEvents="event6,event7,event16,event17,event18,event21";

var tracked25=false;
var tracked50=false;
var tracked75=false;
var fireRequest=false;

s_analytics.Media.monitor = function (s,media){ 
	if(media.mediaEvent == "PLAY"){ 
		lastOffsetPosition = media.offset; 
	} 
	if(media.mediaEvent == "MONITOR"){ 
		secondsHolder += media.offset-lastOffsetPosition; 
		lastOffsetPosition = media.offset; 
		if ((!tracked25) && (media.percent >= 25)){ 
			s_analytics.events = "event16"; 
			tracked25 = true; 
			fireRequest = true; 
		} 
		if ((!tracked50) && (media.percent >= 50)){ 
			s_analytics.events = "event17"; 
			tracked50 = true; 
			fireRequest = true; 
		} 
		if ((!tracked75) && (media.percent >= 75)){
			s_analytics.events = "event18"; 
			tracked75 = true; 
			fireRequest = true; 
		} 
		if(fireRequest){ 
			fireRequest = false; 
			s_analytics.products=";;;;event21=" + Math.round(secondsHolder);
			s_analytics.events = s_analytics.apl(s_analytics.events,"event21",","); 
			sendRequest(); 
		} 
	} 
	if(media.mediaEvent=="OPEN") { 
		lastOffsetPosition= 0;
		s_analytics.eVar32= media.playerName;
		s_analytics.eVar7 = media.name;
		s_analytics.events="event6"; 
		s_analytics.prop22= "www.nfl.com";
		s_analytics.prop23= "embedded player:" + media.playerName;
		tracked25=false;
		tracked50=false;
		tracked75=false;
		sendRequest(); 
	} 
	if(media.mediaEvent=="CLOSE" && (media.percent < 98)) { 
		s_analytics.products=";;;;event21=" + Math.round(secondsHolder); 
		s_analytics.events = s_analytics.apl(s_analytics.events,"event21",",");
		sendRequest(); 
	}
	if((media.mediaEvent=="CLOSE") && (media.percent >= 98)) { 
		s_analytics.products=";;;;event21=" + Math.round(secondsHolder); 
		s_analytics.events = s_analytics.apl(s_analytics.events,"event21",","); 
		s_analytics.events = s_analytics.apl(s_analytics.events,"event7",","); 
		sendRequest(); 
	}
	if(media.mediaEvent=="STOP"){
		secondsHolder += media.offset-lastOffsetPosition; 
	} 
	function sendRequest(){ 
		s_analytics.Media.track(media.name);
		s_analytics.events=""; 
		s_analytics.products=""; 
		secondsHolder = 0; 
	}
}

/****************************** MODULES *****************************/
/* Module: Media */
s_analytics.m_Media_c="var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function"
+"(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=n"
+"ew Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Mat"
+"h.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.co=0;i.cot=0;i.lm=0;i.lom=0;m.l[n]=i}};m._delete=funct"
+"ion(n){var m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=n"
+"ew Object;i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.complete=functi"
+"on(n,o){this.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=vo.linkTrackEvents,pe='m_i',pev3,c="
+"vo.contextData,x;c['a.contentType']='video';c[ns+'channel']=m.channel;c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0){c[ns+'length']=i.l;}c[ns+'timePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view'"
+"]=true;pe='m_s';i.vt=1}if(i.sx){c[ns+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView']=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i"
+".cot=1}if(i.lm>0)c[ns+'milestone']=i.lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3='video';vo.pe=pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo."
+"events2='';if(v)v+=',events';for(x in d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='string'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a"
+".contentType\"){if(v)v+=','+a;vo[a]=c[x]}else if(y){if(y=='view'||y=='segmentView'||y=='complete'||y=='timePlayed'){if(e)e+=','+a;if(c[x]){if(y=='timePlayed'){if(c[x])vo.events2+=(vo.events2?',':''"
+")+a+'='+c[x];}else if(c[x])vo.events2+=(vo.events2?',':'')+a}}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}}else if(y=='milestones'||y=="
+"'offsetMilestones'){x=x.substring(0,x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.events2?',':'')+d[x+'s'][c[x]]}}}vo.contextData=0}vo.linkTrackVars=v;vo.linkTrack"
+"Events=e};m.bpe=function(vo,i,x,o){var m=this,pe='m_o',pev3,d='--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.flo"
+"or(i.t)+d+i.s+d+(i.to>=0?'L'+Math.floor(i.to):'')+i.e+(x!=0&&x!=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/10"
+"00),c,l,v=m.trackVars,e=m.trackEvents,ti=m.trackSeconds,tp=m.trackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,t"
+"c,vo=new Object;if(!m.channel)m.channel=m.s.wd.location.hostname;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){if(o<0){if(i.lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;"
+"i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name=n;w.length=i.l;w.openTime=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if("
+"i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP':(x==3?'MONITOR':(x==4?'TRACK':(x==5?'COMPLETE':('CLOSE'))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd"
+";if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i.lo=o;if((x<=3||x==5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','"
+"):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i.l)*100<c&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if("
+"z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z.length;w.mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m"
+".s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.le"
+"ngth]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c||z[j]=='E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){"
+"i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if((x>=2||i.x>=100)&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&"
+"&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||(x<=3&&i.x>=100)){if(i.lx!=2)i.e+='E'+Math.floor(o);x=0;v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x"
+"==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m.completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}ek=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILEST"
+"ONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePlayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!="
+"4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new Object;vo.contextData=new Object;vo.linkTrackVars=v;vo.linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEven"
+"ts)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i);else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx=sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i."
+"ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthRequired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b)"
+";r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+"
+"m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol"
+"=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function"
+"('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)"
+"}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.UR"
+"L;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.is"
+"ie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'"
+"if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMo"
+"vieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5"
+")m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTime"
+"out(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.Ge"
+"tTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(m"
+"n,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o["
+"f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m."
+"as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if"
+"(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false);if(m.onLoad)m.onLoad(s,m)";
s_analytics.m_i("Media");

s.loadModule("Integrate")
s.Integrate.onLoad=function(s,m){
"function"!==typeof window.DIL&&(window.DIL=function(a,c){var d=[],b,f;a!==Object(a)&&(a={});var g,k,m,u,w,n,q,D,x,B,K,E;g=a.partner;k=a.containerNSID;m=!!a.disableDestinationPublishingIframe;u=a.iframeAkamaiHTTPS;w=a.mappings;n=a.uuidCookie;q=!0===a.enableErrorReporting;D=a.visitorService;x=a.declaredId;B=!0===a.removeFinishedScriptsAndCallbacks;K=!0===a.delayAllUntilWindowLoad;E=!0===a.disableIDSyncs;var L,M,N,H,F,O,P,Q;L=!0===a.disableScriptAttachment;M=!0===a.disableCORSFiring;N=!0===a.disableDefaultRequest;
H=a.afterResultForDefaultRequest;F=a.dpIframeSrc;O=!0===a.testCORS;P=!0===a.useJSONPOnly;Q=a.visitorConstructor;q&&DIL.errorModule.activate();var T=!0===window._dil_unit_tests;(b=c)&&d.push(b+"");if(!g||"string"!==typeof g)return b="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:b,filename:"dil.js"}),Error(b);b="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";if(k||"number"===typeof k)k=parseInt(k,10),
!isNaN(k)&&0<=k&&(b="");b&&(k=0,d.push(b),b="");f=DIL.getDil(g,k);if(f instanceof DIL&&f.api.getPartner()===g&&f.api.getContainerNSID()===k)return f;if(this instanceof DIL)DIL.registerDil(this,g,k);else return new DIL(a,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+g+" and containerNSID = "+k);var A={IS_HTTPS:"https:"===document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC"},I=
{stuffed:{}},l={},p={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,platformParams:{d_nsid:k+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+
"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,mid:null,noVisitorAPI:!1,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(e){try{if(!this.admsProcessingStarted){this.admsProcessingStarted=!0;var s=this,a,h,b,d;if("function"===typeof e&&"function"===typeof e.getInstance){if(D===Object(D)&&(a=D.namespace)&&"string"===
typeof a)h=e.getInstance(a,{idSyncContainerID:k});else{this.releaseType="no namespace";this.releaseRequests();return}if(h===Object(h)&&h instanceof e&&"function"===typeof h.isAllowed&&"function"===typeof h.getMarketingCloudVisitorID&&"function"===typeof h.getCustomerIDs&&"function"===typeof h.isOptedOut){this.VisitorAPI=e;if(!h.isAllowed()){this.releaseType="VisitorAPI not allowed";this.releaseRequests();return}this.instance=h;b=function(e){"VisitorAPI"!==s.releaseType&&(s.mid=e,s.releaseType="VisitorAPI",
s.releaseRequests())};d=h.getMarketingCloudVisitorID(b);if("string"===typeof d&&d.length){b(d);return}setTimeout(function(){"VisitorAPI"!==s.releaseType&&(s.releaseType="timeout",s.releaseRequests())},this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE);return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(c){this.releaseRequests()}},releaseRequests:function(){this.calledBack=!0;p.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():
null},getMIDQueryString:function(){var e=v.isPopulatedString,s=this.getMarketingCloudVisitorID();e(this.mid)&&this.mid===s||(this.mid=s);return e(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(e){if(e===Object(e)){var s="",a=[],h=[],b,d;for(b in e)e.hasOwnProperty(b)&&(h[0]=b,d=e[b],d===Object(d)&&(h[1]=d.id||"",h[2]=d.authState||0,a.push(h),h=[]));if(h=a.length)for(e=0;e<h;e++)s+="&d_cid_ic="+
t.encodeAndBuildRequest(a[e],"%01");return s}return""},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)},isOptedOutCallback:function(e){this.isOptedOut=e;this.isOptedOutCallbackCalled=!0;p.registerRequest()}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(e,s){var a=v.isPopulatedString,h=encodeURIComponent;if(e===Object(e)&&
a(s)){var b=e.dpid,d=e.dpuuid,c=null;if(a(b)&&a(d)){c=h(b)+"$"+h(d);if(!0===this.declaredIdCombos[c])return"setDeclaredId: combo exists for type '"+s+"'";this.declaredIdCombos[c]=!0;this.declaredId[s]={dpid:b,dpuuid:d};return"setDeclaredId: succeeded for type '"+s+"'"}}return"setDeclaredId: failed for type '"+s+"'"},getDeclaredIdQueryString:function(){var e=this.declaredId.request,s=this.declaredId.init,a=encodeURIComponent,h="";null!==e?h="&d_dpid="+a(e.dpid)+"&d_dpuuid="+a(e.dpuuid):null!==s&&(h=
"&d_dpid="+a(s.dpid)+"&d_dpuuid="+a(s.dpuuid));return h}},registerRequest:function(e){var a=this.firingQueue;e===Object(e)&&a.push(e);this.firing||!a.length||K&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(this.adms.isOptedOutCallbackCalled=!1,e=a.shift(),e.src=e.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),v.isPopulatedString(e.corsPostData)&&
(e.corsPostData=e.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+"d_nsid=")),C.fireRequest(e),this.firstRequestHasFired||"script"!==e.tag&&"cors"!==e.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(Q||window.Visitor)},requestRemoval:function(e){if(!B)return"removeFinishedScriptsAndCallbacks is not boolean true";var a=this.toRemove,r,h;e===Object(e)&&(r=e.script,h=e.callbackName,(r===Object(r)&&"SCRIPT"===r.nodeName||"no script created"===r)&&"string"===
typeof h&&h.length&&a.push(e));if(this.readyToRemove&&a.length){h=a.shift();r=h.script;h=h.callbackName;"no script created"!==r?(e=r.src,r.parentNode.removeChild(r)):e=r;window[h]=null;try{delete window[h]}catch(b){}this.removed.push({scriptSrc:e,callbackName:h});DIL.variables.scriptsRemoved.push(e);DIL.variables.callbacksRemoved.push(h);return this.requestRemoval()}return"requestRemoval() processed"}};f=function(){var e="http://fast.",a="?d_nsid="+k+"#"+encodeURIComponent(document.location.href);
if("string"===typeof F&&F.length)return F+a;A.IS_HTTPS&&(e=!0===u?"https://fast.":"https://");return e+g+".demdex.net/dest5.html"+a};var y={THROTTLE_START:3E4,throttleTimerSet:!1,id:"destination_publishing_iframe_"+g+"_"+k,url:f(),iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messageSendingInterval:A.POST_MESSAGE_ENABLED?15:100,ibsDeleted:[],jsonProcessed:[],newIframeCreated:null,iframeIdChanged:!1,originalIframeHasLoadedAlready:null,attachIframe:function(){function e(){h=
document.createElement("iframe");h.id=b.id;h.style.cssText="display: none; width: 0; height: 0;";h.src=b.url;b.newIframeCreated=!0;a();document.body.appendChild(h)}function a(){t.addListener(h,"load",function(){h.className="aamIframeLoaded";b.iframeHasLoaded=!0;b.requestToProcess()})}var b=this,h=document.getElementById(this.id);h?"IFRAME"!==h.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==h.className?(this.originalIframeHasLoadedAlready=!1,a()):
(this.iframeHasLoaded=this.originalIframeHasLoadedAlready=!0,this.requestToProcess())):e();this.iframe=h},requestToProcess:function(e,a){var b=this;e&&!v.isEmptyObject(e)&&this.process(e,a);this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){b.messageSendingInterval=A.POST_MESSAGE_ENABLED?15:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},process:function(e,a){var b=encodeURIComponent,h,
d,c,g,f,k;a===Object(a)&&(k=t.encodeAndBuildRequest(["",a.dpid||"",a.dpuuid||""],","));if((h=e.dests)&&h instanceof Array&&(d=h.length))for(c=0;c<d;c++)g=h[c],g=[b("dests"),b(g.id||""),b(g.y||""),b(g.c||"")],this.addMessage(g.join("|"));if((h=e.ibs)&&h instanceof Array&&(d=h.length))for(c=0;c<d;c++)g=h[c],g=[b("ibs"),b(g.id||""),b(g.tag||""),t.encodeAndBuildRequest(g.url||[],","),b(g.ttl||""),"",k],this.addMessage(g.join("|"));if((h=e.dpcalls)&&h instanceof Array&&(d=h.length))for(c=0;c<d;c++)g=h[c],
f=g.callback||{},f=[f.obj||"",f.fn||"",f.key||"",f.tag||"",f.url||""],g=[b("dpm"),b(g.id||""),b(g.tag||""),t.encodeAndBuildRequest(g.url||[],","),b(g.ttl||""),t.encodeAndBuildRequest(f,","),k],this.addMessage(g.join("|"));this.jsonProcessed.push(e)},addMessage:function(e){var a=encodeURIComponent,a=q?a("---destpub-debug---"):a("---destpub---");this.messages.push(a+e)},sendMessages:function(){var e=this,a;this.messages.length?(a=this.messages.shift(),DIL.xd.postMessage(a,this.url,this.iframe.contentWindow),
this.messagesPosted.push(a),setTimeout(function(){e.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1}},J={traits:function(e){v.isValidPdata(e)&&(l.sids instanceof Array||(l.sids=[]),t.extendArray(l.sids,e));return this},pixels:function(e){v.isValidPdata(e)&&(l.pdata instanceof Array||(l.pdata=[]),t.extendArray(l.pdata,e));return this},logs:function(e){v.isValidLogdata(e)&&(l.logdata!==Object(l.logdata)&&(l.logdata={}),t.extendObject(l.logdata,e));return this},customQueryParams:function(e){v.isEmptyObject(e)||
t.extendObject(l,e,p.reservedKeys);return this},signals:function(e,a){var b,h=e;if(!v.isEmptyObject(h)){if(a&&"string"===typeof a)for(b in h={},e)e.hasOwnProperty(b)&&(h[a+b]=e[b]);t.extendObject(l,h,p.reservedKeys)}return this},declaredId:function(e){p.declaredId.setDeclaredId(e,"request");return this},result:function(e){"function"===typeof e&&(l.callback=e);return this},afterResult:function(e){"function"===typeof e&&(l.postCallbackFn=e);return this},useImageRequest:function(){l.useImageRequest=
!0;return this},clearData:function(){l={};return this},submit:function(){C.submitRequest(l);l={};return this},getPartner:function(){return g},getContainerNSID:function(){return k},getEventLog:function(){return d},getState:function(){var e={},a={};t.extendObject(e,p,{callbackPrefix:!0,useJSONP:!0,registerRequest:!0});t.extendObject(a,y,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{pendingRequest:l,otherRequestInfo:e,destinationPublishingInfo:a}},idSync:function(e){if(E)return"Error: id syncs have been disabled";
if(e!==Object(e)||"string"!==typeof e.dpid||!e.dpid.length)return"Error: config or config.dpid is empty";if("string"!==typeof e.url||!e.url.length)return"Error: config.url is empty";var a=e.url,b=e.minutesToLive,h=encodeURIComponent,d,a=a.replace(/^https:/,"").replace(/^http:/,"");if("undefined"===typeof b)b=20160;else if(b=parseInt(b,10),isNaN(b)||0>=b)return"Error: config.minutesToLive needs to be a positive number";d=t.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],",");e=["ibs",h(e.dpid),"img",
h(a),b,"",d];y.addMessage(e.join("|"));p.firstRequestHasFired&&y.requestToProcess();return"Successfully queued"},aamIdSync:function(e){if(E)return"Error: id syncs have been disabled";if(e!==Object(e)||"string"!==typeof e.dpuuid||!e.dpuuid.length)return"Error: config or config.dpuuid is empty";e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid;return this.idSync(e)},passData:function(e){if(v.isEmptyObject(e))return"Error: json is empty or not an object";y.ibsDeleted.push(e.ibs);delete e.ibs;
C.defaultCallback(e);return e},getPlatformParams:function(){return p.platformParams},getEventCallConfigParams:function(){var e=p,a=e.modStatsParams,b=e.platformParams,h;if(!a){a={};for(h in b)b.hasOwnProperty(h)&&!e.nonModStatsParams[h]&&(a[h.replace(/^d_/,"")]=b[h]);e.modStatsParams=a}return a}},C={corsMetadata:function(){var e="none",a=!0;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?e="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?
e="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(a=!1),0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&(a=!1));return{corsType:e,corsCookiesEnabled:a}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(e){p.registerRequest(C.createQueuedRequest(e));return!0},createQueuedRequest:function(e){var a=p,b,h=e.callback,d="img",c;if(!v.isEmptyObject(w)){var g,
f,n;for(g in w)w.hasOwnProperty(g)&&(f=w[g],null!=f&&""!==f&&g in e&&!(f in e||f in p.reservedKeys)&&(n=e[g],null!=n&&""!==n&&(e[f]=n)))}v.isValidPdata(e.sids)||(e.sids=[]);v.isValidPdata(e.pdata)||(e.pdata=[]);v.isValidLogdata(e.logdata)||(e.logdata={});e.logdataArray=t.convertObjectToKeyValuePairs(e.logdata,"=",!0);e.logdataArray.push("_ts="+(new Date).getTime());"function"!==typeof h&&(h=this.defaultCallback);a.useJSONP=!0!==e.useImageRequest;a.useJSONP&&(d="script",b=a.callbackPrefix+"_"+k+"_"+
(new Date).getTime());a=this.makeRequestSrcData(e,b);!P&&(c=this.getCORSInstance())&&a.truncated&&(this.corsMetadata.corsCookiesEnabled||a.isDeclaredIdCall)&&(d="cors");return{tag:d,src:a.src,corsSrc:a.corsSrc,internalCallbackName:b,callbackFn:h,postCallbackFn:e.postCallbackFn,useImageRequest:!!e.useImageRequest,requestData:e,corsInstance:c,corsPostData:a.corsPostData,hasCORSError:!1}},defaultCallback:function(e,a){var b,h,d,c,g,f,k,x,q;if((b=e.stuff)&&b instanceof Array&&(h=b.length))for(d=0;d<h;d++)if((c=
b[d])&&c===Object(c)){g=c.cn;f=c.cv;k=c.ttl;if("undefined"===typeof k||""===k)k=Math.floor(t.getMaxCookieExpiresInMinutes()/60/24);x=c.dmn||"."+document.domain.replace(/^www\./,"");q=c.type;g&&(f||"number"===typeof f)&&("var"!==q&&(k=parseInt(k,10))&&!isNaN(k)&&t.setCookie(g,f,1440*k,"/",x,!1),I.stuffed[g]=f)}b=e.uuid;v.isPopulatedString(b)&&!v.isEmptyObject(n)&&(h=n.path,"string"===typeof h&&h.length||(h="/"),d=parseInt(n.days,10),isNaN(d)&&(d=100),t.setCookie(n.name||"aam_did",b,1440*d,h,n.domain||
"."+document.domain.replace(/^www\./,""),!0===n.secure));m||p.abortRequests||y.requestToProcess(e,a)},makeRequestSrcData:function(e,a){e.sids=v.removeEmptyArrayValues(e.sids||[]);e.pdata=v.removeEmptyArrayValues(e.pdata||[]);var b=p,d=b.platformParams,c=t.encodeAndBuildRequest(e.sids,","),f=t.encodeAndBuildRequest(e.pdata,","),n=(e.logdataArray||[]).join("&");delete e.logdataArray;var x=A.IS_HTTPS?"https://":"http://",q=b.declaredId.getDeclaredIdQueryString(),w=b.adms.instance?b.adms.getCustomerIDsQueryString(b.adms.getCustomerIDs()):
"",z;z=[];var l,m,u,B;for(l in e)if(!(l in b.reservedKeys)&&e.hasOwnProperty(l))if(m=e[l],l=encodeURIComponent(l),m instanceof Array)for(u=0,B=m.length;u<B;u++)z.push(l+"="+encodeURIComponent(m[u]));else z.push(l+"="+encodeURIComponent(m));z=z.length?"&"+z.join("&"):"";l=!1;c="d_nsid="+d.d_nsid+q+w+(c.length?"&d_sid="+c:"")+(f.length?"&d_px="+f:"")+(n.length?"&d_ld="+encodeURIComponent(n):"");d="&d_rtbd="+d.d_rtbd+"&d_jsonv="+d.d_jsonv+"&d_dst="+d.d_dst;x=x+g+".demdex.net/event";f=b=x+"?"+c+(b.useJSONP?
d+"&d_cb="+(a||""):"")+z;2048<b.length&&(b=b.substring(0,b.lastIndexOf("&")),l=!0);return{corsSrc:x+"?"+(O?"testcors=1&d_nsid="+k+"&":"")+"_ts="+(new Date).getTime(),src:b,originalSrc:f,truncated:l,corsPostData:c+d+z,isDeclaredIdCall:""!==q}},fireRequest:function(e){if("img"===e.tag)this.fireImage(e);else{var a=p.declaredId,a=a.declaredId.request||a.declaredId.init||{},a={dpid:a.dpid||"",dpuuid:a.dpuuid||""};"script"===e.tag?this.fireScript(e,a):"cors"===e.tag&&this.fireCORS(e,a)}},fireImage:function(e){var a=
p,c,h;a.abortRequests||(a.firing=!0,c=new Image(0,0),a.sent.push(e),c.onload=function(){a.firing=!1;a.fired.push(e);a.num_of_img_responses++;a.registerRequest()},h=function(c){b="imgAbortOrErrorHandler received the event of type "+c.type;d.push(b);a.abortRequests=!0;a.firing=!1;a.errored.push(e);a.num_of_img_errors++;a.registerRequest()},c.addEventListener?(c.addEventListener("error",h,!1),c.addEventListener("abort",h,!1)):c.attachEvent&&(c.attachEvent("onerror",h),c.attachEvent("onabort",h)),c.src=
e.src)},fireScript:function(e,a){var c=this,h=p,f,k,n=e.src,x=e.postCallbackFn,q="function"===typeof x,l=e.internalCallbackName;h.abortRequests||(h.firing=!0,window[l]=function(c){try{c!==Object(c)&&(c={});E&&(y.ibsDeleted.push(c.ibs),delete c.ibs);var f=e.callbackFn;h.firing=!1;h.fired.push(e);h.num_of_jsonp_responses++;f(c,a);q&&x(c,a)}catch(r){r.message="DIL jsonp callback caught error with message "+r.message;b=r.message;d.push(b);r.filename=r.filename||"dil.js";r.partner=g;DIL.errorModule.handleError(r);
try{f({error:r.name+"|"+r.message},a),q&&x({error:r.name+"|"+r.message},a)}catch(n){}}finally{h.requestRemoval({script:k,callbackName:l}),h.registerRequest()}},L?(h.firing=!1,h.requestRemoval({script:"no script created",callbackName:l})):(k=document.createElement("script"),k.addEventListener&&k.addEventListener("error",function(a){h.requestRemoval({script:k,callbackName:l});b="jsonp script tag error listener received the event of type "+a.type+" with src "+n;c.handleScriptError(b,e)},!1),k.type="text/javascript",
k.src=n,f=DIL.variables.scriptNodeList[0],f.parentNode.insertBefore(k,f)),h.sent.push(e),h.declaredId.declaredId.request=null)},fireCORS:function(a,c){function f(r){var n;try{if(n=JSON.parse(r),n!==Object(n)){h.handleCORSError(a,c,"Response is not JSON");return}}catch(q){h.handleCORSError(a,c,"Error parsing response as JSON");return}try{var x=a.callbackFn;k.firing=!1;k.fired.push(a);k.num_of_cors_responses++;x(n,c);m&&w(n,c)}catch(l){l.message="DIL handleCORSResponse caught error with message "+l.message;
b=l.message;d.push(b);l.filename=l.filename||"dil.js";l.partner=g;DIL.errorModule.handleError(l);try{x({error:l.name+"|"+l.message},c),m&&w({error:l.name+"|"+l.message},c)}catch(p){}}finally{k.registerRequest()}}var h=this,k=p,n=this.corsMetadata.corsType,x=a.corsSrc,q=a.corsInstance,l=a.corsPostData,w=a.postCallbackFn,m="function"===typeof w;if(!k.abortRequests){k.firing=!0;if(M)k.firing=!1;else try{q.open("post",x,!0),"XMLHttpRequest"===n?(q.withCredentials=!0,q.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded"),q.onreadystatechange=function(){4===this.readyState&&(200===this.status?f(this.responseText):h.handleCORSError(a,c,"onreadystatechange"))}):"XDomainRequest"===n&&(q.onload=function(){f(this.responseText)}),q.onerror=function(){h.handleCORSError(a,c,"onerror")},q.ontimeout=function(){h.handleCORSError(a,c,"ontimeout")},q.send(l)}catch(u){this.handleCORSError(a,c,"try-catch")}k.sent.push(a);k.declaredId.declaredId.request=null}},handleCORSError:function(a,b,c){a.hasCORSError||
(a.hasCORSError=!0,p.num_of_cors_errors++,p.corsErrorSources.push(c),a.tag="script",this.fireScript(a,b))},handleScriptError:function(a,b){p.num_of_jsonp_errors++;this.handleRequestError(a,b)},handleRequestError:function(a,b){var c=p;d.push(a);c.abortRequests=!0;c.firing=!1;c.errored.push(b);c.registerRequest()}},v={isValidPdata:function(a){return a instanceof Array&&this.removeEmptyArrayValues(a).length?!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==
Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},removeEmptyArrayValues:function(a){for(var b=0,c=a.length,d,g=[],b=0;b<c;b++)d=a[b],"undefined"!==typeof d&&null!==d&&""!==d&&g.push(d);return g},isPopulatedString:function(a){return"string"===typeof a&&a.length}},t={addListener:function(){if(document.addEventListener)return function(a,b,c){a.addEventListener(b,function(a){"function"===typeof c&&c(a)},!1)};if(document.attachEvent)return function(a,b,c){a.attachEvent("on"+
b,function(a){"function"===typeof c&&c(a)})}}(),convertObjectToKeyValuePairs:function(a,b,c){var d=[],g,f;b||(b="=");for(g in a)a.hasOwnProperty(g)&&(f=a[g],"undefined"!==typeof f&&null!==f&&""!==f&&d.push(g+b+(c?encodeURIComponent(f):f)));return d},encodeAndBuildRequest:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},map:function(a,b){if(Array.prototype.map)return a.map(b);if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==
typeof b)throw new TypeError;for(var g=Array(d),f=0;f<d;f++)f in c&&(g[f]=b.call(b,c[f],f,c));return g},filter:function(a,b){if(!Array.prototype.filter){if(void 0===a||null===a)throw new TypeError;var c=Object(a),d=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var g=[],f=0;f<d;f++)if(f in c){var k=c[f];b.call(b,k,f,c)&&g.push(k)}return g}return a.filter(b)},getCookie:function(a){a+="=";var b=document.cookie.split(";"),c,d,f;c=0;for(d=b.length;c<d;c++){for(f=b[c];" "===f.charAt(0);)f=
f.substring(1,f.length);if(0===f.indexOf(a))return decodeURIComponent(f.substring(a.length,f.length))}return null},setCookie:function(a,b,c,d,f,g){var k=new Date;c&&(c*=6E4);document.cookie=a+"="+encodeURIComponent(b)+(c?";expires="+(new Date(k.getTime()+c)).toUTCString():"")+(d?";path="+d:"")+(f?";domain="+f:"")+(g?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,b),!0):!1},extendObject:function(a,b,c){var d;if(a===Object(a)&&b===
Object(b)){for(d in b)!b.hasOwnProperty(d)||!v.isEmptyObject(c)&&d in c||(a[d]=b[d]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return((new Date(A.COOKIE_MAX_EXPIRATION_DATE)).getTime()-(new Date).getTime())/1E3/60}};"error"===g&&0===k&&t.addListener(window,"load",function(){DIL.windowLoaded=!0});var R=!1,G=function(){R||(R=!0,p.registerRequest(),U(),m||p.abortRequests||y.attachIframe(),p.readyToRemove=!0,p.requestRemoval())},U=function(){m||setTimeout(function(){N||p.firstRequestHasFired||
("function"===typeof H?J.afterResult(H).submit():J.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)},S=document;"error"!==g&&(DIL.windowLoaded?G():"complete"!==S.readyState&&"loaded"!==S.readyState?t.addListener(window,"load",function(){DIL.windowLoaded=!0;G()}):(DIL.windowLoaded=!0,G()));p.declaredId.setDeclaredId(x,"init");p.processVisitorAPI();this.api=J;this.getStuffedVariable=function(a){var b=I.stuffed[a];b||"number"===typeof b||(b=t.getCookie(a))||"number"===typeof b||(b="");return b};this.validators=
v;this.helpers=t;this.constants=A;this.log=d;T&&(this.pendingRequest=l,this.requestController=p,this.setDestinationPublishingUrl=f,this.destinationPublishing=y,this.requestProcs=C,this.variables=I,this.callWindowLoadFunctions=G)},function(){var a=document,c;null==a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",c=function(){a.removeEventListener("DOMContentLoaded",c,!1);a.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(a){var c;
if(a===Object(a))for(c in a)a.hasOwnProperty(c)&&(this[c]=a[c])},DIL.extendStaticPropertiesAndMethods({version:"6.4",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(a){this.windowLoaded="function"===typeof a?!!a():"boolean"===typeof a?a:!0},create:function(a){try{return new DIL(a)}catch(c){return(new Image(0,0)).src="http://error.demdex.net/event?d_nsid=0&d_px=14137&d_ld=name%3Derror%26filename%3Ddil.js%26partner%3Dno_partner%26message%3DError%2520in%2520attempt%2520to%2520create%2520DIL%2520instance%2520with%2520DIL.create()%26_ts%3D"+
(new Date).getTime(),Error("Error in attempt to create DIL instance with DIL.create()")}},registerDil:function(a,c,d){c=c+"$"+d;c in this.dils||(this.dils[c]=a)},getDil:function(a,c){var d;"string"!==typeof a&&(a="");c||(c=0);d=a+"$"+c;return d in this.dils?this.dils[d]:Error("The DIL instance with partner = "+a+" and containerNSID = "+c+" was not found")},dexGetQSVars:function(a,c,d){c=this.getDil(c,d);return c instanceof this?c.getStuffedVariable(a):""},xd:{postMessage:function(a,c,d){var b=1;c&&
(window.postMessage?d.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(d.location=c.replace(/#.*$/,"")+"#"+ +new Date+b++ +"&"+a))}}}),DIL.errorModule=function(){var a=DIL.create({partner:"error",containerNSID:0,disableDestinationPublishingIframe:!0}),c={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},d=!1;return{activate:function(){d=!0},handleError:function(b){if(!d)return"DIL error module has not been activated";
b!==Object(b)&&(b={});var f=b.name?(b.name+"").toLowerCase():"",g=[];b={name:f,filename:b.filename?b.filename+"":"",partner:b.partner?b.partner+"":"no_partner",site:b.site?b.site+"":document.location.href,message:b.message?b.message+"":""};g.push(f in c?c[f]:c.noerrortypedefined);a.api.pixels(g).logs(b).useImageRequest().submit();return"DIL error report sent"},pixelMap:c}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(a,c,d){var b="";c=c||"Error caught in DIL module/submodule: ";
a===Object(a)?b=c+(a.message||"err has no message"):(b=c+"err is not a valid object",a={});a.message=b;d instanceof DIL&&(a.partner=d.api.getPartner());DIL.errorModule.handleError(a);return this.errorMessage=b}}});
DIL.tools.getSearchReferrer=function(a,c){var d=DIL.getDil("error"),b=DIL.tools.decomposeURI(a||document.referrer),f="",g="",k={queryParam:"q"};return(f=d.helpers.filter([c===Object(c)?c:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(a){return!(!a.hasOwnProperty("hostPattern")||!b.hostname.match(a.hostPattern))}).shift())?{valid:!0,name:b.hostname,keywords:(d.helpers.extendObject(k,f),g=k.queryPattern?
(f=(""+b.search).match(k.queryPattern))?f[1]:"":b.uriParams[k.queryParam],decodeURIComponent(g||"").replace(/\+|%20/g," "))}:{valid:!1,name:"",keywords:""}};
DIL.tools.decomposeURI=function(a){var c=DIL.getDil("error"),d=document.createElement("a");d.href=a||document.referrer;return{hash:d.hash,host:d.host.split(":").shift(),hostname:d.hostname,href:d.href,pathname:d.pathname.replace(/^\//,""),protocol:d.protocol,search:d.search,uriParams:function(a,d){c.helpers.map(d.split("&"),function(c){c=c.split("=");a[c.shift()]=c.shift()});return a}({},d.search.replace(/^(\/|\?)?|\/$/g,""))}};
DIL.tools.getMetaTags=function(){var a={},c=document.getElementsByTagName("meta"),d,b,f,g,k;d=0;for(f=arguments.length;d<f;d++)if(g=arguments[d],null!==g)for(b=0;b<c.length;b++)if(k=c[b],k.name===g){a[g]=k.content;break}return a};
DIL.modules.siteCatalyst={dil:null,handle:DIL.modules.helpers.handleModuleError,init:function(a,c,d,b){try{var f=this,g={name:"DIL Site Catalyst Module Error"},k=function(a){g.message=a;DIL.errorModule.handleError(g);return a};this.options=b===Object(b)?b:{};this.dil=null;if(c instanceof DIL)this.dil=c;else return k("dilInstance is not a valid instance of DIL");g.partner=c.api.getPartner();if(a!==Object(a))return k("siteCatalystReportingSuite is not an object");window.AppMeasurement_Module_DIL=a.m_DIL=
function(a){var b="function"===typeof a.m_i?a.m_i("DIL"):this;if(b!==Object(b))return k("m is not an object");b.trackVars=f.constructTrackVars(d);b.d=0;b.s=a;b._t=function(){var a,b,c=","+this.trackVars+",",d=this.s,g,m=[];g=[];var w={},u=!1;if(d!==Object(d))return k("Error in m._t function: s is not an object");if(this.d){if("function"===typeof d.foreachVar)d.foreachVar(function(a,b){"undefined"!==typeof b&&(w[a]=b,u=!0)},this.trackVars);else{if(!(d.va_t instanceof Array))return k("Error in m._t function: s.va_t is not an array");
if(d.lightProfileID)(a=d.lightTrackVars)&&(a=","+a+","+d.vl_mr+",");else if(d.pe||d.linkType)a=d.linkTrackVars,d.pe&&(b=d.pe.substring(0,1).toUpperCase()+d.pe.substring(1),d[b]&&(a=d[b].trackVars)),a&&(a=","+a+","+d.vl_l+","+d.vl_l2+",");if(a){b=0;for(m=a.split(",");b<m.length;b++)0<=c.indexOf(","+m[b]+",")&&g.push(m[b]);g.length&&(c=","+g.join(",")+",")}g=0;for(b=d.va_t.length;g<b;g++)a=d.va_t[g],0<=c.indexOf(","+a+",")&&"undefined"!==typeof d[a]&&null!==d[a]&&""!==d[a]&&(w[a]=d[a],u=!0)}f.includeContextData(d,
w).store_populated&&(u=!0);u&&this.d.api.signals(w,"c_").submit()}}};a.loadModule("DIL");a.DIL.d=c;return g.message?g.message:"DIL.modules.siteCatalyst.init() completed with no errors"}catch(m){return this.handle(m,"DIL.modules.siteCatalyst.init() caught error with message ",this.dil)}},constructTrackVars:function(a){var c=[],d,b,f,g,k;if(a===Object(a)){d=a.names;if(d instanceof Array&&(f=d.length))for(b=0;b<f;b++)g=d[b],"string"===typeof g&&g.length&&c.push(g);a=a.iteratedNames;if(a instanceof Array&&
(f=a.length))for(b=0;b<f;b++)if(d=a[b],d===Object(d)&&(g=d.name,k=parseInt(d.maxIndex,10),"string"===typeof g&&g.length&&!isNaN(k)&&0<=k))for(d=0;d<=k;d++)c.push(g+d);if(c.length)return c.join(",")}return this.constructTrackVars({names:"pageName channel campaign products events pe pev1 pev2 pev3".split(" "),iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:250}]})},includeContextData:function(a,c){var d={},b=!1;if(a.contextData===Object(a.contextData)){var f=a.contextData,g=this.options.replaceContextDataPeriodsWith,
k=this.options.filterFromContextVariables,m={},u,w,n,q;"string"===typeof g&&g.length||(g="_");if(k instanceof Array)for(u=0,w=k.length;u<w;u++)n=k[u],this.dil.validators.isPopulatedString(n)&&(m[n]=!0);for(q in f)!f.hasOwnProperty(q)||m[q]||!(k=f[q])&&"number"!==typeof k||(q=("contextData."+q).replace(/\./g,g),c[q]=k,b=!0)}d.store_populated=b;return d}};
DIL.modules.GA={dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,signals:{},hasSignals:!1,handle:DIL.modules.helpers.handleModuleError,init:function(a,c,d){try{this.tv=this.arr=this.dil=null;this.errorMessage="";this.signals={};this.hasSignals=!1;var b={name:"DIL GA Module Error"},f="";c instanceof DIL?(this.dil=c,b.partner=this.dil.api.getPartner()):(f="dilInstance is not a valid instance of DIL",
b.message=f,DIL.errorModule.handleError(b));a instanceof Array&&a.length?this.arr=a:(f="gaArray is not an array or is empty",b.message=f,DIL.errorModule.handleError(b));this.tv=this.constructTrackVars(d);this.errorMessage=f}catch(g){this.handle(g,"DIL.modules.GA.init() caught error with message ",this.dil)}finally{return this}},constructTrackVars:function(a){var c=[],d,b,f,g;if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){f=this.defaultTrackVars;g={};d=0;for(b=f.length;d<b;d++)g[f[d]]=
!0;this.defaultTrackVarsObj=g}else g=this.defaultTrackVarsObj;if(a===Object(a)){a=a.names;if(a instanceof Array&&(b=a.length))for(d=0;d<b;d++)f=a[d],"string"===typeof f&&f.length&&f in g&&c.push(f);if(c.length)return c}return this.defaultTrackVars},constructGAObj:function(a){var c={};a=a instanceof Array?a:this.arr;var d,b,f,g;d=0;for(b=a.length;d<b;d++)f=a[d],f instanceof Array&&f.length&&(f=[],g=a[d],f instanceof Array&&g instanceof Array&&Array.prototype.push.apply(f,g),g=f.shift(),"string"===
typeof g&&g.length&&(c[g]instanceof Array||(c[g]=[]),c[g].push(f)));return c},addToSignals:function(a,c){if("string"!==typeof a||""===a||null==c||""===c)return!1;this.signals[a]instanceof Array||(this.signals[a]=[]);this.signals[a].push(c);return this.hasSignals=!0},constructSignals:function(){var a=this.constructGAObj(),c={_setAccount:function(a){this.addToSignals("c_accountId",a)},_setCustomVar:function(a,b,c){"string"===typeof b&&b.length&&this.addToSignals("c_"+b,c)},_addItem:function(a,b,c,d,
f,g){this.addToSignals("c_itemOrderId",a);this.addToSignals("c_itemSku",b);this.addToSignals("c_itemName",c);this.addToSignals("c_itemCategory",d);this.addToSignals("c_itemPrice",f);this.addToSignals("c_itemQuantity",g)},_addTrans:function(a,b,c,d,f,g,k,m){this.addToSignals("c_transOrderId",a);this.addToSignals("c_transAffiliation",b);this.addToSignals("c_transTotal",c);this.addToSignals("c_transTax",d);this.addToSignals("c_transShipping",f);this.addToSignals("c_transCity",g);this.addToSignals("c_transState",
k);this.addToSignals("c_transCountry",m)},_trackSocial:function(a,b,c,d){this.addToSignals("c_socialNetwork",a);this.addToSignals("c_socialAction",b);this.addToSignals("c_socialTarget",c);this.addToSignals("c_socialPagePath",d)}},d=this.tv,b,f,g,k,m,u;b=0;for(f=d.length;b<f;b++)if(g=d[b],a.hasOwnProperty(g)&&c.hasOwnProperty(g)&&(u=a[g],u instanceof Array))for(k=0,m=u.length;k<m;k++)c[g].apply(this,u[k])},submit:function(){try{if(""!==this.errorMessage)return this.errorMessage;this.constructSignals();
return this.hasSignals?(this.dil.api.signals(this.signals).submit(),"Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"=",!0)+this.dil.log):"No signals present"}catch(a){return this.handle(a,"DIL.modules.GA.submit() caught error with message ",this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:"",handle:DIL.modules.helpers.handleModuleError,callback:null,v:function(){return!1},init:function(a,c,d){try{this.callback=this.dil=null,this.errorMessage=
"",a instanceof DIL?(this.dil=a,this.v=this.dil.validators.isPopulatedString,this.cookieName=this.v(c)?c:"aam_ga",this.delimiter=this.v(d)?d:"|"):this.handle({message:"dilInstance is not a valid instance of DIL"},"DIL.modules.GA.Stuffer.init() error: ")}catch(b){this.handle(b,"DIL.modules.GA.Stuffer.init() caught error with message ",this.dil)}finally{return this}},process:function(a){var c,d,b,f,g,k;k=!1;var m=1;if(a===Object(a)&&(c=a.stuff)&&c instanceof Array&&(d=c.length))for(a=0;a<d;a++)if((b=
c[a])&&b===Object(b)&&(f=b.cn,g=b.cv,f===this.cookieName&&this.v(g))){k=!0;break}if(k){c=g.split(this.delimiter);"undefined"===typeof window._gaq&&(window._gaq=[]);b=window._gaq;a=0;for(d=c.length;a<d&&!(k=c[a].split("="),g=k[0],k=k[1],this.v(g)&&this.v(k)&&b.push(["_setCustomVar",m++,g,k,1]),m>this.LIMIT);a++);this.errorMessage=1<m?"No errors - stuffing successful":"No valid values to stuff"}else this.errorMessage="Cookie name and value not found in json";if("function"===typeof this.callback)return this.callback()},
submit:function(){try{var a=this;if(""!==this.errorMessage)return this.errorMessage;this.dil.api.afterResult(function(c){a.process(c)}).submit();return"DIL.modules.GA.Stuffer.submit() successful"}catch(c){return this.handle(c,"DIL.modules.GA.Stuffer.submit() caught error with message ",this.dil)}}}};
DIL.modules.Peer39={aid:"",dil:null,optionals:null,errorMessage:"",calledBack:!1,script:null,scriptsSent:[],returnedData:[],handle:DIL.modules.helpers.handleModuleError,init:function(a,c,d){try{this.dil=null;this.errorMessage="";this.calledBack=!1;this.optionals=d===Object(d)?d:{};d={name:"DIL Peer39 Module Error"};var b=[],f="";this.isSecurePageButNotEnabled(document.location.protocol)&&(f="Module has not been enabled for a secure page",b.push(f),d.message=f,DIL.errorModule.handleError(d));c instanceof
DIL?(this.dil=c,d.partner=this.dil.api.getPartner()):(f="dilInstance is not a valid instance of DIL",b.push(f),d.message=f,DIL.errorModule.handleError(d));"string"===typeof a&&a.length?this.aid=a:(f="aid is not a string or is empty",b.push(f),d.message=f,DIL.errorModule.handleError(d));this.errorMessage=b.join("\n")}catch(g){this.handle(g,"DIL.modules.Peer39.init() caught error with message ",this.dil)}finally{return this}},isSecurePageButNotEnabled:function(a){return"https:"===a&&!0!==this.optionals.enableHTTPS?
!0:!1},constructSignals:function(){var a=this,c=this.constructScript(),d=DIL.variables.scriptNodeList[0];window["afterFinished_"+this.aid]=function(){try{var b=a.processData(p39_KVP_Short("c_p","|").split("|"));b.hasSignals&&a.dil.api.signals(b.signals).submit()}catch(c){}finally{a.calledBack=!0,"function"===typeof a.optionals.afterResult&&a.optionals.afterResult()}};d.parentNode.insertBefore(c,d);this.scriptsSent.push(c);return"Request sent to Peer39"},processData:function(a){var c,d,b,f,g={},k=
!1;this.returnedData.push(a);if(a instanceof Array)for(c=0,d=a.length;c<d;c++)b=a[c].split("="),f=b[0],b=b[1],f&&isFinite(b)&&!isNaN(parseInt(b,10))&&(g[f]instanceof Array||(g[f]=[]),g[f].push(b),k=!0);return{hasSignals:k,signals:g}},constructScript:function(){var a=document.createElement("script"),c=this.optionals,d=c.scriptId,b=c.scriptSrc,c=c.scriptParams;a.id="string"===typeof d&&d.length?d:"peer39ScriptLoader";a.type="text/javascript";"string"===typeof b&&b.length?a.src=b:(a.src=(this.dil.constants.IS_HTTPS?
"https:":"http:")+"//stags.peer39.net/"+this.aid+"/trg_"+this.aid+".js","string"===typeof c&&c.length&&(a.src+="?"+c));return a},submit:function(){try{return""!==this.errorMessage?this.errorMessage:this.constructSignals()}catch(a){return this.handle(a,"DIL.modules.Peer39.submit() caught error with message ",this.dil)}}};

/*DIL Instantiation 6.4*/

var nDil = DIL.create({
	partner: 'nfl',
	visitorService:{
    		namespace: "F75C3025512D2C1D0A490D44@AdobeOrg"
  	},
	uuidCookie:{
		name:'aam_did',
		days:30
  	}
});

var _scDilObj = s_gi(s_account);
DIL.modules.siteCatalyst.init(_scDilObj, nDil, {
        names: ['pageName', 'channel', 'campaign', 'products', 'events', 'pe', 'referrer', 'server', 'purchaseID', 'zip', 'state'],
        iteratedNames: [{
               name: 'eVar',
               maxIndex: 75
        }, {
               name: 'prop',
               maxIndex: 75
        }, {
               name: 'pev',
               maxIndex: 3
        }, {
               name: 'hier',
               maxIndex: 4
        }]
});

if(nDil.helpers.getCookie('userId'))
{
	var c = nDil.helpers.getCookie('userId');
	if(typeof c != "undefined" && c.match(/\w+=\w+|\d+/)){
		var cList=c.split("&");
		for(var i=0; i<cList.length; i++){
			if(cList[i].match(/^u=.*/)){
				var uList=cList[i].split("=");
				if(typeof uList[1] != "undefined" && uList[1].match(/\w+|\d+/))
				{
					var _uName = uList[1];
					nDil.api.aamIdSync({
						dpid: '808', //must be a string
						dpuuid: _uName, //must be a string
						minutesToLive: 20160 //optional 
					});
				} 
				break;
			
			}
		}
	}
}


if(nDil.helpers.getCookie('__tuuid'))
{
	var pID = nDil.helpers.getCookie('__tuuid');
	nDil.api.aamIdSync({
		dpid: '1267',
		dpuuid: pID,
		minutesToLive: 20160
	});
};

                                if(nDil.helpers.getCookie('s_vi'))
                                {
                                                var svID = nDil.helpers.getCookie('s_vi');
                                                nDil.api.aamIdSync({
                                                                dpid: '1327',
                                                                dpuuid: svID,
                                                                minutesToLive: 20160
                                                });
                                };

if((document.URL.indexOf('fantasy.nfl.com') == -1 ||  document.URL.indexOf('probowl.fantasy.nfl.com') > -1) &&
document.URL.indexOf('challengegames.nfl.com/thursdaynightchallenge') == -1 && document.URL.indexOf('predictpick.nfl.com') == -1 ){

var sf_config_domain = window.location.hostname;
if(document.URL.indexOf('probowl.fantasy.nfl.com') > -1) {sf_config_domain = 'nfl.com';}
if(sf_config_domain.indexOf('www.'>-1)){sf_config_domain=sf_config_domain.replace('www.','');}

var sf_config_path = window.location.pathname;

s.Integrate.add("ChartBeat")
s.Integrate.ChartBeat.useVars=function(s,p){

    /** CONFIGURATION START **/
    _sf_async_config.uid = 53820;
    _sf_async_config.domain = sf_config_domain;
    _sf_async_config.useCanonical = true;
    _sf_async_config.path = sf_config_path;
	if(s_analytics.channel)_sf_async_config.sections = s_analytics.channel;
    if(s_analytics.prop13)_sf_async_config.authors = s_analytics.prop13;
    /** CONFIGURATION END **/	
	s.Integrate.ChartBeat.loadChartbeat();
};

s.Integrate.ChartBeat.loadChartbeat = function (){
		window._sf_endpt=(new Date()).getTime();
        var e = document.createElement('script');
        e.setAttribute('language', 'javascript');
        e.setAttribute('type', 'text/javascript');
        e.setAttribute('src', '//static.chartbeat.com/js/chartbeat.js');
        document.body.appendChild(e);
};
}







}

s.m_Integrate_c="var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!m.s.wd[o])m.s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p"
+".get=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m."
+"l[i]];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=func"
+"tion(p,u){var m=this,s=m.s,v,x,y,z,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*10000"
+"000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;x=0;while(x>=0){x=u.indexOf('[',x);if(x>=0){y=u.indexOf(']',x);if(y>x){z=u.substring(x+1,y);if(z.length>2&&z.substring(0,2)=='s."
+"'){v=s[z.substring(2)];if(!v)v=''}else{v=''+p[z];if(!(v==p[z]||parseFloat(v)==p[z]))z=0}if(z) {u=u.substring(0,x)+s.rep(escape(v),'+','%2B')+u.substring(y+1);x=y-(z.length-v.length+1)} else {x=y}}}"
+"}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay"
+"=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&"
+"&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[x];p._d--}};m.beacon=function(u){var p=this,m"
+"=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.s"
+"cript=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";
s.m_i("Integrate");


s.setTagContainer("prodscode")
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.27.5';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc"
+"ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r"
+";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring("
+"0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'"
+",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi"
+"bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil"
+"e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")"
+";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li"
+"nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam"
+"e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'"
+".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<"
+"0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6"
+"0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''"
+");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i"
+";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc"
+"f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s"
+".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0"
+";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return "
+"s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo"
+"r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.tagContainerMarker='';s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingS"
+"erverSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net"
+"';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobi"
+"le?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+(s.tagContainerMarker?\"-\"+s.tagContainerMarker:\"\")+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv"
+">=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+"
+"'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;fo"
+"r(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.alt=\"\";im.s_l=0;im.onload=im.onerror=new Function('e','this.s_l=1;var wd=windo"
+"w,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s."
+"forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_"
+"top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'"
+"};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v)"
+"{var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLo"
+"werCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google'"
+")>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(',"
+"'+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf"
+",vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',"
+"')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk]"
+";if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(ty"
+"peof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else "
+"if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.subs"
+"tring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv="
+"','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[m"
+"n].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x"
+"=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='supplementalDataID')q='sdid';else if(k=='timestamp')q"
+"='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='marketingCloudVisitorID')q='mid';else if(k=='analyticsVisitorID')q='aid';else if(k=='audienceManagerLocatio"
+"nHint')q='aamlh';else if(k=='audienceManagerBlob')q='aamb';else if(k=='authState')q='as';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(255);v=v.substring(0,255);}}else if(k"
+"=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationS"
+"erverSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s"
+".em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='"
+"cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';els"
+"e if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else"
+" if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q"
+"='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=="
+"'deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if("
+"b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase("
+"):'';var qi=h.indexOf('?'),hi=h.indexOf('#');if(qi>=0){if(hi>=0&&hi<qi)qi=hi;}else qi=hi;h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=functi"
+"on(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFi"
+"lters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.inde"
+"xOf('javascript:')!=0&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.ln"
+"k=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct."
+"href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForce"
+"dLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcEl"
+"ement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a"
+".parentNode;if(a){h=a.href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent"
+"\"||(s.wd.name&&t==s.wd.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEvent}return n\");n=tcf(s);if(n){tcf=new Function(\"n\",\"e\",\"var"
+" x;try{n.initMouseEvent(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(x){n"
+"=0}return n\");n=tcf(n,e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.target;s.bce=n}}}}}');s.oh=function(o){var s=t"
+"his,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.p"
+"rotocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagN"
+"ame;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t"
+"=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toL"
+"owerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if"
+"(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.inde"
+"xOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=funct"
+"ion(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s"
+".epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s"
+".sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]"
+"]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var "
+"s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf("
+"\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclic"
+"k',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('Firefox/2')>=0&&s.wd.MouseEvent))){s.bbc=1;s.useForcedLinkTrackin"
+"g=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s"
+"_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m)"
+"{if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}retu"
+"rn 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m"
+";l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s"
+".un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl"
+"=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e'"
+",'_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m["
+"l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))r"
+"eturn;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).ind"
+"exOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s."
+"m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).i"
+"ndexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.l"
+"oadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}"
+"else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._i"
+"n+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250"
+";if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/"
+"javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,"
+"u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){v"
+"ar s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=fu"
+"nction(vo,onlySet){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!onlySet&&!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i"
+"=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s"
+".maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.d"
+"lt()};s._waitingForMarketingCloudVisitorID = false;s._doneWaitingForMarketingCloudVisitorID = false;s._marketingCloudVisitorIDCallback=function(marketingCloudVisitorID) {var s=this;s.marketingCloud"
+"VisitorID = marketingCloudVisitorID;s._doneWaitingForMarketingCloudVisitorID = true;s._callbackWhenReadyToTrackCheck();};s._waitingForAnalyticsVisitorID = false;s._doneWaitingForAnalyticsVisitorID "
+"= false;s._analyticsVisitorIDCallback=function(analyticsVisitorID) {var s=this;s.analyticsVisitorID = analyticsVisitorID;s._doneWaitingForAnalyticsVisitorID = true;s._callbackWhenReadyToTrackCheck("
+");};s._waitingForAudienceManagerLocationHint = false;s._doneWaitingForAudienceManagerLocationHint = false;s._audienceManagerLocationHintCallback=function(audienceManagerLocationHint) {var s=this;s."
+"audienceManagerLocationHint = audienceManagerLocationHint;s._doneWaitingForAudienceManagerLocationHint = true;s._callbackWhenReadyToTrackCheck();};s._waitingForAudienceManagerBlob = false;s._doneWa"
+"itingForAudienceManagerBlob = false;s._audienceManagerBlobCallback=function(audienceManagerBlob) {var s=this;s.audienceManagerBlob = audienceManagerBlob;s._doneWaitingForAudienceManagerBlob = true;"
+"s._callbackWhenReadyToTrackCheck();};s.isReadyToTrack=function() {var s=this,readyToTrack = true,visitor = s.visitor;if ((visitor) && (visitor.isAllowed())) {if ((!s._waitingForMarketingCloudVisito"
+"rID) && (!s.marketingCloudVisitorID) && (visitor.getMarketingCloudVisitorID)) {s._waitingForMarketingCloudVisitorID = true;s.marketingCloudVisitorID = visitor.getMarketingCloudVisitorID([s,s._marke"
+"tingCloudVisitorIDCallback]);if (s.marketingCloudVisitorID) {s._doneWaitingForMarketingCloudVisitorID = true;}}if ((!s._waitingForAnalyticsVisitorID) && (!s.analyticsVisitorID) && (visitor.getAnaly"
+"ticsVisitorID)) {s._waitingForAnalyticsVisitorID = true;s.analyticsVisitorID = visitor.getAnalyticsVisitorID([s,s._analyticsVisitorIDCallback]);if (s.analyticsVisitorID) {s._doneWaitingForAnalytics"
+"VisitorID = true;}}if ((!s._waitingForAudienceManagerLocationHint) && (!s.audienceManagerLocationHint) && (visitor.getAudienceManagerLocationHint)) {s._waitingForAudienceManagerLocationHint = true;"
+"s.audienceManagerLocationHint = visitor.getAudienceManagerLocationHint([s,s._audienceManagerLocationHintCallback]);if (s.audienceManagerLocationHint) {s._doneWaitingForAudienceManagerLocationHint ="
+" true;}}if ((!s._waitingForAudienceManagerBlob) && (!s.audienceManagerBlob) && (visitor.getAudienceManagerBlob)) {s._waitingForAudienceManagerBlob = true;s.audienceManagerBlob = visitor.getAudience"
+"ManagerBlob([s,s._audienceManagerBlobCallback]);if (s.audienceManagerBlob) {s._doneWaitingForAudienceManagerBlob = true;}}if (((s._waitingForMarketingCloudVisitorID)     && (!s._doneWaitingForMarke"
+"tingCloudVisitorID)     && (!s.marketingCloudVisitorID)) ||((s._waitingForAnalyticsVisitorID)          && (!s._doneWaitingForAnalyticsVisitorID)          && (!s.analyticsVisitorID)) ||((s._waitingF"
+"orAudienceManagerLocationHint) && (!s._doneWaitingForAudienceManagerLocationHint) && (!s.audienceManagerLocationHint)) ||((s._waitingForAudienceManagerBlob)         && (!s._doneWaitingForAudienceMa"
+"nagerBlob)         && (!s.audienceManagerBlob))) {readyToTrack = false;}}return readyToTrack;};s._callbackWhenReadyToTrackQueue = null;s._callbackWhenReadyToTrackInterval = 0;s.callbackWhenReadyToT"
+"rack=function(callbackThis,callback,args) {var s=this,callbackInfo;callbackInfo = {};callbackInfo.callbackThis = callbackThis;callbackInfo.callback     = callback;callbackInfo.args         = args;i"
+"f (s._callbackWhenReadyToTrackQueue == null) {s._callbackWhenReadyToTrackQueue = [];}s._callbackWhenReadyToTrackQueue.push(callbackInfo);if (s._callbackWhenReadyToTrackInterval == 0) {s._callbackWh"
+"enReadyToTrackInterval = setInterval(s._callbackWhenReadyToTrackCheck,100);}};s._callbackWhenReadyToTrackCheck=new Function('var s=s_c_il['+s._in+'],callbackNum,callbackInfo;if (s.isReadyToTrack())"
+" {if (s._callbackWhenReadyToTrackInterval) {clearInterval(s._callbackWhenReadyToTrackInterval);s._callbackWhenReadyToTrackInterval = 0;}if (s._callbackWhenReadyToTrackQueue != null) {while (s._call"
+"backWhenReadyToTrackQueue.length > 0) {callbackInfo = s._callbackWhenReadyToTrackQueue.shift();callbackInfo.callback.apply(callbackInfo.callbackThis,callbackInfo.args);}}}');s._handleNotReadyToTrac"
+"k=function(variableOverrides) {var s=this,args,varKey,variableOverridesCopy = null,setVariables = null;if (!s.isReadyToTrack()) {args = [];if (variableOverrides != null) {variableOverridesCopy = {}"
+";for (varKey in variableOverrides) {variableOverridesCopy[varKey] = variableOverrides[varKey];}}setVariables = {};s.vob(setVariables,true);args.push(variableOverridesCopy);args.push(setVariables);s"
+".callbackWhenReadyToTrack(s,s.track,args);return true;}return false;};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexO"
+"f('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));"
+"if(!s.c_w(k,fid,e))fid=0;return fid};s.track=s.t=function(vo,setVariables){var s=this,notReadyToTrack,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),s"
+"ess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '"
+"+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if (s.visitor) {if (s.visitor.getAuthState) {s.authState = s.visitor.getAuthState();}if ((!s.supplementalDataID) && ("
+"s.visitor.getSupplementalDataID)) {s.supplementalDataID = s.visitor.getSupplementalDataID(\"AppMeasurement:\" + s._in,(s.expectSupplementalData ? false : true));}}if(s.mpc('t',arguments))return;s.g"
+"l(s.vl_g);s.uns();s.m_ll();notReadyToTrack = s._handleNotReadyToTrack(vo);if (!notReadyToTrack) {if (setVariables) {s.voa(setVariables);}if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='"
+"',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.to"
+"Precision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';"
+"if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv"
+">=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.of"
+"fsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return h"
+"p');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30)"
+"{ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectio"
+"nType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if(!s.analyticsVisitorID&&!s.marketingCloudVisitorID)s.fid=s.gfid();if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);"
+"if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer)s.referrer=r;s._1_referrer=1;s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s."
+"eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if"
+"(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeav"
+"eQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else t"
+"rk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-o"
+"bject-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;"
+"if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt("
+"oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','"
+"var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+("
+"x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('"
+"t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);}s.abort=0;s.supplementalDataID=s.pageURLRest=s.lnk=s.eo"
+"=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=th"
+"is;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagCo"
+"ntainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y"
+"='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='functio"
+"n'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply("
+"y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagNam"
+"e){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('O"
+"pera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseF"
+"loat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;i"
+"f(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='supplementalData"
+"ID,timestamp,dynamicVariablePrefix,visitorID,marketingCloudVisitorID,analyticsVisitorID,audienceManagerLocationHint,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,p"
+"pu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLi"
+"ghtProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightInc"
+"rementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,audienceManagerBlob,authState,linkName,linkType';var n;for(n=1"
+";n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,res"
+"olution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',track"
+"ingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccount"
+"Match,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightT"
+"rackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=functio"
+"n(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()


s_tc_prodscode.cl=[{p:[{t:'c',c:'function fireCamelotCall(a,b){\n	if (typeof axel==\'undefined\') {\n		var axel=Math.random()*10000000000000000;\n	}\n	if(axel < 1) axel = axel*10000000000000000\n	protocal = "http";\n	if(b)protocal = "https"\n	var camelotFrame= document.createElement(\'iframe\');		\n	camelotFrame.setAttribute(\'src\', protocal+"://4189174.fls.doubleclick.net/activityi;src=4189174;type=count881;cat="+a+";ord=" + axel+ "?");\n	camelotFrame.setAttribute(\'height\',\'1\');\n	camelotFrame.setAttribute(\'width\',\'1\');\n	camelotFrame.setAttribute(\'frameBorder\',\'0\');\n	camelotFrame.setAttribute(\'style\',\'display:none\');\n	document.body.appendChild(camelotFrame);\n}'}]},
{p:[{t:'c',c:'var pageURL = document.URL;\nif (typeof axel==\'undefined\') {var axel=Math.random()*10000000000000000;}\nvar havFrame= document.createElement(\'iframe\');\nvar cat =""\nif (pageURL == \'http://www.nfl.com/\') cat="nflco092"\nif (pageURL == \'http://www.nfl.com/videos\') cat="nflco624"\nif (pageURL == \'http://www.nfl.com/news\') cat="nflco164"\nif (pageURL == \'http://www.nfl.com/fantasyfootball\') cat="nflco077"\nif (pageURL == \'http://www.nfl.com/gamecenter\') cat="nflco622"\nif (pageURL == \'http://www.nfl.com/schedules\') cat="nflco328"\nif (pageURL == \'http://www.nfl.com/scores\') cat="nflco067"\nif (pageURL == \'http://www.nfl.com/draft/history/fulldraft\') cat="nfldr568"\nif (pageURL == \'http://www.nfl.com/draft/2013/tracker\') cat="nfldr905"\nif (pageURL == \'http://www.nfl.com/draft/2013/mock-drafts\') cat="nfldr750"\nif (pageURL == \'http://predictpick.nfl.com/?icampaign=Predict_Fantasy_Draft-Nav_signup&cvsorc=fantasy.predict.draft_nav\') cat="nfldr689"\nif (pageURL == \'http://www.nfl.com/draft/2013/war-rooms\') cat="nfldr075"\nif (pageURL == \'http://www.nfl.com/videos/nfl-draft\') cat="nfldr756"\nif (pageURL == \'http://www.nfl.com/probowl\') cat="eng_n0"\nif (pageURL == \'http://www.nfl.com/probowl/ballot\') cat="eng_n000"\nif (pageURL == \'http://www.nfl.com/tickets\') cat="eng_n001"\nif (pageURL == \'http://www.nfl.com/international\') cat="NFLIn0"\nif (pageURL == \'http://www.nfl.com/nflnetwork\') cat="NFLNe0"\nif (pageURL == \'http://www.nfl.com/nflnetwork/networkschedule\') cat="eng_n005"\nif (pageURL == \'http://www.nfl.com/tnf\') cat="eng_t0"\nif (pageURL == \'http://www.nfl.com/trainingcamp\') cat="eng_t00"\nif (pageURL == \'http://nflnonline.nfl.com/\') cat="eng_n009"\n\nif(cat){\n	havFrame.setAttribute(\'src\', "http://fls.doubleclick.net/activityi;src=3738527;type=nflcn285;cat="+cat+";ord=" + axel+ "?");\n	havFrame.setAttribute(\'height\',\'1\');\n	havFrame.setAttribute(\'width\',\'1\');\n	havFrame.setAttribute(\'frameBorder\',\'0\');\n	havFrame.setAttribute(\'style\',\'display:none\');\n	document.body.appendChild(havFrame);\n}'}]},
{p:[{t:'c',c:'var pageURL = document.URL;\nvar u1Val=\'\';\nvar u2Val=\'\';\nvar mStormFlag="false";\nif (typeof axel==\'undefined\') {var axel=Math.random()*10000000000000000;}\nvar mStormFrame= document.createElement(\'iframe\');\nif (pageURL == \'http://www.nfl.com/fantasyfootball\'){\n\n	var fantasyFrame= document.createElement(\'iframe\');\n	fantasyFrame.setAttribute(\'src\', "http://fls.doubleclick.net/activityi;src=1268402;type=fanta429;cat=pagev815;ord=" + axel+ "?");\n	fantasyFrame.setAttribute(\'height\',\'1\');\n	fantasyFrame.setAttribute(\'width\',\'1\');\n	fantasyFrame.setAttribute(\'frameBorder\',\'0\');\n	fantasyFrame.setAttribute(\'style\',\'display:none\');\n	document.body.appendChild(fantasyFrame);\n	\n	var mStormFantasyFrame= document.createElement(\'iframe\');\n	mStormFantasyFrame.setAttribute(\'src\', "http://3610217.fls.doubleclick.net/activityi;src=3610217;type=pages0;cat=nflmu0;u1=fantasyfootball;u2=;ord=" + axel+ "?");\n	mStormFantasyFrame.setAttribute(\'height\',\'1\');\n	mStormFantasyFrame.setAttribute(\'width\',\'1\');\n	mStormFantasyFrame.setAttribute(\'frameBorder\',\'0\');\n	mStormFantasyFrame.setAttribute(\'style\',\'display:none\');\n	document.body.appendChild(mStormFantasyFrame);\n}\n\nif (pageURL == \'http://www.nfl.com/\'){mStormFlag="true";}\nif (pageURL == \'http://www.nfl.com/videos\'){u1Val="videos";mStormFlag="true";}\nif (pageURL == \'http://www.nfl.com/draft/2015\'){u1Val="draft";u2Val="2015";mStormFlag="true";}\nif (pageURL == \'http://www.nfl.com/draft/2015/mock-drafts\'){u1Val="draft";u2Val="mock draft";mStormFlag="true";}\nif (pageURL == \'http://www.nfl.com/combine\'){u1Val="combine";mStormFlag="true";}\nif (pageURL == \'http://www.nfl.com/combine/tracker\'){u1Val="combine";u2Val="tracker";mStormFlag="true";}\nif (pageURL == \'http://www.nfl.com/combine/top-performers\'){u1Val="combine";u2Val="top-performers";mStormFlag="true";}\nif (pageURL == \'http://www.nfl.com/tnf\'){u1Val="tnf";mStormFlag="true";}\nif (pageURL == \'http://www.nfl.com/nflnetwork\'){u1Val="nflnetwork";mStormFlag="true";}\nif (pageURL == \'http://www.nfl.com/channelfinder\'){u1Val="channelfinder";mStormFlag="true";}\nif (pageURL == \'http://www.nfl.com/nflnetwork/networkschedule\'){u1Val="nflnetwork";u2Val="networkschedule";mStormFlag="true";}\n\nif(mStormFlag == "true"){\n	mStormFrame.setAttribute(\'src\', "http://3610217.fls.doubleclick.net/activityi;src=3610217;type=pages0;cat=nflmu0;u1="+u1Val+";u2="+u2Val+";ord=" + axel+ "?");\n	mStormFrame.setAttribute(\'height\',\'1\');\n	mStormFrame.setAttribute(\'width\',\'1\');\n	mStormFrame.setAttribute(\'frameBorder\',\'0\');\n	mStormFrame.setAttribute(\'style\',\'display:none\');\n	document.body.appendChild(mStormFrame);\n}'}]},
{p:[{t:'c',c:'/**\n * Load Proclivity tags on URLs that match the supplied patterns.\n */\n(function (win) {\n  var loc = win.location,\n    doc = win.document,\n    browseToken,\n    getBrowseToken = function (host, path) {\n      switch (host) {\n      case "www.nfl.com":\n        if (path === "/") {\n          return "NFL";\n        } else if (path === "/news" || (/^\\/\\w+\\/story\\/[a-z\\d]+\\/article/i).test(path)) {\n          return "News";\n        } else if ((/^\\/videos(?:$|\\/)/).test(path)) {\n          return "Video";\n        } else if ( (/^\\/gamecenter(?:$|\\/)/i).test(path) ) {\n          return "GameCenter";\n        } else if ((/^\\/fantasyfootball(?:$|\\/)/).test(path)) {\n          return "Fantasy";\n        }\n        break;\n      case "gamepass.nfl.com":\n      case "gamerewind.nfl.com" :\n        return "GamePass";\n      case "fantasy.nfl.com":\n        return "Fantasy";\n      }\n    },\n    s,\n    h;\n\n  browseToken = getBrowseToken(loc.host, loc.pathname);\n  if (browseToken) {\n    win._pswf = "browse";\n    win._pswa = { token: browseToken };\n    s = doc.createElement(\'script\');\n    s.src = "//n.pswec.com/px/32e4c1141e/v3";\n    s.type = "text/javascript";\n    s.async = true;\n    h = doc.getElementsByTagName(\'head\')[0];\n    h.insertBefore(s, h.firstChild);\n  }\n}(window));'}]},
{p:[{t:'c',c:'function fireCnvrtroPlayChall(){\n	//convertro\n	$CVO.trackEvent(\'fantasy_playoff\', s_analytics.prop36,\'1.00\');\n	//Floodlight\n	if (typeof axel==\'undefined\') {var axel=Math.random()*10000000000000000;}\n	var plyOffChallFrame= document.createElement(\'iframe\');\n	plyOffChallFrame.setAttribute(\'src\', "http://1268402.fls.doubleclick.net/activityi;src=1268402;type=2012n782;cat=flood523;ord=" + axel+ "?");\n	plyOffChallFrame.setAttribute(\'height\',\'1\');\n	plyOffChallFrame.setAttribute(\'width\',\'1\');\n	plyOffChallFrame.setAttribute(\'frameBorder\',\'0\');\n	plyOffChallFrame.setAttribute(\'style\',\'display:none\');\n	document.body.appendChild(plyOffChallFrame);\n	\n}'}]},
{x:{h:["id2.s.nfl.com"],p:["fans/login"]},
p:[{t:'f',u:'https://4189174.fls.doubleclick.net/activityi;src=4189174;type=count881;cat=nfl_f464;ord=1?'}]},
{x:{h:["id2.s.nfl.com"],p:["fans/register"]},
p:[{t:'f',u:'https://4189174.fls.doubleclick.net/activityi;src=4189174;type=count881;cat=nfl_f329;ord=1?'}]},
{x:{p:["mobile/cheatsheet"]},
p:[{t:'f',u:'http://4189174.fls.doubleclick.net/activityi;src=4189174;type=count881;cat=nfl_m249;ord=1?'}]},
{x:{p:["mobile/fantasy"]},
p:[{t:'f',u:'http://4189174.fls.doubleclick.net/activityi;src=4189174;type=count881;cat=nfl_f263;ord=1?'}]},
{x:{h:["www.blah.com"]},
p:[{t:'s',u:'//googleads.g.doubleclick.net/pagead/viewthroughconversion/1056414046/?value=0&amp;guid=ON&amp;script=0'}]},
{p:[{t:'c',c:'var pageURL = document.URL;\nif (typeof axel==\'undefined\') {var axel=Math.random()*10000000000000000;}\nvar inVFrame1= document.createElement(\'iframe\');\nvar inVFrame2= document.createElement(\'iframe\');\nvar cat =""\nvar cat2 =""\n\nif (pageURL == \'http://www.nfl.com/\') {cat="lbhdwm0d";cat2="knagorn8";}\nif(pageURL == \'http://www.nfl.com/fantasyfootball\') {cat="pgdf0pb0";}\n\nif(cat){\n	inVFrame1.setAttribute(\'src\', "http://4979196.fls.doubleclick.net/activityi;src=4979196;type=invmedia;cat="+cat+";ord=" + axel+ "?");\n	inVFrame1.setAttribute(\'height\',\'1\');\n	inVFrame1.setAttribute(\'width\',\'1\');\n	inVFrame1.setAttribute(\'frameBorder\',\'0\');\n	inVFrame1.setAttribute(\'style\',\'display:none\');\n	document.body.appendChild(inVFrame1);\n}\n\nif(cat2){\n	inVFrame2.setAttribute(\'src\', "http://4933309.fls.doubleclick.net/activityi;src=4933309;type=invmedia;cat="+cat2+";ord=" + axel+ "?");\n	inVFrame2.setAttribute(\'height\',\'1\');\n	inVFrame2.setAttribute(\'width\',\'1\');\n	inVFrame2.setAttribute(\'frameBorder\',\'0\');\n	inVFrame2.setAttribute(\'style\',\'display:none\');\n	document.body.appendChild(inVFrame2);\n}'}]},
{p:[{t:'c',c:'var pageURL = document.URL;\nif (typeof axel==\'undefined\') {var axel=Math.random()*10000000000000000;}\nvar havFrame= document.createElement(\'iframe\');\nvar cat =""\nif (pageURL == \'http://fantasy.nfl.com/registration/autopickcreateconfirmconfirm\') cat="ecm_r004"\nif (pageURL == \'http://fantasy.nfl.com/registration/privateleagueactivateconfirm\') cat="ecm_r003"\nif (pageURL == \'http://fantasy.nfl.com/registration/privateleaguecreateconfirm\') cat="ecm_r0"\nif (pageURL == \'http://fantasy.nfl.com/registration/privateleaguejoinconfirm\') cat="ecm_r000"\nif (pageURL == \'http://fantasy.nfl.com/registration/publicleaguejoinconfirm\') cat="ecm_r00"\n\nif(cat){\n	havFrame.setAttribute(\'src\', "http://fls.doubleclick.net/activityi;src=3738527;type=ecm_n00;cat="+cat+";ord=" + axel+ "?");\n	havFrame.setAttribute(\'height\',\'1\');\n	havFrame.setAttribute(\'width\',\'1\');\n	havFrame.setAttribute(\'frameBorder\',\'0\');\n	havFrame.setAttribute(\'style\',\'display:none\');\n	document.body.appendChild(havFrame);\n}'}]},
{p:[{t:'c',c:'var pageURL = document.URL;\nif (typeof axel==\'undefined\') {var axel=Math.random()*10000000000000000;}\nvar havFrame= document.createElement(\'iframe\');\nvar cat =""\nif (pageURL == \'http://fantasy.nfl.com/registration/experienceleaguejoincreateteam\') cat="ecm_r000"\nif (pageURL == \'http://fantasy.nfl.com/registration/experienceleaguejoinconfirm\') cat="ecm_r0"\n\nif(cat){\n	havFrame.setAttribute(\'src\', "http://fls.doubleclick.net/activityi;src=3738527;type=ecm_n001;cat="+cat+";ord=" + axel+ "?");\n	havFrame.setAttribute(\'height\',\'1\');\n	havFrame.setAttribute(\'width\',\'1\');\n	havFrame.setAttribute(\'frameBorder\',\'0\');\n	havFrame.setAttribute(\'style\',\'display:none\');\n	document.body.appendChild(havFrame);\n}'}]},
{p:[{t:'c',c:'var pageURL = document.URL;\nif (typeof axel==\'undefined\') {var axel=Math.random()*10000000000000000;}\nvar havFrame= document.createElement(\'iframe\');\nvar cat =""\nif (pageURL == \'http://fantasy.nfl.com/\') cat="lpg_h0"\n\nif(cat){\n	havFrame.setAttribute(\'src\', "http://fls.doubleclick.net/activityi;src=3738527;type=lpg_n0;cat="+cat+";ord=" + axel+ "?");\n	havFrame.setAttribute(\'height\',\'1\');\n	havFrame.setAttribute(\'width\',\'1\');\n	havFrame.setAttribute(\'frameBorder\',\'0\');\n	havFrame.setAttribute(\'style\',\'display:none\');\n	document.body.appendChild(havFrame);\n}'}]},
{p:[{t:'c',c:'var pageURL = document.URL;\nif (typeof axel==\'undefined\') {var axel=Math.random()*10000000000000000;}\nvar havFrame= document.createElement(\'iframe\');\nvar cat =""\nif (pageURL == \'http://canada.fantasy.nfl.com/\') cat="iw1iq1fm"\nif (pageURL == \'http://www.nfl.com/\') cat="dexjcz3w"\nif (pageURL == \'http://canada.fantasy.nfl.com/registration/publicleaguejoinconfirm\') cat="odrvwtw6"\nif (pageURL == \'http://canada.fantasy.nfl.com/registration/privateleaguejoinconfirm\') cat="odrvwtw6"\nif (pageURL == \'http://canada.fantasy.nfl.com/registration/leagueDirectory?leagueType=public\') cat="odrvwtw6"\nif (pageURL == \'http://canada.fantasy.nfl.com/registration/leagueDirectory?leagueType=private\') cat="odrvwtw6"\n\n\nif(cat){\n	havFrame.setAttribute(\'src\', "http://fls.doubleclick.net/activityi;src=5670225;type=invmedia;cat="+cat+";ord=" + axel+ "?");\n	havFrame.setAttribute(\'height\',\'1\');\n	havFrame.setAttribute(\'width\',\'1\');\n	havFrame.setAttribute(\'frameBorder\',\'0\');\n	havFrame.setAttribute(\'style\',\'display:none\');\n	document.body.appendChild(havFrame);\n}'}]},
{p:[{t:'c',c:'var hostname = window.location.hostname;\nvar pathname = window.location.pathname;\n\nif (hostname === "www.nfl.com" && pathname === "/") {\n    var havFrame = document.createElement("iframe");\n\n    havFrame.setAttribute("src", "https://secure.img-cdn.mediaplex.com/0/30929/universal.html?page_name=nfl_us_homepage&NFL_US_Homepage=1&mpuid=");\n    havFrame.setAttribute("height", "1");\n    havFrame.setAttribute("width", "1");\n    havFrame.setAttribute("frameBorder", "0");\n    havFrame.setAttribute("style", "display:none");\n    document.body.appendChild(havFrame);\n}'}]}];
s_tc_prodscode.cr();