import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const day = await prisma.day.create({ 
        data: {
            date: "2023-09-23"
        }
    })

    const exercise = await prisma.exercise.create({ 
        data: { 
            type: "Muay Thai", 
            time: 90,
            dayId: day.id,
        }
    })

    console.log(exercise)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
