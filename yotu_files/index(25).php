YUI.add("skip-links",function(Y){"use strict";Y.SkipLinks=Y.Base.create("skip-links",Y.Widget,[],{CONTENT_TEMPLATE:null,initializer:function(config){if(!config.render){this.render();}},renderUI:function(){var links=this.get("links").map(function(link){return'<a href="#'+link.id+'">'+link.label+'</a>';});this.get("contentBox").append(links.join(''));},bindUI:function(){this.get("contentBox").delegate("click",function(e){var href=e.currentTarget.get("href"),nodeToSkip=Y.one(href.substr(href.indexOf("#")));if(nodeToSkip){var firstLink=nodeToSkip.one("a");if(firstLink){setTimeout(function(){firstLink.focus();},0);}}},"a");}},{ATTRS:{links:{value:[]}}});},"3.10.3",{requires:["base-build","widget-base","array-extras","node-event-delegate"],skinnable:true,group:"nfl"});