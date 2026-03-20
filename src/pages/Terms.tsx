import { PageLayout } from '../components/PageLayout'

export function Terms() {
  return (
    <PageLayout title="利用規約" updatedAt="2025年3月18日">
      <p className="text-text-muted leading-relaxed mb-10">
        本利用規約（以下「本規約」）は、nook（以下「本アプリ」）の利用条件を定めるものです。
        ユーザーの皆様には、本規約に同意いただいた上で、本アプリをご利用いただきます。
      </p>

      {/* 1. 適用 */}
      <SectionText
        number="01"
        title="適用"
        content="本規約は、ユーザーと本アプリ運営者との間の本アプリの利用に関わる一切の関係に適用されます。"
      />

      {/* 2. 利用登録 */}
      <SectionText
        number="02"
        title="利用登録"
        content="登録希望者が本規約に同意の上、所定の方法で利用登録を申請し、運営者がこれを承認することで、利用登録が完了します。"
      />

      {/* 3. 禁止事項 */}
      <SectionWithList
        number="03"
        title="禁止事項"
        intro="ユーザーは、以下の行為をしてはなりません。"
        items={[
          '法令または公序良俗に違反する行為',
          '犯罪行為に関連する行為',
          '本アプリのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為',
          '本アプリの運営を妨害するおそれのある行為',
          '他のユーザーに関する個人情報等を収集または蓄積する行為',
          '不正アクセスをし、またはこれを試みる行為',
          '他のユーザーに成りすます行為',
          'その他、運営者が不適切と判断する行為',
        ]}
      />

      {/* 4. 本アプリの提供の停止等 */}
      <SectionWithList
        number="04"
        title="本アプリの提供の停止等"
        intro="運営者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本アプリの全部または一部の提供を停止または中断することができます。"
        items={[
          '本アプリにかかるシステムの保守点検または更新を行う場合',
          '地震、落雷、火災、停電または天災などの不可抗力により、本アプリの提供が困難となった場合',
          'その他、運営者が本アプリの提供が困難と判断した場合',
        ]}
      />

      {/* 5. 免責事項 */}
      <ImportantSection number="05" title="免責事項">
        <p className="mb-4">
          運営者は、本アプリに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、
          特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）
          がないことを明示的にも黙示的にも保証しておりません。
        </p>
        <p className="mb-4">
          運営者は、本アプリに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。
        </p>
        <p>
          運営者は、本アプリに関して、ユーザーと他のユーザーまたは第三者との間において生じた
          取引、連絡または紛争等について一切責任を負いません。
        </p>
      </ImportantSection>

      {/* 6. サービス内容の変更等 */}
      <SectionText
        number="06"
        title="サービス内容の変更等"
        content="運営者は、ユーザーに通知することなく、本アプリの内容を変更しまたは本アプリの提供を中止することができ、これによってユーザーに生じた損害について一切の責任を負いません。"
      />

      {/* 7. 利用規約の変更 */}
      <SectionText
        number="07"
        title="利用規約の変更"
        content="運営者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができます。"
      />

      {/* 8. 準拠法・裁判管轄 */}
      <SectionText
        number="08"
        title="準拠法・裁判管轄"
        content="本規約の解釈にあたっては、日本法を準拠法とします。本アプリに関して紛争が生じた場合には、東京地方裁判所を専属的合意管轄とします。"
      />

      <p className="text-center text-text-light mt-12">以上</p>
    </PageLayout>
  )
}

// Section Components
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
