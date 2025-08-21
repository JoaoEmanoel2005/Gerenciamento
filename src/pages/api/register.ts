import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { nome, email, senha } = req.body;

    // Aqui você faria a lógica de salvar no banco de dados
    // Por enquanto vamos só simular
    console.log("Novo usuário:", { nome, email, senha });

    return res.status(201).json({ success: true, message: "Usuário cadastrado com sucesso!" });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).json({ message: `Método ${req.method} não permitido` });
}
