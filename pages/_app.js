import Script from 'next/script'
import PostModal from '../components/post_modal'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      {/* Post Modal */}
      <PostModal />
      {/* End of Post Modal */}

      <Script src="js/script.js" />
    </>
  )
}

export default MyApp
