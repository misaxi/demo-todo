module.exports = subseq

function subseq (origin, seq) {
  const originArr = origin.split('')
  const seqArr = seq.split('')
  const seqHead = seqArr[0]
  var count = 0

  for (var i = 0; i < originArr.length; i++) {
    var current = originArr[i]

    if (current === seqHead) {
      if (scan(originArr, i, seqArr)) {
        count++
      }
    }
  }

  return count
}

function scan (originArr, start, seqArr) {
  var pos = 0
  var i = start
  while (i < originArr.length) {
    var oValue = originArr[i]
    var sValue = seqArr[pos]

    if (oValue === sValue) {
      if (pos === seqArr.length - 1) return true
      pos++
    }
    i++
  }
  return false
}
