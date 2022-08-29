// * Use amazing prisma docs to learn further or refersh concepts
// const { PrismaClient } = require("@prisma/client")
// const prisma = new PrismaClient()

// * Fetching all data from MySQL db
// async function getAllData() {
//     const allData = await prisma.users.findMany({})
//     console.log(allData);
// }
// getAllData()

// * Creating users data
// async function insertUser() {
//     const user = await prisma.users.create({
//         data: {
//             name: 'Alice',
//             email: 'alice@prisma.io',
//             profession: "SDE-IV",
//             createdAt: new Date()
//         },
//     })
//     console.log(user)
// }

// insertUser().then(async () => {
//     await prisma.$disconnect()
// }).catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
// })

// * Updating data
// async function updateData() {
//     const data = await prisma.users.update({
//         where: { email: "john@prisma.io" },
//         data: { profession: "SDE-III" }
//     })
//     console.log(data);
// }

// updateData()

// * Deleting users data
// async function deleteData() {
//     const data = await prisma.users.delete({
//         where: { email: "alice@prisma.io" }
//     })
//     console.log(data);
// }

// deleteData()