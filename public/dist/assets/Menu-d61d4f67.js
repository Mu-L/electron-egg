/* empty css              *//* empty css              *//* empty css              */import{_ as e,r as a,o as t,c as n,w as i,L as r,a as o,b as m,d as s,F as p,M as l,e as u,f as d,i as c,t as f,j as _}from"./index-c35ca83b.js";const g={framework:{menu_100:{icon:"profile",title:"通信",pageName:"FrameworkSocketIpc",params:{}},menu_101:{icon:"profile",title:"http服务",pageName:"FrameworkSocketHttpServer",params:{}},menu_102:{icon:"profile",title:"socket服务",pageName:"FrameworkSocketSocketServer",params:{}},menu_103:{icon:"profile",title:"json数据库",pageName:"FrameworkJsonDBIndex",params:{}},menu_104:{icon:"profile",title:"sqlite数据库",pageName:"FrameworkSqliteDBIndex",params:{}},menu_105:{icon:"profile",title:"任务",pageName:"FrameworkJobsIndex",params:{}},menu_106:{icon:"profile",title:"自动更新",pageName:"FrameworkUpdaterIndex",params:{}},menu_107:{icon:"profile",title:"软件调用",pageName:"FrameworkSoftwareIndex",params:{}},menu_108:{icon:"profile",title:"java",pageName:"FrameworkJavaIndex",params:{}},menu_109:{icon:"profile",title:"测试",pageName:"FrameworkTestApiIndex",params:{}}},os:{menu_100:{icon:"profile",title:"文件",pageName:"OsFileIndex",params:{}},menu_101:{icon:"profile",title:"视图",pageName:"OsWindowViewIndex",params:{}},menu_102:{icon:"profile",title:"窗口",pageName:"OsWindowIndex",params:{}},menu_103:{icon:"profile",title:"桌面通知",pageName:"OsNotificationIndex",params:{}},menu_104:{icon:"profile",title:"电源监控",pageName:"OsPowerMonitorIndex",params:{}},menu_105:{icon:"profile",title:"屏幕信息",pageName:"OsScreenIndex",params:{}},menu_106:{icon:"profile",title:"系统主题",pageName:"OsThemeIndex",params:{}}},hardware:{menu_100:{icon:"profile",title:"打印机",pageName:"HardwarePrinterIndex",params:{}}},effect:{menu_100:{icon:"profile",title:"视频播放器",pageName:"EffectVideoIndex",params:{}}}};const h=e({props:{id:{type:String,default:""}},data:()=>({menu:{},current:"menu_100",keys:[]}),watch:{id:function(){console.log("watch id ----- ",this.id),this.current="menu_100",this.menuHandle()}},created(){},mounted(){this.menuHandle()},methods:{menuHandle(){console.log("menu ------ id:",this.id),this.menu=g[this.id];const e=this.menu[this.current];this.$router.push({name:e.pageName,params:e.params})},changeMenu(e){console.log("changeMenu e:",e),this.current=e.key}}},[["render",function(e,g,h,k,w,N){const x=a("router-link"),I=_,F=l,S=u,j=a("router-view"),y=d,O=r;return t(),n(O,{id:"app-menu"},{default:i((()=>[o(S,{theme:"light",class:"layout-sider"},{default:i((()=>[o(F,{theme:"light",mode:"inline",selectedKeys:[w.current],onClick:N.changeMenu},{default:i((()=>[(t(!0),m(p,null,s(w.menu,((e,a)=>(t(),n(I,{key:a},{default:i((()=>[o(x,{to:{name:e.pageName,params:e.params}},{default:i((()=>[c("span",null,f(e.title),1)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1},8,["selectedKeys","onClick"])])),_:1}),o(O,null,{default:i((()=>[o(y,null,{default:i((()=>[o(j)])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-44ba3191"]]);export{h as default};
