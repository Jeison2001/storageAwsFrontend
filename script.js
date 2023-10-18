
$(document).ready(function() {
    $('#file-upload').on('change', function () {
        var fileDetails = $('#file-details');
        var fileInput = $(this)[0];
        var fileName = fileInput.files[0].name;
        var fileSize = fileInput.files[0].size;
        if (this.files.length > 0) {
            $('#file-name span').text(fileName);
            $('#file-size span').text(fileSize);
            fileDetails.css('display', 'block');
        }else{
            fileDetails.css('display', 'none');
        }
    });

    // Evento para cargar un archivo
    $('#submit-button').on('click', function () {
        var fileInput = $('#file-upload')[0].files[0];

        if (fileInput) {
            var formData = new FormData();
            formData.append('file', fileInput);

            $.ajax({
                url: 'http://balanceadorcargaextremelab-1823199642.us-east-1.elb.amazonaws.com/upload',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function (data) {
                    // Aquí puedes manejar la respuesta si es necesario
                }
            });
        } else {
            alert('Selecciona un archivo antes de cargarlo.');
        }
    });

    // Evento para actualizar la tabla de archivos
    $('#update-button').on('click', function () {
        $.ajax({
            url: 'http://balanceadorcargaextremelab-1823199642.us-east-1.elb.amazonaws.com/list',
            type: 'GET',
            success: function (data) {
                // Limpiar la tabla antes de actualizar
                $('table tr:gt(0)').remove();

                // Agregar los datos a la tabla
                data.forEach(function (item) {
                    var row = '<tr>' +
                        '<td>' + item.fileName + '</td>' +
                        '<td><a href="' + item.fileUrl + '" download>Descargar</a></td>' +
                        '</tr>';
                    $('table').append(row);
                });
            }
        });
    });
});
