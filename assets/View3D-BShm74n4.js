import{r as h,c as Rn,s as un,p as Et,W as dn,o as Dn,u as Wn,j as a,b as Qe,a as Tn,d as fn,e as Se,f as ve,g as ht,h as Un,i as Bn,S as et,k as Ae,l as qe,m as Fn,n as Pt,q as $e,t as Yn,v as tt,w as Ve,x as Gn,y as Xn,z as Hn,A as Nn,B as mt,C as kn,D as Rt,E as qn,F as Dt,G as $n,H as Vn,I as Kn,J as Zn,K as Qn,L as Jn,M as pe,N as es,O as pn,P as Wt,Q as Lt,R as xt,T as yt,U as ts,V as ns,X as ss,Y as os,Z as he,_ as Ue,$ as is,a0 as Re,a1 as be,a2 as Ne,a3 as rs,a4 as Tt,a5 as as,a6 as cs,a7 as nt,a8 as ls,a9 as us,aa as Ke,ab as Ut,ac as ds,ad as Bt,ae as Be,af as fs,ag as ps,ah as hs,ai as Ft,aj as gt,ak as ms,al as De,am as hn,an as xs,ao as ys,ap as gs,aq as Fe,ar as vs,as as ws,at as Ms,au as Yt,av as bs,aw as Gt,ax as Xt,ay as js,az as Ss,aA as Es,aB as st,aC as Ps,aD as Ls,aE as zs,aF as Is,aG as As,aH as _s,aI as Ht,aJ as Nt,aK as Os,aL as Cs,aM as Rs,aN as Ds,aO as Ws,aP as Ts,aQ as Us,aR as Bs,aS as Fs,aT as Ys,aU as Gs,aV as Xs,aW as Hs,aX as Ns,aY as ye}from"./index-kss6VZq7.js";import{M as vt,D as ks,C as qs,S as $s,a as Vs,b as Ks,G as Zs,n as wt,O as Qs,W as Js,c as eo,F as to,d as no}from"./Door3D-BGzqfhEO.js";import{u as T,a as se,V as R,_ as Mt,D as mn,b as me,P as xn,O as yn,R as so,I as oo,F as kt,c as bt,d as Ie,W as io,B as zt,S as gn,e as ro,U as qt,f as $t,M as ao,g as _e,L as co,h as vn,i as lo,C as uo,j as wn,k as fo,l as po,m as ho,n as Mn,o as Ee,p as ge,Q as bn,q as mo,r as Je,T as xo,s as yo,t as go,v as vo,w as wo,E as Mo,x as bo,y as jo}from"./CabinetMesh-DVCtoY_U.js";const We=new R,It=new R,So=new R,Vt=new me;function Eo(e,t,n){const s=We.setFromMatrixPosition(e.matrixWorld);s.project(t);const c=n.width/2,o=n.height/2;return[s.x*c+c,-(s.y*o)+o]}function Po(e,t){const n=We.setFromMatrixPosition(e.matrixWorld),s=It.setFromMatrixPosition(t.matrixWorld),c=n.sub(s),o=t.getWorldDirection(So);return c.angleTo(o)>Math.PI/2}function Lo(e,t,n,s){const c=We.setFromMatrixPosition(e.matrixWorld),o=c.clone();o.project(t),Vt.set(o.x,o.y),n.setFromCamera(Vt,t);const i=n.intersectObjects(s,!0);if(i.length){const r=i[0].distance;return c.distanceTo(n.ray.origin)<r}return!0}function zo(e,t){if(t instanceof yn)return t.zoom;if(t instanceof xn){const n=We.setFromMatrixPosition(e.matrixWorld),s=It.setFromMatrixPosition(t.matrixWorld),c=t.fov*Math.PI/180,o=n.distanceTo(s);return 1/(2*Math.tan(c/2)*o)}else return 1}function Io(e,t,n){if(t instanceof xn||t instanceof yn){const s=We.setFromMatrixPosition(e.matrixWorld),c=It.setFromMatrixPosition(t.matrixWorld),o=s.distanceTo(c),i=(n[1]-n[0])/(t.far-t.near),r=n[1]-i*t.far;return Math.round(i*o+r)}}const jt=e=>Math.abs(e)<1e-10?0:e;function jn(e,t,n=""){let s="matrix3d(";for(let c=0;c!==16;c++)s+=jt(t[c]*e.elements[c])+(c!==15?",":")");return n+s}const Ao=(e=>t=>jn(t,e))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),_o=(e=>(t,n)=>jn(t,e(n),"translate(-50%,-50%)"))(e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1]);function Oo(e){return e&&typeof e=="object"&&"current"in e}const Oe=h.forwardRef(({children:e,eps:t=.001,style:n,className:s,prepend:c,center:o,fullscreen:i,portal:r,distanceFactor:l,sprite:f=!1,transform:d=!1,occlude:m,onOcclude:M,castShadow:v,receiveShadow:L,material:g,geometry:b,zIndexRange:p=[16777271,0],calculatePosition:x=Eo,as:w="div",wrapperClass:y,pointerEvents:u="auto",...j},_)=>{const{gl:A,camera:S,scene:I,size:z,raycaster:C,events:Y,viewport:O}=T(),[D]=h.useState(()=>document.createElement(w)),B=h.useRef(),E=h.useRef(null),W=h.useRef(0),k=h.useRef([0,0]),G=h.useRef(null),J=h.useRef(null),X=(r==null?void 0:r.current)||Y.connected||A.domElement.parentNode,F=h.useRef(null),ne=h.useRef(!1),oe=h.useMemo(()=>m&&m!=="blending"||Array.isArray(m)&&m.length&&Oo(m[0]),[m]);h.useLayoutEffect(()=>{const V=A.domElement;m&&m==="blending"?(V.style.zIndex=`${Math.floor(p[0]/2)}`,V.style.position="absolute",V.style.pointerEvents="none"):(V.style.zIndex=null,V.style.position=null,V.style.pointerEvents=null)},[m]),h.useLayoutEffect(()=>{if(E.current){const V=B.current=Rn(D);if(I.updateMatrixWorld(),d)D.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const U=x(E.current,S,z);D.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${U[0]}px,${U[1]}px,0);transform-origin:0 0;`}return X&&(c?X.prepend(D):X.appendChild(D)),()=>{X&&X.removeChild(D),V.unmount()}}},[X,d]),h.useLayoutEffect(()=>{y&&(D.className=y)},[y]);const xe=h.useMemo(()=>d?{position:"absolute",top:0,left:0,width:z.width,height:z.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:o?"translate3d(-50%,-50%,0)":"none",...i&&{top:-z.height/2,left:-z.width/2,width:z.width,height:z.height},...n},[n,o,i,z,d]),Pe=h.useMemo(()=>({position:"absolute",pointerEvents:u}),[u]);h.useLayoutEffect(()=>{if(ne.current=!1,d){var V;(V=B.current)==null||V.render(h.createElement("div",{ref:G,style:xe},h.createElement("div",{ref:J,style:Pe},h.createElement("div",{ref:_,className:s,style:n,children:e}))))}else{var U;(U=B.current)==null||U.render(h.createElement("div",{ref:_,style:xe,className:s,children:e}))}});const $=h.useRef(!0);se(V=>{if(E.current){S.updateMatrixWorld(),E.current.updateWorldMatrix(!0,!1);const U=d?k.current:x(E.current,S,z);if(d||Math.abs(W.current-S.zoom)>t||Math.abs(k.current[0]-U[0])>t||Math.abs(k.current[1]-U[1])>t){const H=Po(E.current,S);let ie=!1;oe&&(Array.isArray(m)?ie=m.map(re=>re.current):m!=="blending"&&(ie=[I]));const ae=$.current;if(ie){const re=Lo(E.current,S,C,ie);$.current=re&&!H}else $.current=!H;ae!==$.current&&(M?M(!$.current):D.style.display=$.current?"block":"none");const we=Math.floor(p[0]/2),Te=m?oe?[p[0],we]:[we-1,0]:p;if(D.style.zIndex=`${Io(E.current,S,Te)}`,d){const[re,P]=[z.width/2,z.height/2],N=S.projectionMatrix.elements[5]*P,{isOrthographicCamera:q,top:ee,left:te,bottom:ce,right:ze}=S,le=Ao(S.matrixWorldInverse),Ce=q?`scale(${N})translate(${jt(-(ze+te)/2)}px,${jt((ee+ce)/2)}px)`:`translateZ(${N}px)`;let Me=E.current.matrixWorld;f&&(Me=S.matrixWorldInverse.clone().transpose().copyPosition(Me).scale(E.current.scale),Me.elements[3]=Me.elements[7]=Me.elements[11]=0,Me.elements[15]=1),D.style.width=z.width+"px",D.style.height=z.height+"px",D.style.perspective=q?"":`${N}px`,G.current&&J.current&&(G.current.style.transform=`${Ce}${le}translate(${re}px,${P}px)`,J.current.style.transform=_o(Me,1/((l||10)/400)))}else{const re=l===void 0?1:zo(E.current,S)*l;D.style.transform=`translate3d(${U[0]}px,${U[1]}px,0) scale(${re})`}k.current=U,W.current=S.zoom}}if(!oe&&F.current&&!ne.current)if(d){if(G.current){const U=G.current.children[0];if(U!=null&&U.clientWidth&&U!=null&&U.clientHeight){const{isOrthographicCamera:H}=S;if(H||b)j.scale&&(Array.isArray(j.scale)?j.scale instanceof R?F.current.scale.copy(j.scale.clone().divideScalar(1)):F.current.scale.set(1/j.scale[0],1/j.scale[1],1/j.scale[2]):F.current.scale.setScalar(1/j.scale));else{const ie=(l||10)/400,ae=U.clientWidth*ie,we=U.clientHeight*ie;F.current.scale.set(ae,we,1)}ne.current=!0}}}else{const U=D.children[0];if(U!=null&&U.clientWidth&&U!=null&&U.clientHeight){const H=1/O.factor,ie=U.clientWidth*H,ae=U.clientHeight*H;F.current.scale.set(ie,ae,1),ne.current=!0}F.current.lookAt(V.camera.position)}});const Le=h.useMemo(()=>({vertexShader:d?void 0:`
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
      `}),[d]);return h.createElement("group",Mt({},j,{ref:E}),m&&!oe&&h.createElement("mesh",{castShadow:v,receiveShadow:L,ref:F},b||h.createElement("planeGeometry",null),g||h.createElement("shaderMaterial",{side:mn,vertexShader:Le.vertexShader,fragmentShader:Le.fragmentShader})))}),Sn=parseInt(so.replace(/\D+/g,"")),En=Sn>=125?"uv1":"uv2",Kt=new zt,Ye=new R;class At extends oo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new kt(t,3)),this.setAttribute("uv",new kt(n,2))}applyMatrix4(t){const n=this.attributes.instanceStart,s=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(t),s.applyMatrix4(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const s=new bt(n,6,1);return this.setAttribute("instanceStart",new Ie(s,3,0)),this.setAttribute("instanceEnd",new Ie(s,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t,n=3){let s;t instanceof Float32Array?s=t:Array.isArray(t)&&(s=new Float32Array(t));const c=new bt(s,n*2,1);return this.setAttribute("instanceColorStart",new Ie(c,n,0)),this.setAttribute("instanceColorEnd",new Ie(c,n,n)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new io(t.geometry)),this}fromLineSegments(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;t!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Kt.setFromBufferAttribute(n),this.boundingBox.union(Kt))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0&&n!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let c=0;for(let o=0,i=t.count;o<i;o++)Ye.fromBufferAttribute(t,o),c=Math.max(c,s.distanceToSquared(Ye)),Ye.fromBufferAttribute(n,o),c=Math.max(c,s.distanceToSquared(Ye));this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}class Pn extends At{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const n=t.length-3,s=new Float32Array(2*n);for(let c=0;c<n;c+=3)s[2*c]=t[c],s[2*c+1]=t[c+1],s[2*c+2]=t[c+2],s[2*c+3]=t[c+3],s[2*c+4]=t[c+4],s[2*c+5]=t[c+5];return super.setPositions(s),this}setColors(t,n=3){const s=t.length-n,c=new Float32Array(2*s);if(n===3)for(let o=0;o<s;o+=n)c[2*o]=t[o],c[2*o+1]=t[o+1],c[2*o+2]=t[o+2],c[2*o+3]=t[o+3],c[2*o+4]=t[o+4],c[2*o+5]=t[o+5];else for(let o=0;o<s;o+=n)c[2*o]=t[o],c[2*o+1]=t[o+1],c[2*o+2]=t[o+2],c[2*o+3]=t[o+3],c[2*o+4]=t[o+4],c[2*o+5]=t[o+5],c[2*o+6]=t[o+6],c[2*o+7]=t[o+7];return super.setColors(c,n),this}fromLine(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}}class _t extends ro{constructor(t){super({type:"LineMaterial",uniforms:qt.clone(qt.merge([$t.common,$t.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new me(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${Sn>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(n){this.uniforms.diffuse.value=n}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(n){n===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(n){this.uniforms.linewidth.value=n}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(n){!!n!="USE_DASH"in this.defines&&(this.needsUpdate=!0),n===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(n){this.uniforms.dashScale.value=n}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(n){this.uniforms.dashSize.value=n}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(n){this.uniforms.dashOffset.value=n}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(n){this.uniforms.gapSize.value=n}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(n){this.uniforms.resolution.value.copy(n)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(n){!!n!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),n===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}const ot=new _e,Zt=new R,Qt=new R,K=new _e,Z=new _e,ue=new _e,it=new R,rt=new vn,Q=new co,Jt=new R,Ge=new zt,Xe=new gn,de=new _e;let fe,je;function en(e,t,n){return de.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),de.multiplyScalar(1/de.w),de.x=je/n.width,de.y=je/n.height,de.applyMatrix4(e.projectionMatrixInverse),de.multiplyScalar(1/de.w),Math.abs(Math.max(de.x,de.y))}function Co(e,t){const n=e.matrixWorld,s=e.geometry,c=s.attributes.instanceStart,o=s.attributes.instanceEnd,i=Math.min(s.instanceCount,c.count);for(let r=0,l=i;r<l;r++){Q.start.fromBufferAttribute(c,r),Q.end.fromBufferAttribute(o,r),Q.applyMatrix4(n);const f=new R,d=new R;fe.distanceSqToSegment(Q.start,Q.end,d,f),d.distanceTo(f)<je*.5&&t.push({point:d,pointOnLine:f,distance:fe.origin.distanceTo(d),object:e,face:null,faceIndex:r,uv:null,[En]:null})}}function Ro(e,t,n){const s=t.projectionMatrix,o=e.material.resolution,i=e.matrixWorld,r=e.geometry,l=r.attributes.instanceStart,f=r.attributes.instanceEnd,d=Math.min(r.instanceCount,l.count),m=-t.near;fe.at(1,ue),ue.w=1,ue.applyMatrix4(t.matrixWorldInverse),ue.applyMatrix4(s),ue.multiplyScalar(1/ue.w),ue.x*=o.x/2,ue.y*=o.y/2,ue.z=0,it.copy(ue),rt.multiplyMatrices(t.matrixWorldInverse,i);for(let M=0,v=d;M<v;M++){if(K.fromBufferAttribute(l,M),Z.fromBufferAttribute(f,M),K.w=1,Z.w=1,K.applyMatrix4(rt),Z.applyMatrix4(rt),K.z>m&&Z.z>m)continue;if(K.z>m){const w=K.z-Z.z,y=(K.z-m)/w;K.lerp(Z,y)}else if(Z.z>m){const w=Z.z-K.z,y=(Z.z-m)/w;Z.lerp(K,y)}K.applyMatrix4(s),Z.applyMatrix4(s),K.multiplyScalar(1/K.w),Z.multiplyScalar(1/Z.w),K.x*=o.x/2,K.y*=o.y/2,Z.x*=o.x/2,Z.y*=o.y/2,Q.start.copy(K),Q.start.z=0,Q.end.copy(Z),Q.end.z=0;const g=Q.closestPointToPointParameter(it,!0);Q.at(g,Jt);const b=lo.lerp(K.z,Z.z,g),p=b>=-1&&b<=1,x=it.distanceTo(Jt)<je*.5;if(p&&x){Q.start.fromBufferAttribute(l,M),Q.end.fromBufferAttribute(f,M),Q.start.applyMatrix4(i),Q.end.applyMatrix4(i);const w=new R,y=new R;fe.distanceSqToSegment(Q.start,Q.end,y,w),n.push({point:y,pointOnLine:w,distance:fe.origin.distanceTo(y),object:e,face:null,faceIndex:M,uv:null,[En]:null})}}}class Ln extends ao{constructor(t=new At,n=new _t({color:Math.random()*16777215})){super(t,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,n=t.attributes.instanceStart,s=t.attributes.instanceEnd,c=new Float32Array(2*n.count);for(let i=0,r=0,l=n.count;i<l;i++,r+=2)Zt.fromBufferAttribute(n,i),Qt.fromBufferAttribute(s,i),c[r]=r===0?0:c[r-1],c[r+1]=c[r]+Zt.distanceTo(Qt);const o=new bt(c,2,1);return t.setAttribute("instanceDistanceStart",new Ie(o,1,0)),t.setAttribute("instanceDistanceEnd",new Ie(o,1,1)),this}raycast(t,n){const s=this.material.worldUnits,c=t.camera;c===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const o=t.params.Line2!==void 0&&t.params.Line2.threshold||0;fe=t.ray;const i=this.matrixWorld,r=this.geometry,l=this.material;je=l.linewidth+o,r.boundingSphere===null&&r.computeBoundingSphere(),Xe.copy(r.boundingSphere).applyMatrix4(i);let f;if(s)f=je*.5;else{const m=Math.max(c.near,Xe.distanceToPoint(fe.origin));f=en(c,m,l.resolution)}if(Xe.radius+=f,fe.intersectsSphere(Xe)===!1)return;r.boundingBox===null&&r.computeBoundingBox(),Ge.copy(r.boundingBox).applyMatrix4(i);let d;if(s)d=je*.5;else{const m=Math.max(c.near,Ge.distanceToPoint(fe.origin));d=en(c,m,l.resolution)}Ge.expandByScalar(d),fe.intersectsBox(Ge)!==!1&&(s?Co(this,n):Ro(this,c,n))}onBeforeRender(t){const n=this.material.uniforms;n&&n.resolution&&(t.getViewport(ot),this.material.uniforms.resolution.value.set(ot.z,ot.w))}}class Do extends Ln{constructor(t=new Pn,n=new _t({color:Math.random()*16777215})){super(t,n),this.isLine2=!0,this.type="Line2"}}const tn=h.forwardRef(function({points:t,color:n=16777215,vertexColors:s,linewidth:c,lineWidth:o,segments:i,dashed:r,...l},f){var d,m;const M=T(p=>p.size),v=h.useMemo(()=>i?new Ln:new Do,[i]),[L]=h.useState(()=>new _t),g=(s==null||(d=s[0])==null?void 0:d.length)===4?4:3,b=h.useMemo(()=>{const p=i?new At:new Pn,x=t.map(w=>{const y=Array.isArray(w);return w instanceof R||w instanceof _e?[w.x,w.y,w.z]:w instanceof me?[w.x,w.y,0]:y&&w.length===3?[w[0],w[1],w[2]]:y&&w.length===2?[w[0],w[1],0]:w});if(p.setPositions(x.flat()),s){n=16777215;const w=s.map(y=>y instanceof uo?y.toArray():y);p.setColors(w.flat(),g)}return p},[t,i,s,g]);return h.useLayoutEffect(()=>{v.computeLineDistances()},[t,v]),h.useLayoutEffect(()=>{r?L.defines.USE_DASH="":delete L.defines.USE_DASH,L.needsUpdate=!0},[r,L]),h.useEffect(()=>()=>{b.dispose(),L.dispose()},[b]),h.createElement("primitive",Mt({object:v,ref:f},l),h.createElement("primitive",{object:b,attach:"geometry"}),h.createElement("primitive",Mt({object:L,attach:"material",color:n,vertexColors:!!s,resolution:[M.width,M.height],linewidth:(m=c??o)!==null&&m!==void 0?m:1,dashed:r,transparent:g===4},l)))});function zn(e,t,n,s){const c=new wn(e.map(l=>new me(l.x-t,s?n-l.y:l.y-n))),o=new fo(c),i=o.attributes.position,r=o.attributes.uv;for(let l=0;l<i.count;l++)r.setXY(l,t+i.getX(l),s?n-i.getY(l):n+i.getY(l));return o}const Wo=e=>e?e.map(t=>`${t.x.toFixed(3)},${t.y.toFixed(3)}`).join(";"):"";function In(e,t,n){const s=new po(e);return s.wrapS=s.wrapT=ho,s.repeat.set(1/t.w,1/t.h),n&&(s.colorSpace=Mn),s.anisotropy=8,s}const Ze=new Map;function Ot(e,t){const n=`${e}|${t}`;let s=Ze.get(n);if(!s){const c=un(e,t);s=In(c.canvas,c,!0),Ze.set(n,s)}return s}const To={coat:2.2,paper:1,flower:.6,silk:.8,paint:1,bathwall:.6},St=new Map;function An(e,t){var s;const n=un("wall",t);(s=e.bumpMap)==null||s.dispose(),e.bumpMap=n.bump?In(n.bump,n,!1):null,e.bumpScale=To[Et(dn,t).finish.key]??1}function Uo(e){let t=St.get(e);return t||(t=new Ee({map:Ot("wall",e),roughness:Et(dn,e).finish.rough}),An(t,e),St.set(e,t)),t}Dn((e,t)=>{const n=`${e}|${t}`,s=Ze.get(n);if(!s)return;Ze.delete(n);const c=Ot(e,t);setTimeout(()=>s.dispose(),2e3);const o=e==="wall"?St.get(t):void 0;o&&(o.map=c,An(o,t),o.needsUpdate=!0)});const at=new ge(new R(0,1,0),0),nn=new R(0,1,0),ct=new R,Bo="#4b5563",lt="#8d6e52";function ut({a:e,b:t,r:n,color:s}){const{mid:c,q:o,L:i}=h.useMemo(()=>{const r=new R(...e),l=new R(...t),f=l.clone().sub(r),d=f.length();return{mid:r.add(l).multiplyScalar(.5),q:new bn().setFromUnitVectors(nn,d>1e-6?f.normalize():nn),L:d}},[...e,...t]);return a.jsxs("mesh",{position:c,quaternion:o,children:[a.jsx("capsuleGeometry",{args:[n,Math.max(.001,i),4,10]}),a.jsx("meshStandardMaterial",{color:s,roughness:.8})]})}const _n=h.memo(function({age:t,sex:n,pose:s,seat:c,chair:o}){const i=Qe(t,n),r=fn(t).color,l=Yn(t),f=i.shoulderW*.22,d=i.shoulderW*.16,m=i.shoulderW*.1,M=i.depth/2,v=s==="stand"?0:c,L=s==="stand"?i.H:v+i.sitH,g=L-i.head/2,b=L-i.head*1.3,p=s==="stand"?i.leg:v+M*.8,x=i.shoulderW/2-m;let w,y;if(s==="stand")w=[-1,1].flatMap(u=>[[[u*f,d,0],[u*f,i.leg,0]]]),y=[-1,1].map(u=>[u*(x+m*.6),b-i.arm+m,0]);else if(s==="sit"){const u=v+d,j=Math.max(u,i.shin),_=Math.sqrt(Math.max(.01,i.thigh**2-(j-u)**2)),A=Math.max(d,j-i.shin+d);w=[-1,1].flatMap(S=>[[[S*f,u,0],[S*f,j,_]],[[S*f,j,_],[S*f,A,_+.04]]]),y=[-1,1].map(S=>[S*(f+m*.5),u+d+m,_*.6])}else{const u=f+i.thigh*.45,j=i.thigh*.8;w=[-1,1].flatMap(_=>[[[_*f,d,0],[_*u,d,j]],[[_*u,d,j],[-_*f,d,i.thigh*.35]]]),y=[-1,1].map(_=>[_*(f+i.thigh*.35),d*2+m,i.thigh*.6])}return a.jsxs("group",{children:[w.map(([u,j],_)=>a.jsx(ut,{a:u,b:j,r:d,color:Bo},_)),a.jsxs("mesh",{position:[0,(p+b)/2,0],scale:[i.shoulderW*.46/M,1,1],children:[a.jsx("capsuleGeometry",{args:[M,Math.max(.01,b-p-M),4,12]}),a.jsx("meshStandardMaterial",{color:r,roughness:.85})]}),[-1,1].map((u,j)=>a.jsx(ut,{a:[u*x,b-m*.5,0],b:y[j],r:m,color:r},j)),y.map((u,j)=>a.jsxs("mesh",{position:u,children:[a.jsx("sphereGeometry",{args:[m*1.1,10,8]}),a.jsx("meshStandardMaterial",{color:et})]},j)),a.jsx(ut,{a:[0,b,0],b:[0,g,0],r:i.head*.17,color:et}),a.jsxs("mesh",{position:[0,g,0],children:[a.jsx("sphereGeometry",{args:[i.head/2,20,16]}),a.jsx("meshStandardMaterial",{color:et,roughness:.7})]}),a.jsxs("mesh",{position:[0,g+i.head*.06,-i.head*.06],children:[a.jsx("sphereGeometry",{args:[i.head*.52,20,16]}),a.jsx("meshStandardMaterial",{color:l,roughness:.9})]}),n==="f"&&a.jsxs("mesh",{position:[0,g-i.head*.12,-i.head*.18],children:[a.jsx("sphereGeometry",{args:[i.head*.42,16,12]}),a.jsx("meshStandardMaterial",{color:l,roughness:.9})]}),[-1,1].map(u=>a.jsxs("mesh",{position:[u*i.head*.18,g,i.head*.47],children:[a.jsx("sphereGeometry",{args:[i.head*.06,8,6]}),a.jsx("meshBasicMaterial",{color:"#222"})]},u)),o&&a.jsx(Fo,{seat:v})]})});function Fo({seat:e}){return a.jsxs("group",{position:[0,0,-.04],children:[a.jsxs("mesh",{position:[0,e-.02,0],children:[a.jsx("boxGeometry",{args:[.42,.04,.42]}),a.jsx("meshStandardMaterial",{color:lt})]}),a.jsxs("mesh",{position:[0,e+.24,-.42/2+.02],children:[a.jsx("boxGeometry",{args:[.42,.44,.04]}),a.jsx("meshStandardMaterial",{color:lt})]}),[-1,1].flatMap(n=>[-1,1].map(s=>a.jsxs("mesh",{position:[n*(.42/2-.03),(e-.04)/2,s*(.42/2-.03)],children:[a.jsx("boxGeometry",{args:[.03,e-.04,.03]}),a.jsx("meshStandardMaterial",{color:lt})]},`${n}${s}`)))]})}function Yo({world:e,dispatch:t,controls:n,onMenu:s,still:c,wide:o}){const{list:i,active:r,eye:l}=Wn();return a.jsxs(a.Fragment,{children:[i.map(f=>a.jsx(Go,{p:f,active:f.id===r,hidden:f.id===l,world:e,dispatch:t,controls:n,onMenu:s,still:c},f.id)),a.jsx(Xo,{controls:n}),a.jsx(Ho,{controls:n,wide:o??null})]})}function Go({p:e,active:t,hidden:n,world:s,dispatch:c,controls:o,onMenu:i,still:r}){const l=Qe(e.age,e.sex),f=h.useRef(null),d=h.useMemo(()=>new R,[]),m=e.pose==="stand"?l.H:e.seat+l.sitH,M=g=>{if(g.button===2)return;if(g.stopPropagation(),r){const{clientX:x,clientY:w}=g.nativeEvent;Pt(g.pointerId)||$e(g.nativeEvent,()=>i({kind:"person",id:e.id,at:{x:e.x,y:e.y}},x,w));return}c({type:"select",id:null}),Se.set({active:e.id});const{clientX:b,clientY:p}=g.nativeEvent;$e(g.nativeEvent,()=>{f.current=null,i({kind:"person",id:e.id,at:{x:e.x,y:e.y}},b,p)}),g.ray.intersectPlane(at,d)&&(f.current={dx:d.x-e.x,dz:d.z-e.y,sx:b,sy:p,moved:!1},g.target.setPointerCapture(g.pointerId),o.current&&(o.current.enabled=!1))},v=g=>{const b=f.current;if(b){if(!b.moved){if(Math.hypot(g.nativeEvent.clientX-b.sx,g.nativeEvent.clientY-b.sy)<Ae(g.nativeEvent.pointerType))return;b.moved=!0,qe(),g.ray.intersectPlane(at,d)&&Object.assign(b,{dx:d.x-e.x,dz:d.z-e.y})}g.ray.intersectPlane(at,d)&&Fn(e,{x:d.x-b.dx,y:d.z-b.dz},s)}},L=g=>{var b,p;f.current=null,(p=(b=g.target).releasePointerCapture)==null||p.call(b,g.pointerId),o.current&&!Se.get().eye&&!ve.on&&(o.current.enabled=!0)};return n?null:a.jsxs("group",{position:[e.x,0,e.y],"rotation-y":-e.rot,onPointerDown:M,onPointerMove:v,onPointerUp:L,children:[a.jsx(_n,{age:e.age,sex:e.sex,pose:e.pose,seat:e.seat,chair:!!e.chair}),a.jsxs("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,children:[a.jsx("circleGeometry",{args:[l.r*1.1,24]}),a.jsx("meshBasicMaterial",{color:"#000",transparent:!0,opacity:.12,depthWrite:!1})]}),t&&a.jsxs("mesh",{"position-y":.008,"rotation-x":-Math.PI/2,children:[a.jsx("ringGeometry",{args:[l.r+.04,l.r+.08,40]}),a.jsx("meshBasicMaterial",{color:"#3b6cff"})]}),t&&a.jsx(Oe,{position:[0,m+.16,0],center:!0,distanceFactor:8,zIndexRange:[13,0],style:{pointerEvents:"none"},children:a.jsxs("div",{className:"tag3d person on",style:{borderColor:fn(e.age).color},children:[Tn(e)," ",Math.round(l.H*100),"cm",a.jsx("small",{children:e.pose==="stand"?`눈높이 ${Math.round(l.eye*100)}`:`앉은 눈높이 ${Math.round((e.seat+l.sitH-l.head/2)*100)}`})]})})]})}function Xo({controls:e}){const t=T(n=>n.camera);return h.useEffect(()=>()=>void(tt.value=0),[]),se(()=>{var s;const n=(s=e.current)==null?void 0:s.target;!n||Se.get().eye||(ve.on?(t.getWorldDirection(ct),tt.value=Math.atan2(-ct.x,-ct.z)):tt.value=Math.atan2(t.position.x-n.x,t.position.z-n.z))}),null}function Ho({controls:e,wide:t}){const n=ht(l=>l.eye),s=T(l=>l.camera),c=T(l=>l.size),o=t==null?70:Un(c.width/Math.max(1,c.height),t),i=h.useRef(o);i.current=o,h.useEffect(()=>{!n||s.fov===o||(s.fov=o,s.updateProjectionMatrix())},[o]);const r=h.useRef(null);return h.useEffect(()=>{if(!n)return;const l=e.current,f={pos:s.position.clone(),target:l==null?void 0:l.target.clone(),fov:s.fov};return r.current=n,l&&(l.enabled=!1),s.fov=i.current,s.updateProjectionMatrix(),()=>{r.current=null,s.position.copy(f.pos),s.fov=f.fov,s.updateProjectionMatrix(),l&&f.target&&(l.target.copy(f.target),l.enabled=!0,l.update())}},[n]),se(()=>{if(!n||r.current!==n)return;const l=Se.get().list.find(M=>M.id===n);if(!l)return;const f=Qe(l.age,l.sex),d=l.pose==="stand"?f.eye:l.seat+f.sitH-f.head/2,m=Bn(l.rot);s.position.set(l.x+m.x*f.head*.3,d,l.y+m.y*f.head*.3),s.lookAt(l.x+m.x*3,d-.4,l.y+m.y*3)}),null}function No({controls:e,world:t}){const n=T(L=>L.camera),s=T(L=>L.size),c=T(L=>L.setEvents),o=Ve(L=>L.closed),i=Gn(),r=h.useMemo(()=>Xn(t,o),[t,o]),l=h.useRef(r);l.current=r;const f=h.useMemo(()=>Hn(r.walls,r.openings),[r]),d=h.useRef(t);d.current=t;const m=h.useRef(1),M=h.useRef({phase:0,amp:0}),v=h.useRef(!1);return h.useEffect(()=>{const L=e.current,g={pos:n.position.clone(),quat:n.quaternion.clone(),target:L==null?void 0:L.target.clone(),fov:n.fov,near:n.near};return v.current=!0,L&&(L.enabled=!1),c({enabled:!1}),n.near=.05,n.rotation.order="YXZ",()=>{v.current=!1,c({enabled:!0}),n.rotation.order="XYZ",n.position.copy(g.pos),n.quaternion.copy(g.quat),n.fov=g.fov,n.near=g.near,n.updateProjectionMatrix(),L&&g.target&&(L.target.copy(g.target),L.enabled=!0,L.update())}},[]),h.useEffect(()=>{n.fov=Nn(s.width/Math.max(1,s.height),i),n.updateProjectionMatrix()},[s.width,s.height,i]),se((L,g)=>{if(!v.current)return;const b=Math.min(g,.1),p=mt,x=kn;p.yaw+=x.turn*1.8*b;const w=x.kf-x.jy,y=x.ks+x.jx,u=Math.hypot(w,y);let j=0;if(u>.08){Rt.get().pose!=="stand"&&qn();const S=Math.hypot(x.jx,x.jy),I=S>.08?x.jrun?2.6:1.4*Math.min(1,S/.9):x.run?2.6:1.4,z=Dt(p.yaw),C={x:-z.y,y:z.x},Y=Math.max(1,Math.ceil(I*b/.08)),O=I*b/u/Y;for(let D=0;D<Y;D++){const B={x:p.x+(z.x*w+C.x*y)*O,y:p.y+(z.y*w+C.y*y)*O},E=$n(Vn(),B,l.current,pn),W=Math.hypot(E.x-p.x,E.y-p.y);if(j+=W,p.x=E.x,p.y=E.y,W<1e-6)break}}(p.vz!==0||p.air>0)&&(p.air+=p.vz*b-4.9*b*b,p.vz-=9.8*b,p.air<=0&&(p.air=p.vz=0));const _=M.current;_.amp+=((j>1e-4&&p.air===0?1:0)-_.amp)*Math.min(1,b*6),_.phase+=j/.7*Math.PI*2,p.eye+=(Kn()-p.eye)*(1-Math.exp(-b*7));const A=Dt(p.yaw);if(p.cam+=(p.zoom-p.cam)*(1-Math.exp(-b*10)),Math.abs(p.zoom-p.cam)<.003&&(p.cam=p.zoom),p.cam<.02){p.shown=0;const S=Rt.get().pose==="stand"?.06:.08;n.position.set(p.x+A.x*S,p.eye+p.air+Math.cos(_.phase)*.012*_.amp,p.y+A.y*S)}else{const S=Math.cos(p.pitch),I={x:A.x*S,y:Math.sin(p.pitch),z:A.y*S},z=p.eye+p.air+.12;let C=p.cam;I.y<-.001&&(C=Math.min(C,(pe-.12-z)/-I.y)),I.y>.001&&(C=Math.min(C,(z-.15)/I.y)),S>.001&&(C=Math.min(C,Zn({x:p.x,y:p.y},{x:-A.x,y:-A.y},C*S,f)/S)),C=Math.max(0,C),p.shown=C<p.shown?C:p.shown+(C-p.shown)*(1-Math.exp(-b*5)),n.position.set(p.x-I.x*p.shown,z-I.y*p.shown,p.y-I.z*p.shown)}n.rotation.set(p.pitch,p.yaw,0,"YXZ"),m.current+=b,m.current>.2&&(m.current=0,Qn(d.current.rooms),Jn(d.current))}),null}function ko(){const e=h.useRef(null),{h:t,pose:n}=es(),s=t/100/Qe("adult","m").H;return se(()=>{const c=e.current;if(!c)return;const o=mt;c.visible=o.shown>.45,c.position.set(o.x,o.air,o.y),c.rotation.y=o.yaw+Math.PI}),a.jsxs("group",{ref:e,visible:!1,userData:{noAim:!0,noShadow:!0},children:[a.jsx("group",{scale:s,children:a.jsx(_n,{age:"adult",sex:"m",pose:n,seat:mt.seat/s,chair:!1})}),a.jsxs("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,children:[a.jsx("circleGeometry",{args:[pn*1.1,24]}),a.jsx("meshBasicMaterial",{color:"#000",transparent:!0,opacity:.12,depthWrite:!1})]})]})}const qo=12;function $o(){const e=T(r=>r.camera),t=T(r=>r.scene),n=T(r=>r.gl),s=h.useMemo(()=>{const r=new Je;return r.far=qo,r},[]),c=h.useMemo(()=>new me,[]),o=h.useRef(0),i=(r,l)=>{e.updateMatrixWorld(),c.set(r,l),s.setFromCamera(c,e);for(const f of s.intersectObjects(t.children,!0)){if(!f.object.isMesh)continue;let d=null,m=!1;for(let M=f.object;M;M=M.parent){if(!M.visible||M.userData.noAim){m=!0;break}!d&&typeof M.userData.itemId=="string"&&(d=M.userData.itemId)}if(!m)return d}return null};return h.useEffect(()=>(Ue.center=()=>i(0,0),Ue.client=(r,l)=>{const f=n.domElement.getBoundingClientRect();return!f.width||!f.height?null:i((r-f.left)/f.width*2-1,-((l-f.top)/f.height)*2+1)},()=>{Ue.center=Ue.client=null,Wt(null)})),se((r,l)=>{o.current+=l,!(o.current<.1)&&(o.current=0,Wt(i(0,0)))}),null}const Vo=new Ee({color:"#f6f5f1",emissive:"#f6f5f1",emissiveIntensity:.42,roughness:1}),Ko=new mo({color:"#fffaf0"});function Zo({rooms:e,walls:t}){const n=h.useMemo(()=>{if(e.length)return e.map(r=>({id:r.id,x0:r.x0,y0:r.y0,x1:r.x1,y1:r.y1,poly:r.poly}));if(!t.length)return[];const o=t.flatMap(r=>[r.a.x,r.b.x]),i=t.flatMap(r=>[r.a.y,r.b.y]);return[{id:"all",x0:Math.min(...o),y0:Math.min(...i),x1:Math.max(...o),y1:Math.max(...i),poly:void 0}]},[e,t]),s=h.useMemo(()=>new Map(n.filter(o=>o.poly).map(o=>[o.id,zn(o.poly,(o.x0+o.x1)/2,(o.y0+o.y1)/2,!1)])),[n]);h.useEffect(()=>()=>s.forEach(o=>o.dispose()),[s]);const c=he/2;return a.jsx("group",{children:n.map(o=>{const i=(o.x0+o.x1)/2,r=(o.y0+o.y1)/2;return a.jsxs("group",{children:[a.jsx("mesh",{position:[i,pe,r],"rotation-x":Math.PI/2,material:Vo,userData:{cast:!0},children:s.has(o.id)?a.jsx("primitive",{object:s.get(o.id),attach:"geometry"}):a.jsx("planeGeometry",{args:[o.x1-o.x0+2*c,o.y1-o.y0+2*c]})}),(o.x1-o.x0)*(o.y1-o.y0)>1.5&&a.jsx("mesh",{position:[i,pe-.01,r],"rotation-x":Math.PI/2,material:Ko,children:a.jsx("circleGeometry",{args:[.22,36]})})]},o.id)})})}const On=(e,t,n)=>Math.abs(t-e)<.001?t:e+(t-e)*(1-Math.exp(-n*7)),Qo=new Ee({color:"#b9bcc0",metalness:.6,roughness:.35});function Jo({o:e,cx:t,top:n,swing:s,home:c}){var p;const o=Ve(x=>x.on),i=Ve(x=>x.on&&x.closed.includes(e.id)),r=h.useRef(null),l=s??{min:0,max:90},f=e.hingeEnd?-1:1,d=-e.side*f*(i?l.min:l.max)*Math.PI/180;h.useLayoutEffect(()=>void(r.current&&(r.current.rotation.y=d)),[]),se((x,w)=>{const y=r.current;y&&y.rotation.y!==d&&(y.rotation.y=On(y.rotation.y,d,w))});const m=t+(e.hingeEnd?e.w/2:-e.w/2),M=-e.side*.02,v=ts(e),L=Lt(e,c).leaf,g=((p=ns(e,c).look)==null?void 0:p.key)??null,b=x=>a.jsx(vt,{w:x,h:n,arch:yt(e),grid:xt(e)==="grid",paint:L});return a.jsxs(a.Fragment,{children:[a.jsxs("group",{ref:r,position:[m,0,e.side*he/2],children:[a.jsx("group",{position:[f*v/2,0,M],children:e.mid?b(v):a.jsx(ks,{w:v,h:n,look:g,paint:L})}),[-1,1].map(x=>a.jsx("mesh",{position:[f*(v-.07),.95,M+x*.035],material:Qo,children:a.jsx("sphereGeometry",{args:[.025,14,10]})},x)),!o&&ss(l)&&a.jsx(Oe,{position:[f*v/2,n+.15,M],center:!0,zIndexRange:[8,0],style:{pointerEvents:"none"},children:a.jsxs("div",{className:"ang3d",title:l.by?`${l.by}에 걸려요`:void 0,children:["🚪 ",os(l)]})})]}),e.mid&&e.w-v>.01&&a.jsx("group",{position:[m+f*(v+(e.w-v)/2),0,e.side*he/2+M],children:b(e.w-v)})]})}function ei({o:e,cx:t,top:n,home:s}){const c=Ve(l=>l.on&&!l.closed.includes(e.id)),o=h.useRef(null),i=t+(c?.21:-.21)*e.w;h.useLayoutEffect(()=>void(o.current&&(o.current.position.x=i)),[]),se((l,f)=>{var m;const d=(m=o.current)==null?void 0:m.position;d&&d.x!==i&&(d.x=On(d.x,i,f))});const r=Lt(e,s).leaf;return a.jsxs("group",{children:[a.jsx("group",{ref:o,"position-z":-.03,children:a.jsx(vt,{w:e.w*.58,h:n,arch:!!e.mid&&yt(e),grid:!!e.mid&&xt(e)==="grid",paint:r})}),a.jsx("group",{position:[t+e.w*.21,0,.03],children:a.jsx(vt,{w:e.w*.58,h:n,arch:!!e.mid&&yt(e),grid:!!e.mid&&xt(e)==="grid",paint:r})})]})}const ti=.55,ni=.18,dt=Math.PI/180,si=new R,sn=new R,oi=new vn,ft=new bn;function ii({at:e,controls:t,wide:n=1}){const s=T(p=>p.camera),c=T(p=>p.size),o=T(p=>p.gl),i=T(p=>p.events.connected),r=T(p=>p.get),l=c.width/Math.max(1,c.height),f=h.useMemo(()=>is(e.rooms,e.room,e.i,l),[e.rooms,e.room,e.i,l]),d=h.useRef(1),m=h.useRef(null),M=h.useRef(null),v=h.useRef(1),L=h.useRef(""),g=h.useRef({...Re});h.useEffect(()=>{const p=t.current,x={pos:s.position.clone(),quat:s.quaternion.clone(),target:p==null?void 0:p.target.clone(),fov:s.fov,near:s.near};return ve.on=!0,be.set(Re),p&&(p.enabled=!1),s.near=.05,s.updateProjectionMatrix(),()=>{ve.on=!1,nt.on=!1,Ne.turned=!1,be.set(Re),s.position.copy(x.pos),s.quaternion.copy(x.quat),s.fov=x.fov,s.near=x.near,s.updateProjectionMatrix(),p&&x.target&&(p.target.copy(x.target),p.enabled=!0,p.update())}},[]);const b=f?[...f.pos,...f.dir].map(p=>p.toFixed(3)).join(","):"";return h.useEffect(()=>{if(!f)return;L.current!==b&&(L.current=b,d.current=1,M.current={pos:s.position.clone(),quat:s.quaternion.clone(),fov:s.fov},v.current=0,be.set(Re),g.current={...Re});const p=rs(f.tv,n,l);m.current={pos:new R(...f.pos),phi:f.phi,diag:f.diag,tv:p,min:f.tvMin,max:Math.max(f.tvMax,p)}},[b,f==null?void 0:f.tv,n]),h.useEffect(()=>{const p=i??o.domElement,x=I=>{const z=m.current;!z||!isFinite(I)||I<=0||(d.current=Math.min(z.max/z.tv,Math.max(z.min/z.tv,d.current*I)))},w=I=>{if(!I.deltaY||I.shiftKey)return;I.preventDefault();const z=I.deltaMode===1?I.deltaY*33:I.deltaMode===2?I.deltaY*400:I.deltaY;x(Math.exp(Math.max(-100,Math.min(100,z))*.0012))},y=new Map;let u=null,j=!1;const _=I=>{if(I.pointerType==="touch"&&y.set(I.pointerId,{x:I.clientX,y:I.clientY}),y.size>=2){j=!0,u=null;return}if(I.button!==0||j||(Ne.turned=!1,r().internal.capturedMap.has(I.pointerId)))return;const z=g.current,C=Math.tan(s.fov*dt/2),Y=ni*Math.min(1.6,Math.max(.25,C/Math.tan(30*dt)));u={id:I.pointerId,sx:I.clientX,sy:I.clientY,a0:{pitch:z.pitch,yaw:z.yaw},k:Y,on:!1}},A=I=>{const z=y.get(I.pointerId);if(z){if(y.size===2){const D=[...y].find(([W])=>W!==I.pointerId)[1],B=Math.hypot(z.x-D.x,z.y-D.y),E=Math.hypot(I.clientX-D.x,I.clientY-D.y);B>4&&E>4&&x(Math.pow(B/E,.8))}z.x=I.clientX,z.y=I.clientY}const C=m.current;if(!u||I.pointerId!==u.id||!C)return;const Y=I.clientX-u.sx,O=I.clientY-u.sy;if(!u.on){if(Math.hypot(Y,O)<Ae(I.pointerType))return;if(document.querySelector(".ctxmenu"))return void(u=null);u.on=!0,Ne.turned=!0,qe()}be.set(Tt(C,ls(u.a0,Y,O,u.k)))},S=I=>{y.delete(I.pointerId),u&&I.pointerId===u.id&&(u=null),y.size||(j=!1)};return p.addEventListener("wheel",w,{passive:!1}),p.addEventListener("pointerdown",_),window.addEventListener("pointermove",A),window.addEventListener("pointerup",S),window.addEventListener("pointercancel",S),()=>{p.removeEventListener("wheel",w),p.removeEventListener("pointerdown",_),window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S)}},[i,o,r]),se((p,x)=>{const w=m.current;if(!w)return;const y=be.get(),u=Tt(w,y);(u.pitch!==y.pitch||u.yaw!==y.yaw)&&be.set(u,y.ease);const j=g.current;if(y.ease){const S=1-Math.exp(-Math.min(x,.05)*9);j.pitch+=(u.pitch-j.pitch)*S,j.yaw+=(u.yaw-j.yaw)*S,Math.abs(u.pitch-j.pitch)<.05&&Math.abs(u.yaw-j.yaw)<.05&&(Object.assign(j,u),be.set(u))}else Object.assign(j,u);sn.set(...as(w.phi+j.yaw*dt,j.pitch)).add(w.pos),ft.setFromRotationMatrix(oi.lookAt(w.pos,sn,s.up));const _=cs(w.tv*d.current),A=M.current;if(v.current<1&&A){v.current=Math.min(1,v.current+Math.min(x,.05)/ti);const S=v.current<.5?4*v.current**3:1-(-2*v.current+2)**3/2;s.position.lerpVectors(A.pos,w.pos,S),s.quaternion.slerpQuaternions(A.quat,ft,S),s.fov=A.fov+(_-A.fov)*S}else s.position.copy(w.pos),s.quaternion.copy(ft),s.fov=_;s.updateProjectionMatrix(),Object.assign(nt,{on:!0,frame:nt.frame+1,key:e.key,i:e.i,n:e.n,pos:s.position.toArray().map(S=>+S.toFixed(3)),dir:s.getWorldDirection(si).toArray().map(S=>+S.toFixed(3)),fov:+s.fov.toFixed(1),moving:v.current<1||y.ease,pitch:+j.pitch.toFixed(1),yaw:+j.yaw.toFixed(1)})}),null}const on={rooms:!1,dims:!1,items:!1},ri={seq:0,x:0,y:0},ke=new ge(new R(0,1,0),0);function Ri({state:e,dispatch:t,statuses:n,lowWalls:s,showImage:c,cam:o,onCam:i,inside:r,probe:l,ghost:f,focusRoom:d,snap:m,spin:M,onPad:v,hoverRoomId:L,onHoverRoom:g,finishes:b,show:p,onMenu:x,onDismiss:w,stage:y,walk:u=!1,onRotateItem:j,onDeco:_,corner:A=null,wide:S=null,pivot:I=ri}){const{walls:z,items:C,image:Y,scale:O}=e,D=u||!!A,B=ht(P=>!!P.eye),E=D||B,W=h.useMemo(()=>A?e.rooms.filter(P=>(P.whole??P.id)===A.key):null,[A==null?void 0:A.key,e.rooms]),k=h.useMemo(()=>us(z,e.openings,C),[z,e.openings,C]),G=()=>!!A&&Ne.turned||hn(),J=(P,N,q,ee)=>{const te=xs({stage:y,was:ee,item:P,rooms:e.rooms,at:N,focus:d,tap:q});te&&t({type:"select",id:te})},X=P=>{G()||(y===2?(w(!!P),t({type:"select",id:P??null})):!w(y===1&&!!P)&&P&&y===1&&t({type:"select",id:P}))},F=Ke(z,C,Y?{w:Y.pxW*O,h:Y.pxH*O}:void 0),ne=(F.minX+F.maxX)/2,oe=(F.minY+F.maxY)/2,xe=Math.max(F.maxX-F.minX,F.maxY-F.minY,4),Pe=h.useMemo(()=>[ne,0,oe],[]),$=Ke(z,C),Le=Math.max(3,Math.hypot($.maxX-$.minX,$.maxY-$.minY)/2+1),V=($.minX+$.maxX)/2,U=($.minY+$.maxY)/2,H=h.useRef(null),ie=h.useRef(new R),ae=!u&&!A&&!B,we=h.useMemo(()=>{if(!ae||y===1)return[];const P=C.filter(ee=>Ut(y,ee,!!p.others,n[ee.id]==="collide")),N=C.find(ee=>ee.id===e.selectedId),q=ee=>Bt(e.rooms.find(te=>te.id===ee)??{id:ee});return ds(fs(e.rooms,z,e.openings,P),{dims:p.dims,sel:N&&Be(y,N)?N.id:null,focus:d?Bt(d):null,keyOf:q})},[ae,y,C,e.rooms,z,e.openings,p.dims,p.others,n,e.selectedId,d]),Te=ht(P=>P.list.map(N=>N.seatOn??"").join(",")),re=(P,N,q)=>{const ee=H.current;if(ee&&!Se.get().eye&&!ve.on){ee.enabled=!1;const te=()=>{window.removeEventListener("pointerup",te,!0),!Se.get().eye&&!ve.on&&(ee.enabled=!0)};window.addEventListener("pointerup",te,!0)}x(P,N,q)};return a.jsxs(qs,{shadows:"percentage",camera:{position:[ne,xe*.9,oe+xe*.8],fov:45},onPointerMissed:P=>void(!u&&P.button===0&&!G()&&w()),children:[a.jsx($s,{cx:V,cz:U,r:Le}),a.jsx("hemisphereLight",{args:["#ffffff","#d6d0c6"],intensity:E?1.4:1.05}),a.jsx(Vs,{cx:V,cz:U,r:Le,off:!!d}),a.jsx(Ks,{deps:[z,C,e.openings,d,s,u,y,Te,!!A,B]}),a.jsx(Zs,{cx:V,cz:U,r:Le}),a.jsx(vi,{state:e,showImage:c&&!D,hoverRoomId:u?null:L,onHoverRoom:g,focusRoom:d,finishes:b,show:u?on:p,onMenu:re,onTap:X,labelOnly:A==null?void 0:A.key,onPickRoom:!u&&ps(y)?P=>t({type:"select",id:P}):void 0}),z.map(P=>a.jsx(Pi,{wall:P,height:s&&!u?1:pe,openings:e.openings.filter(N=>N.wallId===P.id),finish:b?{home:e.finish,rooms:e.rooms,walls:z}:null,swings:k,doors:e.finish},P.id)),e.rooms.filter(P=>P.loose&&(!d||P.id===d.id)).map(P=>{const N=s&&!u?1:P.h??pe,q=he;if(P.poly){const te=hs(P);return te.map((ce,ze)=>{const le=te[(ze+1)%te.length],Ce=Math.hypot(le.x-ce.x,le.y-ce.y);return a.jsxs("mesh",{name:"loosewall",position:[(ce.x+le.x)/2,N/2,(ce.y+le.y)/2],"rotation-y":-Math.atan2(le.y-ce.y,le.x-ce.x),raycast:wt,children:[a.jsx("boxGeometry",{args:[Ce+q/2,N,q]}),a.jsx("meshStandardMaterial",{color:Ft(P.loose),transparent:!0,opacity:.6})]},`lz${P.id}${ze}`)})}return[[(P.x0+P.x1)/2,P.y0,P.x1-P.x0+q,q],[(P.x0+P.x1)/2,P.y1,P.x1-P.x0+q,q],[P.x0,(P.y0+P.y1)/2,q,P.y1-P.y0-q],[P.x1,(P.y0+P.y1)/2,q,P.y1-P.y0-q]].map(([te,ce,ze,le],Ce)=>a.jsxs("mesh",{name:"loosewall",position:[te,N/2,ce],raycast:wt,children:[a.jsx("boxGeometry",{args:[ze,N,le]}),a.jsx("meshStandardMaterial",{color:Ft(P.loose),transparent:!0,opacity:.6})]},`lz${P.id}${Ce}`))}),C.filter(P=>(!d||gt({x:P.x,y:P.y},[d]))&&(u||Ut(y,P,!!p.others,n[P.id]==="collide"))).map(P=>a.jsx(Ii,{item:P,walls:z,openings:e.openings,inside:r,snap:m,status:u?"ok":n[P.id]??"ok",selected:!u&&P.id===e.selectedId,dispatch:t,controls:H,seeThrough:Te.split(",").includes(P.id),pick:!u&&Be(y,P),faded:!u&&!Be(y,P)&&y<3,show:u||W&&!gt({x:P.x,y:P.y},W)?on:{...p,items:p.items&&(y>=3||Be(y,P)),dims:p.dims&&ms(y,P)},bare:u,onMenu:re,onRotate:u?void 0:j,onRetap:u?void 0:J,onDeco:u||y!==5?void 0:_},P.id)),we.length>0&&a.jsx(zi,{runs:we,sel:e.selectedId}),(u||y>=3||p.others)&&a.jsx(Yo,{world:e,dispatch:t,controls:H,onMenu:re,still:y===4||y===5,wide:S}),f&&a.jsxs("mesh",{position:[f.x,f.h/2,f.y],"rotation-y":-f.rot,children:[a.jsx("boxGeometry",{args:[f.w,f.h,f.d]}),a.jsx("meshStandardMaterial",{color:f.ok?f.color:"#e5484d",transparent:!0,opacity:.5})]}),a.jsx(di,{probe:l}),a.jsx(ui,{room:d}),a.jsx(Qs,{ref:H,makeDefault:!0,target:Pe,maxPolarAngle:Math.PI/2.05,zoomSpeed:0}),a.jsx(ai,{cam:o,onCam:i,controls:H,hold:!!A,pivotLeft:ie}),a.jsx(ci,{wide:S??1,controls:H,free:ae}),a.jsx(hi,{controls:H,on:ae,go:I,left:ie,wallH:s?1:pe,box:d?{minX:d.x0-De,minY:d.y0-De,maxX:d.x1+De,maxY:d.y1+De}:F,focus:!!d}),a.jsx(li,{controls:H}),a.jsx(fi,{spin:M,controls:H}),a.jsx(mi,{controls:H}),u&&a.jsx(No,{controls:H,world:e}),E&&a.jsx(Zo,{rooms:e.rooms,walls:z}),A&&!u&&a.jsx(ii,{at:A,controls:H,wide:S??1}),u&&a.jsx(ko,{}),u&&a.jsx($o,{}),a.jsx(xi,{onPad:D?void 0:v,box:d?{minX:d.x0,minY:d.y0,maxX:d.x1,maxY:d.y1}:z.length||C.length||Y?F:null,height:s?1:pe})]})}function ai({cam:e,onCam:t,controls:n,hold:s,pivotLeft:c}){const o=T(d=>d.camera),i=T(d=>d.size),r=h.useRef(!1),l=h.useRef(!1),f=()=>Math.tan(o.fov*Math.PI/360)*Math.min(1,i.width/i.height);return h.useEffect(()=>{const d=n.current;if(!e||!d||s||l.current&&e.src==="3d")return;l.current=!0;const m=o.position.clone().sub(d.target);(e.src==="app"||m.lengthSq()<1e-6)&&m.set(0,.8,.6),m.normalize();const M=e.src==="pad"?d.target.y:0;e.src!=="pad"&&c.current.set(0,0,0),d.target.set(e.cx,M,e.cy),o.position.copy(d.target).addScaledVector(m,e.e/(2*f())),r.current=!0,d.update(),r.current=!1},[e,i.width,i.height,s]),h.useEffect(()=>{const d=n.current;if(!d)return;const m=()=>{if(r.current)return;const M=o.position.distanceTo(d.target),v=Math.atan2(o.position.x-d.target.x,o.position.z-d.target.z)*180/Math.PI;t({cx:d.target.x,cy:d.target.z,e:2*M*f(),az:v,src:"3d"})};return d.addEventListener("change",m),()=>d.removeEventListener("change",m)},[t,i.width,i.height]),null}function ci({wide:e,controls:t,free:n}){const s=T(i=>i.camera),c=T(i=>i.size),o=_s(c.width/Math.max(1,c.height),e);return h.useEffect(()=>{if(!n||Math.abs(s.fov-o)<.001)return;const i=t.current,r=Ht(s.fov)/Ht(o);s.fov=o,s.updateProjectionMatrix(),i&&(s.position.sub(i.target).multiplyScalar(r).add(i.target),i.update())},[o,n]),null}function li({controls:e}){const t=T(n=>n.camera);return se(()=>{var s;const n=(s=e.current)==null?void 0:s.target;+t.fov.toFixed(1),n&&+t.position.distanceTo(n).toFixed(2)}),null}function ui({room:e}){const t=T(n=>n.gl);return h.useEffect(()=>{if(!e){t.clippingPlanes=[];return}const n=De;return t.clippingPlanes=[new ge(new R(1,0,0),-(e.x0-n)),new ge(new R(-1,0,0),e.x1+n),new ge(new R(0,0,1),-(e.y0-n)),new ge(new R(0,0,-1),e.y1+n)],()=>void(t.clippingPlanes=[])},[e==null?void 0:e.id,e==null?void 0:e.x0,e==null?void 0:e.x1,e==null?void 0:e.y0,e==null?void 0:e.y1,t]),null}function di({probe:e}){const t=T(s=>s.camera),n=T(s=>s.gl);return h.useEffect(()=>{const s=new Je,c=new R;return e.current=(o,i)=>{const r=n.domElement.getBoundingClientRect();return o<r.left||o>r.right||i<r.top||i>r.bottom?null:(s.setFromCamera(new me((o-r.left)/r.width*2-1,-((i-r.top)/r.height)*2+1),t),s.ray.intersectPlane(ke,c)?{x:c.x,y:c.z}:null)},()=>void(e.current=null)},[t,n]),null}const Ct=new R(0,1,0);function fi({spin:e,controls:t}){const n=T(o=>o.camera),s=h.useRef(0),c=h.useRef(e.seq);return h.useEffect(()=>{e.seq!==c.current&&(c.current=e.seq,s.current+=e.deg)},[e.seq]),se((o,i)=>{const r=t.current;if(!r||!s.current)return;let l=s.current*(1-Math.exp(-i*1e3/70));Math.abs(s.current-l)<.05&&(l=s.current),s.current-=l;const f=n.position.clone().sub(r.target);f.applyAxisAngle(Ct,l*Math.PI/180),n.position.copy(r.target).add(f),r.update()}),null}function pi(e){for(;e;e=e.parent)if(!e.visible)return!1;return!0}function hi({controls:e,on:t,go:n,left:s,wallH:c,box:o,focus:i}){const r=T(g=>g.camera),l=T(g=>g.gl),f=T(g=>g.scene),d=T(g=>g.events.connected),m=h.useRef({on:t,wallH:c,box:o,focus:i});m.current={on:t,wallH:c,box:o,focus:i};const M=h.useMemo(()=>new R,[]),v=g=>{const b=e.current;b&&(s.current.copy(g).sub(b.target),ye.n++,ye.last=[+g.x.toFixed(3),+g.y.toFixed(3),+g.z.toFixed(3)])},L=h.useRef(n.seq);return h.useEffect(()=>{if(n.seq===L.current)return;L.current=n.seq;const g=m.current.box,b=m.current.on&&Nt(null,{x:n.x,y:0,z:n.y},m.current.wallH,g);b&&v(new R(b.x,b.y,b.z))},[n.seq]),h.useEffect(()=>{ye.on=t,t||s.current.set(0,0,0)},[t]),h.useEffect(()=>{const g=d??l.domElement,b=new Je,p=new me,x=new ge(Ct.clone(),0),w=new R,y=new R,u=(O,D)=>{const B=l.domElement.getBoundingClientRect();return p.set((O-B.left)/B.width*2-1,-((D-B.top)/B.height)*2+1)};ye.toScreen=(O,D,B)=>{const E=l.domElement.getBoundingClientRect();return y.set(O,D,B).project(r),y.z>1?null:[Math.round(E.left+(y.x+1)/2*E.width),Math.round(E.top+(1-y.y)/2*E.height)]};const j=(O,D)=>{const{wallH:B,box:E,focus:W}=m.current;b.setFromCamera(u(O,D),r);const k=b.intersectObjects(f.children,!0).find(X=>X.object.isMesh&&pi(X.object)&&(!W||!E||X.point.x>=E.minX&&X.point.x<=E.maxX&&X.point.z>=E.minY&&X.point.z<=E.maxY)),G=b.ray.intersectPlane(x,w),J=Nt(k?k.point:null,G?{x:G.x,y:0,z:G.z}:null,B,E);return J&&new R(J.x,J.y,J.z)};let _=null,A=null;const S=()=>{_=null,A=null},I=O=>{if(!m.current.on||O.target!==l.domElement||O.button!==0||Pt(O.pointerId))return S();_={id:O.pointerId,x:O.clientX,y:O.clientY,t:O.timeStamp,touch:O.pointerType==="touch"}},z=O=>{if(_){if(O.pointerId!==_.id)return S();Math.hypot(O.clientX-_.x,O.clientY-_.y)>Ae(O.pointerType)&&S()}},C=O=>{const D=_;if(_=null,!D||O.pointerId!==D.id)return;if(O.timeStamp-D.t>Xs||!m.current.on)return void(A=null);const B={t:O.timeStamp,x:O.clientX,y:O.clientY,touch:D.touch};if(!Hs(A,B))return void(A=B);if(A=null,document.querySelector(".ctxmenu"))return;const E=j(O.clientX,O.clientY);E&&(Ns.t=performance.now(),v(E))},Y=O=>{O.detail>1&&O.target===l.domElement&&O.preventDefault()};return g.addEventListener("pointerdown",I,!0),g.addEventListener("mousedown",Y),window.addEventListener("pointermove",z,!0),window.addEventListener("pointerup",C,!0),window.addEventListener("pointercancel",S,!0),()=>{g.removeEventListener("pointerdown",I,!0),g.removeEventListener("mousedown",Y),window.removeEventListener("pointermove",z,!0),window.removeEventListener("pointerup",C,!0),window.removeEventListener("pointercancel",S,!0),ye.toScreen=()=>null}},[r,l,d,f,e]),se((g,b)=>{const p=e.current;if(!p)return;const x=s.current;if(x.lengthSq()>0){const w=Cs(Math.min(b,.1));x.length()*(1-w)<Os?M.copy(x):M.copy(x).multiplyScalar(w),x.sub(M),x.lengthSq()<1e-12&&x.set(0,0,0),p.target.add(M),r.position.add(M),p.update()}ye.moving=x.lengthSq()>0,ye.target=p.target.toArray().map(w=>+w.toFixed(3)),ye.cam=r.position.toArray().map(w=>+w.toFixed(3))}),null}function mi({controls:e}){const t=T(i=>i.camera),n=T(i=>i.gl),s=T(i=>i.events.connected),c=T(i=>i.size),o=h.useRef(c);return o.current=c,h.useEffect(()=>{const i=s??n.domElement,r=new Je,l=new me,f=new ge(Ct.clone(),0),d=new R,m=()=>{const x=e.current;return x&&x.enabled&&x.enableZoom?x:null},M=(x,w,y)=>{const u=m();if(!u||!isFinite(y)||y<=0)return;const j=t.position.distanceTo(u.target),{width:_,height:A}=o.current,S=2*j*Math.tan(t.fov*Math.PI/360)*Math.min(1,_/A);let I=S*y;y<1&&I<.6&&(I=Math.min(S,.6)),y>1&&I>300&&(I=Math.max(S,300));const z=I/S;if(Math.abs(z-1)<1e-5)return;const C=n.domElement.getBoundingClientRect();if(l.set((x-C.left)/C.width*2-1,-((w-C.top)/C.height)*2+1),r.setFromCamera(l,t),f.constant=-u.target.y,r.ray.intersectPlane(f,d)){const Y=Math.max(2*j,3),O=d.clone().sub(u.target);O.length()>Y&&d.copy(u.target).addScaledVector(O.normalize(),Y)}else d.copy(u.target);t.position.sub(d).multiplyScalar(z).add(d),u.target.sub(d).multiplyScalar(z).add(d),u.update()},v=x=>{if(!m()||!x.deltaY||x.shiftKey)return;x.preventDefault();const w=x.deltaMode===1?x.deltaY*33:x.deltaMode===2?x.deltaY*400:x.deltaY;M(x.clientX,x.clientY,Math.exp(Math.max(-100,Math.min(100,w))*4e-4))},L=new Map,g=x=>{x.pointerType==="touch"&&L.set(x.pointerId,{x:x.clientX,y:x.clientY})},b=x=>{const w=L.get(x.pointerId);if(w){if(L.size===2){const y=[...L].find(([_])=>_!==x.pointerId)[1],u=Math.hypot(w.x-y.x,w.y-y.y),j=Math.hypot(x.clientX-y.x,x.clientY-y.y);u>4&&j>4&&M((x.clientX+y.x)/2,(x.clientY+y.y)/2,Math.pow(u/j,.6))}w.x=x.clientX,w.y=x.clientY}},p=x=>void L.delete(x.pointerId);return i.addEventListener("wheel",v,{passive:!1}),i.addEventListener("pointerdown",g),window.addEventListener("pointermove",b),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",p),()=>{i.removeEventListener("wheel",v),i.removeEventListener("pointerdown",g),window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p)}},[t,n,s,e]),null}function xi({onPad:e,box:t,height:n}){const s=T(l=>l.camera),c=T(l=>l.gl),o=h.useMemo(()=>new R,[]),i=h.useRef(""),r=h.useRef(0);return se(()=>{if(!e)return;r.current++;let l=null;if(t){s.updateMatrixWorld();const d=c.domElement.getBoundingClientRect();let[m,M,v,L]=[1/0,1/0,-1/0,-1/0],g=!1;for(const b of[t.minX,t.maxX])for(const p of[t.minY,t.maxY])for(const x of[0,n]){o.set(b,x,p).applyMatrix4(s.matrixWorldInverse),o.z>-.05&&(g=!0),o.set(b,x,p).project(s);const w=d.left+(o.x+1)/2*d.width,y=d.top+(1-o.y)/2*d.height;[m,M,v,L]=[Math.min(m,w),Math.min(M,y),Math.max(v,w),Math.max(L,y)]}l=g?null:{x0:m,y0:M,x1:v,y1:L}}const f=l?[l.x0,l.y0,l.x1,l.y1].map(Math.round).join(","):"-";f===i.current&&r.current%30||(i.current=f,e(l))}),null}function yi({className:e,color:t,onPick:n,children:s}){const c=h.useRef(null),o=h.useRef(n);o.current=n;const i=!!n;return h.useEffect(()=>{const r=c.current;if(!r||!i)return;let l=null;const f=M=>{M.stopPropagation(),l=M.button===0?{id:M.pointerId,x:M.clientX,y:M.clientY}:null},d=M=>{var v;M.stopPropagation(),l&&l.id===M.pointerId&&Math.hypot(M.clientX-l.x,M.clientY-l.y)<=Ae(M.pointerType)&&((v=o.current)==null||v.call(o)),l=null},m=M=>M.stopPropagation();return r.addEventListener("pointerdown",f),r.addEventListener("pointerup",d),r.addEventListener("click",m),r.addEventListener("dblclick",m),()=>{r.removeEventListener("pointerdown",f),r.removeEventListener("pointerup",d),r.removeEventListener("click",m),r.removeEventListener("dblclick",m)}},[i]),a.jsx("div",{ref:c,className:`${e}${i?" pick":""}`,style:{borderColor:t,pointerEvents:i?"auto":"none",touchAction:"none"},title:i?"눌러서 이 공간 고르기":void 0,children:s})}function gi(e,t,n,s){const c=new jo(n-e,s-t),o=c.attributes.position,i=c.attributes.uv,r=(e+n)/2,l=(t+s)/2;for(let f=0;f<o.count;f++)i.setXY(f,r+o.getX(f),l-o.getY(f));return c}function Cn(e,t,n,s,c){const o=Wo(c),i=h.useMemo(()=>c?zn(c,(e+n)/2,(t+s)/2,!0):gi(e,t,n,s),[e,t,n,s,o]);return h.useEffect(()=>()=>i.dispose(),[i]),i}function rn({r:e}){const t=Cn(e.x0,e.y0,e.x1,e.y1,e.poly);return a.jsx("primitive",{object:t,attach:"geometry"})}function an({x0:e,y0:t,x1:n,y1:s,poly:c,id:o,glow:i,hot:r}){const l=Cn(e,t,n,s,c);return a.jsxs(a.Fragment,{children:[a.jsx("primitive",{object:l,attach:"geometry"}),a.jsx("meshStandardMaterial",{map:Ot("floor",o),roughness:Et(Rs,o).finish.rough,emissive:i,emissiveIntensity:r?.3:0})]})}function vi({state:e,showImage:t,hoverRoomId:n,onHoverRoom:s,focusRoom:c,finishes:o,show:i,onMenu:r,onTap:l,labelOnly:f,onPickRoom:d}){const{image:m,scale:M,walls:v,items:L}=e,g=h.useRef(null),b=(u,j)=>{u.stopPropagation();const{clientX:_,clientY:A}=u.nativeEvent,S={x:u.point.x,y:u.point.z};g.current=u.button===0?{x:_,y:A,room:j.kind==="room"?j.id:void 0}:null,$e(u.nativeEvent,()=>{g.current=null,r({...j,at:S},_,A)})},p=u=>{const j=g.current;g.current=null,j&&Math.hypot(u.nativeEvent.clientX-j.x,u.nativeEvent.clientY-j.y)<5&&l(j.room)},x=h.useMemo(()=>{if(!m)return null;const u=new xo().load(m.src);return u.colorSpace=Mn,u},[m==null?void 0:m.src]),w=Ke(v,L),y=3;return a.jsxs("group",{children:[a.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[(w.minX+w.maxX)/2,-.002,(w.minY+w.maxY)/2],onPointerDown:u=>b(u,{kind:"floor"}),onPointerUp:p,children:[a.jsx("planeGeometry",{args:[w.maxX-w.minX+y*2,w.maxY-w.minY+y*2]}),a.jsx("meshBasicMaterial",{colorWrite:!1,depthWrite:!1})]}),e.rooms.map(u=>{if(c&&u.id!==c.id)return null;const j=ys(e.rooms,u),_=z=>!!z&&j.some(C=>C.id===z),A=_(e.selectedId),S=_(n),I=(j.length===1||gs(j)===u)&&(!f||(u.whole??u.id)===f);return a.jsxs("group",{children:[a.jsx("mesh",{"rotation-x":-Math.PI/2,position:[(u.x0+u.x1)/2,.001,(u.y0+u.y1)/2],onPointerMove:z=>{z.stopPropagation(),S||s(u.id)},onPointerOut:()=>S&&s(null),onPointerDown:z=>b(z,{kind:"room",id:u.id}),onPointerUp:p,children:o?a.jsx(an,{x0:u.x0,y0:u.y0,x1:u.x1,y1:u.y1,poly:u.poly,id:vs(u,e.finish),glow:Fe(u.type),hot:S}):a.jsxs(a.Fragment,{children:[a.jsx(rn,{r:u}),a.jsx("meshStandardMaterial",{color:Fe(u.type),transparent:!0,opacity:S?.95:.6,emissive:Fe(u.type),emissiveIntensity:S?.35:0})]})}),A&&a.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[(u.x0+u.x1)/2,.004,(u.y0+u.y1)/2],raycast:()=>null,userData:{pickFill:u.id},children:[a.jsx(rn,{r:u}),a.jsx("meshBasicMaterial",{color:ws,transparent:!0,opacity:.42,depthWrite:!1})]}),(i.rooms||A)&&I&&a.jsx(Oe,{position:[Gt(u).x,.05,Gt(u).y],center:!0,zIndexRange:[5,0],style:{pointerEvents:"none"},children:a.jsxs(yi,{className:`room3d ${A?"hot":""}`,color:Fe(u.type),onPick:d&&(()=>d(u.id)),children:[Ms(u),A&&a.jsxs("small",{children:[j.length>1?"ㄱ자":`${Yt(u.x1-u.x0)}×${Yt(u.y1-u.y0)}`," · ",bs(e.rooms,u).toFixed(1),"㎡"]})]})})]},u.id)}),o&&!e.rooms.length&&v.length>0&&(()=>{const u=Ke(v,[]);return a.jsx("mesh",{"rotation-x":-Math.PI/2,position:[(u.minX+u.maxX)/2,.001,(u.minY+u.maxY)/2],children:a.jsx(an,{x0:u.minX,y0:u.minY,x1:u.maxX,y1:u.maxY,id:e.finish.floor,glow:"#000",hot:!1})})})(),m&&x&&t&&a.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[m.pxW*M/2,0,m.pxH*M/2],children:[a.jsx("planeGeometry",{args:[m.pxW*M,m.pxH*M]}),a.jsx("meshStandardMaterial",{map:x,transparent:!0,opacity:.55})]})]})}function wi(e,t,n){const s=he/2,c=[...t].sort((r,l)=>r.t-l.t),o=[];let i=-s;for(const r of c){const l=Math.max(i,r.t*e-r.w/2),f=Math.min(e+s,r.t*e+r.w/2);f<=l||(o.push({x0:i,x1:l,y0:0,y1:n}),r.sill>0&&o.push({x0:l,x1:f,y0:0,y1:Math.min(r.sill,n)}),r.sill+r.h<n&&o.push({x0:l,x1:f,y0:r.sill+r.h,y1:n}),i=f)}return o.push({x0:i,x1:e+s,y0:0,y1:n}),o.filter(r=>r.x1-r.x0>.001&&r.y1-r.y0>.001)}function Mi(e,t,n){const s=Math.hypot(t.b.x-t.a.x,t.b.y-t.a.y)||1,c={x:(t.b.x-t.a.x)/s,y:(t.b.y-t.a.y)/s},o=[];for(const i of n)for(const r of[{x:i.x0,y:i.y0},{x:i.x1,y:i.y0},{x:i.x0,y:i.y1},{x:i.x1,y:i.y1}]){const l=r.x-t.a.x,f=r.y-t.a.y,d=l*c.x+f*c.y;Math.abs(-l*c.y+f*c.x)<.5&&d>.02&&d<s-.02&&o.push(d)}return o.sort((i,r)=>i-r),e.flatMap(i=>{const r=[i.x0,...o.filter(l=>l>i.x0+.02&&l<i.x1-.02),i.x1];return r.slice(1).map((l,f)=>({...i,x0:r[f],x1:l}))})}function cn(e,t,n,s){const c=Math.hypot(e.b.x-e.a.x,e.b.y-e.a.y)||1,o={x:(e.b.x-e.a.x)/c,y:(e.b.y-e.a.y)/c},i=Math.min(c-.05,Math.max(.05,t)),r=n*(he/2+.08),l={x:e.a.x+o.x*i-o.y*r,y:e.a.y+o.y*i+o.x*r},f=gt(l,s.rooms);return f?{wall:Ws(f,s.home),molding:Ds(f)}:Ts(l,s.walls)?{wall:s.home.wall,molding:!0}:{wall:null,molding:!1}}function bi(e,t){const n=new bo(e.x1-e.x0,e.y1-e.y0,t),s=n.attributes.position,c=n.attributes.uv,o=(e.x0+e.x1)/2,i=(e.y0+e.y1)/2;for(let r=0;r<s.count;r++){const l=o+s.getX(r),f=i+s.getY(r),d=s.getZ(r),m=Math.floor(r/4);c.setXY(r,m<2?d:l,m===2||m===3?d:f)}return n}const He=new Ee({color:"#f7f7f5"}),ji=new Ee({color:"#ebe9e4",roughness:.95}),Si=new Ee({color:"#3b3a38",roughness:1});function Ei({p:e,front:t,back:n}){const s=h.useMemo(()=>bi(e,he),[e.x0,e.x1,e.y0,e.y1]);h.useEffect(()=>()=>s.dispose(),[s]);const c=o=>o.wall?Uo(o.wall):ji;return a.jsx("mesh",{position:[(e.x0+e.x1)/2,(e.y0+e.y1)/2,0],geometry:s,material:[He,He,He,He,c(t),c(n)]})}function ln({p:e,side:t,kind:n,crown:s,H:c,color:o}){const i=e.x1-e.x0,r=he/2,l=h.useMemo(()=>{if(n.profile==="gap"||!n.profile.length)return null;const d=new wn(n.profile.map(([m,M])=>new me(m,M)));return new Mo(d,{depth:i,bevelEnabled:!1})},[n,i]);h.useEffect(()=>()=>l==null?void 0:l.dispose(),[l]);const f=h.useMemo(()=>new Ee({color:o,roughness:.5,side:mn}),[o]);if(h.useEffect(()=>()=>f.dispose(),[f]),n.profile==="gap"){const d=s?.012:.015;return a.jsx("mesh",{position:[(e.x0+e.x1)/2,s?c-d/2:d/2,t*(r+.001)],material:Si,children:a.jsx("boxGeometry",{args:[i,d,.002]})})}return l?a.jsx("mesh",{geometry:l,material:f,position:[t>0?e.x1:e.x0,s?c:0,t*r],"rotation-y":t>0?-Math.PI/2:Math.PI/2,"scale-y":s?-1:1}):null}function Pi({wall:e,height:t,openings:n,finish:s,swings:c,doors:o}){const i=e.b.x-e.a.x,r=e.b.y-e.a.y,l=Math.hypot(i,r),f=h.useMemo(()=>{const v=wi(l,n,t);return s?Mi(v,e,s.rooms).map(L=>{const g=(L.x0+L.x1)/2;return{p:L,front:cn(e,g,1,s),back:cn(e,g,-1,s)}}):v.map(L=>({p:L,front:null,back:null}))},[e,n,t,s==null?void 0:s.home,s==null?void 0:s.rooms,s==null?void 0:s.walls]),d=s&&t>=pe-1e-6?Xt(js,s.home.crown):null,m=s?Xt(Ss,s.home.base):null,M=s?Es(s.home.trim):"";return a.jsxs("group",{position:[e.a.x,0,e.a.y],"rotation-y":-Math.atan2(r,i),children:[f.map(({p:v,front:L,back:g},b)=>L&&g?a.jsxs("group",{children:[a.jsx(Ei,{p:v,front:L,back:g}),[[L,1],[g,-1]].map(([p,x])=>p.molding?a.jsxs("group",{children:[m&&v.y0<1e-6&&a.jsx(ln,{p:v,side:x,kind:m,crown:!1,H:t,color:M}),d&&v.y1>t-1e-6&&a.jsx(ln,{p:v,side:x,kind:d,crown:!0,H:t,color:M})]},x):null)]},b):a.jsxs("mesh",{position:[(v.x0+v.x1)/2,(v.y0+v.y1)/2,0],children:[a.jsx("boxGeometry",{args:[v.x1-v.x0,v.y1-v.y0,he]}),a.jsx("meshStandardMaterial",{color:"#f7f7f5"})]},b)),n.map(v=>{const L=v.t*l,g=Math.min(v.sill+v.h,t);return v.kind==="window"?g>v.sill?a.jsx(Js,{o:v,cx:L,sill:v.sill,top:g,ceil:t},v.id):null:a.jsxs("group",{children:[g<t-.02&&a.jsx(eo,{o:v,cx:L,top:g,paint:Lt(v,o).casing}),v.slide?a.jsx(ei,{o:v,cx:L,top:g,home:o}):a.jsx(Jo,{o:v,cx:L,top:g,swing:c[v.id],home:o})]},v.id)})]})}const Li={gap:"#2b9348",item:"#6b7487",door:"#a07a2c"};function zi({runs:e,sel:t}){return a.jsx("group",{children:e.map(n=>{const s=!!t&&n.items.includes(t),c=zs(n)+.08,o=(i,r=c)=>{const l=Gs(n,i,r);return[l.x,.02,l.y]};return a.jsxs("group",{children:[n.segs.map((i,r)=>a.jsx(tn,{points:[o(i.a),o(i.b)],color:i.id&&i.id===t?"#3b6cff":Li[i.kind],lineWidth:s?3:2,dashed:i.kind==="door",dashSize:.06,gapSize:.04},r)),Is(n).map(i=>a.jsx(tn,{points:[o(i,c-.07),o(i,c+.07)],color:"#6b7487",lineWidth:2},`t${i}`)),n.segs.filter(i=>i.b-i.a>=.12).map((i,r)=>a.jsx(Oe,{position:o((i.a+i.b)/2,c+.13),center:!0,zIndexRange:[8,0],style:{pointerEvents:"none"},children:a.jsx("div",{className:`run3d ${i.kind}${i.id&&i.id===t?" mine":""}`,children:As(i)})},`l${r}`))]},n.key)})})}const pt={id:"",t:0};function Ii({item:e,walls:t,openings:n,inside:s,snap:c,status:o,selected:i,dispatch:r,controls:l,seeThrough:f,pick:d,faded:m,show:M,onMenu:v,bare:L,onRotate:g,onRetap:b,onDeco:p}){const x=f||m,w=h.useRef(null),y=h.useRef(null),u=h.useRef(null),j=h.useMemo(()=>new R,[]),_=st[o]||e.paint||e.color,A=e.z??0,S=Ps(e),I=!e.cab&&!e.photo&&yo(e.kind);h.useEffect(()=>()=>void(l.current&&!ve.on&&(l.current.enabled=!0)),[l]),h.useEffect(()=>()=>{var E;return(E=u.current)==null?void 0:E.call(u)},[]);const z=()=>{l.current&&!Se.get().eye&&!ve.on&&(l.current.enabled=!0)},C=E=>{var X;if(E.button===2){d&&Object.assign(Ys,{id:e.id,t:performance.now()});return}if(!d||(E.stopPropagation(),Pt(E.pointerId)))return;const{clientX:W,clientY:k}=E.nativeEvent,G={x:E.point.x,y:E.point.z};if(w.current=E.button===0?{id:E.pointerId,x:W,y:k,t:E.nativeEvent.timeStamp,at:G,was:i}:null,p||(r({type:"select",id:e.id}),$e(E.nativeEvent,()=>{y.current=null,w.current=null,v({kind:"item",id:e.id,at:G},W,k)}),e.fixed||!E.ray.intersectPlane(ke,j)))return;y.current={id:E.pointerId,dx:j.x-e.x,dz:j.z-e.y,sx:W,sy:k,moved:!1},E.target.setPointerCapture(E.pointerId),l.current&&(l.current.enabled=!1),(X=u.current)==null||X.call(u);const J=F=>{var oe;const ne=y.current;!ne||F.pointerId===ne.id||(ne.moved&&r({type:"cancelDrag"}),y.current=null,qe(),(oe=u.current)==null||oe.call(u),z())};window.addEventListener("pointerdown",J,!0),u.current=()=>{window.removeEventListener("pointerdown",J,!0),u.current=null}},Y=E=>{const W=y.current;if(!(!W||E.pointerId!==W.id)){if(!W.moved){if(Math.hypot(E.nativeEvent.clientX-W.sx,E.nativeEvent.clientY-W.sy)<Ae(E.nativeEvent.pointerType))return;W.moved=!0,qe(),r({type:"checkpoint"}),E.ray.intersectPlane(ke,j)&&Object.assign(W,{dx:j.x-e.x,dz:j.z-e.y})}E.ray.intersectPlane(ke,j)&&r({type:"updateItem",id:e.id,patch:Fs(e,{x:j.x-W.dx,y:j.z-W.dz},{walls:t,openings:n},s,c)})}},O=d&&!p&&!e.fixed&&Ls(e,t),D=E=>{if(!O||!E.shiftKey)return;E.stopPropagation();const W=Math.sign(E.deltaY||E.deltaX),k=W?Us(e,W*c.step,{walls:t,openings:n},s):null;if(!k)return;const G=performance.now();(pt.id!==e.id||G-pt.t>1e3)&&r({type:"checkpoint"}),Object.assign(pt,{id:e.id,t:G}),r({type:"updateItem",id:e.id,patch:k})},B=E=>{var ne,oe,xe,Pe,$;if(y.current&&E.pointerId!==y.current.id)return;const W=w.current;w.current=null;const{clientX:k,clientY:G,pointerType:J,timeStamp:X}=E.nativeEvent;W&&W.id===E.pointerId&&!((ne=y.current)!=null&&ne.moved)&&X-W.t<500&&Math.hypot(k-W.x,G-W.y)<=Ae(J)&&!hn()&&(p?p(e):b==null||b(e,W.at,{t:X,x:k,y:G,touch:J!=="mouse"},W.was)),(oe=y.current)!=null&&oe.moved&&r({type:"updateItem",id:e.id,patch:Bs(e,{walls:t,openings:n})});const F=!!y.current;y.current=null,(xe=u.current)==null||xe.call(u),($=(Pe=E.target).releasePointerCapture)==null||$.call(Pe,E.pointerId),F&&z()};return a.jsxs("group",{position:[e.x,0,e.y],"rotation-y":-e.rot,userData:{itemId:e.id},children:[a.jsxs("mesh",{"position-y":A+e.h/2,onPointerDown:C,onPointerMove:Y,onPointerUp:B,onWheel:D,children:[a.jsx("boxGeometry",{args:[e.w,e.h,e.d]}),e.cab||I?a.jsx("meshBasicMaterial",{colorWrite:!1,depthWrite:!1},"hit"):a.jsx("meshStandardMaterial",{color:_,emissive:i?"#3b6cff":"#000",emissiveIntensity:i?.25:0,transparent:x,opacity:x?.35:1,depthWrite:!x},x?"see":"solid")]}),a.jsx(to,{item:e,z:A,seeThrough:x,selected:i}),S&&[-.026,.026].map(E=>a.jsxs("mesh",{position:[E,A+e.h/2,e.d/2+.001],children:[a.jsx("circleGeometry",{args:[.013,18]}),a.jsx("meshBasicMaterial",{color:i?"#3b6cff":"#8d939a"})]},E)),e.cab&&a.jsx("group",{"position-y":A,children:a.jsx(go,{spec:e.cab,w:e.w,h:e.h,d:e.d,z:A,ceiling:pe,warn:st[o]||void 0,selected:i,seeThrough:x})}),I&&a.jsx("group",{"position-y":A,children:a.jsx(vo,{kind:e.kind,w:e.w,h:e.h,d:e.d,color:e.paint||wo[e.kind],warn:st[o]||void 0,selected:i,seeThrough:x})}),A<.05&&e.h>.05&&!S&&!m&&a.jsx("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,material:no(),raycast:wt,children:a.jsx("planeGeometry",{args:[e.w+.22,e.d+.22]})}),e.clearance>0&&!L&&a.jsxs("mesh",{position:[0,.006,e.d/2+e.clearance/2],"rotation-x":-Math.PI/2,children:[a.jsx("planeGeometry",{args:[e.w,e.clearance]}),a.jsx("meshBasicMaterial",{color:o==="blocked"?"#f5a524":"#508cff",transparent:!0,opacity:.28})]}),i&&d&&!e.fixed&&!S&&!L&&g&&a.jsx(Ai,{item:e,z:A,onRotate:()=>g(e,Math.PI/6)}),(!S&&(M.items||M.dims)||i)&&a.jsx(Oe,{position:[0,A+e.h+.15,0],center:!0,distanceFactor:8,zIndexRange:[10,0],style:{pointerEvents:"none"},children:a.jsxs("div",{className:`tag3d ${o}`,children:[(M.items||i)&&e.name,(M.dims||i)&&a.jsxs("small",{children:[Math.round(e.w*100),"×",Math.round(e.d*100),"×",Math.round(e.h*100)]})]})})]})}function Ai({item:e,z:t,onRotate:n}){const s=h.useRef(null),c=T(r=>r.camera),o=h.useMemo(()=>new R,[]);se(()=>{const r=s.current,l=r==null?void 0:r.parent;if(!r||!l)return;let f=-1/0,d=[1,-1];for(const m of[-1,1])for(const M of[-1,1])o.set(m*e.w/2,t+e.h,M*e.d/2),l.localToWorld(o).project(c),o.x+o.y>f&&(f=o.x+o.y,d=[m,M]);r.position.set(d[0]*e.w/2,t+e.h,d[1]*e.d/2)});const i=r=>r.stopPropagation();return a.jsx("group",{ref:s,children:a.jsx(Oe,{center:!0,zIndexRange:[20,0],children:a.jsx("button",{className:"rot3d",title:"30° 돌리기 (누를 때마다 시계 방향)","aria-label":"30도 돌리기",onPointerDown:i,onPointerUp:i,onDoubleClick:i,onClick:r=>{r.stopPropagation(),n()},children:"↻"})})})}export{Ri as default};
