const priceData = [
    {
        name: "eft",
        subName: "EFT",
        prices : [
            {
                name: "Séance unique",
                price: "70",
                duration: "75 minutes",
                features: [
                    "Évaluation initiale",
                    "Séquence de tapping personnalisée",
                    "Techniques à emporter",
                    "Support par email"
                ]
            },
            {
                name: "Forfait transformation",
                price: "250",
                duration: "4 séances",
                popular: true,
                features: [
                    "Évaluation complète",
                    "Séances hebdomadaires",
                    "Suivi des progrès",
                    "Scripts de tapping personnalisés",
                    "Support prioritaire"
                ]
            },
            {
                name: "Percée intensive",
                price: "100",
                duration: "120 minutes",
                features: [
                    "Session approfondie",
                    "Résolution de problématiques complexes",
                    "Matrix Reimprinting",
                    "Enregistrement personnalisé",
                    "Suivi de 2 semaines"
                ]
            }
        ]
    },
    {
        name: "soin-energetique",
        subName : "Reiki",
        prices : [
            {
                name: "Séance Unique",
                price: "60",
                duration: "60 minutes",
                features: [
                    "Consultation initiale",
                    "Soins énergétiques du corps entier",
                    "Conseils personnalisés après la séance",
                    "Support par e-mail"
                ]
            },
            {
                name: "Forfait 3 Séances",
                price: "160",
                duration: "60 minutes chacune",
                popular: true,
                features: [
                    "Consultation initiale",
                    "3 séances complètes",
                    "Suivi de vos progrès",
                    "Réservation prioritaire",
                    "Support par e-mail prolongé"
                ]
            },
            {
                name: "Guérison Profonde",
                price: "100",
                duration: "90 minutes",
                features: [
                    "Consultation approfondie",
                    "Travail énergétique intensif",
                    "Équilibrage des chakras",
                    "Thérapie par les cristaux",
                    "Plan de guérison personnalisé"
                ]
            }
        ]
    },
    {
        name: "fleurs-de-bach",
        subName: "Fleurs de Bach",
        prices: [
            {
            name: "Consultation + Flacon personnalisé",
            price: "40",
            duration: "45 à 60 minutes",
            features: [
                "Échange personnalisé",
                "Analyse de l'état émotionnel",
                "Préparation d’un flacon sur-mesure",
                "Conseils d'utilisation"
            ]
            },
            {
            name: "Forfait 3 séances",
            price: "100",
            duration: "45 à 60 minutes chacune",
            popular: true,
            features: [
                "3 consultations complètes",
                "Suivi de l’évolution émotionnelle",
                "Mélanges ajustés à chaque rendez-vous",
                "Accompagnement personnalisé"
            ]
            },
            {
            name: "Recharge de flacon",
            price: "15",
            duration: "—",
            features: [
                "Préparation d’un nouveau flacon personnalisé",
                "Sans consultation",
                "Disponible après une première séance"
            ]
            }
        ]
    }
]

export default priceData;