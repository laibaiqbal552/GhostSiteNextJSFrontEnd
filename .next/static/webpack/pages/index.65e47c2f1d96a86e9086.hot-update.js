self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/authContext */ "./context/authContext.js");
/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/articles */ "./components/articles.js");
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hero */ "./components/hero.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/seo */ "./components/seo.js");
/* harmony import */ var _components_about_us__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/about-us */ "./components/about-us.js");
/* harmony import */ var _components_contact_us__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/contact-us */ "./components/contact-us.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/modal */ "./components/modal.js");
/* harmony import */ var _components_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/portal */ "./components/portal.js");
/* harmony import */ var _components_investigations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/investigations */ "./components/investigations.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/troias/strapiecom/robWebSite/my-project/frontend/pages/index.js",
    _this = undefined,
    _s = $RefreshSig$();













var Home = function Home(_ref) {
  _s();

  var articles = _ref.articles,
      categories = _ref.categories,
      homepage = _ref.homepage,
      investigations = _ref.investigations,
      global = _ref.global;
  // console.log("globalData", global.attributes.footer);
  var footerData = global.attributes.footer;
  var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authContext__WEBPACK_IMPORTED_MODULE_2__.default);
  console.log("homepagedata", homepage); // console.log("homePageProps", homepage);
  // console.log("user", ctx.user);

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!ctx.user && localStorage.getItem("user")) {
      ctx.setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  var featuredArticles = articles.filter(function (article) {
    return article.featured === "featured";
  });
  var featuredInvestigations = investigations.filter(function (investigation) {
    return investigation.featured === "featured";
  });
  console.log("featuredInvestigations", featuredInvestigations);
  console.log("featuredArticles", featuredArticles);
  console.log("articles", articles);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showModal = _useState[0],
      setShowModal = _useState[1]; // console.log("showModal", showModal) 


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: " ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_6__.default, {
      seo: homepage.attributes.seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 12
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "pl-8 pr-8 ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "article-section pt-8  ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero__WEBPACK_IMPORTED_MODULE_4__.default, {
          herodata: homepage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_articles__WEBPACK_IMPORTED_MODULE_3__.default, {
          articles: featuredArticles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_investigations__WEBPACK_IMPORTED_MODULE_11__.default, {
          investigations: featuredInvestigations
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_about_us__WEBPACK_IMPORTED_MODULE_7__.default, {
          aboutData: homepage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contact_us__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 7
  }, _this);
};

_s(Home, "cUWmF5vssWZWgn/qW+OJMqaYsGQ=");

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFydGljbGVzIiwiY2F0ZWdvcmllcyIsImhvbWVwYWdlIiwiaW52ZXN0aWdhdGlvbnMiLCJnbG9iYWwiLCJmb290ZXJEYXRhIiwiYXR0cmlidXRlcyIsImZvb3RlciIsImN0eCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldFVzZXIiLCJKU09OIiwicGFyc2UiLCJmZWF0dXJlZEFydGljbGVzIiwiZmlsdGVyIiwiYXJ0aWNsZSIsImZlYXR1cmVkIiwiZmVhdHVyZWRJbnZlc3RpZ2F0aW9ucyIsImludmVzdGlnYXRpb24iLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInNlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBZ0U7QUFBQTs7QUFBQSxNQUE3REMsUUFBNkQsUUFBN0RBLFFBQTZEO0FBQUEsTUFBbkRDLFVBQW1ELFFBQW5EQSxVQUFtRDtBQUFBLE1BQXZDQyxRQUF1QyxRQUF2Q0EsUUFBdUM7QUFBQSxNQUE3QkMsY0FBNkIsUUFBN0JBLGNBQTZCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBRTNFO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0JDLE1BQXJDO0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDQyx5REFBRCxDQUF0QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCVixRQUE1QixFQUwyRSxDQU0zRTtBQUNBOztBQUVBVyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNMLEdBQUcsQ0FBQ00sSUFBTCxJQUFhQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBakIsRUFBK0M7QUFDN0NSLFNBQUcsQ0FBQ1MsT0FBSixDQUFZQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBWjtBQUVEO0FBRUYsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLE1BQU1JLGdCQUFnQixHQUFHcEIsUUFBUSxDQUFDcUIsTUFBVCxDQUFnQixVQUFBQyxPQUFPO0FBQUEsV0FBSUEsT0FBTyxDQUFDQyxRQUFSLEtBQXFCLFVBQXpCO0FBQUEsR0FBdkIsQ0FBekI7QUFDQSxNQUFNQyxzQkFBc0IsR0FBR3JCLGNBQWMsQ0FBQ2tCLE1BQWYsQ0FBc0IsVUFBQUksYUFBYTtBQUFBLFdBQUlBLGFBQWEsQ0FBQ0YsUUFBZCxLQUEyQixVQUEvQjtBQUFBLEdBQW5DLENBQS9CO0FBRUFaLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaLEVBQXNDWSxzQkFBdEM7QUFDQWIsU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NRLGdCQUFoQztBQUNBVCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQTBCWixRQUExQjs7QUF0QjJFLGtCQTBCekMwQiwrQ0FBUSxDQUFDLEtBQUQsQ0ExQmlDO0FBQUEsTUEwQnBFQyxTQTFCb0U7QUFBQSxNQTBCekRDLFlBMUJ5RCxpQkE0QjNFOzs7QUFFQSxzQkFHSTtBQUFLLGFBQVMsRUFBQyxHQUFmO0FBQUEsNEJBQ0ssOERBQUMsb0RBQUQ7QUFBSyxTQUFHLEVBQUUxQixRQUFRLENBQUNJLFVBQVQsQ0FBb0J1QjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREwsZUFFRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUEsZ0NBQ0ksOERBQUMscURBQUQ7QUFBTSxrQkFBUSxFQUFFM0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUdJLDhEQUFDLHlEQUFEO0FBQVUsa0JBQVEsRUFBRWtCO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSSw4REFBQyxnRUFBRDtBQUFnQix3QkFBYyxFQUFFSTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBS0ksOERBQUMseURBQUQ7QUFBUyxtQkFBUyxFQUFFdEI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQU1JLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhKO0FBcUJELENBbkREOztHQUFNSCxJOztLQUFBQSxJOztBQXdGTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NWU0N2MyZjFkOTZhODZlOTA4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9hdXRoQ29udGV4dFwiO1xuaW1wb3J0IEFydGljbGVzIGZyb20gXCIuLi9jb21wb25lbnRzL2FydGljbGVzXCJcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21wb25lbnRzL2hlcm9cIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tcG9uZW50cy9zZW9cIlxuaW1wb3J0IEFib3V0VXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWJvdXQtdXNcIlxuaW1wb3J0IENvbnRhY3RVcyBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWN0LXVzXCJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbFwiXG5pbXBvcnQgUG9ydGFsIGZyb20gXCIuLi9jb21wb25lbnRzL3BvcnRhbFwiXG5pbXBvcnQgSW52ZXN0aWdhdGlvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW52ZXN0aWdhdGlvbnNcIjtcblxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiXG5cblxuXG5cblxuXG5cbmNvbnN0IEhvbWUgPSAoeyBhcnRpY2xlcywgY2F0ZWdvcmllcywgaG9tZXBhZ2UsIGludmVzdGlnYXRpb25zLCBnbG9iYWwgfSkgPT4ge1xuXG4gIC8vIGNvbnNvbGUubG9nKFwiZ2xvYmFsRGF0YVwiLCBnbG9iYWwuYXR0cmlidXRlcy5mb290ZXIpO1xuICBjb25zdCBmb290ZXJEYXRhID0gZ2xvYmFsLmF0dHJpYnV0ZXMuZm9vdGVyO1xuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgY29uc29sZS5sb2coXCJob21lcGFnZWRhdGFcIiwgaG9tZXBhZ2UsKTtcbiAgLy8gY29uc29sZS5sb2coXCJob21lUGFnZVByb3BzXCIsIGhvbWVwYWdlKTtcbiAgLy8gY29uc29sZS5sb2coXCJ1c2VyXCIsIGN0eC51c2VyKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghY3R4LnVzZXIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB7XG4gICAgICBjdHguc2V0VXNlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkpO1xuICAgICBcbiAgICB9XG5cbiAgfSwgW10pXG5cbiAgY29uc3QgZmVhdHVyZWRBcnRpY2xlcyA9IGFydGljbGVzLmZpbHRlcihhcnRpY2xlID0+IGFydGljbGUuZmVhdHVyZWQgPT09IFwiZmVhdHVyZWRcIik7XG4gIGNvbnN0IGZlYXR1cmVkSW52ZXN0aWdhdGlvbnMgPSBpbnZlc3RpZ2F0aW9ucy5maWx0ZXIoaW52ZXN0aWdhdGlvbiA9PiBpbnZlc3RpZ2F0aW9uLmZlYXR1cmVkID09PSBcImZlYXR1cmVkXCIpO1xuXG4gIGNvbnNvbGUubG9nKFwiZmVhdHVyZWRJbnZlc3RpZ2F0aW9uc1wiLCBmZWF0dXJlZEludmVzdGlnYXRpb25zKTtcbiAgY29uc29sZS5sb2coXCJmZWF0dXJlZEFydGljbGVzXCIsIGZlYXR1cmVkQXJ0aWNsZXMpO1xuICBjb25zb2xlLmxvZyhcImFydGljbGVzXCIgICwgYXJ0aWNsZXMpO1xuXG5cblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIGNvbnNvbGUubG9nKFwic2hvd01vZGFsXCIsIHNob3dNb2RhbCkgXG5cbiAgcmV0dXJuIChcbiAgXG4gICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiPlxuICAgICAgICAgICA8U2VvIHNlbz17aG9tZXBhZ2UuYXR0cmlidXRlcy5zZW99IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtOCBwci04IFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1zZWN0aW9uIHB0LTggIFwiPlxuICAgICAgICAgICAgICA8SGVybyBoZXJvZGF0YT17aG9tZXBhZ2V9IC8+IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8QXJ0aWNsZXMgYXJ0aWNsZXM9e2ZlYXR1cmVkQXJ0aWNsZXN9IC8+XG4gICAgICAgICAgICAgIDxJbnZlc3RpZ2F0aW9ucyBpbnZlc3RpZ2F0aW9ucz17ZmVhdHVyZWRJbnZlc3RpZ2F0aW9uc30vPlxuICAgICAgICAgICAgICA8QWJvdXRVcyBhYm91dERhdGE9e2hvbWVwYWdlfS8+IFxuICAgICAgICAgICAgICA8Q29udGFjdFVzIC8+XG4gICAgICAgIFxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiBcbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcbiAgY29uc3QgW2FydGljbGVzUmVzLCBjYXRlZ29yaWVzUmVzLCBob21lcGFnZVJlcywgaW52ZXN0aWdhdGlvbnNSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoQVBJKFwiL2FydGljbGVzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICBcbiAgICBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuIFxuICAgIGZldGNoQVBJKFwiL2hvbWVwYWdlXCIsIHtcbiAgICAgIHBvcHVsYXRlOiB7XG4gICAgICAgIGhlcm86IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICAgIGFib3V0OiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgIFxuXG4gICAgICAgIHNlbzogeyBwb3B1bGF0ZTogXCIqXCIgfSxcblxuICAgICAgfSxcbiAgICAgIFxuICAgIH0pLFxuICAgIGZldGNoQVBJKFwiL2ludmVzdGlnYXRpb25zXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZXM6IGFydGljbGVzUmVzLmRhdGEsXG4gICAgICBpbnZlc3RpZ2F0aW9uczogaW52ZXN0aWdhdGlvbnNSZXMuZGF0YSxcbiAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNSZXMuZGF0YSxcbiAgICAgIGhvbWVwYWdlOiBob21lcGFnZVJlcy5kYXRhLFxuICAgICBcblxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9