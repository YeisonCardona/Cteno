import{a as y,n as v,t as u}from"./chunk-BaccXEZv.js";import{$ as $f,$n as yc,$t as ZI,An as np,At as Qf,B as vr,C as aa,Cn as iI,Dn as kn$1,Dt as Pe,E as e_,En as kI,F as pf,Fn as ph,Ft as SI,G as ye,Gn as up,Gt as Wm,H as w_,Hn as th,I as rf,In as pi,It as Sh,J as R,K as yu,Kn as ur,Kt as Xf,L as s_,Ln as pl,Lt as Sn$1,M as k_,Mn as op,N as m1,Nn as pI,Nt as S,O as fn$1,On as lp,Ot as Pi,P as p1,Pn as pc,Qn as y$1,Qt as Z,R as tu,Rn as qI,Rt as T,S as a_,Sn as hi,Tn as ir,U as wn$1,Un as tp,Ut as Vt,Vn as sr,W as xu,Wn as uI,Xn as xI,Xt as YL,Y as j,Yn as wE,Z as $,Zt as Yf,_ as Pa,_n as gr,a as Df,an as _p,at as GI,b as Zh,bn as hg,bt as ME,c as Ff,cn as au,ct as Hf,d as Jh,en as ZL,er as yh,f as Jt$1,fn as ce,g as Ou,gn as gh,gt as Kn$1,h as O1,hn as ge$1,i as D_,in as _o$1,ir as zf,j as it,jn as oo$1,k as gf,kt as QI,l as Go,lt as Hl,m as Mf,mn as fc,mt as KI,nt as Bl,o as En$1,on as aI,ot as GL,pn as ei$1,q as h,qn as uy,qt as Xg,r as As,rr as z,rt as CE,s as F1,sn as ae,st as HI,t as $c,tn as Zf,tr as yp,tt as Ah,u as Ia,un as cE,ut as IE,v as Ra,vn as ha,vt as Ly,w as ct,wt as OI,x as _t$1,y as We$1,yn as hc,z as u_,zn as rp,zt as UI}from"./main.js";import{a as de$1,c as mn$1,f as tt$1,i as Z$1,p as ue,s as gn$1,u as rt}from"./chunk-BH5mFtYN.js";import{t as O}from"./chunk-g_0yhVdO.js";function Rn(o,i){o&1&&Yf(0,`div`,2)}var En=new S(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var Xi=(()=>{class o{_elementRef=y$1(ur);_ngZone=y$1(z);_changeDetectorRef=y$1(GL);_renderer=y$1(ha);_cleanupTransitionEnd;constructor(){let e=Df(),t=y$1(En,{optional:!0});this._isNoopAnimation=e===`di-disabled`,e===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;get value(){return this._value}set value(e){this._value=ji(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=ji(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Pe;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(t){return new(t||o)};static ɵcmp=iI({type:o,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(t,n){t&2&&(zf(`aria-valuenow`,n._isIndeterminate()?null:n.value)(`mode`,n.mode),cE(`mat-`+n.color),up(`_mat-animation-noopable`,n._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!n._isNoopAnimation)(`mdc-linear-progress--indeterminate`,n._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,YL],bufferValue:[2,`bufferValue`,`bufferValue`,YL],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(t,n){t&1&&(pc(0,`div`,0),Yf(1,`div`,1),SI(2,Rn,1,0,`div`,2),hc(),pc(3,`div`,3),Yf(4,`span`,4),hc(),pc(5,`div`,5),Yf(6,`span`,4),hc()),t&2&&(Ly(),lp(`flex-basis`,n._getBufferBarFlexBasis()),Ly(),xI(n.mode===`buffer`?2:-1),Ly(),lp(`transform`,n._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return o})();function ji(o,i=0,e=100){return Math.max(i,Math.min(e,o))}var Uo=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=aI({type:o});static ɵinj=pl({imports:[En$1]})}return o})();var pe=class o{hardwareIP=_o$1(`HARDWARE-IP`);isConnected=_o$1(!1);hasAvailableDevice=_o$1(!1);measuringLatency=_o$1(!1);latencyStats=_o$1({latency:0,jitter:0,min:0,max:0,median:0,samples:0});reading=!1;lineQueue=[];waitingResolvers=[];MAX_QUEUE_SIZE=100;deviceProcessLine;constructor(){}sleep=i=>new Promise(e=>setTimeout(e,i));requestAndConnectDevice(){return y(this,null,function*(){yield this.requestDevice(),yield this.connect()})}flushQueues(){this.lineQueue=[],this.waitingResolvers=[]}processLine(i){if(O.INPUT_COMMANDS.some(e=>i.startsWith(e))){if(this.deviceProcessLine?.(i),i.startsWith(`RESP=WIFI_CONNECTED`)){let e=i.split(`IP=`)[1]?.split(`;`)[0];e&&this.hardwareIP.set(e)}this.waitingResolvers.length>0?this.waitingResolvers.shift()(i):(this.lineQueue.length>=this.MAX_QUEUE_SIZE&&this.lineQueue.shift(),this.lineQueue.push(i))}}measureLatency(i=0){return y(this,null,function*(){this.measuringLatency.set(!0),this.latencyStats.set({latency:0,jitter:0,min:0,max:0,median:0,samples:0});let e=!0;i===0&&(e=!1,i=this.samplesToTest),yield this.writeLine(`CMD=@BIP;CMD=@TITLE "Latency Test";`),yield this.writeLine(`CMD=@LATENCY;`),yield this.sleep(300),yield this.stopListening();let t=0;for(;t<100&&!(yield this.readLineFromSource()).trim().endsWith(`#DUMMY@`);)t++;for(yield this.writeLineToSource(`@`),t=0;t<3&&(yield this.readLineFromSource()).trim()!==`@`;)t++;let n=[],r=``;for(;!n.length||n.length<i;){let h=String.fromCharCode(97+Math.floor(Math.random()*26)),f=performance.now();yield this.writeLineToSource(h),r=yield this.readLineFromSource();let C=performance.now();r===h&&n.push(C-f),n.length%1e3===0&&console.log(`Processed ${n.length} samples`)}if(yield this.sleep(100),yield this.writeLineToSource(`EXIT`),e){let h=JSON.stringify(n),f=new Blob([h],{type:`application/json`}),C=URL.createObjectURL(f),R=document.createElement(`a`);R.href=C,R.download=`${this.mode}_latencies_${n.length}samples_${new Date().toISOString().slice(0,19)}.json`,R.click(),URL.revokeObjectURL(C)}let s=n.reduce((h,f)=>h+f,0)/n.length,l=n.reduce((h,f)=>h+Math.pow(f-s,2),0)/n.length,d=Math.sqrt(l),p=[...n].sort((h,f)=>h-f),c=p.length;this.latencyStats.set({latency:s,jitter:d,min:Math.min(...n),max:Math.max(...n),median:p.length%2===0?(p[c/2-1]+p[c/2])/2:p[Math.floor(c/2)],samples:n.length}),this.measuringLatency.set(!1),yield this.writeLine(`CMD=@BIP;CMD=@BRAND;`),yield this.startListening()})}startListening(){return y(this,null,function*(){this.flushQueues(),this.reading=!0;let i=``;for(;this.reading;)try{let[e,t]=yield this.readChunk();i+=e;let n=i.split(`
`);i=n.pop()||``;for(let r of n)this.processLine(r.trim())}catch(e){console.error(`Error reading from USB:`,e),this.reading=!1}})}readLine(){return this.lineQueue.length>0?Promise.resolve(this.lineQueue.shift()):this.waitingResolvers.length>=this.MAX_QUEUE_SIZE?Promise.reject(new Error(`Too many pending readLine requests.`)):new Promise(i=>{this.waitingResolvers.push(i)})}stopListening(){return y(this,null,function*(){this.reading=!1,this.flushQueues();for(let i=0;i<10;i++)yield this.writeLine(`#DUMMY`);yield this.writeLine(`#DUMMY@`)})}onDisconnect(){setTimeout(()=>this.autoConnect(),1e3)}static ɵfac=function(e){return new(e||o)};static ɵprov=ce({token:o,factory:o.ɵfac,providedIn:`root`})};var mt=class o extends pe{mode=`serial`;samplesToTest=500;baudRate=115200;port=null;reader=null;writer=null;readableStreamClosed=null;writableStreamClosed=null;requestDevice(){return y(this,null,function*(){try{this.port=yield navigator.serial.requestPort()}catch(i){console.error(`USB device request failed:`,i)}yield this.checkAvailableDevice()})}checkAvailableDevice(){return y(this,null,function*(){let i=yield navigator.serial.getPorts();this.hasAvailableDevice.set(i.length>0)})}connect(){return y(this,null,function*(){if(!this.port)return;yield this.port.open({baudRate:this.baudRate});let i=new TextDecoder,e=new TransformStream({transform(n,r){r.enqueue(i.decode(n,{stream:!0}))}});this.readableStreamClosed=this.port.readable.pipeTo(e.writable),this.reader=e.readable.getReader();let t=new TextEncoderStream;this.writableStreamClosed=(yield t.readable.pipeTo(this.port.writable))??null,this.writer=t.writable.getWriter(),this.readableStreamClosed?.catch(n=>{this.isConnected.set(!1),this.stopListening(),this.onDisconnect()}),this.isConnected.set(!0),yield this.startListening(),yield this.writeLine(`CMD=@BRAND;`)})}autoConnect(){return y(this,null,function*(){let i=yield navigator.serial.getPorts();return i.length===0?!1:(this.port=i[0],yield this.connect(),!0)})}disconnect(){return y(this,null,function*(){try{if(this.reading=!1,yield this.writeLine(`CMD=@CLA;`),this.reader){try{yield this.reader.cancel()}catch(i){console.warn(`Reader cancel failed:`,i)}this.reader.releaseLock(),this.reader=null}if(this.writer){try{yield this.writer.close()}catch(i){console.warn(`Writer close failed:`,i)}this.writer.releaseLock(),this.writer=null}this.port&&this.port.readable?.locked===!1&&this.port.writable?.locked===!1&&(yield this.port.close()),this.port=null,this.isConnected.set(!1)}catch(i){console.error(`Failed to disconnect:`,i)}})}writeLine(i){return y(this,null,function*(){if(!this.writer)return;let e=i.trim().replace(/;\s*/g,`;
`),t=e.endsWith(`
`)?e:e+`
`;yield this.writer.write(t)})}writeLineToSource(i){return y(this,null,function*(){this.writer&&(yield this.writer.write(i+`
`))})}readLineFromSource(i=0){return y(this,null,function*(){if(!this.reader)return``;let{value:e,done:t}=yield this.reader.read();if(t||e===void 0)return``;return e.trim()||(i<3?this.readLineFromSource(i+1):``)})}getProperties(){let i=this.port?.getInfo();return i?[{name:`Vendor ID`,value:i.usbVendorId?.toString(16).padStart(4,`0`)??`Unknown`},{name:`Product ID`,value:i.usbProductId?.toString(16).padStart(4,`0`)??`Unknown`}]:[]}readChunk(){return y(this,null,function*(){if(!this.reader)return[``,!1];let{value:i,done:e}=yield this.reader.read();return[i,e]})}static ɵfac=(()=>{let i;return function(t){return(i||(i=Xg(o)))(t||o)}})();static ɵprov=ce({token:o,factory:o.ɵfac,providedIn:`root`})};var pt=class o extends pe{mode=`usb`;samplesToTest=1e3;encoder=new TextEncoder;decoder=new TextDecoder;device;interfaceNumber=0;endpointOut=0;endpointIn=0;configurationValue=1;requestDevice(){return y(this,null,function*(){try{this.device=yield navigator.usb.requestDevice({filters:[{vendorId:12346}]})}catch(i){console.error(`USB device request failed:`,i)}yield this.checkAvailableDevice()})}checkAvailableDevice(){return y(this,null,function*(){let i=yield navigator.usb.getDevices();this.hasAvailableDevice.set(i.length>0)})}connect(){return y(this,null,function*(){if(!this.device)return;this.device.opened||(yield this.device.open()),this.device.configuration===null&&(yield this.device.selectConfiguration(this.configurationValue));let i=this.findCDCInterfaceAndEndpoints();i&&(this.interfaceNumber=i.interfaceNumber,this.endpointIn=i.endpointIn,this.endpointOut=i.endpointOut,yield this.device.claimInterface(this.interfaceNumber),this.isConnected.set(!0),navigator.usb.addEventListener(`disconnect`,e=>{this.device&&e.device===this.device&&(this.isConnected.set(!1),this.stopListening(),this.onDisconnect())}),yield this.startListening(),yield this.writeLine(`CMD=@BRAND;`))})}autoConnect(){return y(this,null,function*(){let i=yield navigator.usb.getDevices();return i.length===0?!1:(this.device=i[0],yield this.connect(),!0)})}disconnect(){return y(this,null,function*(){if(this.device){yield this.writeLine(`CMD=@CLA;`);try{this.device.opened&&(yield this.device.releaseInterface(this.interfaceNumber),yield this.device.close())}catch(i){console.warn(`Error during disconnect:`,i)}finally{this.device=void 0,this.isConnected.set(!1)}yield this.checkAvailableDevice()}})}writeLine(i){return y(this,null,function*(){if(!this.device)return;let e=i.trim().replace(/;\s*/g,`;
`),t=this.encoder.encode(e.endsWith(`
`)?e:e+`
`);yield this.device.transferOut(this.endpointOut,t)})}writeLineToSource(i){return y(this,null,function*(){if(!this.device)return;let e=this.encoder.encode(i+`
`);yield this.device.transferOut(this.endpointOut,e)})}readLineFromSource(i=0){return y(this,null,function*(){if(!this.device)return``;let e=yield this.device.transferIn(this.endpointIn,64);return this.decoder.decode(e.data?.buffer||new ArrayBuffer(0)).trim()||(i<3?this.readLineFromSource(i+1):``)})}getProperties(){return this.device?[{name:`productName`,value:this.device.productName},{name:`productId`,value:`0x`+this.device.productId.toString(16).padStart(4,`0`)},{name:`vendorId`,value:`0x`+this.device.vendorId.toString(16).padStart(4,`0`)},{name:`manufacturerName`,value:this.device.manufacturerName},{name:`serialNumber`,value:this.device.serialNumber},{name:`interfaceNumber`,value:this.interfaceNumber},{name:`endpointIn`,value:this.endpointIn},{name:`endpointOut`,value:this.endpointOut}]:[]}readChunk(){return y(this,null,function*(){if(!this.device)return[``,!1];let i=yield this.device.transferIn(this.endpointIn,64);return[this.decoder.decode(i.data?.buffer||new ArrayBuffer(0)),!1]})}findCDCInterfaceAndEndpoints(){if(!this.device?.configuration?.interfaces)return null;for(let i of this.device.configuration.interfaces)for(let e of i.alternates){let{interfaceClass:t,endpoints:n}=e;if(t===10||t===255){let r=n.find(l=>l.direction===`in`)?.endpointNumber,s=n.find(l=>l.direction===`out`)?.endpointNumber;if(r!==void 0&&s!==void 0)return{interfaceNumber:i.interfaceNumber,endpointIn:r,endpointOut:s}}}return null}static ɵfac=(()=>{let i;return function(t){return(i||(i=Xg(o)))(t||o)}})();static ɵprov=ce({token:o,factory:o.ɵfac,providedIn:`root`})};var de=R(`UsbSerial`);var gt=class o extends pe{mode=`coreusb`;samplesToTest=1e3;baudRate=115200;requestDevice(){return y(this,null,function*(){yield this.checkAvailableDevice()})}checkAvailableDevice(){return y(this,null,function*(){try{let i=yield de.getDevices();this.hasAvailableDevice.set(i.hasDevices)}catch(i){console.error(`Error checking USB devices:`,i),this.hasAvailableDevice.set(!1)}})}connect(){return y(this,null,function*(){try{(yield de.connect({baudRate:this.baudRate})).connected&&(this.isConnected.set(!0),yield this.startListening(),yield this.writeLine(`CMD=@BRAND;`))}catch(i){console.error(`USB connection failed:`,i),this.isConnected.set(!1)}})}autoConnect(){return y(this,null,function*(){return(yield de.getDevices()).hasDevices?(yield this.connect(),this.isConnected()):!1})}disconnect(){return y(this,null,function*(){try{yield this.writeLine(`CMD=@CLA;`),yield de.disconnect()}catch(i){console.warn(`Disconnect error:`,i)}finally{this.isConnected.set(!1)}yield this.checkAvailableDevice()})}writeLine(i){return y(this,null,function*(){if(!this.isConnected())return;let e=i.replace(/;/g,`;
`),t=e.endsWith(`
`)?e:e+`
`;yield de.write({data:t})})}writeLineToSource(i){return y(this,null,function*(){this.isConnected()&&(yield de.write({data:i+`
`}))})}readLineFromSource(i=0){return y(this,null,function*(){if(!this.isConnected())return``;try{return((yield de.read()).data||``).trim()||(i<500?this.readLineFromSource(i+1):``)}catch(e){return``}})}getProperties(){return[{name:`BaudRate`,value:this.baudRate},{name:`Is Connected`,value:this.isConnected()}]}readChunk(){return y(this,null,function*(){if(!this.isConnected())return[``,!1];try{let e=(yield de.read()).data||``;return e||(yield new Promise(t=>setTimeout(t,1))),[e,!1]}catch(i){return[``,!0]}})}static ɵfac=(()=>{let i;return function(t){return(i||(i=Xg(o)))(t||o)}})();static ɵprov=ce({token:o,factory:o.ɵfac,providedIn:`root`})};var ft=class{connectionMode=_o$1(`serial`);hardwareIP=_o$1(null);webUsbService=y$1(pt);webSerialService=y$1(mt);nativeUsbService=y$1(gt);core=j.isNativePlatform()?this.nativeUsbService:this.webSerialService;constructor(){let i=localStorage.getItem(`cteno-device-connection-mode`),e=i===`usb`||i===`serial`?i:`serial`;this.connectionMode.set(e),j.isNativePlatform()?this.core=this.nativeUsbService:this.core=e===`usb`?this.webUsbService:this.webSerialService,au(()=>{this.hardwareIP.set(this.core.hardwareIP())}),this.core.deviceProcessLine=this.processLine.bind(this)}setMode(i){return y(this,null,function*(){localStorage.setItem(`cteno-device-connection-mode`,i),this.connectionMode.set(i),j.isNativePlatform()?this.core=this.nativeUsbService:this.core=i===`usb`?this.webUsbService:this.webSerialService,yield this.core.checkAvailableDevice()})}writeLine(i){return y(this,null,function*(){yield this.core.writeLine(i)})}readLine(){return y(this,null,function*(){return this.core.readLine()})}};var Fe=class o extends ft{EvtJoystick2=_o$1(``);EvtLight=_o$1(``);EvtButton=_o$1(``);evtKey=_o$1(``);evtConfig=_o$1(``);processLine(i){if(console.log(i),/^EVT=(JOY|LUX|BTN)/.test(i)){this.handleUnitsEvents(i);return}if(/^EVT=(KEY|SET)/.test(i)){this.handleEvents(i);return}}handleUnitsEvents(i){i.startsWith(`EVT=JOY`)&&this.EvtJoystick2.set(i.slice(7,-1).trim()),i.startsWith(`EVT=LUX`)&&this.EvtLight.set(i.slice(7,-1).trim()),i.startsWith(`EVT=BTN`)&&this.EvtButton.set(i.slice(7,-1).trim())}handleEvents(i){let e=i.match(/^EVT=KEY (.{1});?$/);e&&this.evtKey.set(e[1]);let t=i.match(/^EVT=SET (.+?);?$/);t&&this.evtConfig.set(t[1])}static ɵfac=(()=>{let i;return function(t){return(i||(i=Xg(o)))(t||o)}})();static ɵprov=ce({token:o,factory:o.ɵfac,providedIn:`root`})};var Pn=20;var ke=(()=>{class o{_ngZone=y$1(z);_platform=y$1(ye);_renderer=y$1(sr).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Z;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Pn){return this._platform.isBrowser?new T(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(yh(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):th()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(kn$1(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,r)=>{this._targetContainsElement(r,e)&&t.push(r)}),t}_targetContainsElement(e,t){let n=_t$1(t),r=e.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}static ɵfac=function(t){return new(t||o)};static ɵprov=Vt({token:o,factory:o.ɵfac})}return o})();var qt=(()=>{class o{elementRef=y$1(ur);scrollDispatcher=y$1(ke);ngZone=y$1(z);dir=y$1(Ff,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new Z;_renderer=y$1(ha);_cleanupScroll;_elementScrolled=new Z;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,n=this.dir&&this.dir.value==`rtl`;e.left??=n?e.end:e.start,e.right??=n?e.start:e.end,e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),n&&s_()!=vr.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),s_()==vr.INVERTED?e.left=e.right:s_()==vr.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;a_()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t=`left`,n=`right`,r=this.elementRef.nativeElement;if(e==`top`)return r.scrollTop;if(e==`bottom`)return r.scrollHeight-r.clientHeight-r.scrollTop;let s=this.dir&&this.dir.value==`rtl`;return e==`start`?e=s?n:t:e==`end`&&(e=s?t:n),s&&s_()==vr.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:s&&s_()==vr.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static ɵfac=function(t){return new(t||o)};static ɵdir=uI({type:o,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return o})();var In=20;var ze=(()=>{class o{_platform=y$1(ye);_listeners;_viewportSize=null;_change=new Z;_document=y$1(Kn$1);constructor(){let e=y$1(z),t=y$1(sr).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=r=>this._change.next(r);this._listeners=[t.listen(`window`,`resize`,n),t.listen(`window`,`orientationchange`,n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,r=n.getBoundingClientRect();return{top:-r.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,left:-r.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0}}change(e=In){return e>0?this._change.pipe(yh(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(t){return new(t||o)};static ɵprov=Vt({token:o,factory:o.ɵfac})}return o})();var Je=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=aI({type:o});static ɵinj=pl({})}return o})();var Zt=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=aI({type:o});static ɵinj=pl({imports:[En$1,Je,En$1,Je]})}return o})();var Gi=a_();function je(o){return new _t(o.get(ze),o.get(Kn$1))}var _t=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||``,this._previousHTMLStyles.top=i.style.top||``,i.style.left=D_(-this._previousScrollPosition.left),i.style.top=D_(-this._previousScrollPosition.top),i.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,n=e.style,r=t.scrollBehavior||``,s=n.scrollBehavior||``;this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove(`cdk-global-scrollblock`),Gi&&(t.scrollBehavior=n.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Gi&&(t.scrollBehavior=r,n.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Ji(o,i){return new bt(o.get(ke),o.get(z),o.get(ze),i)}var bt=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,n){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(kn$1(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var et=class{enable(){}disable(){}attach(){}};function Qt(o,i){return i.some(e=>{let t=o.bottom<e.top,n=o.top>e.bottom,r=o.right<e.left,s=o.left>e.right;return t||n||r||s})}function Ui(o,i){return i.some(e=>{let t=o.top<e.top,n=o.bottom>e.bottom,r=o.left<e.left,s=o.right>e.right;return t||n||r||s})}function wt(o,i){return new vt(o.get(ke),o.get(ze),o.get(z),i)}var vt=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,n){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();Qt(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var en=(()=>{class o{_injector=y$1(ge$1);noop=()=>new et;close=e=>Ji(this._injector,e);block=()=>je(this._injector);reposition=e=>wt(this._injector,e);static ɵfac=function(t){return new(t||o)};static ɵprov=Vt({token:o,factory:o.ɵfac})}return o})();var He=class{positionStrategy;scrollStrategy=new et;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var yt=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var tn=(()=>{class o{_attachedOverlays=[];_document=y$1(Kn$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static ɵfac=function(t){return new(t||o)};static ɵprov=Vt({token:o,factory:o.ɵfac})}return o})();var nn=(()=>{class o extends tn{_ngZone=y$1(z);_renderer=y$1(sr).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let r=t[n];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static ɵfac=function(t){return new(t||o)};static ɵprov=Vt({token:o,factory:o.ɵfac})}return o})();var on=(()=>{class o extends tn{_platform=y$1(ye);_ngZone=y$1(z);_renderer=y$1(sr).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,`pointerdown`,this._pointerDownListener,n),r.listen(t,`click`,this._clickListener,n),r.listen(t,`auxclick`,this._clickListener,n),r.listen(t,`contextmenu`,this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=We$1(e)};_clickListener=e=>{let t=We$1(e),n=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let l=r[s],d=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,d))){if(qi(l.overlayElement,t)||qi(l.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>d.next(e)):d.next(e)}}};static ɵfac=function(t){return new(t||o)};static ɵprov=Vt({token:o,factory:o.ɵfac})}return o})();function qi(o,i){let e=typeof ShadowRoot<`u`&&ShadowRoot,t=i;for(;t;){if(t===o)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var rn=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵcmp=iI({type:o,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return o})();var kt=(()=>{class o{_platform=y$1(ye);_containerElement;_document=y$1(Kn$1);_styleLoader=y$1(ct);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||u_()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<n.length;r++)n[r].remove()}let t=this._document.createElement(`div`);t.classList.add(e),u_()?t.setAttribute(`platform`,`test`):this._platform.isBrowser||t.setAttribute(`platform`,`server`),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(rn)}static ɵfac=function(t){return new(t||o)};static ɵprov=Vt({token:o,factory:o.ɵfac})}return o})();var $t=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,n){this._renderer=e,this._ngZone=t,this.element=i.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents=`none`,i.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Kt(o){return o&&o.nodeType===1}var We=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Z;_attachments=new Z;_detachments=new Z;_positionStrategy;_scrollStrategy;_locationChanges=$.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Z;_outsidePointerEvents=new Z;_afterNextRenderRef;constructor(i,e,t,n,r,s,l,d,p,c=!1,h,f){this._portalOutlet=i,this._host=e,this._pane=t,this._config=n,this._ngZone=r,this._keyboardDispatcher=s,this._document=l,this._location=d,this._outsideClickDispatcher=p,this._animationsDisabled=c,this._injector=h,this._renderer=f,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=uy(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=u(u({},this._config),i),this._updateElementSize()}setDirection(i){this._config=v(u({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i==`string`?i:i.value:`ltr`}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=D_(this._config.width),i.height=D_(this._config.height),i.minWidth=D_(this._config.minWidth),i.minHeight=D_(this._config.minHeight),i.maxWidth=D_(this._config.maxWidth),i.maxHeight=D_(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?``:`none`}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Kt(i)?i.after(this._host):i?.type===`parent`?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new $t(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let n=Ra(e||[]).filter(r=>!!r);n.length&&(t?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=uy(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}};var Zi=`cdk-overlay-connected-position-bounding-box`;var Nn=/([A-Za-z%]+)$/;function xt(o,i){return new St(i,o.get(ze),o.get(Kn$1),o.get(ye),o.get(kt))}var St=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Z;_resizeSubscription=$.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,n,r){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Zi),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,r=[],s;for(let l of this._preferredPositions){let d=this._getOriginPoint(i,n,l),p=this._getOverlayPoint(d,e,l),c=this._getOverlayFit(p,e,t,l);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,d);return}if(this._canFitWithFlexibleDimensions(c,p,t)){r.push({position:l,origin:d,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(d,l)});continue}(!s||s.overlayFit.visibleArea<c.visibleArea)&&(s={overlayFit:c,overlayPoint:p,originPoint:d,position:l,overlayRect:e})}if(r.length){let l=null,d=-1;for(let p of r){let c=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);c>d&&(d=c,l=p)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&xe(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Zi),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof ur?this._origin.nativeElement:Kt(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let n;if(t.originX==`center`)n=i.left+i.width/2;else{let s=this._isRtl()?i.right:i.left,l=this._isRtl()?i.left:i.right;n=t.originX==`start`?s:l}e.left<0&&(n-=e.left);let r;return t.originY==`center`?r=i.top+i.height/2:r=t.originY==`top`?i.top:i.bottom,e.top<0&&(r-=e.top),{x:n,y:r}}_getOverlayPoint(i,e,t){let n;t.overlayX==`center`?n=-e.width/2:t.overlayX===`start`?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let r;return t.overlayY==`center`?r=-e.height/2:r=t.overlayY==`top`?0:-e.height,{x:i.x+n,y:i.y+r}}_getOverlayFit(i,e,t,n){let r=$i(e),{x:s,y:l}=i,d=this._getOffset(n,`x`),p=this._getOffset(n,`y`);d&&(s+=d),p&&(l+=p);let c=0-s,h=s+r.width-t.width,f=0-l,C=l+r.height-t.height,R=this._subtractOverflows(r.width,c,h),Q=this._subtractOverflows(r.height,f,C),ai=R*Q;return{visibleArea:ai,isCompletelyWithinViewport:r.width*r.height===ai,fitsInViewportVertically:Q===r.height,fitsInViewportHorizontally:R==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,r=t.right-e.x,s=Qi(this._overlayRef.getConfig().minHeight),l=Qi(this._overlayRef.getConfig().minWidth),d=i.fitsInViewportVertically||s!=null&&s<=n,p=i.fitsInViewportHorizontally||l!=null&&l<=r;return d&&p}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let n=$i(e),r=this._viewportRect,s=Math.max(i.x+n.width-r.width,0),l=Math.max(i.y+n.height-r.height,0),d=Math.max(r.top-t.top-i.y,0),p=Math.max(r.left-t.left-i.x,0),c=0,h=0;return n.width<=r.width?c=p||-s:c=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,n.height<=r.height?h=d||-l:h=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:c,y:h},{x:i.x+c,y:i.y+h}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Ln(this._lastScrollVisibility,t)){let n=new yt(i,t);this._positionChanges.next(n)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=i.overlayY;i.overlayX===`center`?t=`center`:this._isRtl()?t=i.overlayX===`start`?`right`:`left`:t=i.overlayX===`start`?`left`:`right`;for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${n}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,n=this._isRtl(),r,s,l;if(e.overlayY===`top`)s=i.y,r=t.height-s+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)l=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-l+this._getViewportMarginTop();else{let C=Math.min(t.bottom-i.y+t.top,i.y),R=this._lastBoundingBoxSize.height;r=C*2,s=i.y-C,r>R&&!this._isInitialRender&&!this._growAfterOpen&&(s=i.y-R/2)}let d=e.overlayX===`start`&&!n||e.overlayX===`end`&&n,p=e.overlayX===`end`&&!n||e.overlayX===`start`&&n,c,h,f;if(p)f=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=i.x-this._getViewportMarginStart();else if(d)h=i.x,c=t.right-i.x-this._getViewportMarginEnd();else{let C=Math.min(t.right-i.x+t.left,i.x),R=this._lastBoundingBoxSize.width;c=C*2,h=i.x-C,c>R&&!this._isInitialRender&&!this._growAfterOpen&&(h=i.x-R/2)}return{top:s,left:h,bottom:l,right:f,width:c,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left=`0`,n.bottom=n.right=`auto`,n.maxHeight=n.maxWidth=``,n.width=n.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;n.width=D_(t.width),n.height=D_(t.height),n.top=D_(t.top)||`auto`,n.bottom=D_(t.bottom)||`auto`,n.left=D_(t.left)||`auto`,n.right=D_(t.right)||`auto`,e.overlayX===`center`?n.alignItems=`center`:n.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?n.justifyContent=`center`:n.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(n.maxHeight=D_(r)),s&&(n.maxWidth=D_(s))}this._lastBoundingBoxSize=t,xe(this._boundingBox.style,n)}_resetBoundingBoxStyles(){xe(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){xe(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(i,e){let t={},n=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(n){let c=this._viewportRuler.getViewportScrollPosition();xe(t,this._getExactOverlayY(e,i,c)),xe(t,this._getExactOverlayX(e,i,c))}else t.position=`static`;let l=``,d=this._getOffset(e,`x`),p=this._getOffset(e,`y`);d&&(l+=`translateX(${d}px) `),p&&(l+=`translateY(${p}px)`),t.transform=l.trim(),s.maxHeight&&(n?t.maxHeight=D_(s.maxHeight):r&&(t.maxHeight=``)),s.maxWidth&&(n?t.maxWidth=D_(s.maxWidth):r&&(t.maxWidth=``)),xe(this._pane.style,t)}_getExactOverlayY(i,e,t){let n={top:``,bottom:``},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY===`bottom`)n.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else n.top=D_(r.y);return n}_getExactOverlayX(i,e,t){let n={left:``,right:``},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let s;if(this._isRtl()?s=i.overlayX===`end`?`left`:`right`:s=i.overlayX===`end`?`right`:`left`,s===`right`)n.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else n.left=D_(r.x);return n}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Ui(i,t),isOriginOutsideView:Qt(i,t),isOverlayClipped:Ui(e,t),isOverlayOutsideView:Qt(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,n)=>t-Math.max(n,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e===`x`?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Ra(i).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof ur)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();i&&(e.style.display=`block`);let t=e.getBoundingClientRect();return i&&(e.style.display=``),t}};function xe(o,i){for(let e in i)i.hasOwnProperty(e)&&(o[e]=i[e]);return o}function Qi(o){if(typeof o!=`number`&&o!=null){let[i,e]=o.split(Nn);return!e||e===`px`?parseFloat(i):null}return o||null}function $i(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function Ln(o,i){return o===i?!0:o.isOriginClipped===i.isOriginClipped&&o.isOriginOutsideView===i.isOriginOutsideView&&o.isOverlayClipped===i.isOverlayClipped&&o.isOverlayOutsideView===i.isOverlayOutsideView}var Ki=`cdk-global-overlay-wrapper`;function Xe(o){return new Ct}var Ct=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Ki),this._isDisposed=!1}top(i=``){return this._bottomOffset=``,this._topOffset=i,this._alignItems=`flex-start`,this}left(i=``){return this._xOffset=i,this._xPosition=`left`,this}bottom(i=``){return this._topOffset=``,this._bottomOffset=i,this._alignItems=`flex-end`,this}right(i=``){return this._xOffset=i,this._xPosition=`right`,this}start(i=``){return this._xOffset=i,this._xPosition=`start`,this}end(i=``){return this._xOffset=i,this._xPosition=`end`,this}width(i=``){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=``){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=``){return this.left(i),this._xPosition=`center`,this}centerVertically(i=``){return this.top(i),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:n,height:r,maxWidth:s,maxHeight:l}=this._overlayRef.getConfig(),d=(n===`100%`||n===`100vw`)&&(!s||s===`100%`||s===`100vw`),p=(r===`100%`||r===`100vh`)&&(!l||l===`100%`||l===`100vh`),c=this._xPosition,h=this._xOffset,f=this._overlayRef.getConfig().direction===`rtl`,C=``,R=``,Q=``;d?Q=`flex-start`:c===`center`?(Q=`center`,f?R=h:C=h):f?c===`left`||c===`end`?(Q=`flex-end`,C=h):(c===`right`||c===`start`)&&(Q=`flex-start`,R=h):c===`left`||c===`start`?(Q=`flex-start`,C=h):(c===`right`||c===`end`)&&(Q=`flex-end`,R=h),i.position=this._cssPosition,i.marginLeft=d?`0`:C,i.marginTop=p?`0`:this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=d?`0`:R,e.justifyContent=Q,e.alignItems=p?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Ki),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position=``,this._overlayRef=null,this._isDisposed=!0}};var sn=(()=>{class o{_injector=y$1(ge$1);global(){return Xe()}flexibleConnectedTo(e){return xt(this._injector,e)}static ɵfac=function(t){return new(t||o)};static ɵprov=Vt({token:o,factory:o.ɵfac})}return o})();var an=new S(`OVERLAY_DEFAULT_CONFIG`);function Ye(o,i){o.get(ct).load(rn);let e=o.get(kt),t=o.get(Kn$1),n=o.get(Pa),r=o.get(gr),s=o.get(Ff),l=o.get(ha,null,{optional:!0})||o.get(sr).createRenderer(null,null),d=new He(i),p=o.get(an,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||s.value,!t.body||!(`showPopover`in t.body)?d.usePopover=!1:d.usePopover=i?.usePopover??p;let c=t.createElement(`div`),h=t.createElement(`div`);c.id=n.getId(`cdk-overlay-`),c.classList.add(`cdk-overlay-pane`),h.appendChild(c),d.usePopover&&(h.setAttribute(`popover`,`manual`),h.classList.add(`cdk-overlay-popover`));let f=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return Kt(f)?f.after(h):f?.type===`parent`?f.element.appendChild(h):e.getContainerElement().appendChild(h),new We(new tt$1(c,r,o),h,c,d,o.get(z),o.get(nn),t,o.get(Jt$1),o.get(on),i?.disableAnimations??o.get(hg,null,{optional:!0})===`NoopAnimations`,o.get(ae),l)}var ln=(()=>{class o{scrollStrategies=y$1(en);_positionBuilder=y$1(sn);_injector=y$1(ge$1);create(e){return Ye(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(t){return new(t||o)};static ɵprov=Vt({token:o,factory:o.ɵfac})}return o})();var De=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=aI({type:o});static ɵinj=pl({providers:[ln],imports:[En$1,mn$1,Zt,Zt]})}return o})();function Bn(o,i){}var ge=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var ei=(()=>{class o extends Z$1{_elementRef=y$1(ur);_focusTrapFactory=y$1(pf);_config;_interactivityChecker=y$1(rf);_ngZone=y$1(z);_focusMonitor=y$1(Ia);_renderer=y$1(ha);_changeDetectorRef=y$1(GL);_injector=y$1(ge$1);_platform=y$1(ye);_document=y$1(Kn$1);_portalOutlet;_focusTrapped=new Z;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=y$1(ge,{optional:!0})||new ge,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{r(),s(),e.removeAttribute(`tabindex`)},r=this._renderer.listen(e,`blur`,n),s=this._renderer.listen(e,`mousedown`,n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||uy(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let n=Zh(),r=this._elementRef.nativeElement;(!n||n===this._document.body||n===r||r.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=Zh();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Zh()))}static ɵfac=function(t){return new(t||o)};static ɵcmp=iI({type:o,selectors:[[`cdk-dialog-container`]],viewQuery:function(t,n){if(t&1&&op(gn$1,7),t&2){let r;QI(r=ZI())&&(n._portalOutlet=r.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(t,n){t&2&&zf(`id`,n._config.id||null)(`role`,n._config.role)(`aria-modal`,n._config.ariaModal)(`aria-labelledby`,n._config.ariaLabel?null:n._ariaLabelledByQueue[0])(`aria-label`,n._config.ariaLabel)(`aria-describedby`,n._config.ariaDescribedBy||null)},features:[Hf],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(t,n){t&1&&$f(0,Bn,0,0,`ng-template`,0)},dependencies:[gn$1],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return o})();var Oe=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new Z;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(i,e){this.overlayRef=i,this.config=e,this.disableClose=e.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!yu(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=i.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(i,e){if(this._canClose(i)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i=``,e=``){return this.overlayRef.updateSize({width:i,height:e}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}_canClose(i){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(i,e,this.componentInstance))}};var Vn=new S(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let o=y$1(ge$1);return()=>je(o)}});var Fn=new S(`DialogData`);var zn=new S(`DefaultDialogConfig`);function Hn(o){let i=_o$1(o),e=new Pe;return{valueSignal:i,get value(){return i()},change:e,ngOnDestroy(){e.complete()}}}var ti=(()=>{class o{_injector=y$1(ge$1);_defaultOptions=y$1(zn,{optional:!0});_parentDialog=y$1(o,{optional:!0,skipSelf:!0});_overlayContainer=y$1(kt);_idGenerator=y$1(Pa);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Z;_afterOpenedAtThisLevel=new Z;_ariaHiddenElements=new Map;_scrollStrategy=y$1(Vn);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=ph(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Sh(void 0)));open(e,t){t=u(u({},this._defaultOptions||new ge),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),s=Ye(this._injector,r),l=new Oe(s,t),d=this._attachContainer(s,l,t);if(l.containerInstance=d,!this.openDialogs.length){let p=this._overlayContainer.getContainerElement();d._focusTrapped?d._focusTrapped.pipe(Pi(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(p)}):this._hideNonDialogContentFromAssistiveTechnology(p)}return this._attachDialogContent(e,l,d,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){Jt(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Jt(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Jt(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new He({positionStrategy:e.positionStrategy||Xe().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let r=n.injector||n.viewContainerRef?.injector,s=[{provide:ge,useValue:n},{provide:Oe,useValue:t},{provide:We,useValue:e}],l;n.container?typeof n.container==`function`?l=n.container:(l=n.container.type,s.push(...n.container.providers(n))):l=ei;let d=new ue(l,n.viewContainerRef,ge$1.create({parent:r||this._injector,providers:s}));return e.attach(d).instance}_attachDialogContent(e,t,n,r){if(e instanceof ir){let s=this._createInjector(r,t,n,void 0),l={$implicit:r.data,dialogRef:t};r.templateContext&&(l=u(u({},l),typeof r.templateContext==`function`?r.templateContext():r.templateContext)),n.attachTemplatePortal(new de$1(e,null,l,s))}else{let s=this._createInjector(r,t,n,this._injector),l=n.attachComponentPortal(new ue(e,r.viewContainerRef,s,null,r.bindings));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,n,r){let s=e.injector||e.viewContainerRef?.injector,l=[{provide:Fn,useValue:e.data},{provide:Oe,useValue:t}];return e.providers&&(typeof e.providers==`function`?l.push(...e.providers(t,e,n)):l.push(...e.providers)),e.direction&&(!s||!s.get(Ff,null,{optional:!0}))&&l.push({provide:Ff,useValue:Hn(e.direction)}),ge$1.create({parent:s||r,providers:l})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,s)=>{r?s.setAttribute(`aria-hidden`,r):s.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let r=t[n];r!==e&&r.nodeName!==`SCRIPT`&&r.nodeName!==`STYLE`&&!r.hasAttribute(`aria-live`)&&!r.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(r,r.getAttribute(`aria-hidden`)),r.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||o)};static ɵprov=Vt({token:o,factory:o.ɵfac})}return o})();function Jt(o,i){let e=o.length;for(;e--;)i(o[e])}var cn=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=aI({type:o});static ɵinj=pl({providers:[ti],imports:[De,mn$1,gf,mn$1]})}return o})();function Wn(o,i){}var Tt=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var ii=`mdc-dialog--open`;var dn=`mdc-dialog--opening`;var hn=`mdc-dialog--closing`;var jn=150;var Xn=75;var Yn=(()=>{class o extends ei{_animationStateChanged=new Pe;_animationsEnabled=!wn$1();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?mn(this._config.enterAnimationDuration)??jn:0;_exitAnimationDuration=this._animationsEnabled?mn(this._config.exitAnimationDuration)??Xn:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(un,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(dn,ii)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ii),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ii),this._animationsEnabled?(this._hostElement.style.setProperty(un,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(hn)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(dn,hn)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(n){return(e||(e=Xg(o)))(n||o)}})();static ɵcmp=iI({type:o,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(t,n){t&2&&(Xf(`id`,n._config.id),zf(`aria-modal`,n._config.ariaModal)(`role`,n._config.role)(`aria-labelledby`,n._config.ariaLabel?null:n._ariaLabelledByQueue[0])(`aria-label`,n._config.ariaLabel)(`aria-describedby`,n._config.ariaDescribedBy||null),up(`_mat-animation-noopable`,!n._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,n._actionSectionCount>0))},features:[Hf],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(t,n){t&1&&(ei$1(0,`div`,0)(1,`div`,1),$f(2,Wn,0,0,`ng-template`,2),fc()())},dependencies:[gn$1],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return o})();var un=`--mat-dialog-transition-duration`;function mn(o){return o==null?null:typeof o==`number`?o:o.endsWith(`ms`)?Jh(o.substring(0,o.length-2)):o.endsWith(`s`)?Jh(o.substring(0,o.length-1))*1e3:o===`0`?0:null}var Ot=(function(o){return o[o.OPEN=0]=`OPEN`,o[o.CLOSING=1]=`CLOSING`,o[o.CLOSED=2]=`CLOSED`,o})(Ot||{});var Ge=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Sn$1(1);_beforeClosed=new Sn$1(1);_result;_closeFallbackTimeout;_state=Ot.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(kn$1(n=>n.state===`opened`),Pi(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(kn$1(n=>n.state===`closed`),Pi(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),gh(this.backdropClick(),this.keydownEvents().pipe(kn$1(n=>n.keyCode===27&&!this.disableClose&&!yu(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Gn(this,n.type===`keydown`?`keyboard`:`mouse`))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(kn$1(t=>t.state===`closing`),Pi(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Ot.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i=``,e=``){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Ot.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Gn(o,i,e){return o._closeInteractionType=i,o.close(e)}var ni=new S(`MatMdcDialogData`);var Un=new S(`mat-mdc-dialog-default-options`);var qn=new S(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=y$1(ge$1);return()=>je(o)}});var Rt=(()=>{class o{_defaultOptions=y$1(Un,{optional:!0});_scrollStrategy=y$1(qn);_parentDialog=y$1(o,{optional:!0,skipSelf:!0});_idGenerator=y$1(Pa);_injector=y$1(ge$1);_dialog=y$1(ti);_animationsDisabled=wn$1();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Z;_afterOpenedAtThisLevel=new Z;dialogConfigClass=Tt;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=ph(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Sh(void 0)));constructor(){this._dialogRefConstructor=Ge,this._dialogContainerType=Yn,this._dialogDataToken=ni}open(e,t){let n;t=u(u({},this._defaultOptions||new Tt),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,v(u({},t),{positionStrategy:Xe(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:ge,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(s,l,d)=>(n=new this._dialogRefConstructor(s,t,d),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:d},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:n},{provide:Oe,useValue:null}])}));return n.componentRef=r.componentRef,n.componentInstance=r.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(n);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||o)};static ɵprov=Vt({token:o,factory:o.ɵfac})}return o})();var pn=(()=>{class o{_dialogRef=y$1(Ge,{optional:!0});_elementRef=y$1(ur);_dialog=y$1(Rt);ngOnInit(){this._dialogRef||(this._dialogRef=Zn(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||o)};static ɵdir=uI({type:o})}return o})();var gn=(()=>{class o extends pn{id=y$1(Pa).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Xg(o)))(n||o)}})();static ɵdir=uI({type:o,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(t,n){t&2&&Xf(`id`,n.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[Hf]})}return o})();var fn=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵdir=uI({type:o,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[pI([qt])]})}return o})();var _n=(()=>{class o extends pn{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Xg(o)))(n||o)}})();static ɵdir=uI({type:o,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(t,n){t&2&&up(`mat-mdc-dialog-actions-align-start`,n.align===`start`)(`mat-mdc-dialog-actions-align-center`,n.align===`center`)(`mat-mdc-dialog-actions-align-end`,n.align===`end`)},inputs:{align:`align`},features:[Hf]})}return o})();function Zn(o,i){let e=o.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?i.find(t=>t.id===e.id):null}var bn=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=aI({type:o});static ɵinj=pl({providers:[Rt],imports:[cn,De,mn$1,En$1]})}return o})();var Et=class o{constructor(i,e){this.dialogRef=i;this.data=e}dialogRef;data;confirm(i){this.dialogRef.close(i)}static ɵfac=function(e){return new(e||o)(pi(Ge),pi(ni))};static ɵcmp=iI({type:o,selectors:[[`app-confirm-dialog`]],decls:10,vars:4,consts:[[`mat-dialog-title`,``],[`align`,`end`],[`mat-button`,``,3,`click`]],template:function(e,t){e&1&&(ei$1(0,`h2`,0),IE(1),fc(),ei$1(2,`mat-dialog-content`)(3,`p`),IE(4),fc()(),ei$1(5,`mat-dialog-actions`,1)(6,`button`,2),tp(`click`,function(){return t.confirm(!0)}),IE(7),fc(),ei$1(8,`button`,2),tp(`click`,function(){return t.confirm(!1)}),IE(9),fc()()),e&2&&(Ly(),yp(t.data.title||`Confirmation`),Ly(3),yp(t.data.message||`Are you sure?`),Ly(3),yp(t.data.confirmText||`Yes`),Ly(2),yp(t.data.cancelText||`No`))},dependencies:[As,bn,gn,_n,fn,p1,m1],encapsulation:2})};var oi=[`cueElement`];function Ha(o,i={}){return function(e,t,n){e.constructor.hasOwnProperty(`__commandMap`)||Object.defineProperty(e.constructor,"__commandMap",{value:new Map,enumerable:!1,configurable:!1,writable:!1}),e.constructor.__commandMap.set(o,{methodName:t,description:i.description??``,example:i.example??``,arguments:i.arguments??[]})}}var vn=class o{formData=_o$1({});embedded=`fullwindow`;stimulusCommandMap;stimulusMarkersMap;commandRegistry=new Pe;cuesIconElement;cuesSpanElement;cuesDivElement;onDelivery=_o$1(!1);progressValue=_o$1(0);countdownTimer=_o$1(``);stimuliMode=_o$1(`sequential`);cues=_o$1([]);purchasedTimeoutId=null;countdownTimeoutId=null;countdownIntervalId=null;cancelStimuliSequence=null;startCountdownValue=5;fullWindowLink=``;experimentConfig={};forcePlayButton=!1;internalRegistry={};hasAdaptive=!1;generateCuesOnFormUpdate=!1;allModes=[{mode:`sequential`,tooltip:`Stimuli follow a predefined or randomized sequence.`,label:`Scheduled`},{mode:`neurofeedback`,tooltip:`Stimuli are shown only in response to external input signals.`,label:`Signal-Based`}];allowModes=[`sequential`,`neurofeedback`];route=y$1(it);themeService=y$1(tu);router=y$1(fn$1);hardwareService=y$1(Fe);dialog=y$1(Rt);premiumService=y$1(h);constructor(){this.setupCommands(),au(()=>{this.embedded===`embedded`&&(this.experimentConfig=this.formData(),this.generateCuesOnFormUpdate&&this.generateCues())}),au(()=>{if(this.stimuliMode()===`neurofeedback`){let i=this.hardwareService.evtKey();if(i){if(i===` `)this.showTrial(null);else{let t=Object.entries(this.stimulusCommandMap).find(([,n])=>n===i)?.[0];t&&this.showTrial(t)}this.hardwareService.evtKey.set(``)}let e=this.hardwareService.evtConfig();if(e){let t=Array.from(e.trim().matchAll(/"([^"]+)"|'([^']+)'|[^\s]+/g)).map(s=>s[1]??s[2]??s[0]),n=t[0],r=t.slice(1);this.internalRegistry[n]&&this.internalRegistry[n].fn(...r),this.hardwareService.evtConfig.set(``)}}})}setupCommands(){let i=this.constructor.__commandMap||new Map;for(let[e,t]of i.entries()){let n=this[t.methodName];typeof n==`function`&&!this.internalRegistry[e]&&(this.internalRegistry[e]={fn:n.bind(this),description:t.description??``,example:t.example??``,arguments:t.arguments??``})}this.hasAdaptive=Object.keys(this.internalRegistry).length>0}ngOnInit(){this.loadConfigFromURL(),this.setWindow(),this.commandRegistry.emit(this.internalRegistry),this.premiumService.isPurchased()}ngOnDestroy(){this.stopSequence()}ngAfterViewInit(){return y(this,null,function*(){this.hardwareService.core.checkAvailableDevice(),this.embedded===`embedded`?yield aa.show():yield aa.hide()})}setWindow(){this.embedded===`embedded`?document.fullscreenElement&&document.exitFullscreen().catch(i=>{}):document.documentElement.requestFullscreen()}randomIntInRange(i){let e=i[0],t=i[1];return Math.floor(Math.random()*(t-e+1))+e}generateShuffledList(i){let e=Array.from({length:i},(t,n)=>n);for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}getRandomItems(i,e=1){let t=[...i].sort(()=>Math.random()-.5);return e===1?t[0]:t.slice(0,e)}generateCues(){}startCountdown(){let i=window.location.href.split(`#`)[1].replace(`/stimuli?`,`?`);this.purchasedTimeoutId!==null&&(clearTimeout(this.purchasedTimeoutId),this.purchasedTimeoutId=null),this.premiumService.isPurchased()||(this.purchasedTimeoutId=setTimeout(()=>{this.stopSequence(),this.dialog.open(Et,{data:{title:`Feature Locked`,message:`A full paradigm unlock is required to complete an experiment session. Unlock now to get access to all paradigms and source code.`,confirmText:`Unlock Now`,cancelText:`Cancel`}}).afterClosed().subscribe(t=>y(this,null,function*(){t?this.router.navigateByUrl(`/unlock`):this.router.navigateByUrl(i)}))},180*1e3)),this.onDelivery.set(!0),this.hardwareService.writeLine(`CMD=CLA;CMD=@LOG MESSAGE="Session start" COLOR=RED;`);let e=localStorage.getItem(`cteno-device-connection-port-ext`);if(this.hardwareService.writeLine(`CMD=EXT CH=${e} ACTION=SETMODE MODE=DIGITAL_OUTPUT_MODE;`),this.startCountdownValue===0){this.cancelStimuliSequence=this.runStimuliSequence();return}this.countdownTimeoutId=window.setTimeout(()=>y(this,null,function*(){this.countdownTimer.set(this.startCountdownValue),yield this.hardwareService.writeLine(`CMD=@BIP FREQ=1000 DURATION=100 VOLUME=128;`),this.countdownIntervalId=window.setInterval(()=>y(this,null,function*(){let t=this.countdownTimer();t>1?(this.countdownTimer.set(t-1),yield this.hardwareService.writeLine(`CMD=@BIP FREQ=1000 DURATION=100 VOLUME=128;`)):(this.countdownIntervalId!==null&&(clearInterval(this.countdownIntervalId),this.countdownIntervalId=null),this.countdownTimer.set(``),this.countdownTimeoutId=window.setTimeout(()=>{this.cancelStimuliSequence=this.runStimuliSequence()},1e3))}),1e3)}),1e3)}stopSequence(){this.countdownTimeoutId!==null&&(clearTimeout(this.countdownTimeoutId),this.countdownTimeoutId=null),this.countdownIntervalId!==null&&(clearInterval(this.countdownIntervalId),this.countdownIntervalId=null),this.purchasedTimeoutId!==null&&(clearTimeout(this.purchasedTimeoutId),this.purchasedTimeoutId=null),this.cancelStimuliSequence?.(),this.cancelStimuliSequence=null,this.countdownTimer.set(``),this.onDelivery.set(!1),this.stopStimuliSequence(),this.setProgress(0)}shuffle(i){let e=[...i];for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}shufflePreservingParity(i){let e=i.filter((c,h)=>h%2===0),t=i.filter((c,h)=>h%2!==0);function n(c){for(let h=c.length-1;h>0;h--){let f=Math.floor(Math.random()*(h+1));[c[h],c[f]]=[c[f],c[h]]}return c}let r=n(e),s=n(t),l=[],d=0,p=0;for(let c=0;c<i.length;c++)l[c]=c%2===0?r[d++]:s[p++];return l}setProgress(i){this.progressValue.set(i),i>=99&&setTimeout(()=>{this.hardwareService.writeLine(`CMD=@LOG MESSAGE="Session End" COLOR=RED;CMD=@BIP;`)},3e3)}gotoFullWindow(){this.stopSequence();let i=btoa(JSON.stringify(this.experimentConfig)),e=btoa(JSON.stringify(this.stimulusCommandMap)),t=btoa(JSON.stringify(this.stimulusMarkersMap));this.router.navigate([this.fullWindowLink],{queryParams:{config:i,command:e,markers:t}})}loadConfigFromURL(){this.embedded!==`embedded`&&this.route.queryParams.subscribe(i=>{this.experimentConfig=JSON.parse(atob(i.config)),this.stimulusCommandMap=JSON.parse(atob(i.command)),this.stimulusMarkersMap=JSON.parse(atob(i.markers))}),this.cues().length==0&&this.generateCues()}generateFrequencies(i,e=5,t=70,n=-1){let r=Math.floor(i/e),s=[];for(let l=2;l<=r;l++){let d=i/l;d<=t&&s.push(d.toFixed(2))}return n>0&&s.length>n&&(s=s.slice(0,n)),s}selectStimuliMode(i){this.stimuliMode.set(i),this.generateTrials(),this.showTrial(null),this.hardwareService.evtKey.set(``),this.hardwareService.evtConfig.set(``)}fixClass(i){return i.replace(/ /g,`_`)}propagateClassMarker(i){if(i===null)return;let e=this.stimulusMarkersMap[i],t=localStorage.getItem(`cteno-device-connection-port-ext`),n=localStorage.getItem(`cteno-device-connection-port-dac`);this.hardwareService.writeLine(`CMD=MKR DC=${e.dc_value} DCCH=${n} IO=${e.io_duration} IOCH=${t};`)}onTrial(i){}isNeurofeedback(i){return this.stimuliMode()===`neurofeedback`}runStimuliSequence(){let i=this.generateTrials(),e=performance.now(),t=0,n=[],r=c=>{let h=e+i.slice(0,c).reduce((f,C)=>f+C.duration+C.soa,0);return Math.max(0,h-performance.now())},s=c=>{this.showTrial(c.class),this.onTrial(c),this.hardwareService.writeLine(`CMD=@LOG MESSAGE="Class: ${c.class}" COLOR=GREEN;`)},l=c=>{this.showTrial(null),t++,this.setProgress(100*t/i.length)},d=()=>{n.forEach(c=>window.clearTimeout(c)),n=[]},p=()=>{if(t>=i.length){d(),this.onDelivery.set(!1);return}let c=i[t],h=r(t),f=window.setTimeout(()=>{s(c);let C=window.setTimeout(()=>{l(c),p()},c.duration);n.push(C)},h);n.push(f)};return p(),d}static ɵfac=function(e){return new(e||o)};static ɵdir=uI({type:o,viewQuery:function(e,t){if(e&1&&op(oi,5)(oi,5)(oi,5),e&2){let n;QI(n=ZI())&&(t.cuesIconElement=n),QI(n=ZI())&&(t.cuesSpanElement=n),QI(n=ZI())&&(t.cuesDivElement=n)}},inputs:{formData:`formData`,embedded:`embedded`,stimulusCommandMap:`stimulusCommandMap`,stimulusMarkersMap:`stimulusMarkersMap`},outputs:{commandRegistry:`commandRegistry`}})};var Kn=[`tooltip`];var Jn=20;var eo=new S(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=y$1(ge$1);return()=>wt(o,{scrollThrottle:Jn})}});var to=new S(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var yn=`tooltip-panel`;var io={passive:!0};var no=8;var oo=8;var ro=24;var so=200;var ri=(()=>{class o{_elementRef=y$1(ur);_ngZone=y$1(z);_platform=y$1(ye);_ariaDescriber=y$1(e_);_focusMonitor=y$1(Ia);_dir=y$1(Ff);_injector=y$1(ge$1);_viewContainerRef=y$1(hi);_mediaMatcher=y$1(Go);_document=y$1(Kn$1);_renderer=y$1(ha);_animationsDisabled=wn$1();_defaultOptions=y$1(to,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Sn;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=w_(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=w_(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Jh(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Jh(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new Z;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=no}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Ah(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new ue(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=n.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(Ah(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof ur)return this._overlayRef;this._detach()}let t=this._injector.get(ke).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${yn}`,r=xt(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return r.positionChanges.pipe(Ah(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ye(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(eo)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Ah(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Ah(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Ah(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Ah(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(u(u({},n.main),r.main)),this._addOffset(u(u({},n.fallback),r.fallback))])}_addOffset(e){let t=oo,n=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=n?-t:t:e.originX===`end`&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,n;t==`above`||t==`below`?n={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?n={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(n={originX:`end`,originY:`center`});let{x:r,y:s}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:r,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,n;t==`above`?n={overlayX:`center`,overlayY:`bottom`}:t==`below`?n={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?n={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(n={overlayX:`start`,overlayY:`center`});let{x:r,y:s}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:r,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),uy(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:r}=e,s;if(t===`center`?this._dir&&this._dir.value===`rtl`?s=n===`end`?`left`:`right`:s=n===`start`?`left`:`right`:s=t===`bottom`&&r===`top`?`above`:`below`,s!==this._currentPosition){let l=this._overlayRef;if(l){let d=`${this._cssClassPrefix}-${yn}-`;l.removePanelClass(d+this._currentPosition),l.addPanelClass(d+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,io))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,n=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(n.webkitUserDrag=`none`),n.touchAction=`none`,n.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||uy({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!yu(e):!0;static ɵfac=function(t){return new(t||o)};static ɵdir=uI({type:o,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,n){t&2&&up(`mat-mdc-tooltip-disabled`,n.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return o})();var Sn=(()=>{class o{_changeDetectorRef=y$1(GL);_elementRef=y$1(ur);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=wn$1();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new Z;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>ro&&e.width>=so}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:n),t.classList.add(e?n:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let s=getComputedStyle(t);(s.getPropertyValue(`animation-duration`)===`0s`||s.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||o)};static ɵcmp=iI({type:o,selectors:[[`mat-tooltip-component`]],viewQuery:function(t,n){if(t&1&&op(Kn,7),t&2){let r;QI(r=ZI())&&(n._tooltip=r.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(t,n){t&1&&tp(`mouseleave`,function(s){return n._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(t,n){t&1&&(pc(0,`div`,1,0),np(`animationend`,function(s){return n._handleAnimationEnd(s)}),pc(2,`div`,2),IE(3),hc()()),t&2&&(cE(n.tooltipClass),up(`mdc-tooltip--multiline`,n._isMultiline),Ly(3),yp(n.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return o})();var Cn=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=aI({type:o});static ɵinj=pl({imports:[gf,De,En$1,Je]})}return o})();var tt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Z;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,t=!0,n){this._multiple=i,this._emitChanges=t,this.compareWith=n,e&&e.length&&(i?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(r=>this._getConcreteValue(r)));i.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var wn=(()=>{class o{_animationsDisabled=wn$1();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||o)};static ɵcmp=iI({type:o,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,n){t&2&&up(`mat-pseudo-checkbox-indeterminate`,n.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,n.state===`checked`)(`mat-pseudo-checkbox-disabled`,n.disabled)(`mat-pseudo-checkbox-minimal`,n.appearance===`minimal`)(`mat-pseudo-checkbox-full`,n.appearance===`full`)(`_mat-animation-noopable`,n._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return o})();var go=[`button`];var fo=[`*`];function _o(o,i){if(o&1&&(ei$1(0,`div`,2),Zf(1,`mat-pseudo-checkbox`,6),fc()),o&2){let e=UI();Ly(),Qf(`disabled`,e.disabled)}}var kn=new S(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var xn=new S(`MatButtonToggleGroup`);var bo={provide:rt,useExisting:oo$1(()=>si),multi:!0};var Mt=class{source;value;constructor(i,e){this.source=i,this.value=e}};var si=(()=>{class o{_changeDetector=y$1(GL);_dir=y$1(Ff,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=y$1(Pa).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new Pe;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new Pe;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=y$1(kn,{optional:!0});this.appearance=e&&e.appearance?e.appearance:`standard`,this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new tt(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||yu(e))return;let n=e.target.id,r=this._buttonToggles.toArray().findIndex(l=>l.buttonId===n),s=null;switch(e.keyCode){case 32:case 13:s=this._buttonToggles.get(r)||null;break;case 38:s=this._getNextButton(r,-1);break;case 37:s=this._getNextButton(r,this.dir===`ltr`?-1:1);break;case 40:s=this._getNextButton(r,1);break;case 39:s=this._getNextButton(r,this.dir===`ltr`?1:-1);break;default:return}s&&(e.preventDefault(),s._onButtonClick(),s.focus())}_emitChangeEvent(e){let t=new Mt(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,n=!1,r=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):r=!0,r?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let n=this._buttonToggles;for(let r=1;r<=n.length;r++){let s=(e+t*r+n.length)%n.length,l=n.get(s);if(l&&!l.disabled)return l}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(this._clearSelection(),e.forEach(n=>this._selectValue(n,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(n=>n.tabIndex===-1)){for(let n of t)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let n of t)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static ɵfac=function(t){return new(t||o)};static ɵdir=uI({type:o,selectors:[[`mat-button-toggle-group`]],contentQueries:function(t,n,r){if(t&1&&rp(r,Pt,5),t&2){let s;QI(s=ZI())&&(n._buttonToggles=s)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(t,n){t&1&&tp(`keydown`,function(s){return n._keydown(s)}),t&2&&(zf(`role`,n.multiple?`group`:`radiogroup`)(`aria-disabled`,n.disabled),up(`mat-button-toggle-vertical`,n.vertical)(`mat-button-toggle-group-appearance-standard`,n.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,ZL],value:`value`,multiple:[2,`multiple`,`multiple`,ZL],disabled:[2,`disabled`,`disabled`,ZL],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ZL],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,ZL],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,ZL]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[ME([bo,{provide:xn,useExisting:o}])]})}return o})();var Pt=(()=>{class o{_changeDetectorRef=y$1(GL);_elementRef=y$1(ur);_focusMonitor=y$1(Ia);_idGenerator=y$1(Pa);_animationDisabled=wn$1();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Pe;constructor(){y$1(ct).load(xu);let e=y$1(xn,{optional:!0}),t=y$1(new _p(`tabindex`),{optional:!0})||``,n=y$1(kn,{optional:!0});this._tabIndex=_o$1(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:`standard`,this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new Mt(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(t){return new(t||o)};static ɵcmp=iI({type:o,selectors:[[`mat-button-toggle`]],viewQuery:function(t,n){if(t&1&&op(go,5),t&2){let r;QI(r=ZI())&&(n._buttonElement=r.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(t,n){t&1&&tp(`focus`,function(){return n.focus()}),t&2&&(zf(`aria-label`,null)(`aria-labelledby`,null)(`id`,n.id)(`name`,null),up(`mat-button-toggle-standalone`,!n.buttonToggleGroup)(`mat-button-toggle-checked`,n.checked)(`mat-button-toggle-disabled`,n.disabled)(`mat-button-toggle-disabled-interactive`,n.disabledInteractive)(`mat-button-toggle-appearance-standard`,n.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,ZL],appearance:`appearance`,checked:[2,`checked`,`checked`,ZL],disabled:[2,`disabled`,`disabled`,ZL],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ZL]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:fo,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(t,n){if(t&1&&(qI(),ei$1(0,`button`,1,0),tp(`click`,function(){return n._onButtonClick()}),SI(2,_o,2,1,`div`,2),ei$1(3,`span`,3),GI(4),fc()(),Zf(5,`span`,4)(6,`span`,5)),t&2){let r=KI(1);Qf(`id`,n.buttonId)(`disabled`,n.disabled&&!n.disabledInteractive||null),zf(`role`,n.isSingleSelector()?`radio`:`button`)(`tabindex`,n.disabled&&!n.disabledInteractive?-1:n.tabIndex)(`aria-pressed`,n.isSingleSelector()?null:n.checked)(`aria-checked`,n.isSingleSelector()?n.checked:null)(`name`,n._getButtonName())(`aria-label`,n.ariaLabel)(`aria-labelledby`,n.ariaLabelledby)(`aria-disabled`,n.disabled&&n.disabledInteractive?`true`:null),Ly(2),xI(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),Ly(4),Qf(`matRippleTrigger`,r)(`matRippleDisabled`,n.disableRipple||n.disabled)}},dependencies:[k_,wn],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})}return o})();var Dn=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=aI({type:o});static ɵinj=pl({imports:[Ou,Pt,En$1]})}return o})();var yo=[`*`];var Tn=(o,i)=>i.mode;function So(o,i){if(o&1){let e=HI();ei$1(0,`button`,9),tp(`click`,function(){Hl(e);return Bl(UI().hostRef.stopSequence())}),ei$1(1,`mat-icon`),IE(2,`stop_circle`),fc()(),ei$1(3,`button`,10),tp(`click`,function(){Hl(e);return Bl(UI().hostRef.startCountdown())}),ei$1(4,`mat-icon`),IE(5,`play_circle`),fc()()}if(o&2){let e=UI();up(`visible-b`,e.hostRef.onDelivery()),Ly(3),up(`visible-b`,!e.hostRef.onDelivery())}}function Co(o,i){if(o&1){let e=HI();ei$1(0,`button`,14),tp(`click`,function(){Hl(e);return Bl(UI(3).hardwareService.core.autoConnect())}),IE(1),ei$1(2,`mat-icon`),IE(3,`usb_off`),fc()()}if(o&2){let e=UI(3);Ly(),yc(` Auto-Connect to Hardware | `,e.hardwareService.connectionMode(),` `)}}function wo(o,i){if(o&1){let e=HI();ei$1(0,`button`,14),tp(`click`,function(){Hl(e);return Bl(UI(3).hardwareService.core.requestAndConnectDevice())}),IE(1,` Select Hardware to Connect `),ei$1(2,`mat-icon`),IE(3,`usb`),fc()()}}function ko(o,i){if(o&1&&SI(0,Co,4,1,`button`,13)(1,wo,4,0,`button`,13),o&2)xI(UI(2).hardwareService.core.hasAvailableDevice()?0:1)}function xo(o,i){if(o&1&&(ei$1(0,`button`,11),IE(1),ei$1(2,`mat-icon`),IE(3,`usb`),fc()()),o&2){let e=UI(2);Ly(),yc(` Connected | `,e.hardwareService.connectionMode(),` `)}}function Do(o,i){if(o&1&&(ei$1(0,`mat-button-toggle`,16),IE(1),fc()),o&2){let e=UI().$implicit;Qf(`value`,wE(e.mode))(`matTooltip`,wE(e.tooltip)),Ly(),yc(` `,e.label,` `)}}function Oo(o,i){if(o&1&&SI(0,Do,2,5,`mat-button-toggle`,16),o&2){let e=i.$implicit;xI(UI(3).hostRef.allowModes.includes(e.mode)?0:-1)}}function To(o,i){if(o&1){let e=HI();ei$1(0,`mat-button-toggle-group`,15),tp(`change`,function(n){Hl(e);return Bl(UI(2).hostRef.selectStimuliMode(n.value))}),kI(1,Oo,1,1,null,null,Tn),fc()}if(o&2){let e=UI(2);Qf(`disabled`,e.hostRef.onDelivery())(`value`,e.hostRef.stimuliMode()),Ly(),OI(e.hostRef.allModes)}}function Ro(o,i){if(o&1&&(ei$1(0,`div`,4),SI(1,ko,2,1)(2,xo,4,1,`button`,11),SI(3,To,3,2,`mat-button-toggle-group`,12),fc()),o&2){let e=UI();Ly(),xI(e.hardwareService.core.isConnected()?2:1),Ly(2),xI(e.hostRef.allowModes.length>1?3:-1)}}function Eo(o,i){o&1&&(ei$1(0,`mat-icon`,6),IE(1,`point_scan`),fc())}function Mo(o,i){if(o&1){let e=HI();ei$1(0,`button`,14),tp(`click`,function(){Hl(e);return Bl(UI(3).hardwareService.core.autoConnect())}),IE(1),ei$1(2,`mat-icon`),IE(3,`usb_off`),fc()()}if(o&2){let e=UI(3);Ly(),yc(` Auto-Connect to Hardware | `,e.hardwareService.connectionMode(),` `)}}function Po(o,i){if(o&1){let e=HI();ei$1(0,`button`,14),tp(`click`,function(){Hl(e);return Bl(UI(3).hardwareService.core.requestAndConnectDevice())}),IE(1,` Select Hardware to Connect `),ei$1(2,`mat-icon`),IE(3,`usb`),fc()()}}function Io(o,i){if(o&1&&SI(0,Mo,4,1,`button`,13)(1,Po,4,0,`button`,13),o&2)xI(UI(2).hardwareService.core.hasAvailableDevice()?0:1)}function Ao(o,i){if(o&1&&(ei$1(0,`button`,11),IE(1),ei$1(2,`mat-icon`),IE(3,`usb`),fc()()),o&2){let e=UI(2);Ly(),yc(` Connected | `,e.hardwareService.connectionMode(),` `)}}function No(o,i){if(o&1&&(ei$1(0,`mat-button-toggle`,16),IE(1),fc()),o&2){let e=UI().$implicit;Qf(`value`,wE(e.mode))(`matTooltip`,wE(e.tooltip)),Ly(),yc(` `,e.label,` `)}}function Lo(o,i){if(o&1&&SI(0,No,2,5,`mat-button-toggle`,16),o&2){let e=i.$implicit;xI(UI(3).hostRef.allowModes.includes(e.mode)?0:-1)}}function Bo(o,i){if(o&1){let e=HI();ei$1(0,`mat-button-toggle-group`,15),tp(`change`,function(n){Hl(e);return Bl(UI(2).hostRef.selectStimuliMode(n.value))}),kI(1,Lo,1,1,null,null,Tn),fc()}if(o&2){let e=UI(2);Qf(`disabled`,e.hostRef.onDelivery())(`value`,e.hostRef.stimuliMode()),Ly(),OI(e.hostRef.allModes)}}function Vo(o,i){if(o&1&&(ei$1(0,`div`,8)(1,`div`,17),SI(2,Io,2,1)(3,Ao,4,1,`button`,11),SI(4,Bo,3,2,`mat-button-toggle-group`,12),fc()()),o&2){let e=UI();Ly(2),xI(e.hardwareService.core.isConnected()?3:2),Ly(2),xI(e.hostRef.allowModes.length>1?4:-1)}}var On=class o{constructor(i,e){this.themeService=i;this.hardwareService=e}themeService;hardwareService;hostRef;showCrossBar=!0;ngOnInit(){setTimeout(()=>{j.isNativePlatform()?this.hardwareService.core.requestAndConnectDevice():this.hardwareService.core.autoConnect()},100)}ngAfterViewInit(){this.themeService.applyInvertedThemes()}static ɵfac=function(e){return new(e||o)(pi(tu),pi(Fe))};static ɵcmp=iI({type:o,selectors:[[`app-stimuli-layout`]],inputs:{hostRef:`hostRef`,showCrossBar:`showCrossBar`},ngContentSelectors:yo,decls:20,vars:31,consts:[[`matIconButton`,``,3,`click`],[`matIconButton`,``,3,`routerLink`],[`matIconButton`,``,`id`,`mode-light`,3,`click`],[`matIconButton`,``,`id`,`mode-dark`,3,`click`],[1,`bottom-left`,`flex-row`,`flex-wrap`,`invert-theme`],[1,`center`,`counter`,3,`innerHTML`],[1,`center`,`fixation`],[`mode`,`determinate`,3,`value`],[1,`buttons-embedded`,`margin-top-medium`],[`matIconButton`,``,`matTooltip`,`Stop stimulus delivery`,1,`stop`,`conditional-visible-b`,`top-left`,3,`click`],[`matIconButton`,``,`matTooltip`,`Start stimulus delivery`,1,`start`,`conditional-visible-b`,`top-left`,3,`click`],[`matButton`,`filled`,`disabled`,``,1,`connected`],[`name`,`stimuliMode`,3,`disabled`,`value`],[`matButton`,`filled`,1,`disconnected`],[`matButton`,`filled`,1,`disconnected`,3,`click`],[`name`,`stimuliMode`,3,`change`,`disabled`,`value`],[3,`value`,`matTooltip`],[1,`flex-row`,`flex-wrap`]],template:function(e,t){e&1&&(qI(),ei$1(0,`div`),SI(1,So,6,4),ei$1(2,`button`,0),tp(`click`,function(){return t.hostRef.gotoFullWindow()}),ei$1(3,`mat-icon`),IE(4,`arrows_output`),fc()(),ei$1(5,`button`,1)(6,`mat-icon`),IE(7,`fullscreen_exit`),fc()(),ei$1(8,`button`,2),tp(`click`,function(){return t.themeService.setThemeMode(`light`)}),ei$1(9,`mat-icon`),IE(10,`light_mode`),fc()(),ei$1(11,`button`,3),tp(`click`,function(){return t.themeService.setThemeMode(`dark`)}),ei$1(12,`mat-icon`),IE(13,`dark_mode`),fc()(),SI(14,Ro,4,2,`div`,4),Zf(15,`span`,5),SI(16,Eo,2,0,`mat-icon`,6),GI(17),Zf(18,`mat-progress-bar`,7),fc(),SI(19,Vo,5,2,`div`,8)),e&2&&(cE(CE(`screen `,t.hostRef.embedded)),up(`light`,t.themeService.mode()===`light`)(`dark`,t.themeService.mode()===`dark`),Ly(),xI(t.hostRef.stimuliMode()!==`neurofeedback`||t.hostRef.forcePlayButton===!0?1:-1),Ly(),cE(CE(`bottom-right fullscreen `,t.hostRef.embedded)),Ly(3),cE(CE(`bottom-right appscreen `,t.hostRef.embedded)),Qf(`routerLink`,wE(t.hostRef.normalWindowLink)),Ly(3),cE(CE(`top-right mode-button `,t.hostRef.embedded)),lp(`display`,t.themeService.mode()===`dark`?`flex`:`none`),Ly(3),cE(CE(`top-right mode-button `,t.hostRef.embedded)),lp(`display`,t.themeService.mode()===`dark`?`none`:`flex`),Ly(3),xI(t.hostRef.embedded===`fullwindow`?14:-1),Ly(),Qf(`innerHTML`,t.hostRef.countdownTimer(),Wm),Ly(),xI(t.showCrossBar?16:-1),Ly(2),Qf(`value`,t.hostRef.progressValue()),Ly(),xI(t.hostRef.embedded===`embedded`?19:-1))},dependencies:[Dn,si,Pt,O1,F1,Mf,Xi,Cn,ri,m1,$c],styles:[`:root{--%NS%mat-progress-bar-track-height: 6px;--%NS%mat-progress-bar-active-indicator-height: 6px}.start[_ngcontent-%COMP%], .stop[_ngcontent-%COMP%]{scale:2}.conditional-visible-b.visible-b[_ngcontent-%COMP%]{visibility:visible}.conditional-visible-b[_ngcontent-%COMP%]{visibility:hidden}.screen[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-inverse-surface);overflow:hidden;container-type:size}.screen.embedded[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;border-radius:var(--%NS%mat-sys-corner-large);width:100%;aspect-ratio:16/9;height:unset;box-sizing:border-box;border:2px solid var(--%NS%mat-sys-inverse-surface)}.screen.fullwindow[_ngcontent-%COMP%]{position:relative;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center}  .center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.counter[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);font:var(--%NS%mat-sys-body-small);font-size:12vh}.fixation[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);z-index:9999}.bottom-right[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);position:absolute;right:16px;bottom:16px;z-index:99999!important}.bottom-left[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);position:absolute;left:16px;bottom:16px}.top-left[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);position:absolute;left:16px;top:16px}.top-right[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);position:absolute;right:16px;top:16px}.bottom-right[_ngcontent-%COMP%], .bottom-left[_ngcontent-%COMP%], .top-left[_ngcontent-%COMP%], .top-right[_ngcontent-%COMP%]{z-index:999}button.top-left[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], button.bottom-right[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:1em;height:1em}.stop[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.fullscreen[_ngcontent-%COMP%]{display:none}.appscreen[_ngcontent-%COMP%], .fullscreen.embedded[_ngcontent-%COMP%]{display:block}.appscreen.embedded[_ngcontent-%COMP%]{display:none}.mode-button.embedded[_ngcontent-%COMP%]{display:none!important}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%}button[_ngcontent-%COMP%]{z-index:1000}.disconnected[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-error)!important;color:var(--%NS%mat-sys-on-error)!important}.connected[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-inverse-primary)!important;color:var(--%NS%mat-sys-on-primary-container)!important}.screen.fullwindow[_ngcontent-%COMP%]   .bottom-right[_ngcontent-%COMP%], .screen.fullwindow[_ngcontent-%COMP%]   .bottom-left[_ngcontent-%COMP%]{bottom:calc(16px + var(--%NS%safe-bottom))}.screen.fullwindow[_ngcontent-%COMP%]   .top-left[_ngcontent-%COMP%], .screen.fullwindow[_ngcontent-%COMP%]   .top-right[_ngcontent-%COMP%]{top:calc(16px + var(--%NS%safe-top))}.screen.fullwindow[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{bottom:var(--%NS%safe-bottom)}`]})};export{Uo as a,On as i,Dn as n,vn as o,Ha as r,Cn as t};