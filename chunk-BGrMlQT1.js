import{a as y,n as v,t as u}from"./chunk-BaccXEZv.js";import{$n as uI,At as Yf,C as Hf,E as IE,Fn as pc,G as OI,Gn as rp,Gt as cE,Hn as qI,J as Pe$1,L as Ly,Ln as ph,Lt as _o,Mn as op,Mt as ZI,N as Kn,Nt as ZL,On as np,Ot as YL,Pn as pI,Pt as Zf,Q as QI,Qn as tp,Qt as ei,Rn as pi$1,Rt as _p,S as HI,Sn as lp,Tt as Xg,Vt as au,X as Pi$1,ar as wE,b as GL,bn as kI,bt as Wm,cn as hc,cr as y$1,ct as SI,dn as hi$1,en as fc,er as up,et as Qf,fr as yp,gr as zf,j as KI,jn as oo,jt as Z$1,l as Bl,lr as yc,lt as Sh,mr as z,mt as UI,nr as uy,o as Ah,or as xI,ot as S,pn as iI,qt as ce,r as $f,rn as gh,sn as ha,tn as ge$1,tr as ur,u as CE,ut as Sn$1,vt as Vt,w as Hl,wt as Xf,xn as kn,y as GI,z as ME,zn as pl,zt as aI}from"./chunk-Cm9TeinW.js";import{A as Vl,C as Sl,F as ed,J as z$1,K as ye,M as _e,N as br,O as Uv,P as ds,S as Sb,U as ov,W as rd,X as R,Y as h,Z as j$1,a as Bi$1,d as Fi$1,f as Ka,g as Mo,i as ui$1,j as Wb,l as Er,n as hr,o as Bl$1,q as yt,r as li$1,s as Cs,t as he,w as St,x as Rs,z as kv}from"./main.js";import{n as We}from"./chunk-BRSAUx-V.js";import{i as k,r as h$1,t as I}from"./chunk-Bc6uwWGy.js";import{a as Rt,c as dn$1,d as oe,f as re,i as Re$1,l as ft,m as z$2,n as Me,o as ae,p as wt,r as Mt,s as at,t as H,u as j$2}from"./chunk-Bl1CGgqK.js";import{t as O}from"./chunk-g_0yhVdO.js";function Ci(o,i){o&1&&Yf(0,`div`,2)}var wi=new S(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var ii=(()=>{class o{_elementRef=y$1(ur);_ngZone=y$1(z);_changeDetectorRef=y$1(GL);_renderer=y$1(ha);_cleanupTransitionEnd;constructor(){let e=Vl(),t=y$1(wi,{optional:!0});this._isNoopAnimation=e===`di-disabled`,e===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;get value(){return this._value}set value(e){this._value=ti(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=ti(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Pe$1;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(t){return new(t||o)};static ɵcmp=iI({type:o,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(t,n){t&2&&(zf(`aria-valuenow`,n._isIndeterminate()?null:n.value)(`mode`,n.mode),cE(`mat-`+n.color),up(`_mat-animation-noopable`,n._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!n._isNoopAnimation)(`mdc-linear-progress--indeterminate`,n._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,YL],bufferValue:[2,`bufferValue`,`bufferValue`,YL],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(t,n){t&1&&(pc(0,`div`,0),Yf(1,`div`,1),SI(2,Ci,1,0,`div`,2),hc(),pc(3,`div`,3),Yf(4,`span`,4),hc(),pc(5,`div`,5),Yf(6,`span`,4),hc()),t&2&&(Ly(),lp(`flex-basis`,n._getBufferBarFlexBasis()),Ly(),xI(n.mode===`buffer`?2:-1),Ly(),lp(`transform`,n._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2})}return o})();function ti(o,i=0,e=100){return Math.max(i,Math.min(e,o))}var Nn=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=aI({type:o});static ɵinj=pl({imports:[Er]})}return o})();var Z=class o{hardwareIP=_o(`HARDWARE-IP`);isConnected=_o(!1);hasAvailableDevice=_o(!1);measuringLatency=_o(!1);latencyStats=_o({latency:0,jitter:0,min:0,max:0,median:0,samples:0});reading=!1;lineQueue=[];waitingResolvers=[];MAX_QUEUE_SIZE=100;deviceProcessLine;constructor(){}sleep=i=>new Promise(e=>setTimeout(e,i));requestAndConnectDevice(){return y(this,null,function*(){yield this.requestDevice(),yield this.connect()})}flushQueues(){this.lineQueue=[],this.waitingResolvers=[]}processLine(i){if(O.INPUT_COMMANDS.some(e=>i.startsWith(e))){if(this.deviceProcessLine?.(i),i.startsWith(`RESP=WIFI_CONNECTED`)){let e=i.split(`IP=`)[1]?.split(`;`)[0];e&&this.hardwareIP.set(e)}this.waitingResolvers.length>0?this.waitingResolvers.shift()(i):(this.lineQueue.length>=this.MAX_QUEUE_SIZE&&this.lineQueue.shift(),this.lineQueue.push(i))}}measureLatency(i=0){return y(this,null,function*(){this.measuringLatency.set(!0),this.latencyStats.set({latency:0,jitter:0,min:0,max:0,median:0,samples:0});let e=!0;i===0&&(e=!1,i=this.samplesToTest),yield this.writeLine(`CMD=@BIP;CMD=@TITLE "Latency Test";`),yield this.writeLine(`CMD=@LATENCY;`),yield this.sleep(300),yield this.stopListening();let t=0;for(;t<100&&!(yield this.readLineFromSource()).trim().endsWith(`#DUMMY@`);)t++;for(yield this.writeLineToSource(`@`),t=0;t<3&&(yield this.readLineFromSource()).trim()!==`@`;)t++;let n=[],a=``;for(;!n.length||n.length<i;){let g=String.fromCharCode(97+Math.floor(Math.random()*26)),C=performance.now();yield this.writeLineToSource(g),a=yield this.readLineFromSource();let B=performance.now();a===g&&n.push(B-C),n.length%1e3===0&&console.log(`Processed ${n.length} samples`)}if(yield this.sleep(100),yield this.writeLineToSource(`EXIT`),e){let g=JSON.stringify(n),C=new Blob([g],{type:`application/json`}),B=URL.createObjectURL(C),ze=document.createElement(`a`);ze.href=B,ze.download=`${this.mode}_latencies_${n.length}samples_${new Date().toISOString().slice(0,19)}.json`,ze.click(),URL.revokeObjectURL(B)}let r=n.reduce((g,C)=>g+C,0)/n.length,p=n.reduce((g,C)=>g+Math.pow(C-r,2),0)/n.length,w=Math.sqrt(p),E=[...n].sort((g,C)=>g-C),u=E.length;this.latencyStats.set({latency:r,jitter:w,min:Math.min(...n),max:Math.max(...n),median:E.length%2===0?(E[u/2-1]+E[u/2])/2:E[Math.floor(u/2)],samples:n.length}),this.measuringLatency.set(!1),yield this.writeLine(`CMD=@BIP;CMD=@BRAND;`),yield this.startListening()})}startListening(){return y(this,null,function*(){this.flushQueues(),this.reading=!0;let i=``;for(;this.reading;)try{let[e,t]=yield this.readChunk();i+=e;let n=i.split(`
`);i=n.pop()||``;for(let a of n)this.processLine(a.trim())}catch(e){console.error(`Error reading from USB:`,e),this.reading=!1}})}readLine(){return this.lineQueue.length>0?Promise.resolve(this.lineQueue.shift()):this.waitingResolvers.length>=this.MAX_QUEUE_SIZE?Promise.reject(new Error(`Too many pending readLine requests.`)):new Promise(i=>{this.waitingResolvers.push(i)})}stopListening(){return y(this,null,function*(){this.reading=!1,this.flushQueues();for(let i=0;i<10;i++)yield this.writeLine(`#DUMMY`);yield this.writeLine(`#DUMMY@`)})}onDisconnect(){setTimeout(()=>this.autoConnect(),1e3)}static ɵfac=function(e){return new(e||o)};static ɵprov=ce({token:o,factory:o.ɵfac,providedIn:`root`})};var Ee=class o extends Z{mode=`serial`;samplesToTest=500;baudRate=115200;port=null;reader=null;writer=null;readableStreamClosed=null;writableStreamClosed=null;requestDevice(){return y(this,null,function*(){try{this.port=yield navigator.serial.requestPort()}catch(i){console.error(`USB device request failed:`,i)}yield this.checkAvailableDevice()})}checkAvailableDevice(){return y(this,null,function*(){let i=yield navigator.serial.getPorts();this.hasAvailableDevice.set(i.length>0)})}connect(){return y(this,null,function*(){if(!this.port)return;yield this.port.open({baudRate:this.baudRate});let i=new TextDecoder,e=new TransformStream({transform(n,a){a.enqueue(i.decode(n,{stream:!0}))}});this.readableStreamClosed=this.port.readable.pipeTo(e.writable),this.reader=e.readable.getReader();let t=new TextEncoderStream;this.writableStreamClosed=(yield t.readable.pipeTo(this.port.writable))??null,this.writer=t.writable.getWriter(),this.readableStreamClosed?.catch(n=>{this.isConnected.set(!1),this.stopListening(),this.onDisconnect()}),this.isConnected.set(!0),yield this.startListening(),yield this.writeLine(`CMD=@BRAND;`)})}autoConnect(){return y(this,null,function*(){let i=yield navigator.serial.getPorts();return i.length===0?!1:(this.port=i[0],yield this.connect(),!0)})}disconnect(){return y(this,null,function*(){try{if(this.reading=!1,yield this.writeLine(`CMD=@CLA;`),this.reader){try{yield this.reader.cancel()}catch(i){console.warn(`Reader cancel failed:`,i)}this.reader.releaseLock(),this.reader=null}if(this.writer){try{yield this.writer.close()}catch(i){console.warn(`Writer close failed:`,i)}this.writer.releaseLock(),this.writer=null}this.port&&this.port.readable?.locked===!1&&this.port.writable?.locked===!1&&(yield this.port.close()),this.port=null,this.isConnected.set(!1)}catch(i){console.error(`Failed to disconnect:`,i)}})}writeLine(i){return y(this,null,function*(){if(!this.writer)return;let e=i.trim().replace(/;\s*/g,`;
`),t=e.endsWith(`
`)?e:e+`
`;yield this.writer.write(t)})}writeLineToSource(i){return y(this,null,function*(){this.writer&&(yield this.writer.write(i+`
`))})}readLineFromSource(i=0){return y(this,null,function*(){if(!this.reader)return``;let{value:e,done:t}=yield this.reader.read();if(t||e===void 0)return``;return e.trim()||(i<3?this.readLineFromSource(i+1):``)})}getProperties(){let i=this.port?.getInfo();return i?[{name:`Vendor ID`,value:i.usbVendorId?.toString(16).padStart(4,`0`)??`Unknown`},{name:`Product ID`,value:i.usbProductId?.toString(16).padStart(4,`0`)??`Unknown`}]:[]}readChunk(){return y(this,null,function*(){if(!this.reader)return[``,!1];let{value:i,done:e}=yield this.reader.read();return[i,e]})}static ɵfac=(()=>{let i;return function(t){return(i||(i=Xg(o)))(t||o)}})();static ɵprov=ce({token:o,factory:o.ɵfac,providedIn:`root`})};var Pe=class o extends Z{mode=`usb`;samplesToTest=1e3;encoder=new TextEncoder;decoder=new TextDecoder;device;interfaceNumber=0;endpointOut=0;endpointIn=0;configurationValue=1;requestDevice(){return y(this,null,function*(){try{this.device=yield navigator.usb.requestDevice({filters:[{vendorId:12346}]})}catch(i){console.error(`USB device request failed:`,i)}yield this.checkAvailableDevice()})}checkAvailableDevice(){return y(this,null,function*(){let i=yield navigator.usb.getDevices();this.hasAvailableDevice.set(i.length>0)})}connect(){return y(this,null,function*(){if(!this.device)return;this.device.opened||(yield this.device.open()),this.device.configuration===null&&(yield this.device.selectConfiguration(this.configurationValue));let i=this.findCDCInterfaceAndEndpoints();i&&(this.interfaceNumber=i.interfaceNumber,this.endpointIn=i.endpointIn,this.endpointOut=i.endpointOut,yield this.device.claimInterface(this.interfaceNumber),this.isConnected.set(!0),navigator.usb.addEventListener(`disconnect`,e=>{this.device&&e.device===this.device&&(this.isConnected.set(!1),this.stopListening(),this.onDisconnect())}),yield this.startListening(),yield this.writeLine(`CMD=@BRAND;`))})}autoConnect(){return y(this,null,function*(){let i=yield navigator.usb.getDevices();return i.length===0?!1:(this.device=i[0],yield this.connect(),!0)})}disconnect(){return y(this,null,function*(){if(this.device){yield this.writeLine(`CMD=@CLA;`);try{this.device.opened&&(yield this.device.releaseInterface(this.interfaceNumber),yield this.device.close())}catch(i){console.warn(`Error during disconnect:`,i)}finally{this.device=void 0,this.isConnected.set(!1)}yield this.checkAvailableDevice()}})}writeLine(i){return y(this,null,function*(){if(!this.device)return;let e=i.trim().replace(/;\s*/g,`;
`),t=this.encoder.encode(e.endsWith(`
`)?e:e+`
`);yield this.device.transferOut(this.endpointOut,t)})}writeLineToSource(i){return y(this,null,function*(){if(!this.device)return;let e=this.encoder.encode(i+`
`);yield this.device.transferOut(this.endpointOut,e)})}readLineFromSource(i=0){return y(this,null,function*(){if(!this.device)return``;let e=yield this.device.transferIn(this.endpointIn,64);return this.decoder.decode(e.data?.buffer||new ArrayBuffer(0)).trim()||(i<3?this.readLineFromSource(i+1):``)})}getProperties(){return this.device?[{name:`productName`,value:this.device.productName},{name:`productId`,value:`0x`+this.device.productId.toString(16).padStart(4,`0`)},{name:`vendorId`,value:`0x`+this.device.vendorId.toString(16).padStart(4,`0`)},{name:`manufacturerName`,value:this.device.manufacturerName},{name:`serialNumber`,value:this.device.serialNumber},{name:`interfaceNumber`,value:this.interfaceNumber},{name:`endpointIn`,value:this.endpointIn},{name:`endpointOut`,value:this.endpointOut}]:[]}readChunk(){return y(this,null,function*(){if(!this.device)return[``,!1];let i=yield this.device.transferIn(this.endpointIn,64);return[this.decoder.decode(i.data?.buffer||new ArrayBuffer(0)),!1]})}findCDCInterfaceAndEndpoints(){if(!this.device?.configuration?.interfaces)return null;for(let i of this.device.configuration.interfaces)for(let e of i.alternates){let{interfaceClass:t,endpoints:n}=e;if(t===10||t===255){let a=n.find(p=>p.direction===`in`)?.endpointNumber,r=n.find(p=>p.direction===`out`)?.endpointNumber;if(a!==void 0&&r!==void 0)return{interfaceNumber:i.interfaceNumber,endpointIn:a,endpointOut:r}}}return null}static ɵfac=(()=>{let i;return function(t){return(i||(i=Xg(o)))(t||o)}})();static ɵprov=ce({token:o,factory:o.ɵfac,providedIn:`root`})};var j=R(`UsbSerial`);var Ae=class o extends Z{mode=`coreusb`;samplesToTest=1e3;baudRate=115200;requestDevice(){return y(this,null,function*(){yield this.checkAvailableDevice()})}checkAvailableDevice(){return y(this,null,function*(){try{let i=yield j.getDevices();this.hasAvailableDevice.set(i.hasDevices)}catch(i){console.error(`Error checking USB devices:`,i),this.hasAvailableDevice.set(!1)}})}connect(){return y(this,null,function*(){try{(yield j.connect({baudRate:this.baudRate})).connected&&(this.isConnected.set(!0),yield this.startListening(),yield this.writeLine(`CMD=@BRAND;`))}catch(i){console.error(`USB connection failed:`,i),this.isConnected.set(!1)}})}autoConnect(){return y(this,null,function*(){return(yield j.getDevices()).hasDevices?(yield this.connect(),this.isConnected()):!1})}disconnect(){return y(this,null,function*(){try{yield this.writeLine(`CMD=@CLA;`),yield j.disconnect()}catch(i){console.warn(`Disconnect error:`,i)}finally{this.isConnected.set(!1)}yield this.checkAvailableDevice()})}writeLine(i){return y(this,null,function*(){if(!this.isConnected())return;let e=i.replace(/;/g,`;
`),t=e.endsWith(`
`)?e:e+`
`;yield j.write({data:t})})}writeLineToSource(i){return y(this,null,function*(){this.isConnected()&&(yield j.write({data:i+`
`}))})}readLineFromSource(i=0){return y(this,null,function*(){if(!this.isConnected())return``;try{return((yield j.read()).data||``).trim()||(i<500?this.readLineFromSource(i+1):``)}catch(e){return``}})}getProperties(){return[{name:`BaudRate`,value:this.baudRate},{name:`Is Connected`,value:this.isConnected()}]}readChunk(){return y(this,null,function*(){if(!this.isConnected())return[``,!1];try{let e=(yield j.read()).data||``;return e||(yield new Promise(t=>setTimeout(t,1))),[e,!1]}catch(i){return[``,!0]}})}static ɵfac=(()=>{let i;return function(t){return(i||(i=Xg(o)))(t||o)}})();static ɵprov=ce({token:o,factory:o.ɵfac,providedIn:`root`})};var Re=class{connectionMode=_o(`serial`);hardwareIP=_o(null);webUsbService=y$1(Pe);webSerialService=y$1(Ee);nativeUsbService=y$1(Ae);core=j$1.isNativePlatform()?this.nativeUsbService:this.webSerialService;constructor(){let i=localStorage.getItem(`cteno-device-connection-mode`),e=i===`usb`||i===`serial`?i:`serial`;this.connectionMode.set(e),j$1.isNativePlatform()?this.core=this.nativeUsbService:this.core=e===`usb`?this.webUsbService:this.webSerialService,au(()=>{this.hardwareIP.set(this.core.hardwareIP())}),this.core.deviceProcessLine=this.processLine.bind(this)}setMode(i){return y(this,null,function*(){localStorage.setItem(`cteno-device-connection-mode`,i),this.connectionMode.set(i),j$1.isNativePlatform()?this.core=this.nativeUsbService:this.core=i===`usb`?this.webUsbService:this.webSerialService,yield this.core.checkAvailableDevice()})}writeLine(i){return y(this,null,function*(){yield this.core.writeLine(i)})}readLine(){return y(this,null,function*(){return this.core.readLine()})}};var pe=class o extends Re{EvtJoystick2=_o(``);EvtLight=_o(``);EvtButton=_o(``);evtKey=_o(``);evtConfig=_o(``);processLine(i){if(console.log(i),/^EVT=(JOY|LUX|BTN)/.test(i)){this.handleUnitsEvents(i);return}if(/^EVT=(KEY|SET)/.test(i)){this.handleEvents(i);return}}handleUnitsEvents(i){i.startsWith(`EVT=JOY`)&&this.EvtJoystick2.set(i.slice(7,-1).trim()),i.startsWith(`EVT=LUX`)&&this.EvtLight.set(i.slice(7,-1).trim()),i.startsWith(`EVT=BTN`)&&this.EvtButton.set(i.slice(7,-1).trim())}handleEvents(i){let e=i.match(/^EVT=KEY (.{1});?$/);e&&this.evtKey.set(e[1]);let t=i.match(/^EVT=SET (.+?);?$/);t&&this.evtConfig.set(t[1])}static ɵfac=(()=>{let i;return function(t){return(i||(i=Xg(o)))(t||o)}})();static ɵprov=ce({token:o,factory:o.ɵfac,providedIn:`root`})};function Ti(o,i){}var Le=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var Ze=`mdc-dialog--open`;var ni=`mdc-dialog--opening`;var oi=`mdc-dialog--closing`;var ki=150;var Di=75;var Mi=(()=>{class o extends Rt{_animationStateChanged=new Pe$1;_animationsEnabled=!St();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?ri(this._config.enterAnimationDuration)??ki:0;_exitAnimationDuration=this._animationsEnabled?ri(this._config.exitAnimationDuration)??Di:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(ai,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ni,Ze)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ze),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ze),this._animationsEnabled?(this._hostElement.style.setProperty(ai,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(oi)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(ni,oi)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(n){return(e||(e=Xg(o)))(n||o)}})();static ɵcmp=iI({type:o,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(t,n){t&2&&(Xf(`id`,n._config.id),zf(`aria-modal`,n._config.ariaModal)(`role`,n._config.role)(`aria-labelledby`,n._config.ariaLabel?null:n._ariaLabelledByQueue[0])(`aria-label`,n._config.ariaLabel)(`aria-describedby`,n._config.ariaDescribedBy||null),up(`_mat-animation-noopable`,!n._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,n._actionSectionCount>0))},features:[Hf],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(t,n){t&1&&(ei(0,`div`,0)(1,`div`,1),$f(2,Ti,0,0,`ng-template`,2),fc()())},dependencies:[I],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})}return o})();var ai=`--mat-dialog-transition-duration`;function ri(o){return o==null?null:typeof o==`number`?o:o.endsWith(`ms`)?Sl(o.substring(0,o.length-2)):o.endsWith(`s`)?Sl(o.substring(0,o.length-1))*1e3:o===`0`?0:null}var Oe=(function(o){return o[o.OPEN=0]=`OPEN`,o[o.CLOSING=1]=`CLOSING`,o[o.CLOSED=2]=`CLOSED`,o})(Oe||{});var ge=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Sn$1(1);_beforeClosed=new Sn$1(1);_result;_closeFallbackTimeout;_state=Oe.OPEN;_closeInteractionType;constructor(i,e,t){this._ref=i,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=i.id,i.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(kn(n=>n.state===`opened`),Pi$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(kn(n=>n.state===`closed`),Pi$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),gh(this.backdropClick(),this.keydownEvents().pipe(kn(n=>n.keyCode===27&&!this.disableClose&&!ds(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Ii(this,n.type===`keydown`?`keyboard`:`mouse`))})}close(i){let e=this._config.closePredicate;e&&!e(i,this._config,this.componentInstance)||(this._result=i,this._containerInstance._animationStateChanged.pipe(kn(t=>t.state===`closing`),Pi$1(1)).subscribe(t=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Oe.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let e=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?e.left(i.left):e.right(i.right):e.centerHorizontally(),i&&(i.top||i.bottom)?i.top?e.top(i.top):e.bottom(i.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(i=``,e=``){return this._ref.updateSize(i,e),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Oe.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Ii(o,i,e){return o._closeInteractionType=i,o.close(e)}var Ke=new S(`MatMdcDialogData`);var Ni=new S(`mat-mdc-dialog-default-options`);var Ei=new S(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=y$1(ge$1);return()=>oe(o)}});var Be=(()=>{class o{_defaultOptions=y$1(Ni,{optional:!0});_scrollStrategy=y$1(Ei);_parentDialog=y$1(o,{optional:!0,skipSelf:!0});_idGenerator=y$1(Bi$1);_injector=y$1(ge$1);_dialog=y$1(Mt);_animationsDisabled=St();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Z$1;_afterOpenedAtThisLevel=new Z$1;dialogConfigClass=Le;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=ph(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Sh(void 0)));constructor(){this._dialogRefConstructor=ge,this._dialogContainerType=Mi,this._dialogDataToken=Ke}open(e,t){let n;t=u(u({},this._defaultOptions||new Le),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,v(u({},t),{positionStrategy:re(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:z$2,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(r,p,w)=>(n=new this._dialogRefConstructor(r,t,w),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:w},{provide:this._dialogDataToken,useValue:p.data},{provide:this._dialogRefConstructor,useValue:n},{provide:j$2,useValue:null}])}));return n.componentRef=a.componentRef,n.componentInstance=a.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(n);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||o)};static ɵprov=Vt({token:o,factory:o.ɵfac})}return o})();var si=(()=>{class o{_dialogRef=y$1(ge,{optional:!0});_elementRef=y$1(ur);_dialog=y$1(Be);ngOnInit(){this._dialogRef||(this._dialogRef=Pi(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||o)};static ɵdir=uI({type:o})}return o})();var li=(()=>{class o extends si{id=y$1(Bi$1).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Xg(o)))(n||o)}})();static ɵdir=uI({type:o,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(t,n){t&2&&Xf(`id`,n.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[Hf]})}return o})();var ci=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵdir=uI({type:o,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[pI([wt])]})}return o})();var di=(()=>{class o extends si{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Xg(o)))(n||o)}})();static ɵdir=uI({type:o,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(t,n){t&2&&up(`mat-mdc-dialog-actions-align-start`,n.align===`start`)(`mat-mdc-dialog-actions-align-center`,n.align===`center`)(`mat-mdc-dialog-actions-align-end`,n.align===`end`)},inputs:{align:`align`},features:[Hf]})}return o})();function Pi(o,i){let e=o.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?i.find(t=>t.id===e.id):null}var mi=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=aI({type:o});static ɵinj=pl({providers:[Be],imports:[dn$1,Me,k,Er]})}return o})();var Ve=class o{constructor(i,e){this.dialogRef=i;this.data=e}dialogRef;data;confirm(i){this.dialogRef.close(i)}static ɵfac=function(e){return new(e||o)(pi$1(ge),pi$1(Ke))};static ɵcmp=iI({type:o,selectors:[[`app-confirm-dialog`]],decls:10,vars:4,consts:[[`mat-dialog-title`,``],[`align`,`end`],[`mat-button`,``,3,`click`]],template:function(e,t){e&1&&(ei(0,`h2`,0),IE(1),fc(),ei(2,`mat-dialog-content`)(3,`p`),IE(4),fc()(),ei(5,`mat-dialog-actions`,1)(6,`button`,2),tp(`click`,function(){return t.confirm(!0)}),IE(7),fc(),ei(8,`button`,2),tp(`click`,function(){return t.confirm(!1)}),IE(9),fc()()),e&2&&(Ly(),yp(t.data.title||`Confirmation`),Ly(3),yp(t.data.message||`Are you sure?`),Ly(3),yp(t.data.confirmText||`Yes`),Ly(2),yp(t.data.cancelText||`No`))},dependencies:[Mo,mi,li,di,ci,Uv,kv],encapsulation:2})};var et=[`cueElement`];function qo(o,i={}){return function(e,t,n){e.constructor.hasOwnProperty(`__commandMap`)||Object.defineProperty(e.constructor,"__commandMap",{value:new Map,enumerable:!1,configurable:!1,writable:!1}),e.constructor.__commandMap.set(o,{methodName:t,description:i.description??``,example:i.example??``,arguments:i.arguments??[]})}}var ui=class o{formData=_o({});embedded=`fullwindow`;stimulusCommandMap;stimulusMarkersMap;commandRegistry=new Pe$1;cuesIconElement;cuesSpanElement;cuesDivElement;onDelivery=_o(!1);progressValue=_o(0);countdownTimer=_o(``);stimuliMode=_o(`sequential`);cues=_o([]);purchasedTimeoutId=null;countdownTimeoutId=null;countdownIntervalId=null;cancelStimuliSequence=null;startCountdownValue=5;fullWindowLink=``;experimentConfig={};forcePlayButton=!1;internalRegistry={};hasAdaptive=!1;generateCuesOnFormUpdate=!1;allModes=[{mode:`sequential`,tooltip:`Stimuli follow a predefined or randomized sequence.`,label:`Scheduled`},{mode:`neurofeedback`,tooltip:`Stimuli are shown only in response to external input signals.`,label:`Signal-Based`}];allowModes=[`sequential`,`neurofeedback`];route=y$1(ye);themeService=y$1(hr);router=y$1(yt);hardwareService=y$1(pe);dialog=y$1(Be);premiumService=y$1(h);constructor(){this.setupCommands(),au(()=>{this.embedded===`embedded`&&(this.experimentConfig=this.formData(),this.generateCuesOnFormUpdate&&this.generateCues())}),au(()=>{if(this.stimuliMode()===`neurofeedback`){let i=this.hardwareService.evtKey();if(i){if(i===` `)this.showTrial(null);else{let t=Object.entries(this.stimulusCommandMap).find(([,n])=>n===i)?.[0];t&&this.showTrial(t)}this.hardwareService.evtKey.set(``)}let e=this.hardwareService.evtConfig();if(e){let t=Array.from(e.trim().matchAll(/"([^"]+)"|'([^']+)'|[^\s]+/g)).map(r=>r[1]??r[2]??r[0]),n=t[0],a=t.slice(1);this.internalRegistry[n]&&this.internalRegistry[n].fn(...a),this.hardwareService.evtConfig.set(``)}}})}setupCommands(){let i=this.constructor.__commandMap||new Map;for(let[e,t]of i.entries()){let n=this[t.methodName];typeof n==`function`&&!this.internalRegistry[e]&&(this.internalRegistry[e]={fn:n.bind(this),description:t.description??``,example:t.example??``,arguments:t.arguments??``})}this.hasAdaptive=Object.keys(this.internalRegistry).length>0}ngOnInit(){this.loadConfigFromURL(),this.setWindow(),this.commandRegistry.emit(this.internalRegistry),this.premiumService.isPurchased()}ngOnDestroy(){this.stopSequence()}ngAfterViewInit(){return y(this,null,function*(){this.hardwareService.core.checkAvailableDevice(),this.embedded===`embedded`?yield he.show():yield he.hide()})}setWindow(){this.embedded===`embedded`?document.fullscreenElement&&document.exitFullscreen().catch(i=>{}):document.documentElement.requestFullscreen()}randomIntInRange(i){let e=i[0],t=i[1];return Math.floor(Math.random()*(t-e+1))+e}generateShuffledList(i){let e=Array.from({length:i},(t,n)=>n);for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}getRandomItems(i,e=1){let t=[...i].sort(()=>Math.random()-.5);return e===1?t[0]:t.slice(0,e)}generateCues(){}startCountdown(){let i=window.location.href.split(`#`)[1].replace(`/stimuli?`,`?`);this.purchasedTimeoutId!==null&&(clearTimeout(this.purchasedTimeoutId),this.purchasedTimeoutId=null),this.premiumService.isPurchased()||(this.purchasedTimeoutId=setTimeout(()=>{this.stopSequence(),this.dialog.open(Ve,{data:{title:`Feature Locked`,message:`A full paradigm unlock is required to complete an experiment session. Unlock now to get access to all paradigms and source code.`,confirmText:`Unlock Now`,cancelText:`Cancel`}}).afterClosed().subscribe(t=>y(this,null,function*(){t?this.router.navigateByUrl(`/unlock`):this.router.navigateByUrl(i)}))},180*1e3)),this.onDelivery.set(!0),this.hardwareService.writeLine(`CMD=CLA;CMD=@LOG MESSAGE="Session start" COLOR=RED;`);let e=localStorage.getItem(`cteno-device-connection-port-ext`);if(this.hardwareService.writeLine(`CMD=EXT CH=${e} ACTION=SETMODE MODE=DIGITAL_OUTPUT_MODE;`),this.startCountdownValue===0){this.cancelStimuliSequence=this.runStimuliSequence();return}this.countdownTimeoutId=window.setTimeout(()=>y(this,null,function*(){this.countdownTimer.set(this.startCountdownValue),yield this.hardwareService.writeLine(`CMD=@BIP FREQ=1000 DURATION=100 VOLUME=128;`),this.countdownIntervalId=window.setInterval(()=>y(this,null,function*(){let t=this.countdownTimer();t>1?(this.countdownTimer.set(t-1),yield this.hardwareService.writeLine(`CMD=@BIP FREQ=1000 DURATION=100 VOLUME=128;`)):(this.countdownIntervalId!==null&&(clearInterval(this.countdownIntervalId),this.countdownIntervalId=null),this.countdownTimer.set(``),this.countdownTimeoutId=window.setTimeout(()=>{this.cancelStimuliSequence=this.runStimuliSequence()},1e3))}),1e3)}),1e3)}stopSequence(){this.countdownTimeoutId!==null&&(clearTimeout(this.countdownTimeoutId),this.countdownTimeoutId=null),this.countdownIntervalId!==null&&(clearInterval(this.countdownIntervalId),this.countdownIntervalId=null),this.purchasedTimeoutId!==null&&(clearTimeout(this.purchasedTimeoutId),this.purchasedTimeoutId=null),this.cancelStimuliSequence?.(),this.cancelStimuliSequence=null,this.countdownTimer.set(``),this.onDelivery.set(!1),this.stopStimuliSequence(),this.setProgress(0)}shuffle(i){let e=[...i];for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}shufflePreservingParity(i){let e=i.filter((u,g)=>g%2===0),t=i.filter((u,g)=>g%2!==0);function n(u){for(let g=u.length-1;g>0;g--){let C=Math.floor(Math.random()*(g+1));[u[g],u[C]]=[u[C],u[g]]}return u}let a=n(e),r=n(t),p=[],w=0,E=0;for(let u=0;u<i.length;u++)p[u]=u%2===0?a[w++]:r[E++];return p}setProgress(i){this.progressValue.set(i),i>=99&&setTimeout(()=>{this.hardwareService.writeLine(`CMD=@LOG MESSAGE="Session End" COLOR=RED;CMD=@BIP;`)},3e3)}gotoFullWindow(){this.stopSequence();let i=btoa(JSON.stringify(this.experimentConfig)),e=btoa(JSON.stringify(this.stimulusCommandMap)),t=btoa(JSON.stringify(this.stimulusMarkersMap));this.router.navigate([this.fullWindowLink],{queryParams:{config:i,command:e,markers:t}})}loadConfigFromURL(){this.embedded!==`embedded`&&this.route.queryParams.subscribe(i=>{this.experimentConfig=JSON.parse(atob(i.config)),this.stimulusCommandMap=JSON.parse(atob(i.command)),this.stimulusMarkersMap=JSON.parse(atob(i.markers))}),this.cues().length==0&&this.generateCues()}generateFrequencies(i,e=5,t=70,n=-1){let a=Math.floor(i/e),r=[];for(let p=2;p<=a;p++){let w=i/p;w<=t&&r.push(w.toFixed(2))}return n>0&&r.length>n&&(r=r.slice(0,n)),r}selectStimuliMode(i){this.stimuliMode.set(i),this.generateTrials(),this.showTrial(null),this.hardwareService.evtKey.set(``),this.hardwareService.evtConfig.set(``)}fixClass(i){return i.replace(/ /g,`_`)}propagateClassMarker(i){if(i===null)return;let e=this.stimulusMarkersMap[i],t=localStorage.getItem(`cteno-device-connection-port-ext`),n=localStorage.getItem(`cteno-device-connection-port-dac`);this.hardwareService.writeLine(`CMD=MKR DC=${e.dc_value} DCCH=${n} IO=${e.io_duration} IOCH=${t};`)}onTrial(i){}isNeurofeedback(i){return this.stimuliMode()===`neurofeedback`}runStimuliSequence(){let i=this.generateTrials(),e=performance.now(),t=0,n=[],a=u=>{let g=e+i.slice(0,u).reduce((C,B)=>C+B.duration+B.soa,0);return Math.max(0,g-performance.now())},r=u=>{this.showTrial(u.class),this.onTrial(u),this.hardwareService.writeLine(`CMD=@LOG MESSAGE="Class: ${u.class}" COLOR=GREEN;`)},p=u=>{this.showTrial(null),t++,this.setProgress(100*t/i.length)},w=()=>{n.forEach(u=>window.clearTimeout(u)),n=[]},E=()=>{if(t>=i.length){w(),this.onDelivery.set(!1);return}let u=i[t],g=a(t),C=window.setTimeout(()=>{r(u);let B=window.setTimeout(()=>{p(u),E()},u.duration);n.push(B)},g);n.push(C)};return E(),w}static ɵfac=function(e){return new(e||o)};static ɵdir=uI({type:o,viewQuery:function(e,t){if(e&1&&op(et,5)(et,5)(et,5),e&2){let n;QI(n=ZI())&&(t.cuesIconElement=n),QI(n=ZI())&&(t.cuesSpanElement=n),QI(n=ZI())&&(t.cuesDivElement=n)}},inputs:{formData:`formData`,embedded:`embedded`,stimulusCommandMap:`stimulusCommandMap`,stimulusMarkersMap:`stimulusMarkersMap`},outputs:{commandRegistry:`commandRegistry`}})};var Oi=[`tooltip`];var Li=20;var Bi=new S(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let o=y$1(ge$1);return()=>at(o,{scrollThrottle:Li})}});var Vi=new S(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var hi=`tooltip-panel`;var Fi={passive:!0};var Gi=8;var zi=8;var Ui=24;var ji=200;var tt=(()=>{class o{_elementRef=y$1(ur);_ngZone=y$1(z);_platform=y$1(z$1);_ariaDescriber=y$1(Sb);_focusMonitor=y$1(Fi$1);_dir=y$1(rd);_injector=y$1(ge$1);_viewContainerRef=y$1(hi$1);_mediaMatcher=y$1(br);_document=y$1(Kn);_renderer=y$1(ha);_animationsDisabled=St();_defaultOptions=y$1(Vi,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=pi;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Wb(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Wb(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Sl(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Sl(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new Z$1;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Gi}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Ah(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new h$1(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=n.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(Ah(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&r._origin instanceof ur)return this._overlayRef;this._detach()}let t=this._injector.get(H).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${hi}`,a=ft(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return a.positionChanges.pipe(Ah(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ae(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(Bi)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Ah(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Ah(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Ah(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Ah(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(u(u({},n.main),a.main)),this._addOffset(u(u({},n.fallback),a.fallback))])}_addOffset(e){let t=zi,n=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=n?-t:t:e.originX===`end`&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,n;t==`above`||t==`below`?n={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?n={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(n={originX:`end`,originY:`center`});let{x:a,y:r}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:a,originY:r}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,n;t==`above`?n={overlayX:`center`,overlayY:`bottom`}:t==`below`?n={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?n={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(n={overlayX:`start`,overlayY:`center`});let{x:a,y:r}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:a,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),uy(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:a}=e,r;if(t===`center`?this._dir&&this._dir.value===`rtl`?r=n===`end`?`left`:`right`:r=n===`start`?`left`:`right`:r=t===`bottom`&&a===`top`?`above`:`below`,r!==this._currentPosition){let p=this._overlayRef;if(p){let w=`${this._cssClassPrefix}-${hi}-`;p.removePanelClass(w+this._currentPosition),p.addPanelClass(w+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Fi))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,n=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(n.webkitUserDrag=`none`),n.touchAction=`none`,n.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||uy({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!ds(e):!0;static ɵfac=function(t){return new(t||o)};static ɵdir=uI({type:o,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,n){t&2&&up(`mat-mdc-tooltip-disabled`,n.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return o})();var pi=(()=>{class o{_changeDetectorRef=y$1(GL);_elementRef=y$1(ur);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=St();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new Z$1;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Ui&&e.width>=ji}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:n),t.classList.add(e?n:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let r=getComputedStyle(t);(r.getPropertyValue(`animation-duration`)===`0s`||r.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||o)};static ɵcmp=iI({type:o,selectors:[[`mat-tooltip-component`]],viewQuery:function(t,n){if(t&1&&op(Oi,7),t&2){let a;QI(a=ZI())&&(n._tooltip=a.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(t,n){t&1&&tp(`mouseleave`,function(r){return n._handleMouseLeave(r)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(t,n){t&1&&(pc(0,`div`,1,0),np(`animationend`,function(r){return n._handleAnimationEnd(r)}),pc(2,`div`,2),IE(3),hc()()),t&2&&(cE(n.tooltipClass),up(`mdc-tooltip--multiline`,n._isMultiline),Ly(3),yp(n.message))},styles:[`.mat-mdc-tooltip {
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
`],encapsulation:2})}return o})();var gi=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=aI({type:o});static ɵinj=pl({imports:[Bl$1,Me,Er,Re$1]})}return o})();var ve=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Z$1;bulk={select:i=>this._select(i),deselect:i=>this._deselect(i),setSelection:i=>this._setSelection(i)};constructor(i=!1,e,t=!0,n){this._multiple=i,this._emitChanges=t,this.compareWith=n,e&&e.length&&(i?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){return this._select(i)}deselect(...i){return this._deselect(i)}setSelection(...i){return this._setSelection(i)}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_select(i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(a=>this._getConcreteValue(a)));i.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var fi=(()=>{class o{_animationsDisabled=St();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||o)};static ɵcmp=iI({type:o,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,n){t&2&&up(`mat-pseudo-checkbox-indeterminate`,n.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,n.state===`checked`)(`mat-pseudo-checkbox-disabled`,n.disabled)(`mat-pseudo-checkbox-minimal`,n.appearance===`minimal`)(`mat-pseudo-checkbox-full`,n.appearance===`full`)(`_mat-animation-noopable`,n._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return o})();var Zi=[`button`];var Ji=[`*`];function Ki(o,i){if(o&1&&(ei(0,`div`,2),Zf(1,`mat-pseudo-checkbox`,6),fc()),o&2){let e=UI();Ly(),Qf(`disabled`,e.disabled)}}var bi=new S(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var _i=new S(`MatButtonToggleGroup`);var en={provide:We,useExisting:oo(()=>it),multi:!0};var Fe=class{source;value;constructor(i,e){this.source=i,this.value=e}};var it=(()=>{class o{_changeDetector=y$1(GL);_dir=y$1(rd,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=y$1(Bi$1).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new Pe$1;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new Pe$1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=y$1(bi,{optional:!0});this.appearance=e&&e.appearance?e.appearance:`standard`,this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new ve(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||ds(e))return;let n=e.target.id,a=this._buttonToggles.toArray().findIndex(p=>p.buttonId===n),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(a)||null;break;case 38:r=this._getNextButton(a,-1);break;case 37:r=this._getNextButton(a,this.dir===`ltr`?-1:1);break;case 40:r=this._getNextButton(a,1);break;case 39:r=this._getNextButton(a,this.dir===`ltr`?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus())}_emitChangeEvent(e){let t=new Fe(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,n=!1,a=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):a=!0,a?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let n=this._buttonToggles;for(let a=1;a<=n.length;a++){let r=(e+t*a+n.length)%n.length,p=n.get(r);if(p&&!p.disabled)return p}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(this._clearSelection(),e.forEach(n=>this._selectValue(n,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(n=>n.tabIndex===-1)){for(let n of t)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let n of t)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static ɵfac=function(t){return new(t||o)};static ɵdir=uI({type:o,selectors:[[`mat-button-toggle-group`]],contentQueries:function(t,n,a){if(t&1&&rp(a,Ge,5),t&2){let r;QI(r=ZI())&&(n._buttonToggles=r)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(t,n){t&1&&tp(`keydown`,function(r){return n._keydown(r)}),t&2&&(zf(`role`,n.multiple?`group`:`radiogroup`)(`aria-disabled`,n.disabled),up(`mat-button-toggle-vertical`,n.vertical)(`mat-button-toggle-group-appearance-standard`,n.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,ZL],value:`value`,multiple:[2,`multiple`,`multiple`,ZL],disabled:[2,`disabled`,`disabled`,ZL],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ZL],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,ZL],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,ZL]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[ME([en,{provide:_i,useExisting:o}])]})}return o})();var Ge=(()=>{class o{_changeDetectorRef=y$1(GL);_elementRef=y$1(ur);_focusMonitor=y$1(Fi$1);_idGenerator=y$1(Bi$1);_animationDisabled=St();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Pe$1;constructor(){y$1(_e).load(Cs);let e=y$1(_i,{optional:!0}),t=y$1(new _p(`tabindex`),{optional:!0})||``,n=y$1(bi,{optional:!0});this._tabIndex=_o(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:`standard`,this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new Fe(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(t){return new(t||o)};static ɵcmp=iI({type:o,selectors:[[`mat-button-toggle`]],viewQuery:function(t,n){if(t&1&&op(Zi,5),t&2){let a;QI(a=ZI())&&(n._buttonElement=a.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(t,n){t&1&&tp(`focus`,function(){return n.focus()}),t&2&&(zf(`aria-label`,null)(`aria-labelledby`,null)(`id`,n.id)(`name`,null),up(`mat-button-toggle-standalone`,!n.buttonToggleGroup)(`mat-button-toggle-checked`,n.checked)(`mat-button-toggle-disabled`,n.disabled)(`mat-button-toggle-disabled-interactive`,n.disabledInteractive)(`mat-button-toggle-appearance-standard`,n.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,ZL],appearance:`appearance`,checked:[2,`checked`,`checked`,ZL],disabled:[2,`disabled`,`disabled`,ZL],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,ZL]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:Ji,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(t,n){if(t&1&&(qI(),ei(0,`button`,1,0),tp(`click`,function(){return n._onButtonClick()}),SI(2,Ki,2,1,`div`,2),ei(3,`span`,3),GI(4),fc()(),Zf(5,`span`,4)(6,`span`,5)),t&2){let a=KI(1);Qf(`id`,n.buttonId)(`disabled`,n.disabled&&!n.disabledInteractive||null),zf(`role`,n.isSingleSelector()?`radio`:`button`)(`tabindex`,n.disabled&&!n.disabledInteractive?-1:n.tabIndex)(`aria-pressed`,n.isSingleSelector()?null:n.checked)(`aria-checked`,n.isSingleSelector()?n.checked:null)(`name`,n._getButtonName())(`aria-label`,n.ariaLabel)(`aria-labelledby`,n.ariaLabelledby)(`aria-disabled`,n.disabled&&n.disabledInteractive?`true`:null),Ly(2),xI(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),Ly(4),Qf(`matRippleTrigger`,a)(`matRippleDisabled`,n.disableRipple||n.disabled)}},dependencies:[ov,fi],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2})}return o})();var vi=(()=>{class o{static ɵfac=function(t){return new(t||o)};static ɵmod=aI({type:o});static ɵinj=pl({imports:[Rs,Ge,Er]})}return o})();var nn=[`*`];var Si=(o,i)=>i.mode;function on(o,i){if(o&1){let e=HI();ei(0,`button`,9),tp(`click`,function(){Hl(e);return Bl(UI().hostRef.stopSequence())}),ei(1,`mat-icon`),IE(2,`stop_circle`),fc()(),ei(3,`button`,10),tp(`click`,function(){Hl(e);return Bl(UI().hostRef.startCountdown())}),ei(4,`mat-icon`),IE(5,`play_circle`),fc()()}if(o&2){let e=UI();up(`visible-b`,e.hostRef.onDelivery()),Ly(3),up(`visible-b`,!e.hostRef.onDelivery())}}function an(o,i){if(o&1){let e=HI();ei(0,`button`,14),tp(`click`,function(){Hl(e);return Bl(UI(3).hardwareService.core.autoConnect())}),IE(1),ei(2,`mat-icon`),IE(3,`usb_off`),fc()()}if(o&2){let e=UI(3);Ly(),yc(` Auto-Connect to Hardware | `,e.hardwareService.connectionMode(),` `)}}function rn(o,i){if(o&1){let e=HI();ei(0,`button`,14),tp(`click`,function(){Hl(e);return Bl(UI(3).hardwareService.core.requestAndConnectDevice())}),IE(1,` Select Hardware to Connect `),ei(2,`mat-icon`),IE(3,`usb`),fc()()}}function sn(o,i){if(o&1&&SI(0,an,4,1,`button`,13)(1,rn,4,0,`button`,13),o&2)xI(UI(2).hardwareService.core.hasAvailableDevice()?0:1)}function ln(o,i){if(o&1&&(ei(0,`button`,11),IE(1),ei(2,`mat-icon`),IE(3,`usb`),fc()()),o&2){let e=UI(2);Ly(),yc(` Connected | `,e.hardwareService.connectionMode(),` `)}}function cn(o,i){if(o&1&&(ei(0,`mat-button-toggle`,16),IE(1),fc()),o&2){let e=UI().$implicit;Qf(`value`,wE(e.mode))(`matTooltip`,wE(e.tooltip)),Ly(),yc(` `,e.label,` `)}}function dn(o,i){if(o&1&&SI(0,cn,2,5,`mat-button-toggle`,16),o&2){let e=i.$implicit;xI(UI(3).hostRef.allowModes.includes(e.mode)?0:-1)}}function mn(o,i){if(o&1){let e=HI();ei(0,`mat-button-toggle-group`,15),tp(`change`,function(n){Hl(e);return Bl(UI(2).hostRef.selectStimuliMode(n.value))}),kI(1,dn,1,1,null,null,Si),fc()}if(o&2){let e=UI(2);Qf(`disabled`,e.hostRef.onDelivery())(`value`,e.hostRef.stimuliMode()),Ly(),OI(e.hostRef.allModes)}}function un(o,i){if(o&1&&(ei(0,`div`,4),SI(1,sn,2,1)(2,ln,4,1,`button`,11),SI(3,mn,3,2,`mat-button-toggle-group`,12),fc()),o&2){let e=UI();Ly(),xI(e.hardwareService.core.isConnected()?2:1),Ly(2),xI(e.hostRef.allowModes.length>1?3:-1)}}function hn(o,i){o&1&&(ei(0,`mat-icon`,6),IE(1,`point_scan`),fc())}function pn(o,i){if(o&1){let e=HI();ei(0,`button`,14),tp(`click`,function(){Hl(e);return Bl(UI(3).hardwareService.core.autoConnect())}),IE(1),ei(2,`mat-icon`),IE(3,`usb_off`),fc()()}if(o&2){let e=UI(3);Ly(),yc(` Auto-Connect to Hardware | `,e.hardwareService.connectionMode(),` `)}}function gn(o,i){if(o&1){let e=HI();ei(0,`button`,14),tp(`click`,function(){Hl(e);return Bl(UI(3).hardwareService.core.requestAndConnectDevice())}),IE(1,` Select Hardware to Connect `),ei(2,`mat-icon`),IE(3,`usb`),fc()()}}function fn(o,i){if(o&1&&SI(0,pn,4,1,`button`,13)(1,gn,4,0,`button`,13),o&2)xI(UI(2).hardwareService.core.hasAvailableDevice()?0:1)}function bn(o,i){if(o&1&&(ei(0,`button`,11),IE(1),ei(2,`mat-icon`),IE(3,`usb`),fc()()),o&2){let e=UI(2);Ly(),yc(` Connected | `,e.hardwareService.connectionMode(),` `)}}function _n(o,i){if(o&1&&(ei(0,`mat-button-toggle`,16),IE(1),fc()),o&2){let e=UI().$implicit;Qf(`value`,wE(e.mode))(`matTooltip`,wE(e.tooltip)),Ly(),yc(` `,e.label,` `)}}function vn(o,i){if(o&1&&SI(0,_n,2,5,`mat-button-toggle`,16),o&2){let e=i.$implicit;xI(UI(3).hostRef.allowModes.includes(e.mode)?0:-1)}}function yn(o,i){if(o&1){let e=HI();ei(0,`mat-button-toggle-group`,15),tp(`change`,function(n){Hl(e);return Bl(UI(2).hostRef.selectStimuliMode(n.value))}),kI(1,vn,1,1,null,null,Si),fc()}if(o&2){let e=UI(2);Qf(`disabled`,e.hostRef.onDelivery())(`value`,e.hostRef.stimuliMode()),Ly(),OI(e.hostRef.allModes)}}function Sn(o,i){if(o&1&&(ei(0,`div`,8)(1,`div`,17),SI(2,fn,2,1)(3,bn,4,1,`button`,11),SI(4,yn,3,2,`mat-button-toggle-group`,12),fc()()),o&2){let e=UI();Ly(2),xI(e.hardwareService.core.isConnected()?3:2),Ly(2),xI(e.hostRef.allowModes.length>1?4:-1)}}var yi=class o{constructor(i,e){this.themeService=i;this.hardwareService=e}themeService;hardwareService;hostRef;showCrossBar=!0;ngOnInit(){setTimeout(()=>{j$1.isNativePlatform()?this.hardwareService.core.requestAndConnectDevice():this.hardwareService.core.autoConnect()},100)}ngAfterViewInit(){this.themeService.applyInvertedThemes()}static ɵfac=function(e){return new(e||o)(pi$1(hr),pi$1(pe))};static ɵcmp=iI({type:o,selectors:[[`app-stimuli-layout`]],inputs:{hostRef:`hostRef`,showCrossBar:`showCrossBar`},ngContentSelectors:nn,decls:20,vars:31,consts:[[`matIconButton`,``,3,`click`],[`matIconButton`,``,3,`routerLink`],[`matIconButton`,``,`id`,`mode-light`,3,`click`],[`matIconButton`,``,`id`,`mode-dark`,3,`click`],[1,`bottom-left`,`flex-row`,`flex-wrap`,`invert-theme`],[1,`center`,`counter`,3,`innerHTML`],[1,`center`,`fixation`],[`mode`,`determinate`,3,`value`],[1,`buttons-embedded`,`margin-top-medium`],[`matIconButton`,``,`matTooltip`,`Stop stimulus delivery`,1,`stop`,`conditional-visible-b`,`top-left`,3,`click`],[`matIconButton`,``,`matTooltip`,`Start stimulus delivery`,1,`start`,`conditional-visible-b`,`top-left`,3,`click`],[`matButton`,`filled`,`disabled`,``,1,`connected`],[`name`,`stimuliMode`,3,`disabled`,`value`],[`matButton`,`filled`,1,`disconnected`],[`matButton`,`filled`,1,`disconnected`,3,`click`],[`name`,`stimuliMode`,3,`change`,`disabled`,`value`],[3,`value`,`matTooltip`],[1,`flex-row`,`flex-wrap`]],template:function(e,t){e&1&&(qI(),ei(0,`div`),SI(1,on,6,4),ei(2,`button`,0),tp(`click`,function(){return t.hostRef.gotoFullWindow()}),ei(3,`mat-icon`),IE(4,`arrows_output`),fc()(),ei(5,`button`,1)(6,`mat-icon`),IE(7,`fullscreen_exit`),fc()(),ei(8,`button`,2),tp(`click`,function(){return t.themeService.setThemeMode(`light`)}),ei(9,`mat-icon`),IE(10,`light_mode`),fc()(),ei(11,`button`,3),tp(`click`,function(){return t.themeService.setThemeMode(`dark`)}),ei(12,`mat-icon`),IE(13,`dark_mode`),fc()(),SI(14,un,4,2,`div`,4),Zf(15,`span`,5),SI(16,hn,2,0,`mat-icon`,6),GI(17),Zf(18,`mat-progress-bar`,7),fc(),SI(19,Sn,5,2,`div`,8)),e&2&&(cE(CE(`screen `,t.hostRef.embedded)),up(`light`,t.themeService.mode()===`light`)(`dark`,t.themeService.mode()===`dark`),Ly(),xI(t.hostRef.stimuliMode()!==`neurofeedback`||t.hostRef.forcePlayButton===!0?1:-1),Ly(),cE(CE(`bottom-right fullscreen `,t.hostRef.embedded)),Ly(3),cE(CE(`bottom-right appscreen `,t.hostRef.embedded)),Qf(`routerLink`,wE(t.hostRef.normalWindowLink)),Ly(3),cE(CE(`top-right mode-button `,t.hostRef.embedded)),lp(`display`,t.themeService.mode()===`dark`?`flex`:`none`),Ly(3),cE(CE(`top-right mode-button `,t.hostRef.embedded)),lp(`display`,t.themeService.mode()===`dark`?`none`:`flex`),Ly(3),xI(t.hostRef.embedded===`fullwindow`?14:-1),Ly(),Qf(`innerHTML`,t.hostRef.countdownTimer(),Wm),Ly(),xI(t.showCrossBar?16:-1),Ly(2),Qf(`value`,t.hostRef.progressValue()),Ly(),xI(t.hostRef.embedded===`embedded`?19:-1))},dependencies:[vi,it,Ge,ui$1,li$1,ed,ii,gi,tt,kv,Ka],styles:[`:root{--%NS%mat-progress-bar-track-height: 6px;--%NS%mat-progress-bar-active-indicator-height: 6px}.start[_ngcontent-%COMP%], .stop[_ngcontent-%COMP%]{scale:2}.conditional-visible-b.visible-b[_ngcontent-%COMP%]{visibility:visible}.conditional-visible-b[_ngcontent-%COMP%]{visibility:hidden}.screen[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-inverse-surface);overflow:hidden;container-type:size}.screen.embedded[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;border-radius:var(--%NS%mat-sys-corner-large);width:100%;aspect-ratio:16/9;height:unset;box-sizing:border-box;border:2px solid var(--%NS%mat-sys-inverse-surface)}.screen.fullwindow[_ngcontent-%COMP%]{position:relative;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center}  .center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.counter[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);font:var(--%NS%mat-sys-body-small);font-size:12vh}.fixation[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);z-index:9999}.bottom-right[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);position:absolute;right:16px;bottom:16px;z-index:99999!important}.bottom-left[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);position:absolute;left:16px;bottom:16px}.top-left[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);position:absolute;left:16px;top:16px}.top-right[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);position:absolute;right:16px;top:16px}.bottom-right[_ngcontent-%COMP%], .bottom-left[_ngcontent-%COMP%], .top-left[_ngcontent-%COMP%], .top-right[_ngcontent-%COMP%]{z-index:999}button.top-left[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], button.bottom-right[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:1em;height:1em}.stop[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.fullscreen[_ngcontent-%COMP%]{display:none}.appscreen[_ngcontent-%COMP%], .fullscreen.embedded[_ngcontent-%COMP%]{display:block}.appscreen.embedded[_ngcontent-%COMP%]{display:none}.mode-button.embedded[_ngcontent-%COMP%]{display:none!important}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%}button[_ngcontent-%COMP%]{z-index:1000}.disconnected[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-error)!important;color:var(--%NS%mat-sys-on-error)!important}.connected[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-inverse-primary)!important;color:var(--%NS%mat-sys-on-primary-container)!important}.screen.fullwindow[_ngcontent-%COMP%]   .bottom-right[_ngcontent-%COMP%], .screen.fullwindow[_ngcontent-%COMP%]   .bottom-left[_ngcontent-%COMP%]{bottom:calc(16px + var(--%NS%safe-bottom))}.screen.fullwindow[_ngcontent-%COMP%]   .top-left[_ngcontent-%COMP%], .screen.fullwindow[_ngcontent-%COMP%]   .top-right[_ngcontent-%COMP%]{top:calc(16px + var(--%NS%safe-top))}.screen.fullwindow[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{bottom:var(--%NS%safe-bottom)}`]})};export{vi as a,ui as i,gi as n,yi as o,qo as r,Nn as t};