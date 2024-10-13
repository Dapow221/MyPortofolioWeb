import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');

      html, body {
        font-family: 'Fira Code', monospace;
      }
    `}
  />
)

export default Fonts