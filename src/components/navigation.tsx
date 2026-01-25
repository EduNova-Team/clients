"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Stethoscope, Phone, Mail, Menu } from "lucide-react"

interface NavigationProps {
  onAppointmentClick: () => void
}

export function Navigation({ onAppointmentClick }: NavigationProps) {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-sm">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-12 items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+50498018671" className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
                <Phone className="w-4 h-4" />
                <span className="font-medium">9801-8671</span>
              </a>
              <a href="https://wa.me/50431997736" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
                <Phone className="w-4 h-4" />
                <span className="font-medium">WhatsApp: 3199-7736</span>
              </a>
            </div>
            <div className="text-sm font-medium">
              <span className="hidden sm:inline">✨ </span>30 Años de Experiencia en Medicina Regenerativa
            </div>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 w-full border-b-2 border-border bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/95 shadow-md">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-24 items-center justify-between">
            <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary shadow-sm">
                <Stethoscope className="w-7 h-7 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Clinica Medica Montoya</span>
                <span className="text-xs text-muted-foreground font-medium">Especialistas en Proloterapia</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Inicio
              </Link>
              <Link
                href="/#about"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Acerca de
              </Link>
              <Link
                href="/#tratamiento"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Proloterapia
              </Link>
              <Link
                href="/#testimonios"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Testimonios
              </Link>
              <Button
                size="default"
                onClick={onAppointmentClick}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all px-6"
              >
                <Phone className="w-4 h-4 mr-2" />
                Agendar Consulta
              </Button>
            </div>

            <button className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
