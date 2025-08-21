import { db } from '@/utils/db';
import bcrypt from 'bcryptjs';
import axios from 'axios';

interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}


export class Usuario {
  private id?: number;
  private nome: string;
  private email: string;
  private senha: string;
  private cep?: string;
  private cidade?: string;

  constructor(nome: string, email: string, senha: string, cep?: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.cep = cep;
  }

  public getId(): number | undefined {
    return this.id;
  }

  public getCidade(): string | undefined {
    return this.cidade;
  }

  // Criptografa a senha
  private async hashSenha() {
    this.senha = await bcrypt.hash(this.senha, 10);
  }

    
    
  // Busca cidade pelo CEP usando axios
  private async buscarCidadePeloCep() {
    if (!this.cep) return;

    try {
    const { data } = await axios.get<ViaCepResponse>(`https://viacep.com.br/ws/${this.cep}/json/`);

    if (!data || data.erro || !data.localidade) {
      throw new Error("CEP inválido");
    }

    this.cidade = data.localidade;
  } catch (err) {
    console.error("Erro ao buscar cidade pelo CEP:", err);
    throw new Error("CEP inválido");
  }
}

  // Salvar usuário no banco
  public async salvar(): Promise<void> {
    await this.hashSenha();
    await this.buscarCidadePeloCep();

    const [result] = await db.execute(
      'INSERT INTO usuarios (nome, email, senha, cep, cidade) VALUES (?, ?, ?, ?, ?)',
      [this.nome, this.email, this.senha, this.cep, this.cidade]
    );
    // @ts-ignore
    this.id = (result as any).insertId;
  }

  // Login
  public static async login(email: string, senha: string): Promise<Usuario | null> {
    const [rows] = await db.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
    const user = (rows as any)[0];
    if (!user) return null;

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) return null;

    const usuario = new Usuario(user.nome, user.email, user.senha, user.cep);
    usuario.id = user.id;
    usuario.cidade = user.cidade;
    return usuario;
  }

  // Buscar por ID
  public static async buscarPorId(id: number): Promise<Usuario | null> {
    const [rows] = await db.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
    const user = (rows as any)[0];
    if (!user) return null;

    const usuario = new Usuario(user.nome, user.email, user.senha, user.cep);
    usuario.id = user.id;
    usuario.cidade = user.cidade;
    return usuario;
  }
}
