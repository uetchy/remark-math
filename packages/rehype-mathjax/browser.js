const createPlugin = require('./lib/core')

module.exports = createPlugin('rehypeMathJaxBrowser', renderBrowser)

function renderBrowser(options) {
  const settings = options || {}
  const display = settings.displayMath || ['\\[', '\\]']
  const inline = settings.inlineMath || ['\\(', '\\)']

  return {render: render}

  function render(node, renderOptions) {
    const delimiters = renderOptions.display ? display : inline
    node.children.unshift({type: 'text', value: delimiters[0]})
    node.children.push({type: 'text', value: delimiters[1]})
  }
}
