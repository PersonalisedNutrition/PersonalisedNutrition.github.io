$(document).ready(function() {
    $("#foldtable4").click(function() {
        var txt = $(this).text();
        if(txt == "Click to see details") {
            $(this).text("Close");
            $(".m-table1").find(".hidetable4").css("display", "table-row");
        } else {
            $(this).text("Click to see details");
            $(".m-table1").find(".hidetable4").css("display", "none");
        }
    })
});