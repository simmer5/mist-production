import '../styles/globals.scss'
import { AnimatePresence } from 'framer-motion'
// import Logo from '../components/logoLink/LogoLink'

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<AnimatePresence exitBeforeEnter={false}>
				{/* <Logo key='logo' /> */}
				<Component key='components' {...pageProps} />
			</AnimatePresence>
		</>
	)
}

export default MyApp
