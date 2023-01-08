const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");
const path = require("path");

let data = {
  personalInfo: {
    firstName: "Henry Junior",
    lastName: "Acosta Vargas",
    birthDate: "29/11/1999",
    sex: "male",
    age: "22",
    id: "402-4060468-2",
    passport: "",
    email: "acostahenry7@gmail.com",
    phoneNumber: "8299306702",
    altPhoneNumber: "8496426702",
    englishLevel: "b2",
    nacionality: "Dominicano",
    address: "Calle C, Apt A101 Res. Filadelfia IV, Santo Domingo Este",
    shirtSize: "s",
    emergencyContact: "Regina Vargas, Madre, 8094633774",
  },
  academicInformation: {
    college: "Universidad Dominicana O&M",
    collegeStartingDate: "01/08/2018",
    career: "Ingeniería de Sistemas y Computación",
    collegeLevel: "11",
    currentSubjects: "5",
    lastSubjects: "6",
    whereCollegeStoped: "n",
    aproxEndingDate: "30/07/2023",
    payingResponsible: "Yo",
    wentOtherCollege: "n",
    changedCareer: "n",
    changedCollege: "n",
  },

  workExperience: {
    currentlyWorking: "y",
    companyName: "Lasa Motors",
    workPosition: "Developer",
    workTiming: "Tiempo completo",
    hiredTime: "4 años y 1 mes",
    otherCompanyAndPos: "N/A",
  },
  familyInformation: {
    martitalStatus: "divorced",
    children: "n",
    liveWith: "Con mis padres",
    workingParents: "y",
    ocupations: "Contador y Agrigultora",
    ownedHouse: "y",
    siblings: "y",
    sibligsAmount: "1",
    closeFamilyAtUS: "n",
  },
  exchangeProgram: {
    goal: "Conocer nuevas culturas",
    whyDoingProgram: "Para poder viajar y apredender de culturas diferentes",
    whoIsPaying: "me",
    wanrrantiers: "y",
    exchangeBefore: "n",
    howManyExchanges: "0",
    atWhichYear: "n/a",
    agency: "n/a",
    sponsor: "n/a",
    whyChangedAgency: "n/a",
    troublesLastProgram: "n",
    hasVisitedUS: "n",
    usVisa: "n",
    whichVisa: "n/a",
    usResidenceProcess: "n",
    usVisaDenied: "n",
    medCondition: "n",
    whichMedCondition: "n/a",
    medicalPrescription: "n",
    noWorkingDay: "n",
  },

  grace: {
    howDidYouKnow: "Amigo",
    whyChoosedGrace: "Porque está basada en la gracia de Dios.",
    howToImprove: "",
    references: "",
    anyQuestions: "n",
    questions: "",
  },
};

async function modifyPdf(input, output) {
  try {
    const pdfDoc = await PDFDocument.load(await readFile(input));

    const fields = await pdfDoc.getForm().getFields();

    const form = await pdfDoc.getForm();

    fields.forEach((field) => {
      console.log(field.getName());
    });

    for (let i = 0; i < 107; i++) {
      try {
        form.getTextField(`untitled${i + 1}`).setText(`${i + 1}`);
      } catch (error) {
        // console.log(i);
        // form.getCheckBox(`untitled${i + 1}`).check();
      }

      // form.getTextField(`untitled${i + 1}`).setText(`${i + 1}`);
    }

    //Personal Information

    //setPersonalInfo(form, data.personalInfo);

    // //Academic Information

    // setAcademicInfo(form, data.academicInformation);

    // //Work Experience
    // setWorkingExperience(form, data.workExperience);

    // //Family Information
    // setFamilyInfo(form, data.familyInformation);

    // //Program Information
    // setProgramInfo(form, data.exchangeProgram);

    const pdfBytes = await pdfDoc.save();
    await writeFile(output, pdfBytes);
    console.log("Pdf created!");
  } catch (error) {
    console.log(error);
  }
}

modifyPdf(
  path.join(__dirname, "form_grace.pdf"),
  path.join(__dirname, "modified_graceform.pdf")
);

