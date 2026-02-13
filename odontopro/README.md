Aqui está o README final pronto para você colar no projeto 👇

🦷 Odonto Pro

SaaS completo para clínicas odontológicas, permitindo gerenciamento de agendamentos, autenticação de usuários e sistema de assinatura via Stripe.

Projeto desenvolvido durante o curso:

Desenvolver um SaaS do zero ao profissional com Next JS, TypeScript, Banco de dados, Stripe pagamentos – Matheus Fraga

🚀 Tecnologias Utilizadas
Frontend

Next.js 16 (App Router)

React 19

TypeScript

Tailwind CSS 4

Radix UI

React Hook Form

Zod

TanStack React Query

Lucide React

Sonner

Backend

Next.js API Routes

NextAuth v5

Prisma ORM

PostgreSQL

Stripe (Checkout + Webhooks)

Serviços Externos

Neon (Banco PostgreSQL)

Cloudinary (Upload de imagens)

✨ Funcionalidades

🔐 Login com Google e GitHub

👤 Sistema de autenticação com NextAuth

📅 Agendamento de consultas

💳 Sistema de assinatura (Plano Básico e Profissional)

📡 Integração com Stripe Webhooks

📂 Upload de imagens com Cloudinary

⚡ Cache e sincronização com React Query

🏗️ Arquitetura

App Router (Next.js)

API Routes para backend

Prisma como ORM

Stripe Webhooks para confirmação de pagamento

Validação com Zod

Gerenciamento de estado com React Query

Estrutura organizada por features

⚙️ Como rodar o projeto
# Clone o repositório
git clone https://github.com/seuusuario/odontopro

# Instale as dependências
npm install

# Gere o Prisma Client
npx prisma generate

# Rode as migrations
npx prisma migrate deploy

# Inicie o projeto
npm run dev


Para testar webhooks do Stripe localmente:

npm run stripe:listen

🔐 Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto:

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



📚 Aprendizados

Desenvolvimento de SaaS completo

Integração com Stripe (Checkout e Webhooks)

Autenticação moderna com NextAuth v5

Modelagem relacional com Prisma

Validação com Zod

Organização Full-Stack com Next.js

Gerenciamento de estado server/client

🔮 Melhorias Futuras

Dashboard administrativo com métricas

Sistema de notificações

Testes automatizados

Deploy com CI/CD