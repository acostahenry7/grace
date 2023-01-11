fixture("Application Form").page("http://localhost:3002");

let baseObj = {
  // program: "smc",
  personalInformation: {
    firstname: "henry",
    lastname: "acosta",
    birthDate: "1999-11-29",
    sex: "male",
    age: "23",
    id: "40240604682",
    passport: "80988874564",
    email: "acostahenry7@gmail.com",
    phoneNumber: "8299306702",
    altPhoneNumber: "8496426702",
    englishLevel: "b2",
    nacionality: "Dominicano",
    address: "Ensanche La Paz, La Feria",
    shirtSize: "m",
    emergencyContact: "",
  },
  academicInformation: {
    college: "Universidad Dominicana O&M",
    collegeStartingDate: "2024-08-01",
    career: "Ingenieria de Sistemas",
    collegeLevel: "11",
    currentSubjects: "5",
    lastSubjects: "5",
    whereCollegeStoped: "n",
    aproxEndingDate: "2024-01-11",
    wentOtherCollege: "n",
    changedCareer: "n",
  },

  workExperience: {
    currentlyWorking: "y",
    companyName: "Lasa Motors",
    workPosition: "Fullstack Developer",
    workTiming: "Tiempo completo",
    hiredTime: "4 años",
    otherCompanyAndPos: "Ningún otro",
  },

  familyInformation: {
    maritalStatus: "single",
    children: "n",
    liveWith: "Mis padres",
    workingParents: "y",
    ocupations: "Administrador, Agrónoma",
    ownedHouse: "y",
    siblings: "y",
    sibligsAmount: "1",
    closeFamilyAtUS: "n",
  },

  exchageProgram: {
    goal: "Intercambio cultural",
    whyDoingProgram: "Conocer otra cultura",
    whoIsPaying: "me",
    wanrrantiers: "me",
    exchangeBefore: "n",
    howManyExchanges: "0",
    atWhichYear: "",
    agency: "",
    sponsor: "",
    whyChangedAgency: "",
    hasVisitedUS: "n",
    usVisa: "n",
    whichVisa: "",
    usResidenceProcess: "n",
    usVisaDenied: "n",
    medCondition: "n",
    whichMedCondition: "",
    medicalPrescription: "n",
    noWorkingDay: "n",
  },

  grace: {
    howDidYouKnow: "instagram",
    whyChoosedGrace: "Por sus valores",
    howToImprove: "",
    references: "Juan Perez 8096556332",
    anyQuestions: "y",
    questions: "Como se agenda una entrevista?",
  },
};

test("Filling the form", async (t) => {
  let errors = [];

  for (let x = 0; x < Object.entries(baseObj).length; x++) {
    await t.click(`#cat${x + 1}_icon`);

    let currentObject = Object.entries(baseObj)[x][1];

    for (let i = 0; i < Object.entries(currentObject).length; i++) {
      console.log("hola", typeof Object.values(currentObject)[i]);
      try {
        await t.typeText(
          `input[name=${Object.keys(currentObject)[i]}]`,
          `${Object.values(currentObject)[i]}`
        );
      } catch (error) {
        errors.push({
          key: Object.keys(currentObject)[i],
          value: Object.values(currentObject)[i],
        });
      }
    }
  }

  console.log(errors);
  await t.click("#appFormSubmit");
});
