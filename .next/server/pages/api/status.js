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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"query\": () => (/* binding */ query)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Pool  } = (pg__WEBPACK_IMPORTED_MODULE_0___default());\nconst pool = new Pool({\n    user: \"neondb_owner\",\n    password: \"npg_Hydp7TObx9Ek\",\n    host: \"ep-dark-glitter-a40n37vv-pooler.us-east-1.aws.neon.tech\",\n    port: 5432,\n    database: \"neondb\",\n    ssl: {\n        rejectUnauthorized: false\n    },\n    max: 10,\n    idleTimeoutMillis: 30000,\n    connectionTimeoutMillis: 2000\n});\nconst query = async (text, params)=>{\n    const client = await pool.connect();\n    try {\n        const result = await client.query(text, params);\n        return result;\n    } catch (error) {\n        console.error(\"Database error:\", error);\n        throw error;\n    } finally{\n        client.release(); // ✅ Release back to pool\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0I7QUFDcEIsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR0QsMkNBQUVBO0FBRW5CLE1BQU1FLE9BQU8sSUFBSUQsS0FBSztJQUNwQkUsTUFBTTtJQUNOQyxVQUFVO0lBQ1ZDLE1BQU07SUFDTkMsTUFBTTtJQUNOQyxVQUFVO0lBQ1ZDLEtBQUs7UUFBRUMsb0JBQW9CLEtBQUs7SUFBQztJQUNqQ0MsS0FBSztJQUNMQyxtQkFBbUI7SUFDbkJDLHlCQUF5QjtBQUMzQjtBQUVPLE1BQU1DLFFBQVEsT0FBT0MsTUFBTUMsU0FBVztJQUMzQyxNQUFNQyxTQUFTLE1BQU1kLEtBQUtlLE9BQU87SUFDakMsSUFBSTtRQUNGLE1BQU1DLFNBQVMsTUFBTUYsT0FBT0gsS0FBSyxDQUFDQyxNQUFNQztRQUN4QyxPQUFPRztJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsbUJBQW1CQTtRQUNqQyxNQUFNQSxNQUFNO0lBQ2QsU0FBVTtRQUNSSCxPQUFPSyxPQUFPLElBQUkseUJBQXlCO0lBQzdDO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZXhhbXBsZS8uL2RhdGFiYXNlLmpzPzQwZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBnIGZyb20gXCJwZ1wiO1xuY29uc3QgeyBQb29sIH0gPSBwZztcblxuY29uc3QgcG9vbCA9IG5ldyBQb29sKHtcbiAgdXNlcjogXCJuZW9uZGJfb3duZXJcIixcbiAgcGFzc3dvcmQ6IFwibnBnX0h5ZHA3VE9ieDlFa1wiLCAvLyDwn5S0IFJlcGxhY2Ugd2l0aCB5b3VyIGFjdHVhbCBwYXNzd29yZFxuICBob3N0OiBcImVwLWRhcmstZ2xpdHRlci1hNDBuMzd2di1wb29sZXIudXMtZWFzdC0xLmF3cy5uZW9uLnRlY2hcIiwgLy8g4pyFIFVzZSB0aGUgcG9vbGVyIGhvc3RcbiAgcG9ydDogNTQzMixcbiAgZGF0YWJhc2U6IFwibmVvbmRiXCIsXG4gIHNzbDogeyByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlIH0sIC8vIOKchSBFbnN1cmUgU1NMIHdvcmtzXG4gIG1heDogMTAsIC8vIE1heGltdW0gY29uY3VycmVudCBjb25uZWN0aW9uc1xuICBpZGxlVGltZW91dE1pbGxpczogMzAwMDAsIC8vIENsb3NlIGlkbGUgY29ubmVjdGlvbnMgYWZ0ZXIgMzBzXG4gIGNvbm5lY3Rpb25UaW1lb3V0TWlsbGlzOiAyMDAwLCAvLyBGYWlsIGFmdGVyIDJzIGlmIG5vIGNvbm5lY3Rpb25cbn0pO1xuXG5leHBvcnQgY29uc3QgcXVlcnkgPSBhc3luYyAodGV4dCwgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IHBvb2wuY29ubmVjdCgpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeSh0ZXh0LCBwYXJhbXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIGVycm9yOlwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH0gZmluYWxseSB7XG4gICAgY2xpZW50LnJlbGVhc2UoKTsgLy8g4pyFIFJlbGVhc2UgYmFjayB0byBwb29sXG4gIH1cbn07XG4iXSwibmFtZXMiOlsicGciLCJQb29sIiwicG9vbCIsInVzZXIiLCJwYXNzd29yZCIsImhvc3QiLCJwb3J0IiwiZGF0YWJhc2UiLCJzc2wiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJtYXgiLCJpZGxlVGltZW91dE1pbGxpcyIsImNvbm5lY3Rpb25UaW1lb3V0TWlsbGlzIiwicXVlcnkiLCJ0ZXh0IiwicGFyYW1zIiwiY2xpZW50IiwiY29ubmVjdCIsInJlc3VsdCIsImVycm9yIiwiY29uc29sZSIsInJlbGVhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./database.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/status.js":
/*!*********************************!*\
  !*** ./src/pages/api/status.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getStatus)\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database */ \"(api)/./database.js\");\n // Adjust path as needed\nasync function getStatus(req, res) {\n    try {\n        const versionResult = await (0,_database__WEBPACK_IMPORTED_MODULE_0__.query)(\"SHOW server_version;\"); // <---AQUI\n        console.log(\"PostgreSQL version:\", versionResult.rows[0]);\n        res.status(200).json({\n            status: 100,\n            dbVersion: versionResult.rows[0]\n        });\n    } catch (error) {\n        console.error(\"API error:\", error);\n        res.status(500).json({\n            status: 500,\n            error: \"Database connection failed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N0YXR1cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQyxDQUFDLHdCQUF3QjtBQUVwRCxlQUFlQyxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNoRCxJQUFJO1FBQ0YsTUFBTUMsZ0JBQWdCLE1BQU1KLGdEQUFLQSxDQUFDLHlCQUF5QixXQUFXO1FBQ3RFSyxRQUFRQyxHQUFHLENBQUMsdUJBQXVCRixjQUFjRyxJQUFJLENBQUMsRUFBRTtRQUV4REosSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkQsUUFBUTtZQUNSRSxXQUFXTixjQUFjRyxJQUFJLENBQUMsRUFBRTtRQUNsQztJQUNGLEVBQUUsT0FBT0ksT0FBTztRQUNkTixRQUFRTSxLQUFLLENBQUMsY0FBY0E7UUFDNUJSLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJELFFBQVE7WUFDUkcsT0FBTztRQUNUO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1leGFtcGxlLy4vc3JjL3BhZ2VzL2FwaS9zdGF0dXMuanM/NzBjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhYmFzZVwiOyAvLyBBZGp1c3QgcGF0aCBhcyBuZWVkZWRcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdHVzKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdmVyc2lvblJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFwiU0hPVyBzZXJ2ZXJfdmVyc2lvbjtcIik7IC8vIDwtLS1BUVVJXG4gICAgY29uc29sZS5sb2coXCJQb3N0Z3JlU1FMIHZlcnNpb246XCIsIHZlcnNpb25SZXN1bHQucm93c1swXSk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICBzdGF0dXM6IDEwMCxcbiAgICAgIGRiVmVyc2lvbjogdmVyc2lvblJlc3VsdC5yb3dzWzBdLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJBUEkgZXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBzdGF0dXM6IDUwMCxcbiAgICAgIGVycm9yOiBcIkRhdGFiYXNlIGNvbm5lY3Rpb24gZmFpbGVkXCIsXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJxdWVyeSIsImdldFN0YXR1cyIsInJlcSIsInJlcyIsInZlcnNpb25SZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicm93cyIsInN0YXR1cyIsImpzb24iLCJkYlZlcnNpb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/status.js\n");

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