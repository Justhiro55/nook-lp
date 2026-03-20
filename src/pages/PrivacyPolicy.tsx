import { PageLayout } from '../components/PageLayout'

export function PrivacyPolicy() {
  return (
    <PageLayout title="プライバシーポリシー" updatedAt="2025年3月18日">
      <p className="text-text-muted leading-relaxed mb-10">
        nook（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。
        本プライバシーポリシーでは、本アプリがどのような情報を収集し、どのように利用するかを説明します。
      </p>

      {/* 1. 収集する情報 */}
      <Section number="01" title="収集する情報">
        <InfoCard
          icon="👤"
          title="アカウント情報"
          items={[
            'メールアドレス',
            '表示名',
            'プロフィール画像',
            '認証に使用するID（Apple ID、Googleアカウント）',
          ]}
        />
        <InfoCard
          icon="📍"
          title="位置情報"
          items={[
            '現在地の天気を表示するために使用',
            '位置情報の使用はユーザーの許可に基づきます',
          ]}
        />
        <InfoCard
          icon="📅"
          title="スケジュール情報"
          items={[
            'ユーザーが本アプリ内で作成したスケジュール',
            'Googleカレンダーと連携した場合、カレンダーの予定情報',
          ]}
        />
      </Section>

      {/* 2. 情報の利用目的 */}
      <SectionWithList
        number="02"
        title="情報の利用目的"
        intro="収集した情報は、以下の目的で利用します。"
        items={[
          '本アプリのサービス提供',
          'ユーザーサポート',
          'サービスの改善・開発',
        ]}
      />

      {/* 3. 第三者への提供 */}
      <SectionWithList
        number="03"
        title="第三者への提供"
        intro="以下の場合を除き、個人情報を第三者に提供することはありません。"
        items={[
          'ユーザーの同意がある場合',
          '法令に基づく場合',
          '人の生命、身体または財産の保護のために必要な場合',
        ]}
      />

      {/* 4. データの保存 */}
      <SectionText
        number="04"
        title="データの保存"
        content="ユーザーのデータは、Firebase（Google Cloud Platform）上に安全に保存されます。Googleのセキュリティ基準に従って管理されています。"
      />

      {/* 5. データの削除 */}
      <ImportantSection number="05" title="データの削除">
        <p>
          アカウントを削除すると、関連するすべてのデータが削除されます。
          設定画面の「アカウント」からアカウント削除を行うことができます。
        </p>
      </ImportantSection>

      {/* 6. お子様のプライバシー */}
      <SectionText
        number="06"
        title="お子様のプライバシー"
        content="本アプリは、13歳未満のお子様を対象としていません。13歳未満の方は、本アプリをご利用いただけません。"
      />

      {/* 7. プライバシーポリシーの変更 */}
      <SectionText
        number="07"
        title="プライバシーポリシーの変更"
        content="本ポリシーは、必要に応じて変更されることがあります。重要な変更がある場合は、アプリ内で通知します。"
      />

      {/* 8. お問い合わせ */}
      <Section number="08" title="お問い合わせ">
        <p className="text-text-muted leading-relaxed mb-4">
          プライバシーに関するご質問は、下記までお問い合わせください。
        </p>
        <div className="inline-block px-4 py-2 bg-warm-light rounded-lg">
          <a
            href="mailto:support@knotwith.com"
            className="text-primary font-medium hover:underline"
          >
            support@knotwith.com
          </a>
        </div>
      </Section>

      <p className="text-center text-text-light mt-12">以上</p>
    </PageLayout>
  )
}

// Section Components
function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl font-light text-earth">{number}</span>
        <h2 className="text-lg font-bold text-primary">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function SectionText({ number, title, content }: { number: string; title: string; content: string }) {
  return (
    <div className="mb-10 flex gap-4">
      <span className="text-2xl font-light text-earth w-8 shrink-0">{number}</span>
      <div>
        <h2 className="text-lg font-bold text-primary mb-3">{title}</h2>
        <p className="text-text-muted leading-relaxed">{content}</p>
      </div>
    </div>
  )
}

function SectionWithList({ number, title, intro, items }: { number: string; title: string; intro: string; items: string[] }) {
  return (
    <div className="mb-10 flex gap-4">
      <span className="text-2xl font-light text-earth w-8 shrink-0">{number}</span>
      <div>
        <h2 className="text-lg font-bold text-primary mb-3">{title}</h2>
        <p className="text-text-muted leading-relaxed mb-4">{intro}</p>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-warm mt-2.5 shrink-0" />
              <span className="text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ImportantSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 p-6 bg-white rounded-2xl border border-warm/30 shadow-soft">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xl font-light text-warm">{number}</span>
        <h2 className="text-lg font-bold text-primary">{title}</h2>
      </div>
      <div className="text-text-muted leading-relaxed">{children}</div>
    </div>
  )
}

function InfoCard({ icon, title, items }: { icon: string; title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-soft">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-warm-light flex items-center justify-center text-xl">
          {icon}
        </div>
        <h3 className="font-semibold text-primary">{title}</h3>
      </div>
      <ul className="space-y-2 pl-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-1 h-1 rounded-full bg-earth mt-2.5 shrink-0" />
            <span className="text-text-muted text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
