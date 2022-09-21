"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[573],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return c}});var o=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),m=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=m(e.components);return o.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},k=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=m(t),c=a,b=k["".concat(s,".").concat(c)]||k[c]||u[c]||n;return t?o.createElement(b,i(i({ref:r},p),{},{components:t})):o.createElement(b,i({ref:r},p))}));function c(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=k;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<n;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9356:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var o=t(7462),a=t(3366),n=(t(7294),t(3905)),i=["components"],l={sidebar_position:1,sidebar_label:"Docker Images",title:"Docker Images for Robot Framework"},s=void 0,m={unversionedId:"using_rf_in_ci_systems/docker",id:"using_rf_in_ci_systems/docker",title:"Docker Images for Robot Framework",description:"Popular Docker Images for Robot Framework",source:"@site/docs/using_rf_in_ci_systems/docker.md",sourceDirName:"using_rf_in_ci_systems",slug:"/using_rf_in_ci_systems/docker",permalink:"/robotframeworkguides/using_rf_in_ci_systems/docker",editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/using_rf_in_ci_systems/docker.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Docker Images",title:"Docker Images for Robot Framework"},sidebar:"tutorialSidebar",previous:{title:"TodoMVC",permalink:"/robotframeworkguides/examples/todo"},next:{title:"CI Systems",permalink:"/robotframeworkguides/using_rf_in_ci_systems/ci"}},p={},u=[{value:"Popular Docker Images for Robot Framework",id:"popular-docker-images-for-robot-framework",level:2},{value:"marketsquare/robotframework-browser",id:"marketsquarerobotframework-browser",level:3},{value:"ppodgorsek/robot-framework",id:"ppodgorsekrobot-framework",level:3},{value:"Creating your own Docker Image",id:"creating-your-own-docker-image",level:2},{value:"Examples",id:"examples",level:3}],k={toc:u};function c(e){var r=e.components,t=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},k,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"popular-docker-images-for-robot-framework"},"Popular Docker Images for Robot Framework"),(0,n.kt)("h3",{id:"marketsquarerobotframework-browser"},"marketsquare/robotframework-browser"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/MarketSquare/robotframework-browser/tree/main/docker"},"https://github.com/MarketSquare/robotframework-browser/tree/main/docker")),(0,n.kt)("p",null,"The image comes with latest robotframework-browser and robotframework, and with pre-initialized browsers and other dependencies for running headful tests in the container."),(0,n.kt)("p",null,"Example usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --rm -v $(pwd)/atest/test/:/test --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json marketsquare/robotframework-browser:latest bash -c "robot --outputdir /test/output /test"\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"docker run -v")," is used to mount the directory containing tests on the supervising machine. In this example robot output will also be output inside the test directory"),(0,n.kt)("h3",{id:"ppodgorsekrobot-framework"},"ppodgorsek/robot-framework"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/ppodgorsek/docker-robot-framework"},"https://github.com/ppodgorsek/docker-robot-framework")),(0,n.kt)("p",null,"The image contains latest robot-framework and a huge collection of helpful libraries."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/robotframework/robotframework"},"Robot Framework")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/MarketSquare/robotframework-browser"},"Robot Framework Browser Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/franz-see/Robotframework-Database-Library"},"Robot Framework DatabaseLibrary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Snooz82/robotframework-datadriver"},"Robot Framework Datadriver")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/testautomation/DateTimeTZ"},"Robot Framework DateTimeTZ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/guykisel/robotframework-faker"},"Robot Framework Faker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kowalpy/Robot-Framework-FTP-Library"},"Robot Framework FTPLibrary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pypi.org/project/robotframework-imaplibrary2/"},"Robot Framework IMAPLibrary 2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mkorpela/pabot"},"Robot Framework Pabot")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bulkan/robotframework-requests"},"Robot Framework Requests")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/robotframework/SeleniumLibrary"},"Robot Framework SeleniumLibrary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/robotframework/SSHLibrary"},"Robot Framework SSHLibrary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mozilla-services/axe-selenium-python"},"Axe Selenium Library")),(0,n.kt)("li",{parentName:"ul"},"Firefox"),(0,n.kt)("li",{parentName:"ul"},"Chromium"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pypi.org/project/awscli/"},"Amazon AWS CLI"))),(0,n.kt)("p",null,"This container can be run using the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"    docker run \\\n        -v <local path to the reports' folder>:/opt/robotframework/reports:Z \\\n        -v <local path to the test suites' folder>:/opt/robotframework/tests:Z \\\n        ppodgorsek/robot-framework:<version>\n")),(0,n.kt)("h2",{id:"creating-your-own-docker-image"},"Creating your own Docker Image"),(0,n.kt)("p",null,"You can choose from a lot of different base images to build your own Docker image."),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,"A very small image based on alpine, which only adds robotframework"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM python:3-alpine\nRUN pip3 install robotframework\n")),(0,n.kt)("p",null,"An image containing robotframework and robotframework-browser.",(0,n.kt)("br",{parentName:"p"}),"\n","It is based on ",(0,n.kt)("inlineCode",{parentName:"p"},"playwright")," baseimage, as it contains necessary dependencies like nodejs and npm."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM mcr.microsoft.com/playwright:focal\nUSER root\nRUN apt-get update\nRUN apt-get install -y python3-pip\nUSER pwuser\nRUN pip3 install --user robotframework\nRUN pip3 install --user robotframework-browser\nRUN ~/.local/bin/rfbrowser init\nENV NODE_PATH=/usr/lib/node_modules\nENV PATH="/home/pwuser/.local/bin:${PATH}"\n')),(0,n.kt)("p",null,"You can add your python dependencies into a file ",(0,n.kt)("inlineCode",{parentName:"p"},"requirements.txt")," and then install them using ",(0,n.kt)("inlineCode",{parentName:"p"},"pip3 install -r requirements.txt"),"."),(0,n.kt)("p",null,"requirements.txt"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"robotframework\nrobotframework-requests\nrobotframework-datadriver\n")),(0,n.kt)("p",null,"Dockerfile"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM python:3-alpine\nCOPY requirements.txt /tmp/requirements.txt\nRUN pip3 install -r /tmp/requirements.txt\n")))}c.isMDXComponent=!0}}]);