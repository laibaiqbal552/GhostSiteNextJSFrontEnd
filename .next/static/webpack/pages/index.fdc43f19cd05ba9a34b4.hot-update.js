self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/about-us.js":
/*!********************************!*\
  !*** ./components/about-us.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_scrollContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/scrollContext */ "./context/scrollContext.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/components/about-us.js",
    _this = undefined,
    _s = $RefreshSig$();








var AboutUs = function AboutUs(_ref) {
  _s();

  var aboutData = _ref.aboutData;
  var about = aboutData.attributes.about;
  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_scrollContext__WEBPACK_IMPORTED_MODULE_2__.ScrollContext);
  console.log("aboutRef", about);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "#About",
    ref: ctx.aboutRef,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uk-tile-default  border-t-2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl pt-8 ",
        children: about.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: " pr-8 pt-8 pb-8 md:flex",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: " md:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: about.info
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: " md:visible md:w-1/2 md:pl-8 md:flex md:justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "uk-text-center  w-full flex justify-around md:w-2/3 p-8",
            children: [about.social_links.map(function (link, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);
            }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: link.url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsInstagram, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 11
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: link.url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineFacebook, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: link.url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_5__.TiSocialTwitterCircular, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 16
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: link.url,
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineYoutube, {
                size: 50
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 16
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 7
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(AboutUs, "/dMy7t63NXD4eYACoT93CePwGrg=");

_c = AboutUs;
/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

var _c;

$RefreshReg$(_c, "AboutUs");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC11cy5qcyJdLCJuYW1lcyI6WyJBYm91dFVzIiwiYWJvdXREYXRhIiwiYWJvdXQiLCJhdHRyaWJ1dGVzIiwiY3R4IiwidXNlQ29udGV4dCIsIlNjcm9sbENvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiYWJvdXRSZWYiLCJ0aXRsZSIsImluZm8iLCJzb2NpYWxfbGlua3MiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdDLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0FBQUE7O0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlO0FBQUEsTUFDeEJDLEtBRHdCLEdBQ2ZELFNBQVMsQ0FBQ0UsVUFESyxDQUN4QkQsS0FEd0I7QUFFL0IsTUFBTUUsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyxpRUFBRCxDQUF0QjtBQUdFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCTixLQUF4QjtBQUlILHNCQUNFO0FBQVMsTUFBRSxFQUFDLFFBQVo7QUFBcUIsT0FBRyxFQUFFRSxHQUFHLENBQUNLLFFBQTlCO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQSw4QkFDQTtBQUFJLGlCQUFTLEVBQUMsZ0JBQWQ7QUFBQSxrQkFDR1AsS0FBSyxDQUFDUTtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUlBO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsaUNBR0E7QUFBQSxzQkFDQVIsS0FBSyxDQUFDUztBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBUUU7QUFBSyxtQkFBUyxFQUFDLHdEQUFmO0FBQUEsaUNBRUE7QUFBSyxxQkFBUyxFQUFDLHlEQUFmO0FBQUEsdUJBQ0dULEtBQUssQ0FBQ1UsWUFBTixDQUFtQkMsR0FBbkIsQ0FDQyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDZixrQ0FDRSw2SUFERjtBQUtELGFBUEYsQ0FESCxlQWFJO0FBQUcsa0JBQUksRUFBRUQsSUFBSSxDQUFDRSxHQUFkO0FBQW1CLG9CQUFNLEVBQUMsUUFBMUI7QUFBbUMsaUJBQUcsRUFBQyxxQkFBdkM7QUFBQSxxQ0FDSSw4REFBQyx1REFBRDtBQUFhLG9CQUFJLEVBQUU7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkosZUFnQlE7QUFBRyxrQkFBSSxFQUFFRixJQUFJLENBQUNFLEdBQWQ7QUFBbUIsb0JBQU0sRUFBQyxRQUExQjtBQUFtQyxpQkFBRyxFQUFDLHFCQUF2QztBQUFBLHFDQUNBLDhEQUFDLDZEQUFEO0FBQW1CLG9CQUFJLEVBQUU7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEJSLGVBbUJTO0FBQUcsa0JBQUksRUFBRUYsSUFBSSxDQUFDRSxHQUFkO0FBQWtCLG9CQUFNLEVBQUMsUUFBekI7QUFBa0MsaUJBQUcsRUFBQyxxQkFBdEM7QUFBQSxxQ0FDRCw4REFBQyxtRUFBRDtBQUF5QixvQkFBSSxFQUFFO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5CVCxlQXNCUztBQUFHLGtCQUFJLEVBQUVGLElBQUksQ0FBQ0UsR0FBZDtBQUFtQixvQkFBTSxFQUFDLFFBQTFCO0FBQW1DLGlCQUFHLEVBQUMscUJBQXZDO0FBQUEscUNBQ0QsOERBQUMsNERBQUQ7QUFBa0Isb0JBQUksRUFBRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0QlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpREQsQ0ExREE7O0dBQU1oQixPOztLQUFBQSxPO0FBNERQLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZkYzQzZjE5Y2QwNWJhOWEzNGI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTY3JvbGxDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9zY3JvbGxDb250ZXh0J1xuaW1wb3J0IHtCc0luc3RhZ3JhbX0gIGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuaW1wb3J0IHtBaU91dGxpbmVGYWNlYm9va30gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQge1RpU29jaWFsVHdpdHRlckNpcmN1bGFyfSBmcm9tICdyZWFjdC1pY29ucy90aSdcbmltcG9ydCB7QWlPdXRsaW5lWW91dHViZX0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5cblxuIGNvbnN0IEFib3V0VXMgPSAoe2Fib3V0RGF0YX0pID0+IHtcbiAgIGNvbnN0IHthYm91dH0gPSBhYm91dERhdGEuYXR0cmlidXRlc1xuICAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTY3JvbGxDb250ZXh0KTtcbiAgXG5cbiAgICAgY29uc29sZS5sb2coXCJhYm91dFJlZlwiLCBhYm91dCk7XG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cIiNBYm91dFwiIHJlZj17Y3R4LmFib3V0UmVmfSA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ1ay10aWxlLWRlZmF1bHQgIGJvcmRlci10LTIgXCI+XG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHB0LTggXCI+XG4gICAgICB7YWJvdXQudGl0bGV9XG4gICAgPC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwci04IHB0LTggcGItOCBtZDpmbGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDp3LTEvMlwiPlxuXG4gICAgXG4gICAgICA8cD5cbiAgICAge2Fib3V0LmluZm99XG4gICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1kOnZpc2libGUgbWQ6dy0xLzIgbWQ6cGwtOCBtZDpmbGV4IG1kOmp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay10ZXh0LWNlbnRlciAgdy1mdWxsIGZsZXgganVzdGlmeS1hcm91bmQgbWQ6dy0yLzMgcC04XCI+XG4gICAgICAgIHthYm91dC5zb2NpYWxfbGlua3MubWFwKFxuICAgICAgICAgIChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICBcbiAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuXG4gICAgICAgICl9XG5cbiAgICAgICAgICA8YSBocmVmPXtsaW5rLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICA8QnNJbnN0YWdyYW0gc2l6ZT17NTB9Lz5cbiAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIDxBaU91dGxpbmVGYWNlYm9vayBzaXplPXs1MH0vPlxuICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgPGEgaHJlZj17bGluay51cmx9dGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICA8VGlTb2NpYWxUd2l0dGVyQ2lyY3VsYXIgc2l6ZT17NTB9Lz5cbiAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIDxBaU91dGxpbmVZb3V0dWJlIHNpemU9ezUwfS8+XG4gICAgICAgICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgXG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRVc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==