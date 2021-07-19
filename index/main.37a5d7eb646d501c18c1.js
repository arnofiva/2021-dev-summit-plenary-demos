/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
define(["esri/WebScene","esri/core/Collection","esri/core/promiseUtils","esri/geometry","esri/renderers","esri/symbols","esri/views/SceneView","esri/widgets/ElevationProfile","esri/widgets/ElevationProfile/ElevationProfileLineGround","esri/widgets/ElevationProfile/ElevationProfileLineInput","esri/widgets/Slice","esri/widgets/Slice/SlicePlane"], (__WEBPACK_EXTERNAL_MODULE_esri_WebScene__, __WEBPACK_EXTERNAL_MODULE_esri_core_Collection__, __WEBPACK_EXTERNAL_MODULE_esri_core_promiseUtils__, __WEBPACK_EXTERNAL_MODULE_esri_geometry__, __WEBPACK_EXTERNAL_MODULE_esri_renderers__, __WEBPACK_EXTERNAL_MODULE_esri_symbols__, __WEBPACK_EXTERNAL_MODULE_esri_views_SceneView__, __WEBPACK_EXTERNAL_MODULE_esri_widgets_ElevationProfile__, __WEBPACK_EXTERNAL_MODULE_esri_widgets_ElevationProfile_ElevationProfileLineGround__, __WEBPACK_EXTERNAL_MODULE_esri_widgets_ElevationProfile_ElevationProfileLineInput__, __WEBPACK_EXTERNAL_MODULE_esri_widgets_Slice__, __WEBPACK_EXTERNAL_MODULE_esri_widgets_Slice_SlicePlane__) => { return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index/style.css":
/*!*****************************!*\
  !*** ./src/index/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/index/style.css?");

/***/ }),

