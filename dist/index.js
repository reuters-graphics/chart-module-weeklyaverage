import * as d3 from 'd3';
import { selection } from 'd3';
import merge from 'lodash/merge';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var ChartError = /*#__PURE__*/function (_Error) {
  _inherits(ChartError, _Error);

  var _super = _createSuper(ChartError);

  function ChartError() {
    var _this;

    var constructorName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Chart component';

    _classCallCheck(this, ChartError);

    _this = _super.call(this, constructorName);
    _this.constructorName = constructorName;
    _this.name = 'ChartComponentError';
    return _this;
  }

  return ChartError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
var ErrorDrawMethodUndefined = /*#__PURE__*/function (_ChartError) {
  _inherits(ErrorDrawMethodUndefined, _ChartError);

  var _super2 = _createSuper(ErrorDrawMethodUndefined);

  function ErrorDrawMethodUndefined() {
    var _this2;

    _classCallCheck(this, ErrorDrawMethodUndefined);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "message", "".concat(_this2.constructorName, " should have a draw method"));

    return _this2;
  }

  return ErrorDrawMethodUndefined;
}(ChartError);
var ErrorSelectorType = /*#__PURE__*/function (_ChartError2) {
  _inherits(ErrorSelectorType, _ChartError2);

  var _super3 = _createSuper(ErrorSelectorType);

  function ErrorSelectorType() {
    var _this3;

    _classCallCheck(this, ErrorSelectorType);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "message", "".concat(_this3.constructorName, " selector should be a DOM Element or selector string"));

    return _this3;
  }

  return ErrorSelectorType;
}(ChartError);
var ErrorPropsType = /*#__PURE__*/function (_ChartError3) {
  _inherits(ErrorPropsType, _ChartError3);

  var _super4 = _createSuper(ErrorPropsType);

  function ErrorPropsType() {
    var _this4;

    _classCallCheck(this, ErrorPropsType);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _super4.call.apply(_super4, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this4), "message", "".concat(_this4.constructorName, " props should be an Object"));

    return _this4;
  }

  return ErrorPropsType;
}(ChartError);
var ErrorDataType = /*#__PURE__*/function (_ChartError4) {
  _inherits(ErrorDataType, _ChartError4);

  var _super5 = _createSuper(ErrorDataType);

  function ErrorDataType() {
    var _this5;

    _classCallCheck(this, ErrorDataType);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this5 = _super5.call.apply(_super5, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this5), "message", "".concat(_this5.constructorName, " data should be an Array"));

    return _this5;
  }

  return ErrorDataType;
}(ChartError);

selection.prototype.moveToFront = function () {
  return this.each(function () {
    this.parentNode.appendChild(this);
  });
};

