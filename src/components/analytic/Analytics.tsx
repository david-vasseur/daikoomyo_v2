"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

const Analytics = () => {
	const [enabled, setEnabled] = useState(false)

	useEffect(() => {
		
		const consent = localStorage.getItem("site-consent")
		if (consent === "true") {
		setEnabled(true)
		}
	}, [])

	if (!enabled) return null

	return (
		<>
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-DNFJ71X5ZW"
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
			>
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-DNFJ71X5ZW', {
					anonymize_ip: true
				});
				`}
			</Script>
		</>
	)
}

export default Analytics;
