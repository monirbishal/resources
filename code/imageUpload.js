<input type="file" class="invoice" id="invoice_value" onchange="imageUpload(this)">
<input type="hidden" class="invoice" id="invoice_file" name="invoice_file">
// html

function imageUpload(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                // $('#invoice_value').val(e.target.result);
                $('#invoice_file').val(e.target.result);
                $('.file-name').text(input.files[0].name);
            }

            return reader.readAsDataURL(input.files[0]); // convert to base64 string
        }
    }
// js