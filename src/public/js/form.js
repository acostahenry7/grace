$(document).ready(function () {
  $("#applicationForm").submit((e) => {
    console.log(e);
    e.preventDefault();

    //  console.log($("#applicationForm").serialize());
    console.log("hi");
    $.ajax({
      url: $("#applicationForm").attr("action"),
      type: "POST",
      data: $("#applicationForm").serialize(),
      success: (res) => {
        console.log("hi");
        $("#applicationForm")[0].reset();
        $("#messageModalLabel").text("Listo!");
        $("#messageModalIcon").addClass("fas fa-check text-success");
        $("#messageModalBody").text(
          "Tu formulario ha sido enviado exitosamente."
        );
        $("#messageModal").modal("show");
      },
      error: ({ status, statusText }) => {
        console.log(`Error: ${status} ${statusText}`);
        $("#messageModalLabel").text("Error!");
        $("#messageModalIcon").addClass(
          "fas fa-exclamation-triangle text-danger"
        );
        $("#messageModalBody").html(
          `Hubo un error al enviar tu formulario, inténtalo una vez más. 
          <p>Si el error persiste, contáctanos a través de nuestro
          correo <b>info@graceinternational.com</b> o en nuestro número telefónico <b>829-241-0234</b></p>`
        );

        $("#messageModal").modal("show");
      },
    });
    console.log("hi2");
  });
});
