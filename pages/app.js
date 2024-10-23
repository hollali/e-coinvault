import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps}) {
	return(
	<MoralisProvider
	apiKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImI3ZjZhODg0LWFhNmUtNDE2NS04NDMzLWUxZGQ2ZjZkZGY3MCIsIm9yZ0lkIjoiNDEwNDIxIiwidXNlcklkIjoiNDIxNzcxIiwidHlwZUlkIjoiM2ViZDZjOTktZmY5My00Y2FiLThjNzUtOTkxM2IwMGNmMzMyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjgwMjg2MzAsImV4cCI6NDg4Mzc4ODYzMH0.A5X4q7IQwuWBGlILQcS9XzUG2fQ20OCMkleUqPMyP-8'
	>
		<Component {...pageProps} />
	</MoralisProvider>
	)
}

export default MyApp