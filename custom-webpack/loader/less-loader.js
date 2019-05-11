const less = require('less');

function loader (source) {
  let css = '';
  less.render(source, (err, output) => {
    if (!err) {
      css = output.css;
    } else {
      throw new Error(error);
    }
  })
  return css;
}

module.exports = loader;
