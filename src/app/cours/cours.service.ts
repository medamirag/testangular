import { Injectable } from '@angular/core';
import { Cours } from './cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
courslist:Cours[]=[
  {id:0,briefdesc:"L'informatique est un domaine d'activité scientifique, technique, et industriel concernant le traitement automatique de l'information numérique par l'exécution de programmes informatiques hébergés par des dispositifs électriques-électroniques : des systèmes embarqués, des ordinateurs, des robots, des automates, etc.",cours:"Cours de programmation",description:`L'informatique est un domaine d'activité scientifique, technique, et industriel concernant le traitement automatique de l'information numérique par l'exécution de programmes informatiques hébergés par des dispositifs électriques-électroniques : des systèmes embarqués, des ordinateurs, des robots, des automates, etc.

  Ces champs d'application peuvent être séparés en deux branches :
  
  théorique : concerne la définition de concepts et modèles ;
  pratique : s'intéresse aux techniques concrètes de mise en œuvre.
  Certains domaines de l'informatique peuvent être très abstraits, comme la complexité algorithmique, et d'autres peuvent être plus proches d'un public profane. Ainsi, la théorie des langages demeure un domaine davantage accessible aux professionnels formés (description des ordinateurs et méthodes de programmation), tandis que les métiers liés aux interfaces homme-machine (IHM) sont accessibles à un plus large public.
  
  `},
  {id:1,briefdesc:"Un webdesigner est en charge de créer et réaliser des interfaces de sites internet qui soient à la fois esthétiques et pensées pour l’utilisateur. Le webdesign est un élément très important d’une stratégie de communication car il va permettre de générer plus de conversions et de faire grandir le panier moyen d’un site web. Focus sur le webdesigner et sa fiche métier",cours:"Cours de web design",description:`Un webdesigner est en charge de créer et réaliser des interfaces de sites internet qui soient à la fois esthétiques et pensées pour l’utilisateur. Le webdesign est un élément très important d’une stratégie de communication car il va permettre de générer plus de conversions et de faire grandir le panier moyen d’un site web. Focus sur le webdesigner et sa fiche métier


  Profil du webdesigner
  Un webdesigner peut travailleur à son compte comme indépendant, mais peut aussi devenir salarié d’un studio, ou du service communication de grandes entreprises. De façon générale, le webdesigner travaillera sur la conception d’interface, c’est à dire des sites web, mais aussi des applications, des CMS, ou toutes autres interfaces connectées.
  
  Missions du webdesigner
  Le webdesigner est un métier qui propose un large éventail de missions :
  
  Participation à l’élaboration de la charte graphique d’un site (mise en page, choix des couleurs, taille des polices, de la typographie,….)
  Au-delà de l’aspect esthétique du site, le webdesigner est chargé de la gestion des aspects techniques : enchaînement des pages, arborescence du site…
  Tout cela, réalisé selon les demandes et attentes de ses clients.
  
  Compétences du webdesigner
  Pour devenir webdesigner, il vous faudra acquérir et développer certaines compétences :
  
  Créativité : cette compétence est impérative pour exercer un métier dans le design. Le webdesigner devra faire preuve de créativité et d’originalité, pour proposer à ses clients, différents choix graphiques. Ceci, de façon à créer des sites internet variés, qui captent l’attention des visiteurs.
  Informatiques et techniques : le webdesigner est à la fois créatif et informaticien. Il doit pouvoir maîtriser parfaitement l’outil informatique et notamment les logiciels de graphisme tels que Photoshop, Illustrator.. Il doit être capable de prendre en compte et de gérer à toutes les contraintes techniques liés à la création d’un site web (vitesse des temps de téléchargement,….)
  Curieux : afin de proposer des sites créatifs et originaux, un webdesigner doit entretenir quotidiennement ses connaissance en art, mais également en matière de nouvelles technologies. Il doit connaître le tendances en UX design qui lui permettront de réaliser des interfaces pensées pour l’utilisateur.
  Autonome et réactif : le webdesigner doit être capable de répondre aux demandes de ses clients de façon réactive, afin de ne pas bloquer le fonctionnement normal d’un site.
  `}
]
  constructor() { }

  getAllCours(){
    return this.courslist
  }
  getCoursByID(id:number){
    return this.courslist[id]
  }
}