selection.prototype.moveToBack = function () {
  return this.each(function () {
    var firstChild = this.parentNode.firstChild;

    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
}; // d3 webpack functions
// d3.selection.prototype.tspans = function(lines, lh) {
//   return this.selectAll('tspan')
//       .data(lines)
//       .enter()
//       .append('tspan')
//       .text(function(d) { return d; })
//       .attr('x', 0)
//       .attr('dy', function(d,i) { return i ? lh || 15 : 0; });
// };
// d3.wordwrap = function(line, maxCharactersPerLine) {
//   var w = line.split(' '),
//       lines = [],
//       words = [],
//       maxChars = maxCharactersPerLine || 20,
//       l = 0;
//   w.forEach(function(d) {
//       if (l+d.length > maxChars) {
//           lines.push(words.join(' '));
//           words.length = 0;
//           l = 0;
//       }
//       l += d.length;
//       words.push(d);
//   });
//   if (words.length) {
//       lines.push(words.join(' '));
//   }
//   return lines;
// };
// ... and the important addition. ⬇️⬇️⬇️

/**
 * appendSelect either selects a matching child element of your current
 * selection if one exists or appends that child and selects it. It's useful
 * for writing idempotent chart functions.
 *
 * Use it like this:
 *
 * selection.appendSelect(<query selector>)
 *
 * It can be chained like any normal d3 selection:
 *
 * const g = d3.select(myNode).appendSelect('g', 'viz-group');
 * g.appendSelect('rect')
 *   .attr('x', 0); etc.
 *
 * @param  {string} querySelector  String representation of element to be
 *                                 appended/selected, e.g., div.myClass, svg,
 *                                 button.myClass.anotherClass.
 * @return {object}     d3 selection of child element
 */


selection.prototype.appendSelect = function (querySelector) {
  // Test querySlector w/ classes
  if (!/^[a-zA-Z]+[0-9]?\.-?[_a-zA-Z][_a-zA-Z0-9.-]*[a-zA-Z0-9]*$/.test(querySelector)) {
    // Test querySelector just an element
    if (!/^[a-zA-Z]+[0-9]?$/.test(querySelector)) {
      throw new Error("Invalid query selector passed to appendSelect. Must be an element with zero or more classes: \"div.myClass.another\". Got \"".concat(querySelector, "\"."));
    }
  }

  var element = querySelector.split('.')[0];
  var classes = querySelector.split('.').slice(1);
  var selection = this.select(querySelector);
  if (!selection.empty()) return selection;
  selection = this.append(element);
  classes.forEach(function (cls) {
    return selection.classed(cls, true);
  });
  return selection;
};

var ChartComponent = /*#__PURE__*/function () {
  function ChartComponent(selector, props, data) {
    _classCallCheck(this, ChartComponent);

    _defineProperty(this, "defaultProps", {});

    _defineProperty(this, "defaultData", []);

    this.selection(selector);
    this.props(props);
    this.data(data);
  }
  /**
   * Getter/setter for DOM node chart is drawn into
   * @param  {String or Element} selector
   */


  _createClass(ChartComponent, [{
    key: "selection",
    value: function selection(selector) {
      if (!selector) return this._selection;

      if (!(selector instanceof Element) && typeof selector !== 'string') {
        throw new ErrorSelectorType(this.constructor.name);
      }

      this._selection = d3.select(selector);
      return this;
    }
    /**
     * Default props
     * @type {Object}
     */

  }, {
    key: "props",

    /**
     * Getter/setter for props object
     * @param  {Object} obj props
     */
    value: function props(obj) {
      if (!obj) return this._props || this.defaultProps;

      if (!(obj instanceof Object)) {
        throw new ErrorPropsType(this.constructor.name);
      }

      this._props = merge(this._props || this.defaultProps, obj);
      return this;
    }
    /**
     * Default data
     * @type {Array}
     */

  }, {
    key: "data",

    /**
     * Getter/setter for chart data
     * @param  {Array} arr data
     */
    value: function data(arr) {
      if (!arr) return this._data || this.defaultData;

      if (!(arr instanceof Array)) {
        throw new ErrorDataType(this.constructor.name);
      }

      this._data = arr;
      return this;
    }
  }, {
    key: "draw",
    value: function draw() {
      throw new ErrorDrawMethodUndefined(this.constructor.name);
    }
  }]);

  return ChartComponent;
}();

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

function getDates(startDate, stopDate) {
  var dateArray = new Array();
  var currentDate = startDate;

  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate));
    currentDate = currentDate.addDays(1);
  }

  return dateArray;
}

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

