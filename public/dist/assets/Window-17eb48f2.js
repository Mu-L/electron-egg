import{i as o}from"./main-d72f38de.js";import{i as a}from"./ipcRenderer-5e19eaee.js";import{_ as e,r as i,o as t,b as s,g as n,a as r,w as d,t as l,e as m}from"./index-c5d87696.js";const g={id:"effect-login-window"},p={class:"block-1"},c={key:1};const u=e({data:()=>({loading:!1,loginText:"正在登陆......"}),methods:{login(){this.loading=!0,setTimeout((()=>{this.$router.push({name:"Framework",params:{}}),a.invoke(o.restoreWindow,{width:980,height:650}).then((o=>{}))}),2e3)}}},[["render",function(o,a,e,u,f,h){const k=i("a-button");return t(),s("div",g,[n("div",p,[f.loading?(t(),s("span",c,l(f.loginText),1)):(t(),s("a",{key:0,onClick:a[0]||(a[0]=(...o)=>h.login&&h.login(...o))},[r(k,{type:"primary"},{default:d((()=>[m(" 登录 ")])),_:1})]))])])}],["__scopeId","data-v-be47062b"]]);export{u as default};
