//fixture("Application Form").page("https://graceinternational.com.do");
fixture("Application Form").page("http://localhost:3002");

let baseObj = {
  personalInformation: {
    program: "smc",
    firstname: "JAIME",
    lastname: "TEST FORM",
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
    emergencyContact: "Regina Vargas (8094633774)",
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
    payingResponsible: "Yo",
    wentOtherCollege: "n",
    changedCareer: "n",
    changedCollege: "n",
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
    wanrrantiers: "y",
    exchangeBefore: "y",
    howManyExchanges: "0",
    atWhichYear: "2020",
    agency: "test",
    sponsor: "Ramon",
    whyChangedAgency: "Mal servicio",
    troublesLastProgram: "y",
    hasVisitedUS: "n",
    usVisa: "n",
    whichVisa: "J1",
    usResidenceProcess: "n",
    usVisaDenied: "y",
    medCondition: "y",
    whichMedCondition: "Covid",
    medicalPrescription: "n",
    noWorkingDay: "n",
  },

  grace: {
    howDidYouKnow: "instagram",
    whyChoosedGrace: "Por sus valores",
    howToImprove: "No sé",
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
        if (x == 0 && i == 0) {
          await t.click(`select[name=${Object.keys(currentObject)[i]}]`);
          await t.click(`option[value=${Object.values(currentObject)[i]}]`);

          console.log(Object.keys(currentObject)[i]);
        } else {
          await t.typeText(
            `input[name=${Object.keys(currentObject)[i]}]`,
            `${Object.values(currentObject)[i]}`
          );
        }
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
  setTimeout(() => console.log("hola"), 4000);
});
