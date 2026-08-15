import{$t as ZI,Cn as iI,Kn as ur,Ln as pl,Nt as S$1,Pn as pc,Qn as y,Rn as qI,at as GI,bt as ME,c as Ff,d as Jh,ir as zf,kt as QI,o as En,on as aI,yn as hc,zn as rp}from"./main.js";var p=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let e=Math.max(...this.tracker);return e>1?this.rowCount+e-1:this.rowCount}positions;update(e,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(e),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(i=>this._trackTile(i))}_trackTile(e){let t=this._findMatchingGap(e.colspan);return this._markTilePosition(t,e),this.columnIndex=t+e.colspan,new S(this.rowIndex,t)}_findMatchingGap(e){if(e>this.tracker.length)throw Error(`mat-grid-list: tile with colspan ${e} is wider than grid with cols="${this.tracker.length}".`);let t=-1,i=-1;do{if(this.columnIndex+e>this.tracker.length){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}if(t=this.tracker.indexOf(0,this.columnIndex),t==-1){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}i=this._findGapEndIndex(t),this.columnIndex=t+1}while(i-t<e||i==0);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let e=0;e<this.tracker.length;e++)this.tracker[e]=Math.max(0,this.tracker[e]-1)}_findGapEndIndex(e){for(let t=e+1;t<this.tracker.length;t++)if(this.tracker[t]!=0)return t;return this.tracker.length}_markTilePosition(e,t){for(let i=0;i<t.colspan;i++)this.tracker[e+i]=t.rowspan}};var S=class{row;col;constructor(e,t){this.row=e,this.col=t}};var M=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=aI({type:n});static ɵinj=pl({imports:[En]})}return n})();var G=[`*`];var j=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--%NS%mat-grid-list-tile-header-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-header-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--%NS%mat-grid-list-tile-footer-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-footer-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`;var R=new S$1(`MAT_GRID_LIST`);var P=(()=>{class n{_element=y(ur);_gridList=y(R,{optional:!0});_rowspan=1;_colspan=1;get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(Jh(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(Jh(t))}_setStyle(t,i){this._element.nativeElement.style[t]=i}static ɵfac=function(i){return new(i||n)};static ɵcmp=iI({type:n,selectors:[[`mat-grid-tile`]],hostAttrs:[1,`mat-grid-tile`],hostVars:2,hostBindings:function(i,r){i&2&&zf(`rowspan`,r.rowspan)(`colspan`,r.colspan)},inputs:{rowspan:`rowspan`,colspan:`colspan`},exportAs:[`matGridTile`],ngContentSelectors:G,decls:2,vars:0,consts:[[1,`mat-grid-tile-content`]],template:function(i,r){i&1&&(qI(),pc(0,`div`,0),GI(1),hc())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--%NS%mat-grid-list-tile-header-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-header-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--%NS%mat-grid-list-tile-footer-primary-text-size, var(--%NS%mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--%NS%mat-grid-list-tile-footer-secondary-text-size, var(--%NS%mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2})}return n})();var F=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;var d=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(e,t,i,r){this._gutterSize=L(e),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=i,this._direction=r}getBaseTileSize(e,t){return`(${e}% - (${this._gutterSize} * ${t}))`}getTilePosition(e,t){return t===0?`0`:s(`(${e} + ${this._gutterSize}) * ${t}`)}getTileSize(e,t){return`(${e} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(e,t,i){let r=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(e,i,r,o),this.setRowStyles(e,t,r,o)}setColStyles(e,t,i,r){let o=this.getBaseTileSize(i,r),a=this._direction===`rtl`?`right`:`left`;e._setStyle(a,this.getTilePosition(o,t)),e._setStyle(`width`,s(this.getTileSize(o,e.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(e){return`${this._rowspan} * ${this.getTileSize(e,1)}`}getComputedHeight(){return null}};var T=class extends d{fixedRowHeight;constructor(e){super(),this.fixedRowHeight=e}init(e,t,i,r){super.init(e,t,i,r),this.fixedRowHeight=L(this.fixedRowHeight),F.test(this.fixedRowHeight)}setRowStyles(e,t){e._setStyle(`top`,this.getTilePosition(this.fixedRowHeight,t)),e._setStyle(`height`,s(this.getTileSize(this.fixedRowHeight,e.rowspan)))}getComputedHeight(){return[`height`,s(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle([`height`,null]),e._tiles&&e._tiles.forEach(t=>{t._setStyle(`top`,null),t._setStyle(`height`,null)})}};var b=class extends d{rowHeightRatio;baseTileHeight;constructor(e){super(),this._parseRatio(e)}setRowStyles(e,t,i,r){let o=i/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,r),e._setStyle(`marginTop`,this.getTilePosition(this.baseTileHeight,t)),e._setStyle(`paddingTop`,s(this.getTileSize(this.baseTileHeight,e.rowspan)))}getComputedHeight(){return[`paddingBottom`,s(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle([`paddingBottom`,null]),e._tiles.forEach(t=>{t._setStyle(`marginTop`,null),t._setStyle(`paddingTop`,null)})}_parseRatio(e){let t=e.split(`:`);t.length,this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}};var z=class extends d{setRowStyles(e,t){let i=100/this._rowspan,r=(this._rows-1)/this._rows,o=this.getBaseTileSize(i,r);e._setStyle(`top`,this.getTilePosition(o,t)),e._setStyle(`height`,s(this.getTileSize(o,e.rowspan)))}reset(e){e._tiles&&e._tiles.forEach(t=>{t._setStyle(`top`,null),t._setStyle(`height`,null)})}};function s(n){return`calc(${n})`}function L(n){return n.match(/([A-Za-z%]+)$/)?n:`${n}px`}var B=`fit`;var ot=(()=>{class n{_element=y(ur);_dir=y(Ff,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter=`1px`;_tileStyler;_tiles;get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(Jh(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??``}`}get rowHeight(){return this._rowHeight}set rowHeight(t){let i=`${t??``}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler(`1:1`)}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),t===B?this._tileStyler=new z:t&&t.indexOf(`:`)>-1?this._tileStyler=new b(t):this._tileStyler=new T(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new p);let t=this._tileCoordinator,i=this._tiles.filter(o=>!o._gridList||o._gridList===this),r=this._dir?this._dir.value:`ltr`;this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,t,this.cols,r),i.forEach((o,a)=>{let k=t.positions[a];this._tileStyler.setStyle(o,k.row,k.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static ɵfac=function(i){return new(i||n)};static ɵcmp=iI({type:n,selectors:[[`mat-grid-list`]],contentQueries:function(i,r,o){if(i&1&&rp(o,P,5),i&2){let a;QI(a=ZI())&&(r._tiles=a)}},hostAttrs:[1,`mat-grid-list`],hostVars:1,hostBindings:function(i,r){i&2&&zf(`cols`,r.cols)},inputs:{cols:`cols`,gutterSize:`gutterSize`,rowHeight:`rowHeight`},exportAs:[`matGridList`],features:[ME([{provide:R,useExisting:n}])],ngContentSelectors:G,decls:2,vars:0,template:function(i,r){i&1&&(qI(),pc(0,`div`),GI(1),hc())},styles:[j],encapsulation:2})}return n})();var st=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=aI({type:n});static ɵinj=pl({imports:[M,En,M]})}return n})();export{ot as n,st as r,P as t};