const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ ok: true, mensaje: 'Hola desde Render', hora: new Date() });
});

app.listen(PORT, () => console.log(`Escuchando en puerto ${PORT}`));
