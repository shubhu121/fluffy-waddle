(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,99921,e=>{"use strict";function t(e,t){switch(t.filter){case"liquid-metal":a(e,t);break;case"mesh-gradient":i(e,t);break;case"static-mesh":l(e,t);break;case"radial-gradient":o(e,t);break;case"grain-gradient":s(e,t);break;case"dot-orbit":n(e,t);break;case"dot-grid":c(e,t);break;case"warp":d(e,t)}}function r(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data;for(let e=0;e<a.length;e+=4){let r,i,l,o=(.299*a[e]+.587*a[e+1]+.114*a[e+2])/255;o<.25?(r=0,i=4*o*255,l=255):o<.5?(r=0,i=255,l=(.5-o)*1020):(o<.75?(r=(o-.5)*1020,i=255):(r=255,i=(1-o)*1020),l=0),a[e]=r*(t.brightness/100),a[e+1]=i*(t.brightness/100),a[e+2]=l*(t.brightness/100)}e.putImageData(r,0,0)}function a(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height,o=new Uint8ClampedArray(a);for(let e=1;e<l-1;e++)for(let t=1;t<i-1;t++){let r=(e*i+t)*4,l=-o[((e-1)*i+(t-1))*4]+o[((e-1)*i+(t+1))*4]+-2*o[(e*i+(t-1))*4]+2*o[(e*i+(t+1))*4]+-o[((e+1)*i+(t-1))*4]+o[((e+1)*i+(t+1))*4],s=-o[((e-1)*i+(t-1))*4]+-2*o[((e-1)*i+t)*4]+-o[((e-1)*i+(t+1))*4]+o[((e+1)*i+(t-1))*4]+2*o[((e+1)*i+t)*4]+o[((e+1)*i+(t+1))*4],n=255-Math.min(Math.sqrt(l*l+s*s)/4,255);a[r]=.8*n,a[r+1]=.85*n,a[r+2]=n}e.putImageData(r,0,0)}function i(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height,o=.001*Date.now();for(let e=0;e<l;e++)for(let t=0;t<i;t++){let r=(e*i+t)*4,s=.299*a[r]+.587*a[r+1]+.114*a[r+2],n=t/i,c=e/l,d=127*Math.sin(3*n+o)+128,h=127*Math.sin(3*c+o+2)+128,u=127*Math.sin((n+c)*3+o+4)+128,m=s/255;a[r]=d*m,a[r+1]=h*m,a[r+2]=u*m}e.putImageData(r,0,0)}function l(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height,o=[{x:.2,y:.2,r:138,g:180,b:248},{x:.8,y:.2,r:248,g:113,b:113},{x:.5,y:.8,r:152,g:251,b:152},{x:.5,y:.5,r:251,g:211,b:141}];for(let e=0;e<l;e++)for(let t=0;t<i;t++){let r=(e*i+t)*4,s=.299*a[r]+.587*a[r+1]+.114*a[r+2],n=t/i,c=e/l,d=0,h=0,u=0,m=0;o.forEach(e=>{let t=n-e.x,r=c-e.y,a=Math.sqrt(t*t+r*r)+.001,i=1/(a*a);d+=i,h+=e.r*i,u+=e.g*i,m+=e.b*i});let g=s/255;a[r]=h/d*g,a[r+1]=u/d*g,a[r+2]=m/d*g}e.putImageData(r,0,0)}function o(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height,o=i/2,s=l/2,n=Math.sqrt(o*o+s*s);for(let e=0;e<l;e++)for(let t=0;t<i;t++){let r=(e*i+t)*4,l=.299*a[r]+.587*a[r+1]+.114*a[r+2],c=t-o,d=e-s,h=Math.sqrt(c*c+d*d)/n,u=138+-63*h,m=180+-180*h,g=l/255;a[r]=u*g,a[r+1]=m*g,a[r+2]=248*g}e.putImageData(r,0,0)}function s(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height;for(let e=0;e<l;e++)for(let t=0;t<i;t++){let r=(e*i+t)*4,l=Math.max(0,Math.min(255,t/i*255+(Math.random()-.5)*40));a[r]=l,a[r+1]=.9*l,a[r+2]=1.1*l}e.putImageData(r,0,0)}function n(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height,o=.001*Date.now(),s=i/2,n=l/2;a.fill(0);for(let e=0;e<8;e++){let t=(e+1)*Math.min(i,l)/16,r=1+.2*e;for(let c=0;c<12;c++){let d=c/12*Math.PI*2+o*r,h=Math.floor(s+Math.cos(d)*t),u=Math.floor(n+Math.sin(d)*t);if(h>=0&&h<i&&u>=0&&u<l)for(let t=-3;t<=3;t++)for(let r=-3;r<=3;r++){let o=h+r,s=u+t;if(o>=0&&o<i&&s>=0&&s<l&&r*r+t*t<=9){let t=(s*i+o)*4,r=255-20*e;a[t]=r,a[t+1]=.8*r,a[t+2]=1.2*r,a[t+3]=255}}}}e.putImageData(r,0,0)}function c(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height;for(let e=0;e<l;e+=15)for(let t=0;t<i;t+=15){let r=0,o=0;for(let s=0;s<15&&e+s<l;s++)for(let l=0;l<15&&t+l<i;l++){let n=((e+s)*i+(t+l))*4;r+=(a[n]+a[n+1]+a[n+2])/3,o++}let s=(r/=o)/255*5;for(let r=-5;r<=5;r++)for(let o=-5;o<=5;o++)if(o*o+r*r<=s*s){let s=t+7.5+o,n=e+7.5+r;if(s>=0&&s<i&&n>=0&&n<l){let e=(n*i+s)*4;a[e]=138,a[e+1]=180,a[e+2]=248}}}e.putImageData(r,0,0)}function d(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height,o=new Uint8ClampedArray(a),s=.002*Date.now();for(let e=0;e<l;e++)for(let t=0;t<i;t++){let r=(e*i+t)*4,n=10*Math.sin(.02*e+s),c=10*Math.cos(.02*t+s),d=Math.floor(t+n),h=Math.floor(e+c);if(d>=0&&d<i&&h>=0&&h<l){let e=(h*i+d)*4;a[r]=o[e],a[r+1]=o[e+1],a[r+2]=o[e+2]}}e.putImageData(r,0,0)}function h(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height,o=Math.max(2,Math.floor(t.colorDepth/4));for(let e=0;e<l;e+=o)for(let t=0;t<i;t+=o){let r=0,s=0,n=0,c=0;for(let d=0;d<o&&e+d<l;d++)for(let l=0;l<o&&t+l<i;l++){let o=((e+d)*i+(t+l))*4;r+=a[o],s+=a[o+1],n+=a[o+2],c++}r/=c,s/=c,n/=c;for(let c=0;c<o&&e+c<l;c++)for(let l=0;l<o&&t+l<i;l++){let o=((e+c)*i+(t+l))*4;a[o]=r,a[o+1]=s,a[o+2]=n}}e.putImageData(r,0,0)}function u(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height,o=new Uint8ClampedArray(a);for(let e=0;e<5;e++){let e=Math.floor(Math.random()*l),t=(Math.random()-.5)*50,r=Math.floor(20*Math.random())+5;for(let s=0;s<r&&e+s<l;s++)for(let r=0;r<i;r++){let l=Math.floor((r+t+i)%i),n=((e+s)*i+l)*4,c=((e+s)*i+r)*4;a[c]=o[n+1],a[c+1]=o[n+2],a[c+2]=o[n]}}e.putImageData(r,0,0)}function m(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height,o=new Uint8ClampedArray(a);for(let e=0;e<l;e++)for(let t=0;t<i;t++){let r=(e*i+t)*4;if(t-5>=0){let l=(e*i+(t-5))*4;a[r]=o[l]}if(a[r+1]=o[r+1],t+5<i){let l=(e*i+(t+5))*4;a[r+2]=o[l+2]}}e.putImageData(r,0,0)}function g(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height,o=i/2,s=l/2,n=Math.sqrt(o*o+s*s);for(let e=0;e<l;e++)for(let t=0;t<i;t++){let r=(e*i+t)*4,l=t-o,c=e-s,d=1-Math.pow(Math.sqrt(l*l+c*c)/n,2);a[r]*=d,a[r+1]*=d,a[r+2]*=d}e.putImageData(r,0,0)}e.s(["applyFilter",()=>t,"chromaticAberrationFilter",()=>m,"dotGridFilter",()=>c,"dotOrbitFilter",()=>n,"glitchFilter",()=>u,"grainGradientFilter",()=>s,"heatmapFilter",()=>r,"liquidMetalFilter",()=>a,"meshGradientFilter",()=>i,"pixelateFilter",()=>h,"staticMeshGradientFilter",()=>l,"staticRadialGradientFilter",()=>o,"vignetteFilter",()=>g,"warpFilter",()=>d])},31713,e=>{"use strict";let t,r,a,i;var l,o=e.i(43476),s=e.i(71645);let n=e=>{let t,r=new Set,a=(e,a)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=a?a:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,l={setState:a,getState:i,getInitialState:()=>o,subscribe:e=>(r.add(e),()=>r.delete(e))},o=t=e(a,i,l);return l},c=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>c(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>c(t)(e)}}},d={algorithm:"floyd-steinberg",colorDepth:2,contrast:100,brightness:100,colorMode:"grayscale",hue:0,saturation:100,filter:"none"},h=(a=(l=(t=(e,t)=>({originalImage:null,imageDataUrl:null,settings:d,isProcessing:!1,presets:[],history:[d],historyIndex:0,showComparison:!1,showTutorial:!0,setOriginalImage:(t,r)=>e({originalImage:t,imageDataUrl:r}),updateSettings:r=>{let a={...t().settings,...r};e({settings:a}),t().addToHistory(a)},setIsProcessing:t=>e({isProcessing:t}),reset:()=>e({originalImage:null,imageDataUrl:null,settings:d,isProcessing:!1,history:[d],historyIndex:0}),savePreset:r=>{let a={name:r,settings:t().settings,timestamp:Date.now()};e({presets:[...t().presets,a]})},loadPreset:r=>{e({settings:r.settings}),t().addToHistory(r.settings)},deletePreset:r=>{e({presets:t().presets.filter(e=>e.timestamp!==r)})},addToHistory:r=>{let{history:a,historyIndex:i}=t(),l=a.slice(0,i+1);l.push(r),l.length>50&&l.shift(),e({history:l,historyIndex:l.length-1})},undo:()=>{let{historyIndex:r,history:a}=t();if(r>0){let t=r-1;e({settings:a[t],historyIndex:t})}},redo:()=>{let{historyIndex:r,history:a}=t();if(r<a.length-1){let t=r+1;e({settings:a[t],historyIndex:t})}},canUndo:()=>t().historyIndex>0,canRedo:()=>t().historyIndex<t().history.length-1,setShowComparison:t=>e({showComparison:t}),setShowTutorial:t=>e({showTutorial:t})}),r={name:"ditherlab-storage",partialize:e=>({presets:e.presets,showTutorial:e.showTutorial})},(e,a,i)=>{let l,o={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var t;let a=e=>null===e?null:JSON.parse(e,void 0),i=null!=(t=r.getItem(e))?t:null;return i instanceof Promise?i.then(a):a(i)},setItem:(e,t)=>r.setItem(e,JSON.stringify(t,void 0)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...r},s=!1,n=new Set,d=new Set,h=o.storage;if(!h)return t((...t)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),e(...t)},a,i);let u=()=>{let e=o.partialize({...a()});return h.setItem(o.name,{state:e,version:o.version})},m=i.setState;i.setState=(e,t)=>(m(e,t),u());let g=t((...t)=>(e(...t),u()),a,i);i.getInitialState=()=>g;let x=()=>{var t,r;if(!h)return;s=!1,n.forEach(e=>{var t;return e(null!=(t=a())?t:g)});let i=(null==(r=o.onRehydrateStorage)?void 0:r.call(o,null!=(t=a())?t:g))||void 0;return c(h.getItem.bind(h))(o.name).then(e=>{if(e)if("number"!=typeof e.version||e.version===o.version)return[!1,e.state];else{if(o.migrate){let t=o.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(t=>{var r;let[i,s]=t;if(e(l=o.merge(s,null!=(r=a())?r:g),!0),i)return u()}).then(()=>{null==i||i(l,void 0),l=a(),s=!0,d.forEach(e=>e(l))}).catch(e=>{null==i||i(void 0,e)})};return i.persist={setOptions:e=>{o={...o,...e},e.storage&&(h=e.storage)},clearStorage:()=>{null==h||h.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>x(),hasHydrated:()=>s,onHydrate:e=>(n.add(e),()=>{n.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},o.skipHydration||x(),l||g}))?n(l):n,Object.assign(i=e=>(function(e,t=e=>e){let r=s.default.useSyncExternalStore(e.subscribe,s.default.useCallback(()=>t(e.getState()),[e,t]),s.default.useCallback(()=>t(e.getInitialState()),[e,t]));return s.default.useDebugValue(r),r})(a,e),a),i);function u(){let[e,t]=(0,s.useState)(!1),{setOriginalImage:r,imageDataUrl:a,reset:i}=h(),l=(0,s.useCallback)(e=>{if(!e.type.startsWith("image/"))return void alert("Please upload an image file");let t=new FileReader;t.onload=e=>{let t=new Image;t.onload=()=>{r(t,e.target?.result)},t.src=e.target?.result},t.readAsDataURL(e)},[r]),n=(0,s.useCallback)(e=>{e.preventDefault(),t(!1);let r=e.dataTransfer.files[0];r&&l(r)},[l]),c=(0,s.useCallback)(e=>{e.preventDefault(),t(!0)},[]),d=(0,s.useCallback)(()=>{t(!1)},[]),u=(0,s.useCallback)(e=>{let t=e.target.files?.[0];t&&l(t)},[l]),m=(0,s.useCallback)(()=>{i(),document.getElementById("file-input")?.click()},[i]);return a?(0,o.jsx)("div",{className:"mb-6",children:(0,o.jsx)("button",{onClick:m,className:"glass-button px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 hover:scale-105",children:"Replace Image"})}):(0,o.jsx)("div",{className:"mb-6",children:(0,o.jsxs)("div",{onDrop:n,onDragOver:c,onDragLeave:d,className:`
          relative border-2 border-dashed rounded-2xl p-12
          transition-all duration-300
          ${e?"border-glassAccent bg-glassAccent/20 scale-105":"border-white/30 bg-white/5 hover:border-white/50"}
        `,children:[(0,o.jsx)("input",{id:"file-input",type:"file",accept:"image/*",onChange:u,className:"hidden"}),(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center text-center",children:[(0,o.jsx)("svg",{className:"w-16 h-16 mb-4 text-white/70",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),(0,o.jsx)("h3",{className:"text-xl font-semibold text-white mb-2",children:"Drop your image here"}),(0,o.jsx)("p",{className:"text-white/60 mb-4",children:"or click to browse"}),(0,o.jsx)("button",{onClick:()=>document.getElementById("file-input")?.click(),className:"glass-button px-6 py-3 rounded-xl text-white font-medium",children:"Choose File"}),(0,o.jsx)("p",{className:"text-sm text-white/40 mt-4",children:"PNG, JPG, WebP supported"})]})]})})}function m({children:e,className:t="",onClick:r}){return(0,o.jsx)("div",{onClick:r,className:`
        rounded-3xl p-6 md:p-8
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl
        shadow-glass
        border border-white/20
        transition-all duration-300
        hover:shadow-glassHover
        ${t}
      `,children:e})}function g(){let{settings:e,updateSettings:t,imageDataUrl:r,undo:a,redo:i,canUndo:l,canRedo:s}=h();if(!r)return null;let n=[{value:"floyd-steinberg",label:"Floyd–Steinberg",category:"Error Diffusion"},{value:"atkinson",label:"Atkinson",category:"Error Diffusion"},{value:"jarvis-judice-ninke",label:"Jarvis-Judice-Ninke",category:"Error Diffusion"},{value:"stucki",label:"Stucki",category:"Error Diffusion"},{value:"burkes",label:"Burkes",category:"Error Diffusion"},{value:"sierra",label:"Sierra",category:"Error Diffusion"},{value:"sierra-lite",label:"Sierra Lite",category:"Error Diffusion"},{value:"bayer",label:"Bayer Matrix",category:"Ordered"},{value:"pattern",label:"Pattern / Crosshatch",category:"Ordered"},{value:"halftone",label:"Halftone Dots",category:"Special"},{value:"random",label:"Random Noise",category:"Special"}].reduce((e,t)=>(e[t.category]||(e[t.category]=[]),e[t.category].push(t),e),{}),c=[{value:"none",label:"None (Use Dithering)",category:"Dithering"},{value:"mesh-gradient",label:"Mesh Gradient (Canvas)",category:"Canvas 2D"},{value:"static-mesh",label:"Static Mesh",category:"Canvas 2D"},{value:"radial-gradient",label:"Radial Gradient",category:"Canvas 2D"},{value:"grain-gradient",label:"Grain Gradient",category:"Canvas 2D"},{value:"liquid-metal",label:"Liquid Metal",category:"Canvas 2D"},{value:"dot-orbit",label:"Dot Orbit",category:"Canvas 2D"},{value:"dot-grid",label:"Dot Grid",category:"Canvas 2D"},{value:"warp",label:"Warp",category:"Canvas 2D"},{value:"raymarching-spheres",label:"🔮 Raymarched Spheres",category:"WebGL - Raytracing"},{value:"mandelbrot",label:"🌀 Mandelbrot Set",category:"WebGL - Fractals"},{value:"voronoi",label:"🔶 Voronoi Cells",category:"WebGL - Fractals"},{value:"plasma",label:"⚡ Plasma Waves",category:"WebGL - Fractals"},{value:"tunnel",label:"🌊 Tunnel Effect",category:"WebGL - Distortion"},{value:"ripple",label:"💧 Ripple Effect",category:"WebGL - Distortion"},{value:"wave-distortion",label:"🌊 Wave Distortion",category:"WebGL - Distortion"},{value:"swirl",label:"🌀 Swirl Effect",category:"WebGL - Distortion"},{value:"kaleidoscope",label:"🔮 Kaleidoscope",category:"WebGL - Distortion"},{value:"mirror",label:"🪞 Mirror Effect",category:"WebGL - Distortion"},{value:"mosaic",label:"🎨 Voronoi Mosaic",category:"WebGL - Artistic"},{value:"mosaic-tiles",label:"🧩 Mosaic Tiles",category:"WebGL - Artistic"},{value:"oil-painting",label:"🖼️ Oil Painting",category:"WebGL - Artistic"},{value:"pixel-dither",label:"🎮 Pixel Dither",category:"WebGL - Artistic"},{value:"rgb-split",label:"📺 RGB Split",category:"WebGL - Effects"},{value:"glitch",label:"📺 Glitch",category:"WebGL - Effects"},{value:"chromatic",label:"🌈 Chromatic Aberration",category:"WebGL - Effects"},{value:"heatmap",label:"🔥 Heatmap",category:"WebGL - Effects"},{value:"vignette",label:"🎞️ Vignette",category:"WebGL - Effects"},{value:"pixelate",label:"🔲 Pixelate",category:"WebGL - Effects"}].reduce((e,t)=>(e[t.category]||(e[t.category]=[]),e[t.category].push(t),e),{}),d="none"!==e.filter;return(0,o.jsxs)(m,{className:"mb-6 animate-slide-up",children:[(0,o.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,o.jsx)("h2",{className:"text-2xl font-semibold text-white",children:"Controls"}),(0,o.jsxs)("div",{className:"flex gap-2",children:[(0,o.jsx)("button",{onClick:()=>a(),disabled:!l(),className:"glass-button p-2 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed",title:"Undo (Ctrl+Z)",children:(0,o.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"})})}),(0,o.jsx)("button",{onClick:()=>i(),disabled:!s(),className:"glass-button p-2 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed",title:"Redo (Ctrl+Shift+Z)",children:(0,o.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"})})})]})]}),(0,o.jsxs)("div",{className:"space-y-6",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:"Processing Mode"}),(0,o.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,o.jsx)("button",{onClick:()=>t({filter:"none"}),className:`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${!d?"bg-glassAccent/60 text-white border-2 border-white/40":"glass-button text-white/70"}`,children:"Dithering"}),(0,o.jsx)("button",{onClick:()=>t({filter:"heatmap"}),className:`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${d?"bg-glassAccent/60 text-white border-2 border-white/40":"glass-button text-white/70"}`,children:"Filters/Shaders"})]})]}),d?(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:"Filter Effect"}),(0,o.jsx)("select",{value:e.filter,onChange:e=>t({filter:e.target.value}),className:"w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-glassAccent transition-all duration-200",children:Object.entries(c).map(([e,t])=>(0,o.jsx)("optgroup",{label:e,className:"bg-gray-800",children:t.map(e=>(0,o.jsx)("option",{value:e.value,className:"bg-gray-900",children:e.label},e.value))},e))})]}):(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:"Dithering Algorithm"}),(0,o.jsx)("select",{value:e.algorithm,onChange:e=>t({algorithm:e.target.value}),className:"w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-glassAccent transition-all duration-200",children:Object.entries(n).map(([e,t])=>(0,o.jsx)("optgroup",{label:e,className:"bg-gray-800",children:t.map(e=>(0,o.jsx)("option",{value:e.value,className:"bg-gray-900",children:e.label},e.value))},e))})]}),!d&&(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:"Color Mode"}),(0,o.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,o.jsx)("button",{onClick:()=>t({colorMode:"grayscale"}),className:`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${"grayscale"===e.colorMode?"bg-white/20 text-white border-2 border-white/40":"glass-button text-white/70"}`,children:"Grayscale"}),(0,o.jsx)("button",{onClick:()=>t({colorMode:"color"}),className:`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${"color"===e.colorMode?"bg-white/20 text-white border-2 border-white/40":"glass-button text-white/70"}`,children:"Color"})]})]}),!d&&(0,o.jsxs)("div",{children:[(0,o.jsxs)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:["Color Depth: ",e.colorDepth," colors"]}),(0,o.jsx)("input",{type:"range",min:"2",max:"256",value:e.colorDepth,onChange:e=>t({colorDepth:parseInt(e.target.value)}),className:"w-full h-2 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, 
                  rgba(138, 180, 248, 0.6) 0%, 
                  rgba(138, 180, 248, 0.6) ${(e.colorDepth-2)/254*100}%, 
                  rgba(255, 255, 255, 0.2) ${(e.colorDepth-2)/254*100}%, 
                  rgba(255, 255, 255, 0.2) 100%)`}}),(0,o.jsxs)("div",{className:"flex justify-between text-xs text-white/50 mt-1",children:[(0,o.jsx)("span",{children:"2"}),(0,o.jsx)("span",{children:"256"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:["Contrast: ",e.contrast,"%"]}),(0,o.jsx)("input",{type:"range",min:"0",max:"200",value:e.contrast,onChange:e=>t({contrast:parseInt(e.target.value)}),className:"w-full h-2 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, 
                rgba(138, 180, 248, 0.6) 0%, 
                rgba(138, 180, 248, 0.6) ${e.contrast/200*100}%, 
                rgba(255, 255, 255, 0.2) ${e.contrast/200*100}%, 
                rgba(255, 255, 255, 0.2) 100%)`}})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:["Brightness: ",e.brightness,"%"]}),(0,o.jsx)("input",{type:"range",min:"0",max:"200",value:e.brightness,onChange:e=>t({brightness:parseInt(e.target.value)}),className:"w-full h-2 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, 
                rgba(138, 180, 248, 0.6) 0%, 
                rgba(138, 180, 248, 0.6) ${e.brightness/200*100}%, 
                rgba(255, 255, 255, 0.2) ${e.brightness/200*100}%, 
                rgba(255, 255, 255, 0.2) 100%)`}})]}),"color"===e.colorMode&&!d&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:["Hue: ",e.hue,"°"]}),(0,o.jsx)("input",{type:"range",min:"0",max:"360",value:e.hue,onChange:e=>t({hue:parseInt(e.target.value)}),className:"w-full h-2 rounded-lg appearance-none cursor-pointer",style:{background:"linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)"}})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:["Saturation: ",e.saturation,"%"]}),(0,o.jsx)("input",{type:"range",min:"0",max:"200",value:e.saturation,onChange:e=>t({saturation:parseInt(e.target.value)}),className:"w-full h-2 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, 
                    rgba(138, 180, 248, 0.6) 0%, 
                    rgba(138, 180, 248, 0.6) ${e.saturation/200*100}%, 
                    rgba(255, 255, 255, 0.2) ${e.saturation/200*100}%, 
                    rgba(255, 255, 255, 0.2) 100%)`}})]})]}),(0,o.jsx)("button",{onClick:()=>t({algorithm:"floyd-steinberg",colorDepth:2,contrast:100,brightness:100,colorMode:"grayscale",hue:0,saturation:100,filter:"none"}),className:"w-full glass-button px-6 py-3 rounded-xl text-white font-medium transition-all duration-200",children:"Reset to Defaults"})]})]})}function x(e,t,r){let a=(t-100)*2.55,i=(r-100)/100+1;for(let t=0;t<e.length;t+=4)e[t]=i*(e[t]-128)+128,e[t+1]=i*(e[t+1]-128)+128,e[t+2]=i*(e[t+2]-128)+128,e[t]+=a,e[t+1]+=a,e[t+2]+=a}function v(e){for(let t=0;t<e.length;t+=4){let r=.299*e[t]+.587*e[t+1]+.114*e[t+2];e[t]=e[t+1]=e[t+2]=r}}function f(e,t){let r=255/(t-1);return Math.round(Math.round(e/r)*r)}function p(t,r,a){let i=t.getContext("2d");if(i&&(t.width=r.width,t.height=r.height,i.drawImage(r,0,0),!["raymarching-spheres","mandelbrot","voronoi","plasma","kaleidoscope","rgb-split","glitch","pixel-dither","wave-distortion","tunnel","ripple","oil-painting","mosaic","mosaic-tiles","pixelate","chromatic","heatmap","vignette","swirl","mirror"].includes(a.filter)))if("none"!==a.filter){let{applyFilter:t}=e.r(99921);t(i,a)}else switch(a.algorithm){case"floyd-steinberg":!function(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height;x(a,t.brightness,t.contrast),"color"===t.colorMode&&function(e,t,r){let a=t/360,i=r/100;for(let t=0;t<e.length;t+=4){let r=e[t]/255,l=e[t+1]/255,o=e[t+2]/255,s=Math.max(r,l,o),n=Math.min(r,l,o),c=0,d=0,h=(s+n)/2;if(s!==n){let e=s-n;switch(d=h>.5?e/(2-s-n):e/(s+n),s){case r:c=((l-o)/e+6*(l<o))/6;break;case l:c=((o-r)/e+2)/6;break;case o:c=((r-l)/e+4)/6}}c=(c+a)%1;let u=(e,t,r)=>(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e;if(0===(d=Math.max(0,Math.min(1,d*i))))r=l=o=h;else{let e=h<.5?h*(1+d):h+d-h*d,t=2*h-e;r=u(t,e,c+1/3),l=u(t,e,c),o=u(t,e,c-1/3)}e[t]=Math.round(255*r),e[t+1]=Math.round(255*l),e[t+2]=Math.round(255*o)}}(a,t.hue,t.saturation),"grayscale"===t.colorMode&&v(a);for(let e=0;e<l;e++)for(let r=0;r<i;r++){let o=(e*i+r)*4,s=a[o],n=f(s,t.colorDepth),c=s-n;a[o]=a[o+1]=a[o+2]=n;let d=(t,o,s)=>{let n=r+t,d=e+o;if(n>=0&&n<i&&d>=0&&d<l){let e=(d*i+n)*4;a[e]+=c*s,a[e+1]+=c*s,a[e+2]+=c*s}};d(1,0,7/16),d(-1,1,3/16),d(0,1,5/16),d(1,1,1/16)}e.putImageData(r,0,0)}(i,a);break;case"atkinson":!function(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height;x(a,t.brightness,t.contrast),v(a);for(let e=0;e<l;e++)for(let r=0;r<i;r++){let o=(e*i+r)*4,s=a[o],n=f(s,t.colorDepth),c=s-n;a[o]=a[o+1]=a[o+2]=n;let d=(t,o)=>{let s=r+t,n=e+o;if(s>=0&&s<i&&n>=0&&n<l){let e=(n*i+s)*4;a[e]+=c/8,a[e+1]+=c/8,a[e+2]+=c/8}};d(1,0),d(2,0),d(-1,1),d(0,1),d(1,1),d(0,2)}e.putImageData(r,0,0)}(i,a);break;case"bayer":!function(e,t){let r=[[0,32,8,40,2,34,10,42],[48,16,56,24,50,18,58,26],[12,44,4,36,14,46,6,38],[60,28,52,20,62,30,54,22],[3,35,11,43,1,33,9,41],[51,19,59,27,49,17,57,25],[15,47,7,39,13,45,5,37],[63,31,55,23,61,29,53,21]],a=e.getImageData(0,0,e.canvas.width,e.canvas.height),i=a.data,l=a.width,o=a.height;x(i,t.brightness,t.contrast),v(i);for(let e=0;e<o;e++)for(let a=0;a<l;a++){let o=(e*l+a)*4,s=f(i[o]+(r[e%8][a%8]/64*255-127.5)/(t.colorDepth-1),t.colorDepth);i[o]=i[o+1]=i[o+2]=s}e.putImageData(a,0,0)}(i,a);break;case"random":!function(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height;x(a,t.brightness,t.contrast),v(a);for(let e=0;e<l;e++)for(let r=0;r<i;r++){let l=(e*i+r)*4,o=f(a[l]+(Math.random()-.5)*50,t.colorDepth);a[l]=a[l+1]=a[l+2]=o}e.putImageData(r,0,0)}(i,a);break;case"jarvis-judice-ninke":!function(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height;x(a,t.brightness,t.contrast),v(a);for(let e=0;e<l;e++)for(let r=0;r<i;r++){let o=(e*i+r)*4,s=a[o],n=f(s,t.colorDepth),c=s-n;a[o]=a[o+1]=a[o+2]=n;let d=(t,o,s)=>{let n=r+t,d=e+o;if(n>=0&&n<i&&d>=0&&d<l){let e=(d*i+n)*4;a[e]+=c*s,a[e+1]+=c*s,a[e+2]+=c*s}};d(1,0,7/48),d(2,0,5/48),d(-2,1,3/48),d(-1,1,5/48),d(0,1,7/48),d(1,1,5/48),d(2,1,3/48),d(-2,2,1/48),d(-1,2,3/48),d(0,2,5/48),d(1,2,3/48),d(2,2,1/48)}e.putImageData(r,0,0)}(i,a);break;case"stucki":!function(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height;x(a,t.brightness,t.contrast),v(a);for(let e=0;e<l;e++)for(let r=0;r<i;r++){let o=(e*i+r)*4,s=a[o],n=f(s,t.colorDepth),c=s-n;a[o]=a[o+1]=a[o+2]=n;let d=(t,o,s)=>{let n=r+t,d=e+o;if(n>=0&&n<i&&d>=0&&d<l){let e=(d*i+n)*4;a[e]+=c*s,a[e+1]+=c*s,a[e+2]+=c*s}};d(1,0,8/42),d(2,0,4/42),d(-2,1,2/42),d(-1,1,4/42),d(0,1,8/42),d(1,1,4/42),d(2,1,2/42),d(-2,2,1/42),d(-1,2,2/42),d(0,2,4/42),d(1,2,2/42),d(2,2,1/42)}e.putImageData(r,0,0)}(i,a);break;case"burkes":!function(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height;x(a,t.brightness,t.contrast),v(a);for(let e=0;e<l;e++)for(let r=0;r<i;r++){let o=(e*i+r)*4,s=a[o],n=f(s,t.colorDepth),c=s-n;a[o]=a[o+1]=a[o+2]=n;let d=(t,o,s)=>{let n=r+t,d=e+o;if(n>=0&&n<i&&d>=0&&d<l){let e=(d*i+n)*4;a[e]+=c*s,a[e+1]+=c*s,a[e+2]+=c*s}};d(1,0,.25),d(2,0,4/32),d(-2,1,2/32),d(-1,1,4/32),d(0,1,.25),d(1,1,4/32),d(2,1,2/32)}e.putImageData(r,0,0)}(i,a);break;case"sierra":!function(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height;x(a,t.brightness,t.contrast),v(a);for(let e=0;e<l;e++)for(let r=0;r<i;r++){let o=(e*i+r)*4,s=a[o],n=f(s,t.colorDepth),c=s-n;a[o]=a[o+1]=a[o+2]=n;let d=(t,o,s)=>{let n=r+t,d=e+o;if(n>=0&&n<i&&d>=0&&d<l){let e=(d*i+n)*4;a[e]+=c*s,a[e+1]+=c*s,a[e+2]+=c*s}};d(1,0,5/32),d(2,0,3/32),d(-2,1,2/32),d(-1,1,4/32),d(0,1,5/32),d(1,1,4/32),d(2,1,2/32),d(-1,2,2/32),d(0,2,3/32),d(1,2,2/32)}e.putImageData(r,0,0)}(i,a);break;case"sierra-lite":!function(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height;x(a,t.brightness,t.contrast),v(a);for(let e=0;e<l;e++)for(let r=0;r<i;r++){let o=(e*i+r)*4,s=a[o],n=f(s,t.colorDepth),c=s-n;a[o]=a[o+1]=a[o+2]=n;let d=(t,o,s)=>{let n=r+t,d=e+o;if(n>=0&&n<i&&d>=0&&d<l){let e=(d*i+n)*4;a[e]+=c*s,a[e+1]+=c*s,a[e+2]+=c*s}};d(1,0,.5),d(-1,1,1/4),d(0,1,1/4)}e.putImageData(r,0,0)}(i,a);break;case"halftone":!function(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height;x(a,t.brightness,t.contrast),v(a);for(let e=0;e<l;e+=4)for(let t=0;t<i;t+=4){let r=0,o=0;for(let s=0;s<4&&e+s<l;s++)for(let l=0;l<4&&t+l<i;l++)r+=a[((e+s)*i+(t+l))*4],o++;let s=(255-r/o)/255*2;for(let r=0;r<4&&e+r<l;r++)for(let l=0;l<4&&t+l<i;l++){let o=((e+r)*i+(t+l))*4,n=Math.sqrt((l-2)**2+(r-2)**2)<s?0:255;a[o]=a[o+1]=a[o+2]=n}}e.putImageData(r,0,0)}(i,a);break;case"pattern":!function(e,t){let r=e.getImageData(0,0,e.canvas.width,e.canvas.height),a=r.data,i=r.width,l=r.height;x(a,t.brightness,t.contrast),v(a);let o=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1],[0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0],[0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0],[0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0],[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],[1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1],[1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1],[1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],[1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];for(let e=0;e<l;e++)for(let t=0;t<i;t++){let r=(e*i+t)*4,l=Math.floor(a[r]/255*(o.length-1)),s=255*o[l][e%4*4+t%4];a[r]=a[r+1]=a[r+2]=s}e.putImageData(r,0,0)}(i,a)}}class b{gl;program=null;canvas;animationId=null;startTime=Date.now();texture=null;constructor(e){this.canvas=e;const t=e.getContext("webgl",{premultipliedAlpha:!1,preserveDrawingBuffer:!0})||e.getContext("experimental-webgl",{premultipliedAlpha:!1,preserveDrawingBuffer:!0});if(!t)throw Error("WebGL not supported");this.gl=t}compileShader(e,t){let r=this.gl.createShader(t);return r?(this.gl.shaderSource(r,e),this.gl.compileShader(r),this.gl.getShaderParameter(r,this.gl.COMPILE_STATUS))?r:(console.error("Shader compilation failed:",this.gl.getShaderInfoLog(r)),this.gl.deleteShader(r),null):null}createProgram(e,t){let r=this.compileShader(e,this.gl.VERTEX_SHADER),a=this.compileShader(t,this.gl.FRAGMENT_SHADER);return!!r&&!!a&&(this.program=this.gl.createProgram(),!!this.program&&((this.gl.attachShader(this.program,r),this.gl.attachShader(this.program,a),this.gl.linkProgram(this.program),this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))?(this.gl.useProgram(this.program),this.gl.deleteShader(r),this.gl.deleteShader(a),!0):(console.error("Program linking failed:",this.gl.getProgramInfoLog(this.program)),!1)))}setTexture(e){if(this.texture&&this.gl.deleteTexture(this.texture),this.texture=this.gl.createTexture(),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e),this.program){let e=this.gl.getUniformLocation(this.program,"u_texture");this.gl.uniform1i(e,0)}}setupGeometry(){let e=new Float32Array([-1,-1,1,-1,-1,1,1,1]),t=new Float32Array([0,1,1,1,0,0,1,0]),r=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,r),this.gl.bufferData(this.gl.ARRAY_BUFFER,e,this.gl.STATIC_DRAW);let a=this.gl.getAttribLocation(this.program,"a_position");this.gl.enableVertexAttribArray(a),this.gl.vertexAttribPointer(a,2,this.gl.FLOAT,!1,0,0);let i=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,i),this.gl.bufferData(this.gl.ARRAY_BUFFER,t,this.gl.STATIC_DRAW);let l=this.gl.getAttribLocation(this.program,"a_texCoord");this.gl.enableVertexAttribArray(l),this.gl.vertexAttribPointer(l,2,this.gl.FLOAT,!1,0,0)}setUniform(e,t){if(!this.program)return;let r=this.gl.getUniformLocation(this.program,e);null!==r&&("number"==typeof t?this.gl.uniform1f(r,t):2===t.length?this.gl.uniform2f(r,t[0],t[1]):3===t.length?this.gl.uniform3f(r,t[0],t[1],t[2]):4===t.length&&this.gl.uniform4f(r,t[0],t[1],t[2],t[3]))}render(e={}){this.gl.viewport(0,0,this.canvas.width,this.canvas.height),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),Object.entries(e).forEach(([e,t])=>{this.setUniform(e,t)}),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}animate(e){let t=()=>{let r=(Date.now()-this.startTime)/1e3;this.render({u_time:r,...e()}),this.animationId=requestAnimationFrame(t)};t()}stopAnimation(){null!==this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}destroy(){this.stopAnimation(),this.texture&&(this.gl.deleteTexture(this.texture),this.texture=null),this.program&&(this.gl.deleteProgram(this.program),this.program=null)}}let w=`
attribute vec2 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}
`,j={plasma:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  
  float v = 0.0;
  v += sin(p.x * 10.0 + u_time);
  v += sin(p.y * 10.0 + u_time);
  v += sin((p.x + p.y) * 10.0 + u_time);
  v += sin(length(p) * 10.0 + u_time);
  
  vec3 col = vec3(
    0.5 + 0.5 * sin(v + u_time),
    0.5 + 0.5 * sin(v + u_time + 2.094),
    0.5 + 0.5 * sin(v + u_time + 4.188)
  );
  
  vec3 texCol = texture2D(u_texture, uv).rgb;
  float brightness = dot(texCol, vec3(0.299, 0.587, 0.114));
  
  col *= brightness * 1.5;
  
  gl_FragColor = vec4(col, 1.0);
}
`,ripple:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 center = vec2(0.5);
  
  float dist = length(uv - center);
  float ripple = sin(dist * 30.0 - u_time * 3.0) * 0.02 / (dist + 0.5);
  
  vec2 dir = normalize(uv - center);
  uv += dir * ripple;
  
  vec3 col = texture2D(u_texture, uv).rgb;
  
  gl_FragColor = vec4(col, 1.0);
}
`,"wave-distortion":`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  
  float wave1 = sin(uv.y * 10.0 + u_time * 2.0) * 0.05;
  float wave2 = cos(uv.x * 8.0 + u_time * 1.5) * 0.03;
  
  uv.x += wave1;
  uv.y += wave2;
  
  vec3 col = texture2D(u_texture, uv).rgb;
  
  gl_FragColor = vec4(col, 1.0);
}
`,kaleidoscope:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

#define PI 3.14159265359

void main() {
  vec2 uv = v_texCoord;
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  
  float a = atan(p.y, p.x);
  float r = length(p);
  
  float segments = 8.0;
  a = mod(a, PI * 2.0 / segments);
  a = abs(a - PI / segments);
  
  p = vec2(cos(a), sin(a)) * r;
  
  vec2 newUv = p * 0.5 + 0.5;
  newUv = fract(newUv);
  
  vec3 col = texture2D(u_texture, newUv).rgb;
  col *= 1.0 - r * 0.3;
  
  gl_FragColor = vec4(col, 1.0);
}
`,"rgb-split":`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 center = vec2(0.5);
  vec2 dir = uv - center;
  float dist = length(dir);
  
  float offset = sin(u_time * 2.0) * 0.015 * dist;
  
  float r = texture2D(u_texture, uv - dir * offset).r;
  float g = texture2D(u_texture, uv).g;
  float b = texture2D(u_texture, uv + dir * offset).b;
  
  gl_FragColor = vec4(r, g, b, 1.0);
}
`,tunnel:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

#define PI 3.14159265359

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  
  float a = atan(p.y, p.x) / PI;
  float r = length(p);
  
  vec2 tuv = vec2(
    a * 0.5 + 0.5,
    0.5 / r + u_time * 0.2
  );
  
  tuv = fract(tuv);
  
  vec3 col = texture2D(u_texture, tuv).rgb;
  col *= (1.0 - r * 0.4);
  
  gl_FragColor = vec4(col, 1.0);
}
`,voronoi:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

#define PI 3.14159265359

vec2 random2(vec2 st) {
  st = vec2(dot(st, vec2(127.1, 311.7)), dot(st, vec2(269.5, 183.3)));
  return fract(sin(st) * 43758.5453123);
}

void main() {
  vec2 uv = v_texCoord;
  vec2 st = uv * 12.0;
  
  vec2 i_st = floor(st);
  vec2 f_st = fract(st);
  
  float minDist = 1.0;
  vec2 minPoint;
  
  for(int y = -1; y <= 1; y++) {
    for(int x = -1; x <= 1; x++) {
      vec2 neighbor = vec2(float(x), float(y));
      vec2 point = random2(i_st + neighbor);
      point = 0.5 + 0.5 * sin(u_time + 6.2831 * point);
      
      float dist = length(neighbor + point - f_st);
      if(dist < minDist) {
        minDist = dist;
        minPoint = point;
      }
    }
  }
  
  vec3 texCol = texture2D(u_texture, uv).rgb;
  float brightness = dot(texCol, vec3(0.299, 0.587, 0.114));
  
  vec3 col = mix(
    vec3(0.3, 0.5, 0.9),
    vec3(0.9, 0.5, 0.3),
    minPoint.x
  );
  
  col *= 1.0 - 0.4 * minDist;
  col = mix(col, texCol, 0.4);
  
  gl_FragColor = vec4(col, 1.0);
}
`,mandelbrot:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

