(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1912:(e,s,n)=>{Promise.resolve().then(n.bind(n,6895))},3389:()=>{},6895:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>v});var a=n(5155);n(3389);var t=n(3464);let i="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=".concat("AIzaSyCUePWyqyham0elOS5g9_0nsntCRcEGCS4"),l=e=>'\nAnalyze and rank the following items based on their level of general acceptance, recognition, and widespread use across various demographics, industries, or regions.\n\nItems to rank:\n\n{{QUERY}}\n\nPlease return a structured JSON object with the following keys:\n\n"winner": The number corresponding to the item with the highest level of general acceptance and widespread use.\n"analysis": A brief explanation justifying your ranking, detailing why the \'winner\' item is more widely accepted and recognized compared to the others.\n'.replace("{{QUERY}}",e.map((e,s)=>"".concat(s+1,". ").concat(e)).join("\n")),r=async e=>{let s=null,n=l(e);try{var a,r,o,c,d,h;let e=await (0,t.A)({method:"post",url:i,data:{generationConfig:{response_mime_type:"application/json"},contents:[{parts:[{text:n}]}]}}),l=null===(h=e.data)||void 0===h?void 0:null===(d=h.candidates)||void 0===d?void 0:null===(c=d[0])||void 0===c?void 0:null===(o=c.content)||void 0===o?void 0:null===(r=o.parts)||void 0===r?void 0:null===(a=r[0])||void 0===a?void 0:a.text;if(l&&"string"==typeof l){let e=JSON.parse(l);("number"==typeof e.winner||"string"==typeof e.winner)&&(null==e?void 0:e.analysis)&&"string"==typeof e.analysis&&(s={winner:Number(e.winner),analysis:e.analysis})}}catch(e){console.log(e)}return s};var o=n(2115);let c=()=>(0,a.jsxs)("div",{className:"Logo",children:[(0,a.jsx)("h1",{children:(0,a.jsx)("span",{children:"WDPS?"})}),(0,a.jsx)("h4",{children:"What Do People Say?"})]}),d=e=>"string"==typeof e&&(e=e.trim()).length>=3&&e.length<=200,h=e=>{if(!e.every(e=>d(e)))return"3 characters minimum, let's do this!";{let s=new Map;return(e.forEach(e=>s.set(e.trim().toLowerCase(),!0)),s.size!==e.length)?"No duplicates allowed.":""}},m=e=>{let{initialValues:s,onFormSubmit:n}=e,[t,i]=(0,o.useState)(["",""]),[l,r]=(0,o.useState)("");(0,o.useEffect)(()=>{if((null==s?void 0:s.length)===t.length){let e=s.filter(e=>d(e));e.length===t.length&&i(e.map(e=>e))}},[s]);let c=e=>{let s=e.target,n=Number(s.dataset.index),a=[...t];a[n]=s.value,i(a),r("")};return(0,a.jsxs)("div",{className:"SearchForm",children:[(0,a.jsxs)("form",{action:"#",className:"wdps-box mt-4",onSubmit:e=>{e.preventDefault();let s=h(t);r(s),""===s&&(null==n||n(t))},children:[(0,a.jsx)("div",{className:"field-group",children:(0,a.jsx)("input",{type:"text","data-index":"0",value:t[0],maxLength:200,placeholder:"Ex: Jordan is the GOAT",onChange:c,className:"form-control"})}),(0,a.jsx)("div",{className:"versus-divider my-2",children:"vs"}),(0,a.jsx)("div",{className:"field-group",children:(0,a.jsx)("input",{type:"text","data-index":"1",value:t[1],maxLength:200,placeholder:"Ex: LeBron is the GOAT",onChange:c,className:"form-control"})}),l&&(0,a.jsxs)("div",{className:"alert alert-danger mt-4 mb-0 fs-5",role:"alert",children:[(0,a.jsx)("i",{className:"fa fa-triangle-exclamation"})," ",l]}),(0,a.jsx)("button",{type:"submit",className:"btn btn-link mt-2",children:"Go!"})]}),(0,a.jsxs)("p",{className:"mt-3 text-secondary",children:["* Compare two"," ",(0,a.jsx)("em",{children:"words, phrases, expressions, ideas, beliefs, opinions, or views"})," ","to see which is more widely accepted."]})]})},u=()=>(0,a.jsx)("div",{className:"SearchSpinner",children:(0,a.jsx)("i",{className:"fas fa-spinner fa-spin"})}),p=e=>{let{results:s,searchTerms:n,onBackClick:t}=e,[i,l]=(0,o.useState)(""),[r,c]=(0,o.useState)(!1);(0,o.useEffect)(()=>{l(window.location.origin+"?q=".concat(encodeURIComponent(n[0]),"&q=").concat(encodeURIComponent(n[1])))},[]),(0,o.useEffect)(()=>{setTimeout(()=>{c(!1)},1e3)},[r]);let d=async()=>{try{await window.navigator.clipboard.writeText(i),c(!0)}catch(e){console.log(e)}};return(0,a.jsxs)("div",{className:"SearchResults",children:[(0,a.jsxs)("div",{className:"results-section wdps-box my-4",children:[!s.winner&&(0,a.jsxs)("div",{className:"results-row tie mb-3",children:[(0,a.jsx)("div",{className:"heading",children:(0,a.jsx)("span",{children:"Tie!"})}),(0,a.jsx)("small",{children:s.analysis})]}),n.map((e,t)=>{let i=s.winner===t+1;return(0,a.jsxs)(o.Fragment,{children:[(0,a.jsxs)("div",{className:"results-row ".concat(i?"winner":""),children:[(0,a.jsxs)("div",{className:"heading",children:[i&&(0,a.jsx)("i",{className:"fas fa-check me-2"}),e]}),i&&(0,a.jsx)("small",{children:s.analysis})]}),t<n.length-1&&(0,a.jsx)("div",{className:"results-row versus-divider my-3",children:"vs"})]},t)})]}),(0,a.jsxs)("div",{className:"share-section mb-4",children:[(0,a.jsx)("h6",{className:"heading",children:(0,a.jsx)("span",{children:"Share"})}),(0,a.jsx)("form",{children:(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)("input",{type:"text",readOnly:!0,className:"form-control",value:i}),(0,a.jsx)("button",{type:"button",className:"btn btn-outline-dark",onClick:d,children:r?"Copied!":"Copy"})]})})]}),(0,a.jsx)("button",{type:"button",className:"back-button btn btn-link",onClick:t,children:"Try again!"})]})};var x=n(5695);function v(){let[e,s]=(0,o.useState)(!1),[n,t]=(0,o.useState)(),[i,l]=(0,o.useState)(),d=(0,x.useSearchParams)().getAll("q");(0,o.useEffect)(()=>{d.length>1&&t(d.slice(0,2)),d.length>0&&window.history.replaceState(null,"","/")},[]);let h=async e=>{s(!0),t(e);let n=await r(e);n&&l(n),s(!1)};return(0,a.jsxs)("div",{className:"app",children:[(0,a.jsx)("header",{children:(0,a.jsx)(c,{})}),!i&&(0,a.jsx)(m,{initialValues:n,onFormSubmit:h}),e&&(0,a.jsx)(u,{}),i&&n&&(0,a.jsx)(p,{results:i,searchTerms:n,onBackClick:()=>{t(["",""]),l(null)}}),(0,a.jsx)("footer",{style:{display:"none"},children:(0,a.jsxs)("small",{children:["With ",(0,a.jsx)("i",{className:"fa fa-heart"})," by",(0,a.jsx)("a",{href:"https://www.slicvic.com",children:"slicvic.com"})]})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[698,794,441,684,358],()=>s(1912)),_N_E=e.O()}]);