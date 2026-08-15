import{o as z$1,t as u}from"./chunk-Beo1kjUY.js";import{n as R}from"./chunk-k4UFoHBj.js";import{Et as Sp,I as Fp,Jr as yD,K as I,Kn as ig,Ln as fr,O as Ei,Pn as fD,Pr as vD,Q as K,Qr as zE,Rr as vv,Rt as Uv,Vt as Vp,Wt as Wp,Yn as jp,Yr as ye,_t as Qp,at as N,cn as _u,cr as oD,d as Ap,en as Yt,f as Ar,ht as QE,jn as eh,on as _E,p as Bc,pt as Q,sn as _r,t as $D,ut as Pg,vn as bu,w as Dr,x as DE,yn as c0,z as Gc}from"./chunk-CdnfGufr.js";import{A as bn,X as uh,m as Oo,t as $,y as Sn,z as ih}from"./chunk-CIPJ1y8p.js";import{F as d,I as k,L as p,O as s$1,R as s,T as O,c as It,h as ot,q as Rn,r as si,s as D,x as wt}from"./main.js";import"./chunk-Pe_ACDEh.js";import"./chunk-BUtUzqV-.js";import{a as me,i as Pn,n as Ft,r as Ht,t as At}from"./chunk-DYEQdGCJ.js";import{n as t}from"./chunk-Bd3FULOj.js";import{t as f}from"./chunk-CsVGNVII.js";function Fe(n){n.CapacitorUtils.Synapse=new Proxy({},{get(c,e){return new Proxy({},{get(t,i){return(s,l,m)=>{let p=n.Capacitor.Plugins[e];if(p===void 0){m(new Error(`Capacitor plugin ${e} not found`));return}if(typeof p[i]!=`function`){m(new Error(`Method ${i} not found in Capacitor plugin ${e}`));return}z$1(null,null,function*(){try{l(yield p[i](s))}catch(f){m(f)}})}}})}})}function Pe(n){n.CapacitorUtils.Synapse=new Proxy({},{get(c,e){return n.cordova.plugins[e]}})}function Oe(n=!1){typeof window>`u`||(window.CapacitorUtils=window.CapacitorUtils||{},window.Capacitor!==void 0&&!n?Fe(window):window.cordova!==void 0&&Pe(window))}var Ce=R(`FileTransfer`,{web:()=>import(`./chunk-93IwxpfH.js`).then(n=>new n.FileTransferWeb)});Oe();function Ne(n){n.CapacitorUtils.Synapse=new Proxy({},{get(c,e){return new Proxy({},{get(t,i){return(s,l,m)=>{let p=n.Capacitor.Plugins[e];if(p===void 0){m(new Error(`Capacitor plugin ${e} not found`));return}if(typeof p[i]!=`function`){m(new Error(`Method ${i} not found in Capacitor plugin ${e}`));return}z$1(null,null,function*(){try{l(yield p[i](s))}catch(f){m(f)}})}}})}})}function Le(n){n.CapacitorUtils.Synapse=new Proxy({},{get(c,e){return n.cordova.plugins[e]}})}function Ee(n=!1){typeof window>`u`||(window.CapacitorUtils=window.CapacitorUtils||{},window.Capacitor!==void 0&&!n?Ne(window):window.cordova!==void 0&&Le(window))}var Ae=R(`Filesystem`,{web:()=>import(`./chunk-CaY5ZXjh.js`).then(n=>new n.FilesystemWeb)});Ee();var Me=R(`Share`,{web:()=>import(`./chunk-eMsRdEkP2.js`).then(n=>new n.ShareWeb)});var Te=R(`Browser`,{web:()=>import(`./chunk-DGqPDX7p.js`).then(n=>new n.BrowserWeb)});function ze(n,c){if(n&1){let e=oD();Ei(0,`div`,1)(1,`button`,2),Wp(`click`,function(){bu(e);return _u(fD().action())}),$D(2),Bc()()}if(n&2){let e=fD();Uv(2),Gc(` `,e.data.action,` `)}}var Ue=[`label`];function qe(n,c){}var He=Math.pow(2,31)-1;var A=class{_overlayRef;instance;containerInstance;_afterDismissed=new K;_afterOpened=new K;_onAction=new K;_durationTimeoutId;_dismissedByAction=!1;constructor(c,e){this._overlayRef=e,this.containerInstance=c,c._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(c){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(c,He))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var Be=new N(`MatSnackBarData`);var w=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var Ve=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=_E({type:n,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return n})();var We=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=_E({type:n,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return n})();var $e=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=_E({type:n,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return n})();var Ke=(()=>{class n{snackBarRef=I(A);data=I(Be);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(t){return new(t||n)};static ɵcmp=DE({type:n,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(t,i){t&1&&(Ei(0,`div`,0),$D(1),Bc(),zE(2,ze,3,1,`div`,1)),t&2&&(Uv(),Gc(` `,i.data.message,`
`),Uv(),QE(i.hasAction?2:-1))},dependencies:[Rn,Ve,We,$e],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return n})();var z=`_mat-snack-bar-enter`;var U=`_mat-snack-bar-exit`;var Ze=(()=>{class n extends d{_ngZone=I(Q);_elementRef=I(_r);_changeDetectorRef=I(c0);_platform=I($);_animationsDisabled=uh();snackBarConfig=I(w);_document=I(fr);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=I(ye);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new K;_onExit=new K;_onEnter=new K;_animationState=`void`;_live;_label;_role;_liveElementId=I(Sn).getId(`mat-snack-bar-container-live-`);constructor(){super();let e=this.snackBarConfig;e.politeness===`assertive`&&!e.announcementMessage?this._live=`assertive`:e.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===U?this._completeExit():e===z&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?vv(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(z)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(z)},200)))}exit(){return this._destroyed?ig(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?vv(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(U)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(U),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(l=>e.classList.add(l)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,s=`mdc-snackbar__label`;i.classList.toggle(s,!i.querySelector(`.${s}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<t.length;i++){let s=t[i],l=s.getAttribute(`aria-owns`);this._trackedModals.add(s),l?l.indexOf(e)===-1&&s.setAttribute(`aria-owns`,l+` `+e):s.setAttribute(`aria-owns`,e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute(`aria-owns`);if(t){let i=t.replace(this._liveElementId,``).trim();i.length>0?e.setAttribute(`aria-owns`,i):e.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector(`[aria-hidden]`),i=e.querySelector(`[aria-live]`);if(t&&i){let s=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(s=document.activeElement),t.removeAttribute(`aria-hidden`),i.appendChild(t),s?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(t){return new(t||n)};static ɵcmp=DE({type:n,selectors:[[`mat-snack-bar-container`]],viewQuery:function(t,i){if(t&1&&Qp(k,7)(Ue,7),t&2){let s;yD(s=vD())&&(i._portalOutlet=s.first),yD(s=vD())&&(i._label=s.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(t,i){t&1&&Wp(`animationend`,function(l){return i.onAnimationEnd(l.animationName)})(`animationcancel`,function(l){return i.onAnimationEnd(l.animationName)}),t&2&&eh(`mat-snack-bar-container-enter`,i._animationState===`visible`)(`mat-snack-bar-container-exit`,i._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!i._animationsDisabled)},features:[Sp],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(t,i){t&1&&(Ei(0,`div`,1)(1,`div`,2,0)(3,`div`,3),Ap(4,qe,0,0,`ng-template`,4),Bc(),Vp(5,`div`),Bc()()),t&2&&(Uv(5),Fp(`aria-live`,i._live)(`role`,i._role)(`id`,i._liveElementId))},dependencies:[k],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return n})();var Qe=new N(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new w});var De=(()=>{class n{_live=I(Oo);_injector=I(ye);_breakpointObserver=I(bn);_parentSnackBar=I(n,{optional:!0,skipSelf:!0});_defaultConfig=I(Qe);_animationsDisabled=uh();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Ke;snackBarContainerComponent=Ze;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t=``,i){let s=u(u({},this._defaultConfig),i);return s.data={message:e,action:t},s.announcementMessage===e&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,s=ye.create({parent:i||this._injector,providers:[{provide:w,useValue:t}]}),l=new p(this.snackBarContainerComponent,t.viewContainerRef,s),m=e.attach(l);return m.instance.snackBarConfig=t,m.instance}_attach(e,t){let i=u(u(u({},new w),this._defaultConfig),t),s$2=this._createOverlay(i),l=this._attachSnackBarContainer(s$2,i),m=new A(l,s$2);if(e instanceof Dr){let p=new s(e,null,{$implicit:i.data,snackBarRef:m});m.instance=l.attachTemplatePortal(p)}else{let f=new p(e,void 0,this._createInjector(i,m));m.instance=l.attachComponentPortal(f).instance}return this._breakpointObserver.observe(ih.HandsetPortrait).pipe(Pg(s$2.detachments())).subscribe(p=>{s$2.overlayElement.classList.toggle(this.handsetCssClass,p.matches)}),i.announcementMessage&&l._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(m,i),this._openedSnackBarRef=m,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new D;t.direction=e.direction;let i=It(this._injector),s=e.direction===`rtl`,l=e.horizontalPosition===`left`||e.horizontalPosition===`start`&&!s||e.horizontalPosition===`end`&&s,m=!l&&e.horizontalPosition!==`center`;return l?i.left(`0`):m?i.right(`0`):i.centerHorizontally(),e.verticalPosition===`top`?i.top(`0`):i.bottom(`0`),t.positionStrategy=i,t.disableAnimations=this._animationsDisabled,ot(this._injector,t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return ye.create({parent:i||this._injector,providers:[{provide:A,useValue:t},{provide:Be,useValue:e.data}]})}static ɵfac=function(t){return new(t||n)};static ɵprov=Yt({token:n,factory:n.ɵfac})}return n})();function Xe(n,c){if(n&1&&$D(0),n&2){let e=c.index;Gc(` `,e+1,` `)}}function Ye(n,c){if(n&1&&$D(0),n&2){let e=c.index;Gc(` `,e+1,` `)}}function Je(n,c){if(n&1&&$D(0),n&2){let e=c.index;Gc(` `,e+1,` `)}}function et(n,c){n&1&&$D(0,`Download Source Code`)}function tt(n,c){n&1&&$D(0,`Install ESP32 Support`)}function nt(n,c){n&1&&$D(0,`Install M5Cardputer Library`)}function it(n,c){n&1&&$D(0,`Select the Board`)}function at(n,c){n&1&&$D(0,`Select the Port`)}var Re=class n{constructor(c,e){this.breadcrumbService=c;this.snackBar=e;this.breadcrumbService.setBreadcrumbs([{label:`Home`,url:`/home`},{label:`Premium Features`,url:`/premium`},{label:`Firmware`,url:`/premium/firmware`}])}breadcrumbService;snackBar;M5STACK_CARDPUTER_STORE=`https://shop.m5stack.com/products/m5stack-cardputer-adv-version-esp32-s3`;M5STACK_UNITS_STORE=`https://shop.m5stack.com/collections/unit`;downloadRepo(){return z$1(this,null,function*(){let c=O.FIRMWARE_DOWNLOAD,e=yield Ae.getUri({directory:t.Documents,path:`cteno-firmware.zip`}),t$1=yield Ce.downloadFile({url:c,path:e.uri,progress:!0});if(typeof t$1.path==`string`){let i=t$1.path.replace(`file://`,``);this.snackBar.dismiss(),this.snackBar.open(`Downloaded to: ${i}`,`Open`,{duration:5e3,panelClass:`snackbar-container`}).onAction().subscribe(()=>{t$1.path&&this.openFile(t$1.path)})}})}openFile(c){return z$1(this,null,function*(){try{yield Me.share({title:`Cteno Firmware`,files:[c],dialogTitle:`Open firmware file`})}catch(e){console.error(`Unable to open file:`,e)}})}openLink(c){return z$1(this,null,function*(){yield Te.open({url:c})})}DunderLabApp=O;static ɵfac=function(e){return new(e||n)(Ar(s$1),Ar(De))};static ɵcmp=DE({type:n,selectors:[[`app-services`]],decls:119,vars:5,consts:[[`stepper`,``],[1,`spectrum-background`,`spectrum-background-full`],[1,`main-container`],[1,`app-container`],[1,`align-center`,`mat-font-display-sm`,`medium`],[1,`align-center`,`mat-font-title-lg`,`margin-bottom-large`],[1,`no-margin-bottom`,`mat-font-title-lg`,`medium`],[1,`flex-row`,`flex-wrap`],[`matButton`,`filled`,3,`click`],[`iconPositionEnd`,``],[`copyLabel`,`Copy Store Link`,3,`copyText`],[1,`no-margin-bottom`,`mat-font-title-lg`,`medium`,`margin-top-extra-large`],[`src`,`/assets/images/hardware/units/units_diagram.svg`,1,`width-100`,`margin-y-medium`],[`matButton`,`filled`,3,`routerLink`],[`orientation`,`vertical`,`id`,`arduino-setup-stepper`,3,`linear`],[`matStepperIcon`,`number`],[`matStepperIcon`,`edit`],[`matStepperIcon`,`done`],[`matStepLabel`,``],[1,`step-content`],[`copyLabel`,`Copy Repository URL`,3,`copyText`]],template:function(e,t){e&1&&(Vp(0,`div`,1),Ei(1,`div`,2)(2,`div`,3)(3,`h1`,4),$D(4,`Synchronization Device`),Bc(),Ei(5,`h2`,5),$D(6,` Download the firmware and prepare your ESP32 for precise event synchronization. `),Bc(),Ei(7,`h2`,6),$D(8,`Get the M5Stack Cardputer`),Bc(),Ei(9,`p`),$D(10,` The `),Ei(11,`b`),$D(12,`M5Stack Cardputer`),Bc(),$D(13,` is the hardware platform used to run the synchronization firmware. It provides the connectivity and interfaces required to synchronize experimental events with your recording system. You can purchase the Cardputer and compatible modules directly from the official M5Stack store, where you can also find the required accessories and hardware documentation. `),Bc(),Ei(14,`div`,7)(15,`button`,8),Wp(`click`,function(){return t.openLink(t.M5STACK_CARDPUTER_STORE)}),$D(16,` Buy M5Stack Cardputer `),Ei(17,`mat-icon`,9),$D(18,`open_in_new`),Bc()(),Vp(19,`app-copy-button`,10),Bc(),Ei(20,`h2`,11),$D(21,` Optional M5Stack Modules `),Bc(),Ei(22,`p`),$D(23,` The `),Ei(24,`b`),$D(25,`M5Stack Cardputer`),Bc(),$D(26,` can be extended with additional modules depending on the requirements of your experiment. Different modules provide additional interfaces and connectivity options that can be used to adapt the synchronization device to your specific experimental setup. Select the modules that match the trigger, communication, or integration requirements of your experiment. `),Bc(),Ei(27,`div`,7)(28,`button`,8),Wp(`click`,function(){return t.openLink(t.M5STACK_UNITS_STORE)}),$D(29,` Buy M5Stack Units `),Ei(30,`mat-icon`,9),$D(31,`open_in_new`),Bc()(),Vp(32,`app-copy-button`,10),Bc(),Ei(33,`h2`,11),$D(34,`Hardware Setup`),Bc(),Ei(35,`p`),$D(36,` The diagram below shows a typical hardware configuration for the synchronization device. Depending on your experiment, you can select and connect the appropriate `),Ei(37,`b`),$D(38,`M5Stack Modules`),Bc(),$D(39,` to provide the required trigger and communication interfaces. Follow the steps below to configure the firmware and prepare your device. `),Bc(),Vp(40,`img`,12),Ei(41,`button`,13),$D(42,` Manage Hardware Modules `),Bc(),Ei(43,`h2`,11),$D(44,` Firmware Setup Guide `),Bc(),Ei(45,`mat-stepper`,14,0),Ap(47,Xe,1,1,`ng-template`,15)(48,Ye,1,1,`ng-template`,16)(49,Je,1,1,`ng-template`,17),Ei(50,`mat-step`),Ap(51,et,1,0,`ng-template`,18),Ei(52,`div`,19)(53,`h3`),$D(54,`Download the Firmware Source Code`),Bc(),Ei(55,`p`),$D(56,` Download the firmware source code from the project repository and open the `),Ei(57,`strong`),$D(58,`main.ino`),Bc(),$D(59,` file in the Arduino IDE. `),Bc(),Ei(60,`div`,7)(61,`button`,8),Wp(`click`,function(){return t.downloadRepo()}),$D(62,` Download Source Code From Repository `),Bc(),Vp(63,`app-copy-button`,20),Bc()()(),Ei(64,`mat-step`),Ap(65,tt,1,0,`ng-template`,18),Ei(66,`div`,19)(67,`h3`),$D(68,`Install the ESP32 Board Package`),Bc(),Ei(69,`p`),$D(70,` Open `),Ei(71,`strong`),$D(72,`Tools > Board Manager...`),Bc(),$D(73,` and search for `),Ei(74,`strong`),$D(75,`esp32`),Bc(),$D(76,`. Install `),Ei(77,`strong`),$D(78,`esp32 by Espressif Systems`),Bc(),$D(79,`. The installation may take a few minutes. This guide uses version `),Ei(80,`strong`),$D(81,`3.3.11`),Bc(),$D(82,`. `),Bc()()(),Ei(83,`mat-step`),Ap(84,nt,1,0,`ng-template`,18),Ei(85,`div`,19)(86,`h3`),$D(87,`Install the M5Cardputer Library`),Bc(),Ei(88,`p`),$D(89,` Open `),Ei(90,`strong`),$D(91,`Sketch > Include Library > Manage Libraries...`),Bc(),$D(92,` and search for `),Ei(93,`strong`),$D(94,`M5Cardputer`),Bc(),$D(95,`. Install the library and verify that it is installed and up to date. `),Bc()()(),Ei(96,`mat-step`),Ap(97,it,1,0,`ng-template`,18),Ei(98,`div`,19)(99,`h3`),$D(100,`Select the M5Stack Cardputer Board`),Bc(),Ei(101,`p`),$D(102,` Open `),Ei(103,`strong`),$D(104,`Tools > Board`),Bc(),$D(105,` and select the recommended board: `),Ei(106,`strong`),$D(107,`M5Stack-Cardputer`),Bc(),$D(108,`. `),Bc()()(),Ei(109,`mat-step`),Ap(110,at,1,0,`ng-template`,18),Ei(111,`div`,19)(112,`h3`),$D(113,`Select the Device Port`),Bc(),Ei(114,`p`),$D(115,` Open `),Ei(116,`strong`),$D(117,`Tools > Port`),Bc(),$D(118,` and select the port associated with your connected ESP32 device. `),Bc()()()()()()),e&2&&(Uv(19),jp(`copyText`,t.M5STACK_CARDPUTER_STORE),Uv(13),jp(`copyText`,t.M5STACK_UNITS_STORE),Uv(9),jp(`routerLink`,`/hardware-admin/modules`),Uv(4),jp(`linear`,!0),Uv(18),jp(`copyText`,t.DunderLabApp.FIRMWARE_REPO))},dependencies:[Pn,At,me,Ht,Ft,f,Rn,wt,si],styles:[`.module-image[_ngcontent-%COMP%]{background-image:url(/assets/images/hardware/units/units_diagram.svg);background-size:contain;background-repeat:no-repeat;background-position:center;width:100%;aspect-ratio:1}`]})};export{Re as FirmwareComponent};