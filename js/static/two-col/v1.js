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
   

    url1 = $('#url1').val();
    imgUrl1 = $('#imageUrl1').val();
    category1 = $('#category1').val();


    url2 = $('#url2').val();
    imgUrl2 = $('#imageUrl2').val();
    category2 = $('#category2').val();



    template = `
<table  width="600" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
      <td width="290" align="center" style="padding: 0px 10px 10px 0px">
          <a href="${url1}" title="${category1}" target="_blank">
              <img src="${imgUrl1}" alt="${category1}" width="290" border="0" style="display:block">
              </a>
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                          <tr>
                              <td align="left">
                                  <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                      <tr>
                                          <td align="center" style="padding: 0px 0px 10px 0px;"> <a href="${url1}" title="Shop ${category1}" style="padding: 20px 20px 20px 20px; width:auto;display: block;text-decoration: none;border:0;text-align: center;font-weight: normal;font-size: 20px;font-family: Nunito Sans, open-sans, sans-serif; color : #000 ;background-color: #fff; line-height:16px;" target="_blank"> Shop ${category1} </a> 
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                      </table>
      </td>
      <td width="290" align="center" style="padding: 0px 0px 10px 10px">
          <a href="${url2}" title="${category2}" target="_blank">
              <img src="${imgUrl2}" alt="${category2}" width="290" border="0" style="display:block">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                  <tr>
                      <td align="left">
                          <table width="100%" align="left" cellpadding="0" cellspacing="0" border="0" role="presentation">

                              <tr>
                                  <td align="center" style="padding: 0px 0px 10px 0px;"> <a href="${url2}" title="Shop ${category2}" style="padding: 20px 20px 20px 20px; width:auto;display: block;text-decoration: none;border:0;text-align: center;font-weight: normal;font-size: 20px;font-family: Nunito Sans, open-sans, sans-serif; color : #000 ;background-color: #fff; line-height:16px;" target="_blank"> Shop ${category2} </a> 
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



