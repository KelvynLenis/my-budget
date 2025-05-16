import { Header } from '@/components/Header'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full">
      <ProtectedRoute>
        <Header />
        {children}
      </ProtectedRoute>
    </div>
  )
}
