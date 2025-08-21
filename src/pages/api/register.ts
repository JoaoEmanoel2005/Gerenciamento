import type { NextApiRequest, NextApiResponse } from "next";
import { Usuario } from "@/utils/classes/usuario";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { nome, email, senha } = req.body;

    try {
      // Cria um novo usuário
      const usuario = new Usuario(nome, email, senha);
      await usuario.salvar();

      return res.status(201).json({ 
        success: true, 
        message: "Usuário cadastrado com sucesso!", 
        id: usuario.getId() 
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Erro ao cadastrar usuário" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).json({ message: `Método ${req.method} não permitido` });
}
