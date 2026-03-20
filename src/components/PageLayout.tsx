import { Link } from 'react-router-dom'
import imgLogo from '../assets/logo.png'

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  updatedAt?: string
}

export function PageLayout({ children, title, updatedAt }: PageLayoutProps) {
  return (
    <div className="bg-background min-h-screen font-zen">
      {/* Header */}
      <header className="border-b border-earth-light/50">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-5">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src={imgLogo} alt="nook" className="h-8" />
          </Link>
          <Link
            to="/"
            className="text-text-muted hover:text-primary transition-colors duration-300 text-sm"
          >
            トップに戻る
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="mb-10">
          <h1 className="font-klee text-2xl lg:text-3xl font-bold text-primary mb-4">
            {title}
          </h1>
          {updatedAt && (
            <span className="inline-block px-3 py-1.5 bg-warm-light rounded-full text-xs text-text-muted">
              {updatedAt} 更新
            </span>
          )}
        </div>

        {/* Body */}
        <div className="prose-custom">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-10 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/60 text-sm">
            © 2026 Knot. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
