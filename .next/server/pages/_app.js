module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_storefront_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-storefront/AppBar */ "react-storefront/AppBar");
/* harmony import */ var react_storefront_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_storefront_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_storefront_CartButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-storefront/CartButton */ "react-storefront/CartButton");
/* harmony import */ var react_storefront_CartButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_storefront_CartButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _search_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/Search */ "./components/search/Search.js");
/* harmony import */ var _components_assets_react_storefront_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/assets/react-storefront-logo.svg */ "./components/assets/react-storefront-logo.svg");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_storefront_menu_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-storefront/menu/Menu */ "react-storefront/menu/Menu");
/* harmony import */ var react_storefront_menu_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_storefront_menu_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_storefront_menu_MenuButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-storefront/menu/MenuButton */ "react-storefront/menu/MenuButton");
/* harmony import */ var react_storefront_menu_MenuButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_storefront_menu_MenuButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-storefront/link/Link */ "react-storefront/link/Link");
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-storefront/session/SessionContext */ "react-storefront/session/SessionContext");
/* harmony import */ var react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\sulur\\Desktop\\react-storefront\\ui\\react\\components\\Header.js";












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  title: {},
  logo: {
    position: 'absolute',
    left: 10,
    top: 0,
    [theme.breakpoints.down('xs')]: {
      left: '50%',
      top: 6,
      marginLeft: -60
    }
  },
  toolbar: {
    padding: 0,
    margin: 0
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      padding: 5
    }
  }
}));
function Header({
  menu
}) {
  const classes = useStyles();
  const {
    0: menuOpen,
    1: setMenuOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const handleMenuClose = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => setMenuOpen(false), []);
  const handleMenuButtonClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => setMenuOpen(menuOpen => !menuOpen), []);
  const {
    session
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(react_storefront_session_SessionContext__WEBPACK_IMPORTED_MODULE_11___default.a);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default.a, {
        maxWidth: "lg",
        className: classes.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_assets_react_storefront_logo_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
              style: {
                width: 120,
                height: 48
              },
              className: classes.logo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_search_Search__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_CartButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
          quantity: lodash_get__WEBPACK_IMPORTED_MODULE_12___default()(session, 'itemsInCart')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_menu_MenuButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
          open: menuOpen,
          onClick: handleMenuButtonClick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_menu_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
      anchor: "right",
      root: menu,
      open: menuOpen,
      onClose: handleMenuClose // renderItem={item => <div>{item.text} (custom)</div>}
      // renderItemContent={item => <div>{item.text} (custom content)</div>}
      // renderBack={item => <div>{item.text} back</div>}
      // renderHeader={item => <div>{item.text} header</div>}
      // renderFooter={item => <div>{item.text} footer</div>}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_storefront_nav_NavTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-storefront/nav/NavTab */ "react-storefront/nav/NavTab");
/* harmony import */ var react_storefront_nav_NavTab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_storefront_nav_NavTab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_storefront_nav_NavTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-storefront/nav/NavTabs */ "react-storefront/nav/NavTabs");
/* harmony import */ var react_storefront_nav_NavTabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_storefront_nav_NavTabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-storefront/link/Link */ "react-storefront/link/Link");
/* harmony import */ var react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\sulur\\Desktop\\react-storefront\\ui\\react\\components\\NavBar.js";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  container: {
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  link: {
    display: 'block',
    marginTop: theme.spacing(2),
    '&:first-child': {
      marginTop: 0
    }
  }
}));

function NavBar({
  tabs
}) {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
    square: true,
    elevation: 2,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
      maxWidth: "lg",
      className: classes.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_nav_NavTabs__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: tabs && tabs.map(tab => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_nav_NavTab__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: tab.href,
          as: tab.as,
          label: tab.text,
          prefetch: "visible",
          children: tab.items && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              padding: 20
            },
            children: tab.items.map(subcategory => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_link_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: subcategory.href,
              as: subcategory.as,
              className: classes.link,
              children: subcategory.text
            }, subcategory.as, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 23
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 19
          }, this)
        }, tab.as, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

NavBar.defaultProps = {
  tabs: []
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(NavBar));

/***/ }),

