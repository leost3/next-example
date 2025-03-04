"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/status";
exports.ids = ["pages/api/status"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./database.js":
/*!*********************!*\
  !*** ./database.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"query\": () => (/* binding */ query)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Client  } = (pg__WEBPACK_IMPORTED_MODULE_0___default());\nconst query = async (obj)=>{\n    const client = new Client({\n        user: \"neondb_owner\",\n        password: \"npg_Hydp7TObx9Ek\",\n        host: \"ep-dark-glitter-a40n37vv.us-east-1.aws.neon.tech\",\n        port: 5432,\n        database: \"neondb\",\n        ssl: true\n    });\n    try {\n        await client.connect();\n        const result = await client.query(obj);\n        return result;\n    } catch (e) {\n        console.error(\"Database error:\", e);\n        throw e; // Re-throw to handle in the API route\n    } finally{\n        await client.end();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0I7QUFDcEIsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0QsMkNBQUVBO0FBRWQsTUFBTUUsUUFBUSxPQUFPQyxNQUFRO0lBQ2xDLE1BQU1DLFNBQVMsSUFBSUgsT0FBTztRQUN4QkksTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLEtBQUssSUFBSTtJQUNYO0lBRUEsSUFBSTtRQUNGLE1BQU1OLE9BQU9PLE9BQU87UUFDcEIsTUFBTUMsU0FBUyxNQUFNUixPQUFPRixLQUFLLENBQUNDO1FBQ2xDLE9BQU9TO0lBQ1QsRUFBRSxPQUFPQyxHQUFHO1FBQ1ZDLFFBQVFDLEtBQUssQ0FBQyxtQkFBbUJGO1FBQ2pDLE1BQU1BLEVBQUUsQ0FBQyxzQ0FBc0M7SUFDakQsU0FBVTtRQUNSLE1BQU1ULE9BQU9ZLEdBQUc7SUFDbEI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1leGFtcGxlLy4vZGF0YWJhc2UuanM/NDBkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGcgZnJvbSBcInBnXCI7XG5jb25zdCB7IENsaWVudCB9ID0gcGc7XG5cbmV4cG9ydCBjb25zdCBxdWVyeSA9IGFzeW5jIChvYmopID0+IHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7XG4gICAgdXNlcjogXCJuZW9uZGJfb3duZXJcIixcbiAgICBwYXNzd29yZDogXCJucGdfSHlkcDdUT2J4OUVrXCIsXG4gICAgaG9zdDogXCJlcC1kYXJrLWdsaXR0ZXItYTQwbjM3dnYudXMtZWFzdC0xLmF3cy5uZW9uLnRlY2hcIixcbiAgICBwb3J0OiA1NDMyLFxuICAgIGRhdGFiYXNlOiBcIm5lb25kYlwiLFxuICAgIHNzbDogdHJ1ZSxcbiAgfSk7XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShvYmopO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YWJhc2UgZXJyb3I6XCIsIGUpO1xuICAgIHRocm93IGU7IC8vIFJlLXRocm93IHRvIGhhbmRsZSBpbiB0aGUgQVBJIHJvdXRlXG4gIH0gZmluYWxseSB7XG4gICAgYXdhaXQgY2xpZW50LmVuZCgpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbInBnIiwiQ2xpZW50IiwicXVlcnkiLCJvYmoiLCJjbGllbnQiLCJ1c2VyIiwicGFzc3dvcmQiLCJob3N0IiwicG9ydCIsImRhdGFiYXNlIiwic3NsIiwiY29ubmVjdCIsInJlc3VsdCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./database.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/status.js":
/*!*********************************!*\
  !*** ./src/pages/api/status.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getStatus)\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database */ \"(api)/./database.js\");\n // Adjust path as needed\nasync function getStatus(req, res) {\n    try {\n        const versionResult = await (0,_database__WEBPACK_IMPORTED_MODULE_0__.query)(\"SHOW version;\");\n        console.log(\"PostgreSQL version:\", versionResult.rows[0]);\n        res.status(200).json({\n            status: 100,\n            dbVersion: versionResult.rows[0]\n        });\n    } catch (error) {\n        console.error(\"API error:\", error);\n        res.status(500).json({\n            status: 500,\n            error: \"Database connection failed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N0YXR1cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQyxDQUFDLHdCQUF3QjtBQUVwRCxlQUFlQyxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNoRCxJQUFJO1FBQ0YsTUFBTUMsZ0JBQWdCLE1BQU1KLGdEQUFLQSxDQUFDO1FBQ2xDSyxRQUFRQyxHQUFHLENBQUMsdUJBQXVCRixjQUFjRyxJQUFJLENBQUMsRUFBRTtRQUV4REosSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkQsUUFBUTtZQUNSRSxXQUFXTixjQUFjRyxJQUFJLENBQUMsRUFBRTtRQUNsQztJQUNGLEVBQUUsT0FBT0ksT0FBTztRQUNkTixRQUFRTSxLQUFLLENBQUMsY0FBY0E7UUFDNUJSLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJELFFBQVE7WUFDUkcsT0FBTztRQUNUO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1leGFtcGxlLy4vc3JjL3BhZ2VzL2FwaS9zdGF0dXMuanM/NzBjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhYmFzZVwiOyAvLyBBZGp1c3QgcGF0aCBhcyBuZWVkZWRcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdHVzKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdmVyc2lvblJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFwiU0hPVyB2ZXJzaW9uO1wiKTtcbiAgICBjb25zb2xlLmxvZyhcIlBvc3RncmVTUUwgdmVyc2lvbjpcIiwgdmVyc2lvblJlc3VsdC5yb3dzWzBdKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgIHN0YXR1czogMTAwLFxuICAgICAgZGJWZXJzaW9uOiB2ZXJzaW9uUmVzdWx0LnJvd3NbMF0sXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkFQSSBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgIHN0YXR1czogNTAwLFxuICAgICAgZXJyb3I6IFwiRGF0YWJhc2UgY29ubmVjdGlvbiBmYWlsZWRcIixcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInF1ZXJ5IiwiZ2V0U3RhdHVzIiwicmVxIiwicmVzIiwidmVyc2lvblJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJyb3dzIiwic3RhdHVzIiwianNvbiIsImRiVmVyc2lvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/status.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/status.js"));
module.exports = __webpack_exports__;

})();