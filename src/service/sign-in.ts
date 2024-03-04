import uuidv4 from "@/utils/uuidv4"
import { ResponseDataApi } from "../types/responseDataApi"

export interface SignInServiceRequest {
    user: string
    pass: string
}
  
export default function getSignInService({user, pass}: SignInServiceRequest): Promise<ResponseDataApi> {
    // Simulate user and password match in DB
    return new Promise((resolve, reject) => setTimeout(() => {
        if (user === 'candidato@rdads.com.br' && pass === 'Candidato') {
            return resolve({
                message: 'Usuário autenticado com sucesso',
                data: { token: uuidv4(), name: 'Candidato' }
            })
        }

        reject({ message: 'Usuário ou senha inválida' })
    }, 1000))
}