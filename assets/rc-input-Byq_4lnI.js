import{c as x}from"./classnames-D3cBJY9G.js";import{a as d,r as m}from"./react-CvHEjaVo.js";import{d as he,b as C,g as fe,e as K,k as ge,c as de,f as pe}from"./@babel-DlrNZQSW.js";import{z as Ne,y as Re}from"./rc-util-SZQLh1vV.js";function be(e){return!!(e.addonBefore||e.addonAfter)}function _e(e){return!!(e.prefix||e.suffix||e.allowClear)}function ve(e,t,u){var r=t.cloneNode(!0),o=Object.create(e,{target:{value:r},currentTarget:{value:r}});return r.value=u,typeof t.selectionStart=="number"&&typeof t.selectionEnd=="number"&&(r.selectionStart=t.selectionStart,r.selectionEnd=t.selectionEnd),r.setSelectionRange=function(){t.setSelectionRange.apply(t,arguments)},o}function me(e,t,u,r){if(u){var o=t;if(t.type==="click"){o=ve(t,e,""),u(o);return}if(e.type!=="file"&&r!==void 0){o=ve(t,e,r),u(o);return}u(o)}}function Fe(e,t){if(e){e.focus(t);var u=t||{},r=u.cursor;if(r){var o=e.value.length;switch(r){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(o,o);break;default:e.setSelectionRange(0,o)}}}}var ke=d.forwardRef(function(e,t){var u,r,o,b=e.inputElement,_=e.children,h=e.prefixCls,D=e.prefix,F=e.suffix,S=e.addonBefore,k=e.addonAfter,re=e.className,le=e.style,M=e.disabled,L=e.readOnly,ue=e.focused,j=e.triggerFocus,g=e.allowClear,P=e.value,T=e.handleReset,w=e.hidden,s=e.classes,a=e.classNames,A=e.dataAttrs,y=e.styles,f=e.components,O=e.onClear,Z=_??b,$=(f==null?void 0:f.affixWrapper)||"span",G=(f==null?void 0:f.groupWrapper)||"span",p=(f==null?void 0:f.wrapper)||"span",i=(f==null?void 0:f.groupAddon)||"span",H=m.useRef(null),V=function(B){var X;(X=H.current)!==null&&X!==void 0&&X.contains(B.target)&&(j==null||j())},ee=_e(e),E=m.cloneElement(Z,{value:P,className:x((u=Z.props)===null||u===void 0?void 0:u.className,!ee&&(a==null?void 0:a.variant))||null}),z=m.useRef(null);if(d.useImperativeHandle(t,function(){return{nativeElement:z.current||H.current}}),ee){var q=null;if(g){var J=!M&&!L&&P,Q="".concat(h,"-clear-icon"),ne=he(g)==="object"&&g!==null&&g!==void 0&&g.clearIcon?g.clearIcon:"✖";q=d.createElement("button",{type:"button",onClick:function(B){T==null||T(B),O==null||O()},onMouseDown:function(B){return B.preventDefault()},className:x(Q,C(C({},"".concat(Q,"-hidden"),!J),"".concat(Q,"-has-suffix"),!!F))},ne)}var N="".concat(h,"-affix-wrapper"),ie=x(N,C(C(C(C(C({},"".concat(h,"-disabled"),M),"".concat(N,"-disabled"),M),"".concat(N,"-focused"),ue),"".concat(N,"-readonly"),L),"".concat(N,"-input-with-clear-btn"),F&&g&&P),s==null?void 0:s.affixWrapper,a==null?void 0:a.affixWrapper,a==null?void 0:a.variant),v=(F||g)&&d.createElement("span",{className:x("".concat(h,"-suffix"),a==null?void 0:a.suffix),style:y==null?void 0:y.suffix},q,F);E=d.createElement($,fe({className:ie,style:y==null?void 0:y.affixWrapper,onClick:V},A==null?void 0:A.affixWrapper,{ref:H}),D&&d.createElement("span",{className:x("".concat(h,"-prefix"),a==null?void 0:a.prefix),style:y==null?void 0:y.prefix},D),E,v)}if(be(e)){var R="".concat(h,"-group"),U="".concat(R,"-addon"),te="".concat(R,"-wrapper"),ae=x("".concat(h,"-wrapper"),R,s==null?void 0:s.wrapper,a==null?void 0:a.wrapper),se=x(te,C({},"".concat(te,"-disabled"),M),s==null?void 0:s.group,a==null?void 0:a.groupWrapper);E=d.createElement(G,{className:se,ref:z},d.createElement(p,{className:ae},S&&d.createElement(i,{className:U},S),E,k&&d.createElement(i,{className:U},k)))}return d.cloneElement(E,{className:x((r=E.props)===null||r===void 0?void 0:r.className,re)||null,style:K(K({},(o=E.props)===null||o===void 0?void 0:o.style),le),hidden:w})}),Ae=["show"];function Be(e,t){return m.useMemo(function(){var u={};t&&(u.show=he(t)==="object"&&t.formatter?t.formatter:!!t),u=K(K({},u),e);var r=u,o=r.show,b=ge(r,Ae);return K(K({},b),{},{show:!!o,showFormatter:typeof o=="function"?o:void 0,strategy:b.strategy||function(_){return _.length}})},[e,t])}var Ie=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],Oe=m.forwardRef(function(e,t){var u=e.autoComplete,r=e.onChange,o=e.onFocus,b=e.onBlur,_=e.onPressEnter,h=e.onKeyDown,D=e.onKeyUp,F=e.prefixCls,S=F===void 0?"rc-input":F,k=e.disabled,re=e.htmlSize,le=e.className,M=e.maxLength,L=e.suffix,ue=e.showCount,j=e.count,g=e.type,P=g===void 0?"text":g,T=e.classes,w=e.classNames,s=e.styles,a=e.onCompositionStart,A=e.onCompositionEnd,y=ge(e,Ie),f=m.useState(!1),O=de(f,2),Z=O[0],$=O[1],G=m.useRef(!1),p=m.useRef(!1),i=m.useRef(null),H=m.useRef(null),V=function(n){i.current&&Fe(i.current,n)},ee=Ne(e.defaultValue,{value:e.value}),E=de(ee,2),z=E[0],q=E[1],J=z==null?"":String(z),Q=m.useState(null),ne=de(Q,2),N=ne[0],ie=ne[1],v=Be(j,ue),R=v.max||M,U=v.strategy(J),te=!!R&&U>R;m.useImperativeHandle(t,function(){var l;return{focus:V,blur:function(){var c;(c=i.current)===null||c===void 0||c.blur()},setSelectionRange:function(c,Y,W){var I;(I=i.current)===null||I===void 0||I.setSelectionRange(c,Y,W)},select:function(){var c;(c=i.current)===null||c===void 0||c.select()},input:i.current,nativeElement:((l=H.current)===null||l===void 0?void 0:l.nativeElement)||i.current}}),m.useEffect(function(){p.current&&(p.current=!1),$(function(l){return l&&k?!1:l})},[k]);var ae=function(n,c,Y){var W=c;if(!G.current&&v.exceedFormatter&&v.max&&v.strategy(c)>v.max){if(W=v.exceedFormatter(c,{max:v.max}),c!==W){var I,ce;ie([((I=i.current)===null||I===void 0?void 0:I.selectionStart)||0,((ce=i.current)===null||ce===void 0?void 0:ce.selectionEnd)||0])}}else if(Y.source==="compositionEnd")return;q(W),i.current&&me(i.current,n,r,W)};m.useEffect(function(){if(N){var l;(l=i.current)===null||l===void 0||l.setSelectionRange.apply(l,pe(N))}},[N]);var se=function(n){ae(n,n.target.value,{source:"change"})},oe=function(n){G.current=!1,ae(n,n.currentTarget.value,{source:"compositionEnd"}),A==null||A(n)},B=function(n){_&&n.key==="Enter"&&!p.current&&(p.current=!0,_(n)),h==null||h(n)},X=function(n){n.key==="Enter"&&(p.current=!1),D==null||D(n)},ye=function(n){$(!0),o==null||o(n)},xe=function(n){p.current&&(p.current=!1),$(!1),b==null||b(n)},Ee=function(n){q(""),V(),i.current&&me(i.current,n,r)},Ce=te&&"".concat(S,"-out-of-range"),Se=function(){var n=Re(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return d.createElement("input",fe({autoComplete:u},n,{onChange:se,onFocus:ye,onBlur:xe,onKeyDown:B,onKeyUp:X,className:x(S,C({},"".concat(S,"-disabled"),k),w==null?void 0:w.input),style:s==null?void 0:s.input,ref:i,size:re,type:P,onCompositionStart:function(Y){G.current=!0,a==null||a(Y)},onCompositionEnd:oe}))},we=function(){var n=Number(R)>0;if(L||v.show){var c=v.showFormatter?v.showFormatter({value:J,count:U,maxLength:R}):"".concat(U).concat(n?" / ".concat(R):"");return d.createElement(d.Fragment,null,v.show&&d.createElement("span",{className:x("".concat(S,"-show-count-suffix"),C({},"".concat(S,"-show-count-has-suffix"),!!L),w==null?void 0:w.count),style:K({},s==null?void 0:s.count)},c),L)}return null};return d.createElement(ke,fe({},y,{prefixCls:S,className:x(le,Ce),handleReset:Ee,value:J,focused:Z,triggerFocus:V,suffix:we(),disabled:k,classes:T,classNames:w,styles:s}),Se())});export{ke as B,Oe as I,me as r,Fe as t,Be as u};
