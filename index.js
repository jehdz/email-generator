$('#GenerateButton').on('click', generateHtml);


function generateHtml() {

    var url1 = $('#url1').val();
    var imgUrl1 = $('#imageUrl1').val();

    var url2 = $('#url2').val();
    var imgUrl2 = $('#imageUrl2').val();

    var url3 = $('#url3').val();
    var imgUrl1 = $('#imageUrl1').val();

    var url1 = $('#url3').val();
    var imgUrl1 = $('#imageUrl3').val();



    var template = `<div> <a href=" ${url1}" target="_blank"> </a>
    \n <img src="${imgUrl1}" alt=""> <a href=" ${url2}" target="_blank"> </a>
    \n <img src="${imgUrl2}" alt=""> </div>`;
    var temp = ` <a href=" ${url2}" target="_blank"> </a>
    \n <img src="${imgUrl2}" alt=""> </div>`;

    // console.log(inputValue);

    // $('.template').html('<h1>' + inputValue + '</h1>');
    $('.template').text(template);


}
