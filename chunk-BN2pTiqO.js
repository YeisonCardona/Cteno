import{$ as Bl,At as S,B as qc,Bn as tp,Bt as Vt$1,C as _1,Cn as kI,Ct as Pd,Dt as Qf,E as _u,Et as QI,Fn as qI,H as tf,Hn as up,Ht as Wm,In as rp,It as UI,J as $,Jn as xh,Jt as Yf,K as ye,L as nl,Mt as SI,Nn as pi,Nt as Sh,O as ct,Ot as RE,Pn as pl,Q as Ah,Qn as yp,Qt as Zf,R as ou,Rt as Uf,Sn as ir,St as Og,Tn as lp,Un as ur,Ut as Xf,Vn as uI,W as xa,Wt as Xg,X as $f,Xt as ZI,Y as $L,Yn as y,Yt as Z,Zt as ZL,_t as ME,a as D1,at as Hf,bn as iI,bt as NE,c as H1,ct as It$1,d as La,dn as fc,dt as KI,er as z,et as CE,f as Ns,gn as hc,hn as ha,ht as Ly,i as Cn,it as HI,jn as pc,jt as SE,kn as op,kt as RI,ln as ce$1,m as Ou,mt as LE,n as Bu,nt as GI,o as Du,ot as Hl,q as z_,qn as xI,qt as YL,rn as aI,rt as GL,s as En,sn as cE,st as IE,t as Bf,tn as _o,tr as zf,u as Ko,un as ei,ut as Jf,wt as Pe,x as Wu,xt as OI,y as V1,yn as hi,yt as Mn,zn as th,zt as Uo}from"./main.js";import{a as _n,m as vn$1,o as de$1,p as un,r as V}from"./chunk-BDw__whk.js";import{r as st}from"./chunk-B86PvpO7.js";import{t as O}from"./chunk-BAuOEZyO.js";import{t as o}from"./chunk-ClXBNtgi.js";var vt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=aI({type:t});static ɵinj=pl({imports:[Cn]})}return t})();var bt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=aI({type:t});static ɵinj=pl({imports:[Cn]})}return t})();function It(t,i){if(t&1&&Yf(0,`span`,4),t&2){let e=UI();lp(`font-size`,e.fontSize())(`margin-left`,e.DunderLabApp.LOGO_FONT_GAP)(`font-family`,e.DunderLabApp.LOGO_FONT),Xf(`innerHTML`,e.DunderLabApp.NAME,Wm)}}var se=class t{constructor(i){this.themeService=i}themeService;width;max_width;DunderLabApp=O;logoWidth=LE(()=>this.width??this.DunderLabApp.LOGO_SIZE);logoMaxWidth=LE(()=>this.max_width??this.logoWidth());fontSize=LE(()=>{let i=this.logoWidth().trim().match(/^(-?\d*\.?\d+)(%|px|vw|vh|rem|em)$/);if(!i)throw new Error(`Invalid CSS value: "${this.logoWidth()}"`);let e=Number(i[1]),n=i[2];return`${e*this.DunderLabApp.LOGO_FONT_RATIO}${n}`});static ɵfac=function(e){return new(e||t)(pi(ou))};static ɵcmp=iI({type:t,selectors:[[`app-logo`]],inputs:{width:`width`,max_width:`max_width`},decls:4,vars:6,consts:[[`href`,`/`,1,`undecorated-link`],[1,`logo-container`,`flex-row`,`items-center`,`content-center`,`no-gap`],[`alt`,`Cteno Logo`,1,`logo-icon-img`,3,`src`],[3,`font-size`,`margin-left`,`font-family`,`innerHTML`],[3,`innerHTML`]],template:function(e,n){e&1&&(pc(0,`a`,0)(1,`div`,1),Yf(2,`img`,2),SI(3,It,1,7,`span`,3),hc()()),e&2&&(Ly(2),lp(`width`,n.logoWidth())(`max-width`,n.logoMaxWidth()),Xf(`src`,`/assets/images/branding/app_logo_${n.themeService.mode()}.svg`,Pd),Ly(),xI(n.DunderLabApp.LOGO_RENDER_TEXT?3:-1))},dependencies:[Ns],styles:[`.logo-container[_ngcontent-%COMP%]{padding:16px}.logo-icon[_ngcontent-%COMP%]{background-size:contain;background-repeat:no-repeat;background-position:center;width:var(--%NS%sidenav-width-fixed);aspect-ratio:1}span[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary);line-height:1rem;margin-left:0rem}`]})};var kt=[`*`];function Et(t,i){t&1&&GI(0)}var Ce=(()=>{class t{_elementRef=y(ur);focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(n){return new(n||t)};static ɵdir=uI({type:t,selectors:[[``,`cdkStepHeader`,``]],hostAttrs:[`role`,`tab`]})}return t})();var Me=(()=>{class t{template=y(ir);static ɵfac=function(n){return new(n||t)};static ɵdir=uI({type:t,selectors:[[``,`cdkStepLabel`,``]]})}return t})();var L={NUMBER:`number`,EDIT:`edit`,DONE:`done`,ERROR:`error`};var Tt=new S(`STEPPER_GLOBAL_OPTIONS`);var le=(()=>{class t{_stepperOptions;_stepper=y(de);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=_o(!1);interactedStream=new Pe;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=_o(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=_o(!0);optional=!1;get completed(){let e=this._completedOverride(),n=this._interacted();return e??(n&&(!this.stepControl||zt(this.stepControl)))}set completed(e){this._completedOverride.set(e)}_completedOverride=_o(null);index=_o(-1);isSelected=LE(()=>this._stepper.selectedIndex===this.index());indicatorType=LE(()=>{let e=this.isSelected(),n=this.completed,a=this._state()??L.NUMBER,r=this._editable();return this._showError()&&this.hasError&&!e?L.ERROR:this._displayDefaultIndicatorType?!n||e?L.NUMBER:r?L.EDIT:L.DONE:n&&!e?L.DONE:n&&e?a:r&&e?L.EDIT:a});isNavigable=LE(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){return this._customError()??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=_o(null);_getDefaultError(){return this.interacted&&!!this.stepControl&&_t(this.stepControl)}constructor(){let e=y(Tt,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),Lt(this.stepControl))}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static ɵfac=function(n){return new(n||t)};static ɵcmp=iI({type:t,selectors:[[`cdk-step`]],contentQueries:function(n,a,r){if(n&1&&rp(r,Me,5)(r,V,5),n&2){let d;QI(d=ZI())&&(a.stepLabel=d.first),QI(d=ZI())&&(a._childForms=d)}},viewQuery:function(n,a){if(n&1&&op(ir,7),n&2){let r;QI(r=ZI())&&(a.content=r.first)}},inputs:{stepControl:`stepControl`,label:`label`,errorMessage:`errorMessage`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],state:`state`,editable:[2,`editable`,`editable`,ZL],optional:[2,`optional`,`optional`,ZL],completed:[2,`completed`,`completed`,ZL],hasError:[2,`hasError`,`hasError`,ZL]},outputs:{interactedStream:`interacted`},exportAs:[`cdkStep`],features:[Og],ngContentSelectors:kt,decls:1,vars:0,template:function(n,a){n&1&&(qI(),Uf(0,Et,1,0,`ng-template`))},encapsulation:2})}return t})();var de=(()=>{class t{_dir=y(Bf,{optional:!0});_changeDetectorRef=y(GL);_elementRef=y(ur);_destroyed=new Z;_keyManager;_steps;steps=new Uo;_stepHeader;_sortedHeaders=new Uo;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=_o(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=_o(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new Pe;selectedIndexChange=new Pe;_groupId=y(La).getId(`cdk-stepper-`);get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e===`vertical`)}_orientation=`horizontal`;ngAfterContentInit(){this._steps.changes.pipe(Sh(this._steps),Ah(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(n=>n._stepper===this)),this.steps.forEach((n,a)=>n.index.set(a)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Sh(this._stepHeader),Ah(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((n,a)=>n._elementRef.nativeElement.compareDocumentPosition(a._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new _u(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation===`vertical`),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:th()).pipe(Sh(this._layoutDirection()),Ah(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let n of e)n._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let n=e-this._selectedIndex();return n<0?this._layoutDirection()===`rtl`?`next`:`previous`:n>0?this._layoutDirection()===`rtl`?`previous`:`next`:`current`}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let n=this.steps.toArray(),a=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:a,selectedStep:n[e],previouslySelectedStep:n[a]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let n=Du(e),a=e.keyCode,r=this._keyManager;r?.activeItemIndex!=null&&!n&&(a===32||a===13)?(this.selectedIndex=r.activeItemIndex,e.preventDefault()):r?.setFocusOrigin(`keyboard`).onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(n=>{let a=n.stepControl;return(a?_t(a)||Ot(a)||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_containsFocus(){let e=this._elementRef.nativeElement,n=tf();return e===n||e.contains(n)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static ɵfac=function(n){return new(n||t)};static ɵdir=uI({type:t,selectors:[[``,`cdkStepper`,``]],contentQueries:function(n,a,r){if(n&1&&rp(r,le,5)(r,Ce,5),n&2){let d;QI(d=ZI())&&(a._steps=d),QI(d=ZI())&&(a._stepHeader=d)}},inputs:{linear:[2,`linear`,`linear`,ZL],selectedIndex:[2,`selectedIndex`,`selectedIndex`,YL],selected:`selected`,orientation:`orientation`},outputs:{selectionChange:`selectionChange`,selectedIndexChange:`selectedIndexChange`},exportAs:[`cdkStepper`]})}return t})();function ce(t){return typeof t==`function`}function zt(t){return ce(t)?t().valid():t.valid}function _t(t){return ce(t)?t().invalid():t.invalid}function Ot(t){return ce(t)?t().pending():t.pending}function Lt(t){ce(t)?t().reset():t.reset()}var yt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=aI({type:t});static ɵinj=pl({imports:[Cn]})}return t})();var At=(t,i,e)=>({index:t,active:i,optional:e});function Pt(t,i){if(t&1&&Jf(0,2),t&2){let e=UI();Qf(`ngTemplateOutlet`,e.iconOverrides[e.state])(`ngTemplateOutletContext`,SE(2,At,e.index,e.active,e.optional))}}function Rt(t,i){if(t&1&&(ei(0,`span`,7),IE(1),fc()),t&2){let e=UI(2);Ly(),yp(e._getDefaultTextForState(e.state))}}function Ft(t,i){if(t&1&&(ei(0,`span`,8),IE(1),fc()),t&2){let e=UI(3);Ly(),yp(e._intl.completedLabel)}}function Ht(t,i){if(t&1&&(ei(0,`span`,8),IE(1),fc()),t&2){let e=UI(3);Ly(),yp(e._intl.editableLabel)}}function Bt(t,i){if(t&1&&(SI(0,Ft,2,1,`span`,8)(1,Ht,2,1,`span`,8),ei(2,`mat-icon`,7),IE(3),fc()),t&2){let e=UI(2);xI(e.state===`done`?0:e.state===`edit`?1:-1),Ly(3),yp(e._getDefaultTextForState(e.state))}}function jt(t,i){if(t&1&&SI(0,Rt,2,1,`span`,7)(1,Bt,4,2),t&2)xI(UI().state===`number`?0:1)}function Vt(t,i){t&1&&(ei(0,`div`,4),Jf(1,9),fc()),t&2&&(Ly(),Qf(`ngTemplateOutlet`,i.template))}function Qt(t,i){if(t&1&&(ei(0,`div`,4),IE(1),fc()),t&2){let e=UI();Ly(),yp(e.label)}}function $t(t,i){if(t&1&&(ei(0,`div`,5),IE(1),fc()),t&2){let e=UI();Ly(),yp(e._intl.optionalLabel)}}function Gt(t,i){if(t&1&&(ei(0,`div`,6),IE(1),fc()),t&2){let e=UI();Ly(),yp(e.errorMessage)}}var xt=[`*`];function qt(t,i){}function Wt(t,i){if(t&1&&(GI(0),$f(1,qt,0,0,`ng-template`,0)),t&2){let e=UI();Ly(),Qf(`cdkPortalOutlet`,e._portal)}}var Ut=[`animatedContainer`];var St=t=>({steps:t});var Ct=t=>({step:t});function Kt(t,i){t&1&&GI(0)}function Xt(t,i){if(t&1&&(ei(0,`div`,5),Jf(1,9)(2,6),fc()),t&2){let e=UI(2),n=KI(6);Ly(),Qf(`ngTemplateOutlet`,e.headerPrefix()),Ly(),Qf(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,NE(3,St,e.steps))}}function Zt(t,i){if(t&1&&Jf(0,6),t&2){let e=UI(2);Qf(`ngTemplateOutlet`,KI(6))(`ngTemplateOutletContext`,NE(2,St,e.steps))}}function Yt(t,i){if(t&1&&(ei(0,`div`,10,2),Jf(2,9),fc()),t&2){let e=i.$implicit,n=i.$index,a=UI(2);cE(`mat-horizontal-stepper-content-`+a._getAnimationDirection(n)),Qf(`id`,a._getStepContentId(n)),zf(`aria-labelledby`,a._getStepLabelId(n))(`inert`,a.selectedIndex===n?null:``),Ly(2),Qf(`ngTemplateOutlet`,e.content)}}function Jt(t,i){if(t&1&&(ei(0,`div`,3),SI(1,Xt,3,5,`div`,5)(2,Zt,1,4,`ng-container`,6),ei(3,`div`,7),kI(4,Yt,3,6,`div`,8,RI),fc()()),t&2){let e=UI();Ly(),xI(e.headerPrefix()?1:2),Ly(3),OI(e.steps)}}function en(t,i){if(t&1&&Jf(0,9),t&2)Qf(`ngTemplateOutlet`,UI(2).headerPrefix())}function tn(t,i){if(t&1&&(ei(0,`div`,11),Jf(1,6),ei(2,`div`,12,2)(4,`div`,13)(5,`div`,14),Jf(6,9),fc()()()()),t&2){let e=i.$implicit,n=i.$index,a=i.$index,r=i.$count,d=UI(2),pe=KI(4);Ly(),Qf(`ngTemplateOutlet`,pe)(`ngTemplateOutletContext`,NE(11,Ct,e)),Ly(),up(`mat-stepper-vertical-line`,a!==r-1)(`mat-vertical-content-container-active`,d.selectedIndex===n),zf(`inert`,d.selectedIndex===n?null:``)(`aria-label`,d.ariaLabel),Ly(2),Qf(`id`,d._getStepContentId(n)),zf(`aria-labelledby`,d._getStepLabelId(n)),Ly(2),Qf(`ngTemplateOutlet`,e.content)}}function nn(t,i){if(t&1&&(ei(0,`div`,4),SI(1,en,1,1,`ng-container`,9),kI(2,tn,7,13,`div`,11,RI),fc()),t&2){let e=UI();Ly(),xI(e.headerPrefix()?1:-1),Ly(),OI(e.steps)}}function an(t,i){if(t&1){let e=HI();ei(0,`mat-step-header`,15),tp(`click`,function(){let a=Hl(e).step;return Bl(a.select())})(`keydown`,function(a){Hl(e);return Bl(UI()._onKeydown(a))}),fc()}if(t&2){let e=i.step,n=UI();up(`mat-horizontal-stepper-header`,n.orientation===`horizontal`)(`mat-vertical-stepper-header`,n.orientation===`vertical`),Qf(`tabIndex`,n._getFocusIndex()===e.index()?0:-1)(`id`,n._getStepLabelId(e.index()))(`index`,e.index())(`state`,e.indicatorType())(`label`,e.stepLabel||e.label)(`selected`,e.isSelected())(`active`,e.isNavigable())(`optional`,e.optional)(`errorMessage`,e.errorMessage)(`iconOverrides`,n._iconOverrides)(`disableRipple`,n.disableRipple||!e.isNavigable())(`color`,e.color||n.color),zf(`role`,n.orientation===`horizontal`?`tab`:`button`)(`aria-posinset`,n.orientation===`horizontal`?e.index()+1:null)(`aria-setsize`,n.orientation===`horizontal`?n.steps.length:null)(`aria-selected`,n.orientation===`horizontal`?e.isSelected():null)(`aria-current`,n.orientation===`vertical`&&e.isSelected()?`step`:null)(`aria-disabled`,n.orientation===`vertical`&&e.isSelected()?`true`:null)(`aria-expanded`,n.orientation===`vertical`?e.isSelected():null)(`aria-controls`,n._getStepContentId(e.index()))(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)(`aria-disabled`,e.isNavigable()?null:!0)}}function rn(t,i){t&1&&Zf(0,`div`,17)}function on(t,i){if(t&1&&(Jf(0,6),SI(1,rn,1,0,`div`,17)),t&2){let e=i.$implicit,n=i.$index,a=i.$count;UI(2);Qf(`ngTemplateOutlet`,KI(4))(`ngTemplateOutletContext`,NE(3,Ct,e)),Ly(),xI(n!==a-1?1:-1)}}function sn(t,i){if(t&1&&(ei(0,`div`,16),kI(1,on,2,5,null,null,RI),fc()),t&2){let e=i.steps;zf(`aria-label`,UI().ariaLabel),Ly(),OI(e)}}var Ne=(()=>{class t extends Me{static ɵfac=(()=>{let e;return function(a){return(e||(e=Xg(t)))(a||t)}})();static ɵdir=uI({type:t,selectors:[[``,`matStepLabel`,``]],features:[Hf]})}return t})();var ln=(()=>{class t{changes=new Z;optionalLabel=`Optional`;completedLabel=`Completed`;editableLabel=`Editable`;static ɵfac=function(n){return new(n||t)};static ɵprov=Vt$1({token:t,factory:t.ɵfac})}return t})();var we=(()=>{class t extends Ce{_intl=y(ln);_focusMonitor=y(xa);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=y(ct);e.load(Ou),e.load(Ko);let n=y(GL);this._intlSubscription=this._intl.changes.subscribe(()=>n.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,n){e?this._focusMonitor.focusVia(this._elementRef,e,n):this._elementRef.nativeElement.focus(n)}_stringLabel(){return this.label instanceof Ne?null:this.label}_templateLabel(){return this.label instanceof Ne?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e==`number`?`${this.index+1}`:e==`edit`?`create`:e==`error`?`warning`:e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!==`error`}_hasErrorLabel(){return this.state===`error`}static ɵfac=function(n){return new(n||t)};static ɵcmp=iI({type:t,selectors:[[`mat-step-header`]],hostAttrs:[`role`,``,1,`mat-step-header`],hostVars:4,hostBindings:function(n,a){n&2&&(cE(`mat-`+(a.color||`primary`)),up(`mat-step-header-empty-label`,a._hasEmptyLabel()))},inputs:{state:`state`,label:`label`,errorMessage:`errorMessage`,iconOverrides:`iconOverrides`,index:`index`,selected:`selected`,active:`active`,optional:`optional`,disableRipple:`disableRipple`,color:`color`},features:[Hf],decls:10,vars:17,consts:[[`matRipple`,``,1,`mat-step-header-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mat-step-icon-content`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-step-label`],[1,`mat-step-text-label`],[1,`mat-step-optional`],[1,`mat-step-sub-label-error`],[`aria-hidden`,`true`],[1,`cdk-visually-hidden`],[3,`ngTemplateOutlet`]],template:function(n,a){if(n&1&&(Zf(0,`div`,0),ei(1,`div`)(2,`div`,1),SI(3,Pt,1,6,`ng-container`,2)(4,jt,2,1),fc()(),ei(5,`div`,3),SI(6,Vt,2,1,`div`,4)(7,Qt,2,1,`div`,4),SI(8,$t,2,1,`div`,5),SI(9,Gt,2,1,`div`,6),fc()),n&2){let r;Qf(`matRippleTrigger`,a._getHostElement())(`matRippleDisabled`,a.disableRipple),Ly(),cE(CE(`mat-step-icon-state-`,a.state,` mat-step-icon`)),up(`mat-step-icon-selected`,a.selected),Ly(2),xI(a.iconOverrides&&a.iconOverrides[a.state]?3:4),Ly(2),up(`mat-step-label-active`,a.active)(`mat-step-label-selected`,a.selected)(`mat-step-label-error`,a.state==`error`),Ly(),xI((r=a._templateLabel())?6:a._stringLabel()?7:-1,r),Ly(2),xI(a._hasOptionalLabel()?8:-1),Ly(),xI(a._hasErrorLabel()?9:-1)}},dependencies:[z_,nl,H1],styles:[`.mat-step-header {
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
`],encapsulation:2})}return t})();var dn=(()=>{class t{templateRef=y(ir);name;static ɵfac=function(n){return new(n||t)};static ɵdir=uI({type:t,selectors:[[`ng-template`,`matStepperIcon`,``]],inputs:{name:[0,`matStepperIcon`,`name`]}})}return t})();var cn=(()=>{class t{_template=y(ir);static ɵfac=function(n){return new(n||t)};static ɵdir=uI({type:t,selectors:[[`ng-template`,`matStepContent`,``]]})}return t})();var mn=(()=>{class t extends le{_errorStateMatcher=y(o,{skipSelf:!0});_viewContainerRef=y(hi);_isSelected=$.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(xh(()=>this._stepper.selectionChange.pipe(It$1(e=>e.selectedStep===this),Sh(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new de$1(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,n){let a=this._errorStateMatcher.isErrorState(e,n),r=!!(e&&e.invalid&&this.interacted);return a||r}isSignalErrorState(e){let n=this._errorStateMatcher.isSignalErrorState?.(e)??!1,a=!!(e&&e().invalid()&&this.interacted);return n||a}static ɵfac=(()=>{let e;return function(a){return(e||(e=Xg(t)))(a||t)}})();static ɵcmp=iI({type:t,selectors:[[`mat-step`]],contentQueries:function(n,a,r){if(n&1&&rp(r,Ne,5)(r,cn,5),n&2){let d;QI(d=ZI())&&(a.stepLabel=d.first),QI(d=ZI())&&(a._lazyContent=d.first)}},hostAttrs:[`hidden`,``],inputs:{color:`color`},exportAs:[`matStep`],features:[ME([{provide:o,useExisting:t},{provide:le,useExisting:t}]),Hf],ngContentSelectors:xt,decls:1,vars:0,consts:[[3,`cdkPortalOutlet`]],template:function(n,a){n&1&&(qI(),$f(0,Wt,2,1,`ng-template`))},dependencies:[vn$1],encapsulation:2})}return t})();var pn=(()=>{class t extends de{_ngZone=y(z);_renderer=y(ha);_animationsDisabled=En();_cleanupTransition;_isAnimating=_o(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Uo;_icons;animationDone=new Pe;disableRipple=!1;color;labelPosition=`end`;headerPosition=`top`;ariaLabel=null;headerPrefix=$L(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+`ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=``}_animationDuration=``;_isServer=!y(ye).isBrowser;constructor(){super();let n=y(ur).nativeElement.nodeName.toLowerCase();this.orientation=n===`mat-vertical-stepper`?`vertical`:`horizontal`}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:n})=>this._iconOverrides[e]=n),this.steps.changes.pipe(Ah(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(Ah(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e===`0ms`||e===`0s`?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-stepper-animations-enabled`),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask==`function`){let e=!1;this._animatedContainers.changes.pipe(Sh(null),Ah(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?`0ms`:this.animationDuration?this.animationDuration:this.orientation===`horizontal`?`500ms`:`225ms`}_handleTransitionend=e=>{let n=e.target;if(!n)return;let a=this.orientation===`horizontal`&&e.propertyName===`transform`&&n.classList.contains(`mat-horizontal-stepper-content-current`),r=this.orientation===`vertical`&&e.propertyName===`grid-template-rows`&&n.classList.contains(`mat-vertical-content-container-active`);(a||r)&&this._animatedContainers.find(pe=>pe.nativeElement===n)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static ɵfac=function(n){return new(n||t)};static ɵcmp=iI({type:t,selectors:[[`mat-stepper`],[`mat-vertical-stepper`],[`mat-horizontal-stepper`],[``,`matStepper`,``]],contentQueries:function(n,a,r){if(n&1&&rp(r,mn,5)(r,dn,5),n&2){let d;QI(d=ZI())&&(a._steps=d),QI(d=ZI())&&(a._icons=d)}},viewQuery:function(n,a){if(n&1&&op(we,5)(Ut,5),n&2){let r;QI(r=ZI())&&(a._stepHeader=r),QI(r=ZI())&&(a._animatedContainers=r)}},hostVars:14,hostBindings:function(n,a){n&2&&(lp(`--%NS%mat-stepper-animation-duration`,a._getAnimationDuration()),up(`mat-stepper-horizontal`,a.orientation===`horizontal`)(`mat-stepper-vertical`,a.orientation===`vertical`)(`mat-stepper-label-position-end`,a.orientation===`horizontal`&&a.labelPosition==`end`)(`mat-stepper-label-position-bottom`,a.orientation===`horizontal`&&a.labelPosition==`bottom`)(`mat-stepper-header-position-bottom`,a.headerPosition===`bottom`)(`mat-stepper-animating`,a._isAnimating()))},inputs:{disableRipple:`disableRipple`,color:`color`,labelPosition:`labelPosition`,headerPosition:`headerPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],headerPrefix:[1,`headerPrefix`],animationDuration:`animationDuration`},outputs:{animationDone:`animationDone`},exportAs:[`matStepper`,`matVerticalStepper`,`matHorizontalStepper`],features:[ME([{provide:de,useExisting:t}]),Hf],ngContentSelectors:xt,decls:7,vars:2,consts:[[`stepTemplate`,``],[`horizontalStepsTemplate`,``],[`animatedContainer`,``],[1,`mat-horizontal-stepper-wrapper`],[1,`mat-vertical-stepper-wrapper`],[1,`mat-horizontal-stepper-header-wrapper`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-horizontal-content-container`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`,`class`],[3,`ngTemplateOutlet`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`],[1,`mat-step`],[1,`mat-vertical-content-container`],[`role`,`region`,1,`mat-vertical-stepper-content`,3,`id`],[1,`mat-vertical-content`],[3,`click`,`keydown`,`tabIndex`,`id`,`index`,`state`,`label`,`selected`,`active`,`optional`,`errorMessage`,`iconOverrides`,`disableRipple`,`color`],[`aria-orientation`,`horizontal`,`role`,`tablist`,1,`mat-horizontal-stepper-header-container`],[1,`mat-stepper-horizontal-line`]],template:function(n,a){if(n&1&&(qI(),SI(0,Kt,1,0),SI(1,Jt,6,1,`div`,3)(2,nn,4,1,`div`,4),$f(3,an,1,27,`ng-template`,null,0,RE)(5,sn,3,1,`ng-template`,null,1,RE)),n&2){let r;xI(a._isServer?0:-1),Ly(),xI((r=a.orientation)===`horizontal`?1:r===`vertical`?2:-1)}},dependencies:[nl,we],styles:[`.mat-stepper-vertical,
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
`],encapsulation:2})}return t})();var Mt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=aI({type:t});static ɵinj=pl({providers:[o],imports:[_n,yt,V1,Bu,pn,we,Cn]})}return t})();var me=class t{activeNavLinkSubject=new Mn([``]);activeNavLink$=this.activeNavLinkSubject.asObservable();setNavActiveLink(i,e=``){this.activeNavLinkSubject.next([i,e])}static ɵfac=function(e){return new(e||t)};static ɵprov=ce$1({token:t,factory:t.ɵfac,providedIn:`root`})};function hn(t,i){t&1&&(ei(0,`mat-icon`),IE(1,`diamond`),fc(),ei(2,`span`,16),IE(3,`Premium`),fc())}function fn(t,i){t&1&&(ei(0,`mat-icon`),IE(1,`lock`),fc(),ei(2,`span`,16),IE(3,`Unlock`),fc())}function gn(t,i){if(t&1&&(ei(0,`div`,7)(1,`div`,8)(2,`button`,9),IE(3,`Get Started`),fc(),ei(4,`div`,10)(5,`button`,11),IE(6,` Motor Imagery `),fc(),ei(7,`button`,12),IE(8,`P300`),fc(),ei(9,`button`,13),IE(10,`SSVEP`),fc()()()(),Zf(11,`div`)(12,`div`),ei(13,`div`,14)(14,`div`,15)(15,`mat-icon`),IE(16,`bar_chart`),fc(),ei(17,`span`,16),IE(18,`Benchmark`),fc()(),ei(19,`div`,17)(20,`mat-icon`),IE(21,`usb`),fc(),ei(22,`span`,16),IE(23,`Hardware`),fc()(),ei(24,`div`,18)(25,`mat-icon`),IE(26,`help`),fc(),ei(27,`span`,16),IE(28,`Help`),fc()(),ei(29,`div`,19),SI(30,hn,4,0)(31,fn,4,0),fc()()),t&2){let e=UI();Ly(30),xI(e.premiumService.isPurchased()?30:31)}}function vn(t,i){t&1&&(Zf(0,`div`,20),ei(1,`div`,21)(2,`a`,22),Zf(3,`img`,23),fc()())}var Nt=class t{constructor(i,e,n){this.navigationBarService=i;this.themeService=e;this.premiumService=n;this.navigationBarService.setNavActiveLink(`/home`,`Home`);let a=[`Real-time paradigms for motor imagery, neurofeedback, and hybrid BCI protocols`,`Ultra-precise cognitive tasks with synchronized visual and hardware stimulation`,`A unified platform for EEG, BCI, and behavioral experimentation`,`Sub-millisecond control and feedback for adaptive neurocognitive research`,`Design, deploy, and synchronize experiments for next-generation brain-computer interfaces`];this.headline=a[Math.floor(Math.random()*a.length)]}navigationBarService;themeService;premiumService;headline=``;mode=un.home;static ɵfac=function(e){return new(e||t)(pi(me),pi(ou),pi(Wu))};static ɵcmp=iI({type:t,selectors:[[`app-home`]],decls:12,vars:3,consts:[[1,`spectrum-background`,`spectrum-background-full`],[1,`container`,`flex-column`,`height-90vh`,`justify-space-between`],[1,`landing-section`],[1,`media-container`],[1,`flex-column`],[`width`,`80vw`,`max_width`,`350px`],[1,`align-center`,`mat-font-title-lg`,`normal`,`no-margin-top`],[1,`landing-section-buttons`],[1,`flex-column`,`content-center`,`margin-top-large`],[`matButton`,`filled`,`routerLink`,`/paradigms`,1,`width-100`],[1,`grid-responsive-auto-120`,`width-100`,`gap-medium`,`margin-top-small`],[`matButton`,`tonal`,`routerLink`,`/paradigms/motor-imagery`,1,``],[`matButton`,`tonal`,`routerLink`,`/paradigms/p300`,1,``],[`matButton`,`tonal`,`routerLink`,`/paradigms/ssvep`,1,``],[1,`colorful-container`,`grid-responsive-auto-70`,`gap-medium`,`justify-items-center`],[`routerLink`,`/benchmark`,1,`colorful-navigation`,`flex-column`,`content-center`,`items-center`,`no-gap`,`color-1`],[1,`mat-font-body-sm`,`medium`],[`routerLink`,`/hardware`,1,`colorful-navigation`,`flex-column`,`content-center`,`items-center`,`no-gap`,`color-2`],[`routerLink`,`/faqs`,1,`colorful-navigation`,`flex-column`,`content-center`,`items-center`,`no-gap`,`color-3`],[`routerLink`,`/full-unlock`,1,`colorful-navigation`,`flex-column`,`content-center`,`items-center`,`no-gap`,`color-4`],[1,`height-20vh`],[1,`flex-column`,`align-items-center`],[`href`,`https://play.google.com/store/apps/details?id=com.dunderlab.cteno`,`target`,`_blank`],[`src`,`/assets/images/google/Google_Play_Store_badge_EN.svg`,1,`width-300px`]],template:function(e,n){e&1&&(Zf(0,`div`,0),ei(1,`div`,1),Zf(2,`div`)(3,`div`),ei(4,`div`,2),Zf(5,`div`,3),ei(6,`div`,4),Zf(7,`app-logo`,5),ei(8,`span`,6),IE(9),fc()()(),SI(10,gn,32,1),SI(11,vn,4,0),fc()),e&2&&(Ly(9),yp(n.headline),Ly(),xI(n.mode===`production`?10:-1),Ly(),xI(n.mode===`static`?11:-1))},dependencies:[Ns,_1,D1,vt,bt,st,V1,H1,qc,se,Mt],styles:[`.container[_ngcontent-%COMP%]{width:70vw;margin:0 auto}@media(max-width:599.98px){.container[_ngcontent-%COMP%]{width:90vw}}.landing-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-primary)}.landing-section[_ngcontent-%COMP%], .landing-section-buttons[_ngcontent-%COMP%]{overflow:hidden;box-sizing:border-box}.colorful-navigation[_ngcontent-%COMP%]{width:75px;height:70px;border-radius:var(--%NS%mat-sys-corner-large)}.colorful-navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:70%}.colorful-navigation[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:25px;width:30px;height:30px;text-align:center}.color-1[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--%NS%spectrum-color-1) 30%,white);color:color-mix(in srgb,var(--%NS%spectrum-color-1) 60%,black)}.color-2[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--%NS%spectrum-color-25) 30%,white);color:color-mix(in srgb,var(--%NS%spectrum-color-25) 60%,black)}.color-3[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--%NS%spectrum-color-2) 30%,white);color:color-mix(in srgb,var(--%NS%spectrum-color-2) 60%,black)}.color-4[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--%NS%spectrum-color-3) 30%,white);color:color-mix(in srgb,var(--%NS%spectrum-color-3) 60%,black)}`]})};export{Nt as HomeComponent};