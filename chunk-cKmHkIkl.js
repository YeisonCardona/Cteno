import{n as v$1,t as u$1}from"./chunk-Beo1kjUY.js";import{Dt as Tf,Et as Sp,Ft as Ue,I as Fp,K as I,O as Ei,On as dn,Pn as fD,Q as K,Qr as zE,Rt as Uv,Vt as Vp,Wt as Wp,Xt as YD,Y as Ig,Yn as jp,Yr as ye,at as N,cn as _u,cr as oD,d as Ap,dn as ah,en as Yt,g as CE,ht as QE,jn as eh,jr as un,p as Bc,qt as Xl,t as $D,vn as bu,x as DE}from"./chunk-CdnfGufr.js";import{A as bn,Q as vi,X as uh,k as bh,z as ih}from"./chunk-CIPJ1y8p.js";import{I as k,J as Tn,P as H,T as O,c as It,d as Vt,q as Rn,r as si}from"./main.js";import{a as pe,i as le,t as Me}from"./chunk-D3pXAYib.js";function ue(s,l){}var re=`_mat-bottom-sheet-enter`;var me=`_mat-bottom-sheet-exit`;var fe=(()=>{class s extends le{_breakpointSubscription;_animationsDisabled=uh();_animationState=`void`;_animationStateChanged=new Ue;_destroyed=!1;constructor(){super();let n=I(bn);this._breakpointSubscription=n.observe([ih.Medium,ih.Large,ih.XLarge]).subscribe(()=>{let a=this._elementRef.nativeElement.classList;a.toggle(`mat-bottom-sheet-container-medium`,n.isMatched(ih.Medium)),a.toggle(`mat-bottom-sheet-container-large`,n.isMatched(ih.Large)),a.toggle(`mat-bottom-sheet-container-xlarge`,n.isMatched(ih.XLarge))})}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(re))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute(`mat-exit`,``),this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(me))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(n){this._ngZone.run(()=>{this._handleAnimationEvent(!0,n,this._elementRef.nativeElement),setTimeout(()=>this._handleAnimationEvent(!1,n,this._elementRef.nativeElement))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(n,a,o){if(o===this._elementRef.nativeElement){let r=a===re;(r||a===me)&&this._animationStateChanged.emit({toState:r?`visible`:`hidden`,phase:n?`start`:`done`})}}static ɵfac=function(a){return new(a||s)};static ɵcmp=DE({type:s,selectors:[[`mat-bottom-sheet-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-bottom-sheet-container`],hostVars:9,hostBindings:function(a,o){a&1&&Wp(`animationstart`,function(m){return o._handleAnimationEvent(!0,m.animationName,m.target)})(`animationend`,function(m){return o._handleAnimationEvent(!1,m.animationName,m.target)})(`animationcancel`,function(m){return o._handleAnimationEvent(!1,m.animationName,m.target)}),a&2&&(Fp(`role`,o._config.role)(`aria-modal`,o._config.ariaModal)(`aria-label`,o._config.ariaLabel),eh(`mat-bottom-sheet-container-animations-enabled`,!o._animationsDisabled)(`mat-bottom-sheet-container-enter`,o._animationState===`visible`)(`mat-bottom-sheet-container-exit`,o._animationState===`hidden`))},features:[Sp],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(a,o){a&1&&Ap(0,ue,0,0,`ng-template`,0)},dependencies:[k],styles:[`@keyframes _mat-bottom-sheet-enter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
}
@keyframes _mat-bottom-sheet-exit {
  from {
    transform: none;
  }
  to {
    transform: translateY(100%);
  }
}
.mat-bottom-sheet-container {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  min-width: 100vw;
  box-sizing: border-box;
  display: block;
  outline: 0;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  background: var(--%NS%mat-bottom-sheet-container-background-color, var(--%NS%mat-sys-surface-container-low));
  color: var(--%NS%mat-bottom-sheet-container-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-bottom-sheet-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-bottom-sheet-container-text-size, var(--%NS%mat-sys-body-large-size));
  line-height: var(--%NS%mat-bottom-sheet-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-weight: var(--%NS%mat-bottom-sheet-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-bottom-sheet-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
@media (forced-colors: active) {
  .mat-bottom-sheet-container {
    outline: 1px solid;
  }
}

.mat-bottom-sheet-container-animations-enabled {
  transform: translateY(100%);
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {
  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {
  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;
}

.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {
  border-top-left-radius: var(--%NS%mat-bottom-sheet-container-shape, 28px);
  border-top-right-radius: var(--%NS%mat-bottom-sheet-container-shape, 28px);
}

.mat-bottom-sheet-container-medium {
  min-width: 384px;
  max-width: calc(100vw - 128px);
}

.mat-bottom-sheet-container-large {
  min-width: 512px;
  max-width: calc(100vw - 256px);
}

.mat-bottom-sheet-container-xlarge {
  min-width: 576px;
  max-width: calc(100vw - 384px);
}
`],encapsulation:2,changeDetection:1})}return s})();var be=new N(`MatBottomSheetData`);var v=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;height=``;minHeight;maxHeight;bindings};var u=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new K;_result;_closeFallbackTimeout;constructor(l,n,a){this._ref=l,this.containerInstance=a,this.disableClose=n.disableClose,a._animationStateChanged.pipe(un(o=>o.phase===`done`&&o.toState===`visible`),dn(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),a._animationStateChanged.pipe(un(o=>o.phase===`done`&&o.toState===`hidden`),dn(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),l.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),Ig(this.backdropClick(),this.keydownEvents().pipe(un(o=>o.keyCode===27))).subscribe(o=>{!this.disableClose&&(o.type!==`keydown`||!vi(o))&&(o.preventDefault(),this.dismiss())})}dismiss(l){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(un(n=>n.phase===`start`),dn(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=l,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}};var ge=new N(`mat-bottom-sheet-default-options`);var C=(()=>{class s{_injector=I(ye);_parentBottomSheet=I(s,{optional:!0,skipSelf:!0});_animationsDisabled=uh();_defaultOptions=I(ge,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=I(pe);get _openedBottomSheetRef(){let n=this._parentBottomSheet;return n?n._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(n){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=n:this._bottomSheetRefAtThisLevel=n}open(n,a){let o=u$1(u$1({},this._defaultOptions||new v),a),r;return this._dialog.open(n,v$1(u$1({},o),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:`100%`,container:fe,scrollStrategy:o.scrollStrategy||Vt(this._injector),positionStrategy:It(this._injector).centerHorizontally().bottom(`0`),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:r}),providers:(m,ye,pe)=>(r=new u(m,o,pe),[{provide:u,useValue:r},{provide:be,useValue:o.data}])})),r.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===r&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>r.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):r.containerInstance.enter(),this._openedBottomSheetRef=r,r}dismiss(n){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(n)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static ɵfac=function(a){return new(a||s)};static ɵprov=Yt({token:s,factory:s.ɵfac})}return s})();var ce=(()=>{class s{static ɵfac=function(a){return new(a||s)};static ɵmod=CE({type:s});static ɵinj=Xl({providers:[C],imports:[Me,H,bh]})}return s})();var y=class s{_bottomSheetRef=I(u);acceptCookies(){this._bottomSheetRef.dismiss(),localStorage.setItem(`cteno-cookie-consent`,`accepted`)}static ɵfac=function(n){return new(n||s)};static ɵcmp=DE({type:s,selectors:[[`app-cookies-banner`]],decls:9,vars:0,consts:[[1,`flex-row`,`flex-row-right`],[`matButton`,`tonal`,`routerLink`,`/cookies`],[`matButton`,`filled`,3,`click`]],template:function(n,a){n&1&&(Ei(0,`p`),$D(1,` We use technical cookies and browser storage to maintain your session and improve your experience.`),Vp(2,`br`),$D(3,` No tracking cookies are used.
`),Bc(),Ei(4,`div`,0)(5,`button`,1),$D(6,`Learn more`),Bc(),Ei(7,`button`,2),Wp(`click`,function(){return a.acceptCookies()}),$D(8,`Accept`),Bc()())},dependencies:[Tn,Rn,si],encapsulation:2})};function Se(s,l){if(s&1){let n=oD();Ei(0,`button`,3),Wp(`click`,function(){bu(n);return _u(fD().acceptCookies())}),$D(1,`Accept Cookies`),Bc()}}var de=class s{cookiesBanner=I(C);cookiesAccepted=localStorage.getItem(`cteno-cookie-consent`)===`accepted`;ngOnInit(){this.cookiesBanner.dismiss(y)}acceptCookies(){localStorage.setItem(`cteno-cookie-consent`,`accepted`)}DunderLabApp=O;static ɵfac=function(n){return new(n||s)};static ɵcmp=DE({type:s,selectors:[[`app-cookies`]],decls:85,vars:4,consts:[[1,`cookie-policy`,`app-container`,`container-spacer`],[3,`href`],[`matButton`,`filled`],[`matButton`,`filled`,3,`click`]],template:function(n,a){n&1&&(Ei(0,`div`,0)(1,`h1`),$D(2,`Cookie Policy`),Bc(),Ei(3,`p`),$D(4,`Last updated: July 12, 2025`),Bc(),Ei(5,`section`)(6,`h2`),$D(7,`What Are Cookies`),Bc(),Ei(8,`p`),$D(9,` Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and are essential for certain features to work properly. `),Bc()(),Ei(10,`section`)(11,`h2`),$D(12,`How We Use Cookies`),Bc(),Ei(13,`p`),$D(14,`We use cookies for the following purposes:`),Bc(),Ei(15,`ul`)(16,`li`),$D(17,`Authentication and security`),Bc(),Ei(18,`li`),$D(19,`User preferences and settings`),Bc(),Ei(20,`li`),$D(21,`Analytics and performance monitoring`),Bc(),Ei(22,`li`),$D(23,`Feature functionality`),Bc(),Ei(24,`li`),$D(25,`Session management`),Bc()()(),Ei(26,`section`)(27,`h2`),$D(28,`Types of Cookies We Use`),Bc(),Ei(29,`ul`)(30,`li`)(31,`strong`),$D(32,`Essential Cookies:`),Bc(),$D(33,` Required for basic functionality and security`),Bc(),Ei(34,`li`)(35,`strong`),$D(36,`Functional Cookies:`),Bc(),$D(37,` Remember your preferences and settings`),Bc(),Ei(38,`li`)(39,`strong`),$D(40,`Analytics Cookies:`),Bc(),$D(41,` Help us understand how users interact with our application `),Bc(),Ei(42,`li`)(43,`strong`),$D(44,`Authentication Cookies:`),Bc(),$D(45,` Manage your login session and security`),Bc()()(),Ei(46,`section`)(47,`h2`),$D(48,`LocalStorage and SessionStorage`),Bc(),Ei(49,`p`),$D(50,` Our app also uses the browser's LocalStorage and SessionStorage to persist key settings such as: `),Bc(),Ei(51,`ul`)(52,`li`),$D(53,`Hardware connection mode`),Bc(),Ei(54,`li`),$D(55,`Selected experiment configurations`),Bc(),Ei(56,`li`),$D(57,`Tier/license level`),Bc()(),Ei(58,`p`),$D(59,` This data is stored locally on your device and is not transmitted unless you explicitly submit it. `),Bc()(),Ei(60,`section`)(61,`h2`),$D(62,`Cookie Management`),Bc(),Ei(63,`p`),$D(64,` You can control and delete cookies through your browser settings. However, doing so may affect the availability of some functionality. `),Bc()(),Ei(65,`section`)(66,`h2`),$D(67,`Your Consent`),Bc(),Ei(68,`p`),$D(69,` By using our application, you consent to the use of cookies and browser storage as described in this policy. You may withdraw your consent at any time by clearing your browser data or adjusting your settings. `),Bc()(),Ei(70,`section`)(71,`h2`),$D(72,`Changes to This Policy`),Bc(),Ei(73,`p`),$D(74,` We may update our Cookie Policy from time to time. Any changes will be reflected on this page with an updated revision date. `),Bc()(),Ei(75,`section`)(76,`h2`),$D(77,`Contact Us`),Bc(),Ei(78,`p`),$D(79,`If you have any questions about our use of cookies, please contact us at:`),Bc(),Ei(80,`p`),$D(81,` Email: `),Ei(82,`a`,1),$D(83),Bc()()(),zE(84,Se,2,0,`button`,2),Bc()),n&2&&(Uv(82),jp(`href`,YD(`mailto:`,a.DunderLabApp.EMAIL),Tf),Uv(),ah(a.DunderLabApp.EMAIL),Uv(),QE(a.cookiesAccepted?-1:84))},dependencies:[ce,Rn],encapsulation:2})};export{de as CookiesComponent};