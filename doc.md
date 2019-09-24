# Server-side Documentation

## Routes

- ### Login
  > POST > /auth/authenticate

  Send JSON:
    ```ts
    interface {
      email: string;
      password: string;
    }
    ```
  Return JSON:
    ```ts
    interface {
      user: {
        _id: string;
        name: string;
        nickName: string;
        job: string;
        image: string; // Url 
        team: null|string; // _id doc
        tags: string[];
        email: string;
      },
      token: string; // hash
    }
    ```


- ### Register
  > POST > /auth/register

  Send JSON:
    ```ts
    interface {
      name: string;
      nickName: string;
      email: string;
      password: string;
      job: string;
      image: string;
      tags: string[];
    }
    ```
  Return JSON:
    ```ts
    interface {
      user: {
        _id: string;
        name: string;
        nickName: string;
        job: string;
        image: string; // Url 
        team: null|string; // _id doc
        tags: string[];
        email: string;
      },
      token: string; // hash
    }
    ```

- ### Available Users
  > GET > /users/available

  Headers:
    - Authorization: "bearer {{$token}}"

  Return JSON:
    ```ts
    interface {
      data: {
        team: null|string; // _id team
        tags: string[];
        name: string;
        nickName: string;
        job: string;
        image: string; // url  
      }[] // Array<user>
    }
    ```

- ### Available Users
  > GET > /users/available

  Headers:
    - Authorization: "bearer {{$token}}"

  Return JSON:
    ```ts
    interface {
      data: { 
        team: null|string; // _id team
        tags: string[];
        name: string;
        nickName: string;
        job: string;
        image: string; // url  
      }[] // Array<user>
    }
    ```