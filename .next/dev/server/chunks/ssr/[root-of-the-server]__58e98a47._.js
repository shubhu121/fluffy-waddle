module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/store/useDitherStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDitherStore",
    ()=>useDitherStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const defaultSettings = {
    algorithm: 'floyd-steinberg',
    colorDepth: 2,
    contrast: 100,
    brightness: 100,
    colorMode: 'grayscale',
    hue: 0,
    saturation: 100,
    filter: 'none'
};
const useDitherStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        originalImage: null,
        imageDataUrl: null,
        settings: defaultSettings,
        isProcessing: false,
        presets: [],
        history: [
            defaultSettings
        ],
        historyIndex: 0,
        showComparison: false,
        showTutorial: true,
        setOriginalImage: (image, dataUrl)=>set({
                originalImage: image,
                imageDataUrl: dataUrl
            }),
        updateSettings: (newSettings)=>{
            const updatedSettings = {
                ...get().settings,
                ...newSettings
            };
            set({
                settings: updatedSettings
            });
            get().addToHistory(updatedSettings);
        },
        setIsProcessing: (isProcessing)=>set({
                isProcessing
            }),
        reset: ()=>set({
                originalImage: null,
                imageDataUrl: null,
                settings: defaultSettings,
                isProcessing: false,
                history: [
                    defaultSettings
                ],
                historyIndex: 0
            }),
        // Preset management
        savePreset: (name)=>{
            const preset = {
                name,
                settings: get().settings,
                timestamp: Date.now()
            };
            set({
                presets: [
                    ...get().presets,
                    preset
                ]
            });
        },
        loadPreset: (preset)=>{
            set({
                settings: preset.settings
            });
            get().addToHistory(preset.settings);
        },
        deletePreset: (timestamp)=>{
            set({
                presets: get().presets.filter((p)=>p.timestamp !== timestamp)
            });
        },
        // History management
        addToHistory: (settings)=>{
            const { history, historyIndex } = get();
            const newHistory = history.slice(0, historyIndex + 1);
            newHistory.push(settings);
            // Limit history to 50 items
            if (newHistory.length > 50) {
                newHistory.shift();
            }
            set({
                history: newHistory,
                historyIndex: newHistory.length - 1
            });
        },
        undo: ()=>{
            const { historyIndex, history } = get();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                set({
                    settings: history[newIndex],
                    historyIndex: newIndex
                });
            }
        },
        redo: ()=>{
            const { historyIndex, history } = get();
            if (historyIndex < history.length - 1) {
                const newIndex = historyIndex + 1;
                set({
                    settings: history[newIndex],
                    historyIndex: newIndex
                });
            }
        },
        canUndo: ()=>get().historyIndex > 0,
        canRedo: ()=>get().historyIndex < get().history.length - 1,
        // UI state
        setShowComparison: (show)=>set({
                showComparison: show
            }),
        setShowTutorial: (show)=>set({
                showTutorial: show
            })
    }), {
    name: 'ditherlab-storage',
    partialize: (state)=>({
            presets: state.presets,
            showTutorial: state.showTutorial
        })
}));
}),
"[project]/components/UploadArea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useDitherStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function UploadArea() {
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setOriginalImage, imageDataUrl, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDitherStore"])();
    const handleFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((file)=>{
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e)=>{
            const img = new Image();
            img.onload = ()=>{
                setOriginalImage(img, e.target?.result);
            };
            img.src = e.target?.result;
        };
        reader.readAsDataURL(file);
    }, [
        setOriginalImage
    ]);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    }, [
        handleFile
    ]);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsDragging(true);
    }, []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsDragging(false);
    }, []);
    const handleFileInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const file = e.target.files?.[0];
        if (file) handleFile(file);
    }, [
        handleFile
    ]);
    const handleReplace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        reset();
        document.getElementById('file-input')?.click();
    }, [
        reset
    ]);
    if (imageDataUrl) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleReplace,
                className: "glass-button px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 hover:scale-105",
                children: "Replace Image"
            }, void 0, false, {
                fileName: "[project]/components/UploadArea.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/UploadArea.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onDrop: handleDrop,
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave,
            className: `
          relative border-2 border-dashed rounded-2xl p-12
          transition-all duration-300
          ${isDragging ? 'border-glassAccent bg-glassAccent/20 scale-105' : 'border-white/30 bg-white/5 hover:border-white/50'}
        `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "file-input",
                    type: "file",
                    accept: "image/*",
                    onChange: handleFileInput,
                    className: "hidden"
                }, void 0, false, {
                    fileName: "[project]/components/UploadArea.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-16 h-16 mb-4 text-white/70",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            }, void 0, false, {
                                fileName: "[project]/components/UploadArea.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/UploadArea.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-white mb-2",
                            children: "Drop your image here"
                        }, void 0, false, {
                            fileName: "[project]/components/UploadArea.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 mb-4",
                            children: "or click to browse"
                        }, void 0, false, {
                            fileName: "[project]/components/UploadArea.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>document.getElementById('file-input')?.click(),
                            className: "glass-button px-6 py-3 rounded-xl text-white font-medium",
                            children: "Choose File"
                        }, void 0, false, {
                            fileName: "[project]/components/UploadArea.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white/40 mt-4",
                            children: "PNG, JPG, WebP supported"
                        }, void 0, false, {
                            fileName: "[project]/components/UploadArea.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/UploadArea.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/UploadArea.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/UploadArea.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/GlassCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlassCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function GlassCard({ children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        rounded-3xl p-6 md:p-8
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl
        shadow-glass
        border border-white/20
        transition-all duration-300
        hover:shadow-glassHover
        ${className}
      `,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/GlassCard.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ControlPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ControlPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useDitherStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GlassCard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function ControlPanel() {
    const { settings, updateSettings, imageDataUrl, undo, redo, canUndo, canRedo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDitherStore"])();
    if (!imageDataUrl) return null;
    const algorithms = [
        // Error Diffusion Algorithms
        {
            value: 'floyd-steinberg',
            label: 'Floyd–Steinberg',
            category: 'Error Diffusion'
        },
        {
            value: 'atkinson',
            label: 'Atkinson',
            category: 'Error Diffusion'
        },
        {
            value: 'jarvis-judice-ninke',
            label: 'Jarvis-Judice-Ninke',
            category: 'Error Diffusion'
        },
        {
            value: 'stucki',
            label: 'Stucki',
            category: 'Error Diffusion'
        },
        {
            value: 'burkes',
            label: 'Burkes',
            category: 'Error Diffusion'
        },
        {
            value: 'sierra',
            label: 'Sierra',
            category: 'Error Diffusion'
        },
        {
            value: 'sierra-lite',
            label: 'Sierra Lite',
            category: 'Error Diffusion'
        },
        // Ordered Dithering
        {
            value: 'bayer',
            label: 'Bayer Matrix',
            category: 'Ordered'
        },
        {
            value: 'pattern',
            label: 'Pattern / Crosshatch',
            category: 'Ordered'
        },
        // Special Effects
        {
            value: 'halftone',
            label: 'Halftone Dots',
            category: 'Special'
        },
        {
            value: 'random',
            label: 'Random Noise',
            category: 'Special'
        }
    ];
    const filters = [
        {
            value: 'none',
            label: 'None (Use Dithering)',
            category: 'Dithering'
        },
        // Gradient Effects
        {
            value: 'heatmap',
            label: 'Heatmap',
            category: 'Gradients'
        },
        {
            value: 'mesh-gradient',
            label: 'Mesh Gradient (Animated)',
            category: 'Gradients'
        },
        {
            value: 'static-mesh',
            label: 'Static Mesh Gradient',
            category: 'Gradients'
        },
        {
            value: 'radial-gradient',
            label: 'Radial Gradient',
            category: 'Gradients'
        },
        {
            value: 'grain-gradient',
            label: 'Grain Gradient',
            category: 'Gradients'
        },
        // Artistic Effects
        {
            value: 'liquid-metal',
            label: 'Liquid Metal',
            category: 'Artistic'
        },
        {
            value: 'dot-orbit',
            label: 'Dot Orbit (Animated)',
            category: 'Artistic'
        },
        {
            value: 'dot-grid',
            label: 'Dot Grid',
            category: 'Artistic'
        },
        {
            value: 'warp',
            label: 'Warp (Animated)',
            category: 'Artistic'
        },
        // Post-Processing
        {
            value: 'pixelate',
            label: 'Pixelate',
            category: 'Post-Processing'
        },
        {
            value: 'glitch',
            label: 'Glitch',
            category: 'Post-Processing'
        },
        {
            value: 'chromatic',
            label: 'Chromatic Aberration',
            category: 'Post-Processing'
        },
        {
            value: 'vignette',
            label: 'Vignette',
            category: 'Post-Processing'
        }
    ];
    // Group by category
    const groupedAlgorithms = algorithms.reduce((acc, algo)=>{
        if (!acc[algo.category]) acc[algo.category] = [];
        acc[algo.category].push(algo);
        return acc;
    }, {});
    const groupedFilters = filters.reduce((acc, filter)=>{
        if (!acc[filter.category]) acc[filter.category] = [];
        acc[filter.category].push(filter);
        return acc;
    }, {});
    const isUsingFilter = settings.filter !== 'none';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: "mb-6 animate-slide-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-white",
                        children: "Controls"
                    }, void 0, false, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>undo(),
                                disabled: !canUndo(),
                                className: "glass-button p-2 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed",
                                title: "Undo (Ctrl+Z)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ControlPanel.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>redo(),
                                disabled: !canRedo(),
                                className: "glass-button p-2 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed",
                                title: "Redo (Ctrl+Shift+Z)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ControlPanel.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ControlPanel.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: "Processing Mode"
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>updateSettings({
                                                filter: 'none'
                                            }),
                                        className: `px-4 py-3 rounded-xl font-medium transition-all duration-200 ${!isUsingFilter ? 'bg-glassAccent/60 text-white border-2 border-white/40' : 'glass-button text-white/70'}`,
                                        children: "Dithering"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>updateSettings({
                                                filter: 'heatmap'
                                            }),
                                        className: `px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isUsingFilter ? 'bg-glassAccent/60 text-white border-2 border-white/40' : 'glass-button text-white/70'}`,
                                        children: "Filters/Shaders"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    !isUsingFilter ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: "Dithering Algorithm"
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: settings.algorithm,
                                onChange: (e)=>updateSettings({
                                        algorithm: e.target.value
                                    }),
                                className: "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-glassAccent transition-all duration-200",
                                children: Object.entries(groupedAlgorithms).map(([category, algos])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                        label: category,
                                        className: "bg-gray-800",
                                        children: algos.map((algo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: algo.value,
                                                className: "bg-gray-900",
                                                children: algo.label
                                            }, algo.value, false, {
                                                fileName: "[project]/components/ControlPanel.tsx",
                                                lineNumber: 146,
                                                columnNumber: 21
                                            }, this))
                                    }, category, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: "Filter Effect"
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: settings.filter,
                                onChange: (e)=>updateSettings({
                                        filter: e.target.value
                                    }),
                                className: "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-glassAccent transition-all duration-200",
                                children: Object.entries(groupedFilters).map(([category, filts])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                        label: category,
                                        className: "bg-gray-800",
                                        children: filts.map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: filter.value,
                                                className: "bg-gray-900",
                                                children: filter.label
                                            }, filter.value, false, {
                                                fileName: "[project]/components/ControlPanel.tsx",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, this))
                                    }, category, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this),
                    !isUsingFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: "Color Mode"
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>updateSettings({
                                                colorMode: 'grayscale'
                                            }),
                                        className: `px-4 py-2 rounded-xl font-medium transition-all duration-200 ${settings.colorMode === 'grayscale' ? 'bg-white/20 text-white border-2 border-white/40' : 'glass-button text-white/70'}`,
                                        children: "Grayscale"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>updateSettings({
                                                colorMode: 'color'
                                            }),
                                        className: `px-4 py-2 rounded-xl font-medium transition-all duration-200 ${settings.colorMode === 'color' ? 'bg-white/20 text-white border-2 border-white/40' : 'glass-button text-white/70'}`,
                                        children: "Color"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    !isUsingFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: [
                                    "Color Depth: ",
                                    settings.colorDepth,
                                    " colors"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "2",
                                max: "256",
                                value: settings.colorDepth,
                                onChange: (e)=>updateSettings({
                                        colorDepth: parseInt(e.target.value)
                                    }),
                                className: "w-full h-2 rounded-lg appearance-none cursor-pointer",
                                style: {
                                    background: `linear-gradient(to right, 
                  rgba(138, 180, 248, 0.6) 0%, 
                  rgba(138, 180, 248, 0.6) ${(settings.colorDepth - 2) / 254 * 100}%, 
                  rgba(255, 255, 255, 0.2) ${(settings.colorDepth - 2) / 254 * 100}%, 
                  rgba(255, 255, 255, 0.2) 100%)`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-xs text-white/50 mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "256"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: [
                                    "Contrast: ",
                                    settings.contrast,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: "200",
                                value: settings.contrast,
                                onChange: (e)=>updateSettings({
                                        contrast: parseInt(e.target.value)
                                    }),
                                className: "w-full h-2 rounded-lg appearance-none cursor-pointer",
                                style: {
                                    background: `linear-gradient(to right, 
                rgba(138, 180, 248, 0.6) 0%, 
                rgba(138, 180, 248, 0.6) ${settings.contrast / 200 * 100}%, 
                rgba(255, 255, 255, 0.2) ${settings.contrast / 200 * 100}%, 
                rgba(255, 255, 255, 0.2) 100%)`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: [
                                    "Brightness: ",
                                    settings.brightness,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: "200",
                                value: settings.brightness,
                                onChange: (e)=>updateSettings({
                                        brightness: parseInt(e.target.value)
                                    }),
                                className: "w-full h-2 rounded-lg appearance-none cursor-pointer",
                                style: {
                                    background: `linear-gradient(to right, 
                rgba(138, 180, 248, 0.6) 0%, 
                rgba(138, 180, 248, 0.6) ${settings.brightness / 200 * 100}%, 
                rgba(255, 255, 255, 0.2) ${settings.brightness / 200 * 100}%, 
                rgba(255, 255, 255, 0.2) 100%)`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    settings.colorMode === 'color' && !isUsingFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/80 mb-2",
                                        children: [
                                            "Hue: ",
                                            settings.hue,
                                            "°"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0",
                                        max: "360",
                                        value: settings.hue,
                                        onChange: (e)=>updateSettings({
                                                hue: parseInt(e.target.value)
                                            }),
                                        className: "w-full h-2 rounded-lg appearance-none cursor-pointer",
                                        style: {
                                            background: 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/80 mb-2",
                                        children: [
                                            "Saturation: ",
                                            settings.saturation,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0",
                                        max: "200",
                                        value: settings.saturation,
                                        onChange: (e)=>updateSettings({
                                                saturation: parseInt(e.target.value)
                                            }),
                                        className: "w-full h-2 rounded-lg appearance-none cursor-pointer",
                                        style: {
                                            background: `linear-gradient(to right, 
                    rgba(138, 180, 248, 0.6) 0%, 
                    rgba(138, 180, 248, 0.6) ${settings.saturation / 200 * 100}%, 
                    rgba(255, 255, 255, 0.2) ${settings.saturation / 200 * 100}%, 
                    rgba(255, 255, 255, 0.2) 100%)`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>updateSettings({
                                algorithm: 'floyd-steinberg',
                                colorDepth: 2,
                                contrast: 100,
                                brightness: 100,
                                colorMode: 'grayscale',
                                hue: 0,
                                saturation: 100,
                                filter: 'none'
                            }),
                        className: "w-full glass-button px-6 py-3 rounded-xl text-white font-medium transition-all duration-200",
                        children: "Reset to Defaults"
                    }, void 0, false, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ControlPanel.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ControlPanel.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/filters.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyFilter",
    ()=>applyFilter,
    "chromaticAberrationFilter",
    ()=>chromaticAberrationFilter,
    "dotGridFilter",
    ()=>dotGridFilter,
    "dotOrbitFilter",
    ()=>dotOrbitFilter,
    "glitchFilter",
    ()=>glitchFilter,
    "grainGradientFilter",
    ()=>grainGradientFilter,
    "heatmapFilter",
    ()=>heatmapFilter,
    "liquidMetalFilter",
    ()=>liquidMetalFilter,
    "meshGradientFilter",
    ()=>meshGradientFilter,
    "pixelateFilter",
    ()=>pixelateFilter,
    "staticMeshGradientFilter",
    ()=>staticMeshGradientFilter,
    "staticRadialGradientFilter",
    ()=>staticRadialGradientFilter,
    "vignetteFilter",
    ()=>vignetteFilter,
    "warpFilter",
    ()=>warpFilter
]);
function applyFilter(ctx, settings) {
    switch(settings.filter){
        case 'heatmap':
            heatmapFilter(ctx, settings);
            break;
        case 'liquid-metal':
            liquidMetalFilter(ctx, settings);
            break;
        case 'mesh-gradient':
            meshGradientFilter(ctx, settings);
            break;
        case 'static-mesh':
            staticMeshGradientFilter(ctx, settings);
            break;
        case 'radial-gradient':
            staticRadialGradientFilter(ctx, settings);
            break;
        case 'grain-gradient':
            grainGradientFilter(ctx, settings);
            break;
        case 'dot-orbit':
            dotOrbitFilter(ctx, settings);
            break;
        case 'dot-grid':
            dotGridFilter(ctx, settings);
            break;
        case 'warp':
            warpFilter(ctx, settings);
            break;
        case 'pixelate':
            pixelateFilter(ctx, settings);
            break;
        case 'glitch':
            glitchFilter(ctx, settings);
            break;
        case 'chromatic':
            chromaticAberrationFilter(ctx, settings);
            break;
        case 'vignette':
            vignetteFilter(ctx, settings);
            break;
    }
}
function heatmapFilter(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4){
        const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        const normalized = gray / 255;
        // Heatmap color mapping
        let r, g, b;
        if (normalized < 0.25) {
            r = 0;
            g = normalized * 4 * 255;
            b = 255;
        } else if (normalized < 0.5) {
            r = 0;
            g = 255;
            b = (0.5 - normalized) * 4 * 255;
        } else if (normalized < 0.75) {
            r = (normalized - 0.5) * 4 * 255;
            g = 255;
            b = 0;
        } else {
            r = 255;
            g = (1 - normalized) * 4 * 255;
            b = 0;
        }
        data[i] = r * (settings.brightness / 100);
        data[i + 1] = g * (settings.brightness / 100);
        data[i + 2] = b * (settings.brightness / 100);
    }
    ctx.putImageData(imageData, 0, 0);
}
function liquidMetalFilter(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const tempData = new Uint8ClampedArray(data);
    for(let y = 1; y < height - 1; y++){
        for(let x = 1; x < width - 1; x++){
            const i = (y * width + x) * 4;
            // Edge detection
            const gx = -tempData[((y - 1) * width + (x - 1)) * 4] + tempData[((y - 1) * width + (x + 1)) * 4] + -2 * tempData[(y * width + (x - 1)) * 4] + 2 * tempData[(y * width + (x + 1)) * 4] + -tempData[((y + 1) * width + (x - 1)) * 4] + tempData[((y + 1) * width + (x + 1)) * 4];
            const gy = -tempData[((y - 1) * width + (x - 1)) * 4] + -2 * tempData[((y - 1) * width + x) * 4] + -tempData[((y - 1) * width + (x + 1)) * 4] + tempData[((y + 1) * width + (x - 1)) * 4] + 2 * tempData[((y + 1) * width + x) * 4] + tempData[((y + 1) * width + (x + 1)) * 4];
            const magnitude = Math.sqrt(gx * gx + gy * gy);
            const normalized = Math.min(magnitude / 4, 255);
            // Metallic color palette
            const metal = 255 - normalized;
            data[i] = metal * 0.8; // R - silver/chrome
            data[i + 1] = metal * 0.85; // G
            data[i + 2] = metal; // B
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function meshGradientFilter(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const time = Date.now() * 0.001;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            const nx = x / width;
            const ny = y / height;
            // Multi-point gradient with sine waves
            const r = Math.sin(nx * 3 + time) * 127 + 128;
            const g = Math.sin(ny * 3 + time + 2) * 127 + 128;
            const b = Math.sin((nx + ny) * 3 + time + 4) * 127 + 128;
            const blend = gray / 255;
            data[i] = r * blend;
            data[i + 1] = g * blend;
            data[i + 2] = b * blend;
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function staticMeshGradientFilter(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    // Define gradient control points
    const points = [
        {
            x: 0.2,
            y: 0.2,
            r: 138,
            g: 180,
            b: 248
        },
        {
            x: 0.8,
            y: 0.2,
            r: 248,
            g: 113,
            b: 113
        },
        {
            x: 0.5,
            y: 0.8,
            r: 152,
            g: 251,
            b: 152
        },
        {
            x: 0.5,
            y: 0.5,
            r: 251,
            g: 211,
            b: 141
        }
    ];
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            const nx = x / width;
            const ny = y / height;
            let totalWeight = 0;
            let r = 0, g = 0, b = 0;
            // Inverse distance weighting
            points.forEach((point)=>{
                const dx = nx - point.x;
                const dy = ny - point.y;
                const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
                const weight = 1 / (dist * dist);
                totalWeight += weight;
                r += point.r * weight;
                g += point.g * weight;
                b += point.b * weight;
            });
            const blend = gray / 255;
            data[i] = r / totalWeight * blend;
            data[i + 1] = g / totalWeight * blend;
            data[i + 2] = b / totalWeight * blend;
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function staticRadialGradientFilter(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            const dx = x - centerX;
            const dy = y - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const normalized = dist / maxDist;
            // Gradient from center (purple) to edge (blue)
            const r = 138 + (75 - 138) * normalized;
            const g = 180 + (0 - 180) * normalized;
            const b = 248;
            const blend = gray / 255;
            data[i] = r * blend;
            data[i + 1] = g * blend;
            data[i + 2] = b * blend;
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function grainGradientFilter(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            // Horizontal gradient
            const gradientValue = x / width * 255;
            // Add film grain
            const grain = (Math.random() - 0.5) * 40;
            const value = Math.max(0, Math.min(255, gradientValue + grain));
            data[i] = value;
            data[i + 1] = value * 0.9;
            data[i + 2] = value * 1.1;
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function dotOrbitFilter(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const time = Date.now() * 0.001;
    const centerX = width / 2;
    const centerY = height / 2;
    // Clear canvas
    data.fill(0);
    // Draw orbiting dots
    const numOrbits = 8;
    const dotsPerOrbit = 12;
    for(let orbit = 0; orbit < numOrbits; orbit++){
        const radius = (orbit + 1) * Math.min(width, height) / (numOrbits * 2);
        const speed = 1 + orbit * 0.2;
        for(let dot = 0; dot < dotsPerOrbit; dot++){
            const angle = dot / dotsPerOrbit * Math.PI * 2 + time * speed;
            const x = Math.floor(centerX + Math.cos(angle) * radius);
            const y = Math.floor(centerY + Math.sin(angle) * radius);
            if (x >= 0 && x < width && y >= 0 && y < height) {
                const dotSize = 3;
                for(let dy = -dotSize; dy <= dotSize; dy++){
                    for(let dx = -dotSize; dx <= dotSize; dx++){
                        const px = x + dx;
                        const py = y + dy;
                        if (px >= 0 && px < width && py >= 0 && py < height) {
                            if (dx * dx + dy * dy <= dotSize * dotSize) {
                                const i = (py * width + px) * 4;
                                const brightness = 255 - orbit * 20;
                                data[i] = brightness;
                                data[i + 1] = brightness * 0.8;
                                data[i + 2] = brightness * 1.2;
                                data[i + 3] = 255;
                            }
                        }
                    }
                }
            }
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function dotGridFilter(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const spacing = 15;
    const dotRadius = 5;
    for(let y = 0; y < height; y += spacing){
        for(let x = 0; x < width; x += spacing){
            // Get average brightness in this region
            let avgBrightness = 0;
            let count = 0;
            for(let dy = 0; dy < spacing && y + dy < height; dy++){
                for(let dx = 0; dx < spacing && x + dx < width; dx++){
                    const i = ((y + dy) * width + (x + dx)) * 4;
                    avgBrightness += (data[i] + data[i + 1] + data[i + 2]) / 3;
                    count++;
                }
            }
            avgBrightness /= count;
            const radius = avgBrightness / 255 * dotRadius;
            // Draw dot
            for(let dy = -dotRadius; dy <= dotRadius; dy++){
                for(let dx = -dotRadius; dx <= dotRadius; dx++){
                    if (dx * dx + dy * dy <= radius * radius) {
                        const px = x + spacing / 2 + dx;
                        const py = y + spacing / 2 + dy;
                        if (px >= 0 && px < width && py >= 0 && py < height) {
                            const i = (py * width + px) * 4;
                            data[i] = 138;
                            data[i + 1] = 180;
                            data[i + 2] = 248;
                        }
                    }
                }
            }
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function warpFilter(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const tempData = new Uint8ClampedArray(data);
    const time = Date.now() * 0.002;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            // Apply sinusoidal warp
            const warpX = Math.sin(y * 0.02 + time) * 10;
            const warpY = Math.cos(x * 0.02 + time) * 10;
            const srcX = Math.floor(x + warpX);
            const srcY = Math.floor(y + warpY);
            if (srcX >= 0 && srcX < width && srcY >= 0 && srcY < height) {
                const srcI = (srcY * width + srcX) * 4;
                data[i] = tempData[srcI];
                data[i + 1] = tempData[srcI + 1];
                data[i + 2] = tempData[srcI + 2];
            }
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function pixelateFilter(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const pixelSize = Math.max(2, Math.floor(settings.colorDepth / 4));
    for(let y = 0; y < height; y += pixelSize){
        for(let x = 0; x < width; x += pixelSize){
            let r = 0, g = 0, b = 0, count = 0;
            // Average color in block
            for(let dy = 0; dy < pixelSize && y + dy < height; dy++){
                for(let dx = 0; dx < pixelSize && x + dx < width; dx++){
                    const i = ((y + dy) * width + (x + dx)) * 4;
                    r += data[i];
                    g += data[i + 1];
                    b += data[i + 2];
                    count++;
                }
            }
            r /= count;
            g /= count;
            b /= count;
            // Apply to entire block
            for(let dy = 0; dy < pixelSize && y + dy < height; dy++){
                for(let dx = 0; dx < pixelSize && x + dx < width; dx++){
                    const i = ((y + dy) * width + (x + dx)) * 4;
                    data[i] = r;
                    data[i + 1] = g;
                    data[i + 2] = b;
                }
            }
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function glitchFilter(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const tempData = new Uint8ClampedArray(data);
    // Random horizontal shifts
    for(let i = 0; i < 5; i++){
        const y = Math.floor(Math.random() * height);
        const shift = (Math.random() - 0.5) * 50;
        const sliceHeight = Math.floor(Math.random() * 20) + 5;
        for(let dy = 0; dy < sliceHeight && y + dy < height; dy++){
            for(let x = 0; x < width; x++){
                const srcX = Math.floor((x + shift + width) % width);
                const srcI = ((y + dy) * width + srcX) * 4;
                const destI = ((y + dy) * width + x) * 4;
                // RGB channel shift
                data[destI] = tempData[srcI + 1]; // R from G
                data[destI + 1] = tempData[srcI + 2]; // G from B
                data[destI + 2] = tempData[srcI]; // B from R
            }
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function chromaticAberrationFilter(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const tempData = new Uint8ClampedArray(data);
    const offset = 5;
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            // Red channel - shift left
            if (x - offset >= 0) {
                const srcI = (y * width + (x - offset)) * 4;
                data[i] = tempData[srcI];
            }
            // Green channel - no shift
            data[i + 1] = tempData[i + 1];
            // Blue channel - shift right
            if (x + offset < width) {
                const srcI = (y * width + (x + offset)) * 4;
                data[i + 2] = tempData[srcI + 2];
            }
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function vignetteFilter(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const dx = x - centerX;
            const dy = y - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const vignette = 1 - Math.pow(dist / maxDist, 2);
            data[i] *= vignette;
            data[i + 1] *= vignette;
            data[i + 2] *= vignette;
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
}),
"[project]/lib/dithering.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyDithering",
    ()=>applyDithering,
    "atkinson",
    ()=>atkinson,
    "bayerDithering",
    ()=>bayerDithering,
    "burkes",
    ()=>burkes,
    "floydSteinberg",
    ()=>floydSteinberg,
    "halftone",
    ()=>halftone,
    "jarvisJudiceNinke",
    ()=>jarvisJudiceNinke,
    "patternDither",
    ()=>patternDither,
    "randomDithering",
    ()=>randomDithering,
    "sierra",
    ()=>sierra,
    "sierraLite",
    ()=>sierraLite,
    "stucki",
    ()=>stucki
]);
// Utility function to apply brightness and contrast
function applyBrightnessContrast(data, brightness, contrast) {
    const b = (brightness - 100) * 2.55;
    const c = (contrast - 100) / 100 + 1;
    for(let i = 0; i < data.length; i += 4){
        // Apply contrast
        data[i] = c * (data[i] - 128) + 128;
        data[i + 1] = c * (data[i + 1] - 128) + 128;
        data[i + 2] = c * (data[i + 2] - 128) + 128;
        // Apply brightness
        data[i] += b;
        data[i + 1] += b;
        data[i + 2] += b;
    }
}
// Convert to grayscale
function toGrayscale(data) {
    for(let i = 0; i < data.length; i += 4){
        const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        data[i] = data[i + 1] = data[i + 2] = gray;
    }
}
// Apply hue and saturation adjustments
function applyColorAdjustments(data, hue, saturation) {
    const hueAdjust = hue / 360;
    const satAdjust = saturation / 100;
    for(let i = 0; i < data.length; i += 4){
        let r = data[i] / 255;
        let g = data[i + 1] / 255;
        let b = data[i + 2] / 255;
        // Convert RGB to HSL
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0, s = 0, l = (max + min) / 2;
        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r:
                    h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
                    break;
                case g:
                    h = ((b - r) / d + 2) / 6;
                    break;
                case b:
                    h = ((r - g) / d + 4) / 6;
                    break;
            }
        }
        // Apply adjustments
        h = (h + hueAdjust) % 1;
        s = Math.max(0, Math.min(1, s * satAdjust));
        // Convert back to RGB
        const hue2rgb = (p, q, t)=>{
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        if (s === 0) {
            r = g = b = l;
        } else {
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        data[i] = Math.round(r * 255);
        data[i + 1] = Math.round(g * 255);
        data[i + 2] = Math.round(b * 255);
    }
}
// Quantize color to nearest level
function quantizeColor(value, levels) {
    const step = 255 / (levels - 1);
    return Math.round(Math.round(value / step) * step);
}
function floydSteinberg(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    // Apply brightness and contrast
    applyBrightnessContrast(data, settings.brightness, settings.contrast);
    // Apply color adjustments if in color mode
    if (settings.colorMode === 'color') {
        applyColorAdjustments(data, settings.hue, settings.saturation);
    }
    // Convert to grayscale if needed
    if (settings.colorMode === 'grayscale') {
        toGrayscale(data);
    }
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const oldPixel = data[i];
            const newPixel = quantizeColor(oldPixel, settings.colorDepth);
            const error = oldPixel - newPixel;
            data[i] = data[i + 1] = data[i + 2] = newPixel;
            // Distribute error to neighboring pixels
            const distributeError = (dx, dy, factor)=>{
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    const j = (ny * width + nx) * 4;
                    data[j] += error * factor;
                    data[j + 1] += error * factor;
                    data[j + 2] += error * factor;
                }
            };
            distributeError(1, 0, 7 / 16);
            distributeError(-1, 1, 3 / 16);
            distributeError(0, 1, 5 / 16);
            distributeError(1, 1, 1 / 16);
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function atkinson(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    applyBrightnessContrast(data, settings.brightness, settings.contrast);
    toGrayscale(data);
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const oldPixel = data[i];
            const newPixel = quantizeColor(oldPixel, settings.colorDepth);
            const error = oldPixel - newPixel;
            data[i] = data[i + 1] = data[i + 2] = newPixel;
            const distributeError = (dx, dy)=>{
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    const j = (ny * width + nx) * 4;
                    data[j] += error / 8;
                    data[j + 1] += error / 8;
                    data[j + 2] += error / 8;
                }
            };
            distributeError(1, 0);
            distributeError(2, 0);
            distributeError(-1, 1);
            distributeError(0, 1);
            distributeError(1, 1);
            distributeError(0, 2);
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function bayerDithering(ctx, settings) {
    const bayerMatrix = [
        [
            0,
            32,
            8,
            40,
            2,
            34,
            10,
            42
        ],
        [
            48,
            16,
            56,
            24,
            50,
            18,
            58,
            26
        ],
        [
            12,
            44,
            4,
            36,
            14,
            46,
            6,
            38
        ],
        [
            60,
            28,
            52,
            20,
            62,
            30,
            54,
            22
        ],
        [
            3,
            35,
            11,
            43,
            1,
            33,
            9,
            41
        ],
        [
            51,
            19,
            59,
            27,
            49,
            17,
            57,
            25
        ],
        [
            15,
            47,
            7,
            39,
            13,
            45,
            5,
            37
        ],
        [
            63,
            31,
            55,
            23,
            61,
            29,
            53,
            21
        ]
    ];
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    applyBrightnessContrast(data, settings.brightness, settings.contrast);
    toGrayscale(data);
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const oldPixel = data[i];
            const threshold = bayerMatrix[y % 8][x % 8] / 64 * 255;
            const adjustment = (threshold - 127.5) / (settings.colorDepth - 1);
            const newPixel = quantizeColor(oldPixel + adjustment, settings.colorDepth);
            data[i] = data[i + 1] = data[i + 2] = newPixel;
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function randomDithering(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    applyBrightnessContrast(data, settings.brightness, settings.contrast);
    toGrayscale(data);
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const oldPixel = data[i];
            // Add random noise
            const noise = (Math.random() - 0.5) * 50;
            const newPixel = quantizeColor(oldPixel + noise, settings.colorDepth);
            data[i] = data[i + 1] = data[i + 2] = newPixel;
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function jarvisJudiceNinke(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    applyBrightnessContrast(data, settings.brightness, settings.contrast);
    toGrayscale(data);
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const oldPixel = data[i];
            const newPixel = quantizeColor(oldPixel, settings.colorDepth);
            const error = oldPixel - newPixel;
            data[i] = data[i + 1] = data[i + 2] = newPixel;
            const distributeError = (dx, dy, factor)=>{
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    const j = (ny * width + nx) * 4;
                    data[j] += error * factor;
                    data[j + 1] += error * factor;
                    data[j + 2] += error * factor;
                }
            };
            // JJN kernel distributes error over 12 pixels
            distributeError(1, 0, 7 / 48);
            distributeError(2, 0, 5 / 48);
            distributeError(-2, 1, 3 / 48);
            distributeError(-1, 1, 5 / 48);
            distributeError(0, 1, 7 / 48);
            distributeError(1, 1, 5 / 48);
            distributeError(2, 1, 3 / 48);
            distributeError(-2, 2, 1 / 48);
            distributeError(-1, 2, 3 / 48);
            distributeError(0, 2, 5 / 48);
            distributeError(1, 2, 3 / 48);
            distributeError(2, 2, 1 / 48);
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function stucki(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    applyBrightnessContrast(data, settings.brightness, settings.contrast);
    toGrayscale(data);
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const oldPixel = data[i];
            const newPixel = quantizeColor(oldPixel, settings.colorDepth);
            const error = oldPixel - newPixel;
            data[i] = data[i + 1] = data[i + 2] = newPixel;
            const distributeError = (dx, dy, factor)=>{
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    const j = (ny * width + nx) * 4;
                    data[j] += error * factor;
                    data[j + 1] += error * factor;
                    data[j + 2] += error * factor;
                }
            };
            // Stucki kernel
            distributeError(1, 0, 8 / 42);
            distributeError(2, 0, 4 / 42);
            distributeError(-2, 1, 2 / 42);
            distributeError(-1, 1, 4 / 42);
            distributeError(0, 1, 8 / 42);
            distributeError(1, 1, 4 / 42);
            distributeError(2, 1, 2 / 42);
            distributeError(-2, 2, 1 / 42);
            distributeError(-1, 2, 2 / 42);
            distributeError(0, 2, 4 / 42);
            distributeError(1, 2, 2 / 42);
            distributeError(2, 2, 1 / 42);
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function burkes(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    applyBrightnessContrast(data, settings.brightness, settings.contrast);
    toGrayscale(data);
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const oldPixel = data[i];
            const newPixel = quantizeColor(oldPixel, settings.colorDepth);
            const error = oldPixel - newPixel;
            data[i] = data[i + 1] = data[i + 2] = newPixel;
            const distributeError = (dx, dy, factor)=>{
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    const j = (ny * width + nx) * 4;
                    data[j] += error * factor;
                    data[j + 1] += error * factor;
                    data[j + 2] += error * factor;
                }
            };
            // Burkes kernel
            distributeError(1, 0, 8 / 32);
            distributeError(2, 0, 4 / 32);
            distributeError(-2, 1, 2 / 32);
            distributeError(-1, 1, 4 / 32);
            distributeError(0, 1, 8 / 32);
            distributeError(1, 1, 4 / 32);
            distributeError(2, 1, 2 / 32);
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function sierra(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    applyBrightnessContrast(data, settings.brightness, settings.contrast);
    toGrayscale(data);
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const oldPixel = data[i];
            const newPixel = quantizeColor(oldPixel, settings.colorDepth);
            const error = oldPixel - newPixel;
            data[i] = data[i + 1] = data[i + 2] = newPixel;
            const distributeError = (dx, dy, factor)=>{
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    const j = (ny * width + nx) * 4;
                    data[j] += error * factor;
                    data[j + 1] += error * factor;
                    data[j + 2] += error * factor;
                }
            };
            // Sierra kernel
            distributeError(1, 0, 5 / 32);
            distributeError(2, 0, 3 / 32);
            distributeError(-2, 1, 2 / 32);
            distributeError(-1, 1, 4 / 32);
            distributeError(0, 1, 5 / 32);
            distributeError(1, 1, 4 / 32);
            distributeError(2, 1, 2 / 32);
            distributeError(-1, 2, 2 / 32);
            distributeError(0, 2, 3 / 32);
            distributeError(1, 2, 2 / 32);
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function sierraLite(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    applyBrightnessContrast(data, settings.brightness, settings.contrast);
    toGrayscale(data);
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const oldPixel = data[i];
            const newPixel = quantizeColor(oldPixel, settings.colorDepth);
            const error = oldPixel - newPixel;
            data[i] = data[i + 1] = data[i + 2] = newPixel;
            const distributeError = (dx, dy, factor)=>{
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    const j = (ny * width + nx) * 4;
                    data[j] += error * factor;
                    data[j + 1] += error * factor;
                    data[j + 2] += error * factor;
                }
            };
            // Sierra Lite kernel (faster, 2 rows)
            distributeError(1, 0, 2 / 4);
            distributeError(-1, 1, 1 / 4);
            distributeError(0, 1, 1 / 4);
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function halftone(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    applyBrightnessContrast(data, settings.brightness, settings.contrast);
    toGrayscale(data);
    const dotSize = 4; // Size of halftone dots
    for(let y = 0; y < height; y += dotSize){
        for(let x = 0; x < width; x += dotSize){
            // Calculate average brightness of block
            let sum = 0;
            let count = 0;
            for(let dy = 0; dy < dotSize && y + dy < height; dy++){
                for(let dx = 0; dx < dotSize && x + dx < width; dx++){
                    const i = ((y + dy) * width + (x + dx)) * 4;
                    sum += data[i];
                    count++;
                }
            }
            const avg = sum / count;
            const radius = (255 - avg) / 255 * (dotSize / 2);
            // Draw dot in block
            for(let dy = 0; dy < dotSize && y + dy < height; dy++){
                for(let dx = 0; dx < dotSize && x + dx < width; dx++){
                    const i = ((y + dy) * width + (x + dx)) * 4;
                    const centerX = dotSize / 2;
                    const centerY = dotSize / 2;
                    const dist = Math.sqrt((dx - centerX) ** 2 + (dy - centerY) ** 2);
                    const value = dist < radius ? 0 : 255;
                    data[i] = data[i + 1] = data[i + 2] = value;
                }
            }
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function patternDither(ctx, settings) {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;
    applyBrightnessContrast(data, settings.brightness, settings.contrast);
    toGrayscale(data);
    // 4x4 patterns for different brightness levels
    const patterns = [
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            1
        ],
        [
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            0
        ],
        [
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            0
        ],
        [
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            1,
            1,
            0,
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            1,
            0,
            1,
            1,
            1,
            0,
            1,
            1,
            1,
            0,
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            1,
            0,
            1,
            1,
            1,
            0,
            1,
            1,
            1,
            0,
            1,
            1,
            1,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            1,
            1,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            0,
            1
        ],
        [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    ];
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            const i = (y * width + x) * 4;
            const oldPixel = data[i];
            // Map brightness to pattern index
            const patternIndex = Math.floor(oldPixel / 255 * (patterns.length - 1));
            const pattern = patterns[patternIndex];
            const patternX = x % 4;
            const patternY = y % 4;
            const patternValue = pattern[patternY * 4 + patternX];
            const newPixel = patternValue * 255;
            data[i] = data[i + 1] = data[i + 2] = newPixel;
        }
    }
    ctx.putImageData(imageData, 0, 0);
}
function applyDithering(canvas, image, settings) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Set canvas size to match image
    canvas.width = image.width;
    canvas.height = image.height;
    // Draw original image
    ctx.drawImage(image, 0, 0);
    // Apply filter first if selected (and not 'none')
    if (settings.filter !== 'none') {
        const { applyFilter } = __turbopack_context__.r("[project]/lib/filters.ts [app-ssr] (ecmascript)");
        applyFilter(ctx, settings);
    } else {
        // Apply dithering algorithm
        switch(settings.algorithm){
            case 'floyd-steinberg':
                floydSteinberg(ctx, settings);
                break;
            case 'atkinson':
                atkinson(ctx, settings);
                break;
            case 'bayer':
                bayerDithering(ctx, settings);
                break;
            case 'random':
                randomDithering(ctx, settings);
                break;
            case 'jarvis-judice-ninke':
                jarvisJudiceNinke(ctx, settings);
                break;
            case 'stucki':
                stucki(ctx, settings);
                break;
            case 'burkes':
                burkes(ctx, settings);
                break;
            case 'sierra':
                sierra(ctx, settings);
                break;
            case 'sierra-lite':
                sierraLite(ctx, settings);
                break;
            case 'halftone':
                halftone(ctx, settings);
                break;
            case 'pattern':
                patternDither(ctx, settings);
                break;
        }
    }
}
}),
"[project]/components/DitherCanvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DitherCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useDitherStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dithering$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dithering.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GlassCard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function DitherCanvas() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { originalImage, settings, imageDataUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDitherStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!originalImage || !canvasRef.current) return;
        const canvas = canvasRef.current;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dithering$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyDithering"])(canvas, originalImage, settings);
    }, [
        originalImage,
        settings
    ]);
    const handleDownload = ()=>{
        if (!canvasRef.current) return;
        const link = document.createElement('a');
        link.download = `ditherlab-${settings.algorithm}-${Date.now()}.png`;
        link.href = canvasRef.current.toDataURL('image/png');
        link.click();
    };
    const handleDownloadSVG = ()=>{
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}">`;
        // Sample every pixel and create rectangles
        for(let y = 0; y < canvas.height; y++){
            for(let x = 0; x < canvas.width; x++){
                const i = (y * canvas.width + x) * 4;
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                svgContent += `<rect x="${x}" y="${y}" width="1" height="1" fill="rgb(${r},${g},${b})"/>`;
            }
        }
        svgContent += '</svg>';
        const blob = new Blob([
            svgContent
        ], {
            type: 'image/svg+xml'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `ditherlab-${settings.algorithm}-${Date.now()}.svg`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
    };
    const toggleFullscreen = ()=>{
        setIsFullscreen(!isFullscreen);
    };
    if (!imageDataUrl) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "animate-slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-white mb-4 lg:mb-0",
                                children: "Preview"
                            }, void 0, false, {
                                fileName: "[project]/components/DitherCanvas.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleFullscreen,
                                        className: "glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200",
                                        children: isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'
                                    }, void 0, false, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDownload,
                                        className: "glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DitherCanvas.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/DitherCanvas.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            "Download PNG"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDownloadSVG,
                                        className: "glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DitherCanvas.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/DitherCanvas.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            "Download SVG"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DitherCanvas.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DitherCanvas.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium text-white/80 mb-3",
                                        children: "Original"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl overflow-hidden bg-black/20 border border-white/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imageDataUrl,
                                            alt: "Original",
                                            className: "w-full h-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DitherCanvas.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DitherCanvas.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium text-white/80 mb-3",
                                        children: [
                                            "Dithered (",
                                            settings.algorithm,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl overflow-hidden bg-black/20 border border-white/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                            ref: canvasRef,
                                            className: "w-full h-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DitherCanvas.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DitherCanvas.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DitherCanvas.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DitherCanvas.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4",
                onClick: toggleFullscreen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute top-6 right-6 glass-button p-3 rounded-full text-white z-10",
                        onClick: toggleFullscreen,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/components/DitherCanvas.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DitherCanvas.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DitherCanvas.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-full max-h-full overflow-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            className: "max-w-full max-h-[90vh] w-auto h-auto"
                        }, void 0, false, {
                            fileName: "[project]/components/DitherCanvas.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DitherCanvas.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DitherCanvas.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UploadArea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ControlPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ControlPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DitherCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DitherCanvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GlassCard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen py-8 px-4 md:px-8 lg:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12 animate-fade-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-2xl bg-glassAccent backdrop-blur-xl  flex items-center justify-center border border-white/20 shadow-glass",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-10 h-10 text-white",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "2",
                                            y: "2",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 18,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "10",
                                            y: "2",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 19,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "18",
                                            y: "2",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 20,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "6",
                                            y: "6",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 21,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "14",
                                            y: "6",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 22,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "2",
                                            y: "10",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "10",
                                            y: "10",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 24,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "18",
                                            y: "10",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "6",
                                            y: "14",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "14",
                                            y: "14",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "2",
                                            y: "18",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "10",
                                            y: "18",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "18",
                                            y: "18",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight",
                            children: "DitherLab"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-white/70 max-w-2xl mx-auto",
                            children: "Create pixel-perfect halftone and glitch art in your browser"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white/50 mt-2",
                            children: "Upload an image, choose your algorithm, and watch the magic happen"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "animate-slide-up",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ControlPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DitherCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12 animate-fade-in",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-panel rounded-2xl p-6 inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 text-sm",
                            children: "Powered by Canvas API • Real-time Processing • Client-Side Only"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__58e98a47._.js.map