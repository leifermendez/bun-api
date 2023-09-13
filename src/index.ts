import { Elysia } from 'elysia'
import { initDB } from './config/mongo'
import { usersModule } from './modules/users'

const run = async () => {
	await initDB()

	const app = new Elysia()
	.use(usersModule)
	
	.get('/', () => 'ROOT')
	.listen(8080)
	console.log(`🦊 Elysia is running at on port ${app?.server?.port}...`)

}

run()