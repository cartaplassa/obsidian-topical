import{_ as p}from"./chunks/TabsComponent.CQ9qjncx.js";import{s as i,o,c as n,F as f,E as k,j as e,t as u,P as v,I as b,a as h}from"./chunks/framework.D-ihIdkc.js";const g={class:"download-chart"},y=["download","onClick"],w={class:"download-date"},P={__name:"DownloadChart",setup(m){const r=i(5487),l=i([{date:"2024-06-09",number:124},{date:"2024-06-16",number:406},{date:"2024-06-23",number:610},{date:"2024-06-30",number:905},{date:"2024-07-07",number:1338},{date:"2024-07-14",number:1896},{date:"2024-07-21",number:3019},{date:"2024-07-28",number:4135},{date:"2024-08-04",number:5487}]),a=i([]),d=s=>{a.value[s].style.opacity=a.value[s].style.opacity==="1"?"0":"1"};return(s,$)=>(o(),n("div",g,[(o(!0),n(f,null,k(l.value,(t,_)=>(o(),n("div",{class:"download-data",key:t.date},[e("div",{class:"chart-block-tooltip",ref_for:!0,ref:c=>a.value.push(c)},u(t.number),513),e("div",{class:"chart-block-wrapper",style:v({height:`${t.number/r.value*100}%`})},[e("div",{class:"chart-block",download:t.number,onClick:c=>d(_)},null,8,y)],4),e("div",w,u(t.date),1)]))),128))]))}},x=e("h1",{id:"下载",tabindex:"-1"},[h("下载 "),e("a",{class:"header-anchor",href:"#下载","aria-label":'Permalink to "下载"'},"​")],-1),C=e("h2",{id:"下载量",tabindex:"-1"},[h("下载量 "),e("a",{class:"header-anchor",href:"#下载量","aria-label":'Permalink to "下载量"'},"​")],-1),D=JSON.parse('{"title":"下载","description":"","frontmatter":{},"headers":[],"relativePath":"zh/installation.md","filePath":"zh/installation.md"}'),T={name:"zh/installation.md"},N=Object.assign(T,{setup(m){const r='本插件于 2024-04-11 上架官方，可以直接在官方插件市场免费<a href="https://obsidian.md/plugins?id=tabs">下载</a>，在 obsidian 设置的第三方插件页面可以启用 Tabs 插件。',l='<ol><li>在 <a href="https://github.com/xhuajin/obsidian-tabs/releases" target="_blank" rel="noreferrer">Github/Release</a> 中下载最新的 release 的 <code>main.js</code>, <code>style.css</code> 和 `manifest.json` 文件</li><li>在 <code>{ob库文件夹}/.obsidian/plugins</code> 中创建一个文件夹（名字随意），然后将刚刚下载的三个文件放入其中</li><li>打开 obsidian 的设置，在第三方插件页面中启用 Tabs 插件即可</li><ol>',a='如果你下载了 <a href="https://pkmer.cn/products/market/" target="_blank" rel="noreferrer">Pkmer-market</a> 插件，你可以直接在 Pkmer Market 中搜索 Tabs 下载本插件。';return(d,s)=>(o(),n("div",null,[x,b(P),b(p,{tabsTitle:["官方市场","Github Release","Pkmer"],tabsContents:[r,l,a]},null,8,["tabsContents"]),C]))}});export{D as __pageData,N as default};
