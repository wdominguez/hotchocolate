(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4M6O":function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b");var i=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var i=window.document.createElement("script");return i.async=!0,i.src=e,i.id=t,n.appendChild(i),i},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var i;return function(){var o=this,a=arguments,r=function(){i=null,n||e.apply(o,a)},s=n&&!i;window.clearTimeout(i),i=setTimeout(r,t),s&&e.apply(o,a)}},t.isReactElement=a,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),i=Array.isArray(n),o=0;for(n=i?n:n[Symbol.iterator]();;){var r;if(i){if(o>=n.length)break;r=n[o++]}else{if((o=n.next()).done)break;r=o.value}var s=r;if(e[s]!==t[s]&&!a(e[s]))return!0}return!1};var o=i(n("q1tI"));function a(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},ORnI:function(e,t,n){"use strict";var i=n("TqRt");t.__esModule=!0,t.default=void 0;var o=i(n("VUT9"));t.Disqus=o.default;var a=i(n("qASQ"));t.CommentCount=a.default;var r=o.default;t.default=r},VUT9:function(e,t,n){"use strict";var i=n("TqRt");t.__esModule=!0,t.default=void 0;var o=i(n("pVnL")),a=i(n("8OQS")),r=i(n("VbXa")),s=i(n("q1tI")),l=i(n("17x9")),d=n("4M6O"),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="chillicream",t.config?n.config=t.config:n.config={identifier:t.identifier,url:t.url,title:t.title},n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url},(0,d.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,d.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},n.render=function(){var e=this.props,t=(e.config,(0,a.default)(e,["config"]));return s.default.createElement("div",(0,o.default)({id:"disqus_thread"},t,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},t}(s.default.Component);t.default=u,u.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),identifier:l.default.string,title:l.default.string,url:l.default.string}},qASQ:function(e,t,n){"use strict";var i=n("TqRt");t.__esModule=!0,t.default=void 0;var o=i(n("pVnL")),a=i(n("8OQS")),r=i(n("VbXa")),s=i(n("q1tI")),l=i(n("17x9")),d=n("4M6O"),u=(0,d.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="chillicream",n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,d.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,d.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,i=(0,a.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},i,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),n)},t}(s.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},vs3a:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),o=n.n(i),a=n("BBkP"),r=n("CMDK"),s=n("ORnI"),l=n("vOnD"),d=function(e){var t=e.author,n=e.baseUrl,i=e.date,a=e.htmlContent,r=e.path,s=e.title,l={url:n+r,identifier:r,title:s};return o.a.createElement(u,null,o.a.createElement(c,null,s),o.a.createElement(f,null,"Written by ",o.a.createElement("em",null,t),", published on ",o.a.createElement("em",null,i)),o.a.createElement(p,{dangerouslySetInnerHTML:{__html:a}}),o.a.createElement(m,{config:l}))},u=l.b.article.withConfig({displayName:"blog-article__Container",componentId:"sc-7c8ya8-0"})(["display:flex;flex:0 0 auto;flex-direction:column;padding-top:20px;width:100%;max-width:1100px;"]),c=l.b.h1.withConfig({displayName:"blog-article__Title",componentId:"sc-7c8ya8-1"})(["margin:0 20px;font-size:2em;"]),f=l.b.div.withConfig({displayName:"blog-article__Subtitle",componentId:"sc-7c8ya8-2"})(["margin:0 20px 20px;font-size:0.875em;color:#bbb;"]),p=l.b.div.withConfig({displayName:"blog-article__Content",componentId:"sc-7c8ya8-3"})(["margin:0 20px 40px;> p{margin-bottom:1em;line-height:1.5em;}> h2{font-size:1.667em;line-height:2em;}"]),m=Object(l.b)(s.Disqus).withConfig({displayName:"blog-article__DisqusWrapper",componentId:"sc-7c8ya8-4"})(["margin:0 20px;"]);n.d(t,"pageQuery",(function(){return h}));t.default=function(e){var t=e.data,n=t.markdownRemark,i=t.site,s=n.frontmatter,l=n.html;return o.a.createElement(r.a,null,o.a.createElement(a.a,{title:"Home"}),o.a.createElement(d,{author:s.author,baseUrl:i.siteMetadata.baseUrl,date:s.date,htmlContent:l,path:s.path,title:s.title}))};var h="3551620210"}}]);
//# sourceMappingURL=component---src-templates-blog-article-tsx-f7c8000b758d3796865a.js.map