import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import imgLogo from './assets/logo.png'
import imgFeature1 from './assets/feature1.png'
import imgFeature2 from './assets/feature2.png'
import imgFeature3 from './assets/feature3.png'

// Figma assets (7日間有効 - 本番では静的ファイルに置き換え)
const imgAppIcon = "https://www.figma.com/api/mcp/asset/edda23b9-be03-4d6c-bf6b-76d6dff979ba";
const imgFooterLogo = "https://www.figma.com/api/mcp/asset/6d3e20c6-09bc-4864-9dfa-995dae2b76c9";

const TESTFLIGHT_URL = 'https://testflight.apple.com/join/wV3fVbg2'

// スクロールアニメーション用フック
function useFadeIn() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}

// フェードインセクションコンポーネント
function FadeInSection({ children, className = '', id }: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = useFadeIn()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id={id} className={`fade-in-section ${className}`}>
      {children}
    </section>
  )
}

// 装飾的なブロブ
function DecorativeBlob({ className = '', color = 'accent' }: { className?: string; color?: string }) {
  const colorMap: Record<string, string> = {
    accent: 'bg-accent/30',
    warm: 'bg-warm/40',
    green: 'bg-green/30',
    earth: 'bg-earth-light/50',
  }
  return (
    <div className={`absolute deco-blob ${colorMap[color]} blur-3xl ${className}`} aria-hidden="true" />
  )
}

// フィーチャーカード
function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-soft hover-lift">
      <div className="w-16 h-16 rounded-2xl bg-accent-light flex items-center justify-center text-3xl mb-6">
        {icon}
      </div>
      <h3 className="font-klee text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-text-muted leading-relaxed">{description}</p>
    </div>
  )
}

