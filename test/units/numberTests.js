'use strict';

/* eslint-disable no-unused-vars */
const should = require('should');
/* eslint-enable no-unused-vars */

const cmp = require('../../src/compare');

suite('number x number', () => {
  /* eslint-disable no-new-wrappers */
  const LargeNumber = new Number(42),
        SmallNumber = new Number(23);
  /* eslint-enable no-new-wrappers */

  const largeNumber = 42,
        notANumber = Number.NaN,
        smallNumber = 23;

  suite('eq', () => {
    suite('equal => true', () => {
      test('number x number', done => {
        cmp.eq(smallNumber, smallNumber).should.equal(true);
        done();
      });

      test('number x Number()', done => {
        cmp.eq(smallNumber, SmallNumber).should.equal(true);
        done();
      });

      test('Number() x number', done => {
        cmp.eq(SmallNumber, smallNumber).should.equal(true);
        done();
      });

      test('Number() x Number()', done => {
        cmp.eq(SmallNumber, SmallNumber).should.equal(true);
        done();
      });
    });

    suite('not equal => false', () => {
      test('number x number', done => {
        cmp.eq(smallNumber, largeNumber).should.equal(false);
        done();
      });

      test('number x Number()', done => {
        cmp.eq(smallNumber, LargeNumber).should.equal(false);
        done();
      });

      test('Number() x number', done => {
        cmp.eq(SmallNumber, largeNumber).should.equal(false);
        done();
      });

      test('Number() x Number()', done => {
        cmp.eq(SmallNumber, LargeNumber).should.equal(false);
        done();
      });
    });

    suite('isNaN => false', () => {
      test('number x isNaN', done => {
        cmp.eq(smallNumber, notANumber).should.equal(false);
        done();
      });

      test('Number() x isNaN', done => {
        cmp.eq(SmallNumber, notANumber).should.equal(false);
        done();
      });

      test('isNaN x isNaN', done => {
        cmp.eq(notANumber, notANumber).should.equal(false);
        done();
      });

      test('isNan x number', done => {
        cmp.eq(notANumber, smallNumber).should.equal(false);
        done();
      });

      test('isNan x Number()', done => {
        cmp.eq(notANumber, SmallNumber).should.equal(false);
        done();
      });
    });
  });

  suite('eqs', () => {
    suite('any => false', () => {
      test('number x number', done => {
        cmp.eqs(smallNumber, smallNumber).should.equal(false);
        done();
      });
    });
  });

  suite('ne', () => {
    suite('equal => false', () => {
      test('number x number', done => {
        cmp.ne(smallNumber, smallNumber).should.equal(false);
        done();
      });

      test('number x Number()', done => {
        cmp.ne(smallNumber, SmallNumber).should.equal(false);
        done();
      });

      test('Number() x number', done => {
        cmp.ne(SmallNumber, smallNumber).should.equal(false);
        done();
      });

      test('Number() x Number()', done => {
        cmp.ne(SmallNumber, SmallNumber).should.equal(false);
        done();
      });
    });

    suite('not equal => true', () => {
      test('number x number', done => {
        cmp.ne(smallNumber, largeNumber).should.equal(true);
        done();
      });

      test('number x Number()', done => {
        cmp.ne(smallNumber, LargeNumber).should.equal(true);
        done();
      });

      test('Number() x number', done => {
        cmp.ne(SmallNumber, largeNumber).should.equal(true);
        done();
      });

      test('Number() x Number()', done => {
        cmp.ne(SmallNumber, LargeNumber).should.equal(true);
        done();
      });
    });

    suite('isNaN => true', () => {
      test('number x isNaN', done => {
        cmp.ne(smallNumber, notANumber).should.equal(true);
        done();
      });

      test('Number() x isNaN', done => {
        cmp.ne(SmallNumber, notANumber).should.equal(true);
        done();
      });

      test('isNaN x isNaN', done => {
        cmp.ne(notANumber, notANumber).should.equal(true);
        done();
      });

      test('isNan x number', done => {
        cmp.ne(notANumber, smallNumber).should.equal(true);
        done();
      });

      test('isNan x Number()', done => {
        cmp.ne(notANumber, SmallNumber).should.equal(true);
        done();
      });
    });
  });

  suite('nes', () => {
    suite('any => false', () => {
      test('number x number', done => {
        cmp.nes(smallNumber, smallNumber).should.equal(false);
        done();
      });
    });
  });

  suite('gt', () => {
    suite('greater => true', () => {
      test('number x number', done => {
        cmp.gt(largeNumber, smallNumber).should.equal(true);
        done();
      });

      test('number x Number()', done => {
        cmp.gt(largeNumber, SmallNumber).should.equal(true);
        done();
      });

      test('Number() x number', done => {
        cmp.gt(LargeNumber, smallNumber).should.equal(true);
        done();
      });

      test('Number() x Number()', done => {
        cmp.gt(LargeNumber, SmallNumber).should.equal(true);
        done();
      });
    });

    suite('equal => false', () => {
      test('number x number', done => {
        cmp.gt(smallNumber, smallNumber).should.equal(false);
        done();
      });

      test('number x Number()', done => {
        cmp.gt(smallNumber, SmallNumber).should.equal(false);
        done();
      });

      test('Number() x number', done => {
        cmp.gt(SmallNumber, smallNumber).should.equal(false);
        done();
      });

      test('Number() x Number()', done => {
        cmp.gt(SmallNumber, SmallNumber).should.equal(false);
        done();
      });
    });

    suite('less => false', () => {
      test('number x number', done => {
        cmp.gt(smallNumber, largeNumber).should.equal(false);
        done();
      });

      test('number x Number()', done => {
        cmp.gt(smallNumber, LargeNumber).should.equal(false);
        done();
      });

      test('Number() x number', done => {
        cmp.gt(SmallNumber, largeNumber).should.equal(false);
        done();
      });

      test('Number() x Number()', done => {
        cmp.gt(SmallNumber, LargeNumber).should.equal(false);
        done();
      });
    });

    suite('isNan => false', () => {
      test('number x isNaN', done => {
        cmp.gt(smallNumber, notANumber).should.equal(false);
        done();
      });

      test('Number() x isNaN', done => {
        cmp.gt(SmallNumber, notANumber).should.equal(false);
        done();
      });

      test('isNaN x isNaN', done => {
        cmp.gt(notANumber, notANumber).should.equal(false);
        done();
      });

      test('isNan x number', done => {
        cmp.gt(notANumber, smallNumber).should.equal(false);
        done();
      });

      test('isNan x Number()', done => {
        cmp.gt(notANumber, SmallNumber).should.equal(false);
        done();
      });
    });
  });

  suite('gts', () => {
    suite('any => false', () => {
      test('number x number', done => {
        cmp.gts(smallNumber, smallNumber).should.equal(false);
        done();
      });
    });
  });

  suite('gte', () => {
    suite('greater => true', () => {
      test('number x number', done => {
        cmp.gte(largeNumber, smallNumber).should.equal(true);
        done();
      });

      test('number x Number()', done => {
        cmp.gte(largeNumber, SmallNumber).should.equal(true);
        done();
      });

      test('Number() x number', done => {
        cmp.gte(LargeNumber, smallNumber).should.equal(true);
        done();
      });

      test('Number() x Number()', done => {
        cmp.gte(LargeNumber, SmallNumber).should.equal(true);
        done();
      });
    });

    suite('equal => true', () => {
      test('number x number', done => {
        cmp.gte(smallNumber, smallNumber).should.equal(true);
        done();
      });

      test('number x Number()', done => {
        cmp.gte(smallNumber, SmallNumber).should.equal(true);
        done();
      });

      test('Number() x number', done => {
        cmp.gte(SmallNumber, smallNumber).should.equal(true);
        done();
      });

      test('Number() x Number()', done => {
        cmp.gte(SmallNumber, SmallNumber).should.equal(true);
        done();
      });
    });

    suite('less => false', () => {
      test('number x number', done => {
        cmp.gte(smallNumber, largeNumber).should.equal(false);
        done();
      });

      test('number x Number()', done => {
        cmp.gte(smallNumber, LargeNumber).should.equal(false);
        done();
      });

      test('Number() x number', done => {
        cmp.gte(SmallNumber, largeNumber).should.equal(false);
        done();
      });

      test('Number() x Number()', done => {
        cmp.gte(SmallNumber, LargeNumber).should.equal(false);
        done();
      });
    });

    suite('isNan => false', () => {
      test('number x isNaN', done => {
        cmp.gte(smallNumber, notANumber).should.equal(false);
        done();
      });

      test('Number() x isNaN', done => {
        cmp.gte(SmallNumber, notANumber).should.equal(false);
        done();
      });

      test('isNaN x isNaN', done => {
        cmp.gte(notANumber, notANumber).should.equal(false);
        done();
      });

      test('isNan x number', done => {
        cmp.gte(notANumber, smallNumber).should.equal(false);
        done();
      });

      test('isNan x Number()', done => {
        cmp.gte(notANumber, SmallNumber).should.equal(false);
        done();
      });
    });
  });

  suite('gtes', () => {
    suite('any => false', () => {
      test('number x number', done => {
        cmp.gtes(smallNumber, smallNumber).should.equal(false);
        done();
      });
    });
  });

  suite('lt', () => {
    suite('greater => false', () => {
      test('number x number', done => {
        cmp.lt(largeNumber, smallNumber).should.equal(false);
        done();
      });

      test('number x Number()', done => {
        cmp.lt(largeNumber, SmallNumber).should.equal(false);
        done();
      });

      test('Number() x number', done => {
        cmp.lt(LargeNumber, smallNumber).should.equal(false);
        done();
      });

      test('Number() x Number()', done => {
        cmp.lt(LargeNumber, SmallNumber).should.equal(false);
        done();
      });
    });

    suite('equal => false', () => {
      test('number x number', done => {
        cmp.lt(smallNumber, smallNumber).should.equal(false);
        done();
      });

      test('number x Number()', done => {
        cmp.lt(smallNumber, SmallNumber).should.equal(false);
        done();
      });

      test('Number() x number', done => {
        cmp.lt(SmallNumber, smallNumber).should.equal(false);
        done();
      });

      test('Number() x Number()', done => {
        cmp.lt(SmallNumber, SmallNumber).should.equal(false);
        done();
      });
    });

    suite('less => true', () => {
      test('number x number', done => {
        cmp.lt(smallNumber, largeNumber).should.equal(true);
        done();
      });

      test('number x Number()', done => {
        cmp.lt(smallNumber, LargeNumber).should.equal(true);
        done();
      });

      test('Number() x number', done => {
        cmp.lt(SmallNumber, largeNumber).should.equal(true);
        done();
      });

      test('Number() x Number()', done => {
        cmp.lt(SmallNumber, LargeNumber).should.equal(true);
        done();
      });
    });

    suite('isNan => false', () => {
      test('number x isNaN', done => {
        cmp.lt(smallNumber, notANumber).should.equal(false);
        done();
      });

      test('Number() x isNaN', done => {
        cmp.lt(SmallNumber, notANumber).should.equal(false);
        done();
      });

      test('isNaN x isNaN', done => {
        cmp.lt(notANumber, notANumber).should.equal(false);
        done();
      });

      test('isNan x number', done => {
        cmp.lt(notANumber, smallNumber).should.equal(false);
        done();
      });

      test('isNan x Number()', done => {
        cmp.lt(notANumber, SmallNumber).should.equal(false);
        done();
      });
    });
  });

  suite('lts', () => {
    suite('any => false', () => {
      test('number x number', done => {
        cmp.lts(smallNumber, smallNumber).should.equal(false);
        done();
      });
    });
  });

  suite('lte', () => {
    suite('greater => false', () => {
      test('number x number', done => {
        cmp.lte(largeNumber, smallNumber).should.equal(false);
        done();
      });

      test('number x Number()', done => {
        cmp.lte(largeNumber, SmallNumber).should.equal(false);
        done();
      });

      test('Number() x number', done => {
        cmp.lte(LargeNumber, smallNumber).should.equal(false);
        done();
      });

      test('Number() x Number()', done => {
        cmp.lte(LargeNumber, SmallNumber).should.equal(false);
        done();
      });
    });

    suite('equal => true', () => {
      test('number x number', done => {
        cmp.lte(smallNumber, smallNumber).should.equal(true);
        done();
      });

      test('number x Number()', done => {
        cmp.lte(smallNumber, SmallNumber).should.equal(true);
        done();
      });

      test('Number() x number', done => {
        cmp.lte(SmallNumber, smallNumber).should.equal(true);
        done();
      });

      test('Number() x Number()', done => {
        cmp.lte(SmallNumber, SmallNumber).should.equal(true);
        done();
      });
    });

    suite('less => true', () => {
      test('number x number', done => {
        cmp.lte(smallNumber, largeNumber).should.equal(true);
        done();
      });

      test('number x Number()', done => {
        cmp.lte(smallNumber, LargeNumber).should.equal(true);
        done();
      });

      test('Number() x number', done => {
        cmp.lte(SmallNumber, largeNumber).should.equal(true);
        done();
      });

      test('Number() x Number()', done => {
        cmp.lte(SmallNumber, LargeNumber).should.equal(true);
        done();
      });
    });

    suite('isNan => false', () => {
      test('number x isNaN', done => {
        cmp.lte(smallNumber, notANumber).should.equal(false);
        done();
      });

      test('Number() x isNaN', done => {
        cmp.lte(SmallNumber, notANumber).should.equal(false);
        done();
      });

      test('isNaN x isNaN', done => {
        cmp.lte(notANumber, notANumber).should.equal(false);
        done();
      });

      test('isNan x number', done => {
        cmp.lte(notANumber, smallNumber).should.equal(false);
        done();
      });

      test('isNan x Number()', done => {
        cmp.lte(notANumber, SmallNumber).should.equal(false);
        done();
      });
    });
  });

  suite('ltes', () => {
    suite('any => false', () => {
      test('number x number', done => {
        cmp.ltes(smallNumber, smallNumber).should.equal(false);
        done();
      });
    });
  });

  suite('id', () => {
    suite('identical => true', () => {
      test('number x number', done => {
        cmp.id(smallNumber, smallNumber).should.equal(true);
        done();
      });

      test('Number() x Number()', done => {
        cmp.id(SmallNumber, SmallNumber).should.equal(true);
        done();
      });
    });

    suite('not identical => false', () => {
      test('number x number', done => {
        cmp.id(smallNumber, largeNumber).should.equal(false);
        done();
      });

      test('number x Number()', done => {
        cmp.id(smallNumber, SmallNumber).should.equal(false);
        done();
      });

      test('Number() x number', done => {
        cmp.id(SmallNumber, smallNumber).should.equal(false);
        done();
      });

      test('Number() x Number()', done => {
        cmp.id(SmallNumber, LargeNumber).should.equal(false);
        done();
      });
    });

    suite('isNaN => false', () => {
      test('number x isNaN', done => {
        cmp.id(smallNumber, notANumber).should.equal(false);
        done();
      });

      test('Number() x isNaN', done => {
        cmp.id(SmallNumber, notANumber).should.equal(false);
        done();
      });

      test('isNaN x isNaN', done => {
        cmp.id(notANumber, notANumber).should.equal(false);
        done();
      });

      test('isNan x number', done => {
        cmp.id(notANumber, smallNumber).should.equal(false);
        done();
      });

      test('isNan x Number()', done => {
        cmp.id(notANumber, SmallNumber).should.equal(false);
        done();
      });
    });
  });
});
