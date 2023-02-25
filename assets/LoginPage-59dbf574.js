import{c as y,j as e,F as h,a as s,G as r,L as l,R as f,T as g,A as x}from"./index-86e0e450.js";import{u as b,C as d,T as m,B as S}from"./index.esm-919cffb5.js";import{c as L,a as u,o as N,I as p}from"./index.esm-48503dd2.js";const A=y(e("path",{d:"M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),"Key"),C=()=>e(h,{children:s(r,{container:!0,justifyContent:"space-between",children:[e(r,{item:!0,children:e(l,{to:f.JOIN_PAGE,color:"secondary",children:"회원가입"})}),s(r,{item:!0,children:[e(l,{to:"#",color:"secondary",children:"아이디 찾기"}),e(g,{color:"secondary",component:"span",children:" | "}),e(l,{to:"#",color:"secondary",children:"비밀번호 찾기"})]})]})}),T=L().shape({id:u().required("아이디를 입력 후 로그인 버튼을 눌러주세요.").min(5,"아이디는 최소 5자리 이상입니다."),password:u().required("비밀번호를 입력 후 로그인 버튼을 눌러주세요.")}),v=()=>{const{control:a,handleSubmit:i,formState:{errors:c}}=b({defaultValues:{id:"",password:""},resolver:N(T)});return{control:a,handleSubmit:i,onSubmit:n=>console.log(n),errors:c}},w=()=>{const{control:a,handleSubmit:i,onSubmit:c,errors:t}=v();return e(h,{children:s(r,{item:!0,className:"w-full border-gray-300 px-3 sm:w-auto sm:border sm:p-20",children:[s("form",{onSubmit:i(c),children:[e(d,{name:"id",control:a,render:({field:n})=>{var o;return e(m,{...n,error:!!t.id,helperText:(o=t.id)==null?void 0:o.message,autoFocus:!0,fullWidth:!0,placeholder:"아이디를 입력하세요.",inputProps:{className:"text-lg"},InputProps:{startAdornment:e(p,{position:"start",children:e(x,{color:"primary"})})},variant:"standard"})}}),e(d,{name:"password",control:a,render:({field:n})=>{var o;return e(m,{...n,error:!!t.password,helperText:(o=t.password)==null?void 0:o.message,fullWidth:!0,placeholder:"비밀번호를 입력하세요.",className:"my-6",inputProps:{className:"text-lg"},InputProps:{startAdornment:e(p,{position:"start",children:e(A,{color:"primary"})})},variant:"standard"})}}),e(S,{fullWidth:!0,variant:"contained",className:"my-5 py-4",type:"submit",children:e(g,{fontSize:"body1",children:"로그인"})})]}),e(C,{}),e(r,{className:"mt-10 text-center text-sm text-gray-400",children:"Copyright © Neulsang Corp. All rights reserved."})]})})},F=()=>e(r,{item:!0,className:"font-bol mb-4 text-center text-2xl",children:"AMS"});function I(){return e("div",{className:"container mx-auto ",children:s(r,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",sx:{height:"100dvh"},children:[e(F,{}),e(w,{})]})})}function B(){return e(I,{})}export{B as default};