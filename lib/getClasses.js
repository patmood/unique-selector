'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClasses = getClasses;
exports.getClassSelectors = getClassSelectors;
/**
 * Get class names for an element
 *
 * @pararm { Element } el
 * @return { Array }
 */
function getClasses(el) {
  if (!el.hasAttribute('class')) {
    return [];
  }

  try {
    return Array.prototype.slice.call(el.classList);
  } catch (e) {
    var className = el.getAttribute('class');

    // remove duplicate and leading/trailing whitespaces
    className = className.trim().replace(/\s+/g, ' ');

    // split into separate classnames
    return className.split(' ');
  }
}

/**
 * Returns the Class selectors of the element
 * @param  { Object } element
 * @return { Array }
 */
function getClassSelectors(el) {
  var classList = getClasses(el).filter(Boolean);
  return classList.map(function (cl) {
    return '.' + cl;
  });
}