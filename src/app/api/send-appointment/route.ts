import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, correo, telefono, tipoproblema, contexto } = body

    // Aquí iría la lógica para enviar el email
    // Por ejemplo, usando Resend, SendGrid, o Nodemailer
    // Por ahora, simularemos el envío exitoso

    console.log("[v0] Solicitud de consulta recibida:", {
      nombre,
      correo,
      telefono,
      tipoproblema,
      contexto,
    })

    // TODO: Implementar envío de email al doctor
    // const emailHtml = `
    //   <h2>Nueva Solicitud de Consulta</h2>
    //   <p><strong>Nombre:</strong> ${nombre}</p>
    //   <p><strong>Correo:</strong> ${correo}</p>
    //   <p><strong>Teléfono:</strong> ${telefono}</p>
    //   <p><strong>Tipo de Problema:</strong> ${tipoproblema}</p>
    //   <p><strong>Descripción:</strong> ${contexto}</p>
    // `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error al procesar la solicitud:", error)
    return NextResponse.json({ error: "Error al enviar la solicitud" }, { status: 500 })
  }
}