/***/ "./src/index/main.ts":
/*!***************************!*\
  !*** ./src/index/main.ts ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\"), __webpack_require__(/*! esri/WebScene */ \"esri/WebScene\"), __webpack_require__(/*! esri/views/SceneView */ \"esri/views/SceneView\"), __webpack_require__(/*! esri/widgets/ElevationProfile */ \"esri/widgets/ElevationProfile\"), __webpack_require__(/*! esri/widgets/Slice */ \"esri/widgets/Slice\"), __webpack_require__(/*! esri/widgets/Slice/SlicePlane */ \"esri/widgets/Slice/SlicePlane\"), __webpack_require__(/*! esri/widgets/ElevationProfile/ElevationProfileLineGround */ \"esri/widgets/ElevationProfile/ElevationProfileLineGround\"), __webpack_require__(/*! esri/widgets/ElevationProfile/ElevationProfileLineInput */ \"esri/widgets/ElevationProfile/ElevationProfileLineInput\"), __webpack_require__(/*! esri/core/promiseUtils */ \"esri/core/promiseUtils\"), __webpack_require__(/*! esri/geometry */ \"esri/geometry\"), __webpack_require__(/*! esri/core/Collection */ \"esri/core/Collection\"), __webpack_require__(/*! esri/symbols */ \"esri/symbols\"), __webpack_require__(/*! esri/renderers */ \"esri/renderers\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, WebScene_1, SceneView_1, ElevationProfile_1, Slice_1, SlicePlane_1, ElevationProfileLineGround_1, ElevationProfileLineInput_1, promiseUtils, geometry_1, Collection_1, symbols_1, renderers_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    WebScene_1 = tslib_1.__importDefault(WebScene_1);\n    SceneView_1 = tslib_1.__importDefault(SceneView_1);\n    ElevationProfile_1 = tslib_1.__importDefault(ElevationProfile_1);\n    Slice_1 = tslib_1.__importDefault(Slice_1);\n    SlicePlane_1 = tslib_1.__importDefault(SlicePlane_1);\n    ElevationProfileLineGround_1 = tslib_1.__importDefault(ElevationProfileLineGround_1);\n    ElevationProfileLineInput_1 = tslib_1.__importDefault(ElevationProfileLineInput_1);\n    promiseUtils = tslib_1.__importStar(promiseUtils);\n    Collection_1 = tslib_1.__importDefault(Collection_1);\n    var epContainer = document.getElementById(\"containerElevationProfile\");\n    var extrudedWaterRenderer = new renderers_1.SimpleRenderer({\n        symbol: new symbols_1.PolygonSymbol3D({\n            symbolLayers: [\n                new symbols_1.ExtrudeSymbol3DLayer({\n                    material: {\n                        color: [190, 232, 255, 0.24],\n                    },\n                    size: 90\n                })\n            ]\n        })\n    });\n    var map = new WebScene_1.default({\n        portalItem: {\n            id: \"98c48f91a94448428f65d978ead0b6e9\",\n        },\n    });\n    var view = new SceneView_1.default({\n        container: \"viewDiv\",\n        qualityProfile: \"high\",\n        map: map,\n        highlightOptions: {\n            fillOpacity: 0,\n            haloOpacity: 0.7,\n        },\n        popup: {\n            dockEnabled: true,\n            dockOptions: {\n                position: \"top-right\",\n                breakpoint: false,\n            },\n        },\n        environment: {\n            lighting: {\n                waterReflectionEnabled: true\n            },\n            atmosphere: {\n                quality: \"high\"\n            },\n            atmosphereEnabled: true,\n        }\n    });\n    var elevationProfile = new ElevationProfile_1.default({\n        view: view,\n        container: epContainer,\n        visibleElements: {\n            sketchButton: false,\n        },\n    });\n    function addButton(title, onclick) {\n        var button = document.createElement(\"button\");\n        button.classList.add(\"esri-button\");\n        button.innerText = title;\n        button.onclick = promiseUtils.debounce(onclick);\n        view.ui.add(button, \"bottom-left\");\n    }\n    var sliceWidget = new Slice_1.default({\n        view: view,\n        container: \"sliceContainer\",\n    });\n    map.loadAll().then(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {\n        function startSlice(z) {\n            if (z === void 0) { z = 1600; }\n            var shape = new SlicePlane_1.default({\n                position: {\n                    spatialReference: geometry_1.SpatialReference.WebMercator,\n                    x: 1003071.9348183294,\n                    y: 5917903.287027242,\n                    z: z,\n                },\n                heading: 161,\n                tilt: 0,\n                width: 1867.352189114555,\n                height: 1667.9582919794923,\n            });\n            sliceWidget.viewModel.shape = shape;\n            sliceWidget.viewModel.excludedLayers.removeAll();\n            sliceWidget.viewModel.excludedLayers.addMany(view.map.layers);\n            sliceWidget.viewModel.start();\n        }\n        function reset() {\n            epContainer.classList.add(\"hide\");\n            elevationProfile.viewModel.clear();\n            sliceWidget.viewModel.clear();\n            if (!view.map.ground.layers.length) {\n                view.map.ground.layers.addMany(groundLayers);\n            }\n            view.map.ground.layers.forEach(function (l) { return l.visible = true; });\n            lakes.renderer = waterRenderer;\n            lakes.labelsVisible = true;\n            lakes.elevationInfo.offset = 0;\n            hike.visible = true;\n            transportation.visible = true;\n            view.map.ground.opacity = 1;\n        }\n        var hike, transportation, lakes, waterRenderer, tunnels, uvRenderer, slides, goToSlide, groundLayers;\n        return tslib_1.__generator(this, function (_a) {\n            hike = view.map.allLayers.find(function (l) { return l.title === \"hike\"; });\n            transportation = view.map.allLayers.find(function (l) { return l.title === \"transportation\"; });\n            lakes = view.map.allLayers.find(function (l) { return l.title === \"lakes\"; });\n            waterRenderer = lakes.renderer;\n            tunnels = view.map.allLayers.find(function (l) { return l.title === \"tunnels\"; });\n            uvRenderer = tunnels.renderer.clone();\n            uvRenderer.uniqueValueInfos\n                .filter(function (uvi) { return uvi.value === \"tunnel\"; })\n                .forEach(function (uvi) {\n                var pathSymbol = uvi.symbol.symbolLayers.getItemAt(0);\n                pathSymbol.profile = \"quad\";\n                pathSymbol.height = pathSymbol.width;\n            });\n            tunnels.renderer = uvRenderer.clone();\n            slides = map.presentation.slides;\n            goToSlide = function (title, speedFactor, cameraOnly) {\n                if (speedFactor === void 0) { speedFactor = 0.5; }\n                if (cameraOnly === void 0) { cameraOnly = false; }\n                return tslib_1.__awaiter(void 0, void 0, void 0, function () {\n                    var slide;\n                    return tslib_1.__generator(this, function (_a) {\n                        switch (_a.label) {\n                            case 0:\n                                slide = slides.find(function (slide) { return slide.title.text === title; });\n                                if (!slide) {\n                                    throw Error(\"No slide found with title \" + title);\n                                }\n                                return [4 /*yield*/, view.goTo(slide.viewpoint, { speedFactor: speedFactor })];\n                            case 1:\n                                _a.sent();\n                                return [2 /*return*/];\n                        }\n                    });\n                });\n            };\n            groundLayers = view.map.ground.layers.toArray();\n            addButton(\"Hike\", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {\n                return tslib_1.__generator(this, function (_a) {\n                    switch (_a.label) {\n                        case 0: return [4 /*yield*/, goToSlide(\"Trail EP\", 1, true)];\n                        case 1:\n                            _a.sent();\n                            reset();\n                            epContainer.classList.remove(\"hide\");\n                            elevationProfile.profiles = [\n                                // displays elevation values from Map.ground\n                                new ElevationProfileLineGround_1.default({\n                                    visible: true,\n                                }),\n                            ];\n                            console.log(\"Showing Hike\");\n                            return [2 /*return*/];\n                    }\n                });\n            }); });\n            addButton(\"Slice\", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {\n                return tslib_1.__generator(this, function (_a) {\n                    switch (_a.label) {\n                        case 0: return [4 /*yield*/, goToSlide(\"Start Slice\")];\n                        case 1:\n                            _a.sent();\n                            reset();\n                            // view.environment.lighting!.waterReflectionEnabled = false;\n                            lakes.definitionExpression =\n                                \"Name in ('Limmern lake', 'Upper lake', 'Mutt lake')\";\n                            startSlice();\n                            window[\"slice\"] = sliceWidget.viewModel;\n                            console.log(\"Showing Slice\");\n                            return [2 /*return*/];\n                    }\n                });\n            }); });\n            addButton(\"Underground\", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {\n                return tslib_1.__generator(this, function (_a) {\n                    switch (_a.label) {\n                        case 0: return [4 /*yield*/, goToSlide(\"Underground\", 0.8)];\n                        case 1:\n                            _a.sent();\n                            return [4 /*yield*/, new Promise(function (resolve) {\n                                    setTimeout(resolve, 200);\n                                })];\n                        case 2:\n                            _a.sent();\n                            reset();\n                            view.map.ground.layers.removeAll();\n                            view.map.ground.opacity = 0;\n                            lakes.renderer = extrudedWaterRenderer;\n                            lakes.elevationInfo.offset = -90;\n                            lakes.labelsVisible = false;\n                            lakes.definitionExpression = \"Name in ('Limmern lake', 'Mutt lake')\";\n                            hike.visible = false;\n                            transportation.visible = false;\n                            setTimeout(function () {\n                                sliceWidget.viewModel.clear();\n                            }, 1000);\n                            console.log(\"Showing Underground\");\n                            return [2 /*return*/];\n                    }\n                });\n            }); });\n            addButton(\"Utilities\", function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {\n                var query, features;\n                return tslib_1.__generator(this, function (_a) {\n                    switch (_a.label) {\n                        case 0: return [4 /*yield*/, goToSlide(\"Pipe EP\", 1)];\n                        case 1:\n                            _a.sent();\n                            reset();\n                            startSlice(800);\n                            return [4 /*yield*/, new Promise(function (resolve) {\n                                    setTimeout(resolve, 1000);\n                                })];\n                        case 2:\n                            _a.sent();\n                            view.map.ground.opacity = 1;\n                            // displays elevation values from the input line graphic\n                            elevationProfile.profiles = new Collection_1.default([\n                                new ElevationProfileLineGround_1.default({\n                                    visible: true,\n                                }),\n                                new ElevationProfileLineInput_1.default({\n                                    visible: true,\n                                }),\n                            ]);\n                            epContainer.classList.remove(\"hide\");\n                            query = tunnels.createQuery();\n                            query.returnGeometry = true;\n                            query.returnZ = true;\n                            query.objectIds = [4];\n                            return [4 /*yield*/, tunnels.queryFeatures(query)];\n                        case 3:\n                            features = _a.sent();\n                            elevationProfile.input = features.features[0];\n                            console.log(\"Showing Utilities\");\n                            return [2 /*return*/];\n                    }\n                });\n            }); });\n            return [2 /*return*/];\n        });\n    }); });\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack:///./src/index/main.ts?");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__extends\": () => (/* binding */ __extends),\n/* harmony export */   \"__assign\": () => (/* binding */ __assign),\n/* harmony export */   \"__rest\": () => (/* binding */ __rest),\n/* harmony export */   \"__decorate\": () => (/* binding */ __decorate),\n/* harmony export */   \"__param\": () => (/* binding */ __param),\n/* harmony export */   \"__metadata\": () => (/* binding */ __metadata),\n/* harmony export */   \"__awaiter\": () => (/* binding */ __awaiter),\n/* harmony export */   \"__generator\": () => (/* binding */ __generator),\n/* harmony export */   \"__createBinding\": () => (/* binding */ __createBinding),\n/* harmony export */   \"__exportStar\": () => (/* binding */ __exportStar),\n/* harmony export */   \"__values\": () => (/* binding */ __values),\n/* harmony export */   \"__read\": () => (/* binding */ __read),\n/* harmony export */   \"__spread\": () => (/* binding */ __spread),\n/* harmony export */   \"__spreadArrays\": () => (/* binding */ __spreadArrays),\n/* harmony export */   \"__await\": () => (/* binding */ __await),\n/* harmony export */   \"__asyncGenerator\": () => (/* binding */ __asyncGenerator),\n/* harmony export */   \"__asyncDelegator\": () => (/* binding */ __asyncDelegator),\n/* harmony export */   \"__asyncValues\": () => (/* binding */ __asyncValues),\n/* harmony export */   \"__makeTemplateObject\": () => (/* binding */ __makeTemplateObject),\n/* harmony export */   \"__importStar\": () => (/* binding */ __importStar),\n/* harmony export */   \"__importDefault\": () => (/* binding */ __importDefault),\n/* harmony export */   \"__classPrivateFieldGet\": () => (/* binding */ __classPrivateFieldGet),\n/* harmony export */   \"__classPrivateFieldSet\": () => (/* binding */ __classPrivateFieldSet)\n/* harmony export */ });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nvar __createBinding = Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n});\r\n\r\nfunction __exportStar(m, o) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);\r\n}\r\n\r\nfunction __values(o) {\r\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\r\n    if (m) return m.call(o);\r\n    if (o && typeof o.length === \"number\") return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __spreadArrays() {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nvar __setModuleDefault = Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\r\nfunction __classPrivateFieldGet(receiver, privateMap) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to get private field on non-instance\");\r\n    }\r\n    return privateMap.get(receiver);\r\n}\r\n\r\nfunction __classPrivateFieldSet(receiver, privateMap, value) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to set private field on non-instance\");\r\n    }\r\n    privateMap.set(receiver, value);\r\n    return value;\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "esri/WebScene":
