/* empty css              *//* empty css              *//* empty css              */import{i as a}from"./main-1ad2265a.js";import{i as e}from"./ipcRenderer-5e19eaee.js";import{_ as t,o as n,b as o,i as s,a as u,w as c,s as i,A as d,E as l,u as h,p as r,h as p}from"./index-c35ca83b.js";const m={data:()=>({autoLaunchChecked:!1}),mounted(){this.init()},methods:{init(){e.invoke(a.autoLaunch,"check").then((a=>{console.log("[ipcRenderer] [autoLaunch] result:",a),this.autoLaunchChecked=a.status}))},autoLaunchChange(a){console.log("[ipcRenderer] [autoLaunch] self.autoLaunchChecked:",this.autoLaunchChecked)}}},C=a=>(r("data-v-39feab4c"),a=a(),p(),a),L={id:"app-base-system-launch"},f={class:"one-block-2"},k=C((()=>s("a",null,"启动",-1))),g=C((()=>s("span",null," 开机自动启动 ",-1)));const j=t(m,[["render",function(a,e,t,r,p,m){const C=d,j=l,v=h,x=i;return n(),o("div",L,[s("div",f,[u(x,{class:"set-auto",itemLayout:"horizontal"},{default:c((()=>[u(v,{style:{"text-align":"left"}},{actions:c((()=>[u(j,{modelValue:p.autoLaunchChecked,"onUpdate:modelValue":e[0]||(e[0]=a=>p.autoLaunchChecked=a),checkedChildren:"开",unCheckedChildren:"关",onChange:e[1]||(e[1]=a=>m.autoLaunchChange())},null,8,["modelValue"])])),default:c((()=>[u(C,null,{title:c((()=>[k])),description:c((()=>[g])),_:1})])),_:1})])),_:1})])])}],["__scopeId","data-v-39feab4c"]]);export{j as default};