function setPersonalInfo(form, data) {
  form.getCheckBox(`untitled71`).check();
  form.getCheckBox(`untitled77`).check();
  form.getCheckBox(`untitled111`).check();
  form.getCheckBox(`untitled112`).check();
  form.getCheckBox(`untitled113`).check();
  //form.getCheckBox(`untitled72`).check();
  //form.getCheckBox(`untitled73`).check();
  //form.getCheckBox(`untitled74`).check();const { PDFDocument } = require("pdf-lib");
  const { readFile, writeFile } = require("fs/promises");
  const path = require("path");

  let data = {
    personalInfo: {
      firstName: "Henry Junior",
      lastName: "Acosta Vargas",
      birthDate: "29/11/1999",
      sex: "male",
      age: "22",
      id: "402-4060468-2",
      passport: "",
      email: "acostahenry7@gmail.com",
      phoneNumber: "8299306702",
      altPhoneNumber: "8496426702",
      englishLevel: "b2",
      nacionality: "Dominicano",
      address: "Calle C, Apt A101 Res. Filadelfia IV, Santo Domingo Este",
      shirtSize: "s",
      emergencyContact: "Regina Vargas, Madre, 8094633774",
    },
    academicInformation: {
      college: "Universidad Dominicana O&M",
      collegeStartingDate: "01/08/2018",
      career: "Ingeniería de Sistemas y Computación",
      collegeLevel: "11",
      currentSubjects: "5",
      lastSubjects: "6",
      whereCollegeStoped: "n",
      aproxEndingDate: "30/07/2023",
      payingResponsible: "Yo",
      wentOtherCollege: "n",
      changedCareer: "n",
      changedCollege: "n",
    },

    workExperience: {
      currentlyWorking: "y",
      companyName: "Lasa Motors",
      workPosition: "Developer",
      workTiming: "Tiempo completo",
      hiredTime: "4 años y 1 mes",
      otherCompanyAndPos: "N/A",
    },
    familyInformation: {
      martitalStatus: "divorced",
      children: "n",
      liveWith: "Con mis padres",
      workingParents: "y",
      ocupations: "Contador y Agrigultora",
      ownedHouse: "y",
      siblings: "y",
      sibligsAmount: "1",
      closeFamilyAtUS: "n",
    },
    exchangeProgram: {
      goal: "Conocer nuevas culturas",
      whyDoingProgram: "Para poder viajar y apredender de culturas diferentes",
      whoIsPaying: "me",
      wanrrantiers: "y",
      exchangeBefore: "n",
      howManyExchanges: "0",
      atWhichYear: "n/a",
      agency: "n/a",
      sponsor: "n/a",
      whyChangedAgency: "n/a",
      troublesLastProgram: "n",
      hasVisitedUS: "n",
      usVisa: "n",
      whichVisa: "n/a",
      usResidenceProcess: "n",
      usVisaDenied: "n",
      medCondition: "n",
      whichMedCondition: "n/a",
      medicalPrescription: "n",
      noWorkingDay: "n",
    },

    grace: {
      howDidYouKnow: "Amigo",
      whyChoosedGrace: "Porque está basada en la gracia de Dios.",
      howToImprove: "",
      references: "",
      anyQuestions: "n",
      questions: "",
    },
  };

  async function modifyPdf(input, output) {
    try {
      const pdfDoc = await PDFDocument.load(await readFile(input));

      const fields = await pdfDoc.getForm().getFields();

      const form = await pdfDoc.getForm();

      fields.forEach((field) => {
        console.log(field.getName());
      });

      for (let i = 0; i < 107; i++) {
        try {
          form.getTextField(`untitled${i + 1}`).setText(`${i + 1}`);
        } catch (error) {
          // console.log(i);
          // form.getCheckBox(`untitled${i + 1}`).check();
        }

        // form.getTextField(`untitled${i + 1}`).setText(`${i + 1}`);
      }

      //Personal Information

      //setPersonalInfo(form, data.personalInfo);

      // //Academic Information

      // setAcademicInfo(form, data.academicInformation);

      // //Work Experience
      // setWorkingExperience(form, data.workExperience);

      // //Family Information
      // setFamilyInfo(form, data.familyInformation);

      // //Program Information
      // setProgramInfo(form, data.exchangeProgram);

      const pdfBytes = await pdfDoc.save();
      await writeFile(output, pdfBytes);
      console.log("Pdf created!");
    } catch (error) {
      console.log(error);
    }
  }

  modifyPdf(
    path.join(__dirname, "form_grace.pdf"),
    path.join(__dirname, "modified_graceform.pdf")
  );

  function setPersonalInfo(form, data) {
    form.getCheckBox(`untitled71`).check();
    form.getCheckBox(`untitled77`).check();
    form.getCheckBox(`untitled111`).check();
    form.getCheckBox(`untitled112`).check();
    form.getCheckBox(`untitled113`).check();
    //form.getCheckBox(`untitled72`).check();
    //form.getCheckBox(`untitled73`).check();
    //form.getCheckBox(`untitled74`).check();
    //form.getCheckBox(`untitled75`).check();

    //Personal Information
    form.getTextField("untitled86").setText("no se");
    form.getTextField("untitled1").setText(data.firstName);
    form.getTextField("untitled2").setText(data.lastName);
    form.getTextField("untitled3").setText(data.birthDate);
    form.getTextField("untitled4").setText(data.age);
    form.getTextField("untitled5").setText(data.id);
    form.getTextField("untitled6").setText(data.passport);
    form.getTextField("untitled7").setText(data.email);
    form.getTextField("untitled8").setText(data.phoneNumber);
    form.getTextField("untitled106").setText(data.altPhoneNumber);
    form.getTextField("untitled105").setText(data.nacionality);
    form.getTextField("untitled104").setText(data.address);
    form.getTextField("untitled103").setText(data.emergencyContact);

    if (data.sex == "male") {
      form.getCheckBox(`untitled9`).check();
    } else {
      form.getCheckBox(`untitled10`).check();
    }

    switch (data.englishLevel) {
      case "a1":
        form.getCheckBox(`untitled11`).check();
        break;
      case "a2":
        form.getCheckBox(`untitled12`).check();
        break;
      case "b1":
        form.getCheckBox(`untitled13`).check();
        break;
      case "b2":
        form.getCheckBox(`untitled14`).check();
        break;
      case "c1":
        form.getCheckBox(`untitled15`).check();
        break;
      case "c2":
        form.getCheckBox(`untitled16`).check();
        break;
      default:
        break;
    }

    switch (data.shirtSize) {
      case "xs":
        form.getCheckBox(`untitled17`).check();
        break;
      case "s":
        form.getCheckBox(`untitled18`).check();
        break;
      case "m":
        form.getCheckBox(`untitled19`).check();
        break;
      case "l":
        form.getCheckBox(`untitled20`).check();
        break;
      case "xl":
        form.getCheckBox(`untitled21`).check();
        break;
      case "2xl":
        form.getCheckBox(`untitled22`).check();
        break;
      default:
        break;
    }
  }

  function setAcademicInfo(form, data) {
    form.getTextField("untitled102").setText(data.college);
    form.getTextField("untitled101").setText(data.collegeStartingDate);
    form.getTextField("untitled100").setText(data.career);
    form.getTextField("untitled99").setText(data.collegeLevel);
    form.getTextField("untitled98").setText(data.currentSubjects);
    form.getTextField("untitled97").setText(data.lastSubjects);
    form.getTextField("untitled96").setText(data.aproxEndingDate);
    form.getTextField("untitled95").setText(data.payingResponsible);

    data.whereCollegeStoped == "y"
      ? form.getCheckBox(`untitled23`).check()
      : form.getCheckBox(`untitled24`).check();

    data.wentOtherCollege == "y"
      ? form.getCheckBox(`untitled25`).check()
      : form.getCheckBox(`untitled26`).check();

    data.changedCareer == "y"
      ? form.getCheckBox(`untitled27`).check()
      : form.getCheckBox(`untitled28`).check();

    data.changedCollege == "y"
      ? form.getCheckBox(`untitled29`).check()
      : form.getCheckBox(`untitled30`).check();
  }

  function setWorkingExperience(form, data) {
    data.currentlyWorking == "y"
      ? form.getCheckBox(`untitled31`).check()
      : form.getCheckBox(`untitled32`).check();

    form.getTextField("untitled94").setText(data.companyName);
    form.getTextField("untitled93").setText(data.workPosition);
    form.getTextField("untitled92").setText(data.workTiming);
    form.getTextField("untitled91").setText(data.hiredTime);
    form.getTextField("untitled90").setText(data.otherCompanyAndPos);
  }

  function setFamilyInfo(form, data) {
    switch (data.martitalStatus) {
      case "single":
        form.getCheckBox(`untitled33`).check();
        break;
      case "married":
        form.getCheckBox(`untitled34`).check();
        break;
      case "divorced":
        form.getCheckBox(`untitled35`).check();
        break;
      case "other":
        form.getCheckBox(`untitled36`).check();
        break;
      default:
        break;
    }

    data.children == "y"
      ? form.getCheckBox(`untitled37`).check()
      : form.getCheckBox(`untitled38`).check();

    form.getTextField("untitled89").setText(data.liveWith);

    data.workingParents == "y"
      ? form.getCheckBox(`untitled39`).check()
      : form.getCheckBox(`untitled40`).check();

    form.getTextField("untitled88").setText(data.ocupations);

    data.ownedHouse == "y"
      ? form.getCheckBox(`untitled45`).check()
      : form.getCheckBox(`untitled41`).check();

    data.siblings == "y"
      ? form.getCheckBox(`untitled42`).check()
      : form.getCheckBox(`untitled43`).check();

    form.getTextField("untitled87").setText(data.sibligsAmount);

    data.closeFamilyAtUS == "y"
      ? form.getCheckBox(`untitled44`).check()
      : form.getCheckBox(`untitled46`).check();
  }

  function setProgramInfo(form, data) {
    form.getTextField("untitled86").setText(data.goal);
    form.getTextField("untitled85").setText(data.whyDoingProgram);

    switch (data.whoIsPaying) {
      case "me":
        form.getCheckBox(`untitled47`).check();
        break;
      case "parents":
        form.getCheckBox(`untitled48`).check();
        break;
      case "friend":
        form.getCheckBox(`untitled49`).check();
        break;
      case "other":
        form.getCheckBox(`untitled50`).check();
        break;
      default:
        break;
    }

    data.wanrrantiers == "y"
      ? form.getCheckBox(`untitled51`).check()
      : form.getCheckBox(`untitled52`).check();

    data.exchangeBefore == "y"
      ? form.getCheckBox(`untitled53`).check()
      : form.getCheckBox(`untitled54`).check();

    form.getTextField("untitled83").setText(data.howManyExchanges);
    form.getTextField("untitled84").setText(data.atWhichYear);
    form.getTextField("untitled82").setText(data.agency);
    form.getTextField("untitled81").setText(data.sponsor);
    form.getTextField("untitled80").setText(data.whyChangedAgency);

    data.troublesLastProgram == "y"
      ? form.getCheckBox(`untitled55`).check()
      : form.getCheckBox(`untitled56`).check();

    data.hasVisitedUS == "y"
      ? form.getCheckBox(`untitled57`).check()
      : form.getCheckBox(`untitled58`).check();

    data.usVisa == "y"
      ? form.getCheckBox(`untitled59`).check()
      : form.getCheckBox(`untitled60`).check();

    form.getTextField("untitled79").setText(data.whichVisa);

    data.usResidenceProcess == "y"
      ? form.getCheckBox(`untitled61`).check()
      : form.getCheckBox(`untitled62`).check();

    data.usVisaDenied == "y"
      ? form.getCheckBox(`untitled63`).check()
      : form.getCheckBox(`untitled64`).check();

    data.medCondition == "y"
      ? form.getCheckBox(`untitled65`).check()
      : form.getCheckBox(`untitled66`).check();

    form.getTextField("untitled78").setText(data.whichMedCondition);

    data.medicalPrescription == "y"
      ? form.getCheckBox(`untitled67`).check()
      : form.getCheckBox(`untitled68`).check();

    data.noWorkingDay == "y"
      ? form.getCheckBox(`untitled69`).check()
      : form.getCheckBox(`untitled70`).check();
  }

  //form.getCheckBox(`untitled75`).check();

  //Personal Information
  form.getTextField("untitled86").setText("no se");
  form.getTextField("untitled1").setText(data.firstName);
  form.getTextField("untitled2").setText(data.lastName);
  form.getTextField("untitled3").setText(data.birthDate);
  form.getTextField("untitled4").setText(data.age);
  form.getTextField("untitled5").setText(data.id);
  form.getTextField("untitled6").setText(data.passport);
  form.getTextField("untitled7").setText(data.email);
  form.getTextField("untitled8").setText(data.phoneNumber);
  form.getTextField("untitled106").setText(data.altPhoneNumber);
  form.getTextField("untitled105").setText(data.nacionality);
  form.getTextField("untitled104").setText(data.address);
  form.getTextField("untitled103").setText(data.emergencyContact);

  if (data.sex == "male") {
    form.getCheckBox(`untitled9`).check();
  } else {
    form.getCheckBox(`untitled10`).check();
  }

  switch (data.englishLevel) {
    case "a1":
      form.getCheckBox(`untitled11`).check();
      break;
    case "a2":
      form.getCheckBox(`untitled12`).check();
      break;
    case "b1":
      form.getCheckBox(`untitled13`).check();
      break;
    case "b2":
      form.getCheckBox(`untitled14`).check();
      break;
    case "c1":
      form.getCheckBox(`untitled15`).check();
      break;
    case "c2":
      form.getCheckBox(`untitled16`).check();
      break;
    default:
      break;
  }

  switch (data.shirtSize) {
    case "xs":
      form.getCheckBox(`untitled17`).check();
      break;
    case "s":
      form.getCheckBox(`untitled18`).check();
      break;
    case "m":
      form.getCheckBox(`untitled19`).check();
      break;
    case "l":
      form.getCheckBox(`untitled20`).check();
      break;
    case "xl":
      form.getCheckBox(`untitled21`).check();
      break;
    case "2xl":
      form.getCheckBox(`untitled22`).check();
      break;
    default:
      break;
  }
}

