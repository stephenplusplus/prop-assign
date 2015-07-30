'use strict';

var assert = require('assert');

var propAssign = require('./index.js');

describe('propAssign', function () {
  it('should assign a property and value to an object', function () {
    var obj = {};
    propAssign('prop', 'value')(obj);
    assert.equal(obj.prop, 'value');
  });
});
