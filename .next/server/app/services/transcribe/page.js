(()=>{var e={};e.id=342,e.ids=[342],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},233:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>d,pages:()=>p,routeModule:()=>m,tree:()=>l});var n=r(7096),s=r(6132),a=r(7284),o=r.n(a),i=r(2564),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);r.d(t,c);let l=["",{children:["services",{children:["transcribe",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,568)),"/home/marc/Documents/AWS-ACM/awscc-project-1-main/src/app/services/transcribe/page.js"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5163)),"/home/marc/Documents/AWS-ACM/awscc-project-1-main/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/home/marc/Documents/AWS-ACM/awscc-project-1-main/src/app/services/transcribe/page.js"],d="/services/transcribe/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/services/transcribe/page",pathname:"/services/transcribe",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},1055:(e,t,r)=>{Promise.resolve().then(r.bind(r,893))},893:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Transcribe});var n=r(784),s=r(9885),a=r(6979),o=r.n(a),i=r(7584);let components_DownloadButton=({name:e,cls:t,content:r})=>{let a=(0,s.useRef)(null);return(0,n.jsxs)("div",{children:[n.jsx("a",{type:"file",ref:a,style:{display:"none"}}),n.jsx("a",{className:t,onClick:()=>{let e=r.current.innerText||"Default content",t=new Blob([e],{type:"text/plain"}),n=URL.createObjectURL(t);a.current.href=URL.createObjectURL(t),a.current.download="transcript.txt",a.current.click(),URL.revokeObjectURL(n)},children:e})]})};function Transcribe(){let[e,t]=(0,s.useState)(""),r=(0,s.useRef)(),sendTextToAPI=async e=>{try{let t=e.match(/^data:.*;base64,(.*)$/)[1];console.log(t);let n=JSON.stringify({audio_data_base64:t}),s=await fetch("https://bi5onbo6tl.execute-api.us-west-2.amazonaws.com/prod/transcribe",{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:n});console.log(s);let a=await s.json();console.log(a),r.current.innerText=a}catch(e){console.error("Error sending text to API:",e)}};return(0,n.jsxs)("div",{className:o().container,children:[n.jsx("div",{className:o().boxStyle,children:n.jsx("p",{ref:r})}),n.jsx(i.Z,{setFileName:t,name:"Upload",cls:o().uploadButton,content:r,sendTextToAPI:sendTextToAPI}),n.jsx(components_DownloadButton,{name:"Download Transcript",cls:o().downloadButton,content:r})]})}},6979:e=>{e.exports={container:"transcribe_container___ye_n",boxStyle:"transcribe_boxStyle__NyyjB",playButton:"transcribe_playButton__JttC5",downloadButton:"transcribe_downloadButton__V3ObP",uploadButton:"transcribe_uploadButton__xKYZx"}},568:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>a,default:()=>c});var n=r(5153);let s=(0,n.createProxy)(String.raw`/home/marc/Documents/AWS-ACM/awscc-project-1-main/src/app/services/transcribe/page.js`),{__esModule:a,$$typeof:o}=s,i=s.default,c=i}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[396,323,217,107],()=>__webpack_exec__(233));module.exports=r})();