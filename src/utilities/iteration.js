/**
 * @module Data
 * @submodule Iteration
 * @for p5
 * @requires core
 */

'use strict';

var p5 = require('../core/core');
require('../core/error_helpers');

/**
 * Docs incomming
 *
 * @method range
 * @param  {Number} start
 * @param  {Number} end
 * @param  {Number} [step]
 * @return {Object}
 * @example
 *
 */
/**
 * @method range
 * @param  {Number} end
 * @return {Object}
 * @example
 *
 */
p5.prototype.range = function*(start, end, step) {
  if (!end) {
    end = start;
    start = 0;
  }
  if (!step) {
    step = 1;
  }
  var i = start;
  if(step < 0) {
    for(; i > end; i += step) {
      yield i;
    }
  } else {
    for(; i < end; i += step) {
      yield i;
    }
  }
};
