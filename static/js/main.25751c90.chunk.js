(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={producttitle:"Productdetails_producttitle__1YvEf",productdesciption:"Productdetails_productdesciption__1A5NQ",sectionheading:"Productdetails_sectionheading__2kpNh",productimage:"Productdetails_productimage__3d0__",selectedimg:"Productdetails_selectedimg__1pNzW",featurebtn:"Productdetails_featurebtn__18yvY",featurebtn1:"Productdetails_featurebtn1__PAMYE",selectedfeature:"Productdetails_selectedfeature__7Gyrg"}},12:function(e,t,a){e.exports=a(27)},2:function(e,t,a){e.exports={App:"App_App__3ix4f",maincontainer:"App_maincontainer__1-NBg",Productpreview:"App_Productpreview__3JMXn",Productdetails:"App_Productdetails__pBZ56"}},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(5),o=a.n(c),i=(a(21),a(6)),l=a(7),s=a(10),u=a(8),p=a(11),d=a(2),m=a.n(d),h=a(3),_=a.n(h);var f=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:_.a.productpreview},n.a.createElement("img",{src:e.current,alt:"product"}),e.show?n.a.createElement("div",{className:_.a.time},n.a.createElement("p",null,"".concat((new Date).getHours(),":").concat((new Date).getMinutes()))):n.a.createElement("div",{className:_.a.heart},n.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/1249/1249898.png",alt:"nothing"}),n.a.createElement("p",null,"78"))))},g=a(1),v=a.n(g);var E=function(e){var t=e.data.colorOptions.map(function(t,a){var r=[v.a.productimage];return a===e.currentpos&&r.push(v.a.selectedimg),n.a.createElement("img",{key:a,onClick:function(){return e.oncolorkey(a)},className:r.join(" "),src:t.imageUrl,alt:t.styleName})}),a=e.data.featureList.map(function(t,a){var r=[v.a.featurebtn];return 0===a&&e.show?r.push(v.a.selectedfeature):1!==a||e.show||r.push(v.a.selectedfeature),n.a.createElement("button",{key:a,onClick:function(){return e.onfeaturekey(a)},className:r.join(" ")},t)});return n.a.createElement("div",null,n.a.createElement("h1",{className:v.a.producttitle},e.data.title),n.a.createElement("p",{className:v.a.productdescription},e.data.description),n.a.createElement("h3",{className:v.a.sectionheading},"select color"),n.a.createElement("div",null,t),n.a.createElement("h3",{className:v.a.sectionheading},"feature"),n.a.createElement("div",null,a),n.a.createElement("div",null,n.a.createElement("button",{className:v.a.featurebtn1},"Buy now")))},w=a(9),N=a.n(w);var b=function(){return n.a.createElement("div",null,n.a.createElement("header",{className:N.a.topbar},n.a.createElement("nav",null,n.a.createElement("img",{src:"http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG",alt:""}))))},P={title:"FitBit 19 - The Smartest Watch",description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.",colorOptions:[{styleName:"Black Strap",imageUrl:"https://imgur.com/iOeUBV7.png"},{styleName:"Red Strap",imageUrl:"https://imgur.com/PTgQlim.png"},{styleName:"Blue Strap",imageUrl:"https://imgur.com/Mplj1YR.png"},{styleName:"Purple Strap",imageUrl:"https://imgur.com/xSIK4M8.png"}],featureList:["Time","Heart Rate"]};Object.freeze(P);var y=P,k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={productdata:y,currentproductpos:0,show:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"oncolor",value:function(e){this.setState({currentproductpos:e})}},{key:"onfeature",value:function(e){var t=!1;0===e&&(t=!0),this.setState({show:t})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(b,null),n.a.createElement("div",{className:m.a.maincontainer},n.a.createElement("div",{className:m.a.Productpreview},n.a.createElement(f,{show:this.state.show,current:this.state.productdata.colorOptions[this.state.currentproductpos].imageUrl})),n.a.createElement("div",{className:m.a.Productdetails},n.a.createElement(E,{data:this.state.productdata,oncolorkey:this.oncolor.bind(this),currentpos:this.state.currentproductpos,onfeaturekey:this.onfeature.bind(this),show:this.state.show}))))}}]),t}(n.a.Component),O=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,28)).then(function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null))),O()},3:function(e,t,a){e.exports={productpreview:"Productpreview_productpreview__3yUOZ",time:"Productpreview_time__3ZxOh",heart:"Productpreview_heart__1wzWM"}},9:function(e,t,a){e.exports={topbar:"Topbar_topbar__33iI-"}}},[[12,3,2]]]);
//# sourceMappingURL=main.25751c90.chunk.js.map