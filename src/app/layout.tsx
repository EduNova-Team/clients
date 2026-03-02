import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Proloterapia en Honduras | Clínica Médica Montoya | Tela, Atlántida",
  description:
    "Clínica Médica Montoya - Especialistas en Proloterapia en Honduras. 30 años de experiencia en medicina regenerativa. Tratamiento de dolor crónico, artritis reumatoide y lesiones musculoesqueléticas en Tela, Atlántida. Sin cirugía, resultados comprobados.",
  keywords: [
    "proloterapia en honduras",
    "proloterapia honduras",
    "medicina regenerativa honduras",
    "tratamiento dolor crónico honduras",
    "proloterapia tela",
    "proloterapia atlántida",
    "artritis reumatoide honduras",
    "dolor espalda honduras",
    "lesiones deportivas honduras",
    "medicina regenerativa tela",
    "dr giron montoya",
    "clinica montoya",
    "proloterapia sin cirugía",
    "tratamiento dolor articulaciones honduras",
  ],
  authors: [{ name: "Clínica Médica Montoya" }],
  creator: "Clínica Médica Montoya",
  publisher: "Clínica Médica Montoya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.clinicamontoya.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Proloterapia en Honduras | Clínica Médica Montoya | Tela, Atlántida",
    description:
      "Especialistas en Proloterapia en Honduras. 30 años de experiencia. Tratamiento efectivo para dolor crónico, artritis reumatoide y lesiones musculoesqueléticas. Ubicados en Tela, Atlántida.",
    url: "https://www.clinicamontoya.com",
    siteName: "Clínica Médica Montoya",
    locale: "es_HN",
    type: "website",
    images: [
      {
        url: "/Imagee.jpeg",
        width: 1280,
        height: 1280,
        alt: "Clínica Médica Montoya - Proloterapia en Honduras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proloterapia en Honduras | Clínica Médica Montoya",
    description: "Especialistas en Proloterapia en Honduras. 30 años de experiencia en medicina regenerativa.",
    images: ["/Imagee.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Clínica Médica Montoya",
    description:
      "Clínica especializada en Proloterapia en Honduras. 30 años de experiencia en medicina regenerativa y tratamiento de dolor crónico.",
    url: "https://www.clinicamontoya.com",
    telephone: "+50498018671",
    email: "clinicamontoyahn@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Boulevard Venecia, 10 cuadras al norte de Gasolinera Uno",
      addressLocality: "Tela",
      addressRegion: "Atlántida",
      addressCountry: "HN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "15.7753",
      longitude: "-87.4563",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    medicalSpecialty: [
      "Proloterapia",
      "Medicina Regenerativa",
      "Tratamiento de Dolor Crónico",
      "Artritis Reumatoide",
    ],
    areaServed: {
      "@type": "Country",
      name: "Honduras",
    },
    sameAs: [
      "https://www.facebook.com/alfredo.gironmontoya",
      "https://instagram.com/clinicamontoya",
    ],
  }

  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
