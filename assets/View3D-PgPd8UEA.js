import{r as p,c as ps,s as Fn,p as $t,W as Un,o as ms,u as xs,j as r,b as ht,a as ys,d as Wn,e as De,f as Ie,g as Rt,h as gs,i as vs,S as yt,k as We,l as ct,m as ws,n as qt,q as lt,t as bs,v as gt,w as Ms,x as js,y as Ss,T as ve,z as Je,B as we,A as vt,C as Xe,D as wt,U as fe,E as Bn,F as ut,G as Es,H as Ps,I as zs,J as Ls,K as Tt,L as Is,M as rn,N as As,O as an,P as _s,Q as Os,R as Cs,V as kn,X as Ds,Y as Rs,Z as Ts,_ as Vt,$ as Yn,a0 as Fs,a1 as Gn,a2 as cn,a3 as Kt,a4 as Ft,a5 as Ut,a6 as Us,a7 as Ws,a8 as Bs,a9 as ks,aa as Me,ab as et,ac as Ys,ad as Ge,ae as _e,af as it,ag as Gs,ah as ln,ai as Hs,aj as Xs,ak as bt,al as Ns,am as $s,an as Mt,ao as qs,ap as Vs,aq as Ks,ar as Zs,as as Qs,at as Js,au as Hn,av as dt,aw as un,ax as eo,ay as dn,az as He,aA as to,aB as no,aC as so,aD as fn,aE as Wt,aF as oo,aG as Ne,aH as ro,aI as Xn,aJ as io,aK as ao,aL as tt,aM as co,aN as lo,aO as uo,aP as hn,aQ as fo,aR as pn,aS as mn,aT as ho,aU as po,aV as mo,aW as jt,aX as xo,aY as yo,aZ as go,a_ as vo,a$ as wo,b0 as bo,b1 as xn,b2 as yn,b3 as Mo,b4 as jo,b5 as So,b6 as Eo,b7 as Po,b8 as zo,b9 as Lo,ba as Io,bb as gn,bc as Ao,bd as _o,be as Oo,bf as Co,bg as vn,bh as Do,bi as Pe}from"./index-Co6qfkCm.js";import{M as Bt,D as Ro,C as To,S as Fo,a as Uo,b as Wo,G as Bo,n as kt,O as ko,W as Yo,c as Go,F as Ho,d as Xo}from"./Door3D-CAY5NSNX.js";import{u as F,a as ae,V as R,_ as Yt,D as Nn,b as je,P as $n,O as qn,R as No,I as $o,F as wn,c as Gt,d as Ue,W as qo,B as Zt,S as Vn,e as Vo,U as bn,f as Mn,M as Ko,g as Be,L as Zo,h as Kn,i as Qo,C as Jo,j as Zn,k as er,l as tr,m as nr,n as Qn,o as ce,p as Le,Q as Jn,q as es,r as ts,s as ns,t as ze,v as sr,w as pt,x as St,T as or,E as rr,y as ir,z as ar}from"./CabinetMesh-CfLd9aIj.js";const $e=new R,Qt=new R,cr=new R,jn=new je;function lr(e,t,n){const s=$e.setFromMatrixPosition(e.matrixWorld);s.project(t);const c=n.width/2,o=n.height/2;return[s.x*c+c,-(s.y*o)+o]}function ur(e,t){const n=$e.setFromMatrixPosition(e.matrixWorld),s=Qt.setFromMatrixPosition(t.matrixWorld),c=n.sub(s),o=t.getWorldDirection(cr);return c.angleTo(o)>Math.PI/2}function dr(e,t,n,s){const c=$e.setFromMatrixPosition(e.matrixWorld),o=c.clone();o.project(t),jn.set(o.x,o.y),n.setFromCamera(jn,t);const a=n.intersectObjects(s,!0);if(a.length){const i=a[0].distance;return c.distanceTo(n.ray.origin)<i}return!0}function fr(e,t){if(t instanceof qn)return t.zoom;if(t instanceof $n){const n=$e.setFromMatrixPosition(e.matrixWorld),s=Qt.setFromMatrixPosition(t.matrixWorld),c=t.fov*Math.PI/180,o=n.distanceTo(s);return 1/(2*Math.tan(c/2)*o)}else return 1}function hr(e,t,n){if(t instanceof $n||t instanceof qn){const s=$e.setFromMatrixPosition(e.matrixWorld),c=Qt.setFromMatrixPosition(t.matrixWorld),o=s.distanceTo(c),a=(n[1]-n[0])/(t.far-t.near),i=n[1]-a*t.far;return Math.round(a*o+i)}}const Ht=e=>Math.abs(e)<1e-10?0:e;function ss(e,t,n=""){let s="matrix3d(";for(let c=0;c!==16;c++)s+=Ht(t[c]*e.elements[c])+(c!==15?",":")");return n+s}const pr=(e=>t=>ss(t,e))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),mr=(e=>(t,n)=>ss(t,e(n),"translate(-50%,-50%)"))(e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1]);function xr(e){return e&&typeof e=="object"&&"current"in e}const Re=p.forwardRef(({children:e,eps:t=.001,style:n,className:s,prepend:c,center:o,fullscreen:a,portal:i,distanceFactor:l,sprite:h=!1,transform:d=!1,occlude:m,onOcclude:w,castShadow:P,receiveShadow:y,material:b,geometry:j,zIndexRange:f=[16777271,0],calculatePosition:v=lr,as:x="div",wrapperClass:g,pointerEvents:u="auto",...M},C)=>{const{gl:_,camera:E,scene:z,size:I,raycaster:D,events:N,viewport:Z}=F(),[Y]=p.useState(()=>document.createElement(x)),k=p.useRef(),A=p.useRef(null),G=p.useRef(0),L=p.useRef([0,0]),O=p.useRef(null),T=p.useRef(null),X=(i==null?void 0:i.current)||N.connected||_.domElement.parentNode,U=p.useRef(null),W=p.useRef(!1),B=p.useMemo(()=>m&&m!=="blending"||Array.isArray(m)&&m.length&&xr(m[0]),[m]);p.useLayoutEffect(()=>{const K=_.domElement;m&&m==="blending"?(K.style.zIndex=`${Math.floor(f[0]/2)}`,K.style.position="absolute",K.style.pointerEvents="none"):(K.style.zIndex=null,K.style.position=null,K.style.pointerEvents=null)},[m]),p.useLayoutEffect(()=>{if(A.current){const K=k.current=ps(Y);if(z.updateMatrixWorld(),d)Y.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const H=v(A.current,E,I);Y.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${H[0]}px,${H[1]}px,0);transform-origin:0 0;`}return X&&(c?X.prepend(Y):X.appendChild(Y)),()=>{X&&X.removeChild(Y),K.unmount()}}},[X,d]),p.useLayoutEffect(()=>{g&&(Y.className=g)},[g]);const V=p.useMemo(()=>d?{position:"absolute",top:0,left:0,width:I.width,height:I.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:o?"translate3d(-50%,-50%,0)":"none",...a&&{top:-I.height/2,left:-I.width/2,width:I.width,height:I.height},...n},[n,o,a,I,d]),se=p.useMemo(()=>({position:"absolute",pointerEvents:u}),[u]);p.useLayoutEffect(()=>{if(W.current=!1,d){var K;(K=k.current)==null||K.render(p.createElement("div",{ref:O,style:V},p.createElement("div",{ref:T,style:se},p.createElement("div",{ref:C,className:s,style:n,children:e}))))}else{var H;(H=k.current)==null||H.render(p.createElement("div",{ref:C,style:V,className:s,children:e}))}});const Q=p.useRef(!0);ae(K=>{if(A.current){E.updateMatrixWorld(),A.current.updateWorldMatrix(!0,!1);const H=d?L.current:v(A.current,E,I);if(d||Math.abs(G.current-E.zoom)>t||Math.abs(L.current[0]-H[0])>t||Math.abs(L.current[1]-H[1])>t){const ge=ur(A.current,E);let de=!1;B&&(Array.isArray(m)?de=m.map(he=>he.current):m!=="blending"&&(de=[z]));const oe=Q.current;if(de){const he=dr(A.current,E,D,de);Q.current=he&&!ge}else Q.current=!ge;oe!==Q.current&&(w?w(!Q.current):Y.style.display=Q.current?"block":"none");const Ae=Math.floor(f[0]/2),qe=m?B?[f[0],Ae]:[Ae-1,0]:f;if(Y.style.zIndex=`${hr(A.current,E,qe)}`,d){const[he,Ve]=[I.width/2,I.height/2],ue=E.projectionMatrix.elements[5]*Ve,{isOrthographicCamera:Te,top:ke,left:Ye,bottom:ie,right:Ke}=E,Ze=pr(E.matrixWorldInverse),Fe=Te?`scale(${ue})translate(${Ht(-(Ke+Ye)/2)}px,${Ht((ke+ie)/2)}px)`:`translateZ(${ue}px)`;let pe=A.current.matrixWorld;h&&(pe=E.matrixWorldInverse.clone().transpose().copyPosition(pe).scale(A.current.scale),pe.elements[3]=pe.elements[7]=pe.elements[11]=0,pe.elements[15]=1),Y.style.width=I.width+"px",Y.style.height=I.height+"px",Y.style.perspective=Te?"":`${ue}px`,O.current&&T.current&&(O.current.style.transform=`${Fe}${Ze}translate(${he}px,${Ve}px)`,T.current.style.transform=mr(pe,1/((l||10)/400)))}else{const he=l===void 0?1:fr(A.current,E)*l;Y.style.transform=`translate3d(${H[0]}px,${H[1]}px,0) scale(${he})`}L.current=H,G.current=E.zoom}}if(!B&&U.current&&!W.current)if(d){if(O.current){const H=O.current.children[0];if(H!=null&&H.clientWidth&&H!=null&&H.clientHeight){const{isOrthographicCamera:ge}=E;if(ge||j)M.scale&&(Array.isArray(M.scale)?M.scale instanceof R?U.current.scale.copy(M.scale.clone().divideScalar(1)):U.current.scale.set(1/M.scale[0],1/M.scale[1],1/M.scale[2]):U.current.scale.setScalar(1/M.scale));else{const de=(l||10)/400,oe=H.clientWidth*de,Ae=H.clientHeight*de;U.current.scale.set(oe,Ae,1)}W.current=!0}}}else{const H=Y.children[0];if(H!=null&&H.clientWidth&&H!=null&&H.clientHeight){const ge=1/Z.factor,de=H.clientWidth*ge,oe=H.clientHeight*ge;U.current.scale.set(de,oe,1),W.current=!0}U.current.lookAt(K.camera.position)}});const $=p.useMemo(()=>({vertexShader:d?void 0:`
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
      `}),[d]);return p.createElement("group",Yt({},M,{ref:A}),m&&!B&&p.createElement("mesh",{castShadow:P,receiveShadow:y,ref:U},j||p.createElement("planeGeometry",null),b||p.createElement("shaderMaterial",{side:Nn,vertexShader:$.vertexShader,fragmentShader:$.fragmentShader})))}),os=parseInt(No.replace(/\D+/g,"")),rs=os>=125?"uv1":"uv2",Sn=new Zt,nt=new R;class Jt extends $o{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new wn(t,3)),this.setAttribute("uv",new wn(n,2))}applyMatrix4(t){const n=this.attributes.instanceStart,s=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(t),s.applyMatrix4(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const s=new Gt(n,6,1);return this.setAttribute("instanceStart",new Ue(s,3,0)),this.setAttribute("instanceEnd",new Ue(s,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t,n=3){let s;t instanceof Float32Array?s=t:Array.isArray(t)&&(s=new Float32Array(t));const c=new Gt(s,n*2,1);return this.setAttribute("instanceColorStart",new Ue(c,n,0)),this.setAttribute("instanceColorEnd",new Ue(c,n,n)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new qo(t.geometry)),this}fromLineSegments(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;t!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Sn.setFromBufferAttribute(n),this.boundingBox.union(Sn))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0&&n!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let c=0;for(let o=0,a=t.count;o<a;o++)nt.fromBufferAttribute(t,o),c=Math.max(c,s.distanceToSquared(nt)),nt.fromBufferAttribute(n,o),c=Math.max(c,s.distanceToSquared(nt));this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}class is extends Jt{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const n=t.length-3,s=new Float32Array(2*n);for(let c=0;c<n;c+=3)s[2*c]=t[c],s[2*c+1]=t[c+1],s[2*c+2]=t[c+2],s[2*c+3]=t[c+3],s[2*c+4]=t[c+4],s[2*c+5]=t[c+5];return super.setPositions(s),this}setColors(t,n=3){const s=t.length-n,c=new Float32Array(2*s);if(n===3)for(let o=0;o<s;o+=n)c[2*o]=t[o],c[2*o+1]=t[o+1],c[2*o+2]=t[o+2],c[2*o+3]=t[o+3],c[2*o+4]=t[o+4],c[2*o+5]=t[o+5];else for(let o=0;o<s;o+=n)c[2*o]=t[o],c[2*o+1]=t[o+1],c[2*o+2]=t[o+2],c[2*o+3]=t[o+3],c[2*o+4]=t[o+4],c[2*o+5]=t[o+5],c[2*o+6]=t[o+6],c[2*o+7]=t[o+7];return super.setColors(c,n),this}fromLine(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}}class en extends Vo{constructor(t){super({type:"LineMaterial",uniforms:bn.clone(bn.merge([Mn.common,Mn.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new je(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${os>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(n){this.uniforms.diffuse.value=n}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(n){n===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(n){this.uniforms.linewidth.value=n}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(n){!!n!="USE_DASH"in this.defines&&(this.needsUpdate=!0),n===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(n){this.uniforms.dashScale.value=n}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(n){this.uniforms.dashSize.value=n}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(n){this.uniforms.dashOffset.value=n}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(n){this.uniforms.gapSize.value=n}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(n){this.uniforms.resolution.value.copy(n)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(n){!!n!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),n===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}const Et=new Be,En=new R,Pn=new R,ee=new Be,te=new Be,me=new Be,Pt=new R,zt=new Kn,ne=new Zo,zn=new R,st=new Zt,ot=new Vn,xe=new Be;let ye,Ce;function Ln(e,t,n){return xe.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),xe.multiplyScalar(1/xe.w),xe.x=Ce/n.width,xe.y=Ce/n.height,xe.applyMatrix4(e.projectionMatrixInverse),xe.multiplyScalar(1/xe.w),Math.abs(Math.max(xe.x,xe.y))}function yr(e,t){const n=e.matrixWorld,s=e.geometry,c=s.attributes.instanceStart,o=s.attributes.instanceEnd,a=Math.min(s.instanceCount,c.count);for(let i=0,l=a;i<l;i++){ne.start.fromBufferAttribute(c,i),ne.end.fromBufferAttribute(o,i),ne.applyMatrix4(n);const h=new R,d=new R;ye.distanceSqToSegment(ne.start,ne.end,d,h),d.distanceTo(h)<Ce*.5&&t.push({point:d,pointOnLine:h,distance:ye.origin.distanceTo(d),object:e,face:null,faceIndex:i,uv:null,[rs]:null})}}function gr(e,t,n){const s=t.projectionMatrix,o=e.material.resolution,a=e.matrixWorld,i=e.geometry,l=i.attributes.instanceStart,h=i.attributes.instanceEnd,d=Math.min(i.instanceCount,l.count),m=-t.near;ye.at(1,me),me.w=1,me.applyMatrix4(t.matrixWorldInverse),me.applyMatrix4(s),me.multiplyScalar(1/me.w),me.x*=o.x/2,me.y*=o.y/2,me.z=0,Pt.copy(me),zt.multiplyMatrices(t.matrixWorldInverse,a);for(let w=0,P=d;w<P;w++){if(ee.fromBufferAttribute(l,w),te.fromBufferAttribute(h,w),ee.w=1,te.w=1,ee.applyMatrix4(zt),te.applyMatrix4(zt),ee.z>m&&te.z>m)continue;if(ee.z>m){const x=ee.z-te.z,g=(ee.z-m)/x;ee.lerp(te,g)}else if(te.z>m){const x=te.z-ee.z,g=(te.z-m)/x;te.lerp(ee,g)}ee.applyMatrix4(s),te.applyMatrix4(s),ee.multiplyScalar(1/ee.w),te.multiplyScalar(1/te.w),ee.x*=o.x/2,ee.y*=o.y/2,te.x*=o.x/2,te.y*=o.y/2,ne.start.copy(ee),ne.start.z=0,ne.end.copy(te),ne.end.z=0;const b=ne.closestPointToPointParameter(Pt,!0);ne.at(b,zn);const j=Qo.lerp(ee.z,te.z,b),f=j>=-1&&j<=1,v=Pt.distanceTo(zn)<Ce*.5;if(f&&v){ne.start.fromBufferAttribute(l,w),ne.end.fromBufferAttribute(h,w),ne.start.applyMatrix4(a),ne.end.applyMatrix4(a);const x=new R,g=new R;ye.distanceSqToSegment(ne.start,ne.end,g,x),n.push({point:g,pointOnLine:x,distance:ye.origin.distanceTo(g),object:e,face:null,faceIndex:w,uv:null,[rs]:null})}}}class as extends Ko{constructor(t=new Jt,n=new en({color:Math.random()*16777215})){super(t,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,n=t.attributes.instanceStart,s=t.attributes.instanceEnd,c=new Float32Array(2*n.count);for(let a=0,i=0,l=n.count;a<l;a++,i+=2)En.fromBufferAttribute(n,a),Pn.fromBufferAttribute(s,a),c[i]=i===0?0:c[i-1],c[i+1]=c[i]+En.distanceTo(Pn);const o=new Gt(c,2,1);return t.setAttribute("instanceDistanceStart",new Ue(o,1,0)),t.setAttribute("instanceDistanceEnd",new Ue(o,1,1)),this}raycast(t,n){const s=this.material.worldUnits,c=t.camera;c===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const o=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ye=t.ray;const a=this.matrixWorld,i=this.geometry,l=this.material;Ce=l.linewidth+o,i.boundingSphere===null&&i.computeBoundingSphere(),ot.copy(i.boundingSphere).applyMatrix4(a);let h;if(s)h=Ce*.5;else{const m=Math.max(c.near,ot.distanceToPoint(ye.origin));h=Ln(c,m,l.resolution)}if(ot.radius+=h,ye.intersectsSphere(ot)===!1)return;i.boundingBox===null&&i.computeBoundingBox(),st.copy(i.boundingBox).applyMatrix4(a);let d;if(s)d=Ce*.5;else{const m=Math.max(c.near,st.distanceToPoint(ye.origin));d=Ln(c,m,l.resolution)}st.expandByScalar(d),ye.intersectsBox(st)!==!1&&(s?yr(this,n):gr(this,c,n))}onBeforeRender(t){const n=this.material.uniforms;n&&n.resolution&&(t.getViewport(Et),this.material.uniforms.resolution.value.set(Et.z,Et.w))}}class vr extends as{constructor(t=new is,n=new en({color:Math.random()*16777215})){super(t,n),this.isLine2=!0,this.type="Line2"}}const In=p.forwardRef(function({points:t,color:n=16777215,vertexColors:s,linewidth:c,lineWidth:o,segments:a,dashed:i,...l},h){var d,m;const w=F(f=>f.size),P=p.useMemo(()=>a?new as:new vr,[a]),[y]=p.useState(()=>new en),b=(s==null||(d=s[0])==null?void 0:d.length)===4?4:3,j=p.useMemo(()=>{const f=a?new Jt:new is,v=t.map(x=>{const g=Array.isArray(x);return x instanceof R||x instanceof Be?[x.x,x.y,x.z]:x instanceof je?[x.x,x.y,0]:g&&x.length===3?[x[0],x[1],x[2]]:g&&x.length===2?[x[0],x[1],0]:x});if(f.setPositions(v.flat()),s){n=16777215;const x=s.map(g=>g instanceof Jo?g.toArray():g);f.setColors(x.flat(),b)}return f},[t,a,s,b]);return p.useLayoutEffect(()=>{P.computeLineDistances()},[t,P]),p.useLayoutEffect(()=>{i?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[i,y]),p.useEffect(()=>()=>{j.dispose(),y.dispose()},[j]),p.createElement("primitive",Yt({object:P,ref:h},l),p.createElement("primitive",{object:j,attach:"geometry"}),p.createElement("primitive",Yt({object:y,attach:"material",color:n,vertexColors:!!s,resolution:[w.width,w.height],linewidth:(m=c??o)!==null&&m!==void 0?m:1,dashed:i,transparent:b===4},l)))});function cs(e,t,n,s){const c=new Zn(e.map(l=>new je(l.x-t,s?n-l.y:l.y-n))),o=new er(c),a=o.attributes.position,i=o.attributes.uv;for(let l=0;l<a.count;l++)i.setXY(l,t+a.getX(l),s?n-a.getY(l):n+a.getY(l));return o}const wr=e=>e?e.map(t=>`${t.x.toFixed(3)},${t.y.toFixed(3)}`).join(";"):"";function ls(e,t,n){const s=new tr(e);return s.wrapS=s.wrapT=nr,s.repeat.set(1/t.w,1/t.h),n&&(s.colorSpace=Qn),s.anisotropy=8,s}const ft=new Map;function tn(e,t){const n=`${e}|${t}`;let s=ft.get(n);if(!s){const c=Fn(e,t);s=ls(c.canvas,c,!0),ft.set(n,s)}return s}const br={coat:2.2,paper:1,flower:.6,silk:.8,paint:1,bathwall:.6},Xt=new Map;function us(e,t){var s;const n=Fn("wall",t);(s=e.bumpMap)==null||s.dispose(),e.bumpMap=n.bump?ls(n.bump,n,!1):null,e.bumpScale=br[$t(Un,t).finish.key]??1}function Mr(e){let t=Xt.get(e);return t||(t=new ce({map:tn("wall",e),roughness:$t(Un,e).finish.rough}),us(t,e),Xt.set(e,t)),t}ms((e,t)=>{const n=`${e}|${t}`,s=ft.get(n);if(!s)return;ft.delete(n);const c=tn(e,t);setTimeout(()=>s.dispose(),2e3);const o=e==="wall"?Xt.get(t):void 0;o&&(o.map=c,us(o,t),o.needsUpdate=!0)});const Lt=new Le(new R(0,1,0),0),An=new R(0,1,0),It=new R,jr="#4b5563",At="#8d6e52";function _t({a:e,b:t,r:n,color:s}){const{mid:c,q:o,L:a}=p.useMemo(()=>{const i=new R(...e),l=new R(...t),h=l.clone().sub(i),d=h.length();return{mid:i.add(l).multiplyScalar(.5),q:new Jn().setFromUnitVectors(An,d>1e-6?h.normalize():An),L:d}},[...e,...t]);return r.jsxs("mesh",{position:c,quaternion:o,children:[r.jsx("capsuleGeometry",{args:[n,Math.max(.001,a),4,10]}),r.jsx("meshStandardMaterial",{color:s,roughness:.8})]})}const ds=p.memo(function({age:t,sex:n,pose:s,seat:c,chair:o}){const a=ht(t,n),i=Wn(t).color,l=bs(t),h=a.shoulderW*.22,d=a.shoulderW*.16,m=a.shoulderW*.1,w=a.depth/2,P=s==="stand"?0:c,y=s==="stand"?a.H:P+a.sitH,b=y-a.head/2,j=y-a.head*1.3,f=s==="stand"?a.leg:P+w*.8,v=a.shoulderW/2-m;let x,g;if(s==="stand")x=[-1,1].flatMap(u=>[[[u*h,d,0],[u*h,a.leg,0]]]),g=[-1,1].map(u=>[u*(v+m*.6),j-a.arm+m,0]);else if(s==="sit"){const u=P+d,M=Math.max(u,a.shin),C=Math.sqrt(Math.max(.01,a.thigh**2-(M-u)**2)),_=Math.max(d,M-a.shin+d);x=[-1,1].flatMap(E=>[[[E*h,u,0],[E*h,M,C]],[[E*h,M,C],[E*h,_,C+.04]]]),g=[-1,1].map(E=>[E*(h+m*.5),u+d+m,C*.6])}else{const u=h+a.thigh*.45,M=a.thigh*.8;x=[-1,1].flatMap(C=>[[[C*h,d,0],[C*u,d,M]],[[C*u,d,M],[-C*h,d,a.thigh*.35]]]),g=[-1,1].map(C=>[C*(h+a.thigh*.35),d*2+m,a.thigh*.6])}return r.jsxs("group",{children:[x.map(([u,M],C)=>r.jsx(_t,{a:u,b:M,r:d,color:jr},C)),r.jsxs("mesh",{position:[0,(f+j)/2,0],scale:[a.shoulderW*.46/w,1,1],children:[r.jsx("capsuleGeometry",{args:[w,Math.max(.01,j-f-w),4,12]}),r.jsx("meshStandardMaterial",{color:i,roughness:.85})]}),[-1,1].map((u,M)=>r.jsx(_t,{a:[u*v,j-m*.5,0],b:g[M],r:m,color:i},M)),g.map((u,M)=>r.jsxs("mesh",{position:u,children:[r.jsx("sphereGeometry",{args:[m*1.1,10,8]}),r.jsx("meshStandardMaterial",{color:yt})]},M)),r.jsx(_t,{a:[0,j,0],b:[0,b,0],r:a.head*.17,color:yt}),r.jsxs("mesh",{position:[0,b,0],children:[r.jsx("sphereGeometry",{args:[a.head/2,20,16]}),r.jsx("meshStandardMaterial",{color:yt,roughness:.7})]}),r.jsxs("mesh",{position:[0,b+a.head*.06,-a.head*.06],children:[r.jsx("sphereGeometry",{args:[a.head*.52,20,16]}),r.jsx("meshStandardMaterial",{color:l,roughness:.9})]}),n==="f"&&r.jsxs("mesh",{position:[0,b-a.head*.12,-a.head*.18],children:[r.jsx("sphereGeometry",{args:[a.head*.42,16,12]}),r.jsx("meshStandardMaterial",{color:l,roughness:.9})]}),[-1,1].map(u=>r.jsxs("mesh",{position:[u*a.head*.18,b,a.head*.47],children:[r.jsx("sphereGeometry",{args:[a.head*.06,8,6]}),r.jsx("meshBasicMaterial",{color:"#222"})]},u)),o&&r.jsx(Sr,{seat:P})]})});function Sr({seat:e}){return r.jsxs("group",{position:[0,0,-.04],children:[r.jsxs("mesh",{position:[0,e-.02,0],children:[r.jsx("boxGeometry",{args:[.42,.04,.42]}),r.jsx("meshStandardMaterial",{color:At})]}),r.jsxs("mesh",{position:[0,e+.24,-.42/2+.02],children:[r.jsx("boxGeometry",{args:[.42,.44,.04]}),r.jsx("meshStandardMaterial",{color:At})]}),[-1,1].flatMap(n=>[-1,1].map(s=>r.jsxs("mesh",{position:[n*(.42/2-.03),(e-.04)/2,s*(.42/2-.03)],children:[r.jsx("boxGeometry",{args:[.03,e-.04,.03]}),r.jsx("meshStandardMaterial",{color:At})]},`${n}${s}`)))]})}function Er({world:e,dispatch:t,controls:n,onMenu:s,still:c,wide:o}){const{list:a,active:i,eye:l}=xs();return r.jsxs(r.Fragment,{children:[a.map(h=>r.jsx(Pr,{p:h,active:h.id===i,hidden:h.id===l,world:e,dispatch:t,controls:n,onMenu:s,still:c},h.id)),r.jsx(zr,{controls:n}),r.jsx(Lr,{controls:n,wide:o??null})]})}function Pr({p:e,active:t,hidden:n,world:s,dispatch:c,controls:o,onMenu:a,still:i}){const l=ht(e.age,e.sex),h=p.useRef(null),d=p.useMemo(()=>new R,[]),m=e.pose==="stand"?l.H:e.seat+l.sitH,w=b=>{if(b.button===2||b.button===1)return;if(b.stopPropagation(),i){const{clientX:v,clientY:x}=b.nativeEvent;qt(b.pointerId)||lt(b.nativeEvent,()=>a({kind:"person",id:e.id,at:{x:e.x,y:e.y}},v,x));return}c({type:"select",id:null}),De.set({active:e.id});const{clientX:j,clientY:f}=b.nativeEvent;lt(b.nativeEvent,()=>{h.current=null,a({kind:"person",id:e.id,at:{x:e.x,y:e.y}},j,f)}),b.ray.intersectPlane(Lt,d)&&(h.current={dx:d.x-e.x,dz:d.z-e.y,sx:j,sy:f,moved:!1},b.target.setPointerCapture(b.pointerId),o.current&&(o.current.enabled=!1))},P=b=>{const j=h.current;if(j){if(!j.moved){if(Math.hypot(b.nativeEvent.clientX-j.sx,b.nativeEvent.clientY-j.sy)<We(b.nativeEvent.pointerType))return;j.moved=!0,ct(),b.ray.intersectPlane(Lt,d)&&Object.assign(j,{dx:d.x-e.x,dz:d.z-e.y})}b.ray.intersectPlane(Lt,d)&&ws(e,{x:d.x-j.dx,y:d.z-j.dz},s)}},y=b=>{var j,f;h.current=null,(f=(j=b.target).releasePointerCapture)==null||f.call(j,b.pointerId),o.current&&!De.get().eye&&!Ie.on&&(o.current.enabled=!0)};return n?null:r.jsxs("group",{position:[e.x,0,e.y],"rotation-y":-e.rot,onPointerDown:w,onPointerMove:P,onPointerUp:y,children:[r.jsx(ds,{age:e.age,sex:e.sex,pose:e.pose,seat:e.seat,chair:!!e.chair}),r.jsxs("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,children:[r.jsx("circleGeometry",{args:[l.r*1.1,24]}),r.jsx("meshBasicMaterial",{color:"#000",transparent:!0,opacity:.12,depthWrite:!1})]}),t&&r.jsxs("mesh",{"position-y":.008,"rotation-x":-Math.PI/2,children:[r.jsx("ringGeometry",{args:[l.r+.04,l.r+.08,40]}),r.jsx("meshBasicMaterial",{color:"#3b6cff"})]}),t&&r.jsx(Re,{position:[0,m+.16,0],center:!0,distanceFactor:8,zIndexRange:[13,0],style:{pointerEvents:"none"},children:r.jsxs("div",{className:"tag3d person on",style:{borderColor:Wn(e.age).color},children:[ys(e)," ",Math.round(l.H*100),"cm",r.jsx("small",{children:e.pose==="stand"?`눈높이 ${Math.round(l.eye*100)}`:`앉은 눈높이 ${Math.round((e.seat+l.sitH-l.head/2)*100)}`})]})})]})}function zr({controls:e}){const t=F(n=>n.camera);return p.useEffect(()=>()=>void(gt.value=0),[]),ae(()=>{var s;const n=(s=e.current)==null?void 0:s.target;!n||De.get().eye||(Ie.on?(t.getWorldDirection(It),gt.value=Math.atan2(-It.x,-It.z)):gt.value=Math.atan2(t.position.x-n.x,t.position.z-n.z))}),null}function Lr({controls:e,wide:t}){const n=Rt(l=>l.eye),s=F(l=>l.camera),c=F(l=>l.size),o=t==null?70:gs(c.width/Math.max(1,c.height),t),a=p.useRef(o);a.current=o,p.useEffect(()=>{!n||s.fov===o||(s.fov=o,s.updateProjectionMatrix())},[o]);const i=p.useRef(null);return p.useEffect(()=>{if(!n)return;const l=e.current,h={pos:s.position.clone(),target:l==null?void 0:l.target.clone(),fov:s.fov};return i.current=n,l&&(l.enabled=!1),s.fov=a.current,s.updateProjectionMatrix(),()=>{i.current=null,s.position.copy(h.pos),s.fov=h.fov,s.updateProjectionMatrix(),l&&h.target&&(l.target.copy(h.target),l.enabled=!0,l.update())}},[n]),ae(()=>{if(!n||i.current!==n)return;const l=De.get().list.find(w=>w.id===n);if(!l)return;const h=ht(l.age,l.sex),d=l.pose==="stand"?h.eye:l.seat+h.sitH-h.head/2,m=vs(l.rot);s.position.set(l.x+m.x*h.head*.3,d,l.y+m.y*h.head*.3),s.lookAt(l.x+m.x*3,d-.4,l.y+m.y*3)}),null}const Nt=()=>null;function Ir({list:e,rooms:t}){const n=p.useMemo(()=>({toe:new ce({color:"#4a4846",roughness:.8}),top:new ce({color:"#ecebe7",roughness:.35}),steel:new ce({color:"#b9bec4",roughness:.3,metalness:.35}),bowl:new ce({color:"#9aa1a8",roughness:.35,metalness:.3}),glass:new ce({color:"#17181b",roughness:.12}),ring:new ce({color:"#7d828b",roughness:.4}),dark:new ce({color:"#2a2a2c",roughness:.9})}),[]);return p.useEffect(()=>()=>Object.values(n).forEach(s=>s.dispose()),[n]),e.length?r.jsx("group",{name:"builtin",children:e.map(s=>{const c=Ms(s),o=js(s,t);return r.jsxs("group",{userData:{builtin:s.id},children:[c.cells.map((a,i)=>{var l;return r.jsx(Ar,{b:s,p:a,ceil:o,mats:n},((l=a.cell)==null?void 0:l.id)??`a${i}`)}),c.uppers.map((a,i)=>r.jsx(_r,{b:s,u:a,ceil:o,mats:n},`u${i}`))]},s.id)})}):null}const Oe=(e,t,n=0)=>({doors:t,handle:"none",finish:e,led:!1,filler:n});function be({m:e,size:t,pos:n}){return r.jsx("mesh",{position:n,material:e,castShadow:!0,receiveShadow:!0,raycast:Nt,children:r.jsx("boxGeometry",{args:t})})}function Ar({b:e,p:t,ceil:n,mats:s}){const c=t.b-t.a,o=t.depth,a=Ss(e,t,o),i=t.cell,l=e.finish,h=we-ve-Je,d=(y,b="body")=>r.jsx("group",{position:[0,ve,0],children:r.jsx(ze,{spec:Oe(l,y),w:c,h,d:o,z:ve,ceiling:n,selected:!1,seeThrough:!1})},b),m=r.jsx(be,{m:s.toe,size:[c,ve,o-.05],pos:[0,ve/2,-.025]}),w=r.jsx(be,{m:s.top,size:[c,Je,vt+.02],pos:[0,we-Je/2,-o/2+(vt+.02)/2]});let P;switch(t.kind){case"sink":P=r.jsxs(r.Fragment,{children:[m,d(Xe(c>=.6?2:1)),w,r.jsx(be,{m:s.bowl,size:[Math.max(.1,c-.16),.004,o-.22],pos:[0,we+.001,.01]}),r.jsx(be,{m:s.dark,size:[Math.max(.08,c-.2),.003,o-.26],pos:[0,we+.003,.01]}),r.jsx("mesh",{position:[0,we+.16,-o/2+.06],material:s.steel,raycast:Nt,castShadow:!0,children:r.jsx("cylinderGeometry",{args:[.014,.018,.32,16]})}),r.jsx(be,{m:s.steel,size:[.022,.022,.2],pos:[0,we+.31,-o/2+.15]})]});break;case"induction":{const y=[.36,.2,.16];let b=ve;P=r.jsxs(r.Fragment,{children:[m,y.map((j,f)=>{const v=j/y.reduce((g,u)=>g+u,0)*h,x=r.jsx("group",{position:[0,b,0],children:r.jsx(ze,{spec:{...Oe(l,[{x0:0,x1:1,style:"flat",handleSide:"bottom"}]),handle:"groove"},w:c,h:v,d:o,z:b,ceiling:n,selected:!1,seeThrough:!1})},f);return b+=v,x}),w,r.jsx(be,{m:s.glass,size:[Math.max(.1,c-.06),.006,o-.1],pos:[0,we+.003,.01]}),[-.18,.18].map(j=>r.jsx("mesh",{position:[j*Math.min(1,c/.6),we+.0065,.01],"rotation-x":-Math.PI/2,material:s.ring,raycast:Nt,children:r.jsx("ringGeometry",{args:[.075,.085,32]})},j))]});break}case"dishwasher":P=r.jsxs(r.Fragment,{children:[m,d([{x0:0,x1:1,style:"flat",handleSide:"bottom"}]),r.jsx(be,{m:s.steel,size:[c-.01,.05,.004],pos:[0,we-Je-.03,o/2+.001]}),w]});break;case"corner":{const y=e.shape==="L"?(c-vt)/c:1;P=r.jsxs(r.Fragment,{children:[m,d(y>.1?[{x0:0,x1:y,style:"flat",handleSide:"left"}]:[]),w]});break}case"filler":P=r.jsxs(r.Fragment,{children:[m,d([]),w]});break;case"tall":P=r.jsxs(r.Fragment,{children:[m,r.jsx("group",{position:[0,ve,0],children:r.jsx(ze,{spec:Oe(l,Xe(c>.7?2:1)),w:c,h:n-ve,d:o,z:ve,ceiling:n,selected:!1,seeThrough:!1})})]});break;case"fridge":case"kimchi":{const y=i==null?void 0:i.app,b=y?y.h:t.kind==="fridge"?1.8:1.85,j=Math.min(n-.05,b+.02),f=n-j;P=r.jsxs(r.Fragment,{children:[y&&es(y.kind)?r.jsx("group",{position:[0,0,o/2-y.d/2],userData:{builtinApp:y.id,kind:y.kind},children:r.jsx(ts,{kind:y.kind,w:y.w,h:y.h,d:y.d,color:y.paint||ns[y.kind],selected:!1,seeThrough:!1})}):r.jsx(be,{m:s.dark,size:[c,b,.01],pos:[0,b/2,-o/2+.005]}),f>.12?r.jsx("group",{position:[0,j,0],children:r.jsx(ze,{spec:Oe(l,Xe(c>.7?2:1)),w:c,h:f,d:o,z:j,ceiling:n,selected:!1,seeThrough:!1})}):f>.005&&r.jsx("group",{position:[0,j,0],children:r.jsx(ze,{spec:Oe(l,[]),w:c,h:f,d:o,z:j,ceiling:n,selected:!1,seeThrough:!1})})]});break}default:P=r.jsxs(r.Fragment,{children:[m,d(Xe(Bn(c))),w]})}return r.jsx("group",{position:[a.x,0,a.y],"rotation-y":-a.rot,userData:{builtinCell:(i==null?void 0:i.id)??"auto",kind:i?t.kind:"auto"},children:P})}function _r({b:e,u:t,ceil:n,mats:s}){const c=e.legs[t.leg],o=t.b-t.a,a=Math.atan2(-c.n.x,c.n.y);if(t.hood){const l=wt(c,(t.a+t.b)/2,.225),h=wt(c,(t.a+t.b)/2,fe.d/2),d=.12;return r.jsxs("group",{userData:{builtinUpper:"hood"},children:[r.jsx("group",{position:[l.x,0,l.y],"rotation-y":-a,children:r.jsx(be,{m:s.steel,size:[o,d,.45],pos:[0,fe.z+d/2,0]})}),r.jsx("group",{position:[h.x,fe.z+d,h.y],"rotation-y":-a,children:r.jsx(ze,{spec:Oe(e.finish,[{x0:0,x1:1,style:"flat",handleSide:"bottom"}],1),w:o,h:fe.h-d,d:fe.d,z:fe.z+d,ceiling:n,selected:!1,seeThrough:!1})})]})}const i=wt(c,(t.a+t.b)/2,fe.d/2);return r.jsx("group",{position:[i.x,fe.z,i.y],"rotation-y":-a,userData:{builtinUpper:t.filler?"filler":"cab"},children:r.jsx(ze,{spec:Oe(e.finish,t.filler?[]:Xe(Bn(o)),1),w:o,h:fe.h,d:fe.d,z:fe.z,ceiling:n,selected:!1,seeThrough:!1})})}function Or({controls:e,world:t}){const n=F(y=>y.camera),s=F(y=>y.size),c=F(y=>y.setEvents),o=ut(y=>y.closed),a=Es(),i=p.useMemo(()=>Ps(t,o),[t,o]),l=p.useRef(i);l.current=i;const h=p.useMemo(()=>zs(i.walls,i.openings),[i]),d=p.useRef(t);d.current=t;const m=p.useRef(1),w=p.useRef({phase:0,amp:0}),P=p.useRef(!1);return p.useEffect(()=>{const y=e.current,b={pos:n.position.clone(),quat:n.quaternion.clone(),target:y==null?void 0:y.target.clone(),fov:n.fov,near:n.near};return P.current=!0,y&&(y.enabled=!1),c({enabled:!1}),n.near=.05,n.rotation.order="YXZ",()=>{P.current=!1,c({enabled:!0}),n.rotation.order="XYZ",n.position.copy(b.pos),n.quaternion.copy(b.quat),n.fov=b.fov,n.near=b.near,n.updateProjectionMatrix(),y&&b.target&&(y.target.copy(b.target),y.enabled=!0,y.update())}},[]),p.useEffect(()=>{n.fov=Ls(s.width/Math.max(1,s.height),a),n.updateProjectionMatrix()},[s.width,s.height,a]),ae((y,b)=>{if(!P.current)return;const j=Math.min(b,.1),f=Tt,v=Is;f.yaw+=v.turn*1.8*j;const x=v.kf-v.jy,g=v.ks+v.jx,u=Math.hypot(x,g);let M=0;if(u>.08){rn.get().pose!=="stand"&&As();const E=Math.hypot(v.jx,v.jy),z=E>.08?v.jrun?2.6:1.4*Math.min(1,E/.9):v.run?2.6:1.4,I=an(f.yaw),D={x:-I.y,y:I.x},N=Math.max(1,Math.ceil(z*j/.08)),Z=z*j/u/N;for(let Y=0;Y<N;Y++){const k={x:f.x+(I.x*x+D.x*g)*Z,y:f.y+(I.y*x+D.y*g)*Z},A=_s(Os(),k,l.current,Gn),G=Math.hypot(A.x-f.x,A.y-f.y);if(M+=G,f.x=A.x,f.y=A.y,G<1e-6)break}}(f.vz!==0||f.air>0)&&(f.air+=f.vz*j-4.9*j*j,f.vz-=9.8*j,f.air<=0&&(f.air=f.vz=0));const C=w.current;C.amp+=((M>1e-4&&f.air===0?1:0)-C.amp)*Math.min(1,j*6),C.phase+=M/.7*Math.PI*2,f.eye+=(Cs()-f.eye)*(1-Math.exp(-j*7));const _=an(f.yaw);if(f.cam+=(f.zoom-f.cam)*(1-Math.exp(-j*10)),Math.abs(f.zoom-f.cam)<.003&&(f.cam=f.zoom),f.cam<.02){f.shown=0;const E=rn.get().pose==="stand"?.06:.08;n.position.set(f.x+_.x*E,f.eye+f.air+Math.cos(C.phase)*.012*C.amp,f.y+_.y*E)}else{const E=Math.cos(f.pitch),z={x:_.x*E,y:Math.sin(f.pitch),z:_.y*E},I=f.eye+f.air+.12;let D=f.cam;z.y<-.001&&(D=Math.min(D,(kn({x:f.x,y:f.y},d.current.rooms)-.12-I)/-z.y)),z.y>.001&&(D=Math.min(D,(I-.15)/z.y)),E>.001&&(D=Math.min(D,Ds({x:f.x,y:f.y},{x:-_.x,y:-_.y},D*E,h)/E)),D=Math.max(0,D),f.shown=D<f.shown?D:f.shown+(D-f.shown)*(1-Math.exp(-j*5)),n.position.set(f.x-z.x*f.shown,I-z.y*f.shown,f.y-z.z*f.shown)}n.rotation.set(f.pitch,f.yaw,0,"YXZ"),m.current+=j,m.current>.2&&(m.current=0,Rs(d.current.rooms),Ts(d.current))}),null}function Cr(){const e=p.useRef(null),{h:t,pose:n}=Fs(),s=t/100/ht("adult","m").H;return ae(()=>{const c=e.current;if(!c)return;const o=Tt;c.visible=o.shown>.45,c.position.set(o.x,o.air,o.y),c.rotation.y=o.yaw+Math.PI}),r.jsxs("group",{ref:e,visible:!1,userData:{noAim:!0,noShadow:!0},children:[r.jsx("group",{scale:s,children:r.jsx(ds,{age:"adult",sex:"m",pose:n,seat:Tt.seat/s,chair:!1})}),r.jsxs("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,children:[r.jsx("circleGeometry",{args:[Gn*1.1,24]}),r.jsx("meshBasicMaterial",{color:"#000",transparent:!0,opacity:.12,depthWrite:!1})]})]})}const Dr=12;function Rr(){const e=F(i=>i.camera),t=F(i=>i.scene),n=F(i=>i.gl),s=p.useMemo(()=>{const i=new pt;return i.far=Dr,i},[]),c=p.useMemo(()=>new je,[]),o=p.useRef(0),a=(i,l)=>{e.updateMatrixWorld(),c.set(i,l),s.setFromCamera(c,e);for(const h of s.intersectObjects(t.children,!0)){if(!h.object.isMesh)continue;let d=null,m=!1;for(let w=h.object;w;w=w.parent){if(!w.visible||w.userData.noAim){m=!0;break}!d&&typeof w.userData.itemId=="string"&&(d=w.userData.itemId)}if(!m)return d}return null};return p.useEffect(()=>(et.center=()=>a(0,0),et.client=(i,l)=>{const h=n.domElement.getBoundingClientRect();return!h.width||!h.height?null:a((i-h.left)/h.width*2-1,-((l-h.top)/h.height)*2+1)},()=>{et.center=et.client=null,cn(null)})),ae((i,l)=>{o.current+=l,!(o.current<.1)&&(o.current=0,cn(a(0,0)))}),null}const Tr=new ce({color:"#f6f5f1",emissive:"#f6f5f1",emissiveIntensity:.42,roughness:1}),Fr=new sr({color:"#fffaf0"});function Ur({rooms:e,walls:t}){const n=p.useMemo(()=>{if(e.length)return e.map(i=>({id:i.id,x0:i.x0,y0:i.y0,x1:i.x1,y1:i.y1,poly:i.poly,h:Vt(i)}));if(!t.length)return[];const o=t.flatMap(i=>[i.a.x,i.b.x]),a=t.flatMap(i=>[i.a.y,i.b.y]);return[{id:"all",x0:Math.min(...o),y0:Math.min(...a),x1:Math.max(...o),y1:Math.max(...a),poly:void 0,h:Yn}]},[e,t]),s=p.useMemo(()=>new Map(n.filter(o=>o.poly).map(o=>[o.id,cs(o.poly,(o.x0+o.x1)/2,(o.y0+o.y1)/2,!1)])),[n]);p.useEffect(()=>()=>s.forEach(o=>o.dispose()),[s]);const c=Me/2;return r.jsx("group",{children:n.map(o=>{const a=(o.x0+o.x1)/2,i=(o.y0+o.y1)/2;return r.jsxs("group",{children:[r.jsx("mesh",{position:[a,o.h,i],"rotation-x":Math.PI/2,material:Tr,userData:{cast:!0,ceilRoom:o.id},children:s.has(o.id)?r.jsx("primitive",{object:s.get(o.id),attach:"geometry"}):r.jsx("planeGeometry",{args:[o.x1-o.x0+2*c,o.y1-o.y0+2*c]})}),(o.x1-o.x0)*(o.y1-o.y0)>1.5&&r.jsx("mesh",{position:[a,o.h-.01,i],"rotation-x":Math.PI/2,material:Fr,children:r.jsx("circleGeometry",{args:[.22,36]})})]},o.id)})})}const fs=(e,t,n)=>Math.abs(t-e)<.001?t:e+(t-e)*(1-Math.exp(-n*7)),Wr=new ce({color:"#b9bcc0",metalness:.6,roughness:.35});function Br({o:e,cx:t,top:n,swing:s,home:c}){var f;const o=ut(v=>v.on),a=ut(v=>v.on&&v.closed.includes(e.id)),i=p.useRef(null),l=s??{min:0,max:90},h=e.hingeEnd?-1:1,d=-e.side*h*(a?l.min:l.max)*Math.PI/180;p.useLayoutEffect(()=>void(i.current&&(i.current.rotation.y=d)),[]),ae((v,x)=>{const g=i.current;g&&g.rotation.y!==d&&(g.rotation.y=fs(g.rotation.y,d,x))});const m=t+(e.hingeEnd?e.w/2:-e.w/2),w=-e.side*.02,P=Us(e),y=Kt(e,c).leaf,b=((f=Ws(e,c).look)==null?void 0:f.key)??null,j=v=>r.jsx(Bt,{w:v,h:n,arch:Ut(e),grid:Ft(e)==="grid",paint:y});return r.jsxs(r.Fragment,{children:[r.jsxs("group",{ref:i,position:[m,0,e.side*Me/2],children:[r.jsx("group",{position:[h*P/2,0,w],children:e.mid?j(P):r.jsx(Ro,{w:P,h:n,look:b,paint:y})}),[-1,1].map(v=>r.jsx("mesh",{position:[h*(P-.07),.95,w+v*.035],material:Wr,children:r.jsx("sphereGeometry",{args:[.025,14,10]})},v)),!o&&Bs(l)&&r.jsx(Re,{position:[h*P/2,n+.15,w],center:!0,zIndexRange:[8,0],style:{pointerEvents:"none"},children:r.jsxs("div",{className:"ang3d",title:l.by?`${l.by}에 걸려요`:void 0,children:["🚪 ",ks(l)]})})]}),e.mid&&e.w-P>.01&&r.jsx("group",{position:[m+h*(P+(e.w-P)/2),0,e.side*Me/2+w],children:j(e.w-P)})]})}function kr({o:e,cx:t,top:n,home:s}){const c=ut(l=>l.on&&!l.closed.includes(e.id)),o=p.useRef(null),a=t+(c?.21:-.21)*e.w;p.useLayoutEffect(()=>void(o.current&&(o.current.position.x=a)),[]),ae((l,h)=>{var m;const d=(m=o.current)==null?void 0:m.position;d&&d.x!==a&&(d.x=fs(d.x,a,h))});const i=Kt(e,s).leaf;return r.jsxs("group",{children:[r.jsx("group",{ref:o,"position-z":-.03,children:r.jsx(Bt,{w:e.w*.58,h:n,arch:!!e.mid&&Ut(e),grid:!!e.mid&&Ft(e)==="grid",paint:i})}),r.jsx("group",{position:[t+e.w*.21,0,.03],children:r.jsx(Bt,{w:e.w*.58,h:n,arch:!!e.mid&&Ut(e),grid:!!e.mid&&Ft(e)==="grid",paint:i})})]})}const Yr=.55,Gr=.18,Ot=Math.PI/180,Hr=new R,_n=new R,Xr=new Kn,Ct=new Jn;function Nr({at:e,controls:t,wide:n=1}){const s=F(f=>f.camera),c=F(f=>f.size),o=F(f=>f.gl),a=F(f=>f.events.connected),i=F(f=>f.get),l=c.width/Math.max(1,c.height),h=p.useMemo(()=>Ys(e.rooms,e.room,e.i,l),[e.rooms,e.room,e.i,l]),d=p.useRef(1),m=p.useRef(null),w=p.useRef(null),P=p.useRef(1),y=p.useRef(""),b=p.useRef({...Ge});p.useEffect(()=>{const f=t.current,v={pos:s.position.clone(),quat:s.quaternion.clone(),target:f==null?void 0:f.target.clone(),fov:s.fov,near:s.near};return Ie.on=!0,_e.set(Ge),f&&(f.enabled=!1),s.near=.05,s.updateProjectionMatrix(),()=>{Ie.on=!1,bt.on=!1,it.turned=!1,_e.set(Ge),s.position.copy(v.pos),s.quaternion.copy(v.quat),s.fov=v.fov,s.near=v.near,s.updateProjectionMatrix(),f&&v.target&&(f.target.copy(v.target),f.enabled=!0,f.update())}},[]);const j=h?[...h.pos,...h.dir].map(f=>f.toFixed(3)).join(","):"";return p.useEffect(()=>{if(!h)return;y.current!==j&&(y.current=j,d.current=1,w.current={pos:s.position.clone(),quat:s.quaternion.clone(),fov:s.fov},P.current=0,_e.set(Ge),b.current={...Ge});const f=Gs(h.tv,n,l);m.current={pos:new R(...h.pos),phi:h.phi,diag:h.diag,tv:f,min:h.tvMin,max:Math.max(h.tvMax,f)}},[j,h==null?void 0:h.tv,n]),p.useEffect(()=>{const f=a??o.domElement,v=z=>{const I=m.current;!I||!isFinite(z)||z<=0||(d.current=Math.min(I.max/I.tv,Math.max(I.min/I.tv,d.current*z)))},x=z=>{if(!z.deltaY||z.shiftKey)return;z.preventDefault();const I=z.deltaMode===1?z.deltaY*33:z.deltaMode===2?z.deltaY*400:z.deltaY;v(Math.exp(Math.max(-100,Math.min(100,I))*.0012))},g=new Map;let u=null,M=!1;const C=z=>{if(z.pointerType==="touch"&&g.set(z.pointerId,{x:z.clientX,y:z.clientY}),g.size>=2){M=!0,u=null;return}if(z.button!==0||M||(it.turned=!1,i().internal.capturedMap.has(z.pointerId)))return;const I=b.current,D=Math.tan(s.fov*Ot/2),N=Gr*Math.min(1.6,Math.max(.25,D/Math.tan(30*Ot)));u={id:z.pointerId,sx:z.clientX,sy:z.clientY,a0:{pitch:I.pitch,yaw:I.yaw},k:N,on:!1}},_=z=>{const I=g.get(z.pointerId);if(I){if(g.size===2){const Y=[...g].find(([G])=>G!==z.pointerId)[1],k=Math.hypot(I.x-Y.x,I.y-Y.y),A=Math.hypot(z.clientX-Y.x,z.clientY-Y.y);k>4&&A>4&&v(Math.pow(k/A,.8))}I.x=z.clientX,I.y=z.clientY}const D=m.current;if(!u||z.pointerId!==u.id||!D)return;const N=z.clientX-u.sx,Z=z.clientY-u.sy;if(!u.on){if(Math.hypot(N,Z)<We(z.pointerType))return;if(document.querySelector(".ctxmenu"))return void(u=null);u.on=!0,it.turned=!0,ct()}_e.set(ln(D,Ns(u.a0,N,Z,u.k)))},E=z=>{g.delete(z.pointerId),u&&z.pointerId===u.id&&(u=null),g.size||(M=!1)};return f.addEventListener("wheel",x,{passive:!1}),f.addEventListener("pointerdown",C),window.addEventListener("pointermove",_),window.addEventListener("pointerup",E),window.addEventListener("pointercancel",E),()=>{f.removeEventListener("wheel",x),f.removeEventListener("pointerdown",C),window.removeEventListener("pointermove",_),window.removeEventListener("pointerup",E),window.removeEventListener("pointercancel",E)}},[a,o,i]),ae((f,v)=>{const x=m.current;if(!x)return;const g=_e.get(),u=ln(x,g);(u.pitch!==g.pitch||u.yaw!==g.yaw)&&_e.set(u,g.ease);const M=b.current;if(g.ease){const E=1-Math.exp(-Math.min(v,.05)*9);M.pitch+=(u.pitch-M.pitch)*E,M.yaw+=(u.yaw-M.yaw)*E,Math.abs(u.pitch-M.pitch)<.05&&Math.abs(u.yaw-M.yaw)<.05&&(Object.assign(M,u),_e.set(u))}else Object.assign(M,u);_n.set(...Hs(x.phi+M.yaw*Ot,M.pitch)).add(x.pos),Ct.setFromRotationMatrix(Xr.lookAt(x.pos,_n,s.up));const C=Xs(x.tv*d.current),_=w.current;if(P.current<1&&_){P.current=Math.min(1,P.current+Math.min(v,.05)/Yr);const E=P.current<.5?4*P.current**3:1-(-2*P.current+2)**3/2;s.position.lerpVectors(_.pos,x.pos,E),s.quaternion.slerpQuaternions(_.quat,Ct,E),s.fov=_.fov+(C-_.fov)*E}else s.position.copy(x.pos),s.quaternion.copy(Ct),s.fov=C;s.updateProjectionMatrix(),Object.assign(bt,{on:!0,frame:bt.frame+1,key:e.key,i:e.i,n:e.n,pos:s.position.toArray().map(E=>+E.toFixed(3)),dir:s.getWorldDirection(Hr).toArray().map(E=>+E.toFixed(3)),fov:+s.fov.toFixed(1),moving:P.current<1||g.ease,pitch:+M.pitch.toFixed(1),yaw:+M.yaw.toFixed(1)})}),null}function $r({room:e,rooms:t,walls:n,openings:s,items:c,dispatch:o,controls:a}){const i=F(u=>u.camera),l=F(u=>u.gl),h=Vt(e),d=$s(e,t),[m,w]=p.useState(null),P=p.useRef({h});P.current.h=h;const y=p.useRef(null),b=p.useRef(0),j=F(u=>u.size),f=(m==null?void 0:m.k)??0,v=d[f],x=p.useRef(new R);ae(()=>{const u=y.current;if(!u||!v)return;const M=(x.current.set(v.x,h,v.y).project(i).x*.5+.5)*j.width,C=u.offsetWidth,_=M-C/2,E=Math.round(Math.min(Math.max(_,4),Math.max(4,j.width-4-C))-_);E!==b.current&&(b.current=E,u.style.transform=`translateX(calc(-50% + ${E}px))`)});const g=(u,M)=>{if(M.button!==0&&M.pointerType==="mouse")return;M.stopPropagation(),M.preventDefault();const C=d[u],_=h,E=l.domElement.getBoundingClientRect(),z=L=>-new R(C.x,L,C.y).project(i).y*.5*E.height,I=Math.max(40,Math.abs(z(_)-z(_+1))),D=qs(e,t,n,s,c),N=M.clientY,Z=M.pointerId;let Y=!1;const k=a.current;k&&(k.enabled=!1),w({k:u,stuck:!1});const A=L=>{if(L.pointerId!==Z||!Y&&Math.abs(N-L.clientY)<3)return;const O=_+(N-L.clientY)/I,T=Ks(O,D);w({k:u,stuck:D>Vs&&O<D-.05}),!(Math.abs(T-P.current.h)<1e-6)&&(Y||(o({type:"checkpoint"}),Y=!0),P.current.h=T,o({type:"updateRoom",id:e.id,patch:{h:Math.abs(T-Yn)<1e-6?void 0:T},live:!0}))},G=L=>{L.pointerId===Z&&(removeEventListener("pointermove",A,!0),removeEventListener("pointerup",G,!0),removeEventListener("pointercancel",G,!0),k&&(k.enabled=!0),w(null))};addEventListener("pointermove",A,!0),addEventListener("pointerup",G,!0),addEventListener("pointercancel",G,!0)};return r.jsx(r.Fragment,{children:d.map((u,M)=>r.jsx(Re,{position:[u.x,h,u.y],center:!0,zIndexRange:[12,0],children:r.jsxs("div",{className:`hknob-wrap${(m==null?void 0:m.k)===M?" on":""}`,children:[r.jsx("button",{className:"hknob","data-k":M,title:`↕ 위아래로 끌어 높이 바꾸기(지금 ${Mt(h)}cm, 10cm씩 120~400cm)`,"aria-label":`높이 ${Mt(h)}cm — 위아래로 끌어 바꾸기`,onPointerDown:C=>g(M,C),onContextMenu:C=>C.preventDefault(),children:"↕"}),M===f&&r.jsxs("span",{ref:y,className:`hknob-label${m?" live":""}`,style:{transform:`translateX(calc(-50% + ${b.current}px))`},children:[`높이 ${Mt(h)}`,(m==null?void 0:m.stuck)&&r.jsx("small",{children:"문·창·가구보다 낮게는 안 돼요"})]})]})},M))})}const On={rooms:!1,dims:!1,items:!1},qr={LEFT:St.ROTATE,MIDDLE:St.PAN,RIGHT:St.PAN},Vr={seq:0,x:0,y:0},at=new Le(new R(0,1,0),0);function ji({state:e,dispatch:t,statuses:n,lowWalls:s,showImage:c,cam:o,onCam:a,inside:i,probe:l,ghost:h,focusRoom:d,snap:m,spin:w,onPad:P,hoverRoomId:y,onHoverRoom:b,finishes:j,show:f,onMenu:v,onDismiss:x,stage:g,walk:u=!1,onRotateItem:M,onDeco:C,corner:_=null,wide:E=null,pivot:z=Vr,multi:I,onMulti:D,multiMode:N=!1,onFit:Z,onCopied:Y}){var on;const{walls:k,items:A,image:G,scale:L}=e,O=u||!!_,T=Rt(S=>!!S.eye),X=O||T,U=p.useMemo(()=>_?e.rooms.filter(S=>(S.whole??S.id)===_.key):null,[_==null?void 0:_.key,e.rooms]),W=p.useMemo(()=>Zs(k,e.openings,A),[k,e.openings,A]),B=p.useMemo(()=>Qs(k,e.rooms),[k,e.rooms]),V=Js(e.rooms),se=g===1&&!u&&!_&&!T?e.rooms.find(S=>S.id===e.selectedId)??null:null,Q=p.useMemo(()=>new Set(se?Hn(e.rooms,se).map(S=>S.id):[]),[se,e.rooms]),$=S=>s&&!u&&!S.some(q=>Q.has(q)),K=()=>!!_&&it.turned||Xn(),H=(S,q,J,re)=>{const le=io({stage:g,was:re,item:S,rooms:e.rooms,at:q,focus:d,tap:J});le&&t({type:"select",id:le})},ge=D&&!u&&(g===2||g===3)?{ids:I??[],mode:N,onMulti:D,base:()=>I!=null&&I.length?I:e.items.some(S=>S.id===e.selectedId&&He(g,S))?[e.selectedId]:[],items:e.items,onCopied:Y}:void 0,de=S=>{K()||(g===2?(x(!!S),t({type:"select",id:S??null})):!x(g===1&&!!S)&&S&&g===1&&t({type:"select",id:S}))},oe=dt(k,A,G?{w:G.pxW*L,h:G.pxH*L}:void 0),Ae=(oe.minX+oe.maxX)/2,qe=(oe.minY+oe.maxY)/2,he=Math.max(oe.maxX-oe.minX,oe.maxY-oe.minY,4),Ve=p.useMemo(()=>[Ae,0,qe],[]),ue=dt(k,A),Te=Math.max(3,Math.hypot(ue.maxX-ue.minX,ue.maxY-ue.minY)/2+1),ke=(ue.minX+ue.maxX)/2,Ye=(ue.minY+ue.maxY)/2,ie=p.useRef(null),Ke=p.useRef(!1),Ze=p.useRef(new R),Fe=!u&&!_&&!T,pe=p.useMemo(()=>{if(!Fe||g===1)return[];const S=A.filter(re=>un(g,re,!!f.others,n[re.id]==="collide")),q=A.find(re=>re.id===e.selectedId),J=re=>dn(e.rooms.find(le=>le.id===re)??{id:re});return eo(to(e.rooms,k,e.openings,S),{dims:f.dims,sel:q&&He(g,q)?q.id:null,focus:d?dn(d):null,keyOf:J})},[Fe,g,A,e.rooms,k,e.openings,f.dims,f.others,n,e.selectedId,d]),sn=Rt(S=>S.list.map(q=>q.seatOn??"").join(",")),mt=(S,q,J)=>{const re=ie.current;if(re&&!De.get().eye&&!Ie.on){re.enabled=!1;const le=()=>{window.removeEventListener("pointerup",le,!0),!De.get().eye&&!Ie.on&&(re.enabled=!0)};window.addEventListener("pointerup",le,!0)}v(S,q,J)};return r.jsxs(To,{shadows:"percentage",camera:{position:[Ae,he*.9,qe+he*.8],fov:45},onPointerMissed:S=>void(!u&&S.button===0&&!K()&&x()),children:[r.jsx(Fo,{cx:ke,cz:Ye,r:Te}),r.jsx("hemisphereLight",{args:["#ffffff","#d6d0c6"],intensity:X?1.4:1.05}),r.jsx(Uo,{cx:ke,cz:Ye,r:Te,off:!!d}),r.jsx(Wo,{deps:[k,A,e.openings,d,s,u,g,sn,!!_,T,e.rooms,se==null?void 0:se.id]}),r.jsx(Bo,{cx:ke,cz:Ye,r:Te}),r.jsx(ci,{state:e,showImage:c&&!O,hoverRoomId:u?null:y,onHoverRoom:b,focusRoom:d,finishes:j,show:u?On:f,onMenu:mt,onTap:de,labelOnly:_==null?void 0:_.key,onPickRoom:!u&&no(g)?S=>t({type:"select",id:S}):void 0}),k.map(S=>{const q=B.get(S.id)??{h:V,front:V,back:V,rooms:[]},J=$(q.rooms);return r.jsx(mi,{wall:S,height:J?1:q.h,sides:J?null:[q.front,q.back],openings:e.openings.filter(re=>re.wallId===S.id),finish:j?{home:e.finish,rooms:e.rooms,walls:k}:null,swings:W,doors:e.finish},S.id)}),e.rooms.filter(S=>S.loose&&(!d||S.id===d.id)).map(S=>{const q=$([S.id])?1:Vt(S),J=Me;if(S.poly){const le=so(S);return le.map((Se,Qe)=>{const Ee=le[(Qe+1)%le.length],xt=Math.hypot(Ee.x-Se.x,Ee.y-Se.y);return r.jsxs("mesh",{name:"loosewall",userData:{room:S.id,wallH:q},position:[(Se.x+Ee.x)/2,q/2,(Se.y+Ee.y)/2],"rotation-y":-Math.atan2(Ee.y-Se.y,Ee.x-Se.x),raycast:kt,children:[r.jsx("boxGeometry",{args:[xt+J/2,q,J]}),r.jsx("meshStandardMaterial",{color:fn(S.loose),transparent:!0,opacity:.6})]},`lz${S.id}${Qe}`)})}return[[(S.x0+S.x1)/2,S.y0,S.x1-S.x0+J,J],[(S.x0+S.x1)/2,S.y1,S.x1-S.x0+J,J],[S.x0,(S.y0+S.y1)/2,J,S.y1-S.y0-J],[S.x1,(S.y0+S.y1)/2,J,S.y1-S.y0-J]].map(([le,Se,Qe,Ee],xt)=>r.jsxs("mesh",{name:"loosewall",userData:{room:S.id,wallH:q},position:[le,q/2,Se],raycast:kt,children:[r.jsx("boxGeometry",{args:[Qe,q,Ee]}),r.jsx("meshStandardMaterial",{color:fn(S.loose),transparent:!0,opacity:.6})]},`lz${S.id}${xt}`))}),(u||g>=2)&&r.jsx(Ir,{list:e.builtins??[],rooms:e.rooms}),A.filter(S=>(!d||Wt({x:S.x,y:S.y},[d]))&&(u||un(g,S,!!f.others,n[S.id]==="collide"))).map(S=>r.jsx(gi,{item:S,walls:k,openings:e.openings,inside:i,snap:m,status:u?"ok":n[S.id]??"ok",selected:!u&&(S.id===e.selectedId||!!(I!=null&&I.includes(S.id))),many:ge,dispatch:t,controls:ie,seeThrough:sn.split(",").includes(S.id),pick:!u&&He(g,S),faded:!u&&!He(g,S)&&g<3,show:u||U&&!Wt({x:S.x,y:S.y},U)?On:{...f,items:f.items&&(g>=3||He(g,S)),dims:f.dims&&oo(g,S)},bare:u,onMenu:mt,onRotate:u?void 0:M,onRetap:u?void 0:H,onDeco:u||g!==5?void 0:C,ceil:kn(S,e.rooms)},S.id)),pe.length>0&&r.jsx(yi,{runs:pe,sel:e.selectedId}),(u||g>=3||f.others)&&r.jsx(Er,{world:e,dispatch:t,controls:ie,onMenu:mt,still:g===4||g===5,wide:E}),h&&r.jsxs("mesh",{position:[h.x,h.h/2,h.y],"rotation-y":-h.rot,children:[r.jsx("boxGeometry",{args:[h.w,h.h,h.d]}),r.jsx("meshStandardMaterial",{color:h.ok?h.color:"#e5484d",transparent:!0,opacity:.5})]}),r.jsx(ei,{probe:l}),r.jsx(Jr,{room:d}),r.jsx(ko,{ref:ie,makeDefault:!0,target:Ve,maxPolarAngle:Math.PI/2.05,zoomSpeed:0,mouseButtons:qr}),r.jsx(Kr,{cam:o,onCam:a,controls:ie,hold:!!_,pivotLeft:Ze,applying:Ke}),r.jsx(Zr,{wide:E??1,controls:ie,free:Fe,applying:Ke}),r.jsx(si,{controls:ie,on:Fe,go:z,left:Ze,wallH:s?1:V,box:d?{minX:d.x0-Ne,minY:d.y0-Ne,maxX:d.x1+Ne,maxY:d.y1+Ne}:oe,focus:!!d,onTriple:Z}),r.jsx(Qr,{controls:ie}),r.jsx(ti,{spin:w,controls:ie}),r.jsx(oi,{controls:ie}),u&&r.jsx(Or,{controls:ie,world:e}),X&&r.jsx(Ur,{rooms:e.rooms,walls:k}),se&&r.jsx($r,{room:se,rooms:e.rooms,walls:k,openings:e.openings,items:(on=e.builtins)!=null&&on.length?[...A,...ro(e.builtins)]:A,dispatch:t,controls:ie}),_&&!u&&r.jsx(Nr,{at:_,controls:ie,wide:E??1}),u&&r.jsx(Cr,{}),u&&r.jsx(Rr,{}),r.jsx(ri,{onPad:O?void 0:P,box:d?{minX:d.x0,minY:d.y0,maxX:d.x1,maxY:d.y1}:k.length||A.length||G?oe:null,height:s?1:V})]})}function Kr({cam:e,onCam:t,controls:n,hold:s,pivotLeft:c,applying:o}){const a=F(d=>d.camera),i=F(d=>d.size),l=p.useRef(!1),h=()=>Math.tan(a.fov*Math.PI/360)*Math.min(1,i.width/i.height);return p.useEffect(()=>{const d=n.current;if(!e||!d||s||l.current&&e.src==="3d")return;l.current=!0;const m=a.position.clone().sub(d.target);(e.src==="app"||m.lengthSq()<1e-6)&&m.set(0,.8,.6),m.normalize();const w=e.src==="pad"?d.target.y:0;e.src!=="pad"&&c.current.set(0,0,0),d.target.set(e.cx,w,e.cy),a.position.copy(d.target).addScaledVector(m,e.e/(2*h())),o.current=!0,d.update(),o.current=!1},[e,i.width,i.height,s]),p.useEffect(()=>{const d=n.current;if(!d)return;const m=()=>{if(o.current)return;const w=a.position.distanceTo(d.target),P=Math.atan2(a.position.x-d.target.x,a.position.z-d.target.z)*180/Math.PI;t({cx:d.target.x,cy:d.target.z,e:2*w*h(),az:P,src:"3d"})};return d.addEventListener("change",m),()=>d.removeEventListener("change",m)},[t,i.width,i.height]),null}function Zr({wide:e,controls:t,free:n,applying:s}){const c=F(i=>i.camera),o=F(i=>i.size),a=bo(o.width/Math.max(1,o.height),e);return p.useEffect(()=>{if(!n||Math.abs(c.fov-a)<.001)return;const i=t.current,l=xn(c.fov)/xn(a);c.fov=a,c.updateProjectionMatrix(),i&&(c.position.sub(i.target).multiplyScalar(l).add(i.target),s.current=!0,i.update(),s.current=!1)},[a,n]),null}function Qr({controls:e}){const t=F(n=>n.camera);return ae(()=>{var s;const n=(s=e.current)==null?void 0:s.target;+t.fov.toFixed(1),n&&+t.position.distanceTo(n).toFixed(2)}),null}function Jr({room:e}){const t=F(n=>n.gl);return p.useEffect(()=>{if(!e){t.clippingPlanes=[];return}const n=Ne;return t.clippingPlanes=[new Le(new R(1,0,0),-(e.x0-n)),new Le(new R(-1,0,0),e.x1+n),new Le(new R(0,0,1),-(e.y0-n)),new Le(new R(0,0,-1),e.y1+n)],()=>void(t.clippingPlanes=[])},[e==null?void 0:e.id,e==null?void 0:e.x0,e==null?void 0:e.x1,e==null?void 0:e.y0,e==null?void 0:e.y1,t]),null}function ei({probe:e}){const t=F(s=>s.camera),n=F(s=>s.gl);return p.useEffect(()=>{const s=new pt,c=new R;return e.current=(o,a)=>{const i=n.domElement.getBoundingClientRect();return o<i.left||o>i.right||a<i.top||a>i.bottom?null:(s.setFromCamera(new je((o-i.left)/i.width*2-1,-((a-i.top)/i.height)*2+1),t),s.ray.intersectPlane(at,c)?{x:c.x,y:c.z}:null)},()=>void(e.current=null)},[t,n]),null}const nn=new R(0,1,0);function ti({spin:e,controls:t}){const n=F(o=>o.camera),s=p.useRef(0),c=p.useRef(e.seq);return p.useEffect(()=>{e.seq!==c.current&&(c.current=e.seq,s.current+=e.deg)},[e.seq]),ae((o,a)=>{const i=t.current;if(!i||!s.current)return;let l=s.current*(1-Math.exp(-a*1e3/70));Math.abs(s.current-l)<.05&&(l=s.current),s.current-=l;const h=n.position.clone().sub(i.target);h.applyAxisAngle(nn,l*Math.PI/180),n.position.copy(i.target).add(h),i.update()}),null}function ni(e){for(;e;e=e.parent)if(!e.visible)return!1;return!0}function si({controls:e,on:t,go:n,left:s,wallH:c,box:o,focus:a,onTriple:i}){const l=F(f=>f.camera),h=F(f=>f.gl),d=F(f=>f.scene),m=F(f=>f.events.connected),w=p.useRef({on:t,wallH:c,box:o,focus:a});w.current={on:t,wallH:c,box:o,focus:a};const P=p.useMemo(()=>new R,[]),y=f=>{const v=e.current;v&&(s.current.copy(f).sub(v.target),Pe.n++,Pe.last=[+f.x.toFixed(3),+f.y.toFixed(3),+f.z.toFixed(3)])},b=p.useRef(i);b.current=i;const j=p.useRef(n.seq);return p.useEffect(()=>{if(n.seq===j.current)return;j.current=n.seq;const f=w.current.box,v=w.current.on&&yn(null,{x:n.x,y:0,z:n.y},w.current.wallH,f);v&&y(new R(v.x,v.y,v.z))},[n.seq]),p.useEffect(()=>{Pe.on=t,t||s.current.set(0,0,0)},[t]),p.useEffect(()=>{const f=m??h.domElement,v=new pt,x=new je,g=new Le(nn.clone(),0),u=new R,M=new R,C=(A,G)=>{const L=h.domElement.getBoundingClientRect();return x.set((A-L.left)/L.width*2-1,-((G-L.top)/L.height)*2+1)};Pe.toScreen=(A,G,L)=>{const O=h.domElement.getBoundingClientRect();return M.set(A,G,L).project(l),M.z>1?null:[Math.round(O.left+(M.x+1)/2*O.width),Math.round(O.top+(1-M.y)/2*O.height)]};const _=(A,G)=>{const{wallH:L,box:O,focus:T}=w.current;v.setFromCamera(C(A,G),l);const X=v.intersectObjects(d.children,!0).find(B=>B.object.isMesh&&ni(B.object)&&(!T||!O||B.point.x>=O.minX&&B.point.x<=O.maxX&&B.point.z>=O.minY&&B.point.z<=O.maxY)),U=v.ray.intersectPlane(g,u),W=yn(X?X.point:null,U?{x:U.x,y:0,z:U.z}:null,L,O);return W&&new R(W.x,W.y,W.z)};let E=null,z=null,I=null;const D=()=>{E=null,z=null,I=null},N=A=>{if(!w.current.on||A.target!==h.domElement||A.button!==0||qt(A.pointerId))return D();E={id:A.pointerId,x:A.clientX,y:A.clientY,t:A.timeStamp,touch:A.pointerType==="touch"}},Z=A=>{if(E){if(A.pointerId!==E.id)return D();Math.hypot(A.clientX-E.x,A.clientY-E.y)>We(A.pointerType)&&D()}},Y=A=>{var T;const G=E;if(E=null,!G||A.pointerId!==G.id)return;if(A.timeStamp-G.t>Co||!w.current.on)return void(z=null);const L={t:A.timeStamp,x:A.clientX,y:A.clientY,touch:G.touch};if(!vn(z,L)){if(vn(I,L)&&!document.querySelector(".ctxmenu")){I=null,z=null,s.current.set(0,0,0),(T=b.current)==null||T.call(b);return}return I=null,void(z=L)}if(z=null,I=L,document.querySelector(".ctxmenu"))return;const O=_(A.clientX,A.clientY);O&&(Do.t=performance.now(),y(O))},k=A=>{A.detail>1&&A.target===h.domElement&&A.preventDefault()};return f.addEventListener("pointerdown",N,!0),f.addEventListener("mousedown",k),window.addEventListener("pointermove",Z,!0),window.addEventListener("pointerup",Y,!0),window.addEventListener("pointercancel",D,!0),()=>{f.removeEventListener("pointerdown",N,!0),f.removeEventListener("mousedown",k),window.removeEventListener("pointermove",Z,!0),window.removeEventListener("pointerup",Y,!0),window.removeEventListener("pointercancel",D,!0),Pe.toScreen=()=>null}},[l,h,m,d,e]),ae((f,v)=>{const x=e.current;if(!x)return;const g=s.current;if(g.lengthSq()>0){const u=jo(Math.min(v,.1));g.length()*(1-u)<Mo?P.copy(g):P.copy(g).multiplyScalar(u),g.sub(P),g.lengthSq()<1e-12&&g.set(0,0,0),x.target.add(P),l.position.add(P),x.update()}Pe.moving=g.lengthSq()>0,Pe.target=x.target.toArray().map(u=>+u.toFixed(3)),Pe.cam=l.position.toArray().map(u=>+u.toFixed(3))}),null}function oi({controls:e}){const t=F(a=>a.camera),n=F(a=>a.gl),s=F(a=>a.events.connected),c=F(a=>a.size),o=p.useRef(c);return o.current=c,p.useEffect(()=>{const a=s??n.domElement,i=new pt,l=new je,h=new Le(nn.clone(),0),d=new R,m=()=>{const v=e.current;return v&&v.enabled&&v.enableZoom?v:null},w=(v,x,g)=>{const u=m();if(!u||!isFinite(g)||g<=0)return;const M=t.position.distanceTo(u.target),{width:C,height:_}=o.current,E=2*M*Math.tan(t.fov*Math.PI/360)*Math.min(1,C/_);let z=E*g;g<1&&z<.6&&(z=Math.min(E,.6)),g>1&&z>300&&(z=Math.max(E,300));const I=z/E;if(Math.abs(I-1)<1e-5)return;const D=n.domElement.getBoundingClientRect();if(l.set((v-D.left)/D.width*2-1,-((x-D.top)/D.height)*2+1),i.setFromCamera(l,t),h.constant=-u.target.y,i.ray.intersectPlane(h,d)){const N=Math.max(2*M,3),Z=d.clone().sub(u.target);Z.length()>N&&d.copy(u.target).addScaledVector(Z.normalize(),N)}else d.copy(u.target);t.position.sub(d).multiplyScalar(I).add(d),u.target.sub(d).multiplyScalar(I).add(d),u.update()},P=v=>{if(!m()||!v.deltaY||v.shiftKey)return;v.preventDefault();const x=v.deltaMode===1?v.deltaY*33:v.deltaMode===2?v.deltaY*400:v.deltaY;w(v.clientX,v.clientY,Math.exp(Math.max(-100,Math.min(100,x))*4e-4))},y=new Map,b=v=>{v.pointerType==="touch"&&y.set(v.pointerId,{x:v.clientX,y:v.clientY})},j=v=>{const x=y.get(v.pointerId);if(x){if(y.size===2){const g=[...y].find(([C])=>C!==v.pointerId)[1],u=Math.hypot(x.x-g.x,x.y-g.y),M=Math.hypot(v.clientX-g.x,v.clientY-g.y);u>4&&M>4&&w((v.clientX+g.x)/2,(v.clientY+g.y)/2,Math.pow(u/M,.6))}x.x=v.clientX,x.y=v.clientY}},f=v=>void y.delete(v.pointerId);return a.addEventListener("wheel",P,{passive:!1}),a.addEventListener("pointerdown",b),window.addEventListener("pointermove",j),window.addEventListener("pointerup",f),window.addEventListener("pointercancel",f),()=>{a.removeEventListener("wheel",P),a.removeEventListener("pointerdown",b),window.removeEventListener("pointermove",j),window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f)}},[t,n,s,e]),null}function ri({onPad:e,box:t,height:n}){const s=F(l=>l.camera),c=F(l=>l.gl),o=p.useMemo(()=>new R,[]),a=p.useRef(""),i=p.useRef(0);return ae(()=>{if(!e)return;i.current++;let l=null;if(t){s.updateMatrixWorld();const d=c.domElement.getBoundingClientRect();let[m,w,P,y]=[1/0,1/0,-1/0,-1/0],b=!1;for(const j of[t.minX,t.maxX])for(const f of[t.minY,t.maxY])for(const v of[0,n]){o.set(j,v,f).applyMatrix4(s.matrixWorldInverse),o.z>-.05&&(b=!0),o.set(j,v,f).project(s);const x=d.left+(o.x+1)/2*d.width,g=d.top+(1-o.y)/2*d.height;[m,w,P,y]=[Math.min(m,x),Math.min(w,g),Math.max(P,x),Math.max(y,g)]}l=b?null:{x0:m,y0:w,x1:P,y1:y}}const h=l?[l.x0,l.y0,l.x1,l.y1].map(Math.round).join(","):"-";h===a.current&&i.current%30||(a.current=h,e(l))}),null}function ii({className:e,color:t,onPick:n,children:s}){const c=p.useRef(null),o=p.useRef(n);o.current=n;const a=!!n;return p.useEffect(()=>{const i=c.current;if(!i||!a)return;let l=null;const h=w=>{w.stopPropagation(),l=w.button===0?{id:w.pointerId,x:w.clientX,y:w.clientY}:null},d=w=>{var P;w.stopPropagation(),l&&l.id===w.pointerId&&Math.hypot(w.clientX-l.x,w.clientY-l.y)<=We(w.pointerType)&&((P=o.current)==null||P.call(o)),l=null},m=w=>w.stopPropagation();return i.addEventListener("pointerdown",h),i.addEventListener("pointerup",d),i.addEventListener("click",m),i.addEventListener("dblclick",m),()=>{i.removeEventListener("pointerdown",h),i.removeEventListener("pointerup",d),i.removeEventListener("click",m),i.removeEventListener("dblclick",m)}},[a]),r.jsx("div",{ref:c,className:`${e}${a?" pick":""}`,style:{borderColor:t,pointerEvents:a?"auto":"none",touchAction:"none"},title:a?"눌러서 이 공간 고르기":void 0,children:s})}function ai(e,t,n,s){const c=new ar(n-e,s-t),o=c.attributes.position,a=c.attributes.uv,i=(e+n)/2,l=(t+s)/2;for(let h=0;h<o.count;h++)a.setXY(h,i+o.getX(h),l-o.getY(h));return c}function hs(e,t,n,s,c){const o=wr(c),a=p.useMemo(()=>c?cs(c,(e+n)/2,(t+s)/2,!0):ai(e,t,n,s),[e,t,n,s,o]);return p.useEffect(()=>()=>a.dispose(),[a]),a}function Cn({r:e}){const t=hs(e.x0,e.y0,e.x1,e.y1,e.poly);return r.jsx("primitive",{object:t,attach:"geometry"})}function Dn({x0:e,y0:t,x1:n,y1:s,poly:c,id:o,glow:a,hot:i}){const l=hs(e,t,n,s,c);return r.jsxs(r.Fragment,{children:[r.jsx("primitive",{object:l,attach:"geometry"}),r.jsx("meshStandardMaterial",{map:tn("floor",o),roughness:$t(So,o).finish.rough,emissive:a,emissiveIntensity:i?.3:0})]})}function ci({state:e,showImage:t,hoverRoomId:n,onHoverRoom:s,focusRoom:c,finishes:o,show:a,onMenu:i,onTap:l,labelOnly:h,onPickRoom:d}){const{image:m,scale:w,walls:P,items:y}=e,b=p.useRef(null),j=(u,M)=>{u.stopPropagation();const{clientX:C,clientY:_}=u.nativeEvent,E={x:u.point.x,y:u.point.z};b.current=u.button===0?{x:C,y:_,room:M.kind==="room"?M.id:void 0}:null,lt(u.nativeEvent,()=>{b.current=null,i({...M,at:E},C,_)})},f=u=>{const M=b.current;b.current=null,M&&Math.hypot(u.nativeEvent.clientX-M.x,u.nativeEvent.clientY-M.y)<5&&l(M.room)},v=p.useMemo(()=>{if(!m)return null;const u=new or().load(m.src);return u.colorSpace=Qn,u},[m==null?void 0:m.src]),x=dt(P,y),g=3;return r.jsxs("group",{children:[r.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[(x.minX+x.maxX)/2,-.002,(x.minY+x.maxY)/2],onPointerDown:u=>j(u,{kind:"floor"}),onPointerUp:f,children:[r.jsx("planeGeometry",{args:[x.maxX-x.minX+g*2,x.maxY-x.minY+g*2]}),r.jsx("meshBasicMaterial",{colorWrite:!1,depthWrite:!1})]}),e.rooms.map(u=>{if(c&&u.id!==c.id)return null;const M=Hn(e.rooms,u),C=I=>!!I&&M.some(D=>D.id===I),_=C(e.selectedId),E=C(n),z=(M.length===1||ao(M)===u)&&(!h||(u.whole??u.id)===h);return r.jsxs("group",{children:[r.jsx("mesh",{"rotation-x":-Math.PI/2,position:[(u.x0+u.x1)/2,.001,(u.y0+u.y1)/2],onPointerMove:I=>{I.stopPropagation(),E||s(u.id)},onPointerOut:()=>E&&s(null),onPointerDown:I=>j(I,{kind:"room",id:u.id}),onPointerUp:f,children:o?r.jsx(Dn,{x0:u.x0,y0:u.y0,x1:u.x1,y1:u.y1,poly:u.poly,id:co(u,e.finish),glow:tt(u.type),hot:E}):r.jsxs(r.Fragment,{children:[r.jsx(Cn,{r:u}),r.jsx("meshStandardMaterial",{color:tt(u.type),transparent:!0,opacity:E?.95:.6,emissive:tt(u.type),emissiveIntensity:E?.35:0})]})}),_&&r.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[(u.x0+u.x1)/2,.004,(u.y0+u.y1)/2],raycast:()=>null,userData:{pickFill:u.id},children:[r.jsx(Cn,{r:u}),r.jsx("meshBasicMaterial",{color:lo,transparent:!0,opacity:.42,depthWrite:!1})]}),(a.rooms||_)&&z&&r.jsx(Re,{position:[pn(u).x,.05,pn(u).y],center:!0,zIndexRange:[5,0],style:{pointerEvents:"none"},children:r.jsxs(ii,{className:`room3d ${_?"hot":""}`,color:tt(u.type),onPick:d&&(()=>d(u.id)),children:[uo(u),_&&r.jsxs("small",{children:[M.length>1?"ㄱ자":`${hn(u.x1-u.x0)}×${hn(u.y1-u.y0)}`," · ",fo(e.rooms,u).toFixed(1),"㎡"]})]})})]},u.id)}),o&&!e.rooms.length&&P.length>0&&(()=>{const u=dt(P,[]);return r.jsx("mesh",{"rotation-x":-Math.PI/2,position:[(u.minX+u.maxX)/2,.001,(u.minY+u.maxY)/2],children:r.jsx(Dn,{x0:u.minX,y0:u.minY,x1:u.maxX,y1:u.maxY,id:e.finish.floor,glow:"#000",hot:!1})})})(),m&&v&&t&&r.jsxs("mesh",{"rotation-x":-Math.PI/2,position:[m.pxW*w/2,0,m.pxH*w/2],children:[r.jsx("planeGeometry",{args:[m.pxW*w,m.pxH*w]}),r.jsx("meshStandardMaterial",{map:v,transparent:!0,opacity:.55})]})]})}function li(e,t,n){const s=Me/2,c=[...t].sort((i,l)=>i.t-l.t),o=[];let a=-s;for(const i of c){const l=Math.max(a,i.t*e-i.w/2),h=Math.min(e+s,i.t*e+i.w/2);h<=l||(o.push({x0:a,x1:l,y0:0,y1:n}),i.sill>0&&o.push({x0:l,x1:h,y0:0,y1:Math.min(i.sill,n)}),i.sill+i.h<n&&o.push({x0:l,x1:h,y0:i.sill+i.h,y1:n}),a=h)}return o.push({x0:a,x1:e+s,y0:0,y1:n}),o.filter(i=>i.x1-i.x0>.001&&i.y1-i.y0>.001)}function ui(e,t,n){const s=Math.hypot(t.b.x-t.a.x,t.b.y-t.a.y)||1,c={x:(t.b.x-t.a.x)/s,y:(t.b.y-t.a.y)/s},o=[];for(const a of n)for(const i of[{x:a.x0,y:a.y0},{x:a.x1,y:a.y0},{x:a.x0,y:a.y1},{x:a.x1,y:a.y1}]){const l=i.x-t.a.x,h=i.y-t.a.y,d=l*c.x+h*c.y;Math.abs(-l*c.y+h*c.x)<.5&&d>.02&&d<s-.02&&o.push(d)}return o.sort((a,i)=>a-i),e.flatMap(a=>{const i=[a.x0,...o.filter(l=>l>a.x0+.02&&l<a.x1-.02),a.x1];return i.slice(1).map((l,h)=>({...a,x0:i[h],x1:l}))})}function Rn(e,t,n,s){const c=Math.hypot(e.b.x-e.a.x,e.b.y-e.a.y)||1,o={x:(e.b.x-e.a.x)/c,y:(e.b.y-e.a.y)/c},a=Math.min(c-.05,Math.max(.05,t)),i=n*(Me/2+.08),l={x:e.a.x+o.x*a-o.y*i,y:e.a.y+o.y*a+o.x*i},h=Wt(l,s.rooms);return h?{wall:Po(h,s.home),molding:Eo(h)}:zo(l,s.walls)?{wall:s.home.wall,molding:!0}:{wall:null,molding:!1}}function di(e,t){const n=new ir(e.x1-e.x0,e.y1-e.y0,t),s=n.attributes.position,c=n.attributes.uv,o=(e.x0+e.x1)/2,a=(e.y0+e.y1)/2;for(let i=0;i<s.count;i++){const l=o+s.getX(i),h=a+s.getY(i),d=s.getZ(i),m=Math.floor(i/4);c.setXY(i,m<2?d:l,m===2||m===3?d:h)}return n}const rt=new ce({color:"#f7f7f5"}),fi=new ce({color:"#ebe9e4",roughness:.95}),hi=new ce({color:"#3b3a38",roughness:1});function pi({p:e,front:t,back:n}){const s=p.useMemo(()=>di(e,Me),[e.x0,e.x1,e.y0,e.y1]);p.useEffect(()=>()=>s.dispose(),[s]);const c=o=>o.wall?Mr(o.wall):fi;return r.jsx("mesh",{position:[(e.x0+e.x1)/2,(e.y0+e.y1)/2,0],geometry:s,material:[rt,rt,rt,rt,c(t),c(n)]})}function Tn({p:e,side:t,kind:n,crown:s,H:c,color:o}){const a=e.x1-e.x0,i=Me/2,l=p.useMemo(()=>{if(n.profile==="gap"||!n.profile.length)return null;const d=new Zn(n.profile.map(([m,w])=>new je(m,w)));return new rr(d,{depth:a,bevelEnabled:!1})},[n,a]);p.useEffect(()=>()=>l==null?void 0:l.dispose(),[l]);const h=p.useMemo(()=>new ce({color:o,roughness:.5,side:Nn}),[o]);if(p.useEffect(()=>()=>h.dispose(),[h]),n.profile==="gap"){const d=s?.012:.015;return r.jsx("mesh",{position:[(e.x0+e.x1)/2,s?c-d/2:d/2,t*(i+.001)],material:hi,children:r.jsx("boxGeometry",{args:[a,d,.002]})})}return l?r.jsx("mesh",{geometry:l,material:h,position:[t>0?e.x1:e.x0,s?c:0,t*i],"rotation-y":t>0?-Math.PI/2:Math.PI/2,"scale-y":s?-1:1}):null}function mi({wall:e,height:t,sides:n,openings:s,finish:c,swings:o,doors:a}){const i=e.b.x-e.a.x,l=e.b.y-e.a.y,h=Math.hypot(i,l),d=p.useMemo(()=>{const y=li(h,s,t);return c?ui(y,e,c.rooms).map(b=>{const j=(b.x0+b.x1)/2;return{p:b,front:Rn(e,j,1,c),back:Rn(e,j,-1,c)}}):y.map(b=>({p:b,front:null,back:null}))},[e,s,t,c==null?void 0:c.home,c==null?void 0:c.rooms,c==null?void 0:c.walls]),m=c&&n?mn(ho,c.home.crown):null,w=c?mn(po,c.home.base):null,P=c?mo(c.home.trim):"";return r.jsxs("group",{position:[e.a.x,0,e.a.y],"rotation-y":-Math.atan2(l,i),userData:{wallId:e.id,wallH:t},children:[d.map(({p:y,front:b,back:j},f)=>b&&j?r.jsxs("group",{children:[r.jsx(pi,{p:y,front:b,back:j}),[[b,1],[j,-1]].map(([v,x])=>v.molding?r.jsxs("group",{children:[w&&y.y0<1e-6&&r.jsx(Tn,{p:y,side:x,kind:w,crown:!1,H:t,color:P}),m&&n&&y.y0<n[x>0?0:1]-1e-6&&y.y1>n[x>0?0:1]-1e-6&&r.jsx(Tn,{p:y,side:x,kind:m,crown:!0,H:n[x>0?0:1],color:P})]},x):null)]},f):r.jsxs("mesh",{position:[(y.x0+y.x1)/2,(y.y0+y.y1)/2,0],children:[r.jsx("boxGeometry",{args:[y.x1-y.x0,y.y1-y.y0,Me]}),r.jsx("meshStandardMaterial",{color:"#f7f7f5"})]},f)),s.map(y=>{const b=y.t*h,j=Math.min(y.sill+y.h,t);return y.kind==="window"?j>y.sill?r.jsx(Yo,{o:y,cx:b,sill:y.sill,top:j,ceil:t},y.id):null:r.jsxs("group",{children:[j<t-.02&&r.jsx(Go,{o:y,cx:b,top:j,paint:Kt(y,a).casing}),y.slide?r.jsx(kr,{o:y,cx:b,top:j,home:a}):r.jsx(Br,{o:y,cx:b,top:j,swing:o[y.id],home:a})]},y.id)})]})}const xi={gap:"#2b9348",item:"#6b7487",door:"#a07a2c"};function yi({runs:e,sel:t}){return r.jsx("group",{children:e.map(n=>{const s=!!t&&n.items.includes(t),c=go(n)+.08,o=(a,i=c)=>{const l=Oo(n,a,i);return[l.x,.02,l.y]};return r.jsxs("group",{children:[n.segs.map((a,i)=>r.jsx(In,{points:[o(a.a),o(a.b)],color:a.id&&a.id===t?"#3b6cff":xi[a.kind],lineWidth:s?3:2,dashed:a.kind==="door",dashSize:.06,gapSize:.04},i)),vo(n).map(a=>r.jsx(In,{points:[o(a,c-.07),o(a,c+.07)],color:"#6b7487",lineWidth:2},`t${a}`)),n.segs.filter(a=>a.b-a.a>=.12).map((a,i)=>r.jsx(Re,{position:o((a.a+a.b)/2,c+.13),center:!0,zIndexRange:[8,0],style:{pointerEvents:"none"},children:r.jsx("div",{className:`run3d ${a.kind}${a.id&&a.id===t?" mine":""}`,children:wo(a)})},`l${i}`))]},n.key)})})}const Dt={id:"",t:0};function gi({item:e,walls:t,openings:n,inside:s,snap:c,status:o,selected:a,dispatch:i,controls:l,seeThrough:h,pick:d,faded:m,show:w,onMenu:P,bare:y,onRotate:b,onRetap:j,onDeco:f,ceil:v,many:x}){const g=h||m,u=p.useRef(null),M=p.useRef(null),C=p.useRef(null),_=p.useMemo(()=>new R,[]),E=jt[o]||e.paint||e.color,z=e.z??0,I=xo(e),D=!e.cab&&!e.photo&&es(e.kind);p.useEffect(()=>()=>void(l.current&&!Ie.on&&(l.current.enabled=!0)),[l]),p.useEffect(()=>()=>{var L;return(L=C.current)==null?void 0:L.call(C)},[]);const N=()=>{l.current&&!De.get().eye&&!Ie.on&&(l.current.enabled=!0)},Z=L=>{var se;if(L.button===2){d&&Object.assign(_o,{id:e.id,t:performance.now()});return}if(!d||L.button===1||(L.stopPropagation(),qt(L.pointerId)))return;const{clientX:O,clientY:T}=L.nativeEvent,X={x:L.point.x,y:L.point.z};if(u.current=L.button===0?{id:L.pointerId,x:O,y:T,t:L.nativeEvent.timeStamp,at:X,was:a}:null,f)return;const U=L.nativeEvent;if(x&&L.button===0&&(U.ctrlKey||U.metaKey||U.shiftKey||x.mode&&!x.ids.includes(e.id))){u.current=null;const Q=x.base();x.onMulti(Q.includes(e.id)?Q.filter($=>$!==e.id):[...Q,e.id]);return}const W=!!x&&L.button===0&&x.ids.includes(e.id)&&(x.mode||x.ids.length>1);if(W||i({type:"select",id:e.id}),lt(L.nativeEvent,()=>{M.current=null,u.current=null,P({kind:"item",id:e.id,at:X},O,T)}),e.fixed&&!W||!L.ray.intersectPlane(at,_))return;let B=null;if(W){const Q=x.items.filter($=>x.ids.includes($.id)&&!$.fixed);B={ids:Q.map($=>$.id),base:Object.fromEntries(Q.map($=>[$.id,{x:$.x,y:$.y}])),b0:{x:e.x,y:e.y},last:{x:0,y:0}}}M.current={id:L.pointerId,dx:_.x-e.x,dz:_.z-e.y,sx:O,sy:T,moved:!1,copy:!!x&&U.altKey&&L.button===0,cur:e.id,now:e,group:B},L.target.setPointerCapture(L.pointerId),l.current&&(l.current.enabled=!1),(se=C.current)==null||se.call(C);const V=Q=>{var K;const $=M.current;!$||Q.pointerId===$.id||($.moved&&i({type:"cancelDrag"}),M.current=null,ct(),(K=C.current)==null||K.call(C),N())};window.addEventListener("pointerdown",V,!0),C.current=()=>{window.removeEventListener("pointerdown",V,!0),C.current=null}},Y=L=>{const O=M.current;if(!O||L.pointerId!==O.id)return;if(!O.moved){if(Math.hypot(L.nativeEvent.clientX-O.sx,L.nativeEvent.clientY-O.sy)<We(L.nativeEvent.pointerType))return;if(O.moved=!0,ct(),i({type:"checkpoint"}),L.ray.intersectPlane(at,_)&&Object.assign(O,{dx:_.x-e.x,dz:_.z-e.y}),O.copy&&O.group){const U=((x==null?void 0:x.items)??[]).filter(W=>O.group.ids.includes(W.id)).map(W=>gn(W));i({type:"addItems",items:U,live:!0}),O.group={...O.group,ids:U.map(W=>W.id),base:Object.fromEntries(U.map(W=>[W.id,{x:W.x,y:W.y}]))},x==null||x.onMulti(O.group.ids)}else if(O.copy){const U=gn(e);i({type:"addItems",items:[U],select:U.id,live:!0}),O.cur=U.id,O.now=U}}if(!L.ray.intersectPlane(at,_))return;const T=O.group;if(T){const U=c.step,W={x:Math.round((_.x-O.dx-T.b0.x)/U)*U,y:Math.round((_.z-O.dz-T.b0.y)/U)*U};if(W.x===T.last.x&&W.y===T.last.y||!T.ids.every(V=>s({x:T.base[V].x+W.x,y:T.base[V].y+W.y})))return;T.last=W;const B=V=>Math.round(V*1e3)/1e3;i({type:"updateItems",patches:Object.fromEntries(T.ids.map(V=>[V,{x:B(T.base[V].x+W.x),y:B(T.base[V].y+W.y)}]))});return}const X=Ao(O.now,{x:_.x-O.dx,y:_.z-O.dz},{walls:t,openings:n},s,c);O.now={...O.now,...X},i({type:"updateItem",id:O.cur,patch:X})},k=d&&!f&&!e.fixed&&yo(e,t),A=L=>{if(!k||!L.shiftKey)return;L.stopPropagation();const O=Math.sign(L.deltaY||L.deltaX),T=O?Lo(e,O*c.step,{walls:t,openings:n},s):null;if(!T)return;const X=performance.now();(Dt.id!==e.id||X-Dt.t>1e3)&&i({type:"checkpoint"}),Object.assign(Dt,{id:e.id,t:X}),i({type:"updateItem",id:e.id,patch:T})},G=L=>{var se,Q,$,K;if(M.current&&L.pointerId!==M.current.id)return;const O=u.current;u.current=null;const{clientX:T,clientY:X,pointerType:U,timeStamp:W}=L.nativeEvent,B=M.current;O&&O.id===L.pointerId&&!(B!=null&&B.moved)&&W-O.t<500&&Math.hypot(T-O.x,X-O.y)<=We(U)&&!Xn()&&(f?f(e):B!=null&&B.group&&x?x.onMulti(x.mode?x.ids.filter(H=>H!==e.id):[e.id]):j==null||j(e,O.at,{t:W,x:T,y:X,touch:U!=="mouse"},O.was)),B!=null&&B.moved&&(B.group||i({type:"updateItem",id:B.cur,patch:Io(B.now,{walls:t,openings:n})}),B.copy&&((se=x==null?void 0:x.onCopied)==null||se.call(x,"item",B.group?B.group.ids.length:1)));const V=!!M.current;M.current=null,(Q=C.current)==null||Q.call(C),(K=($=L.target).releasePointerCapture)==null||K.call($,L.pointerId),V&&N()};return r.jsxs("group",{position:[e.x,0,e.y],"rotation-y":-e.rot,userData:{itemId:e.id},children:[r.jsxs("mesh",{"position-y":z+e.h/2,onPointerDown:Z,onPointerMove:Y,onPointerUp:G,onWheel:A,children:[r.jsx("boxGeometry",{args:[e.w,e.h,e.d]}),e.cab||D?r.jsx("meshBasicMaterial",{colorWrite:!1,depthWrite:!1},"hit"):r.jsx("meshStandardMaterial",{color:E,emissive:a?"#3b6cff":"#000",emissiveIntensity:a?.25:0,transparent:g,opacity:g?.35:1,depthWrite:!g},g?"see":"solid")]}),r.jsx(Ho,{item:e,z,seeThrough:g,selected:a}),I&&[-.026,.026].map(L=>r.jsxs("mesh",{position:[L,z+e.h/2,e.d/2+.001],children:[r.jsx("circleGeometry",{args:[.013,18]}),r.jsx("meshBasicMaterial",{color:a?"#3b6cff":"#8d939a"})]},L)),e.cab&&r.jsx("group",{"position-y":z,children:r.jsx(ze,{spec:e.cab,w:e.w,h:e.h,d:e.d,z,ceiling:v,warn:jt[o]||void 0,selected:a,seeThrough:g})}),D&&r.jsx("group",{"position-y":z,children:r.jsx(ts,{kind:e.kind,w:e.w,h:e.h,d:e.d,color:e.paint||ns[e.kind],warn:jt[o]||void 0,selected:a,seeThrough:g})}),z<.05&&e.h>.05&&!I&&!m&&r.jsx("mesh",{"position-y":.004,"rotation-x":-Math.PI/2,material:Xo(),raycast:kt,children:r.jsx("planeGeometry",{args:[e.w+.22,e.d+.22]})}),e.clearance>0&&!y&&r.jsxs("mesh",{position:[0,.006,e.d/2+e.clearance/2],"rotation-x":-Math.PI/2,children:[r.jsx("planeGeometry",{args:[e.w,e.clearance]}),r.jsx("meshBasicMaterial",{color:o==="blocked"?"#f5a524":"#508cff",transparent:!0,opacity:.28})]}),a&&d&&!e.fixed&&!I&&!y&&b&&r.jsx(vi,{item:e,z,onRotate:()=>b(e,Math.PI/6)}),(!I&&(w.items||w.dims)||a)&&r.jsx(Re,{position:[0,z+e.h+.15,0],center:!0,distanceFactor:8,zIndexRange:[10,0],style:{pointerEvents:"none"},children:r.jsxs("div",{className:`tag3d ${o}`,children:[(w.items||a)&&e.name,(w.dims||a)&&r.jsxs("small",{children:[Math.round(e.w*100),"×",Math.round(e.d*100),"×",Math.round(e.h*100)]})]})})]})}function vi({item:e,z:t,onRotate:n}){const s=p.useRef(null),c=F(i=>i.camera),o=p.useMemo(()=>new R,[]);ae(()=>{const i=s.current,l=i==null?void 0:i.parent;if(!i||!l)return;let h=-1/0,d=[1,-1];for(const m of[-1,1])for(const w of[-1,1])o.set(m*e.w/2,t+e.h,w*e.d/2),l.localToWorld(o).project(c),o.x+o.y>h&&(h=o.x+o.y,d=[m,w]);i.position.set(d[0]*e.w/2,t+e.h,d[1]*e.d/2)});const a=i=>i.stopPropagation();return r.jsx("group",{ref:s,children:r.jsx(Re,{center:!0,zIndexRange:[20,0],children:r.jsx("button",{className:"rot3d",title:"30° 돌리기 (누를 때마다 시계 방향)","aria-label":"30도 돌리기",onPointerDown:a,onPointerUp:a,onDoubleClick:a,onClick:i=>{i.stopPropagation(),n()},children:"↻"})})})}export{ji as default};
