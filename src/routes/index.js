const express = require("express");
const router = express.Router();

module.exports = (app) => {
  router.get("/", (req, res) => {
    res.render("home");
  });

  router.get("/multimedia", (req, res) => {
    res.render("multimedia");
  });

  router.get("/services/summercamp", (req, res) => {
    let view = {};
    view.fdTitle = "SUMMER CAMP";
    view.fdImage = "/public/media/images/flight.png";
    view.bgImage = "servers_bg_img";
    /*view.fdList = [
          { item: "Instalación y Configuración" },
          { item: "Mantenimiento"},
          { item: "Mejora de Rendimiento"},
          { item: "Backup de Data Corporativo"},
          { item: "Instalación y Gestión de Software"},
          { item: "Configuración de Sistema Failover"}
        ]*/

    view.sdTitle = "REQUISITOS";
    view.sdImage = "/public/media/images/summercamp.png";
    view.sdList = [
      { item: " Ser estudiante universitario activo a tiempo completo" },
      { item: " Tener de 18 a 29 años de edad" },
      { item: " Nivel mínimo de inglés: intermedio-conversacional" },
    ];

    view.tdTitle = "Recursos";
    view.tdImage = "/public/media/images/summercamp2.png";
    view.tdList = [
      {
        item: " Descargar información del programa (PDF) -- Coming Soon",
        link: "/download/summerCampInfo",
      },
      // { item: " Servidores de virtualización " },
      // { item: " Servidores de BD (Oracle, PostgreSQL, MySQL, MongoDB, etc) " },
      // { item: " Central Telefónica basada Asterisk PBX (FreePBX) " },
      // { item: " Otros Servicios. " },
    ];
    res.render("services", view);
  });
  router.get("/services/networking", (req, res) => {
    let view = {};
    view.fdTitle = "Infraestructura de Redes";
    view.fdImage = "/public/media/images/switches.png";
    view.bgImage = "networking_bg_img";
    view.fdList = [
      { item: "Instalación y Configuración" },
      { item: "Mantenimiento" },
      { item: "Mejora de Rendimiento" },
      { item: "Instalación y Gestión de Software" },
      { item: "Configuración de Sistema Failover" },
    ];

    view.sdTitle = "Conoce nuestros servicios de Redes";
    view.sdImage = "/public/media/images/wire-net.png";
    view.sdList = [
      {
        item: " Diseña e instalación de redes informáticas, conexiones y cableado",
      },
      { item: " Diagnósitico y reparación de fallos en la red " },
      { item: " configuración del software de los dispositivos de Redes" },
      { item: " Evaluación de la red en busca de mejor rendimiento" },
      { item: " Puntos de Red para entornos corporativos u hogareños" },
    ];

    view.tdTitle = "Con las marcas líder del Mercado";
    view.tdImage = "/public/media/images/unifi2.png";
    view.tdList = [
      { item: " Ubiquiti Unifi " },
      { item: " Cisco" },
      { item: " Huawei" },
      /*{ item: ' ' },
         { item: ' ' },
         { item: ' ' }*/
    ];

    res.render("services", view);
  });
  router.get("/services/development", (req, res) => {
    let view = {};
    view.fdTitle = "Desarrollo de Software";
    view.fdImage =
      "https://clarusway.com/wp-content/uploads/2021/04/step-to-become-a-full-stack-developer.png";
    view.bgImage = "dev_bg_img";
    view.fdList = [
      { item: "Nuestros Lenguajes: " },
      { item: "JS" },
      { item: "Java" },
      { item: "Python" },
    ];

    view.sdTitle = "Conoce nuestros servicios de Desarrollo de Software";
    view.sdImage = "/public/media/images/development.png";
    view.sdList = [
      { item: " Diseña de applicaciones Web y Desktop" },
      { item: " Implementación de modulos en sistemas" },
      { item: " configuración del software de los dispositivos de Redes" },
    ];

    view.tdTitle = "Frameworks";
    view.tdImage = "/public/media/images/frameworks.png";
    view.tdList = [
      { item: " Django" },
      { item: " Angular JS" },
      { item: " React JS" },
      { item: " Vue JS" },
      /*{ item: ' ' },
              { item: ' ' },
              { item: ' ' }*/
    ];

    res.render("services", view);
  });
  router.get("/services/summerwork", (req, res) => {
    var view = {};
    view.fdTitle = "Summer Work & Travel";
    view.fdList = [
      // { item: "Instalación y Configuración" },
      // { item: "Mantenimiento" },
      // { item: "Mejora de Rendimiento" },
      // { item: "Instalación y Gestión de Software" },
      // { item: "Configuración de Sistema Failover" },
    ];
    view.fdImage = "/public/media/images/smwt-icon.png";
    view.bgImage = "audio_bg_img";

    view.sdTitle = "Requisitos";
    view.sdImage = "/public/media/images/swt_1.png";
    view.sdList = [
      { item: " Ser estudiante universitario activo a tiempo completo" },
      { item: " Tener de 18 a 28 años de edad" },
      { item: " Nivel mínimo de inglés: básico-alto conversacional" },
    ];

    view.tdTitle = "Recursos";
    view.tdImage = "/public/media/images/smwt_2.jpg";
    view.tdList = [
      { item: "Fotos" },
      { item: "Descargar información del Programa (PDF) -- Coming Soon" },
      /*{ item: ' ' },
            { item: ' ' },
            { item: ' ' }*/
    ];
    res.render("services", view);
  });

  router.post("/request/mail", (req, res) => {
    console.log(req.body);

    res.send("Done");
  });

  router.get("/resources", (req, res) => {
    let view = {};
    view.images = [
      {
        src: "/public/media/images/stayroom-2.JPG",
        title: "Stayroom",
        subtitle: "Proyecto",
        date: "29/09/2016",
      },
      {
        src: "/public/media/images/stayroom-2.JPG",
        title: "Enoc",
        subtitle: "El Gordoc",
        date: "15/08/2009",
      },
      {
        src: "/public/media/images/network-setup-1.JPG",
        title: "Testing",
        subtitle: "p   ",
      },
      { src: "/public/media/images/stayroom-2.JPG", title: "No Way" },
      { src: "/public/media/images/stayroom-2.JPG" },
    ];
    res.render("resources", view);
  });

  router.get("/proyects", (req, res) => {
    res.render("proyects");
  });

  router.get("/contactus", (req, res) => {
    res.render("contactus");
  });

  router.get("/networking", (req, res) => {
    res.render("networking");
  });

  router.get("/support", (req, res) => {
    res.render("techsupport");
  });

  router.get("/aboutus", (req, res) => {
    res.render("aboutus");
  });

  router.get("/download/:filename", (req, res) => {
    var file = "";
    switch (req.params.filename) {
      case "summerCampInfo":
        file = `${__dirname}/../public/resources/example.txt`;
        res.download(file);
        break;

      default:
        break;
    }
  });

  app.use(router);
};