/*!********************************!*\
  !*** external "esri/WebScene" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_WebScene__;

/***/ }),

/***/ "esri/core/Collection":
/*!***************************************!*\
  !*** external "esri/core/Collection" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_core_Collection__;

/***/ }),

/***/ "esri/core/promiseUtils":
/*!*****************************************!*\
  !*** external "esri/core/promiseUtils" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_core_promiseUtils__;

/***/ }),

/***/ "esri/geometry":
/*!********************************!*\
  !*** external "esri/geometry" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry__;

/***/ }),

/***/ "esri/renderers":
/*!*********************************!*\
  !*** external "esri/renderers" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_renderers__;

/***/ }),

/***/ "esri/symbols":
/*!*******************************!*\
  !*** external "esri/symbols" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_symbols__;

/***/ }),

/***/ "esri/views/SceneView":
/*!***************************************!*\
  !*** external "esri/views/SceneView" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_views_SceneView__;

/***/ }),

/***/ "esri/widgets/ElevationProfile":
/*!************************************************!*\
  !*** external "esri/widgets/ElevationProfile" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_ElevationProfile__;

/***/ }),

/***/ "esri/widgets/ElevationProfile/ElevationProfileLineGround":
/*!***************************************************************************!*\
  !*** external "esri/widgets/ElevationProfile/ElevationProfileLineGround" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_ElevationProfile_ElevationProfileLineGround__;

/***/ }),

/***/ "esri/widgets/ElevationProfile/ElevationProfileLineInput":
/*!**************************************************************************!*\
  !*** external "esri/widgets/ElevationProfile/ElevationProfileLineInput" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_ElevationProfile_ElevationProfileLineInput__;

/***/ }),

/***/ "esri/widgets/Slice":
/*!*************************************!*\
  !*** external "esri/widgets/Slice" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_Slice__;

/***/ }),

/***/ "esri/widgets/Slice/SlicePlane":
/*!************************************************!*\
  !*** external "esri/widgets/Slice/SlicePlane" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_Slice_SlicePlane__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index/style.css");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index/main.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;