/***/ "./components/assets/react-storefront-logo.svg":
/*!*****************************************************!*\
  !*** ./components/assets/react-storefront-logo.svg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgReactStorefrontLogo = function SvgReactStorefrontLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "95 0 673.4 238.9"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M254.3 108.5l-4.9 28.1H223L237.2 56h38.1c11.6 0 19.8 1.4 24.8 4.1 5 2.8 7.4 7.2 7.4 13.2 0 1.6-.2 3.5-.6 5.6-.9 4.9-2.8 9-5.7 12.5-2.9 3.5-6.7 5.9-11.4 7.2 3.9 1.5 6.6 3.1 8.3 4.7 1.6 1.6 2.5 4.5 2.5 8.6 0 2.2-.3 4.9-.9 8.1-.2 1-.3 2-.4 2.8-.8 4.6-1.2 7.5-1.2 8.6 0 1.8.7 2.7 2 2.7l-.4 2.5h-26.8v-.8c-.1-.6-.1-1.1-.1-1.5 0-3 .4-6.9 1.2-11.9.5-2.6.8-4.7.8-6.3 0-2.8-.9-4.8-2.7-6-1.8-1.2-5-1.7-9.7-1.7h-8.1zm3.1-17.7h10.4c4.3 0 7.5-.6 9.8-1.8 2.3-1.2 3.6-3.1 4.1-5.8 0-.2 0-.5.1-.9s.1-.7.1-.8c0-2.2-.8-3.9-2.5-5s-4-1.7-6.9-1.7h-12.3l-2.8 16zM311.7 136.6L326 56h65.7l-3.4 18.8H349l-2 11.5h33.2l-3.2 18.8h-33.2l-2.2 12.6h40.9l-3.4 18.8h-67.4zM385.3 136.6L428.4 56h26.9l14.7 80.6h-26.3l-1.2-10.6h-26.3l-4.9 10.6h-26zm52-56.3L424 109.2h16.7l-3.4-28.9zM538.1 86.8V85.1c0-3.7-1-6.5-3.1-8.5s-5.1-3-9-3c-4.7 0-8.7 2-12 6-3.3 4-5.7 9.8-7 17.5-.5 3.2-.8 6-.8 8.4 0 4.2 1 7.5 2.9 9.9 1.9 2.4 5.3 3.6 10 3.6 4 0 7.4-1.2 10-3.7 2.6-2.5 4.6-5.8 5.9-10h25.4c-3 10.4-8.5 18.5-16.4 24.5-7.9 5.9-17.3 8.9-27.9 8.9-11.5 0-20.4-2.9-26.7-8.7-6.3-5.8-9.5-13.8-9.5-24 0-3.1.3-6.4.9-9.9 1.1-6.4 3.2-12.2 6.1-17.5 2.9-5.2 6.6-9.7 10.9-13.4 4.3-3.7 9.1-6.6 14.3-8.5 5.2-1.9 10.6-2.9 16.2-2.9 11.5 0 20.2 2.6 26.1 7.7 5.9 5.1 8.8 12.4 8.8 21.8 0 .3 0 .9-.1 1.7v1.8h-25zM575.9 56h73.9l-3.7 21.2h-23.7l-10.5 59.4h-26.4L596 77.2h-23.7l3.6-21.2z"
  })), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M244.6 167.6c0-1.2-.4-2-1.3-2.6-.8-.5-1.8-.7-3.1-.7-2.6 0-4.1.7-4.3 2.2v.2l-.1.2c0 .9.5 1.5 1.6 2s2.8 1 5.1 1.6c2 .5 3.6 1 4.8 1.4 1.2.4 2.5 1 3.7 1.7 1.2.7 2.2 1.6 2.9 2.8.7 1.1 1.1 2.5 1.1 4.1 0 .6-.1 1.3-.2 2-.7 4.3-2.9 7.5-6.5 9.7-3.6 2.2-8.1 3.3-13.4 3.3-2.3 0-4.3-.3-6.1-.9-1.8-.6-3.4-1.4-4.6-2.4-1.3-1-2.2-2.2-2.9-3.5-.7-1.3-1-2.8-1-4.4 0-.5 0-.9.1-1.5h11.9c0 1.3.5 2.3 1.5 3 .9.6 2 .9 3.4.9 1.6 0 2.9-.2 3.9-.7 1-.5 1.6-1.2 1.7-2 0-.1 0-.1.1-.2v-.2c0-.9-.5-1.5-1.6-2s-2.7-1-5-1.6c-2-.5-3.6-.9-4.8-1.3-1.3-.4-2.5-1-3.7-1.7-1.2-.7-2.2-1.7-2.9-2.8-.7-1.2-1.1-2.6-1.1-4.3 0-.7.1-1.4.2-2.2.7-3.9 2.7-6.9 6.1-9 3.4-2.1 7.5-3.1 12.4-3.1 2.5 0 4.6.3 6.4.9 1.8.6 3.3 1.4 4.4 2.5 1.1 1.1 1.9 2.3 2.5 3.8.5 1.5.8 3.1.8 4.9h-12zM262.7 156.6h34.7l-1.7 9.9h-11.1l-4.9 27.9h-12.4l4.9-27.9H261l1.7-9.9zM328.5 156.9c2.1.8 3.9 2 5.3 3.4s2.4 3.1 3 5c.7 1.9 1 3.9 1 6.1 0 1.3-.1 2.6-.4 4-.6 3.1-1.6 5.9-3 8.5-1.4 2.5-3.2 4.6-5.3 6.4-2.1 1.7-4.4 3-7 3.9-2.6.9-5.3 1.3-8.1 1.3-5.2 0-9.3-1.3-12.3-4s-4.4-6.5-4.4-11.4c0-1.5.2-3.1.5-4.8.5-2.9 1.4-5.6 2.8-8 1.4-2.4 3.1-4.5 5.2-6.2 2.1-1.7 4.4-3.1 7-4 2.6-.9 5.3-1.4 8.2-1.4 2.8-.1 5.3.3 7.5 1.2zm-12.8 8.9c-1.1.6-2 1.4-2.7 2.4-.7 1-1.3 2.1-1.8 3.3-.5 1.2-.8 2.5-1.1 3.8-.2 1.3-.3 2.5-.3 3.6 0 2.2.4 3.9 1.3 5.3.9 1.3 2.4 2 4.5 2 2.6 0 4.6-1 6.1-2.9 1.5-2 2.6-4.6 3.2-7.9.2-1.1.3-2.1.3-3.1 0-2.2-.5-3.9-1.4-5.3-1-1.4-2.5-2-4.6-2-1.3-.1-2.5.2-3.5.8zM354 181.3l-2.3 13.2h-12.4l6.7-37.8h17.9c5.4 0 9.3.6 11.6 1.9 2.3 1.3 3.5 3.4 3.5 6.2 0 .8-.1 1.6-.3 2.6-.4 2.3-1.3 4.2-2.7 5.9-1.4 1.6-3.1 2.8-5.3 3.4 1.8.7 3.1 1.4 3.9 2.2.8.8 1.2 2.1 1.2 4 0 1.1-.1 2.3-.4 3.8-.1.5-.1.9-.2 1.3-.4 2.2-.6 3.5-.6 4 0 .8.3 1.3.9 1.3l-.2 1.2h-12.6v-.4c0-.3-.1-.5-.1-.7 0-1.4.2-3.3.6-5.6.2-1.2.4-2.2.4-2.9 0-1.3-.4-2.3-1.3-2.8-.8-.5-2.4-.8-4.6-.8H354zm1.5-8.3h4.9c2 0 3.5-.3 4.6-.8 1.1-.6 1.7-1.5 1.9-2.7 0-.1 0-.2.1-.4 0-.2.1-.3.1-.4 0-1.1-.4-1.8-1.2-2.4-.8-.5-1.9-.8-3.2-.8h-5.8l-1.4 7.5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M430.8 194.4l6.7-37.8h29.4l-1.6 8.8h-17l-1.2 6.9h13.6l-1.5 8.8h-13.6l-2.4 13.3h-12.4zM479.9 181.3l-2.3 13.2h-12.4l6.7-37.8h17.9c5.4 0 9.3.6 11.6 1.9 2.3 1.3 3.5 3.4 3.5 6.2 0 .8-.1 1.6-.3 2.6-.4 2.3-1.3 4.2-2.7 5.9-1.3 1.6-3.1 2.8-5.3 3.4 1.8.7 3.1 1.4 3.9 2.2.8.8 1.2 2.1 1.2 4 0 1.1-.1 2.3-.4 3.8-.1.5-.1.9-.2 1.3-.4 2.2-.6 3.5-.6 4 0 .8.3 1.3.9 1.3l-.2 1.2h-12.6v-.4c0-.3-.1-.5-.1-.7 0-1.4.2-3.3.6-5.6.2-1.2.4-2.2.4-2.9 0-1.3-.4-2.3-1.3-2.8-.8-.5-2.4-.8-4.6-.8h-3.7zm1.5-8.3h4.9c2 0 3.5-.3 4.6-.8 1.1-.6 1.7-1.5 1.9-2.7 0-.1 0-.2.1-.4 0-.2.1-.3.1-.4 0-1.1-.4-1.8-1.2-2.4-.8-.5-1.9-.8-3.2-.8h-5.8l-1.4 7.5zM539 156.9c2.1.8 3.9 2 5.3 3.4s2.4 3.1 3 5c.7 1.9 1 3.9 1 6.1 0 1.3-.1 2.6-.4 4-.6 3.1-1.6 5.9-3 8.5-1.4 2.5-3.2 4.6-5.3 6.4-2.1 1.7-4.4 3-7 3.9-2.6.9-5.3 1.3-8.1 1.3-5.2 0-9.3-1.3-12.3-4s-4.4-6.5-4.4-11.4c0-1.5.2-3.1.5-4.8.5-2.9 1.4-5.6 2.8-8s3.1-4.5 5.2-6.2c2.1-1.7 4.4-3.1 7-4 2.6-.9 5.3-1.4 8.2-1.4 2.9-.1 5.4.3 7.5 1.2zm-12.8 8.9c-1.1.6-2 1.4-2.7 2.4-.7 1-1.3 2.1-1.8 3.3-.5 1.2-.8 2.5-1.1 3.8-.2 1.3-.3 2.5-.3 3.6 0 2.2.4 3.9 1.3 5.3s2.4 2 4.5 2c2.6 0 4.6-1 6.1-2.9 1.5-2 2.6-4.6 3.2-7.9.2-1.1.3-2.1.3-3.1 0-2.2-.5-3.9-1.4-5.3-1-1.4-2.5-2-4.6-2-1.2-.1-2.4.2-3.5.8zM578.4 177.3l1.1-8.6 2.1-12h11.9l-6.7 37.8h-11.6l-9.9-20.6-1 8.6-2.1 12h-11.9l6.7-37.8h11.6l9.8 20.6zM598.7 156.6h34.7l-1.7 9.9h-11.1l-4.9 27.9h-12.4l4.9-27.9h-11.1l1.6-9.9z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#0C80C3",
    d: "M382.5 193.7h35.1l1.8-8.6h-35.1l-1.8 8.6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#5FB146",
    d: "M420.5 171h-33.1l-1.8 8.6h33.1l1.8-8.6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#F69120",
    d: "M388.5 165.5h35.1l1.8-8.6h-35.1l-1.8 8.6z"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgReactStorefrontLogo);

/***/ }),

