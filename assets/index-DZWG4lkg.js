(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ga="166",Cc=0,_o=1,Pc=2,Dl=1,Lc=2,yn=3,kn=0,Be=1,an=2,zn=0,ai=1,rr=2,xo=3,vo=4,Dc=5,ni=100,Ic=101,Nc=102,Uc=103,Oc=104,Fc=200,zc=201,Bc=202,kc=203,oa=204,la=205,Gc=206,Hc=207,Vc=208,Wc=209,Xc=210,qc=211,Yc=212,Kc=213,$c=214,Zc=0,jc=1,Jc=2,ar=3,Qc=4,th=5,eh=6,nh=7,Ha=0,ih=1,sh=2,Bn=0,rh=1,ah=2,oh=3,lh=4,ch=5,hh=6,dh=7,Il=300,zi=301,Bi=302,ca=303,ha=304,gr=306,or=1e3,si=1001,da=1002,Fe=1003,uh=1004,rs=1005,Ke=1006,Tr=1007,ri=1008,An=1009,Nl=1010,Ul=1011,cs=1012,Va=1013,li=1014,En=1015,us=1016,Wa=1017,Xa=1018,ki=1020,Ol=35902,Fl=1021,zl=1022,ln=1023,Bl=1024,kl=1025,Ui=1026,Gi=1027,Gl=1028,qa=1029,Hl=1030,Ya=1031,Ka=1033,Qs=33776,tr=33777,er=33778,nr=33779,ua=35840,fa=35841,pa=35842,ma=35843,ga=36196,_a=37492,xa=37496,va=37808,Ma=37809,ya=37810,Sa=37811,Ea=37812,ba=37813,Ta=37814,Aa=37815,wa=37816,Ra=37817,Ca=37818,Pa=37819,La=37820,Da=37821,ir=36492,Ia=36494,Na=36495,Vl=36283,Ua=36284,Oa=36285,Fa=36286,fh=3200,ph=3201,Wl=0,mh=1,Fn="",Ye="srgb",Vn="srgb-linear",$a="display-p3",_r="display-p3-linear",lr="linear",ue="srgb",cr="rec709",hr="p3",ui=7680,Mo=519,gh=512,_h=513,xh=514,Xl=515,vh=516,Mh=517,yh=518,Sh=519,za=35044,yo="300 es",bn=2e3,dr=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let So=1234567;const Oi=Math.PI/180,hs=180/Math.PI;function Tn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Oe(s,t,e){return Math.max(t,Math.min(e,s))}function Za(s,t){return(s%t+t)%t}function Eh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function bh(s,t,e){return s!==t?(e-s)/(t-s):0}function ls(s,t,e){return(1-e)*s+e*t}function Th(s,t,e,n){return ls(s,t,1-Math.exp(-e*n))}function Ah(s,t=1){return t-Math.abs(Za(s,t*2)-t)}function wh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Rh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ch(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ph(s,t){return s+Math.random()*(t-s)}function Lh(s){return s*(.5-Math.random())}function Dh(s){s!==void 0&&(So=s);let t=So+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ih(s){return s*Oi}function Nh(s){return s*hs}function Uh(s){return(s&s-1)===0&&s!==0}function Oh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Fh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zh(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),f=o((t+n)/2),d=r((t-n)/2),h=o((t-n)/2),u=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*f,l*d,l*h,a*c);break;case"YZY":s.set(l*h,a*f,l*d,a*c);break;case"ZXZ":s.set(l*d,l*h,a*f,a*c);break;case"XZX":s.set(a*f,l*g,l*u,a*c);break;case"YXY":s.set(l*u,a*f,l*g,a*c);break;case"ZYZ":s.set(l*g,l*u,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function on(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const oi={DEG2RAD:Oi,RAD2DEG:hs,generateUUID:Tn,clamp:Oe,euclideanModulo:Za,mapLinear:Eh,inverseLerp:bh,lerp:ls,damp:Th,pingpong:Ah,smoothstep:wh,smootherstep:Rh,randInt:Ch,randFloat:Ph,randFloatSpread:Lh,seededRandom:Dh,degToRad:Ih,radToDeg:Nh,isPowerOfTwo:Uh,ceilPowerOfTwo:Oh,floorPowerOfTwo:Fh,setQuaternionFromProperEuler:zh,normalize:ae,denormalize:on};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,i,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const f=this.elements;return f[0]=t,f[1]=i,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],d=n[7],h=n[2],u=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],v=i[4],S=i[7],L=i[2],A=i[5],R=i[8];return r[0]=o*_+a*x+l*L,r[3]=o*m+a*v+l*A,r[6]=o*p+a*S+l*R,r[1]=c*_+f*x+d*L,r[4]=c*m+f*v+d*A,r[7]=c*p+f*S+d*R,r[2]=h*_+u*x+g*L,r[5]=h*m+u*v+g*A,r[8]=h*p+u*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*r*f+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],d=f*o-a*c,h=a*l-f*r,u=c*r-o*l,g=e*d+n*h+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-f*n)*_,t[2]=(a*n-i*o)*_,t[3]=h*_,t[4]=(f*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ar.makeScale(t,e)),this}rotate(t){return this.premultiply(Ar.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ar.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new qt;function ql(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bh(){const s=ur("canvas");return s.style.display="block",s}const Eo={};function ja(s){s in Eo||(Eo[s]=!0,console.warn(s))}function kh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const bo=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),To=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vs={[Vn]:{transfer:lr,primaries:cr,toReference:s=>s,fromReference:s=>s},[Ye]:{transfer:ue,primaries:cr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[_r]:{transfer:lr,primaries:hr,toReference:s=>s.applyMatrix3(To),fromReference:s=>s.applyMatrix3(bo)},[$a]:{transfer:ue,primaries:hr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(To),fromReference:s=>s.applyMatrix3(bo).convertLinearToSRGB()}},Gh=new Set([Vn,_r]),le={enabled:!0,_workingColorSpace:Vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Gh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=vs[t].toReference,i=vs[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return vs[s].primaries},getTransfer:function(s){return s===Fn?lr:vs[s].transfer}};function Fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fi;class Hh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=ur("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fi(e[n]/255)*255):e[n]=Fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vh=0;class Yl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Tn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Rr(i[o].image)):r.push(Rr(i[o]))}else r=Rr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Rr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wh=0;class ke extends Wi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=si,i=si,r=Ke,o=ri,a=ln,l=An,c=ke.DEFAULT_ANISOTROPY,f=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Tn(),this.name="",this.source=new Yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case or:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case or:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Il;ke.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,n=0,i=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],u=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(u+1)/2,L=(p+1)/2,A=(f+h)/4,R=(d+_)/4,I=(g+m)/4;return v>S&&v>L?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=R/n):S>L?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=A/i,r=I/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=R/r,i=I/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(h-f)/x,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xh extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Xh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kl extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qh extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],f=n[i+2],d=n[i+3];const h=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==h||c!==u||f!==g){let m=1-a;const p=l*h+c*u+f*g+d*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const L=Math.sqrt(v),A=Math.atan2(L,p*x);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}const S=a*x;if(l=l*m+h*S,c=c*m+u*S,f=f*m+g*S,d=d*m+_*S,m===1-a){const L=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=L,c*=L,f*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],f=n[i+3],d=r[o],h=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+f*d+l*u-c*h,t[e+1]=l*g+f*h+c*d-a*u,t[e+2]=c*g+f*u+a*h-l*d,t[e+3]=f*g-a*d-l*h-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(i/2),d=a(r/2),h=l(n/2),u=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=h*f*d+c*u*g,this._y=c*u*d-h*f*g,this._z=c*f*g+h*u*d,this._w=c*f*d-h*u*g;break;case"YXZ":this._x=h*f*d+c*u*g,this._y=c*u*d-h*f*g,this._z=c*f*g-h*u*d,this._w=c*f*d+h*u*g;break;case"ZXY":this._x=h*f*d-c*u*g,this._y=c*u*d+h*f*g,this._z=c*f*g+h*u*d,this._w=c*f*d-h*u*g;break;case"ZYX":this._x=h*f*d-c*u*g,this._y=c*u*d+h*f*g,this._z=c*f*g-h*u*d,this._w=c*f*d+h*u*g;break;case"YZX":this._x=h*f*d+c*u*g,this._y=c*u*d+h*f*g,this._z=c*f*g-h*u*d,this._w=c*f*d-h*u*g;break;case"XZY":this._x=h*f*d-c*u*g,this._y=c*u*d-h*f*g,this._z=c*f*g+h*u*d,this._w=c*f*d+h*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],d=e[10],h=n+a+d;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(f-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(f-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+f)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+i*c-r*l,this._y=i*f+o*l+r*a-n*c,this._z=r*f+o*c+n*l-i*a,this._w=o*f-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-e)*f)/c,h=Math.sin(e*f)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ao.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ao.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),f=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*f,this.y=n+l*f+a*c-r*d,this.z=i+l*d+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cr.copy(this).projectOnVector(t),this.sub(Cr)}reflect(t){return this.sub(Cr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cr=new P,Ao=new fs;class ps{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),ys.subVectors(this.max,Yi),pi.subVectors(t.a,Yi),mi.subVectors(t.b,Yi),gi.subVectors(t.c,Yi),Cn.subVectors(mi,pi),Pn.subVectors(gi,mi),qn.subVectors(pi,gi);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-qn.z,qn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,qn.z,0,-qn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-qn.y,qn.x,0];return!Pr(e,pi,mi,gi,ys)||(e=[1,0,0,0,1,0,0,0,1],!Pr(e,pi,mi,gi,ys))?!1:(Ss.crossVectors(Cn,Pn),e=[Ss.x,Ss.y,Ss.z],Pr(e,pi,mi,gi,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new P,new P,new P,new P,new P,new P,new P,new P],tn=new P,Ms=new ps,pi=new P,mi=new P,gi=new P,Cn=new P,Pn=new P,qn=new P,Yi=new P,ys=new P,Ss=new P,Yn=new P;function Pr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Yn.fromArray(s,r);const a=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),l=t.dot(Yn),c=e.dot(Yn),f=n.dot(Yn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Yh=new ps,Ki=new P,Lr=new P;class ms{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ki.subVectors(t,this.center);const e=Ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ki,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ki.copy(t.center).add(Lr)),this.expandByPoint(Ki.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new P,Dr=new P,Es=new P,Ln=new P,Ir=new P,bs=new P,Nr=new P;class Ja{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Dr.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(Dr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Es),a=Ln.dot(this.direction),l=-Ln.dot(Es),c=Ln.lengthSq(),f=Math.abs(1-o*o);let d,h,u,g;if(f>0)if(d=o*l-a,h=o*a-l,g=r*f,d>=0)if(h>=-g)if(h<=g){const _=1/f;d*=_,h*=_,u=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),u=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),u=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),u=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),u=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Dr).addScaledVector(Es,h),u}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),i=_n.dot(_n)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),f>=0?(r=(t.min.y-h.y)*f,o=(t.max.y-h.y)*f):(r=(t.max.y-h.y)*f,o=(t.min.y-h.y)*f),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,i,r){Ir.subVectors(e,t),bs.subVectors(n,t),Nr.crossVectors(Ir,bs);let o=this.direction.dot(Nr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,t);const l=a*this.direction.dot(bs.crossVectors(Ln,bs));if(l<0)return null;const c=a*this.direction.dot(Ir.cross(Ln));if(c<0||l+c>o)return null;const f=-a*Ln.dot(Nr);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,i,r,o,a,l,c,f,d,h,u,g,_,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,f,d,h,u,g,_,m)}set(t,e,n,i,r,o,a,l,c,f,d,h,u,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=d,p[14]=h,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),o=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),f=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*f,u=o*d,g=a*f,_=a*d;e[0]=l*f,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*f,u=l*d,g=c*f,_=c*d;e[0]=h+_*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*f,e[9]=-a,e[2]=u*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*f,u=l*d,g=c*f,_=c*d;e[0]=h-_*a,e[4]=-o*d,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*f,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*f,u=o*d,g=a*f,_=a*d;e[0]=l*f,e[4]=g*c-u,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*f,e[4]=_-h*d,e[8]=g*d+u,e[1]=d,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=u*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*f,e[4]=-d,e[8]=c*f,e[1]=h*d+_,e[5]=o*f,e[9]=u*d-g,e[2]=g*d-u,e[6]=a*f,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kh,t,$h)}lookAt(t,e,n){const i=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Dn.crossVectors(n,Xe),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Dn.crossVectors(n,Xe)),Dn.normalize(),Ts.crossVectors(Xe,Dn),i[0]=Dn.x,i[4]=Ts.x,i[8]=Xe.x,i[1]=Dn.y,i[5]=Ts.y,i[9]=Xe.y,i[2]=Dn.z,i[6]=Ts.z,i[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],d=n[5],h=n[9],u=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],v=n[7],S=n[11],L=n[15],A=i[0],R=i[4],I=i[8],E=i[12],M=i[1],C=i[5],H=i[9],G=i[13],j=i[2],K=i[6],$=i[10],J=i[14],q=i[3],gt=i[7],xt=i[11],yt=i[15];return r[0]=o*A+a*M+l*j+c*q,r[4]=o*R+a*C+l*K+c*gt,r[8]=o*I+a*H+l*$+c*xt,r[12]=o*E+a*G+l*J+c*yt,r[1]=f*A+d*M+h*j+u*q,r[5]=f*R+d*C+h*K+u*gt,r[9]=f*I+d*H+h*$+u*xt,r[13]=f*E+d*G+h*J+u*yt,r[2]=g*A+_*M+m*j+p*q,r[6]=g*R+_*C+m*K+p*gt,r[10]=g*I+_*H+m*$+p*xt,r[14]=g*E+_*G+m*J+p*yt,r[3]=x*A+v*M+S*j+L*q,r[7]=x*R+v*C+S*K+L*gt,r[11]=x*I+v*H+S*$+L*xt,r[15]=x*E+v*G+S*J+L*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],u=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*d-i*c*d-r*a*h+n*c*h+i*a*u-n*l*u)+_*(+e*l*u-e*c*h+r*o*h-i*o*u+i*c*f-r*l*f)+m*(+e*c*d-e*a*u-r*o*d+n*o*u+r*a*f-n*c*f)+p*(-i*a*f-e*l*d+e*a*h+i*o*d-n*o*h+n*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],u=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=d*m*c-_*h*c+_*l*u-a*m*u-d*l*p+a*h*p,v=g*h*c-f*m*c-g*l*u+o*m*u+f*l*p-o*h*p,S=f*_*c-g*d*c+g*a*u-o*_*u-f*a*p+o*d*p,L=g*d*l-f*_*l-g*a*h+o*_*h+f*a*m-o*d*m,A=e*x+n*v+i*S+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=x*R,t[1]=(_*h*r-d*m*r-_*i*u+n*m*u+d*i*p-n*h*p)*R,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*R,t[3]=(d*l*r-a*h*r-d*i*c+n*h*c+a*i*u-n*l*u)*R,t[4]=v*R,t[5]=(f*m*r-g*h*r+g*i*u-e*m*u-f*i*p+e*h*p)*R,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*R,t[7]=(o*h*r-f*l*r+f*i*c-e*h*c-o*i*u+e*l*u)*R,t[8]=S*R,t[9]=(g*d*r-f*_*r-g*n*u+e*_*u+f*n*p-e*d*p)*R,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*R,t[11]=(f*a*r-o*d*r-f*n*c+e*d*c+o*n*u-e*a*u)*R,t[12]=L*R,t[13]=(f*_*i-g*d*i+g*n*h-e*_*h-f*n*m+e*d*m)*R,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*R,t[15]=(o*d*i-f*a*i+f*n*l-e*d*l-o*n*h+e*a*h)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,f*a+n,f*l-i*o,0,c*l-i*a,f*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,d=a+a,h=r*c,u=r*f,g=r*d,_=o*f,m=o*d,p=a*d,x=l*c,v=l*f,S=l*d,L=n.x,A=n.y,R=n.z;return i[0]=(1-(_+p))*L,i[1]=(u+S)*L,i[2]=(g-v)*L,i[3]=0,i[4]=(u-S)*A,i[5]=(1-(h+p))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(g+v)*R,i[9]=(m-x)*R,i[10]=(1-(h+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=_i.set(i[0],i[1],i[2]).length();const o=_i.set(i[4],i[5],i[6]).length(),a=_i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],en.copy(this);const c=1/r,f=1/o,d=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=f,en.elements[5]*=f,en.elements[6]*=f,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,e.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=bn){const l=this.elements,c=2*r/(e-t),f=2*r/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i);let u,g;if(a===bn)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===dr)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=bn){const l=this.elements,c=1/(e-t),f=1/(n-i),d=1/(o-r),h=(e+t)*c,u=(n+i)*f;let g,_;if(a===bn)g=(o+r)*d,_=-2*d;else if(a===dr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _i=new P,en=new pe,Kh=new P(0,0,0),$h=new P(1,1,1),Dn=new P,Ts=new P,Xe=new P,wo=new pe,Ro=new fs;class pn{constructor(t=0,e=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],f=i[9],d=i[2],h=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ro.setFromEuler(this),this.setFromQuaternion(Ro,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class $l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zh=0;const Co=new P,xi=new fs,xn=new pe,As=new P,$i=new P,jh=new P,Jh=new fs,Po=new P(1,0,0),Lo=new P(0,1,0),Do=new P(0,0,1),Io={type:"added"},Qh={type:"removed"},vi={type:"childadded",child:null},Ur={type:"childremoved",child:null};class Te extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new P,e=new pn,n=new fs,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new qt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(Po,t)}rotateY(t){return this.rotateOnAxis(Lo,t)}rotateZ(t){return this.rotateOnAxis(Do,t)}translateOnAxis(t,e){return Co.copy(t).applyQuaternion(this.quaternion),this.position.add(Co.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Po,t)}translateY(t){return this.translateOnAxis(Lo,t)}translateZ(t){return this.translateOnAxis(Do,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?As.copy(t):As.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt($i,As,this.up):xn.lookAt(As,$i,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),xi.setFromRotationMatrix(xn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Io),vi.child=t,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qh),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Io),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,jh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),d=o(t.shapes),h=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Te.DEFAULT_UP=new P(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new P,vn=new P,Or=new P,Mn=new P,Mi=new P,yi=new P,No=new P,Fr=new P,zr=new P,Br=new P;class Je{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),nn.subVectors(t,e),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){nn.subVectors(i,e),vn.subVectors(n,e),Or.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(vn),l=nn.dot(Or),c=vn.dot(vn),f=vn.dot(Or),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,u=(c*l-a*f)*h,g=(o*f-a*l)*h;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(o,Mn.y),l.addScaledVector(a,Mn.z),l)}static isFrontFacing(t,e,n,i){return nn.subVectors(n,e),vn.subVectors(t,e),nn.cross(vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),nn.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Mi.subVectors(i,n),yi.subVectors(r,n),Fr.subVectors(t,n);const l=Mi.dot(Fr),c=yi.dot(Fr);if(l<=0&&c<=0)return e.copy(n);zr.subVectors(t,i);const f=Mi.dot(zr),d=yi.dot(zr);if(f>=0&&d<=f)return e.copy(i);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(Mi,o);Br.subVectors(t,r);const u=Mi.dot(Br),g=yi.dot(Br);if(g>=0&&u<=g)return e.copy(r);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(yi,a);const m=f*g-u*d;if(m<=0&&d-f>=0&&u-g>=0)return No.subVectors(r,i),a=(d-f)/(d-f+(u-g)),e.copy(i).addScaledVector(No,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(Mi,o).addScaledVector(yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},ws={h:0,s:0,l:0};function kr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=Za(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=kr(o,r,t+1/3),this.g=kr(o,r,t),this.b=kr(o,r,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=Zl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return le.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Oe(Ie.r*255,0,255))*65536+Math.round(Oe(Ie.g*255,0,255))*256+Math.round(Oe(Ie.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,i=Ie.g,r=Ie.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ye){le.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,i=Ie.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(ws);const n=ls(In.h,ws.h,e),i=ls(In.s,ws.s,e),r=ls(In.l,ws.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Dt;Dt.NAMES=Zl;let td=0;class Wn extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=ai,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=la,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ce extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new P,Rs=new Ht;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ja("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=on(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=on(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=on(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=on(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==za&&(t.usage=this.usage),t}}class jl extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jl extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ed=0;const je=new pe,Gr=new Te,Si=new P,qe=new ps,Zi=new ps,Re=new P;class Ge extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ql(t)?Jl:jl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Gr.lookAt(t),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(qe.min,Zi.min),qe.expandByPoint(Re),Re.addVectors(qe.max,Zi.max),qe.expandByPoint(Re)):(qe.expandByPoint(Zi.min),qe.expandByPoint(Zi.max))}qe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Re.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(t,c),Re.add(Si)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new P,l[I]=new P;const c=new P,f=new P,d=new P,h=new Ht,u=new Ht,g=new Ht,_=new P,m=new P;function p(I,E,M){c.fromBufferAttribute(n,I),f.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),h.fromBufferAttribute(r,I),u.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),f.sub(c),d.sub(c),u.sub(h),g.sub(h);const C=1/(u.x*g.y-g.x*u.y);isFinite(C)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(C),m.copy(d).multiplyScalar(u.x).addScaledVector(f,-g.x).multiplyScalar(C),a[I].add(_),a[E].add(_),a[M].add(_),l[I].add(m),l[E].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,E=x.length;I<E;++I){const M=x[I],C=M.start,H=M.count;for(let G=C,j=C+H;G<j;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const v=new P,S=new P,L=new P,A=new P;function R(I){L.fromBufferAttribute(i,I),A.copy(L);const E=a[I];v.copy(E),v.sub(L.multiplyScalar(L.dot(E))).normalize(),S.crossVectors(A,E);const C=S.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,C)}for(let I=0,E=x.length;I<E;++I){const M=x[I],C=M.start,H=M.count;for(let G=C,j=C+H;G<j;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,f=new P,d=new P;if(t)for(let h=0,u=t.count;h<u;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),f.subVectors(o,r),d.subVectors(i,r),f.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(f),l.add(f),c.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,u=e.count;h<u;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),f.subVectors(o,r),d.subVectors(i,r),f.cross(d),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let u=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*f;for(let p=0;p<f;p++)h[g++]=c[u++]}return new cn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],u=t(h,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const u=c[d];f.push(u.toJSON(t.data))}f.length>0&&(i[l]=f,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const f=i[c];this.setAttribute(c,f.clone(e))}const r=t.morphAttributes;for(const c in r){const f=[],d=r[c];for(let h=0,u=d.length;h<u;h++)f.push(d[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new pe,Kn=new Ja,Cs=new ms,Oo=new P,Ei=new P,bi=new P,Ti=new P,Hr=new P,Ps=new P,Ls=new Ht,Ds=new Ht,Is=new Ht,Fo=new P,zo=new P,Bo=new P,Ns=new P,Us=new P;class Yt extends Te{constructor(t=new Ge,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ps.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const f=a[l],d=r[l];f!==0&&(Hr.fromBufferAttribute(d,t),o?Ps.addScaledVector(Hr,f):Ps.addScaledVector(Hr.sub(e),f))}e.add(Ps)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(Cs.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Cs,Oo)===null||Kn.origin.distanceToSquared(Oo)>(t.far-t.near)**2))&&(Uo.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(Uo),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,d=r.attributes.normal,h=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,u.start),v=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let S=x,L=v;S<L;S+=3){const A=a.getX(S),R=a.getX(S+1),I=a.getX(S+2);i=Os(this,p,t,n,c,f,d,A,R,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);i=Os(this,o,t,n,c,f,d,x,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,u.start),v=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let S=x,L=v;S<L;S+=3){const A=S,R=S+1,I=S+2;i=Os(this,p,t,n,c,f,d,A,R,I),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,S=m+2;i=Os(this,o,t,n,c,f,d,x,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function nd(s,t,e,n,i,r,o,a){let l;if(t.side===Be?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===kn,a),l===null)return null;Us.copy(a),Us.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Us);return c<e.near||c>e.far?null:{distance:c,point:Us.clone(),object:s}}function Os(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ei),s.getVertexPosition(l,bi),s.getVertexPosition(c,Ti);const f=nd(s,t,e,n,Ei,bi,Ti,Ns);if(f){i&&(Ls.fromBufferAttribute(i,a),Ds.fromBufferAttribute(i,l),Is.fromBufferAttribute(i,c),f.uv=Je.getInterpolation(Ns,Ei,bi,Ti,Ls,Ds,Is,new Ht)),r&&(Ls.fromBufferAttribute(r,a),Ds.fromBufferAttribute(r,l),Is.fromBufferAttribute(r,c),f.uv1=Je.getInterpolation(Ns,Ei,bi,Ti,Ls,Ds,Is,new Ht)),o&&(Fo.fromBufferAttribute(o,a),zo.fromBufferAttribute(o,l),Bo.fromBufferAttribute(o,c),f.normal=Je.getInterpolation(Ns,Ei,bi,Ti,Fo,zo,Bo,new P),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};Je.getNormal(Ei,bi,Ti,d.normal),f.face=d}return f}class te extends Ge{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(f,3)),this.setAttribute("uv",new ve(d,2));function g(_,m,p,x,v,S,L,A,R,I,E){const M=S/R,C=L/I,H=S/2,G=L/2,j=A/2,K=R+1,$=I+1;let J=0,q=0;const gt=new P;for(let xt=0;xt<$;xt++){const yt=xt*C-G;for(let Ft=0;Ft<K;Ft++){const Kt=Ft*M-H;gt[_]=Kt*x,gt[m]=yt*v,gt[p]=j,c.push(gt.x,gt.y,gt.z),gt[_]=0,gt[m]=0,gt[p]=A>0?1:-1,f.push(gt.x,gt.y,gt.z),d.push(Ft/R),d.push(1-xt/I),J+=1}}for(let xt=0;xt<I;xt++)for(let yt=0;yt<R;yt++){const Ft=h+yt+K*xt,Kt=h+yt+K*(xt+1),B=h+(yt+1)+K*(xt+1),Z=h+(yt+1)+K*xt;l.push(Ft,Kt,Z),l.push(Kt,B,Z),q+=6}a.addGroup(u,q,E),u+=q,h+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){const t={};for(let e=0;e<s.length;e++){const n=Hi(s[e]);for(const i in n)t[i]=n[i]}return t}function id(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ql(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const sd={clone:Hi,merge:Ue};var rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class tc extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new P,ko=new Ht,Go=new Ht;class He extends tc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,ko,Go),e.subVectors(Go,ko)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Oi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,wi=1;class od extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new He(Ai,wi,t,e);i.layers=this.layers,this.add(i);const r=new He(Ai,wi,t,e);r.layers=this.layers,this.add(r);const o=new He(Ai,wi,t,e);o.layers=this.layers,this.add(o);const a=new He(Ai,wi,t,e);a.layers=this.layers,this.add(a);const l=new He(Ai,wi,t,e);l.layers=this.layers,this.add(l);const c=new He(Ai,wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,f),t.setRenderTarget(d,h,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ec extends ke{constructor(t,e,n,i,r,o,a,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,i,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ld extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ec(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new te(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:zn});r.uniforms.tEquirect.value=e;const o=new Yt(i,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=Ke),new od(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Vr=new P,cd=new P,hd=new qt;class ti{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Vr.subVectors(n,e).cross(cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hd.getNormalMatrix(t),i=this.coplanarPoint(Vr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new ms,Fs=new P;class Qa{constructor(t=new ti,e=new ti,n=new ti,i=new ti,r=new ti,o=new ti){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],f=i[5],d=i[6],h=i[7],u=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-r,h-c,m-u,S-p).normalize(),n[1].setComponents(l+r,h+c,m+u,S+p).normalize(),n[2].setComponents(l+o,h+f,m+g,S+x).normalize(),n[3].setComponents(l-o,h-f,m-g,S-x).normalize(),n[4].setComponents(l-a,h-d,m-_,S-v).normalize(),e===bn)n[5].setComponents(l+a,h+d,m+_,S+v).normalize();else if(e===dr)n[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fs.x=i.normal.x>0?t.max.x:t.min.x,Fs.y=i.normal.y>0?t.max.y:t.min.y,Fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function dd(s){const t=new WeakMap;function e(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,f),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const f=l.array,d=l._updateRange,h=l.updateRanges;if(s.bindBuffer(c,a),d.count===-1&&h.length===0&&s.bufferSubData(c,0,f),h.length!==0){for(let u=0,g=h.length;u<g;u++){const _=h[u];s.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(c,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class xr extends Ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,f=l+1,d=t/a,h=e/l,u=[],g=[],_=[],m=[];for(let p=0;p<f;p++){const x=p*h-o;for(let v=0;v<c;v++){const S=v*d-r;g.push(S,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,S=x+c*(p+1),L=x+1+c*(p+1),A=x+1+c*p;u.push(v,S,A),u.push(S,L,A)}this.setIndex(u),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.width,t.height,t.widthSegments,t.heightSegments)}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Td=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ad=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Od=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,su=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ru=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,au=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ou=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,du=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_u=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ru=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ku=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$u=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ju=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ju=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,af=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,of=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ff=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Mf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Af=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,If=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ff=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:ud,alphahash_pars_fragment:fd,alphamap_fragment:pd,alphamap_pars_fragment:md,alphatest_fragment:gd,alphatest_pars_fragment:_d,aomap_fragment:xd,aomap_pars_fragment:vd,batching_pars_vertex:Md,batching_vertex:yd,begin_vertex:Sd,beginnormal_vertex:Ed,bsdfs:bd,iridescence_fragment:Td,bumpmap_pars_fragment:Ad,clipping_planes_fragment:wd,clipping_planes_pars_fragment:Rd,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Pd,color_fragment:Ld,color_pars_fragment:Dd,color_pars_vertex:Id,color_vertex:Nd,common:Ud,cube_uv_reflection_fragment:Od,defaultnormal_vertex:Fd,displacementmap_pars_vertex:zd,displacementmap_vertex:Bd,emissivemap_fragment:kd,emissivemap_pars_fragment:Gd,colorspace_fragment:Hd,colorspace_pars_fragment:Vd,envmap_fragment:Wd,envmap_common_pars_fragment:Xd,envmap_pars_fragment:qd,envmap_pars_vertex:Yd,envmap_physical_pars_fragment:su,envmap_vertex:Kd,fog_vertex:$d,fog_pars_vertex:Zd,fog_fragment:jd,fog_pars_fragment:Jd,gradientmap_pars_fragment:Qd,lightmap_pars_fragment:tu,lights_lambert_fragment:eu,lights_lambert_pars_fragment:nu,lights_pars_begin:iu,lights_toon_fragment:ru,lights_toon_pars_fragment:au,lights_phong_fragment:ou,lights_phong_pars_fragment:lu,lights_physical_fragment:cu,lights_physical_pars_fragment:hu,lights_fragment_begin:du,lights_fragment_maps:uu,lights_fragment_end:fu,logdepthbuf_fragment:pu,logdepthbuf_pars_fragment:mu,logdepthbuf_pars_vertex:gu,logdepthbuf_vertex:_u,map_fragment:xu,map_pars_fragment:vu,map_particle_fragment:Mu,map_particle_pars_fragment:yu,metalnessmap_fragment:Su,metalnessmap_pars_fragment:Eu,morphinstance_vertex:bu,morphcolor_vertex:Tu,morphnormal_vertex:Au,morphtarget_pars_vertex:wu,morphtarget_vertex:Ru,normal_fragment_begin:Cu,normal_fragment_maps:Pu,normal_pars_fragment:Lu,normal_pars_vertex:Du,normal_vertex:Iu,normalmap_pars_fragment:Nu,clearcoat_normal_fragment_begin:Uu,clearcoat_normal_fragment_maps:Ou,clearcoat_pars_fragment:Fu,iridescence_pars_fragment:zu,opaque_fragment:Bu,packing:ku,premultiplied_alpha_fragment:Gu,project_vertex:Hu,dithering_fragment:Vu,dithering_pars_fragment:Wu,roughnessmap_fragment:Xu,roughnessmap_pars_fragment:qu,shadowmap_pars_fragment:Yu,shadowmap_pars_vertex:Ku,shadowmap_vertex:$u,shadowmask_pars_fragment:Zu,skinbase_vertex:ju,skinning_pars_vertex:Ju,skinning_vertex:Qu,skinnormal_vertex:tf,specularmap_fragment:ef,specularmap_pars_fragment:nf,tonemapping_fragment:sf,tonemapping_pars_fragment:rf,transmission_fragment:af,transmission_pars_fragment:of,uv_pars_fragment:lf,uv_pars_vertex:cf,uv_vertex:hf,worldpos_vertex:df,background_vert:uf,background_frag:ff,backgroundCube_vert:pf,backgroundCube_frag:mf,cube_vert:gf,cube_frag:_f,depth_vert:xf,depth_frag:vf,distanceRGBA_vert:Mf,distanceRGBA_frag:yf,equirect_vert:Sf,equirect_frag:Ef,linedashed_vert:bf,linedashed_frag:Tf,meshbasic_vert:Af,meshbasic_frag:wf,meshlambert_vert:Rf,meshlambert_frag:Cf,meshmatcap_vert:Pf,meshmatcap_frag:Lf,meshnormal_vert:Df,meshnormal_frag:If,meshphong_vert:Nf,meshphong_frag:Uf,meshphysical_vert:Of,meshphysical_frag:Ff,meshtoon_vert:zf,meshtoon_frag:Bf,points_vert:kf,points_frag:Gf,shadow_vert:Hf,shadow_frag:Vf,sprite_vert:Wf,sprite_frag:Xf},pt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},un={basic:{uniforms:Ue([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ue([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ue([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ue([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ue([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ue([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ue([pt.points,pt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ue([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ue([pt.common,pt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ue([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ue([pt.sprite,pt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ue([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ue([pt.lights,pt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};un.physical={uniforms:Ue([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const zs={r:0,b:0,g:0},Zn=new pn,qf=new pe;function Yf(s,t,e,n,i,r,o){const a=new Dt(0);let l=r===!0?0:1,c,f,d=null,h=0,u=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const S=g(x);S===null?p(a,l):S&&S.isColor&&(p(S,1),v=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===gr)?(f===void 0&&(f=new Yt(new te(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Hi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),Zn.copy(v.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(qf.makeRotationFromEuler(Zn)),f.material.toneMapped=le.getTransfer(S.colorSpace)!==ue,(d!==S||h!==S.version||u!==s.toneMapping)&&(f.material.needsUpdate=!0,d=S,h=S.version,u=s.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Yt(new xr(2,2),new Gn({name:"BackgroundMaterial",uniforms:Hi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=le.getTransfer(S.colorSpace)!==ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,u=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(zs,Ql(s)),n.buffers.color.setClear(zs.r,zs.g,zs.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m}}function Kf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,o=!1;function a(M,C,H,G,j){let K=!1;const $=d(G,H,C);r!==$&&(r=$,c(r.object)),K=u(M,G,H,j),K&&g(M,G,H,j),j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(M,C,H,G),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function f(M){return s.deleteVertexArray(M)}function d(M,C,H){const G=H.wireframe===!0;let j=n[M.id];j===void 0&&(j={},n[M.id]=j);let K=j[C.id];K===void 0&&(K={},j[C.id]=K);let $=K[G];return $===void 0&&($=h(l()),K[G]=$),$}function h(M){const C=[],H=[],G=[];for(let j=0;j<e;j++)C[j]=0,H[j]=0,G[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:G,object:M,attributes:{},index:null}}function u(M,C,H,G){const j=r.attributes,K=C.attributes;let $=0;const J=H.getAttributes();for(const q in J)if(J[q].location>=0){const xt=j[q];let yt=K[q];if(yt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),xt===void 0||xt.attribute!==yt||yt&&xt.data!==yt.data)return!0;$++}return r.attributesNum!==$||r.index!==G}function g(M,C,H,G){const j={},K=C.attributes;let $=0;const J=H.getAttributes();for(const q in J)if(J[q].location>=0){let xt=K[q];xt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor));const yt={};yt.attribute=xt,xt&&xt.data&&(yt.data=xt.data),j[q]=yt,$++}r.attributes=j,r.attributesNum=$,r.index=G}function _(){const M=r.newAttributes;for(let C=0,H=M.length;C<H;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const H=r.newAttributes,G=r.enabledAttributes,j=r.attributeDivisors;H[M]=1,G[M]===0&&(s.enableVertexAttribArray(M),G[M]=1),j[M]!==C&&(s.vertexAttribDivisor(M,C),j[M]=C)}function x(){const M=r.newAttributes,C=r.enabledAttributes;for(let H=0,G=C.length;H<G;H++)C[H]!==M[H]&&(s.disableVertexAttribArray(H),C[H]=0)}function v(M,C,H,G,j,K,$){$===!0?s.vertexAttribIPointer(M,C,H,j,K):s.vertexAttribPointer(M,C,H,G,j,K)}function S(M,C,H,G){_();const j=G.attributes,K=H.getAttributes(),$=C.defaultAttributeValues;for(const J in K){const q=K[J];if(q.location>=0){let gt=j[J];if(gt===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),gt!==void 0){const xt=gt.normalized,yt=gt.itemSize,Ft=t.get(gt);if(Ft===void 0)continue;const Kt=Ft.buffer,B=Ft.type,Z=Ft.bytesPerElement,ht=B===s.INT||B===s.UNSIGNED_INT||gt.gpuType===Va;if(gt.isInterleavedBufferAttribute){const _t=gt.data,Lt=_t.stride,zt=gt.offset;if(_t.isInstancedInterleavedBuffer){for(let Bt=0;Bt<q.locationSize;Bt++)p(q.location+Bt,_t.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Bt=0;Bt<q.locationSize;Bt++)m(q.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let Bt=0;Bt<q.locationSize;Bt++)v(q.location+Bt,yt/q.locationSize,B,xt,Lt*Z,(zt+yt/q.locationSize*Bt)*Z,ht)}else{if(gt.isInstancedBufferAttribute){for(let _t=0;_t<q.locationSize;_t++)p(q.location+_t,gt.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let _t=0;_t<q.locationSize;_t++)m(q.location+_t);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let _t=0;_t<q.locationSize;_t++)v(q.location+_t,yt/q.locationSize,B,xt,yt*Z,yt/q.locationSize*_t*Z,ht)}}else if($!==void 0){const xt=$[J];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(q.location,xt);break;case 3:s.vertexAttrib3fv(q.location,xt);break;case 4:s.vertexAttrib4fv(q.location,xt);break;default:s.vertexAttrib1fv(q.location,xt)}}}}x()}function L(){I();for(const M in n){const C=n[M];for(const H in C){const G=C[H];for(const j in G)f(G[j].object),delete G[j];delete C[H]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const H in C){const G=C[H];for(const j in G)f(G[j].object),delete G[j];delete C[H]}delete n[M.id]}function R(M){for(const C in n){const H=n[C];if(H[M.id]===void 0)continue;const G=H[M.id];for(const j in G)f(G[j].object),delete G[j];delete H[M.id]}}function I(){E(),o=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function $f(s,t,e){let n;function i(c){n=c}function r(c,f){s.drawArrays(n,c,f),e.update(f,n,1)}function o(c,f,d){d!==0&&(s.drawArraysInstanced(n,c,f,d),e.update(f,n,d))}function a(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,d);let u=0;for(let g=0;g<d;g++)u+=f[g];e.update(u,n,1)}function l(c,f,d,h){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],f[g],h[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,f,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];for(let _=0;_<h.length;_++)e.update(g,n,h[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==ln&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==An&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==En&&!R)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=e.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=u>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:u,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:S,maxSamples:L}}function jf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ti,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const u=d.length!==0||h||n!==0||i;return i=h,n=d.length,u},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=f(d,h,0)},this.setState=function(d,h,u){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?f(null):c();else{const x=r?0:n,v=x*4;let S=p.clippingState||null;l.value=S,S=f(g,h,v,u);for(let L=0;L!==v;++L)S[L]=e[L];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(d,h,u,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=u+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=u;v!==_;++v,S+=4)o.copy(d[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Jf(s){let t=new WeakMap;function e(o,a){return a===ca?o.mapping=zi:a===ha&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ca||a===ha)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ld(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ic extends tc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ni=4,Ho=[.125,.215,.35,.446,.526,.582],ii=20,Wr=new ic,Vo=new Dt;let Xr=null,qr=0,Yr=0,Kr=!1;const ei=(1+Math.sqrt(5))/2,Ri=1/ei,Wo=[new P(-ei,Ri,0),new P(ei,Ri,0),new P(-Ri,0,ei),new P(Ri,0,ei),new P(0,ei,-Ri),new P(0,ei,Ri),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Xo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xr,qr,Yr),this._renderer.xr.enabled=Kr,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:us,format:ln,colorSpace:Vn,depthBuffer:!1},i=qo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qf(r)),this._blurMaterial=tp(r,t,e)}return i}_compileMaterial(t){const e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,i){const a=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Vo),f.toneMapping=Bn,f.autoClear=!1;const u=new Ce({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new Yt(new te,u);let _=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,_=!0):(u.color.copy(Vo),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Bs(i,x*v,p>2?v:0,v,v),f.setRenderTarget(i),_&&f.render(g,a),f.render(t,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===zi||t.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yo());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wo[(i-r-1)%Wo.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Yt(this._lodPlanes[i],c),h=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ii-1),_=r/g,m=isFinite(r)?1+Math.floor(f*_):ii;m>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);const p=[];let x=0;for(let R=0;R<ii;++R){const I=R/_,E=Math.exp(-I*I/2);p.push(E),R===0?x+=E:R<m&&(x+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const S=this._sizeLods[i],L=3*S*(i>v-Ni?i-v+Ni:0),A=4*(this._cubeSize-S);Bs(e,L,A,3*S,2*S),l.setRenderTarget(e),l.render(d,Wr)}}function Qf(s){const t=[],e=[],n=[];let i=s;const r=s-Ni+1+Ho.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ni?l=Ho[o-s+Ni-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],u=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*u),v=new Float32Array(m*g*u),S=new Float32Array(p*g*u);for(let A=0;A<u;A++){const R=A%3*2/3-1,I=A>2?0:-1,E=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];x.set(E,_*g*A),v.set(h,m*g*A);const M=[A,A,A,A,A,A];S.set(M,p*g*A)}const L=new Ge;L.setAttribute("position",new cn(x,_)),L.setAttribute("uv",new cn(v,m)),L.setAttribute("faceIndex",new cn(S,p)),t.push(L),i>Ni&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qo(s,t,e){const n=new ci(s,t,e);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function tp(s,t,e){const n=new Float32Array(ii),i=new P(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Yo(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ko(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function to(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ep(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ca||l===ha,f=l===zi||l===Bi;if(c||f){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Xo(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const u=a.image;return c&&u&&u.height>0||f&&u&&i(u)?(e===null&&(e=new Xo(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function np(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ja("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ip(s,t,e,n){const i={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete i[h.id];const u=r.get(h);u&&(t.remove(u),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],s.ARRAY_BUFFER);const u=d.morphAttributes;for(const g in u){const _=u[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(d){const h=[],u=d.index,g=d.attributes.position;let _=0;if(u!==null){const x=u.array;_=u.version;for(let v=0,S=x.length;v<S;v+=3){const L=x[v+0],A=x[v+1],R=x[v+2];h.push(L,A,A,R,R,L)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const L=v+0,A=v+1,R=v+2;h.push(L,A,A,R,R,L)}}else return;const m=new(ql(h)?Jl:jl)(h,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function f(d){const h=r.get(d);if(h){const u=d.index;u!==null&&h.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function sp(s,t,e){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,u){s.drawElements(n,u,r,h*o),e.update(u,n,1)}function c(h,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,h*o,g),e.update(u,n,g))}function f(h,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function d(h,u,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,u[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,h,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=u[x];for(let x=0;x<_.length;x++)e.update(p,n,_[x])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function rp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ap(s,t,e){const n=new WeakMap,i=new fe;function r(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var u=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let L=a.attributes.position.count*S,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*A*4*d),I=new Kl(R,L,A,d);I.type=En,I.needsUpdate=!0;const E=S*4;for(let C=0;C<d;C++){const H=p[C],G=x[C],j=v[C],K=L*A*4*C;for(let $=0;$<H.count;$++){const J=$*E;g===!0&&(i.fromBufferAttribute(H,$),R[K+J+0]=i.x,R[K+J+1]=i.y,R[K+J+2]=i.z,R[K+J+3]=0),_===!0&&(i.fromBufferAttribute(G,$),R[K+J+4]=i.x,R[K+J+5]=i.y,R[K+J+6]=i.z,R[K+J+7]=0),m===!0&&(i.fromBufferAttribute(j,$),R[K+J+8]=i.x,R[K+J+9]=i.y,R[K+J+10]=i.z,R[K+J+11]=j.itemSize===4?i.w:1)}}h={count:d,texture:I,size:new Ht(L,A)},n.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function op(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,f=l.geometry,d=t.get(l,f);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class sc extends ke{constructor(t,e,n,i,r,o,a,l,c,f=Ui){if(f!==Ui&&f!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ui&&(n=li),n===void 0&&f===Gi&&(n=ki),super(null,i,r,o,a,l,f,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fe,this.minFilter=l!==void 0?l:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rc=new ke,$o=new sc(1,1),ac=new Kl,oc=new qh,lc=new ec,Zo=[],jo=[],Jo=new Float32Array(16),Qo=new Float32Array(9),tl=new Float32Array(4);function Xi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Zo[i];if(r===void 0&&(r=new Float32Array(i),Zo[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function vr(s,t){let e=jo[t];e===void 0&&(e=new Int32Array(t),jo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function lp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function up(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,n))return;tl.set(n),s.uniformMatrix2fv(this.addr,!1,tl),we(e,n)}}function fp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,n))return;Qo.set(n),s.uniformMatrix3fv(this.addr,!1,Qo),we(e,n)}}function pp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,n))return;Jo.set(n),s.uniformMatrix4fv(this.addr,!1,Jo),we(e,n)}}function mp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function gp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function _p(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function vp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function Sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function Ep(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?($o.compareFunction=Xl,r=$o):r=rc,e.setTexture2D(t||r,i)}function bp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||oc,i)}function Tp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lc,i)}function Ap(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ac,i)}function wp(s){switch(s){case 5126:return lp;case 35664:return cp;case 35665:return hp;case 35666:return dp;case 35674:return up;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return gp;case 35668:case 35672:return _p;case 35669:case 35673:return xp;case 5125:return vp;case 36294:return Mp;case 36295:return yp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ep;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return Ap}}function Rp(s,t){s.uniform1fv(this.addr,t)}function Cp(s,t){const e=Xi(t,this.size,2);s.uniform2fv(this.addr,e)}function Pp(s,t){const e=Xi(t,this.size,3);s.uniform3fv(this.addr,e)}function Lp(s,t){const e=Xi(t,this.size,4);s.uniform4fv(this.addr,e)}function Dp(s,t){const e=Xi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ip(s,t){const e=Xi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Np(s,t){const e=Xi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Up(s,t){s.uniform1iv(this.addr,t)}function Op(s,t){s.uniform2iv(this.addr,t)}function Fp(s,t){s.uniform3iv(this.addr,t)}function zp(s,t){s.uniform4iv(this.addr,t)}function Bp(s,t){s.uniform1uiv(this.addr,t)}function kp(s,t){s.uniform2uiv(this.addr,t)}function Gp(s,t){s.uniform3uiv(this.addr,t)}function Hp(s,t){s.uniform4uiv(this.addr,t)}function Vp(s,t,e){const n=this.cache,i=t.length,r=vr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||rc,r[o])}function Wp(s,t,e){const n=this.cache,i=t.length,r=vr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||oc,r[o])}function Xp(s,t,e){const n=this.cache,i=t.length,r=vr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||lc,r[o])}function qp(s,t,e){const n=this.cache,i=t.length,r=vr(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ac,r[o])}function Yp(s){switch(s){case 5126:return Rp;case 35664:return Cp;case 35665:return Pp;case 35666:return Lp;case 35674:return Dp;case 35675:return Ip;case 35676:return Np;case 5124:case 35670:return Up;case 35667:case 35671:return Op;case 35668:case 35672:return Fp;case 35669:case 35673:return zp;case 5125:return Bp;case 36294:return kp;case 36295:return Gp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}class Kp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wp(e.type)}}class $p{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yp(e.type)}}class Zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const $r=/(\w+)(\])?(\[|\.)?/g;function el(s,t){s.seq.push(t),s.map[t.id]=t}function jp(s,t,e){const n=s.name,i=n.length;for($r.lastIndex=0;;){const r=$r.exec(n),o=$r.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){el(e,c===void 0?new Kp(a,s,t):new $p(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Zp(a),el(e,d)),e=d}}}class sr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);jp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function nl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Jp=37297;let Qp=0;function tm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function em(s){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(s);let n;switch(t===e?n="":t===hr&&e===cr?n="LinearDisplayP3ToLinearSRGB":t===cr&&e===hr&&(n="LinearSRGBToLinearDisplayP3"),s){case Vn:case _r:return[n,"LinearTransferOETF"];case Ye:case $a:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function il(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+tm(s.getShaderSource(t),o)}else return i}function nm(s,t){const e=em(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function im(s,t){let e;switch(t){case rh:e="Linear";break;case ah:e="Reinhard";break;case oh:e="OptimizedCineon";break;case lh:e="ACESFilmic";break;case hh:e="AgX";break;case dh:e="Neutral";break;case ch:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function sm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function rm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function am(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function as(s){return s!==""}function sl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const om=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(s){return s.replace(om,cm)}const lm=new Map;function cm(s,t){let e=Wt[t];if(e===void 0){const n=lm.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ba(e)}const hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(s){return s.replace(hm,dm)}function dm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ol(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function um(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function fm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zi:case Bi:t="ENVMAP_TYPE_CUBE";break;case gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function mm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ha:t="ENVMAP_BLENDING_MULTIPLY";break;case ih:t="ENVMAP_BLENDING_MIX";break;case sh:t="ENVMAP_BLENDING_ADD";break}return t}function gm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function _m(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=um(e),c=fm(e),f=pm(e),d=mm(e),h=gm(e),u=sm(e),g=rm(r),_=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),p.length>0&&(p+=`
`)):(m=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),p=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?im("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,nm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),o=Ba(o),o=sl(o,e),o=rl(o,e),a=Ba(a),a=sl(a,e),a=rl(a,e),o=al(o),a=al(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+m+o,S=x+p+a,L=nl(i,i.VERTEX_SHADER,v),A=nl(i,i.FRAGMENT_SHADER,S);i.attachShader(_,L),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(C){if(s.debug.checkShaderErrors){const H=i.getProgramInfoLog(_).trim(),G=i.getShaderInfoLog(L).trim(),j=i.getShaderInfoLog(A).trim();let K=!0,$=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,A);else{const J=il(i,L,"vertex"),q=il(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+J+`
`+q)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||j==="")&&($=!1);$&&(C.diagnostics={runnable:K,programLog:H,vertexShader:{log:G,prefix:m},fragmentShader:{log:j,prefix:p}})}i.deleteShader(L),i.deleteShader(A),I=new sr(i,_),E=am(i,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Jp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let xm=0;class vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mm(t),e.set(t,n)),n}}class Mm{constructor(t){this.id=xm++,this.code=t,this.usedTimes=0}}function ym(s,t,e,n,i,r,o){const a=new $l,l=new vm,c=new Set,f=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,C,H,G){const j=H.fog,K=G.geometry,$=E.isMeshStandardMaterial?H.environment:null,J=(E.isMeshStandardMaterial?e:t).get(E.envMap||$),q=J&&J.mapping===gr?J.image.height:null,gt=g[E.type];E.precision!==null&&(u=i.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));const xt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,yt=xt!==void 0?xt.length:0;let Ft=0;K.morphAttributes.position!==void 0&&(Ft=1),K.morphAttributes.normal!==void 0&&(Ft=2),K.morphAttributes.color!==void 0&&(Ft=3);let Kt,B,Z,ht;if(gt){const ne=un[gt];Kt=ne.vertexShader,B=ne.fragmentShader}else Kt=E.vertexShader,B=E.fragmentShader,l.update(E),Z=l.getVertexShaderID(E),ht=l.getFragmentShaderID(E);const _t=s.getRenderTarget(),Lt=G.isInstancedMesh===!0,zt=G.isBatchedMesh===!0,Bt=!!E.map,de=!!E.matcap,D=!!J,me=!!E.aoMap,Qt=!!E.lightMap,z=!!E.bumpMap,k=!!E.normalMap,ut=!!E.displacementMap,st=!!E.emissiveMap,Et=!!E.metalnessMap,w=!!E.roughnessMap,y=E.anisotropy>0,O=E.clearcoat>0,tt=E.dispersion>0,Q=E.iridescence>0,nt=E.sheen>0,Rt=E.transmission>0,lt=y&&!!E.anisotropyMap,vt=O&&!!E.clearcoatMap,Vt=O&&!!E.clearcoatNormalMap,rt=O&&!!E.clearcoatRoughnessMap,St=Q&&!!E.iridescenceMap,jt=Q&&!!E.iridescenceThicknessMap,Ot=nt&&!!E.sheenColorMap,bt=nt&&!!E.sheenRoughnessMap,kt=!!E.specularMap,$t=!!E.specularColorMap,ge=!!E.specularIntensityMap,N=Rt&&!!E.transmissionMap,at=Rt&&!!E.thicknessMap,et=!!E.gradientMap,it=!!E.alphaMap,ct=E.alphaTest>0,It=!!E.alphaHash,Jt=!!E.extensions;let Se=Bn;E.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Se=s.toneMapping);const Pe={shaderID:gt,shaderType:E.type,shaderName:E.name,vertexShader:Kt,fragmentShader:B,defines:E.defines,customVertexShaderID:Z,customFragmentShaderID:ht,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:zt,batchingColor:zt&&G._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&G.instanceColor!==null,instancingMorph:Lt&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Vn,alphaToCoverage:!!E.alphaToCoverage,map:Bt,matcap:de,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:q,aoMap:me,lightMap:Qt,bumpMap:z,normalMap:k,displacementMap:h&&ut,emissiveMap:st,normalMapObjectSpace:k&&E.normalMapType===mh,normalMapTangentSpace:k&&E.normalMapType===Wl,metalnessMap:Et,roughnessMap:w,anisotropy:y,anisotropyMap:lt,clearcoat:O,clearcoatMap:vt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:rt,dispersion:tt,iridescence:Q,iridescenceMap:St,iridescenceThicknessMap:jt,sheen:nt,sheenColorMap:Ot,sheenRoughnessMap:bt,specularMap:kt,specularColorMap:$t,specularIntensityMap:ge,transmission:Rt,transmissionMap:N,thicknessMap:at,gradientMap:et,opaque:E.transparent===!1&&E.blending===ai&&E.alphaToCoverage===!1,alphaMap:it,alphaTest:ct,alphaHash:It,combine:E.combine,mapUv:Bt&&_(E.map.channel),aoMapUv:me&&_(E.aoMap.channel),lightMapUv:Qt&&_(E.lightMap.channel),bumpMapUv:z&&_(E.bumpMap.channel),normalMapUv:k&&_(E.normalMap.channel),displacementMapUv:ut&&_(E.displacementMap.channel),emissiveMapUv:st&&_(E.emissiveMap.channel),metalnessMapUv:Et&&_(E.metalnessMap.channel),roughnessMapUv:w&&_(E.roughnessMap.channel),anisotropyMapUv:lt&&_(E.anisotropyMap.channel),clearcoatMapUv:vt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(E.sheenRoughnessMap.channel),specularMapUv:kt&&_(E.specularMap.channel),specularColorMapUv:$t&&_(E.specularColorMap.channel),specularIntensityMapUv:ge&&_(E.specularIntensityMap.channel),transmissionMapUv:N&&_(E.transmissionMap.channel),thicknessMapUv:at&&_(E.thicknessMap.channel),alphaMapUv:it&&_(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(k||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!K.attributes.uv&&(Bt||it),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Se,decodeVideoTexture:Bt&&E.map.isVideoTexture===!0&&le.getTransfer(E.map.colorSpace)===ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===an,flipSided:E.side===Be,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Jt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&E.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(x(M,E),v(M,E),M.push(s.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function x(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),E.push(a.mask)}function S(E){const M=g[E.type];let C;if(M){const H=un[M];C=sd.clone(H.uniforms)}else C=E.uniforms;return C}function L(E,M){let C;for(let H=0,G=f.length;H<G;H++){const j=f[H];if(j.cacheKey===M){C=j,++C.usedTimes;break}}return C===void 0&&(C=new _m(s,M,E,r),f.push(C)),C}function A(E){if(--E.usedTimes===0){const M=f.indexOf(E);f[M]=f[f.length-1],f.pop(),E.destroy()}}function R(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:L,releaseProgram:A,releaseShaderCache:R,programs:f,dispose:I}}function Sm(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Em(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ll(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function cl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,h,u,g,_,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:u,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,h,u,g,_,m){const p=o(d,h,u,g,_,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function l(d,h,u,g,_,m){const p=o(d,h,u,g,_,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,h){e.length>1&&e.sort(d||Em),n.length>1&&n.sort(h||ll),i.length>1&&i.sort(h||ll)}function f(){for(let d=t,h=s.length;d<h;d++){const u=s[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:f,sort:c}}function bm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new cl,s.set(n,[o])):i>=r.length?(o=new cl,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Tm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Dt};break;case"SpotLight":e={position:new P,direction:new P,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Am(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let wm=0;function Rm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Cm(s){const t=new Tm,e=Am(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new pe,o=new pe;function a(c){let f=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,x=0,v=0,S=0,L=0,A=0,R=0;c.sort(Rm);for(let E=0,M=c.length;E<M;E++){const C=c[E],H=C.color,G=C.intensity,j=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=H.r*G,d+=H.g*G,h+=H.b*G;else if(C.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(C.sh.coefficients[$],G);R++}else if(C.isDirectionalLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,q=e.get(C);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.directionalShadow[u]=q,n.directionalShadowMap[u]=K,n.directionalShadowMatrix[u]=C.shadow.matrix,x++}n.directional[u]=$,u++}else if(C.isSpotLight){const $=t.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(H).multiplyScalar(G),$.distance=j,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,n.spot[_]=$;const J=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,J.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=J.matrix,C.castShadow){const q=e.get(C);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=K,S++}_++}else if(C.isRectAreaLight){const $=t.get(C);$.color.copy(H).multiplyScalar(G),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=$,m++}else if(C.isPointLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const J=C.shadow,q=e.get(C);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=$,g++}else if(C.isHemisphereLight){const $=t.get(C);$.skyColor.copy(C.color).multiplyScalar(G),$.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[p]=$,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==u||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==x||I.numPointShadows!==v||I.numSpotShadows!==S||I.numSpotMaps!==L||I.numLightProbes!==R)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,I.directionalLength=u,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=x,I.numPointShadows=v,I.numSpotShadows=S,I.numSpotMaps=L,I.numLightProbes=R,n.version=wm++)}function l(c,f){let d=0,h=0,u=0,g=0,_=0;const m=f.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const v=c[p];if(v.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),d++}else if(v.isSpotLight){const S=n.spot[u];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(v.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function hl(s){const t=new Cm(s),e=[],n=[];function i(f){c.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Pm(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new hl(s),t.set(i,[a])):r>=o.length?(a=new hl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Lm extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dm extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Um(s,t,e){let n=new Qa;const i=new Ht,r=new Ht,o=new fe,a=new Lm({depthPacking:ph}),l=new Dm,c={},f=e.maxTextureSize,d={[kn]:Be,[Be]:kn,[an]:an},h=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Im,fragmentShader:Nm}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let p=this.type;this.render=function(A,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),H=s.state;H.setBlending(zn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=p!==yn&&this.type===yn,j=p===yn&&this.type!==yn;for(let K=0,$=A.length;K<$;K++){const J=A[K],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const gt=q.getFrameExtents();if(i.multiply(gt),r.copy(q.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(r.x=Math.floor(f/gt.x),i.x=r.x*gt.x,q.mapSize.x=r.x),i.y>f&&(r.y=Math.floor(f/gt.y),i.y=r.y*gt.y,q.mapSize.y=r.y)),q.map===null||G===!0||j===!0){const yt=this.type!==yn?{minFilter:Fe,magFilter:Fe}:{};q.map!==null&&q.map.dispose(),q.map=new ci(i.x,i.y,yt),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const xt=q.getViewportCount();for(let yt=0;yt<xt;yt++){const Ft=q.getViewport(yt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),H.viewport(o),q.updateMatrices(J,yt),n=q.getFrustum(),S(R,I,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===yn&&x(q,I),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,M,C)};function x(A,R){const I=t.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ci(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,I,h,_,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,I,u,_,null)}function v(A,R,I,E){let M=null;const C=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=I.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=M.uuid,G=R.uuid;let j=c[H];j===void 0&&(j={},c[H]=j);let K=j[G];K===void 0&&(K=M.clone(),j[G]=K,R.addEventListener("dispose",L)),M=K}if(M.visible=R.visible,M.wireframe=R.wireframe,E===yn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=s.properties.get(M);H.light=I}return M}function S(A,R,I,E,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===yn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const G=t.update(A),j=A.material;if(Array.isArray(j)){const K=G.groups;for(let $=0,J=K.length;$<J;$++){const q=K[$],gt=j[q.materialIndex];if(gt&&gt.visible){const xt=v(A,gt,E,M);A.onBeforeShadow(s,A,R,I,G,xt,q),s.renderBufferDirect(I,null,G,xt,A,q),A.onAfterShadow(s,A,R,I,G,xt,q)}}}else if(j.visible){const K=v(A,j,E,M);A.onBeforeShadow(s,A,R,I,G,K,null),s.renderBufferDirect(I,null,G,K,A,null),A.onAfterShadow(s,A,R,I,G,K,null)}}const H=A.children;for(let G=0,j=H.length;G<j;G++)S(H[G],R,I,E,M)}function L(A){A.target.removeEventListener("dispose",L);for(const I in c){const E=c[I],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function Om(s){function t(){let N=!1;const at=new fe;let et=null;const it=new fe(0,0,0,0);return{setMask:function(ct){et!==ct&&!N&&(s.colorMask(ct,ct,ct,ct),et=ct)},setLocked:function(ct){N=ct},setClear:function(ct,It,Jt,Se,Pe){Pe===!0&&(ct*=Se,It*=Se,Jt*=Se),at.set(ct,It,Jt,Se),it.equals(at)===!1&&(s.clearColor(ct,It,Jt,Se),it.copy(at))},reset:function(){N=!1,et=null,it.set(-1,0,0,0)}}}function e(){let N=!1,at=null,et=null,it=null;return{setTest:function(ct){ct?ht(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(ct){at!==ct&&!N&&(s.depthMask(ct),at=ct)},setFunc:function(ct){if(et!==ct){switch(ct){case Zc:s.depthFunc(s.NEVER);break;case jc:s.depthFunc(s.ALWAYS);break;case Jc:s.depthFunc(s.LESS);break;case ar:s.depthFunc(s.LEQUAL);break;case Qc:s.depthFunc(s.EQUAL);break;case th:s.depthFunc(s.GEQUAL);break;case eh:s.depthFunc(s.GREATER);break;case nh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=ct}},setLocked:function(ct){N=ct},setClear:function(ct){it!==ct&&(s.clearDepth(ct),it=ct)},reset:function(){N=!1,at=null,et=null,it=null}}}function n(){let N=!1,at=null,et=null,it=null,ct=null,It=null,Jt=null,Se=null,Pe=null;return{setTest:function(ne){N||(ne?ht(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(ne){at!==ne&&!N&&(s.stencilMask(ne),at=ne)},setFunc:function(ne,mn,hn){(et!==ne||it!==mn||ct!==hn)&&(s.stencilFunc(ne,mn,hn),et=ne,it=mn,ct=hn)},setOp:function(ne,mn,hn){(It!==ne||Jt!==mn||Se!==hn)&&(s.stencilOp(ne,mn,hn),It=ne,Jt=mn,Se=hn)},setLocked:function(ne){N=ne},setClear:function(ne){Pe!==ne&&(s.clearStencil(ne),Pe=ne)},reset:function(){N=!1,at=null,et=null,it=null,ct=null,It=null,Jt=null,Se=null,Pe=null}}}const i=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},f={},d=new WeakMap,h=[],u=null,g=!1,_=null,m=null,p=null,x=null,v=null,S=null,L=null,A=new Dt(0,0,0),R=0,I=!1,E=null,M=null,C=null,H=null,G=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,$=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=$>=1):J.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=$>=2);let q=null,gt={};const xt=s.getParameter(s.SCISSOR_BOX),yt=s.getParameter(s.VIEWPORT),Ft=new fe().fromArray(xt),Kt=new fe().fromArray(yt);function B(N,at,et,it){const ct=new Uint8Array(4),It=s.createTexture();s.bindTexture(N,It),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Jt=0;Jt<et;Jt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(at+Jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return It}const Z={};Z[s.TEXTURE_2D]=B(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=B(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=B(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=B(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ht(s.DEPTH_TEST),r.setFunc(ar),z(!1),k(_o),ht(s.CULL_FACE),me(zn);function ht(N){c[N]!==!0&&(s.enable(N),c[N]=!0)}function _t(N){c[N]!==!1&&(s.disable(N),c[N]=!1)}function Lt(N,at){return f[N]!==at?(s.bindFramebuffer(N,at),f[N]=at,N===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=at),N===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=at),!0):!1}function zt(N,at){let et=h,it=!1;if(N){et=d.get(at),et===void 0&&(et=[],d.set(at,et));const ct=N.textures;if(et.length!==ct.length||et[0]!==s.COLOR_ATTACHMENT0){for(let It=0,Jt=ct.length;It<Jt;It++)et[It]=s.COLOR_ATTACHMENT0+It;et.length=ct.length,it=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,it=!0);it&&s.drawBuffers(et)}function Bt(N){return u!==N?(s.useProgram(N),u=N,!0):!1}const de={[ni]:s.FUNC_ADD,[Ic]:s.FUNC_SUBTRACT,[Nc]:s.FUNC_REVERSE_SUBTRACT};de[Uc]=s.MIN,de[Oc]=s.MAX;const D={[Fc]:s.ZERO,[zc]:s.ONE,[Bc]:s.SRC_COLOR,[oa]:s.SRC_ALPHA,[Xc]:s.SRC_ALPHA_SATURATE,[Vc]:s.DST_COLOR,[Gc]:s.DST_ALPHA,[kc]:s.ONE_MINUS_SRC_COLOR,[la]:s.ONE_MINUS_SRC_ALPHA,[Wc]:s.ONE_MINUS_DST_COLOR,[Hc]:s.ONE_MINUS_DST_ALPHA,[qc]:s.CONSTANT_COLOR,[Yc]:s.ONE_MINUS_CONSTANT_COLOR,[Kc]:s.CONSTANT_ALPHA,[$c]:s.ONE_MINUS_CONSTANT_ALPHA};function me(N,at,et,it,ct,It,Jt,Se,Pe,ne){if(N===zn){g===!0&&(_t(s.BLEND),g=!1);return}if(g===!1&&(ht(s.BLEND),g=!0),N!==Dc){if(N!==_||ne!==I){if((m!==ni||v!==ni)&&(s.blendEquation(s.FUNC_ADD),m=ni,v=ni),ne)switch(N){case ai:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rr:s.blendFunc(s.ONE,s.ONE);break;case xo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case xo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,x=null,S=null,L=null,A.set(0,0,0),R=0,_=N,I=ne}return}ct=ct||at,It=It||et,Jt=Jt||it,(at!==m||ct!==v)&&(s.blendEquationSeparate(de[at],de[ct]),m=at,v=ct),(et!==p||it!==x||It!==S||Jt!==L)&&(s.blendFuncSeparate(D[et],D[it],D[It],D[Jt]),p=et,x=it,S=It,L=Jt),(Se.equals(A)===!1||Pe!==R)&&(s.blendColor(Se.r,Se.g,Se.b,Pe),A.copy(Se),R=Pe),_=N,I=!1}function Qt(N,at){N.side===an?_t(s.CULL_FACE):ht(s.CULL_FACE);let et=N.side===Be;at&&(et=!et),z(et),N.blending===ai&&N.transparent===!1?me(zn):me(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),i.setMask(N.colorWrite);const it=N.stencilWrite;o.setTest(it),it&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),st(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function z(N){E!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),E=N)}function k(N){N!==Cc?(ht(s.CULL_FACE),N!==M&&(N===_o?s.cullFace(s.BACK):N===Pc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),M=N}function ut(N){N!==C&&(K&&s.lineWidth(N),C=N)}function st(N,at,et){N?(ht(s.POLYGON_OFFSET_FILL),(H!==at||G!==et)&&(s.polygonOffset(at,et),H=at,G=et)):_t(s.POLYGON_OFFSET_FILL)}function Et(N){N?ht(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function w(N){N===void 0&&(N=s.TEXTURE0+j-1),q!==N&&(s.activeTexture(N),q=N)}function y(N,at,et){et===void 0&&(q===null?et=s.TEXTURE0+j-1:et=q);let it=gt[et];it===void 0&&(it={type:void 0,texture:void 0},gt[et]=it),(it.type!==N||it.texture!==at)&&(q!==et&&(s.activeTexture(et),q=et),s.bindTexture(N,at||Z[N]),it.type=N,it.texture=at)}function O(){const N=gt[q];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function tt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function jt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(N){Ft.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Ft.copy(N))}function bt(N){Kt.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Kt.copy(N))}function kt(N,at){let et=l.get(at);et===void 0&&(et=new WeakMap,l.set(at,et));let it=et.get(N);it===void 0&&(it=s.getUniformBlockIndex(at,N.name),et.set(N,it))}function $t(N,at){const it=l.get(at).get(N);a.get(at)!==it&&(s.uniformBlockBinding(at,it,N.__bindingPointIndex),a.set(at,it))}function ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},q=null,gt={},f={},d=new WeakMap,h=[],u=null,g=!1,_=null,m=null,p=null,x=null,v=null,S=null,L=null,A=new Dt(0,0,0),R=0,I=!1,E=null,M=null,C=null,H=null,G=null,Ft.set(0,0,s.canvas.width,s.canvas.height),Kt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:ht,disable:_t,bindFramebuffer:Lt,drawBuffers:zt,useProgram:Bt,setBlending:me,setMaterial:Qt,setFlipSided:z,setCullFace:k,setLineWidth:ut,setPolygonOffset:st,setScissorTest:Et,activeTexture:w,bindTexture:y,unbindTexture:O,compressedTexImage2D:tt,compressedTexImage3D:Q,texImage2D:St,texImage3D:jt,updateUBOMapping:kt,uniformBlockBinding:$t,texStorage2D:Vt,texStorage3D:rt,texSubImage2D:nt,texSubImage3D:Rt,compressedTexSubImage2D:lt,compressedTexSubImage3D:vt,scissor:Ot,viewport:bt,reset:ge}}function dl(s,t,e,n){const i=Fm(n);switch(e){case Fl:return s*t;case Bl:return s*t;case kl:return s*t*2;case Gl:return s*t/i.components*i.byteLength;case qa:return s*t/i.components*i.byteLength;case Hl:return s*t*2/i.components*i.byteLength;case Ya:return s*t*2/i.components*i.byteLength;case zl:return s*t*3/i.components*i.byteLength;case ln:return s*t*4/i.components*i.byteLength;case Ka:return s*t*4/i.components*i.byteLength;case Qs:case tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case er:case nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fa:case ma:return Math.max(s,16)*Math.max(t,8)/4;case ua:case pa:return Math.max(s,8)*Math.max(t,8)/2;case ga:case _a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ya:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ba:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case La:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Da:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ir:case Ia:case Na:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Vl:case Ua:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Oa:case Fa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fm(s){switch(s){case An:case Nl:return{byteLength:1,components:1};case cs:case Ul:case us:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case li:case Va:case En:return{byteLength:4,components:1};case Ol:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function zm(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,f=new WeakMap;let d;const h=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return u?new OffscreenCanvas(w,y):ur("canvas")}function _(w,y,O){let tt=1;const Q=Et(w);if((Q.width>O||Q.height>O)&&(tt=O/Math.max(Q.width,Q.height)),tt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const nt=Math.floor(tt*Q.width),Rt=Math.floor(tt*Q.height);d===void 0&&(d=g(nt,Rt));const lt=y?g(nt,Rt):d;return lt.width=nt,lt.height=Rt,lt.getContext("2d").drawImage(w,0,0,nt,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+nt+"x"+Rt+")."),lt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==Fe&&w.minFilter!==Ke}function p(w){s.generateMipmap(w)}function x(w,y,O,tt,Q=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let nt=y;if(y===s.RED&&(O===s.FLOAT&&(nt=s.R32F),O===s.HALF_FLOAT&&(nt=s.R16F),O===s.UNSIGNED_BYTE&&(nt=s.R8)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(nt=s.R8UI),O===s.UNSIGNED_SHORT&&(nt=s.R16UI),O===s.UNSIGNED_INT&&(nt=s.R32UI),O===s.BYTE&&(nt=s.R8I),O===s.SHORT&&(nt=s.R16I),O===s.INT&&(nt=s.R32I)),y===s.RG&&(O===s.FLOAT&&(nt=s.RG32F),O===s.HALF_FLOAT&&(nt=s.RG16F),O===s.UNSIGNED_BYTE&&(nt=s.RG8)),y===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(nt=s.RG8UI),O===s.UNSIGNED_SHORT&&(nt=s.RG16UI),O===s.UNSIGNED_INT&&(nt=s.RG32UI),O===s.BYTE&&(nt=s.RG8I),O===s.SHORT&&(nt=s.RG16I),O===s.INT&&(nt=s.RG32I)),y===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(nt=s.RGB9_E5),y===s.RGBA){const Rt=Q?lr:le.getTransfer(tt);O===s.FLOAT&&(nt=s.RGBA32F),O===s.HALF_FLOAT&&(nt=s.RGBA16F),O===s.UNSIGNED_BYTE&&(nt=Rt===ue?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(w,y){let O;return w?y===null||y===li||y===ki?O=s.DEPTH24_STENCIL8:y===En?O=s.DEPTH32F_STENCIL8:y===cs&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===li||y===ki?O=s.DEPTH_COMPONENT24:y===En?O=s.DEPTH_COMPONENT32F:y===cs&&(O=s.DEPTH_COMPONENT16),O}function S(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Fe&&w.minFilter!==Ke?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function L(w){const y=w.target;y.removeEventListener("dispose",L),R(y),y.isVideoTexture&&f.delete(y)}function A(w){const y=w.target;y.removeEventListener("dispose",A),E(y)}function R(w){const y=n.get(w);if(y.__webglInit===void 0)return;const O=w.source,tt=h.get(O);if(tt){const Q=tt[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(w),Object.keys(tt).length===0&&h.delete(O)}n.remove(w)}function I(w){const y=n.get(w);s.deleteTexture(y.__webglTexture);const O=w.source,tt=h.get(O);delete tt[y.__cacheKey],o.memory.textures--}function E(w){const y=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let Q=0;Q<y.__webglFramebuffer[tt].length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[tt][Q]);else s.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)s.deleteFramebuffer(y.__webglFramebuffer[tt]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=w.textures;for(let tt=0,Q=O.length;tt<Q;tt++){const nt=n.get(O[tt]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(O[tt])}n.remove(w)}let M=0;function C(){M=0}function H(){const w=M;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),M+=1,w}function G(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function j(w,y){const O=n.get(w);if(w.isVideoTexture&&ut(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const tt=w.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(O,w,y);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function K(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){Kt(O,w,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function $(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){Kt(O,w,y);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function J(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){B(O,w,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}const q={[or]:s.REPEAT,[si]:s.CLAMP_TO_EDGE,[da]:s.MIRRORED_REPEAT},gt={[Fe]:s.NEAREST,[uh]:s.NEAREST_MIPMAP_NEAREST,[rs]:s.NEAREST_MIPMAP_LINEAR,[Ke]:s.LINEAR,[Tr]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},xt={[gh]:s.NEVER,[Sh]:s.ALWAYS,[_h]:s.LESS,[Xl]:s.LEQUAL,[xh]:s.EQUAL,[yh]:s.GEQUAL,[vh]:s.GREATER,[Mh]:s.NOTEQUAL};function yt(w,y){if(y.type===En&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ke||y.magFilter===Tr||y.magFilter===rs||y.magFilter===ri||y.minFilter===Ke||y.minFilter===Tr||y.minFilter===rs||y.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,q[y.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,q[y.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,q[y.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,gt[y.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,xt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Fe||y.minFilter!==rs&&y.minFilter!==ri||y.type===En&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ft(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",L));const tt=y.source;let Q=h.get(tt);Q===void 0&&(Q={},h.set(tt,Q));const nt=G(y);if(nt!==w.__cacheKey){Q[nt]===void 0&&(Q[nt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[nt].usedTimes++;const Rt=Q[w.__cacheKey];Rt!==void 0&&(Q[w.__cacheKey].usedTimes--,Rt.usedTimes===0&&I(y)),w.__cacheKey=nt,w.__webglTexture=Q[nt].texture}return O}function Kt(w,y,O){let tt=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(tt=s.TEXTURE_3D);const Q=Ft(w,y),nt=y.source;e.bindTexture(tt,w.__webglTexture,s.TEXTURE0+O);const Rt=n.get(nt);if(nt.version!==Rt.__version||Q===!0){e.activeTexture(s.TEXTURE0+O);const lt=le.getPrimaries(le.workingColorSpace),vt=y.colorSpace===Fn?null:le.getPrimaries(y.colorSpace),Vt=y.colorSpace===Fn||lt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let rt=_(y.image,!1,i.maxTextureSize);rt=st(y,rt);const St=r.convert(y.format,y.colorSpace),jt=r.convert(y.type);let Ot=x(y.internalFormat,St,jt,y.colorSpace,y.isVideoTexture);yt(tt,y);let bt;const kt=y.mipmaps,$t=y.isVideoTexture!==!0,ge=Rt.__version===void 0||Q===!0,N=nt.dataReady,at=S(y,rt);if(y.isDepthTexture)Ot=v(y.format===Gi,y.type),ge&&($t?e.texStorage2D(s.TEXTURE_2D,1,Ot,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Ot,rt.width,rt.height,0,St,jt,null));else if(y.isDataTexture)if(kt.length>0){$t&&ge&&e.texStorage2D(s.TEXTURE_2D,at,Ot,kt[0].width,kt[0].height);for(let et=0,it=kt.length;et<it;et++)bt=kt[et],$t?N&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,bt.width,bt.height,St,jt,bt.data):e.texImage2D(s.TEXTURE_2D,et,Ot,bt.width,bt.height,0,St,jt,bt.data);y.generateMipmaps=!1}else $t?(ge&&e.texStorage2D(s.TEXTURE_2D,at,Ot,rt.width,rt.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,St,jt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,rt.width,rt.height,0,St,jt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){$t&&ge&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Ot,kt[0].width,kt[0].height,rt.depth);for(let et=0,it=kt.length;et<it;et++)if(bt=kt[et],y.format!==ln)if(St!==null)if($t){if(N)if(y.layerUpdates.size>0){const ct=dl(bt.width,bt.height,y.format,y.type);for(const It of y.layerUpdates){const Jt=bt.data.subarray(It*ct/bt.data.BYTES_PER_ELEMENT,(It+1)*ct/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,It,bt.width,bt.height,1,St,Jt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,bt.width,bt.height,rt.depth,St,bt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,Ot,bt.width,bt.height,rt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,bt.width,bt.height,rt.depth,St,jt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,Ot,bt.width,bt.height,rt.depth,0,St,jt,bt.data)}else{$t&&ge&&e.texStorage2D(s.TEXTURE_2D,at,Ot,kt[0].width,kt[0].height);for(let et=0,it=kt.length;et<it;et++)bt=kt[et],y.format!==ln?St!==null?$t?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,et,Ot,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?N&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,bt.width,bt.height,St,jt,bt.data):e.texImage2D(s.TEXTURE_2D,et,Ot,bt.width,bt.height,0,St,jt,bt.data)}else if(y.isDataArrayTexture)if($t){if(ge&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Ot,rt.width,rt.height,rt.depth),N)if(y.layerUpdates.size>0){const et=dl(rt.width,rt.height,y.format,y.type);for(const it of y.layerUpdates){const ct=rt.data.subarray(it*et/rt.data.BYTES_PER_ELEMENT,(it+1)*et/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,rt.width,rt.height,1,St,jt,ct)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,jt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,rt.width,rt.height,rt.depth,0,St,jt,rt.data);else if(y.isData3DTexture)$t?(ge&&e.texStorage3D(s.TEXTURE_3D,at,Ot,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,jt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,rt.width,rt.height,rt.depth,0,St,jt,rt.data);else if(y.isFramebufferTexture){if(ge)if($t)e.texStorage2D(s.TEXTURE_2D,at,Ot,rt.width,rt.height);else{let et=rt.width,it=rt.height;for(let ct=0;ct<at;ct++)e.texImage2D(s.TEXTURE_2D,ct,Ot,et,it,0,St,jt,null),et>>=1,it>>=1}}else if(kt.length>0){if($t&&ge){const et=Et(kt[0]);e.texStorage2D(s.TEXTURE_2D,at,Ot,et.width,et.height)}for(let et=0,it=kt.length;et<it;et++)bt=kt[et],$t?N&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,St,jt,bt):e.texImage2D(s.TEXTURE_2D,et,Ot,St,jt,bt);y.generateMipmaps=!1}else if($t){if(ge){const et=Et(rt);e.texStorage2D(s.TEXTURE_2D,at,Ot,et.width,et.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,jt,rt)}else e.texImage2D(s.TEXTURE_2D,0,Ot,St,jt,rt);m(y)&&p(tt),Rt.__version=nt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function B(w,y,O){if(y.image.length!==6)return;const tt=Ft(w,y),Q=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+O);const nt=n.get(Q);if(Q.version!==nt.__version||tt===!0){e.activeTexture(s.TEXTURE0+O);const Rt=le.getPrimaries(le.workingColorSpace),lt=y.colorSpace===Fn?null:le.getPrimaries(y.colorSpace),vt=y.colorSpace===Fn||Rt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Vt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,St=[];for(let it=0;it<6;it++)!Vt&&!rt?St[it]=_(y.image[it],!0,i.maxCubemapSize):St[it]=rt?y.image[it].image:y.image[it],St[it]=st(y,St[it]);const jt=St[0],Ot=r.convert(y.format,y.colorSpace),bt=r.convert(y.type),kt=x(y.internalFormat,Ot,bt,y.colorSpace),$t=y.isVideoTexture!==!0,ge=nt.__version===void 0||tt===!0,N=Q.dataReady;let at=S(y,jt);yt(s.TEXTURE_CUBE_MAP,y);let et;if(Vt){$t&&ge&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,kt,jt.width,jt.height);for(let it=0;it<6;it++){et=St[it].mipmaps;for(let ct=0;ct<et.length;ct++){const It=et[ct];y.format!==ln?Ot!==null?$t?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,ct,0,0,It.width,It.height,Ot,It.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,ct,kt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,ct,0,0,It.width,It.height,Ot,bt,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,ct,kt,It.width,It.height,0,Ot,bt,It.data)}}}else{if(et=y.mipmaps,$t&&ge){et.length>0&&at++;const it=Et(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,kt,it.width,it.height)}for(let it=0;it<6;it++)if(rt){$t?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,St[it].width,St[it].height,Ot,bt,St[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,kt,St[it].width,St[it].height,0,Ot,bt,St[it].data);for(let ct=0;ct<et.length;ct++){const Jt=et[ct].image[it].image;$t?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,ct+1,0,0,Jt.width,Jt.height,Ot,bt,Jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,ct+1,kt,Jt.width,Jt.height,0,Ot,bt,Jt.data)}}else{$t?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,bt,St[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,kt,Ot,bt,St[it]);for(let ct=0;ct<et.length;ct++){const It=et[ct];$t?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,ct+1,0,0,Ot,bt,It.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,ct+1,kt,Ot,bt,It.image[it])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),nt.__version=Q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Z(w,y,O,tt,Q,nt){const Rt=r.convert(O.format,O.colorSpace),lt=r.convert(O.type),vt=x(O.internalFormat,Rt,lt,O.colorSpace);if(!n.get(y).__hasExternalTextures){const rt=Math.max(1,y.width>>nt),St=Math.max(1,y.height>>nt);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,nt,vt,rt,St,y.depth,0,Rt,lt,null):e.texImage2D(Q,nt,vt,rt,St,0,Rt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),k(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Q,n.get(O).__webglTexture,0,z(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,Q,n.get(O).__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(w,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,w),y.depthBuffer){const tt=y.depthTexture,Q=tt&&tt.isDepthTexture?tt.type:null,nt=v(y.stencilBuffer,Q),Rt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=z(y);k(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,nt,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,nt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,nt,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,w)}else{const tt=y.textures;for(let Q=0;Q<tt.length;Q++){const nt=tt[Q],Rt=r.convert(nt.format,nt.colorSpace),lt=r.convert(nt.type),vt=x(nt.internalFormat,Rt,lt,nt.colorSpace),Vt=z(y);O&&k(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,vt,y.width,y.height):k(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt,vt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,vt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const tt=n.get(y.depthTexture).__webglTexture,Q=z(y);if(y.depthTexture.format===Ui)k(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(y.depthTexture.format===Gi)k(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Lt(w){const y=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");_t(y.__webglFramebuffer,w)}else if(O){y.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[tt]),y.__webglDepthbuffer[tt]=s.createRenderbuffer(),ht(y.__webglDepthbuffer[tt],w,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),ht(y.__webglDepthbuffer,w,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(w,y,O){const tt=n.get(w);y!==void 0&&Z(tt.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Lt(w)}function Bt(w){const y=w.texture,O=n.get(w),tt=n.get(y);w.addEventListener("dispose",A);const Q=w.textures,nt=w.isWebGLCubeRenderTarget===!0,Rt=Q.length>1;if(Rt||(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=y.version,o.memory.textures++),nt){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let vt=0;vt<y.mipmaps.length;vt++)O.__webglFramebuffer[lt][vt]=s.createFramebuffer()}else O.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)O.__webglFramebuffer[lt]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Rt)for(let lt=0,vt=Q.length;lt<vt;lt++){const Vt=n.get(Q[lt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&k(w)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){const vt=Q[lt];O.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);const Vt=r.convert(vt.format,vt.colorSpace),rt=r.convert(vt.type),St=x(vt.internalFormat,Vt,rt,vt.colorSpace,w.isXRRenderTarget===!0),jt=z(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,St,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ht(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),yt(s.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)Z(O.__webglFramebuffer[lt][vt],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,vt);else Z(O.__webglFramebuffer[lt],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(y)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let lt=0,vt=Q.length;lt<vt;lt++){const Vt=Q[lt],rt=n.get(Vt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),yt(s.TEXTURE_2D,Vt),Z(O.__webglFramebuffer,w,Vt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),m(Vt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(lt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),yt(lt,y),y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)Z(O.__webglFramebuffer[vt],w,y,s.COLOR_ATTACHMENT0,lt,vt);else Z(O.__webglFramebuffer,w,y,s.COLOR_ATTACHMENT0,lt,0);m(y)&&p(lt),e.unbindTexture()}w.depthBuffer&&Lt(w)}function de(w){const y=w.textures;for(let O=0,tt=y.length;O<tt;O++){const Q=y[O];if(m(Q)){const nt=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Rt=n.get(Q).__webglTexture;e.bindTexture(nt,Rt),p(nt),e.unbindTexture()}}}const D=[],me=[];function Qt(w){if(w.samples>0){if(k(w)===!1){const y=w.textures,O=w.width,tt=w.height;let Q=s.COLOR_BUFFER_BIT;const nt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=n.get(w),lt=y.length>1;if(lt)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[vt]);const Vt=n.get(y[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Vt,0)}s.blitFramebuffer(0,0,O,tt,0,0,O,tt,Q,s.NEAREST),l===!0&&(D.length=0,me.length=0,D.push(s.COLOR_ATTACHMENT0+vt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(D.push(nt),me.push(nt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,me)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[vt]);const Vt=n.get(y[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function z(w){return Math.min(i.maxSamples,w.samples)}function k(w){const y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ut(w){const y=o.render.frame;f.get(w)!==y&&(f.set(w,y),w.update())}function st(w,y){const O=w.colorSpace,tt=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Vn&&O!==Fn&&(le.getTransfer(O)===ue?(tt!==ln||Q!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Et(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=C,this.setTexture2D=j,this.setTexture2DArray=K,this.setTexture3D=$,this.setTextureCube=J,this.rebindTextures=zt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=k}function Bm(s,t){function e(n,i=Fn){let r;const o=le.getTransfer(i);if(n===An)return s.UNSIGNED_BYTE;if(n===Wa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ol)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Nl)return s.BYTE;if(n===Ul)return s.SHORT;if(n===cs)return s.UNSIGNED_SHORT;if(n===Va)return s.INT;if(n===li)return s.UNSIGNED_INT;if(n===En)return s.FLOAT;if(n===us)return s.HALF_FLOAT;if(n===Fl)return s.ALPHA;if(n===zl)return s.RGB;if(n===ln)return s.RGBA;if(n===Bl)return s.LUMINANCE;if(n===kl)return s.LUMINANCE_ALPHA;if(n===Ui)return s.DEPTH_COMPONENT;if(n===Gi)return s.DEPTH_STENCIL;if(n===Gl)return s.RED;if(n===qa)return s.RED_INTEGER;if(n===Hl)return s.RG;if(n===Ya)return s.RG_INTEGER;if(n===Ka)return s.RGBA_INTEGER;if(n===Qs||n===tr||n===er||n===nr)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ga||n===_a||n===xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ga||n===_a)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===va||n===Ma||n===ya||n===Sa||n===Ea||n===ba||n===Ta||n===Aa||n===wa||n===Ra||n===Ca||n===Pa||n===La||n===Da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===va)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ba)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ta)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ca)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===La)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ir||n===Ia||n===Na)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ir)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===Ua||n===Oa||n===Fa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ir)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class km extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zt extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gm={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&h>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new ke,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Gn({vertexShader:Hm,fragmentShader:Vm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xm extends Wi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,u=null,g=null;const _=new Wm,m=e.getContextAttributes();let p=null,x=null;const v=[],S=[],L=new Ht;let A=null;const R=new He;R.layers.enable(1),R.viewport=new fe;const I=new He;I.layers.enable(2),I.viewport=new fe;const E=[R,I],M=new km;M.layers.enable(1),M.layers.enable(2);let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=v[B];return Z===void 0&&(Z=new Zr,v[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=v[B];return Z===void 0&&(Z=new Zr,v[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=v[B];return Z===void 0&&(Z=new Zr,v[B]=Z),Z.getHandSpace()};function G(B){const Z=S.indexOf(B.inputSource);if(Z===-1)return;const ht=v[Z];ht!==void 0&&(ht.update(B.inputSource,B.frame,c||o),ht.dispatchEvent({type:B.type,data:B.inputSource}))}function j(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",K);for(let B=0;B<v.length;B++){const Z=S[B];Z!==null&&(S[B]=null,v[B].disconnect(Z))}C=null,H=null,_.reset(),t.setRenderTarget(p),u=null,h=null,d=null,i=null,x=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",j),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new ci(u.framebufferWidth,u.framebufferHeight,{format:ln,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ht=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?Gi:Ui,ht=m.stencil?ki:li);const Lt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=new XRWebGLBinding(i,e),h=d.createProjectionLayer(Lt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new ci(h.textureWidth,h.textureHeight,{format:ln,type:An,depthTexture:new sc(h.textureWidth,h.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(B){for(let Z=0;Z<B.removed.length;Z++){const ht=B.removed[Z],_t=S.indexOf(ht);_t>=0&&(S[_t]=null,v[_t].disconnect(ht))}for(let Z=0;Z<B.added.length;Z++){const ht=B.added[Z];let _t=S.indexOf(ht);if(_t===-1){for(let zt=0;zt<v.length;zt++)if(zt>=S.length){S.push(ht),_t=zt;break}else if(S[zt]===null){S[zt]=ht,_t=zt;break}if(_t===-1)break}const Lt=v[_t];Lt&&Lt.connect(ht)}}const $=new P,J=new P;function q(B,Z,ht){$.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(ht.matrixWorld);const _t=$.distanceTo(J),Lt=Z.projectionMatrix.elements,zt=ht.projectionMatrix.elements,Bt=Lt[14]/(Lt[10]-1),de=Lt[14]/(Lt[10]+1),D=(Lt[9]+1)/Lt[5],me=(Lt[9]-1)/Lt[5],Qt=(Lt[8]-1)/Lt[0],z=(zt[8]+1)/zt[0],k=Bt*Qt,ut=Bt*z,st=_t/(-Qt+z),Et=st*-Qt;Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Et),B.translateZ(st),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const w=Bt+st,y=de+st,O=k-Et,tt=ut+(_t-Et),Q=D*de/y*w,nt=me*de/y*w;B.projectionMatrix.makePerspective(O,tt,Q,nt,w,y),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function gt(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;_.texture!==null&&(B.near=_.depthNear,B.far=_.depthFar),M.near=I.near=R.near=B.near,M.far=I.far=R.far=B.far,(C!==M.near||H!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,H=M.far,R.near=C,R.far=H,I.near=C,I.far=H,R.updateProjectionMatrix(),I.updateProjectionMatrix(),B.updateProjectionMatrix());const Z=B.parent,ht=M.cameras;gt(M,Z);for(let _t=0;_t<ht.length;_t++)gt(ht[_t],Z);ht.length===2?q(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),xt(B,M,Z)};function xt(B,Z,ht){ht===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(ht.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=hs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let yt=null;function Ft(B,Z){if(f=Z.getViewerPose(c||o),g=Z,f!==null){const ht=f.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let _t=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,_t=!0);for(let zt=0;zt<ht.length;zt++){const Bt=ht[zt];let de=null;if(u!==null)de=u.getViewport(Bt);else{const me=d.getViewSubImage(h,Bt);de=me.viewport,zt===0&&(t.setRenderTargetTextures(x,me.colorTexture,h.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(x))}let D=E[zt];D===void 0&&(D=new He,D.layers.enable(zt),D.viewport=new fe,E[zt]=D),D.matrix.fromArray(Bt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Bt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(de.x,de.y,de.width,de.height),zt===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_t===!0&&M.cameras.push(D)}const Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const zt=d.getDepthInformation(ht[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,i.renderState)}}for(let ht=0;ht<v.length;ht++){const _t=S[ht],Lt=v[ht];_t!==null&&Lt!==void 0&&Lt.update(_t,Z,c||o)}yt&&yt(B,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Kt=new nc;Kt.setAnimationLoop(Ft),this.setAnimationLoop=function(B){yt=B},this.dispose=function(){}}}const jn=new pn,qm=new pe;function Ym(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ql(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),f(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&u(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),v=x.envMap,S=x.envMapRotation;v&&(m.envMap.value=v,jn.copy(S),jn.x*=-1,jn.y*=-1,jn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(qm.makeRotationFromEuler(jn)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Km(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=i[x.id];S===void 0&&(g(x),S=f(x),i[x.id]=S,x.addEventListener("dispose",m));const L=v.program;n.updateUBOMapping(x,L);const A=t.render.frame;r[x.id]!==A&&(h(x),r[x.id]=A)}function f(x){const v=d();x.__bindingPointIndex=v;const S=s.createBuffer(),L=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,L,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=i[x.id],S=x.uniforms,L=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,R=S.length;A<R;A++){const I=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,M=I.length;E<M;E++){const C=I[E];if(u(C,A,E,L)===!0){const H=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let j=0;for(let K=0;K<G.length;K++){const $=G[K],J=_($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,H+j,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,j),j+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(x,v,S,L){const A=x.value,R=v+"_"+S;if(L[R]===void 0)return typeof A=="number"||typeof A=="boolean"?L[R]=A:L[R]=A.clone(),!0;{const I=L[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return L[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(x){const v=x.uniforms;let S=0;const L=16;for(let R=0,I=v.length;R<I;R++){const E=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,C=E.length;M<C;M++){const H=E[M],G=Array.isArray(H.value)?H.value:[H.value];for(let j=0,K=G.length;j<K;j++){const $=G[j],J=_($),q=S%L;q!==0&&L-q<J.boundary&&(S+=L-q),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=J.storage}}}const A=S%L;return A>0&&(S+=L-A),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class cc{constructor(t={}){const{canvas:e=Bh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const u=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=Bn,this.toneMappingExposure=1;const v=this;let S=!1,L=0,A=0,R=null,I=-1,E=null;const M=new fe,C=new fe;let H=null;const G=new Dt(0);let j=0,K=e.width,$=e.height,J=1,q=null,gt=null;const xt=new fe(0,0,K,$),yt=new fe(0,0,K,$);let Ft=!1;const Kt=new Qa;let B=!1,Z=!1;const ht=new pe,_t=new P,Lt=new fe,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function de(){return R===null?J:1}let D=n;function me(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ga}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",ct,!1),D===null){const U="webgl2";if(D=me(U,b),D===null)throw me(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Qt,z,k,ut,st,Et,w,y,O,tt,Q,nt,Rt,lt,vt,Vt,rt,St,jt,Ot,bt,kt,$t,ge;function N(){Qt=new np(D),Qt.init(),kt=new Bm(D,Qt),z=new Zf(D,Qt,t,kt),k=new Om(D),ut=new rp(D),st=new Sm,Et=new zm(D,Qt,k,st,z,kt,ut),w=new Jf(v),y=new ep(v),O=new dd(D),$t=new Kf(D,O),tt=new ip(D,O,ut,$t),Q=new op(D,tt,O,ut),jt=new ap(D,z,Et),Vt=new jf(st),nt=new ym(v,w,y,Qt,z,$t,Vt),Rt=new Ym(v,st),lt=new bm,vt=new Pm(Qt),St=new Yf(v,w,y,k,Q,h,l),rt=new Um(v,Q,z),ge=new Km(D,ut,z,k),Ot=new $f(D,Qt,ut),bt=new sp(D,Qt,ut),ut.programs=nt.programs,v.capabilities=z,v.extensions=Qt,v.properties=st,v.renderLists=lt,v.shadowMap=rt,v.state=k,v.info=ut}N();const at=new Xm(v,D);this.xr=at,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Qt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Qt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(K,$,!1))},this.getSize=function(b){return b.set(K,$)},this.setSize=function(b,U,V=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,$=U,e.width=Math.floor(b*J),e.height=Math.floor(U*J),V===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(K*J,$*J).floor()},this.setDrawingBufferSize=function(b,U,V){K=b,$=U,J=V,e.width=Math.floor(b*V),e.height=Math.floor(U*V),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(xt)},this.setViewport=function(b,U,V,X){b.isVector4?xt.set(b.x,b.y,b.z,b.w):xt.set(b,U,V,X),k.viewport(M.copy(xt).multiplyScalar(J).round())},this.getScissor=function(b){return b.copy(yt)},this.setScissor=function(b,U,V,X){b.isVector4?yt.set(b.x,b.y,b.z,b.w):yt.set(b,U,V,X),k.scissor(C.copy(yt).multiplyScalar(J).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(b){k.setScissorTest(Ft=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){gt=b},this.getClearColor=function(b){return b.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(b=!0,U=!0,V=!0){let X=0;if(b){let F=!1;if(R!==null){const ot=R.texture.format;F=ot===Ka||ot===Ya||ot===qa}if(F){const ot=R.texture.type,Mt=ot===An||ot===li||ot===cs||ot===ki||ot===Wa||ot===Xa,At=St.getClearColor(),wt=St.getClearAlpha(),Nt=At.r,Ut=At.g,Pt=At.b;Mt?(u[0]=Nt,u[1]=Ut,u[2]=Pt,u[3]=wt,D.clearBufferuiv(D.COLOR,0,u)):(g[0]=Nt,g[1]=Ut,g[2]=Pt,g[3]=wt,D.clearBufferiv(D.COLOR,0,g))}else X|=D.COLOR_BUFFER_BIT}U&&(X|=D.DEPTH_BUFFER_BIT),V&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),lt.dispose(),vt.dispose(),st.dispose(),w.dispose(),y.dispose(),Q.dispose(),$t.dispose(),ge.dispose(),nt.dispose(),at.dispose(),at.removeEventListener("sessionstart",hn),at.removeEventListener("sessionend",co),Xn.stop()};function et(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=ut.autoReset,U=rt.enabled,V=rt.autoUpdate,X=rt.needsUpdate,F=rt.type;N(),ut.autoReset=b,rt.enabled=U,rt.autoUpdate=V,rt.needsUpdate=X,rt.type=F}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){const U=b.target;U.removeEventListener("dispose",It),Jt(U)}function Jt(b){Se(b),st.remove(b)}function Se(b){const U=st.get(b).programs;U!==void 0&&(U.forEach(function(V){nt.releaseProgram(V)}),b.isShaderMaterial&&nt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,V,X,F,ot){U===null&&(U=zt);const Mt=F.isMesh&&F.matrixWorld.determinant()<0,At=Tc(b,U,V,X,F);k.setMaterial(X,Mt);let wt=V.index,Nt=1;if(X.wireframe===!0){if(wt=tt.getWireframeAttribute(V),wt===void 0)return;Nt=2}const Ut=V.drawRange,Pt=V.attributes.position;let ie=Ut.start*Nt,_e=(Ut.start+Ut.count)*Nt;ot!==null&&(ie=Math.max(ie,ot.start*Nt),_e=Math.min(_e,(ot.start+ot.count)*Nt)),wt!==null?(ie=Math.max(ie,0),_e=Math.min(_e,wt.count)):Pt!=null&&(ie=Math.max(ie,0),_e=Math.min(_e,Pt.count));const xe=_e-ie;if(xe<0||xe===1/0)return;$t.setup(F,X,At,V,wt);let Ve,se=Ot;if(wt!==null&&(Ve=O.get(wt),se=bt,se.setIndex(Ve)),F.isMesh)X.wireframe===!0?(k.setLineWidth(X.wireframeLinewidth*de()),se.setMode(D.LINES)):se.setMode(D.TRIANGLES);else if(F.isLine){let Ct=X.linewidth;Ct===void 0&&(Ct=1),k.setLineWidth(Ct*de()),F.isLineSegments?se.setMode(D.LINES):F.isLineLoop?se.setMode(D.LINE_LOOP):se.setMode(D.LINE_STRIP)}else F.isPoints?se.setMode(D.POINTS):F.isSprite&&se.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)se.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))se.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ct=F._multiDrawStarts,Le=F._multiDrawCounts,re=F._multiDrawCount,Qe=wt?O.get(wt).bytesPerElement:1,di=st.get(X).currentProgram.getUniforms();for(let We=0;We<re;We++)di.setValue(D,"_gl_DrawID",We),se.render(Ct[We]/Qe,Le[We])}else if(F.isInstancedMesh)se.renderInstances(ie,xe,F.count);else if(V.isInstancedBufferGeometry){const Ct=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Le=Math.min(V.instanceCount,Ct);se.renderInstances(ie,xe,Le)}else se.render(ie,xe)};function Pe(b,U,V){b.transparent===!0&&b.side===an&&b.forceSinglePass===!1?(b.side=Be,b.needsUpdate=!0,xs(b,U,V),b.side=kn,b.needsUpdate=!0,xs(b,U,V),b.side=an):xs(b,U,V)}this.compile=function(b,U,V=null){V===null&&(V=b),m=vt.get(V),m.init(U),x.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),b!==V&&b.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const X=new Set;return b.traverse(function(F){const ot=F.material;if(ot)if(Array.isArray(ot))for(let Mt=0;Mt<ot.length;Mt++){const At=ot[Mt];Pe(At,V,F),X.add(At)}else Pe(ot,V,F),X.add(ot)}),x.pop(),m=null,X},this.compileAsync=function(b,U,V=null){const X=this.compile(b,U,V);return new Promise(F=>{function ot(){if(X.forEach(function(Mt){st.get(Mt).currentProgram.isReady()&&X.delete(Mt)}),X.size===0){F(b);return}setTimeout(ot,10)}Qt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ne=null;function mn(b){ne&&ne(b)}function hn(){Xn.stop()}function co(){Xn.start()}const Xn=new nc;Xn.setAnimationLoop(mn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(b){ne=b,at.setAnimationLoop(b),b===null?Xn.stop():Xn.start()},at.addEventListener("sessionstart",hn),at.addEventListener("sessionend",co),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(U),U=at.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,R),m=vt.get(b,x.length),m.init(U),x.push(m),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Kt.setFromProjectionMatrix(ht),Z=this.localClippingEnabled,B=Vt.init(this.clippingPlanes,Z),_=lt.get(b,p.length),_.init(),p.push(_),at.enabled===!0&&at.isPresenting===!0){const ot=v.xr.getDepthSensingMesh();ot!==null&&yr(ot,U,-1/0,v.sortObjects)}yr(b,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(q,gt),Bt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Bt&&St.addToRenderList(_,b),this.info.render.frame++,B===!0&&Vt.beginShadows();const V=m.state.shadowsArray;rt.render(V,b,U),B===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,F=_.transmissive;if(m.setupLights(),U.isArrayCamera){const ot=U.cameras;if(F.length>0)for(let Mt=0,At=ot.length;Mt<At;Mt++){const wt=ot[Mt];uo(X,F,b,wt)}Bt&&St.render(b);for(let Mt=0,At=ot.length;Mt<At;Mt++){const wt=ot[Mt];ho(_,b,wt,wt.viewport)}}else F.length>0&&uo(X,F,b,U),Bt&&St.render(b),ho(_,b,U);R!==null&&(Et.updateMultisampleRenderTarget(R),Et.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,U),$t.resetDefaultState(),I=-1,E=null,x.pop(),x.length>0?(m=x[x.length-1],B===!0&&Vt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function yr(b,U,V,X){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Kt.intersectsSprite(b)){X&&Lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);const Mt=Q.update(b),At=b.material;At.visible&&_.push(b,Mt,At,V,Lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Kt.intersectsObject(b))){const Mt=Q.update(b),At=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Lt.copy(b.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Lt.copy(Mt.boundingSphere.center)),Lt.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(At)){const wt=Mt.groups;for(let Nt=0,Ut=wt.length;Nt<Ut;Nt++){const Pt=wt[Nt],ie=At[Pt.materialIndex];ie&&ie.visible&&_.push(b,Mt,ie,V,Lt.z,Pt)}}else At.visible&&_.push(b,Mt,At,V,Lt.z,null)}}const ot=b.children;for(let Mt=0,At=ot.length;Mt<At;Mt++)yr(ot[Mt],U,V,X)}function ho(b,U,V,X){const F=b.opaque,ot=b.transmissive,Mt=b.transparent;m.setupLightsView(V),B===!0&&Vt.setGlobalState(v.clippingPlanes,V),X&&k.viewport(M.copy(X)),F.length>0&&_s(F,U,V),ot.length>0&&_s(ot,U,V),Mt.length>0&&_s(Mt,U,V),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function uo(b,U,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new ci(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?us:An,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const ot=m.state.transmissionRenderTarget[X.id],Mt=X.viewport||M;ot.setSize(Mt.z,Mt.w);const At=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(G),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),Bt?St.render(V):v.clear();const wt=v.toneMapping;v.toneMapping=Bn;const Nt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),B===!0&&Vt.setGlobalState(v.clippingPlanes,X),_s(b,V,X),Et.updateMultisampleRenderTarget(ot),Et.updateRenderTargetMipmap(ot),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Pt=0,ie=U.length;Pt<ie;Pt++){const _e=U[Pt],xe=_e.object,Ve=_e.geometry,se=_e.material,Ct=_e.group;if(se.side===an&&xe.layers.test(X.layers)){const Le=se.side;se.side=Be,se.needsUpdate=!0,fo(xe,V,X,Ve,se,Ct),se.side=Le,se.needsUpdate=!0,Ut=!0}}Ut===!0&&(Et.updateMultisampleRenderTarget(ot),Et.updateRenderTargetMipmap(ot))}v.setRenderTarget(At),v.setClearColor(G,j),Nt!==void 0&&(X.viewport=Nt),v.toneMapping=wt}function _s(b,U,V){const X=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ot=b.length;F<ot;F++){const Mt=b[F],At=Mt.object,wt=Mt.geometry,Nt=X===null?Mt.material:X,Ut=Mt.group;At.layers.test(V.layers)&&fo(At,U,V,wt,Nt,Ut)}}function fo(b,U,V,X,F,ot){b.onBeforeRender(v,U,V,X,F,ot),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.transparent===!0&&F.side===an&&F.forceSinglePass===!1?(F.side=Be,F.needsUpdate=!0,v.renderBufferDirect(V,U,X,F,b,ot),F.side=kn,F.needsUpdate=!0,v.renderBufferDirect(V,U,X,F,b,ot),F.side=an):v.renderBufferDirect(V,U,X,F,b,ot),b.onAfterRender(v,U,V,X,F,ot)}function xs(b,U,V){U.isScene!==!0&&(U=zt);const X=st.get(b),F=m.state.lights,ot=m.state.shadowsArray,Mt=F.state.version,At=nt.getParameters(b,F.state,ot,U,V),wt=nt.getProgramCacheKey(At);let Nt=X.programs;X.environment=b.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(b.isMeshStandardMaterial?y:w).get(b.envMap||X.environment),X.envMapRotation=X.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Nt===void 0&&(b.addEventListener("dispose",It),Nt=new Map,X.programs=Nt);let Ut=Nt.get(wt);if(Ut!==void 0){if(X.currentProgram===Ut&&X.lightsStateVersion===Mt)return mo(b,At),Ut}else At.uniforms=nt.getUniforms(b),b.onBeforeCompile(At,v),Ut=nt.acquireProgram(At,wt),Nt.set(wt,Ut),X.uniforms=At.uniforms;const Pt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pt.clippingPlanes=Vt.uniform),mo(b,At),X.needsLights=wc(b),X.lightsStateVersion=Mt,X.needsLights&&(Pt.ambientLightColor.value=F.state.ambient,Pt.lightProbe.value=F.state.probe,Pt.directionalLights.value=F.state.directional,Pt.directionalLightShadows.value=F.state.directionalShadow,Pt.spotLights.value=F.state.spot,Pt.spotLightShadows.value=F.state.spotShadow,Pt.rectAreaLights.value=F.state.rectArea,Pt.ltc_1.value=F.state.rectAreaLTC1,Pt.ltc_2.value=F.state.rectAreaLTC2,Pt.pointLights.value=F.state.point,Pt.pointLightShadows.value=F.state.pointShadow,Pt.hemisphereLights.value=F.state.hemi,Pt.directionalShadowMap.value=F.state.directionalShadowMap,Pt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pt.spotShadowMap.value=F.state.spotShadowMap,Pt.spotLightMatrix.value=F.state.spotLightMatrix,Pt.spotLightMap.value=F.state.spotLightMap,Pt.pointShadowMap.value=F.state.pointShadowMap,Pt.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Ut,X.uniformsList=null,Ut}function po(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=sr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function mo(b,U){const V=st.get(b);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Tc(b,U,V,X,F){U.isScene!==!0&&(U=zt),Et.resetTextureUnits();const ot=U.fog,Mt=X.isMeshStandardMaterial?U.environment:null,At=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vn,wt=(X.isMeshStandardMaterial?y:w).get(X.envMap||Mt),Nt=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ut=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pt=!!V.morphAttributes.position,ie=!!V.morphAttributes.normal,_e=!!V.morphAttributes.color;let xe=Bn;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(xe=v.toneMapping);const Ve=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=Ve!==void 0?Ve.length:0,Ct=st.get(X),Le=m.state.lights;if(B===!0&&(Z===!0||b!==E)){const Ze=b===E&&X.id===I;Vt.setState(X,b,Ze)}let re=!1;X.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Le.state.version||Ct.outputColorSpace!==At||F.isBatchedMesh&&Ct.batching===!1||!F.isBatchedMesh&&Ct.batching===!0||F.isBatchedMesh&&Ct.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ct.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ct.instancing===!1||!F.isInstancedMesh&&Ct.instancing===!0||F.isSkinnedMesh&&Ct.skinning===!1||!F.isSkinnedMesh&&Ct.skinning===!0||F.isInstancedMesh&&Ct.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ct.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ct.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ct.instancingMorph===!1&&F.morphTexture!==null||Ct.envMap!==wt||X.fog===!0&&Ct.fog!==ot||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Vt.numPlanes||Ct.numIntersection!==Vt.numIntersection)||Ct.vertexAlphas!==Nt||Ct.vertexTangents!==Ut||Ct.morphTargets!==Pt||Ct.morphNormals!==ie||Ct.morphColors!==_e||Ct.toneMapping!==xe||Ct.morphTargetsCount!==se)&&(re=!0):(re=!0,Ct.__version=X.version);let Qe=Ct.currentProgram;re===!0&&(Qe=xs(X,U,F));let di=!1,We=!1,Sr=!1;const Ee=Qe.getUniforms(),Rn=Ct.uniforms;if(k.useProgram(Qe.program)&&(di=!0,We=!0,Sr=!0),X.id!==I&&(I=X.id,We=!0),di||E!==b){Ee.setValue(D,"projectionMatrix",b.projectionMatrix),Ee.setValue(D,"viewMatrix",b.matrixWorldInverse);const Ze=Ee.map.cameraPosition;Ze!==void 0&&Ze.setValue(D,_t.setFromMatrixPosition(b.matrixWorld)),z.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,We=!0,Sr=!0)}if(F.isSkinnedMesh){Ee.setOptional(D,F,"bindMatrix"),Ee.setOptional(D,F,"bindMatrixInverse");const Ze=F.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ee.setValue(D,"boneTexture",Ze.boneTexture,Et))}F.isBatchedMesh&&(Ee.setOptional(D,F,"batchingTexture"),Ee.setValue(D,"batchingTexture",F._matricesTexture,Et),Ee.setOptional(D,F,"batchingIdTexture"),Ee.setValue(D,"batchingIdTexture",F._indirectTexture,Et),Ee.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&Ee.setValue(D,"batchingColorTexture",F._colorsTexture,Et));const Er=V.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&jt.update(F,V,Qe),(We||Ct.receiveShadow!==F.receiveShadow)&&(Ct.receiveShadow=F.receiveShadow,Ee.setValue(D,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Rn.envMap.value=wt,Rn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(Rn.envMapIntensity.value=U.environmentIntensity),We&&(Ee.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&Ac(Rn,Sr),ot&&X.fog===!0&&Rt.refreshFogUniforms(Rn,ot),Rt.refreshMaterialUniforms(Rn,X,J,$,m.state.transmissionRenderTarget[b.id]),sr.upload(D,po(Ct),Rn,Et)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(sr.upload(D,po(Ct),Rn,Et),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ee.setValue(D,"center",F.center),Ee.setValue(D,"modelViewMatrix",F.modelViewMatrix),Ee.setValue(D,"normalMatrix",F.normalMatrix),Ee.setValue(D,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ze=X.uniformsGroups;for(let br=0,Rc=Ze.length;br<Rc;br++){const go=Ze[br];ge.update(go,Qe),ge.bind(go,Qe)}}return Qe}function Ac(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function wc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,U,V){st.get(b.texture).__webglTexture=U,st.get(b.depthTexture).__webglTexture=V;const X=st.get(b);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||Qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const V=st.get(b);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,V=0){R=b,L=U,A=V;let X=!0,F=null,ot=!1,Mt=!1;if(b){const wt=st.get(b);wt.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(D.FRAMEBUFFER,null),X=!1):wt.__webglFramebuffer===void 0?Et.setupRenderTarget(b):wt.__hasExternalTextures&&Et.rebindTextures(b,st.get(b.texture).__webglTexture,st.get(b.depthTexture).__webglTexture);const Nt=b.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Mt=!0);const Ut=st.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?F=Ut[U][V]:F=Ut[U],ot=!0):b.samples>0&&Et.useMultisampledRTT(b)===!1?F=st.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?F=Ut[V]:F=Ut,M.copy(b.viewport),C.copy(b.scissor),H=b.scissorTest}else M.copy(xt).multiplyScalar(J).floor(),C.copy(yt).multiplyScalar(J).floor(),H=Ft;if(k.bindFramebuffer(D.FRAMEBUFFER,F)&&X&&k.drawBuffers(b,F),k.viewport(M),k.scissor(C),k.setScissorTest(H),ot){const wt=st.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,V)}else if(Mt){const wt=st.get(b.texture),Nt=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.__webglTexture,V||0,Nt)}I=-1},this.readRenderTargetPixels=function(b,U,V,X,F,ot,Mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=st.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){k.bindFramebuffer(D.FRAMEBUFFER,At);try{const wt=b.texture,Nt=wt.format,Ut=wt.type;if(!z.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-X&&V>=0&&V<=b.height-F&&D.readPixels(U,V,X,F,kt.convert(Nt),kt.convert(Ut),ot)}finally{const wt=R!==null?st.get(R).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(b,U,V,X,F,ot,Mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=st.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){k.bindFramebuffer(D.FRAMEBUFFER,At);try{const wt=b.texture,Nt=wt.format,Ut=wt.type;if(!z.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-X&&V>=0&&V<=b.height-F){const Pt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.bufferData(D.PIXEL_PACK_BUFFER,ot.byteLength,D.STREAM_READ),D.readPixels(U,V,X,F,kt.convert(Nt),kt.convert(Ut),0),D.flush();const ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await kh(D,ie,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Pt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ot)}finally{D.deleteBuffer(Pt),D.deleteSync(ie)}return ot}}finally{const wt=R!==null?st.get(R).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,wt)}}},this.copyFramebufferToTexture=function(b,U=null,V=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const X=Math.pow(2,-V),F=Math.floor(b.image.width*X),ot=Math.floor(b.image.height*X),Mt=U!==null?U.x:0,At=U!==null?U.y:0;Et.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,Mt,At,F,ot),k.unbindTexture()},this.copyTextureToTexture=function(b,U,V=null,X=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1],U=arguments[2],F=arguments[3]||0,V=null);let ot,Mt,At,wt,Nt,Ut;V!==null?(ot=V.max.x-V.min.x,Mt=V.max.y-V.min.y,At=V.min.x,wt=V.min.y):(ot=b.image.width,Mt=b.image.height,At=0,wt=0),X!==null?(Nt=X.x,Ut=X.y):(Nt=0,Ut=0);const Pt=kt.convert(U.format),ie=kt.convert(U.type);Et.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const _e=D.getParameter(D.UNPACK_ROW_LENGTH),xe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ve=D.getParameter(D.UNPACK_SKIP_PIXELS),se=D.getParameter(D.UNPACK_SKIP_ROWS),Ct=D.getParameter(D.UNPACK_SKIP_IMAGES),Le=b.isCompressedTexture?b.mipmaps[F]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Le.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Le.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,At),D.pixelStorei(D.UNPACK_SKIP_ROWS,wt),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,Nt,Ut,ot,Mt,Pt,ie,Le.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,Nt,Ut,Le.width,Le.height,Pt,Le.data):D.texSubImage2D(D.TEXTURE_2D,F,Nt,Ut,ot,Mt,Pt,ie,Le),D.pixelStorei(D.UNPACK_ROW_LENGTH,_e),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,se),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ct),F===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(b,U,V=null,X=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,b=arguments[2],U=arguments[3],F=arguments[4]||0);let ot,Mt,At,wt,Nt,Ut,Pt,ie,_e;const xe=b.isCompressedTexture?b.mipmaps[F]:b.image;V!==null?(ot=V.max.x-V.min.x,Mt=V.max.y-V.min.y,At=V.max.z-V.min.z,wt=V.min.x,Nt=V.min.y,Ut=V.min.z):(ot=xe.width,Mt=xe.height,At=xe.depth,wt=0,Nt=0,Ut=0),X!==null?(Pt=X.x,ie=X.y,_e=X.z):(Pt=0,ie=0,_e=0);const Ve=kt.convert(U.format),se=kt.convert(U.type);let Ct;if(U.isData3DTexture)Et.setTexture3D(U,0),Ct=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Et.setTexture2DArray(U,0),Ct=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Le=D.getParameter(D.UNPACK_ROW_LENGTH),re=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Qe=D.getParameter(D.UNPACK_SKIP_PIXELS),di=D.getParameter(D.UNPACK_SKIP_ROWS),We=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,wt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Ct,F,Pt,ie,_e,ot,Mt,At,Ve,se,xe.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ct,F,Pt,ie,_e,ot,Mt,At,Ve,xe.data):D.texSubImage3D(Ct,F,Pt,ie,_e,ot,Mt,At,Ve,se,xe),D.pixelStorei(D.UNPACK_ROW_LENGTH,Le),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,re),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,di),D.pixelStorei(D.UNPACK_SKIP_IMAGES,We),F===0&&U.generateMipmaps&&D.generateMipmap(Ct),k.unbindTexture()},this.initRenderTarget=function(b){st.get(b).__webglFramebuffer===void 0&&Et.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Et.setTextureCube(b,0):b.isData3DTexture?Et.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Et.setTexture2DArray(b,0):Et.setTexture2D(b,0),k.unbindTexture()},this.resetState=function(){L=0,A=0,R=null,k.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===$a?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===_r?"display-p3":"srgb"}}class eo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new eo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hc extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $m{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ja("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ne=new P;class fr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=on(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=on(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=on(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=on(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=on(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hn extends Wn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ci;const ji=new P,Pi=new P,Li=new P,Di=new Ht,Ji=new Ht,dc=new pe,ks=new P,Qi=new P,Gs=new P,ul=new Ht,jr=new Ht,fl=new Ht;class hi extends Te{constructor(t=new Hn){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new Ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $m(e,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new fr(n,3,0,!1)),Ci.setAttribute("uv",new fr(n,2,3,!1))}this.geometry=Ci,this.material=t,this.center=new Ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),dc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Li.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Li.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Hs(ks.set(-.5,-.5,0),Li,o,Pi,i,r),Hs(Qi.set(.5,-.5,0),Li,o,Pi,i,r),Hs(Gs.set(.5,.5,0),Li,o,Pi,i,r),ul.set(0,0),jr.set(1,0),fl.set(1,1);let a=t.ray.intersectTriangle(ks,Qi,Gs,!1,ji);if(a===null&&(Hs(Qi.set(-.5,.5,0),Li,o,Pi,i,r),jr.set(0,1),a=t.ray.intersectTriangle(ks,Gs,Qi,!1,ji),a===null))return;const l=t.ray.origin.distanceTo(ji);l<t.near||l>t.far||e.push({distance:l,point:ji.clone(),uv:Je.getInterpolation(ji,ks,Qi,Gs,ul,jr,fl,new Ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Hs(s,t,e,n,i,r){Di.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ji.x=r*Di.x-i*Di.y,Ji.y=i*Di.x+r*Di.y):Ji.copy(Di),s.copy(t),s.x+=Ji.x,s.y+=Ji.y,s.applyMatrix4(dc)}class uc extends Wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const pr=new P,mr=new P,pl=new pe,ts=new Ja,Vs=new ms,Jr=new P,ml=new P;class Zm extends Te{constructor(t=new Ge,e=new uc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)pr.fromBufferAttribute(e,i-1),mr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=pr.distanceTo(mr);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(i),Vs.radius+=r,t.ray.intersectsSphere(Vs)===!1)return;pl.copy(i).invert(),ts.copy(t.ray).applyMatrix4(pl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const u=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=u,m=g-1;_<m;_+=c){const p=f.getX(_),x=f.getX(_+1),v=Ws(this,t,ts,l,p,x);v&&e.push(v)}if(this.isLineLoop){const _=f.getX(g-1),m=f.getX(u),p=Ws(this,t,ts,l,_,m);p&&e.push(p)}}else{const u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=u,m=g-1;_<m;_+=c){const p=Ws(this,t,ts,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Ws(this,t,ts,l,g-1,u);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ws(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(pr.fromBufferAttribute(o,i),mr.fromBufferAttribute(o,r),e.distanceSqToSegment(pr,mr,Jr,ml)>n)return;Jr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Jr);if(!(l<t.near||l>t.far))return{distance:l,point:ml.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const gl=new P,_l=new P;class jm extends Zm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)gl.fromBufferAttribute(e,i),_l.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gl.distanceTo(_l);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fc extends Wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xl=new pe,ka=new Ja,Xs=new ms,qs=new P;class Jm extends Te{constructor(t=new Ge,e=new fc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(i),Xs.radius+=r,t.ray.intersectsSphere(Xs)===!1)return;xl.copy(i).invert(),ka.copy(t.ray).applyMatrix4(xl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let g=h,_=u;g<_;g++){const m=c.getX(g);qs.fromBufferAttribute(d,m),vl(qs,m,l,i,t,e,this)}}else{const h=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let g=h,_=u;g<_;g++)qs.fromBufferAttribute(d,g),vl(qs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vl(s,t,e,n,i,r,o){const a=ka.distanceSqToPoint(s);if(a<e){const l=new P;ka.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class wn extends ke{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ys=new P,Ks=new P,Qr=new P,$s=new Je;class Qm extends Ge{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Oi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},u=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=$s;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),$s.getNormal(Qr),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let x=0;x<3;x++){const v=(x+1)%3,S=d[x],L=d[v],A=$s[f[x]],R=$s[f[v]],I=`${S}_${L}`,E=`${L}_${S}`;E in h&&h[E]?(Qr.dot(h[E].normal)<=r&&(u.push(A.x,A.y,A.z),u.push(R.x,R.y,R.z)),h[E]=null):I in h||(h[I]={index0:c[x],index1:c[v],normal:Qr.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:m}=h[g];Ys.fromBufferAttribute(a,_),Ks.fromBufferAttribute(a,m),u.push(Ys.x,Ys.y,Ys.z),u.push(Ks.x,Ks.y,Ks.z)}this.setAttribute("position",new ve(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class no extends Ge{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],f=[];let d=t;const h=(e-t)/i,u=new P,g=new Ht;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,f.push(g.x,g.y)}d+=h}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,v=x,S=x+n+1,L=x+n+2,A=x+1;a.push(v,S,A),a.push(S,L,A)}}this.setIndex(a),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class io extends Ge{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new P,h=new P,u=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let S=0;p===0&&o===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let L=0;L<=e;L++){const A=L/e;d.x=-t*Math.cos(i+A*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(i+A*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(A+S,1-v),x.push(c++)}f.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const v=f[p][x+1],S=f[p][x],L=f[p+1][x],A=f[p+1][x+1];(p!==0||o>0)&&u.push(v,S,A),(p!==n-1||l<Math.PI)&&u.push(S,L,A)}this.setIndex(u),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fn extends Wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wl,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class so extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class pc extends so{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ta=new pe,Ml=new P,yl=new P;class mc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ml.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ml),yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yl),e.updateMatrixWorld(),ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Sl=new pe,es=new P,ea=new P;class t0 extends mc{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),es.setFromMatrixPosition(t.matrixWorld),n.position.copy(es),ea.copy(n.position),ea.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ea),n.updateMatrixWorld(),i.makeTranslation(-es.x,-es.y,-es.z),Sl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl)}}class e0 extends so{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new t0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class n0 extends mc{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gc extends so{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new n0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ga);const W={SX:512,SY:200,SZ:512,CHUNK:16,SEED:20260722,SURFACE:112,SEA_LEVEL:101,ISLAND_CX:128,ISLAND_CZ:128,ISLAND_R_FULL:58,ISLAND_R_EDGE:72,FOG_NEAR:120,FOG_FAR:230,RENDER_DIST:176,SKY_COLOR:8899056,MESH_BUDGET_PER_FRAME:2,LOAD_CHUNKS_PER_FRAME:8,GRAVITY:-25,JUMP_SPEED:8.5,WALK_SPEED:4.3,TERMINAL_VY:-40,PLAYER_W:.6,PLAYER_H:1.8,CAR_W:.9,CAR_H:1,CAR_SPEED_MULT:1.8,CAR_JUMP_MULT:.7,ARMOR_SPEED_MULT:.85,EYE_HEIGHT:1.6,CAM_DIST:6,SWIM_UP_SPEED:4,WATER_GRAVITY_MULT:.18,WATER_DRAG:2.5,WATER_SPEED_MULT:.6,PENG_SPEED_MULT:1.5,DIVE_SPEED_MULT:2,WATER_WARN:480,WATER_LIMIT:600,WATER_DAMAGE:2,WATER_RECOVER_MULT:2,REACH_BLOCK:5,REACH_ATTACK:3.5,ATTACK_COOLDOWN:.4,BASE_HP:100,HP_PER_LEVEL:10,BASE_ATK:10,ATK_PER_LEVEL:2,GEARS_PER_LEVEL:5,MAX_LEVEL:40,REGEN_DELAY:5,REGEN_PER_SEC:2,ARMOR_DAMAGE_MULT:.5,ARMOR_ATK_BONUS:5,QUAKE_RADIUS:4,QUAKE_COOLDOWN:6,QUAKE_DMG_MULT:1.5,FIRE_BREATH_COOLDOWN:4,FIRE_BREATH_RANGE:6,FLASH_COOLDOWN:10,FLASH_RADIUS:8,FLASH_DMG:25,STEALTH_DURATION:8,STEALTH_COOLDOWN:20,FOREST_REGEN:1,LAVA_DPS:6,FIRE_DPS:3,MONSTER_CAP:14,AGGRO_RANGE:12,PLAINS_SPAWN_INTERVAL:20,PLAINS_MAX:4,DAY_LENGTH:600,NIGHT_START:.5,NIGHT_END:.95,NIGHT_SPAWN_MULT:2,PET_CAP:12,PET_HP_RATIO:.8,PET_ATK_RATIO:.7,MOUNT_SPEED_MULT:1.6,BOAT_SPEED:7,TOWER_FLOORS:1e3,DRAGON_HP:25e4,DRAGON_ATK:60,SAVE_KEY:"qiqi_save_v3",SAVE_KEY_V2:"qiqi_save_v2",SAVE_KEY_V1:"qiqi_save_v1",AUTOSAVE_INTERVAL:5},i0={main:{sx:512,sy:200,sz:512},hell:{sx:192,sy:96,sz:192},void:{sx:128,sy:80,sz:128},arena:{sx:48,sy:32,sz:48}},Y={TOWER_C:{x:128,z:128},SPAWN:{x:128.5,z:141.5},THRONE:{x:128,z:128},GOLD_TILE:{x:128,z:130},NPC:{x:125.5,z:128.5},HENGE_C:{x:176,z:128},SPAWNER_C:{x:80,z:128},ORE_ROOM_DEPTH:100,EARTH_PLANK_DEPTH:100,PORTAL_HELL:{x:128,z:194},AUTHOR_ISLE:{x:96,z:392,r:26},HUT:{x:96,z:392},TAME_LAND:{x:396,z:200,rx:80,rz:78},JUNGLE_TEMPLE:{x:396,z:200},DEEP_SEA:{x:312,z:424,r:60},SEA_PALACE:{x:312,z:424},KUNPENG_AIR:{x:312,y:150,z:424},FORBIDDEN:{x:104,z:480},FORBIDDEN_CHEST:{x:118,z:486},UNDERCITY:{x:168,y:18,z:168},CORE:{x:168,z:168},SHRINE3:{x:180,z:168},LIGHT_CHEST:{x:173,z:164},UNDERCITY_STAIR:{x:152,z:152},HELL_SPAWN:{x:30,z:96},HELL_LAKE:{x:96,z:96,r:24},HELL_FIRE_SEA:{x:150,z:96,r:18},HELL_FORT1:{x:48,z:48},HELL_FORT2:{x:48,z:144},VOID_SPAWN:{x:64,z:20},VOID_CENTER:{x:64,z:64},VOID_DISK_R:56,VOID_FLOOR_Y:30},T={AIR:0,GRASS:1,MUD:2,WOOD:3,LEAVES:4,STONE:5,BRICK:6,ORE:7,GOLD:8,CODE:9,PLANK:10,CHEST:11,THRONE:12,BEDROCK:13,SAND:14,WATER:15,LAVA:16,MAGMA_STONE:17,MAGMA_WOOD:18,MAGMA_LEAVES:19,FIRE:20,PORTAL:21,PORTAL_FRAME:22,END_STONE:23,SYMBOL:24,BED:25,PALACE_BRICK:26,JUNGLE_BRICK:27,CORE_BLOCK:28,SCORCHED:29,GLOWSTONE:30,WATER_FLOW:31},ze=[{name:"空气",hardness:0,tiles:null,drop:0,solid:!1,opaque:!1},{name:"草方块",hardness:.25,tiles:{top:0,side:1,bottom:2},drop:T.MUD},{name:"泥巴",hardness:.2,tiles:{top:2,side:2,bottom:2},drop:T.MUD},{name:"木头",hardness:.5,tiles:{top:4,side:3,bottom:4},drop:T.WOOD},{name:"树叶",hardness:.15,tiles:{top:5,side:5,bottom:5},drop:0},{name:"石头",hardness:.9,tiles:{top:6,side:6,bottom:6},drop:T.STONE},{name:"石砖",hardness:1.2,tiles:{top:7,side:7,bottom:7},drop:T.BRICK},{name:"普通矿石",hardness:1.5,tiles:{top:8,side:8,bottom:8},drop:T.ORE},{name:"金子",hardness:1.5,tiles:{top:9,side:9,bottom:9},drop:T.GOLD},{name:"代码矿石",hardness:3,tiles:{top:10,side:10,bottom:10},drop:T.CODE},{name:"诡异木板",hardness:.6,tiles:{top:11,side:11,bottom:11},drop:T.PLANK},{name:"箱子",hardness:1/0,tiles:{top:13,side:12,bottom:13},drop:0},{name:"金座",hardness:1/0,tiles:{top:14,side:14,bottom:14},drop:0},{name:"基岩",hardness:1/0,tiles:{top:15,side:15,bottom:15},drop:0},{name:"沙子",hardness:.25,tiles:{top:16,side:16,bottom:16},drop:T.SAND},{name:"水",hardness:1/0,tiles:{top:17,side:17,bottom:17},drop:0,solid:!1,opaque:!1,fluid:!0},{name:"岩浆",hardness:1/0,tiles:{top:18,side:18,bottom:18},drop:0,solid:!1,fluid:!0,damage:6},{name:"岩浆石",hardness:1,tiles:{top:19,side:19,bottom:19},drop:T.MAGMA_STONE},{name:"岩浆树干",hardness:.6,tiles:{top:20,side:20,bottom:20},drop:T.MAGMA_WOOD},{name:"岩浆树叶",hardness:.15,tiles:{top:21,side:21,bottom:21},drop:0},{name:"火",hardness:.1,tiles:{top:22,side:22,bottom:22},drop:0,solid:!1,opaque:!1,damage:3},{name:"传送门",hardness:1/0,tiles:{top:23,side:23,bottom:23},drop:0,solid:!1},{name:"门框石",hardness:1/0,tiles:{top:24,side:24,bottom:24},drop:0},{name:"暗黑石",hardness:1.2,tiles:{top:25,side:25,bottom:25},drop:T.END_STONE},{name:"符号",hardness:.8,tiles:{top:26,side:26,bottom:26},drop:0},{name:"床",hardness:.4,tiles:{top:27,side:28,bottom:4},drop:T.BED},{name:"海宫砖",hardness:1.5,tiles:{top:29,side:29,bottom:29},drop:T.PALACE_BRICK},{name:"丛林砖",hardness:1.2,tiles:{top:30,side:30,bottom:30},drop:T.JUNGLE_BRICK},{name:"驱动核心",hardness:1/0,tiles:{top:31,side:31,bottom:31},drop:0},{name:"焦黑土",hardness:.4,tiles:{top:32,side:32,bottom:32},drop:T.SCORCHED},{name:"荧光石",hardness:.8,tiles:{top:33,side:33,bottom:33},drop:T.GLOWSTONE},{name:"流动的水",hardness:1/0,tiles:{top:17,side:17,bottom:17},drop:0,solid:!1,opaque:!1,fluid:!0}];function s0(s){return s!==T.AIR&&ze[s].solid!==!1}function _c(s){return s!==T.AIR&&ze[s].opaque!==!1}function r0(s){return s!==T.AIR&&ze[s].hardness!==1/0}const a0=[T.MUD,T.WOOD,T.STONE,T.BRICK,T.SAND,T.ORE,T.GOLD,T.CODE,T.PLANK,T.MAGMA_STONE,T.MAGMA_WOOD,T.END_STONE,T.PALACE_BRICK,T.JUNGLE_BRICK,T.SCORCHED,T.GLOWSTONE,T.BED];function gs(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function o0(s){const t=gs(s),e=new Uint8Array(512),n=new Float32Array(256);for(let o=0;o<256;o++)e[o]=o,n[o]=t();for(let o=255;o>0;o--){const a=Math.floor(t()*(o+1));[e[o],e[a]]=[e[a],e[o]]}for(let o=0;o<256;o++)e[256+o]=e[o];const i=(o,a)=>n[e[(o&255)+e[a&255]]],r=o=>o*o*(3-2*o);return function(a,l){const c=Math.floor(a),f=Math.floor(l),d=a-c,h=l-f,u=i(c,f),g=i(c+1,f),_=i(c,f+1),m=i(c+1,f+1),p=r(d),x=r(h);return(u*(1-p)+g*p)*(1-x)+(_*(1-p)+m*p)*x}}function ds(s,t=3){const e=[];for(let n=0;n<t;n++)e.push(o0(s+n*1013));return function(n,i){let r=0,o=1,a=1,l=0;for(let c=0;c<t;c++)r+=e[c](n*a,i*a)*o,l+=o,o*=.5,a*=2;return r/l}}const mt=64,On=8;function l0(){const s=document.createElement("canvas");s.width=s.height=mt*On;const t=s.getContext("2d"),e=gs(424242),n=d=>[d%On*mt,Math.floor(d/On)*mt];function i(d,h){const[u,g]=n(d);t.fillStyle=h,t.fillRect(u,g,mt,mt)}function r(d,h,u=260,g=3){const[_,m]=n(d);for(let p=0;p<u;p++)t.fillStyle=h[Math.floor(e()*h.length)],t.fillRect(_+Math.floor(e()*mt),m+Math.floor(e()*mt),1+Math.floor(e()*g),1+Math.floor(e()*g))}function o(d,h,u=8,g=4,_=10){const[m,p]=n(d);for(let x=0;x<u;x++)t.fillStyle=h[Math.floor(e()*h.length)],t.beginPath(),t.arc(m+e()*mt,p+e()*mt,g+e()*(_-g),0,Math.PI*2),t.fill();t.save(),t.beginPath(),t.rect(m,p,mt,mt),t.clip(),t.restore()}function a(d,h,u=5,g){const[_,m]=n(d),p=ds(g??d*991+7,3);for(let x=0;x<mt;x+=2)for(let v=0;v<mt;v+=2){const S=p(v/mt*u,x/mt*u);let L=h[h.length-1].c;for(const A of h)if(S<=A.t){L=A.c;break}t.fillStyle=L,t.fillRect(_+v,m+x,2,2)}}a(0,[{t:.38,c:"#468f37"},{t:.5,c:"#51a340"},{t:.62,c:"#5cb544"},{t:1,c:"#69c250"}],6),r(0,["#7fd35f","#8ada6a"],46,1),r(0,["#3d7d30"],30,1),a(1,[{t:.4,c:"#6d4a30"},{t:.55,c:"#7a5538"},{t:.72,c:"#8a6142"},{t:1,c:"#96704e"}],5),(()=>{const[d,h]=n(1),u=ds(881,2);for(let g=0;g<mt;g+=2){const _=9+Math.floor(u(g/mt*5,.3)*9);t.fillStyle="#51a340",t.fillRect(d+g,h,2,_),t.fillStyle="#69c250",t.fillRect(d+g,h,2,3),t.fillStyle="#3d7d30",t.fillRect(d+g,h+_-2,2,2)}})(),a(2,[{t:.36,c:"#5f4029"},{t:.5,c:"#6d4a30"},{t:.66,c:"#7d5638"},{t:1,c:"#8f6647"}],6),r(2,["#4a3220"],40,2),r(2,["#9a7454"],26,1),i(3,"#8f6b3d"),(()=>{const[d,h]=n(3);for(let u=0;u<mt;u+=8)t.fillStyle=u%16===0?"#7d5c33":"#9a7544",t.fillRect(d+u,h,6,mt);t.fillStyle="#6b4d29";for(let u=0;u<6;u++)t.fillRect(d+Math.floor(e()*mt),h,1,mt)})(),i(4,"#9a7544"),(()=>{const[d,h]=n(4);t.strokeStyle="#7d5c33",t.lineWidth=3;for(let u=6;u<34;u+=8)t.beginPath(),t.arc(d+32,h+32,u,0,Math.PI*2),t.stroke()})(),a(5,[{t:.36,c:"#2a6122"},{t:.5,c:"#357a2b"},{t:.66,c:"#3f8f33"},{t:1,c:"#4aa63d"}],7),r(5,["#1e4718"],36,2),r(5,["#5cb544"],30,1),a(6,[{t:.4,c:"#797979"},{t:.54,c:"#848484"},{t:.7,c:"#8f8f8f"},{t:1,c:"#9b9b9b"}],5),(()=>{const[d,h]=n(6);for(let u=0;u<3;u++){let g=d+e()*mt,_=h+e()*mt;for(let m=0;m<5;m++){const p=g+(e()-.5)*24,x=_+(e()-.5)*24;t.strokeStyle="#666666",t.lineWidth=2,t.beginPath(),t.moveTo(g,_),t.lineTo(p,x),t.stroke(),t.strokeStyle="rgba(200,200,200,0.35)",t.lineWidth=1,t.beginPath(),t.moveTo(g+1,_+1),t.lineTo(p+1,x+1),t.stroke(),g=p,_=x}}})(),i(7,"#9a9a9a"),(()=>{const[d,h]=n(7);t.fillStyle="#7b7b7b";for(let u=0;u<4;u++){t.fillRect(d,h+u*16,mt,2);const g=u%2===0?0:16;for(let _=g;_<=mt;_+=32)t.fillRect(d+_,h+u*16,2,16)}r(7,["#909090","#a4a4a4"],120,2)})(),a(8,[{t:.4,c:"#797979"},{t:.54,c:"#848484"},{t:.7,c:"#8f8f8f"},{t:1,c:"#9b9b9b"}],5,8881),(()=>{const[d,h]=n(8);for(let u=0;u<6;u++){const g=d+8+e()*46,_=h+8+e()*46,m=5+e()*5;t.fillStyle="#1e7a76",t.fillRect(g-m/2-1,_-m/2-1,m+2,m+2),t.fillStyle="#39c8c4",t.fillRect(g-m/2,_-m/2,m,m),t.fillStyle="#67dcd8",t.fillRect(g-m/2,_-m/2,m,2),t.fillStyle="#b8f5f2",t.fillRect(g-m/2,_-m/2,2,2)}})(),a(9,[{t:.4,c:"#c9962a"},{t:.55,c:"#d9a832"},{t:.72,c:"#e8b53a"},{t:1,c:"#f2c95c"}],5),(()=>{const[d,h]=n(9);t.fillStyle="#fff3c4";for(let u=0;u<6;u++){const g=d+6+e()*52,_=h+6+e()*52;t.fillRect(g-1,_-4,2,8),t.fillRect(g-4,_-1,8,2),t.fillStyle="#ffffff",t.fillRect(g-1,_-1,2,2),t.fillStyle="#fff3c4"}})(),(()=>{i(10,"#0a0f0a");const[h,u]=n(10);r(10,["#101810","#0d130d"],120,3);const g="ABCDEFGHIJKLMNOPQRSTUVWXYZ01";t.font="bold 9px monospace",t.textBaseline="middle",t.textAlign="center";for(let _=0;_<5;_++){const m=_%2===0;let p=h+6+e()*52,x=u+6+e()*52,v=m?0:1,S=m?1:0;for(let L=0;L<9;L++){const A=e()<.25;t.fillStyle=A?"#7dff7d":"#2f9e2f",t.fillText(g[Math.floor(e()*g.length)],p,x),t.strokeStyle="rgba(47,158,47,0.55)",t.lineWidth=1;const R=p+v*8,I=x+S*8;if(t.beginPath(),t.moveTo(p,x),t.lineTo(R,I),t.stroke(),p=R,x=I,e()<.3&&([v,S]=[S,v]),p<h+4||p>h+60||x<u+4||x>u+60)break}}})(),i(11,"#cfc4b2"),(()=>{const[d,h]=n(11);for(let u=0;u<mt;u+=10)t.fillStyle=u%20===0?"#bfb2a0":"#d9d0bf",t.fillRect(d+u,h,8,mt);t.strokeStyle="rgba(120,80,160,0.5)",t.lineWidth=2;for(let u=0;u<3;u++){t.beginPath();const g=d+10+e()*44,_=h+10+e()*44;for(let m=0;m<Math.PI*3;m+=.4){const p=m*2.2,x=g+Math.cos(m)*p,v=_+Math.sin(m)*p;m===0?t.moveTo(x,v):t.lineTo(x,v)}t.stroke()}t.fillStyle="rgba(90,50,120,0.65)",t.beginPath(),t.ellipse(d+32,h+32,7,4,0,0,Math.PI*2),t.fill(),t.fillStyle="rgba(20,10,30,0.8)",t.beginPath(),t.arc(d+32,h+32,2,0,Math.PI*2),t.fill()})(),i(12,"#a9793f"),(()=>{const[d,h]=n(12);for(let u=0;u<mt;u+=9)t.fillStyle="#95682f",t.fillRect(d+u,h,1,mt);t.strokeStyle="#5f4520",t.lineWidth=4,t.strokeRect(d+2,h+2,mt-4,mt-4),t.fillStyle="#e8b53a",t.fillRect(d+27,h+22,10,14),t.fillStyle="#7d5c1e",t.fillRect(d+30,h+28,4,5)})(),i(13,"#b98747"),(()=>{const[d,h]=n(13);for(let u=0;u<mt;u+=9)t.fillStyle="#a5773a",t.fillRect(d,h+u,mt,1);t.strokeStyle="#5f4520",t.lineWidth=4,t.strokeRect(d+2,h+2,mt-4,mt-4)})(),i(14,"#e8b53a"),(()=>{const[d,h]=n(14);r(14,["#d6a02c","#f2c95c"],120,3),t.fillStyle="#b03040",t.fillRect(d+10,h+10,44,44),t.fillStyle="#c94b5c";for(let u=0;u<30;u++)t.fillRect(d+12+Math.floor(e()*40),h+12+Math.floor(e()*40),3,3);t.strokeStyle="#fff3c4",t.lineWidth=2,t.strokeRect(d+8,h+8,48,48)})(),a(15,[{t:.36,c:"#17171b"},{t:.5,c:"#222227"},{t:.68,c:"#2e2e34"},{t:1,c:"#3b3b42"}],6),r(15,["#0e0e11"],40,2),a(16,[{t:.4,c:"#d2c184"},{t:.55,c:"#dbcb90"},{t:.72,c:"#e2d29a"},{t:1,c:"#ecdfae"}],6),(()=>{const[d,h]=n(16);t.strokeStyle="rgba(255,248,220,0.5)",t.lineWidth=1;for(let u=0;u<4;u++){t.beginPath();for(let g=0;g<=mt;g+=4){const _=u*16+10+Math.sin(g/mt*Math.PI*2+u*2.1)*3;g===0?t.moveTo(d+g,h+_):t.lineTo(d+g,h+_)}t.stroke()}})(),i(17,"#3a8fd8"),(()=>{const[d,h]=n(17);t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=2;for(let u=0;u<5;u++){t.beginPath();const g=h+8+u*12;t.moveTo(d,g);for(let _=0;_<=mt;_+=8)t.lineTo(d+_,g+Math.sin(_/8+u)*3);t.stroke()}})(),i(18,"#d84a10"),o(18,["#ff8c1a","#ffb020"],8,5,12),r(18,["#ffe27a","#b83a0a"],120,3),i(19,"#4a3f3c"),r(19,["#403633","#554a46"],240,3),(()=>{const[d,h]=n(19);t.strokeStyle="#e85f1a",t.lineWidth=2;for(let u=0;u<4;u++){t.beginPath();let g=d+e()*mt,_=h+e()*mt;t.moveTo(g,_);for(let m=0;m<3;m++)g+=(e()-.5)*24,_+=(e()-.5)*24,t.lineTo(g,_);t.stroke()}})(),i(20,"#33241e"),(()=>{const[d,h]=n(20);for(let u=0;u<mt;u+=8)t.fillStyle=u%16===0?"#241813":"#3d2b22",t.fillRect(d+u,h,6,mt);t.fillStyle="#ff7a2a";for(let u=0;u<8;u++)t.fillRect(d+Math.floor(e()*mt),h+Math.floor(e()*mt),2,3)})(),i(21,"#7a2418"),r(21,["#8f3020","#5f1a10","#b04424"],320,4),i(22,"#ff7a1a"),(()=>{const[d,h]=n(22);for(let u=0;u<12;u++){const g=d+e()*mt,_=14+e()*30,m=t.createLinearGradient(0,h+mt,0,h+mt-_);m.addColorStop(0,"#ffdd55"),m.addColorStop(1,"rgba(255,60,10,0.15)"),t.fillStyle=m,t.beginPath(),t.moveTo(g-5,h+mt),t.lineTo(g,h+mt-_),t.lineTo(g+5,h+mt),t.fill()}})(),i(23,"#160a24"),(()=>{const[d,h]=n(23);t.strokeStyle="#8a4ae0",t.lineWidth=3;for(let u=0;u<3;u++){t.beginPath();for(let g=0;g<Math.PI*4;g+=.3){const _=g*2.4+u*4,m=d+32+Math.cos(g+u*2)*_,p=h+32+Math.sin(g+u*2)*_;g===0?t.moveTo(m,p):t.lineTo(m,p)}t.stroke()}r(23,["#b98aff","#5a2aa0"],40,2)})(),i(24,"#1e1e26"),r(24,["#16161c","#2a2a34"],240,3),(()=>{const[d,h]=n(24);t.strokeStyle="#e8b53a",t.lineWidth=3,t.strokeRect(d+6,h+6,mt-12,mt-12)})(),a(25,[{t:.38,c:"#0d0a13"},{t:.52,c:"#151020"},{t:.7,c:"#1d1730"},{t:1,c:"#282045"}],6),r(25,["#3d2f66","#4a3a7a"],34,1),i(26,"#0a0a14"),(()=>{const[d,h]=n(26);t.strokeStyle="#7dfcff",t.lineWidth=4,t.lineCap="round",t.beginPath(),t.moveTo(d+16,h+48),t.lineTo(d+32,h+12),t.lineTo(d+48,h+48),t.lineTo(d+22,h+30),t.lineTo(d+42,h+30),t.stroke(),t.strokeStyle="rgba(125,252,255,0.4)",t.lineWidth=10,t.beginPath(),t.arc(d+32,h+32,24,0,Math.PI*2),t.stroke()})(),i(27,"#c0392b"),(()=>{const[d,h]=n(27);r(27,["#a93226","#d0453a"],100,3),t.fillStyle="#f4f6f7",t.fillRect(d+6,h+6,mt-12,20),t.fillStyle="#d5dbdb",t.fillRect(d+6,h+22,mt-12,4)})(),i(28,"#8f6b3d"),(()=>{const[d,h]=n(28);t.fillStyle="#c0392b",t.fillRect(d,h,mt,26)})(),i(29,"#2e7f96"),(()=>{const[d,h]=n(29);t.fillStyle="#245f72";for(let u=0;u<4;u++){t.fillRect(d,h+u*16,mt,2);const g=u%2===0?0:16;for(let _=g;_<=mt;_+=32)t.fillRect(d+_,h+u*16,2,16)}t.fillStyle="#9fe8f2";for(let u=0;u<6;u++)t.fillRect(d+4+Math.floor(e()*56),h+4+Math.floor(e()*56),3,3)})(),i(30,"#5d7a4a"),(()=>{const[d,h]=n(30);t.fillStyle="#465e36";for(let u=0;u<4;u++){t.fillRect(d,h+u*16,mt,2);const g=u%2===0?0:16;for(let _=g;_<=mt;_+=32)t.fillRect(d+_,h+u*16,2,16)}r(30,["#6f8f58","#3d5230"],140,3)})(),i(31,"#d8f6ff"),(()=>{const[d,h]=n(31);t.strokeStyle="#39c8c4",t.lineWidth=3,t.strokeRect(d+8,h+8,mt-16,mt-16),t.beginPath(),t.arc(d+32,h+32,12,0,Math.PI*2),t.stroke(),t.fillStyle="#7dfcff",t.beginPath(),t.arc(d+32,h+32,6,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(57,200,196,0.5)",t.lineWidth=2;for(const[u,g,_,m]of[[8,32,20,32],[44,32,56,32],[32,8,32,20],[32,44,32,56]])t.beginPath(),t.moveTo(d+u,h+g),t.lineTo(d+_,h+m),t.stroke()})(),a(32,[{t:.38,c:"#1c1512"},{t:.52,c:"#261d19"},{t:.7,c:"#322622"},{t:1,c:"#3f302a"}],6),(()=>{const[d,h]=n(32);for(let u=0;u<6;u++){const g=d+Math.floor(e()*mt),_=h+Math.floor(e()*mt);t.fillStyle="#7a2e10",t.fillRect(g-1,_-1,4,4),t.fillStyle="#e85f1a",t.fillRect(g,_,2,2),t.fillStyle="#ffb35e",t.fillRect(g,_,1,1)}})(),i(33,"#ffe89a"),o(33,["#fff6c8","#ffd75e"],8,5,10),r(33,["#fffbe0"],60,2);const l=new wn(s);l.magFilter=Fe,l.minFilter=rs,l.generateMipmaps=!0,l.anisotropy=4,l.colorSpace=Ye;const c=mt*On;function f(d){const h=d%On*mt,u=Math.floor(d/On)*mt,g=.5;return{u0:(h+g)/c,v0:1-(u+mt-g)/c,u1:(h+mt-g)/c,v1:1-(u+g)/c}}return{canvas:s,texture:l,uvRect:f,waterTexture:h0(),waterMaterials:[]}}function c0(){const s=[];for(let t=0;t<4;t++){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),i=gs(778);n.strokeStyle="rgba(10,8,6,0.85)",n.lineWidth=2;const r=3+t*2,o=2+t*2;for(let l=0;l<r;l++){let c=32+(i()-.5)*10,f=32+(i()-.5)*10;n.beginPath(),n.moveTo(c,f);for(let d=0;d<o;d++)c+=(i()-.5)*26,f+=(i()-.5)*26,n.lineTo(c,f);n.stroke(),t>=2&&(n.lineWidth=1,n.beginPath(),n.moveTo(c,f),n.lineTo(c+(i()-.5)*16,f+(i()-.5)*16),n.stroke(),n.lineWidth=2)}const a=new wn(e);a.magFilter=Fe,a.minFilter=Fe,s.push(a)}return s}function h0(){const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");t.fillStyle="#3a86c8",t.fillRect(0,0,64,64);for(let n=0;n<2;n++){t.strokeStyle=n?"rgba(160,215,255,0.5)":"rgba(90,160,220,0.65)",t.lineWidth=n?2:3;for(let i=0;i<4;i++){t.beginPath();for(let r=0;r<=64;r+=2){const o=i*16+8+Math.sin(r/64*Math.PI*2*2+i*1.7+n*2.4)*3.5;r===0?t.moveTo(r,o):t.lineTo(r,o)}t.stroke()}}t.fillStyle="rgba(220,240,255,0.55)";for(let n=0;n<26;n++)t.fillRect(n*37%64,(n*23+9)%64,2,1);const e=new wn(s);return e.wrapS=e.wrapT=or,e.magFilter=Ke,e.minFilter=Ke,e.generateMipmaps=!1,e.colorSpace=Ye,e}const{SEED:na,SURFACE:d0,SEA_LEVEL:El}=W;function u0(s){const t=ds(na,3),e=ds(na+555,3),n=s.sx,i=s.sz,r=h=>h*h*(3-2*h);for(let h=0;h<i;h++)for(let u=0;u<n;u++){let g=-1,_="grass";const m=Math.hypot(u-W.ISLAND_CX,h-W.ISLAND_CZ);if(m<=W.ISLAND_R_EDGE){const M=d0+(t(u*.03,h*.03)-.5)*6;let C,H=!1;if(m<=W.ISLAND_R_FULL)C=Math.round(M);else{const G=r((m-W.ISLAND_R_FULL)/(W.ISLAND_R_EDGE-W.ISLAND_R_FULL));C=Math.round(M*(1-G)+100*G),H=C<=103}g=C,_=H?"sand":"grass"}const p=Y.AUTHOR_ISLE,x=Math.hypot(u-p.x,h-p.z);if(x<=p.r){const M=105+(e(u*.05,h*.05)-.5)*4,C=x<=p.r-8?0:r((x-(p.r-8))/8),H=Math.round(M*(1-C)+99*C);H>g&&(g=H,_=H<=103?"sand":"grass")}const v=Y.TAME_LAND,S=Math.hypot((u-v.x)/v.rx,(h-v.z)/v.rz);if(S<=1){const M=107+(e(u*.025,h*.025)-.5)*10,C=S<=.85?0:r((S-.85)/.15),H=Math.round(M*(1-C)+99*C);H>g&&(g=H,_=H<=103?"sand":"grass")}for(const[M,C,H]of[[Y.FORBIDDEN.x,Y.FORBIDDEN.z,22],[74,462,9],[136,470,10]]){const G=Math.hypot(u-M,h-C);if(G<=H){const j=G<=H-5?0:r((G-(H-5))/5),K=Math.round(104*(1-j)+99*j);K>g&&(g=K,_="scorched")}}let L=88+Math.round((t(u*.02,h*.02)-.5)*8);const A=Y.DEEP_SEA,R=Math.hypot(u-A.x,h-A.z);if(R<A.r){const M=r(1-R/A.r);L=Math.round(L*(1-M)+24*M)}const I=Math.max(g,L),E=I<El;for(let M=0;M<=I;M++){let C;M<=1?C=T.BEDROCK:M<I-3?C=T.STONE:M<I?C=T.MUD:E||_==="sand"?C=T.SAND:_==="scorched"?C=T.SCORCHED:C=T.GRASS,s.setRaw(u,M,h,C)}if(E)for(let M=I+1;M<=El;M++)s.setRaw(u,M,h,T.WATER);s.setSurface(u,h,I)}const o=gs(na+77),a=(h,u,g,_,m,p)=>{for(let x=0;x<u;x++){const v=8+Math.floor(o()*(n-16)),S=8+Math.floor(o()*(i-16)),L=Math.round(g+o()*(_-g)),A=m+o()*(p-m),R=Math.ceil(A);for(let I=-R;I<=R;I++)for(let E=-R;E<=R;E++)for(let M=-R;M<=R;M++){if(M*M+I*I+E*E>A*A)continue;const C=v+M,H=L+I,G=S+E;s.get(C,H,G)===T.STONE&&s.setRaw(C,H,G,h)}}};a(T.ORE,360,20,100,1.2,2.2),a(T.GOLD,120,8,60,1,1.8),a(T.CODE,60,4,40,1,1.6);const l=[{x:80,z:80,r:14},{x:32,z:80,r:14},{x:128,z:80,r:14},{x:Y.SPAWN.x,z:Y.SPAWN.z,r:6},{x:Y.PORTAL_HELL.x,z:Y.PORTAL_HELL.z,r:8},{x:Y.HUT.x,z:Y.HUT.z,r:10},{x:Y.JUNGLE_TEMPLE.x,z:Y.JUNGLE_TEMPLE.z,r:18},{x:Y.UNDERCITY_STAIR.x,z:Y.UNDERCITY_STAIR.z,r:6}],c=(h,u,g,_,m)=>{if(l.some(L=>Math.hypot(h-L.x,u-L.z)<L.r))return!1;const p=s.surfaceAt(h,u);if(s.get(h,p,u)!==T.GRASS)return!1;const x=g+Math.floor(o()*_);for(let L=1;L<=x;L++)s.setRaw(h,p+L,u,T.WOOD);const v=p+x,S=m;for(let L=-1;L<=2;L++)for(let A=-S;A<=S;A++)for(let R=-S;R<=S;R++){if(R*R+L*L*1.5+A*A>S*S+1.5)continue;const I=h+R,E=v+L+1,M=u+A;s.get(I,E,M)===T.AIR&&s.setRaw(I,E,M,T.LEAVES)}return!0};let f=0,d=0;for(;f<25&&d++<300;){const h=o()*Math.PI*2,u=o()*(W.ISLAND_R_FULL-8);c(Math.round(80+Math.cos(h)*u),Math.round(80+Math.sin(h)*u),4,2,2)&&f++}for(f=0,d=0;f<70&&d++<600;){const h=o()*Math.PI*2,u=Math.sqrt(o())*.8,g=Math.round(Y.TAME_LAND.x+Math.cos(h)*u*Y.TAME_LAND.rx),_=Math.round(Y.TAME_LAND.z+Math.sin(h)*u*Y.TAME_LAND.rz);c(g,_,5,3,3)&&f++}for(f=0,d=0;f<6&&d++<80;){const h=o()*Math.PI*2,u=o()*(Y.AUTHOR_ISLE.r-10);c(Math.round(Y.AUTHOR_ISLE.x+Math.cos(h)*u),Math.round(Y.AUTHOR_ISLE.z+Math.sin(h)*u),4,2,2)&&f++}}const dt={towerGround:0,spawnerGround:0,hengeGround:0,throneTopY:0,oreRoom:null,earthRoom:null,lights:[],spawnPoint:null,npcPos:null,hellPortal:null,hutNpcPos:null,templePortalCells:[],palaceChest:null,lightChest:null,forbiddenChest:null,undercity:null,teleporterPad:null};function Tt(s,t,e,n,i,r,o,a){for(let l=e;l<=r;l++)for(let c=n;c<=o;c++)for(let f=t;f<=i;f++)s.setRaw(f,l,c,a)}function qi(s,t,e,n,i,r=40,o=T.GRASS){for(let a=e-n;a<=e+n;a++)for(let l=t-n;l<=t+n;l++){for(let c=i+1;c<=i+r;c++)s.setRaw(l,c,a,T.AIR);for(let c=Math.max(2,i-5);c<=i;c++)s.setRaw(l,c,a,c===i?o:c>=i-3?T.MUD:T.STONE);s.setSurface(l,a,i)}}function f0(s){dt.lights=[],p0(s),m0(s),g0(s),_0(s),x0(s),v0(s),M0(s),y0(s),S0(s),E0(s),b0(s);const t=s.surfaceAt(Math.floor(Y.SPAWN.x),Math.floor(Y.SPAWN.z));return dt.spawnPoint=[Y.SPAWN.x,t+1,Y.SPAWN.z],dt}function p0(s){const t=Y.TOWER_C.x,e=Y.TOWER_C.z,n=7,i=s.surfaceAt(t,e);dt.towerGround=i,qi(s,t,e,n+2,i),Tt(s,t-n,i+1,e-n,t+n,i+24,e+n,T.BRICK),Tt(s,t-n+1,i+1,e-n+1,t+n-1,i+23,e+n-1,T.AIR);for(const r of[-n,n])for(const o of[-n,n])Tt(s,t+r,i+1,e+o,t+r,i+25,e+o,T.GOLD);Tt(s,t-n+1,i,e-n+1,t+n-1,i,e+n-1,T.BRICK),Tt(s,t-1,i+1,e+n,t+1,i+3,e+n,T.AIR);for(const r of[i+8,i+14,i+20])s.setRaw(t,r,e-n,T.AIR),s.setRaw(t,r,e+n,T.AIR),s.setRaw(t-n,r,e,T.AIR),s.setRaw(t+n,r,e,T.AIR);Tt(s,t-1,i+1,e-1,t+1,i+1,e+1,T.THRONE),s.setRaw(t,i+2,e,T.THRONE),s.setRaw(t,i+2,e-1,T.THRONE),s.setRaw(t,i+3,e-1,T.THRONE),dt.throneTopY=i+1,s.setRaw(Y.GOLD_TILE.x,i,Y.GOLD_TILE.z,T.GOLD),dt.lights.push([t,i+6,e+3]),dt.npcPos=[Y.NPC.x,i+1,Y.NPC.z]}function m0(s){const t=Y.TOWER_C.x,e=Y.TOWER_C.z,i=dt.towerGround-Y.ORE_ROOM_DEPTH-1;Tt(s,t-3,i,e-3,t+3,i+5,e+3,T.STONE),Tt(s,t-3+1,i+1,e-3+1,t+3-1,i+4,e+3-1,T.AIR);for(const[o,a]of[[-3,0],[3,0],[0,-3],[0,3],[-3,-3],[3,3]])s.setRaw(t+o,i+2,e+a,T.CODE);const r=[t,i+1,e];s.setRaw(r[0],r[1],r[2],T.CHEST),dt.oreRoom={chest:r,ceilY:i+5},dt.lights.push([t,i+3,e])}function g0(s){const t=Y.HENGE_C.x,e=Y.HENGE_C.z,n=s.surfaceAt(t,e);dt.hengeGround=n,qi(s,t,e,10,n);for(let i=0;i<8;i++){const r=i/8*Math.PI*2,o=Math.round(t+Math.cos(r)*7),a=Math.round(e+Math.sin(r)*7);Tt(s,o,n+1,a,o,n+5,a,T.STONE),s.setRaw(o,n+6,a,T.BRICK)}s.setRaw(t,n,e,T.BRICK)}function _0(s){const t=Y.HENGE_C.x,e=Y.HENGE_C.z,i=dt.hengeGround-Y.EARTH_PLANK_DEPTH,r=i-3,o=r-3;s.setRaw(t,i,e,T.PLANK),s.setRaw(t,r,e,T.PLANK),s.setRaw(t,o,e,T.PLANK);const a=o-1,l=a-3;Tt(s,t-2,l-1,e-2,t+2,a,e+2,T.STONE),Tt(s,t-2,l,e-2,t+2,a,e+2,T.AIR),Tt(s,t-2,l-1,e-2,t+2,l-1,e+2,T.PLANK);const c=[t+1,l,e];s.setRaw(c[0],c[1],c[2],T.CHEST),dt.earthRoom={chest:c,planks:[[t,i,e],[t,r,e],[t,o,e]]},dt.lights.push([t,l+2,e])}function x0(s){const t=Y.SPAWNER_C.x,e=Y.SPAWNER_C.z,n=7,i=s.surfaceAt(t,e);dt.spawnerGround=i,qi(s,t,e,n+2,i,90),Tt(s,t-n,i+1,e-n,t+n,i+80,e+n,T.BRICK),Tt(s,t-n+1,i+1,e-n+1,t+n-1,i+6,e+n-1,T.AIR),Tt(s,t-n+1,i,e-n+1,t+n-1,i,e+n-1,T.BRICK);for(const r of[-n,n])for(const o of[-n,n])Tt(s,t+r,i+1,e+o,t+r,i+81,e+o,T.GOLD);Tt(s,t+n,i+1,e-1,t+n,i+3,e+1,T.AIR);for(let r=10;r<=80;r+=10)for(const o of[-n,n])s.setRaw(t+o,i+r,e-2,T.GOLD),s.setRaw(t+o,i+r,e+2,T.GOLD);Tt(s,t-1,i,e-1,t+1,i,e+1,T.GOLD),dt.teleporterPad=[t,i+1,e],dt.lights.push([t,i+4,e])}function v0(s){const t=Y.PORTAL_HELL.x,e=Y.PORTAL_HELL.z,n=Math.max(s.surfaceAt(t,e),W.SEA_LEVEL+1);qi(s,t,e,5,n,20,T.SAND),Tt(s,t-2,n+1,e,t+2,n+6,e,T.PORTAL_FRAME),Tt(s,t-1,n+2,e,t+1,n+5,e,T.AIR);const i=[[t-2,n+7,e],[t-1,n+7,e],[t,n+7,e],[t+1,n+7,e],[t+2,n+7,e]],r=[];for(let o=n+2;o<=n+5;o++)for(let a=t-1;a<=t+1;a++)r.push([a,o,e]);dt.hellPortal={base:[t,n,e],topCells:i,innerCells:r},dt.lights.push([t,n+4,e+2])}function M0(s){const t=Y.HUT.x,e=Y.HUT.z,n=s.surfaceAt(t,e);qi(s,t,e,7,n),Tt(s,t-4,n,e-3,t+4,n,e+3,T.BRICK),Tt(s,t-4,n+1,e-3,t+4,n+4,e+3,T.WOOD),Tt(s,t-3,n+1,e-2,t+3,n+4,e+2,T.AIR);for(let i=0;i<3;i++)Tt(s,t-4+i,n+5+i,e-3,t+4-i,n+5+i,e+3,i===2?T.PLANK:T.WOOD),i<2&&Tt(s,t-3+i,n+5+i,e-2,t+3-i,n+5+i,e+2,T.AIR);Tt(s,t,n+1,e-3,t,n+3,e-3,T.AIR),s.setRaw(t-4,n+2,e,T.AIR),s.setRaw(t+4,n+2,e,T.AIR),Tt(s,t-2,n+1,e+1,t+2,n+1,e+1,T.GOLD),dt.hutNpcPos=[t+.5,n+1,e+2.5],dt.lights.push([t,n+3,e])}function y0(s){const t=Y.JUNGLE_TEMPLE.x,e=Y.JUNGLE_TEMPLE.z,n=s.surfaceAt(t,e);qi(s,t,e,13,n);for(let i=0;i<5;i++){const r=10-i*2;Tt(s,t-r,n+1+i*2,e-r,t+r,n+2+i*2,e+r,T.JUNGLE_BRICK)}Tt(s,t-3,n+1,e-3,t+3,n+5,e+3,T.AIR),Tt(s,t-10,n+1,e-1,t-4,n+3,e+1,T.AIR),dt.templePortalCells=[];for(let i=-1;i<=1;i++)for(let r=-1;r<=1;r++)s.setRaw(t+r,n,e+i,T.PORTAL),dt.templePortalCells.push([t+r,n,e+i]);for(const[i,r]of[[-2,-2],[2,-2],[-2,2],[2,2]])s.setRaw(t+i,n+1,e+r,T.GOLD);dt.lights.push([t,n+3,e])}function S0(s){const t=Y.SEA_PALACE.x,e=Y.SEA_PALACE.z,n=24,i=15,r=15;Tt(s,t-i,n,e-i,t+i,n+r,e+i,T.PALACE_BRICK),Tt(s,t-i+1,n+1,e-i+1,t+i-1,n+r-1,e+i-1,T.WATER);for(const[a,l,c]of[[0,-i,"x"],[0,i,"x"],[-i,0,"z"],[i,0,"z"]])c==="x"?Tt(s,t-2,n+2,e+l,t+2,n+6,e+l,T.WATER):Tt(s,t+a,n+2,e-2,t+a,n+6,e+2,T.WATER);Tt(s,t-2,n+1,e-2,t+2,n+2,e+2,T.PALACE_BRICK);const o=[t,n+3,e];s.setRaw(o[0],o[1],o[2],T.CHEST),dt.palaceChest=o;for(const a of[-i+2,i-2])for(const l of[-i+2,i-2])Tt(s,t+a,n+1,e+l,t+a,n+8,e+l,T.GLOWSTONE);dt.lights.push([t,n+8,e])}function E0(s){const t=Y.FORBIDDEN.x,e=Y.FORBIDDEN.z,n=s.surfaceAt(t,e);Tt(s,t-3,n+1,e-3,t+3,n+1,e+3,T.SCORCHED),Tt(s,t-1,n+2,e-1,t+1,n+2,e+1,T.CODE);for(const[a,l]of[[-6,-4],[6,-5],[-5,6],[5,5]])Tt(s,t+a,n+1,e+l,t+a,n+3+(a+l&1),e+l,T.SCORCHED);const i=Y.FORBIDDEN_CHEST.x,r=Y.FORBIDDEN_CHEST.z,o=s.surfaceAt(i,r);s.setRaw(i,o+1,r,T.CHEST),dt.forbiddenChest=[i,o+1,r]}function b0(s){const t=Y.UNDERCITY.y,e=96,n=144,i=96,r=144;Tt(s,e-1,t-2,i-1,n+1,t+22,r+1,T.STONE),Tt(s,e,t,i,n,t+21,r,T.AIR),Tt(s,e,t-1,i,n,t-1,r,T.MUD),Tt(s,e,t-1,118,n,t-1,122,T.BRICK),Tt(s,118,t-1,i,122,t-1,r,T.BRICK);for(const[p,x]of[[104,104],[136,104],[104,136],[136,136],[120,108],[120,132]])Tt(s,p,t,x,p,t+6,x,T.GLOWSTONE);const o=[];for(const[p,x]of[[102,112],[102,128],[138,112],[138,128],[112,138],[128,138]])Tt(s,p-2,t,x-2,p+2,t+3,x+2,T.BRICK),Tt(s,p-1,t,x-1,p+1,t+2,x+1,T.AIR),s.setRaw(p,t,x-2,T.AIR),s.setRaw(p,t+1,x-2,T.AIR),o.push([p+.5,t,x+.5]);const a=Y.CORE.x,l=Y.CORE.z;Tt(s,a-2,t,l-2,a+2,t+11,l+2,T.CORE_BLOCK),Tt(s,a-1,t+1,l-1,a+1,t+10,l+1,T.CORE_BLOCK),dt.lights.push([a,t+13,l]),dt.lights.push([a+4,t+3,l+4]);const c=Y.SHRINE3.x,f=Y.SHRINE3.z;Tt(s,c-3,t,f-3,c+3,t+5,f+3,T.BRICK),Tt(s,c-2,t,f-2,c+2,t+4,f+2,T.AIR),Tt(s,c-3,t+5,f-3,c+3,t+5,f+3,T.GOLD),Tt(s,c-1,t,f-3,c+1,t+2,f-3,T.AIR),Tt(s,c-1,t,f+1,c+1,t,f+1,T.THRONE),dt.lights.push([c,t+3,f]);const d=[Y.LIGHT_CHEST.x,t,Y.LIGHT_CHEST.z];s.setRaw(d[0],d[1],d[2],T.CHEST),dt.lightChest=d,dt.undercity={floorY:t,corePos:[a,t,l],shrinePos:[c,t,f],folk:o};const h=Y.UNDERCITY_STAIR.x,u=Y.UNDERCITY_STAIR.z,g=s.surfaceAt(h,u);Tt(s,h-2,g,u-2,h+2,g,u+2,T.BRICK);let _=g,m=h;for(;_>t+36&&m<140;)Tt(s,m,_-1,u-1,m,_+2,u+1,T.AIR),Tt(s,m,_-2,u-1,m,_-2,u+1,T.BRICK),m%6===0&&s.setRaw(m,_+2,u-1,T.GLOWSTONE),m++,_--;for(Tt(s,m-1,_-1,u-1,m+2,_+2,u+3,T.AIR),Tt(s,m-1,_-2,u-1,m+2,_-2,u+3,T.BRICK);_>t+22&&m>100;)Tt(s,m,_-1,u+2,m,_+2,u+4,T.AIR),Tt(s,m,_-2,u+2,m,_-2,u+4,T.BRICK),m%6===0&&s.setRaw(m,_+2,u+4,T.GLOWSTONE),m--,_--;Tt(s,m,t,u+2,m+1,_+2,u+3,T.WATER),dt.lights.push([m,t+4,u+2]),dt.undercityElevator=[m,u+2]}const he={spawn:null,returnPortalCells:[],forestGear:null,fireGear:null,fireSeaCells:[],fireCenter:null,demonSpawns:[],dragonPos:null,lights:[]};function sn(s,t,e,n,i,r,o,a){for(let l=e;l<=r;l++)for(let c=n;c<=o;c++)for(let f=t;f<=i;f++)s.setRaw(f,l,c,a)}function T0(s){he.returnPortalCells=[],he.fireSeaCells=[],he.demonSpawns=[],he.lights=[];const t=ds(99001,3),e=gs(99002),n=s.sx,i=s.sz,r=26;for(let x=0;x<i;x++)for(let v=0;v<n;v++){let S=Math.round(30+(t(v*.04,x*.04)-.5)*12);const L=Math.hypot(v-Y.HELL_LAKE.x,x-Y.HELL_LAKE.z);L<Y.HELL_LAKE.r&&L>11&&(S=22);for(let A=0;A<=Math.max(S,r);A++){let R;A<=1?R=T.BEDROCK:A<=S?R=T.MAGMA_STONE:R=T.LAVA,s.setRaw(v,A,x,R)}s.setSurface(v,x,Math.max(S,r))}const o=(x,v,S)=>{const L=s.surfaceAt(x,v);if(s.get(x,L,v)===T.MAGMA_STONE){for(let A=1;A<=S;A++)s.setRaw(x,L+A,v,T.MAGMA_WOOD);for(let A=-1;A<=2;A++)for(let R=-2;R<=2;R++)for(let I=-2;I<=2;I++){if(I*I+A*A*1.5+R*R>5.5)continue;const E=L+S+A+1;s.get(x+I,E,v+R)===T.AIR&&s.setRaw(x+I,E,v+R,T.MAGMA_LEAVES)}}};for(let x=0;x<14;x++)o(20+Math.floor(e()*(n-40)),20+Math.floor(e()*(i-40)),4+Math.floor(e()*3));const a=Y.HELL_LAKE.x,l=Y.HELL_LAKE.z;sn(s,a-5,22,l-5,a+5,30,l+5,T.MAGMA_STONE),s.setSurface(a,l,30);const c=12;for(let x=1;x<=c;x++)s.setRaw(a,30+x,l,T.MAGMA_WOOD);sn(s,a-1,34,l-1,a+1,30+c-1,l+1,T.MAGMA_WOOD);for(let x=0;x<=3;x++)for(let v=-3;v<=3;v++)for(let S=-3;S<=3;S++){if(S*S+x*x+v*v>11)continue;const L=30+c+x;s.get(a+S,L,l+v)===T.AIR&&s.setRaw(a+S,L,l+v,T.MAGMA_LEAVES)}sn(s,a-1,30+c+3,l-1,a+1,30+c+3,l+1,T.MAGMA_WOOD),he.forestGear=[a,30+c+4,l];for(let x=12;x<=24;x+=3)s.setRaw(a+x,27,l,T.MAGMA_STONE),s.setRaw(a+x,27,l+1,T.MAGMA_STONE);const f=Y.HELL_FIRE_SEA.x,d=Y.HELL_FIRE_SEA.z,h=Y.HELL_FIRE_SEA.r;for(let x=-h;x<=h;x++)for(let v=-h;v<=h;v++){if(v*v+x*x>h*h)continue;const S=f+v,L=d+x;for(let A=25;A<=30;A++)s.setRaw(S,A,L,T.MAGMA_STONE);for(let A=31;A<=40;A++)s.setRaw(S,A,L,T.AIR);s.setSurface(S,L,30),v*v+x*x>4&&(s.setRaw(S,31,L,T.FIRE),he.fireSeaCells.push([S,31,L]))}he.fireCenter=[f,31,d],he.fireGear=[f,31.6,d];const u=(x,v)=>{const S=s.surfaceAt(x,v);sn(s,x-6,S+1,v-6,x+6,S+8,v+6,T.MAGMA_STONE),sn(s,x-5,S+1,v-5,x+5,S+7,v+5,T.AIR),sn(s,x-6,S+8,v-6,x+6,S+8,v+6,T.MAGMA_STONE);for(const L of[-6,6])for(const A of[-6,6])sn(s,x+L,S+1,v+A,x+L,S+11,v+A,T.MAGMA_STONE);return sn(s,x,S+1,v-6,x,S+3,v-6,T.AIR),he.demonSpawns.push([x-2.5,S+1,v],[x+2.5,S+1,v],[x,S+1,v+2.5]),S},g=u(Y.HELL_FORT1.x,Y.HELL_FORT1.z);u(Y.HELL_FORT2.x,Y.HELL_FORT2.z),he.dragonPos=[Y.HELL_FORT1.x,g+16,Y.HELL_FORT1.z];const _=Y.HELL_SPAWN.x,m=Y.HELL_SPAWN.z,p=32;sn(s,_-4,p-2,m-4,_+4,p,m+4,T.MAGMA_STONE),sn(s,_-4,p+1,m-4,_+4,p+8,m+4,T.AIR),s.setSurface(_,m,p),sn(s,_-2,p+1,m-4,_+2,p+5,m-4,T.PORTAL_FRAME);for(let x=p+2;x<=p+4;x++)for(let v=_-1;v<=_+1;v++)s.setRaw(v,x,m-4,T.PORTAL),he.returnPortalCells.push([v,x,m-4]);he.spawn=[_+.5,p+1,m+1.5],he.lights.push([_,p+4,m])}const oe={spawn:null,returnPortalCells:[],darkGear:null,symbols:[],guardSpawns:[],kingPos:null,lights:[]};function Zs(s,t,e,n,i,r,o,a){for(let l=e;l<=r;l++)for(let c=n;c<=o;c++)for(let f=t;f<=i;f++)s.setRaw(f,l,c,a)}function A0(s){oe.returnPortalCells=[],oe.symbols=[],oe.guardSpawns=[],oe.lights=[];const t=Y.VOID_CENTER.x,e=Y.VOID_CENTER.z,n=Y.VOID_DISK_R,i=Y.VOID_FLOOR_Y;for(let l=0;l<s.sz;l++)for(let c=0;c<s.sx;c++){if(Math.hypot(c-t,l-e)>n){s.setSurface(c,l,0);continue}for(let d=i-2;d<=i;d++)s.setRaw(c,d,l,T.END_STONE);s.setSurface(c,l,i)}const r=(l,c,f)=>{for(let d=0;d<c;d++){const h=d/c*Math.PI*2+(l===20?0:Math.PI/c),u=Math.round(t+Math.cos(h)*l),g=Math.round(e+Math.sin(h)*l);Zs(s,u,i+1,g,u,i+f,g,T.END_STONE);const _=i+f+3;s.setRaw(u,_,g,T.SYMBOL),oe.symbols.push([u,_,g]),oe.guardSpawns.push([u+1.5,i+1,g+.5,oe.symbols.length-1])}};r(20,6,8),r(35,8,12),Zs(s,t-1,i+1,e-1,t+1,i+1,e+1,T.CODE),oe.darkGear=[t,i+2.6,e],oe.kingPos=[t+4.5,i+1,e+.5],oe.lights.push([t,i+6,e]);const o=Y.VOID_SPAWN.x,a=Y.VOID_SPAWN.z;Zs(s,o-3,i,a-3,o+3,i,a+3,T.END_STONE),Zs(s,o-2,i+1,a-3,o+2,i+5,a-3,T.PORTAL_FRAME);for(let l=i+2;l<=i+4;l++)for(let c=o-1;c<=o+1;c++)s.setRaw(c,l,a-3,T.PORTAL),oe.returnPortalCells.push([c,l,a-3]);oe.spawn=[o+.5,i+1,a+1.5],oe.lights.push([o,i+4,a])}const ye={spawn:null,returnPortalCells:[],nextPortalCells:[],spawnPoints:[],bossPos:null,lights:[]};function ns(s,t,e,n,i,r,o,a){for(let l=e;l<=r;l++)for(let c=n;c<=o;c++)for(let f=t;f<=i;f++)s.setRaw(f,l,c,a)}function w0(s){ye.returnPortalCells=[],ye.nextPortalCells=[],ye.spawnPoints=[],ye.lights=[];const t=24,e=24,n=10,i=8;ns(s,t-n-1,i-1,e-n-1,t+n+1,i+7,e+n+1,T.BRICK),ns(s,t-n,i,e-n,t+n,i+6,e+n,T.AIR),ns(s,t-n,i-1,e-n,t+n,i-1,e+n,T.BRICK);for(let r=0;r<s.sz;r++)for(let o=0;o<s.sx;o++)s.setSurface(o,r,i-1);for(const r of[-n+1,n-1])for(const o of[-n+1,n-1])s.setRaw(t+r,i+5,e+o,T.GLOWSTONE);ns(s,t-1,i,e+n,t+1,i+4,e+n,T.PORTAL_FRAME);for(let r=i+1;r<=i+3;r++)s.setRaw(t-1+1,r,e+n,T.PORTAL),ye.returnPortalCells.push([t,r,e+n]);ye.spawn=[t+.5,i,e+n-2.5],ns(s,t-1,i,e-n,t+1,i+4,e-n,T.PORTAL_FRAME);for(let r=i+1;r<=i+3;r++)ye.nextPortalCells.push([t,r,e-n]);ye.spawnPoints=[[t-6.5,i,e-4.5],[t+6.5,i,e-4.5],[t-6.5,i,e+3.5],[t+6.5,i,e+3.5],[t-.5,i,e-6.5],[t+3.5,i,e+.5],[t-3.5,i,e+.5],[t+.5,i,e+5.5]],ye.bossPos=[t+.5,i,e-2.5],ye.lights.push([t,i+4,e])}class R0{constructor(t={sx:W.SX,sy:W.SY,sz:W.SZ}){this.sx=t.sx,this.sy=t.sy,this.sz=t.sz,this.chunksX=Math.ceil(this.sx/W.CHUNK),this.chunksZ=Math.ceil(this.sz/W.CHUNK),this.data=new Uint8Array(this.sx*this.sy*this.sz),this.surface=new Uint16Array(this.sx*this.sz),this.edits=new Map,this.dirty=new Set}inBounds(t,e,n){return t>=0&&t<this.sx&&e>=0&&e<this.sy&&n>=0&&n<this.sz}idx(t,e,n){return(e*this.sz+n)*this.sx+t}get(t,e,n){return this.inBounds(t,e,n)?this.data[this.idx(t,e,n)]:T.AIR}isSolid(t,e,n){return s0(this.get(t,e,n))}isFluid(t,e,n){const i=this.get(t,e,n);return!!ze[i].fluid}setRaw(t,e,n,i){this.inBounds(t,e,n)&&(this.data[this.idx(t,e,n)]=i)}set(t,e,n,i,r=!0){if(!this.inBounds(t,e,n))return;this.data[this.idx(t,e,n)]=i,r&&this.edits.set(`${t},${e},${n}`,i);const o=W.CHUNK,a=Math.floor(t/o),l=Math.floor(n/o);this.dirty.add(`${a},${l}`);const c=t%o,f=n%o;c===0&&a>0&&this.dirty.add(`${a-1},${l}`),c===o-1&&a<this.chunksX-1&&this.dirty.add(`${a+1},${l}`),f===0&&l>0&&this.dirty.add(`${a},${l-1}`),f===o-1&&l<this.chunksZ-1&&this.dirty.add(`${a},${l+1}`)}surfaceAt(t,e){return t<0||t>=this.sx||e<0||e>=this.sz?0:this.surface[e*this.sx+t]}setSurface(t,e,n){this.surface[e*this.sx+t]=n}applyEdits(t){for(const[e,n,i,r]of t)this.inBounds(e,n,i)&&(this.data[this.idx(e,n,i)]=r,this.edits.set(`${e},${n},${i}`,r))}serializeEdits(){const t=[];for(const[e,n]of this.edits){const[i,r,o]=e.split(",").map(Number);t.push([i,r,o,n])}return t}blockName(t){return ze[t]?ze[t].name:"?"}}const C0=[{n:[1,0,0],c:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],shade:.8,side:"side"},{n:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],shade:.8,side:"side"},{n:[0,1,0],c:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],shade:1,side:"top"},{n:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],shade:.55,side:"bottom"},{n:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],shade:.7,side:"side"},{n:[0,0,-1],c:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],shade:.7,side:"side"}],P0=[.5,.68,.84,1];function L0(s,t,e,n,i,r){const o=t+i[0],a=e+i[1],l=n+i[2];let c=null,f=null;for(let _=0;_<3;_++){if(i[_]!==0)continue;const m=r[_]===1?1:-1,p=[0,0,0];p[_]=m,c?f=p:c=p}const d=(_,m,p)=>_c(s.get(o+_,a+m,l+p))?1:0,h=d(c[0],c[1],c[2]),u=d(f[0],f[1],f[2]);if(h&&u)return 0;const g=d(c[0]+f[0],c[1]+f[1],c[2]+f[2]);return 3-(h+u+g)}function ia(s,t,e,n,i){const r=new Ge;return r.setAttribute("position",new ve(s,3)),r.setAttribute("normal",new ve(t,3)),r.setAttribute("color",new ve(e,3)),r.setAttribute("uv",new ve(n,2)),r.setIndex(i),r}class D0{constructor(t,e,n,i={}){this.world=t,this.group=e,this.atlas=n,this.surfaceY=i.surfaceY??null,this.material=new fn({map:n.texture,vertexColors:!0}),this.waterMaterial=new fn({map:n.waterTexture,vertexColors:!0,transparent:!0,opacity:.62,depthWrite:!1}),n.waterMaterials&&n.waterMaterials.push(this.waterMaterial),this.fireMaterial=new Ce({map:n.texture,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1,side:an}),this.meshes=new Map}buildChunk(t,e){const n=`${t},${e}`,i=this.world,r=W.CHUNK,o={positions:[],normals:[],colors:[],uvs:[],indices:[]},a={positions:[],normals:[],colors:[],uvs:[],indices:[]},l={positions:[],normals:[],colors:[],uvs:[],indices:[]},c=t*r,f=e*r;for(let u=0;u<i.sy;u++)for(let g=f;g<Math.min(f+r,i.sz);g++)for(let _=c;_<Math.min(c+r,i.sx);_++){const m=i.get(_,u,g);if(m===T.AIR)continue;const p=ze[m],x=m===T.WATER||m===T.WATER_FLOW?a:m===T.FIRE?l:o,v=this.surfaceY===null?1:Math.max(.45,Math.min(1,1-(this.surfaceY-u)/160));for(const S of C0){const L=_+S.n[0],A=u+S.n[1],R=g+S.n[2],I=i.get(L,A,R);if(x===o){if(_c(I))continue}else if(I!==T.AIR)continue;const E=x.positions.length/3,M=S.shade*v;if(x===a){const C=i.get(_,u+1,g),H=m===T.WATER_FLOW?.55:C===T.WATER||C===T.WATER_FLOW?1:.88;for(let G=0;G<4;G++){const[j,K,$]=S.c[G],J=_+j,q=u+(K===1?H:0),gt=g+$;x.positions.push(J,q,gt),x.normals.push(S.n[0],S.n[1],S.n[2]),x.colors.push(M,M,M),S.n[1]!==0?x.uvs.push(J*.22,gt*.22):x.uvs.push((J+gt)*.22,q*.22)}x.indices.push(E,E+1,E+2,E,E+2,E+3)}else{const{u0:C,v0:H,u1:G,v1:j}=this.atlas.uvRect(p.tiles[S.side]),K=[[C,H],[G,H],[G,j],[C,j]],$=[];for(let J=0;J<4;J++){const[q,gt,xt]=S.c[J];$[J]=L0(i,_,u,g,S.n,S.c[J]);const yt=M*P0[$[J]];x.positions.push(_+q,u+gt,g+xt),x.normals.push(S.n[0],S.n[1],S.n[2]),x.colors.push(yt,yt,yt),x.uvs.push(K[J][0],K[J][1])}$[0]+$[2]>$[1]+$[3]?x.indices.push(E,E+1,E+2,E,E+2,E+3):x.indices.push(E+1,E+2,E+3,E+1,E+3,E)}}}const d=this.meshes.get(n);if(d)for(const u of["solid","water","fire"]){const g=d[u];g&&(this.group.remove(g),g.geometry.dispose())}const h={solid:null,water:null,fire:null};o.positions.length&&(h.solid=new Yt(ia(o.positions,o.normals,o.colors,o.uvs,o.indices),this.material),h.solid.matrixAutoUpdate=!1,this.group.add(h.solid)),a.positions.length&&(h.water=new Yt(ia(a.positions,a.normals,a.colors,a.uvs,a.indices),this.waterMaterial),h.water.matrixAutoUpdate=!1,h.water.renderOrder=1,this.group.add(h.water)),l.positions.length&&(h.fire=new Yt(ia(l.positions,l.normals,l.colors,l.uvs,l.indices),this.fireMaterial),h.fire.matrixAutoUpdate=!1,h.fire.renderOrder=2,this.group.add(h.fire)),!h.solid&&!h.water&&!h.fire?this.meshes.delete(n):(h.cx=t,h.cz=e,this.meshes.set(n,h))}updateVisibility(t,e,n){const i=W.CHUNK;for(const r of this.meshes.values()){const o=(r.cx+.5)*i-t,a=(r.cz+.5)*i-e,l=o*o+a*a<n*n;r.solid&&(r.solid.visible=l),r.water&&(r.water.visible=l),r.fire&&(r.fire.visible=l)}}*buildAllIterator(){for(let t=0;t<this.world.chunksZ;t++)for(let e=0;e<this.world.chunksX;e++)this.buildChunk(e,t),yield}totalChunks(){return this.world.chunksX*this.world.chunksZ}update(){let t=W.MESH_BUDGET_PER_FRAME;for(const e of this.world.dirty){if(t--<=0)break;this.world.dirty.delete(e);const[n,i]=e.split(",").map(Number);this.buildChunk(n,i)}}}class I0{constructor(t,e,n,i){this.scene=t,this.atlas=e,this.ctx=n,this.amb=i,this.dims=new Map,this.active="main",this.onSwitch=null}register(t,{gen:e,ambience:n,surfaceY:i=null}){const r=new Zt;r.visible=!1,this.scene.add(r);const o=new R0(i0[t]),a=new D0(o,r,this.atlas,{surfaceY:i});this.dims.set(t,{world:o,chunks:a,group:r,gen:e,ambience:n,generated:!1,lightObjs:[]})}get(t){return this.dims.get(t)}activeDim(){return this.dims.get(this.active)}ensure(t,{incremental:e=!1}={}){const n=this.dims.get(t);if(n.generated)return null;const i=n.gen(n.world)||[];n.generated=!0,this.onGenerated&&this.onGenerated(t,n);for(const[r,o,a]of i){const l=new e0(16773836,1.6,14);l.position.set(r+.5,o+.5,a+.5),n.group.add(l),n.lightObjs.push(l)}if(e)return n.chunks.buildAllIterator();for(const r of n.chunks.buildAllIterator());return n.world.dirty.clear(),null}applyAmbience(t,e=null){const n=this.dims.get(t).ambience,i=e??n.sky;this.scene.background.set(i),this.amb.fog.color.set(i),this.amb.fog.near=n.fogNear,this.amb.fog.far=n.fogFar,this.amb.hemi.intensity=n.hemi,this.amb.sun.intensity=n.sun}switchTo(t,e){if(t===this.active)return;const n=this.dims.get(this.active),i=this.dims.get(t);this.ensure(t),n.group.visible=!1,i.group.visible=!0,this.active=t,this.ctx.world=i.world,this.ctx.chunks=i.chunks,this.applyAmbience(t),this.onSwitch&&this.onSwitch(t,e)}}const Sn=.001;function Jn(s,t,e,n,i,r){const o=i/2,a=Math.floor(t-o),l=Math.floor(t+o-Sn),c=Math.floor(e),f=Math.floor(e+r-Sn),d=Math.floor(n-o),h=Math.floor(n+o-Sn);for(let u=c;u<=f;u++)for(let g=d;g<=h;g++)for(let _=a;_<=l;_++)if(s.isSolid(_,u,g))return!0;return!1}function ro(s,t,e){const{w:n,h:i}=t,r=s.get(Math.floor(t.pos.x),Math.floor(t.pos.y+i*.5),Math.floor(t.pos.z));t.inWater=r===T.WATER||r===T.WATER_FLOW,t.inLava=r===T.LAVA,t.noGravity||(t.inWater||t.inLava?(t.vel.y+=W.GRAVITY*W.WATER_GRAVITY_MULT*e,t.vel.y*=Math.max(0,1-W.WATER_DRAG*e),t.swimUp&&(t.vel.y=W.SWIM_UP_SPEED*(t.inLava?.6:1))):t.vel.y+=W.GRAVITY*e,t.vel.y<W.TERMINAL_VY&&(t.vel.y=W.TERMINAL_VY));let o=t.pos.x+t.vel.x*e;if(Jn(s,o,t.pos.y,t.pos.z,n,i)){const c=Math.sign(t.vel.x);c>0?o=Math.floor(o+n/2)-n/2-Sn:c<0&&(o=Math.floor(o-n/2)+1+n/2+Sn),Jn(s,o,t.pos.y,t.pos.z,n,i)&&(o=t.pos.x),t.vel.x=0}t.pos.x=o;let a=t.pos.z+t.vel.z*e;if(Jn(s,t.pos.x,t.pos.y,a,n,i)){const c=Math.sign(t.vel.z);c>0?a=Math.floor(a+n/2)-n/2-Sn:c<0&&(a=Math.floor(a-n/2)+1+n/2+Sn),Jn(s,t.pos.x,t.pos.y,a,n,i)&&(a=t.pos.z),t.vel.z=0}t.pos.z=a,t.onGround=!1;let l=t.pos.y+t.vel.y*e;Jn(s,t.pos.x,l,t.pos.z,n,i)&&(t.vel.y<0?(l=Math.floor(l)+1+Sn,Jn(s,t.pos.x,l,t.pos.z,n,i)&&(l=t.pos.y),t.onGround=!0):(l=Math.floor(l+i)-i-Sn,Jn(s,t.pos.x,l,t.pos.z,n,i)&&(l=t.pos.y)),t.vel.y=0),t.pos.y=l}function bl(s,t,e,n){const i=n.w/2;return s+1>n.pos.x-i&&s<n.pos.x+i&&t+1>n.pos.y&&t<n.pos.y+n.h&&e+1>n.pos.z-i&&e<n.pos.z+i}function xc(s,t,e,n){let i=Math.floor(t.x),r=Math.floor(t.y),o=Math.floor(t.z);const a=e.x>0?1:-1,l=e.y>0?1:-1,c=e.z>0?1:-1,f=e.x!==0?Math.abs(1/e.x):1/0,d=e.y!==0?Math.abs(1/e.y):1/0,h=e.z!==0?Math.abs(1/e.z):1/0,u=(v,S,L)=>L>0?S+1-v:v-S;let g=e.x!==0?u(t.x,i,a)*f:1/0,_=e.y!==0?u(t.y,r,l)*d:1/0,m=e.z!==0?u(t.z,o,c)*h:1/0,p=[0,0,0],x=0;for(let v=0;v<256;v++){if(x>n)return null;if(s.get(i,r,o)!==T.AIR&&x>0)return{x:i,y:r,z:o,face:p,dist:x};g<_&&g<m?(i+=a,x=g,g+=f,p=[-a,0,0]):_<m?(r+=l,x=_,_+=d,p=[0,-l,0]):(o+=c,x=m,m+=h,p=[0,0,-c])}return null}function N0(s,t,e,n){let i=0,r=1/0;for(const o of["x","y","z"]){const a=s[o],l=t[o];if(Math.abs(l)<1e-8){if(a<e[o]||a>n[o])return null}else{let c=(e[o]-a)/l,f=(n[o]-a)/l;if(c>f&&([c,f]=[f,c]),i=Math.max(i,c),r=Math.min(r,f),i>r)return null}}return i}class U0{constructor(t){this.ctx=t,this.mineTarget=null,this.mineProgress=0,this.attackCooldown=0,this.highlight=this.makeHighlight(),t.scene.add(this.highlight),this.crackTexs=c0(),this.crack=new Yt(new te(1.004,1.004,1.004),new Ce({map:this.crackTexs[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2})),this.crack.visible=!1,t.scene.add(this.crack),t.controls.onLeftDown=()=>this.onLeftDown(),t.controls.onRightDown=()=>this.onRightDown()}makeHighlight(){const t=new te(1.002,1.002,1.002),e=new Qm(t),n=new jm(e,new uc({color:16777215,linewidth:2}));return n.visible=!1,n}eyeRay(){const{camera:t,controls:e}=this.ctx,n=e.forward(new P);return{origin:t.position.clone(),dir:n}}targetBlock(){const{world:t,player:e}=this.ctx,{origin:n,dir:i}=this.eyeRay(),r=xc(t,n,i,W.CAM_DIST+W.REACH_BLOCK);if(!r)return null;const o=e.ent.pos.x,a=e.ent.pos.y+1,l=e.ent.pos.z;return Math.hypot(r.x+.5-o,r.y+.5-a,r.z+.5-l)>W.REACH_BLOCK?null:r}targetMonster(){const{monsters:t,player:e}=this.ctx,{origin:n,dir:i}=this.eyeRay(),r=this.targetBlock(),o=r?r.dist:1/0;let a=null,l=1/0;for(const c of t.list){if(c.dead)continue;const f=c.w/2+.15,d={x:c.ent.pos.x-f,y:c.ent.pos.y-.1,z:c.ent.pos.z-f},h={x:c.ent.pos.x+f,y:c.ent.pos.y+c.h+.1,z:c.ent.pos.z+f},u=N0(n,i,d,h);if(u===null||u>l)continue;const g=e.ent.pos.x,_=e.ent.pos.y+1,m=e.ent.pos.z;Math.hypot(c.ent.pos.x-g,c.ent.pos.y-_,c.ent.pos.z-m)>W.REACH_ATTACK+c.w||u<o+.5&&(a=c,l=u)}return a}onLeftDown(){const{player:t}=this.ctx;if(t.form==="car"||t.form==="dive")return;const e=this.targetMonster();e&&this.attackCooldown<=0&&(this.attackCooldown=W.ATTACK_COOLDOWN,this.ctx.monsters.hitMonster(e,t.attack(),t.ent.pos),t.swing())}onRightDown(){const{world:t,player:e,controls:n}=this.ctx;if(e.form==="car"||e.form==="dive")return;const i=this.targetBlock();if(!i)return;const r=t.get(i.x,i.y,i.z);if(r===T.CHEST){this.ctx.onChestOpen&&this.ctx.onChestOpen(i.x,i.y,i.z);return}if(r===T.BED){this.ctx.onBedUse&&this.ctx.onBedUse();return}if(this.ctx.isRestricted&&this.ctx.isRestricted())return;const o=e.hotbarSelected();if(!o)return;const a=i.x+i.face[0],l=i.y+i.face[1],c=i.z+i.face[2];if(t.inBounds(a,l,c)&&t.get(a,l,c)===T.AIR&&!bl(a,l,c,e.ent)){for(const f of this.ctx.monsters.list)if(!f.dead&&bl(a,l,c,f.ent))return;t.set(a,l,c,o.id),e.consumeBlock(o.id),this.ctx.onBlockPlaced&&this.ctx.onBlockPlaced(o.id)}}update(t){const{world:e,player:n,controls:i,hud:r}=this.ctx;this.attackCooldown=Math.max(0,this.attackCooldown-t);const o=n.form!=="car"&&n.form!=="dive"&&i.isLocked()&&i.enabled?this.targetBlock():null;o?(this.highlight.visible=!0,this.highlight.position.set(o.x+.5,o.y+.5,o.z+.5)):this.highlight.visible=!1;const a=this.ctx.isRestricted&&this.ctx.isRestricted(),l=(i.leftDown||i.keys.KeyF)&&!a;if(o&&l&&!this.targetMonster()){const c=e.get(o.x,o.y,o.z);if(r0(c)){this.mineTarget&&this.mineTarget.x===o.x&&this.mineTarget.y===o.y&&this.mineTarget.z===o.z||(this.mineTarget={x:o.x,y:o.y,z:o.z},this.mineProgress=0),this.mineProgress+=t;const d=ze[c].hardness,h=this.mineProgress/d;r.setMineProgress(h),this.crack.visible=!0,this.crack.position.set(o.x+.5,o.y+.5,o.z+.5),h>.85&&(this.crack.position.x+=(Math.random()-.5)*.02,this.crack.position.z+=(Math.random()-.5)*.02);const u=Math.min(3,Math.floor(h*4));if(this.crack.material.map!==this.crackTexs[u]&&(this.crack.material.map=this.crackTexs[u],this.crack.material.needsUpdate=!0,this.ctx.onCrackStage&&this.ctx.onCrackStage(o.x,o.y,o.z,e.get(o.x,o.y,o.z))),this.mineProgress>=d){e.set(o.x,o.y,o.z,T.AIR);const g=ze[c].drop;g&&n.addBlock(g),this.mineTarget=null,this.mineProgress=0,r.setMineProgress(0),this.crack.visible=!1,this.ctx.onBlockMined&&this.ctx.onBlockMined(c,o.x,o.y,o.z)}}else this.mineTarget=null,this.mineProgress=0,r.setMineProgress(0),this.crack.visible=!1}else this.mineTarget=null,this.mineProgress=0,r.setMineProgress(0),this.crack.visible=!1}}class O0{constructor(t){this.dom=t,this.keys={},this.yaw=0,this.pitch=-.15,this.locked=!1,this.virtualLock=!1,this.leftDown=!1,this.rightDown=!1,this.enabled=!0,this.onLeftDown=null,this.onRightDown=null,this.onKeyDown=null,this.wheelDelta=0,addEventListener("keydown",e=>{e.repeat||(this.keys[e.code]=!0,this.onKeyDown&&this.enabled&&this.onKeyDown(e.code))}),addEventListener("keyup",e=>{this.keys[e.code]=!1}),addEventListener("blur",()=>{this.keys={},this.leftDown=!1,this.rightDown=!1}),this.dom.addEventListener("mousedown",e=>{!this.isLocked()||!this.enabled||(e.button===0&&(this.leftDown=!0,this.onLeftDown&&this.onLeftDown()),e.button===2&&(this.rightDown=!0,this.onRightDown&&this.onRightDown()))}),addEventListener("mouseup",e=>{e.button===0&&(this.leftDown=!1),e.button===2&&(this.rightDown=!1)}),this.dom.addEventListener("contextmenu",e=>e.preventDefault()),addEventListener("wheel",e=>{this.wheelDelta+=Math.sign(e.deltaY)}),addEventListener("mousemove",e=>{!this.locked||!this.enabled||(this.yaw+=e.movementX*.0026,this.pitch-=e.movementY*.0026,this.pitch=Math.max(-1.55,Math.min(1.45,this.pitch)))}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.dom,this.onLockChange&&this.onLockChange(this.locked)})}isLocked(){return this.locked||this.virtualLock}requestLock(){this.locked||this.dom.requestPointerLock()}cycleCamMode(){return this.camMode=((this.camMode||0)+1)%3,this.camMode}updateLook(t){if(!this.enabled)return;const e=2.2*t;this.keys.ArrowLeft&&(this.yaw-=e),this.keys.ArrowRight&&(this.yaw+=e),this.keys.ArrowUp&&(this.pitch=Math.min(1.45,this.pitch+e)),this.keys.ArrowDown&&(this.pitch=Math.max(-1.55,this.pitch-e))}forward(t=new P){const e=Math.cos(this.pitch);return t.set(Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e)}forwardFlat(t=new P){return t.set(Math.sin(this.yaw),0,-Math.cos(this.yaw))}rightFlat(t=new P){return t.set(Math.cos(this.yaw),0,Math.sin(this.yaw))}updateCamera(t,e,n){const i=this.camMode||0,r=this.forward(new P);if(i===0){this.camDist=.01,t.position.copy(n),t.lookAt(n.x+r.x,n.y+r.y,n.z+r.z);return}const o=i===1?r.clone().negate():r.clone();let a=W.CAM_DIST;const l=xc(e,n,o,W.CAM_DIST);l&&(a=Math.max(.5,l.dist-.35)),this.camDist=a,t.position.copy(n).addScaledVector(o,a),t.lookAt(n)}}const rn={fruit:{name:"水果",icon:"🍎",desc:"吃了回 20 血",use:"heal",heal:20},seafood:{name:"海货",icon:"🦐",desc:"吃了回 10 血",use:"heal",heal:10},feather:{name:"光羽",icon:"🪶",desc:"云端天使的羽毛，可以用来做床"},peng_potion:{name:"鹏之药水",icon:"🧪",desc:"喝下后水里行动自如！（鲲鹏掉落）",use:"peng"},peng_wings:{name:"鲲鹏之翼",icon:"🪽",desc:"装备后可以二段跳+按住空格滑翔",equip:"wings"},boat_item:{name:"船",icon:"🛶",desc:"对着水面右键放下，就能开船",boat:!0},sword_wood:{name:"木剑",icon:"🗡",atk:3,equip:"sword"},sword_stone:{name:"石剑",icon:"🗡",atk:6,equip:"sword"},sword_ore:{name:"矿石剑",icon:"⚔️",atk:10,equip:"sword"},sword_gold:{name:"黄金剑",icon:"⚔️",atk:15,equip:"sword"},sword_code:{name:"代码神剑",icon:"🌟",atk:25,equip:"sword",desc:"用最硬的代码矿石打造！"},armor_wood:{name:"木甲",icon:"🛡",def:.1,equip:"armor"},armor_stone:{name:"石甲",icon:"🛡",def:.18,equip:"armor"},armor_ore:{name:"矿石甲",icon:"🛡",def:.28,equip:"armor"},armor_gold:{name:"黄金甲",icon:"🛡",def:.38,equip:"armor"},armor_code:{name:"代码神甲",icon:"✨",def:.5,equip:"armor",desc:"最硬的护甲！"}},F0=[{out:"sword_wood",need:{[T.WOOD]:3,[T.MUD]:1}},{out:"sword_stone",need:{[T.STONE]:3,[T.WOOD]:2}},{out:"sword_ore",need:{[T.ORE]:3,[T.WOOD]:2}},{out:"sword_gold",need:{[T.GOLD]:3,[T.WOOD]:2}},{out:"sword_code",need:{[T.CODE]:3,[T.WOOD]:2}},{out:"armor_wood",need:{[T.WOOD]:6}},{out:"armor_stone",need:{[T.STONE]:6}},{out:"armor_ore",need:{[T.ORE]:6}},{out:"armor_gold",need:{[T.GOLD]:6}},{out:"armor_code",need:{[T.CODE]:6}},{out:"bed_block",need:{[T.WOOD]:3,feather:2},outBlock:T.BED},{out:"boat_item",need:{[T.WOOD]:5}}],z0=[{id:"fruit",price:2},{id:"seafood",price:2},{id:"boat_item",price:15},{id:"bed_block",price:10,outBlock:T.BED,name:"床",icon:"🛏"},{id:"wood_bundle",price:4,name:"木头×10",icon:"🪵",outBlockN:[T.WOOD,10]},{id:"stone_bundle",price:4,name:"石头×10",icon:"🪨",outBlockN:[T.STONE,10]}],B0={tide:{name:"潮涌变形齿轮",mark:"🌊",gives:"潜水形态（水中飞快+不怕泡水）"},ore:{name:"矿石变形齿轮",mark:"🛡",gives:"矿石装甲形态（减伤+攻击）"},earth:{name:"大地变形齿轮",mark:"🦶",gives:"Q 键跺脚地震"},forest:{name:"森林变形齿轮",mark:"🌿",gives:"缓慢自我修复（被动）"},fire:{name:"烈火变形齿轮",mark:"🔥",gives:"C 键喷射烈焰"},light:{name:"光明变形齿轮",mark:"✨",gives:"X 键净化闪光（专克邪恶类）"},dark:{name:"黑暗变形齿轮",mark:"🌑",gives:"Z 键隐身"},mystery:{name:"神秘变形齿轮",mark:"💠",gives:"全能形态（八大能力全开，最强！）"}},k0=["tide","ore","earth","forest","fire","mystery","light","dark"];function Gt(s,t,e,n,i=0,r=0,o=0){const a=new Yt(new te(s,t,e),new fn({color:n}));return a.position.set(i,r,o),a}function Qn(s,t,e,n,i=0,r=0,o=0){const a=new Yt(new te(s,t,e),new Ce({color:n}));return a.position.set(i,r,o),a}function Un(s,t=.6){return"#"+new Dt(s).multiplyScalar(t).getHexString()}const G0=["#e74c3c","#3498db","#f1c40f","#2ecc71","#9b59b6","#e67e22","#ecf0f1","#34495e"],vc={head:"#3498db",body:"#e74c3c",arm:"#f1c40f",leg:"#34495e",headType:"antenna",eyeStyle:"round",wide:!1};function ao(s=vc){const t=new Zt,e=new Zt,n=s.wide?.64:.52,i=Un(s.leg,.55),r=Un(s.arm,.6),o=Un(s.body,.62),a=B=>{const Z=new Zt;return Z.position.set(B*.14,.56,0),Z.add(Gt(.2,.3,.24,s.leg,0,-.14,0)),Z.add(Gt(.16,.26,.2,Un(s.leg,.8),0,-.4,0)),Z.add(Gt(.2,.09,.3,i,0,-.52,-.04)),Z},l=a(-1),c=a(1),f=Gt(.4,.14,.28,i,0,.6,0),d=Gt(n,.56,.32,s.body,0,.94,0),h=Gt(n+.02,.1,.33,o,0,.72,0),u=Gt(n*.7,.36,.12,o,0,.98,.2),g=Gt(.06,.24,.06,"#9aa4ad",-n*.24,1.24,.22),_=Gt(.06,.24,.06,"#9aa4ad",n*.24,1.24,.22),m=Gt(.26,.26,.05,"#d8dde2",0,.98,-.17),p=Qn(.14,.14,.04,"#7dfcff",0,.98,-.195),x=n/2+.12,v=B=>{const Z=new Zt;return Z.position.set(B*x,1.16,0),Z.add(Gt(.24,.14,.28,i,0,.02,0)),Z.add(Gt(.17,.26,.2,s.arm,0,-.16,0)),Z.add(Gt(.15,.24,.18,Un(s.arm,.82),0,-.4,0)),Z.add(Gt(.16,.1,.16,r,0,-.56,0)),Z},S=v(-1),L=v(1),A=new Zt;A.position.set(0,1.24,0),A.add(Gt(.42,.38,.4,s.head,0,.2,0)),A.add(Gt(.36,.12,.03,Un(s.head,.75),0,.1,-.205)),A.add(Gt(.05,.14,.14,Un(s.head,.7),-.235,.2,0)),A.add(Gt(.05,.14,.14,Un(s.head,.7),.235,.2,0));let R=null;s.headType==="antenna"&&(A.add(Gt(.05,.2,.05,"#cccccc",-.14,.48,0)),R=Qn(.09,.09,.09,"#ff5555",-.14,.6,0),A.add(R));const I=new Ce({color:"#7dfcff"});if(s.eyeStyle==="visor"){const B=new Yt(new te(.32,.09,.03),I);B.position.set(0,.24,-.205),A.add(B)}else for(const B of[-.1,.1]){const Z=new Yt(new te(.09,.11,.03),I);Z.position.set(B,.24,-.205),A.add(Z)}e.add(l,c,f,d,h,u,g,_,m,p,S,L,A);const E=new Zt,M="#8fb5b0";E.add(Gt(n+.16,.4,.42,M,0,.96,0)),E.add(Gt(.32,.16,.36,M,-x-.03,1.22,0)),E.add(Gt(.32,.16,.36,M,x+.03,1.22,0));for(const B of[-1,1]){const Z=Gt(.1,.3,.1,"#39c8c4",B*(x+.03),1.42,0);Z.rotation.z=B*.3,E.add(Z);const ht=Gt(.08,.22,.08,"#67dcd8",B*(x-.08),1.4,.06);ht.rotation.z=B*.55,E.add(ht)}E.add(Gt(.46,.12,.46,"#39c8c4",0,1.66,0)),E.visible=!1,e.add(E);const C=new Zt;C.add(Gt(n+.18,.4,.46,"#f0b429",0,.96,0)),C.add(Gt(.34,.18,.38,"#f0b429",-x-.03,1.24,0)),C.add(Gt(.34,.18,.38,"#f0b429",x+.03,1.24,0)),C.add(Qn(.2,.2,.05,"#fff3c4",0,.98,-.22));const H=new Yt(new te(.6,.05,.6),new Ce({color:"#ffe89a",transparent:!0,opacity:.85}));H.position.set(0,1.85,0),C.add(H);const G=new Yt(new te(1,.05,.08),new Ce({color:"#ffd75e",transparent:!0,opacity:.7}));G.position.set(0,.9,0);const j=G.clone();j.rotation.y=Math.PI/2,j.position.y=1.15,C.add(G,j),C.visible=!1,e.add(C);const K=new Zt;K.add(Gt(.9,.3,1.3,s.body,0,.4,0)),K.add(Gt(.86,.1,1.34,o,0,.26,0)),K.add(Gt(.56,.3,.62,s.head,0,.72,.08));const $=new Yt(new te(.46,.2,.05),I);$.position.set(0,.74,-.24),K.add($),K.add(Qn(.12,.08,.04,"#fff8c8",-.3,.42,-.66)),K.add(Qn(.12,.08,.04,"#fff8c8",.3,.42,-.66)),K.add(Qn(.1,.07,.04,"#ff5040",-.3,.44,.66)),K.add(Qn(.1,.07,.04,"#ff5040",.3,.44,.66)),K.add(Gt(.05,.18,.05,"#cccccc",.3,.95,.3));const J=[];for(const[B,Z]of[[-.42,-.42],[.42,-.42],[-.42,.42],[.42,.42]]){K.add(Gt(.14,.12,.5,o,B,.5,Z));const ht=Gt(.14,.3,.3,"#1c1c1c",B,.24,Z);J.push(ht),K.add(ht)}K.visible=!1;const q=new Zt;q.add(Gt(.72,.55,1.35,"#2e7f96",0,.52,0)),q.add(Gt(.66,.12,1.2,"#245f72",0,.24,0)),q.add(Gt(.42,.3,.52,"#39c8c4",0,.88,-.16));const gt=new Yt(new te(.3,.2,.05),I);gt.position.set(0,.89,-.44),q.add(gt),q.add(Gt(.12,.42,.32,"#245f72",0,.66,.72)),q.add(Gt(.5,.1,.28,"#245f72",-.42,.5,.2)),q.add(Gt(.5,.1,.28,"#245f72",.42,.5,.2));const xt=new Zt;xt.position.set(0,.5,.78),xt.add(Gt(.06,.4,.06,"#c8d2d8",0,0,0)),xt.add(Gt(.4,.06,.06,"#c8d2d8",0,0,0)),q.add(xt),q.visible=!1,t.add(e,K,q);let yt="robot",Ft=0;const Kt=[];return t.traverse(B=>{B.isMesh&&Kt.push(B.material)}),{group:t,setForm(B){yt=B,e.visible=B!=="car"&&B!=="dive",K.visible=B==="car",q.visible=B==="dive",E.visible=B==="armor",C.visible=B==="super";const Z=B==="armor"?1.12:B==="super"?1.18:1;e.scale.set(Z,Z,Z)},setGhost(B){for(const Z of Kt)B?(Z.transparent=!0,Z.opacity=.35):Z!==H.material&&Z!==G.material&&Z!==j.material&&(Z.opacity=1,Z.transparent=!1)},swing(){Ft=.35},animate(B,Z,ht){if(Ft=Math.max(0,Ft-ht),R&&R.material.color.setHex(Math.sin(B*2.4)>0?16733525:8003359),yt==="car"){const zt=Z?B*10:0;for(const Bt of J)Bt.rotation.x=zt;return}if(yt==="dive"){xt.rotation.z=B*12;return}const _t=Z?.6:0,Lt=Math.sin(B*8)*_t;l.rotation.x=Lt,c.rotation.x=-Lt,S.rotation.x=-Lt*.8,L.rotation.x=Ft>0?-2.2*(Ft/.35):Lt*.8,e.position.y=Z?Math.abs(Math.sin(B*8))*.05:Math.sin(B*1.6)*.015,C.visible&&(H.rotation.y=B*1.2,G.rotation.y=B*2,j.rotation.y=Math.PI/2+B*2)},playTransform(){t.scale.set(1.25,.6,1.25)},updateTransformAnim(B){t.scale.lerp(new P(1,1,1),Math.min(1,B*10))}}}class H0{constructor(t,e,n){this.scene=t,this.robotConfig=e,this.spawnPoint=n.slice(),this.ent={pos:{x:n[0],y:n[1],z:n[2]},vel:{x:0,y:0,z:0},w:W.PLAYER_W,h:W.PLAYER_H,onGround:!1,inWater:!1,inLava:!1},this.gears=0,this.totalGears=0,this.mysteryGears=[],this.equippedGears=[],this.form="robot",this.inventory=new Map,this.items=new Map,this.equipment={sword:null,armor:null,wings:null},this.hotbarIndex=0,this.hp=this.maxHp(),this.regenTimer=0,this.dead=!1,this.walkT=0,this.waterTime=0,this.pengPotion=!1,this.quakeCooldown=0,this.fireCooldown=0,this.flashCooldown=0,this.stealthCooldown=0,this.stealthTime=0,this.envDamageTick=0,this.jumpCount=0,this.mount=null,this.onHurt=null,this.onDeath=null,this.model=ao(e),t.add(this.model.group)}level(){return Math.min(W.MAX_LEVEL,1+Math.floor(this.totalGears/W.GEARS_PER_LEVEL))}maxHp(){return W.BASE_HP+W.HP_PER_LEVEL*(this.level()-1)}hasGear(t){return this.mysteryGears.includes(t)}hasAbility(t){return this.equippedGears.includes(t)||this.equippedGears.includes("mystery")}attack(){let t=W.BASE_ATK+W.ATK_PER_LEVEL*(this.level()-1);return this.form==="armor"&&(t+=W.ARMOR_ATK_BONUS),this.form==="super"&&(t+=12),this.hasAbility("earth")&&(t+=3),this.equipment.sword&&(t+=rn[this.equipment.sword].atk),t}computeForms(){const t=["robot"];return this.totalGears>0&&t.push("car"),this.hasAbility("ore")&&t.push("armor"),this.hasAbility("tide")&&t.push("dive"),this.equippedGears.includes("mystery")&&t.push("super"),t}addGears(t){const e=this.level();return this.gears+=t,this.totalGears+=t,this.level()>e?(this.hp=this.maxHp(),!0):!1}spendGears(t){return this.gears<t?!1:(this.gears-=t,!0)}addMysteryGear(t){this.mysteryGears.includes(t)||this.mysteryGears.push(t),this.equippedGears.includes(t)||this.equippedGears.push(t)}addBlock(t,e=1){this.inventory.set(t,(this.inventory.get(t)||0)+e)}consumeBlock(t,e=1){const n=(this.inventory.get(t)||0)-e;n<=0?this.inventory.delete(t):this.inventory.set(t,n)}addItem(t,e=1){this.items.set(t,(this.items.get(t)||0)+e)}consumeItem(t,e=1){const n=(this.items.get(t)||0)-e;n<=0?this.items.delete(t):this.items.set(t,n)}hotbar(){return a0.filter(t=>this.inventory.get(t)>0).slice(0,5).map(t=>({id:t,count:this.inventory.get(t),name:ze[t].name}))}hotbarSelected(){const t=this.hotbar();return t.length===0?null:t[Math.min(this.hotbarIndex,t.length-1)]}takeDamage(t,e){if(this.dead)return;let n=1;if(this.form==="armor"&&(n*=W.ARMOR_DAMAGE_MULT),this.form==="super"&&(n*=.4),this.equipment.armor&&(n*=1-rn[this.equipment.armor].def),t=Math.max(1,Math.ceil(t*n)),this.hp-=t,this.regenTimer=0,e){const i=this.ent.pos.x-e.x,r=this.ent.pos.z-e.z,o=Math.hypot(i,r)||1;this.ent.vel.x+=i/o*6,this.ent.vel.z+=r/o*6,this.ent.vel.y=Math.max(this.ent.vel.y,4)}this.onHurt&&this.onHurt(t),this.hp<=0&&(this.hp=0,this.dead=!0,this.onDeath&&this.onDeath())}respawn(){this.ent.pos.x=this.spawnPoint[0],this.ent.pos.y=this.spawnPoint[1],this.ent.pos.z=this.spawnPoint[2],this.ent.vel.x=this.ent.vel.y=this.ent.vel.z=0,this.hp=this.maxHp(),this.dead=!1,this.mount=null}swing(){this.model.swing()}transform(){const t=this.computeForms();let e=t.indexOf(this.form);return e===-1&&(e=0),this.form=t[(e+1)%t.length],this.applyForm(),this.model.playTransform(),this.form}applyForm(){this.form==="car"||this.form==="dive"?(this.ent.w=W.CAR_W,this.ent.h=W.CAR_H):(this.ent.w=W.PLAYER_W,this.ent.h=W.PLAYER_H),this.model.setForm(this.form)}speed(){let t=W.WALK_SPEED;return this.form==="car"&&(t*=W.CAR_SPEED_MULT),this.form==="armor"&&(t*=W.ARMOR_SPEED_MULT),this.form==="super"&&(t*=1.3),this.mount&&(t*=W.MOUNT_SPEED_MULT),this.ent.inWater&&(this.form==="dive"?t*=W.DIVE_SPEED_MULT:this.pengPotion?t*=W.PENG_SPEED_MULT:t*=W.WATER_SPEED_MULT),t}useItem(t,e){if(!this.items.get(t))return!1;const n=rn[t];return n.use==="heal"?this.hp>=this.maxHp()?(e&&e.toast("血是满的，不用吃～"),!1):(this.hp=Math.min(this.maxHp(),this.hp+n.heal),this.consumeItem(t),e&&e.toast(`${n.icon} 吃了${n.name}，回 ${n.heal} 血！`),!0):n.use==="peng"?this.pengPotion?(e&&e.toast("已经喝过鹏之药水啦！"),!1):(this.pengPotion=!0,this.waterTime=0,this.consumeItem(t),e&&e.toast("🧪 喝下鹏之药水！从此水里行动自如！"),!0):n.equip?(this.equipment[n.equip]=t,e&&e.toast(`${n.icon} 装备了${n.name}！`),!0):!1}update(t,e,n){if(this.dead)return;this.quakeCooldown=Math.max(0,this.quakeCooldown-t),this.fireCooldown=Math.max(0,this.fireCooldown-t),this.flashCooldown=Math.max(0,this.flashCooldown-t),this.stealthCooldown=Math.max(0,this.stealthCooldown-t),this.stealthTime=Math.max(0,this.stealthTime-t);let i=0,r=0;e.enabled&&(e.keys.KeyW&&(r+=1),e.keys.KeyS&&(r-=1),e.keys.KeyA&&(i-=1),e.keys.KeyD&&(i+=1));const o=e.forwardFlat(new P),a=e.rightFlat(new P),l=Math.hypot(i,r),c=this.speed();let f=0,d=0;if(l>0&&(f=(o.x*r+a.x*i)/l*c,d=(o.z*r+a.z*i)/l*c),Math.hypot(this.ent.vel.x,this.ent.vel.z)>c+1?(this.ent.vel.x*=.9,this.ent.vel.z*=.9):(this.ent.vel.x=f,this.ent.vel.z=d),this.ent.swimUp=!1,e.enabled&&e.keys.Space){if(this.ent.inWater||this.ent.inLava){this.ent.swimUp=!0;const v=Math.hypot(f,d);if(v>.5){const S=Math.floor(this.ent.pos.x+f/v*.8),L=Math.floor(this.ent.pos.z+d/v*.8),A=Math.floor(this.ent.pos.y+.1);n.isSolid(S,A,L)&&!n.isSolid(S,A+1,L)&&!n.isSolid(S,A+2,L)&&(this.ent.vel.y=W.JUMP_SPEED*.85,this.ent.swimUp=!1)}}else if(this.ent.onGround){let v=W.JUMP_SPEED;(this.form==="car"||this.form==="dive")&&(v*=W.CAR_JUMP_MULT),this.ent.vel.y=v,this.jumpCount=1,this.spacePressed=!0}else this.equipment.wings&&(!this.spaceHeld&&this.jumpCount===1?(this.ent.vel.y=W.JUMP_SPEED*.9,this.jumpCount=2):this.ent.vel.y<-2&&(this.ent.vel.y=-2));this.spaceHeld=!0}else this.spaceHeld=!1;this.ent.onGround&&(this.jumpCount=0),ro(n,this.ent,t),this.ent.pos.y<-5&&(this.fellOut=!0);const g=n.get(Math.floor(this.ent.pos.x),Math.floor(this.ent.pos.y+this.ent.h*.9),Math.floor(this.ent.pos.z))===T.WATER,_=this.pengPotion||this.form==="dive"||this.form==="super";g&&!_?this.waterTime+=t:this.waterTime=Math.max(0,this.waterTime-t*W.WATER_RECOVER_MULT),this.envDamageTick-=t,g&&!_&&this.waterTime>W.WATER_LIMIT&&this.envDamageTick<=0&&(this.envDamageTick=1,this.takeDamage(W.WATER_DAMAGE,null));const m=n.get(Math.floor(this.ent.pos.x),Math.floor(this.ent.pos.y+.2),Math.floor(this.ent.pos.z));(this.ent.inLava||m===T.LAVA)&&this.envDamageTick<=0?(this.envDamageTick=.5,this.takeDamage(W.LAVA_DPS/2,null)):m===T.FIRE&&this.form!=="super"&&this.envDamageTick<=0&&(this.envDamageTick=.5,this.takeDamage(W.FIRE_DPS/2,null)),this.regenTimer+=t;let p=0;this.regenTimer>W.REGEN_DELAY&&(p+=W.REGEN_PER_SEC),this.hasAbility("forest")&&(p+=W.FOREST_REGEN),p>0&&this.hp<this.maxHp()&&(this.hp=Math.min(this.maxHp(),this.hp+p*t));const x=l>0&&(this.ent.onGround||this.ent.inWater);this.walkT+=t*(x?1:0)*(c/W.WALK_SPEED),this.model.group.position.set(this.ent.pos.x,this.ent.pos.y,this.ent.pos.z),this.model.group.rotation.y=-e.yaw,this.model.animate(this.walkT*4,x,t),this.model.updateTransformAnim(t),this.model.setGhost(this.stealthTime>0)}headPos(t=new P){const e=this.form==="car"||this.form==="dive"?.9:W.EYE_HEIGHT;return t.set(this.ent.pos.x,this.ent.pos.y+e,this.ent.pos.z)}serialize(){return{pos:[this.ent.pos.x,this.ent.pos.y,this.ent.pos.z],hp:this.hp,gears:this.gears,totalGears:this.totalGears,mysteryGears:this.mysteryGears.slice(),equippedGears:this.equippedGears.slice(),form:this.form,inventory:[...this.inventory.entries()],items:[...this.items.entries()],equipment:{...this.equipment},pengPotion:this.pengPotion,waterTime:Math.round(this.waterTime)}}deserialize(t){if(!t)return;this.ent.pos.x=t.pos[0],this.ent.pos.y=t.pos[1],this.ent.pos.z=t.pos[2],this.gears=t.gears||0,this.totalGears=t.totalGears??t.gears??0,this.mysteryGears=t.mysteryGears||[],this.equippedGears=t.equippedGears||this.mysteryGears.slice(),this.inventory=new Map(t.inventory||[]),this.items=new Map(t.items||[]),this.equipment=Object.assign({sword:null,armor:null,wings:null},t.equipment),this.pengPotion=!!t.pengPotion,this.waterTime=t.waterTime||0;const e=this.computeForms();this.form=e.includes(t.form)?t.form:"robot",this.applyForm(),this.hp=Math.min(t.hp??this.maxHp(),this.maxHp())}}function ft(s,t,e,n,i=0,r=0,o=0){const a=new Yt(new te(s,t,e),new fn({color:n}));return a.position.set(i,r,o),a}function ee(s,t,e,n,i,r,o){const a=new Yt(new te(e,n,.04),new Ce({color:t}));a.position.set(i,r,o),s.add(a)}function V0(s=1){const t=new Zt;t.add(ft(.7,.28,.9,"#181818",0,.32,0)),t.add(ft(.4,.22,.4,"#232323",0,.5,-.3)),t.userData.legs=[];for(const e of[-1,1])for(let n=0;n<4;n++){const i=ft(.08,.3,.08,"#101010",e*.42,.16,-.3+n*.22);i.rotation.z=e*.5,i.userData.baseZ=e*.5,t.add(i),t.userData.legs.push(i)}return ee(t,"#ff3030",.07,.07,-.1,.52,-.5),ee(t,"#ff3030",.07,.07,.1,.52,-.5),t.scale.setScalar(s),t}function Mc(s=1){const t=new Zt;return t.add(ft(.26,.55,.3,"#5a5f66",-.16,.28,0)),t.add(ft(.26,.55,.3,"#5a5f66",.16,.28,0)),t.add(ft(.85,.6,.45,"#787f88",0,.86,0)),t.add(ft(.22,.6,.26,"#6a7078",-.55,.85,0)),t.add(ft(.22,.6,.26,"#6a7078",.55,.85,0)),t.add(ft(.4,.36,.4,"#8b939d",0,1.35,0)),ee(t,"#ffb020",.07,.07,-.09,1.4,-.21),ee(t,"#ffb020",.07,.07,.09,1.4,-.21),t.scale.setScalar(s),t}function W0(s=1){const t=new Zt;return t.add(ft(.16,.6,.16,"#e8e4da",-.1,.3,0)),t.add(ft(.16,.6,.16,"#e8e4da",.1,.3,0)),t.add(ft(.42,.55,.24,"#f2eee4",0,.88,0)),t.add(ft(.14,.5,.14,"#e8e4da",-.3,.9,0)),t.add(ft(.14,.5,.14,"#e8e4da",.3,.9,0)),t.add(ft(.34,.34,.34,"#f7f4ec",0,1.42,0)),t.add(ft(.06,.7,.06,"#7a5a2e",.34,.9,-.25)),ee(t,"#404040",.06,.08,-.08,1.46,-.18),ee(t,"#404040",.06,.08,.08,1.46,-.18),t.scale.setScalar(s),t}function X0(s=1){const t=new Zt;return t.add(ft(.5,.5,1.6,"#5a6c7a",0,.5,0)),t.add(ft(.42,.3,.5,"#e8eef2",0,.28,-.3)),t.add(ft(.1,.4,.4,"#4a5a66",0,.95,.1)),t.add(ft(.1,.35,.35,"#4a5a66",0,.5,.95)),t.add(ft(.4,.14,.3,"#e8eef2",0,.32,-.8)),ee(t,"#ff3030",.07,.07,-.16,.62,-.78),ee(t,"#ff3030",.07,.07,.16,.62,-.78),t.scale.setScalar(s),t}function q0(s=1){const t=new Zt;t.add(ft(.7,.6,.7,"#7a4a9e",0,.7,0)),t.userData.tentacles=[];for(let e=0;e<8;e++){const n=e/8*Math.PI*2,i=ft(.12,.5,.12,"#653a85",Math.cos(n)*.28,.22,Math.sin(n)*.28);i.rotation.x=Math.sin(n)*.3,i.rotation.z=-Math.cos(n)*.3,i.userData.baseX=i.rotation.x,i.userData.baseZ=i.rotation.z,t.add(i),t.userData.tentacles.push(i)}return ee(t,"#f5f0e0",.16,.18,-.18,.78,-.36),ee(t,"#f5f0e0",.16,.18,.18,.78,-.36),ee(t,"#101010",.07,.09,-.18,.76,-.38),ee(t,"#101010",.07,.09,.18,.76,-.38),t.scale.setScalar(s),t}function Y0(s=1){const t=new Zt;return t.add(ft(.24,.24,.5,"#a8c8d8",0,.3,0)),t.add(ft(.06,.2,.2,"#8fb0c0",0,.3,.32)),ee(t,"#101010",.05,.05,-.09,.36,-.22),ee(t,"#101010",.05,.05,.09,.36,-.22),t.scale.setScalar(s),t}function K0(s=1){const t=new Zt;t.add(ft(1.1,.4,.8,"#c0453a",0,.42,0)),t.userData.legs=[];for(const i of[-1,1])for(let r=0;r<3;r++){const o=ft(.09,.3,.09,"#8f3020",i*.62,.16,-.25+r*.25);o.userData.baseZ=0,t.add(o),t.userData.legs.push(o)}const e=ft(.34,.26,.3,"#d55548",-.6,.55,-.4),n=ft(.34,.26,.3,"#d55548",.6,.55,-.4);return t.add(e,n),t.userData.claws=[e,n],ee(t,"#101010",.07,.1,-.16,.72,-.36),ee(t,"#101010",.07,.1,.16,.72,-.36),t.scale.setScalar(s),t}function oo(s,t,e,n,i,r,o){const a=f=>{const d=new Zt;return d.position.set(f*.2,t,e),d.add(ft(n,i,r,o,f*n/2,0,0)),d},l=a(-1),c=a(1);return s.add(l,c),s.userData.wings=[l,c],[l,c]}function $0(s=1){const t=new Zt;t.add(ft(.44,.7,.3,"#f4f6f7",0,.7,0)),t.add(ft(.32,.32,.32,"#ffe4c8",0,1.28,0));const e=new Yt(new te(.42,.05,.42),new Ce({color:"#ffd75e"}));return e.position.set(0,1.58,0),t.add(e),oo(t,1,.16,.55,.08,.65,"#ffffff"),ee(t,"#3a78c8",.06,.07,-.08,1.3,-.17),ee(t,"#3a78c8",.06,.07,.08,1.3,-.17),t.scale.setScalar(s),t}function Z0(s=1){const t=new Zt;return t.add(ft(.3,.3,.55,"#8a6142",0,.4,0)),t.add(ft(.22,.22,.22,"#7a5538",0,.62,-.3)),t.add(ft(.08,.08,.2,"#f0b429",0,.6,-.5)),t.add(ft(.06,.06,.3,"#6d4a30",0,.42,.4)),oo(t,.52,0,.5,.06,.32,"#966c4b"),ee(t,"#101010",.05,.05,-.07,.66,-.4),ee(t,"#101010",.05,.05,.07,.66,-.4),t.scale.setScalar(s),t}function j0(s=1){const t=Mc(1);return t.traverse(e=>{if(e.isMesh&&e.material.color&&!e.material.map){const n=e.material.color.getHexString();(n.startsWith("5a")||n.startsWith("78")||n.startsWith("6a")||n.startsWith("8b"))&&e.material.color.set("#7a2828")}}),t.add(ft(.08,.22,.08,"#2b1414",-.14,1.62,0)),t.add(ft(.08,.22,.08,"#2b1414",.14,1.62,0)),t.add(ft(.06,.35,.5,"#4a1a1a",-.5,1,.2)),t.add(ft(.06,.35,.5,"#4a1a1a",.5,1,.2)),t.scale.setScalar(s),t}function Tl(s=1){const t=new Zt;for(let e=0;e<4;e++)t.add(ft(.6-e*.08,.5-e*.06,.7,"#5f1a10",0,.8+e*.06,e*.62));return t.add(ft(.5,.45,.6,"#7a2418",0,.9,-.55)),t.add(ft(.3,.14,.4,"#8f3020",0,.78,-.95)),t.add(ft(.08,.3,.08,"#2b1414",-.16,1.24,-.5)),t.add(ft(.08,.3,.08,"#2b1414",.16,1.24,-.5)),oo(t,1.1,.3,1.6,.08,.8,"#4a1a1a"),ee(t,"#ffb020",.09,.09,-.14,1,-.83),ee(t,"#ffb020",.09,.09,.14,1,-.83),t.scale.setScalar(s),t}function yc(s=1){const t=new Zt;t.add(ft(.24,.6,.26,"#1a1626",-.15,.3,0)),t.add(ft(.24,.6,.26,"#1a1626",.15,.3,0)),t.add(ft(.7,.65,.4,"#241c30",0,.9,0)),t.add(ft(.2,.55,.24,"#1a1626",-.5,.9,0)),t.add(ft(.2,.55,.24,"#1a1626",.5,.9,0)),t.add(ft(.38,.38,.38,"#2e2440",0,1.42,0));const e=new Yt(new te(.3,.3,.05),new Ce({color:"#7dfcff"}));return e.position.set(0,.95,-.22),t.add(e),ee(t,"#7dfcff",.07,.07,-.09,1.46,-.22),ee(t,"#7dfcff",.07,.07,.09,1.46,-.22),t.scale.setScalar(s),t}function J0(s=1){const t=yc(1.4),e=ft(.4,.14,.4,"#f0b429",0,2.3,0);t.add(e);const n=ft(.9,1.2,.08,"#12081e",0,1,.35);return t.add(n),t.traverse(i=>{i.isMesh&&i.material.color&&i.material.type==="MeshBasicMaterial"&&i.material.color.set("#c084ff")}),t.scale.setScalar(s),t}function Q0(s=3.2){const t=new Zt;let e=.55,n=0;for(let i=0;i<9;i++){const r=Math.cos(n)*e*.5,o=1.1+Math.sin(n)*e*.5,a=.75-i*.07;t.add(ft(.5,a,a,i%2?"#d8b48a":"#b0805a",r*.3,o,r)),n+=.75,e-=.045}t.add(ft(.6,.9,.9,"#c89a6e",0,1,.1));for(let i=0;i<10;i++){const r=i/10*Math.PI*2,o=ft(.08,.34,.08,"#f2e8d8",Math.cos(r)*.5,1.1+Math.sin(r)*.55,.1+Math.sin(r*2)*.3);o.rotation.z=r,t.add(o)}ee(t,"#f5f0e0",.22,.26,-.34,1.15,-.42),ee(t,"#f5f0e0",.22,.26,.34,1.15,-.42),ee(t,"#101010",.1,.12,-.34,1.13,-.45),ee(t,"#101010",.1,.12,.34,1.13,-.45),t.userData.tentacles=[];for(let i=0;i<8;i++){const r=i/8*Math.PI*2,o=ft(.1,.7,.1,"#a06a8a",Math.cos(r)*.3,.28,.1+Math.sin(r)*.3);o.rotation.x=Math.sin(r)*.25,o.rotation.z=-Math.cos(r)*.25,o.userData.baseX=o.rotation.x,o.userData.baseZ=o.rotation.z,t.add(o),t.userData.tentacles.push(o)}return t.scale.setScalar(s),t}function js(s,t){const e=s.group.userData.wings;if(!e)return;const n=Math.hypot(s.ent.vel.x,s.ent.vel.z)+Math.abs(s.ent.vel.y),i=.3+Math.min(.45,n*.06),r=Math.sin(t*6)*i;e[0].rotation.z=-r-.1,e[1].rotation.z=r+.1}function tg(s,t){const e=s.group.userData;if(!e.wings)return;const n=s.swoopPhase==="dive",i=n?.9:Math.sin(t*(s.swoopPhase?5:3))*.45;e.wings[0].rotation.z=-i-.06,e.wings[1].rotation.z=i+.06;for(const[r,o]of[[0,e.wingSegs[0]],[1,e.wingSegs[1]]]){const a=r===0?1:-1;o.forEach((l,c)=>{if(c===0)return;const f=Math.sin(t*(s.swoopPhase?5:3)-c*.7)*.3;l.rotation.z=a*(n?.7:f),l.rotation.y=n?a*.5:0})}}function Al(s,t){const e=s.group.userData.tentacles;e&&e.forEach((n,i)=>{n.rotation.x=n.userData.baseX+Math.sin(t*2.4+i*.9)*.28,n.rotation.z=n.userData.baseZ+Math.cos(t*2.1+i*1.2)*.22})}function Sc(s,t){const e=s.group.userData.legs;if(!e)return;const i=Math.hypot(s.ent.vel.x,s.ent.vel.z)>.3?.4:.06;e.forEach((r,o)=>{r.rotation.x=Math.sin(t*9+o*1.6)*i,r.userData.baseZ!==void 0&&(r.rotation.z=r.userData.baseZ)})}function eg(s,t){Sc(s,t);const e=s.group.userData.claws;e&&(e[0].rotation.x=Math.sin(t*3)*.25-.1,e[1].rotation.x=Math.sin(t*3+Math.PI)*.25-.1)}function ng(s=4){const t=new Zt;t.add(ft(.74,.62,1,"#1e3a5c",0,.72,-.3)),t.add(ft(.64,.54,.8,"#224064",0,.7,.5)),t.add(ft(.5,.42,.6,"#16304e",0,.68,1.1)),t.add(ft(.62,.52,.62,"#16304e",0,.74,-1.05)),t.add(ft(.3,.16,.5,"#0f2540",0,.6,-1.4)),t.add(ft(.54,.3,1.3,"#e8eef2",0,.44,-.2)),t.add(ft(.2,.12,.5,"#2a4a70",0,1.06,-.7)),t.userData.wings=[],t.userData.wingSegs=[[],[]];for(const e of[-1,1]){const n=new Zt;n.position.set(e*.36,.94,-.1);let i=0;const r=[[1.1,1,"#2a4a70"],[.95,.85,"#3a5d85"],[.8,.7,"#4a739e"]],o=[];let a=n;for(const[l,c,f]of r){const d=new Zt;d.position.set(e*i,0,0),d.add(ft(l,.1,c,f,e*l/2,0,0)),d.add(ft(l,.06,.24,"#e8eef2",e*l/2,-.02,c/2+.1)),a.add(d),o.push(d),a=d,i=l}t.add(n),t.userData.wings.push(n),t.userData.wingSegs[e<0?0:1]=o}for(const[e,n]of[[-.4,.7],[0,.85],[.4,.7]]){const i=ft(.16,.06,n,"#2a4a70",0,.7,1.5+n/2-.2);i.rotation.y=e,t.add(i)}return ee(t,"#7dfcff",.13,.13,-.24,.86,-1.34),ee(t,"#7dfcff",.13,.13,.24,.86,-1.34),t.scale.setScalar(s),t}function ig(s=2.2){const t=new Zt;t.add(ft(.4,.7,.4,"#2e2320",-.25,.35,0)),t.add(ft(.4,.7,.4,"#2e2320",.25,.35,0)),t.add(ft(1.1,.9,.6,"#3a2c26",0,1.15,0)),t.add(ft(.34,.8,.34,"#241b18",-.75,1.15,0)),t.add(ft(.34,.8,.34,"#241b18",.75,1.15,0)),t.add(ft(.2,.2,.2,"#0e0a08",-.75,.7,-.1)),t.add(ft(.2,.2,.2,"#0e0a08",.75,.7,-.1)),t.add(ft(.5,.45,.5,"#3a2c26",0,1.85,0));for(const[e,n]of[[-.3,1],[.2,1.3],[0,.9]])t.add(ft(.06,.4,.62,"#e8b53a",e,n,0));return ee(t,"#ff3030",.1,.08,-.12,1.9,-.26),ee(t,"#ff3030",.1,.08,.12,1.9,-.26),t.scale.setScalar(s),t}const Ec={spider:{name:"自爆黑蛛",tags:["爆炸类","邪恶类","无脊椎类"],w:.9,h:.6,speed:2.9,build:V0,exploder:!0,medium:"ground",animate:Sc},brute:{name:"石壳斗士",tags:["邪恶类","有脊椎类"],w:.8,h:1.6,speed:2.2,build:Mc,melee:!0,medium:"ground"},archer:{name:"白骨射手",tags:["远程攻击类","邪恶类","有脊椎类"],w:.6,h:1.7,speed:2.2,build:W0,ranged:!0,medium:"ground"},shark:{name:"铁齿鲨",tags:["鲨鱼类","有脊椎类"],w:.7,h:.9,speed:4.2,build:X0,melee:!0,medium:"water"},octopus:{name:"墨影章鱼",tags:["章鱼类","无脊椎类"],w:.8,h:1,speed:2.4,build:q0,ranged:!0,medium:"water",projColor:"#1a1030",animate:Al},fish:{name:"小银鱼",tags:["普通鱼类"],w:.3,h:.35,speed:2,build:Y0,passive:!0,medium:"water",dropItem:"seafood"},crab:{name:"岩壳蟹",tags:["蟹类","无脊椎类"],w:1.1,h:.8,speed:2,build:K0,melee:!0,medium:"ground",tough:.7,mountable:!0,animate:eg},angel:{name:"云端天使",tags:["天使类","正义类"],w:.6,h:1.7,speed:3.4,build:$0,melee:!0,medium:"air",passive:!0,dropItem:"feather",animate:js},bird:{name:"啄风鸟",tags:["鸟类"],w:.5,h:.7,speed:4,build:Z0,melee:!0,medium:"air",animate:js},demon:{name:"恶魔",tags:["邪恶类","有脊椎类"],w:.8,h:1.7,speed:2.6,build:j0,melee:!0,medium:"ground",maybeRanged:.3,projColor:"#ff7a1a"},dragon:{name:"恶龙",tags:["邪恶类","有脊椎类","远程攻击类"],w:1.6,h:1.6,speed:3.6,build:()=>Tl(1.6),ranged:!0,medium:"air",projColor:"#ff7a1a",animate:js},runeguard:{name:"符文守卫",tags:["邪恶类","远程攻击类"],w:.8,h:1.8,speed:2.4,build:yc,ranged:!0,medium:"ground",projColor:"#7dfcff"},shadowking:{name:"暗影君王",tags:["邪恶类","有脊椎类","远程攻击类"],w:1.1,h:2.4,speed:2.8,build:J0,ranged:!0,melee:!0,medium:"ground",projColor:"#c084ff"},seaguardian:{name:"海底守卫者",tags:["鲨鱼类","章鱼类","无脊椎类"],w:2.4,h:3.4,speed:3,build:Q0,melee:!0,radial:!0,medium:"water",projColor:"#f2e8d8",animate:Al},kunpeng:{name:"鲲鹏",tags:["鸟类","鲨鱼类","正义类"],w:3.4,h:2.6,speed:5,build:ng,ranged:!0,melee:!0,swoop:!0,medium:"air",projColor:"#7dd8ff",animate:tg},forbiddengolem:{name:"禁地守卫",tags:["爆炸类","远程攻击类","邪恶类","有脊椎类"],w:1.8,h:2.6,speed:2.2,build:ig,ranged:!0,radial:!0,medium:"ground",projColor:"#ff5030"},helldragon:{name:"地狱魔龙",tags:["邪恶类","有脊椎类","远程攻击类","爆炸类"],w:3.2,h:3.2,speed:4,build:()=>Tl(3.2),ranged:!0,melee:!0,medium:"air",projColor:"#ff3010",animate:js}};function sg(s,t,e){const n=document.createElement("canvas");n.width=512,n.height=128;const i=new hi(new Hn({map:new wn(n),depthTest:!1}));i.scale.set(2.6,.65,1);const r=(o,a=!1)=>{const l=n.getContext("2d");l.clearRect(0,0,512,128),l.textAlign="center",l.fillStyle=e?"#ffd75e":"#ffffff",l.strokeStyle="rgba(0,0,0,0.85)",l.lineWidth=6,l.font=`bold ${e?44:36}px sans-serif`;const c=a?`♻ ${s}`:s;l.strokeText(c,256,44),l.fillText(c,256,44),l.font="24px sans-serif",l.strokeStyle="rgba(0,0,0,0.7)",l.lineWidth=4,l.fillStyle="#cfe8ff";const f=t.join("·");l.strokeText(f,256,76),l.fillText(f,256,76),l.fillStyle="rgba(0,0,0,0.6)",l.fillRect(106,92,300,18),l.fillStyle=o>.35?"#57d94f":"#e34b4b",l.fillRect(109,95,294*Math.max(0,o),12),i.material.map.needsUpdate=!0};return r(1),{sprite:i,redraw:r,dispose:()=>{i.material.map.dispose(),i.material.dispose()}}}class rg{constructor(t,e,n){this.getRoot=t,this.ctx=e,this.player=n,this.list=[],this.onKill=null,this.onExplode=null,this.projectiles=null,this.hud=null,this.spawnPools=[]}get world(){return this.ctx.world}count(t=()=>!0){return this.list.filter(e=>!e.dead&&t(e)).length}spawn(t,e,n,i,r={}){const o=Ec[t],a=r.floor||1,l=r.scale||1,c={type:t,def:o,isBoss:!!r.boss,bossName:r.bossName,floor:r.towerFloor||0,tag:r.tag||null,w:o.w*l,h:o.h*l,ent:{pos:{x:e,y:n,z:i},vel:{x:0,y:0,z:0},w:o.w*l,h:o.h*l,onGround:!1,noGravity:o.medium!=="ground"},hp:r.hp??15+6*a,maxHp:r.hp??15+6*a,atk:r.atk??Math.round(4+1.5*a),gearDrop:r.gears??(Math.random()<.2?2:1),speed:o.speed*(r.boss?1.15:1),state:"idle",wanderDir:[0,0,0],wanderT:0,attackT:0,fuseT:-1,shotT:1+Math.random(),stunT:0,healTick:0,homeY:n,homeX:e,homeZ:i,patrol:r.patrol||null,patrolA:Math.random()*Math.PI*2,aggroR:r.aggroR||0,strafeDir:Math.random()<.5?1:-1,strafeT:1+Math.random()*2,swoopPhase:null,swoopT:0,symbolPos:r.symbolPos||null,canShoot:o.ranged||o.maybeRanged&&Math.random()<o.maybeRanged,dead:!1,hurtT:0,group:o.build(l===1?void 0:l)||o.build()};c.group||(c.group=o.build());const f=r.bossName||o.name;return c.plate=sg(f,o.tags,c.isBoss),c.plate.sprite.position.set(0,c.h+.55,0),c.group.add(c.plate.sprite),c.group.position.set(e,n,i),this.getRoot().add(c.group),this.list.push(c),c}hitMonster(t,e,n){if(!t.dead){if(t.def.tough&&(e=Math.max(1,Math.round(e*t.def.tough))),t.hp-=e,t.hurtT=.15,t.plate.redraw(Math.max(0,t.hp/t.maxHp)),this.hud&&this.hud.damageNumber(t.ent.pos,e),this.onHit&&this.onHit(t,e),n&&t.def.medium==="ground"){const i=t.ent.pos.x-n.x,r=t.ent.pos.z-n.z,o=Math.hypot(i,r)||1;t.ent.vel.x+=i/o*5,t.ent.vel.z+=r/o*5,t.ent.vel.y=Math.max(t.ent.vel.y,3.5)}t.state==="idle"&&(t.state="chase"),t.hp<=0&&this.kill(t)}}kill(t){t.dead=!0,t.group.parent&&t.group.parent.remove(t.group),t.plate.dispose(),t.group.traverse(e=>{e.isMesh&&e.geometry.dispose()}),this.onKill&&this.onKill(t)}clearAll(){for(const t of this.list)t.dead||(t.dead=!0,t.group.parent&&t.group.parent.remove(t.group),t.plate.dispose(),t.group.traverse(e=>{e.isMesh&&e.geometry.dispose()}));this.list=[]}explode(t){const e=this.player;Math.hypot(e.ent.pos.x-t.ent.pos.x,e.ent.pos.y+.9-t.ent.pos.y,e.ent.pos.z-t.ent.pos.z)<3&&e.takeDamage(t.atk+8,t.ent.pos),this.onExplode&&this.onExplode(t.ent.pos),this.kill(t)}shoot(t,e,n=14){const i=new P(t.ent.pos.x,t.ent.pos.y+t.h*.7,t.ent.pos.z),r=new P(e.x-i.x,e.y-i.y,e.z-i.z).normalize();this.projectiles.spawn(i,r,n,t.atk,t.def.projColor)}radialBurst(t,e=10){const n=new P(t.ent.pos.x,t.ent.pos.y+t.h*.5,t.ent.pos.z);for(let i=0;i<e;i++){const r=i/e*Math.PI*2;this.projectiles.spawn(n.clone(),new P(Math.cos(r),-.05,Math.sin(r)),10,Math.round(t.atk*.7),t.def.projColor)}}steer(t,e,n,i,r){const o=e-t.ent.pos.x,a=n-t.ent.pos.y,l=i-t.ent.pos.z,c=Math.hypot(o,a,l)||1;t.ent.vel.x=o/c*r,t.ent.vel.y=a/c*r,t.ent.vel.z=l/c*r}swoopAI(t,e,n,i,r){const o=this.player,a=t.speed;t.swoopPhase||(t.swoopPhase="hover",t.swoopT=1.5),t.swoopT-=e,t.swoopPhase==="hover"?(t.patrolA+=e*.9,this.steer(t,o.ent.pos.x+Math.cos(t.patrolA)*14,o.ent.pos.y+22,o.ent.pos.z+Math.sin(t.patrolA)*14,a),t.canShoot&&(t.shotT-=e,t.shotT<=0&&(t.shotT=2.2,this.shoot(t,{x:o.ent.pos.x,y:o.ent.pos.y+.9,z:o.ent.pos.z},16))),t.swoopT<=0&&(t.swoopPhase="dive",t.swoopT=4,this.onSwoopStart&&this.onSwoopStart(t))):t.swoopPhase==="dive"?(this.steer(t,o.ent.pos.x,o.ent.pos.y+.6,o.ent.pos.z,a*2.1),Math.hypot(n,i,r)<t.w*.5+1.8?(o.takeDamage(t.atk,t.ent.pos),t.swoopPhase="climb",t.swoopT=2.2):t.swoopT<=0&&(t.swoopPhase="climb",t.swoopT=2.2)):(this.steer(t,t.ent.pos.x-n*.3,o.ent.pos.y+26,t.ent.pos.z-r*.3,a*1.2),t.swoopT<=0&&(t.swoopPhase="hover",t.swoopT=1.2+Math.random()*1.5))}update(t){const e=this.player,n=e.stealthTime>0;for(const i of this.list){if(i.dead)continue;if(i.hurtT=Math.max(0,i.hurtT-t),i.stunT=Math.max(0,i.stunT-t),i.symbolPos&&i.hp<i.maxHp&&(i.healTick-=t,i.healTick<=0)){i.healTick=1;const[d,h,u]=i.symbolPos;this.world.get(d,h,u)===T.SYMBOL&&(i.hp=Math.min(i.maxHp,i.hp+i.maxHp*.05),i.plate.redraw(i.hp/i.maxHp,!0))}const r=e.ent.pos.x-i.ent.pos.x,o=e.ent.pos.y+.9-(i.ent.pos.y+i.h*.5),a=e.ent.pos.z-i.ent.pos.z,l=Math.hypot(r,a),c=Math.hypot(r,o,a);if(i.stunT>0)i.ent.vel.x=0,i.ent.vel.z=0,i.ent.noGravity&&(i.ent.vel.y=0);else if(i.fuseT>=0){i.fuseT+=t;const d=Math.floor(i.fuseT*10)%2===0;if(i.group.traverse(h=>{h.isMesh&&h.material.emissive&&h.material.emissive.setScalar(d?.9:0)}),i.group.scale.setScalar(i.w/i.def.w*(1+i.fuseT*.35)),i.ent.vel.x=0,i.ent.vel.z=0,i.fuseT>=.8){this.explode(i);continue}}else if(i.state==="idle"){const d=i.aggroR||(i.isBoss?W.AGGRO_RANGE*2:W.AGGRO_RANGE),h=i.def.swoop?l:c;if(!i.def.passive&&h<d&&!e.dead&&!n&&(i.state="chase",i.swoopPhase=null),i.patrol){i.patrolA+=i.speed/Math.max(6,i.patrol.r)*t;const u=i.patrol.cx+Math.cos(i.patrolA)*i.patrol.r,g=i.patrol.cz+Math.sin(i.patrolA)*i.patrol.r,_=u-i.ent.pos.x,m=g-i.ent.pos.z,p=Math.hypot(_,m)||1;if(i.ent.vel.x=_/p*i.speed,i.ent.vel.z=m/p*i.speed,i.ent.noGravity){const x=i.patrol.y??i.homeY;i.ent.vel.y=oi.clamp((x-i.ent.pos.y)*.8,-2.5,2.5)}i._stkT===void 0&&(i._stkT=0,i._stkX=i.ent.pos.x,i._stkZ=i.ent.pos.z),i._stkT+=t,i._stkT>1&&(Math.hypot(i.ent.pos.x-i._stkX,i.ent.pos.z-i._stkZ)<.5&&(i.patrolA+=1),i._stkT=0,i._stkX=i.ent.pos.x,i._stkZ=i.ent.pos.z)}else{if(i.wanderT-=t,i.wanderT<=0)if(i.wanderT=2+Math.random()*2,Math.random()<.4)i.wanderDir=[0,0,0];else{const u=Math.random()*Math.PI*2;i.wanderDir=[Math.cos(u),i.ent.noGravity?(Math.random()-.5)*.4:0,Math.sin(u)]}if(i.ent.vel.x=i.wanderDir[0]*i.speed*.35,i.ent.vel.z=i.wanderDir[2]*i.speed*.35,i.ent.noGravity){const u=i.wanderDir[1]*i.speed*.35+(i.homeY-i.ent.pos.y)*.3;i.ent.vel.y=oi.clamp(u,-1.5,1.5)}}}else if(i.state==="chase"&&i.def.swoop){if(e.dead||n){i.state="idle",i.swoopPhase=null;continue}this.swoopAI(i,t,r,o,a),l>(i.aggroR||60)*1.8&&(i.state="idle",i.swoopPhase=null)}else if(i.state==="chase"){if(e.dead||n){i.state="idle",i.ent.vel.x=i.ent.vel.z=0,i.ent.noGravity&&(i.ent.vel.y=0);continue}const d=c||1;let h=r/d,u=o/d,g=a/d;if(i.canShoot){const m=i.isBoss?9:8;if(i.strafeT-=t,i.strafeT<=0&&(i.strafeT=1.5+Math.random()*2,Math.random()<.6&&(i.strafeDir*=-1)),l<m-2)h=-h,g=-g;else if(l<m+3){const p=l||1,x=-(a/p)*i.strafeDir,v=r/p*i.strafeDir;h=x*.8,g=v*.8,i.ent.noGravity||(u=0)}i.shotT-=t,c<20&&i.shotT<=0&&(i.shotT=i.isBoss?1.6:2.5,i.def.radial&&Math.random()<.4?this.radialBurst(i,i.isBoss?14:10):this.shoot(i,{x:e.ent.pos.x,y:e.ent.pos.y+.9,z:e.ent.pos.z}),i.isBoss&&!i.def.radial&&(i.pendingShot=.18))}if(i.pendingShot!=null&&(i.pendingShot-=t,i.pendingShot<=0&&(i.pendingShot=null,i.dead||this.shoot(i,{x:e.ent.pos.x,y:e.ent.pos.y+.9,z:e.ent.pos.z}))),i.def.exploder&&l<1.9&&Math.abs(o)<2){i.fuseT=0;continue}i.def.melee&&c<i.w/2+1.4&&(i.attackT-=t,i.attackT<=0&&(i.attackT=1.2,e.takeDamage(i.atk,i.ent.pos)),h=0,g=0,i.ent.noGravity||(u=0)),Math.hypot(i.ent.vel.x,i.ent.vel.z)>i.speed+1.5?(i.ent.vel.x*=.92,i.ent.vel.z*=.92):(i.ent.vel.x=h*i.speed,i.ent.vel.z=g*i.speed,i.ent.noGravity&&(i.ent.vel.y=u*i.speed*.8)),c>W.AGGRO_RANGE*(i.isBoss?4:2)&&(i.state="idle")}if(i.def.medium==="water"){const d=Math.floor(i.ent.pos.x+i.ent.vel.x*t*2),h=Math.floor(i.ent.pos.y+i.ent.vel.y*t*2+i.h*.5),u=Math.floor(i.ent.pos.z+i.ent.vel.z*t*2);this.world.get(d,h,u)!==T.WATER&&(i.ent.vel.x*=.2,i.ent.vel.y=Math.min(i.ent.vel.y,0),i.ent.vel.z*=.2)}if(!i.ent.noGravity&&i.ent.onGround){const d=Math.hypot(i.ent.vel.x,i.ent.vel.z);if(d>.5){const h=Math.floor(i.ent.pos.x+i.ent.vel.x/d*.8),u=Math.floor(i.ent.pos.z+i.ent.vel.z/d*.8),g=Math.floor(i.ent.pos.y);this.world.isSolid(h,g,u)&&!this.world.isSolid(h,g+1,u)&&(i.ent.vel.y=8)}}if(i.def.medium==="ground")if(i.ent.inWater){i.ent.swimUp=!0;const d=i.homeX-i.ent.pos.x,h=i.homeZ-i.ent.pos.z,u=Math.hypot(d,h)||1;i.ent.vel.x=d/u*i.speed*.8,i.ent.vel.z=h/u*i.speed*.8}else{i.ent.swimUp=!1;const d=Math.hypot(i.ent.vel.x,i.ent.vel.z);if(d>.3){const h=i.ent.pos.x+i.ent.vel.x/d*1.1,u=i.ent.pos.z+i.ent.vel.z/d*1.1,g=Math.floor(i.ent.pos.y),_=this.world.get(Math.floor(h),g-1,Math.floor(u)),m=this.world.get(Math.floor(h),g-2,Math.floor(u));if(_===T.WATER&&m===T.WATER){const p=-i.ent.vel.z/d,x=i.ent.vel.x/d,v=i.ent.pos.x+p*1.1,S=i.ent.pos.z+x*1.1;this.world.get(Math.floor(v),g-1,Math.floor(S))!==T.WATER?(i.ent.vel.x=p*i.speed*.7,i.ent.vel.z=x*i.speed*.7):(i.ent.vel.x=0,i.ent.vel.z=0,i.patrol&&i.state==="idle"&&(i.patrolA+=t*2.5))}}}if(ro(this.world,i.ent,t),i.ent.pos.y<-5){this.kill(i);continue}i.group.position.set(i.ent.pos.x,i.ent.pos.y,i.ent.pos.z);const f=Math.hypot(i.ent.vel.x,i.ent.vel.z);if(i.state==="chase"&&!i.def.swoop&&l>.1?i.group.rotation.y=Math.atan2(-r,-a)+Math.PI:f>.5&&(i.group.rotation.y=Math.atan2(-i.ent.vel.x,-i.ent.vel.z)+Math.PI),i.animPh=(i.animPh||0)+t*(1+Math.min(3,f*.5)),i.def.animate&&i.def.animate(i,i.animPh,t),!i.ent.noGravity&&i.fuseT<0){const d=f>.5?Math.abs(Math.sin(i.animPh*4))*.07:0;i.group.position.y=i.ent.pos.y+d,i.group.rotation.z=f>.5?Math.sin(i.animPh*4)*.045:0}else i.ent.noGravity&&(i.group.position.y=i.ent.pos.y+Math.sin(i.animPh*1.8)*.08);i.hurtT>0?i.group.traverse(d=>{d.isMesh&&d.material.emissive&&d.material.emissive.setRGB(.6,0,0)}):i.fuseT<0&&i.group.traverse(d=>{d.isMesh&&d.material.emissive&&d.material.emissive.setScalar(0)})}this.list=this.list.filter(i=>!i.dead);for(const i of this.spawnPools){if(i.timer-=t,i.timer>0||(i.timer=i.interval*(i.intervalMult?i.intervalMult():1),this.count(d=>d.tag===i.tag)>=i.max||this.count()>=W.MONSTER_CAP))continue;const o=i.points[Math.floor(Math.random()*i.points.length)];let a,l,c;if(o.length===3?[a,l,c]=o:(a=o[0],c=o[1],l=this.world.surfaceAt(Math.floor(a),Math.floor(c))+1),Math.hypot(a-e.ent.pos.x,c-e.ent.pos.z)<12)continue;const f=i.types[Math.floor(Math.random()*i.types.length)];this.spawn(f,a+.5,l,c+.5,{floor:i.floor||1,tag:i.tag})}}}class ag{constructor(t,e,n){this.getRoot=t,this.ctx=e,this.player=n,this.list=[]}get world(){return this.ctx.world}spawn(t,e,n,i,r="#f5f0e0"){const o=new Yt(new te(.16,.16,.42),new Ce({color:r}));o.position.copy(t),o.lookAt(t.clone().add(e)),this.getRoot().add(o),this.list.push({pos:t.clone(),dir:e.clone(),speed:n,dmg:i,mesh:o,t:0})}clearAll(){for(const t of this.list)t.mesh.parent&&t.mesh.parent.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.list=[]}update(t){const e=this.player;for(const n of this.list){n.t+=t,n.pos.addScaledVector(n.dir,n.speed*t),n.mesh.position.copy(n.pos);let i=n.t>3.5;if(!i&&this.world.isSolid(Math.floor(n.pos.x),Math.floor(n.pos.y),Math.floor(n.pos.z))&&(i=!0),!i&&!e.dead){const r=e.ent.w/2+.15;Math.abs(n.pos.x-e.ent.pos.x)<r&&n.pos.y>e.ent.pos.y-.1&&n.pos.y<e.ent.pos.y+e.ent.h+.1&&Math.abs(n.pos.z-e.ent.pos.z)<r&&(e.takeDamage(n.dmg,n.pos),i=!0)}i&&(n.mesh.parent&&n.mesh.parent.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),n.remove=!0)}this.list=this.list.filter(n=>!n.remove)}}function og(){const s=new Zt,t=new fn({color:"#f0b429"}),e=new Yt(new te(.34,.09,.34),t),n=new Yt(new te(.34,.09,.34),t);n.rotation.y=Math.PI/4;const i=new Yt(new te(.12,.14,.12),new fn({color:"#c78d1b"}));return s.add(e,n,i),s}class lg{constructor(t,e,n){this.getRoot=t,this.ctx=e,this.player=n,this.list=[],this.onPickup=null}get world(){return this.ctx.world}spawnGears(t,e){const n=Math.min(e,12),i=Math.floor(e/n);let r=e-i*n;for(let o=0;o<n;o++){const a=i+(r-- >0?1:0),l=og();a>3&&l.scale.setScalar(1.6),l.position.set(t.x,t.y+.4,t.z),this.getRoot().add(l),this.list.push({pos:new P(t.x,t.y+.4,t.z),vel:new P((Math.random()-.5)*3,4+Math.random()*2,(Math.random()-.5)*3),mesh:l,t:0,value:a})}}clearAll(){for(const t of this.list)t.mesh.parent&&t.mesh.parent.remove(t.mesh);this.list=[]}update(t){const e=this.player;for(const n of this.list){n.t+=t;const i=e.ent.pos.x,r=e.ent.pos.y+.8,o=e.ent.pos.z,a=Math.hypot(i-n.pos.x,r-n.pos.y,o-n.pos.z);if(a<2.5&&!e.dead){const l=new P(i-n.pos.x,r-n.pos.y,o-n.pos.z).normalize();n.vel.lerp(l.multiplyScalar(9),.25)}else{const l=this.world.get(Math.floor(n.pos.x),Math.floor(n.pos.y),Math.floor(n.pos.z))===T.WATER;n.vel.y-=(l?3:20)*t,l&&n.vel.multiplyScalar(1-Math.min(1,2*t));const c=this.world.get(Math.floor(n.pos.x),Math.floor(n.pos.y-.2),Math.floor(n.pos.z));c!==T.AIR&&c!==T.WATER&&n.vel.y<0&&(n.vel.y=0,n.vel.x*=.8,n.vel.z*=.8)}n.pos.addScaledVector(n.vel,t),n.mesh.position.copy(n.pos),n.mesh.rotation.y+=t*3,a<.7&&!e.dead?(n.mesh.parent&&n.mesh.parent.remove(n.mesh),n.remove=!0,this.onPickup&&this.onPickup(n.value||1)):(n.t>90||n.pos.y<-5)&&(n.mesh.parent&&n.mesh.parent.remove(n.mesh),n.remove=!0)}this.list=this.list.filter(n=>!n.remove)}}const cg={head:"#f7d341",body:"#e8b53a",arm:"#f7d341",leg:"#c78d1b",headType:"antenna",eyeStyle:"visor",wide:!0};class sa{constructor(t,e,n="👑 作者",i=cg){this.pos=new P(e[0],e[1],e[2]),this.model=ao(i),this.model.group.position.copy(this.pos),this.model.group.rotation.y=Math.PI/2+.6,t.add(this.model.group),this.t=Math.random()*5,this.float=n.includes("作者");const r=document.createElement("canvas");r.width=320,r.height=96;const o=r.getContext("2d");o.textAlign="center",o.font="bold 44px sans-serif",o.strokeStyle="rgba(0,0,0,0.8)",o.lineWidth=8,o.fillStyle=this.float?"#ffd75e":"#bfe0ff",o.strokeText(n,160,60),o.fillText(n,160,60);const a=new hi(new Hn({map:new wn(r),depthTest:!1}));a.scale.set(1.8,.55,1),a.position.y=2.3,this.model.group.add(a)}distanceTo(t){return Math.hypot(t.x-this.pos.x,t.y-this.pos.y,t.z-this.pos.z)}update(t){this.t+=t,this.float&&(this.model.group.position.y=this.pos.y+Math.sin(this.t*1.6)*.08+.05),this.model.animate(this.t*.8,!1,t)}}const hg={forest:"#4aa63d",fire:"#ff7a1a",dark:"#c084ff"};function dg(s){const t=new Zt,e=new fn({color:"#f0b429"}),n=new Yt(new te(.7,.16,.7),e),i=new Yt(new te(.7,.16,.7),e);i.rotation.y=Math.PI/4;const r=new Yt(new te(.24,.26,.24),new Ce({color:s})),o=new hi(new Hn({map:ug(s),transparent:!0,depthWrite:!1}));return o.scale.set(2.2,2.2,1),t.add(n,i,r,o),t}function ug(s){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(64,64,8,64,64,64);return n.addColorStop(0,s+"cc"),n.addColorStop(1,s+"00"),e.fillStyle=n,e.fillRect(0,0,128,128),new wn(t)}class fg{constructor(t){this.player=t,this.list=[],this.onPickup=null,this.t=0}place(t,e,n){if(this.player.hasGear(t)||this.list.some(r=>r.kind===t))return;const i=dg(hg[t]||"#ffd75e");i.position.set(e[0]+.5,e[1]+.5,e[2]+.5),n.add(i),this.list.push({kind:t,pos:e,mesh:i})}update(t,e){this.t+=t;const n=this.player;for(const i of this.list){if(i.mesh.rotation.y+=t*1.5,i.mesh.position.y=i.pos[1]+.5+Math.sin(this.t*2)*.15,!i.mesh.parent||!i.mesh.parent.visible)continue;Math.hypot(n.ent.pos.x-i.mesh.position.x,n.ent.pos.y+.9-i.mesh.position.y,n.ent.pos.z-i.mesh.position.z)<1.8&&!n.dead&&(i.mesh.parent.remove(i.mesh),i.remove=!0,this.onPickup&&this.onPickup(i.kind))}this.list=this.list.filter(i=>!i.remove)}}function pg(){const s=new Zt,t=new Yt(new te(1.1,.35,2),new fn({color:"#8f6b3d"}));t.position.y=.25;const e=new Yt(new te(.8,.2,1.6),new fn({color:"#6b4d29"}));e.position.y=.42;const n=new Yt(new te(.5,.3,.4),new fn({color:"#8f6b3d"}));n.position.set(0,.35,-1.1);const i=new Yt(new te(.12,.12,.12),new Ce({color:"#ffd75e"}));return i.position.set(0,.55,-1.15),s.add(t,e,n,i),s}class mg{constructor(t,e,n){this.group=t,this.ctx=e,this.player=n,this.boats=[],this.riding=null,this.onWake=null}navigable(t,e){return this.ctx.world.get(Math.floor(t),W.SEA_LEVEL,Math.floor(e))===T.WATER}place(t,e,n){const i=pg(),r={pos:new P(t,W.SEA_LEVEL+.05,n),yaw:0,speed:0,bobT:Math.random()*5,mesh:i};return i.position.copy(r.pos),this.group.add(i),this.boats.push(r),r}nearest(t,e=3){let n=null,i=e;for(const r of this.boats){const o=Math.hypot(r.pos.x-t.x,r.pos.y-t.y,r.pos.z-t.z);o<i&&(i=o,n=r)}return n}toggleRide(){const t=this.player;if(this.riding){const n=this.riding;let i=1.2,r=0;return this.navigable(n.pos.x+1.2,n.pos.z)&&!this.navigable(n.pos.x-1.2,n.pos.z)&&(i=-1.2),t.ent.pos.x=n.pos.x+i,t.ent.pos.y=n.pos.y+1,t.ent.pos.z=n.pos.z+r,n.speed=0,this.riding=null,"off"}const e=this.nearest(t.ent.pos);return e?(this.riding=e,"on"):null}update(t,e){const n=this.player;for(const i of this.boats){if(i.bobT+=t,i!==this.riding){i.mesh.position.set(i.pos.x,i.pos.y+Math.sin(i.bobT*1.6)*.04,i.pos.z);continue}let r=0,o=0;e.enabled&&(e.keys.KeyW&&(r=1),e.keys.KeyS&&(r=-.5),e.keys.KeyA&&(o=-1),e.keys.KeyD&&(o=1));const a=1.6*(.4+.6*Math.min(1,Math.abs(i.speed)/W.BOAT_SPEED));i.yaw+=o*a*t*(i.speed<0?-1:1);const l=r*W.BOAT_SPEED,c=r!==0?6:2.5;if(i.speed+=oi.clamp(l-i.speed,-c*t,c*t),Math.abs(i.speed)<.05&&r===0&&(i.speed=0),Math.abs(i.speed)>.05){const f=Math.sin(i.yaw),d=-Math.cos(i.yaw),h=i.speed*t;let u=i.pos.x+f*h,g=i.pos.z+d*h;this.navigable(u,g)?(i.pos.x=u,i.pos.z=g):this.navigable(u,i.pos.z)?(i.pos.x=u,i.speed*=.8):this.navigable(i.pos.x,g)?(i.pos.z=g,i.speed*=.8):i.speed*=.4,this.onWake&&Math.abs(i.speed)>3&&this.onWake(i.pos,i.speed)}i.pos.y=W.SEA_LEVEL+.05,i.mesh.position.set(i.pos.x,i.pos.y+Math.sin(i.bobT*2.2)*.05,i.pos.z),i.mesh.rotation.y=-i.yaw,i.mesh.rotation.x=-i.speed/W.BOAT_SPEED*.06,n.ent.pos.x=i.pos.x,n.ent.pos.y=i.pos.y+.35,n.ent.pos.z=i.pos.z,n.ent.vel.x=n.ent.vel.y=n.ent.vel.z=0}}serialize(){return this.boats.map(t=>[t.pos.x,t.pos.y,t.pos.z])}deserialize(t){if(t)for(const[e,n,i]of t)this.place(e,n,i)}}const gg=4,_g=40,xg=1.2;class vg{constructor(){this.queue=[],this.rising=[],this.acc=0,this.world=null,this.onFill=null}setWorld(t){this.world!==t&&(this.world=t,this.queue=[],this.rising=[])}isWater(t){return t===T.WATER||t===T.WATER_FLOW}fluidNeighbor(t,e,n){const i=this.world,r=i.get(t,e+1,n);if(this.isWater(r))return T.WATER;if(r===T.LAVA)return T.LAVA;for(const[o,a]of[[1,0],[-1,0],[0,1],[0,-1]]){const l=i.get(t+o,e,n+a);if(this.isWater(l))return T.WATER;if(l===T.LAVA)return T.LAVA}return 0}notifyRemoved(t,e,n){this.world&&this.fluidNeighbor(t,e,n)&&this.queue.push({x:t,y:e,z:n,depth:0})}tick(t){if(this.world){if(this.queue.length){for(this.acc+=t*_g;this.acc>=1&&this.queue.length>0;){this.acc-=1;const{x:e,y:n,z:i,depth:r}=this.queue.shift(),o=this.world;if(o.get(e,n,i)!==T.AIR)continue;const a=this.fluidNeighbor(e,n,i);if(!a)continue;const c=this.isWater(o.get(e,n+1,i))||o.get(e,n+1,i)===T.LAVA?0:r;if(a===T.WATER?(o.set(e,n,i,T.WATER_FLOW,!0),this.rising.push({x:e,y:n,z:i,t:xg})):o.set(e,n,i,a,!0),this.onFill&&this.onFill(e,n,i,a),o.get(e,n-1,i)===T.AIR&&this.queue.push({x:e,y:n-1,z:i,depth:0}),c<gg)for(const[f,d]of[[1,0],[-1,0],[0,1],[0,-1]])o.get(e+f,n,i+d)===T.AIR&&this.queue.push({x:e+f,y:n,z:i+d,depth:c+1})}this.queue.length>4e3&&(this.queue.length=4e3)}if(this.rising.length){for(const e of this.rising)e.t-=t,e.t<=0&&this.world.get(e.x,e.y,e.z)===T.WATER_FLOW&&this.world.set(e.x,e.y,e.z,T.WATER,!0);this.rising=this.rising.filter(e=>e.t>0)}}}}const Mg=320;class yg{constructor(t){this.scene=t,this.pool=[],this.active=[],this.rings=[],this.shakeAmp=0;const e=new te(1,1,1);for(let i=0;i<Mg;i++){const r=new Yt(e,new Ce({color:16777215,transparent:!0}));r.visible=!1,t.add(r),this.pool.push(r)}this.flashEl=document.createElement("div"),this.flashEl.style.cssText="position:fixed;inset:0;pointer-events:none;background:#fff;opacity:0;z-index:30",document.body.appendChild(this.flashEl),this.codeT=0,this.codeBlocks=[],this.glyphTexs=[];const n="ABCDEFXYZ0123456789";for(let i=0;i<14;i++){const r=document.createElement("canvas");r.width=r.height=32;const o=r.getContext("2d");o.font="bold 24px monospace",o.textAlign="center",o.textBaseline="middle";const a=n[Math.floor(Math.random()*n.length)];o.fillStyle="rgba(47,158,47,0.5)",o.fillText(a,16,17),o.fillStyle="#7dff7d",o.fillText(a,16,16);const l=new wn(r);this.glyphTexs.push(l)}this.glyphs=[];for(let i=0;i<18;i++){const r=new hi(new Hn({map:this.glyphTexs[i%this.glyphTexs.length],transparent:!0,depthWrite:!1,blending:rr}));r.scale.set(.34,.34,1),r.visible=!1,t.add(r),this.glyphs.push({sprite:r,swapT:Math.random()*2})}}setCodeBlocks(t){this.codeBlocks=t.slice(0,6)}updateCodeAura(t){this.codeT+=t;for(let e=0;e<this.glyphs.length;e++){const n=this.glyphs[e],i=Math.floor(e/3),r=e%3,o=this.codeBlocks[i];if(!o){n.sprite.visible=!1;continue}n.sprite.visible=!0;const a=this.codeT*.9+r*2.09+i*1.3;n.sprite.position.set(o[0]+.5+Math.cos(a)*.85,o[1]+.5+Math.sin(this.codeT*1.5+r*2+i)*.3,o[2]+.5+Math.sin(a)*.85),n.swapT-=t,n.swapT<=0&&(n.swapT=.5+Math.random()*1.5,n.sprite.material.map=this.glyphTexs[Math.floor(Math.random()*this.glyphTexs.length)])}}spawnOne(t,e,n,{life:i=.8,size:r=.16,gravity:o=14,drag:a=0,additive:l=!1,fade:c=!0}={}){const f=this.pool.pop();f&&(f.visible=!0,f.position.copy(t),f.scale.setScalar(r),f.material.color.set(n),f.material.opacity=1,f.material.blending=l?rr:ai,f.rotation.set(Math.random()*3,Math.random()*3,0),this.active.push({m:f,vel:e.clone(),life:i,maxLife:i,gravity:o,drag:a,fade:c,size:r}))}burst(t,e,{count:n=12,speed:i=5,up:r=3,...o}={}){const a=Array.isArray(e)?e:[e];for(let l=0;l<n;l++){const c=Math.random()*Math.PI*2,f=new P(Math.cos(c)*i*(.3+Math.random()*.7),r*(.4+Math.random()*.8),Math.sin(c)*i*(.3+Math.random()*.7));this.spawnOne(t,f,a[Math.floor(Math.random()*a.length)],o)}}cone(t,e,n,{count:i=16,speed:r=9,spread:o=.35,...a}={}){const l=Array.isArray(n)?n:[n];for(let c=0;c<i;c++){const f=e.clone().multiplyScalar(r*(.5+Math.random()*.6));f.x+=(Math.random()-.5)*r*o,f.y+=(Math.random()-.5)*r*o*.7,f.z+=(Math.random()-.5)*r*o,this.spawnOne(t,f,l[Math.floor(Math.random()*l.length)],{gravity:-1,life:.45+Math.random()*.25,additive:!0,...a})}}ring(t,e,{maxR:n=5,life:i=.5,y:r=.1}={}){const o=new no(.8,1,24),a=new Yt(o,new Ce({color:e,transparent:!0,opacity:.9,side:an,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.set(t.x,t.y+r,t.z),this.scene.add(a),this.rings.push({m:a,t:0,life:i,maxR:n})}flash(t=260){this.flashEl.style.transition="none",this.flashEl.style.opacity="0.85",setTimeout(()=>{this.flashEl.style.transition=`opacity ${t}ms`,this.flashEl.style.opacity="0"},40)}shake(t){this.shakeAmp=Math.max(this.shakeAmp,t)}clear(){for(const t of this.active)t.m.visible=!1,this.pool.push(t.m);this.active=[];for(const t of this.rings)this.scene.remove(t.m),t.m.geometry.dispose(),t.m.material.dispose();this.rings=[]}update(t){this.updateCodeAura(t),this.shakeAmp=Math.max(0,this.shakeAmp-t*1.6);for(const e of this.active){if(e.life-=t,e.life<=0){e.m.visible=!1,this.pool.push(e.m),e.dead=!0;continue}e.vel.y-=e.gravity*t,e.drag&&e.vel.multiplyScalar(Math.max(0,1-e.drag*t)),e.m.position.addScaledVector(e.vel,t),e.m.rotation.x+=t*3,e.m.rotation.y+=t*4;const n=e.life/e.maxLife;e.fade&&(e.m.material.opacity=n,e.m.scale.setScalar(e.size*(.4+n*.6)))}this.active=this.active.filter(e=>!e.dead);for(const e of this.rings){e.t+=t;const n=e.t/e.life;if(n>=1){this.scene.remove(e.m),e.m.geometry.dispose(),e.m.material.dispose(),e.dead=!0;continue}const i=1+n*e.maxR;e.m.scale.set(i,i,1),e.m.material.opacity=.9*(1-n)}this.rings=this.rings.filter(e=>!e.dead)}applyShake(t){this.shakeAmp<=.001||(t.position.x+=(Math.random()-.5)*this.shakeAmp,t.position.y+=(Math.random()-.5)*this.shakeAmp,t.position.z+=(Math.random()-.5)*this.shakeAmp)}}const Sg={1:["#5cb544","#7a5538"],2:["#7a5538","#8a6142"],3:["#8f6b3d"],4:["#3f8f33"],5:["#8d8d8d","#797979"],6:["#9a9a9a"],7:["#39c8c4","#8d8d8d"],8:["#e8b53a","#f2c95c"],9:["#101810","#2f9e2f"],14:["#e2d29a"],16:["#3a2c26","#e85f1a"]};function wl(s){return Sg[s]||["#9a8a72","#7a6a55"]}function Eg(s,t){const e=Y.TAME_LAND;return Math.hypot((s-e.x)/e.rx,(t-e.z)/e.rz)<=1}function bg(s){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");e.textAlign="center",e.font="bold 34px sans-serif",e.strokeStyle="rgba(0,0,0,0.8)",e.lineWidth=6,e.fillStyle="#7dff9a",e.strokeText(`🐾 ${s}`,128,42),e.fillText(`🐾 ${s}`,128,42);const n=new hi(new Hn({map:new wn(t),depthTest:!1}));return n.scale.set(1.7,.45,1),n}class Tg{constructor(t,e,n,i){this.getRoot=t,this.ctx=e,this.player=n,this.monsters=i,this.roster=[],this.activeIndex=-1,this.entity=null,this.restTimer=0,this.onCapture=null}tryCapture(t){if(t.isBoss||!Eg(t.ent.pos.x,t.ent.pos.z)||this.roster.length>=W.PET_CAP)return!1;const e={type:t.type,name:t.def.name,maxHp:Math.round(t.maxHp*W.PET_HP_RATIO),hp:Math.round(t.maxHp*W.PET_HP_RATIO),atk:Math.round(t.atk*W.PET_ATK_RATIO),mountable:!!t.def.mountable};return this.roster.push(e),this.onCapture&&this.onCapture(e),!0}deploy(t){if(this.dismiss(),t<0||t>=this.roster.length)return;this.activeIndex=t;const e=this.roster[t],n=Ec[e.type],i=this.player.ent.pos;this.entity={pet:e,def:n,ent:{pos:{x:i.x+1.5,y:i.y+.5,z:i.z},vel:{x:0,y:0,z:0},w:n.w,h:n.h,onGround:!1,noGravity:n.medium!=="ground"},attackT:0,group:n.build()};const r=bg(e.name);r.position.set(0,n.h+.4,0),this.entity.group.add(r),this.getRoot().add(this.entity.group)}dismiss(){this.entity&&(this.entity.group.parent&&this.entity.group.parent.remove(this.entity.group),this.entity=null),this.activeIndex=-1,this.player.mount=null}activePet(){return this.activeIndex>=0?this.roster[this.activeIndex]:null}toggleMount(){const t=this.activePet();return!t||!t.mountable||!this.entity?!1:(this.player.mount=this.player.mount?null:t,!0)}update(t){if(!this.entity)return;const e=this.entity,n=this.player,i=e.pet;if(i.hp<=0){this.restTimer+=t,e.group.visible=!1,this.restTimer>30&&(i.hp=i.maxHp,this.restTimer=0,e.group.visible=!0);return}if(n.mount===i){e.ent.pos.x=n.ent.pos.x,e.ent.pos.y=n.ent.pos.y-.2,e.ent.pos.z=n.ent.pos.z,e.group.position.set(e.ent.pos.x,e.ent.pos.y,e.ent.pos.z),e.group.rotation.y=n.model.group.rotation.y;return}const r=n.ent.pos.x-e.ent.pos.x,o=n.ent.pos.z-e.ent.pos.z,a=Math.hypot(r,o);let l=null,c=8;for(const u of this.monsters.list){if(u.dead||u.state!=="chase")continue;const g=Math.hypot(u.ent.pos.x-e.ent.pos.x,u.ent.pos.z-e.ent.pos.z);g<c&&(c=g,l=u)}let f=0,d=0;if(l){const u=c||1;f=(l.ent.pos.x-e.ent.pos.x)/u,d=(l.ent.pos.z-e.ent.pos.z)/u,c<e.def.w/2+1.4&&(e.attackT-=t,e.attackT<=0&&(e.attackT=1.1,this.monsters.hitMonster(l,i.atk,e.ent.pos)),f=0,d=0)}else a>3.5&&(f=r/a,d=o/a);a>24&&(e.ent.pos.x=n.ent.pos.x+1.5,e.ent.pos.y=n.ent.pos.y+.5,e.ent.pos.z=n.ent.pos.z);const h=e.def.speed;if(e.ent.vel.x=f*h,e.ent.vel.z=d*h,e.ent.noGravity){const u=n.ent.pos.y+1;e.ent.vel.y=oi.clamp((u-e.ent.pos.y)*1.5,-2.5,2.5)}else if(e.ent.onGround&&(f!==0||d!==0)){const u=Math.floor(e.ent.pos.x+f),g=Math.floor(e.ent.pos.z+d),_=Math.floor(e.ent.pos.y);this.ctx.world.isSolid(u,_,g)&&!this.ctx.world.isSolid(u,_+1,g)&&(e.ent.vel.y=8)}ro(this.ctx.world,e.ent,t),e.ent.pos.y<-5&&(e.ent.pos.x=n.ent.pos.x,e.ent.pos.y=n.ent.pos.y+1,e.ent.pos.z=n.ent.pos.z),e.group.position.set(e.ent.pos.x,e.ent.pos.y,e.ent.pos.z),(f||d)&&(e.group.rotation.y=Math.atan2(-f,-d)+Math.PI)}serialize(){return{roster:this.roster,activeIndex:this.activeIndex}}deserialize(t){t&&(this.roster=t.roster||[],t.activeIndex>=0&&t.activeIndex<this.roster.length&&this.deploy(t.activeIndex))}}const is=[{id:0,title:"去中央高塔见作者！",lines:["（有个声音在你脑海里响起……）","新来的变形金刚，你好呀！我是这个世界的作者！","来初始城镇正中央的高塔找我吧，塔门朝南开着！"],progress:()=>"走到高塔里，按 E 和作者说话"},{id:1,title:"练习：挖 5 块泥巴，再放 3 块方块",lines:["欢迎来到我的作者之塔！我是作者，这个世界是我创造的，嘿嘿。","先教你最基本的本领：对准方块【按住左键】就能挖掉它！","这个世界最软的是泥巴，最硬的是代码——代码可是我写的，是一种黑色的矿石哦。","去外面挖 5 块泥巴（草地下面就是），再【按右键】把方块放回去 3 块试试！"],progress:s=>`挖泥巴 ${Math.min(s.mine,5)}/5 · 放方块 ${Math.min(s.place,3)}/3`},{id:2,title:"打败 3 只怪物，收集 5 个变形齿轮",lines:["干得漂亮！你已经会挖会放了。","塔外的平原上有怪物出没——注意看它们头顶的标签，那是我给怪物的分类！","黑色的蜘蛛是【爆炸类】，靠近你会自爆，看到它闪白光就赶紧跑开！","打败 3 只怪物，捡 5 个变形齿轮回来。在这个世界，等级是由变形齿轮决定的！"],progress:s=>`打怪 ${Math.min(s.kill,3)}/3 · 齿轮 ${Math.min(s.gearsGained,5)}/5`},{id:3,title:"宝座下一百格：找到矿石变形齿轮！",lines:["你捡到齿轮的时候发现了吗？每个变形齿轮上都有标记——按 T 就能变成标记对应的形态！","现在告诉你一个大秘密：传说中有八个神秘变形齿轮，是全世界最稀有的神器！","第一个就藏在我的宝座正下方一百格的箱子里！","挖开宝座前的那块金砖，一直往下挖！别怕，你摔不坏的，我保证。"],progress:(s,t)=>{const e=t.player.ent.pos.y;if(t.player.hasGear("ore"))return"打开箱子！";const n=Math.max(0,Math.ceil(e-t.oreChestY));return e<t.towerGround-2?`还差 ${n} 格！继续往下挖！`:"挖开宝座前的金砖，垂直往下！"}},{id:4,title:"巨石阵下一百格：打碎第三块诡异木板！",lines:["矿石变形齿轮到手！按 T 可以变成矿石装甲形态，防御超高！","第二个神秘齿轮在城镇东边平原的巨石阵！","从巨石阵正中间往下挖一百格，会看到诡异的木板……","记住我的话：沿着木板挖，数到【第三块】，打碎它，你就会掉下去。别怕，掉下去就对了！"],progress:(s,t)=>{const e=t.player.ent.pos.y;if(t.player.hasGear("earth"))return"打开箱子！";if(s.planksBroken>0)return`已打碎诡异木板 ${s.planksBroken}/3`;const n=Math.max(0,Math.ceil(e-t.plank1Y));return Math.hypot(t.player.ent.pos.x-Y.HENGE_C.x,t.player.ent.pos.z-Y.HENGE_C.z)<20?e<t.hengeGround-2?`还差 ${n} 格遇到第一块木板！`:"从巨石阵正中间往下挖！":"去东边平原的巨石阵"}},{id:5,title:"爬上刷怪塔，打败第 10 层的黑蛛王！",lines:["大地变形齿轮到手！它的标记是一只跺脚的大脚丫——按 Q 可以跺脚引发地震！","你已经很强了，去试试真正的挑战吧！","城镇西边的刷怪塔，从一级怪物一直排到最强 boss——一共有一千层！","塔里有我做的传送台，站上去选楼层就行。先打到第 10 层，会会小 boss 黑蛛王！"],progress:s=>s.floor>0?`当前第 ${s.floor} 层 → 目标第 10 层`:"去西边刷怪塔，站上大厅的金色传送台"},{id:6,title:"挑战：第 20 层的白骨神射！",lines:["黑蛛王被你打败啦！你真是了不起的变形金刚！","第 20 层的白骨神射会双连射，躲开它的箭！","打败它，第一章就通关了！","（悄悄告诉你：第 1000 层住着地狱魔龙，连我打半天才掉一滴血……以后再说吧！）"],progress:s=>s.floor>0?`当前第 ${s.floor} 层 → 目标第 20 层`:"在传送台选择继续挑战！"},{id:7,title:"第一章 · 完！",lines:["你打败了白骨神射！第一章通关！！","这个世界还有六个神秘变形齿轮、暗黑地狱、终极之地、收服大陆……都在等你！","休息一下，冒险马上继续！"],progress:()=>"回作者之塔找作者，开启第二章！"},{id:8,title:"第二章开始！回塔见作者",lines:["世界变大了！！海变成了真正的海——你可以游泳了！","不过要小心：普通情况下只能涉水十分钟，泡太久会受伤的！","按 B 打开你的新背包看看：物品、齿轮装备、合成、宠物，四个页面！","对了，按 V 还能切换视角哦。来塔里找我，告诉你接下来去哪！"],progress:()=>"按 E 和作者说话（作者之塔）"},{id:9,title:"出海！去南边作者小岛的木屋",lines:["南边的海上有一座作者小岛，那是我隐居的地方！","岛上的木屋是我的第二座神殿，我在那开了个小店，卖水果、海货、床、还有船！","你可以游过去（记住：十分钟！），也可以合成一艘船（背包合成页，木头×5）开过去！","船开起来可比游泳快多了。到了小岛按 E 跟我的木屋分身聊聊！"],progress:(s,t)=>Math.hypot(t.player.ent.pos.x-Y.HUT.x,t.player.ent.pos.z-Y.HUT.z)<30?"快到了！找到木屋按 E":"往南出海！（B 背包可以合成船）"},{id:10,title:"登陆收服大陆，收服第一只宠物！",lines:["东边那块大大的陆地就是收服大陆！","在收服大陆上，被你击败的怪物会自动变成你的宠物！","记住规律：击败的怪物越强，得到的宠物就越强！","去收服一只吧！背包的宠物页可以让它出战，蟹类还能骑！"],progress:(s,t)=>`已收服宠物 ${t.petCount()}/1`},{id:11,title:"丛林神殿→终极之地：夺取黑暗齿轮！",lines:["收服大陆的丛林深处有一座神殿，正中央的传送门通往【终极之地】！","走进去就会自动启动。里头有很多石柱，上面悬空飘着符号……","那些符号对应着守卫怪物——怪物靠符号回血！先打碎符号，再打怪！","黑暗变形齿轮就在正中央。小心：周围一片漆黑，往前乱跑会掉进虚空！"],progress:(s,t)=>t.player.hasGear("dark")?"拿到了！":"丛林神殿在收服大陆正中，先打碎符号再打怪！"},{id:12,title:"金子开门！地狱树顶的森林齿轮",lines:["接下来是【暗黑地狱】！传送门就在初始城镇南边的沙滩上。","开门方法：往传送门顶部放一块金子，门就会自动开启！","注意：无论放多少金子都会全部消耗，而且每次开门只够一人进入返回一次！","地狱里岩浆湖圈的正中央有一棵大树——森林变形齿轮就在树顶！走岩浆石，别碰岩浆！"],progress:(s,t)=>t.player.hasGear("forest")?"拿到了！":"带上金子去城镇南滩的大门（挖金矿或用背包里的金子）"},{id:13,title:"勇敢者试炼：火海正中央的烈火齿轮",lines:["还是在暗黑地狱：岩浆湖圈旁边有一片火海！","碰到火会受伤……但是我告诉你一个秘密：","只要一直走到火海的正中央，火就会消失，还会恢复所有生命值！","只有勇敢的人才能得到烈火变形齿轮。你敢吗？"],progress:(s,t)=>t.player.hasGear("fire")?"拿到了！勇敢的孩子！":"火海在岩浆湖圈东边，勇敢地走到正中央！"},{id:14,title:"地下之城：驱动核心旁的光明齿轮",lines:["该去见见地下族人了！初始城镇的地下藏着一座地下之城——像地球的地核一样！","入口在城镇西北的平原上，有个石砖框的洞口，沿坡道一直往下走。","城里有驱动核心——它驱动着整个世界，地下族人世世代代守护着它。","光明变形齿轮就在驱动核心边缘的箱子里。顺便替我看看第三座神殿！"],progress:(s,t)=>t.player.hasGear("light")?"拿到了！":"入口在城镇西北平原（石砖框洞口），下去找驱动核心"},{id:15,title:"挑战鲲鹏！喝下鹏之药水",lines:["接下来的两个齿轮都在深海。但泡水十分钟可不够……","深海的上空住着一只巨大的生物——鲲鹏！鲲是鱼、鹏是鸟，又是海洋又是天空！","打败它，它会掉落两样宝贝：鹏之药水和鲲鹏之翼！","喝下鹏之药水，你就能在水里行动自如——不限时间！深海在作者小岛的东南方向。"],progress:(s,t)=>t.player.pengPotion?"喝下了鹏之药水！":"去深海上空挑战鲲鹏（它在很高的天上盘旋）"},{id:16,title:"海底宫殿：打败海底守卫者！",lines:["潮涌变形齿轮藏在海洋最深处的海底宫殿里！","守着它的是海底守卫者——外表像鹦鹉螺但大好几倍，全身带刺，","下半身像鱿鱼一样有很多触手，眼睛长在铠甲旁边……我见过一次，好家伙。","潜到深海盆地的最底下，找到宫殿，打败它！"],progress:(s,t)=>t.player.hasGear("tide")?"拿到了！":"潜入深海盆地最底部的宫殿（就在鲲鹏空域下方）"},{id:17,title:"禁地：取回神秘变形齿轮！",lines:["最后一个，也是最强的一个——神秘变形齿轮！","从作者小岛一直往南游，游到世界的边界，那里是禁地。","禁地的守卫……差点把我干死。正面打赢它很难很难。","但是宝箱在禁地周围——聪明的变形金刚，可以想办法绕过它拿宝箱！"],progress:(s,t)=>t.player.hasGear("mystery")?"拿到了！！":"作者小岛往南到世界边界，宝箱在禁地周围（可以智取！）"},{id:18,title:"大结局：回到驱动核心旁的作者神殿",lines:["八个神秘变形齿轮……你居然真的集齐了！！","还记得地下之城驱动核心旁边的那座神殿吗？那是我的第三座神殿。","回到那里去。这个世界最后的秘密，在那里等你。"],progress:(s,t)=>`神秘齿轮 ${t.player.mysteryGears.length}/8 · 去地下之城的作者神殿`},{id:19,title:"第二章 · 完！自由探索！",lines:["（大结局剧情已在神殿播放）","接下来就是你的自由时间啦！","千层塔在等你——第 1000 层的地狱魔龙，打半天才掉一滴血的那位！","收服更强的宠物、合成代码神装、盖你自己的城堡……这个世界都是你的！"],progress:()=>"自由探索：千层塔 1000 层 · 收服宠物 · 代码神装"}];class Ag{constructor(t){this.ctx=t,this.index=0,this.counters={mine:0,place:0,kill:0,gearsGained:0,planksBroken:0,floor:0},this.started=!1}current(){return is[this.index]}start(){this.started||(this.started=!0,this.ctx.dialog.show(is[this.index].lines))}advance(){if(this.index>=is.length-1)return;this.index++;const t=is[this.index];this.ctx.hud.toast(`📜 新任务：${t.title}`),this.ctx.dialog.show(t.lines),this.ctx.save&&this.ctx.save(),this.checkRetro()}checkRetro(){const t=this.ctx.player,e=this.ctx.maxCleared?this.ctx.maxCleared():0;if(this.index===3&&t.hasGear("ore"))return this.advance();if(this.index===4&&t.hasGear("earth"))return this.advance();if(this.index===5&&e>=10)return this.advance();if(this.index===6&&e>=20)return this.advance();if(this.index===10&&this.ctx.petCount()>=1)return this.advance();if(this.index===11&&t.hasGear("dark"))return this.advance();if(this.index===12&&t.hasGear("forest"))return this.advance();if(this.index===13&&t.hasGear("fire"))return this.advance();if(this.index===14&&t.hasGear("light"))return this.advance();if(this.index===15&&t.pengPotion)return this.advance();if(this.index===16&&t.hasGear("tide"))return this.advance();if(this.index===17&&t.hasGear("mystery"))return this.advance();if(this.index===18&&this.ctx.flags&&this.ctx.flags.endingSeen)return this.advance()}onTalk(){return this.index===0||this.index===8?(this.advance(),!0):!1}onHutTalk(){return this.index===9?(this.advance(),!0):!1}onMined(t){this.index===1&&t===T.MUD&&(this.counters.mine++,this.checkQ1()),t===T.PLANK&&this.index===4&&this.counters.planksBroken<3&&(this.counters.planksBroken++,this.counters.planksBroken===3?this.ctx.hud.toast("第三块木板碎了！掉下去吧！"):this.ctx.hud.toast(`诡异木板 ${this.counters.planksBroken}/3`)),t===T.GOLD&&this.index===3&&this.ctx.hud.toast("金砖挖开了！一直往下挖！")}onPlaced(){this.index===1&&(this.counters.place++,this.checkQ1())}checkQ1(){this.index===1&&this.counters.mine>=5&&this.counters.place>=3&&this.advance()}onKill(){this.index===2&&(this.counters.kill++,this.checkQ2())}onGears(t){this.index===2&&(this.counters.gearsGained+=t,this.checkQ2())}checkQ2(){this.index===2&&this.counters.kill>=3&&this.counters.gearsGained>=5&&this.advance()}onGearGot(t){if({ore:3,earth:4,dark:11,forest:12,fire:13,light:14,tide:16,mystery:17}[t]===this.index&&this.advance(),this.ctx.player.mysteryGears.length===8&&this.index<18){for(;this.index<18;)this.index++;const n=is[this.index];this.ctx.hud.toast(`📜 新任务：${n.title}`),this.ctx.dialog.show(n.lines)}}onPetCaptured(){this.index===10&&this.advance()}onPengPotion(){this.index===15&&this.advance()}onFloorCleared(t){t>=10&&this.index===5&&this.advance(),t>=20&&this.index===6&&(this.advance(),this.ctx.onChapter1Complete&&this.ctx.onChapter1Complete())}onEnding(){this.index===18&&(this.ctx.flags.endingSeen=!0,this.advance())}setFloor(t){this.counters.floor=t}hudText(){const t=this.current();return{title:t.title,sub:t.progress(this.counters,this.ctx)}}serialize(){return{index:this.index,counters:this.counters}}deserialize(t){t&&(this.index=t.index||0,Object.assign(this.counters,t.counters||{}),this.started=this.index>0)}}class wg{constructor(){this.chests=new Map,this.opened=new Set,this.onOpen=null,this.onEmpty=null}register(t,e){this.chests.set(t.join(","),{kind:e})}open(t,e,n){const i=this.chests.get(`${t},${e},${n}`);if(!i){this.onEmpty&&this.onEmpty();return}if(this.opened.has(i.kind)){this.onEmpty&&this.onEmpty();return}this.opened.add(i.kind),this.onOpen&&this.onOpen(i.kind)}serialize(){return[...this.opened]}deserialize(t){if(t)for(const e of t)this.opened.add(e)}}const Rg={ore:{name:"矿石变形齿轮",desc:"全身镀上矿石装甲，防御大增！按 T 变形！"},earth:{name:"大地变形齿轮",desc:"跺脚引发地震！按 Q 释放！"},tide:{name:"潮涌变形齿轮",desc:"解锁潜水形态！水中飞快、不怕泡水！按 T 变形！"},light:{name:"光明变形齿轮",desc:"净化邪恶类怪物！按 X 释放致盲闪光！"},forest:{name:"森林变形齿轮",desc:"藤蔓的生命力！从此缓慢自我修复！"},fire:{name:"烈火变形齿轮",desc:"勇敢者的火焰！按 C 喷射烈焰！"},dark:{name:"黑暗变形齿轮",desc:"影子的力量！按 Z 隐身！"},mystery:{name:"神秘变形齿轮",desc:"最强神器！八大能力全开，解锁全能形态！！"}};function Cg(s){if(s>=W.TOWER_FLOORS)return{count:1,hp:W.DRAGON_HP,atk:W.DRAGON_ATK,gears:999,dragon:!0};let t,e,n,i;s<=20?(t=3,e=15+6*s,n=4+1.5*s,i=2):s<=100?(t=Math.min(6,3+Math.floor(s/10)-1),e=135+(s-20)*12,n=34+(s-20)*.5,i=2):s<=500?(t=6,e=1095+(s-100)*20,n=Math.min(90,74+(s-100)*.08),i=3):(t=8,e=9095+(s-500)*25,n=90,i=4);const r=s%10===0;return{count:r?t+1:t,hp:Math.round(e),atk:Math.round(n),gears:i,boss:r}}function Pg(s){return s<=100?["brute","spider","archer"]:s<=300?["brute","spider","archer","crab","bird"]:s<=600?["brute","archer","crab","demon"]:["demon","archer","runeguard","crab"]}function Lg(s){if(s===10)return{type:"spider",name:"黑蛛王",scale:1.6};if(s===20)return{type:"archer",name:"白骨神射",scale:1.5};const t=[{type:"brute",name:"巨岩武士",scale:1.8},{type:"spider",name:"爆裂蛛后",scale:1.9},{type:"archer",name:"骨王神箭",scale:1.7},{type:"demon",name:"恶魔队长",scale:1.8}];return t[Math.floor(s/10)%t.length]}class Dg{constructor(t,e,n){this.dims=t,this.monsters=e,this.hud=n,this.maxCleared=0,this.dragonKilled=!1,this.currentFloor=0,this.battle=null,this.onFloorCleared=null}enterFloor(t){if(t=Math.max(1,Math.min(W.TOWER_FLOORS,t)),this.dims.ensure("arena"),this.dims.active==="arena"){const[o,a,l]=ye.spawn;this.monsters.clearAll();const c=this.monsters.player;c.ent.pos.x=o,c.ent.pos.y=a,c.ent.pos.z=l,c.ent.vel.x=c.ent.vel.y=c.ent.vel.z=0}else this.dims.switchTo("arena",ye.spawn);const e=this.dims.get("arena").world;for(const[o,a,l]of ye.nextPortalCells)e.set(o,a,l,T.PORTAL_FRAME,!1);this.currentFloor=t,this.battle=[];const n=Cg(t);if(n.dragon){const[o,a,l]=ye.bossPos,c=this.monsters.spawn("helldragon",o,a+2,l,{boss:!0,bossName:"地狱魔龙",hp:n.hp,atk:n.atk,gears:n.gears,towerFloor:t,tag:"arena"});this.battle.push(c),this.hud.toast("🐉 第 1000 层！地狱魔龙降临！！（作者打半天才掉一滴血的那位）");return}const i=Pg(t),r=ye.spawnPoints;for(let o=0;o<n.count;o++){const a=n.boss&&o===0,l=a?Lg(t):null,[c,f,d]=r[o%r.length],h=this.monsters.spawn(l?l.type:i[Math.floor(Math.random()*i.length)],c,f+.1,d,{floor:Math.min(t,20),towerFloor:t,tag:"arena",boss:a,bossName:l==null?void 0:l.name,scale:l==null?void 0:l.scale,hp:a?n.hp*6:n.hp,atk:a?Math.round(n.atk*1.5):n.atk,gears:a?5+Math.floor(t/2):n.gears});this.battle.push(h)}this.hud.toast(n.boss?`⚠️ 第 ${t} 层：小 boss 层！`:`⚔️ 第 ${t} 层：怪物出现！`)}update(){if(this.dims.active!=="arena"||!this.battle)return;if(this.battle.length&&this.battle.every(e=>e.dead)){const e=this.currentFloor;if(this.battle=[],this.maxCleared=Math.max(this.maxCleared,e),e>=W.TOWER_FLOORS)this.dragonKilled=!0,this.hud.banner("🏆 你打败了地狱魔龙！！","千层塔登顶！你是这个世界最了不起的变形金刚！");else{this.hud.toast(`✅ 第 ${e} 层清空！走进北边的门挑战下一层`);const n=this.dims.get("arena").world;for(const[i,r,o]of ye.nextPortalCells)n.set(i,r,o,T.PORTAL,!1)}this.onFloorCleared&&this.onFloorCleared(e)}const t=this.battle.find(e=>e.isBoss&&!e.dead);t?this.hud.showBoss(t.bossName,t.hp/t.maxHp):this.hud.hideBoss()}serialize(){return{maxCleared:this.maxCleared,dragonKilled:this.dragonKilled}}deserialize(t){t&&(this.maxCleared=t.maxCleared||0,this.dragonKilled=!!t.dragonKilled)}}class Ig{constructor(t,e,n,i){this.dims=t,this.player=e,this.hud=n,this.flags=i,this.cooldown=0,this.onHellEnter=null,this.onVoidEnter=null,this.towerNextFloor=null,this.toHall=null}onBlockPlaced(t,e,n,i){if(this.dims.active!=="main"||t!==T.GOLD||!dt.hellPortal||!dt.hellPortal.topCells.some(([l,c,f])=>l===e&&c===n&&f===i))return;const o=this.dims.get("main").world;let a=0;for(const[l,c,f]of dt.hellPortal.topCells)o.get(l,c,f)===T.GOLD&&(o.set(l,c,f,T.AIR),a++);for(const[l,c,f]of dt.hellPortal.innerCells)o.set(l,c,f,T.PORTAL,!1);this.flags.portalCharged=!0,this.hud.toast(`🌀 传送门开启！消耗了 ${a} 块金子（放多少都会全部消耗哦）`)}chargeOff(){if(this.dims.active!=="main")return;const t=this.dims.get("main").world;if(dt.hellPortal)for(const[e,n,i]of dt.hellPortal.innerCells)t.set(e,n,i,T.AIR,!1);this.flags.portalCharged=!1}inCells(t,e){const n=Math.floor(e.x),i=Math.floor(e.y+.5),r=Math.floor(e.z);return t.some(([o,a,l])=>o===n&&(a===i||a===i+1)&&l===r)}update(t){if(this.cooldown=Math.max(0,this.cooldown-t),this.cooldown>0)return;const e=this.player.ent.pos,n=this.dims.active;if(n==="main"){if(this.flags.portalCharged&&dt.hellPortal&&this.inCells(dt.hellPortal.innerCells,e)){this.cooldown=1.5,this.dims.ensure("hell"),this.dims.switchTo("hell",he.spawn),this.hud.toast("🔥 进入暗黑地狱！（传送门只支持一人次进入返回）"),this.onHellEnter&&this.onHellEnter();return}if(dt.templePortalCells.length&&this.inCells(dt.templePortalCells.map(([i,r,o])=>[i,r+1,o]),e)){this.cooldown=1.5,this.dims.ensure("void"),this.dims.switchTo("void",oe.spawn),this.hud.toast("🌌 传送门自动启动……欢迎来到终极之地！小心虚空！"),this.onVoidEnter&&this.onVoidEnter();return}}else if(n==="hell"){if(this.inCells(he.returnPortalCells,e)){this.cooldown=1.5;const[i,r,o]=dt.hellPortal.base;this.dims.switchTo("main",[i+.5,r+1,o+2.5]),this.chargeOff(),this.hud.toast("🌀 回到主世界。传送门已关闭（金子被消耗了）");return}}else if(n==="void"){if(this.inCells(oe.returnPortalCells,e)){this.cooldown=1.5;const i=dt.templePortalCells[4]||dt.templePortalCells[0];this.dims.switchTo("main",[i[0]+.5,i[1]+1,i[2]+3.5]),this.hud.toast("🌌 回到丛林神殿");return}}else if(n==="arena"){const i=this.dims.get("arena").world;if(this.inCells(ye.returnPortalCells,e)){this.cooldown=1.5,this.toHall&&this.toHall();return}const r=Math.floor(e.x),o=Math.floor(e.y+.5),a=Math.floor(e.z);ye.nextPortalCells.some(([l,c,f])=>l===r&&(c===o||c===o+1)&&f===a)&&i.get(...ye.nextPortalCells[0])===T.PORTAL&&(this.cooldown=1.5,this.towerNextFloor&&this.towerNextFloor())}}}const ra={zenith:new Dt(4034520),horizon:new Dt(11064558),hemi:1,sun:.75},Rl={zenith:new Dt(3814756),horizon:new Dt(16751198),hemi:.6,sun:.3},aa={zenith:new Dt(263694),horizon:new Dt(923686),hemi:.32,sun:.05},Cl={zenith:new Dt(4872844),horizon:new Dt(16760954),hemi:.7,sun:.4};function Pl(s,t,e){const n=document.createElement("canvas");n.width=n.height=128;const i=n.getContext("2d"),r=i.createRadialGradient(64,64,8,64,64,62);r.addColorStop(0,s),r.addColorStop(e,t),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(0,0,128,128);const o=new wn(n);return o.colorSpace=Ye,o}class Ng{constructor(t,e){this.scene=t,this.amb=e,this.time=.1,this.tmp=new Dt,this.tmp2=new Dt;const n=new io(340,20,12),i=n.attributes.position.count;n.setAttribute("color",new ve(new Float32Array(i*3),3)),this.dome=new Yt(n,new Ce({vertexColors:!0,side:Be,fog:!1,depthWrite:!1})),this.dome.renderOrder=-10,t.add(this.dome),this.sunSprite=new hi(new Hn({map:Pl("#fff8d8","rgba(255,215,94,0.9)",.35),fog:!1,depthWrite:!1,transparent:!0})),this.sunSprite.scale.set(56,56,1),this.sunSprite.renderOrder=-9,t.add(this.sunSprite),this.moonSprite=new hi(new Hn({map:Pl("#f4f6fa","rgba(190,205,230,0.85)",.45),fog:!1,depthWrite:!1,transparent:!0})),this.moonSprite.scale.set(34,34,1),this.moonSprite.renderOrder=-9,t.add(this.moonSprite);const r=[];for(let c=0;c<420;c++){const f=Math.random()*Math.PI*2,d=Math.acos(Math.random()),h=330;r.push(Math.cos(f)*Math.cos(d)*h,Math.sin(d)*h*.95+5,Math.sin(f)*Math.cos(d)*h)}this.stars=new Jm(new Ge().setAttribute("position",new ve(r,3)),new fc({color:14674175,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.stars.renderOrder=-8,t.add(this.stars),this.clouds=new Zt;const o=new Ce({color:16777215,transparent:!0,opacity:.5,depthWrite:!1});this.cloudMat=o,this.cloudList=[];let a=12345;const l=()=>(a=a*16807%2147483647,a/2147483647);for(let c=0;c<16;c++){const f=12+l()*18,d=8+l()*14,h=new Yt(new te(f,1.6,d),o);h.position.set(l()*W.SX,158+l()*18,l()*W.SZ),this.clouds.add(h),this.cloudList.push(h)}t.add(this.clouds)}isNight(){return this.time>=W.NIGHT_START&&this.time<W.NIGHT_END}sleep(){this.time=.02}palette(){const t=this.time;return t<.42?ra:t<.46?this.mix(ra,Rl,(t-.42)/.04):t<.52?this.mix(Rl,aa,(t-.46)/.06):t<.93?aa:t<.97?this.mix(aa,Cl,(t-.93)/.04):this.mix(Cl,ra,(t-.97)/.03)}update(t,e,n){if(this.dome.visible=e,this.sunSprite.visible=e,this.moonSprite.visible=e,this.stars.visible=e,this.clouds.visible=e,!e)return;this.time=(this.time+t/W.DAY_LENGTH)%1;const i=this.palette();this.scene.background.copy(i.horizon),this.amb.fog.color.copy(i.horizon),this.amb.hemi.intensity=i.hemi,this.amb.sun.intensity=i.sun,n&&this.dome.position.copy(n);const r=this.dome.geometry.attributes.color,o=this.dome.geometry.attributes.position;for(let _=0;_<o.count;_++){const m=oi.clamp(o.getY(_)/340,0,1),p=this.tmp.copy(i.horizon).lerp(this.tmp2.copy(i.zenith),Math.pow(m,.65));r.setXYZ(_,p.r,p.g,p.b)}r.needsUpdate=!0;const a=300,l=(_,m)=>{const p=m*Math.PI;_.position.set((n?n.x:0)+Math.cos(p)*a,(n?n.y:100)*0+100+Math.sin(p)*a*.75,(n?n.z:0)-60)},c=oi.clamp(this.time/.5,0,1),f=oi.clamp((this.time-.5)/.5,0,1);l(this.sunSprite,c),l(this.moonSprite,f),this.sunSprite.material.opacity=this.time<.5?1:0,this.moonSprite.material.opacity=this.time>=.48?1:0;const h=(this.time<.5?c:f)*Math.PI;this.amb.sun.position.set(Math.cos(h)*120,Math.max(20,Math.sin(h)*120),40);const u=this.time>=.48&&this.time<.97,g=u?.9:0;this.stars.material.opacity+=(g-this.stars.material.opacity)*Math.min(1,t*2),n&&this.stars.position.set(n.x,0,n.z),this.cloudMat.color.set(16777215).lerp(i.horizon,.4),this.cloudMat.opacity=u?.28:.5;for(const _ of this.cloudList)_.position.x+=t*1.1,_.position.x>W.SX+20&&(_.position.x=-20)}mix(t,e,n){return{zenith:t.zenith.clone().lerp(e.zenith,n),horizon:t.horizon.clone().lerp(e.horizon,n),hemi:t.hemi+(e.hemi-t.hemi)*n,sun:t.sun+(e.sun-t.sun)*n}}serialize(){return this.time}deserialize(t){typeof t=="number"&&(this.time=t)}}function Ug(s){try{localStorage.setItem(W.SAVE_KEY,JSON.stringify({version:3,...s}))}catch(t){console.warn("存档失败",t)}}function Og(){try{const s=localStorage.getItem(W.SAVE_KEY);if(!s)return null;const t=JSON.parse(s);return t.version!==3?null:t}catch(s){return console.warn("读档失败",s),null}}function bc(){var s;try{const t=localStorage.getItem(W.SAVE_KEY_V2);if(!t)return null;const e=JSON.parse(t);if(e.version!==2)return null;const n=((s=e.player)==null?void 0:s.mysteryGears)||[],i={version:3,migratedFromV2:!0,robotConfig:e.robotConfig,player:{...e.player,pos:null,waterTime:0},quests:e.quests||{index:0,counters:{}},tower2:e.tower2||{maxCleared:0,dragonKilled:!1},chests:["ore","earth","tide","light","mystery"].filter(r=>n.includes(r)),pets:e.pets||null,dayTime:e.dayTime??.1,flags:e.flags||{},edits:{main:[],hell:[],void:[]},boats:[]};return localStorage.setItem(W.SAVE_KEY,JSON.stringify(i)),localStorage.removeItem(W.SAVE_KEY_V2),i}catch(t){return console.warn("v2 迁移失败",t),null}}function Fg(){var s,t,e,n,i,r,o;try{const a=localStorage.getItem(W.SAVE_KEY_V1);if(!a)return null;const l=JSON.parse(a);if(l.version!==1)return null;const c=((s=l.player)==null?void 0:s.gears)||0,f={version:2,robotConfig:l.robotConfig,player:{pos:null,hp:9999,gears:c,totalGears:c,mysteryGears:((t=l.player)==null?void 0:t.mysteryGears)||[],equippedGears:((e=l.player)==null?void 0:e.mysteryGears)||[],form:"robot",inventory:((n=l.player)==null?void 0:n.inventory)||[],items:[],equipment:{sword:null,armor:null,wings:null},pengPotion:!1,waterTime:0},quests:{index:((i=l.quests)==null?void 0:i.index)>=7?8:((r=l.quests)==null?void 0:r.index)||0,counters:{}},tower2:{maxCleared:Math.max(...Object.keys(((o=l.tower)==null?void 0:o.cleared)||{}).map(Number),0),dragonKilled:!1},pets:null,dayTime:.1,flags:{}};return localStorage.setItem(W.SAVE_KEY_V2,JSON.stringify(f)),localStorage.removeItem(W.SAVE_KEY_V1),bc()}catch(a){return console.warn("v1 迁移失败",a),null}}function zg(){return!!localStorage.getItem(W.SAVE_KEY)||!!localStorage.getItem(W.SAVE_KEY_V2)||!!localStorage.getItem(W.SAVE_KEY_V1)}function Bg(){localStorage.removeItem(W.SAVE_KEY),localStorage.removeItem(W.SAVE_KEY_V2),localStorage.removeItem(W.SAVE_KEY_V1)}const kg={robot:"🤖 机器人",car:"🚗 小车",armor:"🛡️ 矿石装甲",dive:"🤿 潜水",super:"🌈 全能"},Gg={1:"#5cb544",2:"#8a6142",3:"#8f6b3d",4:"#3f8f33",5:"#8d8d8d",6:"#9a9a9a",7:"#39c8c4",8:"#e8b53a",9:"#1a2a1a",10:"#cfc4b2",11:"#a9793f",12:"#e8b53a",13:"#2b2b2f",14:"#e2d29a",15:"#2a6aa8",16:"#e85f1a",17:"#4a4a50",22:"#3a2c50",23:"#d8d0a8",26:"#3a8fa8",27:"#4a7a4a",29:"#2e2320",30:"#ffe89a",31:"#3a7ab8"};function Hg(s,t){const e=Math.min(255,Math.round(parseInt(s.slice(1,3),16)*t)),n=Math.min(255,Math.round(parseInt(s.slice(3,5),16)*t)),i=Math.min(255,Math.round(parseInt(s.slice(5,7),16)*t));return`rgb(${e},${n},${i})`}class Vg{constructor(t){this.atlas=t,this.camera=null;const e=document.createElement("div");e.className="hud",e.innerHTML=`
      <div class="hud-topleft">
        <div class="hp-wrap">
          <div class="hp-label"><span>❤ 生命</span><span class="hp-text"></span></div>
          <div class="hp-bar"><div class="hp-fill"></div></div>
        </div>
        <div class="stat-row">
          <div class="badge lv"></div>
          <div class="badge gear"></div>
          <div class="badge mystery" style="display:none"></div>
        </div>
        <div class="stat-row">
          <div class="badge daytime"></div>
          <div class="badge pet" style="display:none"></div>
        </div>
        <div class="water-wrap" style="display:none">
          <div class="hp-label"><span>💧 泡水</span><span class="water-text"></span></div>
          <div class="hp-bar"><div class="water-fill"></div></div>
        </div>
      </div>
      <div class="quest-card"><div class="quest-title"></div><div class="quest-sub"></div></div>
      <div class="boss-bar"><div class="boss-name"></div><div class="boss-hp"><div class="boss-fill"></div></div></div>
      <div class="compass"><div class="compass-tick"></div></div>
      <div class="minimap"><canvas width="176" height="176"></canvas><div class="mm-arrow">▲</div><div class="mm-n">北</div></div>
      <div class="toasts"></div>
      <div class="crosshair"></div>
      <div class="mine-ring"></div>
      <div class="prompt" style="display:none"></div>
      <div class="hotbar"></div>
      <div class="debug-corner" style="display:none"></div>
    `,document.body.appendChild(e),this.el=e,this.$=n=>e.querySelector(n),this.hurtEl=document.createElement("div"),this.hurtEl.className="hurt-flash",document.body.appendChild(this.hurtEl),this.bannerEl=document.createElement("div"),this.bannerEl.className="banner",this.bannerEl.innerHTML='<div class="big"></div><div class="small"></div>',document.body.appendChild(this.bannerEl),this._slotCache=""}setCamera(t){this.camera=t}blockIcon(t){const e=document.createElement("canvas");e.width=e.height=mt;const n=ze[t].tiles.side,i=n%On*mt,r=Math.floor(n/On)*mt;return e.getContext("2d").drawImage(this.atlas.canvas,i,r,mt,mt,0,0,mt,mt),e}update(t,e,n="",i=null,r=null){const o=Math.ceil(t.hp),a=t.maxHp();this.$(".hp-fill").style.width=`${o/a*100}%`,this.$(".hp-text").textContent=`${o} / ${a}`,this.$(".lv").textContent=`⭐ 等级 ${t.level()}`,this.$(".gear").textContent=`⚙️ 齿轮 ${t.gears}`;const l=this.$(".mystery");if(t.mysteryGears.length&&(l.style.display="",l.textContent=`💠 神秘齿轮 ${t.mysteryGears.length}/8`),i){const u=i.time;this.$(".daytime").textContent=i.isNight()?"🌙 夜晚（怪物变多！）":u>.42&&u<.5?"🌇 黄昏":"☀️ 白天"}const c=this.$(".pet");if(r&&r.activePet()){const u=r.activePet();c.style.display="",c.textContent=u.hp<=0?`🐾 ${u.name}（休息中…）`:`🐾 ${u.name} ${Math.ceil(u.hp)}/${u.maxHp}${t.mount?" 🏇":""}`}else c.style.display="none";const f=this.$(".water-wrap");if(t.waterTime>30&&!t.pengPotion){f.style.display="";const u=Math.min(1,t.waterTime/W.WATER_LIMIT),g=this.$(".water-fill");g.style.width=`${u*100}%`,g.style.background=u>=1?"#e34b4b":t.waterTime>W.WATER_WARN?"#f0a92e":"#3a8fd8";const _=Math.max(0,(W.WATER_LIMIT-t.waterTime)/60);this.$(".water-text").textContent=u>=1?"泡太久了！快上岸！":`还能泡 ${_.toFixed(1)} 分钟`}else f.style.display="none";e&&(this.$(".quest-title").textContent=`📜 ${e.title}`,this.$(".quest-sub").textContent=e.sub);const d=t.hotbar(),h=d.map(u=>`${u.id}:${u.count}`).join("|")+`#${t.hotbarIndex}#${t.form}${n}`;if(h!==this._slotCache){this._slotCache=h;const u=this.$(".hotbar");u.innerHTML="",d.forEach((_,m)=>{const p=document.createElement("div");p.className="slot"+(m===Math.min(t.hotbarIndex,d.length-1)?" sel":""),p.appendChild(this.blockIcon(_.id));const x=document.createElement("span");x.className="cnt",x.textContent=_.count;const v=document.createElement("span");v.className="key",v.textContent=m+1,p.appendChild(x),p.appendChild(v),u.appendChild(p)});const g=document.createElement("div");g.className="form-chip",g.textContent=`${kg[t.form]||t.form}（T 变形）${n}`,u.appendChild(g)}}setMineProgress(t){const e=this.$(".mine-ring");if(t<=0||t>=1){e.style.display="none";return}e.style.display="block",e.style.background=`conic-gradient(#ffd75e ${t*360}deg, rgba(255,255,255,0.15) 0deg)`,e.style.mask="radial-gradient(circle, transparent 55%, black 56%)",e.style.webkitMask="radial-gradient(circle, transparent 55%, black 56%)"}toast(t,e=2600){const n=document.createElement("div");n.className="toast",n.textContent=t,this.$(".toasts").appendChild(n),setTimeout(()=>n.classList.add("out"),e),setTimeout(()=>n.remove(),e+600)}banner(t,e,n=3200){this.bannerEl.style.display="flex",this.bannerEl.querySelector(".big").textContent=t,this.bannerEl.querySelector(".small").textContent=e||"",clearTimeout(this._bannerT),this._bannerT=setTimeout(()=>{this.bannerEl.style.display="none"},n)}showBoss(t,e){const n=this.$(".boss-bar");n.style.display="block",this.$(".boss-name").textContent=`👿 ${t}`,this.$(".boss-fill").style.width=`${Math.max(0,e)*100}%`}hideBoss(){this.$(".boss-bar").style.display="none"}setPrompt(t){const e=this.$(".prompt");if(!t){e.style.display="none";return}e.style.display="block",e.textContent=t}hurtFlash(){this.hurtEl.style.transition="none",this.hurtEl.style.opacity="1",setTimeout(()=>{this.hurtEl.style.transition="opacity 0.5s",this.hurtEl.style.opacity="0"},30)}damageNumber(t,e){if(!this.camera)return;const n=new P(t.x,t.y+1.2,t.z).project(this.camera);if(n.z>1)return;const i=(n.x*.5+.5)*innerWidth,r=(-n.y*.5+.5)*innerHeight,o=document.createElement("div");o.className="dmg-num",o.textContent=`-${e}`,o.style.left=`${i+(Math.random()-.5)*30}px`,o.style.top=`${r}px`,this.el.appendChild(o),setTimeout(()=>o.remove(),850)}updateMinimap(t,e,n,i,r,o=[]){const a=this.$(".minimap");if(!t){a.style.display="none";return}a.style.display="block",this.$(".mm-arrow").style.transform=`translate(-50%,-50%) rotate(${i}rad)`;const l=performance.now();if(this._mmT&&l-this._mmT<400)return;this._mmT=l;const c=a.querySelector("canvas"),f=c.getContext("2d"),d=44,h=c.width/(d*2),u=Math.floor(e),g=Math.floor(n);for(let _=-d;_<d;_++)for(let m=-d;m<d;m++){const p=u+m,x=g+_,v=t.surfaceAt(p,x);let S;if(v<=0)S="#0a1a2e";else if(v<r)S=v<r-20?"#1a4a7a":"#2a6aa8";else{const L=t.get(p,v,x);S=Gg[L]||"#7a8a5a";const A=.75+Math.min(.5,Math.max(0,(v-100)/40));S=Hg(S,A)}f.fillStyle=S,f.fillRect((m+d)*h,(_+d)*h,h+.5,h+.5)}for(const _ of o){const m=_.x-e,p=_.z-n;Math.abs(m)>=d||Math.abs(p)>=d||(f.fillStyle="#ffd75e",f.beginPath(),f.arc((m+d)*h,(p+d)*h,3,0,Math.PI*2),f.fill())}}updateCompass(t,e,n){const i=this.$(".compass");if(t==null){i.style.display="none";return}i.style.display="block",this._ci||(this._ci=new Map);const r=1.35;for(const o of e){let a=this._ci.get(o.icon);a||(a=document.createElement("div"),a.className="compass-item",a.innerHTML=`<span class="ci-icon">${o.icon}</span><span class="ci-label">${o.label}</span>`,i.appendChild(a),this._ci.set(o.icon,a));const l=o.x-n.x,c=o.z-n.z;let f=Math.atan2(l,-c)-t;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;if(Math.abs(f)>r){a.style.display="none";continue}a.style.display="flex",a.style.left=`${50+f/r*46}%`,a.style.opacity=Math.hypot(l,c)<40?"1":"0.7"}}setDebug(t){const e=this.$(".debug-corner");if(!t){e.style.display="none";return}e.style.display="block",e.textContent=t}}class Wg{constructor(t){this.controls=t;const e=document.createElement("div");e.className="dialog",e.innerHTML=`
      <div class="who">👑 作者</div>
      <div class="text"></div>
      <div class="next">点击 / 按空格 继续 ▸</div>
    `,document.body.appendChild(e),this.el=e,this.lines=[],this.i=0,this.onDone=null,this.open=!1;const n=()=>{this.open&&this.next()};e.addEventListener("mousedown",i=>{i.stopPropagation(),n()}),addEventListener("mousedown",()=>{this.open&&n()}),addEventListener("keydown",i=>{this.open&&(i.code==="Space"||i.code==="KeyE"||i.code==="Enter")&&(i.preventDefault(),n())})}show(t,e){this.lines=t,this.i=0,this.onDone=e||null,this.open=!0,this.controls.enabled=!1,this.el.style.display="block",this.render()}render(){this.el.querySelector(".text").textContent=this.lines[this.i],this.el.querySelector(".next").textContent=this.i<this.lines.length-1?"点击 / 按空格 继续 ▸":"点击 / 按空格 关闭 ✕"}next(){this.i++,this.i>=this.lines.length?(this.open=!1,this.el.style.display="none",setTimeout(()=>{this.open||(this.controls.enabled=!0)},120),this.onDone&&this.onDone()):this.render()}}function Xg(s){const t=document.createElement("div");t.className="screen";const e=zg();t.innerHTML=`
    <div class="start-box">
      <div class="game-title">机甲时代</div>
      <div class="game-sub">第二章 · 完整世界 —— 原案：淇淇（世界的作者）</div>
      <div class="btns"></div>
      <a class="docs-link" href="./docs.html">📜 开发历程 · 从一段口述设定到完整世界</a>
    </div>
  `;const n=t.querySelector(".btns");if(e){const i=document.createElement("button");i.className="btn",i.textContent="▶ 继续游戏",i.onclick=()=>{t.remove(),s(null)},n.appendChild(i);const r=document.createElement("button");r.className="btn secondary",r.textContent="🔄 重新开始",r.onclick=()=>{confirm("确定要重新开始吗？现在的进度会全部消失哦！")&&(Bg(),t.remove(),Ll(s))},n.appendChild(r)}else{const i=document.createElement("button");i.className="btn",i.textContent="✨ 创造我的变形金刚",i.onclick=()=>{t.remove(),Ll(s)},n.appendChild(i)}document.body.appendChild(t)}function Ll(s){const t={...vc},e=document.createElement("div");e.className="screen",e.innerHTML=`
    <div class="customize">
      <div class="preview-pane"></div>
      <div class="custom-pane">
        <h1>创造你的变形金刚！</h1>
        <div class="opts"></div>
        <button class="btn go">🚀 开始冒险！</button>
      </div>
    </div>
  `,document.body.appendChild(e);const n=e.querySelector(".preview-pane"),i=new cc({antialias:!0});i.setSize(334,414),n.appendChild(i.domElement);const r=new hc;r.background=new Dt(1452094),r.add(new pc(14675967,5596791,1.2));const o=new gc(16777215,1);o.position.set(2,4,3),r.add(o);const a=new He(45,334/414,.1,20);a.position.set(0,1.35,3.4),a.lookAt(0,.95,0);let l=null;const c=()=>{l&&r.remove(l.group),l=ao(t),r.add(l.group)};c();let f=!0;(function g(_){f&&(requestAnimationFrame(g),l&&(l.group.rotation.y=_/1200,l.animate(_/280,!0,.016)),i.render(r,a))})(0);const d=e.querySelector(".opts"),h=(g,_)=>{const m=document.createElement("div");m.className="opt-group",m.innerHTML=`<div class="opt-label">${g}</div><div class="swatches"></div>`;const p=m.querySelector(".swatches");for(const x of G0){const v=document.createElement("div");v.className="swatch"+(t[_]===x?" sel":""),v.style.background=x,v.onclick=()=>{t[_]=x,p.querySelectorAll(".swatch").forEach(S=>S.classList.remove("sel")),v.classList.add("sel"),c()},p.appendChild(v)}d.appendChild(m)},u=(g,_,m)=>{const p=document.createElement("div");p.className="opt-group",p.innerHTML=`<div class="opt-label">${g}</div><div class="choice-row"></div>`;const x=p.querySelector(".choice-row");for(const[v,S]of m){const L=document.createElement("div");L.className="choice"+(t[_]===v?" sel":""),L.textContent=S,L.onclick=()=>{t[_]=v,x.querySelectorAll(".choice").forEach(A=>A.classList.remove("sel")),L.classList.add("sel"),c()},x.appendChild(L)}d.appendChild(p)};h("头的颜色","head"),h("身体颜色","body"),h("手臂颜色","arm"),h("腿的颜色","leg"),u("头型","headType",[["antenna","📡 带天线"],["cube","⬜ 方头"]]),u("眼睛","eyeStyle",[["round","👀 圆眼"],["visor","🕶 一字眼罩"]]),u("肩膀","wide",[[!1,"普通肩"],[!0,"💪 宽肩"]]),e.querySelector(".go").onclick=()=>{f=!1,i.dispose(),e.remove(),s(t)}}class qg{constructor(t){this.ctx=t,this.open=!1,this.tab="items";const e=document.createElement("div");e.className="inv-panel",e.style.display="none",e.innerHTML=`
      <div class="inv-box">
        <div class="inv-tabs">
          <div class="inv-tab" data-tab="items">🎒 物品</div>
          <div class="inv-tab" data-tab="gears">💠 齿轮</div>
          <div class="inv-tab" data-tab="craft">🔨 合成</div>
          <div class="inv-tab" data-tab="pets">🐾 宠物</div>
          <div class="inv-close">✕ 关闭 (B)</div>
        </div>
        <div class="inv-body"></div>
      </div>
    `,document.body.appendChild(e),this.el=e,e.querySelectorAll(".inv-tab").forEach(n=>{n.addEventListener("click",()=>{this.tab=n.dataset.tab,this.render()})}),e.querySelector(".inv-close").addEventListener("click",()=>this.toggle(!1)),e.addEventListener("mousedown",n=>n.stopPropagation())}toggle(t){return this.open=t!==void 0?t:!this.open,this.el.style.display=this.open?"flex":"none",this.ctx.controls.enabled=!this.open&&this.ctx.controls.isLocked(),this.open&&(this.render(),document.exitPointerLock&&document.exitPointerLock()),this.open}render(){this.el.querySelectorAll(".inv-tab").forEach(e=>e.classList.toggle("sel",e.dataset.tab===this.tab));const t=this.el.querySelector(".inv-body");t.innerHTML="",this.tab==="items"&&this.renderItems(t),this.tab==="gears"&&this.renderGears(t),this.tab==="craft"&&this.renderCraft(t),this.tab==="pets"&&this.renderPets(t)}renderItems(t){const e=this.ctx.player,n=document.createElement("div");n.className="inv-grid";for(const[l,c]of e.inventory){const f=document.createElement("div");f.className="inv-cell";const d=this.ctx.hud.blockIcon(l);f.appendChild(d);const h=document.createElement("div");h.className="cell-label",h.textContent=`${ze[l].name}×${c}`,f.appendChild(h),n.appendChild(f)}for(const[l,c]of e.items){const f=rn[l];if(!f)continue;const d=document.createElement("div");d.className="inv-cell clickable";const h=document.createElement("div");h.className="cell-emoji",h.textContent=f.icon;const u=document.createElement("div");if(u.className="cell-label",u.textContent=`${f.name}×${c}`,d.appendChild(h),d.appendChild(u),f.boat){const g=document.createElement("button");g.className="mini-btn",g.textContent="放船",g.onclick=()=>{this.ctx.onBoatUse&&this.ctx.onBoatUse(),this.render()},d.appendChild(g)}else if(f.use||f.equip){const g=document.createElement("button");g.className="mini-btn";const _=f.equip&&e.equipment[f.equip]===l;g.textContent=f.use?"使用":_?"已装备":"装备",_&&(g.disabled=!0),g.onclick=()=>{e.useItem(l,this.ctx.hud),this.render(),this.ctx.onChanged&&this.ctx.onChanged()},d.appendChild(g)}f.desc&&(d.title=f.desc),n.appendChild(d)}n.children.length||(n.innerHTML='<div class="inv-empty">背包空空的～去挖方块、打怪物吧！</div>'),t.appendChild(n);const i=document.createElement("div");i.className="equip-row";const r=e.equipment.sword?rn[e.equipment.sword]:null,o=e.equipment.armor?rn[e.equipment.armor]:null,a=e.equipment.wings?rn[e.equipment.wings]:null;i.textContent=`当前装备：武器 ${r?r.icon+r.name+`(+${r.atk}攻)`:"无"} ｜ 护甲 ${o?o.icon+o.name+`(-${Math.round(o.def*100)}%伤)`:"无"} ｜ 翅膀 ${a?a.icon+a.name:"无"}`,t.appendChild(i)}renderGears(t){const e=this.ctx.player,n=document.createElement("div");n.className="gear-grid";for(const r of k0){const o=B0[r],a=e.hasGear(r),l=e.equippedGears.includes(r),c=document.createElement("div");c.className="gear-cell"+(a?"":" locked")+(l?" equipped":"");const f=document.createElement("div");f.className="cell-emoji",f.textContent=a?o.mark:"❓";const d=document.createElement("div");d.className="cell-label",d.textContent=a?o.name:"？？？";const h=document.createElement("div");if(h.className="gear-gives",h.textContent=a?o.gives:"还没找到",c.appendChild(f),c.appendChild(d),c.appendChild(h),a){const u=document.createElement("button");u.className="mini-btn",u.textContent=l?"卸下":"装备",u.onclick=()=>{l?e.equippedGears=e.equippedGears.filter(g=>g!==r):e.equippedGears.push(r),e.computeForms().includes(e.form)||(e.form="robot",e.applyForm()),this.render(),this.ctx.onChanged&&this.ctx.onChanged()},c.appendChild(u)}n.appendChild(c)}t.appendChild(n);const i=document.createElement("div");i.className="equip-row",i.textContent=`当前可变形态（T 键循环）：${e.computeForms().map(r=>({robot:"🤖机器人",car:"🚗小车",armor:"🛡装甲",dive:"🤿潜水",super:"🌈全能"})[r]).join(" → ")}`,t.appendChild(i)}renderCraft(t){const e=this.ctx.player,n=document.createElement("div");n.className="craft-list";for(const i of F0){const r=i.outBlock?{name:ze[i.outBlock].name,icon:"🛏"}:rn[i.out],o=document.createElement("div");o.className="craft-row";let a=!0;const l=Object.entries(i.need).map(([d,h])=>{var m;const u=!isNaN(Number(d)),g=u?ze[Number(d)].name:((m=rn[d])==null?void 0:m.name)||d,_=u?e.inventory.get(Number(d))||0:e.items.get(d)||0;return _<h&&(a=!1),`${g} ${_}/${h}`}).join(" + "),c=document.createElement("div");c.className="craft-label",c.innerHTML=`<b>${r.icon||""} ${r.name}</b><span class="craft-need ${a?"ok":"lack"}">${l}</span>`;const f=document.createElement("button");f.className="mini-btn",f.textContent="合成",f.disabled=!a,f.onclick=()=>{for(const[d,h]of Object.entries(i.need))isNaN(Number(d))?e.consumeItem(d,h):e.consumeBlock(Number(d),h);i.outBlock?(e.addBlock(i.outBlock),this.ctx.hud.toast(`🔨 合成了 ${ze[i.outBlock].name}！（放在快捷栏里）`)):(e.addItem(i.out),this.ctx.hud.toast(`🔨 合成了 ${rn[i.out].name}！`)),this.render(),this.ctx.onChanged&&this.ctx.onChanged()},o.appendChild(c),o.appendChild(f),n.appendChild(o)}t.appendChild(n)}renderPets(t){const e=this.ctx.pets,n=document.createElement("div");n.className="craft-list",e.roster.length||(n.innerHTML='<div class="inv-empty">还没有宠物！去收服大陆打怪，打败的怪会自动变成宠物哦～</div>'),e.roster.forEach((i,r)=>{const o=document.createElement("div");o.className="craft-row";const a=e.activeIndex===r,l=document.createElement("div");l.className="craft-label",l.innerHTML=`<b>🐾 ${i.name}${i.mountable?"（坐骑类）":""}</b><span class="craft-need ok">HP ${Math.ceil(i.hp)}/${i.maxHp} · 攻击 ${i.atk}${a?" · 出战中":""}</span>`,o.appendChild(l);const c=document.createElement("button");if(c.className="mini-btn",c.textContent=a?"休息":"出战",c.onclick=()=>{a?e.dismiss():e.deploy(r),this.render(),this.ctx.onChanged&&this.ctx.onChanged()},o.appendChild(c),i.mountable&&a){const f=document.createElement("button");f.className="mini-btn",f.textContent=this.ctx.player.mount===i?"下来":"骑乘",f.onclick=()=>{e.toggleMount(),this.render()},o.appendChild(f)}n.appendChild(o)}),t.appendChild(n)}}class Yg{constructor(t,e,n,i){this.player=t,this.hud=e,this.controls=n,this.onChanged=i,this.open=!1;const r=document.createElement("div");r.className="inv-panel",r.style.display="none",r.innerHTML=`
      <div class="inv-box">
        <div class="inv-tabs">
          <div class="inv-tab sel">🏪 作者小店（木屋神殿②）</div>
          <div class="shop-wallet"></div>
          <div class="inv-close">✕ 关闭</div>
        </div>
        <div class="inv-body"></div>
      </div>
    `,document.body.appendChild(r),this.el=r,r.querySelector(".inv-close").addEventListener("click",()=>this.toggle(!1)),r.addEventListener("mousedown",o=>o.stopPropagation())}toggle(t){return this.open=t!==void 0?t:!this.open,this.el.style.display=this.open?"flex":"none",this.controls.enabled=!this.open&&this.controls.isLocked(),this.open&&(this.render(),document.exitPointerLock&&document.exitPointerLock()),this.open}render(){this.el.querySelector(".shop-wallet").textContent=`⚙️ 我的齿轮：${this.player.gears}`;const t=this.el.querySelector(".inv-body");t.innerHTML="";const e=document.createElement("div");e.className="craft-list";for(const i of z0){const r=rn[i.id],o=i.name||(r==null?void 0:r.name),a=i.icon||(r==null?void 0:r.icon),l=document.createElement("div");l.className="craft-row";const c=document.createElement("div");c.className="craft-label",c.innerHTML=`<b>${a} ${o}</b><span class="craft-need ok">${(r==null?void 0:r.desc)||""} · 价格 ${i.price}⚙️</span>`;const f=document.createElement("button");f.className="mini-btn",f.textContent="买！",f.disabled=this.player.gears<i.price,f.onclick=()=>{this.player.spendGears(i.price)&&(i.outBlockN?this.player.addBlock(i.outBlockN[0],i.outBlockN[1]):i.outBlock?this.player.addBlock(i.outBlock):this.player.addItem(i.id),this.hud.toast(`🛍 买到了 ${o}！`),this.render(),this.onChanged&&this.onChanged())},l.appendChild(c),l.appendChild(f),e.appendChild(l)}const n=document.createElement("div");n.className="equip-row",n.textContent="作者：「花掉的齿轮不影响等级哦——等级看的是你一共收集过多少！」",t.appendChild(e),t.appendChild(n)}}class Kg{constructor(t,e,n,i){this.tower=t,this.hud=e,this.controls=n,this.onTeleport=i,this.open=!1;const r=document.createElement("div");r.className="inv-panel",r.style.display="none",r.innerHTML=`
      <div class="inv-box">
        <div class="inv-tabs">
          <div class="inv-tab sel">🗼 千层塔传送台</div>
          <div class="shop-wallet tower-progress"></div>
          <div class="inv-close">✕ 关闭</div>
        </div>
        <div class="inv-body"></div>
      </div>
    `,document.body.appendChild(r),this.el=r,r.querySelector(".inv-close").addEventListener("click",()=>this.toggle(!1)),r.addEventListener("mousedown",o=>o.stopPropagation())}toggle(t){return this.open=t!==void 0?t:!this.open,this.el.style.display=this.open?"flex":"none",this.controls.enabled=!this.open&&this.controls.isLocked(),this.open&&(this.render(),document.exitPointerLock&&document.exitPointerLock()),this.open}go(t){this.toggle(!1),this.onTeleport(t)}render(){const t=this.tower.maxCleared;this.el.querySelector(".tower-progress").textContent=`已通关 ${t}/${W.TOWER_FLOORS} 层`;const e=this.el.querySelector(".inv-body");e.innerHTML="";const n=Math.min(W.TOWER_FLOORS,t+1),i=document.createElement("button");i.className="btn",i.style.width="100%",i.textContent=n>=W.TOWER_FLOORS?"🐉 挑战第 1000 层：地狱魔龙！！":`⚔️ 继续挑战：第 ${n} 层`,i.onclick=()=>this.go(n),e.appendChild(i);const r=document.createElement("div");r.className="floor-grid";const o=[1];for(let l=10;l<=W.TOWER_FLOORS;l+=10)o.push(l);for(const l of o){const c=document.createElement("div"),f=l<=t+1,d=l===W.TOWER_FLOORS;c.className="floor-cell"+(f?"":" locked")+(d?" dragon":""),c.textContent=d?"🐉1000":l,f&&(c.onclick=()=>this.go(l)),r.appendChild(c)}e.appendChild(r);const a=document.createElement("div");a.className="equip-row",a.textContent=this.tower.dragonKilled?"👑 你已经打败了地狱魔龙！千层塔之王！":"作者：「每清一层，走进北边的门就是下一层。第 1000 层的地狱魔龙……我打半天才掉一滴血。」",e.appendChild(a)}}class $g{constructor(){const t=document.createElement("div");t.className="screen",t.innerHTML=`
      <div class="start-box">
        <div class="game-title">机甲时代</div>
        <div class="game-sub loading-msg">正在创造世界……</div>
        <div class="loading-bar-wrap"><div class="loading-fill"></div></div>
      </div>
    `,document.body.appendChild(t),this.el=t}set(t,e){this.el.querySelector(".loading-fill").style.width=`${Math.round(t*100)}%`,e&&(this.el.querySelector(".loading-msg").textContent=e)}done(){this.el.remove()}}const ss=new URLSearchParams(location.search).has("debug"),Zg=document.getElementById("app"),Vi=new cc({antialias:!0});Vi.setPixelRatio(Math.min(devicePixelRatio,2));Vi.setSize(innerWidth,innerHeight);Zg.appendChild(Vi.domElement);const $e=new hc;$e.background=new Dt(W.SKY_COLOR);$e.fog=new eo(W.SKY_COLOR,W.FOG_NEAR,W.FOG_FAR);const lo=new pc(14675967,9075290,1);$e.add(lo);const Mr=new gc(16777215,.7);Mr.position.set(60,120,40);$e.add(Mr);const dn=new He(70,innerWidth/innerHeight,.1,420);addEventListener("resize",()=>{dn.aspect=innerWidth/innerHeight,dn.updateProjectionMatrix(),Vi.setSize(innerWidth,innerHeight)});const Me={world:null,chunks:null},Ii=l0(),ce=new yg($e),Xt=new I0($e,Ii,Me,{hemi:lo,sun:Mr,fog:$e.fog});Xt.register("main",{gen:s=>(u0(s),f0(s),dt.lights),ambience:{sky:8899056,fogNear:W.FOG_NEAR,fogFar:W.FOG_FAR,hemi:1,sun:.7},surfaceY:W.SURFACE});Xt.register("hell",{gen:s=>(T0(s),he.lights),ambience:{sky:2756362,fogNear:40,fogFar:150,hemi:.55,sun:.15}});Xt.register("void",{gen:s=>(A0(s),oe.lights),ambience:{sky:328458,fogNear:25,fogFar:95,hemi:.35,sun:.05}});Xt.register("arena",{gen:s=>(w0(s),ye.lights),ambience:{sky:1709072,fogNear:60,fogFar:200,hemi:.85,sun:.4}});const os=new Zt;$e.add(os);const Js=()=>new Promise(s=>setTimeout(s,0));Xg(s=>jg(s));async function jg(s){var l;const t=new $g;await Js();const e=s?null:Og()||bc()||Fg(),n=s||e.robotConfig;t.set(.05,"正在创造大陆与海洋……"),await Js();const i=Xt.get("main"),r=Xt.ensure("main",{incremental:!0});(l=e==null?void 0:e.edits)!=null&&l.main&&i.world.applyEdits(e.edits.main);const o=i.chunks.totalChunks();let a=0;for(const c of r)a++,!document.hidden&&a%W.LOAD_CHUNKS_PER_FRAME===0&&(t.set(.05+.9*(a/o),a<o*.5?"正在铺设海底……":"正在种树盖房……"),await Js());i.world.dirty.clear(),i.group.visible=!0,Me.world=i.world,Me.chunks=i.chunks,t.set(1,"出发！"),await Js(),t.done(),e!=null&&e.migratedFromV1&&setTimeout(()=>alert(`检测到第一章的存档！你的等级、齿轮和任务进度都带过来了。
世界变大了，位置回到了出生点～`),100),Jg(n,e)}function Jg(s,t){var Qt;const e=new O0(Vi.domElement),n=new Vg(Ii);n.setCamera(dn);const i=new Wg(e),r=Object.assign({portalCharged:!1,fireSeaCleared:!1,endingSeen:!1},t==null?void 0:t.flags),o=Xt.get("main").group,a=new H0($e,s,dt.spawnPoint),l=new rg(()=>os,Me,a),c=new ag(()=>os,Me,a);l.projectiles=c,l.hud=n;const f=new lg(()=>os,Me,a),d=new Tg(()=>os,Me,a,l),h=new mg(o,Me,a),u=new vg;u.setWorld(Me.world);const g=new fg(a),_=new Ng($e,{hemi:lo,sun:Mr,fog:$e.fog}),m=new sa(o,dt.npcPos),p=new sa(o,dt.hutNpcPos,"👑 作者·小岛分身"),x=dt.undercity.folk.map((z,k)=>new sa(o,z,"⛏ 地下族人",{head:"#8b939d",body:"#6a7078",arm:"#787f88",leg:"#5a5f66",headType:"cube",eyeStyle:"round",wide:!1})),v=new wg;v.register(dt.oreRoom.chest,"ore"),v.register(dt.earthRoom.chest,"earth"),v.register(dt.palaceChest,"tide"),v.register(dt.lightChest,"light"),v.register(dt.forbiddenChest,"mystery");const S=new Dg(Xt,l,n),L=new Ig(Xt,a,n,r),A=new Kg(S,n,e,z=>S.enterFloor(z)),R=new Yg(a,n,e),I=new qg({player:a,pets:d,hud:n,controls:e,onBoatUse:()=>xt(),onChanged:()=>{}}),E={player:a,dialog:i,hud:n,flags:r,towerGround:dt.towerGround,hengeGround:dt.hengeGround,oreChestY:dt.oreRoom.chest[1],plank1Y:dt.earthRoom.planks[0][1],maxCleared:()=>S.maxCleared,petCount:()=>d.roster.length,save:()=>ht(),onChapter1Complete:()=>n.banner("🎉 第一章 · 通关！","休息一下，第二章马上开始！")},M=new Ag(E);t&&(a.deserialize((Qt=t.player)!=null&&Qt.pos?t.player:{...t.player,pos:dt.spawnPoint}),M.deserialize(t.quests),S.deserialize(t.tower2),v.deserialize(t.chests),d.deserialize(t.pets),_.deserialize(t.dayTime),h.deserialize(t.boats));const C={scene:$e,camera:dn,controls:e,player:a,monsters:l,hud:n,get world(){return Me.world},onChestOpen:(z,k,ut)=>v.open(z,k,ut),onBedUse:()=>gt(),onBlockMined:(z,k,ut,st)=>{M.onMined(z),u.notifyRemoved(k,ut,st),ce.burst(new P(k+.5,ut+.5,st+.5),wl(z),{count:8,speed:2.6,up:3,size:.12})},onBlockPlaced:(z,k,ut,st)=>{M.onPlaced(),L.onBlockPlaced(z,k,ut,st)},onCrackStage:(z,k,ut,st)=>ce.burst(new P(z+.5,k+.5,ut+.5),wl(st),{count:3,speed:1.6,up:2,size:.09}),isRestricted:()=>Xt.active==="arena"},H=new U0(C);H.onRightDown.bind(H);function G(z){const k=Rg[z];a.addMysteryGear(z),n.banner(`💠 获得 · ${k.name}！`,k.desc),M.onGearGot(z),ht()}v.onOpen=G,v.onEmpty=()=>n.toast("箱子是空的～"),g.onPickup=G,l.onKill=z=>{const k=new P(z.ent.pos.x,z.ent.pos.y+z.h*.5,z.ent.pos.z);ce.burst(k,["#ffd75e","#fff3c4"],{count:10,speed:4,up:4,size:.14,additive:!0}),ce.burst(k,[z.def.projColor||"#8a8a8a"],{count:8,speed:3.5,up:3,size:.18}),f.spawnGears(new P(z.ent.pos.x,z.ent.pos.y,z.ent.pos.z),z.gearDrop),M.onKill(),z.def.dropItem&&(a.addItem(z.def.dropItem),n.toast(`获得 ${z.def.dropItem==="seafood"?"🦐 海货":"🪶 光羽"}！`)),z.type==="kunpeng"&&(a.addItem("peng_potion"),a.addItem("peng_wings"),n.banner("🐦 你打败了鲲鹏！！","获得 🧪鹏之药水 + 🪽鲲鹏之翼！打开背包（B）使用/装备！")),d.tryCapture(z)},l.onExplode=z=>{if(n.toast("💥 轰！！"),z){const k=new P(z.x,z.y+.4,z.z);ce.burst(k,["#ff5a1a","#ffb35e","#3a3a3a"],{count:24,speed:7,up:5,size:.24}),ce.ring(k,"#ff8a3a",{maxR:3.5,life:.35}),ce.shake(.3)}},l.onHit=(z,k)=>{ce.burst(new P(z.ent.pos.x,z.ent.pos.y+z.h*.6,z.ent.pos.z),"#ffffff",{count:4,speed:2.2,up:1.6,size:.09,additive:!0})},l.onSwoopStart=z=>{ce.burst(new P(z.ent.pos.x,z.ent.pos.y,z.ent.pos.z),["#cfe8ff","#ffffff"],{count:14,speed:5,up:-2,size:.16,gravity:-6,additive:!0})},h.onWake=(z,k)=>{Math.random()<.35&&ce.burst(new P(z.x,z.y+.15,z.z),["#cfe8ff","#ffffff","#a8d4ee"],{count:3,speed:1.6,up:2.2,size:.1})},d.onCapture=z=>{n.toast(`🐾 收服了 ${z.name}！怪越强宠越强！（B 背包→宠物页出战）`),M.onPetCaptured()},f.onPickup=z=>{const k=a.totalGears===0,ut=a.addGears(z);M.onGears(z),k&&n.toast("🚗 齿轮上有小车标记！按 T 变形！"),ut&&n.toast(`⭐ 升级！现在是 ${a.level()} 级！`)},a.onHurt=()=>n.hurtFlash(),Xt.onGenerated=(z,k)=>{var ut;if((ut=t==null?void 0:t.edits)!=null&&ut[z]&&k.world.applyEdits(t.edits[z]),z==="hell"&&(g.place("forest",he.forestGear,k.group),g.place("fire",he.fireGear,k.group),r.fireSeaCleared))for(const[st,Et,w]of he.fireSeaCells)k.world.setRaw(st,Et,w,T.AIR);z==="void"&&g.place("dark",oe.darkGear,k.group)},Xt.onSwitch=(z,k)=>{l.clearAll(),c.clearAll(),f.clearAll(),u.setWorld(Me.world),ce.clear(),h.riding=null,a.mount=null,a.ent.pos.x=k[0],a.ent.pos.y=k[1],a.ent.pos.z=k[2],a.ent.vel.x=a.ent.vel.y=a.ent.vel.z=0,l.poolsEnabled=z==="main",z==="hell"&&j(),z==="void"&&K(),z==="main"&&$(),d.activeIndex>=0&&d.entity&&(d.entity.ent.pos.x=k[0]+1.5,d.entity.ent.pos.y=k[1]+.5,d.entity.ent.pos.z=k[2])};function j(){for(const[z,k,ut]of he.demonSpawns)l.spawn("demon",z,k+.1,ut,{floor:8,tag:"hell"});l.spawn("dragon",he.dragonPos[0],he.dragonPos[1],he.dragonPos[2],{boss:!0,bossName:"恶龙",hp:1500,atk:22,gears:40,tag:"hell"})}function K(){for(const[z,k,ut,st]of oe.guardSpawns)l.spawn("runeguard",z,k+.1,ut,{hp:300,atk:18,gears:8,tag:"void",symbolPos:oe.symbols[st]});l.spawn("shadowking",oe.kingPos[0],oe.kingPos[1]+.1,oe.kingPos[2],{boss:!0,bossName:"暗影君王",hp:6e3,atk:30,gears:60,tag:"void"})}function $(){if(a.hasGear("tide")||l.spawn("seaguardian",Y.SEA_PALACE.x+.5,28,Y.SEA_PALACE.z+6.5,{boss:!0,bossName:"海底守卫者",hp:4e3,atk:26,gears:80,tag:"mainboss",patrol:{cx:Y.SEA_PALACE.x,cz:Y.SEA_PALACE.z+6,r:10},aggroR:26}),a.pengPotion||l.spawn("kunpeng",Y.KUNPENG_AIR.x,Y.KUNPENG_AIR.y,Y.KUNPENG_AIR.z,{boss:!0,bossName:"鲲鹏",hp:5e3,atk:24,gears:80,tag:"mainboss",patrol:{cx:Y.KUNPENG_AIR.x,cz:Y.KUNPENG_AIR.z,r:36,y:Y.KUNPENG_AIR.y},aggroR:60}),!a.hasGear("mystery")){const z=Xt.get("main").world;let k=z.surfaceAt(Y.FORBIDDEN.x,Y.FORBIDDEN.z)+1;for(;k<190&&(z.get(Y.FORBIDDEN.x,k,Y.FORBIDDEN.z)!==T.AIR||z.get(Y.FORBIDDEN.x,k+1,Y.FORBIDDEN.z)!==T.AIR||z.get(Y.FORBIDDEN.x,k+2,Y.FORBIDDEN.z)!==T.AIR);)k++;l.spawn("forbiddengolem",Y.FORBIDDEN.x+.5,k,Y.FORBIDDEN.z+.5,{boss:!0,bossName:"禁地守卫",hp:8e3,atk:40,gears:100,tag:"mainboss",patrol:{cx:Y.FORBIDDEN.x,cz:Y.FORBIDDEN.z,r:9},aggroR:40})}}$(),l.poolsEnabled=!0,l.spawnPools=[{tag:"plains",points:[[110,148],[146,150],[108,110],[150,108]],types:["spider","brute"],max:W.PLAINS_MAX,interval:W.PLAINS_SPAWN_INTERVAL,timer:5,floor:1,intervalMult:()=>_.isNight()?.4:1},{tag:"ocean",points:[[240,98,300],[200,97,360],[340,96,340],[220,98,250],[420,97,320]],types:["shark","octopus","fish","crab"],max:5,interval:15,timer:8,floor:3},{tag:"sky",points:[[148,132,198],[300,135,240],[396,130,180],[128,132,300]],types:["bird","angel"],max:3,interval:25,timer:12,floor:3},{tag:"tame",points:[[366,180],[420,215],[396,230],[430,185],[370,220]],types:["brute","spider","crab","archer"],max:4,interval:18,timer:6,floor:5,intervalMult:()=>_.isNight()?.5:1}];const J=l.update.bind(l);l.update=z=>{const k=l.spawnPools;l.poolsEnabled||(l.spawnPools=[]),J(z),l.spawnPools=k},L.towerNextFloor=()=>S.enterFloor(S.currentFloor+1),L.toHall=()=>{const[z,k,ut]=dt.teleporterPad;Xt.switchTo("main",[z+2.5,k,ut+.5]),n.toast("回到刷怪塔大厅")},S.onFloorCleared=z=>{M.onFloorCleared(z),ht()};let q=!1;function gt(){if(Xt.active!=="main"){n.toast("只能在主世界睡觉哦");return}if(!_.isNight()){n.toast("☀️ 天还亮着呢，晚上再睡吧～");return}if(q)return;q=!0;const z=document.createElement("div");z.style.cssText="position:fixed;inset:0;background:#000;opacity:0;transition:opacity 0.6s;z-index:200;pointer-events:none",document.body.appendChild(z),requestAnimationFrame(()=>{z.style.opacity="1"}),setTimeout(()=>{_.sleep(),n.toast("🌅 早安！新的一天！"),z.style.opacity="0",setTimeout(()=>{z.remove(),q=!1},700)},800)}function xt(){if(Xt.active!=="main"){n.toast("船只能放在主世界的海里");return}const z=e.forwardFlat(new P);for(let k=2;k<=6;k++){const ut=Math.floor(a.ent.pos.x+z.x*k),st=Math.floor(a.ent.pos.z+z.z*k);if(Me.world.get(ut,W.SEA_LEVEL,st)===T.WATER){h.place(ut+.5,W.SEA_LEVEL+.05,st+.5),a.consumeItem("boat_item"),I.open&&I.toggle(!1),n.toast("🛶 船放好了！走近按 E 上船");return}}n.toast("前面没有水面～面朝大海再放船！")}const yt=[{x:Y.TOWER_C.x,z:Y.TOWER_C.z,icon:"🗼",label:"作者之塔"},{x:Y.HUT.x,z:Y.HUT.z,icon:"🏠",label:"作者小岛"},{x:Y.TAME_LAND.x,z:Y.TAME_LAND.z,icon:"🌴",label:"收服大陆"},{x:Y.SEA_PALACE.x,z:Y.SEA_PALACE.z,icon:"🌊",label:"深海"},{x:Y.FORBIDDEN.x,z:Y.FORBIDDEN.z,icon:"💀",label:"禁地"},{x:Y.PORTAL_HELL.x,z:Y.PORTAL_HELL.z,icon:"🔥",label:"地狱门"}];let Ft=0;u.onFill=(z,k,ut,st)=>{st!==T.WATER||Math.random()>.5||ce.burst(new P(z+.5,k+.7,ut+.5),["#cfe8ff","#a8d4ee"],{count:3,speed:1.2,up:1.8,size:.09})};const Kt=document.createElement("div");Kt.className="overlay",Kt.innerHTML=`<div class="title">⏸ 暂停中 · 点击空白处继续</div>
    <div class="sub">WASD 移动 · 空格跳/游泳 · 左键挖/打 · 右键放/开箱<br>
    T 变形 · B 背包 · E 对话/上船 · V 视角 · Q/C/X/Z 齿轮技能<br>
    <b>H 被困时回城</b> · 触控板玩家：方向键转视角 · F 挖/打 · R 放/开箱</div>
    <div class="pause-btns">
      <button class="btn pause-save">💾 立即存档</button>
      <button class="btn secondary pause-quit">💾 存档并回标题</button>
    </div>
    <div class="save-hint">游戏每 5 秒自动存档，关掉网页也不会丢进度</div>`,document.body.appendChild(Kt),Kt.addEventListener("click",()=>{e.requestLock(),ss&&setTimeout(()=>{e.locked||(e.virtualLock=!0)},300)}),Kt.querySelector(".pause-save").addEventListener("click",z=>{z.stopPropagation(),ht();const k=z.currentTarget;k.textContent="✅ 已存档！",setTimeout(()=>{k.textContent="💾 立即存档"},1200)}),Kt.querySelector(".pause-quit").addEventListener("click",z=>{z.stopPropagation(),ht(),location.reload()});const B=document.createElement("div");B.className="overlay death",B.innerHTML='<div class="title">💫 你被打倒了……</div><div class="sub">作者复活了你！齿轮和东西都还在！</div>',document.body.appendChild(B),a.onDeath=()=>{B.style.display="flex",setTimeout(()=>{Xt.active!=="main"&&Xt.switchTo("main",dt.spawnPoint),a.respawn(),B.style.display="none"},2200)};function Z(){if(r.endingSeen||M.index!==18||Xt.active!=="main"||a.mysteryGears.length<8)return;const[z,,k]=[Y.SHRINE3.x,0,Y.SHRINE3.z],ut=Math.hypot(a.ent.pos.x-z,a.ent.pos.z-k),st=Math.abs(a.ent.pos.y-dt.undercity.floorY)<8;ut<5&&st&&i.show(["（驱动核心的光芒突然变得无比明亮……）","你来了。八个神秘变形齿轮，全部集齐——这个世界建成以来，你是第一个做到的。","知道吗？驱动核心驱动着整个世界。而驱动它的燃料，其实是勇气。","你挖穿一百格的勇气、走进火海的勇气、潜入深海的勇气、面对禁地的勇气……","这个世界是我创造的。但从今天起，它的故事由你来写。","——作者 淇淇 敬上"],()=>{n.banner("🎉 第二章 · 完！","八大神秘齿轮集齐！世界的故事由你来写！"),M.onEnding(),ht()})}e.onKeyDown=z=>{if(z==="KeyT"){if(a.computeForms().length<=1){n.toast("还没有其他形态！先收集变形齿轮吧");return}const ut=a.transform();n.toast({robot:"🤖 变回机器人！",car:"🚗 变形：小车！",armor:"🛡️ 变形：矿石装甲！",dive:"🤿 变形：潜水形态！",super:"🌈 变形：全能形态！！"}[ut])}if(z==="KeyB"&&I.toggle(),z==="KeyV"){const k=e.cycleCamMode();n.toast(["👁 第一视角","🎥 第三视角（背后）","🤳 第二视角（正面）"][k])}if(z==="KeyQ"&&a.hasAbility("earth")){if(a.quakeCooldown>0){n.toast(`地震冷却中… ${a.quakeCooldown.toFixed(1)}s`);return}a.quakeCooldown=W.QUAKE_COOLDOWN;const k=Math.round(a.attack()*W.QUAKE_DMG_MULT);for(const st of l.list)Math.hypot(st.ent.pos.x-a.ent.pos.x,st.ent.pos.z-a.ent.pos.z)<W.QUAKE_RADIUS&&Math.abs(st.ent.pos.y-a.ent.pos.y)<3&&l.hitMonster(st,k,a.ent.pos);const ut=new P(a.ent.pos.x,a.ent.pos.y,a.ent.pos.z);ce.ring(ut,"#c9a15a",{maxR:W.QUAKE_RADIUS+1}),ce.ring(ut,"#8a6142",{maxR:W.QUAKE_RADIUS-1,life:.4}),ce.burst(ut.clone().setY(ut.y+.2),["#7a5538","#8a6142","#5f4029"],{count:26,speed:6,up:5,size:.22}),ce.shake(.4)}if(z==="KeyC"&&a.hasAbility("fire")){if(a.fireCooldown>0){n.toast(`喷火冷却中… ${a.fireCooldown.toFixed(1)}s`);return}a.fireCooldown=W.FIRE_BREATH_COOLDOWN;const k=e.forwardFlat(new P),ut=Math.round(a.attack()*1.5);for(const w of l.list){const y=w.ent.pos.x-a.ent.pos.x,O=w.ent.pos.z-a.ent.pos.z,tt=Math.hypot(y,O);if(tt>W.FIRE_BREATH_RANGE)continue;(y*k.x+O*k.z)/(tt||1)>.6&&l.hitMonster(w,ut,a.ent.pos)}const st=new P(a.ent.pos.x,a.ent.pos.y+1.1,a.ent.pos.z).addScaledVector(k,.6),Et=new P(k.x,.06,k.z);ce.cone(st,Et,["#ff5a1a","#ffb35e","#ffd75e"],{count:26,speed:10,size:.24}),ce.cone(st,Et,["#ff8a3a"],{count:8,speed:6,size:.14}),ce.shake(.12)}if(z==="KeyX"&&a.hasAbility("light")){if(a.flashCooldown>0){n.toast(`闪光冷却中… ${a.flashCooldown.toFixed(1)}s`);return}a.flashCooldown=W.FLASH_COOLDOWN;let k=0;for(const ut of l.list){if(Math.hypot(ut.ent.pos.x-a.ent.pos.x,ut.ent.pos.z-a.ent.pos.z)>W.FLASH_RADIUS)continue;const Et=ut.def.tags.includes("邪恶类");ut.stunT=Et?2.5:1,Et&&(l.hitMonster(ut,W.FLASH_DMG,null),k++,ce.burst(new P(ut.ent.pos.x,ut.ent.pos.y+ut.h*.6,ut.ent.pos.z),["#ffe89a","#fff3c4"],{count:10,speed:3,up:2.5,size:.14,additive:!0}))}ce.flash(),ce.ring(new P(a.ent.pos.x,a.ent.pos.y,a.ent.pos.z),"#fff3c4",{maxR:W.FLASH_RADIUS,life:.6}),n.toast(`✨ 净化闪光！净化了 ${k} 只邪恶类！`)}if(z==="KeyZ"&&a.hasAbility("dark")){if(a.stealthCooldown>0){n.toast(`隐身冷却中… ${a.stealthCooldown.toFixed(1)}s`);return}a.stealthCooldown=W.STEALTH_COOLDOWN,a.stealthTime=W.STEALTH_DURATION,ce.burst(new P(a.ent.pos.x,a.ent.pos.y+.9,a.ent.pos.z),["#7a4a9e","#4a2a66","#c084ff"],{count:20,speed:2.5,up:2,size:.24,gravity:-2}),n.toast("🌑 隐身！怪物看不见你了（8 秒）")}if(z==="KeyH"){if(a.dead)return;if(Xt.active!=="main"){n.toast("这里出不去的话，找发紫光的返回传送门走进去～");return}a.ent.pos.x=dt.spawnPoint[0],a.ent.pos.y=dt.spawnPoint[1],a.ent.pos.z=dt.spawnPoint[2],a.ent.vel.x=a.ent.vel.y=a.ent.vel.z=0,h.riding=null,n.toast("🌀 作者把你接回了出生点！（迷路或被困就按 H）")}if(z==="KeyE"){if(h.riding){h.toggleRide(),n.toast("⬇️ 下船");return}if(Xt.active==="main"){if(h.nearest(a.ent.pos)){h.toggleRide(),n.toast("🛶 上船！WASD 开船，E 下船");return}if(m.distanceTo(a.ent.pos)<3.5){if(!M.onTalk()){const Et=M.current();i.show([`接下来的任务：${Et.title}`,Et.progress(M.counters,E)||"加油！"])}return}if(p.distanceTo(a.ent.pos)<4){M.onHutTalk(),R.toggle(!0);return}for(const Et of x)if(Et.distanceTo(a.ent.pos)<3){const w=[["我们地下族人世世代代守护驱动核心。","它一旦停转，世界就会毁灭……幸好有作者在。"],["听说我们是最早的变形金刚的后代！","你身上的齿轮味儿……很正宗！"],["驱动核心的光看久了眼睛疼，但很安心。","要合成装备的话，代码矿石是最硬的！"]][Math.floor(Math.random()*3)];i.show(w);return}const[k,ut,st]=dt.teleporterPad;if(Math.hypot(a.ent.pos.x-k,a.ent.pos.z-st)<2.5&&Math.abs(a.ent.pos.y-ut)<3){A.toggle(!0);return}}}if(/^Digit[1-5]$/.test(z)&&(a.hotbarIndex=Number(z.slice(5))-1),z==="KeyF"&&H.onLeftDown(),z==="KeyR"&&H.onRightDown(),ss&&(z==="KeyP"&&(_t=!_t,n.toast(_t?"🕊 飞行开":"🚶 飞行关")),z==="KeyN")){const k=[["作者之塔",[80.5,dt.towerGround+1,90.5]],["刷怪塔大厅",[dt.teleporterPad[0]+2.5,dt.teleporterPad[1],dt.teleporterPad[2]+.5]],["地狱传送门",[Y.PORTAL_HELL.x+.5,W.SEA_LEVEL+3,Y.PORTAL_HELL.z+3.5]],["作者小岛",[Y.HUT.x+.5,108,Y.HUT.z-5.5]],["丛林神殿",[Y.JUNGLE_TEMPLE.x-12.5,110,Y.JUNGLE_TEMPLE.z+.5]],["深海上空",[Y.KUNPENG_AIR.x,145,Y.KUNPENG_AIR.z-15]],["海底宫殿",[Y.SEA_PALACE.x+.5,30,Y.SEA_PALACE.z-18.5]],["禁地",[Y.FORBIDDEN.x+.5,108,Y.FORBIDDEN.z-14.5]],["地下之城",[Y.CORE.x-6.5,dt.undercity.floorY+.1,Y.CORE.z+.5]],["收服大陆",[250.5,112,150.5]]];window.__tpIdx=((window.__tpIdx??-1)+1)%k.length;const[ut,st]=k[window.__tpIdx];Xt.active!=="main"?Xt.switchTo("main",st):(a.ent.pos.x=st[0],a.ent.pos.y=st[1],a.ent.pos.z=st[2]),a.ent.vel.x=a.ent.vel.y=a.ent.vel.z=0,n.toast(`🧭 传送：${ut}（再按 N 下一个）`)}},setInterval(()=>{if(e.wheelDelta!==0){const z=a.hotbar();z.length>0&&(a.hotbarIndex=((a.hotbarIndex+Math.sign(e.wheelDelta))%z.length+z.length)%z.length),e.wheelDelta=0}},80);function ht(){var ut;const z={};for(const st of["main","hell","void"]){const Et=Xt.get(st);z[st]=Et.generated?Et.world.serializeEdits():((ut=t==null?void 0:t.edits)==null?void 0:ut[st])||[]}const k=a.serialize();Xt.active!=="main"&&(k.pos=dt.spawnPoint.slice()),Ug({robotConfig:s,player:k,quests:M.serialize(),tower2:S.serialize(),chests:v.serialize(),pets:d.serialize(),dayTime:_.serialize(),flags:r,boats:h.serialize(),dim:"main",edits:z})}setInterval(ht,W.AUTOSAVE_INTERVAL*1e3),addEventListener("beforeunload",ht),ss&&(e.virtualLock=!0,window.__qiqi={controls:e,player:a,ctx:Me,dims:Xt,quests:M,towerCtrl:S,monsters:l,chests:v,drops:f,pets:d,boats:h,portals:L,dayNight:_,flags:r,npc:m,interaction:H,pickups:g,fluids:u,atlas:Ii,fx:ce,STRUCT:dt,HELL:he,VOID:oe,ARENA:ye,POS:Y,giveBlock:(z,k)=>a.addBlock(z,k),give:(z,k=1)=>a.addItem(z,k),gainGear:G,frame:z=>D(z)}),e.requestLock(),!t||M.index===0?M.start():M.index===7?M.advance():n.toast(`欢迎回来！当前任务：${M.current().title}`);let _t=!1,Lt=performance.now(),zt=0,Bt=0,de=60;function D(z){const k=Math.max(0,Math.min(.05,(z-Lt)/1e3));Lt=z,zt++,Bt+=k,Bt>=.5&&(de=Math.round(zt/Bt),zt=0,Bt=0);const ut=I.open||R.open||A.open,st=ut||!e.isLocked()&&!i.open;if(Kt.style.display=st&&!ut?"flex":"none",e.enabled=e.isLocked()&&!i.open&&!ut,e.updateLook(k),!st){if(_t){const O=e.forward(new P),tt=e.rightFlat(new P),Q=30*k;e.keys.KeyW&&(a.ent.pos.x+=O.x*Q,a.ent.pos.y+=O.y*Q,a.ent.pos.z+=O.z*Q),e.keys.KeyS&&(a.ent.pos.x-=O.x*Q,a.ent.pos.y-=O.y*Q,a.ent.pos.z-=O.z*Q),e.keys.KeyA&&(a.ent.pos.x-=tt.x*Q,a.ent.pos.z-=tt.z*Q),e.keys.KeyD&&(a.ent.pos.x+=tt.x*Q,a.ent.pos.z+=tt.z*Q),e.keys.Space&&(a.ent.pos.y+=Q),e.keys.ShiftLeft&&(a.ent.pos.y-=Q),a.ent.vel.x=a.ent.vel.y=a.ent.vel.z=0,a.model.group.position.set(a.ent.pos.x,a.ent.pos.y,a.ent.pos.z),a.model.group.rotation.y=-e.yaw}else h.riding?(h.update(k,e),a.model.group.position.set(a.ent.pos.x,a.ent.pos.y,a.ent.pos.z),a.model.group.rotation.y=-e.yaw):a.update(k,e,Me.world);if(a.fellOut&&!a.dead&&(a.fellOut=!1,Xt.active==="void"?(a.takeDamage(20,null),a.ent.pos.x=oe.spawn[0],a.ent.pos.y=oe.spawn[1],a.ent.pos.z=oe.spawn[2],a.ent.vel.x=a.ent.vel.y=a.ent.vel.z=0,n.toast("🌌 掉进虚空！被传送回入口（-20 血）")):(Xt.active!=="main"&&Xt.switchTo("main",dt.spawnPoint),a.respawn(),n.toast("🌀 作者把你捞了回来～"))),Xt.active==="void"&&a.ent.pos.y<10&&!a.dead&&(a.takeDamage(20,null),a.ent.pos.x=oe.spawn[0],a.ent.pos.y=oe.spawn[1],a.ent.pos.z=oe.spawn[2],a.ent.vel.x=a.ent.vel.y=a.ent.vel.z=0,n.toast("🌌 掉进虚空！被传送回入口（-20 血）")),Xt.active==="hell"&&!r.fireSeaCleared){const[O,,tt]=he.fireCenter;if(Math.hypot(a.ent.pos.x-O,a.ent.pos.z-tt)<2){r.fireSeaCleared=!0;const Q=Xt.get("hell").world;for(const[nt,Rt,lt]of he.fireSeaCells)Q.set(nt,Rt,lt,T.AIR,!1);a.hp=a.maxHp(),n.banner("🔥 勇敢者试炼通过！","火焰熄灭了！生命全部恢复！烈火齿轮就在眼前！")}}H.update(k),l.update(k),c.update(k),f.update(k),d.update(k),g.update(k,Xt.activeDim().group),m.update(k),p.update(k);for(const O of x)O.update(k);if(L.update(k),S.update(),Xt.active!=="arena"){let O=null,tt=1e9;for(const Q of l.list){if(!Q.isBoss||Q.dead||Q.state!=="chase")continue;const nt=Math.hypot(Q.ent.pos.x-a.ent.pos.x,Q.ent.pos.z-a.ent.pos.z);nt<tt&&(tt=nt,O=Q)}O?n.showBoss(O.bossName,O.hp/O.maxHp):n.hideBoss()}if(Xt.active==="main"?(n.updateCompass(e.yaw,yt,a.ent.pos),n.updateMinimap(Me.world,a.ent.pos.x,a.ent.pos.z,e.yaw,W.SEA_LEVEL,yt)):(n.updateCompass(null),n.updateMinimap(null)),Ft-=k,Ft<=0){Ft=1.5;const O=[],tt=Math.floor(a.ent.pos.x),Q=Math.floor(a.ent.pos.y),nt=Math.floor(a.ent.pos.z);for(let Rt=-8;Rt<=8&&O.length<6;Rt++)for(let lt=-10;lt<=10&&O.length<6;lt++)for(let vt=-10;vt<=10&&O.length<6;vt++)Me.world.get(tt+vt,Q+Rt,nt+lt)===T.CODE&&O.push([tt+vt,Q+Rt,nt+lt]);ce.setCodeBlocks(O)}M.setFloor(Xt.active==="arena"?S.currentFloor:0),_.update(k,Xt.active==="main",dn.position),u.tick(k),ce.update(k),Ii.waterTexture.offset.x=z*2e-5%1,Ii.waterTexture.offset.y=z*13e-6%1;const w=.6+Math.sin(z*.0013)*.05;for(const O of Ii.waterMaterials)O.opacity=w;Z();let y=null;if(Xt.active==="main")if(h.riding)y=null;else if(m.distanceTo(a.ent.pos)<3.5)y="按 E 和作者说话";else if(p.distanceTo(a.ent.pos)<4)y="按 E 逛作者小店";else if(x.some(O=>O.distanceTo(a.ent.pos)<3))y="按 E 和地下族人聊聊";else if(h.nearest(a.ent.pos))y="按 E 上船";else{const[O,tt,Q]=dt.teleporterPad;Math.hypot(a.ent.pos.x-O,a.ent.pos.z-Q)<2.5&&Math.abs(a.ent.pos.y-tt)<3&&(y="按 E 打开千层塔传送台")}n.setPrompt(y)}Me.chunks&&Me.chunks.update(),Me.chunks&&Me.chunks.updateVisibility(dn.position.x,dn.position.z,W.RENDER_DIST),e.updateCamera(dn,Me.world,a.headPos()),ce.applyShake(dn),a.model.group.visible=(e.camDist??W.CAM_DIST)>1.2;let Et="";if(a.hasAbility("earth")&&(Et+=a.quakeCooldown>0?` Q${a.quakeCooldown.toFixed(0)}`:" Q✓"),a.hasAbility("fire")&&(Et+=a.fireCooldown>0?` C${a.fireCooldown.toFixed(0)}`:" C✓"),a.hasAbility("light")&&(Et+=a.flashCooldown>0?` X${a.flashCooldown.toFixed(0)}`:" X✓"),a.hasAbility("dark")&&(Et+=a.stealthCooldown>0?` Z${a.stealthCooldown.toFixed(0)}`:" Z✓"),n.update(a,M.hudText(),Et,Xt.active==="main"?_:null,d),ss){const w=a.ent.pos;n.setDebug(`FPS ${de} 维度 ${Xt.active}
x ${w.x.toFixed(1)} y ${w.y.toFixed(1)} z ${w.z.toFixed(1)}
怪 ${l.list.length} 任务 ${M.index} 塔 ${S.maxCleared}
P飞行 N传送点循环`)}Vi.render($e,dn)}function me(z){requestAnimationFrame(me),D(z)}requestAnimationFrame(me),ss&&setInterval(()=>{document.hidden&&D(performance.now())},33)}
