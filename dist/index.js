'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var d3 = require('d3');
var merge = _interopDefault(require('lodash/merge'));
var Mustache = _interopDefault(require('mustache'));

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

d3.selection.prototype.moveToFront = function () {
  return this.each(function () {
    this.parentNode.appendChild(this);
  });
};

d3.selection.prototype.moveToBack = function () {
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


d3.selection.prototype.appendSelect = function (querySelector) {
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

// import defaultData from './defaultData.json';

var dateParse = d3.timeParse('%Y-%m-%d');
var dateFormat = d3.timeFormat('%b %e');
var dateFormat_tt = d3.timeFormat('%B %e');
var numberFormat_tt = d3.format(',');

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
      stroke: '#eec331',
      strokeWidth: 2.5,
      fill: 'rgba(255, 255, 255, 0.3)',
      height: 200,
      avg_days: 7,
      annotations: [],
      population: false,
      bars: true,
      padding: 0,
      labels: false,
      x_axis: true,
      variable_name: 'cases',
      date_range: [],
      left_y_axis: false,
      margin: {
        left: 20,
        right: 50,
        top: 10,
        bottom: 30
      },
      text: {
        daily_numbers: 'Daily new ',
        tooltip_suffix: ' new ',
        avg: '{{ average }}-day average',
        per_pop_tt_suffix: ' per 100k people in the population',
        subhed: '',
        no_data: 'No reported '
      }
    });

    _defineProperty(_assertThisInitialized(_this), "defaultData", []);

    return _this;
  }

  _createClass(WeeklyAverage, [{
    key: "draw",
    value: function draw() {
      var data = this.data();
      var props = this.props();
      var node = this.selection().node();
      var dateList = [];
      var yRange;

      var _node$getBoundingClie = node.getBoundingClientRect(),
          width = _node$getBoundingClie.width;

      var transition = d3.transition().duration(750);

      if (props.text.subhed.length > 0) {
        this.selection().appendSelect('h6.chart-title').text(props.text.subhed);
      }

      var gOuter = this.selection().appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width).attr('height', props.height);
      var g = gOuter.appendSelect('g').attr('transform', "translate(".concat(props.margin.left, ", ").concat(props.margin.top, ")"));

      if (d3.sum(data, function (d) {
        return d.count;
      }) > 0) {
        var showTooltip = function showTooltip(obj) {
          var tooltip_text_add = props.population ? props.text.per_pop_tt_suffix : '';
          var formatFunction = props.population ? round : numberFormat_tt;
          g.select(".bar.d-".concat(obj.date.replace(/-/g, ''))).classed('active', true);
          var coords = [];
          coords[0] = scaleX(dateParse(obj.date)) + props.margin.left + scaleX.bandwidth() / 2;
          coords[1] = scaleY(obj.use_count) + props.margin.top;
          var q = getTooltipType(coords, [props.height, width]);
          tooltipBox.classed('tooltip-active', true).classed('tooltip-ne tooltip-s tooltip-n tooltip-sw tooltip-nw tooltip-se', false).style('left', "".concat(coords[0], "px")).style('top', "".concat(coords[1], "px")).classed("tooltip-".concat(q), true);
          tt_inner.appendSelect('div.tt-header').text(dateFormat_tt(dateParse(obj.date)));
          tt_inner.appendSelect('div.tt-row').text(formatFunction(obj.use_count) + props.text.tooltip_suffix + props.variable_name + tooltip_text_add);
        };

        var hideTooltip = function hideTooltip() {
          g.select('.bar.active').classed('active', false);
          tooltipBox.classed('tooltip-active', false);
        };

        var getTooltipType = function getTooltipType(coords, size) {
          var l = [];
          var ns_threshold = 4;

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
        }; // Annotations
        // Reposition if already on the page


        gOuter.select('.no-data').remove();
        data.forEach(function (d, i) {
          d.use_count = props.population ? d.count / props.population * 100000 : d.count;
          d.use_count = d.use_count < 0 ? 0 : d.use_count;
          d.mean = d3.mean(data.slice(i - props.avg_days, i), function (d) {
            return +d.count;
          }); // avg calc

          d.use_mean = props.population ? d.mean / props.population * 100000 : d.mean;
          d.use_mean = d.use_mean < 0 ? 0 : d.use_mean;
        });

        if (props.date_range.length > 1) {
          var startDate = dateParse(props.date_range[0]);
          var endDate = dateParse(props.date_range[1]);

          if (startDate < endDate && endDate <= d3.max(data, function (d) {
            return dateParse(d.date);
          })) {
            data = data.filter(function (d) {
              return dateParse(d.date) >= startDate && dateParse(d.date) <= endDate;
            });
            dateList = getDates(startDate, endDate);
          } else {
            dateList = getDates(dateParse(data[0].date), dateParse(data[data.length - 1].date));
          }
        } else {
          dateList = getDates(dateParse(data[0].date), dateParse(data[data.length - 1].date));
        } // x scale


        var scaleX = d3.scaleBand().round(false).range([0, width - props.margin.right - props.margin.left]).domain(dateList).padding(props.padding);

        if (props.bars) {
          yRange = d3.extent(data, function (d) {
            return +d.use_count;
          });
        } else {
          yRange = d3.extent(data, function (d) {
            return +d.use_mean;
          });
        } // y scale


        var scaleY = d3.scaleLinear().range([props.height - props.margin.bottom - props.margin.top, 0]).domain(yRange); // line

        var line = d3.line().x(function (d) {
          return scaleX(dateParse(d.date));
        }).y(function (d) {
          return scaleY(d.use_mean ? d.use_mean : 0);
        }).curve(d3.curveMonotoneX);

        if (props.x_axis) {
          g.appendSelect('g.axis--x').attr('class', 'axis--x axis').transition(transition).attr('transform', "translate(0,".concat(props.height - props.margin.bottom - props.margin.top, ")")).call(d3.axisBottom(scaleX).tickValues([dateList[0], dateList[dateList.length - 1]]).tickFormat(dateFormat));
        }

        if (props.bars) {
          var bars = g.appendSelect('g.bars-container').selectAll('.bar').data(data, function (d, i) {
            return d.date;
          }); // for smooth data updation

          bars.enter().append('rect').attr('class', function (d) {
            return "bar d-".concat(d.date.replace(/-/g, ''));
          }).style('fill', props.fill).attr('height', function (d) {
            return scaleY(0) - scaleY(+d.use_count);
          }).attr('x', function (d, i) {
            return scaleX(dateParse(d.date));
          }).attr('y', function (d) {
            return scaleY(+d.use_count);
          }).attr('width', scaleX.bandwidth()).merge(bars).transition(transition).attr('height', function (d) {
            return scaleY(0) - scaleY(+d.use_count);
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
        avg_line.enter().append('path').attr('class', 'avg-line').merge(avg_line).transition(transition).attr('d', line).attr('fill', 'none').attr('stroke', props.stroke).attr('stroke-width', props.strokeWidth); // LABELS

        if (props.labels) {
          var label_container = g.appendSelect('g.labels'); // avg label

          var avg_label = label_container.appendSelect('g.avg-label').attr('transform', "translate(".concat(scaleX(dateParse(data[props.avg_days].date)), ",").concat(scaleY(data[props.avg_days].use_mean) - props.height / 20, ")"));
          avg_label.appendSelect('line').attr('x1', 0).attr('x2', 0).attr('y1', props.height / 20).attr('y2', 0);
          avg_label.appendSelect('text').attr('dx', -10).attr('dy', -5).style('text-anchor', 'middle').text(Mustache.render(props.text.avg, {
            average: props.avg_days
          })); // new numbers label
          // GET MAX

          if (props.bars) {
            var max = d3.max(data, function (d) {
              return d.use_count;
            });
            var max_var = data.filter(function (d) {
              return d.use_count == max;
            })[0];
            var new_nos_label = label_container.appendSelect('g.new-nos-label').attr('transform', "translate(".concat(scaleX(dateParse(max_var.date)), ",").concat(scaleY(max_var.use_count), ")"));
            new_nos_label.appendSelect('line').attr('x1', -10).attr('x2', 0).attr('y1', 10).attr('y2', 10);
            new_nos_label.appendSelect('text').style('text-anchor', 'end').attr('dx', -13).attr('dy', 12).text("".concat(props.text.daily_numbers + props.variable_name));
          }
        }

        if (props.left_y_axis) {
          var _label_container = g.appendSelect('g.labels');

          var _max = d3.max(data, function (d) {
            return d.use_mean;
          });

          var _max_var = data.filter(function (d) {
            return d.use_mean === _max;
          })[0];
          var max_plot_val = round(_max_var.use_mean, 0);

          var _new_nos_label = _label_container.appendSelect('g.new-nos-label').attr('transform', "translate(".concat(scaleX(dateParse(_max_var.date)), ",").concat(scaleY(max_plot_val), ")"));

          _new_nos_label.appendSelect('line').attr('x1', -10).attr('x2', 0).attr('y1', 0).attr('y2', 0);

          _new_nos_label.appendSelect('text').style('text-anchor', 'end').attr('dx', -10).attr('dy', 4).text(numberFormat_tt(max_plot_val));
        } else {
          var ticks;

          if (yRange[1] === 2) {
            ticks = 2;
          } else if (!props.bars || yRange[1] === 1) {
            ticks = 1;
          } else {
            ticks = 3;
          }

          g.appendSelect('g.axis--y').attr('class', 'axis--y axis').transition(transition).attr('transform', "translate(".concat(width - props.margin.right - props.margin.left, ",0)")).call(d3.axisRight(scaleY).ticks(ticks));
          g.select('.axis--y').selectAll('.tick').each(function (d) {
            if (d === 0) {
              this.remove();
            }
          });
        } // tooltip


        var tooltipBox = this.selection().appendSelect('div.custom-tooltip');
        var tt_inner = tooltipBox.appendSelect('div.tooltip-inner');
        var annotation_check = !!g.selectAll('g.annotations-container').node();
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
          }).attr('y1', props.height - props.margin.top - props.margin.bottom);
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
          });
          annotations_container.exit().remove();
        }
      } else {
        gOuter.appendSelect('p.no-data').text(props.text.no_data + '' + props.variable_name);
      }

      return this;
    }
  }]);

  return WeeklyAverage;
}(ChartComponent);

module.exports = WeeklyAverage;
