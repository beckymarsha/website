console.log(window.innerWidth);

var thumbnail = $(".thumbnailz");

function thumbnailClicked() {
//    console.log(this);
    var newHeight = $(this).height();
    console.log(newHeight);
    newHeight = newHeight + 20;
    $(this).height(newHeight);
}

thumbnail.click(thumbnailClicked);

thumbnail.click(function() {
    $(this).animate(
        {
        height: "+=50",
        width: "+=50"
    },
    1000
    );
    })