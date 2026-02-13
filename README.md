<h1 align="center">🦷 Odonto Pro</h1>

<p align="center">
SaaS completo para clínicas odontológicas com sistema de agendamento e assinatura online.
</p>

<p align="center">
Projeto desenvolvido durante o curso <strong>
“Desenvolver um SaaS do zero ao profissional com Next.js, TypeScript, Banco de dados e Stripe”
</strong> – Matheus Fraga.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black" />
  <img src="https://img.shields.io/badge/React-19-blue" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6" />
  <img src="https://img.shields.io/badge/Stripe-SaaS-purple" />
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow" />
</p>

---

## 🚀 Stack Tecnológica

### 🖥️ Frontend
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI
- React Hook Form
- Zod
- TanStack React Query
- Lucide React
- Sonner

### ⚙️ Backend
- Next.js API Routes
- NextAuth v5
- Prisma ORM
- PostgreSQL
- Stripe (Checkout + Webhooks)

### ☁️ Serviços
- Neon (PostgreSQL Hosting)
- Cloudinary (Upload de imagens)

---

## ✨ Funcionalidades

- 🔐 Login com Google e GitHub
- 👤 Autenticação segura com NextAuth
- 📅 Sistema completo de agendamento
- 💳 Assinatura (Plano Básico e Profissional)
- 📡 Webhooks Stripe para confirmação de pagamento
- 📂 Upload de imagens
- ⚡ Cache inteligente com React Query

---

## 🏗️ Arquitetura

- App Router (Next.js)
- API Routes para backend
- Prisma como camada de acesso ao banco
- Stripe Webhooks para sincronização de pagamentos
- Validação com Zod
- Organização modular por features

---
## 📚 Aprendizados
Construção de SaaS real do zero

Integração completa com Stripe (Checkout + Webhooks)

Autenticação moderna com NextAuth v5

Modelagem relacional com Prisma

Validação robusta com Zod

Gerenciamento de estado server/client
---
🔮 Roadmap
📊 Dashboard com métricas

🧪 Testes automatizados

📧 Sistema de notificações

🚀 Deploy com CI/CD

---

## ⚙️ Como rodar o projeto

```bash
git clone https://github.com/seuusuario/odontopro
cd odontopro

npm install

npx prisma generate
npx prisma migrate deploy

npm run dev
Para testar webhooks localmente:

npm run stripe:listen

🔐 Variáveis de Ambiente
Crie um arquivo .env:

env
Copiar código
DATABASE_URL=

AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

NEXT_PUBLIC_URL=

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_SECRET_WEBHOOK_KEY=
STRIPE_PLAN_BASIC=
STRIPE_PLAN_PROFISSIONAL=
STRIPE_SUCCESS_URL=
STRIPE_CANCEL_URL=

CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
