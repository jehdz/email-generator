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
    var outline, bg, text, url, color;

    outline = $('#outline').val();
    color = $('#color').val();
    bg = $('#bg').val();
    text = $('#text').val();
    url = $('#url').val();
    


    template = `
<table width="600" cellpadding="10" cellspacing="0" border="0" role="presentation" style="width: 600px;">
    <tr> 
        <td align="center">
            <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" role="presentation">
                <tr>
                    <td align="center" style="padding: 0px 0px 20px 0px;">
                        <a href="${url}" target="_blank" title="${text}" alt="${text}" style="background-color: ${bg}; text-transform:uppercase; color: ${color}; text-decoration: none; border-radius: 30px; font-family: Nunito Sans, open-sans, sans-serif; padding: 7px 22px; font-size: 15px; text-align: center; font-weight: bold; border: 1px solid ${outline};">${text}</a>
                    </td>
                </tr>
        </td>
    </tr>
</table>`
    $('.template').text(template);

    document.querySelector('.CodeMirror').CodeMirror.setValue(template)



}



