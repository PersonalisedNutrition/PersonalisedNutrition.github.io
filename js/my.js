$(document).ready(function() {
    $("#foldtable").click(function() {
        var txt = $(this).text();
        if(txt == "Click to see details") {
            $(this).text("Close");
            $(".m-table1").find(".hidetable").css("display", "table-row");
        } else {
            $(this).text("Click to see details");
            $(".m-table1").find(".hidetable").css("display", "none");
        }
    })
});