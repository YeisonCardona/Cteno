import{n as v$1,t as u$1}from"./chunk-BaccXEZv.js";import{C as Hf,E as IE,J as Pe,L as Ly,Pt as Zf,Qn as tp,Qt as ei,S as HI,X as Pi,cr as y$1,ct as SI,en as fc,er as up,et as Qf,fr as yp,gr as zf,jt as Z,l as Bl,mt as UI,or as xI,ot as S,pn as iI,q as Pd,r as $f,rn as gh,tn as ge$1,u as CE,vt as Vt,w as Hl,xn as kn,zn as pl,zt as aI}from"./chunk-Cm9TeinW.js";import{E as Ub,O as Uv,P as ds,f as Ka,l as Er,p as Li,w as St,z as kv}from"./main.js";import{i as k,t as I}from"./chunk-Bc6uwWGy.js";import{a as Rt,c as dn,d as oe,f as re$1,r as Mt}from"./chunk-Bl1CGgqK.js";import{t as O}from"./chunk-g_0yhVdO.js";function ue(s,l){}var re=`_mat-bottom-sheet-enter`;var me=`_mat-bottom-sheet-exit`;var fe=(()=>{class s extends Rt{_breakpointSubscription;_animationsDisabled=St();_animationState=`void`;_animationStateChanged=new Pe;_destroyed=!1;constructor(){super();let n=y$1(Li);this._breakpointSubscription=n.observe([Ub.Medium,Ub.Large,Ub.XLarge]).subscribe(()=>{let a=this._elementRef.nativeElement.classList;a.toggle(`mat-bottom-sheet-container-medium`,n.isMatched(Ub.Medium)),a.toggle(`mat-bottom-sheet-container-large`,n.isMatched(Ub.Large)),a.toggle(`mat-bottom-sheet-container-xlarge`,n.isMatched(Ub.XLarge))})}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(re))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute(`mat-exit`,``),this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(me))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(n){this._ngZone.run(()=>{this._handleAnimationEvent(!0,n,this._elementRef.nativeElement),setTimeout(()=>this._handleAnimationEvent(!1,n,this._elementRef.nativeElement))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(n,a,o){if(o===this._elementRef.nativeElement){let r=a===re;(r||a===me)&&this._animationStateChanged.emit({toState:r?`visible`:`hidden`,phase:n?`start`:`done`})}}static ɵfac=function(a){return new(a||s)};static ɵcmp=iI({type:s,selectors:[[`mat-bottom-sheet-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-bottom-sheet-container`],hostVars:9,hostBindings:function(a,o){a&1&&tp(`animationstart`,function(m){return o._handleAnimationEvent(!0,m.animationName,m.target)})(`animationend`,function(m){return o._handleAnimationEvent(!1,m.animationName,m.target)})(`animationcancel`,function(m){return o._handleAnimationEvent(!1,m.animationName,m.target)}),a&2&&(zf(`role`,o._config.role)(`aria-modal`,o._config.ariaModal)(`aria-label`,o._config.ariaLabel),up(`mat-bottom-sheet-container-animations-enabled`,!o._animationsDisabled)(`mat-bottom-sheet-container-enter`,o._animationState===`visible`)(`mat-bottom-sheet-container-exit`,o._animationState===`hidden`))},features:[Hf],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(a,o){a&1&&$f(0,ue,0,0,`ng-template`,0)},dependencies:[I],styles:[`@keyframes _mat-bottom-sheet-enter {
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
`],encapsulation:2,changeDetection:1})}return s})();var be=new S(`MatBottomSheetData`);var v=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;height=``;minHeight;maxHeight;bindings};var u=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new Z;_result;_closeFallbackTimeout;constructor(l,n,a){this._ref=l,this.containerInstance=a,this.disableClose=n.disableClose,a._animationStateChanged.pipe(kn(o=>o.phase===`done`&&o.toState===`visible`),Pi(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),a._animationStateChanged.pipe(kn(o=>o.phase===`done`&&o.toState===`hidden`),Pi(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),l.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),gh(this.backdropClick(),this.keydownEvents().pipe(kn(o=>o.keyCode===27))).subscribe(o=>{!this.disableClose&&(o.type!==`keydown`||!ds(o))&&(o.preventDefault(),this.dismiss())})}dismiss(l){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(kn(n=>n.phase===`start`),Pi(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=l,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}};var ge=new S(`mat-bottom-sheet-default-options`);var C=(()=>{class s{_injector=y$1(ge$1);_parentBottomSheet=y$1(s,{optional:!0,skipSelf:!0});_animationsDisabled=St();_defaultOptions=y$1(ge,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=y$1(Mt);get _openedBottomSheetRef(){let n=this._parentBottomSheet;return n?n._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(n){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=n:this._bottomSheetRefAtThisLevel=n}open(n,a){let o=u$1(u$1({},this._defaultOptions||new v),a),r;return this._dialog.open(n,v$1(u$1({},o),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:`100%`,container:fe,scrollStrategy:o.scrollStrategy||oe(this._injector),positionStrategy:re$1(this._injector).centerHorizontally().bottom(`0`),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:r}),providers:(m,ye,pe)=>(r=new u(m,o,pe),[{provide:u,useValue:r},{provide:be,useValue:o.data}])})),r.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===r&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>r.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):r.containerInstance.enter(),this._openedBottomSheetRef=r,r}dismiss(n){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(n)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static ɵfac=function(a){return new(a||s)};static ɵprov=Vt({token:s,factory:s.ɵfac})}return s})();var ce=(()=>{class s{static ɵfac=function(a){return new(a||s)};static ɵmod=aI({type:s});static ɵinj=pl({providers:[C],imports:[dn,k,Er]})}return s})();var y=class s{_bottomSheetRef=y$1(u);acceptCookies(){this._bottomSheetRef.dismiss(),localStorage.setItem(`cteno-cookie-consent`,`accepted`)}static ɵfac=function(n){return new(n||s)};static ɵcmp=iI({type:s,selectors:[[`app-cookies-banner`]],decls:9,vars:0,consts:[[1,`flex-row`,`flex-row-right`],[`matButton`,`tonal`,`routerLink`,`/cookies`],[`matButton`,`filled`,3,`click`]],template:function(n,a){n&1&&(ei(0,`p`),IE(1,` We use technical cookies and browser storage to maintain your session and improve your experience.`),Zf(2,`br`),IE(3,` No tracking cookies are used.
`),fc(),ei(4,`div`,0)(5,`button`,1),IE(6,`Learn more`),fc(),ei(7,`button`,2),tp(`click`,function(){return a.acceptCookies()}),IE(8,`Accept`),fc()())},dependencies:[Uv,kv,Ka],encapsulation:2})};function Se(s,l){if(s&1){let n=HI();ei(0,`button`,3),tp(`click`,function(){Hl(n);return Bl(UI().acceptCookies())}),IE(1,`Accept Cookies`),fc()}}var de=class s{cookiesBanner=y$1(C);cookiesAccepted=localStorage.getItem(`cteno-cookie-consent`)===`accepted`;ngOnInit(){this.cookiesBanner.dismiss(y)}acceptCookies(){localStorage.setItem(`cteno-cookie-consent`,`accepted`)}DunderLabApp=O;static ɵfac=function(n){return new(n||s)};static ɵcmp=iI({type:s,selectors:[[`app-cookies`]],decls:85,vars:4,consts:[[1,`cookie-policy`,`app-container`,`container-spacer`],[3,`href`],[`matButton`,`filled`],[`matButton`,`filled`,3,`click`]],template:function(n,a){n&1&&(ei(0,`div`,0)(1,`h1`),IE(2,`Cookie Policy`),fc(),ei(3,`p`),IE(4,`Last updated: July 12, 2025`),fc(),ei(5,`section`)(6,`h2`),IE(7,`What Are Cookies`),fc(),ei(8,`p`),IE(9,` Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and are essential for certain features to work properly. `),fc()(),ei(10,`section`)(11,`h2`),IE(12,`How We Use Cookies`),fc(),ei(13,`p`),IE(14,`We use cookies for the following purposes:`),fc(),ei(15,`ul`)(16,`li`),IE(17,`Authentication and security`),fc(),ei(18,`li`),IE(19,`User preferences and settings`),fc(),ei(20,`li`),IE(21,`Analytics and performance monitoring`),fc(),ei(22,`li`),IE(23,`Feature functionality`),fc(),ei(24,`li`),IE(25,`Session management`),fc()()(),ei(26,`section`)(27,`h2`),IE(28,`Types of Cookies We Use`),fc(),ei(29,`ul`)(30,`li`)(31,`strong`),IE(32,`Essential Cookies:`),fc(),IE(33,` Required for basic functionality and security`),fc(),ei(34,`li`)(35,`strong`),IE(36,`Functional Cookies:`),fc(),IE(37,` Remember your preferences and settings`),fc(),ei(38,`li`)(39,`strong`),IE(40,`Analytics Cookies:`),fc(),IE(41,` Help us understand how users interact with our application `),fc(),ei(42,`li`)(43,`strong`),IE(44,`Authentication Cookies:`),fc(),IE(45,` Manage your login session and security`),fc()()(),ei(46,`section`)(47,`h2`),IE(48,`LocalStorage and SessionStorage`),fc(),ei(49,`p`),IE(50,` Our app also uses the browser's LocalStorage and SessionStorage to persist key settings such as: `),fc(),ei(51,`ul`)(52,`li`),IE(53,`Hardware connection mode`),fc(),ei(54,`li`),IE(55,`Selected experiment configurations`),fc(),ei(56,`li`),IE(57,`Tier/license level`),fc()(),ei(58,`p`),IE(59,` This data is stored locally on your device and is not transmitted unless you explicitly submit it. `),fc()(),ei(60,`section`)(61,`h2`),IE(62,`Cookie Management`),fc(),ei(63,`p`),IE(64,` You can control and delete cookies through your browser settings. However, doing so may affect the availability of some functionality. `),fc()(),ei(65,`section`)(66,`h2`),IE(67,`Your Consent`),fc(),ei(68,`p`),IE(69,` By using our application, you consent to the use of cookies and browser storage as described in this policy. You may withdraw your consent at any time by clearing your browser data or adjusting your settings. `),fc()(),ei(70,`section`)(71,`h2`),IE(72,`Changes to This Policy`),fc(),ei(73,`p`),IE(74,` We may update our Cookie Policy from time to time. Any changes will be reflected on this page with an updated revision date. `),fc()(),ei(75,`section`)(76,`h2`),IE(77,`Contact Us`),fc(),ei(78,`p`),IE(79,`If you have any questions about our use of cookies, please contact us at:`),fc(),ei(80,`p`),IE(81,` Email: `),ei(82,`a`,1),IE(83),fc()()(),SI(84,Se,2,0,`button`,2),fc()),n&2&&(Ly(82),Qf(`href`,CE(`mailto:`,a.DunderLabApp.EMAIL),Pd),Ly(),yp(a.DunderLabApp.EMAIL),Ly(),xI(a.cookiesAccepted?-1:84))},dependencies:[ce,kv],encapsulation:2})};export{de as CookiesComponent};