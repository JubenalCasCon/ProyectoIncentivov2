import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo:string="assets/Imagenes/completo.jpg";
  telefono:string="assets/Imagenes/complementos.jpg";
  carniceria:string="assets/Imagenes/carniceria.png"


  tarjetas:any[]=[

    {
      imagen:"assets/Imagenes/carniceria.png",
      descripcion:"La puesta en escena mas esperada del año se desarrollará en los Mochis Sinaloa"
    },

    {
      imagen:"assets/Imagenes/carniceria.png",
      descripcion:"El año internacional del teatro es una iniciativa artística en la que se celebrará"
    },

    {
      imagen:"assets/Imagenes/carniceria.png",
      descripcion:"Nuevos miembros se agregan al elencon EVA 2020 durante el castig para su próxima obra"
    },

    {
      imagen:"assets/Imagenes/carniceria.png",
      descripcion:"Nuevos miembros se agregan al elencon EVA 2020 durante el castig para su próxima obra"
    },

    {
      imagen:"assets/Imagenes/carniceria.png",
      descripcion:"Nuevos miembros se agregan al elencon EVA 2020 durante el castig para su próxima obra"
    },

    {
      imagen:"assets/Imagenes/carniceria.png",
      descripcion:"Nuevos miembros se agregan al elencon EVA 2020 durante el castig para su próxima obra"
    }
  ]



  peliculas:any[]=[
    {name:'Conoce a Inocisa',
    img:'assets/Imagenes/cocinando.jpg',
    desc:'',
    link:'/nosotros',
    boton:'Sobre nosotros'  },
    {
      name:'Nosotros somos los que trabajamos por Sinaloa',
      img:'assets/Imagenes/cosiendo.jpg',
      desc:'',
      link:'/contacto',
      boton:'Contacto'
    },

    {
      name:'Nosotros somos los que trabajamos por Sinaloa',
      img:'assets/Imagenes/artesania mexicana.jpg',
      desc:'',
      link:'/servicio',
      boton:'Info Servicios'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
