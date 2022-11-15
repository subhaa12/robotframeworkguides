"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[973],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return t?n.createElement(f,i(i({ref:r},m),{},{components:t})):n.createElement(f,i({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3643:function(e,r,t){t.r(r),t.d(r,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_label:"Browser Library",title:"Browser Library"},s=void 0,p={unversionedId:"different_libraries/browser",id:"different_libraries/browser",title:"Browser Library",description:"Robot Framework Browser library powered by Playwright. Moving browser automation to year 2021!",source:"@site/docs/different_libraries/browser.md",sourceDirName:"different_libraries",slug:"/different_libraries/browser",permalink:"/different_libraries/browser",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/different_libraries/browser.md",tags:[],version:"current",frontMatter:{sidebar_label:"Browser Library",title:"Browser Library"},sidebar:"tutorialSidebar",previous:{title:"Appium Library",permalink:"/different_libraries/appium"},next:{title:"Database Library",permalink:"/different_libraries/database"}},m={},u=[],c={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://robotframework.org"},"Robot Framework")," Browser library powered by ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright"),". Moving browser automation to year 2021!"),(0,o.kt)("p",null,"Aiming for \ud83d\ude80 speed, \u2705 reliability and \ud83d\udd2c visibility."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://marketsquare.github.io/robotframework-browser/Browser.html"},"keyword documentation")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://robotframework-browser.org/"},"web page")," for more details."),(0,o.kt)("h1",{id:"installation-instructions"},"Installation instructions"),(0,o.kt)("p",null,"Only Python 3.7 or newer is supported."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install node.js e.g. from ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")),(0,o.kt)("li",{parentName:"ol"},"Update pip ",(0,o.kt)("inlineCode",{parentName:"li"},"pip install -U pip")," to ensure latest version is used"),(0,o.kt)("li",{parentName:"ol"},"Install robotframework-browser from the commandline: ",(0,o.kt)("inlineCode",{parentName:"li"},"pip install robotframework-browser")),(0,o.kt)("li",{parentName:"ol"},"Install the node dependencies: run ",(0,o.kt)("inlineCode",{parentName:"li"},"rfbrowser init")," in your shell")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if ",(0,o.kt)("inlineCode",{parentName:"li"},"rfbrowser")," is not found, try ",(0,o.kt)("inlineCode",{parentName:"li"},"python -m Browser.entry init"))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Don't forget to install node.js",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/"),(0,o.kt)("br",{parentName:"p"}),"\n","The LTS version is recommended."))),(0,o.kt)("p",null,"You can check your node.js version with ",(0,o.kt)("inlineCode",{parentName:"p"},"node --version")," and your npm version with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm --version"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ node --version\nv18.12.0\n$ npm --version\n8.19.2\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ pip install robotframework-browser\n\n$ rfbrowser init\nInstalling playwright...\nInstalling playwright-chromium...\nInstalling playwright-firefox...\nInstalling playwright-webkit...\nDone!\n")),(0,o.kt)("p",null,"See examples for ",(0,o.kt)("a",{parentName:"p",href:"/examples/todo"},"ToDo App"),", ",(0,o.kt)("a",{parentName:"p",href:"/examples/mfa_login"},"MFA Login")," and ",(0,o.kt)("a",{parentName:"p",href:"/examples/insurance"},"Vehice Insurance"),"."))}d.isMDXComponent=!0}}]);