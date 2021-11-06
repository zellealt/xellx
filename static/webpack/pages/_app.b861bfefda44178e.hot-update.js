"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/useMediaQuery */ \"./node_modules/@mui/material/useMediaQuery/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _theme_Navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/Navigator */ \"./theme/Navigator.tsx\");\n/* harmony import */ var _theme_Paperbase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/Paperbase */ \"./theme/Paperbase.tsx\");\n/* harmony import */ var _theme_AppBarSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/AppBarSelector */ \"./theme/AppBarSelector.tsx\");\n/* harmony import */ var _client_lib_getUserDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client-lib/getUserDetails */ \"./client-lib/getUserDetails.ts\");\n/* harmony import */ var _contexts_GuildContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/GuildContext */ \"./contexts/GuildContext.tsx\");\n/* harmony import */ var _contexts_SessionContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/SessionContext */ \"./contexts/SessionContext.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s1();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(false), 2), mobileOpen = ref[0], setMobileOpen = ref[1];\n    var isSmUp = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_theme_Paperbase__WEBPACK_IMPORTED_MODULE_3__.exportedTheme.breakpoints.up(\"sm\"));\n    var handleDrawerToggle = function() {\n        setMobileOpen(!mobileOpen);\n    };\n    console.log(\"OOPF\");\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function() {\n        (0,_client_lib_getUserDetails__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().then(function(data) {\n            if ((data === null || data === void 0 ? void 0 : data.msg) === \"Unauthorized\") {\n                setSession(false);\n            } else {\n                var newAvatarData = data;\n                data.guilds.map(function(data, i) {\n                    if (newAvatarData[\"guilds\"][i][\"icon\"] !== null) {\n                        newAvatarData[\"guilds\"][i][\"icon\"] += \".png\";\n                    }\n                });\n                data.allGuilds.map(function(data, i) {\n                    if (newAvatarData[\"allGuilds\"][i][\"icon\"] !== null) {\n                        newAvatarData[\"allGuilds\"][i][\"icon\"] += \".png\";\n                    }\n                });\n                setSession(newAvatarData);\n            }\n        }).catch(function() {\n            setSession(false);\n        });\n    }, []);\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(undefined), 2), session = ref1[0], setSession = ref1[1];\n    var ref2 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(undefined), 2), guild = ref2[0], setGuild = ref2[1];\n    console.log(session);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contexts_SessionContext__WEBPACK_IMPORTED_MODULE_7__.SessionContextProvider, {\n        value: {\n            session: session,\n            setSession: setSession\n        },\n        __source: {\n            fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n            lineNumber: 58\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contexts_GuildContext__WEBPACK_IMPORTED_MODULE_6__.GuildContextProvider, {\n            value: {\n                guild: guild,\n                setGuild: setGuild\n            },\n            __source: {\n                fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n                lineNumber: 59\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__.ThemeProvider, {\n                theme: _theme_Paperbase__WEBPACK_IMPORTED_MODULE_3__.exportedTheme,\n                __source: {\n                    fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n                    lineNumber: 60\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        minHeight: \"100vh\"\n                    },\n                    __source: {\n                        fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n                        lineNumber: 61\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            __source: {\n                                fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n                                lineNumber: 62\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            component: \"nav\",\n                            sx: {\n                                width: {\n                                    sm: _theme_Paperbase__WEBPACK_IMPORTED_MODULE_3__.drawerWidth\n                                },\n                                flexShrink: {\n                                    sm: 0\n                                }\n                            },\n                            __source: {\n                                fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n                                lineNumber: 63\n                            },\n                            __self: this,\n                            children: [\n                                isSmUp ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Navigator__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    PaperProps: {\n                                        style: {\n                                            width: _theme_Paperbase__WEBPACK_IMPORTED_MODULE_3__.drawerWidth\n                                        }\n                                    },\n                                    variant: \"temporary\",\n                                    open: mobileOpen,\n                                    onClose: handleDrawerToggle,\n                                    __source: {\n                                        fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n                                        lineNumber: 68\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Navigator__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    PaperProps: {\n                                        style: {\n                                            width: _theme_Paperbase__WEBPACK_IMPORTED_MODULE_3__.drawerWidth\n                                        }\n                                    },\n                                    sx: {\n                                        display: {\n                                            sm: \"block\",\n                                            xs: \"none\"\n                                        }\n                                    },\n                                    __source: {\n                                        fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n                                        lineNumber: 75\n                                    },\n                                    __self: this\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            sx: {\n                                flex: 1,\n                                display: \"flex\",\n                                flexDirection: \"column\"\n                            },\n                            __source: {\n                                fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n                                lineNumber: 80\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_AppBarSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    onDrawerToggle: handleDrawerToggle,\n                                    __source: {\n                                        fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n                                        lineNumber: 81\n                                    },\n                                    __self: this\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    component: \"main\",\n                                    sx: {\n                                        flex: 1,\n                                        py: 6,\n                                        px: 4,\n                                        bgcolor: \"#eaeff1\"\n                                    },\n                                    __source: {\n                                        fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n                                        lineNumber: 82\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n                                    }, pageProps, {\n                                        __source: {\n                                            fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n                                            lineNumber: 86\n                                        },\n                                        __self: this\n                                    }))\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    component: \"footer\",\n                                    sx: {\n                                        p: 2,\n                                        bgcolor: \"#eaeff1\"\n                                    },\n                                    __source: {\n                                        fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n                                        lineNumber: 88\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_theme_Paperbase__WEBPACK_IMPORTED_MODULE_3__.Copyright, {\n                                        __source: {\n                                            fileName: \"/home/zelle/Xellx/NewDashboard/xellx-dashboard/pages/_app.tsx\",\n                                            lineNumber: 89\n                                        },\n                                        __self: this\n                                    })\n                                })\n                            ]\n                        })\n                    ]\n                })\n            })\n        })\n    }));\n}\n_s1(MyApp, \"j1Dp0DByPmwGZUaTnNzg/nNfmkc=\", false, function() {\n    return [\n        _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNzQyxFQUFFLEVBQUUsQ0FBQztnQ0FBQ2EsSUFBSSxFQUFFLENBQUM7Z0NBQUVaLE9BQU8sRUFBRSxDQUFNO2dDQUFFYSxhQUFhLEVBQUUsQ0FBUTs0QkFBQyxDQUFDOzs7Ozs7O3FHQUMzRC9DLDZEQUFNO29DQUFDZ0QsY0FBYyxFQUFFbkMsa0JBQWtCOzs7Ozs7O3FHQUN6Q2xCLDBEQUFHO29DQUNGeUMsU0FBUyxFQUFDLENBQU07b0NBQ2hCSCxFQUFFLEVBQUUsQ0FBQzt3Q0FBQ2EsSUFBSSxFQUFFLENBQUM7d0NBQUVHLEVBQUUsRUFBRSxDQUFDO3dDQUFFQyxFQUFFLEVBQUUsQ0FBQzt3Q0FBRUMsT0FBTyxFQUFFLENBQVM7b0NBQUMsQ0FBQzs7Ozs7O21IQUVoRDlDLFNBQVM7dUNBQUtDLFNBQVM7Ozs7Ozs7O3FHQUV6QlgsMERBQUc7b0NBQUN5QyxTQUFTLEVBQUMsQ0FBUTtvQ0FBQ0gsRUFBRSxFQUFFLENBQUM7d0NBQUNtQixDQUFDLEVBQUUsQ0FBQzt3Q0FBRUQsT0FBTyxFQUFFLENBQVM7b0NBQUMsQ0FBQzs7Ozs7O21IQUNyRHBELHVEQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUFRMUIsQ0FBQztJQS9FUUssS0FBSzs7UUFFR1gsbUVBQWE7OztLQUZyQlcsS0FBSztBQWlGZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvdXNlTWVkaWFRdWVyeVwiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvTGlua1wiO1xuaW1wb3J0IE5hdmlnYXRvciBmcm9tIFwiLi4vdGhlbWUvTmF2aWdhdG9yXCI7XG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi4vdGhlbWUvQ29udGVudFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vdGhlbWUvSGVhZGVyXCI7XG5pbXBvcnQgeyBkcmF3ZXJXaWR0aCwgZXhwb3J0ZWRUaGVtZSwgQ29weXJpZ2h0IH0gZnJvbSBcIi4uL3RoZW1lL1BhcGVyYmFzZVwiO1xuaW1wb3J0IEFwcEJhciBmcm9tIFwiLi4vdGhlbWUvQXBwQmFyU2VsZWN0b3JcIjtcbmltcG9ydCBnZXRVc2VyRGV0YWlscyBmcm9tIFwiLi4vY2xpZW50LWxpYi9nZXRVc2VyRGV0YWlsc1wiO1xuaW1wb3J0IHsgR3VpbGRDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvR3VpbGRDb250ZXh0XCI7XG5pbXBvcnQgeyBTZXNzaW9uQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL1Nlc3Npb25Db250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW21vYmlsZU9wZW4sIHNldE1vYmlsZU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBpc1NtVXAgPSB1c2VNZWRpYVF1ZXJ5KGV4cG9ydGVkVGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKSk7XG5cbiAgY29uc3QgaGFuZGxlRHJhd2VyVG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldE1vYmlsZU9wZW4oIW1vYmlsZU9wZW4pO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKFwiT09QRlwiKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRVc2VyRGV0YWlscygpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YT8ubXNnID09PSBcIlVuYXV0aG9yaXplZFwiKSB7XG4gICAgICAgICAgc2V0U2Vzc2lvbihmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmV3QXZhdGFyRGF0YSA9IGRhdGE7XG4gICAgICAgICAgZGF0YS5ndWlsZHMubWFwKChkYXRhOiBhbnksIGk6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKG5ld0F2YXRhckRhdGFbXCJndWlsZHNcIl1baV1bXCJpY29uXCJdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIG5ld0F2YXRhckRhdGFbXCJndWlsZHNcIl1baV1bXCJpY29uXCJdICs9IFwiLnBuZ1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRhdGEuYWxsR3VpbGRzLm1hcCgoZGF0YTogYW55LCBpOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChuZXdBdmF0YXJEYXRhW1wiYWxsR3VpbGRzXCJdW2ldW1wiaWNvblwiXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBuZXdBdmF0YXJEYXRhW1wiYWxsR3VpbGRzXCJdW2ldW1wiaWNvblwiXSArPSBcIi5wbmdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRTZXNzaW9uKG5ld0F2YXRhckRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgc2V0U2Vzc2lvbihmYWxzZSk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4odW5kZWZpbmVkKTtcbiAgY29uc3QgW2d1aWxkLCBzZXRHdWlsZF0gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KHVuZGVmaW5lZCk7XG5cbiAgY29uc29sZS5sb2coc2Vzc2lvbik7XG5cbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvbkNvbnRleHRQcm92aWRlciB2YWx1ZT17eyBzZXNzaW9uLCBzZXRTZXNzaW9uIH19PlxuICAgICAgPEd1aWxkQ29udGV4dFByb3ZpZGVyIHZhbHVlPXt7IGd1aWxkLCBzZXRHdWlsZCB9fT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e2V4cG9ydGVkVGhlbWV9PlxuICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1pbkhlaWdodDogXCIxMDB2aFwiIH19PlxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiB7IHNtOiBkcmF3ZXJXaWR0aCB9LCBmbGV4U2hyaW5rOiB7IHNtOiAwIH0gfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2lzU21VcCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRvclxuICAgICAgICAgICAgICAgICAgUGFwZXJQcm9wcz17eyBzdHlsZTogeyB3aWR0aDogZHJhd2VyV2lkdGggfSB9fVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXG4gICAgICAgICAgICAgICAgICBvcGVuPXttb2JpbGVPcGVufVxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlRHJhd2VyVG9nZ2xlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxOYXZpZ2F0b3JcbiAgICAgICAgICAgICAgICBQYXBlclByb3BzPXt7IHN0eWxlOiB7IHdpZHRoOiBkcmF3ZXJXaWR0aCB9IH19XG4gICAgICAgICAgICAgICAgc3g9e3sgZGlzcGxheTogeyBzbTogXCJibG9ja1wiLCB4czogXCJub25lXCIgfSB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXg6IDEsIGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxuICAgICAgICAgICAgICA8QXBwQmFyIG9uRHJhd2VyVG9nZ2xlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9IC8+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcbiAgICAgICAgICAgICAgICBzeD17eyBmbGV4OiAxLCBweTogNiwgcHg6IDQsIGJnY29sb3I6IFwiI2VhZWZmMVwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cImZvb3RlclwiIHN4PXt7IHA6IDIsIGJnY29sb3I6IFwiI2VhZWZmMVwiIH19PlxuICAgICAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC9HdWlsZENvbnRleHRQcm92aWRlcj5cbiAgICA8L1Nlc3Npb25Db250ZXh0UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGhlbWVQcm92aWRlciIsInVzZU1lZGlhUXVlcnkiLCJDc3NCYXNlbGluZSIsIkJveCIsIk5hdmlnYXRvciIsImRyYXdlcldpZHRoIiwiZXhwb3J0ZWRUaGVtZSIsIkNvcHlyaWdodCIsIkFwcEJhciIsImdldFVzZXJEZXRhaWxzIiwiR3VpbGRDb250ZXh0UHJvdmlkZXIiLCJTZXNzaW9uQ29udGV4dFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VTdGF0ZSIsIm1vYmlsZU9wZW4iLCJzZXRNb2JpbGVPcGVuIiwiaXNTbVVwIiwiYnJlYWtwb2ludHMiLCJ1cCIsImhhbmRsZURyYXdlclRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ0aGVuIiwiZGF0YSIsIm1zZyIsInNldFNlc3Npb24iLCJuZXdBdmF0YXJEYXRhIiwiZ3VpbGRzIiwibWFwIiwiaSIsImFsbEd1aWxkcyIsImNhdGNoIiwidW5kZWZpbmVkIiwic2Vzc2lvbiIsImd1aWxkIiwic2V0R3VpbGQiLCJ2YWx1ZSIsInRoZW1lIiwic3giLCJkaXNwbGF5IiwibWluSGVpZ2h0IiwiY29tcG9uZW50Iiwid2lkdGgiLCJzbSIsImZsZXhTaHJpbmsiLCJQYXBlclByb3BzIiwic3R5bGUiLCJ2YXJpYW50Iiwib3BlbiIsIm9uQ2xvc2UiLCJ4cyIsImZsZXgiLCJmbGV4RGlyZWN0aW9uIiwib25EcmF3ZXJUb2dnbGUiLCJweSIsInB4IiwiYmdjb2xvciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});