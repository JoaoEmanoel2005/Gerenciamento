// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from "next";

const users = [
  { email: "teste@email.com", password: "123456" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, senha } = req.body;

    const user = users.find(u => u.email === email && u.password === senha);
    if (user) return res.status(200).json({ success: true });

    return res.status(401).json({ success: false, message: "Credenciais inválidas" });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).json({ message: `Método ${req.method} não permitido` });
}
