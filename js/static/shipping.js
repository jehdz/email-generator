$('#create-template').on('click', generateHtml);

var htmlMarkup = document.querySelector('#code');


var myCodeMirror = CodeMirror(htmlMarkup, {
    lineNumbers: true,
    tabSize: 2,
    // value: tempalte,
    mode: "htmlmixed",
    theme: 'monokai',
    lineWrapping: true
});




function generateHtml() {

    var template;
    var bg, font, img, url, alt;


    bg = $('#bg').val();
    font = $('#font').val();
    img = $('#img').val();
    url = $('#url').val();
    alt = $('#alt').val();



    template = `
        <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
            <tbody>
                <tr>
                    <td align="center">
                    <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" role="presentation">
                        <tbody>
                            <tr>
                                <!--  Header -->
                                <!-- Free sheeping on orders over 35 -->
                                <td align="center" style="font-family: Nunito Sans, open-sans, sans-serif; font-weight: bold; font-size:23px; ;color:#fff; text-align:center; padding: 20px 0px 20px 0px; background:${bg}; width: 100%; color: #fff; ">
                                <a href="https://www.abt.com/help/shipping-promotions" alt="Free Shipping on most orders" title="Free shipping on most orders" style="text-decoration: none; color: ${font};" target="_blank">FREE SHIPPING ON MOST ORDERS </a>
                                </td>
                            </tr>
                            <tr>
                                <!-- main banner -->
                                <!-- Tv Banner -->
                                <td width="100%" align="center" class="full-img" style="padding: 0px 0px 0px 0px">
                                <a href="${url}" target="_blank">
                                <img src="${img}" alt="${alt}" title="${alt}" width="600px" border="0" style="display:block"> </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </td>
                </tr>
            </tbody>
        </table>`
    $('.template').text(template);

    document.querySelector('.CodeMirror').CodeMirror.setValue(template)



}



