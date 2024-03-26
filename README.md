# RD Ads

### Teste para candidato desenvolvedor front-end sênior

O Teste consiste em criar uma página de login (de preferência responsiva), onde o usuário vai inserir seu usuário e senha. Se os dados estiverem corretos, deverá gravar o token de autenticação e redirecionar o usuário para uma página logada.

A página logada deve validar se o usuário está autenticado (se existe o token do usuário). Caso não exista, deverá redirecionar para a página de login.

### Requisitos
- Utilizar o **Next.js** para a construção do projeto;
- Utilizar o **Tawilwind CSS**, **Material UI** ou o **Bootstrap** para estilização;
- Validar formulário com o **react-hook-form**, **formik** ou o que o candidato estiver habituado;
- Para as requisições, utilizar **axios**, **fetch** ou o que o candidato estiver habituado.

### Material de apoio
- O logo da RD Ads e design das telas de login e logada estão na pasta **_ material de apoio**.

### O que iremos avaliar
- Organização do código;
- Composição/reutilização de componentes;
- O motivo de ter escolhido cada lib.


### Instruções

1. Criar uma página de login utilizando a as cores da RD (Não precisa utilizar todas).
    - ![#001B0C](https://placehold.co/15x15/001B0C/001B0C.png) `#001B0C (Darkest)`
    - ![#004620](https://placehold.co/15x15/004620/004620.png) `#004620 (Dark)`
    - ![#0F8143](https://placehold.co/15x15/0F8143/0F8143.png) `#0F8143 (Pure)`
    - ![#ABDEC2](https://placehold.co/15x15/ABDEC2/ABDEC2.png) `#ABDEC2 (Lighter)`
    - ![#D7F0E2](https://placehold.co/15x15/D7F0E2/D7F0E2.png) `#D7F0E2 (Lightest)`

2. Na página de login, criar a requisição para logar o usuário:

```bash
    path: /api/sign-in
    method: POST
    body: { user: string, pass: string }
    # Usuário válido: candidato@rdads.com.br
    # Senha válida: Candidato
```
3. Exibir mensagem de erro para o usuário caso os dados estejam **incorretos**.

4. Redirecionar o usuário para a página logada caso os dados estejam **corretos**. 

5. Na página logada, **validar se o usuário possui token**. Caso não possua, redirecionar para o login.

**Boa sorte! 🤖**