vec3 palette(float t) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.0, 0.33, 0.67);
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  vec2 uv = v_texCoord;
  vec2 c = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  
  float zoom = 0.5 + sin(u_time * 0.3) * 0.3;
  c = c * zoom + vec2(-0.5, 0.0);
  
  vec2 z = vec2(0.0);
  float iter = 0.0;
  
  for(int i = 0; i < 100; i++) {
    z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
    if(length(z) > 2.0) break;
    iter += 1.0;
  }
  
  float col = iter / 100.0;
  vec3 fractalCol = palette(col + u_time * 0.1);
  
  vec3 texCol = texture2D(u_texture, uv).rgb;
  float brightness = dot(texCol, vec3(0.299, 0.587, 0.114));
  
  vec3 finalCol = mix(texCol * 0.5, fractalCol, brightness * 0.8);
  
  gl_FragColor = vec4(finalCol, 1.0);
}
`,"raymarching-spheres":`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

#define MAX_STEPS 64
#define MAX_DIST 10.0
#define SURF_DIST 0.01

float sdSphere(vec3 p, float r) {
  return length(p) - r;
}

float map(vec3 p) {
  float d = MAX_DIST;
  
  for(int i = 0; i < 4; i++) {
    float fi = float(i);
    vec3 offset = vec3(
      sin(u_time + fi * 2.0) * 1.5,
      cos(u_time * 0.5 + fi) * 1.5,
      sin(u_time * 0.3 + fi * 1.5) * 1.5 - 3.0
    );
    d = min(d, sdSphere(p - offset, 0.4 + sin(u_time + fi) * 0.15));
  }
  
  return d;
}

