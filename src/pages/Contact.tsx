import { PageLayout } from '../components/PageLayout'

const SUPPORT_EMAIL = 'support@knotwith.com'

export function Contact() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SUPPORT_EMAIL)
    alert('メールアドレスをコピーしました')
  }

  const handleSendEmail = () => {
    const subject = encodeURIComponent('【箱庭】お問い合わせ')
    const body = encodeURIComponent(`【お問い合わせ種別】
（例: 不具合報告 / 機能リクエスト / 使い方 / その他）

【お問い合わせ内容】




`)
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <PageLayout title="お問い合わせ">
      {/* Main Card */}
      <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lifted text-center mb-8">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-warm/30 to-warm/10 flex items-center justify-center">
          <svg className="w-10 h-10 text-warm-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="font-klee text-xl font-semibold text-primary mb-3">
          ご質問・ご意見をお聞かせください
        </h2>
        <p className="text-text-muted leading-relaxed mb-8">
          不具合の報告や機能のリクエストなど、
          <br className="hidden sm:block" />
          お気軽にお問い合わせください。
        </p>

        {/* Email Button */}
        <button
          onClick={handleSendEmail}
          className="w-full max-w-sm mx-auto flex items-center justify-center gap-3 bg-warm text-white px-8 py-4 rounded-2xl font-medium hover:bg-warm-dark transition-colors duration-300 shadow-soft"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
          <span>メールで問い合わせる</span>
        </button>

        {/* Email Display */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="text-text-muted text-sm">{SUPPORT_EMAIL}</span>
          <button
            onClick={handleCopyEmail}
            className="p-1.5 rounded-lg hover:bg-background-alt transition-colors"
            title="メールアドレスをコピー"
          >
            <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
            </svg>
          </button>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-white rounded-2xl p-6 border border-earth-light">
        <div className="flex items-center gap-2 mb-4">
          <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <h3 className="font-semibold text-primary text-sm">お問い合わせについて</h3>
        </div>
        <ul className="space-y-2">
          <InfoItem>返信まで数日かかる場合があります</InfoItem>
          <InfoItem>お問い合わせ内容によっては返信できない場合があります</InfoItem>
          <InfoItem>アプリ内からお問い合わせいただくと、サポートがスムーズです</InfoItem>
        </ul>
      </div>
    </PageLayout>
  )
}

function InfoItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="w-1 h-1 rounded-full bg-text-light mt-2.5 shrink-0" />
      <span className="text-text-muted text-sm">{children}</span>
    </li>
  )
}
