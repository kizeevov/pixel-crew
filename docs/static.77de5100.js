// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../Cargo.toml":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = exports.default = exports.__wbindgen_throw = exports.__wbindgen_string_new = exports.__wbindgen_object_drop_ref = exports.__wbindgen_object_clone_ref = exports.__wbindgen_number_new = exports.__wbindgen_number_get = exports.__wbindgen_is_undefined = exports.__wbindgen_debug_string = exports.__wbindgen_closure_wrapper13820 = exports.__wbindgen_closure_wrapper12167 = exports.__wbindgen_cb_drop = exports.__wbindgen_bigint_new = exports.__wbg_window_b4be7f48b24ac56e = exports.__wbg_warn_ca021eeadd0df9cd = exports.__wbg_warn_2aa0e7178e1d35f6 = exports.__wbg_value_fc1c354d1a0e9714 = exports.__wbg_value_d3a30bc2c7caf357 = exports.__wbg_valueOf_39e0d6bc7e4232b9 = exports.__wbg_target_e560052e31e4567c = exports.__wbg_stack_0ddaca5d1abfb52f = exports.__wbg_setvalue_ce4a23f487065c07 = exports.__wbg_setvalue_6a34bab301f38bf2 = exports.__wbg_settextContent_07dfb193b5deabbc = exports.__wbg_setnodeValue_f175b74a390f8fda = exports.__wbg_setchecked_f6ead3490df88a7f = exports.__wbg_set_c42875065132a932 = exports.__wbg_setAttribute_1776fcc9b98d464e = exports.__wbg_self_e23d74ae45fb17d1 = exports.__wbg_removeEventListener_9cd36e5806463d5d = exports.__wbg_removeChild_f4a83c9698136bbb = exports.__wbg_removeAttribute_1adaecf6b4d35a09 = exports.__wbg_querySelector_cc714d0aa0b868ed = exports.__wbg_pushState_89ce908020e1d6aa = exports.__wbg_pathname_d0014089875ea691 = exports.__wbg_pathname_7affbcff36f35c0e = exports.__wbg_parentElement_96e1e07348340043 = exports.__wbg_now_5fa0ca001e042f8a = exports.__wbg_newnoargs_f579424187aa1717 = exports.__wbg_new_d3138911a89329b0 = exports.__wbg_new_693216e109162396 = exports.__wbg_new_4473c9af1cac368b = exports.__wbg_namespaceURI_e9a971e6c1ce68db = exports.__wbg_log_d71a81ec97959a2f = exports.__wbg_log_681299aef22afa27 = exports.__wbg_location_11472bb76bf5bbca = exports.__wbg_lastChild_e2b014abab089e08 = exports.__wbg_is_3d73f4d91adacc37 = exports.__wbg_instanceof_Window_434ce1849eb4e0fc = exports.__wbg_instanceof_Element_c9423704dd5d9b1d = exports.__wbg_insertBefore_4f09909023feac91 = exports.__wbg_info_8bed0988e7416289 = exports.__wbg_href_cad8f02caf39f2fb = exports.__wbg_history_52cfc93c824e772b = exports.__wbg_head_7628a94275baa197 = exports.__wbg_global_e7669da72fd7f239 = exports.__wbg_globalThis_d61b1f48a57191ae = exports.__wbg_get_8bbb82393651dd9c = exports.__wbg_firstChild_de0c7cdd47485282 = exports.__wbg_error_ca520cb687b085a1 = exports.__wbg_error_644d3bc8c0537e80 = exports.__wbg_error_09919627ac0992f5 = exports.__wbg_document_5edd43643d1060d9 = exports.__wbg_debug_6df4b1a327dd2e94 = exports.__wbg_createTextNode_39a0de25d14bcde5 = exports.__wbg_createElement_d017b8d2af99bab9 = exports.__wbg_createElementNS_fd4a7e49f74039e1 = exports.__wbg_cancelBubble_17d7988ab2fbe4c9 = exports.__wbg_call_89558c3e96703ca1 = exports.__wbg_body_7538539844356c1c = exports.__wbg_appendChild_3fe5090c665d3bb4 = exports.__wbg_addEventListener_55682f77717d7665 = void 0;

