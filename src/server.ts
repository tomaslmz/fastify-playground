import fastify from './app';

fastify.listen({ port: 8080 }, (err, address) => {
  if(err) {
    fastify.log.error(err);
    process.exit(1);
  }
  
  console.log(`Server is running on ${address}!`);
});
