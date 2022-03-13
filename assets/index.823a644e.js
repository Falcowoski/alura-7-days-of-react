import{W as f,s as r,j as u,r as m,R as p,a as h}from"./vendor.a8f3bdde.js";const g=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};g();const x=f`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 100%;
    height: auto;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font: 400 1rem 'Montserrat', sans-serif;
    color: #000000;
    background: #F8F8F8;
    -webkit-font-smoothing: antialiased;
  }
`,y=r.header`
  width: 100%;
  margin-top: 0.6rem;
`,b=r.nav`
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 65rem;
  height: 3rem;
  margin-left: 10rem;
`,w=r.a`
  width: 11rem;
`,v=r.div`
  transition: 0.2s;
`,E=r.ul`
  display: flex;
  gap: 2rem;
`,e=u.exports.jsx,a=u.exports.jsxs;function L({children:i}){return e(v,{children:e(E,{children:i})})}function c({text:i,link:n="#"}){return e("li",{children:e("a",{href:n,children:i})})}function S({imgSource:i,alt:n,link:s="#"}){return e(w,{href:s,children:e("img",{src:i,alt:n})})}var M="/alura-7-days-of-react/assets/logo.13e361a5.svg";function N(){return e(y,{children:a(b,{children:[e(S,{imgSource:M,alt:"Logo da CasaVerde",link:"#"}),a(L,{children:[e(c,{text:"Como fazer"}),e(c,{text:"Ofertas"}),e(c,{text:"Depoimentos"}),e(c,{text:"V\xEDdeos"}),e(c,{text:"Meu carrinho",link:"#"})]})]})})}const j=r.div`
  width: 36rem;
  height: 29rem;
  margin-top: 9.4rem;
  margin-left: 10rem;
  color: #202020;
`,F=r.div`
  margin-bottom: 1.25rem;
`,k=r.p`
  font-size: 1.5rem;
  opacity: 0.5;
`,C=r.h1`
  font: 900 5.125rem 'Elsie Swash Caps', sans-serif;
`,I=r.p`
  width: 30rem;
  margin-top: 1.5rem;
  line-height: 26px;
  opacity: 0.5;
`,O=r.div`
  width: 100%;
  display: flex;
  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
`,H=r.i`
  padding: 1.8rem 1rem;
  text-align: center;
  opacity: 0.3;
`,W=r.input`
  width: 100%;
  padding: 0.6rem;
  border: none;
  outline: none;
  opacity: 0.3;
  transition: 0.2s;

  &:focus {
    opacity: 1;
  }
`,z=r.button`
  width: 55%;
  padding: 1rem 1.5rem;
  border: none;
  color: #ffffff;
  background-color: #FFCB47;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;function A({title:i,largeTitle:n,description:s}){return a(F,{children:[e(k,{children:i}),e(C,{children:n}),e(I,{children:s})]})}function D({inputPlaceholder:i,buttonText:n}){return a(O,{children:[e(H,{className:"fa fa-envelope"}),e(W,{type:"text",placeholder:i}),e(z,{children:n})]})}function R(){return a(j,{children:[e(A,{title:"Sua casa com as",largeTitle:"melhores plantas",description:"\r Encontre aqui uma vasta sele\xE7\xE3o de plantas para decorar a sua casa e torn\xE1-lo uma pessoa mais feliz no seu dia a dia. \r Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.\r "}),e(D,{inputPlaceholder:"Insira seu e-mail",buttonText:"Assinar newsletter"})]})}function T(){return a(m.exports.Fragment,{children:[e(x,{}),e(N,{}),e("main",{children:e(R,{})}),e("footer",{})]})}p.render(e(h.StrictMode,{children:e(T,{})}),document.getElementById("root"));
