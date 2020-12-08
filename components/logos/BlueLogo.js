import React from 'react'
import styles from './Logo.module.scss'
import Link from 'next/link'

const BlueLogo = () => {
	return (
		<Link href='/'>
			<a>
				<div className={styles.logoContainer}>
					<svg className={styles.svg} viewBox='0 0 445 148'>
						<mask id='path-1-inside-1' fill='none'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M363.886 2.24C361.326 0.746667 358.51 0 355.438 0C351.129 0 347.929 1.17333 345.838 3.52V0.639999H332.078V48.064H346.542V33.28C348.59 35.2853 351.555 36.288 355.438 36.288C358.51 36.288 361.326 35.5627 363.886 34.112C366.489 32.6187 368.537 30.5067 370.03 27.776C371.566 25.0027 372.334 21.8027 372.334 18.176C372.334 14.5493 371.566 11.3493 370.03 8.576C368.537 5.80267 366.489 3.69067 363.886 2.24ZM356.078 23.232C355.011 24.4267 353.646 25.024 351.982 25.024C350.318 25.024 348.953 24.4267 347.886 23.232C346.819 22.0373 346.286 20.352 346.286 18.176C346.286 16 346.819 14.3147 347.886 13.12C348.953 11.8827 350.318 11.264 351.982 11.264C353.646 11.264 355.011 11.8827 356.078 13.12C357.145 14.3147 357.678 16 357.678 18.176C357.678 20.352 357.145 22.0373 356.078 23.232ZM401.978 0C396.986 0 393.21 1.472 390.65 4.416V0.639999H376.89V35.648H391.354V20.096C391.354 15.0613 393.829 12.544 398.778 12.544C399.76 12.544 400.826 12.6293 401.978 12.8V0ZM413.765 33.984C416.88 35.52 420.379 36.288 424.261 36.288C428.187 36.288 431.685 35.52 434.757 33.984C437.872 32.4053 440.283 30.2507 441.989 27.52C443.739 24.7467 444.613 21.6107 444.613 18.112C444.613 14.6133 443.739 11.4987 441.989 8.768C440.283 5.99467 437.872 3.84 434.757 2.304C431.685 0.768 428.187 0 424.261 0C420.379 0 416.88 0.768 413.765 2.304C410.693 3.84 408.283 5.99467 406.533 8.768C404.784 11.4987 403.909 14.6133 403.909 18.112C403.909 21.6107 404.784 24.7467 406.533 27.52C408.283 30.2507 410.693 32.4053 413.765 33.984ZM428.357 23.232C427.291 24.4267 425.925 25.024 424.261 25.024C422.597 25.024 421.232 24.4267 420.165 23.232C419.099 21.9947 418.565 20.288 418.565 18.112C418.565 15.936 419.099 14.2507 420.165 13.056C421.232 11.8613 422.597 11.264 424.261 11.264C425.925 11.264 427.291 11.8613 428.357 13.056C429.424 14.2507 429.957 15.936 429.957 18.112C429.957 20.288 429.424 21.9947 428.357 23.232ZM89.712 99.712L90 145.648H120.96L120.672 44.848H92.736L60.768 98.56L27.936 44.848H0V145.648H30.96V101.296L52.848 136.576H67.824L89.712 99.712ZM168.927 145.648V66.88H136.383V145.648H168.927ZM138.399 55.936C142.047 59.008 146.799 60.544 152.655 60.544C158.607 60.544 163.359 58.96 166.911 55.792C170.463 52.528 172.239 48.4 172.239 43.408C172.239 38.704 170.463 34.864 166.911 31.888C163.359 28.912 158.607 27.424 152.655 27.424C146.799 27.424 142.047 29.008 138.399 32.176C134.847 35.248 133.071 39.184 133.071 43.984C133.071 48.784 134.847 52.768 138.399 55.936ZM197.463 145.216C205.431 147.04 213.591 147.952 221.943 147.952C232.023 147.952 240.567 146.464 247.575 143.488C254.679 140.416 260.007 136.336 263.559 131.248C267.111 126.064 268.887 120.304 268.887 113.968C268.887 106.672 266.919 100.912 262.983 96.688C259.143 92.464 254.583 89.44 249.303 87.616C244.023 85.696 237.543 84.016 229.863 82.576C223.911 81.424 219.639 80.368 217.047 79.408C214.455 78.352 213.159 76.816 213.159 74.8C213.159 70.576 217.527 68.464 226.263 68.464C235.095 68.464 244.455 70.96 254.343 75.952L264.567 51.328C259.479 48.448 253.575 46.288 246.855 44.848C240.231 43.312 233.463 42.544 226.551 42.544C216.471 42.544 207.879 44.032 200.775 47.008C193.767 49.984 188.487 54.064 184.935 59.248C181.383 64.432 179.607 70.192 179.607 76.528C179.607 83.824 181.527 89.632 185.367 93.952C189.207 98.176 193.719 101.248 198.903 103.168C204.087 104.992 210.567 106.72 218.343 108.352C224.391 109.6 228.711 110.752 231.303 111.808C233.991 112.864 235.335 114.448 235.335 116.56C235.335 118.384 234.327 119.776 232.311 120.736C230.295 121.6 226.935 122.032 222.231 122.032C216.759 122.032 211.047 121.216 205.095 119.584C199.143 117.856 193.767 115.6 188.967 112.816L178.023 137.584C183.111 140.752 189.591 143.296 197.463 145.216ZM316.008 147.088C324.456 147.088 331.128 145.696 336.024 142.912L328.248 120.304C326.136 121.744 323.688 122.464 320.904 122.464C318.888 122.464 317.256 121.792 316.008 120.448C314.76 119.104 314.136 117.232 314.136 114.832V94.96H330.264V71.2H314.136V49.168H281.592V71.2H270.792V94.96H281.592V115.12C281.592 125.776 284.568 133.792 290.52 139.168C296.472 144.448 304.968 147.088 316.008 147.088Z'
							/>
						</mask>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M363.886 2.24C361.326 0.746667 358.51 0 355.438 0C351.129 0 347.929 1.17333 345.838 3.52V0.639999H332.078V48.064H346.542V33.28C348.59 35.2853 351.555 36.288 355.438 36.288C358.51 36.288 361.326 35.5627 363.886 34.112C366.489 32.6187 368.537 30.5067 370.03 27.776C371.566 25.0027 372.334 21.8027 372.334 18.176C372.334 14.5493 371.566 11.3493 370.03 8.576C368.537 5.80267 366.489 3.69067 363.886 2.24ZM356.078 23.232C355.011 24.4267 353.646 25.024 351.982 25.024C350.318 25.024 348.953 24.4267 347.886 23.232C346.819 22.0373 346.286 20.352 346.286 18.176C346.286 16 346.819 14.3147 347.886 13.12C348.953 11.8827 350.318 11.264 351.982 11.264C353.646 11.264 355.011 11.8827 356.078 13.12C357.145 14.3147 357.678 16 357.678 18.176C357.678 20.352 357.145 22.0373 356.078 23.232ZM401.978 0C396.986 0 393.21 1.472 390.65 4.416V0.639999H376.89V35.648H391.354V20.096C391.354 15.0613 393.829 12.544 398.778 12.544C399.76 12.544 400.826 12.6293 401.978 12.8V0ZM413.765 33.984C416.88 35.52 420.379 36.288 424.261 36.288C428.187 36.288 431.685 35.52 434.757 33.984C437.872 32.4053 440.283 30.2507 441.989 27.52C443.739 24.7467 444.613 21.6107 444.613 18.112C444.613 14.6133 443.739 11.4987 441.989 8.768C440.283 5.99467 437.872 3.84 434.757 2.304C431.685 0.768 428.187 0 424.261 0C420.379 0 416.88 0.768 413.765 2.304C410.693 3.84 408.283 5.99467 406.533 8.768C404.784 11.4987 403.909 14.6133 403.909 18.112C403.909 21.6107 404.784 24.7467 406.533 27.52C408.283 30.2507 410.693 32.4053 413.765 33.984ZM428.357 23.232C427.291 24.4267 425.925 25.024 424.261 25.024C422.597 25.024 421.232 24.4267 420.165 23.232C419.099 21.9947 418.565 20.288 418.565 18.112C418.565 15.936 419.099 14.2507 420.165 13.056C421.232 11.8613 422.597 11.264 424.261 11.264C425.925 11.264 427.291 11.8613 428.357 13.056C429.424 14.2507 429.957 15.936 429.957 18.112C429.957 20.288 429.424 21.9947 428.357 23.232ZM89.712 99.712L90 145.648H120.96L120.672 44.848H92.736L60.768 98.56L27.936 44.848H0V145.648H30.96V101.296L52.848 136.576H67.824L89.712 99.712ZM168.927 145.648V66.88H136.383V145.648H168.927ZM138.399 55.936C142.047 59.008 146.799 60.544 152.655 60.544C158.607 60.544 163.359 58.96 166.911 55.792C170.463 52.528 172.239 48.4 172.239 43.408C172.239 38.704 170.463 34.864 166.911 31.888C163.359 28.912 158.607 27.424 152.655 27.424C146.799 27.424 142.047 29.008 138.399 32.176C134.847 35.248 133.071 39.184 133.071 43.984C133.071 48.784 134.847 52.768 138.399 55.936ZM197.463 145.216C205.431 147.04 213.591 147.952 221.943 147.952C232.023 147.952 240.567 146.464 247.575 143.488C254.679 140.416 260.007 136.336 263.559 131.248C267.111 126.064 268.887 120.304 268.887 113.968C268.887 106.672 266.919 100.912 262.983 96.688C259.143 92.464 254.583 89.44 249.303 87.616C244.023 85.696 237.543 84.016 229.863 82.576C223.911 81.424 219.639 80.368 217.047 79.408C214.455 78.352 213.159 76.816 213.159 74.8C213.159 70.576 217.527 68.464 226.263 68.464C235.095 68.464 244.455 70.96 254.343 75.952L264.567 51.328C259.479 48.448 253.575 46.288 246.855 44.848C240.231 43.312 233.463 42.544 226.551 42.544C216.471 42.544 207.879 44.032 200.775 47.008C193.767 49.984 188.487 54.064 184.935 59.248C181.383 64.432 179.607 70.192 179.607 76.528C179.607 83.824 181.527 89.632 185.367 93.952C189.207 98.176 193.719 101.248 198.903 103.168C204.087 104.992 210.567 106.72 218.343 108.352C224.391 109.6 228.711 110.752 231.303 111.808C233.991 112.864 235.335 114.448 235.335 116.56C235.335 118.384 234.327 119.776 232.311 120.736C230.295 121.6 226.935 122.032 222.231 122.032C216.759 122.032 211.047 121.216 205.095 119.584C199.143 117.856 193.767 115.6 188.967 112.816L178.023 137.584C183.111 140.752 189.591 143.296 197.463 145.216ZM316.008 147.088C324.456 147.088 331.128 145.696 336.024 142.912L328.248 120.304C326.136 121.744 323.688 122.464 320.904 122.464C318.888 122.464 317.256 121.792 316.008 120.448C314.76 119.104 314.136 117.232 314.136 114.832V94.96H330.264V71.2H314.136V49.168H281.592V71.2H270.792V94.96H281.592V115.12C281.592 125.776 284.568 133.792 290.52 139.168C296.472 144.448 304.968 147.088 316.008 147.088Z'
							fill='#0070F3'
						/>
						<path
							d='M363.886 2.24L362.878 3.96756L362.895 3.97743L362.912 3.98696L363.886 2.24ZM345.838 3.52H343.838V8.77148L347.331 4.85041L345.838 3.52ZM345.838 0.639999H347.838V-1.36H345.838V0.639999ZM332.078 0.639999V-1.36H330.078V0.639999H332.078ZM332.078 48.064H330.078V50.064H332.078V48.064ZM346.542 48.064V50.064H348.542V48.064H346.542ZM346.542 33.28L347.941 31.851L344.542 28.5226V33.28H346.542ZM363.886 34.112L364.872 35.8521L364.881 35.8467L363.886 34.112ZM370.03 27.776L368.28 26.807L368.275 26.8164L370.03 27.776ZM370.03 8.576L368.269 9.52421L368.275 9.53463L368.28 9.54499L370.03 8.576ZM356.078 23.232L357.57 24.564L357.57 24.564L356.078 23.232ZM347.886 23.232L346.394 24.564L346.394 24.564L347.886 23.232ZM347.886 13.12L349.378 14.452L349.389 14.4391L349.401 14.4259L347.886 13.12ZM356.078 13.12L354.563 14.4259L354.574 14.4391L354.586 14.452L356.078 13.12ZM390.65 4.416H388.65V9.76395L392.16 5.72836L390.65 4.416ZM401.978 0H403.978V-2H401.978V0ZM390.65 0.639999H392.65V-1.36H390.65V0.639999ZM376.89 0.639999V-1.36H374.89V0.639999H376.89ZM376.89 35.648H374.89V37.648H376.89V35.648ZM391.354 35.648V37.648H393.354V35.648H391.354ZM401.978 12.8L401.685 14.7784L403.978 15.1181V12.8H401.978ZM413.765 33.984L412.851 35.7629L412.866 35.7704L412.881 35.7777L413.765 33.984ZM434.757 33.984L435.652 35.7729L435.662 35.7679L434.757 33.984ZM441.989 27.52L440.298 26.453L440.293 26.46L441.989 27.52ZM441.989 8.768L440.286 9.8162L440.296 9.83161L440.305 9.84685L441.989 8.768ZM434.757 2.304L433.863 4.09288L433.873 4.09774L434.757 2.304ZM413.765 2.304L412.881 0.510234L412.871 0.515144L413.765 2.304ZM406.533 8.768L408.218 9.84688L408.225 9.83502L406.533 8.768ZM406.533 27.52L404.842 28.587L404.849 28.5989L406.533 27.52ZM428.357 23.232L429.849 24.564L429.861 24.5511L429.872 24.5379L428.357 23.232ZM420.165 23.232L418.651 24.5379L418.662 24.5511L418.674 24.564L420.165 23.232ZM420.165 13.056L421.657 14.388L421.657 14.388L420.165 13.056ZM428.357 13.056L426.866 14.388L426.866 14.388L428.357 13.056ZM90 145.648L88 145.661L88.0125 147.648H90V145.648ZM89.712 99.712L91.712 99.6995L91.6668 92.5022L87.9923 98.6909L89.712 99.712ZM120.96 145.648V147.648H122.966L122.96 145.642L120.96 145.648ZM120.672 44.848L122.672 44.8423L122.666 42.848H120.672V44.848ZM92.736 44.848V42.848H91.5989L91.0174 43.8251L92.736 44.848ZM60.768 98.56L59.0616 99.6031L60.7908 102.432L62.4866 99.5829L60.768 98.56ZM27.936 44.848L29.6425 43.8049L29.0575 42.848H27.936V44.848ZM0 44.848V42.848H-2V44.848H0ZM0 145.648H-2V147.648H0V145.648ZM30.96 145.648V147.648H32.96V145.648H30.96ZM30.96 101.296L32.6595 100.242L28.96 94.2786V101.296H30.96ZM52.848 136.576L51.1485 137.63L51.7352 138.576H52.848V136.576ZM67.824 136.576V138.576H68.9625L69.5437 137.597L67.824 136.576ZM168.927 66.88H170.927V64.88H168.927V66.88ZM168.927 145.648V147.648H170.927V145.648H168.927ZM136.383 66.88V64.88H134.383V66.88H136.383ZM136.383 145.648H134.383V147.648H136.383V145.648ZM138.399 55.936L137.067 57.4286L137.089 57.4475L137.11 57.4658L138.399 55.936ZM166.911 55.792L168.242 57.2846L168.253 57.2747L168.264 57.2647L166.911 55.792ZM166.911 31.888L165.626 33.421L165.626 33.421L166.911 31.888ZM138.399 32.176L139.707 33.6887L139.71 33.6861L138.399 32.176ZM197.463 145.216L196.989 147.159L197.003 147.162L197.017 147.166L197.463 145.216ZM247.575 143.488L248.357 145.329L248.369 145.324L247.575 143.488ZM263.559 131.248L265.199 132.393L265.204 132.386L265.209 132.378L263.559 131.248ZM262.983 96.688L261.503 98.0333L261.512 98.0425L261.52 98.0515L262.983 96.688ZM249.303 87.616L248.62 89.4956L248.635 89.5011L248.65 89.5064L249.303 87.616ZM229.863 82.576L229.483 84.5396L229.495 84.5417L229.863 82.576ZM217.047 79.408L216.293 81.2602L216.323 81.2723L216.353 81.2835L217.047 79.408ZM254.343 75.952L253.442 77.7374L255.365 78.708L256.19 76.7189L254.343 75.952ZM264.567 51.328L266.414 52.0949L267.093 50.4597L265.553 49.5875L264.567 51.328ZM246.855 44.848L246.404 46.7963L246.42 46.8001L246.436 46.8036L246.855 44.848ZM200.775 47.008L200.003 45.1633L199.994 45.1671L200.775 47.008ZM184.935 59.248L186.585 60.3785L186.585 60.3785L184.935 59.248ZM185.367 93.952L183.873 95.2807L183.88 95.2891L183.887 95.2973L185.367 93.952ZM198.903 103.168L198.209 105.043L198.224 105.049L198.24 105.055L198.903 103.168ZM218.343 108.352L217.933 110.309L217.939 110.311L218.343 108.352ZM231.303 111.808L230.549 113.66L230.56 113.665L230.572 113.67L231.303 111.808ZM232.311 120.736L233.099 122.574L233.136 122.559L233.171 122.542L232.311 120.736ZM205.095 119.584L204.538 121.505L204.552 121.509L204.567 121.513L205.095 119.584ZM188.967 112.816L189.971 111.086L188.04 109.966L187.138 112.008L188.967 112.816ZM178.023 137.584L176.194 136.776L175.492 138.364L176.966 139.282L178.023 137.584ZM336.024 142.912L337.013 144.651L338.455 143.83L337.915 142.262L336.024 142.912ZM328.248 120.304L330.139 119.654L329.287 117.175L327.121 118.652L328.248 120.304ZM316.008 120.448L314.542 121.809L314.542 121.809L316.008 120.448ZM314.136 94.96V92.96H312.136V94.96H314.136ZM330.264 94.96V96.96H332.264V94.96H330.264ZM330.264 71.2H332.264V69.2H330.264V71.2ZM314.136 71.2H312.136V73.2H314.136V71.2ZM314.136 49.168H316.136V47.168H314.136V49.168ZM281.592 49.168V47.168H279.592V49.168H281.592ZM281.592 71.2V73.2H283.592V71.2H281.592ZM270.792 71.2V69.2H268.792V71.2H270.792ZM270.792 94.96H268.792V96.96H270.792V94.96ZM281.592 94.96H283.592V92.96H281.592V94.96ZM290.52 139.168L289.179 140.652L289.186 140.658L289.193 140.664L290.52 139.168ZM355.438 2C358.169 2 360.636 2.65934 362.878 3.96756L364.894 0.512445C362.016 -1.16601 358.851 -2 355.438 -2V2ZM347.331 4.85041C348.917 3.07054 351.478 2 355.438 2V-2C350.779 -2 346.94 -0.72387 344.345 2.18959L347.331 4.85041ZM343.838 0.639999V3.52H347.838V0.639999H343.838ZM332.078 2.64H345.838V-1.36H332.078V2.64ZM334.078 48.064V0.639999H330.078V48.064H334.078ZM346.542 46.064H332.078V50.064H346.542V46.064ZM344.542 33.28V48.064H348.542V33.28H344.542ZM355.438 34.288C351.888 34.288 349.499 33.376 347.941 31.851L345.143 34.709C347.681 37.1947 351.222 38.288 355.438 38.288V34.288ZM362.9 32.372C360.654 33.6446 358.18 34.288 355.438 34.288V38.288C358.84 38.288 361.998 37.4807 364.872 35.852L362.9 32.372ZM368.275 26.8164C366.952 29.2363 365.161 31.0744 362.891 32.3773L364.881 35.8467C367.816 34.1629 370.121 31.7771 371.785 28.7356L368.275 26.8164ZM370.334 18.176C370.334 21.5131 369.63 24.3706 368.28 26.807L371.78 28.745C373.502 25.6347 374.334 22.0923 374.334 18.176H370.334ZM368.28 9.54499C369.63 11.9814 370.334 14.839 370.334 18.176H374.334C374.334 14.2597 373.502 10.7173 371.78 7.60701L368.28 9.54499ZM362.912 3.98696C365.162 5.24109 366.946 7.06664 368.269 9.52421L371.791 7.6278C370.127 4.53869 367.815 2.14025 364.86 0.49304L362.912 3.98696ZM351.982 27.024C354.19 27.024 356.107 26.2022 357.57 24.564L354.586 21.9C353.915 22.6512 353.101 23.024 351.982 23.024V27.024ZM346.394 24.564C347.857 26.2022 349.773 27.024 351.982 27.024V23.024C350.862 23.024 350.049 22.6512 349.378 21.9L346.394 24.564ZM344.286 18.176C344.286 20.6655 344.898 22.8889 346.394 24.564L349.378 21.9C348.74 21.1857 348.286 20.0385 348.286 18.176H344.286ZM346.394 11.788C344.898 13.4631 344.286 15.6865 344.286 18.176H348.286C348.286 16.3135 348.74 15.1663 349.378 14.452L346.394 11.788ZM351.982 9.264C349.748 9.264 347.826 10.1267 346.371 11.8141L349.401 14.4259C350.079 13.6386 350.887 13.264 351.982 13.264V9.264ZM357.593 11.8141C356.138 10.1267 354.215 9.264 351.982 9.264V13.264C353.076 13.264 353.884 13.6386 354.563 14.4259L357.593 11.8141ZM359.678 18.176C359.678 15.6865 359.065 13.4631 357.57 11.788L354.586 14.452C355.224 15.1662 355.678 16.3135 355.678 18.176H359.678ZM357.57 24.564C359.065 22.8889 359.678 20.6655 359.678 18.176H355.678C355.678 20.0385 355.224 21.1858 354.586 21.9L357.57 24.564ZM392.16 5.72836C394.239 3.33699 397.392 2 401.978 2V-2C396.581 -2 392.182 -0.39299 389.141 3.10364L392.16 5.72836ZM388.65 0.639999V4.416H392.65V0.639999H388.65ZM376.89 2.64H390.65V-1.36H376.89V2.64ZM378.89 35.648V0.639999H374.89V35.648H378.89ZM391.354 33.648H376.89V37.648H391.354V33.648ZM389.354 20.096V35.648H393.354V20.096H389.354ZM398.778 10.544C395.987 10.544 393.528 11.2565 391.784 13.0299C390.047 14.797 389.354 17.2789 389.354 20.096H393.354C393.354 17.8784 393.899 16.5843 394.637 15.8341C395.368 15.0902 396.621 14.544 398.778 14.544V10.544ZM402.272 10.8216C401.04 10.6391 399.874 10.544 398.778 10.544V14.544C399.646 14.544 400.613 14.6195 401.685 14.7784L402.272 10.8216ZM399.978 0V12.8H403.978V0H399.978ZM424.261 34.288C420.649 34.288 417.459 33.5753 414.65 32.1903L412.881 35.7777C416.302 37.4647 420.109 38.288 424.261 38.288V34.288ZM433.863 32.1951C431.106 33.5737 427.921 34.288 424.261 34.288V38.288C428.453 38.288 432.265 37.4664 435.652 35.7729L433.863 32.1951ZM440.293 26.46C438.796 28.8558 436.671 30.7717 433.853 32.2001L435.662 35.7679C439.073 34.039 441.769 31.6455 443.685 28.58L440.293 26.46ZM442.613 18.112C442.613 21.2594 441.832 24.0207 440.298 26.453L443.681 28.587C445.645 25.4726 446.613 21.9619 446.613 18.112H442.613ZM440.305 9.84685C441.832 12.23 442.613 14.9643 442.613 18.112H446.613C446.613 14.2624 445.645 10.7673 443.674 7.68915L440.305 9.84685ZM433.873 4.09774C436.673 5.47879 438.79 7.38503 440.286 9.8162L443.693 7.71981C441.776 4.60431 439.071 2.20121 435.642 0.510261L433.873 4.09774ZM424.261 2C427.921 2 431.106 2.71435 433.863 4.09286L435.652 0.515144C432.265 -1.17835 428.453 -2 424.261 -2V2ZM414.65 4.09774C417.459 2.71272 420.649 2 424.261 2V-2C420.109 -2 416.302 -1.17672 412.881 0.510261L414.65 4.09774ZM408.225 9.83502C409.77 7.38553 411.898 5.47364 414.66 4.09286L412.871 0.515144C409.489 2.20636 406.795 4.6038 404.842 7.70098L408.225 9.83502ZM405.909 18.112C405.909 14.9643 406.691 12.23 408.217 9.84685L404.849 7.68915C402.877 10.7673 401.909 14.2624 401.909 18.112H405.909ZM408.225 26.453C406.691 24.0207 405.909 21.2594 405.909 18.112H401.909C401.909 21.9619 402.877 25.4726 404.842 28.587L408.225 26.453ZM414.68 32.2051C411.9 30.7769 409.764 28.8552 408.217 26.4411L404.849 28.5989C406.802 31.6461 409.487 34.0338 412.851 35.7629L414.68 32.2051ZM424.261 27.024C426.47 27.024 428.387 26.2022 429.849 24.564L426.866 21.9C426.195 22.6512 425.381 23.024 424.261 23.024V27.024ZM418.674 24.564C420.136 26.2022 422.053 27.024 424.261 27.024V23.024C423.142 23.024 422.328 22.6512 421.657 21.9L418.674 24.564ZM416.565 18.112C416.565 20.6064 417.18 22.8318 418.651 24.5379L421.68 21.9261C421.018 21.1576 420.565 19.9696 420.565 18.112H416.565ZM418.674 11.724C417.178 13.3991 416.565 15.6225 416.565 18.112H420.565C420.565 16.2495 421.02 15.1023 421.657 14.388L418.674 11.724ZM424.261 9.264C422.053 9.264 420.136 10.0858 418.674 11.724L421.657 14.388C422.328 13.6368 423.142 13.264 424.261 13.264V9.264ZM429.849 11.724C428.387 10.0858 426.47 9.264 424.261 9.264V13.264C425.381 13.264 426.195 13.6368 426.866 14.388L429.849 11.724ZM431.957 18.112C431.957 15.6225 431.345 13.3991 429.849 11.724L426.866 14.388C427.503 15.1023 427.957 16.2495 427.957 18.112H431.957ZM429.872 24.5379C431.343 22.8318 431.957 20.6064 431.957 18.112H427.957C427.957 19.9696 427.505 21.1576 426.843 21.9261L429.872 24.5379ZM92 145.635L91.712 99.6995L87.712 99.7245L88 145.661L92 145.635ZM120.96 143.648H90V147.648H120.96V143.648ZM118.672 44.8537L118.96 145.654L122.96 145.642L122.672 44.8423L118.672 44.8537ZM92.736 46.848H120.672V42.848H92.736V46.848ZM62.4866 99.5829L94.4546 45.8709L91.0174 43.8251L59.0494 97.5371L62.4866 99.5829ZM26.2296 45.8911L59.0616 99.6031L62.4745 97.5169L29.6425 43.8049L26.2296 45.8911ZM0 46.848H27.936V42.848H0V46.848ZM2 145.648V44.848H-2V145.648H2ZM30.96 143.648H0V147.648H30.96V143.648ZM28.96 101.296V145.648H32.96V101.296H28.96ZM54.5475 135.522L32.6595 100.242L29.2605 102.35L51.1485 137.63L54.5475 135.522ZM67.824 134.576H52.848V138.576H67.824V134.576ZM87.9923 98.6909L66.1043 135.555L69.5437 137.597L91.4317 100.733L87.9923 98.6909ZM166.927 66.88V145.648H170.927V66.88H166.927ZM136.383 68.88H168.927V64.88H136.383V68.88ZM138.383 145.648V66.88H134.383V145.648H138.383ZM168.927 143.648H136.383V147.648H168.927V143.648ZM152.655 58.544C147.159 58.544 142.897 57.1098 139.687 54.4062L137.11 57.4658C141.196 60.9062 146.439 62.544 152.655 62.544V58.544ZM165.579 54.2994C162.479 57.0646 158.243 58.544 152.655 58.544V62.544C158.97 62.544 164.238 60.8554 168.242 57.2846L165.579 54.2994ZM170.239 43.408C170.239 47.8623 168.681 51.4488 165.557 54.3193L168.264 57.2647C172.244 53.6072 174.239 48.9377 174.239 43.408H170.239ZM165.626 33.421C168.717 36.0104 170.239 39.2854 170.239 43.408H174.239C174.239 38.1226 172.208 33.7176 168.195 30.355L165.626 33.421ZM152.655 29.424C158.273 29.424 162.526 30.824 165.626 33.421L168.195 30.355C164.191 27 158.94 25.424 152.655 25.424V29.424ZM139.71 33.6861C142.921 30.8976 147.174 29.424 152.655 29.424V25.424C146.424 25.424 141.172 27.1184 137.087 30.6659L139.71 33.6861ZM135.071 43.984C135.071 39.75 136.605 36.3713 139.707 33.6887L137.09 30.6633C133.088 34.1247 131.071 38.618 131.071 43.984H135.071ZM139.73 54.4434C136.607 51.6586 135.071 48.2195 135.071 43.984H131.071C131.071 49.3486 133.086 53.8774 137.067 57.4286L139.73 54.4434ZM221.943 145.952C213.738 145.952 205.728 145.056 197.91 143.266L197.017 147.166C205.135 149.024 213.444 149.952 221.943 149.952V145.952ZM246.794 141.647C240.099 144.49 231.837 145.952 221.943 145.952V149.952C232.209 149.952 241.036 148.438 248.357 145.329L246.794 141.647ZM261.919 130.103C258.627 134.82 253.629 138.691 246.782 141.652L248.369 145.324C255.73 142.141 261.388 137.852 265.199 132.393L261.919 130.103ZM266.887 113.968C266.887 119.904 265.231 125.269 261.91 130.118L265.209 132.378C268.991 126.859 270.887 120.704 270.887 113.968H266.887ZM261.52 98.0515C265.027 101.815 266.887 107.039 266.887 113.968H270.887C270.887 106.305 268.812 100.009 264.447 95.3246L261.52 98.0515ZM248.65 89.5064C253.606 91.2184 257.884 94.0518 261.503 98.0333L264.463 95.3427C260.403 90.8762 255.561 87.6616 249.956 85.7256L248.65 89.5064ZM229.495 84.5417C237.106 85.9688 243.473 87.6241 248.62 89.4956L249.987 85.7364C244.574 83.7679 237.981 82.0632 230.232 80.6103L229.495 84.5417ZM216.353 81.2835C219.109 82.3045 223.52 83.3853 229.483 84.5396L230.243 80.6124C224.303 79.4627 220.169 78.4315 217.742 77.5325L216.353 81.2835ZM211.159 74.8C211.159 76.2785 211.649 77.6237 212.603 78.7537C213.525 79.8469 214.808 80.6554 216.293 81.2602L217.802 77.5558C216.694 77.1046 216.034 76.6171 215.66 76.1743C215.317 75.7683 215.159 75.3376 215.159 74.8H211.159ZM226.263 66.464C221.798 66.464 218.158 66.9935 215.565 68.2474C214.241 68.8875 213.119 69.7503 212.332 70.8928C211.533 72.0512 211.159 73.38 211.159 74.8H215.159C215.159 74.108 215.332 73.5888 215.625 73.1632C215.929 72.7217 216.446 72.2645 217.306 71.8486C219.081 70.9905 221.993 70.464 226.263 70.464V66.464ZM255.245 74.1666C245.147 69.0685 235.478 66.464 226.263 66.464V70.464C234.713 70.464 243.764 72.8515 253.442 77.7374L255.245 74.1666ZM262.72 50.5611L252.496 75.1851L256.19 76.7189L266.414 52.0949L262.72 50.5611ZM246.436 46.8036C252.992 48.2083 258.699 50.3043 263.582 53.0685L265.553 49.5875C260.26 46.5917 254.159 44.3677 247.274 42.8924L246.436 46.8036ZM226.551 44.544C233.314 44.544 239.93 45.2952 246.404 46.7963L247.307 42.8997C240.533 41.3288 233.613 40.544 226.551 40.544V44.544ZM201.548 48.8527C208.345 46.0055 216.659 44.544 226.551 44.544V40.544C216.284 40.544 207.414 42.0584 200.003 45.1633L201.548 48.8527ZM186.585 60.3785C189.88 55.5702 194.825 51.7075 201.557 48.8489L199.994 45.1671C192.709 48.2605 187.095 52.5578 183.286 58.1175L186.585 60.3785ZM181.607 76.528C181.607 70.592 183.263 65.2267 186.585 60.3785L183.286 58.1175C179.503 63.6373 177.607 69.792 177.607 76.528H181.607ZM186.862 92.6233C183.426 88.7578 181.607 83.4671 181.607 76.528H177.607C177.607 84.1809 179.628 90.5062 183.873 95.2807L186.862 92.6233ZM199.598 101.293C194.724 99.4875 190.479 96.6016 186.847 92.6066L183.887 95.2973C187.936 99.7504 192.714 103.009 198.209 105.043L199.598 101.293ZM218.754 106.395C211.03 104.773 204.641 103.067 199.567 101.281L198.24 105.055C203.534 106.917 210.105 108.667 217.933 110.309L218.754 106.395ZM232.058 109.956C229.283 108.825 224.808 107.644 218.748 106.393L217.939 110.311C223.975 111.556 228.14 112.679 230.549 113.66L232.058 109.956ZM237.335 116.56C237.335 115.039 236.837 113.654 235.852 112.494C234.9 111.371 233.572 110.551 232.035 109.946L230.572 113.67C231.722 114.121 232.411 114.621 232.802 115.082C233.162 115.506 233.335 115.969 233.335 116.56H237.335ZM233.171 122.542C234.394 121.96 235.449 121.181 236.199 120.145C236.966 119.086 237.335 117.866 237.335 116.56H233.335C233.335 117.078 233.201 117.466 232.959 117.799C232.702 118.155 232.245 118.552 231.452 118.93L233.171 122.542ZM222.231 124.032C226.967 124.032 230.682 123.61 233.099 122.574L231.524 118.898C229.909 119.59 226.904 120.032 222.231 120.032V124.032ZM204.567 121.513C210.669 123.186 216.56 124.032 222.231 124.032V120.032C216.959 120.032 211.426 119.246 205.624 117.655L204.567 121.513ZM187.964 114.546C192.92 117.42 198.448 119.737 204.538 121.505L205.653 117.663C199.839 115.975 194.615 113.78 189.971 111.086L187.964 114.546ZM179.853 138.392L190.797 113.624L187.138 112.008L176.194 136.776L179.853 138.392ZM197.937 143.273C190.204 141.387 183.938 138.91 179.08 135.886L176.966 139.282C182.285 142.594 188.979 145.205 196.989 147.159L197.937 143.273ZM335.035 141.173C330.555 143.721 324.27 145.088 316.008 145.088V149.088C324.642 149.088 331.701 147.671 337.013 144.651L335.035 141.173ZM326.357 120.954L334.133 143.562L337.915 142.262L330.139 119.654L326.357 120.954ZM320.904 124.464C324.052 124.464 326.901 123.643 329.375 121.956L327.121 118.652C325.371 119.845 323.324 120.464 320.904 120.464V124.464ZM314.542 121.809C316.209 123.603 318.393 124.464 320.904 124.464V120.464C319.383 120.464 318.303 119.981 317.474 119.087L314.542 121.809ZM312.136 114.832C312.136 117.577 312.856 119.992 314.542 121.809L317.474 119.087C316.664 118.216 316.136 116.887 316.136 114.832H312.136ZM312.136 94.96V114.832H316.136V94.96H312.136ZM330.264 92.96H314.136V96.96H330.264V92.96ZM328.264 71.2V94.96H332.264V71.2H328.264ZM314.136 73.2H330.264V69.2H314.136V73.2ZM312.136 49.168V71.2H316.136V49.168H312.136ZM281.592 51.168H314.136V47.168H281.592V51.168ZM283.592 71.2V49.168H279.592V71.2H283.592ZM270.792 73.2H281.592V69.2H270.792V73.2ZM272.792 94.96V71.2H268.792V94.96H272.792ZM281.592 92.96H270.792V96.96H281.592V92.96ZM283.592 115.12V94.96H279.592V115.12H283.592ZM291.861 137.684C286.454 132.801 283.592 125.406 283.592 115.12H279.592C279.592 126.146 282.682 134.783 289.179 140.652L291.861 137.684ZM316.008 145.088C305.267 145.088 297.313 142.52 291.847 137.672L289.193 140.664C295.631 146.376 304.669 149.088 316.008 149.088V145.088Z'
							fill='#0070F3'
							mask='url(#path-1-inside-1)'
						/>
					</svg>
				</div>
			</a>
		</Link>
	)
}

export default BlueLogo