function setAcademicInfo(form, data) {
  form.getTextField("untitled102").setText(data.college);
  form.getTextField("untitled101").setText(data.collegeStartingDate);
  form.getTextField("untitled100").setText(data.career);
  form.getTextField("untitled99").setText(data.collegeLevel);
  form.getTextField("untitled98").setText(data.currentSubjects);
  form.getTextField("untitled97").setText(data.lastSubjects);
  form.getTextField("untitled96").setText(data.aproxEndingDate);
  form.getTextField("untitled95").setText(data.payingResponsible);

  data.whereCollegeStoped == "y"
    ? form.getCheckBox(`untitled23`).check()
    : form.getCheckBox(`untitled24`).check();

  data.wentOtherCollege == "y"
    ? form.getCheckBox(`untitled25`).check()
    : form.getCheckBox(`untitled26`).check();

  data.changedCareer == "y"
    ? form.getCheckBox(`untitled27`).check()
    : form.getCheckBox(`untitled28`).check();

  data.changedCollege == "y"
    ? form.getCheckBox(`untitled29`).check()
    : form.getCheckBox(`untitled30`).check();
}

function setWorkingExperience(form, data) {
  data.currentlyWorking == "y"
    ? form.getCheckBox(`untitled31`).check()
    : form.getCheckBox(`untitled32`).check();

  form.getTextField("untitled94").setText(data.companyName);
  form.getTextField("untitled93").setText(data.workPosition);
  form.getTextField("untitled92").setText(data.workTiming);
  form.getTextField("untitled91").setText(data.hiredTime);
  form.getTextField("untitled90").setText(data.otherCompanyAndPos);
}

