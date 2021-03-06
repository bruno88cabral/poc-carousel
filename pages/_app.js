import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
  