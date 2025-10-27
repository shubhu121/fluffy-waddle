(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/store/useDitherStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDitherStore",
    ()=>useDitherStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
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
const useDitherStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/UploadArea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useDitherStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function UploadArea() {
    _s();
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setOriginalImage, imageDataUrl, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDitherStore"])();
    const handleFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadArea.useCallback[handleFile]": (file)=>{
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file');
                return;
            }
            const reader = new FileReader();
            reader.onload = ({
                "UploadArea.useCallback[handleFile]": (e)=>{
                    const img = new Image();
                    img.onload = ({
                        "UploadArea.useCallback[handleFile]": ()=>{
                            setOriginalImage(img, e.target?.result);
                        }
                    })["UploadArea.useCallback[handleFile]"];
                    img.src = e.target?.result;
                }
            })["UploadArea.useCallback[handleFile]"];
            reader.readAsDataURL(file);
        }
    }["UploadArea.useCallback[handleFile]"], [
        setOriginalImage
    ]);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadArea.useCallback[handleDrop]": (e)=>{
            e.preventDefault();
            setIsDragging(false);
            const file = e.dataTransfer.files[0];
            if (file) handleFile(file);
        }
    }["UploadArea.useCallback[handleDrop]"], [
        handleFile
    ]);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadArea.useCallback[handleDragOver]": (e)=>{
            e.preventDefault();
            setIsDragging(true);
        }
    }["UploadArea.useCallback[handleDragOver]"], []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadArea.useCallback[handleDragLeave]": ()=>{
            setIsDragging(false);
        }
    }["UploadArea.useCallback[handleDragLeave]"], []);
    const handleFileInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadArea.useCallback[handleFileInput]": (e)=>{
            const file = e.target.files?.[0];
            if (file) handleFile(file);
        }
    }["UploadArea.useCallback[handleFileInput]"], [
        handleFile
    ]);
    const handleReplace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadArea.useCallback[handleReplace]": ()=>{
            reset();
            document.getElementById('file-input')?.click();
        }
    }["UploadArea.useCallback[handleReplace]"], [
        reset
    ]);
    if (imageDataUrl) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onDrop: handleDrop,
            onDragOver: handleDragOver,
            onDragLeave: handleDragLeave,
            className: `
          relative border-2 border-dashed rounded-2xl p-12
          transition-all duration-300
          ${isDragging ? 'border-glassAccent bg-glassAccent/20 scale-105' : 'border-white/30 bg-white/5 hover:border-white/50'}
        `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-16 h-16 mb-4 text-white/70",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-white mb-2",
                            children: "Drop your image here"
                        }, void 0, false, {
                            fileName: "[project]/components/UploadArea.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 mb-4",
                            children: "or click to browse"
                        }, void 0, false, {
                            fileName: "[project]/components/UploadArea.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>document.getElementById('file-input')?.click(),
                            className: "glass-button px-6 py-3 rounded-xl text-white font-medium",
                            children: "Choose File"
                        }, void 0, false, {
                            fileName: "[project]/components/UploadArea.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(UploadArea, "/Q1ueTeFK4GNnRL6H9H3oxz0QAk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDitherStore"]
    ];
});
_c = UploadArea;
var _c;
__turbopack_context__.k.register(_c, "UploadArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/GlassCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlassCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function GlassCard({ children, className = '', onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
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
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = GlassCard;
var _c;
__turbopack_context__.k.register(_c, "GlassCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ControlPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ControlPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useDitherStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GlassCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ControlPanel() {
    _s();
    const { settings, updateSettings, imageDataUrl, undo, redo, canUndo, canRedo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDitherStore"])();
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
        // Canvas 2D Effects
        {
            value: 'mesh-gradient',
            label: 'Mesh Gradient (Canvas)',
            category: 'Canvas 2D'
        },
        {
            value: 'static-mesh',
            label: 'Static Mesh',
            category: 'Canvas 2D'
        },
        {
            value: 'radial-gradient',
            label: 'Radial Gradient',
            category: 'Canvas 2D'
        },
        {
            value: 'grain-gradient',
            label: 'Grain Gradient',
            category: 'Canvas 2D'
        },
        {
            value: 'liquid-metal',
            label: 'Liquid Metal',
            category: 'Canvas 2D'
        },
        {
            value: 'dot-orbit',
            label: 'Dot Orbit',
            category: 'Canvas 2D'
        },
        {
            value: 'dot-grid',
            label: 'Dot Grid',
            category: 'Canvas 2D'
        },
        {
            value: 'warp',
            label: 'Warp',
            category: 'Canvas 2D'
        },
        // WebGL - Raytracing
        {
            value: 'raymarching-spheres',
            label: '🔮 Raymarched Spheres',
            category: 'WebGL - Raytracing'
        },
        // WebGL - Fractals & Patterns
        {
            value: 'mandelbrot',
            label: '🌀 Mandelbrot Set',
            category: 'WebGL - Fractals'
        },
        {
            value: 'voronoi',
            label: '🔶 Voronoi Cells',
            category: 'WebGL - Fractals'
        },
        {
            value: 'plasma',
            label: '⚡ Plasma Waves',
            category: 'WebGL - Fractals'
        },
        // WebGL - Distortion
        {
            value: 'tunnel',
            label: '🌊 Tunnel Effect',
            category: 'WebGL - Distortion'
        },
        {
            value: 'ripple',
            label: '💧 Ripple Effect',
            category: 'WebGL - Distortion'
        },
        {
            value: 'wave-distortion',
            label: '🌊 Wave Distortion',
            category: 'WebGL - Distortion'
        },
        {
            value: 'swirl',
            label: '🌀 Swirl Effect',
            category: 'WebGL - Distortion'
        },
        {
            value: 'kaleidoscope',
            label: '🔮 Kaleidoscope',
            category: 'WebGL - Distortion'
        },
        {
            value: 'mirror',
            label: '🪞 Mirror Effect',
            category: 'WebGL - Distortion'
        },
        // WebGL - Artistic
        {
            value: 'mosaic',
            label: '🎨 Voronoi Mosaic',
            category: 'WebGL - Artistic'
        },
        {
            value: 'mosaic-tiles',
            label: '🧩 Mosaic Tiles',
            category: 'WebGL - Artistic'
        },
        {
            value: 'oil-painting',
            label: '🖼️ Oil Painting',
            category: 'WebGL - Artistic'
        },
        {
            value: 'pixel-dither',
            label: '🎮 Pixel Dither',
            category: 'WebGL - Artistic'
        },
        // WebGL - Effects
        {
            value: 'rgb-split',
            label: '📺 RGB Split',
            category: 'WebGL - Effects'
        },
        {
            value: 'glitch',
            label: '📺 Glitch',
            category: 'WebGL - Effects'
        },
        {
            value: 'chromatic',
            label: '🌈 Chromatic Aberration',
            category: 'WebGL - Effects'
        },
        {
            value: 'heatmap',
            label: '🔥 Heatmap',
            category: 'WebGL - Effects'
        },
        {
            value: 'vignette',
            label: '🎞️ Vignette',
            category: 'WebGL - Effects'
        },
        {
            value: 'pixelate',
            label: '🔲 Pixelate',
            category: 'WebGL - Effects'
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "mb-6 animate-slide-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-semibold text-white",
                        children: "Controls"
                    }, void 0, false, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>undo(),
                                disabled: !canUndo(),
                                className: "glass-button p-2 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed",
                                title: "Undo (Ctrl+Z)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ControlPanel.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>redo(),
                                disabled: !canRedo(),
                                className: "glass-button p-2 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed",
                                title: "Redo (Ctrl+Shift+Z)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ControlPanel.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ControlPanel.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: "Processing Mode"
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>updateSettings({
                                                filter: 'none'
                                            }),
                                        className: `px-4 py-3 rounded-xl font-medium transition-all duration-200 ${!isUsingFilter ? 'bg-glassAccent/60 text-white border-2 border-white/40' : 'glass-button text-white/70'}`,
                                        children: "Dithering"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>updateSettings({
                                                filter: 'heatmap'
                                            }),
                                        className: `px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isUsingFilter ? 'bg-glassAccent/60 text-white border-2 border-white/40' : 'glass-button text-white/70'}`,
                                        children: "Filters/Shaders"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    !isUsingFilter ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: "Dithering Algorithm"
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: settings.algorithm,
                                onChange: (e)=>updateSettings({
                                        algorithm: e.target.value
                                    }),
                                className: "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-glassAccent transition-all duration-200",
                                children: Object.entries(groupedAlgorithms).map(([category, algos])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                        label: category,
                                        className: "bg-gray-800",
                                        children: algos.map((algo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: algo.value,
                                                className: "bg-gray-900",
                                                children: algo.label
                                            }, algo.value, false, {
                                                fileName: "[project]/components/ControlPanel.tsx",
                                                lineNumber: 167,
                                                columnNumber: 21
                                            }, this))
                                    }, category, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: "Filter Effect"
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: settings.filter,
                                onChange: (e)=>updateSettings({
                                        filter: e.target.value
                                    }),
                                className: "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-glassAccent transition-all duration-200",
                                children: Object.entries(groupedFilters).map(([category, filts])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                        label: category,
                                        className: "bg-gray-800",
                                        children: filts.map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: filter.value,
                                                className: "bg-gray-900",
                                                children: filter.label
                                            }, filter.value, false, {
                                                fileName: "[project]/components/ControlPanel.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this))
                                    }, category, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this),
                    !isUsingFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: "Color Mode"
                            }, void 0, false, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>updateSettings({
                                                colorMode: 'grayscale'
                                            }),
                                        className: `px-4 py-2 rounded-xl font-medium transition-all duration-200 ${settings.colorMode === 'grayscale' ? 'bg-white/20 text-white border-2 border-white/40' : 'glass-button text-white/70'}`,
                                        children: "Grayscale"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>updateSettings({
                                                colorMode: 'color'
                                            }),
                                        className: `px-4 py-2 rounded-xl font-medium transition-all duration-200 ${settings.colorMode === 'color' ? 'bg-white/20 text-white border-2 border-white/40' : 'glass-button text-white/70'}`,
                                        children: "Color"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    !isUsingFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: [
                                    "Color Depth: ",
                                    settings.colorDepth,
                                    " colors"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                lineNumber: 238,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-xs text-white/50 mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "256"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: [
                                    "Contrast: ",
                                    settings.contrast,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                lineNumber: 265,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-white/80 mb-2",
                                children: [
                                    "Brightness: ",
                                    settings.brightness,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                lineNumber: 287,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ControlPanel.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    settings.colorMode === 'color' && !isUsingFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/80 mb-2",
                                        children: [
                                            "Hue: ",
                                            settings.hue,
                                            "°"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/80 mb-2",
                                        children: [
                                            "Saturation: ",
                                            settings.saturation,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ControlPanel.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ControlPanel.tsx",
                                lineNumber: 324,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ControlPanel.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ControlPanel.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(ControlPanel, "826d5GCE7CcEf6CYFsx9kIRIibM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDitherStore"]
    ];
});
_c = ControlPanel;
var _c;
__turbopack_context__.k.register(_c, "ControlPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/filters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/dithering.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    // Check if it's a WebGL shader
    const webglShaders = [
        'raymarching-spheres',
        'mandelbrot',
        'voronoi',
        'plasma',
        'kaleidoscope',
        'rgb-split',
        'glitch',
        'pixel-dither',
        'wave-distortion',
        'tunnel',
        'ripple',
        'oil-painting',
        'mosaic',
        'mosaic-tiles',
        'pixelate',
        'chromatic',
        'heatmap',
        'vignette',
        'swirl',
        'mirror'
    ];
    if (webglShaders.includes(settings.filter)) {
        // Will be handled by DitherCanvas component with WebGL
        return;
    }
    // Apply Canvas 2D filter if selected (and not 'none')
    if (settings.filter !== 'none') {
        const { applyFilter } = __turbopack_context__.r("[project]/lib/filters.ts [app-client] (ecmascript)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/shaders/ShaderProgram.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// WebGL shader utility class
__turbopack_context__.s([
    "ShaderProgram",
    ()=>ShaderProgram,
    "vertexShader",
    ()=>vertexShader
]);
class ShaderProgram {
    gl;
    program = null;
    canvas;
    animationId = null;
    startTime = Date.now();
    texture = null;
    constructor(canvas){
        this.canvas = canvas;
        const gl = canvas.getContext('webgl', {
            premultipliedAlpha: false,
            preserveDrawingBuffer: true
        }) || canvas.getContext('experimental-webgl', {
            premultipliedAlpha: false,
            preserveDrawingBuffer: true
        });
        if (!gl) {
            throw new Error('WebGL not supported');
        }
        this.gl = gl;
    }
    compileShader(source, type) {
        const shader = this.gl.createShader(type);
        if (!shader) return null;
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error('Shader compilation failed:', this.gl.getShaderInfoLog(shader));
            this.gl.deleteShader(shader);
            return null;
        }
        return shader;
    }
    createProgram(vertexSource, fragmentSource) {
        const vertexShader = this.compileShader(vertexSource, this.gl.VERTEX_SHADER);
        const fragmentShader = this.compileShader(fragmentSource, this.gl.FRAGMENT_SHADER);
        if (!vertexShader || !fragmentShader) {
            return false;
        }
        this.program = this.gl.createProgram();
        if (!this.program) return false;
        this.gl.attachShader(this.program, vertexShader);
        this.gl.attachShader(this.program, fragmentShader);
        this.gl.linkProgram(this.program);
        if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
            console.error('Program linking failed:', this.gl.getProgramInfoLog(this.program));
            return false;
        }
        this.gl.useProgram(this.program);
        // Clean up shaders after linking
        this.gl.deleteShader(vertexShader);
        this.gl.deleteShader(fragmentShader);
        return true;
    }
    setTexture(image) {
        if (this.texture) {
            this.gl.deleteTexture(this.texture);
        }
        this.texture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);
        // Set texture uniform
        if (this.program) {
            const texLocation = this.gl.getUniformLocation(this.program, 'u_texture');
            this.gl.uniform1i(texLocation, 0);
        }
    }
    setupGeometry() {
        const positions = new Float32Array([
            -1,
            -1,
            1,
            -1,
            -1,
            1,
            1,
            1
        ]);
        const texCoords = new Float32Array([
            0,
            1,
            1,
            1,
            0,
            0,
            1,
            0
        ]);
        const positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, positions, this.gl.STATIC_DRAW);
        const positionLocation = this.gl.getAttribLocation(this.program, 'a_position');
        this.gl.enableVertexAttribArray(positionLocation);
        this.gl.vertexAttribPointer(positionLocation, 2, this.gl.FLOAT, false, 0, 0);
        const texCoordBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, texCoordBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, texCoords, this.gl.STATIC_DRAW);
        const texCoordLocation = this.gl.getAttribLocation(this.program, 'a_texCoord');
        this.gl.enableVertexAttribArray(texCoordLocation);
        this.gl.vertexAttribPointer(texCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
    }
    setUniform(name, value) {
        if (!this.program) return;
        const location = this.gl.getUniformLocation(this.program, name);
        if (location === null) return;
        if (typeof value === 'number') {
            this.gl.uniform1f(location, value);
        } else if (value.length === 2) {
            this.gl.uniform2f(location, value[0], value[1]);
        } else if (value.length === 3) {
            this.gl.uniform3f(location, value[0], value[1], value[2]);
        } else if (value.length === 4) {
            this.gl.uniform4f(location, value[0], value[1], value[2], value[3]);
        }
    }
    render(uniforms = {}) {
        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        this.gl.clearColor(0, 0, 0, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        Object.entries(uniforms).forEach(([name, value])=>{
            this.setUniform(name, value);
        });
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
    }
    animate(uniforms) {
        const frame = ()=>{
            const time = (Date.now() - this.startTime) / 1000;
            this.render({
                u_time: time,
                ...uniforms()
            });
            this.animationId = requestAnimationFrame(frame);
        };
        frame();
    }
    stopAnimation() {
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
    destroy() {
        this.stopAnimation();
        if (this.texture) {
            this.gl.deleteTexture(this.texture);
            this.texture = null;
        }
        if (this.program) {
            this.gl.deleteProgram(this.program);
            this.program = null;
        }
    }
}
const vertexShader = `
attribute vec2 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoord;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_texCoord = a_texCoord;
}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/shaders/glslShaders.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Advanced GLSL Fragment Shaders
// Plasma Effect - Works reliably
__turbopack_context__.s([
    "chromaticShader",
    ()=>chromaticShader,
    "glitchShader",
    ()=>glitchShader,
    "heatmapShader",
    ()=>heatmapShader,
    "kaleidoscope",
    ()=>kaleidoscope,
    "mandelbrotFractal",
    ()=>mandelbrotFractal,
    "mirrorShader",
    ()=>mirrorShader,
    "mosaicShader",
    ()=>mosaicShader,
    "mosaicTiles",
    ()=>mosaicTiles,
    "oilPaintingShader",
    ()=>oilPaintingShader,
    "pixelDitherShader",
    ()=>pixelDitherShader,
    "pixelateShader",
    ()=>pixelateShader,
    "plasmaEffect",
    ()=>plasmaEffect,
    "raymarchingSpheres",
    ()=>raymarchingSpheres,
    "rgbSplitShader",
    ()=>rgbSplitShader,
    "rippleEffect",
    ()=>rippleEffect,
    "shaderList",
    ()=>shaderList,
    "swirlShader",
    ()=>swirlShader,
    "tunnelEffect",
    ()=>tunnelEffect,
    "vignetteShader",
    ()=>vignetteShader,
    "voronoiPattern",
    ()=>voronoiPattern,
    "waveDistortion",
    ()=>waveDistortion
]);
const plasmaEffect = `
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
`;
const rippleEffect = `
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
`;
const waveDistortion = `
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
`;
const kaleidoscope = `
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
`;
const rgbSplitShader = `
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
`;
const tunnelEffect = `
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
`;
const voronoiPattern = `
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
`;
const mandelbrotFractal = `
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
`;
const raymarchingSpheres = `
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
`;
const mosaicShader = `
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
`;
const oilPaintingShader = `
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
`;
const pixelDitherShader = `
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
`;
const glitchShader = `
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
`;
const mosaicTiles = `
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
`;
const pixelateShader = `
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
`;
const chromaticShader = `
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
`;
const heatmapShader = `
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
`;
const vignetteShader = `
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
`;
const swirlShader = `
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
`;
const mirrorShader = `
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
`;
const shaderList = {
    'plasma': plasmaEffect,
    'ripple': rippleEffect,
    'wave-distortion': waveDistortion,
    'kaleidoscope': kaleidoscope,
    'rgb-split': rgbSplitShader,
    'tunnel': tunnelEffect,
    'voronoi': voronoiPattern,
    'mandelbrot': mandelbrotFractal,
    'raymarching-spheres': raymarchingSpheres,
    'mosaic': mosaicShader,
    'oil-painting': oilPaintingShader,
    'pixel-dither': pixelDitherShader,
    'glitch': glitchShader,
    'mosaic-tiles': mosaicTiles,
    'pixelate': pixelateShader,
    'chromatic': chromaticShader,
    'heatmap': heatmapShader,
    'vignette': vignetteShader,
    'swirl': swirlShader,
    'mirror': mirrorShader
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/shaders/shaderRenderer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateWebGLShader",
    ()=>animateWebGLShader,
    "animatedShaders",
    ()=>animatedShaders,
    "applyWebGLShader",
    ()=>applyWebGLShader,
    "isAnimatedShader",
    ()=>isAnimatedShader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shaders$2f$ShaderProgram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/shaders/ShaderProgram.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shaders$2f$glslShaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/shaders/glslShaders.ts [app-client] (ecmascript)");
;
;
function applyWebGLShader(canvas, image, shaderName, settings) {
    try {
        // Set canvas size to match image
        canvas.width = image.width;
        canvas.height = image.height;
        // Create shader program
        const shader = new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shaders$2f$ShaderProgram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderProgram"](canvas);
        const fragmentShader = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shaders$2f$glslShaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shaderList"][shaderName];
        if (!shader.createProgram(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shaders$2f$ShaderProgram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vertexShader"], fragmentShader)) {
            console.error('Failed to create shader program');
            return null;
        }
        shader.setTexture(image);
        shader.setupGeometry();
        // Set uniforms
        const uniforms = {
            u_resolution: [
                canvas.width,
                canvas.height
            ],
            u_time: 0,
            u_brightness: settings.brightness / 100,
            u_contrast: settings.contrast / 100
        };
        shader.render(uniforms);
        return shader;
    } catch (error) {
        console.error('WebGL shader error:', error);
        return null;
    }
}
function animateWebGLShader(canvas, image, shaderName, settings) {
    try {
        // Set canvas size to match image
        canvas.width = image.width;
        canvas.height = image.height;
        // Create shader program
        const shader = new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shaders$2f$ShaderProgram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderProgram"](canvas);
        const fragmentShader = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shaders$2f$glslShaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shaderList"][shaderName];
        if (!shader.createProgram(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shaders$2f$ShaderProgram$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vertexShader"], fragmentShader)) {
            console.error('Failed to create shader program');
            return null;
        }
        shader.setTexture(image);
        shader.setupGeometry();
        // Animate with smooth 60fps
        shader.animate(()=>({
                u_resolution: [
                    canvas.width,
                    canvas.height
                ],
                u_brightness: settings.brightness / 100,
                u_contrast: settings.contrast / 100
            }));
        return shader;
    } catch (error) {
        console.error('WebGL animation error:', error);
        return null;
    }
}
const animatedShaders = new Set([
    'raymarching-spheres',
    'mandelbrot',
    'voronoi',
    'plasma',
    'rgb-split',
    'glitch',
    'pixel-dither',
    'wave-distortion',
    'tunnel',
    'ripple',
    'swirl'
]);
function isAnimatedShader(shaderName) {
    return animatedShaders.has(shaderName);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ComparisonSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComparisonSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ComparisonSlider({ originalSrc, ditheredCanvas }) {
    _s();
    const [sliderPosition, setSliderPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseDown = ()=>setIsDragging(true);
    const handleMouseUp = ()=>setIsDragging(false);
    const handleMouseMove = (e)=>{
        if (!isDragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width * 100;
        setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };
    const handleTouchMove = (e)=>{
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percentage = x / rect.width * 100;
        setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };
    if (!ditheredCanvas) return null;
    const ditheredSrc = ditheredCanvas.toDataURL();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full aspect-auto overflow-hidden rounded-xl cursor-col-resize select-none",
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseUp,
        onTouchMove: handleTouchMove,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: ditheredSrc,
                alt: "Dithered",
                className: "w-full h-full object-contain",
                draggable: false
            }, void 0, false, {
                fileName: "[project]/components/ComparisonSlider.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-full overflow-hidden",
                style: {
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: originalSrc,
                    alt: "Original",
                    className: "w-full h-full object-contain",
                    draggable: false
                }, void 0, false, {
                    fileName: "[project]/components/ComparisonSlider.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ComparisonSlider.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 bottom-0 w-1 bg-white/80 shadow-lg",
                style: {
                    left: `${sliderPosition}%`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center cursor-col-resize",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-gray-800",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M8 9l4-4 4 4m0 6l-4 4-4-4"
                        }, void 0, false, {
                            fileName: "[project]/components/ComparisonSlider.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ComparisonSlider.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ComparisonSlider.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ComparisonSlider.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-4 glass-button px-3 py-1 rounded-lg text-xs font-medium text-white",
                children: "Original"
            }, void 0, false, {
                fileName: "[project]/components/ComparisonSlider.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 right-4 glass-button px-3 py-1 rounded-lg text-xs font-medium text-white",
                children: "Dithered"
            }, void 0, false, {
                fileName: "[project]/components/ComparisonSlider.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ComparisonSlider.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(ComparisonSlider, "6L12/rbqrUzyqVmS/B+Xb04fN5g=");
_c = ComparisonSlider;
var _c;
__turbopack_context__.k.register(_c, "ComparisonSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PresetManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PresetManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useDitherStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GlassCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function PresetManager() {
    _s();
    const { presets, savePreset, loadPreset, deletePreset, settings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDitherStore"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [presetName, setPresetName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showSaveDialog, setShowSaveDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSave = ()=>{
        if (presetName.trim()) {
            savePreset(presetName.trim());
            setPresetName('');
            setShowSaveDialog(false);
        }
    };
    const formatDate = (timestamp)=>{
        return new Date(timestamp).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: "glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        }, void 0, false, {
                            fileName: "[project]/components/PresetManager.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/PresetManager.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    "Presets (",
                    presets.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/components/PresetManager.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
                onClick: ()=>setIsOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "max-w-2xl w-full max-h-[80vh] overflow-hidden animate-scale-in",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold text-white",
                                    children: "Presets"
                                }, void 0, false, {
                                    fileName: "[project]/components/PresetManager.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "glass-button p-2 rounded-xl text-white hover:bg-white/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PresetManager.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PresetManager.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/PresetManager.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PresetManager.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowSaveDialog(!showSaveDialog),
                                    className: "w-full glass-button px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M12 4v16m8-8H4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PresetManager.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/PresetManager.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        "Save Current Settings"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PresetManager.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                showSaveDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: presetName,
                                            onChange: (e)=>setPresetName(e.target.value),
                                            placeholder: "Preset name...",
                                            className: "flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-glassAccent",
                                            onKeyPress: (e)=>e.key === 'Enter' && handleSave(),
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/PresetManager.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSave,
                                            className: "glass-button px-6 py-2 rounded-xl text-white font-medium",
                                            children: "Save"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PresetManager.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/PresetManager.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/PresetManager.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 max-h-96 overflow-y-auto",
                            children: presets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-white/60 py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-16 h-16 mx-auto mb-4 opacity-40",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/PresetManager.tsx",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PresetManager.tsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No presets saved yet"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PresetManager.tsx",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mt-2",
                                        children: "Save your favorite settings for quick access"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PresetManager.tsx",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PresetManager.tsx",
                                lineNumber: 100,
                                columnNumber: 17
                            }, this) : presets.map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-panel p-4 rounded-xl flex items-center justify-between hover:bg-white/15 transition-all duration-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white font-medium",
                                                    children: preset.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PresetManager.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 text-sm",
                                                    children: [
                                                        preset.settings.algorithm,
                                                        " • ",
                                                        preset.settings.colorDepth,
                                                        " colors • ",
                                                        formatDate(preset.timestamp)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/PresetManager.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PresetManager.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        loadPreset(preset);
                                                        setIsOpen(false);
                                                    },
                                                    className: "glass-button px-4 py-2 rounded-lg text-white text-sm font-medium",
                                                    children: "Load"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PresetManager.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>deletePreset(preset.timestamp),
                                                    className: "glass-button p-2 rounded-lg text-red-300 hover:text-red-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PresetManager.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PresetManager.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PresetManager.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/PresetManager.tsx",
                                            lineNumber: 119,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, preset.timestamp, true, {
                                    fileName: "[project]/components/PresetManager.tsx",
                                    lineNumber: 110,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/PresetManager.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PresetManager.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/PresetManager.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(PresetManager, "xYVuzaSdbFqH63n1bAsV6jlE75M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDitherStore"]
    ];
});
_c = PresetManager;
var _c;
__turbopack_context__.k.register(_c, "PresetManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/KeyboardShortcuts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KeyboardShortcuts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GlassCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function KeyboardShortcuts() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const shortcuts = [
        {
            key: 'Space',
            description: 'Toggle comparison view'
        },
        {
            key: 'Ctrl/⌘ + Z',
            description: 'Undo'
        },
        {
            key: 'Ctrl/⌘ + Shift + Z',
            description: 'Redo'
        },
        {
            key: 'Ctrl/⌘ + S',
            description: 'Download PNG'
        },
        {
            key: 'Ctrl/⌘ + E',
            description: 'Download SVG'
        },
        {
            key: 'Ctrl/⌘ + O',
            description: 'Open image'
        },
        {
            key: 'R',
            description: 'Reset settings'
        },
        {
            key: 'C',
            description: 'Toggle color mode'
        },
        {
            key: '?',
            description: 'Show keyboard shortcuts'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: "glass-button p-2 rounded-xl text-white hover:bg-white/20 transition-all duration-200",
                title: "Keyboard Shortcuts",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    }, void 0, false, {
                        fileName: "[project]/components/KeyboardShortcuts.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/KeyboardShortcuts.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/KeyboardShortcuts.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
                onClick: ()=>setIsOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "max-w-lg w-full animate-scale-in",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold text-white",
                                    children: "Keyboard Shortcuts"
                                }, void 0, false, {
                                    fileName: "[project]/components/KeyboardShortcuts.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "glass-button p-2 rounded-xl text-white hover:bg-white/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/components/KeyboardShortcuts.tsx",
                                            lineNumber: 47,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/KeyboardShortcuts.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/KeyboardShortcuts.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/KeyboardShortcuts.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: shortcuts.map((shortcut, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/80",
                                            children: shortcut.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/KeyboardShortcuts.tsx",
                                            lineNumber: 55,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                            className: "px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-mono",
                                            children: shortcut.key
                                        }, void 0, false, {
                                            fileName: "[project]/components/KeyboardShortcuts.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/components/KeyboardShortcuts.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/KeyboardShortcuts.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/KeyboardShortcuts.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/KeyboardShortcuts.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(KeyboardShortcuts, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = KeyboardShortcuts;
var _c;
__turbopack_context__.k.register(_c, "KeyboardShortcuts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DitherCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DitherCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useDitherStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dithering$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/dithering.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shaders$2f$shaderRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/shaders/shaderRenderer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GlassCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComparisonSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ComparisonSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PresetManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PresetManager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KeyboardShortcuts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/KeyboardShortcuts.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function DitherCanvas() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shaderProgramRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { originalImage, settings, imageDataUrl, showComparison, setShowComparison, isProcessing, setIsProcessing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDitherStore"])();
    // WebGL shader list
    const webglShaders = [
        'raymarching-spheres',
        'mandelbrot',
        'voronoi',
        'plasma',
        'kaleidoscope',
        'rgb-split',
        'glitch',
        'pixel-dither',
        'wave-distortion',
        'tunnel',
        'ripple',
        'oil-painting',
        'mosaic',
        'mosaic-tiles',
        'pixelate',
        'chromatic',
        'heatmap',
        'vignette',
        'swirl',
        'mirror'
    ];
    const isWebGLShader = webglShaders.includes(settings.filter);
    const needsAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shaders$2f$shaderRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAnimatedShader"])(settings.filter);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DitherCanvas.useEffect": ()=>{
            if (!originalImage || !canvasRef.current) return;
            // Cleanup previous shader
            if (shaderProgramRef.current) {
                shaderProgramRef.current.destroy();
                shaderProgramRef.current = null;
            }
            setIsProcessing(true);
            setError(null);
            const processImage = {
                "DitherCanvas.useEffect.processImage": async ()=>{
                    if (!canvasRef.current) return;
                    try {
                        if (isWebGLShader) {
                            // Use WebGL shader
                            const canvas = canvasRef.current;
                            if (needsAnimation) {
                                shaderProgramRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shaders$2f$shaderRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateWebGLShader"])(canvas, originalImage, settings.filter, settings);
                            } else {
                                shaderProgramRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$shaders$2f$shaderRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyWebGLShader"])(canvas, originalImage, settings.filter, settings);
                            }
                            if (!shaderProgramRef.current) {
                                throw new Error('WebGL shader failed to initialize');
                            }
                        } else {
                            // Use Canvas 2D API
                            await new Promise({
                                "DitherCanvas.useEffect.processImage": (resolve)=>{
                                    requestAnimationFrame({
                                        "DitherCanvas.useEffect.processImage": ()=>{
                                            if (canvasRef.current && originalImage) {
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dithering$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyDithering"])(canvasRef.current, originalImage, settings);
                                            }
                                            resolve(null);
                                        }
                                    }["DitherCanvas.useEffect.processImage"]);
                                }
                            }["DitherCanvas.useEffect.processImage"]);
                        }
                        setIsProcessing(false);
                    } catch (err) {
                        console.error('Processing error:', err);
                        setError(err instanceof Error ? err.message : 'Processing failed');
                        // Fallback to Canvas 2D
                        if (canvasRef.current) {
                            const tempSettings = {
                                ...settings,
                                filter: 'none'
                            };
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dithering$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyDithering"])(canvasRef.current, originalImage, tempSettings);
                        }
                        setIsProcessing(false);
                    }
                }
            }["DitherCanvas.useEffect.processImage"];
            processImage();
            return ({
                "DitherCanvas.useEffect": ()=>{
                    if (shaderProgramRef.current) {
                        shaderProgramRef.current.destroy();
                        shaderProgramRef.current = null;
                    }
                }
            })["DitherCanvas.useEffect"];
        }
    }["DitherCanvas.useEffect"], [
        originalImage,
        settings,
        isWebGLShader,
        needsAnimation,
        setIsProcessing
    ]);
    const handleDownload = ()=>{
        if (!canvasRef.current) return;
        const link = document.createElement('a');
        const effectName = settings.filter !== 'none' ? settings.filter : settings.algorithm;
        link.download = `ditherlab-${effectName}-${Date.now()}.png`;
        link.href = canvasRef.current.toDataURL('image/png');
        link.click();
    };
    const handleDownloadSVG = ()=>{
        if (!canvasRef.current || isWebGLShader) {
            alert('SVG export is only available for dithering algorithms');
            return;
        }
        const canvas = canvasRef.current;
        // Create a temporary 2D context to read pixels
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        if (!tempCtx) return;
        tempCtx.drawImage(canvas, 0, 0);
        const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}">`;
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
        const effectName = settings.filter !== 'none' ? settings.filter : settings.algorithm;
        link.download = `ditherlab-${effectName}-${Date.now()}.svg`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
    };
    const toggleFullscreen = ()=>{
        setIsFullscreen(!isFullscreen);
    };
    if (!imageDataUrl) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "animate-slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-white",
                                children: "Preview"
                            }, void 0, false, {
                                fileName: "[project]/components/DitherCanvas.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PresetManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$KeyboardShortcuts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowComparison(!showComparison),
                                        className: `glass-button px-4 py-2 rounded-xl text-white text-sm font-medium
                       transition-all duration-200 ${showComparison ? 'bg-glassAccent/60' : ''}`,
                                        title: "Toggle Comparison (Space)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                            }, void 0, false, {
                                                fileName: "[project]/components/DitherCanvas.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/DitherCanvas.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleFullscreen,
                                        className: "glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200",
                                        children: isFullscreen ? 'Exit' : 'Fullscreen'
                                    }, void 0, false, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDownload,
                                        className: "glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200 flex items-center gap-2",
                                        title: "Download PNG (Ctrl+S)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DitherCanvas.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/DitherCanvas.tsx",
                                                lineNumber: 210,
                                                columnNumber: 15
                                            }, this),
                                            "PNG"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    !isWebGLShader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDownloadSVG,
                                        className: "glass-button px-4 py-2 rounded-xl text-white text-sm font-medium transition-all duration-200 flex items-center gap-2",
                                        title: "Download SVG (Ctrl+E)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DitherCanvas.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/DitherCanvas.tsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this),
                                            "SVG"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DitherCanvas.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DitherCanvas.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 glass-panel p-4 rounded-xl border-2 border-red-500/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-red-300 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/DitherCanvas.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this),
                                error,
                                " - Falling back to Canvas 2D"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DitherCanvas.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DitherCanvas.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this),
                    isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center gap-2 text-white/70 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/components/DitherCanvas.tsx",
                                lineNumber: 247,
                                columnNumber: 13
                            }, this),
                            "Processing",
                            isWebGLShader ? ' with WebGL' : '',
                            "..."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DitherCanvas.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this),
                    showComparison ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComparisonSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        originalSrc: imageDataUrl,
                        ditheredCanvas: canvasRef.current
                    }, void 0, false, {
                        fileName: "[project]/components/DitherCanvas.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium text-white/80 mb-3",
                                        children: "Original"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl overflow-hidden bg-black/20 border border-white/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imageDataUrl,
                                            alt: "Original",
                                            className: "w-full h-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DitherCanvas.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DitherCanvas.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-medium text-white/80 mb-3 flex items-center gap-2",
                                        children: [
                                            "Processed (",
                                            settings.filter !== 'none' ? settings.filter : settings.algorithm,
                                            ")",
                                            isWebGLShader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-lg border border-green-500/30",
                                                children: "WebGL"
                                            }, void 0, false, {
                                                fileName: "[project]/components/DitherCanvas.tsx",
                                                lineNumber: 276,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl overflow-hidden bg-black/20 border border-white/10 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                                ref: canvasRef,
                                                className: "w-full h-auto",
                                                style: {
                                                    imageRendering: 'pixelated'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/DitherCanvas.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this),
                                            needsAnimation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-2 right-2 glass-button px-2 py-1 rounded text-xs text-white flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/DitherCanvas.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 21
                                                    }, this),
                                                    "LIVE 60fps"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/DitherCanvas.tsx",
                                                lineNumber: 288,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DitherCanvas.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DitherCanvas.tsx",
                                lineNumber: 272,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DitherCanvas.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DitherCanvas.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4",
                onClick: toggleFullscreen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute top-6 right-6 glass-button p-3 rounded-full text-white z-10 hover:scale-110 transition-transform",
                        onClick: toggleFullscreen,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/components/DitherCanvas.tsx",
                                lineNumber: 310,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DitherCanvas.tsx",
                            lineNumber: 309,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DitherCanvas.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-full max-h-full overflow-auto",
                        children: showComparison ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[90vw] max-w-6xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComparisonSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                originalSrc: imageDataUrl,
                                ditheredCanvas: canvasRef.current
                            }, void 0, false, {
                                fileName: "[project]/components/DitherCanvas.tsx",
                                lineNumber: 317,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DitherCanvas.tsx",
                            lineNumber: 316,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                            ref: canvasRef,
                            className: "max-w-full max-h-[90vh] w-auto h-auto shadow-2xl",
                            style: {
                                imageRendering: 'pixelated'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/DitherCanvas.tsx",
                            lineNumber: 323,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DitherCanvas.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DitherCanvas.tsx",
                lineNumber: 301,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(DitherCanvas, "0gTDGys0Wl17oZ1frt8TLEhM0wU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDitherStore"]
    ];
});
_c = DitherCanvas;
var _c;
__turbopack_context__.k.register(_c, "DitherCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UploadArea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ControlPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ControlPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DitherCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DitherCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GlassCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useDitherStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function HomePage() {
    _s();
    const { imageDataUrl, showTutorial, setShowTutorial } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDitherStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen py-8 px-4 md:px-8 lg:px-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12 animate-fade-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-2xl bg-glassAccent backdrop-blur-xl  flex items-center justify-center border border-white/20 shadow-glass",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-10 h-10 text-white",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "2",
                                            y: "2",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 21,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "10",
                                            y: "2",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 22,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "18",
                                            y: "2",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "6",
                                            y: "6",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 24,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "14",
                                            y: "6",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "2",
                                            y: "10",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "10",
                                            y: "10",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "18",
                                            y: "10",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "6",
                                            y: "14",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "14",
                                            y: "14",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "2",
                                            y: "18",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "10",
                                            y: "18",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "18",
                                            y: "18",
                                            width: "4",
                                            height: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 20,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight",
                            children: "DitherLab"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-white/70 max-w-2xl mx-auto",
                            children: "Create pixel-perfect halftone and glitch art in your browser"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white/50 mt-2",
                            children: "11 dithering algorithms • 28 shader effects • WebGL/GLSL • Real-time • No uploads"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                !imageDataUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        showTutorial && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "mb-8 animate-slide-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-white",
                                            children: "Quick Start Guide"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowTutorial(false),
                                            className: "glass-button p-2 rounded-lg text-white/70 hover:text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M6 18L18 6M6 6l12 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 59,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl",
                                                        children: "📤"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-white font-medium mb-2",
                                                    children: "1. Upload Image"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 text-sm",
                                                    children: "Drag & drop or click to upload any PNG, JPG, or WebP image"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl",
                                                        children: "🎨"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-white font-medium mb-2",
                                                    children: "2. Choose Style"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 text-sm",
                                                    children: "Pick from 11 dithering algorithms or 28 shader effects (WebGL/GLSL)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl",
                                                        children: "⚙️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-white font-medium mb-2",
                                                    children: "3. Fine-tune"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 text-sm",
                                                    children: "Adjust brightness, contrast, color depth, and more"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 52,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 text-white",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-semibold mb-1",
                                            children: "Lightning Fast"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/60 text-sm",
                                            children: "Real-time processing with Canvas API & WebGL"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 text-white",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-semibold mb-1",
                                            children: "Private & Secure"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/60 text-sm",
                                            children: "All processing happens in your browser"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 text-white",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-semibold mb-1",
                                            children: "39 Effects"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/60 text-sm",
                                            children: "11 dithering + 28 shaders (WebGL/GLSL)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6 text-white",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-semibold mb-1",
                                            children: "Export Ready"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/60 text-sm",
                                            children: "Download as PNG or SVG"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: imageDataUrl ? "grid grid-cols-1 lg:grid-cols-3 gap-6" : "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: imageDataUrl ? "lg:col-span-1 space-y-6" : "",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlassCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "animate-slide-up",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UploadArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                imageDataUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ControlPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        imageDataUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DitherCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12 animate-fade-in",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-panel rounded-2xl p-6 inline-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            "WebGL + Canvas API"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M13 10V3L4 14h7v7l9-11h-7z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this),
                                            "60fps Shaders"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this),
                                            "100% Private"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-white/40 text-xs",
                                children: "Built with Next.js 16, TypeScript, WebGL/GLSL, Tailwind CSS & Zustand"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(HomePage, "2yxaYMd3Kpa9PTp2sOtCCKZ3Bq0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useDitherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDitherStore"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_082797e8._.js.map