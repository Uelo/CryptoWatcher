# CryptoWatcher

  <img width="1062" height="1166" alt="image" src="https://github.com/user-attachments/assets/c9d1e45c-feb6-4366-b9ac-d053798248a5" />
  
##  Tecnologias Utilizadas

*   **Frontend:** React + Tailwind CSS
*   **Backend:** Node.js, Express.js
*   **API de Dados:** CoinMarketCap Pro API (requer chave), News API (requer chave)

##  Configuração e Execução

### Pré-requisitos

*   Node.js e npm instalados.
*   Chaves das API's da CoinMarketCap Pro e News API:
```
https://pro.coinmarketcap.com/
https://newsapi.org/
```

### Passos

1.  **Clonar o Repositório:**
    ```
    git clone https://github.com/Uelo/CryptoWatcher.git
    cd CryptoWatcher
    ```

2.  **Instalar Dependências:**
    ```
    npm install
    ```

3.  **Configurar Variáveis de Ambiente:**
    Insira suas chaves de API Coinmarketcap e news API no arquivo .env:
    ```
    VITE_CMC_API_KEY=suachaveaqui
    VITE_NEWS_API_KEY=suachaveaqui
    ```

4.  **Executar o Servidor:**
    ```
    node server.js
    ```

5.  **Em outro terminal, executar a aplicação Vite/React:**
    ```
    npm run dev
    ```