function setFamilyInfo(form, data) {
  switch (data.martitalStatus) {
    case "single":
      form.getCheckBox(`untitled33`).check();
      break;
    case "married":
      form.getCheckBox(`untitled34`).check();
      break;
    case "divorced":
      form.getCheckBox(`untitled35`).check();
      break;
    case "other":
      form.getCheckBox(`untitled36`).check();
      break;
    default:
      break;
  }

  data.children == "y"
    ? form.getCheckBox(`untitled37`).check()
    : form.getCheckBox(`untitled38`).check();

  form.getTextField("untitled89").setText(data.liveWith);

  data.workingParents == "y"
    ? form.getCheckBox(`untitled39`).check()
    : form.getCheckBox(`untitled40`).check();

  form.getTextField("untitled88").setText(data.ocupations);

  data.ownedHouse == "y"
    ? form.getCheckBox(`untitled45`).check()
    : form.getCheckBox(`untitled41`).check();

  data.siblings == "y"
    ? form.getCheckBox(`untitled42`).check()
    : form.getCheckBox(`untitled43`).check();

  form.getTextField("untitled87").setText(data.sibligsAmount);

  data.closeFamilyAtUS == "y"
    ? form.getCheckBox(`untitled44`).check()
    : form.getCheckBox(`untitled46`).check();
}

