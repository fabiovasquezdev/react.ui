
export const Failure = () => {
  const f: { [key in string]: string } = {
    "401":  "Não autorizado",
    "404": "Dado não encontrado",
    "405": "CORS",
    "500": 'Servidor em manutenção, tente novamente mais tarde',
  }
  return f
}