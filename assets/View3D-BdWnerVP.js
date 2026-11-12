import{r as h,c as Zn,s as Sn,p as Tt,W as En,o as Qn,u as Jn,j as c,b as rt,a as eo,d as Pn,e as Le,f as je,g as Et,h as to,i as no,S as lt,k as Ce,l as et,m as oo,n as Wt,q as tt,t as so,v as ut,w as nt,x as ro,y as io,z as ao,A as co,B as Pt,C as lo,D as kt,E as uo,F as $t,G as fo,H as po,I as ho,J as Ln,K as mo,L as xo,M as yo,N as Ut,O as zn,P as go,Q as In,R as qt,T as Bt,U as Lt,V as zt,X as vo,Y as wo,Z as Mo,_ as bo,$ as ye,a0 as ke,a1 as jo,a2 as We,a3 as Ee,a4 as Qe,a5 as So,a6 as Vt,a7 as Eo,a8 as Po,a9 as dt,aa as Lo,ab as zo,ac as ft,ad as Io,ae as Ao,af as _o,ag as Oo,ah as Co,ai as Ro,aj as An,ak as ot,al as Kt,am as Do,an as Zt,ao as Ue,ap as To,aq as Wo,ar as Uo,as as Qt,at as It,au as Bo,av as Be,aw as _n,ax as Fo,ay as Yo,az as $e,aA as Go,aB as Ho,aC as Xo,aD as Jt,aE as No,aF as en,aG as tn,aH as ko,aI as $o,aJ as qo,aK as pt,aL as Vo,aM as Ko,aN as Zo,aO as Qo,aP as Jo,aQ as es,aR as nn,aS as on,aT as ts,aU as ns,aV as os,aW as ss,aX as rs,aY as is,aZ as as,a_ as cs,a$ as sn,b0 as ls,b1 as us,b2 as ds,b3 as fs,b4 as rn,b5 as ps,b6 as Me}from"./index-aORIxflI.js";import{M as At,D as hs,C as ms,S as xs,a as ys,b as gs,G as vs,n as _t,O as ws,W as Ms,c as bs,F as js,d as Ss}from"./Door3D-D38vOVRy.js";import{u as W,a as ae,V as D,_ as Ot,D as On,b as ge,P as Cn,O as Rn,R as Es,I as Ps,F as an,c as Ct,d as Oe,W as Ls,B as Ft,S as Dn,e as zs,U as cn,f as ln,M as Is,g as Re,L as As,h as Tn,i as _s,C as Os,j as Wn,k as Cs,l as Rs,m as Ds,n as Un,o as ze,p as be,Q as Bn,q as Ts,r as it,s as ht,T as Ws,t as Us,v as Bs,w as Fs,x as Ys,E as Gs,y as Hs,z as Xs}from"./CabinetMesh-zMo5nRaf.js";const Fe=new D,Yt=new D,Ns=new D,un=new ge;function ks(e,t,n){const o=Fe.setFromMatrixPosition(e.matrixWorld);o.project(t);const a=n.width/2,s=n.height/2;return[o.x*a+a,-(o.y*s)+s]}function $s(e,t){const n=Fe.setFromMatrixPosition(e.matrixWorld),o=Yt.setFromMatrixPosition(t.matrixWorld),a=n.sub(o),s=t.getWorldDirection(Ns);return a.angleTo(s)>Math.PI/2}function qs(e,t,n,o){const a=Fe.setFromMatrixPosition(e.matrixWorld),s=a.clone();s.project(t),un.set(s.x,s.y),n.setFromCamera(un,t);const r=n.intersectObjects(o,!0);if(r.length){const i=r[0].distance;return a.distanceTo(n.ray.origin)<i}return!0}function Vs(e,t){if(t instanceof Rn)return t.zoom;if(t instanceof Cn){const n=Fe.setFromMatrixPosition(e.matrixWorld),o=Yt.setFromMatrixPosition(t.matrixWorld),a=t.fov*Math.PI/180,s=n.distanceTo(o);return 1/(2*Math.tan(a/2)*s)}else return 1}function Ks(e,t,n){if(t instanceof Cn||t instanceof Rn){const o=Fe.setFromMatrixPosition(e.matrixWorld),a=Yt.setFromMatrixPosition(t.matrixWorld),s=o.distanceTo(a),r=(n[1]-n[0])/(t.far-t.near),i=n[1]-r*t.far;return Math.round(r*s+i)}}const Rt=e=>Math.abs(e)<1e-10?0:e;function Fn(e,t,n=""){let o="matrix3d(";for(let a=0;a!==16;a++)o+=Rt(t[a]*e.elements[a])+(a!==15?",":")");return n+o}const Zs=(e=>t=>Fn(t,e))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),Qs=(e=>(t,n)=>Fn(t,e(n),"translate(-50%,-50%)"))(e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1]);function Js(e){return e&&typeof e=="object"&&"current"in e}const Ie=h.forwardRef(({children:e,eps:t=.001,style:n,className:o,prepend:a,center:s,fullscreen:r,portal:i,distanceFactor:l,sprite:f=!1,transform:d=!1,occlude:m,onOcclude:w,castShadow:I,receiveShadow:M,material:b,geometry:S,zIndexRange:p=[16777271,0],calculatePosition:g=ks,as:x="div",wrapperClass:y,pointerEvents:u="auto",...v},C)=>{const{gl:_,camera:E,scene:P,size:z,raycaster:R,events:k,viewport:Z}=W(),[G]=h.useState(()=>document.createElement(x)),Y=h.useRef(),A=h.useRef(null),H=h.useRef(0),L=h.useRef([0,0]),O=h.useRef(null),T=h.useRef(null),N=(i==null?void 0:i.current)||k.connected||_.domElement.parentNode,U=h.useRef(null),B=h.useRef(!1),F=h.useMemo(()=>m&&m!=="blending"||Array.isArray(m)&&m.length&&Js(m[0]),[m]);h.useLayoutEffect(()=>{const K=_.domElement;m&&m==="blending"?(K.style.zIndex=`${Math.floor(p[0]/2)}`,K.style.position="absolute",K.style.pointerEvents="none"):(K.style.zIndex=null,K.style.position=null,K.style.pointerEvents=null)},[m]),h.useLayoutEffect(()=>{if(A.current){const K=Y.current=Zn(G);if(P.updateMatrixWorld(),d)G.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const X=g(A.current,E,z);G.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${X[0]}px,${X[1]}px,0);transform-origin:0 0;`}return N&&(a?N.prepend(G):N.appendChild(G)),()=>{N&&N.removeChild(G),K.unmount()}}},[N,d]),h.useLayoutEffect(()=>{y&&(G.className=y)},[y]);const V=h.useMemo(()=>d?{position:"absolute",top:0,left:0,width:z.width,height:z.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:s?"translate3d(-50%,-50%,0)":"none",...r&&{top:-z.height/2,left:-z.width/2,width:z.width,height:z.height},...n},[n,s,r,z,d]),oe=h.useMemo(()=>({position:"absolute",pointerEvents:u}),[u]);h.useLayoutEffect(()=>{if(B.current=!1,d){var K;(K=Y.current)==null||K.render(h.createElement("div",{ref:O,style:V},h.createElement("div",{ref:T,style:oe},h.createElement("div",{ref:C,className:o,style:n,children:e}))))}else{var X;(X=Y.current)==null||X.render(h.createElement("div",{ref:C,style:V,className:o,children:e}))}});const Q=h.useRef(!0);ae(K=>{if(A.current){E.updateMatrixWorld(),A.current.updateWorldMatrix(!0,!1);const X=d?L.current:g(A.current,E,z);if(d||Math.abs(H.current-E.zoom)>t||Math.abs(L.current[0]-X[0])>t||Math.abs(L.current[1]-X[1])>t){const xe=$s(A.current,E);let ue=!1;F&&(Array.isArray(m)?ue=m.map(de=>de.current):m!=="blending"&&(ue=[P]));const se=Q.current;if(ue){const de=qs(A.current,E,R,ue);Q.current=de&&!xe}else Q.current=!xe;se!==Q.current&&(w?w(!Q.current):G.style.display=Q.current?"block":"none");const Se=Math.floor(p[0]/2),Ye=m?F?[p[0],Se]:[Se-1,0]:p;if(G.style.zIndex=`${Ks(A.current,E,Ye)}`,d){const[de,Ge]=[z.width/2,z.height/2],le=E.projectionMatrix.elements[5]*Ge,{isOrthographicCamera:Ae,top:De,left:Te,bottom:ie,right:He}=E,_e=Zs(E.matrixWorldInverse),Xe=Ae?`scale(${le})translate(${Rt(-(He+Te)/2)}px,${Rt((De+ie)/2)}px)`:`translateZ(${le}px)`;let fe=A.current.matrixWorld;f&&(fe=E.matrixWorldInverse.clone().transpose().copyPosition(fe).scale(A.current.scale),fe.elements[3]=fe.elements[7]=fe.elements[11]=0,fe.elements[15]=1),G.style.width=z.width+"px",G.style.height=z.height+"px",G.style.perspective=Ae?"":`${le}px`,O.current&&T.current&&(O.current.style.transform=`${Xe}${_e}translate(${de}px,${Ge}px)`,T.current.style.transform=Qs(fe,1/((l||10)/400)))}else{const de=l===void 0?1:Vs(A.current,E)*l;G.style.transform=`translate3d(${X[0]}px,${X[1]}px,0) scale(${de})`}L.current=X,H.current=E.zoom}}if(!F&&U.current&&!B.current)if(d){if(O.current){const X=O.current.children[0];if(X!=null&&X.clientWidth&&X!=null&&X.clientHeight){const{isOrthographicCamera:xe}=E;if(xe||S)v.scale&&(Array.isArray(v.scale)?v.scale instanceof D?U.current.scale.copy(v.scale.clone().divideScalar(1)):U.current.scale.set(1/v.scale[0],1/v.scale[1],1/v.scale[2]):U.current.scale.setScalar(1/v.scale));else{const ue=(l||10)/400,se=X.clientWidth*ue,Se=X.clientHeight*ue;U.current.scale.set(se,Se,1)}B.current=!0}}}else{const X=G.children[0];if(X!=null&&X.clientWidth&&X!=null&&X.clientHeight){const xe=1/Z.factor,ue=X.clientWidth*xe,se=X.clientHeight*xe;U.current.scale.set(ue,se,1),B.current=!0}U.current.lookAt(K.camera.position)}});const $=h.useMemo(()=>({vertexShader:d?void 0:`
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
      `}),[d]);return h.createElement("group",Ot({},v,{ref:A}),m&&!F&&h.createElement("mesh",{castShadow:I,receiveShadow:M,ref:U},S||h.createElement("planeGeometry",null),b||h.createElement("shaderMaterial",{side:On,vertexShader:$.vertexShader,fragmentShader:$.fragmentShader})))}),Yn=parseInt(Es.replace(/\D+/g,"")),Gn=Yn>=125?"uv1":"uv2",dn=new Ft,qe=new D;class Gt extends Ps{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],o=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(o),this.setAttribute("position",new an(t,3)),this.setAttribute("uv",new an(n,2))}applyMatrix4(t){const n=this.attributes.instanceStart,o=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(t),o.applyMatrix4(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const o=new Ct(n,6,1);return this.setAttribute("instanceStart",new Oe(o,3,0)),this.setAttribute("instanceEnd",new Oe(o,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t,n=3){let o;t instanceof Float32Array?o=t:Array.isArray(t)&&(o=new Float32Array(t));const a=new Ct(o,n*2,1);return this.setAttribute("instanceColorStart",new Oe(a,n,0)),this.setAttribute("instanceColorEnd",new Oe(a,n,n)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ls(t.geometry)),this}fromLineSegments(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;t!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(t),dn.setFromBufferAttribute(n),this.boundingBox.union(dn))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0&&n!==void 0){const o=this.boundingSphere.center;this.boundingBox.getCenter(o);let a=0;for(let s=0,r=t.count;s<r;s++)qe.fromBufferAttribute(t,s),a=Math.max(a,o.distanceToSquared(qe)),qe.fromBufferAttribute(n,s),a=Math.max(a,o.distanceToSquared(qe));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}class Hn extends Gt{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const n=t.length-3,o=new Float32Array(2*n);for(let a=0;a<n;a+=3)o[2*a]=t[a],o[2*a+1]=t[a+1],o[2*a+2]=t[a+2],o[2*a+3]=t[a+3],o[2*a+4]=t[a+4],o[2*a+5]=t[a+5];return super.setPositions(o),this}setColors(t,n=3){const o=t.length-n,a=new Float32Array(2*o);if(n===3)for(let s=0;s<o;s+=n)a[2*s]=t[s],a[2*s+1]=t[s+1],a[2*s+2]=t[s+2],a[2*s+3]=t[s+3],a[2*s+4]=t[s+4],a[2*s+5]=t[s+5];else for(let s=0;s<o;s+=n)a[2*s]=t[s],a[2*s+1]=t[s+1],a[2*s+2]=t[s+2],a[2*s+3]=t[s+3],a[2*s+4]=t[s+4],a[2*s+5]=t[s+5],a[2*s+6]=t[s+6],a[2*s+7]=t[s+7];return super.setColors(a,n),this}fromLine(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}}class Ht extends zs{constructor(t){super({type:"LineMaterial",uniforms:cn.clone(cn.merge([ln.common,ln.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ge(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${Yn>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(n){this.uniforms.diffuse.value=n}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(n){n===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(n){this.uniforms.linewidth.value=n}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(n){!!n!="USE_DASH"in this.defines&&(this.needsUpdate=!0),n===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(n){this.uniforms.dashScale.value=n}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(n){this.uniforms.dashSize.value=n}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(n){this.uniforms.dashOffset.value=n}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(n){this.uniforms.gapSize.value=n}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(n){this.uniforms.resolution.value.copy(n)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(n){!!n!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),n===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}const mt=new Re,fn=new D,pn=new D,ee=new Re,te=new Re,pe=new Re,xt=new D,yt=new Tn,ne=new As,hn=new D,Ve=new Ft,Ke=new Dn,he=new Re;let me,Pe;function mn(e,t,n){return he.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),he.multiplyScalar(1/he.w),he.x=Pe/n.width,he.y=Pe/n.height,he.applyMatrix4(e.projectionMatrixInverse),he.multiplyScalar(1/he.w),Math.abs(Math.max(he.x,he.y))}function er(e,t){const n=e.matrixWorld,o=e.geometry,a=o.attributes.instanceStart,s=o.attributes.instanceEnd,r=Math.min(o.instanceCount,a.count);for(let i=0,l=r;i<l;i++){ne.start.fromBufferAttribute(a,i),ne.end.fromBufferAttribute(s,i),ne.applyMatrix4(n);const f=new D,d=new D;me.distanceSqToSegment(ne.start,ne.end,d,f),d.distanceTo(f)<Pe*.5&&t.push({point:d,pointOnLine:f,distance:me.origin.distanceTo(d),object:e,face:null,faceIndex:i,uv:null,[Gn]:null})}}function tr(e,t,n){const o=t.projectionMatrix,s=e.material.resolution,r=e.matrixWorld,i=e.geometry,l=i.attributes.instanceStart,f=i.attributes.instanceEnd,d=Math.min(i.instanceCount,l.count),m=-t.near;me.at(1,pe),pe.w=1,pe.applyMatrix4(t.matrixWorldInverse),pe.applyMatrix4(o),pe.multiplyScalar(1/pe.w),pe.x*=s.x/2,pe.y*=s.y/2,pe.z=0,xt.copy(pe),yt.multiplyMatrices(t.matrixWorldInverse,r);for(let w=0,I=d;w<I;w++){if(ee.fromBufferAttribute(l,w),te.fromBufferAttribute(f,w),ee.w=1,te.w=1,ee.applyMatrix4(yt),te.applyMatrix4(yt),ee.z>m&&te.z>m)continue;if(ee.z>m){const x=ee.z-te.z,y=(ee.z-m)/x;ee.lerp(te,y)}else if(te.z>m){const x=te.z-ee.z,y=(te.z-m)/x;te.lerp(ee,y)}ee.applyMatrix4(o),te.applyMatrix4(o),ee.multiplyScalar(1/ee.w),te.multiplyScalar(1/te.w),ee.x*=s.x/2,ee.y*=s.y/2,te.x*=s.x/2,te.y*=s.y/2,ne.start.copy(ee),ne.start.z=0,ne.end.copy(te),ne.end.z=0;const b=ne.closestPointToPointParameter(xt,!0);ne.at(b,hn);const S=_s.lerp(ee.z,te.z,b),p=S>=-1&&S<=1,g=xt.distanceTo(hn)<Pe*.5;if(p&&g){ne.start.fromBufferAttribute(l,w),ne.end.fromBufferAttribute(f,w),ne.start.applyMatrix4(r),ne.end.applyMatrix4(r);const x=new D,y=new D;me.distanceSqToSegment(ne.start,ne.end,y,x),n.push({point:y,pointOnLine:x,distance:me.origin.distanceTo(y),object:e,face:null,faceIndex:w,uv:null,[Gn]:null})}}}class Xn extends Is{constructor(t=new Gt,n=new Ht({color:Math.random()*16777215})){super(t,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,n=t.attributes.instanceStart,o=t.attributes.instanceEnd,a=new Float32Array(2*n.count);for(let r=0,i=0,l=n.count;r<l;r++,i+=2)fn.fromBufferAttribute(n,r),pn.fromBufferAttribute(o,r),a[i]=i===0?0:a[i-1],a[i+1]=a[i]+fn.distanceTo(pn);const s=new Ct(a,2,1);return t.setAttribute("instanceDistanceStart",new Oe(s,1,0)),t.setAttribute("instanceDistanceEnd",new Oe(s,1,1)),this}raycast(t,n){const o=this.material.worldUnits,a=t.camera;a===null&&!o&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;me=t.ray;const r=this.matrixWorld,i=this.geometry,l=this.material;Pe=l.linewidth+s,i.boundingSphere===null&&i.computeBoundingSphere(),Ke.copy(i.boundingSphere).applyMatrix4(r);let f;if(o)f=Pe*.5;else{const m=Math.max(a.near,Ke.distanceToPoint(me.origin));f=mn(a,m,l.resolution)}if(Ke.radius+=f,me.intersectsSphere(Ke)===!1)return;i.boundingBox===null&&i.computeBoundingBox(),Ve.copy(i.boundingBox).applyMatrix4(r);let d;if(o)d=Pe*.5;else{const m=Math.max(a.near,Ve.distanceToPoint(me.origin));d=mn(a,m,l.resolution)}Ve.expandByScalar(d),me.intersectsBox(Ve)!==!1&&(o?er(this,n):tr(this,a,n))}onBeforeRender(t){const n=this.material.uniforms;n&&n.resolution&&(t.getViewport(mt),this.material.uniforms.resolution.value.set(mt.z,mt.w))}}class nr extends Xn{constructor(t=new Hn,n=new Ht({color:Math.random()*16777215})){super(t,n),this.isLine2=!0,this.type="Line2"}}const xn=h.forwardRef(function({points:t,color:n=16777215,vertexColors:o,linewidth:a,lineWidth:s,segments:r,dashed:i,...l},f){var d,m;const w=W(p=>p.size),I=h.useMemo(()=>r?new Xn:new nr,[r]),[M]=h.useState(()=>new Ht),b=(o==null||(d=o[0])==null?void 0:d.length)===4?4:3,S=h.useMemo(()=>{const p=r?new Gt:new Hn,g=t.map(x=>{const y=Array.isArray(x);return x instanceof D||x instanceof Re?[x.x,x.y,x.z]:x instanceof ge?[x.x,x.y,0]:y&&x.length===3?[x[0],x[1],x[2]]:y&&x.length===2?[x[0],x[1],0]:x});if(p.setPositions(g.flat()),o){n=16777215;const x=o.map(y=>y instanceof Os?y.toArray():y);p.setColors(x.flat(),b)}return p},[t,r,o,b]);return h.useLayoutEffect(()=>{I.computeLineDistances()},[t,I]),h.useLayoutEffect(()=>{i?M.defines.USE_DASH="":delete M.defines.USE_DASH,M.needsUpdate=!0},[i,M]),h.useEffect(()=>()=>{S.dispose(),M.dispose()},[S]),h.createElement("primitive",Ot({object:I,ref:f},l),h.createElement("primitive",{object:S,attach:"geometry"}),h.createElement("primitive",Ot({object:M,attach:"material",color:n,vertexColors:!!o,resolution:[w.width,w.height],linewidth:(m=a??s)!==null&&m!==void 0?m:1,dashed:i,transparent:b===4},l)))});function Nn(e,t,n,o){const a=new Wn(e.map(l=>new ge(l.x-t,o?n-l.y:l.y-n))),s=new Cs(a),r=s.attributes.position,i=s.attributes.uv;for(let l=0;l<r.count;l++)i.setXY(l,t+r.getX(l),o?n-r.getY(l):n+r.getY(l));return s}const or=e=>e?e.map(t=>`${t.x.toFixed(3)},${t.y.toFixed(3)}`).join(";"):"";function kn(e,t,n){const o=new Rs(e);return o.wrapS=o.wrapT=Ds,o.repeat.set(1/t.w,1/t.h),n&&(o.colorSpace=Un),o.anisotropy=8,o}const st=new Map;function Xt(e,t){const n=`${e}|${t}`;let o=st.get(n);if(!o){const a=Sn(e,t);o=kn(a.canvas,a,!0),st.set(n,o)}return o}const sr={coat:2.2,paper:1,flower:.6,silk:.8,paint:1,bathwall:.6},Dt=new Map;function $n(e,t){var o;const n=Sn("wall",t);(o=e.bumpMap)==null||o.dispose(),e.bumpMap=n.bump?kn(n.bump,n,!1):null,e.bumpScale=sr[Tt(En,t).finish.key]??1}function rr(e){let t=Dt.get(e);return t||(t=new ze({map:Xt("wall",e),roughness:Tt(En,e).finish.rough}),$n(t,e),Dt.set(e,t)),t}Qn((e,t)=>{const n=`${e}|${t}`,o=st.get(n);if(!o)return;st.delete(n);const a=Xt(e,t);setTimeout(()=>o.dispose(),2e3);const s=e==="wall"?Dt.get(t):void 0;s&&(s.map=a,$n(s,t),s.needsUpdate=!0)});const gt=new be(new D(0,1,0),0),yn=new D(0,1,0),vt=new D,ir="#4b5563",wt="#8d6e52";function Mt({a:e,b:t,r:n,color:o}){const{mid:a,q:s,L:r}=h.useMemo(()=>{const i=new D(...e),l=new D(...t),f=l.clone().sub(i),d=f.length();return{mid:i.add(l).multiplyScalar(.5),q:new Bn().setFromUnitVectors(yn,d>1e-6?f.normalize():yn),L:d}},[...e,...t]);return c.jsxs("mesh",{position:a,quaternion:s,children:[c.jsx("capsuleGeometry",{args:[n,Math.max(.001,r),4,10]}),c.jsx("meshStandardMaterial",{color:o,roughness:.8})]})}const qn=h.memo(function({age:t,sex:n,pose:o,seat:a,chair:s}){const r=rt(t,n),i=Pn(t).color,l=so(t),f=r.shoulderW*.22,d=r.shoulderW*.16,m=r.shoulderW*.1,w=r.depth/2,I=o==="stand"?0:a,M=o==="stand"?r.H:I+r.sitH,b=M-r.head/2,S=M-r.head*1.3,p=o==="stand"?r.leg:I+w*.8,g=r.shoulderW/2-m;let x,y;if(o==="stand")x=[-1,1].flatMap(u=>[[[u*f,d,0],[u*f,r.leg,0]]]),y=[-1,1].map(u=>[u*(g+m*.6),S-r.arm+m,0]);else if(o==="sit"){const u=I+d,v=Math.max(u,r.shin),C=Math.sqrt(Math.max(.01,r.thigh**2-(v-u)**2)),_=Math.max(d,v-r.shin+d);x=[-1,1].flatMap(E=>[[[E*f,u,0],[E*f,v,C]],[[E*f,v,C],[E*f,_,C+.04]]]),y=[-1,1].map(E=>[E*(f+m*.5),u+d+m,C*.6])}else{const u=f+r.thigh*.45,v=r.thigh*.8;x=[-1,1].flatMap(C=>[[[C*f,d,0],[C*u,d,v]],[[C*u,d,v],[-C*f,d,r.thigh*.35]]]),y=[-1,1].map(C=>[C*(f+r.thigh*.35),d*2+m,r.thigh*.6])}return c.jsxs("group",{children:[x.map(([u,v],C)=>c.jsx(Mt,{a:u,b:v,r:d,color:ir},C)),c.jsxs("mesh",{position:[0,(p+S)/2,0],scale:[r.shoulderW*.46/w,1,1],children:[c.jsx("capsuleGeometry",{args:[w,Math.max(.01,S-p-w),4,12]}),c.jsx("meshStandardMaterial",{color:i,roughness:.85})]}),[-1,1].map((u,v)=>c.jsx(Mt,{a:[u*g,S-m*.5,0],b:y[v],r:m,color:i},v)),y.map((u,v)=>c.jsxs("mesh",{position:u,children:[c.jsx("sphereGeometry",{args:[m*1.1,10,8]}),c.jsx("meshStandardMaterial",{color:lt})]},v)),c.jsx(Mt,{a:[0,S,0],b:[0,b,0],r:r.head*.17,color:lt}),c.jsxs("mesh",{position:[0,b,0],children:[c.jsx("sphereGeometry",{args:[r.head/2,20,16]}),c.jsx("meshStandardMaterial",{color:lt,roughness:.7})]}),c.jsxs("mesh",{position:[0,b+r.head*.06,-r.head*.06],children:[c.jsx("sphereGeometry",{args:[r.head*.52,20,16]}),c.jsx("meshStandardMaterial",{color:l,roughness:.9})]}),n==="f"&&c.jsxs("mesh",{position:[0,b-r.head*.12,-r.head*.18],children:[c.jsx("sphereGeometry",{args:[r.head*.42,16,12]}),c.jsx("meshStandardMaterial",{color:l,roughness:.9})]}),[-1,1].map(u=>c.jsxs("mesh",{position:[u*r.head*.18,b,r.head*.47],children:[c.jsx("sphereGeometry",{args:[r.head*.06,8,6]}),c.jsx("meshBasicMaterial",{color:"#222"})]},u)),s&&c.jsx(ar,{seat:I})]})});function ar({seat:e}){return c.jsxs("group",{position:[0,0,-.04],children:[c.jsxs("mesh",{position:[0,e-.02,0],children:[c.jsx("boxGeometry",{args:[.42,.04,.42]}),c.jsx("meshStandardMaterial",{color:wt})]}),c.jsxs("mesh",{position:[0,e+.24,-.42/2+.02],children:[c.jsx("boxGeometry",{args:[.42,.44,.04]}),c.jsx("meshStandardMaterial",{color:wt})]}),[-1,1].flatMap(n=>[-1,1].map(o=>c.jsxs("mesh",{position:[n*(.42/2-.03),(e-.04)/2,o*(.42/2-.03)],children:[c.jsx("boxGeometry",{args:[.03,e-.04,.03]}),c.jsx("meshStandardMaterial",{color:wt})]},`${n}${o}`)))]})}function cr({world:e,dispatch:t,controls:n,onMenu:o,still:a,wide:s}){const{list:r,active:i,eye:l}=Jn();return c.jsxs(c.Fragment,{children:[r.map(f=>c.jsx(lr,{p:f,active:f.id===i,hidden:f.id===l,world:e,dispatch:t,controls:n,onMenu:o,still:a},f.id)),c.jsx(ur,{controls:n}),c.jsx(dr,{controls:n,wide:s??null})]})}function lr({p:e,active:t,hidden:n,world:o,dispatch:a,controls:s,onMenu:r,still:i}){const l=rt(e.age,e.sex),f=h.useRef(null),d=h.useMemo(()=>new D,[]),m=e.pose==="stand"?l.H:e.seat+l.sitH,w=b=>{if(b.button===2||b.button===1)return;if(b.stopPropagation(),i){const{clientX:g,clientY:x}=b.nativeEvent;Wt(b.pointerId)||tt(b.nativeEvent,()=>r({kind:"person",id:e.id,at:{x:e.x,y:e.y}},g,x));return}a({type:"select",id:null}),Le.set({active:e.id});const{clientX:S,clientY:p}=b.nativeEvent;tt(b.nativeEvent,()=>{f.current=null,r({kind:"person",id:e.id,at:{x:e.x,y:e.y}},S,p)}),b.ray.intersectPlane(gt,d)&&(f.current={dx:d.x-e.x,dz:d.z-e.y,sx:S,sy:p,moved:!1},b.target.setPointerCapture(b.pointerId),s.current&&(s.current.enabled=!1))},I=b=>{const S=f.current;if(S){if(!S.moved){if(Math.hypot(b.nativeEvent.clientX-S.sx,b.nativeEvent.clientY-S.sy)<Ce(b.nativeEvent.pointerType))return;S.moved=!0,et(),b.ray.intersectPlane(gt,d)&&Object.assign(S,{dx:d.x-e.x,dz:d.z-e.y})}b.ray.intersectPlane(gt,d)&&oo(e,{x:d.x-S.dx,y:d.z-S.dz},o)}},M=b=>{var S,p;f.current=null,(p=(S=b.target).releasePointerCapture)==null||p.call(S,b.pointerId),s.current&&!Le.get().eye&&!je.on&&(s.current.enabled=!0)};return n?null:c.jsxs("group",{position:[e.x,0,e.y],"rotation-y":-e.rot,onPointerDown:w,onPointerMove:I,onPointerUp:M,children:[c.jsx(qn,{age:e.age,sex:e.sex,pose:e.pose,seat:e.seat,chair:!!e.chair}),c.jsxs("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,children:[c.jsx("circleGeometry",{args:[l.r*1.1,24]}),c.jsx("meshBasicMaterial",{color:"#000",transparent:!0,opacity:.12,depthWrite:!1})]}),t&&c.jsxs("mesh",{"position-y":.008,"rotation-x":-Math.PI/2,children:[c.jsx("ringGeometry",{args:[l.r+.04,l.r+.08,40]}),c.jsx("meshBasicMaterial",{color:"#3b6cff"})]}),t&&c.jsx(Ie,{position:[0,m+.16,0],center:!0,distanceFactor:8,zIndexRange:[13,0],style:{pointerEvents:"none"},children:c.jsxs("div",{className:"tag3d person on",style:{borderColor:Pn(e.age).color},children:[eo(e)," ",Math.round(l.H*100),"cm",c.jsx("small",{children:e.pose==="stand"?`눈높이 ${Math.round(l.eye*100)}`:`앉은 눈높이 ${Math.round((e.seat+l.sitH-l.head/2)*100)}`})]})})]})}function ur({controls:e}){const t=W(n=>n.camera);return h.useEffect(()=>()=>void(ut.value=0),[]),ae(()=>{var o;const n=(o=e.current)==null?void 0:o.target;!n||Le.get().eye||(je.on?(t.getWorldDirection(vt),ut.value=Math.atan2(-vt.x,-vt.z)):ut.value=Math.atan2(t.position.x-n.x,t.position.z-n.z))}),null}function dr({controls:e,wide:t}){const n=Et(l=>l.eye),o=W(l=>l.camera),a=W(l=>l.size),s=t==null?70:to(a.width/Math.max(1,a.height),t),r=h.useRef(s);r.current=s,h.useEffect(()=>{!n||o.fov===s||(o.fov=s,o.updateProjectionMatrix())},[s]);const i=h.useRef(null);return h.useEffect(()=>{if(!n)return;const l=e.current,f={pos:o.position.clone(),target:l==null?void 0:l.target.clone(),fov:o.fov};return i.current=n,l&&(l.enabled=!1),o.fov=r.current,o.updateProjectionMatrix(),()=>{i.current=null,o.position.copy(f.pos),o.fov=f.fov,o.updateProjectionMatrix(),l&&f.target&&(l.target.copy(f.target),l.enabled=!0,l.update())}},[n]),ae(()=>{if(!n||i.current!==n)return;const l=Le.get().list.find(w=>w.id===n);if(!l)return;const f=rt(l.age,l.sex),d=l.pose==="stand"?f.eye:l.seat+f.sitH-f.head/2,m=no(l.rot);o.position.set(l.x+m.x*f.head*.3,d,l.y+m.y*f.head*.3),o.lookAt(l.x+m.x*3,d-.4,l.y+m.y*3)}),null}function fr({controls:e,world:t}){const n=W(M=>M.camera),o=W(M=>M.size),a=W(M=>M.setEvents),s=nt(M=>M.closed),r=ro(),i=h.useMemo(()=>io(t,s),[t,s]),l=h.useRef(i);l.current=i;const f=h.useMemo(()=>ao(i.walls,i.openings),[i]),d=h.useRef(t);d.current=t;const m=h.useRef(1),w=h.useRef({phase:0,amp:0}),I=h.useRef(!1);return h.useEffect(()=>{const M=e.current,b={pos:n.position.clone(),quat:n.quaternion.clone(),target:M==null?void 0:M.target.clone(),fov:n.fov,near:n.near};return I.current=!0,M&&(M.enabled=!1),a({enabled:!1}),n.near=.05,n.rotation.order="YXZ",()=>{I.current=!1,a({enabled:!0}),n.rotation.order="XYZ",n.position.copy(b.pos),n.quaternion.copy(b.quat),n.fov=b.fov,n.near=b.near,n.updateProjectionMatrix(),M&&b.target&&(M.target.copy(b.target),M.enabled=!0,M.update())}},[]),h.useEffect(()=>{n.fov=co(o.width/Math.max(1,o.height),r),n.updateProjectionMatrix()},[o.width,o.height,r]),ae((M,b)=>{if(!I.current)return;const S=Math.min(b,.1),p=Pt,g=lo;p.yaw+=g.turn*1.8*S;const x=g.kf-g.jy,y=g.ks+g.jx,u=Math.hypot(x,y);let v=0;if(u>.08){kt.get().pose!=="stand"&&uo();const E=Math.hypot(g.jx,g.jy),P=E>.08?g.jrun?2.6:1.4*Math.min(1,E/.9):g.run?2.6:1.4,z=$t(p.yaw),R={x:-z.y,y:z.x},k=Math.max(1,Math.ceil(P*S/.08)),Z=P*S/u/k;for(let G=0;G<k;G++){const Y={x:p.x+(z.x*x+R.x*y)*Z,y:p.y+(z.y*x+R.y*y)*Z},A=fo(po(),Y,l.current,In),H=Math.hypot(A.x-p.x,A.y-p.y);if(v+=H,p.x=A.x,p.y=A.y,H<1e-6)break}}(p.vz!==0||p.air>0)&&(p.air+=p.vz*S-4.9*S*S,p.vz-=9.8*S,p.air<=0&&(p.air=p.vz=0));const C=w.current;C.amp+=((v>1e-4&&p.air===0?1:0)-C.amp)*Math.min(1,S*6),C.phase+=v/.7*Math.PI*2,p.eye+=(ho()-p.eye)*(1-Math.exp(-S*7));const _=$t(p.yaw);if(p.cam+=(p.zoom-p.cam)*(1-Math.exp(-S*10)),Math.abs(p.zoom-p.cam)<.003&&(p.cam=p.zoom),p.cam<.02){p.shown=0;const E=kt.get().pose==="stand"?.06:.08;n.position.set(p.x+_.x*E,p.eye+p.air+Math.cos(C.phase)*.012*C.amp,p.y+_.y*E)}else{const E=Math.cos(p.pitch),P={x:_.x*E,y:Math.sin(p.pitch),z:_.y*E},z=p.eye+p.air+.12;let R=p.cam;P.y<-.001&&(R=Math.min(R,(Ln({x:p.x,y:p.y},d.current.rooms)-.12-z)/-P.y)),P.y>.001&&(R=Math.min(R,(z-.15)/P.y)),E>.001&&(R=Math.min(R,mo({x:p.x,y:p.y},{x:-_.x,y:-_.y},R*E,f)/E)),R=Math.max(0,R),p.shown=R<p.shown?R:p.shown+(R-p.shown)*(1-Math.exp(-S*5)),n.position.set(p.x-P.x*p.shown,z-P.y*p.shown,p.y-P.z*p.shown)}n.rotation.set(p.pitch,p.yaw,0,"YXZ"),m.current+=S,m.current>.2&&(m.current=0,xo(d.current.rooms),yo(d.current))}),null}function pr(){const e=h.useRef(null),{h:t,pose:n}=go(),o=t/100/rt("adult","m").H;return ae(()=>{const a=e.current;if(!a)return;const s=Pt;a.visible=s.shown>.45,a.position.set(s.x,s.air,s.y),a.rotation.y=s.yaw+Math.PI}),c.jsxs("group",{ref:e,visible:!1,userData:{noAim:!0,noShadow:!0},children:[c.jsx("group",{scale:o,children:c.jsx(qn,{age:"adult",sex:"m",pose:n,seat:Pt.seat/o,chair:!1})}),c.jsxs("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,children:[c.jsx("circleGeometry",{args:[In*1.1,24]}),c.jsx("meshBasicMaterial",{color:"#000",transparent:!0,opacity:.12,depthWrite:!1})]})]})}const hr=12;function mr(){const e=W(i=>i.camera),t=W(i=>i.scene),n=W(i=>i.gl),o=h.useMemo(()=>{const i=new it;return i.far=hr,i},[]),a=h.useMemo(()=>new ge,[]),s=h.useRef(0),r=(i,l)=>{e.updateMatrixWorld(),a.set(i,l),o.setFromCamera(a,e);for(const f of o.intersectObjects(t.children,!0)){if(!f.object.isMesh)continue;let d=null,m=!1;for(let w=f.object;w;w=w.parent){if(!w.visible||w.userData.noAim){m=!0;break}!d&&typeof w.userData.itemId=="string"&&(d=w.userData.itemId)}if(!m)return d}return null};return h.useEffect(()=>(ke.center=()=>r(0,0),ke.client=(i,l)=>{const f=n.domElement.getBoundingClientRect();return!f.width||!f.height?null:r((i-f.left)/f.width*2-1,-((l-f.top)/f.height)*2+1)},()=>{ke.center=ke.client=null,qt(null)})),ae((i,l)=>{s.current+=l,!(s.current<.1)&&(s.current=0,qt(r(0,0)))}),null}const xr=new ze({color:"#f6f5f1",emissive:"#f6f5f1",emissiveIntensity:.42,roughness:1}),yr=new Ts({color:"#fffaf0"});function gr({rooms:e,walls:t}){const n=h.useMemo(()=>{if(e.length)return e.map(i=>({id:i.id,x0:i.x0,y0:i.y0,x1:i.x1,y1:i.y1,poly:i.poly,h:Ut(i)}));if(!t.length)return[];const s=t.flatMap(i=>[i.a.x,i.b.x]),r=t.flatMap(i=>[i.a.y,i.b.y]);return[{id:"all",x0:Math.min(...s),y0:Math.min(...r),x1:Math.max(...s),y1:Math.max(...r),poly:void 0,h:zn}]},[e,t]),o=h.useMemo(()=>new Map(n.filter(s=>s.poly).map(s=>[s.id,Nn(s.poly,(s.x0+s.x1)/2,(s.y0+s.y1)/2,!1)])),[n]);h.useEffect(()=>()=>o.forEach(s=>s.dispose()),[o]);const a=ye/2;return c.jsx("group",{children:n.map(s=>{const r=(s.x0+s.x1)/2,i=(s.y0+s.y1)/2;return c.jsxs("group",{children:[c.jsx("mesh",{position:[r,s.h,i],"rotation-x":Math.PI/2,material:xr,userData:{cast:!0,ceilRoom:s.id},children:o.has(s.id)?c.jsx("primitive",{object:o.get(s.id),attach:"geometry"}):c.jsx("planeGeometry",{args:[s.x1-s.x0+2*a,s.y1-s.y0+2*a]})}),(s.x1-s.x0)*(s.y1-s.y0)>1.5&&c.jsx("mesh",{position:[r,s.h-.01,i],"rotation-x":Math.PI/2,material:yr,children:c.jsx("circleGeometry",{args:[.22,36]})})]},s.id)})})}const Vn=(e,t,n)=>Math.abs(t-e)<.001?t:e+(t-e)*(1-Math.exp(-n*7)),vr=new ze({color:"#b9bcc0",metalness:.6,roughness:.35});function wr({o:e,cx:t,top:n,swing:o,home:a}){var p;const s=nt(g=>g.on),r=nt(g=>g.on&&g.closed.includes(e.id)),i=h.useRef(null),l=o??{min:0,max:90},f=e.hingeEnd?-1:1,d=-e.side*f*(r?l.min:l.max)*Math.PI/180;h.useLayoutEffect(()=>void(i.current&&(i.current.rotation.y=d)),[]),ae((g,x)=>{const y=i.current;y&&y.rotation.y!==d&&(y.rotation.y=Vn(y.rotation.y,d,x))});const m=t+(e.hingeEnd?e.w/2:-e.w/2),w=-e.side*.02,I=vo(e),M=Bt(e,a).leaf,b=((p=wo(e,a).look)==null?void 0:p.key)??null,S=g=>c.jsx(At,{w:g,h:n,arch:zt(e),grid:Lt(e)==="grid",paint:M});return c.jsxs(c.Fragment,{children:[c.jsxs("group",{ref:i,position:[m,0,e.side*ye/2],children:[c.jsx("group",{position:[f*I/2,0,w],children:e.mid?S(I):c.jsx(hs,{w:I,h:n,look:b,paint:M})}),[-1,1].map(g=>c.jsx("mesh",{position:[f*(I-.07),.95,w+g*.035],material:vr,children:c.jsx("sphereGeometry",{args:[.025,14,10]})},g)),!s&&Mo(l)&&c.jsx(Ie,{position:[f*I/2,n+.15,w],center:!0,zIndexRange:[8,0],style:{pointerEvents:"none"},children:c.jsxs("div",{className:"ang3d",title:l.by?`${l.by}에 걸려요`:void 0,children:["🚪 ",bo(l)]})})]}),e.mid&&e.w-I>.01&&c.jsx("group",{position:[m+f*(I+(e.w-I)/2),0,e.side*ye/2+w],children:S(e.w-I)})]})}function Mr({o:e,cx:t,top:n,home:o}){const a=nt(l=>l.on&&!l.closed.includes(e.id)),s=h.useRef(null),r=t+(a?.21:-.21)*e.w;h.useLayoutEffect(()=>void(s.current&&(s.current.position.x=r)),[]),ae((l,f)=>{var m;const d=(m=s.current)==null?void 0:m.position;d&&d.x!==r&&(d.x=Vn(d.x,r,f))});const i=Bt(e,o).leaf;return c.jsxs("group",{children:[c.jsx("group",{ref:s,"position-z":-.03,children:c.jsx(At,{w:e.w*.58,h:n,arch:!!e.mid&&zt(e),grid:!!e.mid&&Lt(e)==="grid",paint:i})}),c.jsx("group",{position:[t+e.w*.21,0,.03],children:c.jsx(At,{w:e.w*.58,h:n,arch:!!e.mid&&zt(e),grid:!!e.mid&&Lt(e)==="grid",paint:i})})]})}const br=.55,jr=.18,bt=Math.PI/180,Sr=new D,gn=new D,Er=new Tn,jt=new Bn;function Pr({at:e,controls:t,wide:n=1}){const o=W(p=>p.camera),a=W(p=>p.size),s=W(p=>p.gl),r=W(p=>p.events.connected),i=W(p=>p.get),l=a.width/Math.max(1,a.height),f=h.useMemo(()=>jo(e.rooms,e.room,e.i,l),[e.rooms,e.room,e.i,l]),d=h.useRef(1),m=h.useRef(null),w=h.useRef(null),I=h.useRef(1),M=h.useRef(""),b=h.useRef({...We});h.useEffect(()=>{const p=t.current,g={pos:o.position.clone(),quat:o.quaternion.clone(),target:p==null?void 0:p.target.clone(),fov:o.fov,near:o.near};return je.on=!0,Ee.set(We),p&&(p.enabled=!1),o.near=.05,o.updateProjectionMatrix(),()=>{je.on=!1,dt.on=!1,Qe.turned=!1,Ee.set(We),o.position.copy(g.pos),o.quaternion.copy(g.quat),o.fov=g.fov,o.near=g.near,o.updateProjectionMatrix(),p&&g.target&&(p.target.copy(g.target),p.enabled=!0,p.update())}},[]);const S=f?[...f.pos,...f.dir].map(p=>p.toFixed(3)).join(","):"";return h.useEffect(()=>{if(!f)return;M.current!==S&&(M.current=S,d.current=1,w.current={pos:o.position.clone(),quat:o.quaternion.clone(),fov:o.fov},I.current=0,Ee.set(We),b.current={...We});const p=So(f.tv,n,l);m.current={pos:new D(...f.pos),phi:f.phi,diag:f.diag,tv:p,min:f.tvMin,max:Math.max(f.tvMax,p)}},[S,f==null?void 0:f.tv,n]),h.useEffect(()=>{const p=r??s.domElement,g=P=>{const z=m.current;!z||!isFinite(P)||P<=0||(d.current=Math.min(z.max/z.tv,Math.max(z.min/z.tv,d.current*P)))},x=P=>{if(!P.deltaY||P.shiftKey)return;P.preventDefault();const z=P.deltaMode===1?P.deltaY*33:P.deltaMode===2?P.deltaY*400:P.deltaY;g(Math.exp(Math.max(-100,Math.min(100,z))*.0012))},y=new Map;let u=null,v=!1;const C=P=>{if(P.pointerType==="touch"&&y.set(P.pointerId,{x:P.clientX,y:P.clientY}),y.size>=2){v=!0,u=null;return}if(P.button!==0||v||(Qe.turned=!1,i().internal.capturedMap.has(P.pointerId)))return;const z=b.current,R=Math.tan(o.fov*bt/2),k=jr*Math.min(1.6,Math.max(.25,R/Math.tan(30*bt)));u={id:P.pointerId,sx:P.clientX,sy:P.clientY,a0:{pitch:z.pitch,yaw:z.yaw},k,on:!1}},_=P=>{const z=y.get(P.pointerId);if(z){if(y.size===2){const G=[...y].find(([H])=>H!==P.pointerId)[1],Y=Math.hypot(z.x-G.x,z.y-G.y),A=Math.hypot(P.clientX-G.x,P.clientY-G.y);Y>4&&A>4&&g(Math.pow(Y/A,.8))}z.x=P.clientX,z.y=P.clientY}const R=m.current;if(!u||P.pointerId!==u.id||!R)return;const k=P.clientX-u.sx,Z=P.clientY-u.sy;if(!u.on){if(Math.hypot(k,Z)<Ce(P.pointerType))return;if(document.querySelector(".ctxmenu"))return void(u=null);u.on=!0,Qe.turned=!0,et()}Ee.set(Vt(R,Lo(u.a0,k,Z,u.k)))},E=P=>{y.delete(P.pointerId),u&&P.pointerId===u.id&&(u=null),y.size||(v=!1)};return p.addEventListener("wheel",x,{passive:!1}),p.addEventListener("pointerdown",C),window.addEventListener("pointermove",_),window.addEventListener("pointerup",E),window.addEventListener("pointercancel",E),()=>{p.removeEventListener("wheel",x),p.removeEventListener("pointerdown",C),window.removeEventListener("pointermove",_),window.removeEventListener("pointerup",E),window.removeEventListener("pointercancel",E)}},[r,s,i]),ae((p,g)=>{const x=m.current;if(!x)return;const y=Ee.get(),u=Vt(x,y);(u.pitch!==y.pitch||u.yaw!==y.yaw)&&Ee.set(u,y.ease);const v=b.current;if(y.ease){const E=1-Math.exp(-Math.min(g,.05)*9);v.pitch+=(u.pitch-v.pitch)*E,v.yaw+=(u.yaw-v.yaw)*E,Math.abs(u.pitch-v.pitch)<.05&&Math.abs(u.yaw-v.yaw)<.05&&(Object.assign(v,u),Ee.set(u))}else Object.assign(v,u);gn.set(...Eo(x.phi+v.yaw*bt,v.pitch)).add(x.pos),jt.setFromRotationMatrix(Er.lookAt(x.pos,gn,o.up));const C=Po(x.tv*d.current),_=w.current;if(I.current<1&&_){I.current=Math.min(1,I.current+Math.min(g,.05)/br);const E=I.current<.5?4*I.current**3:1-(-2*I.current+2)**3/2;o.position.lerpVectors(_.pos,x.pos,E),o.quaternion.slerpQuaternions(_.quat,jt,E),o.fov=_.fov+(C-_.fov)*E}else o.position.copy(x.pos),o.quaternion.copy(jt),o.fov=C;o.updateProjectionMatrix(),Object.assign(dt,{on:!0,frame:dt.frame+1,key:e.key,i:e.i,n:e.n,pos:o.position.toArray().map(E=>+E.toFixed(3)),dir:o.getWorldDirection(Sr).toArray().map(E=>+E.toFixed(3)),fov:+o.fov.toFixed(1),moving:I.current<1||y.ease,pitch:+v.pitch.toFixed(1),yaw:+v.yaw.toFixed(1)})}),null}function Lr({room:e,rooms:t,walls:n,openings:o,items:a,dispatch:s,controls:r}){const i=W(u=>u.camera),l=W(u=>u.gl),f=Ut(e),d=zo(e,t),[m,w]=h.useState(null),I=h.useRef({h:f});I.current.h=f;const M=h.useRef(null),b=h.useRef(0),S=W(u=>u.size),p=(m==null?void 0:m.k)??0,g=d[p],x=h.useRef(new D);ae(()=>{const u=M.current;if(!u||!g)return;const v=(x.current.set(g.x,f,g.y).project(i).x*.5+.5)*S.width,C=u.offsetWidth,_=v-C/2,E=Math.round(Math.min(Math.max(_,4),Math.max(4,S.width-4-C))-_);E!==b.current&&(b.current=E,u.style.transform=`translateX(calc(-50% + ${E}px))`)});const y=(u,v)=>{if(v.button!==0&&v.pointerType==="mouse")return;v.stopPropagation(),v.preventDefault();const C=d[u],_=f,E=l.domElement.getBoundingClientRect(),P=L=>-new D(C.x,L,C.y).project(i).y*.5*E.height,z=Math.max(40,Math.abs(P(_)-P(_+1))),R=Io(e,t,n,o,a),k=v.clientY,Z=v.pointerId;let G=!1;const Y=r.current;Y&&(Y.enabled=!1),w({k:u,stuck:!1});const A=L=>{if(L.pointerId!==Z||!G&&Math.abs(k-L.clientY)<3)return;const O=_+(k-L.clientY)/z,T=_o(O,R);w({k:u,stuck:R>Ao&&O<R-.05}),!(Math.abs(T-I.current.h)<1e-6)&&(G||(s({type:"checkpoint"}),G=!0),I.current.h=T,s({type:"updateRoom",id:e.id,patch:{h:Math.abs(T-zn)<1e-6?void 0:T},live:!0}))},H=L=>{L.pointerId===Z&&(removeEventListener("pointermove",A,!0),removeEventListener("pointerup",H,!0),removeEventListener("pointercancel",H,!0),Y&&(Y.enabled=!0),w(null))};addEventListener("pointermove",A,!0),addEventListener("pointerup",H,!0),addEventListener("pointercancel",H,!0)};return c.jsx(c.Fragment,{children:d.map((u,v)=>c.jsx(Ie,{position:[u.x,f,u.y],center:!0,zIndexRange:[12,0],children:c.jsxs("div",{className:`hknob-wrap${(m==null?void 0:m.k)===v?" on":""}`,children:[c.jsx("button",{className:"hknob","data-k":v,title:`↕ 위아래로 끌어 높이 바꾸기(지금 ${ft(f)}cm, 10cm씩 120~400cm)`,"aria-label":`높이 ${ft(f)}cm — 위아래로 끌어 바꾸기`,onPointerDown:C=>y(v,C),onContextMenu:C=>C.preventDefault(),children:"↕"}),v===p&&c.jsxs("span",{ref:M,className:`hknob-label${m?" live":""}`,style:{transform:`translateX(calc(-50% + ${b.current}px))`},children:[`높이 ${ft(f)}`,(m==null?void 0:m.stuck)&&c.jsx("small",{children:"문·창·가구보다 낮게는 안 돼요"})]})]})},v))})}const vn={rooms:!1,dims:!1,items:!1},zr={LEFT:ht.ROTATE,MIDDLE:ht.PAN,RIGHT:ht.PAN},Ir={seq:0,x:0,y:0},Je=new be(new D(0,1,0),0);function oi({state:e,dispatch:t,statuses:n,lowWalls:o,showImage:a,cam:s,onCam:r,inside:i,probe:l,ghost:f,focusRoom:d,snap:m,spin:w,onPad:I,hoverRoomId:M,onHoverRoom:b,finishes:S,show:p,onMenu:g,onDismiss:x,stage:y,walk:u=!1,onRotateItem:v,onDeco:C,corner:_=null,wide:E=null,pivot:P=Ir,multi:z,onMulti:R,multiMode:k=!1,onFit:Z,onCopied:G}){const{walls:Y,items:A,image:H,scale:L}=e,O=u||!!_,T=Et(j=>!!j.eye),N=O||T,U=h.useMemo(()=>_?e.rooms.filter(j=>(j.whole??j.id)===_.key):null,[_==null?void 0:_.key,e.rooms]),B=h.useMemo(()=>Oo(Y,e.openings,A),[Y,e.openings,A]),F=h.useMemo(()=>Co(Y,e.rooms),[Y,e.rooms]),V=Ro(e.rooms),oe=y===1&&!u&&!_&&!T?e.rooms.find(j=>j.id===e.selectedId)??null:null,Q=h.useMemo(()=>new Set(oe?An(e.rooms,oe).map(j=>j.id):[]),[oe,e.rooms]),$=j=>o&&!u&&!j.some(q=>Q.has(q)),K=()=>!!_&&Qe.turned||_n(),X=(j,q,J,re)=>{const ce=Fo({stage:y,was:re,item:j,rooms:e.rooms,at:q,focus:d,tap:J});ce&&t({type:"select",id:ce})},xe=R&&!u&&(y===2||y===3)?{ids:z??[],mode:k,onMulti:R,base:()=>z!=null&&z.length?z:e.items.some(j=>j.id===e.selectedId&&Ue(y,j))?[e.selectedId]:[],items:e.items,onCopied:G}:void 0,ue=j=>{K()||(y===2?(x(!!j),t({type:"select",id:j??null})):!x(y===1&&!!j)&&j&&y===1&&t({type:"select",id:j}))},se=ot(Y,A,H?{w:H.pxW*L,h:H.pxH*L}:void 0),Se=(se.minX+se.maxX)/2,Ye=(se.minY+se.maxY)/2,de=Math.max(se.maxX-se.minX,se.maxY-se.minY,4),Ge=h.useMemo(()=>[Se,0,Ye],[]),le=ot(Y,A),Ae=Math.max(3,Math.hypot(le.maxX-le.minX,le.maxY-le.minY)/2+1),De=(le.minX+le.maxX)/2,Te=(le.minY+le.maxY)/2,ie=h.useRef(null),He=h.useRef(new D),_e=!u&&!_&&!T,Xe=h.useMemo(()=>{if(!_e||y===1)return[];const j=A.filter(re=>Kt(y,re,!!p.others,n[re.id]==="collide")),q=A.find(re=>re.id===e.selectedId),J=re=>Zt(e.rooms.find(ce=>ce.id===re)??{id:re});return Do(To(e.rooms,Y,e.openings,j),{dims:p.dims,sel:q&&Ue(y,q)?q.id:null,focus:d?Zt(d):null,keyOf:J})},[_e,y,A,e.rooms,Y,e.openings,p.dims,p.others,n,e.selectedId,d]),fe=Et(j=>j.list.map(q=>q.seatOn??"").join(",")),at=(j,q,J)=>{const re=ie.current;if(re&&!Le.get().eye&&!je.on){re.enabled=!1;const ce=()=>{window.removeEventListener("pointerup",ce,!0),!Le.get().eye&&!je.on&&(re.enabled=!0)};window.addEventListener("pointerup",ce,!0)}g(j,q,J)};return c.jsxs(ms,{shadows:"percentage",camera:{position:[Se,de*.9,Ye+de*.8],fov:45},onPointerMissed:j=>void(!u&&j.button===0&&!K()&&x()),children:[c.jsx(xs,{cx:De,cz:Te,r:Ae}),c.jsx("hemisphereLight",{args:["#ffffff","#d6d0c6"],intensity:N?1.4:1.05}),c.jsx(ys,{cx:De,cz:Te,r:Ae,off:!!d}),c.jsx(gs,{deps:[Y,A,e.openings,d,o,u,y,fe,!!_,T,e.rooms,oe==null?void 0:oe.id]}),c.jsx(vs,{cx:De,cz:Te,r:Ae}),c.jsx(Gr,{state:e,showImage:a&&!O,hoverRoomId:u?null:M,onHoverRoom:b,focusRoom:d,finishes:S,show:u?vn:p,onMenu:at,onTap:ue,labelOnly:_==null?void 0:_.key,onPickRoom:!u&&Wo(y)?j=>t({type:"select",id:j}):void 0}),Y.map(j=>{const q=F.get(j.id)??{h:V,front:V,back:V,rooms:[]},J=$(q.rooms);return c.jsx(Vr,{wall:j,height:J?1:q.h,sides:J?null:[q.front,q.back],openings:e.openings.filter(re=>re.wallId===j.id),finish:S?{home:e.finish,rooms:e.rooms,walls:Y}:null,swings:B,doors:e.finish},j.id)}),e.rooms.filter(j=>j.loose&&(!d||j.id===d.id)).map(j=>{const q=$([j.id])?1:Ut(j),J=ye;if(j.poly){const ce=Uo(j);return ce.map((ve,Ne)=>{const we=ce[(Ne+1)%ce.length],ct=Math.hypot(we.x-ve.x,we.y-ve.y);return c.jsxs("mesh",{name:"loosewall",userData:{room:j.id,wallH:q},position:[(ve.x+we.x)/2,q/2,(ve.y+we.y)/2],"rotation-y":-Math.atan2(we.y-ve.y,we.x-ve.x),raycast:_t,children:[c.jsx("boxGeometry",{args:[ct+J/2,q,J]}),c.jsx("meshStandardMaterial",{color:Qt(j.loose),transparent:!0,opacity:.6})]},`lz${j.id}${Ne}`)})}return[[(j.x0+j.x1)/2,j.y0,j.x1-j.x0+J,J],[(j.x0+j.x1)/2,j.y1,j.x1-j.x0+J,J],[j.x0,(j.y0+j.y1)/2,J,j.y1-j.y0-J],[j.x1,(j.y0+j.y1)/2,J,j.y1-j.y0-J]].map(([ce,ve,Ne,we],ct)=>c.jsxs("mesh",{name:"loosewall",userData:{room:j.id,wallH:q},position:[ce,q/2,ve],raycast:_t,children:[c.jsx("boxGeometry",{args:[Ne,q,we]}),c.jsx("meshStandardMaterial",{color:Qt(j.loose),transparent:!0,opacity:.6})]},`lz${j.id}${ct}`))}),A.filter(j=>(!d||It({x:j.x,y:j.y},[d]))&&(u||Kt(y,j,!!p.others,n[j.id]==="collide"))).map(j=>c.jsx(Qr,{item:j,walls:Y,openings:e.openings,inside:i,snap:m,status:u?"ok":n[j.id]??"ok",selected:!u&&(j.id===e.selectedId||!!(z!=null&&z.includes(j.id))),many:xe,dispatch:t,controls:ie,seeThrough:fe.split(",").includes(j.id),pick:!u&&Ue(y,j),faded:!u&&!Ue(y,j)&&y<3,show:u||U&&!It({x:j.x,y:j.y},U)?vn:{...p,items:p.items&&(y>=3||Ue(y,j)),dims:p.dims&&Bo(y,j)},bare:u,onMenu:at,onRotate:u?void 0:v,onRetap:u?void 0:X,onDeco:u||y!==5?void 0:C,ceil:Ln(j,e.rooms)},j.id)),Xe.length>0&&c.jsx(Zr,{runs:Xe,sel:e.selectedId}),(u||y>=3||p.others)&&c.jsx(cr,{world:e,dispatch:t,controls:ie,onMenu:at,still:y===4||y===5,wide:E}),f&&c.jsxs("mesh",{position:[f.x,f.h/2,f.y],"rotation-y":-f.rot,children:[c.jsx("boxGeometry",{args:[f.w,f.h,f.d]}),c.jsx("meshStandardMaterial",{color:f.ok?f.color:"#e5484d",transparent:!0,opacity:.5})]}),c.jsx(Rr,{probe:l}),c.jsx(Cr,{room:d}),c.jsx(ws,{ref:ie,makeDefault:!0,target:Ge,maxPolarAngle:Math.PI/2.05,zoomSpeed:0,mouseButtons:zr}),c.jsx(Ar,{cam:s,onCam:r,controls:ie,hold:!!_,pivotLeft:He}),c.jsx(_r,{wide:E??1,controls:ie,free:_e}),c.jsx(Wr,{controls:ie,on:_e,go:P,left:He,wallH:o?1:V,box:d?{minX:d.x0-Be,minY:d.y0-Be,maxX:d.x1+Be,maxY:d.y1+Be}:se,focus:!!d,onTriple:Z}),c.jsx(Or,{controls:ie}),c.jsx(Dr,{spin:w,controls:ie}),c.jsx(Ur,{controls:ie}),u&&c.jsx(fr,{controls:ie,world:e}),N&&c.jsx(gr,{rooms:e.rooms,walls:Y}),oe&&c.jsx(Lr,{room:oe,rooms:e.rooms,walls:Y,openings:e.openings,items:A,dispatch:t,controls:ie}),_&&!u&&c.jsx(Pr,{at:_,controls:ie,wide:E??1}),u&&c.jsx(pr,{}),u&&c.jsx(mr,{}),c.jsx(Br,{onPad:O?void 0:I,box:d?{minX:d.x0,minY:d.y0,maxX:d.x1,maxY:d.y1}:Y.length||A.length||H?se:null,height:o?1:V})]})}function Ar({cam:e,onCam:t,controls:n,hold:o,pivotLeft:a}){const s=W(d=>d.camera),r=W(d=>d.size),i=h.useRef(!1),l=h.useRef(!1),f=()=>Math.tan(s.fov*Math.PI/360)*Math.min(1,r.width/r.height);return h.useEffect(()=>{const d=n.current;if(!e||!d||o||l.current&&e.src==="3d")return;l.current=!0;const m=s.position.clone().sub(d.target);(e.src==="app"||m.lengthSq()<1e-6)&&m.set(0,.8,.6),m.normalize();const w=e.src==="pad"?d.target.y:0;e.src!=="pad"&&a.current.set(0,0,0),d.target.set(e.cx,w,e.cy),s.position.copy(d.target).addScaledVector(m,e.e/(2*f())),i.current=!0,d.update(),i.current=!1},[e,r.width,r.height,o]),h.useEffect(()=>{const d=n.current;if(!d)return;const m=()=>{if(i.current)return;const w=s.position.distanceTo(d.target),I=Math.atan2(s.position.x-d.target.x,s.position.z-d.target.z)*180/Math.PI;t({cx:d.target.x,cy:d.target.z,e:2*w*f(),az:I,src:"3d"})};return d.addEventListener("change",m),()=>d.removeEventListener("change",m)},[t,r.width,r.height]),null}function _r({wide:e,controls:t,free:n}){const o=W(r=>r.camera),a=W(r=>r.size),s=es(a.width/Math.max(1,a.height),e);return h.useEffect(()=>{if(!n||Math.abs(o.fov-s)<.001)return;const r=t.current,i=nn(o.fov)/nn(s);o.fov=s,o.updateProjectionMatrix(),r&&(o.position.sub(r.target).multiplyScalar(i).add(r.target),r.update())},[s,n]),null}function Or({controls:e}){const t=W(n=>n.camera);return ae(()=>{var o;const n=(o=e.current)==null?void 0:o.target;+t.fov.toFixed(1),n&&+t.position.distanceTo(n).toFixed(2)}),null}function Cr({room:e}){const t=W(n=>n.gl);return h.useEffect(()=>{if(!e){t.clippingPlanes=[];return}const n=Be;return t.clippingPlanes=[new be(new D(1,0,0),-(e.x0-n)),new be(new D(-1,0,0),e.x1+n),new be(new D(0,0,1),-(e.y0-n)),new be(new D(0,0,-1),e.y1+n)],()=>void(t.clippingPlanes=[])},[e==null?void 0:e.id,e==null?void 0:e.x0,e==null?void 0:e.x1,e==null?void 0:e.y0,e==null?void 0:e.y1,t]),null}function Rr({probe:e}){const t=W(o=>o.camera),n=W(o=>o.gl);return h.useEffect(()=>{const o=new it,a=new D;return e.current=(s,r)=>{const i=n.domElement.getBoundingClientRect();return s<i.left||s>i.right||r<i.top||r>i.bottom?null:(o.setFromCamera(new ge((s-i.left)/i.width*2-1,-((r-i.top)/i.height)*2+1),t),o.ray.intersectPlane(Je,a)?{x:a.x,y:a.z}:null)},()=>void(e.current=null)},[t,n]),null}const Nt=new D(0,1,0);function Dr({spin:e,controls:t}){const n=W(s=>s.camera),o=h.useRef(0),a=h.useRef(e.seq);return h.useEffect(()=>{e.seq!==a.current&&(a.current=e.seq,o.current+=e.deg)},[e.seq]),ae((s,r)=>{const i=t.current;if(!i||!o.current)return;let l=o.current*(1-Math.exp(-r*1e3/70));Math.abs(o.current-l)<.05&&(l=o.current),o.current-=l;const f=n.position.clone().sub(i.target);f.applyAxisAngle(Nt,l*Math.PI/180),n.position.copy(i.target).add(f),i.update()}),null}function Tr(e){for(;e;e=e.parent)if(!e.visible)return!1;return!0}function Wr({controls:e,on:t,go:n,left:o,wallH:a,box:s,focus:r,onTriple:i}){const l=W(p=>p.camera),f=W(p=>p.gl),d=W(p=>p.scene),m=W(p=>p.events.connected),w=h.useRef({on:t,wallH:a,box:s,focus:r});w.current={on:t,wallH:a,box:s,focus:r};const I=h.useMemo(()=>new D,[]),M=p=>{const g=e.current;g&&(o.current.copy(p).sub(g.target),Me.n++,Me.last=[+p.x.toFixed(3),+p.y.toFixed(3),+p.z.toFixed(3)])},b=h.useRef(i);b.current=i;const S=h.useRef(n.seq);return h.useEffect(()=>{if(n.seq===S.current)return;S.current=n.seq;const p=w.current.box,g=w.current.on&&on(null,{x:n.x,y:0,z:n.y},w.current.wallH,p);g&&M(new D(g.x,g.y,g.z))},[n.seq]),h.useEffect(()=>{Me.on=t,t||o.current.set(0,0,0)},[t]),h.useEffect(()=>{const p=m??f.domElement,g=new it,x=new ge,y=new be(Nt.clone(),0),u=new D,v=new D,C=(A,H)=>{const L=f.domElement.getBoundingClientRect();return x.set((A-L.left)/L.width*2-1,-((H-L.top)/L.height)*2+1)};Me.toScreen=(A,H,L)=>{const O=f.domElement.getBoundingClientRect();return v.set(A,H,L).project(l),v.z>1?null:[Math.round(O.left+(v.x+1)/2*O.width),Math.round(O.top+(1-v.y)/2*O.height)]};const _=(A,H)=>{const{wallH:L,box:O,focus:T}=w.current;g.setFromCamera(C(A,H),l);const N=g.intersectObjects(d.children,!0).find(F=>F.object.isMesh&&Tr(F.object)&&(!T||!O||F.point.x>=O.minX&&F.point.x<=O.maxX&&F.point.z>=O.minY&&F.point.z<=O.maxY)),U=g.ray.intersectPlane(y,u),B=on(N?N.point:null,U?{x:U.x,y:0,z:U.z}:null,L,O);return B&&new D(B.x,B.y,B.z)};let E=null,P=null,z=null;const R=()=>{E=null,P=null,z=null},k=A=>{if(!w.current.on||A.target!==f.domElement||A.button!==0||Wt(A.pointerId))return R();E={id:A.pointerId,x:A.clientX,y:A.clientY,t:A.timeStamp,touch:A.pointerType==="touch"}},Z=A=>{if(E){if(A.pointerId!==E.id)return R();Math.hypot(A.clientX-E.x,A.clientY-E.y)>Ce(A.pointerType)&&R()}},G=A=>{var T;const H=E;if(E=null,!H||A.pointerId!==H.id)return;if(A.timeStamp-H.t>fs||!w.current.on)return void(P=null);const L={t:A.timeStamp,x:A.clientX,y:A.clientY,touch:H.touch};if(!rn(P,L)){if(rn(z,L)&&!document.querySelector(".ctxmenu")){z=null,P=null,o.current.set(0,0,0),(T=b.current)==null||T.call(b);return}return z=null,void(P=L)}if(P=null,z=L,document.querySelector(".ctxmenu"))return;const O=_(A.clientX,A.clientY);O&&(ps.t=performance.now(),M(O))},Y=A=>{A.detail>1&&A.target===f.domElement&&A.preventDefault()};return p.addEventListener("pointerdown",k,!0),p.addEventListener("mousedown",Y),window.addEventListener("pointermove",Z,!0),window.addEventListener("pointerup",G,!0),window.addEventListener("pointercancel",R,!0),()=>{p.removeEventListener("pointerdown",k,!0),p.removeEventListener("mousedown",Y),window.removeEventListener("pointermove",Z,!0),window.removeEventListener("pointerup",G,!0),window.removeEventListener("pointercancel",R,!0),Me.toScreen=()=>null}},[l,f,m,d,e]),ae((p,g)=>{const x=e.current;if(!x)return;const y=o.current;if(y.lengthSq()>0){const u=ns(Math.min(g,.1));y.length()*(1-u)<ts?I.copy(y):I.copy(y).multiplyScalar(u),y.sub(I),y.lengthSq()<1e-12&&y.set(0,0,0),x.target.add(I),l.position.add(I),x.update()}Me.moving=y.lengthSq()>0,Me.target=x.target.toArray().map(u=>+u.toFixed(3)),Me.cam=l.position.toArray().map(u=>+u.toFixed(3))}),null}function Ur({controls:e}){const t=W(r=>r.camera),n=W(r=>r.gl),o=W(r=>r.events.connected),a=W(r=>r.size),s=h.useRef(a);return s.current=a,h.useEffect(()=>{const r=o??n.domElement,i=new it,l=new ge,f=new be(Nt.clone(),0),d=new D,m=()=>{const g=e.current;return g&&g.enabled&&g.enableZoom?g:null},w=(g,x,y)=>{const u=m();if(!u||!isFinite(y)||y<=0)return;const v=t.position.distanceTo(u.target),{width:C,height:_}=s.current,E=2*v*Math.tan(t.fov*Math.PI/360)*Math.min(1,C/_);let P=E*y;y<1&&P<.6&&(P=Math.min(E,.6)),y>1&&P>300&&(P=Math.max(E,300));const z=P/E;if(Math.abs(z-1)<1e-5)return;const R=n.domElement.getBoundingClientRect();if(l.set((g-R.left)/R.width*2-1,-((x-R.top)/R.height)*2+1),i.setFromCamera(l,t),f.constant=-u.target.y,i.ray.intersectPlane(f,d)){const k=Math.max(2*v,3),Z=d.clone().sub(u.target);Z.length()>k&&d.copy(u.target).addScaledVector(Z.normalize(),k)}else d.copy(u.target);t.position.sub(d).multiplyScalar(z).add(d),u.target.sub(d).multiplyScalar(z).add(d),u.update()},I=g=>{if(!m()||!g.deltaY||g.shiftKey)return;g.preventDefault();const x=g.deltaMode===1?g.deltaY*33:g.deltaMode===2?g.deltaY*400:g.deltaY;w(g.clientX,g.clientY,Math.exp(Math.max(-100,Math.min(100,x))*4e-4))},M=new Map,b=g=>{g.pointerType==="touch"&&M.set(g.pointerId,{x:g.clientX,y:g.clientY})},S=g=>{const x=M.get(g.pointerId);if(x){if(M.size===2){const y=[...M].find(([C])=>C!==g.pointerId)[1],u=Math.hypot(x.x-y.x,x.y-y.y),v=Math.hypot(g.clientX-y.x,g.clientY-y.y);u>4&&v>4&&w((g.clientX+y.x)/2,(g.clientY+y.y)/2,Math.pow(u/v,.6))}x.x=g.clientX,x.y=g.clientY}},p=g=>void M.delete(g.pointerId);return r.addEventListener("wheel",I,{passive:!1}),r.addEventListener("pointerdown",b),window.addEventListener("pointermove",S),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",p),()=>{r.removeEventListener("wheel",I),r.removeEventListener("pointerdown",b),window.removeEventListener("pointermove",S),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p)}},[t,n,o,e]),null}function Br({onPad:e,box:t,height:n}){const o=W(l=>l.camera),a=W(l=>l.gl),s=h.useMemo(()=>new D,[]),r=h.useRef(""),i=h.useRef(0);return ae(()=>{if(!e)return;i.current++;let l=null;if(t){o.updateMatrixWorld();const d=a.domElement.getBoundingClientRect();let[m,w,I,M]=[1/0,1/0,-1/0,-1/0],b=!1;for(const S of[t.minX,t.maxX])for(const p of[t.minY,t.maxY])for(const g of[0,n]){s.set(S,g,p).applyMatrix4(o.matrixWorldInverse),s.z>-.05&&(b=!0),s.set(S,g,p).project(o);const x=d.left+(s.x+1)/2*d.width,y=d.top+(1-s.y)/2*d.height;[m,w,I,M]=[Math.min(m,x),Math.min(w,y),Math.max(I,x),Math.max(M,y)]}l=b?null:{x0:m,y0:w,x1:I,y1:M}}const f=l?[l.x0,l.y0,l.x1,l.y1].map(Math.round).join(","):"-";f===r.current&&i.current%30||(r.current=f,e(l))}),null}function Fr({className:e,color:t,onPick:n,children:o}){const a=h.useRef(null),s=h.useRef(n);s.current=n;const r=!!n;return h.useEffect(()=>{const i=a.current;if(!i||!r)return;let l=null;const f=w=>{w.stopPropagation(),l=w.button===0?{id:w.pointerId,x:w.clientX,y:w.clientY}:null},d=w=>{var I;w.stopPropagation(),l&&l.id===w.pointerId&&Math.hypot(w.clientX-l.x,w.clientY-l.y)<=Ce(w.pointerType)&&((I=s.current)==null||I.call(s)),l=null},m=w=>w.stopPropagation();return i.addEventListener("pointerdown",f),i.addEventListener("pointerup",d),i.addEventListener("click",m),i.addEventListener("dblclick",m),()=>{i.removeEventListener("pointerdown",f),i.removeEventListener("pointerup",d),i.removeEventListener("click",m),i.removeEventListener("dblclick",m)}},[r]),c.jsx("div",{ref:a,className:`${e}${r?" pick":""}`,style:{borderColor:t,pointerEvents:r?"auto":"none",touchAction:"none"},title:r?"눌러서 이 공간 고르기":void 0,children:o})}function Yr(e,t,n,o){const a=new Xs(n-e,o-t),s=a.attributes.position,r=a.attributes.uv,i=(e+n)/2,l=(t+o)/2;for(let f=0;f<s.count;f++)r.setXY(f,i+s.getX(f),l-s.getY(f));return a}function Kn(e,t,n,o,a){const s=or(a),r=h.useMemo(()=>a?Nn(a,(e+n)/2,(t+o)/2,!0):Yr(e,t,n,o),[e,t,n,o,s]);return h.useEffect(()=>()=>r.dispose(),[r]),r}function wn({r:e}){const t=Kn(e.x0,e.y0,e.x1,e.y1,e.poly);return c.jsx("primitive",{object:t,attach:"geometry"})}function Mn({x0:e,y0:t,x1:n,y1:o,poly:a,id:s,glow:r,hot:i}){const l=Kn(e,t,n,o,a);return c.jsxs(c.Fragment,{children:[c.jsx("primitive",{object:l,attach:"geometry"}),c.jsx("meshStandardMaterial",{map:Xt("floor",s),roughness:Tt(os,s).finish.rough,emissive:r,emissiveIntensity:i?.3:0})]})}function Gr({state:e,showImage:t,hoverRoomId:n,onHoverRoom:o,focusRoom:a,finishes:s,show:r,onMenu:i,onTap:l,labelOnly:f,onPickRoom:d}){const{image:m,scale:w,walls:I,items:M}=e,b=h.useRef(null),S=(u,v)=>{u.stopPropagation();const{clientX:C,clientY:_}=u.nativeEvent,E={x:u.point.x,y:u.point.z};b.current=u.button===0?{x:C,y:_,room:v.kind==="room"?v.id:void 0}:null,tt(u.nativeEvent,()=>{b.current=null,i({...v,at:E},C,_)})},p=u=>{const v=b.current;b.current=null,v&&Math.hypot(u.nativeEvent.clientX-v.x,u.nativeEvent.clientY-v.y)<5&&l(v.room)},g=h.useMemo(()=>{if(!m)return null;const u=new Ws().load(m.src);return u.colorSpace=Un,u},[m==null?void 0:m.src]),x=ot(I,M),y=3;return c.jsxs("group",{children:[c.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[(x.minX+x.maxX)/2,-.002,(x.minY+x.maxY)/2],onPointerDown:u=>S(u,{kind:"floor"}),onPointerUp:p,children:[c.jsx("planeGeometry",{args:[x.maxX-x.minX+y*2,x.maxY-x.minY+y*2]}),c.jsx("meshBasicMaterial",{colorWrite:!1,depthWrite:!1})]}),e.rooms.map(u=>{if(a&&u.id!==a.id)return null;const v=An(e.rooms,u),C=z=>!!z&&v.some(R=>R.id===z),_=C(e.selectedId),E=C(n),P=(v.length===1||Yo(v)===u)&&(!f||(u.whole??u.id)===f);return c.jsxs("group",{children:[c.jsx("mesh",{"rotation-x":-Math.PI/2,position:[(u.x0+u.x1)/2,.001,(u.y0+u.y1)/2],onPointerMove:z=>{z.stopPropagation(),E||o(u.id)},onPointerOut:()=>E&&o(null),onPointerDown:z=>S(z,{kind:"room",id:u.id}),onPointerUp:p,children:s?c.jsx(Mn,{x0:u.x0,y0:u.y0,x1:u.x1,y1:u.y1,poly:u.poly,id:Go(u,e.finish),glow:$e(u.type),hot:E}):c.jsxs(c.Fragment,{children:[c.jsx(wn,{r:u}),c.jsx("meshStandardMaterial",{color:$e(u.type),transparent:!0,opacity:E?.95:.6,emissive:$e(u.type),emissiveIntensity:E?.35:0})]})}),_&&c.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[(u.x0+u.x1)/2,.004,(u.y0+u.y1)/2],raycast:()=>null,userData:{pickFill:u.id},children:[c.jsx(wn,{r:u}),c.jsx("meshBasicMaterial",{color:Ho,transparent:!0,opacity:.42,depthWrite:!1})]}),(r.rooms||_)&&P&&c.jsx(Ie,{position:[en(u).x,.05,en(u).y],center:!0,zIndexRange:[5,0],style:{pointerEvents:"none"},children:c.jsxs(Fr,{className:`room3d ${_?"hot":""}`,color:$e(u.type),onPick:d&&(()=>d(u.id)),children:[Xo(u),_&&c.jsxs("small",{children:[v.length>1?"ㄱ자":`${Jt(u.x1-u.x0)}×${Jt(u.y1-u.y0)}`," · ",No(e.rooms,u).toFixed(1),"㎡"]})]})})]},u.id)}),s&&!e.rooms.length&&I.length>0&&(()=>{const u=ot(I,[]);return c.jsx("mesh",{"rotation-x":-Math.PI/2,position:[(u.minX+u.maxX)/2,.001,(u.minY+u.maxY)/2],children:c.jsx(Mn,{x0:u.minX,y0:u.minY,x1:u.maxX,y1:u.maxY,id:e.finish.floor,glow:"#000",hot:!1})})})(),m&&g&&t&&c.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[m.pxW*w/2,0,m.pxH*w/2],children:[c.jsx("planeGeometry",{args:[m.pxW*w,m.pxH*w]}),c.jsx("meshStandardMaterial",{map:g,transparent:!0,opacity:.55})]})]})}function Hr(e,t,n){const o=ye/2,a=[...t].sort((i,l)=>i.t-l.t),s=[];let r=-o;for(const i of a){const l=Math.max(r,i.t*e-i.w/2),f=Math.min(e+o,i.t*e+i.w/2);f<=l||(s.push({x0:r,x1:l,y0:0,y1:n}),i.sill>0&&s.push({x0:l,x1:f,y0:0,y1:Math.min(i.sill,n)}),i.sill+i.h<n&&s.push({x0:l,x1:f,y0:i.sill+i.h,y1:n}),r=f)}return s.push({x0:r,x1:e+o,y0:0,y1:n}),s.filter(i=>i.x1-i.x0>.001&&i.y1-i.y0>.001)}function Xr(e,t,n){const o=Math.hypot(t.b.x-t.a.x,t.b.y-t.a.y)||1,a={x:(t.b.x-t.a.x)/o,y:(t.b.y-t.a.y)/o},s=[];for(const r of n)for(const i of[{x:r.x0,y:r.y0},{x:r.x1,y:r.y0},{x:r.x0,y:r.y1},{x:r.x1,y:r.y1}]){const l=i.x-t.a.x,f=i.y-t.a.y,d=l*a.x+f*a.y;Math.abs(-l*a.y+f*a.x)<.5&&d>.02&&d<o-.02&&s.push(d)}return s.sort((r,i)=>r-i),e.flatMap(r=>{const i=[r.x0,...s.filter(l=>l>r.x0+.02&&l<r.x1-.02),r.x1];return i.slice(1).map((l,f)=>({...r,x0:i[f],x1:l}))})}function bn(e,t,n,o){const a=Math.hypot(e.b.x-e.a.x,e.b.y-e.a.y)||1,s={x:(e.b.x-e.a.x)/a,y:(e.b.y-e.a.y)/a},r=Math.min(a-.05,Math.max(.05,t)),i=n*(ye/2+.08),l={x:e.a.x+s.x*r-s.y*i,y:e.a.y+s.y*r+s.x*i},f=It(l,o.rooms);return f?{wall:rs(f,o.home),molding:ss(f)}:is(l,o.walls)?{wall:o.home.wall,molding:!0}:{wall:null,molding:!1}}function Nr(e,t){const n=new Hs(e.x1-e.x0,e.y1-e.y0,t),o=n.attributes.position,a=n.attributes.uv,s=(e.x0+e.x1)/2,r=(e.y0+e.y1)/2;for(let i=0;i<o.count;i++){const l=s+o.getX(i),f=r+o.getY(i),d=o.getZ(i),m=Math.floor(i/4);a.setXY(i,m<2?d:l,m===2||m===3?d:f)}return n}const Ze=new ze({color:"#f7f7f5"}),kr=new ze({color:"#ebe9e4",roughness:.95}),$r=new ze({color:"#3b3a38",roughness:1});function qr({p:e,front:t,back:n}){const o=h.useMemo(()=>Nr(e,ye),[e.x0,e.x1,e.y0,e.y1]);h.useEffect(()=>()=>o.dispose(),[o]);const a=s=>s.wall?rr(s.wall):kr;return c.jsx("mesh",{position:[(e.x0+e.x1)/2,(e.y0+e.y1)/2,0],geometry:o,material:[Ze,Ze,Ze,Ze,a(t),a(n)]})}function jn({p:e,side:t,kind:n,crown:o,H:a,color:s}){const r=e.x1-e.x0,i=ye/2,l=h.useMemo(()=>{if(n.profile==="gap"||!n.profile.length)return null;const d=new Wn(n.profile.map(([m,w])=>new ge(m,w)));return new Gs(d,{depth:r,bevelEnabled:!1})},[n,r]);h.useEffect(()=>()=>l==null?void 0:l.dispose(),[l]);const f=h.useMemo(()=>new ze({color:s,roughness:.5,side:On}),[s]);if(h.useEffect(()=>()=>f.dispose(),[f]),n.profile==="gap"){const d=o?.012:.015;return c.jsx("mesh",{position:[(e.x0+e.x1)/2,o?a-d/2:d/2,t*(i+.001)],material:$r,children:c.jsx("boxGeometry",{args:[r,d,.002]})})}return l?c.jsx("mesh",{geometry:l,material:f,position:[t>0?e.x1:e.x0,o?a:0,t*i],"rotation-y":t>0?-Math.PI/2:Math.PI/2,"scale-y":o?-1:1}):null}function Vr({wall:e,height:t,sides:n,openings:o,finish:a,swings:s,doors:r}){const i=e.b.x-e.a.x,l=e.b.y-e.a.y,f=Math.hypot(i,l),d=h.useMemo(()=>{const M=Hr(f,o,t);return a?Xr(M,e,a.rooms).map(b=>{const S=(b.x0+b.x1)/2;return{p:b,front:bn(e,S,1,a),back:bn(e,S,-1,a)}}):M.map(b=>({p:b,front:null,back:null}))},[e,o,t,a==null?void 0:a.home,a==null?void 0:a.rooms,a==null?void 0:a.walls]),m=a&&n?tn(ko,a.home.crown):null,w=a?tn($o,a.home.base):null,I=a?qo(a.home.trim):"";return c.jsxs("group",{position:[e.a.x,0,e.a.y],"rotation-y":-Math.atan2(l,i),userData:{wallId:e.id,wallH:t},children:[d.map(({p:M,front:b,back:S},p)=>b&&S?c.jsxs("group",{children:[c.jsx(qr,{p:M,front:b,back:S}),[[b,1],[S,-1]].map(([g,x])=>g.molding?c.jsxs("group",{children:[w&&M.y0<1e-6&&c.jsx(jn,{p:M,side:x,kind:w,crown:!1,H:t,color:I}),m&&n&&M.y0<n[x>0?0:1]-1e-6&&M.y1>n[x>0?0:1]-1e-6&&c.jsx(jn,{p:M,side:x,kind:m,crown:!0,H:n[x>0?0:1],color:I})]},x):null)]},p):c.jsxs("mesh",{position:[(M.x0+M.x1)/2,(M.y0+M.y1)/2,0],children:[c.jsx("boxGeometry",{args:[M.x1-M.x0,M.y1-M.y0,ye]}),c.jsx("meshStandardMaterial",{color:"#f7f7f5"})]},p)),o.map(M=>{const b=M.t*f,S=Math.min(M.sill+M.h,t);return M.kind==="window"?S>M.sill?c.jsx(Ms,{o:M,cx:b,sill:M.sill,top:S,ceil:t},M.id):null:c.jsxs("group",{children:[S<t-.02&&c.jsx(bs,{o:M,cx:b,top:S,paint:Bt(M,r).casing}),M.slide?c.jsx(Mr,{o:M,cx:b,top:S,home:r}):c.jsx(wr,{o:M,cx:b,top:S,swing:s[M.id],home:r})]},M.id)})]})}const Kr={gap:"#2b9348",item:"#6b7487",door:"#a07a2c"};function Zr({runs:e,sel:t}){return c.jsx("group",{children:e.map(n=>{const o=!!t&&n.items.includes(t),a=Zo(n)+.08,s=(r,i=a)=>{const l=ds(n,r,i);return[l.x,.02,l.y]};return c.jsxs("group",{children:[n.segs.map((r,i)=>c.jsx(xn,{points:[s(r.a),s(r.b)],color:r.id&&r.id===t?"#3b6cff":Kr[r.kind],lineWidth:o?3:2,dashed:r.kind==="door",dashSize:.06,gapSize:.04},i)),Qo(n).map(r=>c.jsx(xn,{points:[s(r,a-.07),s(r,a+.07)],color:"#6b7487",lineWidth:2},`t${r}`)),n.segs.filter(r=>r.b-r.a>=.12).map((r,i)=>c.jsx(Ie,{position:s((r.a+r.b)/2,a+.13),center:!0,zIndexRange:[8,0],style:{pointerEvents:"none"},children:c.jsx("div",{className:`run3d ${r.kind}${r.id&&r.id===t?" mine":""}`,children:Jo(r)})},`l${i}`))]},n.key)})})}const St={id:"",t:0};function Qr({item:e,walls:t,openings:n,inside:o,snap:a,status:s,selected:r,dispatch:i,controls:l,seeThrough:f,pick:d,faded:m,show:w,onMenu:I,bare:M,onRotate:b,onRetap:S,onDeco:p,ceil:g,many:x}){const y=f||m,u=h.useRef(null),v=h.useRef(null),C=h.useRef(null),_=h.useMemo(()=>new D,[]),E=pt[s]||e.paint||e.color,P=e.z??0,z=Vo(e),R=!e.cab&&!e.photo&&Us(e.kind);h.useEffect(()=>()=>void(l.current&&!je.on&&(l.current.enabled=!0)),[l]),h.useEffect(()=>()=>{var L;return(L=C.current)==null?void 0:L.call(C)},[]);const k=()=>{l.current&&!Le.get().eye&&!je.on&&(l.current.enabled=!0)},Z=L=>{var oe;if(L.button===2){d&&Object.assign(us,{id:e.id,t:performance.now()});return}if(!d||L.button===1||(L.stopPropagation(),Wt(L.pointerId)))return;const{clientX:O,clientY:T}=L.nativeEvent,N={x:L.point.x,y:L.point.z};if(u.current=L.button===0?{id:L.pointerId,x:O,y:T,t:L.nativeEvent.timeStamp,at:N,was:r}:null,p)return;const U=L.nativeEvent;if(x&&L.button===0&&(U.ctrlKey||U.metaKey||U.shiftKey||x.mode&&!x.ids.includes(e.id))){u.current=null;const Q=x.base();x.onMulti(Q.includes(e.id)?Q.filter($=>$!==e.id):[...Q,e.id]);return}const B=!!x&&L.button===0&&x.ids.includes(e.id)&&(x.mode||x.ids.length>1);if(B||i({type:"select",id:e.id}),tt(L.nativeEvent,()=>{v.current=null,u.current=null,I({kind:"item",id:e.id,at:N},O,T)}),e.fixed&&!B||!L.ray.intersectPlane(Je,_))return;let F=null;if(B){const Q=x.items.filter($=>x.ids.includes($.id)&&!$.fixed);F={ids:Q.map($=>$.id),base:Object.fromEntries(Q.map($=>[$.id,{x:$.x,y:$.y}])),b0:{x:e.x,y:e.y},last:{x:0,y:0}}}v.current={id:L.pointerId,dx:_.x-e.x,dz:_.z-e.y,sx:O,sy:T,moved:!1,copy:!!x&&U.altKey&&L.button===0,cur:e.id,now:e,group:F},L.target.setPointerCapture(L.pointerId),l.current&&(l.current.enabled=!1),(oe=C.current)==null||oe.call(C);const V=Q=>{var K;const $=v.current;!$||Q.pointerId===$.id||($.moved&&i({type:"cancelDrag"}),v.current=null,et(),(K=C.current)==null||K.call(C),k())};window.addEventListener("pointerdown",V,!0),C.current=()=>{window.removeEventListener("pointerdown",V,!0),C.current=null}},G=L=>{const O=v.current;if(!O||L.pointerId!==O.id)return;if(!O.moved){if(Math.hypot(L.nativeEvent.clientX-O.sx,L.nativeEvent.clientY-O.sy)<Ce(L.nativeEvent.pointerType))return;if(O.moved=!0,et(),i({type:"checkpoint"}),L.ray.intersectPlane(Je,_)&&Object.assign(O,{dx:_.x-e.x,dz:_.z-e.y}),O.copy&&O.group){const U=((x==null?void 0:x.items)??[]).filter(B=>O.group.ids.includes(B.id)).map(B=>sn(B));i({type:"addItems",items:U,live:!0}),O.group={...O.group,ids:U.map(B=>B.id),base:Object.fromEntries(U.map(B=>[B.id,{x:B.x,y:B.y}]))},x==null||x.onMulti(O.group.ids)}else if(O.copy){const U=sn(e);i({type:"addItems",items:[U],select:U.id,live:!0}),O.cur=U.id,O.now=U}}if(!L.ray.intersectPlane(Je,_))return;const T=O.group;if(T){const U=a.step,B={x:Math.round((_.x-O.dx-T.b0.x)/U)*U,y:Math.round((_.z-O.dz-T.b0.y)/U)*U};if(B.x===T.last.x&&B.y===T.last.y||!T.ids.every(V=>o({x:T.base[V].x+B.x,y:T.base[V].y+B.y})))return;T.last=B;const F=V=>Math.round(V*1e3)/1e3;i({type:"updateItems",patches:Object.fromEntries(T.ids.map(V=>[V,{x:F(T.base[V].x+B.x),y:F(T.base[V].y+B.y)}]))});return}const N=ls(O.now,{x:_.x-O.dx,y:_.z-O.dz},{walls:t,openings:n},o,a);O.now={...O.now,...N},i({type:"updateItem",id:O.cur,patch:N})},Y=d&&!p&&!e.fixed&&Ko(e,t),A=L=>{if(!Y||!L.shiftKey)return;L.stopPropagation();const O=Math.sign(L.deltaY||L.deltaX),T=O?as(e,O*a.step,{walls:t,openings:n},o):null;if(!T)return;const N=performance.now();(St.id!==e.id||N-St.t>1e3)&&i({type:"checkpoint"}),Object.assign(St,{id:e.id,t:N}),i({type:"updateItem",id:e.id,patch:T})},H=L=>{var oe,Q,$,K;if(v.current&&L.pointerId!==v.current.id)return;const O=u.current;u.current=null;const{clientX:T,clientY:N,pointerType:U,timeStamp:B}=L.nativeEvent,F=v.current;O&&O.id===L.pointerId&&!(F!=null&&F.moved)&&B-O.t<500&&Math.hypot(T-O.x,N-O.y)<=Ce(U)&&!_n()&&(p?p(e):F!=null&&F.group&&x?x.onMulti(x.mode?x.ids.filter(X=>X!==e.id):[e.id]):S==null||S(e,O.at,{t:B,x:T,y:N,touch:U!=="mouse"},O.was)),F!=null&&F.moved&&(F.group||i({type:"updateItem",id:F.cur,patch:cs(F.now,{walls:t,openings:n})}),F.copy&&((oe=x==null?void 0:x.onCopied)==null||oe.call(x,"item",F.group?F.group.ids.length:1)));const V=!!v.current;v.current=null,(Q=C.current)==null||Q.call(C),(K=($=L.target).releasePointerCapture)==null||K.call($,L.pointerId),V&&k()};return c.jsxs("group",{position:[e.x,0,e.y],"rotation-y":-e.rot,userData:{itemId:e.id},children:[c.jsxs("mesh",{"position-y":P+e.h/2,onPointerDown:Z,onPointerMove:G,onPointerUp:H,onWheel:A,children:[c.jsx("boxGeometry",{args:[e.w,e.h,e.d]}),e.cab||R?c.jsx("meshBasicMaterial",{colorWrite:!1,depthWrite:!1},"hit"):c.jsx("meshStandardMaterial",{color:E,emissive:r?"#3b6cff":"#000",emissiveIntensity:r?.25:0,transparent:y,opacity:y?.35:1,depthWrite:!y},y?"see":"solid")]}),c.jsx(js,{item:e,z:P,seeThrough:y,selected:r}),z&&[-.026,.026].map(L=>c.jsxs("mesh",{position:[L,P+e.h/2,e.d/2+.001],children:[c.jsx("circleGeometry",{args:[.013,18]}),c.jsx("meshBasicMaterial",{color:r?"#3b6cff":"#8d939a"})]},L)),e.cab&&c.jsx("group",{"position-y":P,children:c.jsx(Bs,{spec:e.cab,w:e.w,h:e.h,d:e.d,z:P,ceiling:g,warn:pt[s]||void 0,selected:r,seeThrough:y})}),R&&c.jsx("group",{"position-y":P,children:c.jsx(Fs,{kind:e.kind,w:e.w,h:e.h,d:e.d,color:e.paint||Ys[e.kind],warn:pt[s]||void 0,selected:r,seeThrough:y})}),P<.05&&e.h>.05&&!z&&!m&&c.jsx("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,material:Ss(),raycast:_t,children:c.jsx("planeGeometry",{args:[e.w+.22,e.d+.22]})}),e.clearance>0&&!M&&c.jsxs("mesh",{position:[0,.006,e.d/2+e.clearance/2],"rotation-x":-Math.PI/2,children:[c.jsx("planeGeometry",{args:[e.w,e.clearance]}),c.jsx("meshBasicMaterial",{color:s==="blocked"?"#f5a524":"#508cff",transparent:!0,opacity:.28})]}),r&&d&&!e.fixed&&!z&&!M&&b&&c.jsx(Jr,{item:e,z:P,onRotate:()=>b(e,Math.PI/6)}),(!z&&(w.items||w.dims)||r)&&c.jsx(Ie,{position:[0,P+e.h+.15,0],center:!0,distanceFactor:8,zIndexRange:[10,0],style:{pointerEvents:"none"},children:c.jsxs("div",{className:`tag3d ${s}`,children:[(w.items||r)&&e.name,(w.dims||r)&&c.jsxs("small",{children:[Math.round(e.w*100),"×",Math.round(e.d*100),"×",Math.round(e.h*100)]})]})})]})}function Jr({item:e,z:t,onRotate:n}){const o=h.useRef(null),a=W(i=>i.camera),s=h.useMemo(()=>new D,[]);ae(()=>{const i=o.current,l=i==null?void 0:i.parent;if(!i||!l)return;let f=-1/0,d=[1,-1];for(const m of[-1,1])for(const w of[-1,1])s.set(m*e.w/2,t+e.h,w*e.d/2),l.localToWorld(s).project(a),s.x+s.y>f&&(f=s.x+s.y,d=[m,w]);i.position.set(d[0]*e.w/2,t+e.h,d[1]*e.d/2)});const r=i=>i.stopPropagation();return c.jsx("group",{ref:o,children:c.jsx(Ie,{center:!0,zIndexRange:[20,0],children:c.jsx("button",{className:"rot3d",title:"30° 돌리기 (누를 때마다 시계 방향)","aria-label":"30도 돌리기",onPointerDown:r,onPointerUp:r,onDoubleClick:r,onClick:i=>{i.stopPropagation(),n()},children:"↻"})})})}export{oi as default};
