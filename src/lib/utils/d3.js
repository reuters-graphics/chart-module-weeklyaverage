import * as d3 from 'd3';

// Add a couple useful utilities to reorder elements...
d3.selection.prototype.moveToFront = function() {
  return this.each(function() {
    this.parentNode.appendChild(this);
  });
};

d3.selection.prototype.moveToBack = function() {
  return this.each(function() {
    const firstChild = this.parentNode.firstChild;
    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
};

// d3 webpack functions
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
d3.selection.prototype.appendSelect = function(querySelector) {
  // Test querySlector w/ classes
  if (!/^[a-zA-Z]+[0-9]?\.-?[_a-zA-Z][_a-zA-Z0-9.-]*[a-zA-Z0-9]*$/.test(querySelector)) {
    // Test querySelector just an element
    if (!/^[a-zA-Z]+[0-9]?$/.test(querySelector)) {
      throw new Error(`Invalid query selector passed to appendSelect. Must be an element with zero or more classes: "div.myClass.another". Got "${querySelector}".`);
    }
  }
  const element = querySelector.split('.')[0];
  const classes = querySelector.split('.').slice(1);

  let selection = this.select(querySelector);
  if (!selection.empty()) return selection;

  selection = this.append(element);
  classes.forEach(cls => selection.classed(cls, true));

  return selection;
};

d3.selection.prototype.transitionIf = function(conditional, transition) {
  return conditional ? this.transition(transition) : this;
};

export default d3;
