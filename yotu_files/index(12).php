YUI.add('nfl-omniture',function(Y){var GlobalEnv=YUI.namespace('Env.NFLOmnitureTracking'),CLICK='click',body,OmnitureTracking,YObject=Y.Object,YLang=Y.Lang,CLICK_NAME_ATTRIBUTE='data-clickname';OmnitureTracking=Y.Base.create('nfl-omniture',Y.Base,[],{linkTrackVars:function(name,obj){OmnitureTracking.linkTrackVars(name,obj);}},{CLICK_NAME_ATTRIBUTE:CLICK_NAME_ATTRIBUTE,linkTrackVars:function(n,o){console.log('linkTrackVars()',n,o);var keys=[],values=[],name=n,obj=o,ltv=s_analytics.linkTrackVars;if(YLang.isObject(n)){obj=name;name='';}
if(s_analytics){YObject.each(obj,function(value,key){s_analytics[key]=value;keys.push(key);values.push(value);});s_analytics.linkTrackVars=keys.join(',');s_analytics.tl(true,'o',name||values.join(','));s_analytics.linkTrackVars=ltv;YObject.each(obj,function(value,key){s_analytics[key]='';});}},trackLinkVars:function(value){this.trackLink(true,'o',value,{prop35:value});},trackLink:function(d,t,n,o){console.log('trackLink()',o);if(Y.Lang.isObject(o)){o.linkTrackVars=Y.Object.keys(o).join(',');if(o.events){o.linkTrackEvents=o.events;}}
if(s_analytics){s_analytics.tl(d,t,n,o);}},trackPageLoad:function(o){console.log('trackPageLoad()',o);if(Y.Lang.isObject(o)){o.linkTrackVars=Y.Object.keys(o).join(',');if(o.events){o.linkTrackEvents=o.events;}}
if(s_analytics){s_analytics.t(o);}},getS:function(){return Y.config.win.s||s_analytics;},getInstance:function(){Y.error('Y.NFL.OmnitureTracking is now a static class, no need to call getInstance()');return new OmnitureTracking();}});if(!GlobalEnv.initialized){GlobalEnv.initialized=true;body=Y.one(Y.config.doc.body);GlobalEnv.clickNameHandler=Y.delegate(CLICK,function(event){if(event.button!==1){return;}
OmnitureTracking.linkTrackVars({prop35:event.currentTarget.getAttribute(CLICK_NAME_ATTRIBUTE)});event._nflOmnitureTracked=true;},body,'['+CLICK_NAME_ATTRIBUTE+']');GlobalEnv.externalClickHandler=Y.delegate(CLICK,function(event){var link=event.currentTarget,m,attrs={},keys=["pos","id","module"];if(event._nflOmnitureTracked||event.button!==1||event._event.returnValue===false){return;}
m=link.get("href").match(/(?:\?|&)module=([^#&]+)/);if(m){attrs.module=m[1];m=link.getAttribute("name").match(/&l(id|pos)=([^&]+)&l(id|pos)=([^&]+)/);if(m){attrs[m[1]]=m[2];attrs[m[3]]=m[4];}}else{Y.Array.each(keys,function(key){var attr="data-tracking-"+key,el=link.ancestor("["+attr+"]",true);if(el){attrs[key]=el.getAttribute(attr);}});}
if(Y.Object.keys(attrs).length===keys.length){s_analytics.c_w('SC_NFLLINKS',[attrs.id,attrs.pos,attrs.module].join("|"));}},body,'a[href]');Y.on('unload',function(){GlobalEnv.clickNameHandler.detach();GlobalEnv.externalClickHandler.detach();});}
Y.namespace('NFL').OmnitureTracking=OmnitureTracking;},"3.3.0",{requires:['base','node','event-delegate']});;YUI.add('nfl-news-articletools',function(Y){var yBaseCreate=Y.Base.create,YNFLNews=Y.namespace('NFL.News');YNFLNews.AuthorCard=(function(){return yBaseCreate('nfl-news-author-card',Y.Base,[],{initializer:function(){this.set('handles',Y.all('.author-headshot'));this.set('header',Y.one('#article-hdr-meta'));this.set('card',Y.one('.author-card'));this.set('wrapper',this.get('card').ancestor('.author-card-wrapper'));this.reAnchor();this.get('handles').on('click',this.toggle,this);},reAnchor:function(){var topPos=Y.one('.article-decorator').getXY();var headerPos=this.get('header').getXY();var cardMargin=parseInt(this.get('card').getStyle('paddingTop'));var newY=(headerPos[1]-topPos[1]-cardMargin);this.get('card').setStyle('top',newY);},toggle:function(event){this.get('header').toggleClass('ac-open');this.get('card').toggleClass('on');event.preventDefault();}},{handles:{value:null},card:{value:null},wrapper:{value:null},header:{value:null}});}());YNFLNews.EmailCard=(function(){return yBaseCreate('nfl-news-email-card',Y.Base,[],{initializer:function(){this.set('card',Y.one('.email-card'));this.set('handle',Y.one('.email-card .close-button'));this.set('wrapper',this.get('card').ancestor('.email-card-wrapper'));this.set('form',Y.one('.email-card form'));this.get('handle').on('click',this.toggle,this);this.get('form').on('submit',this.sendRequest,this);},toggle:function(event){this.get('card').toggleClass('on');},onSent:function(id,o,args){console.info('EmailCard.onSent',id);this.get('card').removeClass('on');},sendRequest:function(event){Y.on('io:complete',this.onSent,this);var form=this.get('form');try{var fromName=Y.one('form #fromName');var fromAddr=Y.one('form #fromAddr');var _newName=fromAddr.get('value').split('@')[0];fromName.set('value',_newName);}catch(e){console.error('could not set from name',e);}
var request=Y.io(form.get('action'),{method:'POST',form:{id:'emailMessage'}});try{event.preventDefault();}catch(e){console.error('error preventing default action',e);throw e;}
console.log('sending email form..',request);}},{card:{value:null},wrapper:{value:null},handle:{value:null},form:{value:null}});}());YNFLNews.RelatedLinkTrack=yBaseCreate('nfl-news-related-link-track',Y.Base,[],{initializer:function(config){this._type=config.type||'latest';this._node=Y.one(config.node);this.bindUI();},bindUI:function(){if(this._node){this._node.delegate('click',Y.bind(function(e){var articleId=e.currentTarget.getData('id');if(articleId){Y.NFL.OmnitureTracking.trackLink(true,'o','News Module Click',{eVar16:[this._type,'news click'].join(' '),eVar17:'news',eVar18:articleId});}},this),'a');}}});},"3.1.1",{requires:["base","io-form","node-event-delegate","nfl-omniture"]});;YUI.add("nfl-video-transition",function(Y){var NFLVideoPlayer=Y.NFL.Video.Player.prototype;function warn(method,message){console.warn("[nfl-video-transition] deprecated method: "+method+". "+message);}
Y.mix(NFLVideoPlayer,{_displacedInitializer:NFLVideoPlayer.initializer,initializer:function(config){var newConfig=config.configURL?config:this._massageLegacyValues(config);this._displacedInitializer(newConfig);this.addAttr("player",{getter:"_getPlayer",readOnly:true});},_legacy_loadVideo:function(id,autoplay){warn("loadVideo","Use loadContentId method on parent instead.");return this.loadContentId(id,autoplay);},_legacy_loadVideoFromJSON:function(path,autoplay){warn("loadVideoFromJSON","Use loadJSON method on parent instead.");return this.loadJSON(path,autoplay);},_legacy_addNextVideo:function(args){warn("addNextVideo","Use nextVideo attribute on parent instead.");console.log("args: ",args);},_legacy_setCountdownEnabled:function(isContinuous){warn("setCountdownEnabled","Use continuous attribute on parent instead.");console.log(arguments);this.set("continuous",isContinuous);},_legacy_playVideo:function(){warn("playVideo","Use play method on parent instead.");this.play();},_legacy_pauseVideo:function(){warn("pauseVideo","Use play method on parent instead.");this.pause();},_getPlayer:function(){var player=this.legacyPlayerAttr;if(!player){player=this.legacyPlayerAttr={callSWF:Y.bind("callSWF",this)};}
return player;},instance:function(){var self=this,instance=this.legacyInstance;if(!instance){instance=this.legacyInstance={};Y.Array.each(["loadVideo","loadVideoFromJSON","addNextVideo","setCountdownEnabled","playVideo","pauseVideo"],function(method){instance[method]=Y.bind("_legacy_"+method,self);});}
return instance;},callSWF:function(name,args){var fn=this["_legacy_"+name];if("function"===typeof fn){return fn.apply(this,args);}
warn("callSWF","Invalid method: "+name);},_massageLegacyValues:function(config){var attrs={ads:{type:"vast",setting:Number(config.adSetting||0),ratio:Number(config.adRatio||1),flashAdTag:config.dartURL||"",html5AdTag:config.dartURL||""},configURL:nfl.SHARED_VIDEO_CONFIG};if(config.size&&!(config.width&&config.height)){switch(config.size){case"detail":attrs.width=768;attrs.height=432;break;case'large':attrs.width=615;attrs.height=346;break;case'article':case'event':case'closeable':attrs.width=640;attrs.height=360;break;default:attrs.width=384;attrs.height=216;}}
this.setAttrs(attrs);Y.mix(config,attrs);return config;}},true);},"3.5.1",{condition:{trigger:"nfl-video",when:"after"}});