function setProgramInfo(form, data) {
  form.getTextField("untitled86").setText(data.goal);
  form.getTextField("untitled85").setText(data.whyDoingProgram);

  switch (data.whoIsPaying) {
    case "me":
      form.getCheckBox(`untitled47`).check();
      break;
    case "parents":
      form.getCheckBox(`untitled48`).check();
      break;
    case "friend":
      form.getCheckBox(`untitled49`).check();
      break;
    case "other":
      form.getCheckBox(`untitled50`).check();
      break;
    default:
      break;
  }

  data.wanrrantiers == "y"
    ? form.getCheckBox(`untitled51`).check()
    : form.getCheckBox(`untitled52`).check();

  data.exchangeBefore == "y"
    ? form.getCheckBox(`untitled53`).check()
    : form.getCheckBox(`untitled54`).check();

  form.getTextField("untitled83").setText(data.howManyExchanges);
  form.getTextField("untitled84").setText(data.atWhichYear);
  form.getTextField("untitled82").setText(data.agency);
  form.getTextField("untitled81").setText(data.sponsor);
  form.getTextField("untitled80").setText(data.whyChangedAgency);

  data.troublesLastProgram == "y"
    ? form.getCheckBox(`untitled55`).check()
    : form.getCheckBox(`untitled56`).check();

  data.hasVisitedUS == "y"
    ? form.getCheckBox(`untitled57`).check()
    : form.getCheckBox(`untitled58`).check();

  data.usVisa == "y"
    ? form.getCheckBox(`untitled59`).check()
    : form.getCheckBox(`untitled60`).check();

  form.getTextField("untitled79").setText(data.whichVisa);

  data.usResidenceProcess == "y"
    ? form.getCheckBox(`untitled61`).check()
    : form.getCheckBox(`untitled62`).check();

  data.usVisaDenied == "y"
    ? form.getCheckBox(`untitled63`).check()
    : form.getCheckBox(`untitled64`).check();

  data.medCondition == "y"
    ? form.getCheckBox(`untitled65`).check()
    : form.getCheckBox(`untitled66`).check();

  form.getTextField("untitled78").setText(data.whichMedCondition);

  data.medicalPrescription == "y"
    ? form.getCheckBox(`untitled67`).check()
    : form.getCheckBox(`untitled68`).check();

  data.noWorkingDay == "y"
    ? form.getCheckBox(`untitled69`).check()
    : form.getCheckBox(`untitled70`).check();
}

const buffer = Buffer.from("hello world!");
console.log(buffer.length - 1);
