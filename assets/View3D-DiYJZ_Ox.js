import{r as h,c as Ss,s as Nn,p as Zt,W as $n,o as Es,u as Ps,j as r,b as ht,a as zs,d as qn,e as Te,f as Ae,g as Bt,h as Ls,i as Is,S as Mt,k as Ue,l as ut,m as As,n as Qt,q as $e,t as _s,v as jt,w as Os,x as Cs,y as Ts,T as we,z as tt,B as be,A as St,C as He,D as Et,U as pe,E as Vn,F as dt,G as Ds,H as Rs,I as Fs,J as Us,K as Yt,L as Ws,M as pn,N as Bs,O as hn,P as Ys,Q as ks,R as Gs,V as Kn,X as Hs,Y as Xs,Z as Ns,_ as Jt,$ as Zn,a0 as $s,a1 as Qn,a2 as mn,a3 as en,a4 as kt,a5 as Gt,a6 as qs,a7 as Vs,a8 as Ks,a9 as Zs,aa as je,ab as nt,ac as Qs,ad as ke,ae as _e,af as ct,ag as Js,ah as xn,ai as eo,aj as to,ak as Pt,al as no,am as so,an as zt,ao as oo,ap as ro,aq as io,ar as ao,as as co,at as lo,au as Jn,av as ft,aw as yn,ax as uo,ay as gn,az as Ge,aA as fo,aB as po,aC as ho,aD as vn,aE as Xe,aF as mo,aG as Ne,aH as xo,aI as es,aJ as yo,aK as wn,aL as go,aM as vo,aN as st,aO as wo,aP as bo,aQ as Mo,aR as bn,aS as jo,aT as Mn,aU as jn,aV as So,aW as Eo,aX as Po,aY as Lt,aZ as zo,a_ as Lo,a$ as Io,b0 as Ao,b1 as _o,b2 as Oo,b3 as Sn,b4 as En,b5 as me,b6 as Co,b7 as To,b8 as ts,b9 as Do,ba as Ro,bb as Fo,bc as Uo,bd as Wo,be as Bo,bf as Pn,bg as Yo,bh as ko,bi as Go,bj as zn,bk as Ln}from"./index-ClejXVOR.js";import{M as Ht,D as Ho,C as Xo,S as No,a as $o,b as qo,G as Vo,n as Xt,O as Ko,W as Zo,c as Qo,F as Jo,d as er}from"./Door3D-C8a3AsAh.js";import{u as B,a as ie,V as W,_ as Nt,D as ns,b as Se,P as ss,O as os,R as tr,I as nr,F as In,c as $t,d as Fe,W as sr,B as tn,S as rs,e as or,U as An,f as _n,M as rr,g as We,L as ir,h as is,i as ar,C as cr,j as as,k as lr,l as ur,m as dr,n as cs,o as ae,p as Ie,Q as ls,q as us,r as ds,s as fs,t as Le,v as fr,w as mt,x as It,T as pr,E as hr,y as mr,z as xr}from"./CabinetMesh-CCmwg3HY.js";const qe=new W,nn=new W,yr=new W,On=new Se;function gr(e,t,n){const s=qe.setFromMatrixPosition(e.matrixWorld);s.project(t);const c=n.width/2,o=n.height/2;return[s.x*c+c,-(s.y*o)+o]}function vr(e,t){const n=qe.setFromMatrixPosition(e.matrixWorld),s=nn.setFromMatrixPosition(t.matrixWorld),c=n.sub(s),o=t.getWorldDirection(yr);return c.angleTo(o)>Math.PI/2}function wr(e,t,n,s){const c=qe.setFromMatrixPosition(e.matrixWorld),o=c.clone();o.project(t),On.set(o.x,o.y),n.setFromCamera(On,t);const a=n.intersectObjects(s,!0);if(a.length){const i=a[0].distance;return c.distanceTo(n.ray.origin)<i}return!0}function br(e,t){if(t instanceof os)return t.zoom;if(t instanceof ss){const n=qe.setFromMatrixPosition(e.matrixWorld),s=nn.setFromMatrixPosition(t.matrixWorld),c=t.fov*Math.PI/180,o=n.distanceTo(s);return 1/(2*Math.tan(c/2)*o)}else return 1}function Mr(e,t,n){if(t instanceof ss||t instanceof os){const s=qe.setFromMatrixPosition(e.matrixWorld),c=nn.setFromMatrixPosition(t.matrixWorld),o=s.distanceTo(c),a=(n[1]-n[0])/(t.far-t.near),i=n[1]-a*t.far;return Math.round(a*o+i)}}const qt=e=>Math.abs(e)<1e-10?0:e;function ps(e,t,n=""){let s="matrix3d(";for(let c=0;c!==16;c++)s+=qt(t[c]*e.elements[c])+(c!==15?",":")");return n+s}const jr=(e=>t=>ps(t,e))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),Sr=(e=>(t,n)=>ps(t,e(n),"translate(-50%,-50%)"))(e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1]);function Er(e){return e&&typeof e=="object"&&"current"in e}const De=h.forwardRef(({children:e,eps:t=.001,style:n,className:s,prepend:c,center:o,fullscreen:a,portal:i,distanceFactor:l,sprite:d=!1,transform:u=!1,occlude:y,onOcclude:w,castShadow:L,receiveShadow:m,material:j,geometry:M,zIndexRange:p=[16777271,0],calculatePosition:b=gr,as:x="div",wrapperClass:g,pointerEvents:v="auto",...f},P)=>{const{gl:A,camera:I,scene:z,size:O,raycaster:F,events:Y,viewport:V}=B(),[k]=h.useState(()=>document.createElement(x)),K=h.useRef(),H=h.useRef(null),J=h.useRef(0),T=h.useRef([0,0]),_=h.useRef(null),E=h.useRef(null),U=(i==null?void 0:i.current)||Y.connected||A.domElement.parentNode,C=h.useRef(null),D=h.useRef(!1),R=h.useMemo(()=>y&&y!=="blending"||Array.isArray(y)&&y.length&&Er(y[0]),[y]);h.useLayoutEffect(()=>{const Z=A.domElement;y&&y==="blending"?(Z.style.zIndex=`${Math.floor(p[0]/2)}`,Z.style.position="absolute",Z.style.pointerEvents="none"):(Z.style.zIndex=null,Z.style.position=null,Z.style.pointerEvents=null)},[y]),h.useLayoutEffect(()=>{if(H.current){const Z=K.current=Ss(k);if(z.updateMatrixWorld(),u)k.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const G=b(H.current,I,O);k.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${G[0]}px,${G[1]}px,0);transform-origin:0 0;`}return U&&(c?U.prepend(k):U.appendChild(k)),()=>{U&&U.removeChild(k),Z.unmount()}}},[U,u]),h.useLayoutEffect(()=>{g&&(k.className=g)},[g]);const N=h.useMemo(()=>u?{position:"absolute",top:0,left:0,width:O.width,height:O.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:o?"translate3d(-50%,-50%,0)":"none",...a&&{top:-O.height/2,left:-O.width/2,width:O.width,height:O.height},...n},[n,o,a,O,u]),Q=h.useMemo(()=>({position:"absolute",pointerEvents:v}),[v]);h.useLayoutEffect(()=>{if(D.current=!1,u){var Z;(Z=K.current)==null||Z.render(h.createElement("div",{ref:_,style:N},h.createElement("div",{ref:E,style:Q},h.createElement("div",{ref:P,className:s,style:n,children:e}))))}else{var G;(G=K.current)==null||G.render(h.createElement("div",{ref:P,style:N,className:s,children:e}))}});const $=h.useRef(!0);ie(Z=>{if(H.current){I.updateMatrixWorld(),H.current.updateWorldMatrix(!0,!1);const G=u?T.current:b(H.current,I,O);if(u||Math.abs(J.current-I.zoom)>t||Math.abs(T.current[0]-G[0])>t||Math.abs(T.current[1]-G[1])>t){const ve=vr(H.current,I);let ue=!1;R&&(Array.isArray(y)?ue=y.map(re=>re.current):y!=="blending"&&(ue=[z]));const Ee=$.current;if(ue){const re=wr(H.current,I,F,ue);$.current=re&&!ve}else $.current=!ve;Ee!==$.current&&(w?w(!$.current):k.style.display=$.current?"block":"none");const Re=Math.floor(p[0]/2),xt=y?R?[p[0],Re]:[Re-1,0]:p;if(k.style.zIndex=`${Mr(H.current,I,xt)}`,u){const[re,Be]=[O.width/2,O.height/2],Ye=I.projectionMatrix.elements[5]*Be,{isOrthographicCamera:Ve,top:de,left:Ke,bottom:Ze,right:Qe}=I,yt=jr(I.matrixWorldInverse),he=Ve?`scale(${Ye})translate(${qt(-(Qe+Ke)/2)}px,${qt((de+Ze)/2)}px)`:`translateZ(${Ye}px)`;let fe=H.current.matrixWorld;d&&(fe=I.matrixWorldInverse.clone().transpose().copyPosition(fe).scale(H.current.scale),fe.elements[3]=fe.elements[7]=fe.elements[11]=0,fe.elements[15]=1),k.style.width=O.width+"px",k.style.height=O.height+"px",k.style.perspective=Ve?"":`${Ye}px`,_.current&&E.current&&(_.current.style.transform=`${he}${yt}translate(${re}px,${Be}px)`,E.current.style.transform=Sr(fe,1/((l||10)/400)))}else{const re=l===void 0?1:br(H.current,I)*l;k.style.transform=`translate3d(${G[0]}px,${G[1]}px,0) scale(${re})`}T.current=G,J.current=I.zoom}}if(!R&&C.current&&!D.current)if(u){if(_.current){const G=_.current.children[0];if(G!=null&&G.clientWidth&&G!=null&&G.clientHeight){const{isOrthographicCamera:ve}=I;if(ve||M)f.scale&&(Array.isArray(f.scale)?f.scale instanceof W?C.current.scale.copy(f.scale.clone().divideScalar(1)):C.current.scale.set(1/f.scale[0],1/f.scale[1],1/f.scale[2]):C.current.scale.setScalar(1/f.scale));else{const ue=(l||10)/400,Ee=G.clientWidth*ue,Re=G.clientHeight*ue;C.current.scale.set(Ee,Re,1)}D.current=!0}}}else{const G=k.children[0];if(G!=null&&G.clientWidth&&G!=null&&G.clientHeight){const ve=1/V.factor,ue=G.clientWidth*ve,Ee=G.clientHeight*ve;C.current.scale.set(ue,Ee,1),D.current=!0}C.current.lookAt(Z.camera.position)}});const q=h.useMemo(()=>({vertexShader:u?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[u]);return h.createElement("group",Nt({},f,{ref:H}),y&&!R&&h.createElement("mesh",{castShadow:L,receiveShadow:m,ref:C},M||h.createElement("planeGeometry",null),j||h.createElement("shaderMaterial",{side:ns,vertexShader:q.vertexShader,fragmentShader:q.fragmentShader})))}),hs=parseInt(tr.replace(/\D+/g,"")),ms=hs>=125?"uv1":"uv2",Cn=new tn,ot=new W;class sn extends nr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new In(t,3)),this.setAttribute("uv",new In(n,2))}applyMatrix4(t){const n=this.attributes.instanceStart,s=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(t),s.applyMatrix4(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const s=new $t(n,6,1);return this.setAttribute("instanceStart",new Fe(s,3,0)),this.setAttribute("instanceEnd",new Fe(s,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t,n=3){let s;t instanceof Float32Array?s=t:Array.isArray(t)&&(s=new Float32Array(t));const c=new $t(s,n*2,1);return this.setAttribute("instanceColorStart",new Fe(c,n,0)),this.setAttribute("instanceColorEnd",new Fe(c,n,n)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new sr(t.geometry)),this}fromLineSegments(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;t!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Cn.setFromBufferAttribute(n),this.boundingBox.union(Cn))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0&&n!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let c=0;for(let o=0,a=t.count;o<a;o++)ot.fromBufferAttribute(t,o),c=Math.max(c,s.distanceToSquared(ot)),ot.fromBufferAttribute(n,o),c=Math.max(c,s.distanceToSquared(ot));this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}class xs extends sn{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const n=t.length-3,s=new Float32Array(2*n);for(let c=0;c<n;c+=3)s[2*c]=t[c],s[2*c+1]=t[c+1],s[2*c+2]=t[c+2],s[2*c+3]=t[c+3],s[2*c+4]=t[c+4],s[2*c+5]=t[c+5];return super.setPositions(s),this}setColors(t,n=3){const s=t.length-n,c=new Float32Array(2*s);if(n===3)for(let o=0;o<s;o+=n)c[2*o]=t[o],c[2*o+1]=t[o+1],c[2*o+2]=t[o+2],c[2*o+3]=t[o+3],c[2*o+4]=t[o+4],c[2*o+5]=t[o+5];else for(let o=0;o<s;o+=n)c[2*o]=t[o],c[2*o+1]=t[o+1],c[2*o+2]=t[o+2],c[2*o+3]=t[o+3],c[2*o+4]=t[o+4],c[2*o+5]=t[o+5],c[2*o+6]=t[o+6],c[2*o+7]=t[o+7];return super.setColors(c,n),this}fromLine(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}}class on extends or{constructor(t){super({type:"LineMaterial",uniforms:An.clone(An.merge([_n.common,_n.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Se(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${hs>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(n){this.uniforms.diffuse.value=n}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(n){n===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(n){this.uniforms.linewidth.value=n}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(n){!!n!="USE_DASH"in this.defines&&(this.needsUpdate=!0),n===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(n){this.uniforms.dashScale.value=n}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(n){this.uniforms.dashSize.value=n}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(n){this.uniforms.dashOffset.value=n}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(n){this.uniforms.gapSize.value=n}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(n){this.uniforms.resolution.value.copy(n)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(n){!!n!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),n===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}const At=new We,Tn=new W,Dn=new W,te=new We,ne=new We,xe=new We,_t=new W,Ot=new is,se=new ir,Rn=new W,rt=new tn,it=new rs,ye=new We;let ge,Ce;function Fn(e,t,n){return ye.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),ye.multiplyScalar(1/ye.w),ye.x=Ce/n.width,ye.y=Ce/n.height,ye.applyMatrix4(e.projectionMatrixInverse),ye.multiplyScalar(1/ye.w),Math.abs(Math.max(ye.x,ye.y))}function Pr(e,t){const n=e.matrixWorld,s=e.geometry,c=s.attributes.instanceStart,o=s.attributes.instanceEnd,a=Math.min(s.instanceCount,c.count);for(let i=0,l=a;i<l;i++){se.start.fromBufferAttribute(c,i),se.end.fromBufferAttribute(o,i),se.applyMatrix4(n);const d=new W,u=new W;ge.distanceSqToSegment(se.start,se.end,u,d),u.distanceTo(d)<Ce*.5&&t.push({point:u,pointOnLine:d,distance:ge.origin.distanceTo(u),object:e,face:null,faceIndex:i,uv:null,[ms]:null})}}function zr(e,t,n){const s=t.projectionMatrix,o=e.material.resolution,a=e.matrixWorld,i=e.geometry,l=i.attributes.instanceStart,d=i.attributes.instanceEnd,u=Math.min(i.instanceCount,l.count),y=-t.near;ge.at(1,xe),xe.w=1,xe.applyMatrix4(t.matrixWorldInverse),xe.applyMatrix4(s),xe.multiplyScalar(1/xe.w),xe.x*=o.x/2,xe.y*=o.y/2,xe.z=0,_t.copy(xe),Ot.multiplyMatrices(t.matrixWorldInverse,a);for(let w=0,L=u;w<L;w++){if(te.fromBufferAttribute(l,w),ne.fromBufferAttribute(d,w),te.w=1,ne.w=1,te.applyMatrix4(Ot),ne.applyMatrix4(Ot),te.z>y&&ne.z>y)continue;if(te.z>y){const x=te.z-ne.z,g=(te.z-y)/x;te.lerp(ne,g)}else if(ne.z>y){const x=ne.z-te.z,g=(ne.z-y)/x;ne.lerp(te,g)}te.applyMatrix4(s),ne.applyMatrix4(s),te.multiplyScalar(1/te.w),ne.multiplyScalar(1/ne.w),te.x*=o.x/2,te.y*=o.y/2,ne.x*=o.x/2,ne.y*=o.y/2,se.start.copy(te),se.start.z=0,se.end.copy(ne),se.end.z=0;const j=se.closestPointToPointParameter(_t,!0);se.at(j,Rn);const M=ar.lerp(te.z,ne.z,j),p=M>=-1&&M<=1,b=_t.distanceTo(Rn)<Ce*.5;if(p&&b){se.start.fromBufferAttribute(l,w),se.end.fromBufferAttribute(d,w),se.start.applyMatrix4(a),se.end.applyMatrix4(a);const x=new W,g=new W;ge.distanceSqToSegment(se.start,se.end,g,x),n.push({point:g,pointOnLine:x,distance:ge.origin.distanceTo(g),object:e,face:null,faceIndex:w,uv:null,[ms]:null})}}}class ys extends rr{constructor(t=new sn,n=new on({color:Math.random()*16777215})){super(t,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,n=t.attributes.instanceStart,s=t.attributes.instanceEnd,c=new Float32Array(2*n.count);for(let a=0,i=0,l=n.count;a<l;a++,i+=2)Tn.fromBufferAttribute(n,a),Dn.fromBufferAttribute(s,a),c[i]=i===0?0:c[i-1],c[i+1]=c[i]+Tn.distanceTo(Dn);const o=new $t(c,2,1);return t.setAttribute("instanceDistanceStart",new Fe(o,1,0)),t.setAttribute("instanceDistanceEnd",new Fe(o,1,1)),this}raycast(t,n){const s=this.material.worldUnits,c=t.camera;c===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const o=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ge=t.ray;const a=this.matrixWorld,i=this.geometry,l=this.material;Ce=l.linewidth+o,i.boundingSphere===null&&i.computeBoundingSphere(),it.copy(i.boundingSphere).applyMatrix4(a);let d;if(s)d=Ce*.5;else{const y=Math.max(c.near,it.distanceToPoint(ge.origin));d=Fn(c,y,l.resolution)}if(it.radius+=d,ge.intersectsSphere(it)===!1)return;i.boundingBox===null&&i.computeBoundingBox(),rt.copy(i.boundingBox).applyMatrix4(a);let u;if(s)u=Ce*.5;else{const y=Math.max(c.near,rt.distanceToPoint(ge.origin));u=Fn(c,y,l.resolution)}rt.expandByScalar(u),ge.intersectsBox(rt)!==!1&&(s?Pr(this,n):zr(this,c,n))}onBeforeRender(t){const n=this.material.uniforms;n&&n.resolution&&(t.getViewport(At),this.material.uniforms.resolution.value.set(At.z,At.w))}}class Lr extends ys{constructor(t=new xs,n=new on({color:Math.random()*16777215})){super(t,n),this.isLine2=!0,this.type="Line2"}}const Un=h.forwardRef(function({points:t,color:n=16777215,vertexColors:s,linewidth:c,lineWidth:o,segments:a,dashed:i,...l},d){var u,y;const w=B(p=>p.size),L=h.useMemo(()=>a?new ys:new Lr,[a]),[m]=h.useState(()=>new on),j=(s==null||(u=s[0])==null?void 0:u.length)===4?4:3,M=h.useMemo(()=>{const p=a?new sn:new xs,b=t.map(x=>{const g=Array.isArray(x);return x instanceof W||x instanceof We?[x.x,x.y,x.z]:x instanceof Se?[x.x,x.y,0]:g&&x.length===3?[x[0],x[1],x[2]]:g&&x.length===2?[x[0],x[1],0]:x});if(p.setPositions(b.flat()),s){n=16777215;const x=s.map(g=>g instanceof cr?g.toArray():g);p.setColors(x.flat(),j)}return p},[t,a,s,j]);return h.useLayoutEffect(()=>{L.computeLineDistances()},[t,L]),h.useLayoutEffect(()=>{i?m.defines.USE_DASH="":delete m.defines.USE_DASH,m.needsUpdate=!0},[i,m]),h.useEffect(()=>()=>{M.dispose(),m.dispose()},[M]),h.createElement("primitive",Nt({object:L,ref:d},l),h.createElement("primitive",{object:M,attach:"geometry"}),h.createElement("primitive",Nt({object:m,attach:"material",color:n,vertexColors:!!s,resolution:[w.width,w.height],linewidth:(y=c??o)!==null&&y!==void 0?y:1,dashed:i,transparent:j===4},l)))});function gs(e,t,n,s){const c=new as(e.map(l=>new Se(l.x-t,s?n-l.y:l.y-n))),o=new lr(c),a=o.attributes.position,i=o.attributes.uv;for(let l=0;l<a.count;l++)i.setXY(l,t+a.getX(l),s?n-a.getY(l):n+a.getY(l));return o}const Ir=e=>e?e.map(t=>`${t.x.toFixed(3)},${t.y.toFixed(3)}`).join(";"):"";function vs(e,t,n){const s=new ur(e);return s.wrapS=s.wrapT=dr,s.repeat.set(1/t.w,1/t.h),n&&(s.colorSpace=cs),s.anisotropy=8,s}const pt=new Map;function rn(e,t){const n=`${e}|${t}`;let s=pt.get(n);if(!s){const c=Nn(e,t);s=vs(c.canvas,c,!0),pt.set(n,s)}return s}const Ar={coat:2.2,paper:1,flower:.6,silk:.8,paint:1,bathwall:.6},Vt=new Map;function ws(e,t){var s;const n=Nn("wall",t);(s=e.bumpMap)==null||s.dispose(),e.bumpMap=n.bump?vs(n.bump,n,!1):null,e.bumpScale=Ar[Zt($n,t).finish.key]??1}function _r(e){let t=Vt.get(e);return t||(t=new ae({map:rn("wall",e),roughness:Zt($n,e).finish.rough}),ws(t,e),Vt.set(e,t)),t}Es((e,t)=>{const n=`${e}|${t}`,s=pt.get(n);if(!s)return;pt.delete(n);const c=rn(e,t);setTimeout(()=>s.dispose(),2e3);const o=e==="wall"?Vt.get(t):void 0;o&&(o.map=c,ws(o,t),o.needsUpdate=!0)});const Ct=new Ie(new W(0,1,0),0),Wn=new W(0,1,0),Tt=new W,Or="#4b5563",Dt="#8d6e52";function Rt({a:e,b:t,r:n,color:s}){const{mid:c,q:o,L:a}=h.useMemo(()=>{const i=new W(...e),l=new W(...t),d=l.clone().sub(i),u=d.length();return{mid:i.add(l).multiplyScalar(.5),q:new ls().setFromUnitVectors(Wn,u>1e-6?d.normalize():Wn),L:u}},[...e,...t]);return r.jsxs("mesh",{position:c,quaternion:o,children:[r.jsx("capsuleGeometry",{args:[n,Math.max(.001,a),4,10]}),r.jsx("meshStandardMaterial",{color:s,roughness:.8})]})}const bs=h.memo(function({age:t,sex:n,pose:s,seat:c,chair:o}){const a=ht(t,n),i=qn(t).color,l=_s(t),d=a.shoulderW*.22,u=a.shoulderW*.16,y=a.shoulderW*.1,w=a.depth/2,L=s==="stand"?0:c,m=s==="stand"?a.H:L+a.sitH,j=m-a.head/2,M=m-a.head*1.3,p=s==="stand"?a.leg:L+w*.8,b=a.shoulderW/2-y;let x,g;if(s==="stand")x=[-1,1].flatMap(v=>[[[v*d,u,0],[v*d,a.leg,0]]]),g=[-1,1].map(v=>[v*(b+y*.6),M-a.arm+y,0]);else if(s==="sit"){const v=L+u,f=Math.max(v,a.shin),P=Math.sqrt(Math.max(.01,a.thigh**2-(f-v)**2)),A=Math.max(u,f-a.shin+u);x=[-1,1].flatMap(I=>[[[I*d,v,0],[I*d,f,P]],[[I*d,f,P],[I*d,A,P+.04]]]),g=[-1,1].map(I=>[I*(d+y*.5),v+u+y,P*.6])}else{const v=d+a.thigh*.45,f=a.thigh*.8;x=[-1,1].flatMap(P=>[[[P*d,u,0],[P*v,u,f]],[[P*v,u,f],[-P*d,u,a.thigh*.35]]]),g=[-1,1].map(P=>[P*(d+a.thigh*.35),u*2+y,a.thigh*.6])}return r.jsxs("group",{children:[x.map(([v,f],P)=>r.jsx(Rt,{a:v,b:f,r:u,color:Or},P)),r.jsxs("mesh",{position:[0,(p+M)/2,0],scale:[a.shoulderW*.46/w,1,1],children:[r.jsx("capsuleGeometry",{args:[w,Math.max(.01,M-p-w),4,12]}),r.jsx("meshStandardMaterial",{color:i,roughness:.85})]}),[-1,1].map((v,f)=>r.jsx(Rt,{a:[v*b,M-y*.5,0],b:g[f],r:y,color:i},f)),g.map((v,f)=>r.jsxs("mesh",{position:v,children:[r.jsx("sphereGeometry",{args:[y*1.1,10,8]}),r.jsx("meshStandardMaterial",{color:Mt})]},f)),r.jsx(Rt,{a:[0,M,0],b:[0,j,0],r:a.head*.17,color:Mt}),r.jsxs("mesh",{position:[0,j,0],children:[r.jsx("sphereGeometry",{args:[a.head/2,20,16]}),r.jsx("meshStandardMaterial",{color:Mt,roughness:.7})]}),r.jsxs("mesh",{position:[0,j+a.head*.06,-a.head*.06],children:[r.jsx("sphereGeometry",{args:[a.head*.52,20,16]}),r.jsx("meshStandardMaterial",{color:l,roughness:.9})]}),n==="f"&&r.jsxs("mesh",{position:[0,j-a.head*.12,-a.head*.18],children:[r.jsx("sphereGeometry",{args:[a.head*.42,16,12]}),r.jsx("meshStandardMaterial",{color:l,roughness:.9})]}),[-1,1].map(v=>r.jsxs("mesh",{position:[v*a.head*.18,j,a.head*.47],children:[r.jsx("sphereGeometry",{args:[a.head*.06,8,6]}),r.jsx("meshBasicMaterial",{color:"#222"})]},v)),o&&r.jsx(Cr,{seat:L})]})});function Cr({seat:e}){return r.jsxs("group",{position:[0,0,-.04],children:[r.jsxs("mesh",{position:[0,e-.02,0],children:[r.jsx("boxGeometry",{args:[.42,.04,.42]}),r.jsx("meshStandardMaterial",{color:Dt})]}),r.jsxs("mesh",{position:[0,e+.24,-.42/2+.02],children:[r.jsx("boxGeometry",{args:[.42,.44,.04]}),r.jsx("meshStandardMaterial",{color:Dt})]}),[-1,1].flatMap(n=>[-1,1].map(s=>r.jsxs("mesh",{position:[n*(.42/2-.03),(e-.04)/2,s*(.42/2-.03)],children:[r.jsx("boxGeometry",{args:[.03,e-.04,.03]}),r.jsx("meshStandardMaterial",{color:Dt})]},`${n}${s}`)))]})}function Tr({world:e,dispatch:t,controls:n,onMenu:s,still:c,wide:o}){const{list:a,active:i,eye:l}=Ps();return r.jsxs(r.Fragment,{children:[a.map(d=>r.jsx(Dr,{p:d,active:d.id===i,hidden:d.id===l,world:e,dispatch:t,controls:n,onMenu:s,still:c},d.id)),r.jsx(Rr,{controls:n}),r.jsx(Fr,{controls:n,wide:o??null})]})}function Dr({p:e,active:t,hidden:n,world:s,dispatch:c,controls:o,onMenu:a,still:i}){const l=ht(e.age,e.sex),d=h.useRef(null),u=h.useMemo(()=>new W,[]),y=e.pose==="stand"?l.H:e.seat+l.sitH,w=j=>{if(j.button===2||j.button===1)return;if(j.stopPropagation(),i){const{clientX:b,clientY:x}=j.nativeEvent;Qt(j.pointerId)||$e(j.nativeEvent,()=>a({kind:"person",id:e.id,at:{x:e.x,y:e.y}},b,x));return}c({type:"select",id:null}),Te.set({active:e.id});const{clientX:M,clientY:p}=j.nativeEvent;$e(j.nativeEvent,()=>{d.current=null,a({kind:"person",id:e.id,at:{x:e.x,y:e.y}},M,p)}),j.ray.intersectPlane(Ct,u)&&(d.current={dx:u.x-e.x,dz:u.z-e.y,sx:M,sy:p,moved:!1},j.target.setPointerCapture(j.pointerId),o.current&&(o.current.enabled=!1))},L=j=>{const M=d.current;if(M){if(!M.moved){if(Math.hypot(j.nativeEvent.clientX-M.sx,j.nativeEvent.clientY-M.sy)<Ue(j.nativeEvent.pointerType))return;M.moved=!0,ut(),j.ray.intersectPlane(Ct,u)&&Object.assign(M,{dx:u.x-e.x,dz:u.z-e.y})}j.ray.intersectPlane(Ct,u)&&As(e,{x:u.x-M.dx,y:u.z-M.dz},s)}},m=j=>{var M,p;d.current=null,(p=(M=j.target).releasePointerCapture)==null||p.call(M,j.pointerId),o.current&&!Te.get().eye&&!Ae.on&&(o.current.enabled=!0)};return n?null:r.jsxs("group",{position:[e.x,0,e.y],"rotation-y":-e.rot,onPointerDown:w,onPointerMove:L,onPointerUp:m,children:[r.jsx(bs,{age:e.age,sex:e.sex,pose:e.pose,seat:e.seat,chair:!!e.chair}),r.jsxs("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,children:[r.jsx("circleGeometry",{args:[l.r*1.1,24]}),r.jsx("meshBasicMaterial",{color:"#000",transparent:!0,opacity:.12,depthWrite:!1})]}),t&&r.jsxs("mesh",{"position-y":.008,"rotation-x":-Math.PI/2,children:[r.jsx("ringGeometry",{args:[l.r+.04,l.r+.08,40]}),r.jsx("meshBasicMaterial",{color:"#3b6cff"})]}),t&&r.jsx(De,{position:[0,y+.16,0],center:!0,distanceFactor:8,zIndexRange:[13,0],style:{pointerEvents:"none"},children:r.jsxs("div",{className:"tag3d person on",style:{borderColor:qn(e.age).color},children:[zs(e)," ",Math.round(l.H*100),"cm",r.jsx("small",{children:e.pose==="stand"?`눈높이 ${Math.round(l.eye*100)}`:`앉은 눈높이 ${Math.round((e.seat+l.sitH-l.head/2)*100)}`})]})})]})}function Rr({controls:e}){const t=B(n=>n.camera);return h.useEffect(()=>()=>void(jt.value=0),[]),ie(()=>{var s;const n=(s=e.current)==null?void 0:s.target;!n||Te.get().eye||(Ae.on?(t.getWorldDirection(Tt),jt.value=Math.atan2(-Tt.x,-Tt.z)):jt.value=Math.atan2(t.position.x-n.x,t.position.z-n.z))}),null}function Fr({controls:e,wide:t}){const n=Bt(l=>l.eye),s=B(l=>l.camera),c=B(l=>l.size),o=t==null?70:Ls(c.width/Math.max(1,c.height),t),a=h.useRef(o);a.current=o,h.useEffect(()=>{!n||s.fov===o||(s.fov=o,s.updateProjectionMatrix())},[o]);const i=h.useRef(null);return h.useEffect(()=>{if(!n)return;const l=e.current,d={pos:s.position.clone(),target:l==null?void 0:l.target.clone(),fov:s.fov};return i.current=n,l&&(l.enabled=!1),s.fov=a.current,s.updateProjectionMatrix(),()=>{i.current=null,s.position.copy(d.pos),s.fov=d.fov,s.updateProjectionMatrix(),l&&d.target&&(l.target.copy(d.target),l.enabled=!0,l.update())}},[n]),ie(()=>{if(!n||i.current!==n)return;const l=Te.get().list.find(w=>w.id===n);if(!l)return;const d=ht(l.age,l.sex),u=l.pose==="stand"?d.eye:l.seat+d.sitH-d.head/2,y=Is(l.rot);s.position.set(l.x+y.x*d.head*.3,u,l.y+y.y*d.head*.3),s.lookAt(l.x+y.x*3,u-.4,l.y+y.y*3)}),null}const Kt=()=>null;function Ur({list:e,rooms:t}){const n=h.useMemo(()=>({toe:new ae({color:"#4a4846",roughness:.8}),top:new ae({color:"#ecebe7",roughness:.35}),steel:new ae({color:"#b9bec4",roughness:.3,metalness:.35}),bowl:new ae({color:"#9aa1a8",roughness:.35,metalness:.3}),glass:new ae({color:"#17181b",roughness:.12}),ring:new ae({color:"#7d828b",roughness:.4}),dark:new ae({color:"#2a2a2c",roughness:.9})}),[]);return h.useEffect(()=>()=>Object.values(n).forEach(s=>s.dispose()),[n]),e.length?r.jsx("group",{name:"builtin",children:e.map(s=>{const c=Os(s),o=Cs(s,t);return r.jsxs("group",{userData:{builtin:s.id},children:[c.cells.map((a,i)=>{var l;return r.jsx(Wr,{b:s,p:a,ceil:o,mats:n},((l=a.cell)==null?void 0:l.id)??`a${i}`)}),c.uppers.map((a,i)=>r.jsx(Br,{b:s,u:a,ceil:o,mats:n},`u${i}`))]},s.id)})}):null}const Oe=(e,t,n=0)=>({doors:t,handle:"none",finish:e,led:!1,filler:n});function Me({m:e,size:t,pos:n}){return r.jsx("mesh",{position:n,material:e,castShadow:!0,receiveShadow:!0,raycast:Kt,children:r.jsx("boxGeometry",{args:t})})}function Wr({b:e,p:t,ceil:n,mats:s}){const c=t.b-t.a,o=t.depth,a=Ts(e,t,o),i=t.cell,l=e.finish,d=be-we-tt,u=(m,j="body")=>r.jsx("group",{position:[0,we,0],children:r.jsx(Le,{spec:Oe(l,m),w:c,h:d,d:o,z:we,ceiling:n,selected:!1,seeThrough:!1})},j),y=r.jsx(Me,{m:s.toe,size:[c,we,o-.05],pos:[0,we/2,-.025]}),w=r.jsx(Me,{m:s.top,size:[c,tt,St+.02],pos:[0,be-tt/2,-o/2+(St+.02)/2]});let L;switch(t.kind){case"sink":L=r.jsxs(r.Fragment,{children:[y,u(He(c>=.6?2:1)),w,r.jsx(Me,{m:s.bowl,size:[Math.max(.1,c-.16),.004,o-.22],pos:[0,be+.001,.01]}),r.jsx(Me,{m:s.dark,size:[Math.max(.08,c-.2),.003,o-.26],pos:[0,be+.003,.01]}),r.jsx("mesh",{position:[0,be+.16,-o/2+.06],material:s.steel,raycast:Kt,castShadow:!0,children:r.jsx("cylinderGeometry",{args:[.014,.018,.32,16]})}),r.jsx(Me,{m:s.steel,size:[.022,.022,.2],pos:[0,be+.31,-o/2+.15]})]});break;case"induction":{const m=[.36,.2,.16];let j=we;L=r.jsxs(r.Fragment,{children:[y,m.map((M,p)=>{const b=M/m.reduce((g,v)=>g+v,0)*d,x=r.jsx("group",{position:[0,j,0],children:r.jsx(Le,{spec:{...Oe(l,[{x0:0,x1:1,style:"flat",handleSide:"bottom"}]),handle:"groove"},w:c,h:b,d:o,z:j,ceiling:n,selected:!1,seeThrough:!1})},p);return j+=b,x}),w,r.jsx(Me,{m:s.glass,size:[Math.max(.1,c-.06),.006,o-.1],pos:[0,be+.003,.01]}),[-.18,.18].map(M=>r.jsx("mesh",{position:[M*Math.min(1,c/.6),be+.0065,.01],"rotation-x":-Math.PI/2,material:s.ring,raycast:Kt,children:r.jsx("ringGeometry",{args:[.075,.085,32]})},M))]});break}case"dishwasher":L=r.jsxs(r.Fragment,{children:[y,u([{x0:0,x1:1,style:"flat",handleSide:"bottom"}]),r.jsx(Me,{m:s.steel,size:[c-.01,.05,.004],pos:[0,be-tt-.03,o/2+.001]}),w]});break;case"corner":{const m=e.shape==="L"?(c-St)/c:1;L=r.jsxs(r.Fragment,{children:[y,u(m>.1?[{x0:0,x1:m,style:"flat",handleSide:"left"}]:[]),w]});break}case"filler":L=r.jsxs(r.Fragment,{children:[y,u([]),w]});break;case"tall":L=r.jsxs(r.Fragment,{children:[y,r.jsx("group",{position:[0,we,0],children:r.jsx(Le,{spec:Oe(l,He(c>.7?2:1)),w:c,h:n-we,d:o,z:we,ceiling:n,selected:!1,seeThrough:!1})})]});break;case"fridge":case"kimchi":{const m=i==null?void 0:i.app,j=m?m.h:t.kind==="fridge"?1.8:1.85,M=Math.min(n-.05,j+.02),p=n-M;L=r.jsxs(r.Fragment,{children:[m&&us(m.kind)?r.jsx("group",{position:[0,0,o/2-m.d/2],userData:{builtinApp:m.id,kind:m.kind},children:r.jsx(ds,{kind:m.kind,w:m.w,h:m.h,d:m.d,color:m.paint||fs[m.kind],selected:!1,seeThrough:!1})}):r.jsx(Me,{m:s.dark,size:[c,j,.01],pos:[0,j/2,-o/2+.005]}),p>.12?r.jsx("group",{position:[0,M,0],children:r.jsx(Le,{spec:Oe(l,He(c>.7?2:1)),w:c,h:p,d:o,z:M,ceiling:n,selected:!1,seeThrough:!1})}):p>.005&&r.jsx("group",{position:[0,M,0],children:r.jsx(Le,{spec:Oe(l,[]),w:c,h:p,d:o,z:M,ceiling:n,selected:!1,seeThrough:!1})})]});break}default:L=r.jsxs(r.Fragment,{children:[y,u(He(Vn(c))),w]})}return r.jsx("group",{position:[a.x,0,a.y],"rotation-y":-a.rot,userData:{builtinCell:(i==null?void 0:i.id)??"auto",kind:i?t.kind:"auto"},children:L})}function Br({b:e,u:t,ceil:n,mats:s}){const c=e.legs[t.leg],o=t.b-t.a,a=Math.atan2(-c.n.x,c.n.y);if(t.hood){const l=Et(c,(t.a+t.b)/2,.225),d=Et(c,(t.a+t.b)/2,pe.d/2),u=.12;return r.jsxs("group",{userData:{builtinUpper:"hood"},children:[r.jsx("group",{position:[l.x,0,l.y],"rotation-y":-a,children:r.jsx(Me,{m:s.steel,size:[o,u,.45],pos:[0,pe.z+u/2,0]})}),r.jsx("group",{position:[d.x,pe.z+u,d.y],"rotation-y":-a,children:r.jsx(Le,{spec:Oe(e.finish,[{x0:0,x1:1,style:"flat",handleSide:"bottom"}],1),w:o,h:pe.h-u,d:pe.d,z:pe.z+u,ceiling:n,selected:!1,seeThrough:!1})})]})}const i=Et(c,(t.a+t.b)/2,pe.d/2);return r.jsx("group",{position:[i.x,pe.z,i.y],"rotation-y":-a,userData:{builtinUpper:t.filler?"filler":"cab"},children:r.jsx(Le,{spec:Oe(e.finish,t.filler?[]:He(Vn(o)),1),w:o,h:pe.h,d:pe.d,z:pe.z,ceiling:n,selected:!1,seeThrough:!1})})}function Yr({controls:e,world:t}){const n=B(m=>m.camera),s=B(m=>m.size),c=B(m=>m.setEvents),o=dt(m=>m.closed),a=Ds(),i=h.useMemo(()=>Rs(t,o),[t,o]),l=h.useRef(i);l.current=i;const d=h.useMemo(()=>Fs(i.walls,i.openings),[i]),u=h.useRef(t);u.current=t;const y=h.useRef(1),w=h.useRef({phase:0,amp:0}),L=h.useRef(!1);return h.useEffect(()=>{const m=e.current,j={pos:n.position.clone(),quat:n.quaternion.clone(),target:m==null?void 0:m.target.clone(),fov:n.fov,near:n.near};return L.current=!0,m&&(m.enabled=!1),c({enabled:!1}),n.near=.05,n.rotation.order="YXZ",()=>{L.current=!1,c({enabled:!0}),n.rotation.order="XYZ",n.position.copy(j.pos),n.quaternion.copy(j.quat),n.fov=j.fov,n.near=j.near,n.updateProjectionMatrix(),m&&j.target&&(m.target.copy(j.target),m.enabled=!0,m.update())}},[]),h.useEffect(()=>{n.fov=Us(s.width/Math.max(1,s.height),a),n.updateProjectionMatrix()},[s.width,s.height,a]),ie((m,j)=>{if(!L.current)return;const M=Math.min(j,.1),p=Yt,b=Ws;p.yaw+=b.turn*1.8*M;const x=b.kf-b.jy,g=b.ks+b.jx,v=Math.hypot(x,g);let f=0;if(v>.08){pn.get().pose!=="stand"&&Bs();const I=Math.hypot(b.jx,b.jy),z=I>.08?b.jrun?2.6:1.4*Math.min(1,I/.9):b.run?2.6:1.4,O=hn(p.yaw),F={x:-O.y,y:O.x},Y=Math.max(1,Math.ceil(z*M/.08)),V=z*M/v/Y;for(let k=0;k<Y;k++){const K={x:p.x+(O.x*x+F.x*g)*V,y:p.y+(O.y*x+F.y*g)*V},H=Ys(ks(),K,l.current,Qn),J=Math.hypot(H.x-p.x,H.y-p.y);if(f+=J,p.x=H.x,p.y=H.y,J<1e-6)break}}(p.vz!==0||p.air>0)&&(p.air+=p.vz*M-4.9*M*M,p.vz-=9.8*M,p.air<=0&&(p.air=p.vz=0));const P=w.current;P.amp+=((f>1e-4&&p.air===0?1:0)-P.amp)*Math.min(1,M*6),P.phase+=f/.7*Math.PI*2,p.eye+=(Gs()-p.eye)*(1-Math.exp(-M*7));const A=hn(p.yaw);if(p.cam+=(p.zoom-p.cam)*(1-Math.exp(-M*10)),Math.abs(p.zoom-p.cam)<.003&&(p.cam=p.zoom),p.cam<.02){p.shown=0;const I=pn.get().pose==="stand"?.06:.08;n.position.set(p.x+A.x*I,p.eye+p.air+Math.cos(P.phase)*.012*P.amp,p.y+A.y*I)}else{const I=Math.cos(p.pitch),z={x:A.x*I,y:Math.sin(p.pitch),z:A.y*I},O=p.eye+p.air+.12;let F=p.cam;z.y<-.001&&(F=Math.min(F,(Kn({x:p.x,y:p.y},u.current.rooms)-.12-O)/-z.y)),z.y>.001&&(F=Math.min(F,(O-.15)/z.y)),I>.001&&(F=Math.min(F,Hs({x:p.x,y:p.y},{x:-A.x,y:-A.y},F*I,d)/I)),F=Math.max(0,F),p.shown=F<p.shown?F:p.shown+(F-p.shown)*(1-Math.exp(-M*5)),n.position.set(p.x-z.x*p.shown,O-z.y*p.shown,p.y-z.z*p.shown)}n.rotation.set(p.pitch,p.yaw,0,"YXZ"),y.current+=M,y.current>.2&&(y.current=0,Xs(u.current.rooms),Ns(u.current))}),null}function kr(){const e=h.useRef(null),{h:t,pose:n}=$s(),s=t/100/ht("adult","m").H;return ie(()=>{const c=e.current;if(!c)return;const o=Yt;c.visible=o.shown>.45,c.position.set(o.x,o.air,o.y),c.rotation.y=o.yaw+Math.PI}),r.jsxs("group",{ref:e,visible:!1,userData:{noAim:!0,noShadow:!0},children:[r.jsx("group",{scale:s,children:r.jsx(bs,{age:"adult",sex:"m",pose:n,seat:Yt.seat/s,chair:!1})}),r.jsxs("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,children:[r.jsx("circleGeometry",{args:[Qn*1.1,24]}),r.jsx("meshBasicMaterial",{color:"#000",transparent:!0,opacity:.12,depthWrite:!1})]})]})}const Gr=12;function Hr(){const e=B(i=>i.camera),t=B(i=>i.scene),n=B(i=>i.gl),s=h.useMemo(()=>{const i=new mt;return i.far=Gr,i},[]),c=h.useMemo(()=>new Se,[]),o=h.useRef(0),a=(i,l)=>{e.updateMatrixWorld(),c.set(i,l),s.setFromCamera(c,e);for(const d of s.intersectObjects(t.children,!0)){if(!d.object.isMesh)continue;let u=null,y=!1;for(let w=d.object;w;w=w.parent){if(!w.visible||w.userData.noAim){y=!0;break}!u&&typeof w.userData.itemId=="string"&&(u=w.userData.itemId)}if(!y)return u}return null};return h.useEffect(()=>(nt.center=()=>a(0,0),nt.client=(i,l)=>{const d=n.domElement.getBoundingClientRect();return!d.width||!d.height?null:a((i-d.left)/d.width*2-1,-((l-d.top)/d.height)*2+1)},()=>{nt.center=nt.client=null,mn(null)})),ie((i,l)=>{o.current+=l,!(o.current<.1)&&(o.current=0,mn(a(0,0)))}),null}const Xr=new ae({color:"#f6f5f1",emissive:"#f6f5f1",emissiveIntensity:.42,roughness:1}),Nr=new fr({color:"#fffaf0"});function $r({rooms:e,walls:t}){const n=h.useMemo(()=>{if(e.length)return e.map(i=>({id:i.id,x0:i.x0,y0:i.y0,x1:i.x1,y1:i.y1,poly:i.poly,h:Jt(i)}));if(!t.length)return[];const o=t.flatMap(i=>[i.a.x,i.b.x]),a=t.flatMap(i=>[i.a.y,i.b.y]);return[{id:"all",x0:Math.min(...o),y0:Math.min(...a),x1:Math.max(...o),y1:Math.max(...a),poly:void 0,h:Zn}]},[e,t]),s=h.useMemo(()=>new Map(n.filter(o=>o.poly).map(o=>[o.id,gs(o.poly,(o.x0+o.x1)/2,(o.y0+o.y1)/2,!1)])),[n]);h.useEffect(()=>()=>s.forEach(o=>o.dispose()),[s]);const c=je/2;return r.jsx("group",{children:n.map(o=>{const a=(o.x0+o.x1)/2,i=(o.y0+o.y1)/2;return r.jsxs("group",{children:[r.jsx("mesh",{position:[a,o.h,i],"rotation-x":Math.PI/2,material:Xr,userData:{cast:!0,ceilRoom:o.id},children:s.has(o.id)?r.jsx("primitive",{object:s.get(o.id),attach:"geometry"}):r.jsx("planeGeometry",{args:[o.x1-o.x0+2*c,o.y1-o.y0+2*c]})}),(o.x1-o.x0)*(o.y1-o.y0)>1.5&&r.jsx("mesh",{position:[a,o.h-.01,i],"rotation-x":Math.PI/2,material:Nr,children:r.jsx("circleGeometry",{args:[.22,36]})})]},o.id)})})}const Ms=(e,t,n)=>Math.abs(t-e)<.001?t:e+(t-e)*(1-Math.exp(-n*7)),qr=new ae({color:"#b9bcc0",metalness:.6,roughness:.35});function Vr({o:e,cx:t,top:n,swing:s,home:c}){var p;const o=dt(b=>b.on),a=dt(b=>b.on&&b.closed.includes(e.id)),i=h.useRef(null),l=s??{min:0,max:90},d=e.hingeEnd?-1:1,u=-e.side*d*(a?l.min:l.max)*Math.PI/180;h.useLayoutEffect(()=>void(i.current&&(i.current.rotation.y=u)),[]),ie((b,x)=>{const g=i.current;g&&g.rotation.y!==u&&(g.rotation.y=Ms(g.rotation.y,u,x))});const y=t+(e.hingeEnd?e.w/2:-e.w/2),w=-e.side*.02,L=qs(e),m=en(e,c).leaf,j=((p=Vs(e,c).look)==null?void 0:p.key)??null,M=b=>r.jsx(Ht,{w:b,h:n,arch:Gt(e),grid:kt(e)==="grid",paint:m});return r.jsxs(r.Fragment,{children:[r.jsxs("group",{ref:i,position:[y,0,e.side*je/2],children:[r.jsx("group",{position:[d*L/2,0,w],children:e.mid?M(L):r.jsx(Ho,{w:L,h:n,look:j,paint:m})}),[-1,1].map(b=>r.jsx("mesh",{position:[d*(L-.07),.95,w+b*.035],material:qr,children:r.jsx("sphereGeometry",{args:[.025,14,10]})},b)),!o&&Ks(l)&&r.jsx(De,{position:[d*L/2,n+.15,w],center:!0,zIndexRange:[8,0],style:{pointerEvents:"none"},children:r.jsxs("div",{className:"ang3d",title:l.by?`${l.by}에 걸려요`:void 0,children:["🚪 ",Zs(l)]})})]}),e.mid&&e.w-L>.01&&r.jsx("group",{position:[y+d*(L+(e.w-L)/2),0,e.side*je/2+w],children:M(e.w-L)})]})}function Kr({o:e,cx:t,top:n,home:s}){const c=dt(l=>l.on&&!l.closed.includes(e.id)),o=h.useRef(null),a=t+(c?.21:-.21)*e.w;h.useLayoutEffect(()=>void(o.current&&(o.current.position.x=a)),[]),ie((l,d)=>{var y;const u=(y=o.current)==null?void 0:y.position;u&&u.x!==a&&(u.x=Ms(u.x,a,d))});const i=en(e,s).leaf;return r.jsxs("group",{children:[r.jsx("group",{ref:o,"position-z":-.03,children:r.jsx(Ht,{w:e.w*.58,h:n,arch:!!e.mid&&Gt(e),grid:!!e.mid&&kt(e)==="grid",paint:i})}),r.jsx("group",{position:[t+e.w*.21,0,.03],children:r.jsx(Ht,{w:e.w*.58,h:n,arch:!!e.mid&&Gt(e),grid:!!e.mid&&kt(e)==="grid",paint:i})})]})}const Zr=.55,Qr=.18,Ft=Math.PI/180,Jr=new W,Bn=new W,ei=new is,Ut=new ls;function ti({at:e,controls:t,wide:n=1}){const s=B(p=>p.camera),c=B(p=>p.size),o=B(p=>p.gl),a=B(p=>p.events.connected),i=B(p=>p.get),l=c.width/Math.max(1,c.height),d=h.useMemo(()=>Qs(e.rooms,e.room,e.i,l),[e.rooms,e.room,e.i,l]),u=h.useRef(1),y=h.useRef(null),w=h.useRef(null),L=h.useRef(1),m=h.useRef(""),j=h.useRef({...ke});h.useEffect(()=>{const p=t.current,b={pos:s.position.clone(),quat:s.quaternion.clone(),target:p==null?void 0:p.target.clone(),fov:s.fov,near:s.near};return Ae.on=!0,_e.set(ke),p&&(p.enabled=!1),s.near=.05,s.updateProjectionMatrix(),()=>{Ae.on=!1,Pt.on=!1,ct.turned=!1,_e.set(ke),s.position.copy(b.pos),s.quaternion.copy(b.quat),s.fov=b.fov,s.near=b.near,s.updateProjectionMatrix(),p&&b.target&&(p.target.copy(b.target),p.enabled=!0,p.update())}},[]);const M=d?[...d.pos,...d.dir].map(p=>p.toFixed(3)).join(","):"";return h.useEffect(()=>{if(!d)return;m.current!==M&&(m.current=M,u.current=1,w.current={pos:s.position.clone(),quat:s.quaternion.clone(),fov:s.fov},L.current=0,_e.set(ke),j.current={...ke});const p=Js(d.tv,n,l);y.current={pos:new W(...d.pos),phi:d.phi,diag:d.diag,tv:p,min:d.tvMin,max:Math.max(d.tvMax,p)}},[M,d==null?void 0:d.tv,n]),h.useEffect(()=>{const p=a??o.domElement,b=z=>{const O=y.current;!O||!isFinite(z)||z<=0||(u.current=Math.min(O.max/O.tv,Math.max(O.min/O.tv,u.current*z)))},x=z=>{if(!z.deltaY||z.shiftKey)return;z.preventDefault();const O=z.deltaMode===1?z.deltaY*33:z.deltaMode===2?z.deltaY*400:z.deltaY;b(Math.exp(Math.max(-100,Math.min(100,O))*.0012))},g=new Map;let v=null,f=!1;const P=z=>{if(z.pointerType==="touch"&&g.set(z.pointerId,{x:z.clientX,y:z.clientY}),g.size>=2){f=!0,v=null;return}if(z.button!==0||f||(ct.turned=!1,i().internal.capturedMap.has(z.pointerId)))return;const O=j.current,F=Math.tan(s.fov*Ft/2),Y=Qr*Math.min(1.6,Math.max(.25,F/Math.tan(30*Ft)));v={id:z.pointerId,sx:z.clientX,sy:z.clientY,a0:{pitch:O.pitch,yaw:O.yaw},k:Y,on:!1}},A=z=>{const O=g.get(z.pointerId);if(O){if(g.size===2){const k=[...g].find(([J])=>J!==z.pointerId)[1],K=Math.hypot(O.x-k.x,O.y-k.y),H=Math.hypot(z.clientX-k.x,z.clientY-k.y);K>4&&H>4&&b(Math.pow(K/H,.8))}O.x=z.clientX,O.y=z.clientY}const F=y.current;if(!v||z.pointerId!==v.id||!F)return;const Y=z.clientX-v.sx,V=z.clientY-v.sy;if(!v.on){if(Math.hypot(Y,V)<Ue(z.pointerType))return;if(document.querySelector(".ctxmenu"))return void(v=null);v.on=!0,ct.turned=!0,ut()}_e.set(xn(F,no(v.a0,Y,V,v.k)))},I=z=>{g.delete(z.pointerId),v&&z.pointerId===v.id&&(v=null),g.size||(f=!1)};return p.addEventListener("wheel",x,{passive:!1}),p.addEventListener("pointerdown",P),window.addEventListener("pointermove",A),window.addEventListener("pointerup",I),window.addEventListener("pointercancel",I),()=>{p.removeEventListener("wheel",x),p.removeEventListener("pointerdown",P),window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",I),window.removeEventListener("pointercancel",I)}},[a,o,i]),ie((p,b)=>{const x=y.current;if(!x)return;const g=_e.get(),v=xn(x,g);(v.pitch!==g.pitch||v.yaw!==g.yaw)&&_e.set(v,g.ease);const f=j.current;if(g.ease){const I=1-Math.exp(-Math.min(b,.05)*9);f.pitch+=(v.pitch-f.pitch)*I,f.yaw+=(v.yaw-f.yaw)*I,Math.abs(v.pitch-f.pitch)<.05&&Math.abs(v.yaw-f.yaw)<.05&&(Object.assign(f,v),_e.set(v))}else Object.assign(f,v);Bn.set(...eo(x.phi+f.yaw*Ft,f.pitch)).add(x.pos),Ut.setFromRotationMatrix(ei.lookAt(x.pos,Bn,s.up));const P=to(x.tv*u.current),A=w.current;if(L.current<1&&A){L.current=Math.min(1,L.current+Math.min(b,.05)/Zr);const I=L.current<.5?4*L.current**3:1-(-2*L.current+2)**3/2;s.position.lerpVectors(A.pos,x.pos,I),s.quaternion.slerpQuaternions(A.quat,Ut,I),s.fov=A.fov+(P-A.fov)*I}else s.position.copy(x.pos),s.quaternion.copy(Ut),s.fov=P;s.updateProjectionMatrix(),Object.assign(Pt,{on:!0,frame:Pt.frame+1,key:e.key,i:e.i,n:e.n,pos:s.position.toArray().map(I=>+I.toFixed(3)),dir:s.getWorldDirection(Jr).toArray().map(I=>+I.toFixed(3)),fov:+s.fov.toFixed(1),moving:L.current<1||g.ease,pitch:+f.pitch.toFixed(1),yaw:+f.yaw.toFixed(1)})}),null}function ni({room:e,rooms:t,walls:n,openings:s,items:c,dispatch:o,controls:a}){const i=B(v=>v.camera),l=B(v=>v.gl),d=Jt(e),u=so(e,t),[y,w]=h.useState(null),L=h.useRef({h:d});L.current.h=d;const m=h.useRef(null),j=h.useRef(0),M=B(v=>v.size),p=(y==null?void 0:y.k)??0,b=u[p],x=h.useRef(new W);ie(()=>{const v=m.current;if(!v||!b)return;const f=(x.current.set(b.x,d,b.y).project(i).x*.5+.5)*M.width,P=v.offsetWidth,A=f-P/2,I=Math.round(Math.min(Math.max(A,4),Math.max(4,M.width-4-P))-A);I!==j.current&&(j.current=I,v.style.transform=`translateX(calc(-50% + ${I}px))`)});const g=(v,f)=>{if(f.button!==0&&f.pointerType==="mouse")return;f.stopPropagation(),f.preventDefault();const P=u[v],A=d,I=l.domElement.getBoundingClientRect(),z=T=>-new W(P.x,T,P.y).project(i).y*.5*I.height,O=Math.max(40,Math.abs(z(A)-z(A+1))),F=oo(e,t,n,s,c),Y=f.clientY,V=f.pointerId;let k=!1;const K=a.current;K&&(K.enabled=!1),w({k:v,stuck:!1});const H=T=>{if(T.pointerId!==V||!k&&Math.abs(Y-T.clientY)<3)return;const _=A+(Y-T.clientY)/O,E=io(_,F);w({k:v,stuck:F>ro&&_<F-.05}),!(Math.abs(E-L.current.h)<1e-6)&&(k||(o({type:"checkpoint"}),k=!0),L.current.h=E,o({type:"updateRoom",id:e.id,patch:{h:Math.abs(E-Zn)<1e-6?void 0:E},live:!0}))},J=T=>{T.pointerId===V&&(removeEventListener("pointermove",H,!0),removeEventListener("pointerup",J,!0),removeEventListener("pointercancel",J,!0),K&&(K.enabled=!0),w(null))};addEventListener("pointermove",H,!0),addEventListener("pointerup",J,!0),addEventListener("pointercancel",J,!0)};return r.jsx(r.Fragment,{children:u.map((v,f)=>r.jsx(De,{position:[v.x,d,v.y],center:!0,zIndexRange:[12,0],children:r.jsxs("div",{className:`hknob-wrap${(y==null?void 0:y.k)===f?" on":""}`,children:[r.jsx("button",{className:"hknob","data-k":f,title:`↕ 위아래로 끌어 높이 바꾸기(지금 ${zt(d)}cm, 10cm씩 120~400cm)`,"aria-label":`높이 ${zt(d)}cm — 위아래로 끌어 바꾸기`,onPointerDown:P=>g(f,P),onContextMenu:P=>P.preventDefault(),children:"↕"}),f===p&&r.jsxs("span",{ref:m,className:`hknob-label${y?" live":""}`,style:{transform:`translateX(calc(-50% + ${j.current}px))`},children:[`높이 ${zt(d)}`,(y==null?void 0:y.stuck)&&r.jsx("small",{children:"문·창·가구보다 낮게는 안 돼요"})]})]})},f))})}const Yn={rooms:!1,dims:!1,items:!1},si={LEFT:It.ROTATE,MIDDLE:It.PAN,RIGHT:It.PAN},oi={seq:0,x:0,y:0},lt=new Ie(new W(0,1,0),0);function Oi({state:e,dispatch:t,statuses:n,lowWalls:s,showImage:c,cam:o,onCam:a,inside:i,probe:l,ghost:d,focusRoom:u,snap:y,spin:w,onPad:L,hoverRoomId:m,onHoverRoom:j,finishes:M,show:p,onMenu:b,onDismiss:x,stage:g,walk:v=!1,onRotateItem:f,onDeco:P,corner:A=null,wide:I=null,pivot:z=oi,multi:O,onMulti:F,multiMode:Y=!1,onFit:V,onCopied:k,onFocusRoom:K,onPickHouse:H,picked:J,onFocusOut:T}){var fn;const{walls:_,items:E,image:U,scale:C}=e,D=v||!!A,R=Bt(S=>!!S.eye),N=D||R,Q=h.useMemo(()=>A?e.rooms.filter(S=>(S.whole??S.id)===A.key):null,[A==null?void 0:A.key,e.rooms]),$=h.useMemo(()=>ao(_,e.openings,E),[_,e.openings,E]),q=h.useMemo(()=>co(_,e.rooms),[_,e.rooms]),Z=lo(e.rooms),G=g===1&&!v&&!A&&!R?e.rooms.find(S=>S.id===e.selectedId)??null:null,ve=h.useMemo(()=>new Set(G?Jn(e.rooms,G).map(S=>S.id):[]),[G,e.rooms]),ue=S=>s&&!v&&!S.some(X=>ve.has(X)),Ee=()=>!!A&&ct.turned||es(),Re=(S,X,ee,oe)=>{const le=yo({stage:g,was:oe,item:S,rooms:e.rooms,at:X,focus:u,tap:ee});le&&t({type:"select",id:le})},xt=F&&!v&&(g===2||g===3)?{ids:O??[],mode:Y,onMulti:F,base:()=>O!=null&&O.length?O:e.items.some(S=>S.id===e.selectedId&&Ge(g,S))?[e.selectedId]:[],items:e.items,onCopied:k}:void 0,re=h.useRef(null);h.useEffect(()=>()=>void(re.current&&clearTimeout(re.current)),[]);const Be=()=>{re.current&&clearTimeout(re.current),re.current=null},Ye=K&&{dbl:S=>{const X=!u&&Xe(S,e.rooms);return X?(Be(),g===1&&H&&wn(e.rooms,X.id).length>1?re.current=window.setTimeout(()=>{re.current=null,K(X.id)},go):K(X.id),!0):!1},triple:S=>{const X=Xe(S,u?[u]:e.rooms);return X&&g===1&&H&&!u&&(Be(),t({type:"select",id:null}),H(wn(e.rooms,X.id))),!!X}},Ve=S=>{Ee()||(g===2?(x(!!S),t({type:"select",id:S??null})):!x(g===1&&!!S)&&S&&g===1&&t({type:"select",id:S}))},de=ft(_,E,U?{w:U.pxW*C,h:U.pxH*C}:void 0),Ke=(de.minX+de.maxX)/2,Ze=(de.minY+de.maxY)/2,Qe=Math.max(de.maxX-de.minX,de.maxY-de.minY,4),yt=h.useMemo(()=>[Ke,0,Ze],[]),he=ft(_,E),fe=Math.max(3,Math.hypot(he.maxX-he.minX,he.maxY-he.minY)/2+1),gt=(he.minX+he.maxX)/2,vt=(he.minY+he.maxY)/2,ce=h.useRef(null),cn=h.useRef(!1),ln=h.useRef(new W),Je=!v&&!A&&!R,un=h.useMemo(()=>{if(!Je||g===1)return[];const S=E.filter(oe=>yn(g,oe,!!p.others,n[oe.id]==="collide")),X=E.find(oe=>oe.id===e.selectedId),ee=oe=>gn(e.rooms.find(le=>le.id===oe)??{id:oe});return uo(fo(e.rooms,_,e.openings,S),{dims:p.dims,sel:X&&Ge(g,X)?X.id:null,focus:u?gn(u):null,keyOf:ee})},[Je,g,E,e.rooms,_,e.openings,p.dims,p.others,n,e.selectedId,u]),dn=Bt(S=>S.list.map(X=>X.seatOn??"").join(",")),wt=(S,X,ee)=>{const oe=ce.current;if(oe&&!Te.get().eye&&!Ae.on){oe.enabled=!1;const le=()=>{window.removeEventListener("pointerup",le,!0),!Te.get().eye&&!Ae.on&&(oe.enabled=!0)};window.addEventListener("pointerup",le,!0)}b(S,X,ee)};return r.jsxs(Xo,{shadows:"percentage",camera:{position:[Ke,Qe*.9,Ze+Qe*.8],fov:45},onPointerMissed:S=>void(!v&&S.button===0&&!Ee()&&x()),children:[r.jsx(No,{cx:gt,cz:vt,r:fe}),r.jsx("hemisphereLight",{args:["#ffffff","#d6d0c6"],intensity:N?1.4:1.05}),r.jsx($o,{cx:gt,cz:vt,r:fe,off:!!u}),r.jsx(qo,{deps:[_,E,e.openings,u,s,v,g,dn,!!A,R,e.rooms,G==null?void 0:G.id]}),r.jsx(Vo,{cx:gt,cz:vt,r:fe}),r.jsx(yi,{state:e,showImage:c&&!D,hoverRoomId:v?null:m,onHoverRoom:j,focusRoom:u,finishes:M,show:v?Yn:p,onMenu:wt,onTap:Ve,labelOnly:A==null?void 0:A.key,picked:v?void 0:J,onPickRoom:!v&&po(g)?S=>t({type:"select",id:S}):void 0}),_.map(S=>{const X=q.get(S.id)??{h:Z,front:Z,back:Z,rooms:[]},ee=ue(X.rooms);return r.jsx(Si,{wall:S,height:ee?1:X.h,sides:ee?null:[X.front,X.back],openings:e.openings.filter(oe=>oe.wallId===S.id),finish:M?{home:e.finish,rooms:e.rooms,walls:_}:null,swings:$,doors:e.finish},S.id)}),e.rooms.filter(S=>S.loose&&(!u||S.id===u.id)).map(S=>{const X=ue([S.id])?1:Jt(S),ee=je;if(S.poly){const le=ho(S);return le.map((Pe,et)=>{const ze=le[(et+1)%le.length],bt=Math.hypot(ze.x-Pe.x,ze.y-Pe.y);return r.jsxs("mesh",{name:"loosewall",userData:{room:S.id,wallH:X},position:[(Pe.x+ze.x)/2,X/2,(Pe.y+ze.y)/2],"rotation-y":-Math.atan2(ze.y-Pe.y,ze.x-Pe.x),raycast:Xt,children:[r.jsx("boxGeometry",{args:[bt+ee/2,X,ee]}),r.jsx("meshStandardMaterial",{color:vn(S.loose),transparent:!0,opacity:.6})]},`lz${S.id}${et}`)})}return[[(S.x0+S.x1)/2,S.y0,S.x1-S.x0+ee,ee],[(S.x0+S.x1)/2,S.y1,S.x1-S.x0+ee,ee],[S.x0,(S.y0+S.y1)/2,ee,S.y1-S.y0-ee],[S.x1,(S.y0+S.y1)/2,ee,S.y1-S.y0-ee]].map(([le,Pe,et,ze],bt)=>r.jsxs("mesh",{name:"loosewall",userData:{room:S.id,wallH:X},position:[le,X/2,Pe],raycast:Xt,children:[r.jsx("boxGeometry",{args:[et,X,ze]}),r.jsx("meshStandardMaterial",{color:vn(S.loose),transparent:!0,opacity:.6})]},`lz${S.id}${bt}`))}),(v||g>=2)&&r.jsx(Ur,{list:e.builtins??[],rooms:e.rooms}),E.filter(S=>(!u||Xe({x:S.x,y:S.y},[u]))&&(v||yn(g,S,!!p.others,n[S.id]==="collide"))).map(S=>r.jsx(zi,{item:S,walls:_,openings:e.openings,inside:i,snap:y,status:v?"ok":n[S.id]??"ok",selected:!v&&(S.id===e.selectedId||!!(O!=null&&O.includes(S.id))),many:xt,dispatch:t,controls:ce,seeThrough:dn.split(",").includes(S.id),pick:!v&&Ge(g,S),faded:!v&&!Ge(g,S)&&g<3,show:v||Q&&!Xe({x:S.x,y:S.y},Q)?Yn:{...p,items:p.items&&(g>=3||Ge(g,S)),dims:p.dims&&mo(g,S)},bare:v,onMenu:wt,onRotate:v?void 0:f,onRetap:v?void 0:Re,onDeco:v||g!==5?void 0:P,ceil:Kn(S,e.rooms)},S.id)),un.length>0&&r.jsx(Pi,{runs:un,sel:e.selectedId}),(v||g>=3||p.others)&&r.jsx(Tr,{world:e,dispatch:t,controls:ce,onMenu:wt,still:g===4||g===5,wide:I}),d&&r.jsxs("mesh",{position:[d.x,d.h/2,d.y],"rotation-y":-d.rot,children:[r.jsx("boxGeometry",{args:[d.w,d.h,d.d]}),r.jsx("meshStandardMaterial",{color:d.ok?d.color:"#e5484d",transparent:!0,opacity:.5})]}),r.jsx(li,{probe:l}),r.jsx(ci,{room:u}),r.jsx(Ko,{ref:ce,makeDefault:!0,target:yt,maxPolarAngle:Math.PI/2.05,zoomSpeed:0,mouseButtons:si}),r.jsx(ri,{cam:o,onCam:a,controls:ce,hold:!!A,pivotLeft:ln,applying:cn}),r.jsx(ii,{wide:I??1,controls:ce,free:Je,applying:cn}),r.jsx(fi,{controls:ce,on:Je,go:z,left:ln,wallH:s?1:Z,box:u?{minX:u.x0-Ne,minY:u.y0-Ne,maxX:u.x1+Ne,maxY:u.y1+Ne}:de,focus:!!u,onTriple:V,room:Ye,holdOut:u?T:void 0}),r.jsx(ai,{controls:ce}),r.jsx(ui,{spin:w,controls:ce}),r.jsx(pi,{controls:ce}),v&&r.jsx(Yr,{controls:ce,world:e}),N&&r.jsx($r,{rooms:e.rooms,walls:_}),G&&r.jsx(ni,{room:G,rooms:e.rooms,walls:_,openings:e.openings,items:(fn=e.builtins)!=null&&fn.length?[...E,...xo(e.builtins)]:E,dispatch:t,controls:ce}),A&&!v&&r.jsx(ti,{at:A,controls:ce,wide:I??1}),v&&r.jsx(kr,{}),v&&r.jsx(Hr,{}),r.jsx(hi,{onPad:D?void 0:L,box:u?{minX:u.x0,minY:u.y0,maxX:u.x1,maxY:u.y1}:_.length||E.length||U?de:null,height:s?1:Z})]})}function ri({cam:e,onCam:t,controls:n,hold:s,pivotLeft:c,applying:o}){const a=B(u=>u.camera),i=B(u=>u.size),l=h.useRef(!1),d=()=>Math.tan(a.fov*Math.PI/360)*Math.min(1,i.width/i.height);return h.useEffect(()=>{const u=n.current;if(!e||!u||s||l.current&&e.src==="3d")return;l.current=!0;const y=a.position.clone().sub(u.target);(e.src==="app"||y.lengthSq()<1e-6)&&y.set(0,.8,.6),y.normalize();const w=e.src==="pad"?u.target.y:0;e.src!=="pad"&&c.current.set(0,0,0),u.target.set(e.cx,w,e.cy),a.position.copy(u.target).addScaledVector(y,e.e/(2*d())),o.current=!0,u.update(),o.current=!1},[e,i.width,i.height,s]),h.useEffect(()=>{const u=n.current;if(!u)return;const y=()=>{if(o.current)return;const w=a.position.distanceTo(u.target),L=Math.atan2(a.position.x-u.target.x,a.position.z-u.target.z)*180/Math.PI;t({cx:u.target.x,cy:u.target.z,e:2*w*d(),az:L,src:"3d"})};return u.addEventListener("change",y),()=>u.removeEventListener("change",y)},[t,i.width,i.height]),null}function ii({wide:e,controls:t,free:n,applying:s}){const c=B(i=>i.camera),o=B(i=>i.size),a=Oo(o.width/Math.max(1,o.height),e);return h.useEffect(()=>{if(!n||Math.abs(c.fov-a)<.001)return;const i=t.current,l=Sn(c.fov)/Sn(a);c.fov=a,c.updateProjectionMatrix(),i&&(c.position.sub(i.target).multiplyScalar(l).add(i.target),s.current=!0,i.update(),s.current=!1)},[a,n]),null}function ai({controls:e}){const t=B(n=>n.camera);return ie(()=>{var s;const n=(s=e.current)==null?void 0:s.target;+t.fov.toFixed(1),n&&+t.position.distanceTo(n).toFixed(2)}),null}function ci({room:e}){const t=B(n=>n.gl);return h.useEffect(()=>{if(!e){t.clippingPlanes=[];return}const n=Ne;return t.clippingPlanes=[new Ie(new W(1,0,0),-(e.x0-n)),new Ie(new W(-1,0,0),e.x1+n),new Ie(new W(0,0,1),-(e.y0-n)),new Ie(new W(0,0,-1),e.y1+n)],()=>void(t.clippingPlanes=[])},[e==null?void 0:e.id,e==null?void 0:e.x0,e==null?void 0:e.x1,e==null?void 0:e.y0,e==null?void 0:e.y1,t]),null}function li({probe:e}){const t=B(s=>s.camera),n=B(s=>s.gl);return h.useEffect(()=>{const s=new mt,c=new W;return e.current=(o,a)=>{const i=n.domElement.getBoundingClientRect();return o<i.left||o>i.right||a<i.top||a>i.bottom?null:(s.setFromCamera(new Se((o-i.left)/i.width*2-1,-((a-i.top)/i.height)*2+1),t),s.ray.intersectPlane(lt,c)?{x:c.x,y:c.z}:null)},()=>void(e.current=null)},[t,n]),null}const an=new W(0,1,0);function ui({spin:e,controls:t}){const n=B(o=>o.camera),s=h.useRef(0),c=h.useRef(e.seq);return h.useEffect(()=>{e.seq!==c.current&&(c.current=e.seq,s.current+=e.deg)},[e.seq]),ie((o,a)=>{const i=t.current;if(!i||!s.current)return;let l=s.current*(1-Math.exp(-a*1e3/70));Math.abs(s.current-l)<.05&&(l=s.current),s.current-=l;const d=n.position.clone().sub(i.target);d.applyAxisAngle(an,l*Math.PI/180),n.position.copy(i.target).add(d),i.update()}),null}function di(e){for(;e;e=e.parent)if(!e.visible)return!1;return!0}function fi({controls:e,on:t,go:n,left:s,wallH:c,box:o,focus:a,onTriple:i,room:l,holdOut:d}){const u=B(x=>x.camera),y=B(x=>x.gl),w=B(x=>x.scene),L=B(x=>x.events.connected),m=h.useRef({on:t,wallH:c,box:o,focus:a,room:l,holdOut:d});m.current={on:t,wallH:c,box:o,focus:a,room:l,holdOut:d};const j=h.useMemo(()=>new W,[]),M=x=>{const g=e.current;g&&(s.current.copy(x).sub(g.target),me.n++,me.last=[+x.x.toFixed(3),+x.y.toFixed(3),+x.z.toFixed(3)])},p=h.useRef(i);p.current=i;const b=h.useRef(n.seq);return h.useEffect(()=>{if(n.seq===b.current)return;b.current=n.seq;const x=m.current.box,g=m.current.on&&En(null,{x:n.x,y:0,z:n.y},m.current.wallH,x);g&&M(new W(g.x,g.y,g.z))},[n.seq]),h.useEffect(()=>{me.on=t,t||s.current.set(0,0,0)},[t]),h.useEffect(()=>{const x=L??y.domElement,g=new mt,v=new Se,f=new Ie(an.clone(),0),P=new W,A=new W,I=(E,U)=>{const C=y.domElement.getBoundingClientRect();return v.set((E-C.left)/C.width*2-1,-((U-C.top)/C.height)*2+1)};me.toScreen=(E,U,C)=>{const D=y.domElement.getBoundingClientRect();return A.set(E,U,C).project(u),A.z>1?null:[Math.round(D.left+(A.x+1)/2*D.width),Math.round(D.top+(1-A.y)/2*D.height)]};const z=(E,U)=>{const{box:C,focus:D}=m.current;g.setFromCamera(I(E,U),u);const R=g.intersectObjects(w.children,!0).find(Q=>Q.object.isMesh&&di(Q.object)&&(!D||!C||Q.point.x>=C.minX&&Q.point.x<=C.maxX&&Q.point.z>=C.minY&&Q.point.z<=C.maxY)),N=g.ray.intersectPlane(f,P);return{hit:R,fl:N?{x:N.x,y:0,z:N.z}:null}};me.planAt=(E,U)=>{const{hit:C,fl:D}=z(E,U),R=(C==null?void 0:C.point)??D;return R?{x:R.x,y:R.z}:null};const O=(E,U)=>{const{hit:C,fl:D}=z(E,U),R=En(C?C.point:null,D,m.current.wallH,m.current.box);return R&&new W(R.x,R.y,R.z)},F=(E,U)=>{var Q;const{hit:C,fl:D}=z(E,U),R=(C==null?void 0:C.point)??D;let N=!1;for(let $=(C==null?void 0:C.object)??null;$&&!N;$=$.parent)N=!!((Q=$.userData)!=null&&Q.itemId);return{at:R?{x:R.x,y:R.z}:null,item:N}};let Y=null,V=null,k=null;const K=()=>{Y=null,V=null,k=null},H=E=>{if(!m.current.on||E.target!==y.domElement||E.button!==0||Qt(E.pointerId))return K();if(Y={id:E.pointerId,x:E.clientX,y:E.clientY,t:E.timeStamp,touch:E.pointerType==="touch"},m.current.focus&&m.current.holdOut){const{clientX:U,clientY:C}=E;$e(E,()=>{var D,R;return(R=(D=m.current).holdOut)==null?void 0:R.call(D,U,C)})}},J=E=>{if(Y){if(E.pointerId!==Y.id)return K();Math.hypot(E.clientX-Y.x,E.clientY-Y.y)>Ue(E.pointerType)&&K()}},T=E=>{var N,Q,$;const U=Y;if(Y=null,!U||E.pointerId!==U.id)return;if(E.timeStamp-U.t>Go||!m.current.on)return void(V=null);const C={t:E.timeStamp,x:E.clientX,y:E.clientY,touch:U.touch};if(!zn(V,C)){if(zn(k,C)&&!document.querySelector(".ctxmenu")){k=null,V=null,s.current.set(0,0,0);const q=m.current.room&&F(E.clientX,E.clientY);if(q!=null&&q.at&&((N=m.current.room)!=null&&N.triple(q.at)))return;(Q=p.current)==null||Q.call(p);return}return k=null,void(V=C)}if(V=null,k=C,document.querySelector(".ctxmenu"))return;const D=m.current.room&&F(E.clientX,E.clientY);if(D&&!D.item&&D.at&&(($=m.current.room)!=null&&$.dbl(D.at))){Ln.t=performance.now();return}const R=O(E.clientX,E.clientY);R&&(Ln.t=performance.now(),M(R))},_=E=>{E.detail>1&&E.target===y.domElement&&E.preventDefault()};return x.addEventListener("pointerdown",H,!0),x.addEventListener("mousedown",_),window.addEventListener("pointermove",J,!0),window.addEventListener("pointerup",T,!0),window.addEventListener("pointercancel",K,!0),()=>{x.removeEventListener("pointerdown",H,!0),x.removeEventListener("mousedown",_),window.removeEventListener("pointermove",J,!0),window.removeEventListener("pointerup",T,!0),window.removeEventListener("pointercancel",K,!0),me.toScreen=()=>null,me.planAt=()=>null}},[u,y,L,w,e]),ie((x,g)=>{const v=e.current;if(!v)return;const f=s.current;if(f.lengthSq()>0){const P=To(Math.min(g,.1));f.length()*(1-P)<Co?j.copy(f):j.copy(f).multiplyScalar(P),f.sub(j),f.lengthSq()<1e-12&&f.set(0,0,0),v.target.add(j),u.position.add(j),v.update()}me.moving=f.lengthSq()>0,me.target=v.target.toArray().map(P=>+P.toFixed(3)),me.cam=u.position.toArray().map(P=>+P.toFixed(3))}),null}function pi({controls:e}){const t=B(a=>a.camera),n=B(a=>a.gl),s=B(a=>a.events.connected),c=B(a=>a.size),o=h.useRef(c);return o.current=c,h.useEffect(()=>{const a=s??n.domElement,i=new mt,l=new Se,d=new Ie(an.clone(),0),u=new W,y=()=>{const b=e.current;return b&&b.enabled&&b.enableZoom?b:null},w=(b,x,g)=>{const v=y();if(!v||!isFinite(g)||g<=0)return;const f=t.position.distanceTo(v.target),{width:P,height:A}=o.current,I=2*f*Math.tan(t.fov*Math.PI/360)*Math.min(1,P/A);let z=I*g;g<1&&z<.6&&(z=Math.min(I,.6)),g>1&&z>300&&(z=Math.max(I,300));const O=z/I;if(Math.abs(O-1)<1e-5)return;const F=n.domElement.getBoundingClientRect();if(l.set((b-F.left)/F.width*2-1,-((x-F.top)/F.height)*2+1),i.setFromCamera(l,t),d.constant=-v.target.y,i.ray.intersectPlane(d,u)){const Y=Math.max(2*f,3),V=u.clone().sub(v.target);V.length()>Y&&u.copy(v.target).addScaledVector(V.normalize(),Y)}else u.copy(v.target);t.position.sub(u).multiplyScalar(O).add(u),v.target.sub(u).multiplyScalar(O).add(u),v.update()},L=b=>{if(!y()||!b.deltaY||b.shiftKey)return;b.preventDefault();const x=b.deltaMode===1?b.deltaY*33:b.deltaMode===2?b.deltaY*400:b.deltaY;w(b.clientX,b.clientY,Math.exp(Math.max(-100,Math.min(100,x))*4e-4))},m=new Map,j=b=>{b.pointerType==="touch"&&m.set(b.pointerId,{x:b.clientX,y:b.clientY})},M=b=>{const x=m.get(b.pointerId);if(x){if(m.size===2){const g=[...m].find(([P])=>P!==b.pointerId)[1],v=Math.hypot(x.x-g.x,x.y-g.y),f=Math.hypot(b.clientX-g.x,b.clientY-g.y);v>4&&f>4&&w((b.clientX+g.x)/2,(b.clientY+g.y)/2,Math.pow(v/f,.6))}x.x=b.clientX,x.y=b.clientY}},p=b=>void m.delete(b.pointerId);return a.addEventListener("wheel",L,{passive:!1}),a.addEventListener("pointerdown",j),window.addEventListener("pointermove",M),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",p),()=>{a.removeEventListener("wheel",L),a.removeEventListener("pointerdown",j),window.removeEventListener("pointermove",M),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p)}},[t,n,s,e]),null}function hi({onPad:e,box:t,height:n}){const s=B(l=>l.camera),c=B(l=>l.gl),o=h.useMemo(()=>new W,[]),a=h.useRef(""),i=h.useRef(0);return ie(()=>{if(!e)return;i.current++;let l=null;if(t){s.updateMatrixWorld();const u=c.domElement.getBoundingClientRect();let[y,w,L,m]=[1/0,1/0,-1/0,-1/0],j=!1;for(const M of[t.minX,t.maxX])for(const p of[t.minY,t.maxY])for(const b of[0,n]){o.set(M,b,p).applyMatrix4(s.matrixWorldInverse),o.z>-.05&&(j=!0),o.set(M,b,p).project(s);const x=u.left+(o.x+1)/2*u.width,g=u.top+(1-o.y)/2*u.height;[y,w,L,m]=[Math.min(y,x),Math.min(w,g),Math.max(L,x),Math.max(m,g)]}l=j?null:{x0:y,y0:w,x1:L,y1:m}}const d=l?[l.x0,l.y0,l.x1,l.y1].map(Math.round).join(","):"-";d===a.current&&i.current%30||(a.current=d,e(l))}),null}function mi({className:e,color:t,onPick:n,children:s}){const c=h.useRef(null),o=h.useRef(n);o.current=n;const a=!!n;return h.useEffect(()=>{const i=c.current;if(!i||!a)return;let l=null;const d=w=>{w.stopPropagation(),l=w.button===0?{id:w.pointerId,x:w.clientX,y:w.clientY}:null},u=w=>{var L;w.stopPropagation(),l&&l.id===w.pointerId&&Math.hypot(w.clientX-l.x,w.clientY-l.y)<=Ue(w.pointerType)&&((L=o.current)==null||L.call(o)),l=null},y=w=>w.stopPropagation();return i.addEventListener("pointerdown",d),i.addEventListener("pointerup",u),i.addEventListener("click",y),i.addEventListener("dblclick",y),()=>{i.removeEventListener("pointerdown",d),i.removeEventListener("pointerup",u),i.removeEventListener("click",y),i.removeEventListener("dblclick",y)}},[a]),r.jsx("div",{ref:c,className:`${e}${a?" pick":""}`,style:{borderColor:t,pointerEvents:a?"auto":"none",touchAction:"none"},title:a?"눌러서 이 공간 고르기":void 0,children:s})}function xi(e,t,n,s){const c=new xr(n-e,s-t),o=c.attributes.position,a=c.attributes.uv,i=(e+n)/2,l=(t+s)/2;for(let d=0;d<o.count;d++)a.setXY(d,i+o.getX(d),l-o.getY(d));return c}function js(e,t,n,s,c){const o=Ir(c),a=h.useMemo(()=>c?gs(c,(e+n)/2,(t+s)/2,!0):xi(e,t,n,s),[e,t,n,s,o]);return h.useEffect(()=>()=>a.dispose(),[a]),a}function kn({r:e}){const t=js(e.x0,e.y0,e.x1,e.y1,e.poly);return r.jsx("primitive",{object:t,attach:"geometry"})}function Gn({x0:e,y0:t,x1:n,y1:s,poly:c,id:o,glow:a,hot:i}){const l=js(e,t,n,s,c);return r.jsxs(r.Fragment,{children:[r.jsx("primitive",{object:l,attach:"geometry"}),r.jsx("meshStandardMaterial",{map:rn("floor",o),roughness:Zt(Do,o).finish.rough,emissive:a,emissiveIntensity:i?.3:0})]})}function yi({state:e,showImage:t,hoverRoomId:n,onHoverRoom:s,focusRoom:c,finishes:o,show:a,onMenu:i,onTap:l,labelOnly:d,onPickRoom:u,picked:y}){const{image:w,scale:L,walls:m,items:j}=e,M=h.useRef(null),p=(f,P)=>{f.stopPropagation();const{clientX:A,clientY:I}=f.nativeEvent,z={x:f.point.x,y:f.point.z};f.button===2&&Object.assign(ts,{at:z,atT:performance.now()}),M.current=f.button===0?{x:A,y:I,room:P.kind==="room"?P.id:void 0}:null,$e(f.nativeEvent,()=>{M.current=null,i({...P,at:z},A,I)})},b=f=>{const P=M.current;M.current=null,P&&Math.hypot(f.nativeEvent.clientX-P.x,f.nativeEvent.clientY-P.y)<5&&l(P.room)},x=h.useMemo(()=>{if(!w)return null;const f=new pr().load(w.src);return f.colorSpace=cs,f},[w==null?void 0:w.src]),g=ft(m,j),v=3;return r.jsxs("group",{children:[r.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[(g.minX+g.maxX)/2,-.002,(g.minY+g.maxY)/2],onPointerDown:f=>p(f,{kind:"floor"}),onPointerUp:b,children:[r.jsx("planeGeometry",{args:[g.maxX-g.minX+v*2,g.maxY-g.minY+v*2]}),r.jsx("meshBasicMaterial",{colorWrite:!1,depthWrite:!1})]}),e.rooms.map(f=>{if(c&&f.id!==c.id)return null;const P=Jn(e.rooms,f),A=Y=>!!Y&&P.some(V=>V.id===Y),I=A(e.selectedId),z=I||!!(y!=null&&y.includes(f.id)),O=A(n),F=(P.length===1||vo(P)===f)&&(!d||(f.whole??f.id)===d);return r.jsxs("group",{children:[r.jsx("mesh",{"rotation-x":-Math.PI/2,position:[(f.x0+f.x1)/2,.001,(f.y0+f.y1)/2],onPointerMove:Y=>{Y.stopPropagation(),O||s(f.id)},onPointerOut:()=>O&&s(null),onPointerDown:Y=>p(Y,{kind:"room",id:f.id}),onPointerUp:b,children:o?r.jsx(Gn,{x0:f.x0,y0:f.y0,x1:f.x1,y1:f.y1,poly:f.poly,id:wo(f,e.finish),glow:st(f.type),hot:O}):r.jsxs(r.Fragment,{children:[r.jsx(kn,{r:f}),r.jsx("meshStandardMaterial",{color:st(f.type),transparent:!0,opacity:O?.95:.6,emissive:st(f.type),emissiveIntensity:O?.35:0})]})}),z&&r.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[(f.x0+f.x1)/2,.004,(f.y0+f.y1)/2],raycast:()=>null,userData:{pickFill:f.id},children:[r.jsx(kn,{r:f}),r.jsx("meshBasicMaterial",{color:bo,transparent:!0,opacity:.42,depthWrite:!1})]}),(a.rooms||I)&&F&&r.jsx(De,{position:[Mn(f).x,.05,Mn(f).y],center:!0,zIndexRange:[5,0],style:{pointerEvents:"none"},children:r.jsxs(mi,{className:`room3d ${I?"hot":""}`,color:st(f.type),onPick:u&&(()=>u(f.id)),children:[Mo(f),I&&r.jsxs("small",{children:[P.length>1?"ㄱ자":`${bn(f.x1-f.x0)}×${bn(f.y1-f.y0)}`," · ",jo(e.rooms,f).toFixed(1),"㎡"]})]})})]},f.id)}),o&&!e.rooms.length&&m.length>0&&(()=>{const f=ft(m,[]);return r.jsx("mesh",{"rotation-x":-Math.PI/2,position:[(f.minX+f.maxX)/2,.001,(f.minY+f.maxY)/2],children:r.jsx(Gn,{x0:f.minX,y0:f.minY,x1:f.maxX,y1:f.maxY,id:e.finish.floor,glow:"#000",hot:!1})})})(),w&&x&&t&&r.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[w.pxW*L/2,0,w.pxH*L/2],children:[r.jsx("planeGeometry",{args:[w.pxW*L,w.pxH*L]}),r.jsx("meshStandardMaterial",{map:x,transparent:!0,opacity:.55})]})]})}function gi(e,t,n){const s=je/2,c=[...t].sort((i,l)=>i.t-l.t),o=[];let a=-s;for(const i of c){const l=Math.max(a,i.t*e-i.w/2),d=Math.min(e+s,i.t*e+i.w/2);d<=l||(o.push({x0:a,x1:l,y0:0,y1:n}),i.sill>0&&o.push({x0:l,x1:d,y0:0,y1:Math.min(i.sill,n)}),i.sill+i.h<n&&o.push({x0:l,x1:d,y0:i.sill+i.h,y1:n}),a=d)}return o.push({x0:a,x1:e+s,y0:0,y1:n}),o.filter(i=>i.x1-i.x0>.001&&i.y1-i.y0>.001)}function vi(e,t,n){const s=Math.hypot(t.b.x-t.a.x,t.b.y-t.a.y)||1,c={x:(t.b.x-t.a.x)/s,y:(t.b.y-t.a.y)/s},o=[];for(const a of n)for(const i of[{x:a.x0,y:a.y0},{x:a.x1,y:a.y0},{x:a.x0,y:a.y1},{x:a.x1,y:a.y1}]){const l=i.x-t.a.x,d=i.y-t.a.y,u=l*c.x+d*c.y;Math.abs(-l*c.y+d*c.x)<.5&&u>.02&&u<s-.02&&o.push(u)}return o.sort((a,i)=>a-i),e.flatMap(a=>{const i=[a.x0,...o.filter(l=>l>a.x0+.02&&l<a.x1-.02),a.x1];return i.slice(1).map((l,d)=>({...a,x0:i[d],x1:l}))})}function Hn(e,t,n,s){const c=Math.hypot(e.b.x-e.a.x,e.b.y-e.a.y)||1,o={x:(e.b.x-e.a.x)/c,y:(e.b.y-e.a.y)/c},a=Math.min(c-.05,Math.max(.05,t)),i=n*(je/2+.08),l={x:e.a.x+o.x*a-o.y*i,y:e.a.y+o.y*a+o.x*i},d=Xe(l,s.rooms);return d?{wall:Fo(d,s.home),molding:Ro(d)}:Uo(l,s.walls)?{wall:s.home.wall,molding:!0}:{wall:null,molding:!1}}function wi(e,t){const n=new mr(e.x1-e.x0,e.y1-e.y0,t),s=n.attributes.position,c=n.attributes.uv,o=(e.x0+e.x1)/2,a=(e.y0+e.y1)/2;for(let i=0;i<s.count;i++){const l=o+s.getX(i),d=a+s.getY(i),u=s.getZ(i),y=Math.floor(i/4);c.setXY(i,y<2?u:l,y===2||y===3?u:d)}return n}const at=new ae({color:"#f7f7f5"}),bi=new ae({color:"#ebe9e4",roughness:.95}),Mi=new ae({color:"#3b3a38",roughness:1});function ji({p:e,front:t,back:n}){const s=h.useMemo(()=>wi(e,je),[e.x0,e.x1,e.y0,e.y1]);h.useEffect(()=>()=>s.dispose(),[s]);const c=o=>o.wall?_r(o.wall):bi;return r.jsx("mesh",{position:[(e.x0+e.x1)/2,(e.y0+e.y1)/2,0],geometry:s,material:[at,at,at,at,c(t),c(n)]})}function Xn({p:e,side:t,kind:n,crown:s,H:c,color:o}){const a=e.x1-e.x0,i=je/2,l=h.useMemo(()=>{if(n.profile==="gap"||!n.profile.length)return null;const u=new as(n.profile.map(([y,w])=>new Se(y,w)));return new hr(u,{depth:a,bevelEnabled:!1})},[n,a]);h.useEffect(()=>()=>l==null?void 0:l.dispose(),[l]);const d=h.useMemo(()=>new ae({color:o,roughness:.5,side:ns}),[o]);if(h.useEffect(()=>()=>d.dispose(),[d]),n.profile==="gap"){const u=s?.012:.015;return r.jsx("mesh",{position:[(e.x0+e.x1)/2,s?c-u/2:u/2,t*(i+.001)],material:Mi,children:r.jsx("boxGeometry",{args:[a,u,.002]})})}return l?r.jsx("mesh",{geometry:l,material:d,position:[t>0?e.x1:e.x0,s?c:0,t*i],"rotation-y":t>0?-Math.PI/2:Math.PI/2,"scale-y":s?-1:1}):null}function Si({wall:e,height:t,sides:n,openings:s,finish:c,swings:o,doors:a}){const i=e.b.x-e.a.x,l=e.b.y-e.a.y,d=Math.hypot(i,l),u=h.useMemo(()=>{const m=gi(d,s,t);return c?vi(m,e,c.rooms).map(j=>{const M=(j.x0+j.x1)/2;return{p:j,front:Hn(e,M,1,c),back:Hn(e,M,-1,c)}}):m.map(j=>({p:j,front:null,back:null}))},[e,s,t,c==null?void 0:c.home,c==null?void 0:c.rooms,c==null?void 0:c.walls]),y=c&&n?jn(So,c.home.crown):null,w=c?jn(Eo,c.home.base):null,L=c?Po(c.home.trim):"";return r.jsxs("group",{position:[e.a.x,0,e.a.y],"rotation-y":-Math.atan2(l,i),userData:{wallId:e.id,wallH:t},children:[u.map(({p:m,front:j,back:M},p)=>j&&M?r.jsxs("group",{children:[r.jsx(ji,{p:m,front:j,back:M}),[[j,1],[M,-1]].map(([b,x])=>b.molding?r.jsxs("group",{children:[w&&m.y0<1e-6&&r.jsx(Xn,{p:m,side:x,kind:w,crown:!1,H:t,color:L}),y&&n&&m.y0<n[x>0?0:1]-1e-6&&m.y1>n[x>0?0:1]-1e-6&&r.jsx(Xn,{p:m,side:x,kind:y,crown:!0,H:n[x>0?0:1],color:L})]},x):null)]},p):r.jsxs("mesh",{position:[(m.x0+m.x1)/2,(m.y0+m.y1)/2,0],children:[r.jsx("boxGeometry",{args:[m.x1-m.x0,m.y1-m.y0,je]}),r.jsx("meshStandardMaterial",{color:"#f7f7f5"})]},p)),s.map(m=>{const j=m.t*d,M=Math.min(m.sill+m.h,t);return m.kind==="window"?M>m.sill?r.jsx(Zo,{o:m,cx:j,sill:m.sill,top:M,ceil:t},m.id):null:r.jsxs("group",{children:[M<t-.02&&r.jsx(Qo,{o:m,cx:j,top:M,paint:en(m,a).casing}),m.slide?r.jsx(Kr,{o:m,cx:j,top:M,home:a}):r.jsx(Vr,{o:m,cx:j,top:M,swing:o[m.id],home:a})]},m.id)})]})}const Ei={gap:"#2b9348",item:"#6b7487",door:"#a07a2c"};function Pi({runs:e,sel:t}){return r.jsx("group",{children:e.map(n=>{const s=!!t&&n.items.includes(t),c=Io(n)+.08,o=(a,i=c)=>{const l=ko(n,a,i);return[l.x,.02,l.y]};return r.jsxs("group",{children:[n.segs.map((a,i)=>r.jsx(Un,{points:[o(a.a),o(a.b)],color:a.id&&a.id===t?"#3b6cff":Ei[a.kind],lineWidth:s?3:2,dashed:a.kind==="door",dashSize:.06,gapSize:.04},i)),Ao(n).map(a=>r.jsx(Un,{points:[o(a,c-.07),o(a,c+.07)],color:"#6b7487",lineWidth:2},`t${a}`)),n.segs.filter(a=>a.b-a.a>=.12).map((a,i)=>r.jsx(De,{position:o((a.a+a.b)/2,c+.13),center:!0,zIndexRange:[8,0],style:{pointerEvents:"none"},children:r.jsx("div",{className:`run3d ${a.kind}${a.id&&a.id===t?" mine":""}`,children:_o(a)})},`l${i}`))]},n.key)})})}const Wt={id:"",t:0};function zi({item:e,walls:t,openings:n,inside:s,snap:c,status:o,selected:a,dispatch:i,controls:l,seeThrough:d,pick:u,faded:y,show:w,onMenu:L,bare:m,onRotate:j,onRetap:M,onDeco:p,ceil:b,many:x}){const g=d||y,v=h.useRef(null),f=h.useRef(null),P=h.useRef(null),A=h.useMemo(()=>new W,[]),I=Lt[o]||e.paint||e.color,z=e.z??0,O=zo(e),F=!e.cab&&!e.photo&&us(e.kind);h.useEffect(()=>()=>void(l.current&&!Ae.on&&(l.current.enabled=!0)),[l]),h.useEffect(()=>()=>{var T;return(T=P.current)==null?void 0:T.call(P)},[]);const Y=()=>{l.current&&!Te.get().eye&&!Ae.on&&(l.current.enabled=!0)},V=T=>{var Q;if(T.button===2){u&&Object.assign(ts,{id:e.id,t:performance.now()});return}if(!u||T.button===1||(T.stopPropagation(),Qt(T.pointerId)))return;const{clientX:_,clientY:E}=T.nativeEvent,U={x:T.point.x,y:T.point.z};if(v.current=T.button===0?{id:T.pointerId,x:_,y:E,t:T.nativeEvent.timeStamp,at:U,was:a}:null,p)return;const C=T.nativeEvent;if(x&&T.button===0&&(C.ctrlKey||C.metaKey||C.shiftKey||x.mode&&!x.ids.includes(e.id))){v.current=null;const $=x.base();x.onMulti($.includes(e.id)?$.filter(q=>q!==e.id):[...$,e.id]);return}const D=!!x&&T.button===0&&x.ids.includes(e.id)&&(x.mode||x.ids.length>1);if(D||i({type:"select",id:e.id}),$e(T.nativeEvent,()=>{f.current=null,v.current=null,L({kind:"item",id:e.id,at:U},_,E)}),e.fixed&&!D||!T.ray.intersectPlane(lt,A))return;let R=null;if(D){const $=x.items.filter(q=>x.ids.includes(q.id)&&!q.fixed);R={ids:$.map(q=>q.id),base:Object.fromEntries($.map(q=>[q.id,{x:q.x,y:q.y}])),b0:{x:e.x,y:e.y},last:{x:0,y:0}}}f.current={id:T.pointerId,dx:A.x-e.x,dz:A.z-e.y,sx:_,sy:E,moved:!1,copy:!!x&&C.altKey&&T.button===0,cur:e.id,now:e,group:R},T.target.setPointerCapture(T.pointerId),l.current&&(l.current.enabled=!1),(Q=P.current)==null||Q.call(P);const N=$=>{var Z;const q=f.current;!q||$.pointerId===q.id||(q.moved&&i({type:"cancelDrag"}),f.current=null,ut(),(Z=P.current)==null||Z.call(P),Y())};window.addEventListener("pointerdown",N,!0),P.current=()=>{window.removeEventListener("pointerdown",N,!0),P.current=null}},k=T=>{const _=f.current;if(!_||T.pointerId!==_.id)return;if(!_.moved){if(Math.hypot(T.nativeEvent.clientX-_.sx,T.nativeEvent.clientY-_.sy)<Ue(T.nativeEvent.pointerType))return;if(_.moved=!0,ut(),i({type:"checkpoint"}),T.ray.intersectPlane(lt,A)&&Object.assign(_,{dx:A.x-e.x,dz:A.z-e.y}),_.copy&&_.group){const C=((x==null?void 0:x.items)??[]).filter(D=>_.group.ids.includes(D.id)).map(D=>Pn(D));i({type:"addItems",items:C,live:!0}),_.group={..._.group,ids:C.map(D=>D.id),base:Object.fromEntries(C.map(D=>[D.id,{x:D.x,y:D.y}]))},x==null||x.onMulti(_.group.ids)}else if(_.copy){const C=Pn(e);i({type:"addItems",items:[C],select:C.id,live:!0}),_.cur=C.id,_.now=C}}if(!T.ray.intersectPlane(lt,A))return;const E=_.group;if(E){const C=c.step,D={x:Math.round((A.x-_.dx-E.b0.x)/C)*C,y:Math.round((A.z-_.dz-E.b0.y)/C)*C};if(D.x===E.last.x&&D.y===E.last.y||!E.ids.every(N=>s({x:E.base[N].x+D.x,y:E.base[N].y+D.y})))return;E.last=D;const R=N=>Math.round(N*1e3)/1e3;i({type:"updateItems",patches:Object.fromEntries(E.ids.map(N=>[N,{x:R(E.base[N].x+D.x),y:R(E.base[N].y+D.y)}]))});return}const U=Yo(_.now,{x:A.x-_.dx,y:A.z-_.dz},{walls:t,openings:n},s,c);_.now={..._.now,...U},i({type:"updateItem",id:_.cur,patch:U})},K=u&&!p&&!e.fixed&&Lo(e,t),H=T=>{if(!K||!T.shiftKey)return;T.stopPropagation();const _=Math.sign(T.deltaY||T.deltaX),E=_?Wo(e,_*c.step,{walls:t,openings:n},s):null;if(!E)return;const U=performance.now();(Wt.id!==e.id||U-Wt.t>1e3)&&i({type:"checkpoint"}),Object.assign(Wt,{id:e.id,t:U}),i({type:"updateItem",id:e.id,patch:E})},J=T=>{var Q,$,q,Z;if(f.current&&T.pointerId!==f.current.id)return;const _=v.current;v.current=null;const{clientX:E,clientY:U,pointerType:C,timeStamp:D}=T.nativeEvent,R=f.current;_&&_.id===T.pointerId&&!(R!=null&&R.moved)&&D-_.t<500&&Math.hypot(E-_.x,U-_.y)<=Ue(C)&&!es()&&(p?p(e):R!=null&&R.group&&x?x.onMulti(x.mode?x.ids.filter(G=>G!==e.id):[e.id]):M==null||M(e,_.at,{t:D,x:E,y:U,touch:C!=="mouse"},_.was)),R!=null&&R.moved&&(R.group||i({type:"updateItem",id:R.cur,patch:Bo(R.now,{walls:t,openings:n})}),R.copy&&((Q=x==null?void 0:x.onCopied)==null||Q.call(x,"item",R.group?R.group.ids.length:1)));const N=!!f.current;f.current=null,($=P.current)==null||$.call(P),(Z=(q=T.target).releasePointerCapture)==null||Z.call(q,T.pointerId),N&&Y()};return r.jsxs("group",{position:[e.x,0,e.y],"rotation-y":-e.rot,userData:{itemId:e.id},children:[r.jsxs("mesh",{"position-y":z+e.h/2,onPointerDown:V,onPointerMove:k,onPointerUp:J,onWheel:H,children:[r.jsx("boxGeometry",{args:[e.w,e.h,e.d]}),e.cab||F?r.jsx("meshBasicMaterial",{colorWrite:!1,depthWrite:!1},"hit"):r.jsx("meshStandardMaterial",{color:I,emissive:a?"#3b6cff":"#000",emissiveIntensity:a?.25:0,transparent:g,opacity:g?.35:1,depthWrite:!g},g?"see":"solid")]}),r.jsx(Jo,{item:e,z,seeThrough:g,selected:a}),O&&[-.026,.026].map(T=>r.jsxs("mesh",{position:[T,z+e.h/2,e.d/2+.001],children:[r.jsx("circleGeometry",{args:[.013,18]}),r.jsx("meshBasicMaterial",{color:a?"#3b6cff":"#8d939a"})]},T)),e.cab&&r.jsx("group",{"position-y":z,children:r.jsx(Le,{spec:e.cab,w:e.w,h:e.h,d:e.d,z,ceiling:b,warn:Lt[o]||void 0,selected:a,seeThrough:g})}),F&&r.jsx("group",{"position-y":z,children:r.jsx(ds,{kind:e.kind,w:e.w,h:e.h,d:e.d,color:e.paint||fs[e.kind],warn:Lt[o]||void 0,selected:a,seeThrough:g})}),z<.05&&e.h>.05&&!O&&!y&&r.jsx("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,material:er(),raycast:Xt,children:r.jsx("planeGeometry",{args:[e.w+.22,e.d+.22]})}),e.clearance>0&&!m&&r.jsxs("mesh",{position:[0,.006,e.d/2+e.clearance/2],"rotation-x":-Math.PI/2,children:[r.jsx("planeGeometry",{args:[e.w,e.clearance]}),r.jsx("meshBasicMaterial",{color:o==="blocked"?"#f5a524":"#508cff",transparent:!0,opacity:.28})]}),a&&u&&!e.fixed&&!O&&!m&&j&&r.jsx(Li,{item:e,z,onRotate:()=>j(e,Math.PI/6)}),(!O&&(w.items||w.dims)||a)&&r.jsx(De,{position:[0,z+e.h+.15,0],center:!0,distanceFactor:8,zIndexRange:[10,0],style:{pointerEvents:"none"},children:r.jsxs("div",{className:`tag3d ${o}`,children:[(w.items||a)&&e.name,(w.dims||a)&&r.jsxs("small",{children:[Math.round(e.w*100),"×",Math.round(e.d*100),"×",Math.round(e.h*100)]})]})})]})}function Li({item:e,z:t,onRotate:n}){const s=h.useRef(null),c=B(i=>i.camera),o=h.useMemo(()=>new W,[]);ie(()=>{const i=s.current,l=i==null?void 0:i.parent;if(!i||!l)return;let d=-1/0,u=[1,-1];for(const y of[-1,1])for(const w of[-1,1])o.set(y*e.w/2,t+e.h,w*e.d/2),l.localToWorld(o).project(c),o.x+o.y>d&&(d=o.x+o.y,u=[y,w]);i.position.set(u[0]*e.w/2,t+e.h,u[1]*e.d/2)});const a=i=>i.stopPropagation();return r.jsx("group",{ref:s,children:r.jsx(De,{center:!0,zIndexRange:[20,0],children:r.jsx("button",{className:"rot3d",title:"30° 돌리기 (누를 때마다 시계 방향)","aria-label":"30도 돌리기",onPointerDown:a,onPointerUp:a,onDoubleClick:a,onClick:i=>{i.stopPropagation(),n()},children:"↻"})})})}export{Oi as default};
