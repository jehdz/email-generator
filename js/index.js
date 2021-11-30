function generateInput(value){
    var html;

    html = `<h3> ${value} </h3>
    <input type="text" id="${value}">`

    return html;

}

const numbers = ['one', 'two', 'three'];

function createInputCards(inputValue){
    var num, input, selector;

    $('form').show(350);
    $('.card').css('display', 'none');
    $('#createTemplate').css('display', 'none');
    $('#GenerateButton').show();

    for(let i = 0; i < numbers.length; i++){

        num = numbers[i]
        selector = '.form.' + num;

        input = `                
        <h3> ${inputValue} ${i+1} </h3>
        <input type="text" id="${inputValue + "-" + num}">`

        $(selector).append(input);
    }

    $(document).ready(function(){
        $('input[type="text"]').blur(function(){
            if(!$(this).val()){
                $(this).addClass("error");
            } else{
                $(this).removeClass("error");
            }
        });
    });
        
}

$('#createTemplate').on('click', function(){

    var product, sale, regular, background, bg_switch, product_switch, sale_switch, regular_switch;
    product = $('.product h3').text();
    sale = $('.sale h3').text();
    regular = $('.regular h3').text();
    background = $('.background h3').text();

    bg_switch = $('.label.bg').text();
    product_switch = $('.label.product').text();
    sale_switch = $('.label.sale').text();
    regular_switch = $('.label.regular').text();


    bg_switch == "On" ? $('.item-bg').css('background-color', '#f1f1f1') : $('.item-bg').css('background-color', '#fff');
    product_switch == "On" ? createInputCards(product) : 0 ; 
    sale_switch == "On" ? createInputCards(sale) : 0 ;
    regular_switch == "On" ? createInputCards(regular) : 0;

});

