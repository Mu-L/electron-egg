/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{i as e}from"./main-1ad2265a.js";import{i as a}from"./ipcRenderer-5e19eaee.js";import{_ as l,o as s,b as n,i as t,a as d,w as o,m as u,g as i,t as p,p as _,h as r,n as m,I as c,B as f}from"./index-c35ca83b.js";const g={data:()=>({name:"张三",age:10,userList:["空"],search_age:10,update_name:"张三",update_age:21,delete_name:"张三",all_list:["空"]}),mounted(){this.getAllTestData()},methods:{getAllTestData(){a.invoke(e.jsondbOperation,{action:"all"}).then((e=>{if(console.log("res:",e),0==e.all_list.length)return!1;this.all_list=e.all_list}))},dbOperation(l){const s={action:l,info:{name:this.name,age:parseInt(this.age)},search_age:parseInt(this.search_age),update_name:this.update_name,update_age:parseInt(this.update_age),delete_name:this.delete_name};"add"==l&&0==this.name.length&&this.$message.error("请填写数据"),a.invoke(e.jsondbOperation,s).then((e=>{if(console.log("res:",e),"get"==l){if(0==e.result.length)return void this.$message.error("没有数据");this.userList=e.result}0!=e.all_list.length?(this.all_list=e.all_list,this.$message.success("success")):this.all_list=["空"]}))}}},b=e=>(_("data-v-13bf8964"),e=e(),r(),e),v={id:"app-base-db"},h=b((()=>t("div",{class:"one-block-1"},[t("span",null," 1. jsondb本地数据库 ")],-1))),k={class:"one-block-2"},V=b((()=>t("div",{class:"one-block-1"},[t("span",null," 2. 测试数据 ")],-1))),j={class:"one-block-2"},O=b((()=>t("div",{class:"one-block-1"},[t("span",null," 3. 添加数据 ")],-1))),x={class:"one-block-2"},U=b((()=>t("div",{class:"one-block-1"},[t("span",null," 4. 获取数据 ")],-1))),I={class:"one-block-2"},C=b((()=>t("div",{class:"one-block-1"},[t("span",null," 5. 修改数据 ")],-1))),L={class:"one-block-2"},$=b((()=>t("div",{class:"one-block-1"},[t("span",null," 6. 删除数据 ")],-1))),A={class:"one-block-2"};const D=l(g,[["render",function(e,a,l,_,r,g){const b=m,D=u,T=c,w=f;return s(),n("div",v,[h,t("div",k,[d(D,null,{default:o((()=>[d(b,{span:8},{default:o((()=>[i(" • 小数据量: 0~100M(单库) ")])),_:1}),d(b,{span:8},{default:o((()=>[i(" • json数据库 ")])),_:1}),d(b,{span:8},{default:o((()=>[i(" • 兼容lodash语法 ")])),_:1})])),_:1})]),V,t("div",j,[d(D,null,{default:o((()=>[d(b,{span:24},{default:o((()=>[i(p(r.all_list),1)])),_:1})])),_:1})]),O,t("div",x,[d(D,null,{default:o((()=>[d(b,{span:6},{default:o((()=>[d(T,{modelValue:r.name,"onUpdate:modelValue":a[0]||(a[0]=e=>r.name=e),value:r.name,"addon-before":"姓名"},null,8,["modelValue","value"])])),_:1}),d(b,{span:3}),d(b,{span:6},{default:o((()=>[d(T,{modelValue:r.age,"onUpdate:modelValue":a[1]||(a[1]=e=>r.age=e),value:r.age,"addon-before":"年龄"},null,8,["modelValue","value"])])),_:1}),d(b,{span:3}),d(b,{span:6},{default:o((()=>[d(w,{onClick:a[2]||(a[2]=e=>g.dbOperation("add"))},{default:o((()=>[i(" 添加 ")])),_:1})])),_:1})])),_:1})]),U,t("div",I,[d(D,null,{default:o((()=>[d(b,{span:6},{default:o((()=>[d(T,{modelValue:r.search_age,"onUpdate:modelValue":a[3]||(a[3]=e=>r.search_age=e),value:r.search_age,"addon-before":"年龄"},null,8,["modelValue","value"])])),_:1}),d(b,{span:3}),d(b,{span:6}),d(b,{span:3}),d(b,{span:6},{default:o((()=>[d(w,{onClick:a[4]||(a[4]=e=>g.dbOperation("get"))},{default:o((()=>[i(" 查找 ")])),_:1})])),_:1})])),_:1}),d(D,null,{default:o((()=>[d(b,{span:24},{default:o((()=>[i(p(r.userList),1)])),_:1})])),_:1})]),C,t("div",L,[d(D,null,{default:o((()=>[d(b,{span:6},{default:o((()=>[d(T,{modelValue:r.update_name,"onUpdate:modelValue":a[5]||(a[5]=e=>r.update_name=e),value:r.update_name,"addon-before":"姓名"},null,8,["modelValue","value"])])),_:1}),d(b,{span:3}),d(b,{span:6},{default:o((()=>[d(T,{modelValue:r.update_age,"onUpdate:modelValue":a[6]||(a[6]=e=>r.update_age=e),value:r.update_age,"addon-before":"年龄"},null,8,["modelValue","value"])])),_:1}),d(b,{span:3}),d(b,{span:6},{default:o((()=>[d(w,{onClick:a[7]||(a[7]=e=>g.dbOperation("update"))},{default:o((()=>[i(" 更新 ")])),_:1})])),_:1})])),_:1})]),$,t("div",A,[d(D,null,{default:o((()=>[d(b,{span:6},{default:o((()=>[d(T,{modelValue:r.delete_name,"onUpdate:modelValue":a[8]||(a[8]=e=>r.delete_name=e),value:r.delete_name,"addon-before":"姓名"},null,8,["modelValue","value"])])),_:1}),d(b,{span:3}),d(b,{span:6}),d(b,{span:3}),d(b,{span:6},{default:o((()=>[d(w,{onClick:a[9]||(a[9]=e=>g.dbOperation("del"))},{default:o((()=>[i(" 删除 ")])),_:1})])),_:1})])),_:1})])])}],["__scopeId","data-v-13bf8964"]]);export{D as default};
