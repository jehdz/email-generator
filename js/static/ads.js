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
    var url1, url2, url3, url4, img1, img2, img3, img4, alt1, alt2, alt3, alt4; 


    url1 = $('#url1').val();
    img1 = $('#img1').val();
    alt1 = $('#alt1').val();

    url2 = $('#url2').val();
    img2 = $('#img2').val();
    alt2 = $('#alt2').val();

    url3 = $('#url3').val();
    img3 = $('#img3').val();
    alt3 = $('#alt3').val();

    url4 = $('#url4').val();
    img4 = $('#img4').val();
    alt4 = $('#alt4').val();



    template = `
    <!-- Horizontal Ad -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
        <tbody>
            <tr>
                <td align="center">
                    <tbody>
                        <tr>
                            <td width="100%" align="center" class="full-img" style="padding: 0px 0px 0px 0px">
                            <a href="${url1}" target="_blank">
                            <img src="${img1}" alt="${alt1}" title="${alt1}" width="600px" border="0" style="display:block"> </a>
                            </td>
                        </tr>
                    </tbody>
                </td>
            </tr>
        </tbody>
    </table>
    
    <!--Spacer-->
    <table>
        <tbody>
            <tr>
                <td height="10" style="height:10px;">
                </td>
            </tr>
        </tbody>
    </table>
    
    <!--Side-by-Side Ads-->
    <table width="600" cellpadding="0" cellspacing="0" border="0" role="presentation" style="width:600px">
        <tbody>
            <tr>
                <td width="48%" align="left" class="full-img" style="padding: 0px 10px 0px 0px;">
                    <a href="${url2}" title="${alt2}" target="_blank">
                    <img src="${img2}" alt="${alt2}" width="290" border="0" style="display:block">
                    </a>
                </td>
                <td width="48%" align="left" class="full-img" style="padding: 0px 0px 0px 10px;">
                    <a href="${url3}" title="${alt3}" target="_blank">
                    <img src="${img3}" alt="${alt3}" width="290" border="0" style="display:block">
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
    
    <!--Spacer -->
    <table>
        <tbody>
            <tr>
                <td height="10" style="height:10px;">
                </td>
            </tr>
        </tbody>
    </table>
    
    <!-- Horizontal Ad -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
        <tbody>
            <tr>
                <td align="center">
                    <tbody>
                        <tr>
                            <td width="100%" align="center" class="full-img" style="padding: 0px 0px 0px 0px">
                            <a href="${url4}" target="_blank">
                            <img src="${img4}" alt="${alt4}" title="${alt4}" width="600px" border="0" style="display:block"> </a>
                            </td>
                        </tr>
                    </tbody>
                </td>
            </tr>
        </tbody>
    </table>`
    $('.template').text(template);

    document.querySelector('.CodeMirror').CodeMirror.setValue(template)



}



