import { PrismaClient } from "./src/generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  const newPage = await prisma.comment.createMany({
    data: 
        [
  {
    "name": "David",
    "email": "",
    "message": "Bravo, c'etait vraiment un super soin... J'ai vraiment beaucoup aimé les bougies qui rajoutaient une veritable ambiance relaxante",
    "rate": 5,
    "date": "2024-10-05T13:34:48.932Z"
  },
  {
    "name": "Mireille",
    "email": "",
    "message": "C’était un moment très agréable. Le soin reiki a vraiment soulagé mes douleurs à l’épaule",
    "rate": 5,
    "date": "2024-10-16T10:58:07.518Z"
  },
  {
    "name": "Dominique",
    "email": "",
    "message": "soin très appréciable",
    "rate": 5,
    "date": "2024-11-01T17:19:24.776Z"
  },
  {
    "name": "Marie",
    "email": "",
    "message": "Je ne connaissais rien au Reiki avant de me lancer, et dès la première séance, j’ai ressenti un vrai apaisement. J’ai noté une vraie différence dans ma gestion du stress. Camille a une approche douce et bienveillante .Merci pour cet accompagnement !",
    "rate": 4,
    "date": "2024-11-10T08:41:27.800Z"
  },
  {
    "name": "Julie",
    "email": "",
    "message": "Après des mois de douleurs chroniques, j’ai essayé le Reiki par curiosité. Dès la première séance, j’ai ressenti un grand soulagement, tant physique qu’émotionnel. Je recommande vivement ! Camille est à l’écoute et sait adapter ses séances en fonction des besoins de chacun. Elle a une vraie capacité à apaiser et à rééquilibrer.",
    "rate": 5,
    "date": "2024-11-04T08:55:58.050Z"
  },
  {
    "name": "Sophie M",
    "email": "",
    "message": "Les séances m’ont permis de retrouver un équilibre que j’avais perdu depuis longtemps. L’EFT m’a aidée à libérer des blocages émotionnels profonds. Une expérience que je recommande à tous ceux qui cherchent à se recentrer. Camille maîtrise l’EFT avec une grande précision. Elle sait vraiment accompagner le processus de libération émotionnelle avec douceur et efficacité.",
    "rate": 5,
    "date": "2024-09-17T08:56:38.974Z"
  },
  {
    "name": "Lucie",
    "email": "",
    "message": "J’étais sceptique, mais après plusieurs séances de massage holistique, j’ai ressenti une vraie différence dans mon énergie et mon bien-être général. C’est une approche que je ne regrette pas d’avoir essayée ! Camille sait parfaitement adapter le massage holistique aux besoins de chacun. Son approche est respectueuse et profondément apaisante.",
    "rate": 4,
    "date": "2024-09-25T08:57:39.602Z"
  },
  {
    "name": "Géraldine",
    "email": "",
    "message": "Les séances avec les Fleurs de Bach m’ont permis de me recentrer et d’apaiser certaines émotions difficiles. Je ressors toujours plus sereine et en harmonie avec moi-même. Un véritable moment de ressourcement.",
    "rate": 4,
    "date": "2024-08-12T08:58:23.734Z"
  },
  {
    "name": "Laura",
    "email": "",
    "message": "Des séances de fleur de Bach qui m'ont bien aidées dans le moment difficile vécu. Merci à toi",
    "rate": 5,
    "date": "2024-11-17T11:36:30.996Z"
  },
  {
    "name": "Thomas Girin",
    "email": "",
    "message": "Une expérience incroyable ! Le soin énergétique m’a permis de retrouver une paix intérieure que je n'avais pas ressentie depuis longtemps. Camille est très professionnelle et attentive, je recommande vivement !",
    "rate": 5,
    "date": "2024-10-02T09:30:15.120Z"
  },
  {
    "name": "Claire",
    "email": "",
    "message": "Un moment de relaxation intense. Le soin m'a apporté un apaisement immédiat et m'a aidé à surmonter un grand stress. Camille prend le temps d'écouter et d’adapter chaque séance. Merci pour ton accompagnement !",
    "rate": 5,
    "date": "2024-09-18T11:14:47.890Z"
  },
  {
    "name": "JEAN",
    "email": "",
    "message": "Le soin reiki a fait des merveilles pour moi. Après quelques séances, je me sens beaucoup plus léger et détendu. Camille est une thérapeute très attentionnée et compétente. Je ne peux que la recommander.",
    "rate": 5,
    "date": "2024-08-24T10:22:59.045Z"
  },
  {
    "name": "Katy",
    "email": "",
    "message": "Un bel échange d'harmonie",
    "rate": 5,
    "date": "2025-01-01T15:12:15.750Z"
  }
]

  });
  console.log("Page créée:", newPage);
}

main()
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
