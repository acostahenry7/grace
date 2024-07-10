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

  router.get("/services/summercamp", (req, res) => {
    let view = {};
    view.requirements = [
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
    view.resources = [
      {
        item: " Descarga toda la información de nuestro programa",
        link: "/download/summerCampInfo",
      },
    ];
    res.render("summercamp", view);
  });

  router.get("/multimedia", (req, res) => {
    res.render("multimedia");
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
      {
        item: "Descarga toda la info de este programa.",
        link: "/download/swtInfo",
      },
      /*{ item: ' ' },
            { item: ' ' },
            { item: ' ' }*/
    ];
    res.render("services", view);
  });

  router.get("/services/internship", (req, res) => {
    let view = {};
    view.internReqs = [
      { item: "Tener de 18 a 29 años." },
      {
        item: "Ser estudiante de término en un centro oficial de educación superior o menos de un año de graduado.",
      },
      {
        item: "Nivel de inglés intermedio-alto",
      },
    ];
    view.traineeReqs = [
      { item: "Tener de 18 a 30 años." },
      {
        item: `Ser graduado y tener al menos un año de experiencia laboral en el área de hotelería y turismo, si no se posee
        un título universitario, entonces se requiere al menos 5 años de experiencia laboral demostrable en el
        área.`,
      },
      {
        item: "Nivel de inglés intermedio-alto",
      },
    ];
    view.resources = [
      {
        item: " Descarga toda la información acerca estos programas.",
        link: "/download/internshipInfo",
      },
    ];

    res.render("internship", view);
  });

  router.get("/services/teaching", (req, res) => {
    let view = {};
    view.requirements = [
      {
        item: "Ser licenciado en educación o en el campo académico en el que pretenden enseñar.",
      },
      {
        item: "Tener un mínimo de dos años de enseñanza o experiencia profesional relacionada.",
      },
      {
        item: `Estar trabajando como maestro en el país de residencia legal en el momento de la solicitud o, si no está trabajando
        como maestro, haber completado recientemente (dentro de los 12 meses posteriores a la solicitud) un título avanzado
        y Tener dos años de experiencia docente a tiempo completo en los últimos ocho años`,
      },
      {
        item: `Poseer un dominio excelente del idioma inglés (min. Full B2-Upper Intermediate)`,
      },
    ];
    view.resources = [
      {
        item: " Descarga toda la información de nuestro programa",
        link: "/download/teachingInfo",
      },
    ];

    res.render("teaching", view);
  });

  router.get("/services/intern-spain", (req, res) => {
    let view = {};
    view.requirements = [
      {
        item: "Tener de 18 a 29 años.",
      },
      {
        item: `Ser estudiante de termino en la carrera de Hotelería y Turismo, o haber sido graduado en menos de 12
        meses en la misma carrera.`,
      },
      {
        item: `Hablar bien Español (inglés no es necesario)`,
      },
      {
        item: `Tener cedula dominicana`,
      },
      {
        item: `Disponibilidad para permanecer 6 meses en España`,
      },
    ];

    view.resources = [
      {
        item: " Descarga toda la información de nuestro programa",
        link: "/download/interSpainInfo",
      },
    ];

    res.render("internspain", view);
  });

  router.post("/request/mail", async (req, res) => {
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "Ops@graceinternational.com.do",
        pass: "xkrtwjfolmihoimf",
      },
    });
    var mailOptions = {
      from: "app@graceinternational.com.do",
      // from: "graceinternationalexchange@gmail.com",
      to: ["acostahenry7@gmail.com, graceinternationalexchange@gmail.com"],
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
    //res.send({ message: "done" });
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
        file = `${__dirname}/../public/resources/bch_summercamp.pdf`;
        res.download(file);
        break;
      case "swtInfo":
        file = `${__dirname}/../public/resources/bch_swt.pdf`;
        res.download(file);
        break;
      case "internshipInfo":
        file = `${__dirname}/../public/resources/bch_internship.pdf`;
        res.download(file);
        break;
      case "teachingInfo":
        file = `${__dirname}/../public/resources/bch_teachusa.pdf`;
        res.download(file);
        break;
      case "interSpainInfo":
        file = `${__dirname}/../public/resources/bch_spain.pdf`;
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
