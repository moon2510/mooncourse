import React from 'react'
import Markdown from 'react-markdown'
    
var src = "# This is markdown document"
    
React.render(
  <Markdown children={src} />,
  document.getElementById('root')
)