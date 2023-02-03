"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2375],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},l="Robot Framework API",i={unversionedId:"extending_robot_framework/listeners_prerun_api/rf-api",id:"extending_robot_framework/listeners_prerun_api/rf-api",title:"Robot Framework API",description:"What is the Robot Framework API?",source:"@site/docs/extending_robot_framework/listeners_prerun_api/rf-api.md",sourceDirName:"extending_robot_framework/listeners_prerun_api",slug:"/extending_robot_framework/listeners_prerun_api/rf-api",permalink:"/docs/extending_robot_framework/listeners_prerun_api/rf-api",draft:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/docs/extending_robot_framework/listeners_prerun_api/rf-api.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PreRunModifier",permalink:"/docs/extending_robot_framework/listeners_prerun_api/prerunmodifier"},next:{title:"Re-Execute failed tests",permalink:"/docs/flaky_tests"}},s={},u=[{value:"What is the Robot Framework API?",id:"what-is-the-robot-framework-api",level:2},{value:"Run Robot Framework from Python",id:"run-robot-framework-from-python",level:2},{value:"Access and Modify Robot Framework Objects",id:"access-and-modify-robot-framework-objects",level:2},{value:"Execution Results",id:"execution-results",level:3},{value:"Access Execution Results after a Test Run",id:"access-execution-results-after-a-test-run",level:4},{value:"Print the number of passed and failed tests",id:"print-the-number-of-passed-and-failed-tests",level:5},{value:"Write the test name and status to a markdown file",id:"write-the-test-name-and-status-to-a-markdown-file",level:5},{value:"Robot Framework Report",id:"robot-framework-report",level:6},{value:"Access Execution Results returned by the <code>run</code> function",id:"access-execution-results-returned-by-the-run-function",level:4}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"robot-framework-api"},"Robot Framework API"),(0,a.kt)("h2",{id:"what-is-the-robot-framework-api"},"What is the Robot Framework API?"),(0,a.kt)("p",null,"The Robot Framework API allows us to do two main things.  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run commands like ",(0,a.kt)("inlineCode",{parentName:"li"},"robot")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"rebot")," from Python scripts"),(0,a.kt)("li",{parentName:"ul"},"Access and modify all kinds of Robot Framework objects , e.g.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Execution Results"),(0,a.kt)("li",{parentName:"ul"},"Test Suites"),(0,a.kt)("li",{parentName:"ul"},"Parsers"),(0,a.kt)("li",{parentName:"ul"},"Logger"),(0,a.kt)("li",{parentName:"ul"},"Result Writer"),(0,a.kt)("li",{parentName:"ul"},"...")))),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"https://robot-framework.readthedocs.io/en/master/index.html#module-robot.api"},"Public API")," and ",(0,a.kt)("a",{parentName:"p",href:"https://robot-framework.readthedocs.io/en/master/index.html#entry-points"},"Entry Points")," for more information."),(0,a.kt)("p",null,"You can use the API to build your own tools or integrate Robot Framework with other tools.",(0,a.kt)("br",{parentName:"p"}),"\n","Examples are"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Integrating Robot Framework with (Test Management) Tools like Jira or TestRail"),(0,a.kt)("li",{parentName:"ul"},"Building your own Test Runner in Python"),(0,a.kt)("li",{parentName:"ul"},"Create tools for analyzing and refactoring Robot Framework Tests (like ",(0,a.kt)("inlineCode",{parentName:"li"},"robotidy")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"robocop"),")"),(0,a.kt)("li",{parentName:"ul"},"Create UIs for Robot Framework"),(0,a.kt)("li",{parentName:"ul"},"Create Tools to distribute Robot Framework Tests"),(0,a.kt)("li",{parentName:"ul"},"Create Web Services for Robot Framework"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"Use your imagination \ud83e\udd84"),(0,a.kt)("h2",{id:"run-robot-framework-from-python"},"Run Robot Framework from Python"),(0,a.kt)("p",null,"Usually, we run Robot Framework from the command line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"robot tests.robot\n")),(0,a.kt)("p",null,"We often pass some arguments to the command, like ",(0,a.kt)("inlineCode",{parentName:"p"},"--variable")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--outputdir"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"robot --variable BROWSER:chrome --outputdir results tests.robot\n")),(0,a.kt)("p",null,"But we can also run Robot Framework from Python scripts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from robot import run\n\nrun('tests.robot', variable=['BROWSER:chrome'], outputdir='results')\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," function takes the same arguments as the ",(0,a.kt)("inlineCode",{parentName:"p"},"robot")," command."),(0,a.kt)("p",null,"Check out the command-line options in the ",(0,a.kt)("a",{parentName:"p",href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#command-line-options"},"Robot Framework User Guide")," for more information.  "),(0,a.kt)("p",null,"The only difference when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," function is"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"we don't need to prefix the arguments with ",(0,a.kt)("inlineCode",{parentName:"li"},"--"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"--variable")," becomes ",(0,a.kt)("inlineCode",{parentName:"li"},"variable")))),(0,a.kt)("li",{parentName:"ul"},"boolean arguments like ",(0,a.kt)("inlineCode",{parentName:"li"},"--dryrun")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"--exitonfailure")," need to be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"True"),"(or ",(0,a.kt)("inlineCode",{parentName:"li"},"False"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"--dryrun")," becomes ",(0,a.kt)("inlineCode",{parentName:"li"},"dryrun=True")))),(0,a.kt)("li",{parentName:"ul"},"options which can be specified multiple times (like ",(0,a.kt)("inlineCode",{parentName:"li"},"--variable"),") need to be passed as a list",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"--variable BROWSER:chrome --variable URL:https://www.google.com")," becomes ",(0,a.kt)("inlineCode",{parentName:"li"},"variable=['BROWSER:chrome', 'URL:https://www.google.com']"))))),(0,a.kt)("p",null,"If you prefer the command line syntax, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"robot.run_cli")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from robot import run_cli\n\nrc = run_cli(['--variable', 'BROWSER:chrome', '--outputdir', 'results', 'tests.robot'])\n")),(0,a.kt)("h2",{id:"access-and-modify-robot-framework-objects"},"Access and Modify Robot Framework Objects"),(0,a.kt)("h3",{id:"execution-results"},"Execution Results"),(0,a.kt)("h4",{id:"access-execution-results-after-a-test-run"},"Access Execution Results after a Test Run"),(0,a.kt)("p",null,"After a test run, we can access the execution results with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecutionResult")," object."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecutionResult")," object is returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," function or can be created from an ",(0,a.kt)("inlineCode",{parentName:"p"},"output.xml")," file."),(0,a.kt)("h5",{id:"print-the-number-of-passed-and-failed-tests"},"Print the number of passed and failed tests"),(0,a.kt)("p",null,"The example below shows how to print the number of passed and failed tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from robot.api import ExecutionResult\nresult = ExecutionResult(\'output.xml\')\nstats = result.statistics\nprint(f"Number of Failed Tests: {stats.failed}")\nprint(f"Total number of Tests: {stats.passed}")\n')),(0,a.kt)("h5",{id:"write-the-test-name-and-status-to-a-markdown-file"},"Write the test name and status to a markdown file"),(0,a.kt)("p",null,"You can combine the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecutionResult")," object with the ",(0,a.kt)("a",{parentName:"p",href:"https://robot-framework.readthedocs.io/en/stable/autodoc/robot.result.html?highlight=Resultvisitor%20#module-robot.result.visitor"},"ResultVisitor")," class to access the results in a structured way.  "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ResultVisitor"),' class will allow you to "walk" through the results and react to certain events (similar to the ',(0,a.kt)("a",{parentName:"p",href:"/docs/extending_robot_framework/listeners_prerun_api/listeners"},"Listener"),")"),(0,a.kt)("p",null,"The example below will visit all tests and write the test name and status to a markdown file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="report.py"',title:'"report.py"'},'from robot.api import ExecutionResult, ResultVisitor\nimport sys\n\nclass MyResultVisitor(ResultVisitor):\n    def __init__(self, markdown_file=\'report.md\'):\n        self.failed_tests = []\n        self.passed_tests = []\n        self.markdown_file = markdown_file\n\n    def visit_test(self, test):\n        if test.status == \'FAIL\':\n            self.failed_tests.append(test.name)\n        elif test.status == \'PASS\':\n            self.passed_tests.append(test.name)\n\n    def end_result(self, result):\n        # Create a new markdown file\n        with open(self.markdown_file, "w") as f:\n            f.write("# Robot Framework Report\\n")\n            f.write("|Test|Status|\\n")\n            f.write("|---|---|\\n")\n            for test in self.passed_tests:\n                f.write(f"|{test}|PASS|\\n")\n            for test in self.failed_tests:\n                f.write(f"|{test}|FAIL|\\n")\n                \nif __name__ == \'__main__\':\n    try:\n        output_file = sys.argv[1]\n    except IndexError:\n        output_file = "output.xml"\n    try:\n        markdown_file = sys.argv[2]\n    except IndexError:\n        markdown_file = "report.md"\n    result = ExecutionResult(output_file)\n    result.visit(MyResultVisitor())\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python report.py output.xml report.md\n")),(0,a.kt)("p",null,"That's how the result will look like:"),(0,a.kt)("h6",{id:"robot-framework-report"},"Robot Framework Report"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Test"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"My First Test Case"),(0,a.kt)("td",{parentName:"tr",align:null},"PASS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"My Second Test Case As Keyword"),(0,a.kt)("td",{parentName:"tr",align:null},"PASS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Some Other Test Case"),(0,a.kt)("td",{parentName:"tr",align:null},"PASS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A Failed Test Case"),(0,a.kt)("td",{parentName:"tr",align:null},"FAIL")))),(0,a.kt)("h4",{id:"access-execution-results-returned-by-the-run-function"},"Access Execution Results returned by the ",(0,a.kt)("inlineCode",{parentName:"h4"},"run")," function"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," function returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecutionResult")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from robot import run\n\nresult = run('tests.robot', variable=['BROWSER:chrome'], outputdir='results')\n\nprint(result.suite.name)\nstats = result.statistics\nprint(f\"Number of Failed Tests: {stats.failed}\")\nprint(f\"Total number of Tests: {stats.passed}\")\n")))}m.isMDXComponent=!0}}]);