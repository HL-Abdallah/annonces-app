import { Component } from '@angular/core';
import * as data from "./annonces.json";

export interface AnnonceItem {
    id ?: string;
    titre ?: string;
    description ?: string;
    prix ?: number;
    type ?: string;
}

@Component({
  selector: 'app-annonces-list',
  templateUrl: './annonces-list.component.html',
  styleUrls: ['./annonces-list.component.css']
})
export class AnnoncesListComponent {
  annonce : AnnonceItem[] = [
    {
        "id": "d8d1e182-c110-4197-923d-a2a1f059911d",
        "titre": "Laboriosam commodi alias temporibus vero dolore.",
        "description": "Corrupti voluptatem reiciendis.",
        "prix": 678.17,
        "type": "EMPLOI"
    },
    {
        "id": "c69256d8-0e3b-4323-bc80-6c653376354a",
        "titre": "Autem id maxime rerum.",
        "description": "Et inventore nobis. Expedita molestiae rerum cupiditate perspiciatis aut et.",
        "prix": 917.46,
        "type": "EMPLOI"
    },
    {
        "id": "17685235-d59a-4f94-a8b5-d8fb7e981cee",
        "titre": "Sed deserunt earum aliquid aliquid fuga.",
        "description": "Tempore deserunt perspiciatis qui tempora minima.",
        "prix": 783.87,
        "type": "EMPLOI"
    },
    {
        "id": "dd4a510d-60a0-4ad1-b551-61cf2f16c9ff",
        "titre": "Aliquid aut aut officia.",
        "description": "Est provident deleniti et nesciunt. Nulla est soluta fugit eum aut autem ducimus. Qui aspernatur officia consequatur hic molestiae.",
        "prix": 785.59,
        "type": "IMMOBILIER"
    },
    {
        "id": "cb67d3a3-b334-4e43-b416-21a8500ced3b",
        "titre": "In.",
        "description": "Suscipit temporibus temporibus quod hic occaecati placeat magnam. Debitis culpa aperiam ut. Ut laudantium mollitia eum cupiditate assumenda.",
        "prix": 727.38,
        "type": "IMMOBILIER"
    },
    {
        "id": "7eef7f94-fc1e-43fd-8706-1c4cbf607269",
        "titre": "Exercitationem atque quis.",
        "description": "Ratione dolores aut error in doloribus quidem. Autem cupiditate voluptatum veniam assumenda qui. Voluptas vitae architecto dolor rem.",
        "prix": 506.42,
        "type": "IMMOBILIER"
    },
    {
        "id": "d9e212c9-9fdf-4f63-ac81-756792f37b0a",
        "titre": "Delectus deleniti fugit quos quae aliquid.",
        "description": "Non expedita quidem dolore quos atque.",
        "prix": 583.93,
        "type": "VEHICULE"
    },
    {
        "id": "0377bceb-704b-4451-bdd6-8dc3de870db2",
        "titre": "Id ut necessitatibus numquam eos.",
        "description": "Ullam ut est magni. Reprehenderit et sit nam qui quo aliquam explicabo. Pariatur earum non qui distinctio et ducimus.",
        "prix": 279.17,
        "type": "IMMOBILIER"
    },
    {
        "id": "532606e4-e413-4d1d-9885-d25b89b238b9",
        "titre": "Atque harum quia illum.",
        "description": "Pariatur sed dolores culpa consequatur. Quia assumenda molestiae hic omnis error inventore.",
        "prix": 186.27,
        "type": "VEHICULE"
    },
    {
        "id": "26ebd5ae-b7f3-49bf-a3fe-a116c3dd804a",
        "titre": "Necessitatibus quaerat excepturi debitis repellendus.",
        "description": "Laborum optio ut et quia. Consequatur cupiditate perspiciatis ea quisquam animi. Ut nihil vel dolorem molestias possimus sit.",
        "prix": 670.95,
        "type": "VEHICULE"
    },
    {
        "id": "0d1b026d-0413-471c-b8e0-63ae017aafd5",
        "titre": "Voluptas architecto reiciendis aperiam sapiente et.",
        "description": "Quis atque itaque quis vel illum dolor.",
        "prix": 653.17,
        "type": "EMPLOI"
    },
    {
        "id": "435b708e-93ba-46bf-ae54-14826a9232b3",
        "titre": "Omnis aut voluptatum.",
        "description": "Neque praesentium in ut. Numquam eligendi totam et.",
        "prix": 49.62,
        "type": "VEHICULE"
    }
];
  constructor(){
    console.log('annonce', this.annonce);
  }

}