var defaultData = [
	{
		date: "2019-12-31",
		count: 27,
		reporting: [
			1,
			240
		]
	},
	{
		date: "2020-01-03",
		count: 17,
		reporting: [
			1,
			240
		]
	},
	{
		date: "2020-01-05",
		count: 15,
		reporting: [
			1,
			240
		]
	},
	{
		date: "2020-01-09",
		count: 0,
		reporting: [
			152,
			240
		]
	},
	{
		date: "2020-01-10",
		count: -18,
		reporting: [
			1,
			240
		]
	},
	{
		date: "2020-01-11",
		count: 0,
		reporting: [
			1,
			240
		]
	},
	{
		date: "2020-01-12",
		count: 0,
		reporting: [
			1,
			240
		]
	},
	{
		date: "2020-01-13",
		count: 1,
		reporting: [
			4,
			240
		]
	},
	{
		date: "2020-01-14",
		count: 0,
		reporting: [
			1,
			240
		]
	},
	{
		date: "2020-01-15",
		count: 0,
		reporting: [
			1,
			240
		]
	},
	{
		date: "2020-01-16",
		count: 5,
		reporting: [
			2,
			240
		]
	},
	{
		date: "2020-01-17",
		count: 18,
		reporting: [
			2,
			240
		]
	},
	{
		date: "2020-01-18",
		count: 59,
		reporting: [
			1,
			240
		]
	},
	{
		date: "2020-01-19",
		count: 78,
		reporting: [
			2,
			240
		]
	},
	{
		date: "2020-01-20",
		count: 93,
		reporting: [
			1,
			240
		]
	},
	{
		date: "2020-01-21",
		count: 151,
		reporting: [
			3,
			240
		]
	},
	{
		date: "2020-01-22",
		count: 135,
		reporting: [
			4,
			240
		]
	},
	{
		date: "2020-01-23",
		count: 264,
		reporting: [
			5,
			240
		]
	},
	{
		date: "2020-01-24",
		count: 469,
		reporting: [
			9,
			240
		]
	},
	{
		date: "2020-01-25",
		count: 700,
		reporting: [
			5,
			240
		]
	},
	{
		date: "2020-01-26",
		count: 786,
		reporting: [
			10,
			240
		]
	},
	{
		date: "2020-01-27",
		count: 1778,
		reporting: [
			8,
			240
		]
	},
	{
		date: "2020-01-28",
		count: 1480,
		reporting: [
			9,
			240
		]
	},
	{
		date: "2020-01-29",
		count: 1754,
		reporting: [
			9,
			240
		]
	},
	{
		date: "2020-01-30",
		count: 2003,
		reporting: [
			15,
			240
		]
	},
	{
		date: "2020-01-31",
		count: 2130,
		reporting: [
			14,
			240
		]
	},
	{
		date: "2020-02-01",
		count: 2603,
		reporting: [
			10,
			240
		]
	},
	{
		date: "2020-02-02",
		count: 2836,
		reporting: [
			9,
			240
		]
	},
	{
		date: "2020-02-03",
		count: 3239,
		reporting: [
			5,
			240
		]
	},
	{
		date: "2020-02-04",
		count: 3925,
		reporting: [
			13,
			240
		]
	},
	{
		date: "2020-02-05",
		count: 3725,
		reporting: [
			9,
			240
		]
	},
	{
		date: "2020-02-06",
		count: 3202,
		reporting: [
			11,
			240
		]
	},
	{
		date: "2020-02-07",
		count: 3397,
		reporting: [
			7,
			240
		]
	},
	{
		date: "2020-02-08",
		count: 2678,
		reporting: [
			9,
			240
		]
	},
	{
		date: "2020-02-09",
		count: 3001,
		reporting: [
			10,
			240
		]
	},
	{
		date: "2020-02-10",
		count: 2546,
		reporting: [
			7,
			240
		]
	},
	{
		date: "2020-02-11",
		count: 2070,
		reporting: [
			8,
			240
		]
	},
	{
		date: "2020-02-12",
		count: 15158,
		reporting: [
			6,
			240
		]
	},
	{
		date: "2020-02-13",
		count: 4110,
		reporting: [
			7,
			240
		]
	},
	{
		date: "2020-02-14",
		count: 2661,
		reporting: [
			5,
			240
		]
	},
	{
		date: "2020-02-15",
		count: 2098,
		reporting: [
			7,
			240
		]
	},
	{
		date: "2020-02-16",
		count: 2132,
		reporting: [
			7,
			240
		]
	},
	{
		date: "2020-02-17",
		count: 2004,
		reporting: [
			7,
			240
		]
	},
	{
		date: "2020-02-18",
		count: 1866,
		reporting: [
			5,
			240
		]
	},
	{
		date: "2020-02-19",
		count: 526,
		reporting: [
			7,
			240
		]
	},
	{
		date: "2020-02-20",
		count: 996,
		reporting: [
			8,
			240
		]
	},
	{
		date: "2020-02-21",
		count: 1070,
		reporting: [
			14,
			240
		]
	},
	{
		date: "2020-02-22",
		count: 904,
		reporting: [
			9,
			240
		]
	},
	{
		date: "2020-02-23",
		count: 517,
		reporting: [
			9,
			240
		]
	},
	{
		date: "2020-02-24",
		count: 930,
		reporting: [
			16,
			240
		]
	},
	{
		date: "2020-02-25",
		count: 677,
		reporting: [
			21,
			240
		]
	},
	{
		date: "2020-02-26",
		count: 936,
		reporting: [
			26,
			240
		]
	},
	{
		date: "2020-02-27",
		count: 1330,
		reporting: [
			30,
			240
		]
	},
	{
		date: "2020-02-28",
		count: 2113,
		reporting: [
			38,
			240
		]
	},
	{
		date: "2020-02-29",
		count: 1408,
		reporting: [
			34,
			240
		]
	},
	{
		date: "2020-03-01",
		count: 2460,
		reporting: [
			39,
			240
		]
	},
	{
		date: "2020-03-02",
		count: 1861,
		reporting: [
			45,
			240
		]
	},
	{
		date: "2020-03-03",
		count: 2190,
		reporting: [
			35,
			240
		]
	},
	{
		date: "2020-03-04",
		count: 2322,
		reporting: [
			47,
			240
		]
	},
	{
		date: "2020-03-05",
		count: 2872,
		reporting: [
			49,
			240
		]
	},
	{
		date: "2020-03-06",
		count: 3781,
		reporting: [
			66,
			240
		]
	},
	{
		date: "2020-03-07",
		count: 3950,
		reporting: [
			74,
			240
		]
	},
	{
		date: "2020-03-08",
		count: 3973,
		reporting: [
			74,
			240
		]
	},
	{
		date: "2020-03-09",
		count: 4550,
		reporting: [
			79,
			240
		]
	},
	{
		date: "2020-03-10",
		count: 4893,
		reporting: [
			85,
			240
		]
	},
	{
		date: "2020-03-11",
		count: 6875,
		reporting: [
			79,
			240
		]
	},
	{
		date: "2020-03-12",
		count: 8439,
		reporting: [
			84,
			240
		]
	},
	{
		date: "2020-03-13",
		count: 10969,
		reporting: [
			116,
			240
		]
	},
	{
		date: "2020-03-14",
		count: 10773,
		reporting: [
			105,
			240
		]
	},
	{
		date: "2020-03-15",
		count: 12872,
		reporting: [
			108,
			240
		]
	},
	{
		date: "2020-03-16",
		count: 13249,
		reporting: [
			114,
			240
		]
	},
	{
		date: "2020-03-17",
		count: 15850,
		reporting: [
			122,
			240
		]
	},
	{
		date: "2020-03-18",
		count: 20673,
		reporting: [
			137,
			240
		]
	},
	{
		date: "2020-03-19",
		count: 26397,
		reporting: [
			133,
			240
		]
	},
	{
		date: "2020-03-20",
		count: 29854,
		reporting: [
			133,
			240
		]
	},
	{
		date: "2020-03-21",
		count: 30188,
		reporting: [
			144,
			240
		]
	},
	{
		date: "2020-03-22",
		count: 33043,
		reporting: [
			185,
			240
		]
	},
	{
		date: "2020-03-23",
		count: 39110,
		reporting: [
			147,
			240
		]
	},
	{
		date: "2020-03-24",
		count: 43551,
		reporting: [
			155,
			240
		]
	},
	{
		date: "2020-03-25",
		count: 49948,
		reporting: [
			156,
			240
		]
	},
	{
		date: "2020-03-26",
		count: 60635,
		reporting: [
			150,
			240
		]
	},
	{
		date: "2020-03-27",
		count: 64576,
		reporting: [
			147,
			240
		]
	},
	{
		date: "2020-03-28",
		count: 66473,
		reporting: [
			146,
			240
		]
	},
	{
		date: "2020-03-29",
		count: 57398,
		reporting: [
			195,
			240
		]
	},
	{
		date: "2020-03-30",
		count: 57112,
		reporting: [
			199,
			240
		]
	},
	{
		date: "2020-03-31",
		count: 73037,
		reporting: [
			201,
			240
		]
	},
	{
		date: "2020-04-01",
		count: 84074,
		reporting: [
			231,
			240
		]
	},
	{
		date: "2020-04-02",
		count: 73885,
		reporting: [
			234,
			240
		]
	},
	{
		date: "2020-04-03",
		count: 88210,
		reporting: [
			233,
			240
		]
	},
	{
		date: "2020-04-04",
		count: 80294,
		reporting: [
			234,
			240
		]
	},
	{
		date: "2020-04-05",
		count: 69481,
		reporting: [
			235,
			240
		]
	},
	{
		date: "2020-04-06",
		count: 67928,
		reporting: [
			233,
			240
		]
	},
	{
		date: "2020-04-07",
		count: 73930,
		reporting: [
			233,
			240
		]
	},
	{
		date: "2020-04-08",
		count: 83751,
		reporting: [
			235,
			240
		]
	},
	{
		date: "2020-04-09",
		count: 85877,
		reporting: [
			236,
			240
		]
	},
	{
		date: "2020-04-10",
		count: 92203,
		reporting: [
			239,
			240
		]
	},
	{
		date: "2020-04-11",
		count: 79497,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-04-12",
		count: 99357,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-04-13",
		count: 73396,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-04-14",
		count: 74802,
		reporting: [
			239,
			240
		]
	},
	{
		date: "2020-04-15",
		count: 82515,
		reporting: [
			239,
			240
		]
	},
	{
		date: "2020-04-16",
		count: 90467,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-04-17",
		count: 87685,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-04-18",
		count: 80336,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-04-19",
		count: 73794,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-04-20",
		count: 75537,
		reporting: [
			239,
			240
		]
	},
	{
		date: "2020-04-21",
		count: 73573,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-04-22",
		count: 80088,
		reporting: [
			239,
			240
		]
	},
	{
		date: "2020-04-23",
		count: 83217,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-04-24",
		count: 104983,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-04-25",
		count: 89821,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-04-26",
		count: 73460,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-04-27",
		count: 66486,
		reporting: [
			239,
			240
		]
	},
	{
		date: "2020-04-28",
		count: 77960,
		reporting: [
			239,
			240
		]
	},
	{
		date: "2020-04-29",
		count: 74785,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-04-30",
		count: 81708,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-05-01",
		count: 90615,
		reporting: [
			210,
			240
		]
	},
	{
		date: "2020-05-02",
		count: 83403,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-05-03",
		count: 77241,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-05-04",
		count: 75094,
		reporting: [
			223,
			240
		]
	},
	{
		date: "2020-05-05",
		count: 82824,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-05-06",
		count: 88337,
		reporting: [
			235,
			240
		]
	},
	{
		date: "2020-05-07",
		count: 94603,
		reporting: [
			237,
			240
		]
	},
	{
		date: "2020-05-08",
		count: 92149,
		reporting: [
			237,
			240
		]
	},
	{
		date: "2020-05-09",
		count: 90129,
		reporting: [
			233,
			240
		]
	},
	{
		date: "2020-05-10",
		count: 77640,
		reporting: [
			234,
			240
		]
	},
	{
		date: "2020-05-11",
		count: 71273,
		reporting: [
			234,
			240
		]
	},
	{
		date: "2020-05-12",
		count: 80068,
		reporting: [
			240,
			240
		]
	},
	{
		date: "2020-05-13",
		count: 85319,
		reporting: [
			224,
			240
		]
	},
	{
		date: "2020-05-14",
		count: 96931,
		reporting: [
			236,
			240
		]
	},
	{
		date: "2020-05-15",
		count: 98177,
		reporting: [
			236,
			240
		]
	},
	{
		date: "2020-05-16",
		count: 91553,
		reporting: [
			230,
			240
		]
	},
	{
		date: "2020-05-17",
		count: 81397,
		reporting: [
			234,
			240
		]
	},
	{
		date: "2020-05-18",
		count: 87010,
		reporting: [
			235,
			240
		]
	},
	{
		date: "2020-05-19",
		count: 96173,
		reporting: [
			234,
			240
		]
	},
	{
		date: "2020-05-20",
		count: 100288,
		reporting: [
			235,
			240
		]
	},
	{
		date: "2020-05-21",
		count: 105220,
		reporting: [
			234,
			240
		]
	},
	{
		date: "2020-05-22",
		count: 107997,
		reporting: [
			226,
			240
		]
	},
	{
		date: "2020-05-23",
		count: 99989,
		reporting: [
			210,
			240
		]
	},
	{
		date: "2020-05-24",
		count: 95717,
		reporting: [
			223,
			240
		]
	},
	{
		date: "2020-05-25",
		count: 87883,
		reporting: [
			227,
			240
		]
	},
	{
		date: "2020-05-26",
		count: 96109,
		reporting: [
			227,
			240
		]
	},
	{
		date: "2020-05-27",
		count: 103270,
		reporting: [
			229,
			240
		]
	},
	{
		date: "2020-05-28",
		count: 117574,
		reporting: [
			224,
			240
		]
	},
	{
		date: "2020-05-29",
		count: 120747,
		reporting: [
			230,
			240
		]
	},
	{
		date: "2020-05-30",
		count: 126234,
		reporting: [
			226,
			240
		]
	},
	{
		date: "2020-05-31",
		count: 107197,
		reporting: [
			229,
			240
		]
	},
	{
		date: "2020-06-01",
		count: 101248,
		reporting: [
			228,
			240
		]
	},
	{
		date: "2020-06-02",
		count: 113690,
		reporting: [
			227,
			240
		]
	},
	{
		date: "2020-06-03",
		count: 119258,
		reporting: [
			219,
			240
		]
	},
	{
		date: "2020-06-04",
		count: 131362,
		reporting: [
			210,
			240
		]
	},
	{
		date: "2020-06-05",
		count: 134488,
		reporting: [
			224,
			240
		]
	},
	{
		date: "2020-06-06",
		count: 126289,
		reporting: [
			233,
			240
		]
	},
	{
		date: "2020-06-07",
		count: 111599,
		reporting: [
			231,
			240
		]
	},
	{
		date: "2020-06-08",
		count: 107925,
		reporting: [
			226,
			240
		]
	},
	{
		date: "2020-06-09",
		count: 124445,
		reporting: [
			226,
			240
		]
	},
	{
		date: "2020-06-10",
		count: 134664,
		reporting: [
			227,
			240
		]
	},
	{
		date: "2020-06-11",
		count: 138214,
		reporting: [
			228,
			240
		]
	},
	{
		date: "2020-06-12",
		count: 138776,
		reporting: [
			222,
			240
		]
	},
	{
		date: "2020-06-13",
		count: 134424,
		reporting: [
			226,
			240
		]
	},
	{
		date: "2020-06-14",
		count: 124975,
		reporting: [
			226,
			240
		]
	},
	{
		date: "2020-06-15",
		count: 121839,
		reporting: [
			230,
			240
		]
	},
	{
		date: "2020-06-16",
		count: 139756,
		reporting: [
			229,
			240
		]
	},
	{
		date: "2020-06-17",
		count: 174916,
		reporting: [
			229,
			240
		]
	},
	{
		date: "2020-06-18",
		count: 141768,
		reporting: [
			236,
			240
		]
	},
	{
		date: "2020-06-19",
		count: 178571,
		reporting: [
			228,
			240
		]
	},
	{
		date: "2020-06-20",
		count: 160709,
		reporting: [
			231,
			240
		]
	},
	{
		date: "2020-06-21",
		count: 129686,
		reporting: [
			223,
			240
		]
	},
	{
		date: "2020-06-22",
		count: 139521,
		reporting: [
			233,
			240
		]
	},
	{
		date: "2020-06-23",
		count: 162169,
		reporting: [
			231,
			240
		]
	},
	{
		date: "2020-06-24",
		count: 172363,
		reporting: [
			229,
			240
		]
	},
	{
		date: "2020-06-25",
		count: 180092,
		reporting: [
			232,
			240
		]
	},
	{
		date: "2020-06-26",
		count: 190878,
		reporting: [
			227,
			240
		]
	},
	{
		date: "2020-06-27",
		count: 177562,
		reporting: [
			214,
			240
		]
	},
	{
		date: "2020-06-28",
		count: 164666,
		reporting: [
			219,
			240
		]
	},
	{
		date: "2020-06-29",
		count: 157603,
		reporting: [
			228,
			240
		]
	},
	{
		date: "2020-06-30",
		count: 176552,
		reporting: [
			230,
			240
		]
	},
	{
		date: "2020-07-01",
		count: 217831,
		reporting: [
			236,
			240
		]
	},
	{
		date: "2020-07-02",
		count: 206347,
		reporting: [
			235,
			240
		]
	},
	{
		date: "2020-07-03",
		count: 205284,
		reporting: [
			207,
			240
		]
	},
	{
		date: "2020-07-04",
		count: 191278,
		reporting: [
			200,
			240
		]
	},
	{
		date: "2020-07-05",
		count: 177836,
		reporting: [
			195,
			240
		]
	},
	{
		date: "2020-07-06",
		count: 155801,
		reporting: [
			202,
			240
		]
	},
	{
		date: "2020-07-07",
		count: 24244,
		reporting: [
			34,
			240
		]
	}
];

