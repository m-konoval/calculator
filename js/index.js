function Range(elemId) {
  if (!elemId) {
    return {};
  }

  const R = this;
  const elem = document.getElementById(elemId);
  R.getValue = function (el) {
    console.log(el);
  };

  elem.addEventListener('onchange', function () {
    R.getValue(elem);
  })
}

const sumRange = new Range('sum');
console.log(sumRange);