// ステップカード
function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-soft">
        {number}
      </div>
      <div>
        <h3 className="font-klee text-xl font-semibold text-primary mb-1">{title}</h3>
        <p className="text-text-muted">{description}</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="bg-background min-h-screen font-zen overflow-hidden">
      {/* Header */}
      <header className="relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-8">
          <img src={imgLogo} alt="nook" className="h-8 lg:h-10" />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-text-muted hover:text-primary transition-colors duration-300">特徴</a>
            <a href="#howto" className="text-text-muted hover:text-primary transition-colors duration-300">使い方</a>
            <a
              href={TESTFLIGHT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-light transition-colors duration-300"
            >
              ダウンロード
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-8 lg:pt-16 pb-32 lg:pb-48">
        {/* Background decorations */}
        <DecorativeBlob className="w-[600px] h-[600px] -top-32 -right-48" color="accent" />
        <DecorativeBlob className="w-[400px] h-[400px] top-1/2 -left-32" color="warm" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-klee text-3xl sm:text-5xl lg:text-display font-bold text-primary mb-8 leading-tight">
              <span className="inline-block sm:inline">予定が、</span>
              <span className="gradient-text">あなたの世界</span>
              <span className="inline-block sm:inline">になる</span>
            </h1>
            <p className="text-lg lg:text-xl text-text-muted leading-relaxed mb-10">
              カレンダー・天気・時間。<br />
              日常のすべてが、箱庭として広がる新しい体験。
            </p>
            <div className="flex flex-col items-center gap-3">
              <a
                href={TESTFLIGHT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-medium hover:bg-primary-light transition-colors duration-300 hover-lift shadow-soft"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13v6l5.25 3.15.75-1.23-4.5-2.67V7H11z"/>
                </svg>
                <span className="text-lg">TestFlightで体験する</span>
              </a>
              <p className="text-sm text-text-muted">現在ベータ版を公開中</p>
            </div>
          </div>

          {/* Hero Video */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-warm/20 rounded-[2.5rem] blur-2xl transform scale-105" />
            <div className="relative rounded-[2rem] shadow-lifted overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/pzu5Sb9D3Q8"
                title="nook - 予定が、あなたの世界になる"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <FadeInSection id="features" className="relative py-24 lg:py-32 bg-background-alt paper-texture">
        <DecorativeBlob className="w-[500px] h-[500px] top-0 right-0" color="green" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-primary text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="font-klee text-3xl lg:text-heading font-bold text-primary">
              nookでできること
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <FeatureCard
              icon="🌅"
              title="リアルタイムな世界"
              description="天気や時間が箱庭に反映。雨が降れば世界も雨、夜になれば街に明かりが灯ります。"
            />
            <FeatureCard
              icon="📅"
              title="予定が出来事に"
              description="カレンダーの予定が箱庭の中で出来事として表現されます。日々の予定を見るのが楽しくなる。"
            />
            <FeatureCard
              icon="👥"
              title="フレンドとつながる"
              description="友達の箱庭を覗いたり、同じ時間を共有したり。ゆるやかなつながりが生まれます。"
            />
          </div>
        </div>
      </FadeInSection>

      {/* Feature Detail 1 */}
      <FadeInSection className="relative py-24 lg:py-32 overflow-hidden">
        <DecorativeBlob className="w-[600px] h-[600px] -bottom-48 -left-48" color="warm" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image - 7:5 ratio grid */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-warm/30 to-accent/30 rounded-[2.5rem] blur-2xl" />
                <img
                  src={imgFeature1}
                  alt="箱庭イメージ"
                  className="relative rounded-[2rem] shadow-lifted w-full"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-warm rounded-full text-primary text-sm font-medium mb-6">
                01
              </span>
              <h2 className="font-klee text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
                あなたの毎日が、<br />世界になる
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                カレンダーに入力した予定が、箱庭の中で出来事として現れます。
                朝になれば光が差し、夜には街に明かりが灯る。
                あなただけの小さな世界が、毎日少しずつ変化していきます。
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Feature Detail 2 */}
      <FadeInSection className="relative py-24 lg:py-32 bg-background-alt paper-texture overflow-hidden">
        <DecorativeBlob className="w-[500px] h-[500px] top-0 -right-32" color="accent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-5">
              <span className="inline-block px-4 py-1.5 bg-green rounded-full text-primary text-sm font-medium mb-6">
                02
              </span>
              <h2 className="font-klee text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
                一人じゃない、<br />箱庭
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                フレンドの世界を覗いたり、同じ時間を共有したり。
                それぞれの箱庭がゆるやかにつながり、新しいコミュニケーションが生まれます。
                誰かの一日を、そっと感じることができる。
              </p>
            </div>

            {/* Image */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-green/30 to-accent/30 rounded-[2.5rem] blur-2xl" />
                <img
                  src={imgFeature2}
                  alt="フレンド機能イメージ"
                  className="relative rounded-[2rem] shadow-lifted w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Feature Detail 3 */}
      <FadeInSection className="relative py-24 lg:py-32 overflow-hidden">
        <DecorativeBlob className="w-[600px] h-[600px] -bottom-48 -right-48" color="earth" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-earth/30 rounded-[2.5rem] blur-2xl" />
                <img
                  src={imgFeature3}
                  alt="天気連動イメージ"
                  className="relative rounded-[2rem] shadow-lifted w-full"
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-primary text-sm font-medium mb-6">
                03
              </span>
              <h2 className="font-klee text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
                現実とつながる
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                天気や時間、カレンダーの情報がそのまま箱庭に反映されます。
                雨が降れば、世界にも雨が降る。時間が変われば、空の色も変わる。
                現実とリンクした、リアルな世界が広がります。
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* How to Use Section */}
      <FadeInSection id="howto" className="relative py-24 lg:py-32 bg-gradient-to-b from-accent-light to-background">
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white rounded-full text-primary text-sm font-medium mb-4 shadow-soft">
              How to Use
            </span>
            <h2 className="font-klee text-3xl lg:text-heading font-bold text-primary mb-4">
              体験の流れ
            </h2>
            <p className="text-text-muted text-lg">
              たった3ステップで、世界ができる
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-lifted">
            <div className="space-y-10">
              <StepCard
                number={1}
                title="予定を入力する"
                description="いつものカレンダーのように予定を追加するだけ"
              />
              <div className="border-l-2 border-dashed border-accent ml-6 h-6" />
              <StepCard
                number={2}
                title="箱庭に変わる"
                description="予定が世界の中の出来事として表現される"
              />
              <div className="border-l-2 border-dashed border-accent ml-6 h-6" />
              <StepCard
                number={3}
                title="フレンドとつながる"
                description="世界を共有して、新しい体験へ"
              />
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Download Section */}
      <FadeInSection className="relative py-24 lg:py-32 overflow-hidden">
        <DecorativeBlob className="w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="accent" />

        <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-br from-warm to-accent rounded-[2rem] blur-xl opacity-50" />
              <img
                src={imgAppIcon}
                alt="nook"
                className="relative w-40 h-40 lg:w-52 lg:h-52 rounded-[2rem] shadow-lifted object-cover"
              />
            </div>
          </div>

          <img src={imgLogo} alt="nook" className="h-12 lg:h-16 mx-auto mb-4" />
          <p className="text-lg text-text-muted mb-10">
            今日の予定を、小さな世界に
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href={TESTFLIGHT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-medium hover:bg-primary-light transition-colors duration-300 hover-lift shadow-lifted"
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13v6l5.25 3.15.75-1.23-4.5-2.67V7H11z"/>
              </svg>
              <span className="text-xl">TestFlightで体験する</span>
            </a>
            <p className="text-text-muted">
              現在ベータ版を公開中です。<br className="sm:hidden" />
              TestFlightアプリからお試しいただけます。
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Footer */}
      <footer className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <img src={imgFooterLogo} alt="nook" className="h-14 lg:h-20 mx-auto mb-6" />
          <p className="text-white/80 mb-10 text-lg">今日の予定を、小さな世界に</p>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
            <Link to="/contact" className="text-white/70 hover:text-white transition-colors duration-300">
              サポート・お問い合わせ
            </Link>
            <Link to="/terms" className="text-white/70 hover:text-white transition-colors duration-300">
              利用規約
            </Link>
            <Link to="/privacy" className="text-white/70 hover:text-white transition-colors duration-300">
              プライバシーポリシー
            </Link>
          </nav>

          <div className="pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm">
              © 2026 Knot. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