var _pixel_crew_bg = _interopRequireDefault(require("./pkg/pixel_crew_bg.wasm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _pixel_crew_bg.default;
exports.default = _default;
var run = _pixel_crew_bg.default.run;
exports.run = run;
var __wbindgen_bigint_new = _pixel_crew_bg.default.__wbindgen_bigint_new;
exports.__wbindgen_bigint_new = __wbindgen_bigint_new;
var __wbindgen_string_new = _pixel_crew_bg.default.__wbindgen_string_new;
exports.__wbindgen_string_new = __wbindgen_string_new;
var __wbindgen_object_clone_ref = _pixel_crew_bg.default.__wbindgen_object_clone_ref;
exports.__wbindgen_object_clone_ref = __wbindgen_object_clone_ref;
var __wbindgen_is_undefined = _pixel_crew_bg.default.__wbindgen_is_undefined;
exports.__wbindgen_is_undefined = __wbindgen_is_undefined;
var __wbindgen_number_get = _pixel_crew_bg.default.__wbindgen_number_get;
exports.__wbindgen_number_get = __wbindgen_number_get;
var __wbindgen_number_new = _pixel_crew_bg.default.__wbindgen_number_new;
exports.__wbindgen_number_new = __wbindgen_number_new;
var __wbindgen_object_drop_ref = _pixel_crew_bg.default.__wbindgen_object_drop_ref;
exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref;
var __wbg_error_09919627ac0992f5 = _pixel_crew_bg.default.__wbg_error_09919627ac0992f5;
exports.__wbg_error_09919627ac0992f5 = __wbg_error_09919627ac0992f5;
var __wbg_new_693216e109162396 = _pixel_crew_bg.default.__wbg_new_693216e109162396;
exports.__wbg_new_693216e109162396 = __wbg_new_693216e109162396;
var __wbg_stack_0ddaca5d1abfb52f = _pixel_crew_bg.default.__wbg_stack_0ddaca5d1abfb52f;
exports.__wbg_stack_0ddaca5d1abfb52f = __wbg_stack_0ddaca5d1abfb52f;
var __wbindgen_cb_drop = _pixel_crew_bg.default.__wbindgen_cb_drop;
exports.__wbindgen_cb_drop = __wbindgen_cb_drop;
var __wbg_warn_2aa0e7178e1d35f6 = _pixel_crew_bg.default.__wbg_warn_2aa0e7178e1d35f6;
exports.__wbg_warn_2aa0e7178e1d35f6 = __wbg_warn_2aa0e7178e1d35f6;
var __wbg_instanceof_Window_434ce1849eb4e0fc = _pixel_crew_bg.default.__wbg_instanceof_Window_434ce1849eb4e0fc;
exports.__wbg_instanceof_Window_434ce1849eb4e0fc = __wbg_instanceof_Window_434ce1849eb4e0fc;
var __wbg_document_5edd43643d1060d9 = _pixel_crew_bg.default.__wbg_document_5edd43643d1060d9;
exports.__wbg_document_5edd43643d1060d9 = __wbg_document_5edd43643d1060d9;
var __wbg_location_11472bb76bf5bbca = _pixel_crew_bg.default.__wbg_location_11472bb76bf5bbca;
exports.__wbg_location_11472bb76bf5bbca = __wbg_location_11472bb76bf5bbca;
var __wbg_history_52cfc93c824e772b = _pixel_crew_bg.default.__wbg_history_52cfc93c824e772b;
exports.__wbg_history_52cfc93c824e772b = __wbg_history_52cfc93c824e772b;
var __wbg_body_7538539844356c1c = _pixel_crew_bg.default.__wbg_body_7538539844356c1c;
exports.__wbg_body_7538539844356c1c = __wbg_body_7538539844356c1c;
var __wbg_head_7628a94275baa197 = _pixel_crew_bg.default.__wbg_head_7628a94275baa197;
exports.__wbg_head_7628a94275baa197 = __wbg_head_7628a94275baa197;
var __wbg_createElement_d017b8d2af99bab9 = _pixel_crew_bg.default.__wbg_createElement_d017b8d2af99bab9;
exports.__wbg_createElement_d017b8d2af99bab9 = __wbg_createElement_d017b8d2af99bab9;
var __wbg_createElementNS_fd4a7e49f74039e1 = _pixel_crew_bg.default.__wbg_createElementNS_fd4a7e49f74039e1;
exports.__wbg_createElementNS_fd4a7e49f74039e1 = __wbg_createElementNS_fd4a7e49f74039e1;
var __wbg_createTextNode_39a0de25d14bcde5 = _pixel_crew_bg.default.__wbg_createTextNode_39a0de25d14bcde5;
exports.__wbg_createTextNode_39a0de25d14bcde5 = __wbg_createTextNode_39a0de25d14bcde5;
var __wbg_querySelector_cc714d0aa0b868ed = _pixel_crew_bg.default.__wbg_querySelector_cc714d0aa0b868ed;
exports.__wbg_querySelector_cc714d0aa0b868ed = __wbg_querySelector_cc714d0aa0b868ed;
var __wbg_addEventListener_55682f77717d7665 = _pixel_crew_bg.default.__wbg_addEventListener_55682f77717d7665;
exports.__wbg_addEventListener_55682f77717d7665 = __wbg_addEventListener_55682f77717d7665;
var __wbg_removeEventListener_9cd36e5806463d5d = _pixel_crew_bg.default.__wbg_removeEventListener_9cd36e5806463d5d;
exports.__wbg_removeEventListener_9cd36e5806463d5d = __wbg_removeEventListener_9cd36e5806463d5d;
var __wbg_pushState_89ce908020e1d6aa = _pixel_crew_bg.default.__wbg_pushState_89ce908020e1d6aa;
exports.__wbg_pushState_89ce908020e1d6aa = __wbg_pushState_89ce908020e1d6aa;
var __wbg_parentElement_96e1e07348340043 = _pixel_crew_bg.default.__wbg_parentElement_96e1e07348340043;
exports.__wbg_parentElement_96e1e07348340043 = __wbg_parentElement_96e1e07348340043;
var __wbg_firstChild_de0c7cdd47485282 = _pixel_crew_bg.default.__wbg_firstChild_de0c7cdd47485282;
exports.__wbg_firstChild_de0c7cdd47485282 = __wbg_firstChild_de0c7cdd47485282;
var __wbg_lastChild_e2b014abab089e08 = _pixel_crew_bg.default.__wbg_lastChild_e2b014abab089e08;
exports.__wbg_lastChild_e2b014abab089e08 = __wbg_lastChild_e2b014abab089e08;
var __wbg_setnodeValue_f175b74a390f8fda = _pixel_crew_bg.default.__wbg_setnodeValue_f175b74a390f8fda;
exports.__wbg_setnodeValue_f175b74a390f8fda = __wbg_setnodeValue_f175b74a390f8fda;
var __wbg_settextContent_07dfb193b5deabbc = _pixel_crew_bg.default.__wbg_settextContent_07dfb193b5deabbc;
exports.__wbg_settextContent_07dfb193b5deabbc = __wbg_settextContent_07dfb193b5deabbc;
var __wbg_appendChild_3fe5090c665d3bb4 = _pixel_crew_bg.default.__wbg_appendChild_3fe5090c665d3bb4;
exports.__wbg_appendChild_3fe5090c665d3bb4 = __wbg_appendChild_3fe5090c665d3bb4;
var __wbg_insertBefore_4f09909023feac91 = _pixel_crew_bg.default.__wbg_insertBefore_4f09909023feac91;
exports.__wbg_insertBefore_4f09909023feac91 = __wbg_insertBefore_4f09909023feac91;
var __wbg_removeChild_f4a83c9698136bbb = _pixel_crew_bg.default.__wbg_removeChild_f4a83c9698136bbb;
exports.__wbg_removeChild_f4a83c9698136bbb = __wbg_removeChild_f4a83c9698136bbb;
var __wbg_pathname_d0014089875ea691 = _pixel_crew_bg.default.__wbg_pathname_d0014089875ea691;
exports.__wbg_pathname_d0014089875ea691 = __wbg_pathname_d0014089875ea691;
var __wbg_instanceof_Element_c9423704dd5d9b1d = _pixel_crew_bg.default.__wbg_instanceof_Element_c9423704dd5d9b1d;
exports.__wbg_instanceof_Element_c9423704dd5d9b1d = __wbg_instanceof_Element_c9423704dd5d9b1d;
var __wbg_namespaceURI_e9a971e6c1ce68db = _pixel_crew_bg.default.__wbg_namespaceURI_e9a971e6c1ce68db;
exports.__wbg_namespaceURI_e9a971e6c1ce68db = __wbg_namespaceURI_e9a971e6c1ce68db;
var __wbg_removeAttribute_1adaecf6b4d35a09 = _pixel_crew_bg.default.__wbg_removeAttribute_1adaecf6b4d35a09;
exports.__wbg_removeAttribute_1adaecf6b4d35a09 = __wbg_removeAttribute_1adaecf6b4d35a09;
var __wbg_setAttribute_1776fcc9b98d464e = _pixel_crew_bg.default.__wbg_setAttribute_1776fcc9b98d464e;
exports.__wbg_setAttribute_1776fcc9b98d464e = __wbg_setAttribute_1776fcc9b98d464e;
var __wbg_debug_6df4b1a327dd2e94 = _pixel_crew_bg.default.__wbg_debug_6df4b1a327dd2e94;
exports.__wbg_debug_6df4b1a327dd2e94 = __wbg_debug_6df4b1a327dd2e94;
var __wbg_error_ca520cb687b085a1 = _pixel_crew_bg.default.__wbg_error_ca520cb687b085a1;
exports.__wbg_error_ca520cb687b085a1 = __wbg_error_ca520cb687b085a1;
var __wbg_error_644d3bc8c0537e80 = _pixel_crew_bg.default.__wbg_error_644d3bc8c0537e80;
exports.__wbg_error_644d3bc8c0537e80 = __wbg_error_644d3bc8c0537e80;
var __wbg_info_8bed0988e7416289 = _pixel_crew_bg.default.__wbg_info_8bed0988e7416289;
exports.__wbg_info_8bed0988e7416289 = __wbg_info_8bed0988e7416289;
var __wbg_log_d71a81ec97959a2f = _pixel_crew_bg.default.__wbg_log_d71a81ec97959a2f;
exports.__wbg_log_d71a81ec97959a2f = __wbg_log_d71a81ec97959a2f;
var __wbg_log_681299aef22afa27 = _pixel_crew_bg.default.__wbg_log_681299aef22afa27;
exports.__wbg_log_681299aef22afa27 = __wbg_log_681299aef22afa27;
var __wbg_warn_ca021eeadd0df9cd = _pixel_crew_bg.default.__wbg_warn_ca021eeadd0df9cd;
exports.__wbg_warn_ca021eeadd0df9cd = __wbg_warn_ca021eeadd0df9cd;
var __wbg_pathname_7affbcff36f35c0e = _pixel_crew_bg.default.__wbg_pathname_7affbcff36f35c0e;
exports.__wbg_pathname_7affbcff36f35c0e = __wbg_pathname_7affbcff36f35c0e;
var __wbg_new_4473c9af1cac368b = _pixel_crew_bg.default.__wbg_new_4473c9af1cac368b;
exports.__wbg_new_4473c9af1cac368b = __wbg_new_4473c9af1cac368b;
var __wbg_value_d3a30bc2c7caf357 = _pixel_crew_bg.default.__wbg_value_d3a30bc2c7caf357;
exports.__wbg_value_d3a30bc2c7caf357 = __wbg_value_d3a30bc2c7caf357;
var __wbg_setvalue_6a34bab301f38bf2 = _pixel_crew_bg.default.__wbg_setvalue_6a34bab301f38bf2;
exports.__wbg_setvalue_6a34bab301f38bf2 = __wbg_setvalue_6a34bab301f38bf2;
var __wbg_now_5fa0ca001e042f8a = _pixel_crew_bg.default.__wbg_now_5fa0ca001e042f8a;
exports.__wbg_now_5fa0ca001e042f8a = __wbg_now_5fa0ca001e042f8a;
var __wbg_target_e560052e31e4567c = _pixel_crew_bg.default.__wbg_target_e560052e31e4567c;
exports.__wbg_target_e560052e31e4567c = __wbg_target_e560052e31e4567c;
var __wbg_cancelBubble_17d7988ab2fbe4c9 = _pixel_crew_bg.default.__wbg_cancelBubble_17d7988ab2fbe4c9;
exports.__wbg_cancelBubble_17d7988ab2fbe4c9 = __wbg_cancelBubble_17d7988ab2fbe4c9;
var __wbg_href_cad8f02caf39f2fb = _pixel_crew_bg.default.__wbg_href_cad8f02caf39f2fb;
exports.__wbg_href_cad8f02caf39f2fb = __wbg_href_cad8f02caf39f2fb;
var __wbg_setchecked_f6ead3490df88a7f = _pixel_crew_bg.default.__wbg_setchecked_f6ead3490df88a7f;
exports.__wbg_setchecked_f6ead3490df88a7f = __wbg_setchecked_f6ead3490df88a7f;
var __wbg_value_fc1c354d1a0e9714 = _pixel_crew_bg.default.__wbg_value_fc1c354d1a0e9714;
exports.__wbg_value_fc1c354d1a0e9714 = __wbg_value_fc1c354d1a0e9714;
var __wbg_setvalue_ce4a23f487065c07 = _pixel_crew_bg.default.__wbg_setvalue_ce4a23f487065c07;
exports.__wbg_setvalue_ce4a23f487065c07 = __wbg_setvalue_ce4a23f487065c07;
var __wbg_newnoargs_f579424187aa1717 = _pixel_crew_bg.default.__wbg_newnoargs_f579424187aa1717;
exports.__wbg_newnoargs_f579424187aa1717 = __wbg_newnoargs_f579424187aa1717;
var __wbg_call_89558c3e96703ca1 = _pixel_crew_bg.default.__wbg_call_89558c3e96703ca1;
exports.__wbg_call_89558c3e96703ca1 = __wbg_call_89558c3e96703ca1;
var __wbg_valueOf_39e0d6bc7e4232b9 = _pixel_crew_bg.default.__wbg_valueOf_39e0d6bc7e4232b9;
exports.__wbg_valueOf_39e0d6bc7e4232b9 = __wbg_valueOf_39e0d6bc7e4232b9;
var __wbg_is_3d73f4d91adacc37 = _pixel_crew_bg.default.__wbg_is_3d73f4d91adacc37;
exports.__wbg_is_3d73f4d91adacc37 = __wbg_is_3d73f4d91adacc37;
var __wbg_new_d3138911a89329b0 = _pixel_crew_bg.default.__wbg_new_d3138911a89329b0;
exports.__wbg_new_d3138911a89329b0 = __wbg_new_d3138911a89329b0;
var __wbg_globalThis_d61b1f48a57191ae = _pixel_crew_bg.default.__wbg_globalThis_d61b1f48a57191ae;
exports.__wbg_globalThis_d61b1f48a57191ae = __wbg_globalThis_d61b1f48a57191ae;
var __wbg_self_e23d74ae45fb17d1 = _pixel_crew_bg.default.__wbg_self_e23d74ae45fb17d1;
exports.__wbg_self_e23d74ae45fb17d1 = __wbg_self_e23d74ae45fb17d1;
var __wbg_window_b4be7f48b24ac56e = _pixel_crew_bg.default.__wbg_window_b4be7f48b24ac56e;
exports.__wbg_window_b4be7f48b24ac56e = __wbg_window_b4be7f48b24ac56e;
var __wbg_global_e7669da72fd7f239 = _pixel_crew_bg.default.__wbg_global_e7669da72fd7f239;
exports.__wbg_global_e7669da72fd7f239 = __wbg_global_e7669da72fd7f239;
var __wbg_get_8bbb82393651dd9c = _pixel_crew_bg.default.__wbg_get_8bbb82393651dd9c;
exports.__wbg_get_8bbb82393651dd9c = __wbg_get_8bbb82393651dd9c;
var __wbg_set_c42875065132a932 = _pixel_crew_bg.default.__wbg_set_c42875065132a932;
exports.__wbg_set_c42875065132a932 = __wbg_set_c42875065132a932;
var __wbindgen_debug_string = _pixel_crew_bg.default.__wbindgen_debug_string;
exports.__wbindgen_debug_string = __wbindgen_debug_string;
var __wbindgen_throw = _pixel_crew_bg.default.__wbindgen_throw;
exports.__wbindgen_throw = __wbindgen_throw;
var __wbindgen_closure_wrapper12167 = _pixel_crew_bg.default.__wbindgen_closure_wrapper12167;
exports.__wbindgen_closure_wrapper12167 = __wbindgen_closure_wrapper12167;
var __wbindgen_closure_wrapper13820 = _pixel_crew_bg.default.__wbindgen_closure_wrapper13820;
exports.__wbindgen_closure_wrapper13820 = __wbindgen_closure_wrapper13820;
},{"./pkg/pixel_crew_bg.wasm":"../pkg/pixel_crew_bg.wasm"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Cargo_toml_1 = require("../Cargo.toml");

Cargo_toml_1.run();
},{"../Cargo.toml":"../Cargo.toml"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55627" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/parcel-plugin-wasm.rs/wasm-loader.js":[function(require,module,exports) {
var global = arguments[3];
var __dirname = "/Users/kizeev/projects/pixel-crew/client/node_modules/parcel-plugin-wasm.rs";
var wasm;const __exports = {};

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
        throw new Error('expected a boolean argument');
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error('expected a number argument');
}

let cachegetFloat64Memory0 = null;
function getFloat64Memory0() {
    if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== wasm.memory.buffer) {
        cachegetFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachegetFloat64Memory0;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (typeof(arg) !== 'string') throw new Error('expected a string argument');

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);
        if (ret.read !== arg.length) throw new Error('failed to pass whole string');
        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function makeClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        try {
            return f(state.a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
                state.a = 0;

            }
        }
    };
    real.original = state;

    return real;
}

function logError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        let error = (function () {
            try {
                return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
            } catch(_) {
                return "<failed to stringify thrown value>";
            }
        }());
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
        throw e;
    }
}
function __wbg_adapter_22(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hafce6ee25cdcf78c(arg0, arg1, addHeapObject(arg2));
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}
function __wbg_adapter_25(arg0, arg1, arg2) {
    try {
        _assertNum(arg0);
        _assertNum(arg1);
        wasm._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5a4babd43696a3f2(arg0, arg1, addBorrowedObject(arg2));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
*/
__exports. run = function() {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.run(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory0;
}

function getArrayJsValueFromWasm0(ptr, len) {
    const mem = getUint32Memory0();
    const slice = mem.subarray(ptr / 4, ptr / 4 + len);
    const result = [];
    for (let i = 0; i < slice.length; i++) {
        result.push(takeObject(slice[i]));
    }
    return result;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

__exports. __wbindgen_bigint_new = function(arg0, arg1) {
    var ret = BigInt(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

__exports. __wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

__exports. __wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

__exports. __wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    _assertBoolean(ret);
    return ret;
};

__exports. __wbindgen_number_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'number' ? obj : undefined;
    if (!isLikeNone(ret)) {
        _assertNum(ret);
    }
    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};

__exports. __wbindgen_number_new = function(arg0) {
    var ret = arg0;
    return addHeapObject(ret);
};

__exports. __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

__exports. __wbg_error_09919627ac0992f5 = function() { return logError(function (arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
}, arguments) };

__exports. __wbg_new_693216e109162396 = function() { return logError(function () {
    var ret = new Error();
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_stack_0ddaca5d1abfb52f = function() { return logError(function (arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    var ret = false;
    _assertBoolean(ret);
    return ret;
};

__exports. __wbg_warn_2aa0e7178e1d35f6 = function() { return logError(function (arg0, arg1) {
    var v0 = getArrayJsValueFromWasm0(arg0, arg1).slice();
    wasm.__wbindgen_free(arg0, arg1 * 4);
    console.warn(...v0);
}, arguments) };

__exports. __wbg_instanceof_Window_434ce1849eb4e0fc = function() { return logError(function (arg0) {
    var ret = getObject(arg0) instanceof Window;
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_document_5edd43643d1060d9 = function() { return logError(function (arg0) {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_location_11472bb76bf5bbca = function() { return logError(function (arg0) {
    var ret = getObject(arg0).location;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_history_52cfc93c824e772b = function() { return handleError(function (arg0) {
    var ret = getObject(arg0).history;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_body_7538539844356c1c = function() { return logError(function (arg0) {
    var ret = getObject(arg0).body;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_head_7628a94275baa197 = function() { return logError(function (arg0) {
    var ret = getObject(arg0).head;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_createElement_d017b8d2af99bab9 = function() { return handleError(function (arg0, arg1, arg2) {
    var ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_createElementNS_fd4a7e49f74039e1 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    var ret = getObject(arg0).createElementNS(arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_createTextNode_39a0de25d14bcde5 = function() { return logError(function (arg0, arg1, arg2) {
    var ret = getObject(arg0).createTextNode(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_querySelector_cc714d0aa0b868ed = function() { return handleError(function (arg0, arg1, arg2) {
    var ret = getObject(arg0).querySelector(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_addEventListener_55682f77717d7665 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
}, arguments) };

__exports. __wbg_removeEventListener_9cd36e5806463d5d = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), arg4 !== 0);
}, arguments) };

__exports. __wbg_pushState_89ce908020e1d6aa = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).pushState(getObject(arg1), getStringFromWasm0(arg2, arg3), arg4 === 0 ? undefined : getStringFromWasm0(arg4, arg5));
}, arguments) };

__exports. __wbg_parentElement_96e1e07348340043 = function() { return logError(function (arg0) {
    var ret = getObject(arg0).parentElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_firstChild_de0c7cdd47485282 = function() { return logError(function (arg0) {
    var ret = getObject(arg0).firstChild;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_lastChild_e2b014abab089e08 = function() { return logError(function (arg0) {
    var ret = getObject(arg0).lastChild;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_setnodeValue_f175b74a390f8fda = function() { return logError(function (arg0, arg1, arg2) {
    getObject(arg0).nodeValue = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);
}, arguments) };

__exports. __wbg_settextContent_07dfb193b5deabbc = function() { return logError(function (arg0, arg1, arg2) {
    getObject(arg0).textContent = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);
}, arguments) };

__exports. __wbg_appendChild_3fe5090c665d3bb4 = function() { return handleError(function (arg0, arg1) {
    var ret = getObject(arg0).appendChild(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_insertBefore_4f09909023feac91 = function() { return handleError(function (arg0, arg1, arg2) {
    var ret = getObject(arg0).insertBefore(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_removeChild_f4a83c9698136bbb = function() { return handleError(function (arg0, arg1) {
    var ret = getObject(arg0).removeChild(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_pathname_d0014089875ea691 = function() { return handleError(function (arg0, arg1) {
    var ret = getObject(arg1).pathname;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_instanceof_Element_c9423704dd5d9b1d = function() { return logError(function (arg0) {
    var ret = getObject(arg0) instanceof Element;
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_namespaceURI_e9a971e6c1ce68db = function() { return logError(function (arg0, arg1) {
    var ret = getObject(arg1).namespaceURI;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_removeAttribute_1adaecf6b4d35a09 = function() { return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).removeAttribute(getStringFromWasm0(arg1, arg2));
}, arguments) };

__exports. __wbg_setAttribute_1776fcc9b98d464e = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments) };

__exports. __wbg_debug_6df4b1a327dd2e94 = function() { return logError(function (arg0, arg1, arg2, arg3) {
    console.debug(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
}, arguments) };

__exports. __wbg_error_ca520cb687b085a1 = function() { return logError(function (arg0) {
    console.error(getObject(arg0));
}, arguments) };

__exports. __wbg_error_644d3bc8c0537e80 = function() { return logError(function (arg0, arg1, arg2, arg3) {
    console.error(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
}, arguments) };

__exports. __wbg_info_8bed0988e7416289 = function() { return logError(function (arg0, arg1, arg2, arg3) {
    console.info(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
}, arguments) };

__exports. __wbg_log_d71a81ec97959a2f = function() { return logError(function (arg0, arg1, arg2) {
    console.log(getObject(arg0), getObject(arg1), getObject(arg2));
}, arguments) };

__exports. __wbg_log_681299aef22afa27 = function() { return logError(function (arg0, arg1, arg2, arg3) {
    console.log(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
}, arguments) };

__exports. __wbg_warn_ca021eeadd0df9cd = function() { return logError(function (arg0, arg1, arg2, arg3) {
    console.warn(getObject(arg0), getObject(arg1), getObject(arg2), getObject(arg3));
}, arguments) };

__exports. __wbg_pathname_7affbcff36f35c0e = function() { return logError(function (arg0, arg1) {
    var ret = getObject(arg1).pathname;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_new_4473c9af1cac368b = function() { return handleError(function (arg0, arg1) {
    var ret = new URL(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_value_d3a30bc2c7caf357 = function() { return logError(function (arg0, arg1) {
    var ret = getObject(arg1).value;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_setvalue_6a34bab301f38bf2 = function() { return logError(function (arg0, arg1, arg2) {
    getObject(arg0).value = getStringFromWasm0(arg1, arg2);
}, arguments) };

__exports. __wbg_now_5fa0ca001e042f8a = function() { return logError(function (arg0) {
    var ret = getObject(arg0).now();
    return ret;
}, arguments) };

__exports. __wbg_target_e560052e31e4567c = function() { return logError(function (arg0) {
    var ret = getObject(arg0).target;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

__exports. __wbg_cancelBubble_17d7988ab2fbe4c9 = function() { return logError(function (arg0) {
    var ret = getObject(arg0).cancelBubble;
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_href_cad8f02caf39f2fb = function() { return logError(function (arg0, arg1) {
    var ret = getObject(arg1).href;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_setchecked_f6ead3490df88a7f = function() { return logError(function (arg0, arg1) {
    getObject(arg0).checked = arg1 !== 0;
}, arguments) };

__exports. __wbg_value_fc1c354d1a0e9714 = function() { return logError(function (arg0, arg1) {
    var ret = getObject(arg1).value;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

__exports. __wbg_setvalue_ce4a23f487065c07 = function() { return logError(function (arg0, arg1, arg2) {
    getObject(arg0).value = getStringFromWasm0(arg1, arg2);
}, arguments) };

__exports. __wbg_newnoargs_f579424187aa1717 = function() { return logError(function (arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_call_89558c3e96703ca1 = function() { return handleError(function (arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_valueOf_39e0d6bc7e4232b9 = function() { return logError(function (arg0) {
    var ret = getObject(arg0).valueOf();
    return ret;
}, arguments) };

__exports. __wbg_is_3d73f4d91adacc37 = function() { return logError(function (arg0, arg1) {
    var ret = Object.is(getObject(arg0), getObject(arg1));
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbg_new_d3138911a89329b0 = function() { return logError(function () {
    var ret = new Object();
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_globalThis_d61b1f48a57191ae = function() { return handleError(function () {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_self_e23d74ae45fb17d1 = function() { return handleError(function () {
    var ret = self.self;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_window_b4be7f48b24ac56e = function() { return handleError(function () {
    var ret = window.window;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_global_e7669da72fd7f239 = function() { return handleError(function () {
    var ret = global.global;
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_get_8bbb82393651dd9c = function() { return handleError(function (arg0, arg1) {
    var ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

__exports. __wbg_set_c42875065132a932 = function() { return handleError(function (arg0, arg1, arg2) {
    var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    _assertBoolean(ret);
    return ret;
}, arguments) };

__exports. __wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports. __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

__exports. __wbindgen_closure_wrapper12167 = function() { return logError(function (arg0, arg1, arg2) {
    var ret = makeClosure(arg0, arg1, 479, __wbg_adapter_22);
    return addHeapObject(ret);
}, arguments) };

__exports. __wbindgen_closure_wrapper13820 = function() { return logError(function (arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 491, __wbg_adapter_25);
    return addHeapObject(ret);
}, arguments) };



      function init(wasm_path) {
          const fetchPromise = fetch(wasm_path);
          let resultPromise;
          if (typeof WebAssembly.instantiateStreaming === 'function') {
              resultPromise = WebAssembly.instantiateStreaming(fetchPromise, { './pixel_crew_bg.js': __exports });
          } else {
              resultPromise = fetchPromise
              .then(response => response.arrayBuffer())
              .then(buffer => WebAssembly.instantiate(buffer, { './pixel_crew_bg.js': __exports }));
          }
          return resultPromise.then(({instance}) => {
              wasm = init.wasm = instance.exports;
              __exports.wasm = wasm;
              return;
          });
      };
      function init_node(wasm_path) {
          const fs = require('fs');
          return new Promise(function(resolve, reject) {
              fs.readFile(__dirname + wasm_path, function(err, data) {
                  if (err) {
                      reject(err);
                  } else {
                      resolve(data.buffer);
                  }
              });
          })
          .then(data => WebAssembly.instantiate(data, { './pixel_crew_bg': __exports }))
          .then(({instance}) => {
              wasm = init.wasm = instance.exports;
              __exports.wasm = wasm;
              return;
          });
      }
      const wasm_bindgen = Object.assign(false ? init_node : init, __exports);
      module.exports = function loadWASMBundle(bundle) {
            return wasm_bindgen(bundle).then(() => __exports)
      }
    
},{"fs":"../node_modules/parcel-bundler/src/builtins/_empty.js"}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("wasm",require("../node_modules/parcel-plugin-wasm.rs/wasm-loader.js"));b.load([["pixel_crew_bg.b0389dd2.wasm","../pkg/pixel_crew_bg.wasm"]]).then(function(){require("index.ts");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/static.77de5100.js.map