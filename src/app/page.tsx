"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Award,
  Users,
  Target,
  Heart,
  Stethoscope,
  Shield,
  Clock,
  Activity,
  Microscope,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
  Instagram,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { AppointmentForm } from "@/components/appointment-form"

export default function Home() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)

  return (
    <div className="min-h-screen">
      <Navigation onAppointmentClick={() => setShowAppointmentForm(true)} />

      {showAppointmentForm && <AppointmentForm onClose={() => setShowAppointmentForm(false)} />}

      <section className="relative px-6 py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(234,179,8,0.05),transparent_50%)]"></div>
        <div className="mx-auto max-w-7xl relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="space-y-8 order-1 lg:order-1">
              <Badge className="w-fit bg-primary/10 text-primary border border-primary/30 px-4 py-1.5 text-sm">
                <Shield className="w-4 h-4 mr-2 inline" />
                Certificado en Medicina Regenerativa
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground">
                  Proloterapia en Honduras | Clínica Médica Montoya
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-primary via-primary/50 to-accent rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
                Especialistas en <span className="text-primary font-semibold">Proloterapia en Honduras</span> con{" "}
                <span className="text-primary font-semibold">30 años de experiencia</span> dedicados a la medicina
                regenerativa en Tela, Atlántida. Formación certificada con instructores norteamericanos líderes en el campo.
                Tratamiento efectivo para dolor crónico, artritis reumatoide y lesiones musculoesqueléticas sin cirugía.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  { icon: Clock, text: "30+ Años de Práctica" },
                  { icon: Activity, text: "Certificación Internacional" },
                  { icon: Microscope, text: "Medicina Basada en Evidencia" },
                  { icon: Heart, text: "Atención Personalizada" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setShowAppointmentForm(true)}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 border-2 bg-background hover:bg-secondary"
                  onClick={() => document.getElementById("tratamiento")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Stethoscope className="w-5 h-5 mr-2" />
                  Conocer Tratamiento
                </Button>
              </div>
            </div>
            <div className="relative w-full order-2 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white">
                  <Image
                    src="/Imagee.jpeg"
                    alt="Clínica Médica Montoya - Especialistas en Proloterapia en Honduras, Tela Atlántida"
                    width={1280}
                    height={1280}
                    priority
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 512px"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl border border-border">
                  <div className="text-center">
                    <div className="text-3xl md:text-5xl font-bold text-primary">30+</div>
                    <div className="text-xs text-muted-foreground mt-1">Años de</div>
                    <div className="text-xs md:text-sm font-semibold text-foreground">Experiencia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-white border-y-2 border-border shadow-sm">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              {
                number: "30+",
                label: "Años de Experiencia",
                sublabel: "En medicina regenerativa",
                color: "text-blue-600",
              },
              {
                number: "500+",
                label: "Pacientes Tratados",
                sublabel: "Con resultados exitosos",
                color: "text-teal-600",
              },
              {
                number: "100%",
                label: "Tasa de Éxito",
                sublabel: "Satisfacción del paciente",
                color: "text-purple-600",
              },
              {
                number: "100%",
                label: "Dedicación",
                sublabel: "A su recuperación",
                color: "text-amber-600",
              },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2 group">
                <div
                  className={`text-4xl md:text-5xl font-bold ${stat.color} group-hover:scale-110 transition-transform`}
                >
                  {stat.number}
                </div>
                <div className="text-sm md:text-base font-semibold text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border border-primary/30">Conozca al Doctor</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
              Proloterapia en Honduras: Experiencia y Formación de
              <br />
              <span className="text-primary">Clínica Médica Montoya</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Descubra la trayectoria profesional y cómo la proloterapia en Honduras puede transformar su calidad de vida.
              Especialistas en medicina regenerativa ubicados en Tela, Atlántida.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-2xl border-2">
              <div className="aspect-video bg-black">
                <video controls className="w-full h-full object-cover">
                  <source src="/video.MP4" type="video/mp4" />
                  Su navegador no soporta el elemento de video.
                </video>
              </div>
              <div className="p-8 bg-white border-t-2 border-border">
                <h3 className="font-bold text-xl mb-3 text-foreground">Sobre el Dr. Alfredo Girón Montoya - Proloterapia en Honduras</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Con <span className="font-semibold text-foreground">30 años de experiencia</span> en medicina
                  regenerativa y formación con instructores norteamericanos líderes en el campo, el Dr. Girón Montoya se
                  especializa en proloterapia en Honduras para el tratamiento efectivo de condiciones musculoesqueléticas crónicas.
                  Su enfoque basado en evidencia científica y atención personalizada ha transformado la vida de miles de
                  pacientes en Honduras, ofreciendo alternativas no quirúrgicas para recuperar la movilidad y eliminar el dolor.
                  Ubicados en Tela, Atlántida, somos la clínica de referencia para proloterapia en Honduras.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="tratamiento" className="px-6 py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border border-primary/30">Tratamiento</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
              ¿Qué es la <span className="text-primary">Proloterapia en Honduras</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              La proloterapia es un tratamiento de medicina regenerativa que estimula la curación natural del cuerpo para eliminar el dolor
              crónico sin cirugía. En Clínica Médica Montoya, ubicada en Tela, Atlántida, ofrecemos este tratamiento efectivo para pacientes en Honduras.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Tratamiento Regenerativo",
                description:
                  "Estimula la regeneración natural de tejidos dañados mediante inyecciones precisas de solución que activa el proceso de curación del cuerpo",
                color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
                iconBg: "bg-blue-100",
              },
              {
                icon: Heart,
                title: "Alivio del Dolor Crónico",
                description:
                  "Altamente efectivo para eliminar dolor crónico en articulaciones, ligamentos y tendones sin necesidad de cirugía invasiva",
                color: "bg-teal-50 hover:bg-teal-100 border-teal-200",
                iconBg: "bg-teal-100",
              },
              {
                icon: Award,
                title: "Resultados Comprobados",
                description:
                  "Solución a largo plazo respaldada por 30 años de práctica clínica exitosa y múltiples estudios científicos",
                color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
                iconBg: "bg-purple-100",
              },
              {
                icon: Users,
                title: "Atención Personalizada",
                description:
                  "Cada protocolo de tratamiento es diseñado específicamente según las necesidades individuales y condición de cada paciente",
                color: "bg-amber-50 hover:bg-amber-100 border-amber-200",
                iconBg: "bg-amber-100",
              },
              {
                icon: Microscope,
                title: "Técnica Avanzada",
                description:
                  "Formación certificada con instructores norteamericanos líderes y actualización continua en las técnicas más modernas",
                color: "bg-green-50 hover:bg-green-100 border-green-200",
                iconBg: "bg-green-100",
              },
              {
                icon: Shield,
                title: "Procedimiento Seguro",
                description:
                  "Alternativa no quirúrgica con mínimos efectos secundarios, ideal para condiciones musculoesqueléticas crónicas",
                color: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200",
                iconBg: "bg-indigo-100",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className={`p-8 space-y-4 ${item.color} border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${item.iconBg} shadow-sm flex items-center justify-center border border-border`}
                >
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonios" className="px-6 py-20 md:py-32 bg-gradient-to-b from-secondary/20 to-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border border-primary/30">Experiencias Reales</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
              Testimonios de <span className="text-primary">Pacientes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Escuche las historias reales de pacientes que han recuperado su calidad de vida con proloterapia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                video: "Exp1.MP4",
                title: "Testimonio de Paciente",
                subtitle: "Caso real de recuperación exitosa",
                description: "Fue a hacerse cirugía a Estados Unidos pero no le sirvió de nada, tenía que usar bastón pero al trabajar con el Dr. Girón se pudo sanar. Ahora no necesita bastón, puede subir escaleras y lo más importante puede orar de rodillas al Señor",
              },
              {
                video: "Exp2.MP4",
                title: "Recuperación de Artritis Reumatoide",
                subtitle: "Caso real de recuperación exitosa",
                description: "María estaba bastante enferma de artritis reumatoide, le dolían las manos, espalda, brazos y pies. Trabajó con la Clinica Medica Montoya y pasó de no poder caminar a caminar con facilidad",
              },
              {
                video: "Exp3.MP4",
                title: "Alivio del Dolor Crónico",
                subtitle: "Caso real de recuperación exitosa",
                description: "Paciente que superó años de dolor en articulaciones y recuperó su calidad de vida",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2">
                <div className="aspect-video bg-black">
                  <video controls className="w-full h-full object-cover">
                    <source src={`/${testimonial.video}`} type="video/mp4" />
                    Su navegador no soporta el elemento de video.
                  </video>
                </div>
                <div className="p-6 bg-white border-t-2 border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/30">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{testimonial.title}</h3>
                      <p className="text-xs text-muted-foreground">{testimonial.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{testimonial.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border border-primary/30">Condiciones Tratadas</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
              ¿Qué Condiciones <span className="text-primary">Tratamos</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              La proloterapia en Honduras puede ayudar con una amplia variedad de condiciones musculoesqueléticas crónicas.
              En Clínica Médica Montoya, ubicada en Tela, Atlántida, tratamos pacientes de todo Honduras.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              "Dolor de espalda crónico",
              "Lesiones de rodilla",
              "Dolor de hombro",
              "Artritis degenerativa",
              "Lesiones deportivas",
              "Tendinitis crónica",
              "Dolor de cuello",
              "Esguinces de tobillo",
              "Dolor de cadera",
              "Síndrome del túnel carpiano",
              "Lesiones de ligamentos",
              "Bursitis crónica",
            ].map((condition, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-5 bg-gradient-to-r from-background to-secondary/30 rounded-xl border-2 border-border hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <span className="text-foreground font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-32 bg-gradient-to-br from-primary/10 via-white to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="mx-auto max-w-5xl relative">
          <Card className="p-10 md:p-16 text-center space-y-8 shadow-2xl border-4 border-primary/20 bg-white/95 backdrop-blur">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center border-4 border-primary/30">
              <Stethoscope className="w-10 h-10 text-primary" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
                Comience su Camino hacia
                <br />
                <span className="text-primary">la Recuperación</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Agende una consulta en Clinica Medica Montoya y descubra cómo la proloterapia puede ayudarle a recuperar
                su calidad de vida sin necesidad de cirugía
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="text-lg px-10 py-7 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                onClick={() => setShowAppointmentForm(true)}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta Ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 border-2 bg-white hover:bg-secondary"
                onClick={() => (window.location.href = "tel:+50498018671")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
            </div>
            <div className="pt-6 grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { icon: CheckCircle, text: "Consulta personalizada" },
                { icon: CheckCircle, text: "Plan de tratamiento individual" },
                { icon: CheckCircle, text: "Atención profesional" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground justify-center">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <footer className="px-6 py-16 border-t-2 border-border bg-gradient-to-b from-card to-secondary/20">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary">
                  <Stethoscope className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">Clinica Medica Montoya</div>
                  <div className="text-sm text-muted-foreground">Especialistas en Proloterapia</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                30 años de experiencia dedicados a la medicina regenerativa y el bienestar de nuestros pacientes a
                través de tratamientos innovadores y atención personalizada.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-foreground">Información de Contacto</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Teléfono</div>
                    <a href="tel:+50498018671" className="font-medium text-foreground hover:text-primary transition-colors">9801-8671</a>
                    <div className="text-xs text-muted-foreground mt-1">WhatsApp: <a href="https://wa.me/50431997736" className="font-medium text-foreground hover:text-primary transition-colors">3199-7736</a></div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Ubicación</div>
                    <div className="font-medium text-foreground">Tela, Atlántida<br />Boulevard Venecia, 10 cuadras al norte de Gasolinera Uno</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Instagram</div>
                    <a href="https://instagram.com/clinicamontoya" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">@clinicamontoya</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-foreground">Horario de Atención</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-3 bg-background rounded-lg border border-border">
                  <span className="text-muted-foreground">Lunes - Viernes</span>
                  <span className="font-medium text-foreground">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between p-3 bg-background rounded-lg border border-border">
                  <span className="text-muted-foreground">Sábado</span>
                  <span className="font-medium text-foreground">Cerrado</span>
                </div>
                <div className="flex justify-between p-3 bg-background rounded-lg border border-border">
                  <span className="text-muted-foreground">Domingo</span>
                  <span className="font-medium text-foreground">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2026 Clinica Medica Montoya. Todos los derechos reservados.</p>
            <p className="mt-2">Medicina Regenerativa | Proloterapia | Tela, Atlántida</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
