const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3001;


app.use(cors());
app.use(express.json());

app.get('/api/cnpj/:cnpj', async (req, res) => {
    const { cnpj } = req.params;
    try {
        const response = await axios.get(`https://receitaws.com.br/v1/cnpj/${cnpj}`, {
            headers: { Accept: 'application/json' },
        });
        if (response.data.status === 'ERROR') {
            return res.status(404).json({ error: 'CNPJ não encontrado.' });
        }
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar CNPJ:', error);
        res.status(500).json({ error: 'Erro ao buscar CNPJ.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