var dateParse = d3.timeParse("%Y-%m-%d");
var dateFormat = d3.timeFormat("%b %e");
var dateFormat_tt = d3.timeFormat("%B %e");
var numberFormat_tt = d3.format(",");

var WeeklyAverage = /*#__PURE__*/function (_ChartComponent) {
  _inherits(WeeklyAverage, _ChartComponent);

  var _super = _createSuper(WeeklyAverage);

  function WeeklyAverage() {
    var _this;

    _classCallCheck(this, WeeklyAverage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "defaultProps", {
      stroke: 'steelblue',
      strokeWidth: 2.5,
      fill: '#eee',
      height: 200,
      avg_days: 7,
      annotations: [],
      population: false,
      bars: true,
      padding: 0,
      labels: false,
      variable_name: 'cases',
      text: {
        daily_numbers: 'Daily new ',
        tooltip_suffix: ' new ',
        avg: '-day average',
        per_pop_tt_suffix: ' per 100k people in the population'
      }
    });

    _defineProperty(_assertThisInitialized(_this), "defaultData", defaultData);

    return _this;
  }

  _createClass(WeeklyAverage, [{
    key: "draw",
    value: function draw() {
      var data = this.data();
      var props = this.props();
      var node = this.selection().node();
      var margin = {
        left: 20,
        right: 50,
        top: 10,
        bottom: 30
      };
      data.forEach(function (d, i) {
        d.use_count = props.population ? d.count / props.population * 100000 : d.count;
        d.mean = d3.mean(data.slice(i - props.avg_days, i), function (d) {
          return +d.count;
        }); // avg calc

        d.use_mean = props.population ? d.mean / props.population * 100000 : d.mean;
      });

      var _node$getBoundingClie = node.getBoundingClientRect(),
          width = _node$getBoundingClie.width;

      var transition = d3.transition().duration(750);
      var g = this.selection().appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width).attr('height', props.height).appendSelect('g').attr('transform', "translate(".concat(margin.left, ", ").concat(margin.top, ")"));
      var dateList = getDates(dateParse(data[0].date), dateParse(data[data.length - 1].date)); // needs reworking
      // x scale

      var scaleX = d3.scaleBand().round(false).range([0, width - margin.right - margin.left]).domain(dateList).padding(props.padding); // y scale

      var scaleY = d3.scaleLinear().range([props.height - margin.bottom - margin.top, 0]).domain(d3.extent(data, function (d) {
        return +d.use_count;
      })); // line

      var line = d3.line().x(function (d) {
        return scaleX(dateParse(d.date));
      }).y(function (d) {
        return scaleY(d.use_mean ? d.use_mean : 0);
      });
      g.appendSelect('g.axis--y').attr('class', 'axis--y axis').transition(transition).attr('transform', "translate(".concat(width - margin.right - margin.left, ",0)")).call(d3.axisRight(scaleY).ticks(props.bars ? 3 : 1));
      g.appendSelect('g.axis--x').attr('class', 'axis--x axis').transition(transition).attr('transform', "translate(0,".concat(props.height - margin.bottom - margin.top, ")")).call(d3.axisBottom(scaleX).tickValues([dateList[0], dateList[dateList.length - 1]]).tickFormat(dateFormat));

      if (props.bars) {
        var bars = g.appendSelect('g.bars-container').selectAll('.bar').data(data, function (d, i) {
          return d.date;
        }); // for smooth data updation

        bars.enter().append('rect').attr('class', function (d) {
          return "bar d-".concat(d.date.replace(/-/g, ''));
        }).style('fill', props.fill).attr('height', function (d) {
          return props.height - margin.top - margin.bottom - scaleY(+d.use_count);
        }).attr('x', function (d, i) {
          return scaleX(dateParse(d.date));
        }).attr('y', function (d) {
          return scaleY(+d.use_count);
        }).attr('width', scaleX.bandwidth()).merge(bars).transition(transition).attr('height', function (d) {
          return props.height - margin.top - margin.bottom - scaleY(+d.use_count);
        }).attr('x', function (d, i) {
          return scaleX(dateParse(d.date));
        }).attr('y', function (d) {
          return scaleY(+d.use_count);
        }).attr('width', scaleX.bandwidth());
        bars.exit().transition(transition).attr('height', 0).remove();
        var bars_dummy = g.appendSelect('g.dummy-container').selectAll('.dummy').data(data, function (d, i) {
          return d.date;
        });
        bars_dummy.enter().append('rect').style('fill', 'white').attr('class', 'dummy').style('opacity', 0).attr('height', function (d) {
          return props.height;
        }).attr('x', function (d, i) {
          return scaleX(dateParse(d.date));
        }).attr('y', function (d) {
          return 0;
        }).attr('width', scaleX.bandwidth()).on('mouseover', showTooltip).on('mouseout', hideTooltip).merge(bars_dummy).transition(transition).attr('height', function (d) {
          return props.height;
        }).attr('x', function (d, i) {
          return scaleX(dateParse(d.date));
        }).attr('y', function (d) {
          return 0;
        }).attr('width', scaleX.bandwidth());
        bars_dummy.exit().transition(transition).attr('height', 0).remove();
        bars_dummy.on('mouseover', showTooltip).on('mouseout', hideTooltip);
      } // avg line


      var avg_line = g.selectAll('.avg-line').data([data]);
      avg_line.enter().append('path').attr('class', 'avg-line').merge(avg_line).transition(transition).attr('d', line).attr('fill', "none").attr('stroke', props.stroke).attr('stroke-width', props.strokeWidth); // LABELS

      if (props.labels) {
        var label_container = g.appendSelect('g.labels'); // avg label

        var avg_label = label_container.appendSelect('g.avg-label').attr('transform', "translate(".concat(scaleX(dateParse(data[14].date)), ",").concat(scaleY(data[14].use_mean) - props.height / 20, ")"));
        avg_label.appendSelect('line').attr('x1', 0).attr('x2', 0).attr('y1', props.height / 20).attr('y2', 0);
        avg_label.appendSelect('text').attr('dx', -10).attr('dy', -5).text("".concat(props.avg_days).concat(props.text.avg)); // new numbers label
        // GET MAX

        var max = d3.max(data, function (d) {
          return d.use_count;
        });
        var max_var = data.filter(function (d) {
          return d.use_count == max;
        })[0];
        var new_nos_label = label_container.appendSelect('g.new-nos-label').attr('transform', "translate(".concat(scaleX(dateParse(max_var.date)), ",").concat(scaleY(max_var.use_count), ")"));
        new_nos_label.appendSelect('line').attr('x1', -10).attr('x2', 0).attr('y1', 10).attr('y2', 10);
        new_nos_label.appendSelect('text').style('text-anchor', 'end').attr('dx', -13).attr('dy', 12).text("".concat(props.text.daily_numbers + props.variable_name));
      } // tooltip


      var tooltipBox = this.selection().appendSelect('div.custom-tooltip');
      var tt_inner = tooltipBox.appendSelect('div.tooltip-inner');

      function showTooltip(obj) {
        var tooltip_text_add = props.population ? props.text.per_pop_tt_suffix : '';
        var formatFunction = props.population ? round : numberFormat_tt;
        d3.select(".bar.d-".concat(obj.date.replace(/-/g, ""))).classed('active', true);
        var coords = [];
        coords[0] = scaleX(dateParse(obj.date)) + margin.left + scaleX.bandwidth() / 2;
        coords[1] = scaleY(obj.use_count) + margin.top;
        var q = getTooltipType(coords, [props.height, width]);
        tooltipBox.classed('tooltip-active', true).classed("tooltip-ne tooltip-s tooltip-n tooltip-sw tooltip-nw tooltip-se", false).style('left', "".concat(coords[0], "px")).style('top', "".concat(coords[1], "px")).classed("tooltip-".concat(q), true);
        tt_inner.appendSelect('div.tt-header').text(dateFormat_tt(dateParse(obj.date)));
        tt_inner.appendSelect('div.tt-row').text(formatFunction(obj.use_count) + props.text.tooltip_suffix + props.variable_name + tooltip_text_add);
      }

      function hideTooltip() {
        d3.select('.bar.active').classed('active', false);
        tooltipBox.classed('tooltip-active', false);
      }

      function getTooltipType(coords, size) {
        var l = [];
        var ns_threshold = size[1] < 500 ? 4 : 2;

        if (coords[1] > size[1] / ns_threshold) {
          l.push('s');
        } else {
          l.push('n');
        }

        if (coords[0] > size[0] / 2) {
          l.push('e');
        }

        if (coords[0] < size[0] / 2) {
          l.push('w');
        }

        return l.join('');
      } // Annotations
      // Reposition if already on the page


      var annotation_check = g.selectAll('g.annotations-container').node() ? true : false;
      props.annotations = props.annotations.filter(function (d) {
        if (scaleX(dateParse(d.date)) && d.text.length > 1) {
          return d;
        }
      });

      if (props.annotations.length > 0 || annotation_check) {
        var annotations_container = g.appendSelect('g.annotations-container').selectAll('.annotation').data(props.annotations, function (d, i) {
          return d.date;
        });
        var annotation = annotations_container.enter().append('g').attr('class', function (d) {
          return d["class"] ? "annotation ".concat(d["class"]) : 'annotation';
        }).attr('transform', function (d) {
          return "translate(".concat(scaleX(dateParse(d.date)), ",0)");
        });
        annotations_container.merge(annotations_container).transition(transition).attr('transform', function (d) {
          return "translate(".concat(scaleX(dateParse(d.date)), ",0)");
        });
        annotation.appendSelect('line').attr('x1', 0).attr('x2', 0).attr('y2', function (d) {
          if (scaleX(dateParse(d.date)) > width / 2) {
            return props.height / 6 * 1.5 - 10;
          } else {
            return props.height / 6 * 4 - 10;
          }
        }).attr('y1', props.height - margin.top - margin.bottom);
        var text_container = annotation.appendSelect('g.text-container').attr('transform', function (d) {
          if (scaleX(dateParse(d.date)) > width / 2) {
            return "translate(-8,".concat(props.height / 6 * 1.5, ")");
          } else {
            return "translate(8,".concat(props.height / 6 * 4, ")");
          }
        }).attr('text-anchor', function (d) {
          if (scaleX(dateParse(d.date)) > width / 2) {
            return 'end';
          } else {
            return 'start';
          }
        });
        text_container.appendSelect('text.date').text(function (d) {
          return dateFormat_tt(dateParse(d.date));
        });
        text_container.appendSelect('text.text').attr('dy', 16).text(function (d) {
          return d.text;
        }); // .text('')
        // .tspans( function(d){return d3.wordwrap(d.text, linewrap)}, lineheight)

        annotations_container.exit().remove();
      }

      return this;
    }
  }]);

  return WeeklyAverage;
}(ChartComponent);

export default WeeklyAverage;
