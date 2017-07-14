/*
 ### jQuery XML to JSON Plugin v1.3 - 2013-02-18 ###
 * http://www.fyneworks.com/ - diego@fyneworks.com
	* Licensed under http://en.wikipedia.org/wiki/MIT_License
 ###
 Website: http://www.fyneworks.com/jquery/xml-to-json/
*//*
 # INSPIRED BY: http://www.terracoder.com/
           AND: http://www.thomasfrank.se/xml_to_json.html
											AND: http://www.kawa.net/works/js/xml/objtree-e.html
*//*
 This simple script converts XML (document of code) into a JSON object. It is the combination of 2
 'xml to json' great parsers (see below) which allows for both 'simple' and 'extended' parsing modes.
*/
// Avoid collisions
if(window.jQuery){(function(a){a.extend({xml2json:function(g,b){if(!g){return{}}function e(k,j){if(!k){return null}var n="",m=null,q=null;var p=k.nodeType,r=h(k.localName||k.nodeName);var o=k.text||k.nodeValue||"";if(k.childNodes){if(k.childNodes.length>0){a.each(k.childNodes,function(w,v){var t=v.nodeType,u=h(v.localName||v.nodeName);var s=v.text||v.nodeValue||"";if(t==8){return}else{if(t==3||t==4||!u){if(s.match(/^\s+$/)){return}n+=s.replace(/^\s+/,"").replace(/\s+$/,"")}else{m=m||{};if(m[u]){if(!m[u].length){m[u]=d(m[u])}m[u]=d(m[u]);m[u][m[u].length]=e(v,true);m[u].length=m[u].length}else{m[u]=e(v)}}}})}}if(k.attributes){if(k.attributes.length>0){q={};m=m||{};a.each(k.attributes,function(u,t){var v=h(t.name),s=t.value;q[v]=s;if(m[v]){m[cnn]=d(m[cnn]);m[v][m[v].length]=s;m[v].length=m[v].length}else{m[v]=s}})}}if(m){m=a.extend((n!=""?new String(n):{}),m||{});n=(m.text)?([m.text||""]).concat([n]):n;if(n){m.text=n}n=""}var l=m||n;if(b){if(n){l={}}n=l.text||n||"";if(n){l.text=n}if(!j){l=d(l)}}return l}var h=function(j){return String(j||"").replace(/-/g,"_")};function i(j){var k=/^((-)?([0-9]+)(([\.\,]{0,1})([0-9]+))?$)/;return(typeof j=="number")||k.test(String((j&&typeof j=="string")?jQuery.trim(j):""))}var d=function(j){if(!a.isArray(j)){j=[j]}j.length=j.length;return j};if(typeof g=="string"){g=a.text2xml(g)}if(!g.nodeType){return}if(g.nodeType==3||g.nodeType==4){return g.nodeValue}var c=(g.nodeType==9)?g.documentElement:g;var f=e(c,true);g=null;c=null;return f},text2xml:function(b){return a.parseXML(b)}})})(jQuery)};