/***/ "./components/reportError.js":
/*!***********************************!*\
  !*** ./components/reportError.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reportError; });
function reportError({
  error
}) {
  console.log('[reportError]', error);
}

/***/ }),

/***/ "./components/search/Search.js":
/*!*************************************!*\
  !*** ./components/search/Search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchDesktop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchDesktop */ "./components/search/SearchDesktop.js");
/* harmony import */ var _SearchMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchMobile */ "./components/search/SearchMobile.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_storefront_Spacer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-storefront/Spacer */ "react-storefront/Spacer");
/* harmony import */ var react_storefront_Spacer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_storefront_Spacer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/amp */ "next/amp");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\sulur\\Desktop\\react-storefront\\ui\\react\\components\\search\\Search.js";








function Search() {
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  const amp = Object(next_amp__WEBPACK_IMPORTED_MODULE_7__["useAmp"])();
  const isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.up('sm')) && !amp;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [!isDesktop && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchMobile__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 22
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_Spacer__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), isDesktop && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchDesktop__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/search/SearchDesktop.js":
/*!********************************************!*\
  !*** ./components/search/SearchDesktop.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-storefront/search/SearchForm */ "react-storefront/search/SearchForm");
/* harmony import */ var react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_storefront_search_SearchField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-storefront/search/SearchField */ "react-storefront/search/SearchField");
/* harmony import */ var react_storefront_search_SearchField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_storefront_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-storefront/search/SearchSuggestions */ "react-storefront/search/SearchSuggestions");
/* harmony import */ var react_storefront_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-storefront/search/SearchProvider */ "react-storefront/search/SearchProvider");
/* harmony import */ var react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_storefront_search_SearchPopover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-storefront/search/SearchPopover */ "react-storefront/search/SearchPopover");
/* harmony import */ var react_storefront_search_SearchPopover__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchPopover__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\sulur\\Desktop\\react-storefront\\ui\\react\\components\\search\\SearchDesktop.js";







function SearchDesktop() {
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const activeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: popoverOpen,
    1: setPopoverOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!activeRef.current) {
      activeRef.current = true;
    }
  }, [popoverOpen]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchField__WEBPACK_IMPORTED_MODULE_3___default.a, {
      ref: inputRef,
      onChange: value => setQuery(value),
      value: query,
      onFocus: () => setPopoverOpen(true),
      submitButtonVariant: "none",
      showClearButton: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_5___default.a, {
      query: query,
      active: activeRef.current,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchPopover__WEBPACK_IMPORTED_MODULE_6___default.a, {
        open: popoverOpen,
        setQuery: setQuery,
        anchor: inputRef,
        onClose: () => setPopoverOpen(false),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(SearchDesktop));

/***/ }),

/***/ "./components/search/SearchMobile.js":
/*!*******************************************!*\
  !*** ./components/search/SearchMobile.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_storefront_search_SearchHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-storefront/search/SearchHeader */ "react-storefront/search/SearchHeader");
/* harmony import */ var react_storefront_search_SearchHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-storefront/search/SearchForm */ "react-storefront/search/SearchForm");
/* harmony import */ var react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_storefront_search_SearchField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-storefront/search/SearchField */ "react-storefront/search/SearchField");
/* harmony import */ var react_storefront_search_SearchField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_storefront_search_SearchDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-storefront/search/SearchDrawer */ "react-storefront/search/SearchDrawer");
/* harmony import */ var react_storefront_search_SearchDrawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchDrawer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_storefront_search_SearchButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-storefront/search/SearchButton */ "react-storefront/search/SearchButton");
/* harmony import */ var react_storefront_search_SearchButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_storefront_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-storefront/search/SearchSuggestions */ "react-storefront/search/SearchSuggestions");
/* harmony import */ var react_storefront_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-storefront/search/SearchProvider */ "react-storefront/search/SearchProvider");
/* harmony import */ var react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\sulur\\Desktop\\react-storefront\\ui\\react\\components\\search\\SearchMobile.js";









function SearchMobile() {
  const {
    0: drawerOpen,
    1: setDrawerOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const closeDrawer = () => setDrawerOpen(false);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
      onClick: toggleDrawer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchDrawer__WEBPACK_IMPORTED_MODULE_5___default.a, {
      open: drawerOpen,
      onClose: closeDrawer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchForm__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchHeader__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchField__WEBPACK_IMPORTED_MODULE_4___default.a, {
            onChange: value => setQuery(value),
            value: query
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchProvider__WEBPACK_IMPORTED_MODULE_8___default.a, {
          query: query,
          active: drawerOpen,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_search_SearchSuggestions__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(SearchMobile));

/***/ }),

/***/ "./components/theme.js":
/*!*****************************!*\
  !*** ./components/theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_storefront_theme_createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-storefront/theme/createTheme */ "react-storefront/theme/createTheme");
/* harmony import */ var react_storefront_theme_createTheme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_storefront_theme_createTheme__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);

 // Create a theme instance.

const theme = react_storefront_theme_createTheme__WEBPACK_IMPORTED_MODULE_0___default()({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"].A400
    },
    background: {
      default: '#fff'
    }
  },
  overrides: {}
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/theme */ "./components/theme.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_storefront_PWA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-storefront/PWA */ "react-storefront/PWA");
/* harmony import */ var react_storefront_PWA__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_storefront_PWA__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_reportError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/reportError */ "./components/reportError.js");
/* harmony import */ var react_storefront_hooks_useJssStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-storefront/hooks/useJssStyles */ "react-storefront/hooks/useJssStyles");
/* harmony import */ var react_storefront_hooks_useJssStyles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_storefront_hooks_useJssStyles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_storefront_session_SessionProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-storefront/session/SessionProvider */ "react-storefront/session/SessionProvider");
/* harmony import */ var react_storefront_session_SessionProvider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_storefront_session_SessionProvider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_storefront_hooks_useAppStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-storefront/hooks/useAppStore */ "react-storefront/hooks/useAppStore");
/* harmony import */ var react_storefront_hooks_useAppStore__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_storefront_hooks_useAppStore__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\sulur\\Desktop\\react-storefront\\ui\\react\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const styles = theme => ({
  main: {
    paddingTop: 3
  }
});

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(styles);
function MyApp({
  Component,
  pageProps
}) {
  react_storefront_hooks_useJssStyles__WEBPACK_IMPORTED_MODULE_10___default()();
  const classes = useStyles();
  const [appData] = react_storefront_hooks_useAppStore__WEBPACK_IMPORTED_MODULE_12___default()(pageProps || {});
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_PWA__WEBPACK_IMPORTED_MODULE_7___default.a, {
    errorReporter: _components_reportError__WEBPACK_IMPORTED_MODULE_9__["default"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_storefront_session_SessionProvider__WEBPACK_IMPORTED_MODULE_11___default.a, {
      url: "/api/session",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["MuiThemeProvider"], {
        theme: _components_theme__WEBPACK_IMPORTED_MODULE_3__["default"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
          menu: appData && appData.menu
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
          tabs: appData && appData.tabs
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
          className: classes.main,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "lodash/get":
/*!*****************************!*\
  !*** external "lodash/get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),

/***/ "next/amp":
/*!***************************!*\
  !*** external "next/amp" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/amp");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-storefront/AppBar":
/*!******************************************!*\
  !*** external "react-storefront/AppBar" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/AppBar");

/***/ }),

/***/ "react-storefront/CartButton":
/*!**********************************************!*\
  !*** external "react-storefront/CartButton" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/CartButton");

/***/ }),

/***/ "react-storefront/PWA":
/*!***************************************!*\
  !*** external "react-storefront/PWA" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/PWA");

/***/ }),

