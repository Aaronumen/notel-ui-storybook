import{d as u,c as i,o as p,a as c,b as d,r as y,n as f,u as g,e as _}from"./vue.esm-bundler-34065855.js";const s=u({__name:"NotelButton",props:{size:{default:"medium"},type:{}},setup(r){const t=r,m=i(()=>({"notel-button":!0,[`notel-button--${t.size}`]:!0,[`notel-button--${t.type}`]:!0}));return(l,z)=>(p(),c("div",null,[d("button",{class:f(g(m))},[y(l.$slots,"default",{},()=>[_(" 按钮 ")])],2)]))}});s.__docgenInfo={exportName:"default",displayName:"NotelButton",description:"",tags:{},props:[{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]},defaultValue:{func:!1,value:"'medium'"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"warring"'},{name:'"danger"'}]}}],slots:[{name:"default"}],sourceFiles:["C:/github/notel-ui-storybook/src/components/NotelButton.vue"]};const N={title:"Example/Button",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},type:{control:"select",options:["primary","warning","danger"]}},args:{size:"medium"}},e={args:{size:"medium",type:"primary"}};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    type: 'primary'
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const b=["Primary"];export{e as Primary,b as __namedExportsOrder,N as default};
//# sourceMappingURL=NotelButton.stories-9146bd79.js.map