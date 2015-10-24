const subseq = require('./subseq')
const test = require('tape')

test(`there are 3 subsequeces of 'AB' within 'ACKHJAEDAKLOIBAA'`, (t) => {
  t.plan(1)
  const result = subseq('ACKHJAEDAKLOIBAA', 'AB')
  t.equal(result, 3)
})

test('1 item', t => {
  t.plan(1)
  t.equal(subseq('BEAEABRAWE', 'A'), 3)
})

test('2 items', t => {
  t.plan(3)
  t.equal(subseq('BABA', 'AB'), 1)
  t.equal(subseq('BACABA', 'AB'), 2)
  t.equal(subseq('BACABA', 'AB'), 2)
})

test('3 items', t => {
  t.plan(4)
  t.equal(subseq('BABCA', 'ABC'), 1)
  t.equal(subseq('BACABCA', 'ABC'), 2)
  t.equal(subseq('BACABAC', 'ABC'), 2)
  t.equal(subseq('BACAABBACC', 'ABC'), 3)
})
