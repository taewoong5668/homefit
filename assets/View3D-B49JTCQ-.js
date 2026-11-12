import{r as h,c as Gn,s as mn,p as It,W as xn,o as Hn,u as Xn,j as c,b as et,a as kn,d as yn,e as Se,f as Me,g as gt,h as Nn,i as $n,S as ot,k as Ie,l as Ve,m as qn,n as At,q as Ke,t as Vn,v as st,w as Ze,x as Kn,y as Zn,z as Qn,A as Jn,B as vt,C as eo,D as Ut,E as to,F as Bt,G as no,H as oo,I as so,J as gn,K as ro,L as io,M as ao,N as _t,O as vn,P as co,Q as wn,R as Yt,T as Ot,U as wt,V as Mt,X as lo,Y as uo,Z as fo,_ as po,$ as fe,a0 as Be,a1 as ho,a2 as De,a3 as be,a4 as $e,a5 as mo,a6 as Gt,a7 as xo,a8 as yo,a9 as rt,aa as go,ab as vo,ac as it,ad as wo,ae as Mo,af as bo,ag as jo,ah as So,ai as Eo,aj as Mn,ak as Qe,al as Ht,am as Po,an as Xt,ao as Ye,ap as Lo,aq as zo,ar as Io,as as kt,at as bt,au as Ao,av as We,aw as bn,ax as _o,ay as Oo,az as Ge,aA as Co,aB as Ro,aC as Do,aD as Nt,aE as Wo,aF as $t,aG as qt,aH as To,aI as Fo,aJ as Uo,aK as at,aL as Bo,aM as Yo,aN as Go,aO as Ho,aP as Xo,aQ as ko,aR as Vt,aS as Kt,aT as No,aU as $o,aV as qo,aW as Vo,aX as Ko,aY as Zo,aZ as Qo,a_ as Jo,a$ as es,b0 as ts,b1 as ns,b2 as os,b3 as ss,b4 as rs,b5 as ve}from"./index-C22qsuEU.js";import{M as jt,D as is,C as as,S as cs,a as ls,b as us,G as ds,n as St,O as fs,W as ps,c as hs,F as ms,d as xs}from"./Door3D-Bfruwg1T.js";import{u as F,a as oe,V as T,_ as Et,D as jn,b as pe,P as Sn,O as En,R as ys,I as gs,F as Zt,c as Pt,d as ze,W as vs,B as Ct,S as Pn,e as ws,U as Qt,f as Jt,M as Ms,g as Ae,L as bs,h as Ln,i as js,C as Ss,j as zn,k as Es,l as Ps,m as Ls,n as In,o as Ee,p as we,Q as An,q as zs,r as tt,T as Is,s as As,t as _s,v as Os,w as Cs,E as Rs,x as Ds,y as Ws}from"./CabinetMesh-B8wJXmo9.js";const Te=new T,Rt=new T,Ts=new T,en=new pe;function Fs(e,t,n){const o=Te.setFromMatrixPosition(e.matrixWorld);o.project(t);const a=n.width/2,s=n.height/2;return[o.x*a+a,-(o.y*s)+s]}function Us(e,t){const n=Te.setFromMatrixPosition(e.matrixWorld),o=Rt.setFromMatrixPosition(t.matrixWorld),a=n.sub(o),s=t.getWorldDirection(Ts);return a.angleTo(s)>Math.PI/2}function Bs(e,t,n,o){const a=Te.setFromMatrixPosition(e.matrixWorld),s=a.clone();s.project(t),en.set(s.x,s.y),n.setFromCamera(en,t);const r=n.intersectObjects(o,!0);if(r.length){const i=r[0].distance;return a.distanceTo(n.ray.origin)<i}return!0}function Ys(e,t){if(t instanceof En)return t.zoom;if(t instanceof Sn){const n=Te.setFromMatrixPosition(e.matrixWorld),o=Rt.setFromMatrixPosition(t.matrixWorld),a=t.fov*Math.PI/180,s=n.distanceTo(o);return 1/(2*Math.tan(a/2)*s)}else return 1}function Gs(e,t,n){if(t instanceof Sn||t instanceof En){const o=Te.setFromMatrixPosition(e.matrixWorld),a=Rt.setFromMatrixPosition(t.matrixWorld),s=o.distanceTo(a),r=(n[1]-n[0])/(t.far-t.near),i=n[1]-r*t.far;return Math.round(r*s+i)}}const Lt=e=>Math.abs(e)<1e-10?0:e;function _n(e,t,n=""){let o="matrix3d(";for(let a=0;a!==16;a++)o+=Lt(t[a]*e.elements[a])+(a!==15?",":")");return n+o}const Hs=(e=>t=>_n(t,e))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),Xs=(e=>(t,n)=>_n(t,e(n),"translate(-50%,-50%)"))(e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1]);function ks(e){return e&&typeof e=="object"&&"current"in e}const Pe=h.forwardRef(({children:e,eps:t=.001,style:n,className:o,prepend:a,center:s,fullscreen:r,portal:i,distanceFactor:l,sprite:f=!1,transform:d=!1,occlude:m,onOcclude:j,castShadow:I,receiveShadow:b,material:y,geometry:M,zIndexRange:p=[16777271,0],calculatePosition:x=Fs,as:g="div",wrapperClass:v,pointerEvents:u="auto",...w},z)=>{const{gl:A,camera:S,scene:L,size:P,raycaster:O,events:H,viewport:C}=F(),[R]=h.useState(()=>document.createElement(g)),U=h.useRef(),D=h.useRef(null),_=h.useRef(0),W=h.useRef([0,0]),k=h.useRef(null),B=h.useRef(null),Y=(i==null?void 0:i.current)||H.connected||A.domElement.parentNode,te=h.useRef(null),re=h.useRef(!1),se=h.useMemo(()=>m&&m!=="blending"||Array.isArray(m)&&m.length&&ks(m[0]),[m]);h.useLayoutEffect(()=>{const ne=A.domElement;m&&m==="blending"?(ne.style.zIndex=`${Math.floor(p[0]/2)}`,ne.style.position="absolute",ne.style.pointerEvents="none"):(ne.style.zIndex=null,ne.style.position=null,ne.style.pointerEvents=null)},[m]),h.useLayoutEffect(()=>{if(D.current){const ne=U.current=Gn(R);if(L.updateMatrixWorld(),d)R.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const G=x(D.current,S,P);R.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${G[0]}px,${G[1]}px,0);transform-origin:0 0;`}return Y&&(a?Y.prepend(R):Y.appendChild(R)),()=>{Y&&Y.removeChild(R),ne.unmount()}}},[Y,d]),h.useLayoutEffect(()=>{v&&(R.className=v)},[v]);const ie=h.useMemo(()=>d?{position:"absolute",top:0,left:0,width:P.width,height:P.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:s?"translate3d(-50%,-50%,0)":"none",...r&&{top:-P.height/2,left:-P.width/2,width:P.width,height:P.height},...n},[n,s,r,P,d]),Le=h.useMemo(()=>({position:"absolute",pointerEvents:u}),[u]);h.useLayoutEffect(()=>{if(re.current=!1,d){var ne;(ne=U.current)==null||ne.render(h.createElement("div",{ref:k,style:ie},h.createElement("div",{ref:B,style:Le},h.createElement("div",{ref:z,className:o,style:n,children:e}))))}else{var G;(G=U.current)==null||G.render(h.createElement("div",{ref:z,style:ie,className:o,children:e}))}});const V=h.useRef(!0);oe(ne=>{if(D.current){S.updateMatrixWorld(),D.current.updateWorldMatrix(!0,!1);const G=d?W.current:x(D.current,S,P);if(d||Math.abs(_.current-S.zoom)>t||Math.abs(W.current[0]-G[0])>t||Math.abs(W.current[1]-G[1])>t){const ue=Us(D.current,S);let K=!1;se&&(Array.isArray(m)?K=m.map(N=>N.current):m!=="blending"&&(K=[L]));const de=V.current;if(K){const N=Bs(D.current,S,O,K);V.current=N&&!ue}else V.current=!ue;de!==V.current&&(j?j(!V.current):R.style.display=V.current?"block":"none");const me=Math.floor(p[0]/2),_e=m?se?[p[0],me]:[me-1,0]:p;if(R.style.zIndex=`${Gs(D.current,S,_e)}`,d){const[N,Oe]=[P.width/2,P.height/2],xe=S.projectionMatrix.elements[5]*Oe,{isOrthographicCamera:Ce,top:Fe,left:Re,bottom:E,right:X}=S,$=Hs(S.matrixWorldInverse),Z=Ce?`scale(${xe})translate(${Lt(-(X+Re)/2)}px,${Lt((Fe+E)/2)}px)`:`translateZ(${xe}px)`;let q=D.current.matrixWorld;f&&(q=S.matrixWorldInverse.clone().transpose().copyPosition(q).scale(D.current.scale),q.elements[3]=q.elements[7]=q.elements[11]=0,q.elements[15]=1),R.style.width=P.width+"px",R.style.height=P.height+"px",R.style.perspective=Ce?"":`${xe}px`,k.current&&B.current&&(k.current.style.transform=`${Z}${$}translate(${N}px,${Oe}px)`,B.current.style.transform=Xs(q,1/((l||10)/400)))}else{const N=l===void 0?1:Ys(D.current,S)*l;R.style.transform=`translate3d(${G[0]}px,${G[1]}px,0) scale(${N})`}W.current=G,_.current=S.zoom}}if(!se&&te.current&&!re.current)if(d){if(k.current){const G=k.current.children[0];if(G!=null&&G.clientWidth&&G!=null&&G.clientHeight){const{isOrthographicCamera:ue}=S;if(ue||M)w.scale&&(Array.isArray(w.scale)?w.scale instanceof T?te.current.scale.copy(w.scale.clone().divideScalar(1)):te.current.scale.set(1/w.scale[0],1/w.scale[1],1/w.scale[2]):te.current.scale.setScalar(1/w.scale));else{const K=(l||10)/400,de=G.clientWidth*K,me=G.clientHeight*K;te.current.scale.set(de,me,1)}re.current=!0}}}else{const G=R.children[0];if(G!=null&&G.clientWidth&&G!=null&&G.clientHeight){const ue=1/C.factor,K=G.clientWidth*ue,de=G.clientHeight*ue;te.current.scale.set(K,de,1),re.current=!0}te.current.lookAt(ne.camera.position)}});const he=h.useMemo(()=>({vertexShader:d?void 0:`
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
      `}),[d]);return h.createElement("group",Et({},w,{ref:D}),m&&!se&&h.createElement("mesh",{castShadow:I,receiveShadow:b,ref:te},M||h.createElement("planeGeometry",null),y||h.createElement("shaderMaterial",{side:jn,vertexShader:he.vertexShader,fragmentShader:he.fragmentShader})))}),On=parseInt(ys.replace(/\D+/g,"")),Cn=On>=125?"uv1":"uv2",tn=new Ct,He=new T;class Dt extends gs{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],o=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(o),this.setAttribute("position",new Zt(t,3)),this.setAttribute("uv",new Zt(n,2))}applyMatrix4(t){const n=this.attributes.instanceStart,o=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(t),o.applyMatrix4(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const o=new Pt(n,6,1);return this.setAttribute("instanceStart",new ze(o,3,0)),this.setAttribute("instanceEnd",new ze(o,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t,n=3){let o;t instanceof Float32Array?o=t:Array.isArray(t)&&(o=new Float32Array(t));const a=new Pt(o,n*2,1);return this.setAttribute("instanceColorStart",new ze(a,n,0)),this.setAttribute("instanceColorEnd",new ze(a,n,n)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new vs(t.geometry)),this}fromLineSegments(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;t!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(t),tn.setFromBufferAttribute(n),this.boundingBox.union(tn))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0&&n!==void 0){const o=this.boundingSphere.center;this.boundingBox.getCenter(o);let a=0;for(let s=0,r=t.count;s<r;s++)He.fromBufferAttribute(t,s),a=Math.max(a,o.distanceToSquared(He)),He.fromBufferAttribute(n,s),a=Math.max(a,o.distanceToSquared(He));this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}class Rn extends Dt{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const n=t.length-3,o=new Float32Array(2*n);for(let a=0;a<n;a+=3)o[2*a]=t[a],o[2*a+1]=t[a+1],o[2*a+2]=t[a+2],o[2*a+3]=t[a+3],o[2*a+4]=t[a+4],o[2*a+5]=t[a+5];return super.setPositions(o),this}setColors(t,n=3){const o=t.length-n,a=new Float32Array(2*o);if(n===3)for(let s=0;s<o;s+=n)a[2*s]=t[s],a[2*s+1]=t[s+1],a[2*s+2]=t[s+2],a[2*s+3]=t[s+3],a[2*s+4]=t[s+4],a[2*s+5]=t[s+5];else for(let s=0;s<o;s+=n)a[2*s]=t[s],a[2*s+1]=t[s+1],a[2*s+2]=t[s+2],a[2*s+3]=t[s+3],a[2*s+4]=t[s+4],a[2*s+5]=t[s+5],a[2*s+6]=t[s+6],a[2*s+7]=t[s+7];return super.setColors(a,n),this}fromLine(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}}class Wt extends ws{constructor(t){super({type:"LineMaterial",uniforms:Qt.clone(Qt.merge([Jt.common,Jt.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new pe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${On>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(n){this.uniforms.diffuse.value=n}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(n){n===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(n){this.uniforms.linewidth.value=n}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(n){!!n!="USE_DASH"in this.defines&&(this.needsUpdate=!0),n===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(n){this.uniforms.dashScale.value=n}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(n){this.uniforms.dashSize.value=n}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(n){this.uniforms.dashOffset.value=n}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(n){this.uniforms.gapSize.value=n}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(n){this.uniforms.resolution.value.copy(n)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(n){!!n!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),n===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}const ct=new Ae,nn=new T,on=new T,Q=new Ae,J=new Ae,ae=new Ae,lt=new T,ut=new Ln,ee=new bs,sn=new T,Xe=new Ct,ke=new Pn,ce=new Ae;let le,je;function rn(e,t,n){return ce.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),ce.multiplyScalar(1/ce.w),ce.x=je/n.width,ce.y=je/n.height,ce.applyMatrix4(e.projectionMatrixInverse),ce.multiplyScalar(1/ce.w),Math.abs(Math.max(ce.x,ce.y))}function Ns(e,t){const n=e.matrixWorld,o=e.geometry,a=o.attributes.instanceStart,s=o.attributes.instanceEnd,r=Math.min(o.instanceCount,a.count);for(let i=0,l=r;i<l;i++){ee.start.fromBufferAttribute(a,i),ee.end.fromBufferAttribute(s,i),ee.applyMatrix4(n);const f=new T,d=new T;le.distanceSqToSegment(ee.start,ee.end,d,f),d.distanceTo(f)<je*.5&&t.push({point:d,pointOnLine:f,distance:le.origin.distanceTo(d),object:e,face:null,faceIndex:i,uv:null,[Cn]:null})}}function $s(e,t,n){const o=t.projectionMatrix,s=e.material.resolution,r=e.matrixWorld,i=e.geometry,l=i.attributes.instanceStart,f=i.attributes.instanceEnd,d=Math.min(i.instanceCount,l.count),m=-t.near;le.at(1,ae),ae.w=1,ae.applyMatrix4(t.matrixWorldInverse),ae.applyMatrix4(o),ae.multiplyScalar(1/ae.w),ae.x*=s.x/2,ae.y*=s.y/2,ae.z=0,lt.copy(ae),ut.multiplyMatrices(t.matrixWorldInverse,r);for(let j=0,I=d;j<I;j++){if(Q.fromBufferAttribute(l,j),J.fromBufferAttribute(f,j),Q.w=1,J.w=1,Q.applyMatrix4(ut),J.applyMatrix4(ut),Q.z>m&&J.z>m)continue;if(Q.z>m){const g=Q.z-J.z,v=(Q.z-m)/g;Q.lerp(J,v)}else if(J.z>m){const g=J.z-Q.z,v=(J.z-m)/g;J.lerp(Q,v)}Q.applyMatrix4(o),J.applyMatrix4(o),Q.multiplyScalar(1/Q.w),J.multiplyScalar(1/J.w),Q.x*=s.x/2,Q.y*=s.y/2,J.x*=s.x/2,J.y*=s.y/2,ee.start.copy(Q),ee.start.z=0,ee.end.copy(J),ee.end.z=0;const y=ee.closestPointToPointParameter(lt,!0);ee.at(y,sn);const M=js.lerp(Q.z,J.z,y),p=M>=-1&&M<=1,x=lt.distanceTo(sn)<je*.5;if(p&&x){ee.start.fromBufferAttribute(l,j),ee.end.fromBufferAttribute(f,j),ee.start.applyMatrix4(r),ee.end.applyMatrix4(r);const g=new T,v=new T;le.distanceSqToSegment(ee.start,ee.end,v,g),n.push({point:v,pointOnLine:g,distance:le.origin.distanceTo(v),object:e,face:null,faceIndex:j,uv:null,[Cn]:null})}}}class Dn extends Ms{constructor(t=new Dt,n=new Wt({color:Math.random()*16777215})){super(t,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,n=t.attributes.instanceStart,o=t.attributes.instanceEnd,a=new Float32Array(2*n.count);for(let r=0,i=0,l=n.count;r<l;r++,i+=2)nn.fromBufferAttribute(n,r),on.fromBufferAttribute(o,r),a[i]=i===0?0:a[i-1],a[i+1]=a[i]+nn.distanceTo(on);const s=new Pt(a,2,1);return t.setAttribute("instanceDistanceStart",new ze(s,1,0)),t.setAttribute("instanceDistanceEnd",new ze(s,1,1)),this}raycast(t,n){const o=this.material.worldUnits,a=t.camera;a===null&&!o&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;le=t.ray;const r=this.matrixWorld,i=this.geometry,l=this.material;je=l.linewidth+s,i.boundingSphere===null&&i.computeBoundingSphere(),ke.copy(i.boundingSphere).applyMatrix4(r);let f;if(o)f=je*.5;else{const m=Math.max(a.near,ke.distanceToPoint(le.origin));f=rn(a,m,l.resolution)}if(ke.radius+=f,le.intersectsSphere(ke)===!1)return;i.boundingBox===null&&i.computeBoundingBox(),Xe.copy(i.boundingBox).applyMatrix4(r);let d;if(o)d=je*.5;else{const m=Math.max(a.near,Xe.distanceToPoint(le.origin));d=rn(a,m,l.resolution)}Xe.expandByScalar(d),le.intersectsBox(Xe)!==!1&&(o?Ns(this,n):$s(this,a,n))}onBeforeRender(t){const n=this.material.uniforms;n&&n.resolution&&(t.getViewport(ct),this.material.uniforms.resolution.value.set(ct.z,ct.w))}}class qs extends Dn{constructor(t=new Rn,n=new Wt({color:Math.random()*16777215})){super(t,n),this.isLine2=!0,this.type="Line2"}}const an=h.forwardRef(function({points:t,color:n=16777215,vertexColors:o,linewidth:a,lineWidth:s,segments:r,dashed:i,...l},f){var d,m;const j=F(p=>p.size),I=h.useMemo(()=>r?new Dn:new qs,[r]),[b]=h.useState(()=>new Wt),y=(o==null||(d=o[0])==null?void 0:d.length)===4?4:3,M=h.useMemo(()=>{const p=r?new Dt:new Rn,x=t.map(g=>{const v=Array.isArray(g);return g instanceof T||g instanceof Ae?[g.x,g.y,g.z]:g instanceof pe?[g.x,g.y,0]:v&&g.length===3?[g[0],g[1],g[2]]:v&&g.length===2?[g[0],g[1],0]:g});if(p.setPositions(x.flat()),o){n=16777215;const g=o.map(v=>v instanceof Ss?v.toArray():v);p.setColors(g.flat(),y)}return p},[t,r,o,y]);return h.useLayoutEffect(()=>{I.computeLineDistances()},[t,I]),h.useLayoutEffect(()=>{i?b.defines.USE_DASH="":delete b.defines.USE_DASH,b.needsUpdate=!0},[i,b]),h.useEffect(()=>()=>{M.dispose(),b.dispose()},[M]),h.createElement("primitive",Et({object:I,ref:f},l),h.createElement("primitive",{object:M,attach:"geometry"}),h.createElement("primitive",Et({object:b,attach:"material",color:n,vertexColors:!!o,resolution:[j.width,j.height],linewidth:(m=a??s)!==null&&m!==void 0?m:1,dashed:i,transparent:y===4},l)))});function Wn(e,t,n,o){const a=new zn(e.map(l=>new pe(l.x-t,o?n-l.y:l.y-n))),s=new Es(a),r=s.attributes.position,i=s.attributes.uv;for(let l=0;l<r.count;l++)i.setXY(l,t+r.getX(l),o?n-r.getY(l):n+r.getY(l));return s}const Vs=e=>e?e.map(t=>`${t.x.toFixed(3)},${t.y.toFixed(3)}`).join(";"):"";function Tn(e,t,n){const o=new Ps(e);return o.wrapS=o.wrapT=Ls,o.repeat.set(1/t.w,1/t.h),n&&(o.colorSpace=In),o.anisotropy=8,o}const Je=new Map;function Tt(e,t){const n=`${e}|${t}`;let o=Je.get(n);if(!o){const a=mn(e,t);o=Tn(a.canvas,a,!0),Je.set(n,o)}return o}const Ks={coat:2.2,paper:1,flower:.6,silk:.8,paint:1,bathwall:.6},zt=new Map;function Fn(e,t){var o;const n=mn("wall",t);(o=e.bumpMap)==null||o.dispose(),e.bumpMap=n.bump?Tn(n.bump,n,!1):null,e.bumpScale=Ks[It(xn,t).finish.key]??1}function Zs(e){let t=zt.get(e);return t||(t=new Ee({map:Tt("wall",e),roughness:It(xn,e).finish.rough}),Fn(t,e),zt.set(e,t)),t}Hn((e,t)=>{const n=`${e}|${t}`,o=Je.get(n);if(!o)return;Je.delete(n);const a=Tt(e,t);setTimeout(()=>o.dispose(),2e3);const s=e==="wall"?zt.get(t):void 0;s&&(s.map=a,Fn(s,t),s.needsUpdate=!0)});const dt=new we(new T(0,1,0),0),cn=new T(0,1,0),ft=new T,Qs="#4b5563",pt="#8d6e52";function ht({a:e,b:t,r:n,color:o}){const{mid:a,q:s,L:r}=h.useMemo(()=>{const i=new T(...e),l=new T(...t),f=l.clone().sub(i),d=f.length();return{mid:i.add(l).multiplyScalar(.5),q:new An().setFromUnitVectors(cn,d>1e-6?f.normalize():cn),L:d}},[...e,...t]);return c.jsxs("mesh",{position:a,quaternion:s,children:[c.jsx("capsuleGeometry",{args:[n,Math.max(.001,r),4,10]}),c.jsx("meshStandardMaterial",{color:o,roughness:.8})]})}const Un=h.memo(function({age:t,sex:n,pose:o,seat:a,chair:s}){const r=et(t,n),i=yn(t).color,l=Vn(t),f=r.shoulderW*.22,d=r.shoulderW*.16,m=r.shoulderW*.1,j=r.depth/2,I=o==="stand"?0:a,b=o==="stand"?r.H:I+r.sitH,y=b-r.head/2,M=b-r.head*1.3,p=o==="stand"?r.leg:I+j*.8,x=r.shoulderW/2-m;let g,v;if(o==="stand")g=[-1,1].flatMap(u=>[[[u*f,d,0],[u*f,r.leg,0]]]),v=[-1,1].map(u=>[u*(x+m*.6),M-r.arm+m,0]);else if(o==="sit"){const u=I+d,w=Math.max(u,r.shin),z=Math.sqrt(Math.max(.01,r.thigh**2-(w-u)**2)),A=Math.max(d,w-r.shin+d);g=[-1,1].flatMap(S=>[[[S*f,u,0],[S*f,w,z]],[[S*f,w,z],[S*f,A,z+.04]]]),v=[-1,1].map(S=>[S*(f+m*.5),u+d+m,z*.6])}else{const u=f+r.thigh*.45,w=r.thigh*.8;g=[-1,1].flatMap(z=>[[[z*f,d,0],[z*u,d,w]],[[z*u,d,w],[-z*f,d,r.thigh*.35]]]),v=[-1,1].map(z=>[z*(f+r.thigh*.35),d*2+m,r.thigh*.6])}return c.jsxs("group",{children:[g.map(([u,w],z)=>c.jsx(ht,{a:u,b:w,r:d,color:Qs},z)),c.jsxs("mesh",{position:[0,(p+M)/2,0],scale:[r.shoulderW*.46/j,1,1],children:[c.jsx("capsuleGeometry",{args:[j,Math.max(.01,M-p-j),4,12]}),c.jsx("meshStandardMaterial",{color:i,roughness:.85})]}),[-1,1].map((u,w)=>c.jsx(ht,{a:[u*x,M-m*.5,0],b:v[w],r:m,color:i},w)),v.map((u,w)=>c.jsxs("mesh",{position:u,children:[c.jsx("sphereGeometry",{args:[m*1.1,10,8]}),c.jsx("meshStandardMaterial",{color:ot})]},w)),c.jsx(ht,{a:[0,M,0],b:[0,y,0],r:r.head*.17,color:ot}),c.jsxs("mesh",{position:[0,y,0],children:[c.jsx("sphereGeometry",{args:[r.head/2,20,16]}),c.jsx("meshStandardMaterial",{color:ot,roughness:.7})]}),c.jsxs("mesh",{position:[0,y+r.head*.06,-r.head*.06],children:[c.jsx("sphereGeometry",{args:[r.head*.52,20,16]}),c.jsx("meshStandardMaterial",{color:l,roughness:.9})]}),n==="f"&&c.jsxs("mesh",{position:[0,y-r.head*.12,-r.head*.18],children:[c.jsx("sphereGeometry",{args:[r.head*.42,16,12]}),c.jsx("meshStandardMaterial",{color:l,roughness:.9})]}),[-1,1].map(u=>c.jsxs("mesh",{position:[u*r.head*.18,y,r.head*.47],children:[c.jsx("sphereGeometry",{args:[r.head*.06,8,6]}),c.jsx("meshBasicMaterial",{color:"#222"})]},u)),s&&c.jsx(Js,{seat:I})]})});function Js({seat:e}){return c.jsxs("group",{position:[0,0,-.04],children:[c.jsxs("mesh",{position:[0,e-.02,0],children:[c.jsx("boxGeometry",{args:[.42,.04,.42]}),c.jsx("meshStandardMaterial",{color:pt})]}),c.jsxs("mesh",{position:[0,e+.24,-.42/2+.02],children:[c.jsx("boxGeometry",{args:[.42,.44,.04]}),c.jsx("meshStandardMaterial",{color:pt})]}),[-1,1].flatMap(n=>[-1,1].map(o=>c.jsxs("mesh",{position:[n*(.42/2-.03),(e-.04)/2,o*(.42/2-.03)],children:[c.jsx("boxGeometry",{args:[.03,e-.04,.03]}),c.jsx("meshStandardMaterial",{color:pt})]},`${n}${o}`)))]})}function er({world:e,dispatch:t,controls:n,onMenu:o,still:a,wide:s}){const{list:r,active:i,eye:l}=Xn();return c.jsxs(c.Fragment,{children:[r.map(f=>c.jsx(tr,{p:f,active:f.id===i,hidden:f.id===l,world:e,dispatch:t,controls:n,onMenu:o,still:a},f.id)),c.jsx(nr,{controls:n}),c.jsx(or,{controls:n,wide:s??null})]})}function tr({p:e,active:t,hidden:n,world:o,dispatch:a,controls:s,onMenu:r,still:i}){const l=et(e.age,e.sex),f=h.useRef(null),d=h.useMemo(()=>new T,[]),m=e.pose==="stand"?l.H:e.seat+l.sitH,j=y=>{if(y.button===2)return;if(y.stopPropagation(),i){const{clientX:x,clientY:g}=y.nativeEvent;At(y.pointerId)||Ke(y.nativeEvent,()=>r({kind:"person",id:e.id,at:{x:e.x,y:e.y}},x,g));return}a({type:"select",id:null}),Se.set({active:e.id});const{clientX:M,clientY:p}=y.nativeEvent;Ke(y.nativeEvent,()=>{f.current=null,r({kind:"person",id:e.id,at:{x:e.x,y:e.y}},M,p)}),y.ray.intersectPlane(dt,d)&&(f.current={dx:d.x-e.x,dz:d.z-e.y,sx:M,sy:p,moved:!1},y.target.setPointerCapture(y.pointerId),s.current&&(s.current.enabled=!1))},I=y=>{const M=f.current;if(M){if(!M.moved){if(Math.hypot(y.nativeEvent.clientX-M.sx,y.nativeEvent.clientY-M.sy)<Ie(y.nativeEvent.pointerType))return;M.moved=!0,Ve(),y.ray.intersectPlane(dt,d)&&Object.assign(M,{dx:d.x-e.x,dz:d.z-e.y})}y.ray.intersectPlane(dt,d)&&qn(e,{x:d.x-M.dx,y:d.z-M.dz},o)}},b=y=>{var M,p;f.current=null,(p=(M=y.target).releasePointerCapture)==null||p.call(M,y.pointerId),s.current&&!Se.get().eye&&!Me.on&&(s.current.enabled=!0)};return n?null:c.jsxs("group",{position:[e.x,0,e.y],"rotation-y":-e.rot,onPointerDown:j,onPointerMove:I,onPointerUp:b,children:[c.jsx(Un,{age:e.age,sex:e.sex,pose:e.pose,seat:e.seat,chair:!!e.chair}),c.jsxs("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,children:[c.jsx("circleGeometry",{args:[l.r*1.1,24]}),c.jsx("meshBasicMaterial",{color:"#000",transparent:!0,opacity:.12,depthWrite:!1})]}),t&&c.jsxs("mesh",{"position-y":.008,"rotation-x":-Math.PI/2,children:[c.jsx("ringGeometry",{args:[l.r+.04,l.r+.08,40]}),c.jsx("meshBasicMaterial",{color:"#3b6cff"})]}),t&&c.jsx(Pe,{position:[0,m+.16,0],center:!0,distanceFactor:8,zIndexRange:[13,0],style:{pointerEvents:"none"},children:c.jsxs("div",{className:"tag3d person on",style:{borderColor:yn(e.age).color},children:[kn(e)," ",Math.round(l.H*100),"cm",c.jsx("small",{children:e.pose==="stand"?`눈높이 ${Math.round(l.eye*100)}`:`앉은 눈높이 ${Math.round((e.seat+l.sitH-l.head/2)*100)}`})]})})]})}function nr({controls:e}){const t=F(n=>n.camera);return h.useEffect(()=>()=>void(st.value=0),[]),oe(()=>{var o;const n=(o=e.current)==null?void 0:o.target;!n||Se.get().eye||(Me.on?(t.getWorldDirection(ft),st.value=Math.atan2(-ft.x,-ft.z)):st.value=Math.atan2(t.position.x-n.x,t.position.z-n.z))}),null}function or({controls:e,wide:t}){const n=gt(l=>l.eye),o=F(l=>l.camera),a=F(l=>l.size),s=t==null?70:Nn(a.width/Math.max(1,a.height),t),r=h.useRef(s);r.current=s,h.useEffect(()=>{!n||o.fov===s||(o.fov=s,o.updateProjectionMatrix())},[s]);const i=h.useRef(null);return h.useEffect(()=>{if(!n)return;const l=e.current,f={pos:o.position.clone(),target:l==null?void 0:l.target.clone(),fov:o.fov};return i.current=n,l&&(l.enabled=!1),o.fov=r.current,o.updateProjectionMatrix(),()=>{i.current=null,o.position.copy(f.pos),o.fov=f.fov,o.updateProjectionMatrix(),l&&f.target&&(l.target.copy(f.target),l.enabled=!0,l.update())}},[n]),oe(()=>{if(!n||i.current!==n)return;const l=Se.get().list.find(j=>j.id===n);if(!l)return;const f=et(l.age,l.sex),d=l.pose==="stand"?f.eye:l.seat+f.sitH-f.head/2,m=$n(l.rot);o.position.set(l.x+m.x*f.head*.3,d,l.y+m.y*f.head*.3),o.lookAt(l.x+m.x*3,d-.4,l.y+m.y*3)}),null}function sr({controls:e,world:t}){const n=F(b=>b.camera),o=F(b=>b.size),a=F(b=>b.setEvents),s=Ze(b=>b.closed),r=Kn(),i=h.useMemo(()=>Zn(t,s),[t,s]),l=h.useRef(i);l.current=i;const f=h.useMemo(()=>Qn(i.walls,i.openings),[i]),d=h.useRef(t);d.current=t;const m=h.useRef(1),j=h.useRef({phase:0,amp:0}),I=h.useRef(!1);return h.useEffect(()=>{const b=e.current,y={pos:n.position.clone(),quat:n.quaternion.clone(),target:b==null?void 0:b.target.clone(),fov:n.fov,near:n.near};return I.current=!0,b&&(b.enabled=!1),a({enabled:!1}),n.near=.05,n.rotation.order="YXZ",()=>{I.current=!1,a({enabled:!0}),n.rotation.order="XYZ",n.position.copy(y.pos),n.quaternion.copy(y.quat),n.fov=y.fov,n.near=y.near,n.updateProjectionMatrix(),b&&y.target&&(b.target.copy(y.target),b.enabled=!0,b.update())}},[]),h.useEffect(()=>{n.fov=Jn(o.width/Math.max(1,o.height),r),n.updateProjectionMatrix()},[o.width,o.height,r]),oe((b,y)=>{if(!I.current)return;const M=Math.min(y,.1),p=vt,x=eo;p.yaw+=x.turn*1.8*M;const g=x.kf-x.jy,v=x.ks+x.jx,u=Math.hypot(g,v);let w=0;if(u>.08){Ut.get().pose!=="stand"&&to();const S=Math.hypot(x.jx,x.jy),L=S>.08?x.jrun?2.6:1.4*Math.min(1,S/.9):x.run?2.6:1.4,P=Bt(p.yaw),O={x:-P.y,y:P.x},H=Math.max(1,Math.ceil(L*M/.08)),C=L*M/u/H;for(let R=0;R<H;R++){const U={x:p.x+(P.x*g+O.x*v)*C,y:p.y+(P.y*g+O.y*v)*C},D=no(oo(),U,l.current,wn),_=Math.hypot(D.x-p.x,D.y-p.y);if(w+=_,p.x=D.x,p.y=D.y,_<1e-6)break}}(p.vz!==0||p.air>0)&&(p.air+=p.vz*M-4.9*M*M,p.vz-=9.8*M,p.air<=0&&(p.air=p.vz=0));const z=j.current;z.amp+=((w>1e-4&&p.air===0?1:0)-z.amp)*Math.min(1,M*6),z.phase+=w/.7*Math.PI*2,p.eye+=(so()-p.eye)*(1-Math.exp(-M*7));const A=Bt(p.yaw);if(p.cam+=(p.zoom-p.cam)*(1-Math.exp(-M*10)),Math.abs(p.zoom-p.cam)<.003&&(p.cam=p.zoom),p.cam<.02){p.shown=0;const S=Ut.get().pose==="stand"?.06:.08;n.position.set(p.x+A.x*S,p.eye+p.air+Math.cos(z.phase)*.012*z.amp,p.y+A.y*S)}else{const S=Math.cos(p.pitch),L={x:A.x*S,y:Math.sin(p.pitch),z:A.y*S},P=p.eye+p.air+.12;let O=p.cam;L.y<-.001&&(O=Math.min(O,(gn({x:p.x,y:p.y},d.current.rooms)-.12-P)/-L.y)),L.y>.001&&(O=Math.min(O,(P-.15)/L.y)),S>.001&&(O=Math.min(O,ro({x:p.x,y:p.y},{x:-A.x,y:-A.y},O*S,f)/S)),O=Math.max(0,O),p.shown=O<p.shown?O:p.shown+(O-p.shown)*(1-Math.exp(-M*5)),n.position.set(p.x-L.x*p.shown,P-L.y*p.shown,p.y-L.z*p.shown)}n.rotation.set(p.pitch,p.yaw,0,"YXZ"),m.current+=M,m.current>.2&&(m.current=0,io(d.current.rooms),ao(d.current))}),null}function rr(){const e=h.useRef(null),{h:t,pose:n}=co(),o=t/100/et("adult","m").H;return oe(()=>{const a=e.current;if(!a)return;const s=vt;a.visible=s.shown>.45,a.position.set(s.x,s.air,s.y),a.rotation.y=s.yaw+Math.PI}),c.jsxs("group",{ref:e,visible:!1,userData:{noAim:!0,noShadow:!0},children:[c.jsx("group",{scale:o,children:c.jsx(Un,{age:"adult",sex:"m",pose:n,seat:vt.seat/o,chair:!1})}),c.jsxs("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,children:[c.jsx("circleGeometry",{args:[wn*1.1,24]}),c.jsx("meshBasicMaterial",{color:"#000",transparent:!0,opacity:.12,depthWrite:!1})]})]})}const ir=12;function ar(){const e=F(i=>i.camera),t=F(i=>i.scene),n=F(i=>i.gl),o=h.useMemo(()=>{const i=new tt;return i.far=ir,i},[]),a=h.useMemo(()=>new pe,[]),s=h.useRef(0),r=(i,l)=>{e.updateMatrixWorld(),a.set(i,l),o.setFromCamera(a,e);for(const f of o.intersectObjects(t.children,!0)){if(!f.object.isMesh)continue;let d=null,m=!1;for(let j=f.object;j;j=j.parent){if(!j.visible||j.userData.noAim){m=!0;break}!d&&typeof j.userData.itemId=="string"&&(d=j.userData.itemId)}if(!m)return d}return null};return h.useEffect(()=>(Be.center=()=>r(0,0),Be.client=(i,l)=>{const f=n.domElement.getBoundingClientRect();return!f.width||!f.height?null:r((i-f.left)/f.width*2-1,-((l-f.top)/f.height)*2+1)},()=>{Be.center=Be.client=null,Yt(null)})),oe((i,l)=>{s.current+=l,!(s.current<.1)&&(s.current=0,Yt(r(0,0)))}),null}const cr=new Ee({color:"#f6f5f1",emissive:"#f6f5f1",emissiveIntensity:.42,roughness:1}),lr=new zs({color:"#fffaf0"});function ur({rooms:e,walls:t}){const n=h.useMemo(()=>{if(e.length)return e.map(i=>({id:i.id,x0:i.x0,y0:i.y0,x1:i.x1,y1:i.y1,poly:i.poly,h:_t(i)}));if(!t.length)return[];const s=t.flatMap(i=>[i.a.x,i.b.x]),r=t.flatMap(i=>[i.a.y,i.b.y]);return[{id:"all",x0:Math.min(...s),y0:Math.min(...r),x1:Math.max(...s),y1:Math.max(...r),poly:void 0,h:vn}]},[e,t]),o=h.useMemo(()=>new Map(n.filter(s=>s.poly).map(s=>[s.id,Wn(s.poly,(s.x0+s.x1)/2,(s.y0+s.y1)/2,!1)])),[n]);h.useEffect(()=>()=>o.forEach(s=>s.dispose()),[o]);const a=fe/2;return c.jsx("group",{children:n.map(s=>{const r=(s.x0+s.x1)/2,i=(s.y0+s.y1)/2;return c.jsxs("group",{children:[c.jsx("mesh",{position:[r,s.h,i],"rotation-x":Math.PI/2,material:cr,userData:{cast:!0,ceilRoom:s.id},children:o.has(s.id)?c.jsx("primitive",{object:o.get(s.id),attach:"geometry"}):c.jsx("planeGeometry",{args:[s.x1-s.x0+2*a,s.y1-s.y0+2*a]})}),(s.x1-s.x0)*(s.y1-s.y0)>1.5&&c.jsx("mesh",{position:[r,s.h-.01,i],"rotation-x":Math.PI/2,material:lr,children:c.jsx("circleGeometry",{args:[.22,36]})})]},s.id)})})}const Bn=(e,t,n)=>Math.abs(t-e)<.001?t:e+(t-e)*(1-Math.exp(-n*7)),dr=new Ee({color:"#b9bcc0",metalness:.6,roughness:.35});function fr({o:e,cx:t,top:n,swing:o,home:a}){var p;const s=Ze(x=>x.on),r=Ze(x=>x.on&&x.closed.includes(e.id)),i=h.useRef(null),l=o??{min:0,max:90},f=e.hingeEnd?-1:1,d=-e.side*f*(r?l.min:l.max)*Math.PI/180;h.useLayoutEffect(()=>void(i.current&&(i.current.rotation.y=d)),[]),oe((x,g)=>{const v=i.current;v&&v.rotation.y!==d&&(v.rotation.y=Bn(v.rotation.y,d,g))});const m=t+(e.hingeEnd?e.w/2:-e.w/2),j=-e.side*.02,I=lo(e),b=Ot(e,a).leaf,y=((p=uo(e,a).look)==null?void 0:p.key)??null,M=x=>c.jsx(jt,{w:x,h:n,arch:Mt(e),grid:wt(e)==="grid",paint:b});return c.jsxs(c.Fragment,{children:[c.jsxs("group",{ref:i,position:[m,0,e.side*fe/2],children:[c.jsx("group",{position:[f*I/2,0,j],children:e.mid?M(I):c.jsx(is,{w:I,h:n,look:y,paint:b})}),[-1,1].map(x=>c.jsx("mesh",{position:[f*(I-.07),.95,j+x*.035],material:dr,children:c.jsx("sphereGeometry",{args:[.025,14,10]})},x)),!s&&fo(l)&&c.jsx(Pe,{position:[f*I/2,n+.15,j],center:!0,zIndexRange:[8,0],style:{pointerEvents:"none"},children:c.jsxs("div",{className:"ang3d",title:l.by?`${l.by}에 걸려요`:void 0,children:["🚪 ",po(l)]})})]}),e.mid&&e.w-I>.01&&c.jsx("group",{position:[m+f*(I+(e.w-I)/2),0,e.side*fe/2+j],children:M(e.w-I)})]})}function pr({o:e,cx:t,top:n,home:o}){const a=Ze(l=>l.on&&!l.closed.includes(e.id)),s=h.useRef(null),r=t+(a?.21:-.21)*e.w;h.useLayoutEffect(()=>void(s.current&&(s.current.position.x=r)),[]),oe((l,f)=>{var m;const d=(m=s.current)==null?void 0:m.position;d&&d.x!==r&&(d.x=Bn(d.x,r,f))});const i=Ot(e,o).leaf;return c.jsxs("group",{children:[c.jsx("group",{ref:s,"position-z":-.03,children:c.jsx(jt,{w:e.w*.58,h:n,arch:!!e.mid&&Mt(e),grid:!!e.mid&&wt(e)==="grid",paint:i})}),c.jsx("group",{position:[t+e.w*.21,0,.03],children:c.jsx(jt,{w:e.w*.58,h:n,arch:!!e.mid&&Mt(e),grid:!!e.mid&&wt(e)==="grid",paint:i})})]})}const hr=.55,mr=.18,mt=Math.PI/180,xr=new T,ln=new T,yr=new Ln,xt=new An;function gr({at:e,controls:t,wide:n=1}){const o=F(p=>p.camera),a=F(p=>p.size),s=F(p=>p.gl),r=F(p=>p.events.connected),i=F(p=>p.get),l=a.width/Math.max(1,a.height),f=h.useMemo(()=>ho(e.rooms,e.room,e.i,l),[e.rooms,e.room,e.i,l]),d=h.useRef(1),m=h.useRef(null),j=h.useRef(null),I=h.useRef(1),b=h.useRef(""),y=h.useRef({...De});h.useEffect(()=>{const p=t.current,x={pos:o.position.clone(),quat:o.quaternion.clone(),target:p==null?void 0:p.target.clone(),fov:o.fov,near:o.near};return Me.on=!0,be.set(De),p&&(p.enabled=!1),o.near=.05,o.updateProjectionMatrix(),()=>{Me.on=!1,rt.on=!1,$e.turned=!1,be.set(De),o.position.copy(x.pos),o.quaternion.copy(x.quat),o.fov=x.fov,o.near=x.near,o.updateProjectionMatrix(),p&&x.target&&(p.target.copy(x.target),p.enabled=!0,p.update())}},[]);const M=f?[...f.pos,...f.dir].map(p=>p.toFixed(3)).join(","):"";return h.useEffect(()=>{if(!f)return;b.current!==M&&(b.current=M,d.current=1,j.current={pos:o.position.clone(),quat:o.quaternion.clone(),fov:o.fov},I.current=0,be.set(De),y.current={...De});const p=mo(f.tv,n,l);m.current={pos:new T(...f.pos),phi:f.phi,diag:f.diag,tv:p,min:f.tvMin,max:Math.max(f.tvMax,p)}},[M,f==null?void 0:f.tv,n]),h.useEffect(()=>{const p=r??s.domElement,x=L=>{const P=m.current;!P||!isFinite(L)||L<=0||(d.current=Math.min(P.max/P.tv,Math.max(P.min/P.tv,d.current*L)))},g=L=>{if(!L.deltaY||L.shiftKey)return;L.preventDefault();const P=L.deltaMode===1?L.deltaY*33:L.deltaMode===2?L.deltaY*400:L.deltaY;x(Math.exp(Math.max(-100,Math.min(100,P))*.0012))},v=new Map;let u=null,w=!1;const z=L=>{if(L.pointerType==="touch"&&v.set(L.pointerId,{x:L.clientX,y:L.clientY}),v.size>=2){w=!0,u=null;return}if(L.button!==0||w||($e.turned=!1,i().internal.capturedMap.has(L.pointerId)))return;const P=y.current,O=Math.tan(o.fov*mt/2),H=mr*Math.min(1.6,Math.max(.25,O/Math.tan(30*mt)));u={id:L.pointerId,sx:L.clientX,sy:L.clientY,a0:{pitch:P.pitch,yaw:P.yaw},k:H,on:!1}},A=L=>{const P=v.get(L.pointerId);if(P){if(v.size===2){const R=[...v].find(([_])=>_!==L.pointerId)[1],U=Math.hypot(P.x-R.x,P.y-R.y),D=Math.hypot(L.clientX-R.x,L.clientY-R.y);U>4&&D>4&&x(Math.pow(U/D,.8))}P.x=L.clientX,P.y=L.clientY}const O=m.current;if(!u||L.pointerId!==u.id||!O)return;const H=L.clientX-u.sx,C=L.clientY-u.sy;if(!u.on){if(Math.hypot(H,C)<Ie(L.pointerType))return;if(document.querySelector(".ctxmenu"))return void(u=null);u.on=!0,$e.turned=!0,Ve()}be.set(Gt(O,go(u.a0,H,C,u.k)))},S=L=>{v.delete(L.pointerId),u&&L.pointerId===u.id&&(u=null),v.size||(w=!1)};return p.addEventListener("wheel",g,{passive:!1}),p.addEventListener("pointerdown",z),window.addEventListener("pointermove",A),window.addEventListener("pointerup",S),window.addEventListener("pointercancel",S),()=>{p.removeEventListener("wheel",g),p.removeEventListener("pointerdown",z),window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S)}},[r,s,i]),oe((p,x)=>{const g=m.current;if(!g)return;const v=be.get(),u=Gt(g,v);(u.pitch!==v.pitch||u.yaw!==v.yaw)&&be.set(u,v.ease);const w=y.current;if(v.ease){const S=1-Math.exp(-Math.min(x,.05)*9);w.pitch+=(u.pitch-w.pitch)*S,w.yaw+=(u.yaw-w.yaw)*S,Math.abs(u.pitch-w.pitch)<.05&&Math.abs(u.yaw-w.yaw)<.05&&(Object.assign(w,u),be.set(u))}else Object.assign(w,u);ln.set(...xo(g.phi+w.yaw*mt,w.pitch)).add(g.pos),xt.setFromRotationMatrix(yr.lookAt(g.pos,ln,o.up));const z=yo(g.tv*d.current),A=j.current;if(I.current<1&&A){I.current=Math.min(1,I.current+Math.min(x,.05)/hr);const S=I.current<.5?4*I.current**3:1-(-2*I.current+2)**3/2;o.position.lerpVectors(A.pos,g.pos,S),o.quaternion.slerpQuaternions(A.quat,xt,S),o.fov=A.fov+(z-A.fov)*S}else o.position.copy(g.pos),o.quaternion.copy(xt),o.fov=z;o.updateProjectionMatrix(),Object.assign(rt,{on:!0,frame:rt.frame+1,key:e.key,i:e.i,n:e.n,pos:o.position.toArray().map(S=>+S.toFixed(3)),dir:o.getWorldDirection(xr).toArray().map(S=>+S.toFixed(3)),fov:+o.fov.toFixed(1),moving:I.current<1||v.ease,pitch:+w.pitch.toFixed(1),yaw:+w.yaw.toFixed(1)})}),null}function vr({room:e,rooms:t,walls:n,openings:o,items:a,dispatch:s,controls:r}){const i=F(u=>u.camera),l=F(u=>u.gl),f=_t(e),d=vo(e,t),[m,j]=h.useState(null),I=h.useRef({h:f});I.current.h=f;const b=h.useRef(null),y=h.useRef(0),M=F(u=>u.size),p=(m==null?void 0:m.k)??0,x=d[p],g=h.useRef(new T);oe(()=>{const u=b.current;if(!u||!x)return;const w=(g.current.set(x.x,f,x.y).project(i).x*.5+.5)*M.width,z=u.offsetWidth,A=w-z/2,S=Math.round(Math.min(Math.max(A,4),Math.max(4,M.width-4-z))-A);S!==y.current&&(y.current=S,u.style.transform=`translateX(calc(-50% + ${S}px))`)});const v=(u,w)=>{if(w.button!==0&&w.pointerType==="mouse")return;w.stopPropagation(),w.preventDefault();const z=d[u],A=f,S=l.domElement.getBoundingClientRect(),L=W=>-new T(z.x,W,z.y).project(i).y*.5*S.height,P=Math.max(40,Math.abs(L(A)-L(A+1))),O=wo(e,t,n,o,a),H=w.clientY,C=w.pointerId;let R=!1;const U=r.current;U&&(U.enabled=!1),j({k:u,stuck:!1});const D=W=>{if(W.pointerId!==C||!R&&Math.abs(H-W.clientY)<3)return;const k=A+(H-W.clientY)/P,B=bo(k,O);j({k:u,stuck:O>Mo&&k<O-.05}),!(Math.abs(B-I.current.h)<1e-6)&&(R||(s({type:"checkpoint"}),R=!0),I.current.h=B,s({type:"updateRoom",id:e.id,patch:{h:Math.abs(B-vn)<1e-6?void 0:B},live:!0}))},_=W=>{W.pointerId===C&&(removeEventListener("pointermove",D,!0),removeEventListener("pointerup",_,!0),removeEventListener("pointercancel",_,!0),U&&(U.enabled=!0),j(null))};addEventListener("pointermove",D,!0),addEventListener("pointerup",_,!0),addEventListener("pointercancel",_,!0)};return c.jsx(c.Fragment,{children:d.map((u,w)=>c.jsx(Pe,{position:[u.x,f,u.y],center:!0,zIndexRange:[12,0],children:c.jsxs("div",{className:`hknob-wrap${(m==null?void 0:m.k)===w?" on":""}`,children:[c.jsx("button",{className:"hknob","data-k":w,title:`↕ 위아래로 끌어 높이 바꾸기(지금 ${it(f)}cm, 10cm씩 120~400cm)`,"aria-label":`높이 ${it(f)}cm — 위아래로 끌어 바꾸기`,onPointerDown:z=>v(w,z),onContextMenu:z=>z.preventDefault(),children:"↕"}),w===p&&c.jsxs("span",{ref:b,className:`hknob-label${m?" live":""}`,style:{transform:`translateX(calc(-50% + ${y.current}px))`},children:[`높이 ${it(f)}`,(m==null?void 0:m.stuck)&&c.jsx("small",{children:"문·창·가구보다 낮게는 안 돼요"})]})]})},w))})}const un={rooms:!1,dims:!1,items:!1},wr={seq:0,x:0,y:0},qe=new we(new T(0,1,0),0);function qr({state:e,dispatch:t,statuses:n,lowWalls:o,showImage:a,cam:s,onCam:r,inside:i,probe:l,ghost:f,focusRoom:d,snap:m,spin:j,onPad:I,hoverRoomId:b,onHoverRoom:y,finishes:M,show:p,onMenu:x,onDismiss:g,stage:v,walk:u=!1,onRotateItem:w,onDeco:z,corner:A=null,wide:S=null,pivot:L=wr}){const{walls:P,items:O,image:H,scale:C}=e,R=u||!!A,U=gt(E=>!!E.eye),D=R||U,_=h.useMemo(()=>A?e.rooms.filter(E=>(E.whole??E.id)===A.key):null,[A==null?void 0:A.key,e.rooms]),W=h.useMemo(()=>jo(P,e.openings,O),[P,e.openings,O]),k=h.useMemo(()=>So(P,e.rooms),[P,e.rooms]),B=Eo(e.rooms),Y=v===1&&!u&&!A&&!U?e.rooms.find(E=>E.id===e.selectedId)??null:null,te=h.useMemo(()=>new Set(Y?Mn(e.rooms,Y).map(E=>E.id):[]),[Y,e.rooms]),re=E=>o&&!u&&!E.some(X=>te.has(X)),se=()=>!!A&&$e.turned||bn(),ie=(E,X,$,Z)=>{const q=_o({stage:v,was:Z,item:E,rooms:e.rooms,at:X,focus:d,tap:$});q&&t({type:"select",id:q})},Le=E=>{se()||(v===2?(g(!!E),t({type:"select",id:E??null})):!g(v===1&&!!E)&&E&&v===1&&t({type:"select",id:E}))},V=Qe(P,O,H?{w:H.pxW*C,h:H.pxH*C}:void 0),he=(V.minX+V.maxX)/2,ne=(V.minY+V.maxY)/2,G=Math.max(V.maxX-V.minX,V.maxY-V.minY,4),ue=h.useMemo(()=>[he,0,ne],[]),K=Qe(P,O),de=Math.max(3,Math.hypot(K.maxX-K.minX,K.maxY-K.minY)/2+1),me=(K.minX+K.maxX)/2,_e=(K.minY+K.maxY)/2,N=h.useRef(null),Oe=h.useRef(new T),xe=!u&&!A&&!U,Ce=h.useMemo(()=>{if(!xe||v===1)return[];const E=O.filter(Z=>Ht(v,Z,!!p.others,n[Z.id]==="collide")),X=O.find(Z=>Z.id===e.selectedId),$=Z=>Xt(e.rooms.find(q=>q.id===Z)??{id:Z});return Po(Lo(e.rooms,P,e.openings,E),{dims:p.dims,sel:X&&Ye(v,X)?X.id:null,focus:d?Xt(d):null,keyOf:$})},[xe,v,O,e.rooms,P,e.openings,p.dims,p.others,n,e.selectedId,d]),Fe=gt(E=>E.list.map(X=>X.seatOn??"").join(",")),Re=(E,X,$)=>{const Z=N.current;if(Z&&!Se.get().eye&&!Me.on){Z.enabled=!1;const q=()=>{window.removeEventListener("pointerup",q,!0),!Se.get().eye&&!Me.on&&(Z.enabled=!0)};window.addEventListener("pointerup",q,!0)}x(E,X,$)};return c.jsxs(as,{shadows:"percentage",camera:{position:[he,G*.9,ne+G*.8],fov:45},onPointerMissed:E=>void(!u&&E.button===0&&!se()&&g()),children:[c.jsx(cs,{cx:me,cz:_e,r:de}),c.jsx("hemisphereLight",{args:["#ffffff","#d6d0c6"],intensity:D?1.4:1.05}),c.jsx(ls,{cx:me,cz:_e,r:de,off:!!d}),c.jsx(us,{deps:[P,O,e.openings,d,o,u,v,Fe,!!A,U,e.rooms,Y==null?void 0:Y.id]}),c.jsx(ds,{cx:me,cz:_e,r:de}),c.jsx(Cr,{state:e,showImage:a&&!R,hoverRoomId:u?null:b,onHoverRoom:y,focusRoom:d,finishes:M,show:u?un:p,onMenu:Re,onTap:Le,labelOnly:A==null?void 0:A.key,onPickRoom:!u&&zo(v)?E=>t({type:"select",id:E}):void 0}),P.map(E=>{const X=k.get(E.id)??{h:B,front:B,back:B,rooms:[]},$=re(X.rooms);return c.jsx(Br,{wall:E,height:$?1:X.h,sides:$?null:[X.front,X.back],openings:e.openings.filter(Z=>Z.wallId===E.id),finish:M?{home:e.finish,rooms:e.rooms,walls:P}:null,swings:W,doors:e.finish},E.id)}),e.rooms.filter(E=>E.loose&&(!d||E.id===d.id)).map(E=>{const X=re([E.id])?1:_t(E),$=fe;if(E.poly){const q=Io(E);return q.map((ye,Ue)=>{const ge=q[(Ue+1)%q.length],nt=Math.hypot(ge.x-ye.x,ge.y-ye.y);return c.jsxs("mesh",{name:"loosewall",userData:{room:E.id,wallH:X},position:[(ye.x+ge.x)/2,X/2,(ye.y+ge.y)/2],"rotation-y":-Math.atan2(ge.y-ye.y,ge.x-ye.x),raycast:St,children:[c.jsx("boxGeometry",{args:[nt+$/2,X,$]}),c.jsx("meshStandardMaterial",{color:kt(E.loose),transparent:!0,opacity:.6})]},`lz${E.id}${Ue}`)})}return[[(E.x0+E.x1)/2,E.y0,E.x1-E.x0+$,$],[(E.x0+E.x1)/2,E.y1,E.x1-E.x0+$,$],[E.x0,(E.y0+E.y1)/2,$,E.y1-E.y0-$],[E.x1,(E.y0+E.y1)/2,$,E.y1-E.y0-$]].map(([q,ye,Ue,ge],nt)=>c.jsxs("mesh",{name:"loosewall",userData:{room:E.id,wallH:X},position:[q,X/2,ye],raycast:St,children:[c.jsx("boxGeometry",{args:[Ue,X,ge]}),c.jsx("meshStandardMaterial",{color:kt(E.loose),transparent:!0,opacity:.6})]},`lz${E.id}${nt}`))}),O.filter(E=>(!d||bt({x:E.x,y:E.y},[d]))&&(u||Ht(v,E,!!p.others,n[E.id]==="collide"))).map(E=>c.jsx(Hr,{item:E,walls:P,openings:e.openings,inside:i,snap:m,status:u?"ok":n[E.id]??"ok",selected:!u&&E.id===e.selectedId,dispatch:t,controls:N,seeThrough:Fe.split(",").includes(E.id),pick:!u&&Ye(v,E),faded:!u&&!Ye(v,E)&&v<3,show:u||_&&!bt({x:E.x,y:E.y},_)?un:{...p,items:p.items&&(v>=3||Ye(v,E)),dims:p.dims&&Ao(v,E)},bare:u,onMenu:Re,onRotate:u?void 0:w,onRetap:u?void 0:ie,onDeco:u||v!==5?void 0:z,ceil:gn(E,e.rooms)},E.id)),Ce.length>0&&c.jsx(Gr,{runs:Ce,sel:e.selectedId}),(u||v>=3||p.others)&&c.jsx(er,{world:e,dispatch:t,controls:N,onMenu:Re,still:v===4||v===5,wide:S}),f&&c.jsxs("mesh",{position:[f.x,f.h/2,f.y],"rotation-y":-f.rot,children:[c.jsx("boxGeometry",{args:[f.w,f.h,f.d]}),c.jsx("meshStandardMaterial",{color:f.ok?f.color:"#e5484d",transparent:!0,opacity:.5})]}),c.jsx(Er,{probe:l}),c.jsx(Sr,{room:d}),c.jsx(fs,{ref:N,makeDefault:!0,target:ue,maxPolarAngle:Math.PI/2.05,zoomSpeed:0}),c.jsx(Mr,{cam:s,onCam:r,controls:N,hold:!!A,pivotLeft:Oe}),c.jsx(br,{wide:S??1,controls:N,free:xe}),c.jsx(zr,{controls:N,on:xe,go:L,left:Oe,wallH:o?1:B,box:d?{minX:d.x0-We,minY:d.y0-We,maxX:d.x1+We,maxY:d.y1+We}:V,focus:!!d}),c.jsx(jr,{controls:N}),c.jsx(Pr,{spin:j,controls:N}),c.jsx(Ir,{controls:N}),u&&c.jsx(sr,{controls:N,world:e}),D&&c.jsx(ur,{rooms:e.rooms,walls:P}),Y&&c.jsx(vr,{room:Y,rooms:e.rooms,walls:P,openings:e.openings,items:O,dispatch:t,controls:N}),A&&!u&&c.jsx(gr,{at:A,controls:N,wide:S??1}),u&&c.jsx(rr,{}),u&&c.jsx(ar,{}),c.jsx(Ar,{onPad:R?void 0:I,box:d?{minX:d.x0,minY:d.y0,maxX:d.x1,maxY:d.y1}:P.length||O.length||H?V:null,height:o?1:B})]})}function Mr({cam:e,onCam:t,controls:n,hold:o,pivotLeft:a}){const s=F(d=>d.camera),r=F(d=>d.size),i=h.useRef(!1),l=h.useRef(!1),f=()=>Math.tan(s.fov*Math.PI/360)*Math.min(1,r.width/r.height);return h.useEffect(()=>{const d=n.current;if(!e||!d||o||l.current&&e.src==="3d")return;l.current=!0;const m=s.position.clone().sub(d.target);(e.src==="app"||m.lengthSq()<1e-6)&&m.set(0,.8,.6),m.normalize();const j=e.src==="pad"?d.target.y:0;e.src!=="pad"&&a.current.set(0,0,0),d.target.set(e.cx,j,e.cy),s.position.copy(d.target).addScaledVector(m,e.e/(2*f())),i.current=!0,d.update(),i.current=!1},[e,r.width,r.height,o]),h.useEffect(()=>{const d=n.current;if(!d)return;const m=()=>{if(i.current)return;const j=s.position.distanceTo(d.target),I=Math.atan2(s.position.x-d.target.x,s.position.z-d.target.z)*180/Math.PI;t({cx:d.target.x,cy:d.target.z,e:2*j*f(),az:I,src:"3d"})};return d.addEventListener("change",m),()=>d.removeEventListener("change",m)},[t,r.width,r.height]),null}function br({wide:e,controls:t,free:n}){const o=F(r=>r.camera),a=F(r=>r.size),s=ko(a.width/Math.max(1,a.height),e);return h.useEffect(()=>{if(!n||Math.abs(o.fov-s)<.001)return;const r=t.current,i=Vt(o.fov)/Vt(s);o.fov=s,o.updateProjectionMatrix(),r&&(o.position.sub(r.target).multiplyScalar(i).add(r.target),r.update())},[s,n]),null}function jr({controls:e}){const t=F(n=>n.camera);return oe(()=>{var o;const n=(o=e.current)==null?void 0:o.target;+t.fov.toFixed(1),n&&+t.position.distanceTo(n).toFixed(2)}),null}function Sr({room:e}){const t=F(n=>n.gl);return h.useEffect(()=>{if(!e){t.clippingPlanes=[];return}const n=We;return t.clippingPlanes=[new we(new T(1,0,0),-(e.x0-n)),new we(new T(-1,0,0),e.x1+n),new we(new T(0,0,1),-(e.y0-n)),new we(new T(0,0,-1),e.y1+n)],()=>void(t.clippingPlanes=[])},[e==null?void 0:e.id,e==null?void 0:e.x0,e==null?void 0:e.x1,e==null?void 0:e.y0,e==null?void 0:e.y1,t]),null}function Er({probe:e}){const t=F(o=>o.camera),n=F(o=>o.gl);return h.useEffect(()=>{const o=new tt,a=new T;return e.current=(s,r)=>{const i=n.domElement.getBoundingClientRect();return s<i.left||s>i.right||r<i.top||r>i.bottom?null:(o.setFromCamera(new pe((s-i.left)/i.width*2-1,-((r-i.top)/i.height)*2+1),t),o.ray.intersectPlane(qe,a)?{x:a.x,y:a.z}:null)},()=>void(e.current=null)},[t,n]),null}const Ft=new T(0,1,0);function Pr({spin:e,controls:t}){const n=F(s=>s.camera),o=h.useRef(0),a=h.useRef(e.seq);return h.useEffect(()=>{e.seq!==a.current&&(a.current=e.seq,o.current+=e.deg)},[e.seq]),oe((s,r)=>{const i=t.current;if(!i||!o.current)return;let l=o.current*(1-Math.exp(-r*1e3/70));Math.abs(o.current-l)<.05&&(l=o.current),o.current-=l;const f=n.position.clone().sub(i.target);f.applyAxisAngle(Ft,l*Math.PI/180),n.position.copy(i.target).add(f),i.update()}),null}function Lr(e){for(;e;e=e.parent)if(!e.visible)return!1;return!0}function zr({controls:e,on:t,go:n,left:o,wallH:a,box:s,focus:r}){const i=F(y=>y.camera),l=F(y=>y.gl),f=F(y=>y.scene),d=F(y=>y.events.connected),m=h.useRef({on:t,wallH:a,box:s,focus:r});m.current={on:t,wallH:a,box:s,focus:r};const j=h.useMemo(()=>new T,[]),I=y=>{const M=e.current;M&&(o.current.copy(y).sub(M.target),ve.n++,ve.last=[+y.x.toFixed(3),+y.y.toFixed(3),+y.z.toFixed(3)])},b=h.useRef(n.seq);return h.useEffect(()=>{if(n.seq===b.current)return;b.current=n.seq;const y=m.current.box,M=m.current.on&&Kt(null,{x:n.x,y:0,z:n.y},m.current.wallH,y);M&&I(new T(M.x,M.y,M.z))},[n.seq]),h.useEffect(()=>{ve.on=t,t||o.current.set(0,0,0)},[t]),h.useEffect(()=>{const y=d??l.domElement,M=new tt,p=new pe,x=new we(Ft.clone(),0),g=new T,v=new T,u=(C,R)=>{const U=l.domElement.getBoundingClientRect();return p.set((C-U.left)/U.width*2-1,-((R-U.top)/U.height)*2+1)};ve.toScreen=(C,R,U)=>{const D=l.domElement.getBoundingClientRect();return v.set(C,R,U).project(i),v.z>1?null:[Math.round(D.left+(v.x+1)/2*D.width),Math.round(D.top+(1-v.y)/2*D.height)]};const w=(C,R)=>{const{wallH:U,box:D,focus:_}=m.current;M.setFromCamera(u(C,R),i);const W=M.intersectObjects(f.children,!0).find(Y=>Y.object.isMesh&&Lr(Y.object)&&(!_||!D||Y.point.x>=D.minX&&Y.point.x<=D.maxX&&Y.point.z>=D.minY&&Y.point.z<=D.maxY)),k=M.ray.intersectPlane(x,g),B=Kt(W?W.point:null,k?{x:k.x,y:0,z:k.z}:null,U,D);return B&&new T(B.x,B.y,B.z)};let z=null,A=null;const S=()=>{z=null,A=null},L=C=>{if(!m.current.on||C.target!==l.domElement||C.button!==0||At(C.pointerId))return S();z={id:C.pointerId,x:C.clientX,y:C.clientY,t:C.timeStamp,touch:C.pointerType==="touch"}},P=C=>{if(z){if(C.pointerId!==z.id)return S();Math.hypot(C.clientX-z.x,C.clientY-z.y)>Ie(C.pointerType)&&S()}},O=C=>{const R=z;if(z=null,!R||C.pointerId!==R.id)return;if(C.timeStamp-R.t>os||!m.current.on)return void(A=null);const U={t:C.timeStamp,x:C.clientX,y:C.clientY,touch:R.touch};if(!ss(A,U))return void(A=U);if(A=null,document.querySelector(".ctxmenu"))return;const D=w(C.clientX,C.clientY);D&&(rs.t=performance.now(),I(D))},H=C=>{C.detail>1&&C.target===l.domElement&&C.preventDefault()};return y.addEventListener("pointerdown",L,!0),y.addEventListener("mousedown",H),window.addEventListener("pointermove",P,!0),window.addEventListener("pointerup",O,!0),window.addEventListener("pointercancel",S,!0),()=>{y.removeEventListener("pointerdown",L,!0),y.removeEventListener("mousedown",H),window.removeEventListener("pointermove",P,!0),window.removeEventListener("pointerup",O,!0),window.removeEventListener("pointercancel",S,!0),ve.toScreen=()=>null}},[i,l,d,f,e]),oe((y,M)=>{const p=e.current;if(!p)return;const x=o.current;if(x.lengthSq()>0){const g=$o(Math.min(M,.1));x.length()*(1-g)<No?j.copy(x):j.copy(x).multiplyScalar(g),x.sub(j),x.lengthSq()<1e-12&&x.set(0,0,0),p.target.add(j),i.position.add(j),p.update()}ve.moving=x.lengthSq()>0,ve.target=p.target.toArray().map(g=>+g.toFixed(3)),ve.cam=i.position.toArray().map(g=>+g.toFixed(3))}),null}function Ir({controls:e}){const t=F(r=>r.camera),n=F(r=>r.gl),o=F(r=>r.events.connected),a=F(r=>r.size),s=h.useRef(a);return s.current=a,h.useEffect(()=>{const r=o??n.domElement,i=new tt,l=new pe,f=new we(Ft.clone(),0),d=new T,m=()=>{const x=e.current;return x&&x.enabled&&x.enableZoom?x:null},j=(x,g,v)=>{const u=m();if(!u||!isFinite(v)||v<=0)return;const w=t.position.distanceTo(u.target),{width:z,height:A}=s.current,S=2*w*Math.tan(t.fov*Math.PI/360)*Math.min(1,z/A);let L=S*v;v<1&&L<.6&&(L=Math.min(S,.6)),v>1&&L>300&&(L=Math.max(S,300));const P=L/S;if(Math.abs(P-1)<1e-5)return;const O=n.domElement.getBoundingClientRect();if(l.set((x-O.left)/O.width*2-1,-((g-O.top)/O.height)*2+1),i.setFromCamera(l,t),f.constant=-u.target.y,i.ray.intersectPlane(f,d)){const H=Math.max(2*w,3),C=d.clone().sub(u.target);C.length()>H&&d.copy(u.target).addScaledVector(C.normalize(),H)}else d.copy(u.target);t.position.sub(d).multiplyScalar(P).add(d),u.target.sub(d).multiplyScalar(P).add(d),u.update()},I=x=>{if(!m()||!x.deltaY||x.shiftKey)return;x.preventDefault();const g=x.deltaMode===1?x.deltaY*33:x.deltaMode===2?x.deltaY*400:x.deltaY;j(x.clientX,x.clientY,Math.exp(Math.max(-100,Math.min(100,g))*4e-4))},b=new Map,y=x=>{x.pointerType==="touch"&&b.set(x.pointerId,{x:x.clientX,y:x.clientY})},M=x=>{const g=b.get(x.pointerId);if(g){if(b.size===2){const v=[...b].find(([z])=>z!==x.pointerId)[1],u=Math.hypot(g.x-v.x,g.y-v.y),w=Math.hypot(x.clientX-v.x,x.clientY-v.y);u>4&&w>4&&j((x.clientX+v.x)/2,(x.clientY+v.y)/2,Math.pow(u/w,.6))}g.x=x.clientX,g.y=x.clientY}},p=x=>void b.delete(x.pointerId);return r.addEventListener("wheel",I,{passive:!1}),r.addEventListener("pointerdown",y),window.addEventListener("pointermove",M),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",p),()=>{r.removeEventListener("wheel",I),r.removeEventListener("pointerdown",y),window.removeEventListener("pointermove",M),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p)}},[t,n,o,e]),null}function Ar({onPad:e,box:t,height:n}){const o=F(l=>l.camera),a=F(l=>l.gl),s=h.useMemo(()=>new T,[]),r=h.useRef(""),i=h.useRef(0);return oe(()=>{if(!e)return;i.current++;let l=null;if(t){o.updateMatrixWorld();const d=a.domElement.getBoundingClientRect();let[m,j,I,b]=[1/0,1/0,-1/0,-1/0],y=!1;for(const M of[t.minX,t.maxX])for(const p of[t.minY,t.maxY])for(const x of[0,n]){s.set(M,x,p).applyMatrix4(o.matrixWorldInverse),s.z>-.05&&(y=!0),s.set(M,x,p).project(o);const g=d.left+(s.x+1)/2*d.width,v=d.top+(1-s.y)/2*d.height;[m,j,I,b]=[Math.min(m,g),Math.min(j,v),Math.max(I,g),Math.max(b,v)]}l=y?null:{x0:m,y0:j,x1:I,y1:b}}const f=l?[l.x0,l.y0,l.x1,l.y1].map(Math.round).join(","):"-";f===r.current&&i.current%30||(r.current=f,e(l))}),null}function _r({className:e,color:t,onPick:n,children:o}){const a=h.useRef(null),s=h.useRef(n);s.current=n;const r=!!n;return h.useEffect(()=>{const i=a.current;if(!i||!r)return;let l=null;const f=j=>{j.stopPropagation(),l=j.button===0?{id:j.pointerId,x:j.clientX,y:j.clientY}:null},d=j=>{var I;j.stopPropagation(),l&&l.id===j.pointerId&&Math.hypot(j.clientX-l.x,j.clientY-l.y)<=Ie(j.pointerType)&&((I=s.current)==null||I.call(s)),l=null},m=j=>j.stopPropagation();return i.addEventListener("pointerdown",f),i.addEventListener("pointerup",d),i.addEventListener("click",m),i.addEventListener("dblclick",m),()=>{i.removeEventListener("pointerdown",f),i.removeEventListener("pointerup",d),i.removeEventListener("click",m),i.removeEventListener("dblclick",m)}},[r]),c.jsx("div",{ref:a,className:`${e}${r?" pick":""}`,style:{borderColor:t,pointerEvents:r?"auto":"none",touchAction:"none"},title:r?"눌러서 이 공간 고르기":void 0,children:o})}function Or(e,t,n,o){const a=new Ws(n-e,o-t),s=a.attributes.position,r=a.attributes.uv,i=(e+n)/2,l=(t+o)/2;for(let f=0;f<s.count;f++)r.setXY(f,i+s.getX(f),l-s.getY(f));return a}function Yn(e,t,n,o,a){const s=Vs(a),r=h.useMemo(()=>a?Wn(a,(e+n)/2,(t+o)/2,!0):Or(e,t,n,o),[e,t,n,o,s]);return h.useEffect(()=>()=>r.dispose(),[r]),r}function dn({r:e}){const t=Yn(e.x0,e.y0,e.x1,e.y1,e.poly);return c.jsx("primitive",{object:t,attach:"geometry"})}function fn({x0:e,y0:t,x1:n,y1:o,poly:a,id:s,glow:r,hot:i}){const l=Yn(e,t,n,o,a);return c.jsxs(c.Fragment,{children:[c.jsx("primitive",{object:l,attach:"geometry"}),c.jsx("meshStandardMaterial",{map:Tt("floor",s),roughness:It(qo,s).finish.rough,emissive:r,emissiveIntensity:i?.3:0})]})}function Cr({state:e,showImage:t,hoverRoomId:n,onHoverRoom:o,focusRoom:a,finishes:s,show:r,onMenu:i,onTap:l,labelOnly:f,onPickRoom:d}){const{image:m,scale:j,walls:I,items:b}=e,y=h.useRef(null),M=(u,w)=>{u.stopPropagation();const{clientX:z,clientY:A}=u.nativeEvent,S={x:u.point.x,y:u.point.z};y.current=u.button===0?{x:z,y:A,room:w.kind==="room"?w.id:void 0}:null,Ke(u.nativeEvent,()=>{y.current=null,i({...w,at:S},z,A)})},p=u=>{const w=y.current;y.current=null,w&&Math.hypot(u.nativeEvent.clientX-w.x,u.nativeEvent.clientY-w.y)<5&&l(w.room)},x=h.useMemo(()=>{if(!m)return null;const u=new Is().load(m.src);return u.colorSpace=In,u},[m==null?void 0:m.src]),g=Qe(I,b),v=3;return c.jsxs("group",{children:[c.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[(g.minX+g.maxX)/2,-.002,(g.minY+g.maxY)/2],onPointerDown:u=>M(u,{kind:"floor"}),onPointerUp:p,children:[c.jsx("planeGeometry",{args:[g.maxX-g.minX+v*2,g.maxY-g.minY+v*2]}),c.jsx("meshBasicMaterial",{colorWrite:!1,depthWrite:!1})]}),e.rooms.map(u=>{if(a&&u.id!==a.id)return null;const w=Mn(e.rooms,u),z=P=>!!P&&w.some(O=>O.id===P),A=z(e.selectedId),S=z(n),L=(w.length===1||Oo(w)===u)&&(!f||(u.whole??u.id)===f);return c.jsxs("group",{children:[c.jsx("mesh",{"rotation-x":-Math.PI/2,position:[(u.x0+u.x1)/2,.001,(u.y0+u.y1)/2],onPointerMove:P=>{P.stopPropagation(),S||o(u.id)},onPointerOut:()=>S&&o(null),onPointerDown:P=>M(P,{kind:"room",id:u.id}),onPointerUp:p,children:s?c.jsx(fn,{x0:u.x0,y0:u.y0,x1:u.x1,y1:u.y1,poly:u.poly,id:Co(u,e.finish),glow:Ge(u.type),hot:S}):c.jsxs(c.Fragment,{children:[c.jsx(dn,{r:u}),c.jsx("meshStandardMaterial",{color:Ge(u.type),transparent:!0,opacity:S?.95:.6,emissive:Ge(u.type),emissiveIntensity:S?.35:0})]})}),A&&c.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[(u.x0+u.x1)/2,.004,(u.y0+u.y1)/2],raycast:()=>null,userData:{pickFill:u.id},children:[c.jsx(dn,{r:u}),c.jsx("meshBasicMaterial",{color:Ro,transparent:!0,opacity:.42,depthWrite:!1})]}),(r.rooms||A)&&L&&c.jsx(Pe,{position:[$t(u).x,.05,$t(u).y],center:!0,zIndexRange:[5,0],style:{pointerEvents:"none"},children:c.jsxs(_r,{className:`room3d ${A?"hot":""}`,color:Ge(u.type),onPick:d&&(()=>d(u.id)),children:[Do(u),A&&c.jsxs("small",{children:[w.length>1?"ㄱ자":`${Nt(u.x1-u.x0)}×${Nt(u.y1-u.y0)}`," · ",Wo(e.rooms,u).toFixed(1),"㎡"]})]})})]},u.id)}),s&&!e.rooms.length&&I.length>0&&(()=>{const u=Qe(I,[]);return c.jsx("mesh",{"rotation-x":-Math.PI/2,position:[(u.minX+u.maxX)/2,.001,(u.minY+u.maxY)/2],children:c.jsx(fn,{x0:u.minX,y0:u.minY,x1:u.maxX,y1:u.maxY,id:e.finish.floor,glow:"#000",hot:!1})})})(),m&&x&&t&&c.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[m.pxW*j/2,0,m.pxH*j/2],children:[c.jsx("planeGeometry",{args:[m.pxW*j,m.pxH*j]}),c.jsx("meshStandardMaterial",{map:x,transparent:!0,opacity:.55})]})]})}function Rr(e,t,n){const o=fe/2,a=[...t].sort((i,l)=>i.t-l.t),s=[];let r=-o;for(const i of a){const l=Math.max(r,i.t*e-i.w/2),f=Math.min(e+o,i.t*e+i.w/2);f<=l||(s.push({x0:r,x1:l,y0:0,y1:n}),i.sill>0&&s.push({x0:l,x1:f,y0:0,y1:Math.min(i.sill,n)}),i.sill+i.h<n&&s.push({x0:l,x1:f,y0:i.sill+i.h,y1:n}),r=f)}return s.push({x0:r,x1:e+o,y0:0,y1:n}),s.filter(i=>i.x1-i.x0>.001&&i.y1-i.y0>.001)}function Dr(e,t,n){const o=Math.hypot(t.b.x-t.a.x,t.b.y-t.a.y)||1,a={x:(t.b.x-t.a.x)/o,y:(t.b.y-t.a.y)/o},s=[];for(const r of n)for(const i of[{x:r.x0,y:r.y0},{x:r.x1,y:r.y0},{x:r.x0,y:r.y1},{x:r.x1,y:r.y1}]){const l=i.x-t.a.x,f=i.y-t.a.y,d=l*a.x+f*a.y;Math.abs(-l*a.y+f*a.x)<.5&&d>.02&&d<o-.02&&s.push(d)}return s.sort((r,i)=>r-i),e.flatMap(r=>{const i=[r.x0,...s.filter(l=>l>r.x0+.02&&l<r.x1-.02),r.x1];return i.slice(1).map((l,f)=>({...r,x0:i[f],x1:l}))})}function pn(e,t,n,o){const a=Math.hypot(e.b.x-e.a.x,e.b.y-e.a.y)||1,s={x:(e.b.x-e.a.x)/a,y:(e.b.y-e.a.y)/a},r=Math.min(a-.05,Math.max(.05,t)),i=n*(fe/2+.08),l={x:e.a.x+s.x*r-s.y*i,y:e.a.y+s.y*r+s.x*i},f=bt(l,o.rooms);return f?{wall:Ko(f,o.home),molding:Vo(f)}:Zo(l,o.walls)?{wall:o.home.wall,molding:!0}:{wall:null,molding:!1}}function Wr(e,t){const n=new Ds(e.x1-e.x0,e.y1-e.y0,t),o=n.attributes.position,a=n.attributes.uv,s=(e.x0+e.x1)/2,r=(e.y0+e.y1)/2;for(let i=0;i<o.count;i++){const l=s+o.getX(i),f=r+o.getY(i),d=o.getZ(i),m=Math.floor(i/4);a.setXY(i,m<2?d:l,m===2||m===3?d:f)}return n}const Ne=new Ee({color:"#f7f7f5"}),Tr=new Ee({color:"#ebe9e4",roughness:.95}),Fr=new Ee({color:"#3b3a38",roughness:1});function Ur({p:e,front:t,back:n}){const o=h.useMemo(()=>Wr(e,fe),[e.x0,e.x1,e.y0,e.y1]);h.useEffect(()=>()=>o.dispose(),[o]);const a=s=>s.wall?Zs(s.wall):Tr;return c.jsx("mesh",{position:[(e.x0+e.x1)/2,(e.y0+e.y1)/2,0],geometry:o,material:[Ne,Ne,Ne,Ne,a(t),a(n)]})}function hn({p:e,side:t,kind:n,crown:o,H:a,color:s}){const r=e.x1-e.x0,i=fe/2,l=h.useMemo(()=>{if(n.profile==="gap"||!n.profile.length)return null;const d=new zn(n.profile.map(([m,j])=>new pe(m,j)));return new Rs(d,{depth:r,bevelEnabled:!1})},[n,r]);h.useEffect(()=>()=>l==null?void 0:l.dispose(),[l]);const f=h.useMemo(()=>new Ee({color:s,roughness:.5,side:jn}),[s]);if(h.useEffect(()=>()=>f.dispose(),[f]),n.profile==="gap"){const d=o?.012:.015;return c.jsx("mesh",{position:[(e.x0+e.x1)/2,o?a-d/2:d/2,t*(i+.001)],material:Fr,children:c.jsx("boxGeometry",{args:[r,d,.002]})})}return l?c.jsx("mesh",{geometry:l,material:f,position:[t>0?e.x1:e.x0,o?a:0,t*i],"rotation-y":t>0?-Math.PI/2:Math.PI/2,"scale-y":o?-1:1}):null}function Br({wall:e,height:t,sides:n,openings:o,finish:a,swings:s,doors:r}){const i=e.b.x-e.a.x,l=e.b.y-e.a.y,f=Math.hypot(i,l),d=h.useMemo(()=>{const b=Rr(f,o,t);return a?Dr(b,e,a.rooms).map(y=>{const M=(y.x0+y.x1)/2;return{p:y,front:pn(e,M,1,a),back:pn(e,M,-1,a)}}):b.map(y=>({p:y,front:null,back:null}))},[e,o,t,a==null?void 0:a.home,a==null?void 0:a.rooms,a==null?void 0:a.walls]),m=a&&n?qt(To,a.home.crown):null,j=a?qt(Fo,a.home.base):null,I=a?Uo(a.home.trim):"";return c.jsxs("group",{position:[e.a.x,0,e.a.y],"rotation-y":-Math.atan2(l,i),userData:{wallId:e.id,wallH:t},children:[d.map(({p:b,front:y,back:M},p)=>y&&M?c.jsxs("group",{children:[c.jsx(Ur,{p:b,front:y,back:M}),[[y,1],[M,-1]].map(([x,g])=>x.molding?c.jsxs("group",{children:[j&&b.y0<1e-6&&c.jsx(hn,{p:b,side:g,kind:j,crown:!1,H:t,color:I}),m&&n&&b.y0<n[g>0?0:1]-1e-6&&b.y1>n[g>0?0:1]-1e-6&&c.jsx(hn,{p:b,side:g,kind:m,crown:!0,H:n[g>0?0:1],color:I})]},g):null)]},p):c.jsxs("mesh",{position:[(b.x0+b.x1)/2,(b.y0+b.y1)/2,0],children:[c.jsx("boxGeometry",{args:[b.x1-b.x0,b.y1-b.y0,fe]}),c.jsx("meshStandardMaterial",{color:"#f7f7f5"})]},p)),o.map(b=>{const y=b.t*f,M=Math.min(b.sill+b.h,t);return b.kind==="window"?M>b.sill?c.jsx(ps,{o:b,cx:y,sill:b.sill,top:M,ceil:t},b.id):null:c.jsxs("group",{children:[M<t-.02&&c.jsx(hs,{o:b,cx:y,top:M,paint:Ot(b,r).casing}),b.slide?c.jsx(pr,{o:b,cx:y,top:M,home:r}):c.jsx(fr,{o:b,cx:y,top:M,swing:s[b.id],home:r})]},b.id)})]})}const Yr={gap:"#2b9348",item:"#6b7487",door:"#a07a2c"};function Gr({runs:e,sel:t}){return c.jsx("group",{children:e.map(n=>{const o=!!t&&n.items.includes(t),a=Go(n)+.08,s=(r,i=a)=>{const l=ns(n,r,i);return[l.x,.02,l.y]};return c.jsxs("group",{children:[n.segs.map((r,i)=>c.jsx(an,{points:[s(r.a),s(r.b)],color:r.id&&r.id===t?"#3b6cff":Yr[r.kind],lineWidth:o?3:2,dashed:r.kind==="door",dashSize:.06,gapSize:.04},i)),Ho(n).map(r=>c.jsx(an,{points:[s(r,a-.07),s(r,a+.07)],color:"#6b7487",lineWidth:2},`t${r}`)),n.segs.filter(r=>r.b-r.a>=.12).map((r,i)=>c.jsx(Pe,{position:s((r.a+r.b)/2,a+.13),center:!0,zIndexRange:[8,0],style:{pointerEvents:"none"},children:c.jsx("div",{className:`run3d ${r.kind}${r.id&&r.id===t?" mine":""}`,children:Xo(r)})},`l${i}`))]},n.key)})})}const yt={id:"",t:0};function Hr({item:e,walls:t,openings:n,inside:o,snap:a,status:s,selected:r,dispatch:i,controls:l,seeThrough:f,pick:d,faded:m,show:j,onMenu:I,bare:b,onRotate:y,onRetap:M,onDeco:p,ceil:x}){const g=f||m,v=h.useRef(null),u=h.useRef(null),w=h.useRef(null),z=h.useMemo(()=>new T,[]),A=at[s]||e.paint||e.color,S=e.z??0,L=Bo(e),P=!e.cab&&!e.photo&&As(e.kind);h.useEffect(()=>()=>void(l.current&&!Me.on&&(l.current.enabled=!0)),[l]),h.useEffect(()=>()=>{var _;return(_=w.current)==null?void 0:_.call(w)},[]);const O=()=>{l.current&&!Se.get().eye&&!Me.on&&(l.current.enabled=!0)},H=_=>{var te;if(_.button===2){d&&Object.assign(ts,{id:e.id,t:performance.now()});return}if(!d||(_.stopPropagation(),At(_.pointerId)))return;const{clientX:W,clientY:k}=_.nativeEvent,B={x:_.point.x,y:_.point.z};if(v.current=_.button===0?{id:_.pointerId,x:W,y:k,t:_.nativeEvent.timeStamp,at:B,was:r}:null,p||(i({type:"select",id:e.id}),Ke(_.nativeEvent,()=>{u.current=null,v.current=null,I({kind:"item",id:e.id,at:B},W,k)}),e.fixed||!_.ray.intersectPlane(qe,z)))return;u.current={id:_.pointerId,dx:z.x-e.x,dz:z.z-e.y,sx:W,sy:k,moved:!1},_.target.setPointerCapture(_.pointerId),l.current&&(l.current.enabled=!1),(te=w.current)==null||te.call(w);const Y=re=>{var ie;const se=u.current;!se||re.pointerId===se.id||(se.moved&&i({type:"cancelDrag"}),u.current=null,Ve(),(ie=w.current)==null||ie.call(w),O())};window.addEventListener("pointerdown",Y,!0),w.current=()=>{window.removeEventListener("pointerdown",Y,!0),w.current=null}},C=_=>{const W=u.current;if(!(!W||_.pointerId!==W.id)){if(!W.moved){if(Math.hypot(_.nativeEvent.clientX-W.sx,_.nativeEvent.clientY-W.sy)<Ie(_.nativeEvent.pointerType))return;W.moved=!0,Ve(),i({type:"checkpoint"}),_.ray.intersectPlane(qe,z)&&Object.assign(W,{dx:z.x-e.x,dz:z.z-e.y})}_.ray.intersectPlane(qe,z)&&i({type:"updateItem",id:e.id,patch:es(e,{x:z.x-W.dx,y:z.z-W.dz},{walls:t,openings:n},o,a)})}},R=d&&!p&&!e.fixed&&Yo(e,t),U=_=>{if(!R||!_.shiftKey)return;_.stopPropagation();const W=Math.sign(_.deltaY||_.deltaX),k=W?Qo(e,W*a.step,{walls:t,openings:n},o):null;if(!k)return;const B=performance.now();(yt.id!==e.id||B-yt.t>1e3)&&i({type:"checkpoint"}),Object.assign(yt,{id:e.id,t:B}),i({type:"updateItem",id:e.id,patch:k})},D=_=>{var se,ie,Le,V,he;if(u.current&&_.pointerId!==u.current.id)return;const W=v.current;v.current=null;const{clientX:k,clientY:B,pointerType:Y,timeStamp:te}=_.nativeEvent;W&&W.id===_.pointerId&&!((se=u.current)!=null&&se.moved)&&te-W.t<500&&Math.hypot(k-W.x,B-W.y)<=Ie(Y)&&!bn()&&(p?p(e):M==null||M(e,W.at,{t:te,x:k,y:B,touch:Y!=="mouse"},W.was)),(ie=u.current)!=null&&ie.moved&&i({type:"updateItem",id:e.id,patch:Jo(e,{walls:t,openings:n})});const re=!!u.current;u.current=null,(Le=w.current)==null||Le.call(w),(he=(V=_.target).releasePointerCapture)==null||he.call(V,_.pointerId),re&&O()};return c.jsxs("group",{position:[e.x,0,e.y],"rotation-y":-e.rot,userData:{itemId:e.id},children:[c.jsxs("mesh",{"position-y":S+e.h/2,onPointerDown:H,onPointerMove:C,onPointerUp:D,onWheel:U,children:[c.jsx("boxGeometry",{args:[e.w,e.h,e.d]}),e.cab||P?c.jsx("meshBasicMaterial",{colorWrite:!1,depthWrite:!1},"hit"):c.jsx("meshStandardMaterial",{color:A,emissive:r?"#3b6cff":"#000",emissiveIntensity:r?.25:0,transparent:g,opacity:g?.35:1,depthWrite:!g},g?"see":"solid")]}),c.jsx(ms,{item:e,z:S,seeThrough:g,selected:r}),L&&[-.026,.026].map(_=>c.jsxs("mesh",{position:[_,S+e.h/2,e.d/2+.001],children:[c.jsx("circleGeometry",{args:[.013,18]}),c.jsx("meshBasicMaterial",{color:r?"#3b6cff":"#8d939a"})]},_)),e.cab&&c.jsx("group",{"position-y":S,children:c.jsx(_s,{spec:e.cab,w:e.w,h:e.h,d:e.d,z:S,ceiling:x,warn:at[s]||void 0,selected:r,seeThrough:g})}),P&&c.jsx("group",{"position-y":S,children:c.jsx(Os,{kind:e.kind,w:e.w,h:e.h,d:e.d,color:e.paint||Cs[e.kind],warn:at[s]||void 0,selected:r,seeThrough:g})}),S<.05&&e.h>.05&&!L&&!m&&c.jsx("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,material:xs(),raycast:St,children:c.jsx("planeGeometry",{args:[e.w+.22,e.d+.22]})}),e.clearance>0&&!b&&c.jsxs("mesh",{position:[0,.006,e.d/2+e.clearance/2],"rotation-x":-Math.PI/2,children:[c.jsx("planeGeometry",{args:[e.w,e.clearance]}),c.jsx("meshBasicMaterial",{color:s==="blocked"?"#f5a524":"#508cff",transparent:!0,opacity:.28})]}),r&&d&&!e.fixed&&!L&&!b&&y&&c.jsx(Xr,{item:e,z:S,onRotate:()=>y(e,Math.PI/6)}),(!L&&(j.items||j.dims)||r)&&c.jsx(Pe,{position:[0,S+e.h+.15,0],center:!0,distanceFactor:8,zIndexRange:[10,0],style:{pointerEvents:"none"},children:c.jsxs("div",{className:`tag3d ${s}`,children:[(j.items||r)&&e.name,(j.dims||r)&&c.jsxs("small",{children:[Math.round(e.w*100),"×",Math.round(e.d*100),"×",Math.round(e.h*100)]})]})})]})}function Xr({item:e,z:t,onRotate:n}){const o=h.useRef(null),a=F(i=>i.camera),s=h.useMemo(()=>new T,[]);oe(()=>{const i=o.current,l=i==null?void 0:i.parent;if(!i||!l)return;let f=-1/0,d=[1,-1];for(const m of[-1,1])for(const j of[-1,1])s.set(m*e.w/2,t+e.h,j*e.d/2),l.localToWorld(s).project(a),s.x+s.y>f&&(f=s.x+s.y,d=[m,j]);i.position.set(d[0]*e.w/2,t+e.h,d[1]*e.d/2)});const r=i=>i.stopPropagation();return c.jsx("group",{ref:o,children:c.jsx(Pe,{center:!0,zIndexRange:[20,0],children:c.jsx("button",{className:"rot3d",title:"30° 돌리기 (누를 때마다 시계 방향)","aria-label":"30도 돌리기",onPointerDown:r,onPointerUp:r,onDoubleClick:r,onClick:i=>{i.stopPropagation(),n()},children:"↻"})})})}export{qr as default};
