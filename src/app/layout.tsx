import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Tempo - Modern SaaS Starter",
	description: "A modern full-stack starter template powered by Next.js",
};

const RootLayout = async ({
	                    children,
                    }: Readonly<{
	children: React.ReactNode;
}>) => {
	const supabase = await createClient()
	const {data: {user}} = await supabase.auth.getUser()

	return (
		<html lang="en" suppressHydrationWarning>
		<Script
			src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js"/>
		<body className={inter.className}>
		<Navbar/>
		{children}
		<TempoInit/>
		</body>
		</html>
	);
}
export default RootLayout