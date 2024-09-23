import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
}from 'fastify'

import {CreateNutritionControllers} from "./controllers/CreateNutritionControllers"

export async function routes(fastify : FastifyInstance, options : FastifyPluginOptions){
    fastify.get("/teste", (request: FastifyRequest, reply : FastifyReply ) =>{
        
        let responseText = "```json\n{\n  \"nome\": \"Gabriel\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 18,\n  \"altura\": 1.70,\n  \"peso\": 63,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Café da Manhã\",\n      \"alimentos\": [\n        \"2 fatias de pão integral\",\n        \"2 ovos mexidos\",\n        \"1 banana\",\n        \"200ml de leite desnatado\",\n        \"1 colher de sopa de azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da Manhã\",\n        \"alimentos\": [\n        \"1 iogurte grego natural com 1 colher de sopa de granola\",\n        \"1 Maçã\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis cozido\",\n        \"1 batata doce média cozida\",\n        \"Salada verde a vontade\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da Tarde\",\n      \"alimentos\": [\n        \"1 scoop de whey protein\",\n        \"1 banana\",\n        \"2 biscoitos integrais\"\n      ]\n    },\n    {\n      \"horario\": \"20:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe grelhado\",\n        \"1 xícara de batata doce cozida\",\n        \"1 xícara de espinafre cozido\",\n        \"Salada verde a vontade\"\n      ]\n    },\n    {\n      \"horario\": \"22:00\",\n      \"nome\": \"Lanche da Noite\",\n      \"alimentos\": [\n        \"1 scoop de casein protein\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey Protein\",\n    \"Creatina\",\n    \"BCAA\",\n    \"Glutamina\"\n  ]\n}\n```"

        try{
            //Extrair JSON

            let jsonString = responseText.replace(/```\w*\n/g,'').replace(/\n```/g,'').trim();

            let jsonObject = JSON.parse(jsonString);

            return reply.send({data: jsonObject});

        }catch(err){
            console.log(err)
        }

        reply.send({ok : true})
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) =>{
        return new CreateNutritionControllers().handle(request, reply)
    })

}