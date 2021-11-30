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
    var alt;
    var url, url1, url2, url3;
    var imgUrl;
    var product1, product2, product3;
    var productSalePrice1, productSalePrice2, productSalePrice3;
    var productRegPrice1, productRegPrice2, productRegPrice3;

    url = $('#url').val();
    imgUrl = $('#imageUrl').val();
    alt = $('#alt').val();

    url1 = $('#url1').val();
    product1 = $('#product1').val();
    console.log(product1)
    productSalePrice1 = $('#productSalePrice1').val();
    productRegPrice1 = $('#productRegPrice1').val();

    url2 = $('#url2').val();
    product2 = $('#product2').val();
    productSalePrice2 = $('#productSalePrice2').val();
    productRegPrice2 = $('#productRegPrice2').val();

    url3 = $('#url3').val();
    product3 = $('#product3').val();
    productSalePrice3 = $('#productSalePrice3').val();
    productRegPrice3 = $('#productRegPrice3').val();


    template = `
    <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
    <tbody>
        <tr>
            <td align="center">
                <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" role="presentation">
                    <tbody>
                        <tr>
                            <!-- main banner -->
                            <!-- Tv Banner -->
                            <td width="100%" align="center" class="full-img" style="padding: 0px 0px 0px 0px">

                                <a href="${url}" target="_blank"> <img src="${imgUrl}" alt="${alt}" title="${alt}" width="600px" border="0" style="display:block"> </a>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>

<table width="600" cellpadding="0" cellspacing="0" border="0" role="presentation">
    <tr>
        <!-- First Product -->
        <td width="190" align="center" style="padding: 0px 8px 10px 8px">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                            <tr>
                                <td align="left">
                                    <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" role="presentation">

                                        <tr>
                                            <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: none ;color:#000000; text-align:Center; padding: 20px 5px 0px 5px "> <a href="${url1}" target="_blank" title="${product1}" style="display: block; text-decoration: none; font-weight: lighter;color: #000; font-size: 16px;">${product1}</a> </td>
                                        </tr>
                                        <tr>
                                            <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: none ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${url1}" target="_blank" title="$${productSalePrice1}" style="display: block; text-decoration: none; color: #007dc3;">$${productSalePrice1} </a> </td>
                                        </tr>
                                        <tr>
                                            <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: none ;color:#000000; text-align:Center; padding: 0px 0px 0px 0px "> <a href="${url1}" target="_blank" title="Regular price $${productRegPrice1}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">Regular price $${productRegPrice1}</a> </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="padding: 0px 0px 10px 0px;"> <a href="${url1}" title="Shop Now" style="padding: 10px 20px 20px 20px; width:auto;display: block;text-decoration: none;border:0;text-align: center;font-weight: bold;font-size: 16px;font-family: Nunito Sans, open-sans, sans-serif; color : #000 ;background-color: none; line-height:16px; text-transform: uppercase;" target="_blank"> Shop Now > </a> 
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
        </td>

        <!-- Second Product -->
        <td width="190" align="center" style="padding: 0px 8px 10px 8px">

                        <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                            <tr>
                                <td align="left">
                                    <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                        <tr>
                                            <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: none ;color:#000000; text-align:Center; padding: 20px 5px 0px 5px "> <a href="${url2}" target="_blank" title="${product2}" style="display: block; text-decoration: none; font-weight: lighter;color: #000; font-size: 16px;">${product2}</a> </td>
                                        </tr>
                                        <tr>
                                            <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: none ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${url2}" target="_blank" title="$${productSalePrice2}" style="display: block; text-decoration: none; color: #007dc3;">$${productSalePrice2}  </a> </td>
                                        </tr>
                                        <tr>
                                            <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: none ;color:#000000; text-align:Center; padding: 0px 0px 0px 0px "> <a href="${url2}l" target="_blank" title="Regular price $${productRegPrice2}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">Regular price $${productRegPrice2}</a> </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="padding: 0px 0px 10px 0px;"> <a href="${url2}" title="Shop Now" style="padding: 10px 20px 20px 20px; width:auto;display: block;text-decoration: none;border:0;text-align: center;font-weight: bold;font-size: 16px;font-family: Nunito Sans, open-sans, sans-serif; color : #000 ;background-color: none; line-height:16px; text-transform: uppercase;" target="_blank"> Shop Now > </a> 
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
        </td>

        <!-- Third Product -->
        <td width="190" align="center" style="padding: 0px 8px 10px 8px">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                            <tr>
                                <td align="left">
                                    <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                        <tr>
                                            <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: none ;color:#000; text-align:Center; padding: 20px 5px 0px 5px "> <a href="${url3}" target="_blank" title="${product3}" style="display: block; text-decoration: none; font-weight: lighter; color: #000; font-size: 16px;">${product3}
                                            </a> </td>
                                        </tr>
                                        <tr>
                                            <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: none ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${url3}" target="_blank" title="$${productRegPrice3}" style="display: block; text-decoration: none; color: #007dc3;">$${productRegPrice2}  </a> </td>
                                        </tr>
                                        <tr>
                                            <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: none ;color:#000000; text-align:Center; padding: 0px 0px 0px 0px "> <a href="${url3}l" target="_blank" title="Regular price $1,${productSalePrice3}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">Regular price $1,${productSalePrice3}</a> </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="padding: 0px 0px 10px 0px;"> <a href="${url3}" title="Shop Now" style="padding: 10px 20px 20px 20px; width:auto;display: block;text-decoration: none;border:0;text-align: center;font-weight: bold;font-size: 16px;font-family: Nunito Sans, open-sans, sans-serif; color : #000 ;background-color: none; line-height:16px; text-transform: uppercase;" target="_blank"> Shop Now > </a> 
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
        </td>
            </tr>
</table>
`
    $('.template').text(template);

    document.querySelector('.CodeMirror').CodeMirror.setValue(template)



}



