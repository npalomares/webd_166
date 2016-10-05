YUI.add('date',function(Y){"use strict";var DAY_NAMES=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],REG_EXP=/(\d\d\d\d)(?:\-?(\d\d)(?:\-?(\d\d)(?:[T ](\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(?:Z|(?:([\-+])(\d+)(?::?(\d\d))?)?)?)?)?)?/;function zeroPad(oInt){return(oInt<10?"0":"")+oInt;}
function createTZDate(aDate,offset){var date=new Date(),local=date.getTimezoneOffset();date.setFullYear(aDate[1]);if(aDate[2]){date.setMonth(aDate[2]-1);}
if(aDate[3]){date.setDate(aDate[3]);}
if(aDate[4]){date.setHours(aDate[4]);}
if(aDate[5]){date.setMinutes(aDate[5]);}
if(aDate[6]){date.setSeconds(aDate[6]);}
if(aDate[7]){date.setMilliseconds(Number("0."+aDate[7])*1000);}
return offset===local?date:new Date(date.getTime()-((offset-local)*60*1000));}
function createUTCDate(aDate){var date=new Date();date.setUTCFullYear(aDate[1]);if(aDate[2]){date.setUTCMonth(aDate[2]-1);}
if(aDate[3]){date.setUTCDate(aDate[3]);}
if(aDate[4]){date.setUTCHours(aDate[4]);}
if(aDate[5]){date.setUTCMinutes(aDate[5]);}
if(aDate[6]){date.setUTCSeconds(aDate[6]);}
if(aDate[7]){date.setUTCMilliseconds(Number("0."+aDate[7])*1000);}
return date;}
Y.Date={parse:function(sDate){var aDate,d;d=new Date(sDate);if(isNaN(d)){aDate=String(sDate).split(' ');d=new Date(Date.parse(aDate[1]+" "+aDate[2]+", "+aDate[5]+" "+aDate[3]+" UTC"));}
return d;},distanceOfTimeInWords:function(from_time,to_time,include_s){var include_seconds,distance_in_minutes,distance_in_seconds;include_seconds=include_s||false;distance_in_minutes=Math.round(Math.abs(to_time-from_time)/60000);distance_in_seconds=Math.round(Math.abs(to_time-from_time)/1000);if(distance_in_minutes<2){if(include_seconds){if(distance_in_seconds<5){return'less than 5 seconds';}
if(distance_in_seconds<10){return'less than 10 seconds';}
if(distance_in_seconds<20){return'less than 20 seconds';}
if(distance_in_seconds<40){return'half a minute';}
if(distance_in_seconds<59){return'almost a minute';}
return'1 minute';}
return(distance_in_minutes===0)?'less than a minute':'1 minute';}
if(distance_in_minutes<45){return distance_in_minutes+' minutes';}
if(distance_in_minutes<89){return'1 hour';}
if(distance_in_minutes<1439){return Math.round(distance_in_minutes/60)+' hours';}
if(distance_in_minutes<2879){return'1 day';}
if(distance_in_minutes<43199){return Math.round(distance_in_minutes/1440)+' days';}
if(distance_in_minutes<86399){return'1 month';}
if(distance_in_minutes<525599){return Math.round(distance_in_minutes/43200)+' months';}
if(distance_in_minutes<1051199){return'1 year';}
return'over '+Math.round(distance_in_minutes/525600)+' years';},getAPStyleMonth:function(date){switch(date.getMonth()){case 0:return'Jan.';case 1:return'Feb.';case 2:return'March';case 3:return'April';case 4:return'May';case 5:return'June';case 6:return'July';case 7:return'Aug.';case 8:return'Sept.';case 9:return'Oct.';case 10:return'Nov.';case 11:return'Dec.';}},getAPStyleTime:function(date,includeSeconds){var h,m,a,s='';h=date.getHours();a=(h>11)?' p.m.':' a.m.';if(h===0&&!includeSeconds){return'midnight';}
else if(h===0){h=12;}
else if(h===12&&!includeSeconds){return'noon';}
else if(h>12){h-=12;}
m=date.getMinutes();m=(m===0&&!includeSeconds)?'':(m<10)?':0'+m:':'+m;if(includeSeconds){s=date.getSeconds();s=(s<10)?':0'+s:':'+s;}
return h+m+s+a;},toET:function(date){return new Date(date.getTime()+date.getTimezoneOffset()*60000+nfl.constants.ET_OFFSET);},toAPStyle:function(date,includeTime,includeSeconds){var etDate=Y.Date.toET(date);return Y.Date.getAPStyleMonth(etDate)+' '+etDate.getDate()+', '+etDate.getFullYear()+
(includeTime?' at '+Y.Date.getAPStyleTime(etDate,includeSeconds):'');},getDayName:function(date){return DAY_NAMES[date.getDay()];},timeAgoInWords:function(date,includeSeconds){var now,direction;now=new Date();direction=(now-date>0)?' ago':' from now';return Y.Date.distanceOfTimeInWords(date,now,includeSeconds)+direction;},parseISO8601:function(string){var d=string.match(REG_EXP),offset=0;if(d[8]){offset=Number(d[9])*60;}
if(d[10]){offset+=Number(d[10]);}
if(d[8]==="-"){offset*=-1;}
return offset?createTZDate(d,offset):createUTCDate(d);},toISO8601:function(date,oConfig){var result="",config,utc,z;config=Y.merge({year:true,date:true,time:true,seconds:true,milliseconds:true,utc:false,zone:true},oConfig);utc=config.utc;if(config.year){result+=(utc?date.getUTCFullYear():date.getFullYear());}
if(config.year&&config.date){result+='-';}
if(config.date){result+=zeroPad((utc?date.getUTCMonth():date.getMonth())+1)+'-'+zeroPad(utc?date.getUTCDate():date.getDate());}
if(config.date&&config.time){result+="T";}
if(config.time){result+=zeroPad((utc?date.getUTCHours():date.getHours()))+':'+zeroPad(utc?date.getUTCMinutes():date.getMinutes());if(config.seconds){result+=':'+zeroPad(utc?date.getUTCSeconds():date.getSeconds());if(config.milliseconds){result+='.'+zeroPad(utc?date.getUTCMilliseconds():date.getMilliseconds());}}
if(config.zone&&utc){result+='+0:00';}
else if(config.zone){z=date.getTimezoneOffset()/60;result+=((z>=0)?'+':'-')+zeroPad(Math.floor(z))+':'+zeroPad((z-Math.floor(z))*100/60);}}
return result;}};},"3.4.1");;YUI.add('twitter-linkify',function(Y){var GRUBERS_URL_RE=/\b((?:[a-z][\w\-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i,HAS_PROTOCOL=/^[a-z][\w\-]+:/,MENTION_FIND=/@([^\W]*)/g,MENTION_REPLACE='<a class="mention" href="http://twitter.com/$1" target="_blank">@$1</a>',TAG_FIND=/#([^\W]*)/g,TAG_REPLACE='<a class="tag" href="http://twitter.com/#!/search?q=%23$1" target="_blank">#$1</a>';function escapeHTML(text){return text.replace(/</g,'&lt;');}
function linkifyWord(word,index,array){var m,result,url,text;if(MENTION_FIND.test(word)){result=word.replace(MENTION_FIND,MENTION_REPLACE);}
else if(TAG_FIND.test(word)){result=word.replace(TAG_FIND,TAG_REPLACE);}
else{result=escapeHTML(word);m=word.match(GRUBERS_URL_RE);result=escapeHTML(word);if(m){text=escapeHTML(m[1]);url=HAS_PROTOCOL.test(text)?text:'http://'+text;result=result.replace(text,'<a href="'+url+'" target="_blank">'+text+'</a>');}}
return result;}
function linkify(text){var aText=String(text).split(/\s+/),i,l;for(i=0,l=aText.length;i<l;i+=1){aText[i]=linkifyWord(aText[i]);}
return'<span class="twitter-linkify">'+aText.join(' ')+'</span>';}
Y.namespace("Twitter").linkify=linkify;});;YUI.add('datasource-randomize',function(Y){function Randomizable(){this._callback={};}
Randomizable.prototype={}
Randomizable.prototype._osetInterval=Y.DataSource.Local.prototype.setInterval;Randomizable.prototype.setInterval=function(msec,callback){if(typeof callback!=='undefined'){this._callback=callback;}
var fn=Y.bind(function(){var _s=this.get('source');if(_s.indexOf('?')>-1&&_s.indexOf('random=')>-1){var _sp=_s.indexOf('random='),_ep=_s.length;if(_s.substring(_sp).indexOf('&')>-1||_s.substring(_sp).indexOf('&amp;')>-1){_ep=((_s.substring(_sp).indexOf('&amp;')>-1)?(_s.substring(_sp).indexOf('&amp;')+_sp):(_s.substring(_sp).indexOf('&')+_sp))}
_ep=(_s.substring(0,_sp).lastIndexOf('&')==_s.substring(0,_sp).length-1&&_s.substring(_ep).indexOf('&')===0)?_ep+1:_ep;this.set('source',(_s.substring(0,_sp)+_s.substring(_ep)+(((_s.substring(0,_sp)+_s.substring(_ep)).lastIndexOf('&')===(_s.substring(0,_sp)+_s.substring(_ep)).length-1)||(_s.substring(0,_sp)+_s.substring(_ep)).length==0?'':'&')));}
var _cr=(_s.indexOf('?')<0)?'?':'';_cr+=('random='+(new Date().getTime()));this._callback.request=_cr;},this);this.on('response',fn);fn();return this._osetInterval(msec,this._callback);};Y.augment(Y.DataSource.Local,Randomizable,true);},"3.1.1",{requires:['oop','datasource','datasource-local','datasource-polling']});;YUI.add('base-generate',function(Y){Y.Base.generate=function(su,st,im){var name='generated-class';if(st&&st.NAME){name=st.NAME;delete st.NAME;}
console.error('Y.Base.generate is deprecated. Use Y.Base.create for '+name+' instead.');return Y.Base.create(name,su,[],im,st);};},"3.3.0",{requires:['base-build']});;YUI.add('twitter-feed',function(Y){var Constants=nfl.constants,autolink=Y.Twitter.linkify;Y.namespace('Twitter').Feed=Y.Base.create("nfl-twitter-feed",Y.Widget,[],{initializer:function(config){if(!Y.Lang.isNull(this.get('feedURL'))){this.set('feed',this.get('feedURL'));}else{this.set('feed','/static/content/twitter/'+config.feedId+'.json');}
this.set('datasource',(new Y.DataSource.IO({source:this.get('feed')})));this._request={callback:{success:Y.bind(this.onData,this),failure:function(){console.log('tFeed getData error!');}}};if(typeof config.limit!=='undefined'){this.set('limit',config.limit);}
if(typeof config.onRendered!=='undefined'){this.on('writtenChange',config.onRendered);}
this.set('fetchOnInit',((typeof config.auto!=='undefined'&&config.auto!==null)?config.auto:true));if(this.get('fetchOnInit')===true){this.getData();};if(config.interval>0){this.set('interval',config.interval);this.get('datasource').setInterval(this.get('interval'),this._request);}
if(!config.contentTarget){this.set('contentTarget',Y.one('#'+this.get('contentBox').get('id')+' ul'));}
if(!config.template){var _t=Y.one('#'+this.get('contentBox').get('id')+' ul').get('innerHTML').replace(/data-/g,'');this.set('template',_t);}},getData:function(){this.get('datasource').sendRequest(this._request);},onData:function(r){var data;try{data=r.data.response||r.data.responseText;if(!Y.Lang.isNull(this.get('feedURL'))){if(data.search('"statuses"')==-1){data=data.replace('statuses','"statuses"');}}
data=Y.JSON.parse(data);}
catch(e){data=this.get('data');}
if(!Y.Lang.isObject(data)||!data.statuses)return;this.set('data',data);this.renderUI();this.set('written',true);},renderUI:function(){var data,html,template;data=this.get('data');if(this.get('data')===null){console.warn('cannot render without data response. will render on response.');return}
html='';template=this.get('template');Y.Array.each(data.statuses,function(i,ind){if(this.get('limit')<0||ind<this.get('limit')){i.from_user=i.user.screen_name;i.profile_image_url=i.user.profile_image_url;i.created_distance=Y.Date.distanceOfTimeInWords(Date.parse(i.created_at),(new Date()));i.text=autolink(i.text);html+=Y.substitute(template,i);}},this);this.get('contentTarget').setContent(html);},destructor:function(){this.get('datasource').destroy();}},{NAME:'nfl-twitter-feed',NS:'twitter',ATTRS:{limit:{value:-1},feed:{value:null},template:{value:null},datasource:{value:null},interval:{value:-1},data:{value:null},fetchOnInit:{value:true},contentTarget:{value:null},written:{value:false},feedURL:{value:null}}});},"3.1.1",{requires:['widget','event','event-custom','twitter-linkify','json','substitute','io','datasource-io','datasource-randomize','datasource-polling','date']});