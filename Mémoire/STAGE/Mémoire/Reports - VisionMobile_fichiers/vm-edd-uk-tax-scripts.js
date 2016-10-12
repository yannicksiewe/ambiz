jQuery(document).ready(function($) {

    var $body = $('body'),
    $edd_cart_amount = $('.edd_cart_amount');

    //validate vat
    function validate_tax_id(){
        $tax_id = $('#tax_id').val();
        $billing_country = $('#billing_country').val();

        if($billing_country != '*'){
            $.ajax({
                type: "POST",
                beforeSend : function(){
                    $('#tax_id_validation').html('<strong class="success"><span class="loader"></span>Validating your Tax ID.</strong>');
                },
                data: { tax_id: $tax_id, billing_country: $billing_country, action: 'validate_tax_id' },
                url: edd_global_vars.ajaxurl,
                success: function (response) {

                    if(response == 1){
                        $('#tax_id_validation').html('<strong class="success">Your tax id is valid!</strong>');
                        $("input[id=vtid]").val(1);
                        recalculate_taxes();
                    } else {
                        $('#tax_id_validation').html('<strong class="error">Your tax id is NOT valid!</strong>');
                        $("input[id=vtid]").val(0);
                        recalculate_taxes();
                    }
                }
            }).fail(function (data) {
               $('#tax_id_validation').html('<strong class="error">The system failed to recognise you.</strong><br/><i style="font-style:italic; font-size:13px;">If you\'re eligible to be VAT exempt please contact <a href="mailto:support@visionmobile.com">support@visionmobile.com</a> or try again.</i>');
            }).done(function (data) {

            });
        }
    }

    $body.on('focusout', 'input#tax_id', function() {
        $("input[id=vtid]").val(0);
        $('#tax_id_validation').html('');
        if($('#tax_id').val()){
            validate_tax_id();
        } else {
            recalculate_taxes();
        }
    });

    $body.on('focusout', 'input#edd-organisation', function() {
        if($('#billing_country').val() != '*'){
            recalculate_taxes();
        }
    });

    $body.on('change', '#edd_purchase_form select#billing_country', function() {
        resetAllValues();
    });

    function resetAllValues(){
        $('#tax_id').val('');
        $('#tax_id_validation').html('');
        $("input[id=vtid]").val(0);
        recalculate_taxes();
    }
});
