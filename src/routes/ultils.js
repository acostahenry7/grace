function setPersonalInfo(form, data) {
  //Personal Information
  form.getTextField("untitled86").setText("no se");
  form.getTextField("untitled1").setText(data.firstName);
  form.getTextField("untitled2").setText(data.lastName);
  form.getTextField("untitled2").setText(data.birthDate);
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

module.exports = {
  setPersonalInfo,
};
