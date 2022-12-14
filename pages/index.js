import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Qr from './components/qr'

export default function Home() {
  return (
		<div className='bg-[#D5E1EF] flex h-screen justify-center'>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='mt-20 mx-7'>
				<Qr />
			</main>
		</div>
	);
}
