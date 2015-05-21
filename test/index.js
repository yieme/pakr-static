var expect = require('chai').expect,
    pakrStatic

describe('pakr-static', function() {
  it('should load', function(done) {
    pakrStatic = require('..')
    done()
  })

  var expected = ["hello", "world"]
  var expectedString = JSON.stringify(expected)
  it('should eaual ' + expectedString, function(done) {
    var test = pakrStatic(expected)
    var json = JSON.stringify(test)
    expect(json).to.equal(expectedString)
    done()
  })
})
