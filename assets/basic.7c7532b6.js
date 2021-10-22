import{r as e}from"./vendor.74addd0f.js";import{D as a}from"./index.73f7705a.js";import{u as l}from"./use-demo-translate.6e8b3a77.js";import{k as r,P as t,y as n,F as i,I as s}from"./index.6a3bd64e.js";import{s as c}from"./use-theme.67eface3.js";import{j as o,F as d,a as b}from"./index.0b79de82.js";import"./scroll.e11e728c.js";import"./history-utils.e8fc90f7.js";const h={"zh-CN":{basicUsage:"基础用法",area:"地区",selectArea:"请选择地区",customColor:"自定义颜色",asyncOptions:"异步加载选项",areaData:[{label:"中国",children:[{label:"北京",disabled:!0,children:[{label:"海淀区"},{label:"朝阳区"}]},{label:"上海",children:[{label:"闸北区"},{label:"静安区"}]}]},{label:"美国",children:[{label:"纽约",children:[{label:"曼哈顿"},{label:"布鲁克林"}]},{label:"加利福尼亚",children:[{label:"洛杉矶"},{label:"旧金山"}]}]}]},"en-US":{basicUsage:"Basic usage",area:"Area",selectArea:"Select Area",customColor:"Custom Color",asyncOptions:"Async Options",areaData:[{label:"China",children:[{label:"Beijing",disabled:!0,children:[{label:"Haidian"},{label:"Chaoyang"}]},{label:"Shanghai",children:[{label:"Zhabei"},{label:"Jingan"}]}]},{label:"United State",children:[{label:"New York",children:[{label:"Manhattan"},{label:"Brooklyn"}]},{label:"California",children:[{label:"Los Angeles"},{label:"San Francisco"}]}]}]}};function u(){const[u]=l(h,"en-US"),m=e=>b(i,{label:u.area,clickable:!0,rightIcon:b(s,{name:"arrow-right"}),children:b(i.Input,{readOnly:!0,placeholder:u.selectArea,value:e&&e.length>0?e.join(" / "):void 0})}),[f,p]=e.exports.useState((()=>u.areaData.map((e=>({label:e.label}))))),g=(e,a)=>{for(const l of e){if(l.label===a)return l;if(l.children){const e=g(l.children,a);if(e)return e}}},j=r(),v=e.exports.useCallback(((e,a=1e3)=>{c(a).then((()=>{j.current||e()}))}),[j]);return o(d,{children:[b(a,{title:u.basicUsage,cardMode:!0,children:b(t.Select,{round:!0,select:b(n,{data:u.areaData,title:u.selectArea,dataNames:{value:"label"}}),children:e=>m(e)})}),b(a,{title:u.customColor,cardMode:!0,children:b(t.Select,{round:!0,select:b(n,{data:u.areaData,title:u.selectArea,dataNames:{value:"label"},activeColor:"var(--fnx-success-color)"}),children:e=>m(e)})}),b(a,{title:u.asyncOptions,cardMode:!0,children:b(t.Select,{round:!0,select:b(n,{data:f,title:u.selectArea,dataNames:{value:"label"},onLoadData:e=>{const a=e[e.length-1];a.loading=!0,p((e=>[...e])),v((()=>{var e;const l=g(u.areaData,a.label);l&&(a.loading=!1,a.children=null==(e=l.children)?void 0:e.map((e=>({label:e.label,children:null==e.children?[]:void 0}))),p((e=>[...e])))}),1e3)}}),children:e=>m(e)})})]})}export{u as default};