/***/ "react-storefront/Spacer":
/*!******************************************!*\
  !*** external "react-storefront/Spacer" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/Spacer");

/***/ }),

/***/ "react-storefront/hooks/useAppStore":
/*!*****************************************************!*\
  !*** external "react-storefront/hooks/useAppStore" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/hooks/useAppStore");

/***/ }),

/***/ "react-storefront/hooks/useJssStyles":
/*!******************************************************!*\
  !*** external "react-storefront/hooks/useJssStyles" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/hooks/useJssStyles");

/***/ }),

/***/ "react-storefront/link/Link":
/*!*********************************************!*\
  !*** external "react-storefront/link/Link" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/link/Link");

/***/ }),

/***/ "react-storefront/menu/Menu":
/*!*********************************************!*\
  !*** external "react-storefront/menu/Menu" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/menu/Menu");

/***/ }),

/***/ "react-storefront/menu/MenuButton":
/*!***************************************************!*\
  !*** external "react-storefront/menu/MenuButton" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/menu/MenuButton");

/***/ }),

/***/ "react-storefront/nav/NavTab":
/*!**********************************************!*\
  !*** external "react-storefront/nav/NavTab" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/nav/NavTab");

/***/ }),

/***/ "react-storefront/nav/NavTabs":
/*!***********************************************!*\
  !*** external "react-storefront/nav/NavTabs" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/nav/NavTabs");

/***/ }),

/***/ "react-storefront/search/SearchButton":
/*!*******************************************************!*\
  !*** external "react-storefront/search/SearchButton" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchButton");

/***/ }),

/***/ "react-storefront/search/SearchDrawer":
/*!*******************************************************!*\
  !*** external "react-storefront/search/SearchDrawer" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchDrawer");

/***/ }),

/***/ "react-storefront/search/SearchField":
/*!******************************************************!*\
  !*** external "react-storefront/search/SearchField" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchField");

/***/ }),

/***/ "react-storefront/search/SearchForm":
/*!*****************************************************!*\
  !*** external "react-storefront/search/SearchForm" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchForm");

/***/ }),

/***/ "react-storefront/search/SearchHeader":
/*!*******************************************************!*\
  !*** external "react-storefront/search/SearchHeader" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchHeader");

/***/ }),

/***/ "react-storefront/search/SearchPopover":
/*!********************************************************!*\
  !*** external "react-storefront/search/SearchPopover" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchPopover");

/***/ }),

/***/ "react-storefront/search/SearchProvider":
/*!*********************************************************!*\
  !*** external "react-storefront/search/SearchProvider" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchProvider");

/***/ }),

/***/ "react-storefront/search/SearchSuggestions":
/*!************************************************************!*\
  !*** external "react-storefront/search/SearchSuggestions" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/search/SearchSuggestions");

/***/ }),

/***/ "react-storefront/session/SessionContext":
/*!**********************************************************!*\
  !*** external "react-storefront/session/SessionContext" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/session/SessionContext");

/***/ }),

/***/ "react-storefront/session/SessionProvider":
/*!***********************************************************!*\
  !*** external "react-storefront/session/SessionProvider" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/session/SessionProvider");

/***/ }),

