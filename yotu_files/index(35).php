YUI.add("facebook-comment-counts",function(Y){"use strict";Y.getFBCommentCounts=function(selector){nfl.loadFacebook(function(_r){var _commentBoxen=Y.all(selector);var _stack=[];var _map={};var _fbDomain=nfl.constants.SITE_URL;_fbDomain="http://nfl.com";_commentBoxen.each(function(_commentBox,_ind){if(_commentBox){var _fburl=_commentBox.getAttribute('data-fburl');if(_fburl&&_fburl!==''){var _uri=((_fburl.indexOf('/')===0)?_fbDomain+_fburl:_fburl);_stack.push({url:_uri,ele:_commentBox});}}});var _requestIds=[];var _onResponse=function(_r){if(_r){for(var _k in _r){var _obj=_r[_k];var _count=0;if(_obj.comments){_count=_obj.comments;}
_count=(_count<999)?String(_count):'999+';Y.Array.each(_stack,function(_sObj,_ind){if(_sObj.url===_k){_sObj.ele.setContent(_count)}});}}}
Y.Array.each(_stack,function(_item,_index){var _aInd=_requestIds.length;var _cValInd=(_aInd>0)?(_aInd-1):0;if((_item.url+','+_requestIds[_cValInd]).length>200){_requestIds[_aInd]=_item.url;}else{_requestIds[_cValInd]=((typeof _requestIds[_cValInd]!=='undefined')?_requestIds[_cValInd]+',':'')+_item.url;}});Y.Array.each(_requestIds,function(_ids,_index){Y.jsonp('http://graph.facebook.com/?callback={callback}&ids='+_ids,_onResponse);});});}
Y.getFBLikedCounts=function(selector){nfl.loadFacebook(function(_r){var _commentBoxen=Y.all(selector);var _stack=[];var _map={};var _fbDomain=nfl.constants.SITE_URL;_fbDomain="http://nfl.com";_commentBoxen.each(function(_commentBox,_ind){if(_commentBox){var _fburl=_commentBox.getAttribute('data-fburl');if(_fburl&&_fburl!==''){var _uri=((_fburl.indexOf('/')===0)?_fbDomain+_fburl:_fburl);_stack.push({url:_uri,ele:_commentBox});}}});var _requestIds=[];var _onResponse=function(_r){if(_r){for(var _k in _r){var _obj=_r[_k];var _count=0;if(_obj.likes){_count=_obj.likes;}else{if(_obj.shares){_count=_obj.shares;}else{if(_obj.recommends){_count=_obj.recommends;}}}
_count=(_count<999)?String(_count):'999+';Y.Array.each(_stack,function(_sObj,_ind){if(_sObj.url===_k){_sObj.ele.setContent(_count)}});}}}
Y.Array.each(_stack,function(_item,_index){var _aInd=_requestIds.length;var _cValInd=(_aInd>0)?(_aInd-1):0;if((_item.url+','+_requestIds[_cValInd]).length>200){_requestIds[_aInd]=_item.url;}else{_requestIds[_cValInd]=((typeof _requestIds[_cValInd]!=='undefined')?_requestIds[_cValInd]+',':'')+_item.url;}});Y.Array.each(_requestIds,function(_ids,_index){Y.jsonp('http://graph.facebook.com/?callback={callback}&ids='+_ids,_onResponse);});});}},"3.4.1",{requires:["node","array-extras","jsonp","jsonp-url"]});