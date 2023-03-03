import express, { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import { QuizData } from './interfaces';
import * as dotenv from 'dotenv';
dotenv.config();


const PORT = 8000;
const app = express()

app.get('/quiz-item', async (req: Request, res: Response) => {
    try {
      
        const response: AxiosResponse = await axios.get("https://6ee178dd-6b81-48de-9c1e-0a2911c3155f-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/quizzes/collections/vice_quizzes", {
            headers: {
                'X-Cassandra-Token': 'AstraCS:ZxhnLaYevqfabyAjhmOznJie:11835fbf130d911e495344faba91cab9bc0aa57dc399ffc76e83d62cf68fba60',
                accept: 'application/json'
            }
        })
        if (response.status === 200) {
            const quizItem: QuizData = await response.data.data['f2dbcd76-7c65-4981-aea1-ca302df490d4'] 
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.send(quizItem)
        }   

    } catch (error) {
        console.error(error)
    }
})


app.listen(PORT, () =>  console.log('Server is running on port' + PORT))