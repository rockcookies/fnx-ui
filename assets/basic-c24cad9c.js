import{j as e,r as c,a as p}from"./index-8b435b75.js";import{C as o,e as d,z as u}from"./index-fdd3a7d6.js";import{D as h}from"./index-588a6987.js";import{u as x}from"./use-demo-translate-489d42ac.js";import{B as j}from"./index-6f2e6b84.js";import{C as b}from"./index-088e13aa.js";import{F as i}from"./index-f0275fca.js";import{F as t}from"./index-e06cfaf9.js";import{P as f}from"./index-8d4b6373.js";import{R as C}from"./index-2d6f543d.js";import"./use-theme-8dbf9539.js";import"./config-component-props-c0788442.js";import"./index-f0ac2a00.js";import"./format-3509efe4.js";import"./detect-9e279ab2.js";import"./constants-a731eda5.js";import"./event-471798e4.js";import"./misc-276e45ca.js";import"./use-creation-3d9fab3f.js";import"./use-get-state-34a6027d.js";import"./use-merged-prop-ref-bd8415d7.js";import"./use-merged-prop-78f8d6c6.js";import"./use-update-effect-311108d7.js";import"./index-ebeef9c4.js";import"./use-on-popup-open-26f1d831.js";import"./scroll-a0e7f6b9.js";import"./raf-e95fb200.js";import"./index-fdc7973b.js";import"./use-controlled-state-e2423fe7.js";import"./use-focus-8f2ca401.js";import"./react-a0edb2dd.js";import"./touch-helper-e91fac31.js";import"./index-e8afc6c8.js";const N=p("demo-config-provider"),S={"zh-CN":{locale:"语言"},"en-US":{locale:"Language"}},D={"zh-CN":{submit:"提交",rate:"评分",transition:"动画时常",calendarLabel:"日历",calendarPlaceholder:"点击选择日期",locale:"zh-CN"},"en-US":{submit:"Submit",rate:"Rate",transition:"Transition",calendarLabel:"Calendar",calendarPlaceholder:"Select date",locale:"en-US"}},a=()=>{const{locale:l,transitionDuration:n}=c.useContext(o.Context),[m]=x(S,"en-US"),r=D[l.locale==="zh-CN"?"zh-CN":"en-US"];return e.jsx(h,{title:"".concat(m.locale,": ").concat(r.locale),cardMode:!0,children:e.jsxs(t,{initialValues:{rate:3},children:[e.jsxs(t.Item,{label:r.transition,children:[n,"ms"]}),e.jsx(t.Item,{label:r.rate,name:"rate",children:e.jsx(C,{count:6})}),e.jsx(t.Item,{name:"calendar",plain:!0,children:e.jsx(f.Select,{round:!0,select:e.jsx(b,{}),children:s=>e.jsx(i,{label:r.calendarLabel,clickable:!0,children:e.jsx(i.Input,{readOnly:!0,value:s,placeholder:r.calendarPlaceholder})})})}),e.jsx(j,{type:"primary",htmlType:"submit",block:!0,shape:"round",className:N("submit"),children:r.submit})]})})};a.displayName="Demo";function te(){return e.jsxs(e.Fragment,{children:[e.jsx(o,{locale:d,children:e.jsx(a,{})}),e.jsx(o,{locale:u,transitionDuration:1e3,children:e.jsx(a,{})})]})}export{te as default};