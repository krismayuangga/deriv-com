(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"09yf":function(e,t,a){e.exports=a.p+"static/fabio-41e70d1d03bd39706a956dbd6f7b69ac.png"},AW5X:function(e,t,a){e.exports=a.p+"static/vipul-c6f4d7f2109569e29d80dba4f91522b7.png"},EgZW:function(e,t,a){e.exports=a.p+"static/manikandan-9926798ec8567e0856781b5d95a2ed39.png"},Q93q:function(e,t,a){e.exports=a.p+"static/paul-mugenda-6da80f047688a68774d39daa9ed25799.png"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("zLVn"),l=a("wx14"),o=a("JX7q"),c=a("dI71"),s=a("TOwV"),m=a("2mql"),d=a.n(m);function u(e,t){if(!e){var a=new Error("loadable: "+t);throw a.framesToPop=1,a.name="Invariant Violation",a}}var p=r.a.createContext();var h={initialChunks:{}};var f=function(e){return e};function g(e){var t=e.defaultResolveComponent,a=void 0===t?f:t,n=e.render,m=e.onLoad;function g(e,t){void 0===t&&(t={});var f=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),g={};function y(e){return t.cacheKey?t.cacheKey(e):f.resolve?f.resolve(e):null}function b(e,n,r){var i=t.resolveComponent?t.resolveComponent(e,n):a(e);if(t.resolveComponent&&!Object(s.isValidElementType)(i))throw new Error("resolveComponent returned something that is not a React component!");return d()(r,i,{preload:!0}),i}var _,w=function(e){function a(a){var n;return(n=e.call(this,a)||this).state={result:null,error:null,loading:!0,cacheKey:y(a)},n.promise=null,u(!a.__chunkExtractor||f.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),a.__chunkExtractor?(!1===t.ssr||(f.requireAsync(a).catch((function(){})),n.loadSync(),a.__chunkExtractor.addChunk(f.chunkName(a))),Object(o.a)(n)):(!1!==t.ssr&&(f.isReady&&f.isReady(a)||f.chunkName&&h.initialChunks[f.chunkName(a)])&&n.loadSync(),n)}Object(c.a)(a,e),a.getDerivedStateFromProps=function(e,t){var a=y(e);return Object(l.a)({},t,{cacheKey:a,loading:t.loading||t.cacheKey!==a})};var r=a.prototype;return r.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},r.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},r.triggerOnLoad=function(){var e=this;m&&setTimeout((function(){m(e.state.result,e.props)}))},r.loadSync=function(){if(this.state.loading)try{var e=b(f.requireSync(this.props),this.props,x);this.state.result=e,this.state.loading=!1}catch(t){this.state.error=t}},r.getCacheKey=function(){return y(this.props)||JSON.stringify(this.props)},r.getCache=function(){return g[this.getCacheKey()]},r.setCache=function(e){g[this.getCacheKey()]=e},r.loadAsync=function(){var e=this;if(!this.promise){var a=this.props,n=(a.__chunkExtractor,a.forwardedRef,Object(i.a)(a,["__chunkExtractor","forwardedRef"]));this.promise=f.requireAsync(n).then((function(a){var n=b(a,e.props,x);t.suspense&&e.setCache(n),e.safeSetState({result:b(a,e.props,x),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},r.render=function(){var e=this.props,a=e.forwardedRef,r=e.fallback,o=(e.__chunkExtractor,Object(i.a)(e,["forwardedRef","fallback","__chunkExtractor"])),c=this.state,s=c.error,m=c.loading,d=c.result;if(t.suspense){var u=this.getCache();if(!u)throw this.loadAsync();return n({loading:!1,fallback:null,result:u,options:t,props:Object(l.a)({},o,{ref:a})})}if(s)throw s;var p=r||t.fallback||null;return m?p:n({loading:m,fallback:p,result:d,options:t,props:Object(l.a)({},o,{ref:a})})},a}(r.a.Component),E=(_=w,function(e){return r.a.createElement(p.Consumer,null,(function(t){return r.a.createElement(_,Object.assign({__chunkExtractor:t},e))}))}),x=r.a.forwardRef((function(e,t){return r.a.createElement(E,Object.assign({forwardedRef:t},e))}));return x.preload=function(e){f.requireAsync(e)},x.load=function(e){return f.requireAsync(e)},x}return{loadable:g,lazy:function(e,t){return g(e,Object(l.a)({},t,{suspense:!0}))}}}var y=g({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,a=e.props;return r.a.createElement(t,a)}}),b=y.loadable,_=y.lazy,w=g({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,a=e.loading,n=e.props;return!a&&n.children?n.children(t):null}}),E=w.loadable,x=w.lazy;var v=b;v.lib=E,_.lib=x;var k=v,j=a("vOnD"),C=a("O4Du"),O=a("Z/CU"),z=a("g2Kc"),I=a("aC/h"),T=a("FKs9"),S=a("H6g6"),N=a("ftKm"),L=a("7nH4"),q=Object(j.c)(z.i).withConfig({displayName:"_markets__StyledSection",componentId:"sc-12b7xg0-0"})(["background-color:rgba(242,243,244,0.3);box-shadow:inset 0 1px 0 0 var(--color-grey-8);@media ","{padding:5rem 0;}"],I.a.tabletL),M=Object(j.c)(z.e).withConfig({displayName:"_markets__MarketWrapper",componentId:"sc-12b7xg0-1"})(["margin-top:4rem;@media ","{article:last-child{margin-bottom:0;}}"],I.a.tabletL),D=j.c.article.withConfig({displayName:"_markets__MarketCard",componentId:"sc-12b7xg0-2"})(["display:flex;margin-bottom:",";margin-right:",";svg{margin-right:2rem;}div{max-width:40rem;","{padding-top:8px;}}@media (max-width:1210px){margin-right:0;}@media ","{flex-direction:column;svg{width:6rem;height:6rem;margin-bottom:1rem;}}@media (max-width:860px){margin-bottom:4rem;}"],(function(e){return e.mb||""}),(function(e){return e.mr||""}),C.s,I.a.tabletL),F=function(){return r.a.createElement(q,null,r.a.createElement(z.b,{direction:"column"},r.a.createElement(C.i,{align:"center",as:"h2"},Object(O.g)("Markets")),r.a.createElement(M,{wrap:"wrap"},r.a.createElement(D,{mr:"2.4rem",mb:"4rem"},r.a.createElement(T.a,{dynamic_id:"home_page_market_forex"}),r.a.createElement("div",null,r.a.createElement(C.i,{as:"h4"},Object(O.g)("Forex")),r.a.createElement(C.s,null,Object(O.g)("Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day.")))),r.a.createElement(D,{mb:"4rem"},r.a.createElement(S.a,{dynamic_id:"home_page_market_stock"}),r.a.createElement("div",null,r.a.createElement(C.i,{as:"h4"},Object(O.g)("Stock indices")),r.a.createElement(C.s,null,Object(O.g)("Predict broader market trends and diversify your risk with indices that measure the overall performance of a market.")))),r.a.createElement(D,{mr:"2.4rem"},r.a.createElement(N.a,{dynamic_id:"home_page_market_commodities"}),r.a.createElement("div",null,r.a.createElement(C.i,{as:"h4"},Object(O.g)("Commodities")),r.a.createElement(C.s,null,Object(O.g)("Trade natural resources that are central to the world’s economy and profit from the opportunities created by volatile markets.")))),r.a.createElement(D,null,r.a.createElement(L.a,{dynamic_id:"home_page_market_synthetic"}),r.a.createElement("div",null,r.a.createElement(C.i,{as:"h4"},Object(O.g)("Synthetic indices")),r.a.createElement(C.s,null,Object(O.g)("Enjoy synthetic markets that emulate the excitement of real-world markets without unpredictable real-world disruptions.")))))))},R=a("YVwf"),W=a.n(R),B=a("qhky"),V=a("Ma3E"),K=a.n(V),A=a("09yf"),P=a.n(A),H=a("ptFf"),G=a.n(H),J=a("mKA3"),Q=a.n(J),X=a("EgZW"),Y=a.n(X),U=a("pz46"),Z=a.n(U),$=a("Q93q"),ee=a.n($),te=a("ht+H"),ae=a.n(te),ne=a("mn5C"),re=a.n(ne),ie=a("AW5X"),le=a.n(ie),oe=Object(j.c)(z.i).withConfig({displayName:"_what-our-clients-say__StyledSection",componentId:"sc-19sxuf1-0"})(["@media ","{height:unset;padding:5rem 0;}"],I.a.tabletL),ce=Object(j.c)(C.i).withConfig({displayName:"_what-our-clients-say__StyledHeader",componentId:"sc-19sxuf1-1"})(["@media ","{font-size:4.5rem;}"],I.a.tabletL),se=Object(j.c)(K.a).withConfig({displayName:"_what-our-clients-say__StyledChevron",componentId:"sc-19sxuf1-2"})(["g{g{fill:var(--color-black);}}"]),me=Object(j.c)(se).withConfig({displayName:"_what-our-clients-say__ChevronRight",componentId:"sc-19sxuf1-3"})(["transform:rotate(180deg);"]),de=se,ue=j.c.article.withConfig({displayName:"_what-our-clients-say__ClientCard",componentId:"sc-19sxuf1-4"})(["width:58.2rem;padding-top:5.2rem;position:relative;overflow:hidden;@media ","{padding:4rem;}"],I.a.tabletL),pe=Object(j.c)(C.s).withConfig({displayName:"_what-our-clients-say__QuoteText",componentId:"sc-19sxuf1-5"})(["text-align:left;padding-bottom:3.2rem;z-index:10;position:relative;&::after{content:'“';position:absolute;font-size:24rem;z-index:-1;left:-1rem;top:-10.6rem;color:var(--color-grey-8);}@media ","{padding-bottom:0.5rem;font-size:2rem;text-align:center;margin:0 auto;max-width:27rem;}"],I.a.tabletL),he=Object(j.c)(C.s).withConfig({displayName:"_what-our-clients-say__SmallText",componentId:"sc-19sxuf1-6"})(["font-size:var(--text-size-xs);opacity:0.5;@media ","{font-size:1.75rem;}"],I.a.tabletL),fe=Object(j.c)(C.s).withConfig({displayName:"_what-our-clients-say__Name",componentId:"sc-19sxuf1-7"})(["@media ","{font-size:2rem;}"],I.a.tabletL),ge=j.c.div.withConfig({displayName:"_what-our-clients-say__ImageWrapper",componentId:"sc-19sxuf1-8"})(["width:50px;margin-right:1.6rem;img{width:50px;}"]),ye=j.c.div.withConfig({displayName:"_what-our-clients-say__SliderWrapper",componentId:"sc-19sxuf1-9"})(["width:100%;position:relative;@media ","{padding-bottom:0;}"],I.a.laptopLC),be=j.c.div.withConfig({displayName:"_what-our-clients-say__Next",componentId:"sc-19sxuf1-10"})([""]),_e=j.c.div.withConfig({displayName:"_what-our-clients-say__Prev",componentId:"sc-19sxuf1-11"})([""]),we=j.c.div.withConfig({displayName:"_what-our-clients-say__ButtonWrapper",componentId:"sc-19sxuf1-12"})(["svg{height:21px;width:21px;}div{button{border:none;background:transparent;&:hover{cursor:pointer;}&:focus{outline:none;}}z-index:10;position:absolute;}","{top:50%;right:20%;width:31px;@media ","{right:22%;}@media ","{right:2px;}}","{top:50%;left:20%;width:31px;@media ","{right:5%;}@media ","{left:-3px;}}"],be,I.a.tabletL,I.a.tabletS,_e,I.a.tabletL,I.a.tabletS),Ee=function(e){var t=e.quote,a=e.img_path,n=e.img_alt,i=e.name,l=e.location;return r.a.createElement(z.e,{ai:"center",height:"unset"},r.a.createElement(ue,null,r.a.createElement(pe,{as:"blockquote"},t),r.a.createElement(C.h,{width:"28rem",color:"grey-8"}),r.a.createElement(z.e,{p:"1.7rem 0 0 0"},r.a.createElement(z.e,{ai:"center",width:"auto"},r.a.createElement(ge,null,r.a.createElement("img",{src:a,alt:n,loading:"lazy"}))),r.a.createElement("figure",null,r.a.createElement(fe,{weight:"bold"},i),r.a.createElement(he,null,l)))))},xe=[{name:"Fábio Oliveira",location:r.a.createElement(O.c,{translate_text:"Kenya"}),img_path:P.a,quote:r.a.createElement(O.c,{translate_text:"It surpassed my expectations. Binary got it right with Deriv. Trading on the platform is excellent and it allows for making accurate graphical analyses of the market and adding support and resistance markings with the use of horizontal lines, RSI, FIBO and much more."}),index:1},{name:"Paul Mugenda",location:r.a.createElement(O.c,{translate_text:"Kenya"}),img_path:ee.a,quote:r.a.createElement(O.c,{translate_text:"The Deriv platform is fast, easy to navigate, and very user-friendly. It looks great and it’s packed with many appealing features. Deposits and withdrawals are easy. My favourite markets to trade on are the Crash and Boom indices on MT5."}),index:2},{name:"Tuelo Ronald Boitshwarelo",location:r.a.createElement(O.c,{translate_text:"Botswana"}),img_path:re.a,quote:r.a.createElement(O.c,{translate_text:"What I like most is that my withdrawals are processed fast. This is the platform of the future: it offers more functionality as well as different ways to trade. No other broker has given me the same satisfaction as Deriv has. A great broker indeed."}),index:3},{name:"Mustafijur Rahman",location:r.a.createElement(O.c,{translate_text:"Bangladesh"}),img_path:Z.a,quote:r.a.createElement(O.c,{translate_text:"The Deriv platform is user-friendly and making deposits and withdrawals is easy."}),index:4},{name:"Vipul Kumar",location:r.a.createElement(O.c,{translate_text:"India"}),img_path:le.a,quote:r.a.createElement(O.c,{translate_text:"The Deriv platform looks good and is easy to use. The withdrawal process is pretty simple and can be done in just a few clicks."}),index:5},{name:"Manikandan",location:r.a.createElement(O.c,{translate_text:"India"}),img_path:Y.a,quote:r.a.createElement(O.c,{translate_text:"I have more than a decade’s worth of online trading experience, and I think that Deriv is one of the best brokers in the world. I like the new features on the Deriv platform. Being able to trade on weekends on volatility indices is a plus."}),index:6},{name:"José Miguel Santos Martinez",location:r.a.createElement(O.c,{translate_text:"Dominican Republic"}),img_path:Q.a,quote:r.a.createElement(O.c,{translate_text:"The Deriv platform is very attractive, intuitive, and user-friendly, and it’s equipped with all the tools I need."}),index:7},{name:"Paul Vilca",location:r.a.createElement(O.c,{translate_text:"Peru"}),img_path:ae.a,quote:r.a.createElement(O.c,{translate_text:"I like using the new Deriv platform because it’s so intuitive; I don’t need any tutorials to learn how to use it. The dark mode option on DTrader is very pleasing to my eyes. The ability to set my trade duration to ticks, seconds, and minutes is something I don’t see on other platforms."}),index:8},{name:"Fernando Aguilar",location:r.a.createElement(O.c,{translate_text:"Bolivia"}),img_path:G.a,quote:r.a.createElement(O.c,{translate_text:"I’ve been trading on Deriv for a while now, and I think it’s very appealing to traders who are just starting out. It’s easy to understand and all my trading information is very accessible. There are a variety of assets, trade contracts, chart types, and indicators for technical analysis."}),index:9}],ve=function(){var e=r.a.useRef(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null,r.a.createElement("link",{rel:"preload",href:"/css/swiper.css",as:"style"}),r.a.createElement("link",{rel:"stylesheet",href:"/css/swiper.css"})),r.a.createElement(oe,null,r.a.createElement(z.b,{direction:"column"},r.a.createElement(ce,{align:"center",as:"h2"},Object(O.g)("What our clients say about Deriv"))),r.a.createElement(ye,null,r.a.createElement(we,null,r.a.createElement(be,null,r.a.createElement("button",{onClick:function(){null!==e.current&&null!==e.current.swiper&&e.current.swiper.slideNext()}},r.a.createElement(me,null))),r.a.createElement(_e,null,r.a.createElement("button",{onClick:function(){null!==e.current&&null!==e.current.swiper&&e.current.swiper.slidePrev()}},r.a.createElement(de,null)))),r.a.createElement("div",{style:{maxWidth:"800px",margin:"0 auto"}},r.a.createElement(W.a,Object.assign({},{lazy:!0,slidesPerView:1,spaceBetween:30,loop:!0,height:"100%",autoplay:{delay:6e3,disableOnInteraction:!1}},{ref:e}),xe.map((function(e){return r.a.createElement("div",{className:"swiper-slide",key:e.name},r.a.createElement(Ee,{quote:e.quote,name:e.name,location:e.location,img_path:e.img_path,img_alt:e.name+Object(O.g)(" - Deriv's Client")}))})))))))},ke=a("2ckm"),je=a.n(ke),Ce=j.c.div.withConfig({displayName:"_trade-types-card__CustomLinkWrap",componentId:"pts27-0"})(["display:flex;opacity:0;transition:visibility 0s,opacity 0.5s ease-in;margin-top:5px;align-items:center;"]),Oe=j.c.div.withConfig({displayName:"_trade-types-card__CustomWrap",componentId:"pts27-1"})(["display:block;transition:transform 0.2s ease-in;"]),ze=j.c.div.withConfig({displayName:"_trade-types-card__LogoDiv",componentId:"pts27-2"})(["text-align:center;"]),Ie=Object(j.c)(C.s).withConfig({displayName:"_trade-types-card__StyledText",componentId:"pts27-3"})(["text-align:center;font-size:1.6rem;"]),Te=Object(j.c)(O.d).withConfig({displayName:"_trade-types-card__StyledCard",componentId:"pts27-4"})(["max-width:28.2rem;margin:0 1.2rem;padding:6.4rem 2.3rem;display:flex;flex-direction:column;justify-content:space-between;align-items:center;min-height:100%;box-shadow:none;border:1px solid var(--color-grey-2);border-radius:8px;text-decoration:none;&:hover{border-color:white;box-shadow:0 16px 20px 0 rgba(0,0,0,0.05),0 0 20px 0 rgba(0,0,0,0.05);","{transform:translateY(-10px);}","{visibility:visible;opacity:1;}}&:nth-child(4){margin-right:unset;}","{font-size:1.6rem;}","{text-align:center;font-size:2.4rem;margin-bottom:0.8rem;margin-top:2.4rem;}"],Oe,Ce,C.s,C.i),Se=function(e){var t=e.icon,a=e.title,n=e.description,i=e.link,l=e.linkTitle;return r.a.createElement(Te,{ariaLabel:l,to:i},r.a.createElement(Oe,null,r.a.createElement(ze,null,t),r.a.createElement(C.i,null,a),r.a.createElement(Ie,null,n)),r.a.createElement(Ce,null,r.a.createElement(C.s,{weight:"bold",mr:"0.8rem",color:"red"},Object(O.g)("Learn more"))," ",r.a.createElement(je.a,null)))},Ne=function(e){var t=e.dynamic_id;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"49",viewBox:"0 0 48 49"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:t,x1:".325%",x2:"99.675%",y1:"100%",y2:"0%"},r.a.createElement("stop",{offset:"0%",stopColor:"#FF444F"}),r.a.createElement("stop",{offset:"100%",stopColor:"#FF6444"}))),r.a.createElement("path",{fill:"url(#"+t+")",d:"M158 64.21c3.314 0 6 2.694 6 6.019v36.117c0 3.325-2.686 6.02-6 6.02h-36c-3.314 0-6-2.695-6-6.02V70.23c0-3.325 2.686-6.02 6-6.02h36zm0 3.009h-36c-1.582 0-2.877 1.228-2.992 2.785l-.008.225v36.117c0 1.587 1.224 2.887 2.776 3.002l.224.008h36c1.582 0 2.877-1.228 2.992-2.785l.008-.225V70.23c0-1.587-1.224-2.887-2.776-3.002L158 67.22zm-9 22.573c4.142 0 7.5 3.37 7.5 7.525 0 4.156-3.358 7.525-7.5 7.525-4.142 0-7.5-3.37-7.5-7.525 0-4.156 3.358-7.525 7.5-7.525zm0 3.01c-2.485 0-4.5 2.022-4.5 4.515s2.015 4.515 4.5 4.515 4.5-2.022 4.5-4.515-2.015-4.515-4.5-4.515zm2.705-16.22c.586.586.585 1.537-.003 2.125L130.419 99.99c-.587.587-1.539.589-2.124.003-.586-.586-.585-1.537.003-2.125l21.283-21.282c.587-.588 1.539-.59 2.124-.004zM131 71.734c4.142 0 7.5 3.368 7.5 7.524 0 4.156-3.358 7.525-7.5 7.525-4.142 0-7.5-3.37-7.5-7.525 0-4.156 3.358-7.524 7.5-7.524zm0 3.01c-2.485 0-4.5 2.02-4.5 4.514s2.015 4.515 4.5 4.515 4.5-2.021 4.5-4.515c0-2.493-2.015-4.515-4.5-4.515z",transform:"translate(-116 -64)"}))},Le=function(e){var t=e.dynamic_id;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"49",viewBox:"0 0 48 49"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:t,x1:".325%",x2:"99.675%",y1:"100%",y2:"0%"},r.a.createElement("stop",{offset:"0%",stopColor:"#FF444F"}),r.a.createElement("stop",{offset:"100%",stopColor:"#FF6444"}))),r.a.createElement("path",{fill:"url(#"+t+")",d:"M158 64.21c3.314 0 6 2.694 6 6.019v36.117c0 3.325-2.686 6.02-6 6.02h-36c-3.314 0-6-2.695-6-6.02V70.23c0-3.325 2.686-6.02 6-6.02h36zm0 3.009h-36c-1.582 0-2.877 1.228-2.992 2.785l-.008.225v36.117c0 1.587 1.224 2.887 2.776 3.002l.224.008h36c1.582 0 2.877-1.228 2.992-2.785l.008-.225V70.23c0-1.587-1.224-2.887-2.776-3.002L158 67.22zm-25.5 36.118l-.045-.001-.09-.006.135.007c-.07 0-.137-.005-.204-.015l-.067-.01c-.073-.014-.144-.034-.213-.058-.133-.047-.261-.114-.38-.2l-.042-.032-.013-.01-.032-.027c-.03-.025-.059-.052-.087-.08l-.023-.023-6-6.202c-.585-.605-.585-1.587 0-2.192.541-.56 1.392-.602 1.98-.13l.142.13L131 98.042v-10.21c0-.857.672-1.551 1.5-1.551.77 0 1.403.599 1.49 1.37l.01.18v10.211l3.44-3.554c.54-.56 1.39-.602 1.98-.13l.14.13c.541.559.583 1.438.125 2.046l-.124.146-6 6.202c-.032.033-.066.065-.1.095l.1-.095c-.05.05-.1.097-.154.14l-.058.042-.053.037-.072.044-.038.02c-.03.016-.06.031-.091.045l-.042.018c-.027.011-.055.021-.083.03l-.047.016c-.029.009-.058.017-.088.024l-.048.01c-.035.007-.071.013-.107.018l-.025.002c-.032.004-.065.006-.098.008h-.057zm15-31.102l-.045.001c-.03 0-.06.003-.09.006l.135-.007c-.07 0-.137.005-.204.015l-.067.01c-.073.014-.144.033-.213.058-.133.047-.261.113-.38.2l-.042.032-.013.01-.032.026c-.03.026-.059.052-.087.08l-.023.023-6 6.202c-.585.606-.585 1.588 0 2.193.541.56 1.392.602 1.98.13l.142-.13L146 77.53v10.21c0 .857.672 1.55 1.5 1.55.77 0 1.403-.598 1.49-1.369l.01-.18V77.53l3.44 3.554c.54.56 1.39.602 1.98.13l.14-.13c.541-.559.583-1.438.125-2.046l-.124-.147-6-6.202c-.032-.033-.066-.064-.1-.094l.1.094c-.05-.05-.1-.096-.154-.138-.019-.015-.038-.03-.058-.043l-.053-.037-.072-.044-.038-.02c-.03-.016-.06-.031-.091-.045l-.042-.018c-.027-.011-.055-.022-.083-.031l-.047-.015c-.029-.009-.058-.017-.088-.024l-.048-.01c-.035-.007-.071-.013-.107-.018l-.025-.002c-.032-.004-.065-.006-.098-.008h-.057z",transform:"translate(-116 -64)"}))},qe=function(e){var t=e.dynamic_id;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:t,x1:"0%",x2:"100%",y1:"100%",y2:"0%"},r.a.createElement("stop",{offset:"0%",stopColor:"#FF444F"}),r.a.createElement("stop",{offset:"100%",stopColor:"#FF6444"}))),r.a.createElement("path",{fill:"url(#"+t+")",d:"M159 64c3.314 0 6 2.686 6 6v36c0 3.314-2.686 6-6 6h-36c-3.314 0-6-2.686-6-6V70c0-3.314 2.686-6 6-6h36zm0 3h-36c-1.582 0-2.877 1.224-2.992 2.776L120 70v36c0 1.582 1.224 2.877 2.776 2.992L123 109h36c1.582 0 2.877-1.224 2.992-2.776L162 106V70c0-1.582-1.224-2.877-2.776-2.992L159 67zm-29.61 9.39c.521-.52 1.365-.52 1.886 0L141 86.115l9.724-9.723c.52-.521 1.365-.521 1.885 0 .481.48.518 1.236.111 1.76l-.11.125L142.885 88l9.723 9.724.111.125c.407.524.37 1.28-.11 1.76-.521.521-1.365.521-1.886 0L141 89.886l-9.724 9.723c-.52.521-1.365.521-1.885 0-.481-.48-.518-1.236-.111-1.76l.11-.125L139.115 88l-9.723-9.724-.111-.125c-.407-.524-.37-1.28.11-1.76z",transform:"translate(-117 -64)"}))},Me=a("wYtL"),De=Object(j.c)(Me.c).withConfig({displayName:"_trade-types__TradingButton",componentId:"ayrj35-0"})(["height:4.8rem;display:flex;align-items:center;max-width:18rem;justify-content:center;"]),Fe=Object(j.c)(z.b).withConfig({displayName:"_trade-types__StyledContainer",componentId:"ayrj35-1"})(["margin:0 auto 8rem;height:auto;width:90%;flex-wrap:nowrap;"]),Re=[{icon:r.a.createElement(Ne,{dynamic_id:"margin-desktop"}),title:r.a.createElement(O.c,{translate_text:"Margin Trading"}),description:r.a.createElement(O.c,{translate_text:"Trade with leverage and low spreads for better returns on successful trades."}),link:"/trade-types/margin",linkTitle:Object(O.g)("Margin")},{icon:r.a.createElement(Le,{dynamic_id:"options-desktop"}),title:r.a.createElement(O.c,{translate_text:"Options"}),description:r.a.createElement(O.c,{translate_text:"Earn fixed payouts by predicting an assets price movement within a fixed time."}),link:"/trade-types/options",linkTitle:Object(O.g)("Options")},{icon:r.a.createElement(qe,{dynamic_id:"multipliers-desktop"}),title:r.a.createElement(O.c,{translate_text:"Multipliers"}),description:r.a.createElement(O.c,{translate_text:"Get the best of both - the upside of margin trading with the simplicity of options."}),link:"/trade-types/multiplier",linkTitle:Object(O.g)("Multiplier")}],We=function(){return r.a.createElement("div",null,r.a.createElement(Fe,null,r.a.createElement(z.e,{direction:"column",max_width:"28.2rem"},r.a.createElement(C.i,{size:"3.2rem"},Object(O.g)("Trade types")),r.a.createElement(C.s,{size:"2.4rem",mt:"1.6rem",mb:"5rem"},Object(O.g)("Trade what you like, the way you like it, and on your preferred market.")),r.a.createElement(De,{type:"submit",secondary:"true",to:"/signup/"},Object(O.g)("Start trading"))),r.a.createElement(z.e,null,Re.map((function(e){return r.a.createElement(Se,{key:e.title,icon:e.icon,title:e.title,description:e.description,link:e.link,linkTitle:e.linkTitle})})))))},Be=Object(j.c)(z.i).withConfig({displayName:"_trade-types-mobile__StyledSection",componentId:"sc-5b6znb-0"})(["display:flex;flex-direction:column;align-items:center;"]),Ve=Object(j.c)(Me.c).withConfig({displayName:"_trade-types-mobile__TradingButton",componentId:"sc-5b6znb-1"})(["height:4.8rem;display:flex;align-items:center;width:21.6rem;justify-content:center;margin-top:3.2rem;"]),Ke=j.c.article.withConfig({displayName:"_trade-types-mobile__TradeTypeCard",componentId:"sc-5b6znb-2"})(["width:25rem;position:relative;overflow:hidden;box-shadow:0 16px 20px 0 rgba(0,0,0,0.05),0 0 20px 0 rgba(0,0,0,0.05);border-radius:8px;padding:2rem;"]),Ae=j.c.div.withConfig({displayName:"_trade-types-mobile__SliderWrapper",componentId:"sc-5b6znb-3"})(["width:100%;position:relative;@media ","{padding-bottom:0;}"],I.a.laptopLC),Pe=j.c.div.withConfig({displayName:"_trade-types-mobile__SwiperWrapper",componentId:"sc-5b6znb-4"})([".swiper-container{padding-bottom:4rem;}.swiper-slide{width:25rem;}.swiper-pagination{bottom:0;}.swiper-pagination-bullet{width:10px;height:10px;}.swiper-pagination-bullet-active{background-color:var(--color-black);}"]),He=Object(j.c)(O.d).withConfig({displayName:"_trade-types-mobile__StyledLink",componentId:"sc-5b6znb-5"})(["text-decoration:none;margin:1rem 0;"]),Ge=j.c.div.withConfig({displayName:"_trade-types-mobile__CustomLinkWrap",componentId:"sc-5b6znb-6"})(["display:flex;margin-top:12px;margin-bottom:16px;align-items:center;"]),Je=function(e){var t=e.icon,a=e.title,n=e.description,i=e.link,l=e.linkTitle;return r.a.createElement(z.e,{ai:"center",height:"unset"},r.a.createElement(He,{ariaLabel:l,to:i},r.a.createElement(Ke,null,r.a.createElement(z.e,{ai:"center",fd:"column"},t,r.a.createElement(C.i,{mt:"1.6rem",mb:"0.8rem",align:"center",size:"var(--text-size-m)"},a),r.a.createElement(C.s,{size:"var(--text-size-sm)",align:"center"},n),r.a.createElement(Ge,null,r.a.createElement(C.s,{weight:"bold",mr:"0.8rem",color:"red",size:"16px"},Object(O.g)("Learn more")," "),r.a.createElement(je.a,null))))))},Qe=[{icon:r.a.createElement(Ne,{dynamic_id:"margin-mobile"}),title:r.a.createElement(O.c,{translate_text:"Margin Trading"}),description:r.a.createElement(O.c,{translate_text:"Trade with leverage and low spreads for better returns on successful trades."}),link:"/trade-types/margin",linkTitle:Object(O.g)("Margin")},{icon:r.a.createElement(Le,{dynamic_id:"options-mobile"}),title:r.a.createElement(O.c,{translate_text:"Options"}),description:r.a.createElement(O.c,{translate_text:"Earn fixed payouts by predicting an assets price movement within a fixed time."}),link:"/trade-types/options",linkTitle:Object(O.g)("Options")},{icon:r.a.createElement(qe,{dynamic_id:"multipliers-mobile"}),title:r.a.createElement(O.c,{translate_text:"Multipliers"}),description:r.a.createElement(O.c,{translate_text:"Get the best of both - the upside of margin trading with the simplicity of options."}),link:"/trade-types/multiplier",linkTitle:Object(O.g)("Multiplier")}],Xe=function(){var e=r.a.useRef(null),t=r.a.useState(!1),a=t[0],n=t[1];r.a.useEffect((function(){setTimeout((function(){n(!0)}),500)}),[]);return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null,r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/css/swiper.css"})),r.a.createElement(Be,{padding:"4rem 0"},r.a.createElement(C.i,{align:"center",as:"h2",mb:"0.8rem"},Object(O.g)("Trade types")),r.a.createElement(C.s,{padding:"0 2rem",size:"var(--text-size-sm)",align:"center",mb:"2rem"},Object(O.g)("Trade what you like, the way you like it, and on your preferred market.")),r.a.createElement(Ae,null,r.a.createElement(Pe,null,r.a.createElement(W.a,Object.assign({},{slidesPerView:"auto",centeredSlides:!0,spaceBetween:12,lazy:!0,pagination:{el:".swiper-pagination",clickable:!0}},{ref:e}),Qe.map((function(e){return r.a.createElement("div",{className:"swiper-slide",key:e.title},r.a.createElement(Je,{icon:e.icon,title:e.title,description:e.description,link:e.link,linkTitle:e.linkTitle}))}))))),r.a.createElement(Ve,{type:"submit",secondary:"true",to:"/signup/"},Object(O.g)("Start trading")))):null},Ye=a("Wbzz"),Ue=Object(j.c)(z.e).withConfig({displayName:"_vertical-carousel__VerticalCarouselWrapper",componentId:"jk9nq4-0"})(["position:relative;margin:2.4rem 0 3.2rem;overflow:hidden;height:36px;@media ","{margin:2rem 0 3rem;height:28px;}"],I.a.tabletL),Ze=Object(j.c)(z.a).withConfig({displayName:"_vertical-carousel__VerticalCarouselContainer",componentId:"jk9nq4-1"})(["transform:translateY(","px);transition-duration:0.5s;transition-property:transform;transition-timing-function:linear;visibility:",";"],(function(e){return e.transform}),(function(e){return e.visibility})),$e=Object(j.c)(C.i).withConfig({displayName:"_vertical-carousel__StyledHeader",componentId:"jk9nq4-2"})(["opacity:",";font-size:",";transition-property:opacity,font-size;line-height:1.5;height:36px;transition-duration:0.5s;transition-timing-function:linear;"],(function(e){return e.active_header==e.index?"1":"0.5"}),(function(e){return e.active_header==e.index?"var(--text-size-m)":"var(--text-size-sm)"})),et=function(e){var t=e.contents,a=r.a.useState(t.length-1),n=a[0],i=a[1],l=r.a.useState(-72),o=l[0],c=l[1],s=r.a.useState("hidden"),m=s[0],d=s[1];return r.a.useEffect((function(){setTimeout((function(){return d("inherit")}),500),setTimeout((function(){return function e(t,a){void 0===t&&(t=5),void 0===a&&(a=-72),t>0?(i(t-1),c(a+36),setTimeout((function(){return e(t-1,a+36)}),3e3)):e(5,-108)}(n,o)}),3e3)}),[]),r.a.createElement(Ue,{direction:"column"},r.a.createElement(Ze,{transform:o,visibility:m},t.map((function(e,t){return r.a.createElement($e,{color:"white",active_header:n,index:t,key:t},e)}))))},tt=j.c.section.withConfig({displayName:"_hero__HeroWrapper",componentId:"sc-1dhyajv-0"})(["width:100%;padding:8rem 0;background-color:var(--color-black-7);position:relative;"]),at=Object(j.c)(Me.c).withConfig({displayName:"_hero__HeroButton",componentId:"sc-1dhyajv-1"})(["height:4rem;display:flex;align-items:center;max-width:20.5rem;@media ","{margin:0 auto;display:flex;font-size:1.75rem;justify-content:center;max-width:25.5rem;height:5rem;}"],I.a.tabletL),nt=Object(j.d)(["0%{opacity:0;margin-left:-75px;}100%{opacity:1;margin-left:0;}"]),rt=Object(j.c)(C.i).withConfig({displayName:"_hero__StyledHeader",componentId:"sc-1dhyajv-2"})(["animation-name:",";animation-duration:0.5s;animation-fill-mode:both;animation-delay:",";font-size:8rem;line-height:1.25;@media ","{font-size:4rem;}"],nt,(function(e){return e.ad}),I.a.tabletL),it=[r.a.createElement(O.c,{key:0,translate_text:"Tight spreads"}),r.a.createElement(O.c,{key:1,translate_text:"Sharp prices"}),r.a.createElement(O.c,{key:2,translate_text:"24x7 trading"}),r.a.createElement(O.c,{key:3,translate_text:"100+ tradeable assets"}),r.a.createElement(O.c,{key:4,translate_text:"20+ years of experience"})],lt=Object(j.c)(C.i).withConfig({displayName:"_hero__TypeWriter",componentId:"sc-1dhyajv-3"})(["min-height:7.2rem;"]),ot=Object(j.c)(z.c).withConfig({displayName:"_hero__HeroContainer",componentId:"sc-1dhyajv-4"})(["grid-template-columns:repeat(12,1fr);width:100%;grid-column-gap:2.4rem;grid-template-areas:'details details details details details video video video video video video video' 'button button button button button button button button button button button button';@media ","{grid-template-columns:repeat(1,1fr);grid-template-areas:'details' 'video' 'button';}"],I.a.tabletL),ct=Object(j.c)(z.a).withConfig({displayName:"_hero__Details",componentId:"sc-1dhyajv-5"})(["grid-area:details;"]),st=Object(j.c)(z.a).withConfig({displayName:"_hero__ButtonWrapper",componentId:"sc-1dhyajv-6"})(["grid-area:button;@media ","{margin-top:3rem;}"],I.a.tabletL),mt=Object(j.c)(z.a).withConfig({displayName:"_hero__ImageWrapper",componentId:"sc-1dhyajv-7"})(["grid-area:video;margin-top:4rem;@media ","{min-height:25rem;margin-top:0;}"],I.a.tabletL),dt=function(){var e,t=Object(Ye.useStaticQuery)("3561913167"),a=Object(O.g)("Trade forex, commodities, synthetic and stock indices"),n=r.a.useState(""),i=n[0],l=n[1];return r.a.useEffect((function(){var t=setTimeout((function(){!function t(n){void 0===n&&(n=0),n<a.length&&(l(a.substring(0,n+1)),e=setTimeout((function(){return t(n+1)}),13))}()}),1200);return function(){clearTimeout(t),clearTimeout(e)}}),[]),r.a.createElement(tt,null,r.a.createElement(z.b,null,r.a.createElement(ot,null,r.a.createElement(ct,null,r.a.createElement(z.j.Desktop,null,r.a.createElement(z.e,{mb:"1.6rem",direction:"column"},r.a.createElement(rt,{color:"white",ad:"0.5s"},r.a.createElement(O.c,{translate_text:"Simple"})),r.a.createElement(rt,{color:"white",ad:"0.6s"},r.a.createElement(O.c,{translate_text:"Flexible"})),r.a.createElement(rt,{color:"white",ad:"0.7s"},r.a.createElement(O.c,{translate_text:"Reliable"})))),r.a.createElement(z.j.Mobile,null,r.a.createElement(z.e,null,r.a.createElement(rt,{color:"white",ad:"0.5s",mb:"2rem"},r.a.createElement(O.c,{translate_text:"Simple Flexible Reliable"})))),r.a.createElement(lt,{as:"h4",color:"white",max_width:"430px",weight:"normal"},Object(O.g)(i)),r.a.createElement(et,{contents:it})),r.a.createElement(mt,null,r.a.createElement(C.o,{data:t.background,alt:"platform devices",width:"100%"})),r.a.createElement(st,null,r.a.createElement(at,{secondary:"true",to:"/signup/"},r.a.createElement(O.c,{translate_text:"Create free demo account"}))))))},ut=a("8k0H"),pt=a("Mesd"),ht=a("Dj6j"),ft=a("iwap"),gt=a.n(ft),yt=a("CVkW"),bt=a.n(yt),_t=a("Adt5"),wt=a.n(_t),Et=k((function(){return a.e(65).then(a.bind(null,"Tr/h"))})),xt=k((function(){return a.e(64).then(a.bind(null,"rGfz"))})),vt=[{header:r.a.createElement(O.c,{translate_text:"Practise"}),text:r.a.createElement(O.c,{translate_text:"Open a demo account and start trading for free. Practise with an unlimited amount of virtual funds."}),icon:r.a.createElement(gt.a,null)},{header:r.a.createElement(O.c,{translate_text:"Trade"}),text:r.a.createElement(O.c,{translate_text:"Open a real account, make a deposit, and start trading for real. Trade forex, indices, commodities, and more."}),icon:r.a.createElement(bt.a,null)},{header:r.a.createElement(O.c,{translate_text:"Withdraw"}),text:r.a.createElement(O.c,{translate_text:"Get your funds quickly and easily. We support a variety of withdrawal options."}),icon:r.a.createElement(wt.a,null)}];t.default=Object(O.e)()((function(){return r.a.createElement(ut.a,null,r.a.createElement(z.h,{title:Object(O.g)("Online trading platform | Forex, commodities and indices | Deriv"),description:Object(O.g)("Deriv - An online trading platform that offers a wide selection of derivatives to trade on 24/7.")}),r.a.createElement(dt,null),r.a.createElement(z.j.Mobile,{min_width:"992"},r.a.createElement(xt,null)),r.a.createElement(z.j.Desktop,{max_width:"991"},r.a.createElement(Et,null)),r.a.createElement(z.j.Desktop,{max_width:"851"},r.a.createElement(We,null)),r.a.createElement(z.j.Mobile,{min_width:"852"},r.a.createElement(Xe,null)),r.a.createElement(F,null),r.a.createElement(ht.a,{content:vt,header:r.a.createElement(O.c,{translate_text:"3 simple steps"})}),r.a.createElement(ve,null),r.a.createElement(pt.b,{appearance:pt.a.public}))}))},"ht+H":function(e,t,a){e.exports=a.p+"static/paul-vilca-b1b2dcdd40fdae63d447c556e88c5eac.png"},mKA3:function(e,t,a){e.exports=a.p+"static/jose-1260eaba8b235eab857ae0cb470bada8.png"},mn5C:function(e,t,a){e.exports=a.p+"static/tuelo-ccdaf814caf1ef8db7d2b1507bbae0e6.png"},ptFf:function(e,t,a){e.exports=a.p+"static/fernando-c6c7c527e53ec304b999c4438a401e0c.png"},pz46:function(e,t,a){e.exports=a.p+"static/mustafijur-9dd9a5e2317c4347035b2301dea153d0.png"},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-index-js-949586bc4e8482500ef8.js.map