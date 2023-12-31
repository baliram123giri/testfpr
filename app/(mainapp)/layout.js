import { Inter } from 'next/font/google'
import { AsideBar } from '@/components/Aside/AsideBar'
import dynamic from 'next/dynamic'
dynamic(() => import('ag-grid-community/styles/ag-grid.css'), { ssr: false })
dynamic(() => import('ag-grid-community/styles/ag-theme-alpine.css'), { ssr: false })
dynamic(() => import('react-toastify/dist/ReactToastify.css'), { ssr: false })
dynamic(() => import('./aggrid.css'), { ssr: false })
dynamic(() => import('./globals.css'), { ssr: false })

const MyAccount = dynamic(() => import('@/components/Header/MyAccount/MyAccount'), { ssr: false })
const ReduxStore = dynamic(() => import('@/Providers/ReduxStore'), { ssr: false })
const Header = dynamic(() => import('@/components/Header/Header'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ReduxStore>
          <Header />
          <MyAccount />
          <AsideBar > {children}</AsideBar>
        </ReduxStore>
      </body>
    </html>
  )
}
