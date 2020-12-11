$('.Load').on("click", function () {
  if (($('.CardHolder').attr('datamaxvalue')) !== $('.card').last().attr('dataid')) {
    $.ajax({
      url: "https://reqres.in/api/users?page=2",
      success: function (response) {
        let x = response
        for (var i = 0; i < response.data.length; i++) {
          $(".CardHolder").append(`<div dataid="${response.data[i].id}" class="card mt-3 ml-2 mr-2">
        <div class="card-body d-flex">
          <img src='${response.data[i].avatar}' alt="">
          <div class="align-self-center ml-3">
          <h5 class="card-title">${response.data[i].first_name+" "+ response.data[i].last_name}</h5>
          <p class="card-text">${response.data[i].email}</p>
          <input class='ids d-none'value="${response.data[i].id}"></input>
        </div>
        </div>
      </div>`)
        }
      }
    });
  } else {
    $(this).replaceWith("<p class='noMoreCards'>" + 'This are all cards that we have :(' + "</p>");
  }
})