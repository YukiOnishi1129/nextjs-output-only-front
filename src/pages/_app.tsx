import type { AppProps } from 'next/app'
import {TodoProvider} from "@/contexts/TodoContext"
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <TodoProvider>
            <Component {...pageProps}/>
        </TodoProvider>
    )
}

export default MyApp
