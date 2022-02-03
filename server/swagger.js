import swaggerAutogen from 'swagger-autogen';

const options = {
	swaggerDefinition:{
        info:{
        	title: 'Test API',
            description: 'Test API with express',
        },
        host: "localhost:4000",
        schemes: ["http"],
	},
    //apis:['/routers/*.js', './swagger/*', './models/*.js']
};

const outputFile = "./swagger-output.json";
const endpointFiles = ['./routers/*.js'];

swaggerAutogen()(outputFile, endpointFiles, options);