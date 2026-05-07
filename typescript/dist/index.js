import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.json({ mensage: 'Teste' });
});
app.listen(8000);
//# sourceMappingURL=index.js.map