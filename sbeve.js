const fs = require('fs');

function die (msg) {
  console.error(msg);
  require('process').exit(1);
}

function input () {
  fs.writeSync(1, '\u001b[4m');
  let s = '';
  const b = Buffer.from([0]);
  while (true) {
    const len = fs.readSync(0, b);
    if (len === 0) {
      break;
    }
    const c = b.toString();
    if (c === '\n') {
      break;
    }
    s += c;
  }
  fs.writeSync(1, '\u001b[m');
  return s;
}

function inputNumber () {
  const f = parseFloat(input());
  if (isNaN(f)) {
    die("That's not a number ya punda!");
  }
  return f;
}

module.exports = {
  die,
  input,
  inputNumber,
};
