import express from "express";

const app = express();
const port = 3000;

const resposta = [{"id":"1","createdAt":"2020-07-04T08:27:08.121Z","nomeCategoria":"nomeCategoria 1","beneficiarios":"Muller, Cremin and Green"},{"id":"2","createdAt":"2020-07-04T10:03:19.382Z","nomeCategoria":"nomeCategoria 2","beneficiarios":"Stiedemann and Sons"},{"id":"3","createdAt":"2020-07-04T06:11:42.858Z","nomeCategoria":"nomeCategoria 3","beneficiarios":"Boehm - Buckridge"},{"id":"4","createdAt":"2020-07-04T04:42:36.442Z","nomeCategoria":"nomeCategoria 4","beneficiarios":"Jacobi - Hartmann"},{"id":"5","createdAt":"2020-07-04T03:27:32.117Z","nomeCategoria":"nomeCategoria 5","beneficiarios":"Gusikowski - Bartoletti"},{"id":"6","createdAt":"2020-07-04T13:07:14.998Z","nomeCategoria":"nomeCategoria 6","beneficiarios":"Buckridge - Toy"},{"id":"7","createdAt":"2020-07-04T06:41:51.104Z","nomeCategoria":"nomeCategoria 7","beneficiarios":"Bradtke LLC"},{"id":"8","createdAt":"2020-07-04T05:37:14.100Z","nomeCategoria":"nomeCategoria 8","beneficiarios":"Anderson, Weissnat and Lebsack"},{"id":"9","createdAt":"2020-07-04T01:23:43.427Z","nomeCategoria":"nomeCategoria 9","beneficiarios":"Casper - Ruecker"},{"id":"10","createdAt":"2020-07-04T04:21:23.851Z","nomeCategoria":"nomeCategoria 10","beneficiarios":"Stiedemann - Tremblay"},{"id":"11","createdAt":"2020-07-03T22:42:40.014Z","nomeCategoria":"nomeCategoria 11","beneficiarios":"Senger Inc"},{"id":"12","createdAt":"2020-07-03T15:12:41.849Z","nomeCategoria":"nomeCategoria 12","beneficiarios":"Feil Inc"},{"id":"13","createdAt":"2020-07-04T11:20:47.194Z","nomeCategoria":"nomeCategoria 13","beneficiarios":"Kuphal - Douglas"},{"id":"14","createdAt":"2020-07-04T00:37:16.624Z","nomeCategoria":"nomeCategoria 14","beneficiarios":"Gutmann Group"},{"id":"15","createdAt":"2020-07-04T04:14:54.766Z","nomeCategoria":"nomeCategoria 15","beneficiarios":"Satterfield - Gulgowski"},{"id":"16","createdAt":"2020-07-04T08:54:43.892Z","nomeCategoria":"nomeCategoria 16","beneficiarios":"Runolfsdottir, Legros and Crist"},{"id":"17","createdAt":"2020-07-04T08:54:34.260Z","nomeCategoria":"nomeCategoria 17","beneficiarios":"Roberts LLC"}];

app.get('/categoria', (req, res) => {
    res.json(resposta);
});


app.listen(port, () => {
    console.log(`O app ta escutando na porta ${port}`);
})