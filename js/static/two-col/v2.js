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
    var url1, url2;
    var imgUrl1, imgUrl2;
    var product1, product2;
    var productSalePrice1, productSalePrice2;
    var productRegPrice1, productRegPrice2;

    url1 = $('#url1').val();
    imgUrl1 = $('#imageUrl1').val();
    product1 = $('#product1').val();
    productSalePrice1 = $('#productSalePrice1').val();
    productRegPrice1 = $('#productRegPrice1').val();

    url2 = $('#url2').val();
    imgUrl2 = $('#imageUrl2').val();
    product2 = $('#product2').val();
    productSalePrice2 = $('#productSalePrice2').val();
    productRegPrice2 = $('#productRegPrice2').val();



template = `
<table width="600" cellpadding="0" cellspacing="0" border="0" role="presentation">
<tr>
    <td width="290" align="center" style="padding: 0px 10px 10px 0px">
        <a href="${url1}" title="${product1}" target="_blank">
            <img src="${imgUrl1}" alt="${product1}" width="290" border="0" style="display:block">
            </a>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                        <tr>
                            <td align="left">
                                <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 20px 00px 0px 0px "> <a href="${url1}" target="_blank" alt="${product1}" title="${product1}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">${product1}</a> </td>
                                    </tr>
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${url1}" target="_blank" title="$${productSalePrice1}" style="display: block; text-decoration: none; color: #007dc3;">$${productSalePrice1} </a> </td>
                                    </tr>

                                    <tr>
                                        <td align="center" style="padding: 0px 0px 10px 0px;"> <a href="${url1}" title="Shop Now" style="padding: 10px 20px 20px 20px; width:auto;display: block;text-decoration: none;border:0;text-align: center;font-weight: bold;font-size: 18px;font-family: Nunito Sans, open-sans, sans-serif; color : #000 ;background-color: #fff; line-height:16px; text-transform: uppercase;" target="_blank"> Shop Now > </a> 
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
    </td>
    <td width="290" align="center" style="padding: 0px 0px 10px 10px">
        <a href="${url2}" title="${product2}" target="_blank">
            <img src="${imgUrl2}" alt="${product2}" width="290" border="0" style="display:block">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                <tr>
                    <td align="left">
                        <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" role="presentation">
                            <tr>
                                <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 20px 0px 0px 0px "> <a href="${url2}" target="_blank" title="${product2}" alt="${product2}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">${product2}</a> </td>
                            </tr>
                            <tr>
                                <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${url2}" target="_blank" title="$${productSalePrice2}" style="display: block; text-decoration: none; color: #007dc3;">$${productSalePrice2} </a> </td>
                            </tr>

                            <tr>
                                <td align="center" style="padding: 0px 0px 10px 0px;"> <a href="${url2}" title="Shop Now" style="padding: 10px 20px 20px 20px; width:auto;display: block;text-decoration: none;border:0;text-align: center;font-weight: bold;font-size: 18px;font-family: Nunito Sans, open-sans, sans-serif; color : #000 ;background-color: #fff; line-height:16px; text-transform: uppercase;" target="_blank"> Shop Now > </a> 
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



