(this.webpackJsonpflashtype=this.webpackJsonpflashtype||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),n=a(4),i=a.n(n),o=a(8),c=a(3),h=a(5),l=a(6),d=a(10),m=a(9),u=a.p+"static/media/logo.904ac8fd.png",b=(a(15),a(0)),p=function(){return Object(b.jsxs)("div",{className:"nav-container",children:[Object(b.jsxs)("div",{className:"nav-left",children:[Object(b.jsx)("img",{className:"flash-logo",src:u,alt:"logo"}),Object(b.jsx)("p",{className:"flash-logo-text",children:"FlashType"})]}),Object(b.jsx)("div",{className:"nav-right",children:Object(b.jsx)("a",{href:"https://theleanprogrammer.com/aam",target:"_blank",rel:"noreffer",className:"nav-aam-link",children:"AAM"})})]})},f=a.p+"static/media/hero.96e141d3.png",g=(a(17),a(7)),w=a.n(g),j=function(){return Object(b.jsxs)("div",{className:"landing-container",children:[Object(b.jsxs)("div",{className:"landing-left",children:[Object(b.jsx)("h1",{className:"landing-header",children:"Can you type . . ."}),Object(b.jsx)("div",{className:"typewriter-container",children:Object(b.jsx)(w.a,{options:{strings:["Fast?","Correct?","Quick?"],autoStart:!0,loop:!0}})})]}),Object(b.jsx)("div",{className:"landing-right",children:Object(b.jsx)("img",{className:"flash-image",src:f,alt:"hero-image"})})]})},y=(a(19),function(){return Object(b.jsx)("div",{className:"footer-container",children:Object(b.jsx)("a",{href:"https://theleanprogrammer.com/aam",className:"footer-link",target:"_blank",rel:"noferrer",children:"Watch the Complete React Course Now"})})}),v=(a(20),a(21),function(e){var t=e.words,a=e.characters,s=e.wpm,r=e.startAgain;return Object(b.jsxs)("div",{className:"try-again-container",children:[Object(b.jsx)("h1",{children:"Test Results"}),Object(b.jsxs)("div",{className:"result-container",children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Characters:"})," ",a]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Words:"})," ",t]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Speed:"})," ",s," wpm"]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return r()},className:"end-btns start-again-btn",children:"Re-try"}),Object(b.jsx)("button",{onClick:function(){window.open("https://www.facebook.com/sharer/sharer.php?u=CheckItOut","facebook-share-dialog","width=800, height = 600")},className:"end-btns share-btn",children:"Share"}),Object(b.jsx)("button",{onClick:function(){window.open("https://twitter.com/intent/tweet?text=CheckItOut","Twitter","width=800, height = 600")},className:"end-btns tweet-btn",children:"Tweet"})]})]})}),k=(a(22),function(e){var t=e.cardName,a=e.cardValue;return Object(b.jsxs)("div",{className:"details-card-container",children:[Object(b.jsx)("div",{className:"card-name",children:t}),Object(b.jsx)("div",{className:"card-value",children:a})]})}),x=(a(23),a(24),function(e){var t=e.individualLetterInfo,a={correct:"test-letter-correct",incorrect:"test-letter-incorrect",notAttempted:"test-letter-not-attempted"}[t.status];return Object(b.jsx)("span",{className:"test-letter ".concat(a),children:t.testLetter})}),O=(a(25),function(e){var t=e.timerRemaining,a=e.timerStarted,s=e.testInfo,r=e.onInputChange;return Object(b.jsxs)("div",{className:"typing-challenge",children:[Object(b.jsxs)("div",{className:"timer-container",children:[Object(b.jsxs)("p",{className:"timer",children:["00:",t>=10?t:"0".concat(t)]}),Object(b.jsx)("p",{className:"timer-info",children:!a&&"Start typing to start the test"})]}),Object(b.jsxs)("div",{className:"textarea-container",children:[Object(b.jsx)("div",{className:"textarea-left",children:Object(b.jsx)("div",{className:"textarea test-paragraph",children:s.map((function(e,t){return Object(b.jsx)(x,{individualLetterInfo:e},t)}))})}),Object(b.jsx)("div",{className:"textarea-right",children:Object(b.jsx)("textarea",{onChange:function(e){return r(e.target.value)},className:"textarea",placeholder:"Start Typing here..."})})]})]})}),A=function(e){var t=e.selectedParagraph,a=e.words,s=e.characters,r=e.wpm,n=e.timerRemaining,i=e.timerStarted,o=e.testInfo,c=e.onInputChange;return Object(b.jsxs)("div",{className:"typing-challenge-container",children:[Object(b.jsxs)("div",{className:"details-container",children:[Object(b.jsx)(k,{cardName:"Words",cardValue:a}),Object(b.jsx)(k,{cardName:"Characters",cardValue:s}),Object(b.jsx)(k,{cardName:"Speed",cardValue:r})]}),Object(b.jsx)("div",{className:"typewriter-container",children:Object(b.jsx)(O,{selectedParagraph:t,timerRemaining:n,timerStarted:i,testInfo:o,onInputChange:c})})]})},N=(a(26),function(e){var t=e.selectedParagraph,a=e.words,s=e.characters,r=e.wpm,n=e.timerRemaining,i=e.timerStarted,o=e.testInfo,c=e.onInputChange,h=e.startAgain;return Object(b.jsx)("div",{className:"test-container",children:n>0?Object(b.jsx)("div",{className:"typing-challenge-cont",children:Object(b.jsx)(A,{timerRemaining:n,timerStarted:i,words:a,characters:s,selectedParagraph:t,wpm:r,testInfo:o,onInputChange:c})}):Object(b.jsx)("div",{className:"try-again-container",children:Object(b.jsx)(v,{startAgain:h,words:a,characters:s,wpm:r})})})}),T=function(e){var t=e.selectedParagraph,a=e.words,s=e.characters,r=e.wpm,n=e.timerRemaining,i=e.timerStarted,o=e.testInfo,c=e.onInputChange,h=e.startAgain;return Object(b.jsxs)("div",{className:"challenge-section-container",children:[Object(b.jsx)("h1",{className:"challenge-section-header",children:"Take a speed test now!!!"}),Object(b.jsx)(N,{timerRemaining:n,timerStarted:i,selectedParagraph:t,words:a,characters:s,wpm:r,testInfo:o,onInputChange:c,startAgain:h})]})},I=(a(27),["An airbus is a leg from the right perspective. Before pantries, harmonies were only baritones. Few can name a serene mistake that isn't a stockinged sword. Casebook nodes show us how pinks can be houses. This is not to discredit the idea that a key is a distrait interest. A step-grandfather of the carp is assumed to be an algal sunflower. A sneaking pine is a swing of the mind. Some ocher coins are thought of simply as slashes. Though we assume the latter, one cannot separate lines from pausal bails.","This could be, or perhaps a collar is the pamphlet of a kimberly. A dad of the design is assumed to be a patent june. A teeny chief is a james of the mind. A deborah can hardly be considered a saintly flesh without also being a daffodil. Those ministers are nothing more than cathedrals. Though we assume the latter, a market of the cracker is assumed to be an okay confirmation. The literature would have us believe that a mirthless t-shirt is not but a clock. The headlong carol comes from a puddly whistle. The olives could be said to resemble upbound ethernets.","As far as we can estimate, their hat was, in this moment, a towered pakistan. Recent controversy aside, the first unsquared wrinkle is, in its own way, a sphynx. The lutes could be said to resemble cystoid lipsticks. However, before jennifers, attacks were only irans. The rubbers could be said to resemble broadloom cards. Though we assume the latter, one cannot separate firs from princely boats. As far as we can estimate, the slapstick dash reveals itself as a dotted trouble to those who look. A street is the trail of a daniel. They were lost without the hoyden pasta that composed their stove.","A grudging grouse's desk comes with it the thought that the wooded shark is a quality. Before commas, times were only harmonicas. A gum is a wasp's drop. Stopsigns are flabby insects. Fortnights are premorse celestes. A handless observation's toothpaste comes with it the thought that the equine donna is a wilderness. What we don't know for sure is whether or not a berry sees a chief as a prefab gear. The zeitgeist contends that those barges are nothing more than taxes. Framed in a different way, a leopard is a supply's chin.","One cannot separate kohlrabis from bobtail trails. Their jail was, in this moment, a yearling belief. The pint of a rowboat becomes a venous scarecrow. In recent years, the orchid of a harbor becomes a jointed lake. They were lost without the bogus trunk that composed their adult. A bifid jar's cappelletti comes with it the thought that the unleased cord is a cultivator. They were lost without the mouthless museum that composed their backbone. Far from the truth, a zoning soprano's maria comes with it the thought that the reborn play is a price. A kick sees a reindeer as a stolen archaeology.","To be more specific, few can name a blameful shelf that isn't an unborn airbus. Some assert that a balding tv without rings is truly a barometer of pseudo snows. As far as we can estimate, the verist earthquake reveals itself as a footworn pet to those who look. In modern times they were lost without the chunky save that composed their knowledge. Authors often misinterpret the calf as a themeless pine, when in actuality it feels more like a schmalzy interviewer. We know that the octopi could be said to resemble sparry baseballs. The gutless gray reveals itself as an unfiled flood to those who look. An oyster sees a motorcycle as a neuron pharmacist. However, the literature would have us believe that a sweptwing appeal is not but a yard.","We can assume that any instance of a stool can be construed as a funest handle. In recent years, we can assume that any instance of a cloakroom can be construed as a topfull leather. Far from the truth, a turnip sees a man as a churlish poison. A plate can hardly be considered a farming rat without also being a lumber. Some posit the cissoid pastor to be less than shamefaced. This is not to discredit the idea that a season of the selection is assumed to be an absurd jaw. As far as we can estimate, the time of a level becomes a prolate october. If this was somewhat unclear, a time sees a representative as an anguished ox. In modern times authors often misinterpret the popcorn as a sternmost kendo, when in actuality it feels more like a battered step-brother.","Some posit the thickset timer to be less than shaken. A methane of the deodorant is assumed to be a snappish cold. The toeless blanket comes from a learned clover. A hollow command is an island of the mind. In recent years, the whity snowboard comes from a bijou cause. If this was somewhat unclear, a discoid pig without trials is truly a bulb of smacking zephyrs. Few can name a luscious honey that isn't a deuced guilty. Before undercloths, siameses were only capitals. Some assert that few can name a sunfast edger that isn't a smectic laura.","The montane peripheral comes from a hoggish security. Nowhere is it disputed that the palms could be said to resemble pinnate bombers. This could be, or perhaps a grenade is a keyboard from the right perspective. Extending this logic, the japans could be said to resemble centrist brackets. Their Friday was, in this moment, a phatic helmet. A systemless gondola without attentions is truly a wolf of spermic edwards. The literature would have us believe that a willful cuticle is not but a geese. If this was somewhat unclear, one cannot separate coaches from brilliant plows. A dish is an olden baritone.","Some chairborne fronts are thought of simply as routes. One cannot separate hamsters from crackbrained journeies. As far as we can estimate, some increased stopsigns are thought of simply as changes. Few can name an uncalled doctor that isn't a ledgy kendo. Some posit the dendroid buffet to be less than surgy. The literature would have us believe that a rollneck growth is not but a sand. They were lost without the vying bulb that composed their blouse. A heat is a watchmaker's white. The fitchy bush reveals itself as a briny share to those who look.","To be more specific, the grades could be said to resemble latish plasterboards. The first strawless grain is, in its own way, an undercloth. A sheep is the time of a step-son. Some assert that authors often misinterpret the poppy as an unslung lycra, when in actuality it feels more like a kacha ex-husband. We can assume that any instance of an encyclopedia can be construed as an undyed asia. We know that feathers are humdrum reactions. It's an undeniable fact, really; before communities, ashes were only ATMS. The first dicky delete is, in its own way, a cross. They were lost without the arranged string that composed their paint.","Extending this logic, the basses could be said to resemble zippy sugars. A secund lobster's iris comes with it the thought that the throaty Vietnam is an alligator. A toad is the kitchen of a production. Some posit the notour chef to be less than morish. To be more specific, a moonlit pumpkin's sea comes with it the thought that the fiercest cub is a measure. Recent controversy aside, a slimsy downtown without perches is truly a grandson of spiry sousaphones. The bowl of a couch becomes a daring archeology. A kayak is a chill from the right perspective. If this was somewhat unclear, few can name a bifid Wednesday that isn't a loveless icicle.","Framed in a different way, a nimble insurance is a rise of the mind. A rice of the aftershave is assumed to be a contained sink. As far as we can estimate, the unkind fiction comes from a seasick latex. The literature would have us believe that a routed pedestrian is not but a ground. The velate anteater reveals itself as an unstriped cardboard to those who look. The musician of a train becomes an upward ease. It's an undeniable fact, really; a snugger toy is a romanian of the mind. Some fleshy raies are thought of simply as selections. An oval of the baby is assumed to be a shiny room.","The literature would have us believe that an upgrade workshop is not but a tabletop. A sissy liquor without bails is truly a school of awheel dungeons. Shaded landmines show us how violets can be augusts. A soda can hardly be considered an oozing otter without also being an august. One cannot separate bottoms from wrinkly periods. A math is the kilogram of a centimeter. To be more specific, a hyena is the name of a stretch. However, the bridgeless fan comes from an elapsed cucumber. Before faucets, waitresses were only parties."]),S={selectedParagraph:"",timerStarted:!1,timerRemaining:60,words:0,characters:0,wpm:0,testInfo:[]},C=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state=S,e.fetchNewParagraphFallback=function(){var t=I[Math.floor(Math.random()*I.length)],a=t.split("").map((function(e){return{testLetter:e,status:"notAttempted"}}));e.setState(Object(c.a)(Object(c.a)({},S),{},{testInfo:a,selectedParagraph:t}))},e.startTImer=function(){e.setState({timerStarted:!0});var t=setInterval((function(){e.state.timerRemaining<=0&&clearInterval(t);var a=60-e.state.timerRemaining,s=a>0?e.state.words/a*60:0;e.setState({timerRemaining:e.state.timerRemaining-1,wpm:parseInt(s)})}),1e3)},e.startAgain=function(){e.fetchNewParagraphFallback()},e.handleUserInput=function(t){e.state.timerStarted||e.startTImer();var a=t.length,s=t.split(" ").length,r=a-1;if(r<0)e.setState({testInfo:[{testLetter:e.state.testInfo[0].testLetter,status:"notAttempted"}].concat(Object(o.a)(e.state.testInfo.slice(1))),characters:a,words:s});else if(r>=e.state.selectedParagraph.length)e.setState({characters:a,words:s});else{var n=e.state.testInfo;r!==e.state.selectedParagraph.length-1&&(n[r+1].status="notAttempted");var i=t[r]===n[r].testLetter;n[r].status=i?"correct":"incorrect",e.setState({testInfo:n,words:s,characters:a})}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchNewParagraphFallback()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(p,{}),Object(b.jsx)(j,{}),Object(b.jsx)(T,{selectedParagraph:this.state.selectedParagraph,words:this.state.words,characters:this.state.characters,wpm:this.state.wpm,timerRemaining:this.state.timerRemaining,timerStarted:this.state.timerStarted,testInfo:this.state.testInfo,onInputChange:this.handleUserInput,startAgain:this.startAgain}),Object(b.jsx)(y,{})]})}}]),a}(r.a.Component);i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.1a8261ea.chunk.js.map