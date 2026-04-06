import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);
import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superheroesRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Configuración de rutas
app.use('/api', superHeroRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).send({
    mensaje: 'Ruta no encontrada'
});
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
// Iniciar siempre con api los edpoints para hacer consultas, luego de correr el server