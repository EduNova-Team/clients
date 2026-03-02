"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Send, CheckCircle } from "lucide-react"

interface AppointmentFormProps {
  onClose: () => void
}

export function AppointmentForm({ onClose }: AppointmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [tipoproblema, setTipoproblema] = useState("")
  const [ubicacion, setUbicacion] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!ubicacion) {
      e.preventDefault()
      alert("Por favor, seleccione su ubicación")
      return
    }
    if (!tipoproblema) {
      e.preventDefault()
      alert("Por favor, seleccione el tipo de problema")
      return
    }
    setIsSubmitting(true)
    // El formulario se enviará automáticamente usando el action attribute
    // formsubmit.co redirigirá a la página _next después del envío
  }

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md p-8 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">¡Solicitud Enviada!</h3>
          <p className="text-muted-foreground">Nos pondremos en contacto contigo pronto para confirmar tu consulta.</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <Card className="w-full max-w-2xl my-8">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Agendar Consulta</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Complete el formulario y nos pondremos en contacto con usted
              </p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          <form 
            action="https://formsubmit.co/clinicamontoyahn@gmail.com" 
            method="POST"
            onSubmit={handleSubmit} 
            className="space-y-5"
          >
            <input type="hidden" name="_subject" value="Nueva Solicitud de Consulta - Clínica Montoya" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://www.clinicamontoya.com" />

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre Completo *</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  required
                  placeholder="Juan Pérez"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono *</Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  placeholder="9801-8671"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="correo">Correo Electrónico *</Label>
              <Input
                id="correo"
                name="correo"
                type="email"
                required
                placeholder="juan@ejemplo.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ubicacion">Ubicación de la Consulta *</Label>
              <input 
                type="hidden" 
                name="ubicacion" 
                value={ubicacion === "san-pedro-sula" ? "San Pedro Sula, Honduras" : ubicacion === "tela-atlantida" ? "Tela, Atlántida, Honduras" : ""} 
                required 
              />
              <Select value={ubicacion} onValueChange={setUbicacion} required>
                <SelectTrigger id="ubicacion">
                  <SelectValue placeholder="Seleccione su ubicación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="san-pedro-sula">San Pedro Sula, Honduras</SelectItem>
                  <SelectItem value="tela-atlantida">Tela, Atlántida, Honduras</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">
                Seleccione la ubicación donde desea recibir la consulta
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tipoproblema">Tipo de Problema *</Label>
              <input type="hidden" name="tipoproblema" value={tipoproblema} required />
              <Select value={tipoproblema} onValueChange={setTipoproblema} required>
                <SelectTrigger id="tipoproblema">
                  <SelectValue placeholder="Seleccione el tipo de problema" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dolor-espalda">Dolor de Espalda</SelectItem>
                  <SelectItem value="dolor-rodilla">Dolor de Rodilla</SelectItem>
                  <SelectItem value="dolor-hombro">Dolor de Hombro</SelectItem>
                  <SelectItem value="lesion-deportiva">Lesión Deportiva</SelectItem>
                  <SelectItem value="artritis">Artritis</SelectItem>
                  <SelectItem value="tendinitis">Tendinitis</SelectItem>
                  <SelectItem value="dolor-cuello">Dolor de Cuello</SelectItem>
                  <SelectItem value="dolor-cadera">Dolor de Cadera</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contexto">Descripción del Problema *</Label>
              <Textarea
                id="contexto"
                name="contexto"
                required
                placeholder="Describa brevemente su condición, cuánto tiempo ha tenido el problema, y cualquier tratamiento previo..."
                rows={5}
                className="resize-none"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Solicitud
                  </>
                )}
              </Button>
              <Button type="button" size="lg" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}
