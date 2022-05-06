console.log("Inicia query")
const { Client } = require('pg')
const OBTENERCATEGORIA = async () => {

    const client = new Client({
        
        host: 'ec2-52-71-69-66.compute-1.amazonaws.com',
        port: 5432,
        database: 'd1rl2nr7fojqid',
        user: 'bumursgoabtnpz',
        password: '0729d3a9734bc3e69a70e49f1627917e441fc68eff3e9fcfb0dd1186d8f93d7a',
        ssl:
        {
            rejectUnauthorized: false
        },
    });

    await client.connect();
    const res = await client.query("SELECT * FROM tutorias.tutor");  //'SELECT $1::text as message', ['Hello world!']
    const result = res.rows;
    await client.end();
    return result;
}
OBTENERCATEGORIA().then(result =>{ console.log(result); });