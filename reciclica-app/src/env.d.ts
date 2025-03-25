declare namespace NodeJS {
    interface ProcessEnv {
      DB_HOST: string;
      DB_PORT: string;
      DB_USER: string;
      DB_PASS: string;
      DB_NAME: string;
      // Перерахуйти всі інші змінні, які використовуєм
    }
  }
  