module.exports=[49048,a=>{"use strict";function b(a,b){switch(b.filter){case"liquid-metal":d(a,b);break;case"mesh-gradient":e(a,b);break;case"static-mesh":f(a,b);break;case"radial-gradient":g(a,b);break;case"grain-gradient":h(a,b);break;case"dot-orbit":i(a,b);break;case"dot-grid":j(a,b);break;case"warp":k(a,b)}}function c(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data;for(let a=0;a<d.length;a+=4){let c,e,f,g=(.299*d[a]+.587*d[a+1]+.114*d[a+2])/255;g<.25?(c=0,e=4*g*255,f=255):g<.5?(c=0,e=255,f=(.5-g)*1020):(g<.75?(c=(g-.5)*1020,e=255):(c=255,e=(1-g)*1020),f=0),d[a]=c*(b.brightness/100),d[a+1]=e*(b.brightness/100),d[a+2]=f*(b.brightness/100)}a.putImageData(c,0,0)}function d(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height,g=new Uint8ClampedArray(d);for(let a=1;a<f-1;a++)for(let b=1;b<e-1;b++){let c=(a*e+b)*4,f=-g[((a-1)*e+(b-1))*4]+g[((a-1)*e+(b+1))*4]+-2*g[(a*e+(b-1))*4]+2*g[(a*e+(b+1))*4]+-g[((a+1)*e+(b-1))*4]+g[((a+1)*e+(b+1))*4],h=-g[((a-1)*e+(b-1))*4]+-2*g[((a-1)*e+b)*4]+-g[((a-1)*e+(b+1))*4]+g[((a+1)*e+(b-1))*4]+2*g[((a+1)*e+b)*4]+g[((a+1)*e+(b+1))*4],i=255-Math.min(Math.sqrt(f*f+h*h)/4,255);d[c]=.8*i,d[c+1]=.85*i,d[c+2]=i}a.putImageData(c,0,0)}function e(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height,g=.001*Date.now();for(let a=0;a<f;a++)for(let b=0;b<e;b++){let c=(a*e+b)*4,h=.299*d[c]+.587*d[c+1]+.114*d[c+2],i=b/e,j=a/f,k=127*Math.sin(3*i+g)+128,l=127*Math.sin(3*j+g+2)+128,m=127*Math.sin((i+j)*3+g+4)+128,n=h/255;d[c]=k*n,d[c+1]=l*n,d[c+2]=m*n}a.putImageData(c,0,0)}function f(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height,g=[{x:.2,y:.2,r:138,g:180,b:248},{x:.8,y:.2,r:248,g:113,b:113},{x:.5,y:.8,r:152,g:251,b:152},{x:.5,y:.5,r:251,g:211,b:141}];for(let a=0;a<f;a++)for(let b=0;b<e;b++){let c=(a*e+b)*4,h=.299*d[c]+.587*d[c+1]+.114*d[c+2],i=b/e,j=a/f,k=0,l=0,m=0,n=0;g.forEach(a=>{let b=i-a.x,c=j-a.y,d=Math.sqrt(b*b+c*c)+.001,e=1/(d*d);k+=e,l+=a.r*e,m+=a.g*e,n+=a.b*e});let o=h/255;d[c]=l/k*o,d[c+1]=m/k*o,d[c+2]=n/k*o}a.putImageData(c,0,0)}function g(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height,g=e/2,h=f/2,i=Math.sqrt(g*g+h*h);for(let a=0;a<f;a++)for(let b=0;b<e;b++){let c=(a*e+b)*4,f=.299*d[c]+.587*d[c+1]+.114*d[c+2],j=b-g,k=a-h,l=Math.sqrt(j*j+k*k)/i,m=138+-63*l,n=180+-180*l,o=f/255;d[c]=m*o,d[c+1]=n*o,d[c+2]=248*o}a.putImageData(c,0,0)}function h(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height;for(let a=0;a<f;a++)for(let b=0;b<e;b++){let c=(a*e+b)*4,f=Math.max(0,Math.min(255,b/e*255+(Math.random()-.5)*40));d[c]=f,d[c+1]=.9*f,d[c+2]=1.1*f}a.putImageData(c,0,0)}function i(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height,g=.001*Date.now(),h=e/2,i=f/2;d.fill(0);for(let a=0;a<8;a++){let b=(a+1)*Math.min(e,f)/16,c=1+.2*a;for(let j=0;j<12;j++){let k=j/12*Math.PI*2+g*c,l=Math.floor(h+Math.cos(k)*b),m=Math.floor(i+Math.sin(k)*b);if(l>=0&&l<e&&m>=0&&m<f)for(let b=-3;b<=3;b++)for(let c=-3;c<=3;c++){let g=l+c,h=m+b;if(g>=0&&g<e&&h>=0&&h<f&&c*c+b*b<=9){let b=(h*e+g)*4,c=255-20*a;d[b]=c,d[b+1]=.8*c,d[b+2]=1.2*c,d[b+3]=255}}}}a.putImageData(c,0,0)}function j(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height;for(let a=0;a<f;a+=15)for(let b=0;b<e;b+=15){let c=0,g=0;for(let h=0;h<15&&a+h<f;h++)for(let f=0;f<15&&b+f<e;f++){let i=((a+h)*e+(b+f))*4;c+=(d[i]+d[i+1]+d[i+2])/3,g++}let h=(c/=g)/255*5;for(let c=-5;c<=5;c++)for(let g=-5;g<=5;g++)if(g*g+c*c<=h*h){let h=b+7.5+g,i=a+7.5+c;if(h>=0&&h<e&&i>=0&&i<f){let a=(i*e+h)*4;d[a]=138,d[a+1]=180,d[a+2]=248}}}a.putImageData(c,0,0)}function k(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height,g=new Uint8ClampedArray(d),h=.002*Date.now();for(let a=0;a<f;a++)for(let b=0;b<e;b++){let c=(a*e+b)*4,i=10*Math.sin(.02*a+h),j=10*Math.cos(.02*b+h),k=Math.floor(b+i),l=Math.floor(a+j);if(k>=0&&k<e&&l>=0&&l<f){let a=(l*e+k)*4;d[c]=g[a],d[c+1]=g[a+1],d[c+2]=g[a+2]}}a.putImageData(c,0,0)}function l(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height,g=Math.max(2,Math.floor(b.colorDepth/4));for(let a=0;a<f;a+=g)for(let b=0;b<e;b+=g){let c=0,h=0,i=0,j=0;for(let k=0;k<g&&a+k<f;k++)for(let f=0;f<g&&b+f<e;f++){let g=((a+k)*e+(b+f))*4;c+=d[g],h+=d[g+1],i+=d[g+2],j++}c/=j,h/=j,i/=j;for(let j=0;j<g&&a+j<f;j++)for(let f=0;f<g&&b+f<e;f++){let g=((a+j)*e+(b+f))*4;d[g]=c,d[g+1]=h,d[g+2]=i}}a.putImageData(c,0,0)}function m(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height,g=new Uint8ClampedArray(d);for(let a=0;a<5;a++){let a=Math.floor(Math.random()*f),b=(Math.random()-.5)*50,c=Math.floor(20*Math.random())+5;for(let h=0;h<c&&a+h<f;h++)for(let c=0;c<e;c++){let f=Math.floor((c+b+e)%e),i=((a+h)*e+f)*4,j=((a+h)*e+c)*4;d[j]=g[i+1],d[j+1]=g[i+2],d[j+2]=g[i]}}a.putImageData(c,0,0)}function n(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height,g=new Uint8ClampedArray(d);for(let a=0;a<f;a++)for(let b=0;b<e;b++){let c=(a*e+b)*4;if(b-5>=0){let f=(a*e+(b-5))*4;d[c]=g[f]}if(d[c+1]=g[c+1],b+5<e){let f=(a*e+(b+5))*4;d[c+2]=g[f+2]}}a.putImageData(c,0,0)}function o(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height,g=e/2,h=f/2,i=Math.sqrt(g*g+h*h);for(let a=0;a<f;a++)for(let b=0;b<e;b++){let c=(a*e+b)*4,f=b-g,j=a-h,k=1-Math.pow(Math.sqrt(f*f+j*j)/i,2);d[c]*=k,d[c+1]*=k,d[c+2]*=k}a.putImageData(c,0,0)}a.s(["applyFilter",()=>b,"chromaticAberrationFilter",()=>n,"dotGridFilter",()=>j,"dotOrbitFilter",()=>i,"glitchFilter",()=>m,"grainGradientFilter",()=>h,"heatmapFilter",()=>c,"liquidMetalFilter",()=>d,"meshGradientFilter",()=>e,"pixelateFilter",()=>l,"staticMeshGradientFilter",()=>f,"staticRadialGradientFilter",()=>g,"vignetteFilter",()=>o,"warpFilter",()=>k])},60350,a=>{"use strict";let b,c,d,e;var f,g=a.i(87924),h=a.i(72131);let i=a=>{let b,c=new Set,d=(a,d)=>{let e="function"==typeof a?a(b):a;if(!Object.is(e,b)){let a=b;b=(null!=d?d:"object"!=typeof e||null===e)?e:Object.assign({},b,e),c.forEach(c=>c(b,a))}},e=()=>b,f={setState:d,getState:e,getInitialState:()=>g,subscribe:a=>(c.add(a),()=>c.delete(a))},g=b=a(d,e,f);return f},j=a=>b=>{try{let c=a(b);if(c instanceof Promise)return c;return{then:a=>j(a)(c),catch(a){return this}}}catch(a){return{then(a){return this},catch:b=>j(b)(a)}}},k={algorithm:"floyd-steinberg",colorDepth:2,contrast:100,brightness:100,colorMode:"grayscale",hue:0,saturation:100,filter:"none"},l=(d=(f=(b=(a,b)=>({originalImage:null,imageDataUrl:null,settings:k,isProcessing:!1,presets:[],history:[k],historyIndex:0,showComparison:!1,showTutorial:!0,setOriginalImage:(b,c)=>a({originalImage:b,imageDataUrl:c}),updateSettings:c=>{let d={...b().settings,...c};a({settings:d}),b().addToHistory(d)},setIsProcessing:b=>a({isProcessing:b}),reset:()=>a({originalImage:null,imageDataUrl:null,settings:k,isProcessing:!1,history:[k],historyIndex:0}),savePreset:c=>{let d={name:c,settings:b().settings,timestamp:Date.now()};a({presets:[...b().presets,d]})},loadPreset:c=>{a({settings:c.settings}),b().addToHistory(c.settings)},deletePreset:c=>{a({presets:b().presets.filter(a=>a.timestamp!==c)})},addToHistory:c=>{let{history:d,historyIndex:e}=b(),f=d.slice(0,e+1);f.push(c),f.length>50&&f.shift(),a({history:f,historyIndex:f.length-1})},undo:()=>{let{historyIndex:c,history:d}=b();if(c>0){let b=c-1;a({settings:d[b],historyIndex:b})}},redo:()=>{let{historyIndex:c,history:d}=b();if(c<d.length-1){let b=c+1;a({settings:d[b],historyIndex:b})}},canUndo:()=>b().historyIndex>0,canRedo:()=>b().historyIndex<b().history.length-1,setShowComparison:b=>a({showComparison:b}),setShowTutorial:b=>a({showTutorial:b})}),c={name:"ditherlab-storage",partialize:a=>({presets:a.presets,showTutorial:a.showTutorial})},(a,d,e)=>{let f,g={storage:function(a,b){let c;try{c=a()}catch(a){return}return{getItem:a=>{var b;let d=a=>null===a?null:JSON.parse(a,void 0),e=null!=(b=c.getItem(a))?b:null;return e instanceof Promise?e.then(d):d(e)},setItem:(a,b)=>c.setItem(a,JSON.stringify(b,void 0)),removeItem:a=>c.removeItem(a)}}(()=>localStorage),partialize:a=>a,version:0,merge:(a,b)=>({...b,...a}),...c},h=!1,i=new Set,k=new Set,l=g.storage;if(!l)return b((...b)=>{console.warn(`[zustand persist middleware] Unable to update item '${g.name}', the given storage is currently unavailable.`),a(...b)},d,e);let m=()=>{let a=g.partialize({...d()});return l.setItem(g.name,{state:a,version:g.version})},n=e.setState;e.setState=(a,b)=>(n(a,b),m());let o=b((...b)=>(a(...b),m()),d,e);e.getInitialState=()=>o;let p=()=>{var b,c;if(!l)return;h=!1,i.forEach(a=>{var b;return a(null!=(b=d())?b:o)});let e=(null==(c=g.onRehydrateStorage)?void 0:c.call(g,null!=(b=d())?b:o))||void 0;return j(l.getItem.bind(l))(g.name).then(a=>{if(a)if("number"!=typeof a.version||a.version===g.version)return[!1,a.state];else{if(g.migrate){let b=g.migrate(a.state,a.version);return b instanceof Promise?b.then(a=>[!0,a]):[!0,b]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(b=>{var c;let[e,h]=b;if(a(f=g.merge(h,null!=(c=d())?c:o),!0),e)return m()}).then(()=>{null==e||e(f,void 0),f=d(),h=!0,k.forEach(a=>a(f))}).catch(a=>{null==e||e(void 0,a)})};return e.persist={setOptions:a=>{g={...g,...a},a.storage&&(l=a.storage)},clearStorage:()=>{null==l||l.removeItem(g.name)},getOptions:()=>g,rehydrate:()=>p(),hasHydrated:()=>h,onHydrate:a=>(i.add(a),()=>{i.delete(a)}),onFinishHydration:a=>(k.add(a),()=>{k.delete(a)})},g.skipHydration||p(),f||o}))?i(f):i,Object.assign(e=a=>(function(a,b=a=>a){let c=h.default.useSyncExternalStore(a.subscribe,h.default.useCallback(()=>b(a.getState()),[a,b]),h.default.useCallback(()=>b(a.getInitialState()),[a,b]));return h.default.useDebugValue(c),c})(d,a),d),e);function m(){let[a,b]=(0,h.useState)(!1),{setOriginalImage:c,imageDataUrl:d,reset:e}=l(),f=(0,h.useCallback)(a=>{if(!a.type.startsWith("image/"))return void alert("Please upload an image file");let b=new FileReader;b.onload=a=>{let b=new Image;b.onload=()=>{c(b,a.target?.result)},b.src=a.target?.result},b.readAsDataURL(a)},[c]),i=(0,h.useCallback)(a=>{a.preventDefault(),b(!1);let c=a.dataTransfer.files[0];c&&f(c)},[f]),j=(0,h.useCallback)(a=>{a.preventDefault(),b(!0)},[]),k=(0,h.useCallback)(()=>{b(!1)},[]),m=(0,h.useCallback)(a=>{let b=a.target.files?.[0];b&&f(b)},[f]),n=(0,h.useCallback)(()=>{e(),document.getElementById("file-input")?.click()},[e]);return d?(0,g.jsx)("div",{className:"mb-6",children:(0,g.jsx)("button",{onClick:n,className:"glass-button px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 hover:scale-105",children:"Replace Image"})}):(0,g.jsx)("div",{className:"mb-6",children:(0,g.jsxs)("div",{onDrop:i,onDragOver:j,onDragLeave:k,className:`
          relative border-2 border-dashed rounded-2xl p-12
          transition-all duration-300
          ${a?"border-glassAccent bg-glassAccent/20 scale-105":"border-white/30 bg-white/5 hover:border-white/50"}
        `,children:[(0,g.jsx)("input",{id:"file-input",type:"file",accept:"image/*",onChange:m,className:"hidden"}),(0,g.jsxs)("div",{className:"flex flex-col items-center justify-center text-center",children:[(0,g.jsx)("svg",{className:"w-16 h-16 mb-4 text-white/70",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),(0,g.jsx)("h3",{className:"text-xl font-semibold text-white mb-2",children:"Drop your image here"}),(0,g.jsx)("p",{className:"text-white/60 mb-4",children:"or click to browse"}),(0,g.jsx)("button",{onClick:()=>document.getElementById("file-input")?.click(),className:"glass-button px-6 py-3 rounded-xl text-white font-medium",children:"Choose File"}),(0,g.jsx)("p",{className:"text-sm text-white/40 mt-4",children:"PNG, JPG, WebP supported"})]})]})})}function n({children:a,className:b="",onClick:c}){return(0,g.jsx)("div",{onClick:c,className:`
        rounded-3xl p-6 md:p-8
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl
        shadow-glass
        border border-white/20
        transition-all duration-300
        hover:shadow-glassHover
        ${b}
      `,children:a})}function o(){let{settings:a,updateSettings:b,imageDataUrl:c,undo:d,redo:e,canUndo:f,canRedo:h}=l();if(!c)return null;let i=[{value:"floyd-steinberg",label:"Floyd–Steinberg",category:"Error Diffusion"},{value:"atkinson",label:"Atkinson",category:"Error Diffusion"},{value:"jarvis-judice-ninke",label:"Jarvis-Judice-Ninke",category:"Error Diffusion"},{value:"stucki",label:"Stucki",category:"Error Diffusion"},{value:"burkes",label:"Burkes",category:"Error Diffusion"},{value:"sierra",label:"Sierra",category:"Error Diffusion"},{value:"sierra-lite",label:"Sierra Lite",category:"Error Diffusion"},{value:"bayer",label:"Bayer Matrix",category:"Ordered"},{value:"pattern",label:"Pattern / Crosshatch",category:"Ordered"},{value:"halftone",label:"Halftone Dots",category:"Special"},{value:"random",label:"Random Noise",category:"Special"}].reduce((a,b)=>(a[b.category]||(a[b.category]=[]),a[b.category].push(b),a),{}),j=[{value:"none",label:"None (Use Dithering)",category:"Dithering"},{value:"mesh-gradient",label:"Mesh Gradient (Canvas)",category:"Canvas 2D"},{value:"static-mesh",label:"Static Mesh",category:"Canvas 2D"},{value:"radial-gradient",label:"Radial Gradient",category:"Canvas 2D"},{value:"grain-gradient",label:"Grain Gradient",category:"Canvas 2D"},{value:"liquid-metal",label:"Liquid Metal",category:"Canvas 2D"},{value:"dot-orbit",label:"Dot Orbit",category:"Canvas 2D"},{value:"dot-grid",label:"Dot Grid",category:"Canvas 2D"},{value:"warp",label:"Warp",category:"Canvas 2D"},{value:"raymarching-spheres",label:"🔮 Raymarched Spheres",category:"WebGL - Raytracing"},{value:"mandelbrot",label:"🌀 Mandelbrot Set",category:"WebGL - Fractals"},{value:"voronoi",label:"🔶 Voronoi Cells",category:"WebGL - Fractals"},{value:"plasma",label:"⚡ Plasma Waves",category:"WebGL - Fractals"},{value:"tunnel",label:"🌊 Tunnel Effect",category:"WebGL - Distortion"},{value:"ripple",label:"💧 Ripple Effect",category:"WebGL - Distortion"},{value:"wave-distortion",label:"🌊 Wave Distortion",category:"WebGL - Distortion"},{value:"swirl",label:"🌀 Swirl Effect",category:"WebGL - Distortion"},{value:"kaleidoscope",label:"🔮 Kaleidoscope",category:"WebGL - Distortion"},{value:"mirror",label:"🪞 Mirror Effect",category:"WebGL - Distortion"},{value:"mosaic",label:"🎨 Voronoi Mosaic",category:"WebGL - Artistic"},{value:"mosaic-tiles",label:"🧩 Mosaic Tiles",category:"WebGL - Artistic"},{value:"oil-painting",label:"🖼️ Oil Painting",category:"WebGL - Artistic"},{value:"pixel-dither",label:"🎮 Pixel Dither",category:"WebGL - Artistic"},{value:"rgb-split",label:"📺 RGB Split",category:"WebGL - Effects"},{value:"glitch",label:"📺 Glitch",category:"WebGL - Effects"},{value:"chromatic",label:"🌈 Chromatic Aberration",category:"WebGL - Effects"},{value:"heatmap",label:"🔥 Heatmap",category:"WebGL - Effects"},{value:"vignette",label:"🎞️ Vignette",category:"WebGL - Effects"},{value:"pixelate",label:"🔲 Pixelate",category:"WebGL - Effects"}].reduce((a,b)=>(a[b.category]||(a[b.category]=[]),a[b.category].push(b),a),{}),k="none"!==a.filter;return(0,g.jsxs)(n,{className:"mb-6 animate-slide-up",children:[(0,g.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,g.jsx)("h2",{className:"text-2xl font-semibold text-white",children:"Controls"}),(0,g.jsxs)("div",{className:"flex gap-2",children:[(0,g.jsx)("button",{onClick:()=>d(),disabled:!f(),className:"glass-button p-2 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed",title:"Undo (Ctrl+Z)",children:(0,g.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"})})}),(0,g.jsx)("button",{onClick:()=>e(),disabled:!h(),className:"glass-button p-2 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed",title:"Redo (Ctrl+Shift+Z)",children:(0,g.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"})})})]})]}),(0,g.jsxs)("div",{className:"space-y-6",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:"Processing Mode"}),(0,g.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,g.jsx)("button",{onClick:()=>b({filter:"none"}),className:`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${!k?"bg-glassAccent/60 text-white border-2 border-white/40":"glass-button text-white/70"}`,children:"Dithering"}),(0,g.jsx)("button",{onClick:()=>b({filter:"heatmap"}),className:`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${k?"bg-glassAccent/60 text-white border-2 border-white/40":"glass-button text-white/70"}`,children:"Filters/Shaders"})]})]}),k?(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:"Filter Effect"}),(0,g.jsx)("select",{value:a.filter,onChange:a=>b({filter:a.target.value}),className:"w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-glassAccent transition-all duration-200",children:Object.entries(j).map(([a,b])=>(0,g.jsx)("optgroup",{label:a,className:"bg-gray-800",children:b.map(a=>(0,g.jsx)("option",{value:a.value,className:"bg-gray-900",children:a.label},a.value))},a))})]}):(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:"Dithering Algorithm"}),(0,g.jsx)("select",{value:a.algorithm,onChange:a=>b({algorithm:a.target.value}),className:"w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-glassAccent transition-all duration-200",children:Object.entries(i).map(([a,b])=>(0,g.jsx)("optgroup",{label:a,className:"bg-gray-800",children:b.map(a=>(0,g.jsx)("option",{value:a.value,className:"bg-gray-900",children:a.label},a.value))},a))})]}),!k&&(0,g.jsxs)("div",{children:[(0,g.jsx)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:"Color Mode"}),(0,g.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,g.jsx)("button",{onClick:()=>b({colorMode:"grayscale"}),className:`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${"grayscale"===a.colorMode?"bg-white/20 text-white border-2 border-white/40":"glass-button text-white/70"}`,children:"Grayscale"}),(0,g.jsx)("button",{onClick:()=>b({colorMode:"color"}),className:`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${"color"===a.colorMode?"bg-white/20 text-white border-2 border-white/40":"glass-button text-white/70"}`,children:"Color"})]})]}),!k&&(0,g.jsxs)("div",{children:[(0,g.jsxs)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:["Color Depth: ",a.colorDepth," colors"]}),(0,g.jsx)("input",{type:"range",min:"2",max:"256",value:a.colorDepth,onChange:a=>b({colorDepth:parseInt(a.target.value)}),className:"w-full h-2 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, 
                  rgba(138, 180, 248, 0.6) 0%, 
                  rgba(138, 180, 248, 0.6) ${(a.colorDepth-2)/254*100}%, 
                  rgba(255, 255, 255, 0.2) ${(a.colorDepth-2)/254*100}%, 
                  rgba(255, 255, 255, 0.2) 100%)`}}),(0,g.jsxs)("div",{className:"flex justify-between text-xs text-white/50 mt-1",children:[(0,g.jsx)("span",{children:"2"}),(0,g.jsx)("span",{children:"256"})]})]}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:["Contrast: ",a.contrast,"%"]}),(0,g.jsx)("input",{type:"range",min:"0",max:"200",value:a.contrast,onChange:a=>b({contrast:parseInt(a.target.value)}),className:"w-full h-2 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, 
                rgba(138, 180, 248, 0.6) 0%, 
                rgba(138, 180, 248, 0.6) ${a.contrast/200*100}%, 
                rgba(255, 255, 255, 0.2) ${a.contrast/200*100}%, 
                rgba(255, 255, 255, 0.2) 100%)`}})]}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:["Brightness: ",a.brightness,"%"]}),(0,g.jsx)("input",{type:"range",min:"0",max:"200",value:a.brightness,onChange:a=>b({brightness:parseInt(a.target.value)}),className:"w-full h-2 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, 
                rgba(138, 180, 248, 0.6) 0%, 
                rgba(138, 180, 248, 0.6) ${a.brightness/200*100}%, 
                rgba(255, 255, 255, 0.2) ${a.brightness/200*100}%, 
                rgba(255, 255, 255, 0.2) 100%)`}})]}),"color"===a.colorMode&&!k&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{children:[(0,g.jsxs)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:["Hue: ",a.hue,"°"]}),(0,g.jsx)("input",{type:"range",min:"0",max:"360",value:a.hue,onChange:a=>b({hue:parseInt(a.target.value)}),className:"w-full h-2 rounded-lg appearance-none cursor-pointer",style:{background:"linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)"}})]}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("label",{className:"block text-sm font-medium text-white/80 mb-2",children:["Saturation: ",a.saturation,"%"]}),(0,g.jsx)("input",{type:"range",min:"0",max:"200",value:a.saturation,onChange:a=>b({saturation:parseInt(a.target.value)}),className:"w-full h-2 rounded-lg appearance-none cursor-pointer",style:{background:`linear-gradient(to right, 
                    rgba(138, 180, 248, 0.6) 0%, 
                    rgba(138, 180, 248, 0.6) ${a.saturation/200*100}%, 
                    rgba(255, 255, 255, 0.2) ${a.saturation/200*100}%, 
                    rgba(255, 255, 255, 0.2) 100%)`}})]})]}),(0,g.jsx)("button",{onClick:()=>b({algorithm:"floyd-steinberg",colorDepth:2,contrast:100,brightness:100,colorMode:"grayscale",hue:0,saturation:100,filter:"none"}),className:"w-full glass-button px-6 py-3 rounded-xl text-white font-medium transition-all duration-200",children:"Reset to Defaults"})]})]})}function p(a,b,c){let d=(b-100)*2.55,e=(c-100)/100+1;for(let b=0;b<a.length;b+=4)a[b]=e*(a[b]-128)+128,a[b+1]=e*(a[b+1]-128)+128,a[b+2]=e*(a[b+2]-128)+128,a[b]+=d,a[b+1]+=d,a[b+2]+=d}function q(a){for(let b=0;b<a.length;b+=4){let c=.299*a[b]+.587*a[b+1]+.114*a[b+2];a[b]=a[b+1]=a[b+2]=c}}function r(a,b){let c=255/(b-1);return Math.round(Math.round(a/c)*c)}function s(b,c,d){let e=b.getContext("2d");if(e&&(b.width=c.width,b.height=c.height,e.drawImage(c,0,0),!["raymarching-spheres","mandelbrot","voronoi","plasma","kaleidoscope","rgb-split","glitch","pixel-dither","wave-distortion","tunnel","ripple","oil-painting","mosaic","mosaic-tiles","pixelate","chromatic","heatmap","vignette","swirl","mirror"].includes(d.filter)))if("none"!==d.filter){let{applyFilter:b}=a.r(49048);b(e,d)}else switch(d.algorithm){case"floyd-steinberg":!function(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height;p(d,b.brightness,b.contrast),"color"===b.colorMode&&function(a,b,c){let d=b/360,e=c/100;for(let b=0;b<a.length;b+=4){let c=a[b]/255,f=a[b+1]/255,g=a[b+2]/255,h=Math.max(c,f,g),i=Math.min(c,f,g),j=0,k=0,l=(h+i)/2;if(h!==i){let a=h-i;switch(k=l>.5?a/(2-h-i):a/(h+i),h){case c:j=((f-g)/a+6*(f<g))/6;break;case f:j=((g-c)/a+2)/6;break;case g:j=((c-f)/a+4)/6}}j=(j+d)%1;let m=(a,b,c)=>(c<0&&(c+=1),c>1&&(c-=1),c<1/6)?a+(b-a)*6*c:c<.5?b:c<2/3?a+(b-a)*(2/3-c)*6:a;if(0===(k=Math.max(0,Math.min(1,k*e))))c=f=g=l;else{let a=l<.5?l*(1+k):l+k-l*k,b=2*l-a;c=m(b,a,j+1/3),f=m(b,a,j),g=m(b,a,j-1/3)}a[b]=Math.round(255*c),a[b+1]=Math.round(255*f),a[b+2]=Math.round(255*g)}}(d,b.hue,b.saturation),"grayscale"===b.colorMode&&q(d);for(let a=0;a<f;a++)for(let c=0;c<e;c++){let g=(a*e+c)*4,h=d[g],i=r(h,b.colorDepth),j=h-i;d[g]=d[g+1]=d[g+2]=i;let k=(b,g,h)=>{let i=c+b,k=a+g;if(i>=0&&i<e&&k>=0&&k<f){let a=(k*e+i)*4;d[a]+=j*h,d[a+1]+=j*h,d[a+2]+=j*h}};k(1,0,7/16),k(-1,1,3/16),k(0,1,5/16),k(1,1,1/16)}a.putImageData(c,0,0)}(e,d);break;case"atkinson":!function(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height;p(d,b.brightness,b.contrast),q(d);for(let a=0;a<f;a++)for(let c=0;c<e;c++){let g=(a*e+c)*4,h=d[g],i=r(h,b.colorDepth),j=h-i;d[g]=d[g+1]=d[g+2]=i;let k=(b,g)=>{let h=c+b,i=a+g;if(h>=0&&h<e&&i>=0&&i<f){let a=(i*e+h)*4;d[a]+=j/8,d[a+1]+=j/8,d[a+2]+=j/8}};k(1,0),k(2,0),k(-1,1),k(0,1),k(1,1),k(0,2)}a.putImageData(c,0,0)}(e,d);break;case"bayer":!function(a,b){let c=[[0,32,8,40,2,34,10,42],[48,16,56,24,50,18,58,26],[12,44,4,36,14,46,6,38],[60,28,52,20,62,30,54,22],[3,35,11,43,1,33,9,41],[51,19,59,27,49,17,57,25],[15,47,7,39,13,45,5,37],[63,31,55,23,61,29,53,21]],d=a.getImageData(0,0,a.canvas.width,a.canvas.height),e=d.data,f=d.width,g=d.height;p(e,b.brightness,b.contrast),q(e);for(let a=0;a<g;a++)for(let d=0;d<f;d++){let g=(a*f+d)*4,h=r(e[g]+(c[a%8][d%8]/64*255-127.5)/(b.colorDepth-1),b.colorDepth);e[g]=e[g+1]=e[g+2]=h}a.putImageData(d,0,0)}(e,d);break;case"random":!function(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height;p(d,b.brightness,b.contrast),q(d);for(let a=0;a<f;a++)for(let c=0;c<e;c++){let f=(a*e+c)*4,g=r(d[f]+(Math.random()-.5)*50,b.colorDepth);d[f]=d[f+1]=d[f+2]=g}a.putImageData(c,0,0)}(e,d);break;case"jarvis-judice-ninke":!function(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height;p(d,b.brightness,b.contrast),q(d);for(let a=0;a<f;a++)for(let c=0;c<e;c++){let g=(a*e+c)*4,h=d[g],i=r(h,b.colorDepth),j=h-i;d[g]=d[g+1]=d[g+2]=i;let k=(b,g,h)=>{let i=c+b,k=a+g;if(i>=0&&i<e&&k>=0&&k<f){let a=(k*e+i)*4;d[a]+=j*h,d[a+1]+=j*h,d[a+2]+=j*h}};k(1,0,7/48),k(2,0,5/48),k(-2,1,3/48),k(-1,1,5/48),k(0,1,7/48),k(1,1,5/48),k(2,1,3/48),k(-2,2,1/48),k(-1,2,3/48),k(0,2,5/48),k(1,2,3/48),k(2,2,1/48)}a.putImageData(c,0,0)}(e,d);break;case"stucki":!function(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height;p(d,b.brightness,b.contrast),q(d);for(let a=0;a<f;a++)for(let c=0;c<e;c++){let g=(a*e+c)*4,h=d[g],i=r(h,b.colorDepth),j=h-i;d[g]=d[g+1]=d[g+2]=i;let k=(b,g,h)=>{let i=c+b,k=a+g;if(i>=0&&i<e&&k>=0&&k<f){let a=(k*e+i)*4;d[a]+=j*h,d[a+1]+=j*h,d[a+2]+=j*h}};k(1,0,8/42),k(2,0,4/42),k(-2,1,2/42),k(-1,1,4/42),k(0,1,8/42),k(1,1,4/42),k(2,1,2/42),k(-2,2,1/42),k(-1,2,2/42),k(0,2,4/42),k(1,2,2/42),k(2,2,1/42)}a.putImageData(c,0,0)}(e,d);break;case"burkes":!function(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height;p(d,b.brightness,b.contrast),q(d);for(let a=0;a<f;a++)for(let c=0;c<e;c++){let g=(a*e+c)*4,h=d[g],i=r(h,b.colorDepth),j=h-i;d[g]=d[g+1]=d[g+2]=i;let k=(b,g,h)=>{let i=c+b,k=a+g;if(i>=0&&i<e&&k>=0&&k<f){let a=(k*e+i)*4;d[a]+=j*h,d[a+1]+=j*h,d[a+2]+=j*h}};k(1,0,.25),k(2,0,4/32),k(-2,1,2/32),k(-1,1,4/32),k(0,1,.25),k(1,1,4/32),k(2,1,2/32)}a.putImageData(c,0,0)}(e,d);break;case"sierra":!function(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height;p(d,b.brightness,b.contrast),q(d);for(let a=0;a<f;a++)for(let c=0;c<e;c++){let g=(a*e+c)*4,h=d[g],i=r(h,b.colorDepth),j=h-i;d[g]=d[g+1]=d[g+2]=i;let k=(b,g,h)=>{let i=c+b,k=a+g;if(i>=0&&i<e&&k>=0&&k<f){let a=(k*e+i)*4;d[a]+=j*h,d[a+1]+=j*h,d[a+2]+=j*h}};k(1,0,5/32),k(2,0,3/32),k(-2,1,2/32),k(-1,1,4/32),k(0,1,5/32),k(1,1,4/32),k(2,1,2/32),k(-1,2,2/32),k(0,2,3/32),k(1,2,2/32)}a.putImageData(c,0,0)}(e,d);break;case"sierra-lite":!function(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height;p(d,b.brightness,b.contrast),q(d);for(let a=0;a<f;a++)for(let c=0;c<e;c++){let g=(a*e+c)*4,h=d[g],i=r(h,b.colorDepth),j=h-i;d[g]=d[g+1]=d[g+2]=i;let k=(b,g,h)=>{let i=c+b,k=a+g;if(i>=0&&i<e&&k>=0&&k<f){let a=(k*e+i)*4;d[a]+=j*h,d[a+1]+=j*h,d[a+2]+=j*h}};k(1,0,.5),k(-1,1,1/4),k(0,1,1/4)}a.putImageData(c,0,0)}(e,d);break;case"halftone":!function(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height;p(d,b.brightness,b.contrast),q(d);for(let a=0;a<f;a+=4)for(let b=0;b<e;b+=4){let c=0,g=0;for(let h=0;h<4&&a+h<f;h++)for(let f=0;f<4&&b+f<e;f++)c+=d[((a+h)*e+(b+f))*4],g++;let h=(255-c/g)/255*2;for(let c=0;c<4&&a+c<f;c++)for(let f=0;f<4&&b+f<e;f++){let g=((a+c)*e+(b+f))*4,i=Math.sqrt((f-2)**2+(c-2)**2)<h?0:255;d[g]=d[g+1]=d[g+2]=i}}a.putImageData(c,0,0)}(e,d);break;case"pattern":!function(a,b){let c=a.getImageData(0,0,a.canvas.width,a.canvas.height),d=c.data,e=c.width,f=c.height;p(d,b.brightness,b.contrast),q(d);let g=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1],[0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0],[0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0],[0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0],[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],[1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1],[1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1],[1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],[1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];for(let a=0;a<f;a++)for(let b=0;b<e;b++){let c=(a*e+b)*4,f=Math.floor(d[c]/255*(g.length-1)),h=255*g[f][a%4*4+b%4];d[c]=d[c+1]=d[c+2]=h}a.putImageData(c,0,0)}(e,d)}}class t{gl;program=null;canvas;animationId=null;startTime=Date.now();texture=null;constructor(a){this.canvas=a;const b=a.getContext("webgl",{premultipliedAlpha:!1,preserveDrawingBuffer:!0})||a.getContext("experimental-webgl",{premultipliedAlpha:!1,preserveDrawingBuffer:!0});if(!b)throw Error("WebGL not supported");this.gl=b}compileShader(a,b){let c=this.gl.createShader(b);return c?(this.gl.shaderSource(c,a),this.gl.compileShader(c),this.gl.getShaderParameter(c,this.gl.COMPILE_STATUS))?c:(console.error("Shader compilation failed:",this.gl.getShaderInfoLog(c)),this.gl.deleteShader(c),null):null}createProgram(a,b){let c=this.compileShader(a,this.gl.VERTEX_SHADER),d=this.compileShader(b,this.gl.FRAGMENT_SHADER);return!!c&&!!d&&(this.program=this.gl.createProgram(),!!this.program&&((this.gl.attachShader(this.program,c),this.gl.attachShader(this.program,d),this.gl.linkProgram(this.program),this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))?(this.gl.useProgram(this.program),this.gl.deleteShader(c),this.gl.deleteShader(d),!0):(console.error("Program linking failed:",this.gl.getProgramInfoLog(this.program)),!1)))}setTexture(a){if(this.texture&&this.gl.deleteTexture(this.texture),this.texture=this.gl.createTexture(),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,a),this.program){let a=this.gl.getUniformLocation(this.program,"u_texture");this.gl.uniform1i(a,0)}}setupGeometry(){let a=new Float32Array([-1,-1,1,-1,-1,1,1,1]),b=new Float32Array([0,1,1,1,0,0,1,0]),c=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,c),this.gl.bufferData(this.gl.ARRAY_BUFFER,a,this.gl.STATIC_DRAW);let d=this.gl.getAttribLocation(this.program,"a_position");this.gl.enableVertexAttribArray(d),this.gl.vertexAttribPointer(d,2,this.gl.FLOAT,!1,0,0);let e=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,e),this.gl.bufferData(this.gl.ARRAY_BUFFER,b,this.gl.STATIC_DRAW);let f=this.gl.getAttribLocation(this.program,"a_texCoord");this.gl.enableVertexAttribArray(f),this.gl.vertexAttribPointer(f,2,this.gl.FLOAT,!1,0,0)}setUniform(a,b){if(!this.program)return;let c=this.gl.getUniformLocation(this.program,a);null!==c&&("number"==typeof b?this.gl.uniform1f(c,b):2===b.length?this.gl.uniform2f(c,b[0],b[1]):3===b.length?this.gl.uniform3f(c,b[0],b[1],b[2]):4===b.length&&this.gl.uniform4f(c,b[0],b[1],b[2],b[3]))}render(a={}){this.gl.viewport(0,0,this.canvas.width,this.canvas.height),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),Object.entries(a).forEach(([a,b])=>{this.setUniform(a,b)}),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}animate(a){let b=()=>{let c=(Date.now()-this.startTime)/1e3;this.render({u_time:c,...a()}),this.animationId=requestAnimationFrame(b)};b()}stopAnimation(){null!==this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=null)}destroy(){this.stopAnimation(),this.texture&&(this.gl.deleteTexture(this.texture),this.texture=null),this.program&&(this.gl.deleteProgram(this.program),this.program=null)}}let u=`
attribute vec2 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}
`,v={plasma:`
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
`},w=new Set(["raymarching-spheres","mandelbrot","voronoi","plasma","rgb-split","glitch","pixel-dither","wave-distortion","tunnel","ripple","swirl"]);function x({originalSrc:a,ditheredCanvas:b}){let[c,d]=(0,h.useState)(50),e=(0,h.useRef)(null),[f,i]=(0,h.useState)(!1),j=()=>i(!1);if(!b)return null;let k=b.toDataURL();return(0,g.jsxs)("div",{ref:e,className:"relative w-full aspect-auto overflow-hidden rounded-xl cursor-col-resize select-none",onMouseDown:()=>i(!0),onMouseUp:j,onMouseMove:a=>{if(!f||!e.current)return;let b=e.current.getBoundingClientRect();d(Math.max(0,Math.min(100,(a.clientX-b.left)/b.width*100)))},onMouseLeave:j,onTouchMove:a=>{if(!e.current)return;let b=e.current.getBoundingClientRect();d(Math.max(0,Math.min(100,(a.touches[0].clientX-b.left)/b.width*100)))},children:[(0,g.jsx)("img",{src:k,alt:"Dithered",className:"w-full h-full object-contain",draggable:!1}),(0,g.jsx)("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden",style:{clipPath:`inset(0 ${100-c}% 0 0)`},children:(0,g.jsx)("img",{src:a,alt:"Original",className:"w-full h-full object-contain",draggable:!1})}),(0,g.jsx)("div",{className:"absolute top-0 bottom-0 w-1 bg-white/80 shadow-lg",style:{left:`${c}%`},children:(0,g.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center cursor-col-resize",children:(0,g.jsx)("svg",{className:"w-6 h-6 text-gray-800",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 9l4-4 4 4m0 6l-4 4-4-4"})})})}),(0,g.jsx)("div",{className:"absolute bottom-4 left-4 glass-button px-3 py-1 rounded-lg text-xs font-medium text-white",children:"Original"}),(0,g.jsx)("div",{className:"absolute bottom-4 right-4 glass-button px-3 py-1 rounded-lg text-xs font-medium text-white",children:"Dithered"})]})}function y(){let{presets:a,savePreset:b,loadPreset:c,deletePreset:d,settings:e}=l(),[f,i]=(0,h.useState)(!1),[j,k]=(0,h.useState)(""),[m,o]=(0,h.useState)(!1),p=()=>{j.trim()&&(b(j.trim()),k(""),o(!1))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("button",{onClick:()=>i(!0),className:"glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200 flex items-center gap-2",children:[(0,g.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})}),"Presets (",a.length,")"]}),f&&(0,g.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",onClick:()=>i(!1),children:(0,g.jsxs)(n,{className:"max-w-2xl w-full max-h-[80vh] overflow-hidden animate-scale-in",onClick:a=>a.stopPropagation(),children:[(0,g.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,g.jsx)("h2",{className:"text-2xl font-semibold text-white",children:"Presets"}),(0,g.jsx)("button",{onClick:()=>i(!1),className:"glass-button p-2 rounded-xl text-white hover:bg-white/20",children:(0,g.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,g.jsxs)("div",{className:"mb-6",children:[(0,g.jsxs)("button",{onClick:()=>o(!m),className:"w-full glass-button px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 flex items-center justify-center gap-2",children:[(0,g.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),"Save Current Settings"]}),m&&(0,g.jsxs)("div",{className:"mt-4 flex gap-2",children:[(0,g.jsx)("input",{type:"text",value:j,onChange:a=>k(a.target.value),placeholder:"Preset name...",className:"flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-glassAccent",onKeyPress:a=>"Enter"===a.key&&p(),autoFocus:!0}),(0,g.jsx)("button",{onClick:p,className:"glass-button px-6 py-2 rounded-xl text-white font-medium",children:"Save"})]})]}),(0,g.jsx)("div",{className:"space-y-3 max-h-96 overflow-y-auto",children:0===a.length?(0,g.jsxs)("div",{className:"text-center text-white/60 py-8",children:[(0,g.jsx)("svg",{className:"w-16 h-16 mx-auto mb-4 opacity-40",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})}),(0,g.jsx)("p",{children:"No presets saved yet"}),(0,g.jsx)("p",{className:"text-sm mt-2",children:"Save your favorite settings for quick access"})]}):a.map(a=>(0,g.jsxs)("div",{className:"glass-panel p-4 rounded-xl flex items-center justify-between hover:bg-white/15 transition-all duration-200",children:[(0,g.jsxs)("div",{className:"flex-1",children:[(0,g.jsx)("h3",{className:"text-white font-medium",children:a.name}),(0,g.jsxs)("p",{className:"text-white/60 text-sm",children:[a.settings.algorithm," • ",a.settings.colorDepth," colors • ",new Date(a.timestamp).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})]})]}),(0,g.jsxs)("div",{className:"flex gap-2",children:[(0,g.jsx)("button",{onClick:()=>{c(a),i(!1)},className:"glass-button px-4 py-2 rounded-lg text-white text-sm font-medium",children:"Load"}),(0,g.jsx)("button",{onClick:()=>d(a.timestamp),className:"glass-button p-2 rounded-lg text-red-300 hover:text-red-400",children:(0,g.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})]},a.timestamp))})]})})]})}function z(){let[a,b]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("button",{onClick:()=>b(!0),className:"glass-button p-2 rounded-xl text-white hover:bg-white/20 transition-all duration-200",title:"Keyboard Shortcuts",children:(0,g.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),a&&(0,g.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",onClick:()=>b(!1),children:(0,g.jsxs)(n,{className:"max-w-lg w-full animate-scale-in",onClick:a=>a.stopPropagation(),children:[(0,g.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,g.jsx)("h2",{className:"text-2xl font-semibold text-white",children:"Keyboard Shortcuts"}),(0,g.jsx)("button",{onClick:()=>b(!1),className:"glass-button p-2 rounded-xl text-white hover:bg-white/20",children:(0,g.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,g.jsx)("div",{className:"space-y-3",children:[{key:"Space",description:"Toggle comparison view"},{key:"Ctrl/⌘ + Z",description:"Undo"},{key:"Ctrl/⌘ + Shift + Z",description:"Redo"},{key:"Ctrl/⌘ + S",description:"Download PNG"},{key:"Ctrl/⌘ + E",description:"Download SVG"},{key:"Ctrl/⌘ + O",description:"Open image"},{key:"R",description:"Reset settings"},{key:"C",description:"Toggle color mode"},{key:"?",description:"Show keyboard shortcuts"}].map((a,b)=>(0,g.jsxs)("div",{className:"flex justify-between items-center py-2",children:[(0,g.jsx)("span",{className:"text-white/80",children:a.description}),(0,g.jsx)("kbd",{className:"px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-mono",children:a.key})]},b))})]})})]})}function A(){var a;let b=(0,h.useRef)(null),c=(0,h.useRef)(null),[d,e]=(0,h.useState)(!1),[f,i]=(0,h.useState)(null),{originalImage:j,settings:k,imageDataUrl:m,showComparison:o,setShowComparison:p,isProcessing:q,setIsProcessing:r}=l(),A=["raymarching-spheres","mandelbrot","voronoi","plasma","kaleidoscope","rgb-split","glitch","pixel-dither","wave-distortion","tunnel","ripple","oil-painting","mosaic","mosaic-tiles","pixelate","chromatic","heatmap","vignette","swirl","mirror"].includes(k.filter),B=(a=k.filter,w.has(a));(0,h.useEffect)(()=>{if(j&&b.current)return c.current&&(c.current.destroy(),c.current=null),r(!0),i(null),(async()=>{if(b.current)try{if(A){let a=b.current;if(B?c.current=function(a,b,c,d){try{a.width=b.width,a.height=b.height;let e=new t(a),f=v[c];if(!e.createProgram(u,f))return console.error("Failed to create shader program"),null;return e.setTexture(b),e.setupGeometry(),e.animate(()=>({u_resolution:[a.width,a.height],u_brightness:d.brightness/100,u_contrast:d.contrast/100})),e}catch(a){return console.error("WebGL animation error:",a),null}}(a,j,k.filter,k):c.current=function(a,b,c,d){try{a.width=b.width,a.height=b.height;let e=new t(a),f=v[c];if(!e.createProgram(u,f))return console.error("Failed to create shader program"),null;e.setTexture(b),e.setupGeometry();let g={u_resolution:[a.width,a.height],u_time:0,u_brightness:d.brightness/100,u_contrast:d.contrast/100};return e.render(g),e}catch(a){return console.error("WebGL shader error:",a),null}}(a,j,k.filter,k),!c.current)throw Error("WebGL shader failed to initialize")}else await new Promise(a=>{requestAnimationFrame(()=>{b.current&&j&&s(b.current,j,k),a(null)})});r(!1)}catch(a){if(console.error("Processing error:",a),i(a instanceof Error?a.message:"Processing failed"),b.current){let a={...k,filter:"none"};s(b.current,j,a)}r(!1)}})(),()=>{c.current&&(c.current.destroy(),c.current=null)}},[j,k,A,B,r]);let C=()=>{e(!d)};return m?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(n,{className:"animate-slide-up",children:[(0,g.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-3",children:[(0,g.jsx)("h2",{className:"text-2xl font-semibold text-white",children:"Preview"}),(0,g.jsxs)("div",{className:"flex flex-wrap gap-3",children:[(0,g.jsx)(y,{}),(0,g.jsx)(z,{}),(0,g.jsx)("button",{onClick:()=>p(!o),className:`glass-button px-4 py-2 rounded-xl text-white text-sm font-medium
                       transition-all duration-200 ${o?"bg-glassAccent/60":""}`,title:"Toggle Comparison (Space)",children:(0,g.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})})}),(0,g.jsx)("button",{onClick:C,className:"glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200",children:d?"Exit":"Fullscreen"}),(0,g.jsxs)("button",{onClick:()=>{if(!b.current)return;let a=document.createElement("a"),c="none"!==k.filter?k.filter:k.algorithm;a.download=`ditherlab-${c}-${Date.now()}.png`,a.href=b.current.toDataURL("image/png"),a.click()},className:"glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200 flex items-center gap-2",title:"Download PNG (Ctrl+S)",children:[(0,g.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),"PNG"]}),!A&&(0,g.jsxs)("button",{onClick:()=>{if(!b.current||A)return void alert("SVG export is only available for dithering algorithms");let a=b.current,c=document.createElement("canvas");c.width=a.width,c.height=a.height;let d=c.getContext("2d");if(!d)return;d.drawImage(a,0,0);let e=d.getImageData(0,0,a.width,a.height).data,f=`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${a.width}" height="${a.height}" viewBox="0 0 ${a.width} ${a.height}">`;for(let b=0;b<a.height;b++)for(let c=0;c<a.width;c++){let d=(b*a.width+c)*4,g=e[d],h=e[d+1],i=e[d+2];f+=`<rect x="${c}" y="${b}" width="1" height="1" fill="rgb(${g},${h},${i})"/>`}let g=new Blob([f+="</svg>"],{type:"image/svg+xml"}),h=URL.createObjectURL(g),i=document.createElement("a"),j="none"!==k.filter?k.filter:k.algorithm;i.download=`ditherlab-${j}-${Date.now()}.svg`,i.href=h,i.click(),URL.revokeObjectURL(h)},className:"glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200 flex items-center gap-2",title:"Download SVG (Ctrl+E)",children:[(0,g.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"})}),"SVG"]})]})]}),f&&(0,g.jsx)("div",{className:"mb-4 glass-panel p-4 rounded-xl border-2 border-red-500/50",children:(0,g.jsxs)("div",{className:"flex items-center gap-2 text-red-300 text-sm",children:[(0,g.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),f," - Falling back to Canvas 2D"]})}),q&&(0,g.jsxs)("div",{className:"mb-4 flex items-center gap-2 text-white/70 text-sm",children:[(0,g.jsx)("div",{className:"w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Processing",A?" with WebGL":"","..."]}),o?(0,g.jsx)(x,{originalSrc:m,ditheredCanvas:b.current}):(0,g.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{className:"text-lg font-medium text-white/80 mb-3",children:"Original"}),(0,g.jsx)("div",{className:"rounded-xl overflow-hidden bg-black/20 border border-white/10",children:(0,g.jsx)("img",{src:m,alt:"Original",className:"w-full h-auto"})})]}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("h3",{className:"text-lg font-medium text-white/80 mb-3 flex items-center gap-2",children:["Processed (","none"!==k.filter?k.filter:k.algorithm,")",A&&(0,g.jsx)("span",{className:"text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-lg border border-green-500/30",children:"WebGL"})]}),(0,g.jsxs)("div",{className:"rounded-xl overflow-hidden bg-black/20 border border-white/10 relative",children:[(0,g.jsx)("canvas",{ref:b,className:"w-full h-auto",style:{imageRendering:"pixelated"}}),B&&(0,g.jsxs)("div",{className:"absolute top-2 right-2 glass-button px-2 py-1 rounded text-xs text-white flex items-center gap-1",children:[(0,g.jsx)("span",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),"LIVE 60fps"]})]})]})]})]}),d&&(0,g.jsxs)("div",{className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4",onClick:C,children:[(0,g.jsx)("button",{className:"absolute top-6 right-6 glass-button p-3 rounded-full text-white z-10 hover:scale-110 transition-transform",onClick:C,children:(0,g.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),(0,g.jsx)("div",{className:"max-w-full max-h-full overflow-auto",children:o?(0,g.jsx)("div",{className:"w-[90vw] max-w-6xl",children:(0,g.jsx)(x,{originalSrc:m,ditheredCanvas:b.current})}):(0,g.jsx)("canvas",{ref:b,className:"max-w-full max-h-[90vh] w-auto h-auto shadow-2xl",style:{imageRendering:"pixelated"}})})]})]}):null}function B(){let{imageDataUrl:a,showTutorial:b,setShowTutorial:c}=l();return(0,g.jsx)("main",{className:"min-h-screen py-8 px-4 md:px-8 lg:px-12",children:(0,g.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,g.jsxs)("div",{className:"text-center mb-12 animate-fade-in",children:[(0,g.jsx)("div",{className:"flex items-center justify-center mb-4",children:(0,g.jsx)("div",{className:"w-16 h-16 rounded-2xl bg-glassAccent backdrop-blur-xl  flex items-center justify-center border border-white/20 shadow-glass",children:(0,g.jsxs)("svg",{className:"w-10 h-10 text-white",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,g.jsx)("rect",{x:"2",y:"2",width:"4",height:"4"}),(0,g.jsx)("rect",{x:"10",y:"2",width:"4",height:"4"}),(0,g.jsx)("rect",{x:"18",y:"2",width:"4",height:"4"}),(0,g.jsx)("rect",{x:"6",y:"6",width:"4",height:"4"}),(0,g.jsx)("rect",{x:"14",y:"6",width:"4",height:"4"}),(0,g.jsx)("rect",{x:"2",y:"10",width:"4",height:"4"}),(0,g.jsx)("rect",{x:"10",y:"10",width:"4",height:"4"}),(0,g.jsx)("rect",{x:"18",y:"10",width:"4",height:"4"}),(0,g.jsx)("rect",{x:"6",y:"14",width:"4",height:"4"}),(0,g.jsx)("rect",{x:"14",y:"14",width:"4",height:"4"}),(0,g.jsx)("rect",{x:"2",y:"18",width:"4",height:"4"}),(0,g.jsx)("rect",{x:"10",y:"18",width:"4",height:"4"}),(0,g.jsx)("rect",{x:"18",y:"18",width:"4",height:"4"})]})})}),(0,g.jsx)("h1",{className:"text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight",children:"DitherLab"}),(0,g.jsx)("p",{className:"text-xl text-white/70 max-w-2xl mx-auto",children:"Create pixel-perfect halftone and glitch art in your browser"}),(0,g.jsx)("p",{className:"text-sm text-white/50 mt-2",children:"11 dithering algorithms • 28 shader effects • WebGL/GLSL • Real-time • No uploads"})]}),!a&&(0,g.jsxs)(g.Fragment,{children:[b&&(0,g.jsxs)(n,{className:"mb-8 animate-slide-up",children:[(0,g.jsxs)("div",{className:"flex justify-between items-start mb-4",children:[(0,g.jsx)("h3",{className:"text-xl font-semibold text-white",children:"Quick Start Guide"}),(0,g.jsx)("button",{onClick:()=>c(!1),className:"glass-button p-2 rounded-lg text-white/70 hover:text-white",children:(0,g.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),(0,g.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,g.jsxs)("div",{className:"text-center",children:[(0,g.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,g.jsx)("span",{className:"text-2xl",children:"📤"})}),(0,g.jsx)("h4",{className:"text-white font-medium mb-2",children:"1. Upload Image"}),(0,g.jsx)("p",{className:"text-white/60 text-sm",children:"Drag & drop or click to upload any PNG, JPG, or WebP image"})]}),(0,g.jsxs)("div",{className:"text-center",children:[(0,g.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,g.jsx)("span",{className:"text-2xl",children:"🎨"})}),(0,g.jsx)("h4",{className:"text-white font-medium mb-2",children:"2. Choose Style"}),(0,g.jsx)("p",{className:"text-white/60 text-sm",children:"Pick from 11 dithering algorithms or 28 shader effects (WebGL/GLSL)"})]}),(0,g.jsxs)("div",{className:"text-center",children:[(0,g.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,g.jsx)("span",{className:"text-2xl",children:"⚙️"})}),(0,g.jsx)("h4",{className:"text-white font-medium mb-2",children:"3. Fine-tune"}),(0,g.jsx)("p",{className:"text-white/60 text-sm",children:"Adjust brightness, contrast, color depth, and more"})]})]})]}),(0,g.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",children:[(0,g.jsxs)(n,{className:"text-center",children:[(0,g.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,g.jsx)("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),(0,g.jsx)("h3",{className:"text-white font-semibold mb-1",children:"Lightning Fast"}),(0,g.jsx)("p",{className:"text-white/60 text-sm",children:"Real-time processing with Canvas API & WebGL"})]}),(0,g.jsxs)(n,{className:"text-center",children:[(0,g.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,g.jsx)("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),(0,g.jsx)("h3",{className:"text-white font-semibold mb-1",children:"Private & Secure"}),(0,g.jsx)("p",{className:"text-white/60 text-sm",children:"All processing happens in your browser"})]}),(0,g.jsxs)(n,{className:"text-center",children:[(0,g.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,g.jsx)("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})})}),(0,g.jsx)("h3",{className:"text-white font-semibold mb-1",children:"39 Effects"}),(0,g.jsx)("p",{className:"text-white/60 text-sm",children:"11 dithering + 28 shaders (WebGL/GLSL)"})]}),(0,g.jsxs)(n,{className:"text-center",children:[(0,g.jsx)("div",{className:"w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",children:(0,g.jsx)("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"})})}),(0,g.jsx)("h3",{className:"text-white font-semibold mb-1",children:"Export Ready"}),(0,g.jsx)("p",{className:"text-white/60 text-sm",children:"Download as PNG or SVG"})]})]})]}),(0,g.jsxs)("div",{className:a?"grid grid-cols-1 lg:grid-cols-3 gap-6":"",children:[(0,g.jsxs)("div",{className:a?"lg:col-span-1 space-y-6":"",children:[(0,g.jsx)(n,{className:"animate-slide-up",children:(0,g.jsx)(m,{})}),a&&(0,g.jsx)(o,{})]}),a&&(0,g.jsx)("div",{className:"lg:col-span-2",children:(0,g.jsx)(A,{})})]}),(0,g.jsx)("div",{className:"text-center mt-12 animate-fade-in",children:(0,g.jsxs)("div",{className:"glass-panel rounded-2xl p-6 inline-block",children:[(0,g.jsxs)("div",{className:"flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm",children:[(0,g.jsxs)("span",{className:"flex items-center gap-2",children:[(0,g.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})}),"WebGL + Canvas API"]}),(0,g.jsx)("span",{children:"•"}),(0,g.jsxs)("span",{className:"flex items-center gap-2",children:[(0,g.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"60fps Shaders"]}),(0,g.jsx)("span",{children:"•"}),(0,g.jsxs)("span",{className:"flex items-center gap-2",children:[(0,g.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"100% Private"]})]}),(0,g.jsx)("div",{className:"mt-4 text-white/40 text-xs",children:"Built with Next.js 16, TypeScript, WebGL/GLSL, Tailwind CSS & Zustand"})]})})]})})}a.s(["default",()=>B],60350)}];

//# sourceMappingURL=_560afb72._.js.map