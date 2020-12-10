
// html
<form action="#" method="POST" name="submit_form" enctype="multipart/form-data">
	<input type="text" id="" name="" data-error=".errorMessage">
        <div class="errorMessage text-danger error-text"></div>
</form>


// js 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
<script>
    $(function(){
        $("form[name='order_submit_form']").validate({
            errorPlacement: function (error, element) {
                var placement = $(element).data('error');
                if (placement) {
                    $(placement).append(error);
                }
                else {
                    error.insertAfter(element);
                }
            },
            // rules
            rules: {
                origin: "required",
                destination: "required",
                invoice_file: "required",
            },
            // messages
            messages: {
                origin: "Please Select origin country",
                destination: "Please Select destination country",
                invoice_file: "Please Upload Product Invoice!",
            },
            submitHandler: function (form) {
                form.submit();
            }
        });
    });
</script>