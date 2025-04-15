# Impulso Mídia

### Teste para candidato desenvolvedor front-end

O Teste consiste em criar uma página de login (de preferência responsiva), onde o usuário vai inserir seu usuário e senha. Se os dados estiverem corretos, deverá gravar o token de autenticação e redirecionar o usuário para uma página logada.

A página logada deve validar se o usuário está autenticado (se existe o token do usuário). Caso não exista, deverá redirecionar para a página de login.

### Requisitos
- Utilizar o **Next.js** para a construção do projeto;
- Utilizar o **Tawilwind CSS**, **Shadcn**, **Material UI** ou o **Bootstrap** para estilização;
- Validar formulário com o **react-hook-form**, **formik** ou o que o candidato estiver habituado;
- Para as requisições, utilizar **axios**, **fetch** ou o que o candidato estiver habituado.

### Material de apoio
- O logo da Impulso Mídia e design das telas de login e logada estão na pasta **_ material de apoio**.

### O que iremos avaliar
- Organização do código;
- Composição/reutilização de componentes;
- O motivo de ter escolhido cada lib.


### Instruções

1. Criar uma página de login utilizando a as cores da RD (Não precisa utilizar todas).
    - ![#170C02](https://placehold.co/15x15/170C02/170C02.png) `#170C02 (Darkest)`
    - ![#773D08](https://placehold.co/15x15/773D08/773D08.png) `#773D08 (Dark)`
    - ![#D66E0F](https://placehold.co/15x15/D66E0F/D66E0F.png) `#D66E0F (Pure)`
    - ![#F3A258](https://placehold.co/15x15/F3A258/F3A258.png) `#F3A258 (Lighter)`
    - ![#FAD7B7](https://placehold.co/15x15/FAD7B7/FAD7B7.png) `#FAD7B7 (Lightest)`

2. Na página de login, criar a requisição para logar o usuário:

```bash
    path: /api/sign-in
    method: POST
    body: { user: string, pass: string }
    # Usuário válido: candidato@impulsomidia.com
    # Senha válida: Candidato
```
3. Exibir mensagem de erro para o usuário caso os dados estejam **incorretos**.

4. Redirecionar o usuário para a página logada caso os dados estejam **corretos**. 

5. Na página logada, **validar se o usuário possui token**. Caso não possua, redirecionar para o login.

**Boa sorte! 🤖**