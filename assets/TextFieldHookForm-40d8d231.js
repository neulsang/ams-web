import{j as e,ac as m}from"./index-ec173342.js";import{C as i,T as a,c as d,S as p}from"./index.esm-4bde1882.js";const x=({control:t,name:u,error:n,placeholder:o,type:l="text"})=>e(i,{name:u,control:t,render:({field:r})=>e(a,{type:l,...r,error:!!n,helperText:n==null?void 0:n.message,fullWidth:!0,placeholder:o,inputProps:{className:"text-lg"},variant:"outlined"})}),v=({control:t,name:u,error:n,selectDatas:o})=>e(i,{name:u,control:t,render:({field:l})=>e(d,{fullWidth:!0,children:e(p,{value:l.value,displayEmpty:!0,onChange:l.onChange,children:o==null?void 0:o.map(r=>e(m,{value:r.value,children:r.label},r.id))})})});export{v as S,x as T};