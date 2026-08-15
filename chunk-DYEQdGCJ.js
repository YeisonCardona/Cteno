import{$ as KE,Bn as gD,Bt as Vm,E as ED,Et as Sp,Ft as Ue,I as Fp,Jr as yD,Jt as Xp,K as I,Kn as ig,M as F,Mn as ew,Nn as f0,Nr as uw,O as Ei,Pn as fD,Pr as vD,Q as K,Qr as zE,Rt as Uv,Vt as Vp,Wn as hD,Wt as Wp,X as JE,Xt as YD,Yn as jp,Zt as YE,_t as Qp,at as N,br as qo,bt as Rp,cn as _u,cr as oD,ct as Og,d as Ap,dn as ah,dr as oy,dt as Pi,ei as zp,en as Yt,fn as ai,g as CE,hr as pw,ht as QE,jn as eh,m as Be,n as $a,o as $p,on as _E,or as nw,p as Bc,pt as Q,qt as Xl,rt as Lg,s as AD,sn as _r,sr as o0,t as $D,ur as ow,ut as Pg,vn as bu,w as Dr,wn as d0,x as DE,yn as c0}from"./chunk-CdnfGufr.js";import{C as Ye$1,P as fo,Q as vi,X as uh,Y as ss,k as bh,n as $o,o as Cn,q as oi,s as Ct$1,t as $,y as Sn}from"./chunk-CIPJ1y8p.js";import{I as k,P as H,Q as xt$1,R as s,S as yt$1,Y as Wt,Z as wt$2,x as wt$1}from"./main.js";import{s as f}from"./chunk-Pe_ACDEh.js";import{t as o}from"./chunk-BUtUzqV-.js";var it=[`*`];function at(t,r){t&1&&gD(0)}var de=(()=>{class t{_elementRef=I(_r);focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(n){return new(n||t)};static ɵdir=_E({type:t,selectors:[[``,`cdkStepHeader`,``]],hostAttrs:[`role`,`tab`]})}return t})();var ce=(()=>{class t{template=I(Dr);static ɵfac=function(n){return new(n||t)};static ɵdir=_E({type:t,selectors:[[``,`cdkStepLabel`,``]]})}return t})();var D={NUMBER:`number`,EDIT:`edit`,DONE:`done`,ERROR:`error`};var rt=new N(`STEPPER_GLOBAL_OPTIONS`);var J=(()=>{class t{_stepperOptions;_stepper=I(X);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=qo(!1);interactedStream=new Ue;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=qo(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=qo(!0);optional=!1;get completed(){let e=this._completedOverride(),n=this._interacted();return e??(n&&(!this.stepControl||ot(this.stepControl)))}set completed(e){this._completedOverride.set(e)}_completedOverride=qo(null);index=qo(-1);isSelected=pw(()=>this._stepper.selectedIndex===this.index());indicatorType=pw(()=>{let e=this.isSelected(),n=this.completed,i=this._state()??D.NUMBER,a=this._editable();return this._showError()&&this.hasError&&!e?D.ERROR:this._displayDefaultIndicatorType?!n||e?D.NUMBER:a?D.EDIT:D.DONE:n&&!e?D.DONE:n&&e?i:a&&e?D.EDIT:i});isNavigable=pw(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){return this._customError()??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=qo(null);_getDefaultError(){return this.interacted&&!!this.stepControl&&Ze(this.stepControl)}constructor(){let e=I(rt,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),lt(this.stepControl))}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static ɵfac=function(n){return new(n||t)};static ɵcmp=DE({type:t,selectors:[[`cdk-step`]],contentQueries:function(n,i,a){if(n&1&&zp(a,ce,5)(a,f,5),n&2){let s;yD(s=vD())&&(i.stepLabel=s.first),yD(s=vD())&&(i._childForms=s)}},viewQuery:function(n,i){if(n&1&&Qp(Dr,7),n&2){let a;yD(a=vD())&&(i.content=a.first)}},inputs:{stepControl:`stepControl`,label:`label`,errorMessage:`errorMessage`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],state:`state`,editable:[2,`editable`,`editable`,d0],optional:[2,`optional`,`optional`,d0],completed:[2,`completed`,`completed`,d0],hasError:[2,`hasError`,`hasError`,d0]},outputs:{interactedStream:`interacted`},exportAs:[`cdkStep`],features:[Vm],ngContentSelectors:it,decls:1,vars:0,template:function(n,i){n&1&&(hD(),Rp(0,at,1,0,`ng-template`))},encapsulation:2})}return t})();var X=(()=>{class t{_dir=I($o,{optional:!0});_changeDetectorRef=I(c0);_elementRef=I(_r);_destroyed=new K;_keyManager;_steps;steps=new ai;_stepHeader;_sortedHeaders=new ai;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=qo(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=qo(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new Ue;selectedIndexChange=new Ue;_groupId=I(Sn).getId(`cdk-stepper-`);get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e===`vertical`)}_orientation=`horizontal`;ngAfterContentInit(){this._steps.changes.pipe(Og(this._steps),Pg(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(n=>n._stepper===this)),this.steps.forEach((n,i)=>n.index.set(i)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Og(this._stepHeader),Pg(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((n,i)=>n._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new Cn(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation===`vertical`),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:ig()).pipe(Og(this._layoutDirection()),Pg(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let n of e)n._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let n=e-this._selectedIndex();return n<0?this._layoutDirection()===`rtl`?`next`:`previous`:n>0?this._layoutDirection()===`rtl`?`previous`:`next`:`current`}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let n=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:n[e],previouslySelectedStep:n[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let n=vi(e),i=e.keyCode,a=this._keyManager;a?.activeItemIndex!=null&&!n&&(i===32||i===13)?(this.selectedIndex=a.activeItemIndex,e.preventDefault()):a?.setFocusOrigin(`keyboard`).onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(n=>{let i=n.stepControl;return(i?Ze(i)||st(i)||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_containsFocus(){let e=this._elementRef.nativeElement,n=fo();return e===n||e.contains(n)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static ɵfac=function(n){return new(n||t)};static ɵdir=_E({type:t,selectors:[[``,`cdkStepper`,``]],contentQueries:function(n,i,a){if(n&1&&zp(a,J,5)(a,de,5),n&2){let s;yD(s=vD())&&(i._steps=s),yD(s=vD())&&(i._stepHeader=s)}},inputs:{linear:[2,`linear`,`linear`,d0],selectedIndex:[2,`selectedIndex`,`selectedIndex`,f0],selected:`selected`,orientation:`orientation`},outputs:{selectionChange:`selectionChange`,selectedIndexChange:`selectedIndexChange`},exportAs:[`cdkStepper`]})}return t})();function ee(t){return typeof t==`function`}function ot(t){return ee(t)?t().valid():t.valid}function Ze(t){return ee(t)?t().invalid():t.invalid}function st(t){return ee(t)?t().pending():t.pending}function lt(t){ee(t)?t().reset():t.reset()}var Ye=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=CE({type:t});static ɵinj=Xl({imports:[bh]})}return t})();var pt=(t,r,e)=>({index:t,active:r,optional:e});function dt(t,r){if(t&1&&$p(0,2),t&2){let e=fD();jp(`ngTemplateOutlet`,e.iconOverrides[e.state])(`ngTemplateOutletContext`,ow(2,pt,e.index,e.active,e.optional))}}function ct(t,r){if(t&1&&(Ei(0,`span`,7),$D(1),Bc()),t&2){let e=fD(2);Uv(),ah(e._getDefaultTextForState(e.state))}}function mt(t,r){if(t&1&&(Ei(0,`span`,8),$D(1),Bc()),t&2){let e=fD(3);Uv(),ah(e._intl.completedLabel)}}function ht(t,r){if(t&1&&(Ei(0,`span`,8),$D(1),Bc()),t&2){let e=fD(3);Uv(),ah(e._intl.editableLabel)}}function ut(t,r){if(t&1&&(zE(0,mt,2,1,`span`,8)(1,ht,2,1,`span`,8),Ei(2,`mat-icon`,7),$D(3),Bc()),t&2){let e=fD(2);QE(e.state===`done`?0:e.state===`edit`?1:-1),Uv(3),ah(e._getDefaultTextForState(e.state))}}function ft(t,r){if(t&1&&zE(0,ct,2,1,`span`,7)(1,ut,4,2),t&2)QE(fD().state===`number`?0:1)}function _t(t,r){t&1&&(Ei(0,`div`,4),$p(1,9),Bc()),t&2&&(Uv(),jp(`ngTemplateOutlet`,r.template))}function vt(t,r){if(t&1&&(Ei(0,`div`,4),$D(1),Bc()),t&2){let e=fD();Uv(),ah(e.label)}}function gt(t,r){if(t&1&&(Ei(0,`div`,5),$D(1),Bc()),t&2){let e=fD();Uv(),ah(e._intl.optionalLabel)}}function bt(t,r){if(t&1&&(Ei(0,`div`,6),$D(1),Bc()),t&2){let e=fD();Uv(),ah(e.errorMessage)}}var Je=[`*`];function yt(t,r){}function xt(t,r){if(t&1&&(gD(0),Ap(1,yt,0,0,`ng-template`,0)),t&2){let e=fD();Uv(),jp(`cdkPortalOutlet`,e._portal)}}var St=[`animatedContainer`];var Xe=t=>({steps:t});var et=t=>({step:t});function Ct(t,r){t&1&&gD(0)}function Mt(t,r){if(t&1&&(Ei(0,`div`,5),$p(1,9)(2,6),Bc()),t&2){let e=fD(2),n=ED(6);Uv(),jp(`ngTemplateOutlet`,e.headerPrefix()),Uv(),jp(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,nw(3,Xe,e.steps))}}function Dt(t,r){if(t&1&&$p(0,6),t&2){let e=fD(2);jp(`ngTemplateOutlet`,ED(6))(`ngTemplateOutletContext`,nw(2,Xe,e.steps))}}function It(t,r){if(t&1&&(Ei(0,`div`,10,2),$p(2,9),Bc()),t&2){let e=r.$implicit,n=r.$index,i=fD(2);AD(`mat-horizontal-stepper-content-`+i._getAnimationDirection(n)),jp(`id`,i._getStepContentId(n)),Fp(`aria-labelledby`,i._getStepLabelId(n))(`inert`,i.selectedIndex===n?null:``),Uv(2),jp(`ngTemplateOutlet`,e.content)}}function Nt(t,r){if(t&1&&(Ei(0,`div`,3),zE(1,Mt,3,5,`div`,5)(2,Dt,1,4,`ng-container`,6),Ei(3,`div`,7),KE(4,It,3,6,`div`,8,YE),Bc()()),t&2){let e=fD();Uv(),QE(e.headerPrefix()?1:2),Uv(3),JE(e.steps)}}function Et(t,r){if(t&1&&$p(0,9),t&2)jp(`ngTemplateOutlet`,fD(2).headerPrefix())}function kt(t,r){if(t&1&&(Ei(0,`div`,11),$p(1,6),Ei(2,`div`,12,2)(4,`div`,13)(5,`div`,14),$p(6,9),Bc()()()()),t&2){let e=r.$implicit,n=r.$index,i=r.$index,a=r.$count,s=fD(2),te=ED(4);Uv(),jp(`ngTemplateOutlet`,te)(`ngTemplateOutletContext`,nw(11,et,e)),Uv(),eh(`mat-stepper-vertical-line`,i!==a-1)(`mat-vertical-content-container-active`,s.selectedIndex===n),Fp(`inert`,s.selectedIndex===n?null:``)(`aria-label`,s.ariaLabel),Uv(2),jp(`id`,s._getStepContentId(n)),Fp(`aria-labelledby`,s._getStepLabelId(n)),Uv(2),jp(`ngTemplateOutlet`,e.content)}}function wt(t,r){if(t&1&&(Ei(0,`div`,4),zE(1,Et,1,1,`ng-container`,9),KE(2,kt,7,13,`div`,11,YE),Bc()),t&2){let e=fD();Uv(),QE(e.headerPrefix()?1:-1),Uv(),JE(e.steps)}}function Tt(t,r){if(t&1){let e=oD();Ei(0,`mat-step-header`,15),Wp(`click`,function(){let i=bu(e).step;return _u(i.select())})(`keydown`,function(i){bu(e);return _u(fD()._onKeydown(i))}),Bc()}if(t&2){let e=r.step,n=fD();eh(`mat-horizontal-stepper-header`,n.orientation===`horizontal`)(`mat-vertical-stepper-header`,n.orientation===`vertical`),jp(`tabIndex`,n._getFocusIndex()===e.index()?0:-1)(`id`,n._getStepLabelId(e.index()))(`index`,e.index())(`state`,e.indicatorType())(`label`,e.stepLabel||e.label)(`selected`,e.isSelected())(`active`,e.isNavigable())(`optional`,e.optional)(`errorMessage`,e.errorMessage)(`iconOverrides`,n._iconOverrides)(`disableRipple`,n.disableRipple||!e.isNavigable())(`color`,e.color||n.color),Fp(`role`,n.orientation===`horizontal`?`tab`:`button`)(`aria-posinset`,n.orientation===`horizontal`?e.index()+1:null)(`aria-setsize`,n.orientation===`horizontal`?n.steps.length:null)(`aria-selected`,n.orientation===`horizontal`?e.isSelected():null)(`aria-current`,n.orientation===`vertical`&&e.isSelected()?`step`:null)(`aria-disabled`,n.orientation===`vertical`&&e.isSelected()?`true`:null)(`aria-expanded`,n.orientation===`vertical`?e.isSelected():null)(`aria-controls`,n._getStepContentId(e.index()))(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)(`aria-disabled`,e.isNavigable()?null:!0)}}function zt(t,r){t&1&&Vp(0,`div`,17)}function Ot(t,r){if(t&1&&($p(0,6),zE(1,zt,1,0,`div`,17)),t&2){let e=r.$implicit,n=r.$index,i=r.$count;fD(2);jp(`ngTemplateOutlet`,ED(4))(`ngTemplateOutletContext`,nw(3,et,e)),Uv(),QE(n!==i-1?1:-1)}}function Rt(t,r){if(t&1&&(Ei(0,`div`,16),KE(1,Ot,2,5,null,null,YE),Bc()),t&2){let e=r.steps;Fp(`aria-label`,fD().ariaLabel),Uv(),JE(e)}}var me=(()=>{class t extends ce{static ɵfac=(()=>{let e;return function(i){return(e||(e=oy(t)))(i||t)}})();static ɵdir=_E({type:t,selectors:[[``,`matStepLabel`,``]],features:[Sp]})}return t})();var Lt=(()=>{class t{changes=new K;optionalLabel=`Optional`;completedLabel=`Completed`;editableLabel=`Editable`;static ɵfac=function(n){return new(n||t)};static ɵprov=Yt({token:t,factory:t.ɵfac})}return t})();var he=(()=>{class t extends de{_intl=I(Lt);_focusMonitor=I(oi);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=I(Ye$1);e.load(xt$1),e.load(Ct$1);let n=I(c0);this._intlSubscription=this._intl.changes.subscribe(()=>n.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,n){e?this._focusMonitor.focusVia(this._elementRef,e,n):this._elementRef.nativeElement.focus(n)}_stringLabel(){return this.label instanceof me?null:this.label}_templateLabel(){return this.label instanceof me?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e==`number`?`${this.index+1}`:e==`edit`?`create`:e==`error`?`warning`:e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!==`error`}_hasErrorLabel(){return this.state===`error`}static ɵfac=function(n){return new(n||t)};static ɵcmp=DE({type:t,selectors:[[`mat-step-header`]],hostAttrs:[`role`,``,1,`mat-step-header`],hostVars:4,hostBindings:function(n,i){n&2&&(AD(`mat-`+(i.color||`primary`)),eh(`mat-step-header-empty-label`,i._hasEmptyLabel()))},inputs:{state:`state`,label:`label`,errorMessage:`errorMessage`,iconOverrides:`iconOverrides`,index:`index`,selected:`selected`,active:`active`,optional:`optional`,disableRipple:`disableRipple`,color:`color`},features:[Sp],decls:10,vars:17,consts:[[`matRipple`,``,1,`mat-step-header-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mat-step-icon-content`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-step-label`],[1,`mat-step-text-label`],[1,`mat-step-optional`],[1,`mat-step-sub-label-error`],[`aria-hidden`,`true`],[1,`cdk-visually-hidden`],[3,`ngTemplateOutlet`]],template:function(n,i){if(n&1&&(Vp(0,`div`,0),Ei(1,`div`)(2,`div`,1),zE(3,dt,1,6,`ng-container`,2)(4,ft,2,1),Bc()(),Ei(5,`div`,3),zE(6,_t,2,1,`div`,4)(7,vt,2,1,`div`,4),zE(8,gt,2,1,`div`,5),zE(9,bt,2,1,`div`,6),Bc()),n&2){let a;jp(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disableRipple),Uv(),AD(YD(`mat-step-icon-state-`,i.state,` mat-step-icon`)),eh(`mat-step-icon-selected`,i.selected),Uv(2),QE(i.iconOverrides&&i.iconOverrides[i.state]?3:4),Uv(2),eh(`mat-step-label-active`,i.active)(`mat-step-label-selected`,i.selected)(`mat-step-label-error`,i.state==`error`),Uv(),QE((a=i._templateLabel())?6:i._stringLabel()?7:-1,a),Uv(2),QE(i._hasOptionalLabel()?8:-1),Uv(),QE(i._hasErrorLabel()?9:-1)}},dependencies:[Wt,ss,wt$1],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--%NS%mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header:hover:not([aria-disabled]) .mat-step-header-ripple::before, .mat-step-header:hover[aria-disabled=false] .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--%NS%mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused .mat-step-header-ripple::before, .mat-step-header.cdk-program-focused .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--%NS%mat-stepper-header-optional-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--%NS%mat-stepper-header-icon-foreground-color, var(--%NS%mat-sys-surface));
  background-color: var(--%NS%mat-stepper-header-icon-background-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--%NS%mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--%NS%mat-stepper-header-error-state-icon-foreground-color, var(--%NS%mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--%NS%mat-stepper-header-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-stepper-header-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-stepper-header-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--%NS%mat-stepper-header-selected-state-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--%NS%mat-stepper-header-error-state-label-text-color, var(--%NS%mat-sys-error));
  font-size: var(--%NS%mat-stepper-header-error-state-label-text-size, var(--%NS%mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--%NS%mat-stepper-header-selected-state-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-selected-state-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--%NS%mat-stepper-header-selected-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-selected-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--%NS%mat-stepper-header-done-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-done-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--%NS%mat-stepper-header-edit-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-edit-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}
`],encapsulation:2})}return t})();var Ft=(()=>{class t{templateRef=I(Dr);name;static ɵfac=function(n){return new(n||t)};static ɵdir=_E({type:t,selectors:[[`ng-template`,`matStepperIcon`,``]],inputs:{name:[0,`matStepperIcon`,`name`]}})}return t})();var Pt=(()=>{class t{_template=I(Dr);static ɵfac=function(n){return new(n||t)};static ɵdir=_E({type:t,selectors:[[`ng-template`,`matStepContent`,``]]})}return t})();var At=(()=>{class t extends J{_errorStateMatcher=I(o,{skipSelf:!0});_viewContainerRef=I(Pi);_isSelected=F.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Lg(()=>this._stepper.selectionChange.pipe(Be(e=>e.selectedStep===this),Og(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new s(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,n){let i=this._errorStateMatcher.isErrorState(e,n),a=!!(e&&e.invalid&&this.interacted);return i||a}isSignalErrorState(e){let n=this._errorStateMatcher.isSignalErrorState?.(e)??!1,i=!!(e&&e().invalid()&&this.interacted);return n||i}static ɵfac=(()=>{let e;return function(i){return(e||(e=oy(t)))(i||t)}})();static ɵcmp=DE({type:t,selectors:[[`mat-step`]],contentQueries:function(n,i,a){if(n&1&&zp(a,me,5)(a,Pt,5),n&2){let s;yD(s=vD())&&(i.stepLabel=s.first),yD(s=vD())&&(i._lazyContent=s.first)}},hostAttrs:[`hidden`,``],inputs:{color:`color`},exportAs:[`matStep`],features:[ew([{provide:o,useExisting:t},{provide:J,useExisting:t}]),Sp],ngContentSelectors:Je,decls:1,vars:0,consts:[[3,`cdkPortalOutlet`]],template:function(n,i){n&1&&(hD(),Ap(0,xt,2,1,`ng-template`))},dependencies:[k],encapsulation:2})}return t})();var Ht=(()=>{class t extends X{_ngZone=I(Q);_renderer=I($a);_animationsDisabled=uh();_cleanupTransition;_isAnimating=qo(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new ai;_icons;animationDone=new Ue;disableRipple=!1;color;labelPosition=`end`;headerPosition=`top`;ariaLabel=null;headerPrefix=o0(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+`ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=``}_animationDuration=``;_isServer=!I($).isBrowser;constructor(){super();let n=I(_r).nativeElement.nodeName.toLowerCase();this.orientation=n===`mat-vertical-stepper`?`vertical`:`horizontal`}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:n})=>this._iconOverrides[e]=n),this.steps.changes.pipe(Pg(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(Pg(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e===`0ms`||e===`0s`?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-stepper-animations-enabled`),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask==`function`){let e=!1;this._animatedContainers.changes.pipe(Og(null),Pg(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?`0ms`:this.animationDuration?this.animationDuration:this.orientation===`horizontal`?`500ms`:`225ms`}_handleTransitionend=e=>{let n=e.target;if(!n)return;let i=this.orientation===`horizontal`&&e.propertyName===`transform`&&n.classList.contains(`mat-horizontal-stepper-content-current`),a=this.orientation===`vertical`&&e.propertyName===`grid-template-rows`&&n.classList.contains(`mat-vertical-content-container-active`);(i||a)&&this._animatedContainers.find(te=>te.nativeElement===n)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static ɵfac=function(n){return new(n||t)};static ɵcmp=DE({type:t,selectors:[[`mat-stepper`],[`mat-vertical-stepper`],[`mat-horizontal-stepper`],[``,`matStepper`,``]],contentQueries:function(n,i,a){if(n&1&&zp(a,At,5)(a,Ft,5),n&2){let s;yD(s=vD())&&(i._steps=s),yD(s=vD())&&(i._icons=s)}},viewQuery:function(n,i){if(n&1&&Qp(he,5)(St,5),n&2){let a;yD(a=vD())&&(i._stepHeader=a),yD(a=vD())&&(i._animatedContainers=a)}},hostVars:14,hostBindings:function(n,i){n&2&&(Xp(`--%NS%mat-stepper-animation-duration`,i._getAnimationDuration()),eh(`mat-stepper-horizontal`,i.orientation===`horizontal`)(`mat-stepper-vertical`,i.orientation===`vertical`)(`mat-stepper-label-position-end`,i.orientation===`horizontal`&&i.labelPosition==`end`)(`mat-stepper-label-position-bottom`,i.orientation===`horizontal`&&i.labelPosition==`bottom`)(`mat-stepper-header-position-bottom`,i.headerPosition===`bottom`)(`mat-stepper-animating`,i._isAnimating()))},inputs:{disableRipple:`disableRipple`,color:`color`,labelPosition:`labelPosition`,headerPosition:`headerPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],headerPrefix:[1,`headerPrefix`],animationDuration:`animationDuration`},outputs:{animationDone:`animationDone`},exportAs:[`matStepper`,`matVerticalStepper`,`matHorizontalStepper`],features:[ew([{provide:X,useExisting:t}]),Sp],ngContentSelectors:Je,decls:7,vars:2,consts:[[`stepTemplate`,``],[`horizontalStepsTemplate`,``],[`animatedContainer`,``],[1,`mat-horizontal-stepper-wrapper`],[1,`mat-vertical-stepper-wrapper`],[1,`mat-horizontal-stepper-header-wrapper`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-horizontal-content-container`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`,`class`],[3,`ngTemplateOutlet`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`],[1,`mat-step`],[1,`mat-vertical-content-container`],[`role`,`region`,1,`mat-vertical-stepper-content`,3,`id`],[1,`mat-vertical-content`],[3,`click`,`keydown`,`tabIndex`,`id`,`index`,`state`,`label`,`selected`,`active`,`optional`,`errorMessage`,`iconOverrides`,`disableRipple`,`color`],[`aria-orientation`,`horizontal`,`role`,`tablist`,1,`mat-horizontal-stepper-header-container`],[1,`mat-stepper-horizontal-line`]],template:function(n,i){if(n&1&&(hD(),zE(0,Ct,1,0),zE(1,Nt,6,1,`div`,3)(2,wt,4,1,`div`,4),Ap(3,Tt,1,27,`ng-template`,null,0,uw)(5,Rt,3,1,`ng-template`,null,1,uw)),n&2){let a;QE(i._isServer?0:-1),Uv(),QE((a=i.orientation)===`horizontal`?1:a===`vertical`?2:-1)}},dependencies:[ss,he],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--%NS%mat-stepper-container-text-font, var(--%NS%mat-sys-body-medium-font));
  background: var(--%NS%mat-stepper-container-color, var(--%NS%mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--%NS%mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
  top: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--%NS%mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2})}return t})();var Pn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=CE({type:t});static ɵinj=Xl({providers:[o],imports:[H,Ye,yt$1,wt$2,Ht,he,bh]})}return t})();export{me as a,Pn as i,Ft as n,Ht as r,At as t};