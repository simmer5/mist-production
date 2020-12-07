import '../styles/globals.scss'
import { AnimatePresence } from 'framer-motion'
import Logo from '../components/logos/BlueLogo'

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<Logo />
				<Component {...pageProps} />
			</AnimatePresence>
		</>
	)
}

export default MyApp
