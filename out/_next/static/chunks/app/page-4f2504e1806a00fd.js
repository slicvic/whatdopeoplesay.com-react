(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1912:(e,s,n)=>{Promise.resolve().then(n.bind(n,6895))},3389:()=>{},6895:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>g});var a=n(5155);n(3389);var t=n(3464);let l="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=".concat("AIzaSyCUePWyqyham0elOS5g9_0nsntCRcEGCS4"),i=e=>'\nAnalyze and rank the following expressions based on their historical level of general acceptance and widespread use.\n\nExpressions to rank:\n\n{{QUERY}}\n\nProvide a structured JSON object with the following keys:\n\n- "winner": The number corresponding to the expression with the highest level of general acceptance and widespread use.\n- "analysis": A concise justification for your ranking.\n'.replace("{{QUERY}}",e.map((e,s)=>"".concat(s+1,". ").concat(e)).join("\n")),r=async e=>{let s=null,n=i(e);try{var a,r,c,o,d,h;let e=await (0,t.A)({method:"post",url:l,data:{generationConfig:{response_mime_type:"application/json"},contents:[{parts:[{text:n}]}]}}),i=null===(h=e.data)||void 0===h?void 0:null===(d=h.candidates)||void 0===d?void 0:null===(o=d[0])||void 0===o?void 0:null===(c=o.content)||void 0===c?void 0:null===(r=c.parts)||void 0===r?void 0:null===(a=r[0])||void 0===a?void 0:a.text;if(i&&"string"==typeof i){let e=JSON.parse(i);("number"==typeof e.winner||"string"==typeof e.winner)&&(null==e?void 0:e.analysis)&&"string"==typeof e.analysis&&(s={winner:Number(e.winner),analysis:e.analysis})}}catch(e){console.log(e)}return s};var c=n(2115);let o=()=>(0,a.jsxs)("div",{className:"Logo",children:[(0,a.jsx)("h1",{children:(0,a.jsx)("span",{children:"WDPS?"})}),(0,a.jsx)("h4",{children:"What Do People Say?"})]}),d=e=>"string"==typeof e&&(e=e.trim()).length>=3&&e.length<=50,h=e=>{if(!e.every(e=>d(e)))return"3 characters minimum, let's do this!";{let s=new Map;return(e.forEach(e=>s.set(e.trim().toLowerCase(),!0)),s.size!==e.length)?"No duplicates allowed.":""}},u=e=>{let{initialValues:s,onFormSubmit:n}=e,[t,l]=(0,c.useState)(["",""]),[i,r]=(0,c.useState)("");(0,c.useEffect)(()=>{if((null==s?void 0:s.length)===t.length){let e=s.filter(e=>d(e));e.length===t.length&&l(e.map(e=>e))}},[s]);let o=e=>{let s=e.target,n=Number(s.dataset.index),a=[...t];a[n]=s.value,l(a),r("")};return(0,a.jsxs)("form",{className:"SearchForm box-outline mt-4",onSubmit:e=>{e.preventDefault();let s=h(t);r(s),""===s&&(null==n||n(t))},children:[(0,a.jsxs)("h2",{className:"mb-4",children:["Match up two ",(0,a.jsx)("strong",{children:"words"})," or ",(0,a.jsx)("strong",{children:"expressions"}),(0,a.jsx)("br",{})," to see which is more widely accepted."]}),(0,a.jsx)("div",{className:"field-group",children:(0,a.jsx)("input",{type:"text","data-index":"0",value:t[0],maxLength:50,placeholder:"Ex: Jordan is the GOAT",onChange:o,className:"form-control"})}),(0,a.jsx)("div",{className:"versus-text my-2",children:"vs"}),(0,a.jsx)("div",{className:"field-group",children:(0,a.jsx)("input",{type:"text","data-index":"1",value:t[1],maxLength:50,placeholder:"Ex: LeBron is the GOAT",onChange:o,className:"form-control"})}),i&&(0,a.jsxs)("div",{className:"alert alert-danger mt-3 fs-5",role:"alert",children:[(0,a.jsx)("i",{className:"fa fa-triangle-exclamation"})," ",i]}),(0,a.jsx)("button",{type:"submit",className:"btn btn-link mt-2",children:"Go!"})]})},m=()=>(0,a.jsx)("div",{className:"SearchSpinner",children:(0,a.jsx)("i",{className:"fas fa-spinner fa-spin"})}),x=e=>{let{results:s,searchTerms:n,onBackClick:t}=e,[l,i]=(0,c.useState)(""),[r,o]=(0,c.useState)(!1);(0,c.useEffect)(()=>{i(window.location.origin+"?q=".concat(encodeURIComponent(n[0]),"&q=").concat(encodeURIComponent(n[1])))},[]),(0,c.useEffect)(()=>{setTimeout(()=>{o(!1)},1e3)},[r]);let d=async()=>{try{await window.navigator.clipboard.writeText(l),o(!0)}catch(e){console.log(e)}};return(0,a.jsxs)("div",{className:"SearchResults",children:[(0,a.jsxs)("ul",{className:"results-section box-outline my-4",children:[!s.winner&&(0,a.jsxs)("div",{className:"tie mb-3",children:[(0,a.jsx)("div",{className:"heading",children:(0,a.jsx)("span",{children:"TIE!"})}),(0,a.jsx)("small",{children:s.analysis})]}),n.map((e,t)=>{let l=s.winner===t+1;return(0,a.jsxs)("li",{className:l?"winner":"",children:[!l&&e,l&&(0,a.jsxs)("div",{className:"heading",children:[(0,a.jsx)("i",{className:"fas fa-check me-2"}),e]}),l&&(0,a.jsx)("small",{children:s.analysis}),t<n.length-1&&(0,a.jsx)("div",{className:"versus-text my-3",children:"vs"})]},t)})]}),(0,a.jsxs)("div",{className:"share-section mb-4",children:[(0,a.jsx)("h6",{className:"heading",children:(0,a.jsx)("span",{children:"Share"})}),(0,a.jsx)("form",{children:(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)("input",{type:"text",readOnly:!0,className:"form-control",value:l}),(0,a.jsx)("button",{type:"button",className:"btn btn-outline-dark",onClick:d,children:r?"Copied!":"Copy"})]})})]}),(0,a.jsx)("button",{type:"button",className:"back-button btn btn-link",onClick:t,children:"Try again!"})]})};var p=n(5695);function g(){let[e,s]=(0,c.useState)(!1),[n,t]=(0,c.useState)(),[l,i]=(0,c.useState)(),d=(0,p.useSearchParams)().getAll("q");(0,c.useEffect)(()=>{d.length>1&&t(d.slice(0,2)),d.length>0&&window.history.replaceState(null,"","/")},[]);let h=async e=>{s(!0),t(e);let n=await r(e);n&&i(n),s(!1)};return(0,a.jsxs)("div",{className:"app",children:[(0,a.jsx)("header",{children:(0,a.jsx)(o,{})}),!l&&(0,a.jsx)(u,{initialValues:n,onFormSubmit:h}),e&&(0,a.jsx)(m,{}),l&&n&&(0,a.jsx)(x,{results:l,searchTerms:n,onBackClick:()=>i(null)}),(0,a.jsx)("footer",{children:(0,a.jsxs)("small",{children:["With ",(0,a.jsx)("i",{className:"fa fa-heart"})," by",(0,a.jsx)("a",{href:"https://www.slicvic.com",children:"slicvic.com"})]})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[698,794,441,684,358],()=>s(1912)),_N_E=e.O()}]);