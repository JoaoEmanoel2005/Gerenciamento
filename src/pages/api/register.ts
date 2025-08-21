import type { NextApiRequest, NextApiResponse } from "next";
import { Usuario } from "@/utils/classes/usuario";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { nome, email, senha, cep } = req.body;

    if (!nome || !email || !senha || !cep) {
      return res.status(400).json({ success: false, message: "Todos os campos são obrigatórios" });
    }

    try {
      const usuario = new Usuario(nome, email, senha, cep);
      await usuario.salvar();

      return res.status(201).json({ 
        success: true, 
        message: "Usuário cadastrado com sucesso!", 
        id: usuario.getId(),
        cidade: usuario.getCidade()
      });
    } catch (err: any) {
      console.error(err);
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ success: false, message: "Email já cadastrado" });
      }
      if (err.code === "ER_BAD_NULL_ERROR") {
        return res.status(400).json({ success: false, message: "CEP inválido" });
      }

      return res.status(500).json({ success: false, message: "Erro ao cadastrar usuário" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).json({ message: `Método ${req.method} não permitido` });
}
