const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const path = require("path");
var pdf = require("pdf-creator-node");
var fs = require("fs");

var modifyPdf = require("./test");

module.exports = (app) => {
  router.get("/", (req, res) => {
    let view = {
      pictures: [
        {
          src: "/public/media/images/explore_1.jpg",
          alt: "explore",
          class: "active",
        },
        {
          src: "/public/media/images/explore_2.jpeg",
          alt: "explore",
          class: "",
        },
        {
          src: "/public/media/images/explore_3.jpeg",
          alt: "explore",
          class: "",
        },
        {
          src: "/public/media/images/fireworks.jpg",
          alt: "explore",
          class: "",
        },
        {
          src: "/public/media/images/MALL.jpg",
          alt: "explore",
          class: "",
        },
        {
          src: "/public/media/images/PLANE.jpg",
          alt: "explore",
          class: "",
        },
        {
          src: "/public/media/images/WP1.jpg",
          alt: "explore",
          class: "",
        },
        {
          src: "/public/media/images/WP2.jpg",
          alt: "explore",
          class: "",
        },
        {
          src: "/public/media/images/WP4.jpEg",
          alt: "explore",
          class: "",
        },
      ],
    };
    res.render("home", view);
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
      { item: "Ser estudiante universitario activo a tiempo completo" },
      { item: "Tener de 18 a 29 años de edad" },
      {
        item: "Inglés HABLADO suficiente para interactuar con jóvenes en los EE.UU.",
      },
      {
        item: `Cualquiera de las sigtes: Ser estudiante; profesor, haber trabajado con jóvenes o niños; tener alguna habilidad
      especial, por e.g. un deporte🏀; teatro🎭; arte🎨; baile💃🕺; Música🎸; actividades extremas🧗‍♂️ o cualquier
      habilidad útil en un campamento de verano.`,
      },
      {
        item: "Disponibilidad de permanecer 2-3 meses en EE.UU.",
      },
      {
        item: "Retornar al país un vez termine el programa",
      },
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
      {
        item: `Ser estudiante universitario de tiempo completo, es decir, tener un mínimo de 12 créditos por
      periodo y haber cursado por lo menos uno.`,
      },
      {
        item: `Tener un nivel de inglés mínimo básico-alto CONVERSACIONAL. Es decir, que puedas desenvolverte
      en la comunicación oral del idioma en situaciones cotidianas.`,
      },
      { item: `-Tener de 18 a 28 años de edad` },
      { item: `-Retornar al país una vez el programa finalice` },
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

  router.post("/request/mail", async (req, res) => {
    var transporter = nodemailer.createTransport({
      host: "graceinternational.com.do",
      port: 465,
      auth: {
        user: "app@graceinternational.com.do",
        pass: "@4Bb?C#(iU@$",
      },
    });
    var mailOptions = {
      from: "app@graceinternational.com.do",
      to: ["acostahenry7@gmail.com, info@graceinternational.com.do"],
      attachments: [
        {
          filename: `Formulario-aplicación-${req.body.firstname}-${req.body.lastname}.pdf`,
          path: path.join(__dirname, "./modified_graceform.pdf"),
        },
      ],
      subject: "Formulario de Aplicacion GRACE",
      text: `Adjunto formulario de aplicación ${req.body.firstname} ${req.body.lastname} `,
    };

    try {
      await modifyPdf(
        path.join(__dirname, "form_grace.pdf"),
        path.join(__dirname, "modified_graceform.pdf"),
        req.body
      );
    } catch (error) {
      console.log(error);
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.send({ sent: false });
      } else {
        console.log("Emal sent: ", info);
        res.send({ sent: true });
      }
    });
    res.send({ message: "done" });
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

  router.get("/test", (req, res) => {
    console.log("hola");
  });

  app.use(router);
};
