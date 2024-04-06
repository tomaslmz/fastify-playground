import Fastify from 'fastify';

const fastify = Fastify();

fastify.get('/', (req, res) => res.send({ message: 'Hello world' }));

export default fastify;
