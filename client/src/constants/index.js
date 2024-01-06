export const entreprises = [
    {
        id:1, //augmenter de 1 pour chaque nouvelle entreprise
        name:"Auto-Entreprise axée Blockchain",
        start:"Juin 2023",
        end:"", //si il n'y a rien , c'est automatiquement écrit "Aujourd'hui"
        infos:"Mes projets seront dirigés vers une adoption des cryptomonnaies et de leurs dérivés pour tous et plus simplement en apportants des supports et accompagnements pour orienter l'investisseur.",
        siren:"979160470",
    },
]

import logo from '../assets/logo.png'
import truc from '../assets/truc.jpeg' //je ne savait pas comment le nommer ..
import user from '../assets/user.svg'

export const projets = [
    {
        id:0,//augmenter de 1 a chaque nouveau projet (attention ! a bien commencer a partir de 0 sinon ça casse tout)
        logo:logo,
        image:truc,
        desc:"Projet visant à faciliter et diversifier ses investissements sur une plateforme liant actifs numériques, traditionelles, obligations et NFT tout en proposant des services simple d'investissement. Il acompagnera l'investisseur dans sa gestion de produit financiers et dans l'apprentissage de l'écosystème crypto. ",
        nom:"Querqus",
        emps:[
            {
                name:'Lenny CHANRION',
                image:user,
                id:1,
            },
        ],
    },
]
