const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");
const path = require("path");

let data = {
  firstName: "Henry Junior",
  lastName: "Acosta Vargas",
  birthDate: "29/11/1999",
  age: "22",
  id: "402-4060468-2",
};

async function modifyPdf(input, output) {
  try {
    const pdfDoc = await PDFDocument.load(await readFile(input));

    const fields = await pdfDoc
      .getForm()
      .getFields()
      .map((f) => f.getName());

    const form = await pdfDoc.getForm();

    let entries = Object.entries(data);
    // entries.forEach((entry, index) => {
    //   console.log(entry[1]);
    //   form.getTextField(`untitled${index + 1}`).setText(`${entry[1]}`);
    // });

    for (let i = 0; i < 107; i++) {
      try {
        form.getTextField(`untitled${i + 1}`).setText(`${i + 1}`);
      } catch (error) {
        console.log(entries[i][i + 1]);
        form.getCheckBox(`untitled${i + 1}`).check();
      }
    }

    form.getTextField("untitled86").setText("no se");

    const pdfBytes = await pdfDoc.save();
    await writeFile(output, pdfBytes);
    console.log("Pdf created!");
  } catch (error) {
    console.log(error);
  }
}

// async function modifyPdf() {
//   const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
//   const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

//   const pdfDoc = await PDFDocument.load(existingPdfBytes)
//   const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

//   const pages = pdfDoc.getPages()
//   const firstPage = pages[0]
//   const { width, height } = firstPage.getSize()
//   firstPage.drawText('This text was added with JavaScript!', {
//     x: 5,
//     y: height / 2 + 300,
//     size: 50,
//     font: helveticaFont,
//     color: rgb(0.95, 0.1, 0.1),
//     rotate: degrees(-45),
//   })

//   const pdfBytes = await pdfDoc.save()
// }

modifyPdf(
  path.join(__dirname, "form_grace.pdf"),
  path.join(__dirname, "modified_graceform.pdf")
);