/***/ "react-storefront/theme/createTheme":
/*!*****************************************************!*\
  !*** external "react-storefront/theme/createTheme" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-storefront/theme/createTheme");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hc3NldHMvcmVhY3Qtc3RvcmVmcm9udC1sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JlcG9ydEVycm9yLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlYXJjaC9TZWFyY2hEZXNrdG9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VhcmNoL1NlYXJjaE1vYmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RoZW1lLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvZ2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9hbXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9DYXJ0QnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9QV0FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L1NwYWNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvaG9va3MvdXNlQXBwU3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L2hvb2tzL3VzZUpzc1N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvbGluay9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9tZW51L01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L21lbnUvTWVudUJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvbmF2L05hdlRhYlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvbmF2L05hdlRhYnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hCdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hEcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvc2VhcmNoL1NlYXJjaEZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hIZWFkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hQb3BvdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoUHJvdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hTdWdnZXN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvc2Vzc2lvbi9TZXNzaW9uQ29udGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0b3JlZnJvbnQvc2Vzc2lvbi9TZXNzaW9uUHJvdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdG9yZWZyb250L3RoZW1lL2NyZWF0ZVRoZW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidGl0bGUiLCJsb2dvIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiYnJlYWtwb2ludHMiLCJkb3duIiwibWFyZ2luTGVmdCIsInRvb2xiYXIiLCJwYWRkaW5nIiwibWFyZ2luIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJIZWFkZXIiLCJtZW51IiwiY2xhc3NlcyIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJ1c2VTdGF0ZSIsImhhbmRsZU1lbnVDbG9zZSIsInVzZUNhbGxiYWNrIiwiaGFuZGxlTWVudUJ1dHRvbkNsaWNrIiwic2Vzc2lvbiIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0IiwibGluayIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJOYXZCYXIiLCJ0YWJzIiwibWFwIiwidGFiIiwiaHJlZiIsImFzIiwidGV4dCIsIml0ZW1zIiwic3ViY2F0ZWdvcnkiLCJkZWZhdWx0UHJvcHMiLCJtZW1vIiwicmVwb3J0RXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJTZWFyY2giLCJ1c2VUaGVtZSIsImFtcCIsInVzZUFtcCIsImlzRGVza3RvcCIsInVzZU1lZGlhUXVlcnkiLCJ1cCIsIlNlYXJjaERlc2t0b3AiLCJpbnB1dFJlZiIsInVzZVJlZiIsImFjdGl2ZVJlZiIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJwb3BvdmVyT3BlbiIsInNldFBvcG92ZXJPcGVuIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInZhbHVlIiwiU2VhcmNoTW9iaWxlIiwiZHJhd2VyT3BlbiIsInNldERyYXdlck9wZW4iLCJ0b2dnbGVEcmF3ZXIiLCJjbG9zZURyYXdlciIsImNyZWF0ZVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwicmVkIiwiQTQwMCIsImJhY2tncm91bmQiLCJkZWZhdWx0Iiwib3ZlcnJpZGVzIiwic3R5bGVzIiwicGFkZGluZ1RvcCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlSnNzU3R5bGVzIiwiYXBwRGF0YSIsInVzZUFwcFN0b3JlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCBBcHBCYXIgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9BcHBCYXInXG5pbXBvcnQgQ2FydEJ1dHRvbiBmcm9tICdyZWFjdC1zdG9yZWZyb250L0NhcnRCdXR0b24nXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoL1NlYXJjaCdcbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvYXNzZXRzL3JlYWN0LXN0b3JlZnJvbnQtbG9nby5zdmcnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBNZW51IGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvbWVudS9NZW51J1xuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9tZW51L01lbnVCdXR0b24nXG5pbXBvcnQgTGluayBmcm9tICdyZWFjdC1zdG9yZWZyb250L2xpbmsvTGluaydcbmltcG9ydCBTZXNzaW9uQ29udGV4dCBmcm9tICdyZWFjdC1zdG9yZWZyb250L3Nlc3Npb24vU2Vzc2lvbkNvbnRleHQnXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgdGl0bGU6IHt9LFxuICBsb2dvOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogMTAsXG4gICAgdG9wOiAwLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgbGVmdDogJzUwJScsXG4gICAgICB0b3A6IDYsXG4gICAgICBtYXJnaW5MZWZ0OiAtNjAsXG4gICAgfSxcbiAgfSxcbiAgdG9vbGJhcjoge1xuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIHBhZGRpbmc6IDUsXG4gICAgfSxcbiAgfSxcbn0pKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBtZW51IH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGhhbmRsZU1lbnVDbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldE1lbnVPcGVuKGZhbHNlKSwgW10pXG4gIGNvbnN0IGhhbmRsZU1lbnVCdXR0b25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHNldE1lbnVPcGVuKG1lbnVPcGVuID0+ICFtZW51T3BlbiksIFtdKVxuICBjb25zdCB7IHNlc3Npb24gfSA9IHVzZUNvbnRleHQoU2Vzc2lvbkNvbnRleHQpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEFwcEJhcj5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8TG9nbyBzdHlsZT17eyB3aWR0aDogMTIwLCBoZWlnaHQ6IDQ4IH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgICAgPENhcnRCdXR0b24gcXVhbnRpdHk9e2dldChzZXNzaW9uLCAnaXRlbXNJbkNhcnQnKX0gLz5cbiAgICAgICAgICA8TWVudUJ1dHRvbiBvcGVuPXttZW51T3Blbn0gb25DbGljaz17aGFuZGxlTWVudUJ1dHRvbkNsaWNrfSAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgICAgPE1lbnVcbiAgICAgICAgYW5jaG9yPVwicmlnaHRcIlxuICAgICAgICByb290PXttZW51fVxuICAgICAgICBvcGVuPXttZW51T3Blbn1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlTWVudUNsb3NlfVxuICAgICAgICAvLyByZW5kZXJJdGVtPXtpdGVtID0+IDxkaXY+e2l0ZW0udGV4dH0gKGN1c3RvbSk8L2Rpdj59XG4gICAgICAgIC8vIHJlbmRlckl0ZW1Db250ZW50PXtpdGVtID0+IDxkaXY+e2l0ZW0udGV4dH0gKGN1c3RvbSBjb250ZW50KTwvZGl2Pn1cbiAgICAgICAgLy8gcmVuZGVyQmFjaz17aXRlbSA9PiA8ZGl2PntpdGVtLnRleHR9IGJhY2s8L2Rpdj59XG4gICAgICAgIC8vIHJlbmRlckhlYWRlcj17aXRlbSA9PiA8ZGl2PntpdGVtLnRleHR9IGhlYWRlcjwvZGl2Pn1cbiAgICAgICAgLy8gcmVuZGVyRm9vdGVyPXtpdGVtID0+IDxkaXY+e2l0ZW0udGV4dH0gZm9vdGVyPC9kaXY+fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZUYWIgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9uYXYvTmF2VGFiJ1xuaW1wb3J0IE5hdlRhYnMgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9uYXYvTmF2VGFicydcbmltcG9ydCBMaW5rIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvbGluay9MaW5rJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgfSxcbiAgfSxcbiAgbGluazoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICcmOmZpcnN0LWNoaWxkJzoge1xuICAgICAgbWFyZ2luVG9wOiAwLFxuICAgIH0sXG4gIH0sXG59KSlcblxuZnVuY3Rpb24gTmF2QmFyKHsgdGFicyB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIHJldHVybiAoXG4gICAgPFBhcGVyIHNxdWFyZSBlbGV2YXRpb249ezJ9PlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxOYXZUYWJzPlxuICAgICAgICAgIHt0YWJzICYmXG4gICAgICAgICAgICB0YWJzLm1hcCh0YWIgPT4gKFxuICAgICAgICAgICAgICA8TmF2VGFiIGtleT17dGFiLmFzfSBocmVmPXt0YWIuaHJlZn0gYXM9e3RhYi5hc30gbGFiZWw9e3RhYi50ZXh0fSBwcmVmZXRjaD1cInZpc2libGVcIj5cbiAgICAgICAgICAgICAgICB7dGFiLml0ZW1zICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHt0YWIuaXRlbXMubWFwKHN1YmNhdGVnb3J5ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c3ViY2F0ZWdvcnkuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViY2F0ZWdvcnkuYXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17c3ViY2F0ZWdvcnkuYXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3ViY2F0ZWdvcnkudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9OYXZUYWI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9OYXZUYWJzPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9QYXBlcj5cbiAgKVxufVxuXG5OYXZCYXIuZGVmYXVsdFByb3BzID0ge1xuICB0YWJzOiBbXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhOYXZCYXIpXG4iLCJ2YXIgX3BhdGgsIF9nO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnZhciBTdmdSZWFjdFN0b3JlZnJvbnRMb2dvID0gZnVuY3Rpb24gU3ZnUmVhY3RTdG9yZWZyb250TG9nbyhwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIHZpZXdCb3g6IFwiOTUgMCA2NzMuNCAyMzguOVwiXG4gIH0sIHByb3BzKSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yNTQuMyAxMDguNWwtNC45IDI4LjFIMjIzTDIzNy4yIDU2aDM4LjFjMTEuNiAwIDE5LjggMS40IDI0LjggNC4xIDUgMi44IDcuNCA3LjIgNy40IDEzLjIgMCAxLjYtLjIgMy41LS42IDUuNi0uOSA0LjktMi44IDktNS43IDEyLjUtMi45IDMuNS02LjcgNS45LTExLjQgNy4yIDMuOSAxLjUgNi42IDMuMSA4LjMgNC43IDEuNiAxLjYgMi41IDQuNSAyLjUgOC42IDAgMi4yLS4zIDQuOS0uOSA4LjEtLjIgMS0uMyAyLS40IDIuOC0uOCA0LjYtMS4yIDcuNS0xLjIgOC42IDAgMS44LjcgMi43IDIgMi43bC0uNCAyLjVoLTI2Ljh2LS44Yy0uMS0uNi0uMS0xLjEtLjEtMS41IDAtMyAuNC02LjkgMS4yLTExLjkuNS0yLjYuOC00LjcuOC02LjMgMC0yLjgtLjktNC44LTIuNy02LTEuOC0xLjItNS0xLjctOS43LTEuN2gtOC4xem0zLjEtMTcuN2gxMC40YzQuMyAwIDcuNS0uNiA5LjgtMS44IDIuMy0xLjIgMy42LTMuMSA0LjEtNS44IDAtLjIgMC0uNS4xLS45cy4xLS43LjEtLjhjMC0yLjItLjgtMy45LTIuNS01cy00LTEuNy02LjktMS43aC0xMi4zbC0yLjggMTZ6TTMxMS43IDEzNi42TDMyNiA1Nmg2NS43bC0zLjQgMTguOEgzNDlsLTIgMTEuNWgzMy4ybC0zLjIgMTguOGgtMzMuMmwtMi4yIDEyLjZoNDAuOWwtMy40IDE4LjhoLTY3LjR6TTM4NS4zIDEzNi42TDQyOC40IDU2aDI2LjlsMTQuNyA4MC42aC0yNi4zbC0xLjItMTAuNmgtMjYuM2wtNC45IDEwLjZoLTI2em01Mi01Ni4zTDQyNCAxMDkuMmgxNi43bC0zLjQtMjguOXpNNTM4LjEgODYuOFY4NS4xYzAtMy43LTEtNi41LTMuMS04LjVzLTUuMS0zLTktM2MtNC43IDAtOC43IDItMTIgNi0zLjMgNC01LjcgOS44LTcgMTcuNS0uNSAzLjItLjggNi0uOCA4LjQgMCA0LjIgMSA3LjUgMi45IDkuOSAxLjkgMi40IDUuMyAzLjYgMTAgMy42IDQgMCA3LjQtMS4yIDEwLTMuNyAyLjYtMi41IDQuNi01LjggNS45LTEwaDI1LjRjLTMgMTAuNC04LjUgMTguNS0xNi40IDI0LjUtNy45IDUuOS0xNy4zIDguOS0yNy45IDguOS0xMS41IDAtMjAuNC0yLjktMjYuNy04LjctNi4zLTUuOC05LjUtMTMuOC05LjUtMjQgMC0zLjEuMy02LjQuOS05LjkgMS4xLTYuNCAzLjItMTIuMiA2LjEtMTcuNSAyLjktNS4yIDYuNi05LjcgMTAuOS0xMy40IDQuMy0zLjcgOS4xLTYuNiAxNC4zLTguNSA1LjItMS45IDEwLjYtMi45IDE2LjItMi45IDExLjUgMCAyMC4yIDIuNiAyNi4xIDcuNyA1LjkgNS4xIDguOCAxMi40IDguOCAyMS44IDAgLjMgMCAuOS0uMSAxLjd2MS44aC0yNXpNNTc1LjkgNTZoNzMuOWwtMy43IDIxLjJoLTIzLjdsLTEwLjUgNTkuNGgtMjYuNEw1OTYgNzcuMmgtMjMuN2wzLjYtMjEuMnpcIlxuICB9KSksIF9nIHx8IChfZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTI0NC42IDE2Ny42YzAtMS4yLS40LTItMS4zLTIuNi0uOC0uNS0xLjgtLjctMy4xLS43LTIuNiAwLTQuMS43LTQuMyAyLjJ2LjJsLS4xLjJjMCAuOS41IDEuNSAxLjYgMnMyLjggMSA1LjEgMS42YzIgLjUgMy42IDEgNC44IDEuNCAxLjIuNCAyLjUgMSAzLjcgMS43IDEuMi43IDIuMiAxLjYgMi45IDIuOC43IDEuMSAxLjEgMi41IDEuMSA0LjEgMCAuNi0uMSAxLjMtLjIgMi0uNyA0LjMtMi45IDcuNS02LjUgOS43LTMuNiAyLjItOC4xIDMuMy0xMy40IDMuMy0yLjMgMC00LjMtLjMtNi4xLS45LTEuOC0uNi0zLjQtMS40LTQuNi0yLjQtMS4zLTEtMi4yLTIuMi0yLjktMy41LS43LTEuMy0xLTIuOC0xLTQuNCAwLS41IDAtLjkuMS0xLjVoMTEuOWMwIDEuMy41IDIuMyAxLjUgMyAuOS42IDIgLjkgMy40LjkgMS42IDAgMi45LS4yIDMuOS0uNyAxLS41IDEuNi0xLjIgMS43LTIgMC0uMSAwLS4xLjEtLjJ2LS4yYzAtLjktLjUtMS41LTEuNi0ycy0yLjctMS01LTEuNmMtMi0uNS0zLjYtLjktNC44LTEuMy0xLjMtLjQtMi41LTEtMy43LTEuNy0xLjItLjctMi4yLTEuNy0yLjktMi44LS43LTEuMi0xLjEtMi42LTEuMS00LjMgMC0uNy4xLTEuNC4yLTIuMi43LTMuOSAyLjctNi45IDYuMS05IDMuNC0yLjEgNy41LTMuMSAxMi40LTMuMSAyLjUgMCA0LjYuMyA2LjQuOSAxLjguNiAzLjMgMS40IDQuNCAyLjUgMS4xIDEuMSAxLjkgMi4zIDIuNSAzLjguNSAxLjUuOCAzLjEuOCA0LjloLTEyek0yNjIuNyAxNTYuNmgzNC43bC0xLjcgOS45aC0xMS4xbC00LjkgMjcuOWgtMTIuNGw0LjktMjcuOUgyNjFsMS43LTkuOXpNMzI4LjUgMTU2LjljMi4xLjggMy45IDIgNS4zIDMuNHMyLjQgMy4xIDMgNWMuNyAxLjkgMSAzLjkgMSA2LjEgMCAxLjMtLjEgMi42LS40IDQtLjYgMy4xLTEuNiA1LjktMyA4LjUtMS40IDIuNS0zLjIgNC42LTUuMyA2LjQtMi4xIDEuNy00LjQgMy03IDMuOS0yLjYuOS01LjMgMS4zLTguMSAxLjMtNS4yIDAtOS4zLTEuMy0xMi4zLTRzLTQuNC02LjUtNC40LTExLjRjMC0xLjUuMi0zLjEuNS00LjguNS0yLjkgMS40LTUuNiAyLjgtOCAxLjQtMi40IDMuMS00LjUgNS4yLTYuMiAyLjEtMS43IDQuNC0zLjEgNy00IDIuNi0uOSA1LjMtMS40IDguMi0xLjQgMi44LS4xIDUuMy4zIDcuNSAxLjJ6bS0xMi44IDguOWMtMS4xLjYtMiAxLjQtMi43IDIuNC0uNyAxLTEuMyAyLjEtMS44IDMuMy0uNSAxLjItLjggMi41LTEuMSAzLjgtLjIgMS4zLS4zIDIuNS0uMyAzLjYgMCAyLjIuNCAzLjkgMS4zIDUuMy45IDEuMyAyLjQgMiA0LjUgMiAyLjYgMCA0LjYtMSA2LjEtMi45IDEuNS0yIDIuNi00LjYgMy4yLTcuOS4yLTEuMS4zLTIuMS4zLTMuMSAwLTIuMi0uNS0zLjktMS40LTUuMy0xLTEuNC0yLjUtMi00LjYtMi0xLjMtLjEtMi41LjItMy41Ljh6TTM1NCAxODEuM2wtMi4zIDEzLjJoLTEyLjRsNi43LTM3LjhoMTcuOWM1LjQgMCA5LjMuNiAxMS42IDEuOSAyLjMgMS4zIDMuNSAzLjQgMy41IDYuMiAwIC44LS4xIDEuNi0uMyAyLjYtLjQgMi4zLTEuMyA0LjItMi43IDUuOS0xLjQgMS42LTMuMSAyLjgtNS4zIDMuNCAxLjguNyAzLjEgMS40IDMuOSAyLjIuOC44IDEuMiAyLjEgMS4yIDQgMCAxLjEtLjEgMi4zLS40IDMuOC0uMS41LS4xLjktLjIgMS4zLS40IDIuMi0uNiAzLjUtLjYgNCAwIC44LjMgMS4zLjkgMS4zbC0uMiAxLjJoLTEyLjZ2LS40YzAtLjMtLjEtLjUtLjEtLjcgMC0xLjQuMi0zLjMuNi01LjYuMi0xLjIuNC0yLjIuNC0yLjkgMC0xLjMtLjQtMi4zLTEuMy0yLjgtLjgtLjUtMi40LS44LTQuNi0uOEgzNTR6bTEuNS04LjNoNC45YzIgMCAzLjUtLjMgNC42LS44IDEuMS0uNiAxLjctMS41IDEuOS0yLjcgMC0uMSAwLS4yLjEtLjQgMC0uMi4xLS4zLjEtLjQgMC0xLjEtLjQtMS44LTEuMi0yLjQtLjgtLjUtMS45LS44LTMuMi0uOGgtNS44bC0xLjQgNy41elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk00MzAuOCAxOTQuNGw2LjctMzcuOGgyOS40bC0xLjYgOC44aC0xN2wtMS4yIDYuOWgxMy42bC0xLjUgOC44aC0xMy42bC0yLjQgMTMuM2gtMTIuNHpNNDc5LjkgMTgxLjNsLTIuMyAxMy4yaC0xMi40bDYuNy0zNy44aDE3LjljNS40IDAgOS4zLjYgMTEuNiAxLjkgMi4zIDEuMyAzLjUgMy40IDMuNSA2LjIgMCAuOC0uMSAxLjYtLjMgMi42LS40IDIuMy0xLjMgNC4yLTIuNyA1LjktMS4zIDEuNi0zLjEgMi44LTUuMyAzLjQgMS44LjcgMy4xIDEuNCAzLjkgMi4yLjguOCAxLjIgMi4xIDEuMiA0IDAgMS4xLS4xIDIuMy0uNCAzLjgtLjEuNS0uMS45LS4yIDEuMy0uNCAyLjItLjYgMy41LS42IDQgMCAuOC4zIDEuMy45IDEuM2wtLjIgMS4yaC0xMi42di0uNGMwLS4zLS4xLS41LS4xLS43IDAtMS40LjItMy4zLjYtNS42LjItMS4yLjQtMi4yLjQtMi45IDAtMS4zLS40LTIuMy0xLjMtMi44LS44LS41LTIuNC0uOC00LjYtLjhoLTMuN3ptMS41LTguM2g0LjljMiAwIDMuNS0uMyA0LjYtLjggMS4xLS42IDEuNy0xLjUgMS45LTIuNyAwLS4xIDAtLjIuMS0uNCAwLS4yLjEtLjMuMS0uNCAwLTEuMS0uNC0xLjgtMS4yLTIuNC0uOC0uNS0xLjktLjgtMy4yLS44aC01LjhsLTEuNCA3LjV6TTUzOSAxNTYuOWMyLjEuOCAzLjkgMiA1LjMgMy40czIuNCAzLjEgMyA1Yy43IDEuOSAxIDMuOSAxIDYuMSAwIDEuMy0uMSAyLjYtLjQgNC0uNiAzLjEtMS42IDUuOS0zIDguNS0xLjQgMi41LTMuMiA0LjYtNS4zIDYuNC0yLjEgMS43LTQuNCAzLTcgMy45LTIuNi45LTUuMyAxLjMtOC4xIDEuMy01LjIgMC05LjMtMS4zLTEyLjMtNHMtNC40LTYuNS00LjQtMTEuNGMwLTEuNS4yLTMuMS41LTQuOC41LTIuOSAxLjQtNS42IDIuOC04czMuMS00LjUgNS4yLTYuMmMyLjEtMS43IDQuNC0zLjEgNy00IDIuNi0uOSA1LjMtMS40IDguMi0xLjQgMi45LS4xIDUuNC4zIDcuNSAxLjJ6bS0xMi44IDguOWMtMS4xLjYtMiAxLjQtMi43IDIuNC0uNyAxLTEuMyAyLjEtMS44IDMuMy0uNSAxLjItLjggMi41LTEuMSAzLjgtLjIgMS4zLS4zIDIuNS0uMyAzLjYgMCAyLjIuNCAzLjkgMS4zIDUuM3MyLjQgMiA0LjUgMmMyLjYgMCA0LjYtMSA2LjEtMi45IDEuNS0yIDIuNi00LjYgMy4yLTcuOS4yLTEuMS4zLTIuMS4zLTMuMSAwLTIuMi0uNS0zLjktMS40LTUuMy0xLTEuNC0yLjUtMi00LjYtMi0xLjItLjEtMi40LjItMy41Ljh6TTU3OC40IDE3Ny4zbDEuMS04LjYgMi4xLTEyaDExLjlsLTYuNyAzNy44aC0xMS42bC05LjktMjAuNi0xIDguNi0yLjEgMTJoLTExLjlsNi43LTM3LjhoMTEuNmw5LjggMjAuNnpNNTk4LjcgMTU2LjZoMzQuN2wtMS43IDkuOWgtMTEuMWwtNC45IDI3LjloLTEyLjRsNC45LTI3LjloLTExLjFsMS42LTkuOXpcIlxuICB9KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGw6IFwiIzBDODBDM1wiLFxuICAgIGQ6IFwiTTM4Mi41IDE5My43aDM1LjFsMS44LTguNmgtMzUuMWwtMS44IDguNnpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsOiBcIiM1RkIxNDZcIixcbiAgICBkOiBcIk00MjAuNSAxNzFoLTMzLjFsLTEuOCA4LjZoMzMuMWwxLjgtOC42elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGZpbGw6IFwiI0Y2OTEyMFwiLFxuICAgIGQ6IFwiTTM4OC41IDE2NS41aDM1LjFsMS44LTguNmgtMzUuMWwtMS44IDguNnpcIlxuICB9KSkpKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdmdSZWFjdFN0b3JlZnJvbnRMb2dvOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcG9ydEVycm9yKHsgZXJyb3IgfSkge1xuICBjb25zb2xlLmxvZygnW3JlcG9ydEVycm9yXScsIGVycm9yKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlYXJjaERlc2t0b3AgZnJvbSAnLi9TZWFyY2hEZXNrdG9wJ1xuaW1wb3J0IFNlYXJjaE1vYmlsZSBmcm9tICcuL1NlYXJjaE1vYmlsZSdcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IFNwYWNlciBmcm9tICdyZWFjdC1zdG9yZWZyb250L1NwYWNlcidcbmltcG9ydCB7IHVzZUFtcCB9IGZyb20gJ25leHQvYW1wJ1xuXG5mdW5jdGlvbiBTZWFyY2goKSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuICBjb25zdCBhbXAgPSB1c2VBbXAoKVxuICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpKSAmJiAhYW1wXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyFpc0Rlc2t0b3AgJiYgPFNlYXJjaE1vYmlsZSAvPn1cbiAgICAgIDxTcGFjZXIgLz5cbiAgICAgIHtpc0Rlc2t0b3AgJiYgPFNlYXJjaERlc2t0b3AgLz59XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoXG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICdyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hGb3JtJ1xuaW1wb3J0IFNlYXJjaEZpZWxkIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvc2VhcmNoL1NlYXJjaEZpZWxkJ1xuaW1wb3J0IFNlYXJjaFN1Z2dlc3Rpb25zIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvc2VhcmNoL1NlYXJjaFN1Z2dlc3Rpb25zJ1xuaW1wb3J0IFNlYXJjaFByb3ZpZGVyIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvc2VhcmNoL1NlYXJjaFByb3ZpZGVyJ1xuaW1wb3J0IFNlYXJjaFBvcG92ZXIgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoUG9wb3ZlcidcblxuZnVuY3Rpb24gU2VhcmNoRGVza3RvcCgpIHtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgYWN0aXZlUmVmID0gdXNlUmVmKGZhbHNlKVxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcG9wb3Zlck9wZW4sIHNldFBvcG92ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhY3RpdmVSZWYuY3VycmVudCkge1xuICAgICAgYWN0aXZlUmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgfVxuICB9LCBbcG9wb3Zlck9wZW5dKVxuXG4gIHJldHVybiAoXG4gICAgPFNlYXJjaEZvcm0+XG4gICAgICA8U2VhcmNoRmllbGRcbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldFF1ZXJ5KHZhbHVlKX1cbiAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRQb3BvdmVyT3Blbih0cnVlKX1cbiAgICAgICAgc3VibWl0QnV0dG9uVmFyaWFudD1cIm5vbmVcIlxuICAgICAgICBzaG93Q2xlYXJCdXR0b249e2ZhbHNlfVxuICAgICAgLz5cbiAgICAgIDxTZWFyY2hQcm92aWRlciBxdWVyeT17cXVlcnl9IGFjdGl2ZT17YWN0aXZlUmVmLmN1cnJlbnR9PlxuICAgICAgICA8U2VhcmNoUG9wb3ZlclxuICAgICAgICAgIG9wZW49e3BvcG92ZXJPcGVufVxuICAgICAgICAgIHNldFF1ZXJ5PXtzZXRRdWVyeX1cbiAgICAgICAgICBhbmNob3I9e2lucHV0UmVmfVxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFBvcG92ZXJPcGVuKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTZWFyY2hTdWdnZXN0aW9ucyAvPlxuICAgICAgICA8L1NlYXJjaFBvcG92ZXI+XG4gICAgICA8L1NlYXJjaFByb3ZpZGVyPlxuICAgIDwvU2VhcmNoRm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFNlYXJjaERlc2t0b3ApXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWFyY2hIZWFkZXIgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoSGVhZGVyJ1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoRm9ybSdcbmltcG9ydCBTZWFyY2hGaWVsZCBmcm9tICdyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hGaWVsZCdcbmltcG9ydCBTZWFyY2hEcmF3ZXIgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoRHJhd2VyJ1xuaW1wb3J0IFNlYXJjaEJ1dHRvbiBmcm9tICdyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hCdXR0b24nXG5pbXBvcnQgU2VhcmNoU3VnZ2VzdGlvbnMgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoU3VnZ2VzdGlvbnMnXG5pbXBvcnQgU2VhcmNoUHJvdmlkZXIgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoUHJvdmlkZXInXG5cbmZ1bmN0aW9uIFNlYXJjaE1vYmlsZSgpIHtcbiAgY29uc3QgW2RyYXdlck9wZW4sIHNldERyYXdlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHNldERyYXdlck9wZW4oIWRyYXdlck9wZW4pXG4gIGNvbnN0IGNsb3NlRHJhd2VyID0gKCkgPT4gc2V0RHJhd2VyT3BlbihmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VhcmNoQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0gLz5cbiAgICAgIDxTZWFyY2hEcmF3ZXIgb3Blbj17ZHJhd2VyT3Blbn0gb25DbG9zZT17Y2xvc2VEcmF3ZXJ9PlxuICAgICAgICA8U2VhcmNoRm9ybT5cbiAgICAgICAgICA8U2VhcmNoSGVhZGVyPlxuICAgICAgICAgICAgPFNlYXJjaEZpZWxkIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRRdWVyeSh2YWx1ZSl9IHZhbHVlPXtxdWVyeX0gLz5cbiAgICAgICAgICA8L1NlYXJjaEhlYWRlcj5cbiAgICAgICAgICA8U2VhcmNoUHJvdmlkZXIgcXVlcnk9e3F1ZXJ5fSBhY3RpdmU9e2RyYXdlck9wZW59PlxuICAgICAgICAgICAgPFNlYXJjaFN1Z2dlc3Rpb25zIC8+XG4gICAgICAgICAgPC9TZWFyY2hQcm92aWRlcj5cbiAgICAgICAgPC9TZWFyY2hGb3JtPlxuICAgICAgPC9TZWFyY2hEcmF3ZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTZWFyY2hNb2JpbGUpXG4iLCJpbXBvcnQgY3JlYXRlVGhlbWUgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC90aGVtZS9jcmVhdGVUaGVtZSdcbmltcG9ydCB7IHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycydcblxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46ICcjNTU2Y2Q2JyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogJyMxOTg1N2InLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIG1haW46IHJlZC5BNDAwLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZDoge1xuICAgICAgZGVmYXVsdDogJyNmZmYnLFxuICAgIH0sXG4gIH0sXG4gIG92ZXJyaWRlczoge30sXG59KVxuXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2NvbXBvbmVudHMvdGhlbWUnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IHsgQ3NzQmFzZWxpbmUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IG1ha2VTdHlsZXMsIE11aVRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgUFdBIGZyb20gJ3JlYWN0LXN0b3JlZnJvbnQvUFdBJ1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcidcbmltcG9ydCByZXBvcnRFcnJvciBmcm9tICcuLi9jb21wb25lbnRzL3JlcG9ydEVycm9yJ1xuaW1wb3J0IHVzZUpzc1N0eWxlcyBmcm9tICdyZWFjdC1zdG9yZWZyb250L2hvb2tzL3VzZUpzc1N0eWxlcydcbmltcG9ydCBTZXNzaW9uUHJvdmlkZXIgZnJvbSAncmVhY3Qtc3RvcmVmcm9udC9zZXNzaW9uL1Nlc3Npb25Qcm92aWRlcidcbmltcG9ydCB1c2VBcHBTdG9yZSBmcm9tICdyZWFjdC1zdG9yZWZyb250L2hvb2tzL3VzZUFwcFN0b3JlJ1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBtYWluOiB7XG4gICAgcGFkZGluZ1RvcDogMyxcbiAgfSxcbn0pXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgdXNlSnNzU3R5bGVzKClcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gIGNvbnN0IFthcHBEYXRhXSA9IHVzZUFwcFN0b3JlKHBhZ2VQcm9wcyB8fCB7fSlcblxuICByZXR1cm4gKFxuICAgIDxQV0EgZXJyb3JSZXBvcnRlcj17cmVwb3J0RXJyb3J9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIHsvKiA8bWV0YVxuICAgICAgICAgIGtleT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBzaHJpbmstdG8tZml0PW5vXCJcbiAgICAgICAgLz4gKi99XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U2Vzc2lvblByb3ZpZGVyIHVybD1cIi9hcGkvc2Vzc2lvblwiPlxuICAgICAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgIDxIZWFkZXIgbWVudT17YXBwRGF0YSAmJiBhcHBEYXRhLm1lbnV9IC8+XG4gICAgICAgICAgPE5hdkJhciB0YWJzPXthcHBEYXRhICYmIGFwcERhdGEudGFic30gLz5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbn0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgICA8L1BXQT5cbiAgKVxufVxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbih7IENvbXBvbmVudCwgY3R4IH0pIHtcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9XG5cbiAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgfVxuXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9nZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9hbXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvQ2FydEJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L1BXQVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L1NwYWNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L2hvb2tzL3VzZUFwcFN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvaG9va3MvdXNlSnNzU3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvbGluay9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvbWVudS9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvbWVudS9NZW51QnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvbmF2L05hdlRhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L25hdi9OYXZUYWJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0b3JlZnJvbnQvc2VhcmNoL1NlYXJjaEJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hEcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoRmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoRm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hIZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC9zZWFyY2gvU2VhcmNoUG9wb3ZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hQcm92aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L3NlYXJjaC9TZWFyY2hTdWdnZXN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L3Nlc3Npb24vU2Vzc2lvbkNvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RvcmVmcm9udC9zZXNzaW9uL1Nlc3Npb25Qcm92aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdG9yZWZyb250L3RoZW1lL2NyZWF0ZVRoZW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9