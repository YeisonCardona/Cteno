import{o as z}from"./chunk-Beo1kjUY.js";import{r as j}from"./chunk-k4UFoHBj.js";import{$ as KE,Bn as gD,Ft as Ue$1,G as Hp,I as Fp,Jr as yD,Jt as Xp,K as I,Nn as f0,O as Ei,Pn as fD,Pr as vD,Pt as Uc,Qr as zE,Rt as Uv,U as Gu,Vt as Vp,Wn as hD,Wt as Wp,X as JE,Xt as YD,Yn as jp,_t as Qp,at as N,br as qo,cn as _u,cr as oD,dn as ah,f as Ar,g as CE,ht as QE,jn as eh,n as $a,nt as Ky,on as _E,p as Bc,pt as Q,qt as Xl,r as $c,s as AD,sn as _r,t as $D,tn as ZD,vn as bu,x as DE,yn as c0,z as Gc}from"./chunk-CdnfGufr.js";import{a as Bo,h as Or,k as bh}from"./chunk-CIPJ1y8p.js";import{D as Re,E as Qt,G as Bt,J as Tn,S as yt,n as V,q as Rn,r as si,rt as h,t as G,x as wt}from"./main.js";import{a as pt,i as f,n as Ht,o as qt,r as Vt,s as st$1,t as Gt}from"./chunk-DlzfC5JO.js";import{i as nt$1,n as _e,r as ke,t as Ae}from"./chunk-D71oJo2J.js";import{n as mt$1,t as Yt}from"./chunk-R6bU5rKL.js";function Ue(i,n){i&1&&Hp(0,`div`,2)}var He=new N(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var ze=(()=>{class i{_elementRef=I(_r);_ngZone=I(Q);_changeDetectorRef=I(c0);_renderer=I($a);_cleanupTransitionEnd;constructor(){let e=Bo(),t=I(He,{optional:!0});this._isNoopAnimation=e===`di-disabled`,e===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;get value(){return this._value}set value(e){this._value=qe(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=qe(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Ue$1;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(t){return new(t||i)};static ɵcmp=DE({type:i,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(t,r){t&2&&(Fp(`aria-valuenow`,r._isIndeterminate()?null:r.value)(`mode`,r.mode),AD(`mat-`+r.color),eh(`_mat-animation-noopable`,r._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!r._isNoopAnimation)(`mdc-linear-progress--indeterminate`,r._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,f0],bufferValue:[2,`bufferValue`,`bufferValue`,f0],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(t,r){t&1&&($c(0,`div`,0),Hp(1,`div`,1),zE(2,Ue,1,0,`div`,2),Uc(),$c(3,`div`,3),Hp(4,`span`,4),Uc(),$c(5,`div`,5),Hp(6,`span`,4),Uc()),t&2&&(Uv(),Xp(`flex-basis`,r._getBufferBarFlexBasis()),Uv(),QE(r.mode===`buffer`?2:-1),Uv(),Xp(`transform`,r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2})}return i})();function qe(i,n=0,e=100){return Math.max(n,Math.min(e,i))}var Ct=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=CE({type:i});static ɵinj=Xl({imports:[bh]})}return i})();var $=class i{constructor(n,e){this.dialogRef=n;this.data=e}dialogRef;data;confirm(n){this.dialogRef.close(n)}static ɵfac=function(e){return new(e||i)(Ar(f),Ar(pt))};static ɵcmp=DE({type:i,selectors:[[`app-confirm-dialog`]],decls:10,vars:4,consts:[[`mat-dialog-title`,``],[`align`,`end`],[`mat-button`,``,3,`click`]],template:function(e,t){e&1&&(Ei(0,`h2`,0),$D(1),Bc(),Ei(2,`mat-dialog-content`)(3,`p`),$D(4),Bc()(),Ei(5,`mat-dialog-actions`,1)(6,`button`,2),Wp(`click`,function(){return t.confirm(!0)}),$D(7),Bc(),Ei(8,`button`,2),Wp(`click`,function(){return t.confirm(!1)}),$D(9),Bc()()),e&2&&(Uv(),ah(t.data.title||`Confirmation`),Uv(3),ah(t.data.message||`Are you sure?`),Uv(3),ah(t.data.confirmText||`Yes`),Uv(2),ah(t.data.cancelText||`No`))},dependencies:[Or,qt,Vt,Ht,Gt,Tn,Rn],encapsulation:2})};var te=[`cueElement`];function Ft(i,n={}){return function(e,t,r){e.constructor.hasOwnProperty(`__commandMap`)||Object.defineProperty(e.constructor,"__commandMap",{value:new Map,enumerable:!1,configurable:!1,writable:!1}),e.constructor.__commandMap.set(i,{methodName:t,description:n.description??``,example:n.example??``,arguments:n.arguments??[]})}}var Xe=class i{formData=qo({});embedded=`fullwindow`;stimulusCommandMap;stimulusMarkersMap;commandRegistry=new Ue$1;cuesIconElement;cuesSpanElement;cuesDivElement;onDelivery=qo(!1);progressValue=qo(0);countdownTimer=qo(``);stimuliMode=qo(`sequential`);cues=qo([]);purchasedTimeoutId=null;countdownTimeoutId=null;countdownIntervalId=null;cancelStimuliSequence=null;startCountdownValue=5;fullWindowLink=``;experimentConfig={};forcePlayButton=!1;internalRegistry={};hasAdaptive=!1;generateCuesOnFormUpdate=!1;allModes=[{mode:`sequential`,tooltip:`Stimuli follow a predefined or randomized sequence.`,label:`Scheduled`},{mode:`neurofeedback`,tooltip:`Stimuli are shown only in response to external input signals.`,label:`Signal-Based`}];allowModes=[`sequential`,`neurofeedback`];route=I(V);themeService=I(Re);router=I(G);hardwareService=I(ke);dialog=I(st$1);premiumService=I(h);constructor(){this.setupCommands(),Gu(()=>{this.embedded===`embedded`&&(this.experimentConfig=this.formData(),this.generateCuesOnFormUpdate&&this.generateCues())}),Gu(()=>{if(this.stimuliMode()===`neurofeedback`){let n=this.hardwareService.evtKey();if(n){if(n===` `)this.showTrial(null);else{let t=Object.entries(this.stimulusCommandMap).find(([,r])=>r===n)?.[0];t&&this.showTrial(t)}this.hardwareService.evtKey.set(``)}let e=this.hardwareService.evtConfig();if(e){let t=Array.from(e.trim().matchAll(/"([^"]+)"|'([^']+)'|[^\s]+/g)).map(f=>f[1]??f[2]??f[0]),r=t[0],h=t.slice(1);this.internalRegistry[r]&&this.internalRegistry[r].fn(...h),this.hardwareService.evtConfig.set(``)}}})}setupCommands(){let n=this.constructor.__commandMap||new Map;for(let[e,t]of n.entries()){let r=this[t.methodName];typeof r==`function`&&!this.internalRegistry[e]&&(this.internalRegistry[e]={fn:r.bind(this),description:t.description??``,example:t.example??``,arguments:t.arguments??``})}this.hasAdaptive=Object.keys(this.internalRegistry).length>0}ngOnInit(){this.loadConfigFromURL(),this.setWindow(),this.commandRegistry.emit(this.internalRegistry),this.premiumService.isPurchased()}ngOnDestroy(){this.stopSequence()}ngAfterViewInit(){return z(this,null,function*(){this.hardwareService.core.checkAvailableDevice(),this.embedded===`embedded`?yield Qt.show():yield Qt.hide()})}setWindow(){this.embedded===`embedded`?document.fullscreenElement&&document.exitFullscreen().catch(n=>{}):document.documentElement.requestFullscreen()}randomIntInRange(n){let e=n[0],t=n[1];return Math.floor(Math.random()*(t-e+1))+e}generateShuffledList(n){let e=Array.from({length:n},(t,r)=>r);for(let t=e.length-1;t>0;t--){let r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}getRandomItems(n,e=1){let t=[...n].sort(()=>Math.random()-.5);return e===1?t[0]:t.slice(0,e)}generateCues(){}startCountdown(){let n=window.location.href.split(`#`)[1].replace(`/stimuli?`,`?`);this.purchasedTimeoutId!==null&&(clearTimeout(this.purchasedTimeoutId),this.purchasedTimeoutId=null),this.premiumService.isPurchased()||(this.purchasedTimeoutId=setTimeout(()=>{this.stopSequence(),this.dialog.open($,{data:{title:`Feature Locked`,message:`A full paradigm unlock is required to complete an experiment session. Unlock now to get access to all paradigms and source code.`,confirmText:`Unlock Now`,cancelText:`Cancel`}}).afterClosed().subscribe(t=>z(this,null,function*(){t?this.router.navigateByUrl(`/unlock`):this.router.navigateByUrl(n)}))},180*1e3)),this.onDelivery.set(!0),this.hardwareService.writeLine(`CMD=CLA;CMD=@LOG MESSAGE="Session start" COLOR=RED;`);let e=localStorage.getItem(`cteno-device-connection-port-ext`);if(this.hardwareService.writeLine(`CMD=EXT CH=${e} ACTION=SETMODE MODE=DIGITAL_OUTPUT_MODE;`),this.startCountdownValue===0){this.cancelStimuliSequence=this.runStimuliSequence();return}this.countdownTimeoutId=window.setTimeout(()=>z(this,null,function*(){this.countdownTimer.set(this.startCountdownValue),yield this.hardwareService.writeLine(`CMD=@BIP FREQ=1000 DURATION=100 VOLUME=128;`),this.countdownIntervalId=window.setInterval(()=>z(this,null,function*(){let t=this.countdownTimer();t>1?(this.countdownTimer.set(t-1),yield this.hardwareService.writeLine(`CMD=@BIP FREQ=1000 DURATION=100 VOLUME=128;`)):(this.countdownIntervalId!==null&&(clearInterval(this.countdownIntervalId),this.countdownIntervalId=null),this.countdownTimer.set(``),this.countdownTimeoutId=window.setTimeout(()=>{this.cancelStimuliSequence=this.runStimuliSequence()},1e3))}),1e3)}),1e3)}stopSequence(){this.countdownTimeoutId!==null&&(clearTimeout(this.countdownTimeoutId),this.countdownTimeoutId=null),this.countdownIntervalId!==null&&(clearInterval(this.countdownIntervalId),this.countdownIntervalId=null),this.purchasedTimeoutId!==null&&(clearTimeout(this.purchasedTimeoutId),this.purchasedTimeoutId=null),this.cancelStimuliSequence?.(),this.cancelStimuliSequence=null,this.countdownTimer.set(``),this.onDelivery.set(!1),this.stopStimuliSequence(),this.setProgress(0)}shuffle(n){let e=[...n];for(let t=e.length-1;t>0;t--){let r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}shufflePreservingParity(n){let e=n.filter((l,g)=>g%2===0),t=n.filter((l,g)=>g%2!==0);function r(l){for(let g=l.length-1;g>0;g--){let k=Math.floor(Math.random()*(g+1));[l[g],l[k]]=[l[k],l[g]]}return l}let h=r(e),f=r(t),y=[],w=0,A=0;for(let l=0;l<n.length;l++)y[l]=l%2===0?h[w++]:f[A++];return y}setProgress(n){this.progressValue.set(n),n>=99&&setTimeout(()=>{this.hardwareService.writeLine(`CMD=@LOG MESSAGE="Session End" COLOR=RED;CMD=@BIP;`)},3e3)}gotoFullWindow(){this.stopSequence();let n=btoa(JSON.stringify(this.experimentConfig)),e=btoa(JSON.stringify(this.stimulusCommandMap)),t=btoa(JSON.stringify(this.stimulusMarkersMap));this.router.navigate([this.fullWindowLink],{queryParams:{config:n,command:e,markers:t}})}loadConfigFromURL(){this.embedded!==`embedded`&&this.route.queryParams.subscribe(n=>{this.experimentConfig=JSON.parse(atob(n.config)),this.stimulusCommandMap=JSON.parse(atob(n.command)),this.stimulusMarkersMap=JSON.parse(atob(n.markers))}),this.cues().length==0&&this.generateCues()}generateFrequencies(n,e=5,t=70,r=-1){let h=Math.floor(n/e),f=[];for(let y=2;y<=h;y++){let w=n/y;w<=t&&f.push(w.toFixed(2))}return r>0&&f.length>r&&(f=f.slice(0,r)),f}selectStimuliMode(n){this.stimuliMode.set(n),this.generateTrials(),this.showTrial(null),this.hardwareService.evtKey.set(``),this.hardwareService.evtConfig.set(``)}fixClass(n){return n.replace(/ /g,`_`)}propagateClassMarker(n){if(n===null)return;let e=this.stimulusMarkersMap[n],t=localStorage.getItem(`cteno-device-connection-port-ext`),r=localStorage.getItem(`cteno-device-connection-port-dac`);this.hardwareService.writeLine(`CMD=MKR DC=${e.dc_value} DCCH=${r} IO=${e.io_duration} IOCH=${t};`)}onTrial(n){}isNeurofeedback(n){return this.stimuliMode()===`neurofeedback`}runStimuliSequence(){let n=this.generateTrials(),e=performance.now(),t=0,r=[],h=l=>{let g=e+n.slice(0,l).reduce((k,V)=>k+V.duration+V.soa,0);return Math.max(0,g-performance.now())},f=l=>{this.showTrial(l.class),this.onTrial(l),this.hardwareService.writeLine(`CMD=@LOG MESSAGE="Class: ${l.class}" COLOR=GREEN;`)},y=l=>{this.showTrial(null),t++,this.setProgress(100*t/n.length)},w=()=>{r.forEach(l=>window.clearTimeout(l)),r=[]},A=()=>{if(t>=n.length){w(),this.onDelivery.set(!1);return}let l=n[t],g=h(t),k=window.setTimeout(()=>{f(l);let V=window.setTimeout(()=>{y(l),A()},l.duration);r.push(V)},g);r.push(k)};return A(),w}static ɵfac=function(e){return new(e||i)};static ɵdir=_E({type:i,viewQuery:function(e,t){if(e&1&&Qp(te,5)(te,5)(te,5),e&2){let r;yD(r=vD())&&(t.cuesIconElement=r),yD(r=vD())&&(t.cuesSpanElement=r),yD(r=vD())&&(t.cuesDivElement=r)}},inputs:{formData:`formData`,embedded:`embedded`,stimulusCommandMap:`stimulusCommandMap`,stimulusMarkersMap:`stimulusMarkersMap`},outputs:{commandRegistry:`commandRegistry`}})};var $e=[`*`];var je=(i,n)=>n.mode;function Qe(i,n){if(i&1){let e=oD();Ei(0,`button`,9),Wp(`click`,function(){bu(e);return _u(fD().hostRef.stopSequence())}),Ei(1,`mat-icon`),$D(2,`stop_circle`),Bc()(),Ei(3,`button`,10),Wp(`click`,function(){bu(e);return _u(fD().hostRef.startCountdown())}),Ei(4,`mat-icon`),$D(5,`play_circle`),Bc()()}if(i&2){let e=fD();eh(`visible-b`,e.hostRef.onDelivery()),Uv(3),eh(`visible-b`,!e.hostRef.onDelivery())}}function We(i,n){if(i&1){let e=oD();Ei(0,`button`,14),Wp(`click`,function(){bu(e);return _u(fD(3).hardwareService.core.autoConnect())}),$D(1),Ei(2,`mat-icon`),$D(3,`usb_off`),Bc()()}if(i&2){let e=fD(3);Uv(),Gc(` Auto-Connect to Hardware | `,e.hardwareService.connectionMode(),` `)}}function Je(i,n){if(i&1){let e=oD();Ei(0,`button`,14),Wp(`click`,function(){bu(e);return _u(fD(3).hardwareService.core.requestAndConnectDevice())}),$D(1,` Select Hardware to Connect `),Ei(2,`mat-icon`),$D(3,`usb`),Bc()()}}function Ke(i,n){if(i&1&&zE(0,We,4,1,`button`,13)(1,Je,4,0,`button`,13),i&2)QE(fD(2).hardwareService.core.hasAvailableDevice()?0:1)}function Ze(i,n){if(i&1&&(Ei(0,`button`,11),$D(1),Ei(2,`mat-icon`),$D(3,`usb`),Bc()()),i&2){let e=fD(2);Uv(),Gc(` Connected | `,e.hardwareService.connectionMode(),` `)}}function Ye(i,n){if(i&1&&(Ei(0,`mat-button-toggle`,16),$D(1),Bc()),i&2){let e=fD().$implicit;jp(`value`,ZD(e.mode))(`matTooltip`,ZD(e.tooltip)),Uv(),Gc(` `,e.label,` `)}}function et(i,n){if(i&1&&zE(0,Ye,2,5,`mat-button-toggle`,16),i&2){let e=n.$implicit;QE(fD(3).hostRef.allowModes.includes(e.mode)?0:-1)}}function tt(i,n){if(i&1){let e=oD();Ei(0,`mat-button-toggle-group`,15),Wp(`change`,function(r){bu(e);return _u(fD(2).hostRef.selectStimuliMode(r.value))}),KE(1,et,1,1,null,null,je),Bc()}if(i&2){let e=fD(2);jp(`disabled`,e.hostRef.onDelivery())(`value`,e.hostRef.stimuliMode()),Uv(),JE(e.hostRef.allModes)}}function nt(i,n){if(i&1&&(Ei(0,`div`,4),zE(1,Ke,2,1)(2,Ze,4,1,`button`,11),zE(3,tt,3,2,`mat-button-toggle-group`,12),Bc()),i&2){let e=fD();Uv(),QE(e.hardwareService.core.isConnected()?2:1),Uv(2),QE(e.hostRef.allowModes.length>1?3:-1)}}function it(i,n){i&1&&(Ei(0,`mat-icon`,6),$D(1,`point_scan`),Bc())}function rt(i,n){if(i&1){let e=oD();Ei(0,`button`,14),Wp(`click`,function(){bu(e);return _u(fD(3).hardwareService.core.autoConnect())}),$D(1),Ei(2,`mat-icon`),$D(3,`usb_off`),Bc()()}if(i&2){let e=fD(3);Uv(),Gc(` Auto-Connect to Hardware | `,e.hardwareService.connectionMode(),` `)}}function ot(i,n){if(i&1){let e=oD();Ei(0,`button`,14),Wp(`click`,function(){bu(e);return _u(fD(3).hardwareService.core.requestAndConnectDevice())}),$D(1,` Select Hardware to Connect `),Ei(2,`mat-icon`),$D(3,`usb`),Bc()()}}function at(i,n){if(i&1&&zE(0,rt,4,1,`button`,13)(1,ot,4,0,`button`,13),i&2)QE(fD(2).hardwareService.core.hasAvailableDevice()?0:1)}function st(i,n){if(i&1&&(Ei(0,`button`,11),$D(1),Ei(2,`mat-icon`),$D(3,`usb`),Bc()()),i&2){let e=fD(2);Uv(),Gc(` Connected | `,e.hardwareService.connectionMode(),` `)}}function lt(i,n){if(i&1&&(Ei(0,`mat-button-toggle`,16),$D(1),Bc()),i&2){let e=fD().$implicit;jp(`value`,ZD(e.mode))(`matTooltip`,ZD(e.tooltip)),Uv(),Gc(` `,e.label,` `)}}function mt(i,n){if(i&1&&zE(0,lt,2,5,`mat-button-toggle`,16),i&2){let e=n.$implicit;QE(fD(3).hostRef.allowModes.includes(e.mode)?0:-1)}}function ct(i,n){if(i&1){let e=oD();Ei(0,`mat-button-toggle-group`,15),Wp(`change`,function(r){bu(e);return _u(fD(2).hostRef.selectStimuliMode(r.value))}),KE(1,mt,1,1,null,null,je),Bc()}if(i&2){let e=fD(2);jp(`disabled`,e.hostRef.onDelivery())(`value`,e.hostRef.stimuliMode()),Uv(),JE(e.hostRef.allModes)}}function dt(i,n){if(i&1&&(Ei(0,`div`,8)(1,`div`,17),zE(2,at,2,1)(3,st,4,1,`button`,11),zE(4,ct,3,2,`mat-button-toggle-group`,12),Bc()()),i&2){let e=fD();Uv(2),QE(e.hardwareService.core.isConnected()?3:2),Uv(2),QE(e.hostRef.allowModes.length>1?4:-1)}}var Fe=class i{constructor(n,e){this.themeService=n;this.hardwareService=e}themeService;hardwareService;hostRef;showCrossBar=!0;ngOnInit(){setTimeout(()=>{j.isNativePlatform()?this.hardwareService.core.requestAndConnectDevice():this.hardwareService.core.autoConnect()},100)}ngAfterViewInit(){this.themeService.applyInvertedThemes()}static ɵfac=function(e){return new(e||i)(Ar(Re),Ar(ke))};static ɵcmp=DE({type:i,selectors:[[`app-stimuli-layout`]],inputs:{hostRef:`hostRef`,showCrossBar:`showCrossBar`},ngContentSelectors:$e,decls:20,vars:31,consts:[[`matIconButton`,``,3,`click`],[`matIconButton`,``,3,`routerLink`],[`matIconButton`,``,`id`,`mode-light`,3,`click`],[`matIconButton`,``,`id`,`mode-dark`,3,`click`],[1,`bottom-left`,`flex-row`,`flex-wrap`,`invert-theme`],[1,`center`,`counter`,3,`innerHTML`],[1,`center`,`fixation`],[`mode`,`determinate`,3,`value`],[1,`buttons-embedded`,`margin-top-medium`],[`matIconButton`,``,`matTooltip`,`Stop stimulus delivery`,1,`stop`,`conditional-visible-b`,`top-left`,3,`click`],[`matIconButton`,``,`matTooltip`,`Start stimulus delivery`,1,`start`,`conditional-visible-b`,`top-left`,3,`click`],[`matButton`,`filled`,`disabled`,``,1,`connected`],[`name`,`stimuliMode`,3,`disabled`,`value`],[`matButton`,`filled`,1,`disconnected`],[`matButton`,`filled`,1,`disconnected`,3,`click`],[`name`,`stimuliMode`,3,`change`,`disabled`,`value`],[3,`value`,`matTooltip`],[1,`flex-row`,`flex-wrap`]],template:function(e,t){e&1&&(hD(),Ei(0,`div`),zE(1,Qe,6,4),Ei(2,`button`,0),Wp(`click`,function(){return t.hostRef.gotoFullWindow()}),Ei(3,`mat-icon`),$D(4,`arrows_output`),Bc()(),Ei(5,`button`,1)(6,`mat-icon`),$D(7,`fullscreen_exit`),Bc()(),Ei(8,`button`,2),Wp(`click`,function(){return t.themeService.setThemeMode(`light`)}),Ei(9,`mat-icon`),$D(10,`light_mode`),Bc()(),Ei(11,`button`,3),Wp(`click`,function(){return t.themeService.setThemeMode(`dark`)}),Ei(12,`mat-icon`),$D(13,`dark_mode`),Bc()(),zE(14,nt,4,2,`div`,4),Vp(15,`span`,5),zE(16,it,2,0,`mat-icon`,6),gD(17),Vp(18,`mat-progress-bar`,7),Bc(),zE(19,dt,5,2,`div`,8)),e&2&&(AD(YD(`screen `,t.hostRef.embedded)),eh(`light`,t.themeService.mode()===`light`)(`dark`,t.themeService.mode()===`dark`),Uv(),QE(t.hostRef.stimuliMode()!==`neurofeedback`||t.hostRef.forcePlayButton===!0?1:-1),Uv(),AD(YD(`bottom-right fullscreen `,t.hostRef.embedded)),Uv(3),AD(YD(`bottom-right appscreen `,t.hostRef.embedded)),jp(`routerLink`,ZD(t.hostRef.normalWindowLink)),Uv(3),AD(YD(`top-right mode-button `,t.hostRef.embedded)),Xp(`display`,t.themeService.mode()===`dark`?`flex`:`none`),Uv(3),AD(YD(`top-right mode-button `,t.hostRef.embedded)),Xp(`display`,t.themeService.mode()===`dark`?`none`:`flex`),Uv(3),QE(t.hostRef.embedded===`fullwindow`?14:-1),Uv(),jp(`innerHTML`,t.hostRef.countdownTimer(),Ky),Uv(),QE(t.showCrossBar?16:-1),Uv(2),jp(`value`,t.hostRef.progressValue()),Uv(),QE(t.hostRef.embedded===`embedded`?19:-1))},dependencies:[nt$1,Ae,_e,yt,wt,Bt,ze,Yt,mt$1,Rn,si],styles:[`:root{--%NS%mat-progress-bar-track-height: 6px;--%NS%mat-progress-bar-active-indicator-height: 6px}.start[_ngcontent-%COMP%], .stop[_ngcontent-%COMP%]{scale:2}.conditional-visible-b.visible-b[_ngcontent-%COMP%]{visibility:visible}.conditional-visible-b[_ngcontent-%COMP%]{visibility:hidden}.screen[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-inverse-surface);overflow:hidden;container-type:size}.screen.embedded[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;border-radius:var(--%NS%mat-sys-corner-large);width:100%;aspect-ratio:16/9;height:unset;box-sizing:border-box;border:2px solid var(--%NS%mat-sys-inverse-surface)}.screen.fullwindow[_ngcontent-%COMP%]{position:relative;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center}  .center{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.counter[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);font:var(--%NS%mat-sys-body-small);font-size:12vh}.fixation[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);z-index:9999}.bottom-right[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);position:absolute;right:16px;bottom:16px;z-index:99999!important}.bottom-left[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);position:absolute;left:16px;bottom:16px}.top-left[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);position:absolute;left:16px;top:16px}.top-right[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-inverse-on-surface);position:absolute;right:16px;top:16px}.bottom-right[_ngcontent-%COMP%], .bottom-left[_ngcontent-%COMP%], .top-left[_ngcontent-%COMP%], .top-right[_ngcontent-%COMP%]{z-index:999}button.top-left[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], button.bottom-right[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:1em;height:1em}.stop[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}.fullscreen[_ngcontent-%COMP%]{display:none}.appscreen[_ngcontent-%COMP%], .fullscreen.embedded[_ngcontent-%COMP%]{display:block}.appscreen.embedded[_ngcontent-%COMP%]{display:none}.mode-button.embedded[_ngcontent-%COMP%]{display:none!important}mat-progress-bar[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%}button[_ngcontent-%COMP%]{z-index:1000}.disconnected[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-error)!important;color:var(--%NS%mat-sys-on-error)!important}.connected[_ngcontent-%COMP%]{background-color:var(--%NS%mat-sys-inverse-primary)!important;color:var(--%NS%mat-sys-on-primary-container)!important}.screen.fullwindow[_ngcontent-%COMP%]   .bottom-right[_ngcontent-%COMP%], .screen.fullwindow[_ngcontent-%COMP%]   .bottom-left[_ngcontent-%COMP%]{bottom:calc(16px + var(--%NS%safe-bottom))}.screen.fullwindow[_ngcontent-%COMP%]   .top-left[_ngcontent-%COMP%], .screen.fullwindow[_ngcontent-%COMP%]   .top-right[_ngcontent-%COMP%]{top:calc(16px + var(--%NS%safe-top))}.screen.fullwindow[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%]{bottom:var(--%NS%safe-bottom)}`]})};export{Xe as a,Ft as i,Ct as n,Fe as r,$ as t};