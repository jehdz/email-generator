$('#GenerateButton').on('click', generateHtml);

var htmlMarkup = document.querySelector('#code');


var myCodeMirror = CodeMirror(htmlMarkup, {
    lineNumbers: true,
    tabSize: 2,
    // value: tempalte,
    mode: "htmlmixed",
    theme: 'monokai',
    lineWrapping: true
});

function Form(url, img, product, salePrice, regPrice) {
    this.url = url;
    this.img = img;
    this.product = product;
    this.salePrice = salePrice;
    this.regPrice = regPrice;
};




var forms = []


function left(form){

    var leftCol = `            
    
    <td width="190" align="center" style="padding: 0px 10px 10px 0px">
            <a href="${form.url}" title="${form.product}" target="_blank">
                <img src="${form.img}" alt="${form.product}" width="190" border="0" style="display:block">
            </a>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                        <tr>
                            <td align="left">
                                <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 20px 0px 0px 0px;"> <a href="${form.url}" target="_blank" title="${form.product}" alt="${form.product}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">${form.product}</a> </td>
                                    </tr>
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${form.url}" target="_blank" title="$${form.salePrice}" style="display: block; text-decoration: none; color: #007dc3;">$${form.salePrice} </a> </td>
                                    </tr>
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 5px 0px 0px 0px;"> <a href="${form.url}" target="_blank" title="Reg Price $${form.regPrice}" alt="Reg Price $${form.regPrice}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">Reg Price $${form.regPrice}</a> </td>
                                    </tr>

                                    <tr>
                                        <td align="center" style="padding: 0px 0px 10px 0px;"> <a href="${form.url}" title="Shop Now" style="padding: 10px 20px 20px 20px; width:auto;display: block;text-decoration: none;border:0;text-align: center;font-weight: bold;font-size: 18px;font-family: Nunito Sans, open-sans, sans-serif; color : #000 ;background-color: #fff; line-height:16px; text-transform: uppercase;" target="_blank"> Shop Now > </a> 
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
    </td>
`

return leftCol



}

