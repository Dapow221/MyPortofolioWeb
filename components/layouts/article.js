import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'
import { Box } from '@chakra-ui/react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title, textAlign = 'left', footerAlign = 'center' }) => {
  const t = `${title} - Muhammad Daffa Salsabil`
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}
        <Box textAlign={textAlign}>
          {children}
        </Box>
        <Box textAlign={footerAlign}>
          <GridItemStyle />
        </Box>
      </>
    </motion.article>
  )
}

export default Layout