vec3 getNormal(vec3 p) {
  float d = map(p);
  vec2 e = vec2(0.01, 0.0);
  vec3 n = d - vec3(
    map(p - e.xyy),
    map(p - e.yxy),
    map(p - e.yyx)
  );
  return normalize(n);
}

void main() {
  vec2 uv = v_texCoord;
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  
  vec3 ro = vec3(0.0, 0.0, 3.0);
  vec3 rd = normalize(vec3(p, -1.0));
  
  vec3 texCol = texture2D(u_texture, uv).rgb;
  vec3 col = texCol * 0.3;
  
  float t = 0.0;
  
  for(int i = 0; i < MAX_STEPS; i++) {
    vec3 pos = ro + rd * t;
    float d = map(pos);
    
    if(d < SURF_DIST) {
      vec3 normal = getNormal(pos);
      vec3 lightDir = normalize(vec3(1.0, 1.0, 2.0));
      float diff = max(dot(normal, lightDir), 0.0);
      
      vec3 sphereCol = vec3(0.3, 0.6, 1.0);
      col = mix(col, sphereCol * (diff + 0.2), 0.8);
      break;
    }
    
    t += d;
    if(t > MAX_DIST) break;
  }
  
  gl_FragColor = vec4(col, 1.0);
}
`,mosaic:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

vec2 random2(vec2 st) {
  st = vec2(dot(st, vec2(127.1, 311.7)), dot(st, vec2(269.5, 183.3)));
  return fract(sin(st) * 43758.5453123);
}

void main() {
  vec2 uv = v_texCoord;
  vec2 st = uv * 20.0;
  
  vec2 i_st = floor(st);
  vec2 f_st = fract(st);
  
  vec2 point = random2(i_st);
  vec2 cellUv = (i_st + point) / 20.0;
  
  vec3 col = texture2D(u_texture, cellUv).rgb;
  
  float dist = length(f_st - point);
  float edge = smoothstep(0.4, 0.45, dist);
  col = mix(col, vec3(0.1), edge * 0.6);
  
  gl_FragColor = vec4(col, 1.0);
}
`,"oil-painting":`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 texelSize = 1.0 / u_resolution;
  
  vec3 col = vec3(0.0);
  float totalWeight = 0.0;
  
  for(int x = -2; x <= 2; x++) {
    for(int y = -2; y <= 2; y++) {
      vec2 offset = vec2(float(x), float(y)) * texelSize * 2.0;
      vec3 sample = texture2D(u_texture, uv + offset).rgb;
      
      float weight = 1.0 - length(offset) / (4.0 * length(texelSize));
      weight = max(weight, 0.1);
      
      col += sample * weight;
      totalWeight += weight;
    }
  }
  
  col /= totalWeight;
  
  gl_FragColor = vec4(col, 1.0);
}
`,"pixel-dither":`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

float bayer2(vec2 a) {
  a = floor(a);
  return fract(dot(a, vec2(0.5, a.y * 0.75)));
}

#define bayer4(a) (bayer2(0.5 * (a)) * 0.25 + bayer2(a))
#define bayer8(a) (bayer4(0.5 * (a)) * 0.25 + bayer2(a))

void main() {
  float pixelSize = 6.0 + sin(u_time * 0.5) * 3.0;
  vec2 pixelUv = floor(v_texCoord * u_resolution / pixelSize) * pixelSize / u_resolution;
  
  vec3 col = texture2D(u_texture, pixelUv).rgb;
  float gray = dot(col, vec3(0.299, 0.587, 0.114));
  
  float dither = bayer8(gl_FragCoord.xy);
  float threshold = gray + (dither - 0.5) * 0.3;
  
  col = vec3(step(0.5, threshold));
  
  gl_FragColor = vec4(col, 1.0);
}
`,glitch:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec2 uv = v_texCoord;
  
  float glitchStrength = step(0.96, random(vec2(u_time * 2.0, floor(uv.y * 30.0))));
  
  if(glitchStrength > 0.0) {
    float offset = (random(vec2(u_time, floor(uv.y * 30.0))) - 0.5) * 0.15;
    uv.x += offset;
  }
  
  float r = texture2D(u_texture, uv + vec2(0.01, 0.0) * glitchStrength).r;
  float g = texture2D(u_texture, uv).g;
  float b = texture2D(u_texture, uv - vec2(0.01, 0.0) * glitchStrength).b;
  
  vec3 col = vec3(r, g, b);
  
  if(glitchStrength > 0.0) {
    float scanline = sin(uv.y * 500.0) * 0.05;
    col += scanline;
  }
  
  gl_FragColor = vec4(col, 1.0);
}
`,"mosaic-tiles":`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  float tileSize = 20.0;
  vec2 tileUv = floor(v_texCoord * u_resolution / tileSize) * tileSize / u_resolution;
  tileUv += vec2(tileSize / 2.0) / u_resolution;
  
  vec3 col = texture2D(u_texture, tileUv).rgb;
  
  vec2 localUv = fract(v_texCoord * u_resolution / tileSize);
  vec2 center = vec2(0.5);
  float dist = length(localUv - center);
  
  float border = smoothstep(0.45, 0.5, dist);
  col = mix(col, col * 0.5, border);
  
  gl_FragColor = vec4(col, 1.0);
}
`,pixelate:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  float pixelSize = 8.0;
  vec2 pixelUv = floor(v_texCoord * u_resolution / pixelSize) * pixelSize / u_resolution;
  
  vec3 col = texture2D(u_texture, pixelUv).rgb;
  
  gl_FragColor = vec4(col, 1.0);
}
`,chromatic:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 offset = vec2(0.005, 0.0);
  
  float r = texture2D(u_texture, uv - offset).r;
  float g = texture2D(u_texture, uv).g;
  float b = texture2D(u_texture, uv + offset).b;
  
  gl_FragColor = vec4(r, g, b, 1.0);
}
`,heatmap:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

vec3 heatmap(float t) {
  vec3 a = vec3(0.0, 0.0, 1.0);
  vec3 b = vec3(0.0, 1.0, 1.0);
  vec3 c = vec3(0.0, 1.0, 0.0);
  vec3 d = vec3(1.0, 1.0, 0.0);
  vec3 e = vec3(1.0, 0.0, 0.0);
  
  if(t < 0.25) return mix(a, b, t * 4.0);
  else if(t < 0.5) return mix(b, c, (t - 0.25) * 4.0);
  else if(t < 0.75) return mix(c, d, (t - 0.5) * 4.0);
  else return mix(d, e, (t - 0.75) * 4.0);
}

void main() {
  vec2 uv = v_texCoord;
  vec3 texCol = texture2D(u_texture, uv).rgb;
  float gray = dot(texCol, vec3(0.299, 0.587, 0.114));
  
  vec3 col = heatmap(gray);
  
  gl_FragColor = vec4(col, 1.0);
}
`,vignette:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec3 col = texture2D(u_texture, uv).rgb;
  
  vec2 center = vec2(0.5);
  float dist = length(uv - center);
  float vignette = 1.0 - smoothstep(0.3, 0.8, dist);
  
  col *= vignette;
  
  gl_FragColor = vec4(col, 1.0);
}
`,swirl:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 center = vec2(0.5);
  vec2 tc = uv - center;
  
  float dist = length(tc);
  float angle = atan(tc.y, tc.x);
  
  angle += (1.0 - dist) * 3.0 * sin(u_time);
  
  vec2 newUv = center + dist * vec2(cos(angle), sin(angle));
  
  vec3 col = texture2D(u_texture, newUv).rgb;
  
  gl_FragColor = vec4(col, 1.0);
}
`,mirror:`
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  
  uv.x = abs(uv.x - 0.5) + 0.5;
  uv.y = abs(uv.y - 0.5) + 0.5;
  
  uv = fract(uv);
  
  vec3 col = texture2D(u_texture, uv).rgb;
  
  gl_FragColor = vec4(col, 1.0);
}
`},y=new Set(["raymarching-spheres","mandelbrot","voronoi","plasma","rgb-split","glitch","pixel-dither","wave-distortion","tunnel","ripple","swirl"]);function _({originalSrc:e,ditheredCanvas:t}){let[r,a]=(0,s.useState)(50),i=(0,s.useRef)(null),[l,n]=(0,s.useState)(!1),c=()=>n(!1);if(!t)return null;let d=t.toDataURL();return(0,o.jsxs)("div",{ref:i,className:"relative w-full aspect-auto overflow-hidden rounded-xl cursor-col-resize select-none",onMouseDown:()=>n(!0),onMouseUp:c,onMouseMove:e=>{if(!l||!i.current)return;let t=i.current.getBoundingClientRect();a(Math.max(0,Math.min(100,(e.clientX-t.left)/t.width*100)))},onMouseLeave:c,onTouchMove:e=>{if(!i.current)return;let t=i.current.getBoundingClientRect();a(Math.max(0,Math.min(100,(e.touches[0].clientX-t.left)/t.width*100)))},children:[(0,o.jsx)("img",{src:d,alt:"Dithered",className:"w-full h-full object-contain",draggable:!1}),(0,o.jsx)("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden",style:{clipPath:`inset(0 ${100-r}% 0 0)`},children:(0,o.jsx)("img",{src:e,alt:"Original",className:"w-full h-full object-contain",draggable:!1})}),(0,o.jsx)("div",{className:"absolute top-0 bottom-0 w-1 bg-white/80 shadow-lg",style:{left:`${r}%`},children:(0,o.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center cursor-col-resize",children:(0,o.jsx)("svg",{className:"w-6 h-6 text-gray-800",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 9l4-4 4 4m0 6l-4 4-4-4"})})})}),(0,o.jsx)("div",{className:"absolute bottom-4 left-4 glass-button px-3 py-1 rounded-lg text-xs font-medium text-white",children:"Original"}),(0,o.jsx)("div",{className:"absolute bottom-4 right-4 glass-button px-3 py-1 rounded-lg text-xs font-medium text-white",children:"Dithered"})]})}function k(){let{presets:e,savePreset:t,loadPreset:r,deletePreset:a,settings:i}=h(),[l,n]=(0,s.useState)(!1),[c,d]=(0,s.useState)(""),[u,g]=(0,s.useState)(!1),x=()=>{c.trim()&&(t(c.trim()),d(""),g(!1))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("button",{onClick:()=>n(!0),className:"glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200 flex items-center gap-2",children:[(0,o.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})}),"Presets (",e.length,")"]}),l&&(0,o.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",onClick:()=>n(!1),children:(0,o.jsxs)(m,{className:"max-w-2xl w-full max-h-[80vh] overflow-hidden animate-scale-in",onClick:e=>e.stopPropagation(),children:[(0,o.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,o.jsx)("h2",{className:"text-2xl font-semibold text-white",children:"Presets"}),(0,o.jsx)("button",{onClick:()=>n(!1),className:"glass-button p-2 rounded-xl text-white hover:bg-white/20",children:(0,o.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,o.jsxs)("div",{className:"mb-6",children:[(0,o.jsxs)("button",{onClick:()=>g(!u),className:"w-full glass-button px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 flex items-center justify-center gap-2",children:[(0,o.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),"Save Current Settings"]}),u&&(0,o.jsxs)("div",{className:"mt-4 flex gap-2",children:[(0,o.jsx)("input",{type:"text",value:c,onChange:e=>d(e.target.value),placeholder:"Preset name...",className:"flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-glassAccent",onKeyPress:e=>"Enter"===e.key&&x(),autoFocus:!0}),(0,o.jsx)("button",{onClick:x,className:"glass-button px-6 py-2 rounded-xl text-white font-medium",children:"Save"})]})]}),(0,o.jsx)("div",{className:"space-y-3 max-h-96 overflow-y-auto",children:0===e.length?(0,o.jsxs)("div",{className:"text-center text-white/60 py-8",children:[(0,o.jsx)("svg",{className:"w-16 h-16 mx-auto mb-4 opacity-40",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})}),(0,o.jsx)("p",{children:"No presets saved yet"}),(0,o.jsx)("p",{className:"text-sm mt-2",children:"Save your favorite settings for quick access"})]}):e.map(e=>(0,o.jsxs)("div",{className:"glass-panel p-4 rounded-xl flex items-center justify-between hover:bg-white/15 transition-all duration-200",children:[(0,o.jsxs)("div",{className:"flex-1",children:[(0,o.jsx)("h3",{className:"text-white font-medium",children:e.name}),(0,o.jsxs)("p",{className:"text-white/60 text-sm",children:[e.settings.algorithm," • ",e.settings.colorDepth," colors • ",new Date(e.timestamp).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})]})]}),(0,o.jsxs)("div",{className:"flex gap-2",children:[(0,o.jsx)("button",{onClick:()=>{r(e),n(!1)},className:"glass-button px-4 py-2 rounded-lg text-white text-sm font-medium",children:"Load"}),(0,o.jsx)("button",{onClick:()=>a(e.timestamp),className:"glass-button p-2 rounded-lg text-red-300 hover:text-red-400",children:(0,o.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})]},e.timestamp))})]})})]})}function C(){let[e,t]=(0,s.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{onClick:()=>t(!0),className:"glass-button p-2 rounded-xl text-white hover:bg-white/20 transition-all duration-200",title:"Keyboard Shortcuts",children:(0,o.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e&&(0,o.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",onClick:()=>t(!1),children:(0,o.jsxs)(m,{className:"max-w-lg w-full animate-scale-in",onClick:e=>e.stopPropagation(),children:[(0,o.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,o.jsx)("h2",{className:"text-2xl font-semibold text-white",children:"Keyboard Shortcuts"}),(0,o.jsx)("button",{onClick:()=>t(!1),className:"glass-button p-2 rounded-xl text-white hover:bg-white/20",children:(0,o.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,o.jsx)("div",{className:"space-y-3",children:[{key:"Space",description:"Toggle comparison view"},{key:"Ctrl/⌘ + Z",description:"Undo"},{key:"Ctrl/⌘ + Shift + Z",description:"Redo"},{key:"Ctrl/⌘ + S",description:"Download PNG"},{key:"Ctrl/⌘ + E",description:"Download SVG"},{key:"Ctrl/⌘ + O",description:"Open image"},{key:"R",description:"Reset settings"},{key:"C",description:"Toggle color mode"},{key:"?",description:"Show keyboard shortcuts"}].map((e,t)=>(0,o.jsxs)("div",{className:"flex justify-between items-center py-2",children:[(0,o.jsx)("span",{className:"text-white/80",children:e.description}),(0,o.jsx)("kbd",{className:"px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-mono",children:e.key})]},t))})]})})]})}function N(){var e;let t=(0,s.useRef)(null),r=(0,s.useRef)(null),[a,i]=(0,s.useState)(!1),[l,n]=(0,s.useState)(null),{originalImage:c,settings:d,imageDataUrl:u,showComparison:g,setShowComparison:x,isProcessing:v,setIsProcessing:f}=h(),N=["raymarching-spheres","mandelbrot","voronoi","plasma","kaleidoscope","rgb-split","glitch","pixel-dither","wave-distortion","tunnel","ripple","oil-painting","mosaic","mosaic-tiles","pixelate","chromatic","heatmap","vignette","swirl","mirror"].includes(d.filter),D=(e=d.filter,y.has(e));(0,s.useEffect)(()=>{if(c&&t.current)return r.current&&(r.current.destroy(),r.current=null),f(!0),n(null),(async()=>{if(t.current)try{if(N){let e=t.current;if(D?r.current=function(e,t,r,a){try{e.width=t.width,e.height=t.height;let i=new b(e),l=j[r];if(!i.createProgram(w,l))return console.error("Failed to create shader program"),null;return i.setTexture(t),i.setupGeometry(),i.animate(()=>({u_resolution:[e.width,e.height],u_brightness:a.brightness/100,u_contrast:a.contrast/100})),i}catch(e){return console.error("WebGL animation error:",e),null}}(e,c,d.filter,d):r.current=function(e,t,r,a){try{e.width=t.width,e.height=t.height;let i=new b(e),l=j[r];if(!i.createProgram(w,l))return console.error("Failed to create shader program"),null;i.setTexture(t),i.setupGeometry();let o={u_resolution:[e.width,e.height],u_time:0,u_brightness:a.brightness/100,u_contrast:a.contrast/100};return i.render(o),i}catch(e){return console.error("WebGL shader error:",e),null}}(e,c,d.filter,d),!r.current)throw Error("WebGL shader failed to initialize")}else await new Promise(e=>{requestAnimationFrame(()=>{t.current&&c&&p(t.current,c,d),e(null)})});f(!1)}catch(e){if(console.error("Processing error:",e),n(e instanceof Error?e.message:"Processing failed"),t.current){let e={...d,filter:"none"};p(t.current,c,e)}f(!1)}})(),()=>{r.current&&(r.current.destroy(),r.current=null)}},[c,d,N,D,f]);let S=()=>{i(!a)};return u?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(m,{className:"animate-slide-up",children:[(0,o.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-3",children:[(0,o.jsx)("h2",{className:"text-2xl font-semibold text-white",children:"Preview"}),(0,o.jsxs)("div",{className:"flex flex-wrap gap-3",children:[(0,o.jsx)(k,{}),(0,o.jsx)(C,{}),(0,o.jsx)("button",{onClick:()=>x(!g),className:`glass-button px-4 py-2 rounded-xl text-white text-sm font-medium
                       transition-all duration-200 ${g?"bg-glassAccent/60":""}`,title:"Toggle Comparison (Space)",children:(0,o.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})})}),(0,o.jsx)("button",{onClick:S,className:"glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200",children:a?"Exit":"Fullscreen"}),(0,o.jsxs)("button",{onClick:()=>{if(!t.current)return;let e=document.createElement("a"),r="none"!==d.filter?d.filter:d.algorithm;e.download=`ditherlab-${r}-${Date.now()}.png`,e.href=t.current.toDataURL("image/png"),e.click()},className:"glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200 flex items-center gap-2",title:"Download PNG (Ctrl+S)",children:[(0,o.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),"PNG"]}),!N&&(0,o.jsxs)("button",{onClick:()=>{if(!t.current||N)return void alert("SVG export is only available for dithering algorithms");let e=t.current,r=document.createElement("canvas");r.width=e.width,r.height=e.height;let a=r.getContext("2d");if(!a)return;a.drawImage(e,0,0);let i=a.getImageData(0,0,e.width,e.height).data,l=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${e.width}" height="${e.height}" viewBox="0 0 ${e.width} ${e.height}">`;for(let t=0;t<e.height;t++)for(let r=0;r<e.width;r++){let a=(t*e.width+r)*4,o=i[a],s=i[a+1],n=i[a+2];l+=`<rect x="${r}" y="${t}" width="1" height="1" fill="rgb(${o},${s},${n})"/>`}let o=new Blob([l+="</svg>"],{type:"image/svg+xml"}),s=URL.createObjectURL(o),n=document.createElement("a"),c="none"!==d.filter?d.filter:d.algorithm;n.download=`ditherlab-${c}-${Date.now()}.svg`,n.href=s,n.click(),URL.revokeObjectURL(s)},className:"glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200 flex items-center gap-2",title:"Download SVG (Ctrl+E)",children:[(0,o.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"})}),"SVG"]})]})]}),l&&(0,o.jsx)("div",{className:"mb-4 glass-panel p-4 rounded-xl border-2 border-red-500/50",children:(0,o.jsxs)("div",{className:"flex items-center gap-2 text-red-300 text-sm",children:[(0,o.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),l," - Falling back to Canvas 2D"]})}),v&&(0,o.jsxs)("div",{className:"mb-4 flex items-center gap-2 text-white/70 text-sm",children:[(0,o.jsx)("div",{className:"w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Processing",N?" with WebGL":"","..."]}),g?(0,o.jsx)(_,{originalSrc:u,ditheredCanvas:t.current}):(0,o.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"text-lg font-medium text-white/80 mb-3",children:"Original"}),(0,o.jsx)("div",{className:"rounded-xl overflow-hidden bg-black/20 border border-white/10",children:(0,o.jsx)("img",{src:u,alt:"Original",className:"w-full h-auto"})})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("h3",{className:"text-lg font-medium text-white/80 mb-3 flex items-center gap-2",children:["Processed (","none"!==d.filter?d.filter:d.algorithm,")",N&&(0,o.jsx)("span",{className:"text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-lg border border-green-500/30",children:"WebGL"})]}),(0,o.jsxs)("div",{className:"rounded-xl overflow-hidden bg-black/20 border border-white/10 relative",children:[(0,o.jsx)("canvas",{ref:t,className:"w-full h-auto",style:{imageRendering:"pixelated"}}),D&&(0,o.jsxs)("div",{className:"absolute top-2 right-2 glass-button px-2 py-1 rounded text-xs text-white flex items-center gap-1",children:[(0,o.jsx)("span",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),"LIVE 60fps"]})]})]})]})]}),a&&(0,o.jsxs)("div",{className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4",onClick:S,children:[(0,o.jsx)("button",{className:"absolute top-6 right-6 glass-button p-3 rounded-full text-white z-10 hover:scale-110 transition-transform",onClick:S,children:(0,o.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),(0,o.jsx)("div",{className:"max-w-full max-h-full overflow-auto",children:g?(0,o.jsx)("div",{className:"w-[90vw] max-w-6xl",children:(0,o.jsx)(_,{originalSrc:u,ditheredCanvas:t.current})}):(0,o.jsx)("canvas",{ref:t,className:"max-w-full max-h-[90vh] w-auto h-auto shadow-2xl",style:{imageRendering:"pixelated"}})})]})]}):null}function D(){let{imageDataUrl:e,showTutorial:t,setShowTutorial:r}=h();return(0,o.jsx)("main",{className:"min-h-screen py-8 px-4 md:px-8 lg:px-12",children:(0,o.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,o.jsxs)("div",{className:"text-center mb-12 animate-fade-in",children:[(0,o.jsx)("div",{className:"flex items-center justify-center mb-4",children:(0,o.jsx)("div",{className:"w-16 h-16 rounded-2xl bg-glassAccent backdrop-blur-xl  flex items-center justify-center border border-white/20 shadow-glass",children:(0,o.jsxs)("svg",{className:"w-10 h-10 text-white",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,o.jsx)("rect",{x:"2",y:"2",width:"4",height:"4"}),(0,o.jsx)("rect",{x:"10",y:"2",width:"4",height:"4"}),(0,o.jsx)("rect",{x:"18",y:"2",width:"4",height:"4"}),(0,o.jsx)("rect",{x:"6",y:"6",width:"4",height:"4"}),(0,o.jsx)("rect",{x:"14",y:"6",width:"4",height:"4"}),(0,o.jsx)("rect",{x:"2",y:"10",width:"4",height:"4"}),(0,o.jsx)("rect",{x:"10",y:"10",width:"4",height:"4"}),(0,o.jsx)("rect",{x:"18",y:"10",width:"4",height:"4"}),(0,o.jsx)("rect",{x:"6",y:"14",width:"4",height:"4"}),(0,o.jsx)("rect",{x:"14",y:"14",width:"4",height:"4"}),(0,o.jsx)("rect",{x:"2",y:"18",width:"4",height:"4"}),(0,o.jsx)("rect",{x:"10",y:"18",width:"4",height:"4"}),(0,o.jsx)("rect",{x:"18",y:"18",width:"4",height:"4"})]})})}),(0,o.jsx)("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight",children:"DitherLab"}),(0,o.jsx)("p",{className:"text-xl text-white/70 max-w-2xl mx-auto",children:"Create pixel-perfect halftone and glitch art in your browser"}),(0,o.jsx)("p",{className:"text-sm text-white/50 mt-2",children:"11 dithering algorithms • 28 shader effects • WebGL/GLSL • Real-time • No uploads"})]}),!e&&(0,o.jsxs)(o.Fragment,{children:[t&&(0,o.jsxs)(m,{className:"mb-8 animate-slide-up",children:[(0,o.jsxs)("div",{className:"flex justify-between items-start mb-4",children:[(0,o.jsx)("h3",{className:"text-xl font-semibold text-white",children:"Quick Start Guide"}),(0,o.jsx)("button",{onClick:()=>r(!1),className:"glass-button p-2 rounded-lg text-white/70 hover:text-white",children:(0,o.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,o.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,o.jsx)("span",{className:"text-2xl",children:"📤"})}),(0,o.jsx)("h4",{className:"text-white font-medium mb-2",children:"1. Upload Image"}),(0,o.jsx)("p",{className:"text-white/60 text-sm",children:"Drag & drop or click to upload any PNG, JPG, or WebP image"})]}),(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,o.jsx)("span",{className:"text-2xl",children:"🎨"})}),(0,o.jsx)("h4",{className:"text-white font-medium mb-2",children:"2. Choose Style"}),(0,o.jsx)("p",{className:"text-white/60 text-sm",children:"Pick from 11 dithering algorithms or 28 shader effects (WebGL/GLSL)"})]}),(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,o.jsx)("span",{className:"text-2xl",children:"⚙️"})}),(0,o.jsx)("h4",{className:"text-white font-medium mb-2",children:"3. Fine-tune"}),(0,o.jsx)("p",{className:"text-white/60 text-sm",children:"Adjust brightness, contrast, color depth, and more"})]})]})]}),(0,o.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",children:[(0,o.jsxs)(m,{className:"text-center",children:[(0,o.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,o.jsx)("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),(0,o.jsx)("h3",{className:"text-white font-semibold mb-1",children:"Lightning Fast"}),(0,o.jsx)("p",{className:"text-white/60 text-sm",children:"Real-time processing with Canvas API & WebGL"})]}),(0,o.jsxs)(m,{className:"text-center",children:[(0,o.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,o.jsx)("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),(0,o.jsx)("h3",{className:"text-white font-semibold mb-1",children:"Private & Secure"}),(0,o.jsx)("p",{className:"text-white/60 text-sm",children:"All processing happens in your browser"})]}),(0,o.jsxs)(m,{className:"text-center",children:[(0,o.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,o.jsx)("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})})}),(0,o.jsx)("h3",{className:"text-white font-semibold mb-1",children:"39 Effects"}),(0,o.jsx)("p",{className:"text-white/60 text-sm",children:"11 dithering + 28 shaders (WebGL/GLSL)"})]}),(0,o.jsxs)(m,{className:"text-center",children:[(0,o.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,o.jsx)("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})})}),(0,o.jsx)("h3",{className:"text-white font-semibold mb-1",children:"Export Ready"}),(0,o.jsx)("p",{className:"text-white/60 text-sm",children:"Download as PNG or SVG"})]})]})]}),(0,o.jsxs)("div",{className:e?"grid grid-cols-1 lg:grid-cols-3 gap-6":"",children:[(0,o.jsxs)("div",{className:e?"lg:col-span-1 space-y-6":"",children:[(0,o.jsx)(m,{className:"animate-slide-up",children:(0,o.jsx)(u,{})}),e&&(0,o.jsx)(g,{})]}),e&&(0,o.jsx)("div",{className:"lg:col-span-2",children:(0,o.jsx)(N,{})})]}),(0,o.jsx)("div",{className:"text-center mt-12 animate-fade-in",children:(0,o.jsxs)("div",{className:"glass-panel rounded-2xl p-6 inline-block",children:[(0,o.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm",children:[(0,o.jsxs)("span",{className:"flex items-center gap-2",children:[(0,o.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})}),"WebGL + Canvas API"]}),(0,o.jsx)("span",{children:"•"}),(0,o.jsxs)("span",{className:"flex items-center gap-2",children:[(0,o.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"60fps Shaders"]}),(0,o.jsx)("span",{children:"•"}),(0,o.jsxs)("span",{className:"flex items-center gap-2",children:[(0,o.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"100% Private"]})]}),(0,o.jsx)("div",{className:"mt-4 text-white/40 text-xs",children:"Built with Next.js 16, TypeScript, WebGL/GLSL, Tailwind CSS & Zustand"})]})})]})})}e.s(["default",()=>D],31713)}]);