# Pontos importantes

## Necessitamos de:

### Rotas com tráfego em JSON:

- **GET** >> /user/:id
  > ## Retornará o usuário específico
  > Retorno:
  > ```ts
  >   interface {
  >     _id: string;
  >     email: string;
  >     name: string;
  >     job: string;
  >     team: string|null;
  >     image: string/*url*/; 
  >     tags: string[];
  >   }
  > ```
  > ==§ §==

- **GET** >> /team/:id
  > ## Retornará o time específico
  > Retorno:
  > ```ts
  >   interface {
  >     _id: string;
  >     name: string;
  >     participants: users[];
  >     leader: user;
  >     progress: number;
  >     participantsAmount: number;
  >   }
  > ```
  > ==§ §==

- **GET** >> /available/users
  > ## Retornará usuários disponíveis
  > Retorno:
  > ```ts
  >   interface {
  >     users: {
  >       _id: string;
  >       email: string;
  >       name: string;
  >       job: string;
  >       image: string/*url*/;
  >       tags: string[]; 
  >     },
  >     amount: number;
  >   }
  > ```
  > ==§ §==

- **GET** >> /available/teams
  > ## Retornará times disponíveis
  > Retorno:
  > ```ts
  >   interface {
  >     teams: {
  >       _id: string;
  >       name: string;
  >       participants: users[];
  >       leader: user;
  >       progress: number;
  >       participantsAmount: number;
  >     },
  >     amount: number;
  >   }
  > ```
  > ==§ §==

- **POST** >> /user
  > ## Criará usuário
  > Objeto de envio:
  > ```ts
  >   interface {
  >     name: string;
  >     email: string;
  >     password: string;
  >     job: string;
  >     tags: string[];
  >   }
  > ```
  > Retorno:
  > ```ts
  >   interface {
  >     _id: string;
  >     name: string;
  >     email: string;
  >     job: string;
  >     tags: string[];
  >     sucess: boolean;
  >     token: string|null;
  >   }
  > ```
  > ==§ §==

- **POST** >> /team
  > ## Criará time
  > Objeto de envio:
  > ```ts
  >   interface {
  >     name: string;
  >     leader: string/*you and participant*/;
  >   }
  > ```
  > Retorno:
  > ```ts
  >  interface {
  >    _id: string;
  >    name: string;
  >    participants: users[];
  >    leader: string/*id*/;
  >    progress: number;
  >    participantsAmount: number;
  >  }
  > ```
  > ==§ §==

- **POST** >> /signin
  > ## Efetuará login
  > Objeto de envio:
  > ```ts
  >   interface {
  >     email: string;
  >     password: string;
  >   }
  > ```
  > Retorno:
  > ```ts
  >   interface {
  >     sucess: boolean;
  >     token: string|null;
  >   }
  > ```
  > ==§ §==


- **POST** >> /signout
  > ## Efetuará logout
  > Objeto de envio:
  > ```ts
  >   interface {
  >     token: string;
  >   }
  > ```
  > Retorno:
  > ```ts
  >   interface {
  >     sucess: boolean;
  >   }
  > ```
  > ==§ §==

- **DELETE** >> /team/:id/user
  > ## Removerá o usuário do grupo
  > Objeto de envio:
  > ```ts
  >   interface {
  >     email: string;
  >   }
  > ```
  > Retorno:
  > ```ts
  >   interface {
  >     sucess: boolean;
  >   }
  > ```
  > ==§ §==

  
- **POST** >> /team/:id/name
  > ## Alterará o nome do grupo
  > Objeto de envio:
  > ```ts
  >   interface {
  >     name: string
  >   }
  > ```
  > Retorno:
  > ```ts
  >   interface {
  >     sucess: boolean;
  >   }
  > ```
  > ==§ §==
