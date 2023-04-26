import express, { Request, Response } from "express";
import cors from 'cors';
import promptService from "./services/prompt-service";
import { Prompt } from "./model/Prompt";
import path from 'path'
const port = 5000
const app = express();
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`, req.body);
  next();
})
app.use(express.static(path.join(__dirname, 'public')))


app.post('/prompts', async (req: Request, res: Response) => {
  const prompt: Prompt = req.body
  try {
    await promptService.save(prompt)
    res.status(200).json(prompt)
  } catch (error) {
    res.status(500).json(error)
  }
})

app.get('/prompts', async (req: Request, res: Response) => {
  try {
    const prompts = await promptService.getAll()
    res.status(200).json(prompts)
  } catch (error) {
    res.status(500).json(error)
  }
})

app.delete('/prompts/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const response = await promptService.delete(id)
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
  }
})



app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
