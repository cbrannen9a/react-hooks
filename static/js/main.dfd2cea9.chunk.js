(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{245:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(36),u=n.n(c),s=(n(46),n(48),n(250)),r=n(251),l=n(252),i=n(249),m=n(247),p="/",d="/react-hooks/",h="/react-hooks/useState/",f=function(){return o.a.createElement("div",{className:"App-header"},o.a.createElement("button",{className:"button"},o.a.createElement(m.a,{to:h},"UseState")))},b=n(7),E=n(37),C=n(9),k=n(8),v=n(10),S=n(248),N=n(5),j=n(12),w=function(){var t=Object(a.useState)(0),e=Object(j.a)(t,2),n=e[0],c=e[1];return o.a.createElement("div",{className:"content"},o.a.createElement("h4",null,"UseState"),o.a.createElement("p",null,"You clicked ",n," times"),o.a.createElement("button",{className:"button",onClick:function(){return c(n+1)}},"Click me"))},O=function(t){var e=Object(a.useState)(t.count),n=Object(j.a)(e,2),c=n[0],u=n[1];return o.a.createElement("div",{className:"content"},o.a.createElement("h4",null,"UseState with props"),o.a.createElement("p",null,"You clicked ",c," times"),o.a.createElement("button",{className:"button",onClick:function(){return u(c+1)}},"Click me"))},g=function(){var t=Object(a.useState)(0),e=Object(j.a)(t,2),n=e[0],c=e[1];return o.a.createElement("div",{className:"content"},o.a.createElement("h4",null,"UseState with function"),o.a.createElement("p",null,"You clicked ",n," times"),o.a.createElement("button",{className:"button",onClick:function(){c(n+2*(n+1))}},"Click me"))},x=function(){var t=Object(a.useState)(0),e=Object(j.a)(t,2),n=e[0],c=e[1],u=Object(a.useState)(1),s=Object(j.a)(u,2),r=s[0],l=s[1],i={"+":function(){c(n+r)},"*":function(){c(n*r)},"-":function(){c(n-r)},"/":function(){c(n/r)}};return o.a.createElement("div",{className:"content"},o.a.createElement("h4",null,"UseState with multiple functions"),o.a.createElement("p",null,"You clicked ",n," times"),[1,2,3,4,5,6,7,8,9,"\ud83e\udd84"].map(function(t){return o.a.createElement("button",{className:"button",key:t,onClick:function(){return l("\ud83e\udd84"===(e=t)?Math.round(1e3*Math.random(),0):e);var e}},t)}),o.a.createElement("div",null,["+","*","-","/"].map(function(t){return o.a.createElement("button",{className:"button",key:t,onClick:function(){return i[t]()}},t,r)})),o.a.createElement("button",{className:"button",onClick:function(){return c(0)}},"Reset"))},y='export const UseState = () => {\n\t//Declare state value of count and setCount function to update\n\t//set the initial value of count as 0\n\tconst [count, setCount] = useState(0);\n\n\t//setCount function \n\treturn(\n\t\t<div className = "content" >\n\t\t\t<h4>UseState</h4>\n\t\t\t<p>You clicked {count} times</p>\n\t\t\t<button\n\t\t\t\tclassName="button"\n\t\t\t\tonClick={() => setCount(count + 1)}>\n\t\t\t\tClick me\n      \t\t</button>\n\t\t</div >\n\t);\n}; ',W='export const UseStateII = (props) => {\n\tconst [count, setCount] = useState(props.count);\n\n\treturn(\n\t\t<div className = "content" >\n\t\t\t<h4>UseState with props</h4>\n\t\t\t<p>You clicked {count} times</p>\n\t\t\t<button\n\t\t\t\tclassName="button"\n\t\t\t\tonClick={() => setCount(count + 1)}>\n\t\t\t\tClick me\n      \t\t</button>\n\t\t</div >\n\t);\n};',Y='export const UseStateIII = () => {\n\tconst [count, setCount] = useState(0);\n\n\tconst updateCount = () => {\n\t\tlet powerCount = (count + 1) * 2;\n\t\tsetCount(count + powerCount);\n\t};\n\n\treturn(\n\t\t<div className = "content" >\n\t\t\t<h4>UseState with function</h4>\n\t\t\t<p>You clicked {count} times</p>\n\t\t\t<button\n\t\t\t\tclassName="button"\n\t\t\t\tonClick={() => updateCount()}>\n\t\t\t\tClick me\n      \t\t</button>\n\t\t</div >\n\t);\n};',I='export const UseStateIV = () => {\n\tconst [count, setCount] = useState(0);\n\tconst [factor, setFactor] = useState(1);\n\n\tconst factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "\ud83e\udd84"];\n\tconst operators = ["+", "*", "-", "/"];\n\n\tconst updateCount = {\n\t\t"+": () => { setCount(count + factor); },\n\t\t"*": () => { setCount(count * factor); },\n\t\t"-": () => { setCount(count - factor); },\n\t\t"/": () => { setCount(count / factor); }\n\t};\n\n\tconst updateFactor = (factor) => {\n\t\tif (factor === "\ud83e\udd84") {\n\t\t\treturn setFactor(Math.round(Math.random() * 1000, 0));\n\t\t}\n\t\treturn setFactor(factor);\n\t};\n\n\treturn(\n\t\t<div className = "content" >\n\t\t\t<h4>UseState with multiple functions</h4>\n\t\t\t<p>You clicked {count} times</p>\n\t\t\t{\n\t\t\tfactors.map(f => <button\n\t\t\t\tclassName="button"\n\t\t\t\tkey={f}\n\t\t\t\tonClick={() => updateFactor(f)}>\n\t\t\t\t{f}\n\t\t\t</button>)\n}\n\t< div >\n\t{\n\t\toperators.map(o => <button\n\t\t\tclassName="button"\n\t\t\tkey={o}\n\t\t\tonClick={() => updateCount[o]()} >\n\t\t\t{o}{factor}\n\t\t</button>)\n\t}\n\t\t\t</div >\n\t<button\n\t\tclassName="button"\n\t\tonClick={() => setCount(0)}>\n\t\tReset\n\t\t\t</button>\n\t\t</div >\n\t);\n};',U=function(t){function e(t){var n;return Object(b.a)(this,e),(n=Object(C.a)(this,Object(k.a)(e).call(this,t))).render=function(){return o.a.createElement("div",{className:"content"},o.a.createElement("h4",null,"WithState"),o.a.createElement("p",null,"You clicked ",n.state.count," times"),o.a.createElement("button",{className:"button",onClick:function(){return n.setState({count:n.state.count+1})}},"Click me"))},n.state={count:0},n}return Object(v.a)(e,t),e}(a.Component),R=function(t){function e(t){var n;return Object(b.a)(this,e),(n=Object(C.a)(this,Object(k.a)(e).call(this,t))).render=function(){return o.a.createElement("div",{className:"content"},o.a.createElement("h4",null,"WithState from props"),o.a.createElement("p",null,"You clicked ",n.state.count," times"),o.a.createElement("button",{className:"button",onClick:function(){return n.setState({count:n.state.count+1})}},"Click me"))},n.state={count:n.props.count},n}return Object(v.a)(e,t),e}(a.Component),F=function(t){function e(t){var n;return Object(b.a)(this,e),(n=Object(C.a)(this,Object(k.a)(e).call(this,t))).updateCount=function(){var t=2*(n.state.count+1);n.setState({count:n.state.count+t})},n.render=function(){return o.a.createElement("div",{className:"content"},o.a.createElement("h4",null,"WithState with function"),o.a.createElement("p",null,"You clicked ",n.state.count," times"),o.a.createElement("button",{className:"button",onClick:function(){return n.updateCount()}},"Click me"))},n.state={count:0},n}return Object(v.a)(e,t),e}(a.Component),B=function(t){function e(t){var n;return Object(b.a)(this,e),(n=Object(C.a)(this,Object(k.a)(e).call(this,t))).updateFactor=function(t){return"\ud83e\udd84"===t?n.setState({factor:Math.round(1e3*Math.random(),0)}):n.setState({factor:t})},n.updateCount=function(t){return{"+":function(){n.setState({count:n.state.count+n.state.factor})},"*":function(){n.setState({count:n.state.count*n.state.factor})},"-":function(){n.setState({count:n.state.count-n.state.factor})},"/":function(){n.setState({count:n.state.count/n.state.factor})}}[t]()},n.render=function(){return o.a.createElement("div",{className:"content"},o.a.createElement("h4",null,"WithState from props"),o.a.createElement("p",null,"You clicked ",n.state.count," times"),[1,2,3,4,5,6,7,8,9,"\ud83e\udd84"].map(function(t){return o.a.createElement("button",{className:"button",key:t,onClick:function(){return n.updateFactor(t)}},t)}),o.a.createElement("div",null,["+","*","-","/"].map(function(t){return o.a.createElement("button",{className:"button",key:t,onClick:function(){return n.updateCount(t)}},t,n.state.factor)})),o.a.createElement("button",{className:"button",onClick:function(){return n.setState({count:0})}},"Reset"))},n.state={count:0,factor:1},n}return Object(v.a)(e,t),e}(a.Component),M='export class WithState extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tcount: 0\n\t\t};\n\t}\n\n\trender = () => {\n\t\treturn (\n\t\t\t<div className="content">\n\t\t\t\t<h4>WithState</h4>\n\t\t\t\t<p>You clicked {this.state.count} times</p>\n\t\t\t\t<button\n\t\t\t\t\tclassName="button"\n\t\t\t\t\tonClick={() => this.setState({ count: this.state.count + 1 })}>\n\t\t\t\t\tClick me\n       \t\t\t </button>\n\t\t\t</div>\n\t\t);\n\t}\n}',A='export class WithStateII extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tcount: this.props.count\n\t\t};\n\t}\n\n\trender = () => {\n\t\treturn (\n\t\t\t<div className="content">\n\t\t\t\t<h4>WithState from props</h4>\n\t\t\t\t<p>You clicked {this.state.count} times</p>\n\t\t\t\t<button\n\t\t\t\t\tclassName="button"\n\t\t\t\t\tonClick={() => this.setState({ count: this.state.count + 1 })}>\n\t\t\t\t\tClick me\n       \t\t\t </button>\n\t\t\t</div>\n\t\t);\n\t}\n}',H='export class WithStateIII extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tcount: 0\n\t\t};\n\t}\n\n\tupdateCount = () => {\n\t\tlet powerCount = (this.state.count + 1) * 2;\n\t\tthis.setState({\n\t\t\tcount: this.state.count + powerCount\n\t\t});\n\t}\n\n\trender = () => {\n\t\treturn (\n\t\t\t<div className="content">\n\t\t\t\t<h4>WithState with function</h4>\n\t\t\t\t<p>You clicked {this.state.count} times</p>\n\t\t\t\t<button\n\t\t\t\t\tclassName="button"\n\t\t\t\t\tonClick={() => this.updateCount()}>\n\t\t\t\t\tClick me\n       \t\t\t </button>\n\t\t\t</div>\n\t\t);\n\t}\n}',J='export class WithStateIV extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\tcount: 0,\n\t\t\tfactor: 1\n\t\t};\n\t}\n\n\tupdateFactor = (factor) => {\n\t\tif (factor === "\ud83e\udd84") {\n\n\t\t\treturn this.setState({ factor: Math.round(Math.random() * 1000, 0) });\n\t\t}\n\t\treturn this.setState({ factor: factor });\n\t}\n\n\tupdateCount = (operator) => {\n\t\t\tconst updateCount = {\n\t\t\t\t"+": () => { this.setState({ count: (this.state.count + this.state.factor) }); },\n\t\t\t\t"*": () => { this.setState({ count: (this.state.count * this.state.factor) }); },\n\t\t\t\t"-": () => { this.setState({ count: (this.state.count - this.state.factor) }); },\n\t\t\t\t"/": () => { this.setState({ count: (this.state.count / this.state.factor) }); }\n\t\t\t};\n\t\t\treturn updateCount[operator]();\n\t\t}\n\n\trender = () => {\n\t\tconst factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "\ud83e\udd84"];\n\t\tconst operators = ["+", "*", "-", "/"];\n\n\t\treturn (\n\t\t\t<div className="content">\n\t\t\t\t<h4>WithState from props</h4>\n\t\t\t\t<p>You clicked {this.state.count} times</p>\n\t\t\t\t{\n\t\t\t\t\tfactors.map(f => <button\n\t\t\t\t\t\tclassName="button"\n\t\t\t\t\t\tkey={f}\n\t\t\t\t\t\tonClick={() => this.updateFactor(f)}>\n\t\t\t\t\t\t{f}\n\t\t\t\t\t</button>)}\n\t\t\t\t<div>\n\t\t\t\t\t{\n\t\t\t\t\t\toperators.map(o => <button\n\t\t\t\t\t\t\tclassName="button"\n\t\t\t\t\t\t\tkey={o}\n\t\t\t\t\t\t\tonClick={() => this.updateCount(o)} >\n\t\t\t\t\t\t\t{o}{this.state.factor}\n\t\t\t\t\t\t</button>)\n\t\t\t\t\t}\n\t\t\t\t</div>\n\t\t\t\t<button\n\t\t\t\t\tclassName="button"\n\t\t\t\t\tonClick={() => this.setState({ count: 0 })}>\n\t\t\t\t\tReset\n\t\t\t</button>\n\t\t\t</div>\n\t\t);\n\t}\n}',V=function(t){function e(){return Object(b.a)(this,e),Object(C.a)(this,Object(k.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(E.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App-header"},o.a.createElement("button",{className:"button"},o.a.createElement(m.a,{to:d},"Back")),o.a.createElement("div",{className:"contentBox"},o.a.createElement("h3",{className:"content"},"With Hooks"),o.a.createElement("h3",{className:"content"},"Without Hooks")),o.a.createElement("div",{className:"contentBox"},o.a.createElement(w,null),o.a.createElement(U,null)),o.a.createElement("div",null,o.a.createElement(S.a,{language:"javascript",style:N.tomorrow,customStyle:{borderRadius:"10px",padding:"1.5em"}},y),o.a.createElement(S.a,{language:"javascript",style:N.tomorrow,customStyle:{borderRadius:"10px",padding:"1.5em"}},M)),o.a.createElement("div",{className:"contentBox"},o.a.createElement(O,{count:100}),o.a.createElement(R,{count:100})),o.a.createElement("div",null,o.a.createElement(S.a,{language:"javascript",style:N.tomorrow,customStyle:{borderRadius:"10px",padding:"1.5em"}},W),o.a.createElement(S.a,{language:"javascript",style:N.tomorrow,customStyle:{borderRadius:"10px",padding:"1.5em"}},A)),o.a.createElement("div",{className:"contentBox"},o.a.createElement(g,null),o.a.createElement(F,null)),o.a.createElement("div",null,o.a.createElement(S.a,{language:"javascript",style:N.tomorrow,customStyle:{borderRadius:"10px",padding:"1.5em"}},Y),o.a.createElement(S.a,{language:"javascript",style:N.tomorrow,customStyle:{borderRadius:"10px",padding:"1.5em"}},H)),o.a.createElement("div",{className:"contentBox"},o.a.createElement(x,null),o.a.createElement(B,null)),o.a.createElement("div",null,o.a.createElement(S.a,{language:"javascript",style:N.tomorrow,customStyle:{borderRadius:"10px",padding:"1.5em"}},I),o.a.createElement(S.a,{language:"javascript",style:N.tomorrow,customStyle:{borderRadius:"10px",padding:"1.5em"}},J)))}}]),e}(a.Component),D=function(){return o.a.createElement("div",{className:"App-header"},o.a.createElement("h1",{className:"NotFound-title"},"Oops! Page not found"),o.a.createElement("button",{className:"button"},o.a.createElement(m.a,{to:d,className:"NotFound-link"},"Go to home page")))},G=function(){return o.a.createElement(s.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(r.a,null,o.a.createElement(l.a,{exact:!0,path:d,component:f}),o.a.createElement(l.a,{exact:!0,path:h,component:V}),o.a.createElement(l.a,{component:D}),o.a.createElement(i.a,{from:p,to:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},41:function(t,e,n){t.exports=n(245)},46:function(t,e,n){},48:function(t,e,n){}},[[41,2,1]]]);
//# sourceMappingURL=main.dfd2cea9.chunk.js.map