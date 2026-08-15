import{o as z}from"./chunk-Beo1kjUY.js";import{n as R,r as j}from"./chunk-k4UFoHBj.js";import{Bn as gD,E as ED,Ft as Ue,Hr as wo,I as Fp,Jr as yD,K as I,Mn as ew,O as Ei,Pn as fD,Pr as vD,Qr as zE,Rt as Uv,U as Gu,Vt as Vp,Wn as hD,Wt as Wp,Yn as jp,_t as Qp,at as N,br as qo,dr as oy,ei as zp,g as CE,ht as QE,jn as eh,lr as oe,on as _E,p as Bc,qt as Xl,sn as _r,v as Ch,wn as d0,x as DE,yn as c0}from"./chunk-CdnfGufr.js";import{C as Ye,Q as vi,X as uh,k as bh,n as $o,q as oi,y as Sn}from"./chunk-CIPJ1y8p.js";import{Q as xt,T as O,Y as Wt,Z as wt}from"./main.js";import{t as i}from"./chunk-CL9Sj75v.js";import{t as d}from"./chunk-mUjWaCQl.js";import{p as se}from"./chunk-Pe_ACDEh.js";var Le=[`button`];var Pe=[`*`];function Ee(i,t){if(i&1&&(Ei(0,`div`,2),Vp(1,`mat-pseudo-checkbox`,6),Bc()),i&2){let e=fD();Uv(),jp(`disabled`,e.disabled)}}var Se=new N(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var we=new N(`MatButtonToggleGroup`);var Be={provide:se,useExisting:wo(()=>Ae),multi:!0};var M=class{source;value;constructor(t,e){this.source=t,this.value=e}};var Ae=(()=>{class i{_changeDetector=I(c0);_dir=I($o,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=I(Sn).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(a=>a.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new Ue;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new Ue;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=I(Se,{optional:!0});this.appearance=e&&e.appearance?e.appearance:`standard`,this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new d(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||vi(e))return;let n=e.target.id,r=this._buttonToggles.toArray().findIndex(u=>u.buttonId===n),s=null;switch(e.keyCode){case 32:case 13:s=this._buttonToggles.get(r)||null;break;case 38:s=this._getNextButton(r,-1);break;case 37:s=this._getNextButton(r,this.dir===`ltr`?-1:1);break;case 40:s=this._getNextButton(r,1);break;case 39:s=this._getNextButton(r,this.dir===`ltr`?1:-1);break;default:return}s&&(e.preventDefault(),s._onButtonClick(),s.focus())}_emitChangeEvent(e){let a=new M(e,this.value);this._rawValue=a.value,this._controlValueAccessorChangeFn(a.value),this.change.emit(a)}_syncButtonToggle(e,a,n=!1,r=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?a?this._selectionModel.select(e):this._selectionModel.deselect(e):r=!0,r?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(a=>e.value!=null&&a===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let a=this._buttonToggles.get(e);if(!a.disabled){a.tabIndex=0;break}}}_getNextButton(e,a){let n=this._buttonToggles;for(let r=1;r<=n.length;r++){let s=(e+a*r+n.length)%n.length,u=n.get(s);if(u&&!u.disabled)return u}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let a=this._buttonToggles.toArray();if(this.multiple&&e?(this._clearSelection(),e.forEach(n=>this._selectValue(n,a))):(this._clearSelection(),this._selectValue(e,a)),!this.multiple&&a.every(n=>n.tabIndex===-1)){for(let n of a)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,a){for(let n of a)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,a){a&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static ɵfac=function(a){return new(a||i)};static ɵdir=_E({type:i,selectors:[[`mat-button-toggle-group`]],contentQueries:function(a,n,r){if(a&1&&zp(r,_e,5),a&2){let s;yD(s=vD())&&(n._buttonToggles=s)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(a,n){a&1&&Wp(`keydown`,function(s){return n._keydown(s)}),a&2&&(Fp(`role`,n.multiple?`group`:`radiogroup`)(`aria-disabled`,n.disabled),eh(`mat-button-toggle-vertical`,n.vertical)(`mat-button-toggle-group-appearance-standard`,n.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,d0],value:`value`,multiple:[2,`multiple`,`multiple`,d0],disabled:[2,`disabled`,`disabled`,d0],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,d0],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,d0],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,d0]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[ew([Be,{provide:we,useExisting:i}])]})}return i})();var _e=(()=>{class i$1{_changeDetectorRef=I(c0);_elementRef=I(_r);_focusMonitor=I(oi);_idGenerator=I(Sn);_animationDisabled=uh();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Ue;constructor(){I(Ye).load(xt);let e=I(we,{optional:!0}),a=I(new Ch(`tabindex`),{optional:!0})||``,n=I(Se,{optional:!0});this._tabIndex=qo(parseInt(a)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:`standard`,this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new M(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(a){return new(a||i$1)};static ɵcmp=DE({type:i$1,selectors:[[`mat-button-toggle`]],viewQuery:function(a,n){if(a&1&&Qp(Le,5),a&2){let r;yD(r=vD())&&(n._buttonElement=r.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(a,n){a&1&&Wp(`focus`,function(){return n.focus()}),a&2&&(Fp(`aria-label`,null)(`aria-labelledby`,null)(`id`,n.id)(`name`,null),eh(`mat-button-toggle-standalone`,!n.buttonToggleGroup)(`mat-button-toggle-checked`,n.checked)(`mat-button-toggle-disabled`,n.disabled)(`mat-button-toggle-disabled-interactive`,n.disabledInteractive)(`mat-button-toggle-appearance-standard`,n.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,d0],appearance:`appearance`,checked:[2,`checked`,`checked`,d0],disabled:[2,`disabled`,`disabled`,d0],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,d0]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:Pe,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(a,n){if(a&1&&(hD(),Ei(0,`button`,1,0),Wp(`click`,function(){return n._onButtonClick()}),zE(2,Ee,2,1,`div`,2),Ei(3,`span`,3),gD(4),Bc()(),Vp(5,`span`,4)(6,`span`,5)),a&2){let r=ED(1);jp(`id`,n.buttonId)(`disabled`,n.disabled&&!n.disabledInteractive||null),Fp(`role`,n.isSingleSelector()?`radio`:`button`)(`tabindex`,n.disabled&&!n.disabledInteractive?-1:n.tabIndex)(`aria-pressed`,n.isSingleSelector()?null:n.checked)(`aria-checked`,n.isSingleSelector()?n.checked:null)(`name`,n._getButtonName())(`aria-label`,n.ariaLabel)(`aria-labelledby`,n.ariaLabelledby)(`aria-disabled`,n.disabled&&n.disabledInteractive?`true`:null),Uv(2),QE(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),Uv(4),jp(`matRippleTrigger`,r)(`matRippleDisabled`,n.disableRipple||n.disabled)}},dependencies:[Wt,i],styles:[`.mat-button-toggle-standalone,
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
`],encapsulation:2})}return i$1})();var nt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=CE({type:i});static ɵinj=Xl({imports:[wt,_e,bh]})}return i})();var f=class i{hardwareIP=qo(`HARDWARE-IP`);isConnected=qo(!1);hasAvailableDevice=qo(!1);measuringLatency=qo(!1);latencyStats=qo({latency:0,jitter:0,min:0,max:0,median:0,samples:0});reading=!1;lineQueue=[];waitingResolvers=[];MAX_QUEUE_SIZE=100;deviceProcessLine;constructor(){}sleep=t=>new Promise(e=>setTimeout(e,t));requestAndConnectDevice(){return z(this,null,function*(){yield this.requestDevice(),yield this.connect()})}flushQueues(){this.lineQueue=[],this.waitingResolvers=[]}processLine(t){if(O.INPUT_COMMANDS.some(e=>t.startsWith(e))){if(this.deviceProcessLine?.(t),t.startsWith(`RESP=WIFI_CONNECTED`)){let e=t.split(`IP=`)[1]?.split(`;`)[0];e&&this.hardwareIP.set(e)}this.waitingResolvers.length>0?this.waitingResolvers.shift()(t):(this.lineQueue.length>=this.MAX_QUEUE_SIZE&&this.lineQueue.shift(),this.lineQueue.push(t))}}measureLatency(t=0){return z(this,null,function*(){this.measuringLatency.set(!0),this.latencyStats.set({latency:0,jitter:0,min:0,max:0,median:0,samples:0});let e=!0;t===0&&(e=!1,t=this.samplesToTest),yield this.writeLine(`CMD=@BIP;CMD=@TITLE "Latency Test";`),yield this.writeLine(`CMD=@LATENCY;`),yield this.sleep(300),yield this.stopListening();let a=0;for(;a<100&&!(yield this.readLineFromSource()).trim().endsWith(`#DUMMY@`);)a++;for(yield this.writeLineToSource(`@`),a=0;a<3&&(yield this.readLineFromSource()).trim()!==`@`;)a++;let n=[],r=``;for(;!n.length||n.length<t;){let d=String.fromCharCode(97+Math.floor(Math.random()*26)),h=performance.now();yield this.writeLineToSource(d),r=yield this.readLineFromSource();let S=performance.now();r===d&&n.push(S-h),n.length%1e3===0&&console.log(`Processed ${n.length} samples`)}if(yield this.sleep(100),yield this.writeLineToSource(`EXIT`),e){let d=JSON.stringify(n),h=new Blob([d],{type:`application/json`}),S=URL.createObjectURL(h),B=document.createElement(`a`);B.href=S,B.download=`${this.mode}_latencies_${n.length}samples_${new Date().toISOString().slice(0,19)}.json`,B.click(),URL.revokeObjectURL(S)}let s=n.reduce((d,h)=>d+h,0)/n.length,u=n.reduce((d,h)=>d+Math.pow(h-s,2),0)/n.length,Ie=Math.sqrt(u),v=[...n].sort((d,h)=>d-h),E=v.length;this.latencyStats.set({latency:s,jitter:Ie,min:Math.min(...n),max:Math.max(...n),median:v.length%2===0?(v[E/2-1]+v[E/2])/2:v[Math.floor(E/2)],samples:n.length}),this.measuringLatency.set(!1),yield this.writeLine(`CMD=@BIP;CMD=@BRAND;`),yield this.startListening()})}startListening(){return z(this,null,function*(){this.flushQueues(),this.reading=!0;let t=``;for(;this.reading;)try{let[e,a]=yield this.readChunk();t+=e;let n=t.split(`
`);t=n.pop()||``;for(let r of n)this.processLine(r.trim())}catch(e){console.error(`Error reading from USB:`,e),this.reading=!1}})}readLine(){return this.lineQueue.length>0?Promise.resolve(this.lineQueue.shift()):this.waitingResolvers.length>=this.MAX_QUEUE_SIZE?Promise.reject(new Error(`Too many pending readLine requests.`)):new Promise(t=>{this.waitingResolvers.push(t)})}stopListening(){return z(this,null,function*(){this.reading=!1,this.flushQueues();for(let t=0;t<10;t++)yield this.writeLine(`#DUMMY`);yield this.writeLine(`#DUMMY@`)})}onDisconnect(){setTimeout(()=>this.autoConnect(),1e3)}static ɵfac=function(e){return new(e||i)};static ɵprov=oe({token:i,factory:i.ɵfac,providedIn:`root`})};var C=class i extends f{mode=`serial`;samplesToTest=500;baudRate=115200;port=null;reader=null;writer=null;readableStreamClosed=null;writableStreamClosed=null;requestDevice(){return z(this,null,function*(){try{this.port=yield navigator.serial.requestPort()}catch(t){console.error(`USB device request failed:`,t)}yield this.checkAvailableDevice()})}checkAvailableDevice(){return z(this,null,function*(){let t=yield navigator.serial.getPorts();this.hasAvailableDevice.set(t.length>0)})}connect(){return z(this,null,function*(){if(!this.port)return;yield this.port.open({baudRate:this.baudRate});let t=new TextDecoder,e=new TransformStream({transform(n,r){r.enqueue(t.decode(n,{stream:!0}))}});this.readableStreamClosed=this.port.readable.pipeTo(e.writable),this.reader=e.readable.getReader();let a=new TextEncoderStream;this.writableStreamClosed=(yield a.readable.pipeTo(this.port.writable))??null,this.writer=a.writable.getWriter(),this.readableStreamClosed?.catch(n=>{this.isConnected.set(!1),this.stopListening(),this.onDisconnect()}),this.isConnected.set(!0),yield this.startListening(),yield this.writeLine(`CMD=@BRAND;`)})}autoConnect(){return z(this,null,function*(){let t=yield navigator.serial.getPorts();return t.length===0?!1:(this.port=t[0],yield this.connect(),!0)})}disconnect(){return z(this,null,function*(){try{if(this.reading=!1,yield this.writeLine(`CMD=@CLA;`),this.reader){try{yield this.reader.cancel()}catch(t){console.warn(`Reader cancel failed:`,t)}this.reader.releaseLock(),this.reader=null}if(this.writer){try{yield this.writer.close()}catch(t){console.warn(`Writer close failed:`,t)}this.writer.releaseLock(),this.writer=null}this.port&&this.port.readable?.locked===!1&&this.port.writable?.locked===!1&&(yield this.port.close()),this.port=null,this.isConnected.set(!1)}catch(t){console.error(`Failed to disconnect:`,t)}})}writeLine(t){return z(this,null,function*(){if(!this.writer)return;let e=t.trim().replace(/;\s*/g,`;
`),a=e.endsWith(`
`)?e:e+`
`;yield this.writer.write(a)})}writeLineToSource(t){return z(this,null,function*(){this.writer&&(yield this.writer.write(t+`
`))})}readLineFromSource(t=0){return z(this,null,function*(){if(!this.reader)return``;let{value:e,done:a}=yield this.reader.read();if(a||e===void 0)return``;return e.trim()||(t<3?this.readLineFromSource(t+1):``)})}getProperties(){let t=this.port?.getInfo();return t?[{name:`Vendor ID`,value:t.usbVendorId?.toString(16).padStart(4,`0`)??`Unknown`},{name:`Product ID`,value:t.usbProductId?.toString(16).padStart(4,`0`)??`Unknown`}]:[]}readChunk(){return z(this,null,function*(){if(!this.reader)return[``,!1];let{value:t,done:e}=yield this.reader.read();return[t,e]})}static ɵfac=(()=>{let t;return function(a){return(t||(t=oy(i)))(a||i)}})();static ɵprov=oe({token:i,factory:i.ɵfac,providedIn:`root`})};var D=class i extends f{mode=`usb`;samplesToTest=1e3;encoder=new TextEncoder;decoder=new TextDecoder;device;interfaceNumber=0;endpointOut=0;endpointIn=0;configurationValue=1;requestDevice(){return z(this,null,function*(){try{this.device=yield navigator.usb.requestDevice({filters:[{vendorId:12346}]})}catch(t){console.error(`USB device request failed:`,t)}yield this.checkAvailableDevice()})}checkAvailableDevice(){return z(this,null,function*(){let t=yield navigator.usb.getDevices();this.hasAvailableDevice.set(t.length>0)})}connect(){return z(this,null,function*(){if(!this.device)return;this.device.opened||(yield this.device.open()),this.device.configuration===null&&(yield this.device.selectConfiguration(this.configurationValue));let t=this.findCDCInterfaceAndEndpoints();t&&(this.interfaceNumber=t.interfaceNumber,this.endpointIn=t.endpointIn,this.endpointOut=t.endpointOut,yield this.device.claimInterface(this.interfaceNumber),this.isConnected.set(!0),navigator.usb.addEventListener(`disconnect`,e=>{this.device&&e.device===this.device&&(this.isConnected.set(!1),this.stopListening(),this.onDisconnect())}),yield this.startListening(),yield this.writeLine(`CMD=@BRAND;`))})}autoConnect(){return z(this,null,function*(){let t=yield navigator.usb.getDevices();return t.length===0?!1:(this.device=t[0],yield this.connect(),!0)})}disconnect(){return z(this,null,function*(){if(this.device){yield this.writeLine(`CMD=@CLA;`);try{this.device.opened&&(yield this.device.releaseInterface(this.interfaceNumber),yield this.device.close())}catch(t){console.warn(`Error during disconnect:`,t)}finally{this.device=void 0,this.isConnected.set(!1)}yield this.checkAvailableDevice()}})}writeLine(t){return z(this,null,function*(){if(!this.device)return;let e=t.trim().replace(/;\s*/g,`;
`),a=this.encoder.encode(e.endsWith(`
`)?e:e+`
`);yield this.device.transferOut(this.endpointOut,a)})}writeLineToSource(t){return z(this,null,function*(){if(!this.device)return;let e=this.encoder.encode(t+`
`);yield this.device.transferOut(this.endpointOut,e)})}readLineFromSource(t=0){return z(this,null,function*(){if(!this.device)return``;let e=yield this.device.transferIn(this.endpointIn,64);return this.decoder.decode(e.data?.buffer||new ArrayBuffer(0)).trim()||(t<3?this.readLineFromSource(t+1):``)})}getProperties(){return this.device?[{name:`productName`,value:this.device.productName},{name:`productId`,value:`0x`+this.device.productId.toString(16).padStart(4,`0`)},{name:`vendorId`,value:`0x`+this.device.vendorId.toString(16).padStart(4,`0`)},{name:`manufacturerName`,value:this.device.manufacturerName},{name:`serialNumber`,value:this.device.serialNumber},{name:`interfaceNumber`,value:this.interfaceNumber},{name:`endpointIn`,value:this.endpointIn},{name:`endpointOut`,value:this.endpointOut}]:[]}readChunk(){return z(this,null,function*(){if(!this.device)return[``,!1];let t=yield this.device.transferIn(this.endpointIn,64);return[this.decoder.decode(t.data?.buffer||new ArrayBuffer(0)),!1]})}findCDCInterfaceAndEndpoints(){if(!this.device?.configuration?.interfaces)return null;for(let t of this.device.configuration.interfaces)for(let e of t.alternates){let{interfaceClass:a,endpoints:n}=e;if(a===10||a===255){let r=n.find(u=>u.direction===`in`)?.endpointNumber,s=n.find(u=>u.direction===`out`)?.endpointNumber;if(r!==void 0&&s!==void 0)return{interfaceNumber:t.interfaceNumber,endpointIn:r,endpointOut:s}}}return null}static ɵfac=(()=>{let t;return function(a){return(t||(t=oy(i)))(a||i)}})();static ɵprov=oe({token:i,factory:i.ɵfac,providedIn:`root`})};var m=R(`UsbSerial`);var L=class i extends f{mode=`coreusb`;samplesToTest=1e3;baudRate=115200;requestDevice(){return z(this,null,function*(){yield this.checkAvailableDevice()})}checkAvailableDevice(){return z(this,null,function*(){try{let t=yield m.getDevices();this.hasAvailableDevice.set(t.hasDevices)}catch(t){console.error(`Error checking USB devices:`,t),this.hasAvailableDevice.set(!1)}})}connect(){return z(this,null,function*(){try{(yield m.connect({baudRate:this.baudRate})).connected&&(this.isConnected.set(!0),yield this.startListening(),yield this.writeLine(`CMD=@BRAND;`))}catch(t){console.error(`USB connection failed:`,t),this.isConnected.set(!1)}})}autoConnect(){return z(this,null,function*(){return(yield m.getDevices()).hasDevices?(yield this.connect(),this.isConnected()):!1})}disconnect(){return z(this,null,function*(){try{yield this.writeLine(`CMD=@CLA;`),yield m.disconnect()}catch(t){console.warn(`Disconnect error:`,t)}finally{this.isConnected.set(!1)}yield this.checkAvailableDevice()})}writeLine(t){return z(this,null,function*(){if(!this.isConnected())return;let e=t.replace(/;/g,`;
`),a=e.endsWith(`
`)?e:e+`
`;yield m.write({data:a})})}writeLineToSource(t){return z(this,null,function*(){this.isConnected()&&(yield m.write({data:t+`
`}))})}readLineFromSource(t=0){return z(this,null,function*(){if(!this.isConnected())return``;try{return((yield m.read()).data||``).trim()||(t<500?this.readLineFromSource(t+1):``)}catch(e){return``}})}getProperties(){return[{name:`BaudRate`,value:this.baudRate},{name:`Is Connected`,value:this.isConnected()}]}readChunk(){return z(this,null,function*(){if(!this.isConnected())return[``,!1];try{let e=(yield m.read()).data||``;return e||(yield new Promise(a=>setTimeout(a,1))),[e,!1]}catch(t){return[``,!0]}})}static ɵfac=(()=>{let t;return function(a){return(t||(t=oy(i)))(a||i)}})();static ɵprov=oe({token:i,factory:i.ɵfac,providedIn:`root`})};var P=class{connectionMode=qo(`serial`);hardwareIP=qo(null);webUsbService=I(D);webSerialService=I(C);nativeUsbService=I(L);core=j.isNativePlatform()?this.nativeUsbService:this.webSerialService;constructor(){let t=localStorage.getItem(`cteno-device-connection-mode`),e=t===`usb`||t===`serial`?t:`serial`;this.connectionMode.set(e),j.isNativePlatform()?this.core=this.nativeUsbService:this.core=e===`usb`?this.webUsbService:this.webSerialService,Gu(()=>{this.hardwareIP.set(this.core.hardwareIP())}),this.core.deviceProcessLine=this.processLine.bind(this)}setMode(t){return z(this,null,function*(){localStorage.setItem(`cteno-device-connection-mode`,t),this.connectionMode.set(t),j.isNativePlatform()?this.core=this.nativeUsbService:this.core=t===`usb`?this.webUsbService:this.webSerialService,yield this.core.checkAvailableDevice()})}writeLine(t){return z(this,null,function*(){yield this.core.writeLine(t)})}readLine(){return z(this,null,function*(){return this.core.readLine()})}};var ke=class i extends P{EvtJoystick2=qo(``);EvtLight=qo(``);EvtButton=qo(``);evtKey=qo(``);evtConfig=qo(``);processLine(t){if(console.log(t),/^EVT=(JOY|LUX|BTN)/.test(t)){this.handleUnitsEvents(t);return}if(/^EVT=(KEY|SET)/.test(t)){this.handleEvents(t);return}}handleUnitsEvents(t){t.startsWith(`EVT=JOY`)&&this.EvtJoystick2.set(t.slice(7,-1).trim()),t.startsWith(`EVT=LUX`)&&this.EvtLight.set(t.slice(7,-1).trim()),t.startsWith(`EVT=BTN`)&&this.EvtButton.set(t.slice(7,-1).trim())}handleEvents(t){let e=t.match(/^EVT=KEY (.{1});?$/);e&&this.evtKey.set(e[1]);let a=t.match(/^EVT=SET (.+?);?$/);a&&this.evtConfig.set(a[1])}static ɵfac=(()=>{let t;return function(a){return(t||(t=oy(i)))(a||i)}})();static ɵprov=oe({token:i,factory:i.ɵfac,providedIn:`root`})};export{nt as i,_e as n,ke as r,Ae as t};