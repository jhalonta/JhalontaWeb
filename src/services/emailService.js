// Ejemplo de servicio. Puedes reemplazar por EmailJS, Resend, etc.
export async function sendContact(form){
  // Aquí iría la integración real. Por ahora sólo simula.
  return new Promise((res)=> setTimeout(res, 500))
}