function generateHtml() {

    var template;
    var url1, url2, url3;
    var imgUrl1, imgUrl2, imgUrl3;
    var product1, product2, product3;
    var productSalePrice1, productSalePrice2, productSalePrice3;
    var productRegPrice1, productRegPrice2, productRegPrice3;

    url1 = $('#url1').val();
    imgUrl1 = $('#imageUrl1').val();
    product1 = $('#Product-one').val();
    productSalePrice1 = $('#SalePrice-one').val();
    productRegPrice1 = $('#RegularPrice-one').val();

    url2 = $('#url2').val();
    imgUrl2 = $('#imageUrl2').val();
    product2 = $('#Product-two').val();
    productSalePrice2 = $('#SalePrice-two').val();
    productRegPrice2 = $('#RegularPrice-two').val();

    url3 = $('#url3').val();
    imgUrl3 = $('#imageUrl3').val();
    product3 = $('#Product-three').val();
    productSalePrice3 = $('#SalePrice-three').val();
    productRegPrice3 = $('#RegularPrice-three').val();

    var form1 = new Form(url1, imgUrl1, product1, productSalePrice1, productRegPrice1);
    var form2 = new Form(url2, imgUrl2, product2, productSalePrice2, productRegPrice2);
    var form3 = new Form(url3, imgUrl3, product3, productSalePrice3, productRegPrice3);

    Object.keys(form1).forEach(key => {
        if (form1[key] === undefined) {
          delete form1[key];
        }
      });

      Object.keys(form2).forEach(key => {
        if (form2[key] === undefined) {
          delete form2[key];
        }
      });

      Object.keys(form3).forEach(key => {
        if (form3[key] === undefined) {
          delete form3[key];
        }
      });

      left(form1);

    //   var testingTemplate = left(form1);

    //   console.log(testingTemplate)


    forms.push(form1)
    forms.push(form2)
    forms.push(form3)

    console.log(forms)


    function tableTempalte(){
        var tempalte = `
        <table width="600" cellpadding="0" cellspacing="0" border="0" role="presentation">
            <tr>
            ${leftCol(form1)}
            ${middleCol(form2)}
            ${rightCol(form3)}
            </tr>
        </table>
        `
    }

    function leftCol(form){

        var left = `
        <td width="190" align="center" style="padding: 0px 10px 10px 0px">
            <a href="${}" title="${product1}" target="_blank">
                <img src="${imgUrl1}" alt="${product1}" width="190" border="0" style="display:block">
            </a>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                        <tr>
                            <td align="left">
                            <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 20px 0px 0px 0px;"> <a href="${url1}" target="_blank" title="${product1}" alt="${product1}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">${product1}</a> </td>
                                    </tr>
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${url1}" target="_blank" title="$${productSalePrice1}" style="display: block; text-decoration: none; color: #007dc3;">$${productSalePrice1} </a> </td>
                                    </tr>
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 5px 0px 0px 0px;"> <a href="${url1}" target="_blank" title="Reg Price $${productRegPrice1}" alt="Reg Price $${productRegPrice1}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">Reg Price $${productRegPrice1}</a> </td>
                                    </tr>

                                    <tr>
                                        <td align="center" style="padding: 0px 0px 10px 0px;"> <a href="${url1}" title="Shop Now" style="padding: 10px 20px 20px 20px; width:auto;display: block;text-decoration: none;border:0;text-align: center;font-weight: bold;font-size: 18px;font-family: Nunito Sans, open-sans, sans-serif; color : #000 ;background-color: #fff; line-height:16px; text-transform: uppercase;" target="_blank"> Shop Now > </a> 
                                        </td>
                                    </tr>
                            </table>
            </td>`

    }


    // # of values in the object
    var numOfValues = Object.keys(form1).length;

    console.log(forms.length, "array length");
    console.log(numOfValues, "input form length")

    template = `
    <table width="600" cellpadding="0" cellspacing="0" border="0" role="presentation">
        <tr>
            <td width="190" align="center" style="padding: 0px 10px 10px 0px">
                <a href="${url1}" title="${product1}" target="_blank">
                    <img src="${imgUrl1}" alt="${product1}" width="190" border="0" style="display:block">
                    </a>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                <tr>
                                    <td align="left">
                                        <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                            <tr>
                                                <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 20px 0px 0px 0px;"> <a href="${url1}" target="_blank" title="${product1}" alt="${product1}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">${product1}</a> </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${url1}" target="_blank" title="$${productSalePrice1}" style="display: block; text-decoration: none; color: #007dc3;">$${productSalePrice1} </a> </td>
                                            </tr>
                                            <tr>
                                                <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 5px 0px 0px 0px;"> <a href="${url1}" target="_blank" title="Reg Price $${productRegPrice1}" alt="Reg Price $${productRegPrice1}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">Reg Price $${productRegPrice1}</a> </td>
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
        
        
            <td width="190" align="center" style="padding: 0px 5px 10px 5px">
                <a href="${url2}" title="${product2}" target="_blank">
                    <img src="${imgUrl2}" alt="${product2}" width="190" border="0" style="display:block">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                        <tr>
                            <td align="left">
                                <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 20px 0px 0px 0px;"> <a href="${url2}" target="_blank" title="${product2}" alt="${product2}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">${product2}</a> </td>
                                    </tr>
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${url2}" target="_blank" title="$${productSalePrice2}" style="display: block; text-decoration: none; color: #007dc3;">$${productSalePrice2} </a> </td>
                                    </tr>
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 5px 0px 0px 0px;"> <a href="${url2}" target="_blank" title="Reg Price $${productRegPrice2}" alt="Reg Price $${productRegPrice2}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">Reg Price $${productRegPrice2}</a> </td>
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
        
        
            <td width="190" align="center" style="padding: 0px 0px 10px 10px">
                <a href="${url3}" title="${product3}" target="_blank">
                    <img src="${imgUrl3}" alt="${product3}" width="190" border="0" style="display:block">
                    </a>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                        <tr>
                            <td align="left">
                                <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 20px 0px 0px 0px;"> <a href="${url3}" target="_blank" alt="${product3}" title="${product3}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">${product3}</a> </td>
                                    </tr>
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${url3}" target="_blank" title="$${productSalePrice3}" style="display: block; text-decoration: none; color: #007dc3;">$${productSalePrice3} </a> </td>
                                    </tr>
                                    <tr>
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 5px 0px 0px 0px;"> <a href="${url3}" target="_blank" title="Reg Price $${productRegPrice3}" alt="Reg Price $${productRegPrice3}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">Reg Price $${productRegPrice3}</a> </td>
                                    </tr>
        
                                    <tr>
                                        <td align="center" style="padding: 0px 0px 10px 0px;"> <a href="${url3}" title="Shop Now" style="padding: 10px 20px 20px 20px; width:auto;display: block;text-decoration: none;border:0;text-align: center;font-weight: bold;font-size: 18px;font-family: Nunito Sans, open-sans, sans-serif; color : #000 ;background-color: #fff; line-height:16px; text-transform: uppercase;" target="_blank"> Shop Now > </a> 
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



