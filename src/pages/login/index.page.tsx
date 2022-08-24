/* eslint-disable react/forbid-dom-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MdLock as LockIcon } from 'react-icons/md'

import { DataTypes } from '~/utils/Types'

import {
	LoginStyle,
	LoginButton,
	LoginInput,
	LoginTitle,
	OtherLogin,
	LoginForm,
} from './LoginPageStyle'

export default function Login() {
	const [random, setRandom] = useState(10)

	useEffect(() => setRandom(Math.floor(Math.random() * 9)), [])

	return (
		<LoginStyle>
			<LoginForm>
				<form onSubmit={e => e.preventDefault()}>
					<LoginTitle>
						{random < 5 ? (
							<LockIcon width={75} height={75} />
						) : (
							<svg
								id="logo"
								viewBox="-0.261 0.894 259.337 257.393"
								width="259.337"
								height="257.393"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill="#E1E1E1"
									opacity="1.000000"
									stroke="none"
									d="M 90.004 87.715 C 146.954 143.672 203.015 198.673 259.076 253.671 C 258.303 255.181 257.529 256.69 256.757 258.199 C 226.48 258.199 196.19 258.563 165.933 257.814 C 161.287 257.7 156.059 253.169 152.306 249.479 C 104.504 202.458 56.817 155.319 9.461 107.862 C 5.022 103.413 0.533 96.666 0.319 90.833 C -0.655 64.32 -0.107 37.752 -0.107 5.915 C 9.25 11.976 16.227 15.116 21.41 20.091 C 44.26 42.022 66.595 64.485 90.004 87.715 M 18.076 57.975 C 14.233 81.287 23.533 98.062 40.904 114.134 C 78.633 149.044 115.846 184.763 150.275 222.811 C 169.62 244.189 190.433 240.688 215.747 239.017 C 210.707 233.234 207.736 229.365 204.299 225.957 C 162.963 184.984 121.55 144.092 80.18 103.156 C 63.009 86.164 45.948 69.065 28.717 52.135 C 24.077 47.577 18.476 41.407 18.076 57.975 Z"
								/>
								<path
									fill="#F4F4F4"
									opacity="1.000000"
									stroke="none"
									d="M 234.989 169.137 C 234.989 178.864 234.989 186.868 234.989 200.068 C 217.705 183.339 204.217 168.439 188.815 155.84 C 169.423 139.978 162.041 121.516 163.905 96.378 C 166.222 65.097 164.46 33.519 164.46 0.894 C 188.11 0.894 210.237 0.894 234.989 0.894 C 234.989 56.616 234.989 112.014 234.989 169.137 Z"
								/>
								<path
									fill="#F0F0F0"
									opacity="1.000000"
									stroke="none"
									d="M 11.791 140.145 C 29.438 157.532 46.702 173.629 62.836 190.772 C 67.388 195.607 70.486 203.36 71.004 210.024 C 72.192 225.305 71.379 240.738 71.379 257.084 C 47.667 257.084 25.461 257.084 1.626 257.084 C 1.626 216.096 1.626 175.227 1.626 132.355 C 5.474 135.192 8.227 137.22 11.791 140.145 Z"
								/>
							</svg>
						)}
					</LoginTitle>
					<LoginInput
						type="text"
						placeholder="Email"
						required
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
					/>
					<LoginInput minLength={8} type="password" placeholder="Password" required />
					<LoginButton>login</LoginButton>
				</form>
				<OtherLogin>
					<Link href="/register">
						<a>Registrar</a>
					</Link>
					<Link href="password_reset">
						<a>Esqueci minha senha</a>
					</Link>
				</OtherLogin>
			</LoginForm>
		</LoginStyle>
	)
}

export async function getStaticProps() {
	const res = await fetch(`https://fakestoreapi.com/products`)
	const data: DataTypes = await res.json()

	return {
		props: {
			data,
		},
	}
}