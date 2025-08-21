import { db } from '@/utils/db';
import bcrypt from 'bcryptjs';

export class Usuario {
  private id?: number;
  private nome: string;
  private email: string;
  private senha: string;

  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  // Getter para id
  public getId(): number | undefined {
    return this.id;
  }

  // Criptografa a senha
  private async hashSenha() {
    this.senha = await bcrypt.hash(this.senha, 10);
  }

  // Salvar usuário no banco
  public async salvar(): Promise<void> {
    await this.hashSenha();
    const [result] = await db.execute(
      'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
      [this.nome, this.email, this.senha]
    );
    // @ts-ignore
    this.id = (result as any).insertId;
  }

  // Login
  public static async login(email: string, senha: string): Promise<Usuario | null> {
    const [rows] = await db.execute(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    );

    const user = (rows as any)[0];
    if (!user) return null;

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) return null;

    const usuario = new Usuario(user.nome, user.email, user.senha);
    usuario.id = user.id;
    return usuario;
  }
}
