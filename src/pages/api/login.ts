import type { NextApiRequest, NextApiResponse } from "next";
import { Usuario } from "@/utils/classes/usuario";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, senha } = req.body;

    try {
      // Tenta logar
      const usuario = await Usuario.login(email, senha);

      if (!usuario) {
        return res.status(401).json({ success: false, message: "Credenciais inválidas" });
      }

      return res.status(200).json({ success: true, message: "Login efetuado com sucesso!" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Erro ao logar" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).json({ message: `Método ${req.method} não permitido` });
}
