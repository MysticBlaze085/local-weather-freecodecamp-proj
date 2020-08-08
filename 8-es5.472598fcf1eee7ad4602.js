!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{iydT:function(e,a,i){"use strict";i.r(a),i.d(a,"HomeModule",(function(){return j}));var o,c=i("ofXK"),s=i("tyNb"),r=i("R0Ic"),l=i("fXoL"),m=i("XiUz"),f=i("znSr"),d=((o=function(){function e(){t(this,e),this.text="Melissa S. Langhausen - Front End Developer Projects"}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=l.Jb({type:o,selectors:[["app-welcome-text"]],inputs:{text:"text"},decls:3,vars:3,consts:[["fxLayout","row","fxLayoutAlign","end end",3,"ngClass"],["fxFlex","80%",1,"mat-display-1"]],template:function(t,e){1&t&&(l.Vb(0,"div",0),l.Vb(1,"h1",1),l.Kc(2),l.Ub(),l.Ub()),2&t&&(l.qc("ngClass","above-other"),l.Bb(1),l.qc("@slide",void 0),l.Bb(1),l.Lc(e.text))},directives:[m.d,m.c,c.j,f.a,m.b],styles:[""],data:{animation:[Object(r.n)("slide",[Object(r.k)("out",Object(r.l)({transform:"translateY(0)"})),Object(r.m)("void => *",[Object(r.l)({transform:"translateY(-250%)"}),Object(r.e)(2e3)])])]}}),o),b=i("Wp6s");function u(t,e){if(1&t&&(l.Vb(0,"mat-card",3),l.Qb(1,"img",4),l.Ub()),2&t){var n=l.lc();l.qc("@flyInOut",void 0),l.Bb(1),l.qc("src",n.image.src,l.Bc)("alt",n.image.alt)}}var p,g,w,y,O=((p=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||p)},p.\u0275cmp=l.Jb({type:p,selectors:[["app-image-slide"]],inputs:{image:"image"},decls:3,vars:1,consts:[["fxLayout","column","fxLayoutAlign","end center"],["fxFlex.gt-sm","50%","fxFlexAlign","end",1,"home-welcome-text","pr-2"],["class","image-slide",4,"ngIf"],[1,"image-slide"],["mat-card-image","",3,"src","alt"]],template:function(t,e){1&t&&(l.Vb(0,"div",0),l.Qb(1,"app-welcome-text",1),l.Ic(2,u,2,3,"mat-card",2),l.Ub()),2&t&&(l.Bb(2),l.qc("ngIf",e.image.src))},directives:[m.d,m.c,d,m.b,m.a,c.l,b.a,b.c],styles:["[_nghost-%COMP%]{width:-200%}.image-slide[_ngcontent-%COMP%]{max-width:100vw;padding:0!important;animation:load-fade 7s 1;-webkit-animation:load-fade 7s 1;animation-fill-mode:forwards;animation-delay:3s;-webkit-animation-delay:1s;-webkit-animation-fill-mode:forwards}@keyframes load-fade{0%{opacity:1}to{opacity:.5}}@-webkit-keyframes load-fade{0%{opacity:1}to{opacity:.5}}.home-welcome-text[_ngcontent-%COMP%]{z-index:1000;position:absolute;max-width:50vw}@media only screen and (max-width:800px){.home-welcome-text[_ngcontent-%COMP%]{max-width:100vw}}"],data:{animation:[Object(r.n)("flyInOut",[Object(r.k)("in",Object(r.l)({transform:"translate(0)"})),Object(r.m)("void => *",[Object(r.l)({transform:"translate(100%)"}),Object(r.e)(2e3),Object(r.e)(2e3,Object(r.h)([Object(r.l)({transform:"scale(1,1) translateY(0)"}),Object(r.l)({transform:"scale(1.1, 0.9) translateY(0)"}),Object(r.l)({transform:"scale(0.9, 1.1) translateY(-100px)"}),Object(r.l)({transform:"scale(1.05, 0.95) translateY(0)"}),Object(r.l)({transform:"scale(1,1) translateY(-7px)"}),Object(r.l)({transform:"scale(1,1) translateY(0)"})]))])])]},changeDetection:0}),p),h=[{path:"",component:(g=function(){function e(){t(this,e),this.startingImage={src:"/assets/images/Woman.png",alt:"B&W sketch of a woman"}}return n(e,[{key:"ngOnInit",value:function(){}}]),e}(),g.\u0275fac=function(t){return new(t||g)},g.\u0275cmp=l.Jb({type:g,selectors:[["app-home-page"]],decls:1,vars:1,consts:[[3,"image"]],template:function(t,e){1&t&&l.Qb(0,"app-image-slide",0),2&t&&l.qc("image",e.startingImage)},directives:[O],encapsulation:2}),g)}],x=((w=function e(){t(this,e)}).\u0275mod=l.Nb({type:w}),w.\u0275inj=l.Mb({factory:function(t){return new(t||w)},imports:[[s.b.forChild(h)],s.b]}),w),v=i("FpXt"),j=((y=function e(){t(this,e)}).\u0275mod=l.Nb({type:y}),y.\u0275inj=l.Mb({factory:function(t){return new(t||y)},imports:[[c.c,x,v.a]]}),y)}}])}();