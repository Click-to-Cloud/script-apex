var pageComponent =
webpackJsonppageComponent([9],{

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(17);

var _indexSoy = __webpack_require__(271);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var igcUY = function (_Component) {
  _inherits(igcUY, _Component);

  function igcUY() {
    _classCallCheck(this, igcUY);

    return _possibleConstructorReturn(this, (igcUY.__proto__ || Object.getPrototypeOf(igcUY)).apply(this, arguments));
  }

  return igcUY;
}(_metalComponent2.default);

;

_metalSoy2.default.register(igcUY, _indexSoy2.default);

exports.default = igcUY;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.igcUY = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace igcUY.
   * @public
   */

  goog.module('igcUY.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param336 = function param336() {
      ie_open('h6');
      var dyn28 = opt_data.page.description;
      if (typeof dyn28 == 'function') dyn28();else if (dyn28 != null) itext(dyn28);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Parsing Expression');
      ie_close('h2');
      ie_open('p');
      itext('Here is how we can parse JavaScript expressions.');
      ie_close('p');
      $templateAlias2({ code: 'Jsep.Node node = new Jsep(\'1 + 2\').parse();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Expression Support');
      ie_close('h2');
      ie_open('p');
      itext('Supported Unary Operator');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Name');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('-');
      ie_close('td');
      ie_open('td');
      itext('Negate number');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('!');
      ie_close('td');
      ie_open('td');
      itext('Negate boolean');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('++');
      ie_close('td');
      ie_open('td');
      itext('Only prefix supported');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('--');
      ie_close('td');
      ie_open('td');
      itext('Only prefix supported');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Supported Logical Operator');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Name');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('&&');
      ie_close('td');
      ie_open('td');
      itext('Logical and');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('\\');
      ie_close('td');
      ie_open('td');
      itext('\\');
      ie_close('td');
      ie_void('td');
      ie_open('td');
      itext('Logical or');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Supported Binary Operator');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Name');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('==');
      ie_close('td');
      ie_open('td');
      itext('Apex ==');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('!=');
      ie_close('td');
      ie_open('td');
      itext('Apex !=');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('===');
      ie_close('td');
      ie_open('td');
      itext('Apex ==');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('!==');
      ie_close('td');
      ie_open('td');
      itext('Apex !=');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('<');
      ie_close('td');
      ie_open('td');
      itext('Apex <');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('>');
      ie_close('td');
      ie_open('td');
      itext('Apex >');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('<=');
      ie_close('td');
      ie_open('td');
      itext('Apex <=');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('>=');
      ie_close('td');
      ie_open('td');
      itext('Apex >=');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('+');
      ie_close('td');
      ie_open('td');
      itext('Apex +');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('-');
      ie_close('td');
      ie_open('td');
      itext('Apex -');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('*');
      ie_close('td');
      ie_open('td');
      itext('Apex *');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('/');
      ie_close('td');
      ie_open('td');
      itext('Apex /');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('%');
      ie_close('td');
      ie_open('td');
      itext('Apex Math.mod');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Supported Structure');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Name');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Conditional Expression(? :)');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Array Literal');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Object Literal');
      ie_close('td');
      ie_open('td');
      itext('Yes');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('For example,');
      ie_close('p');
      $templateAlias2({ code: 'ScriptEngine.getInstance.eval(\'["a", "b"]\'); // Array literal\n\nScriptEngine.getInstance.eval(\'{ "name": "test", age: 18 }\'); // Object literal', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param336 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'igcUY.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var igcUY = function (_Component) {
  _inherits(igcUY, _Component);

  function igcUY() {
    _classCallCheck(this, igcUY);

    return _possibleConstructorReturn(this, (igcUY.__proto__ || Object.getPrototypeOf(igcUY)).apply(this, arguments));
  }

  return igcUY;
}(_metalComponent2.default);

_metalSoy2.default.register(igcUY, templates);
exports.igcUY = igcUY;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[270]);