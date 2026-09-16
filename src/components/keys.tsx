'use client'

import { useState } from 'react'
import { KeyRound, GitCommitVertical, Fingerprint, Copy, Check } from 'lucide-react'

const cardStyle =
    'border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5'

const buttonStyle =
    'border-border dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-white px-4 py-2 text-center text-sm font-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none w-fit'

const PGP_FINGERPRINT = 'XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX'

function FingerprintCopy() {
    const [copied, setCopied] = useState(false)

    const copy = async () => {
        await navigator.clipboard.writeText(PGP_FINGERPRINT.replace(/\s/g, ''))
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <button
            onClick={copy}
            className="flex items-center gap-2 rounded-base border-2 border-border bg-bg px-3 py-2 font-mono text-xs transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY dark:border-darkBorder dark:bg-darkBg sm:text-sm"
        >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span className="truncate">{copied ? 'Copied!' : PGP_FINGERPRINT}</span>
        </button>
    )
}

export default function Keys() {
    return (
        <div className="mt-16">
            <h2 className="font-heading text-xl sm:text-2xl">Proof, not just claims</h2>
            <p className="mt-2 text-base sm:text-lg">
                A little cryptographic show and tell for anyone who wants to check me.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className={cardStyle}>
                    <KeyRound size={28} />
                    <h3 className="font-heading text-lg">OpenPGP</h3>
                    <p className="text-sm sm:text-base">
                        Encrypt something to me, the old-fashioned way. Key lives on hardware - it never
                        leaves my YubiKey.
                    </p>
                    <FingerprintCopy />
                    <a
                        className={buttonStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://keys.openpgp.org/search?q=Liebmann.nicholas1@gmail.com"
                    >
                        View key
                    </a>
                </div>

                <div className={cardStyle}>
                    <GitCommitVertical size={28} />
                    <h3 className="font-heading text-lg"> Signed commits</h3>
                    <p className="text-sm sm:text-base">
                        Every commit here is signed with a hardware-backed SSH key. Look for the green
                        "Verified" badge.
                    </p>
                    <a
                        className={buttonStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Liebmann5/0YearsExperience/commits/main"
                    >
                        View commits
                    </a>
                </div>

                <div className={cardStyle}>
                    <Fingerprint size={28} />
                    <h3 className="font-heading text-lg">AA research attestations</h3>
                    <p className="text-sm sm:text-base">
                        Seeded runs of AutoApply's research pipeline, signed and publicly timestamped
                        as well as reproducible, not just asserted.
                    </p>
                    <a
                        className={buttonStyle}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://search.sigstore.dev/?email=Liebmann.nicholas1@gmail.com"
                    >
                        View attestations
                    </a>
                </div>
            </div>
        </div>
    )
}