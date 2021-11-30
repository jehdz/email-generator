// class Form {
//     constructor(url, img, product, salePrice, regPrice){
//         this.url = url;
//         this.img = img;
//         this.product = product;
//         this.salePrice = salePrice;
//         this.regPrice = regPrice;
//     } 
// }

// class Form {
//     constructor(url, img, product, sale, regular, id){
//         this.url = url;
//         this.img = img;
//         this.product = product;
//         this.sale = sale;
//         this.regular = regular; 
//         this.id = id; 
//     }

//     setId(id){
//         this.id = id;
//     }

//     leftCol(){
//         return `
//         <td width="190" align="center" style="padding: 0px 10px 10px 0px">
//         <a href="${this.url}" title="${product1}" target="_blank">
//             <img src="${imgthis.url}" alt="${product1}" width="190" border="0" style="display:block">
//             </a>
//                     <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
//                         <tr>
//                             <td align="left">
//                                 <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" role="presentation">
//                                     <tr>
//                                         <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 20px 0px 0px 0px;"> <a href="${this.url}" target="_blank" title="${product1}" alt="${product1}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">${product1}</a> </td>
//                                     </tr>
//                                     <tr>
//                                         <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${this.url}" target="_blank" title="$${productSalePrice1}" style="display: block; text-decoration: none; color: #007dc3;">$${productSalePrice1} </a> </td>
//                                     </tr>
//                                     <tr>
//                                         <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:22px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 5px 0px 0px 0px;"> <a href="${this.url}" target="_blank" title="Reg Price $${productRegPrice1}" alt="Reg Price $${productRegPrice1}" style="display: block; text-decoration: none; font-weight: lighter;color: #a1a1a1; font-size: 15px;">Reg Price $${productRegPrice1}</a> </td>
//                                     </tr>

//                                     <tr>
//                                         <td align="center" style="padding: 0px 0px 10px 0px;"> <a href="${this.url}" title="Shop Now" style="padding: 10px 20px 20px 20px; width:auto;display: block;text-decoration: none;border:0;text-align: center;font-weight: bold;font-size: 18px;font-family: Nunito Sans, open-sans, sans-serif; color : #000 ;background-color: #fff; line-height:16px; text-transform: uppercase;" target="_blank"> Shop Now > </a> 
//                                         </td>
//                                     </tr>
//                                 </table>
//                             </td>
//                         </tr>
//                     </table>
//     </td>
//             `
//     }

//     template(){

//         return `    
//         <table class="example" width="600" cellpadding="0" cellspacing="0" border="0" role="presentation">
//         <tr> ${this.leftCol()}         
//         </tr>
//         </table>`

//     }
// }


var form1 = new Form('google.com', 'jpg', 400, 12);
Object.keys(form1).forEach(key => form1[key] === undefined ? delete form1[key] : {});

function tempalteId(form){

    var tempId = '';
    Object.keys(form).forEach(key => {
        tempId += key
    } );

    console.log(tempId)

    return tempId;
}


var keys = [ 'url', 'img', 'product', 'sale', 'regular'];





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


// 




`  
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
                                        <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${url1}" target="_blank" title="$${productSalePrice1}" style="display: block; text-decoration: none; color: #f50022;">$${productSalePrice1} </a> </td>
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
                                <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${url2}" target="_blank" title="$${productSalePrice2}" style="display: block; text-decoration: none; color: #f50022;">$${productSalePrice2} </a> </td>
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
                                <td style="font-family: Nunito Sans, open-sans, sans-serif; font-size:20px; font-weight: bold; background-color: #fff ;color:#000000; text-align:Center; padding: 10px 0px 0px 0px "> <a href="${url3}" target="_blank" title="$${productSalePrice3}" style="display: block; text-decoration: none; color: #f50022;">$${productSalePrice3} </a> </td>
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