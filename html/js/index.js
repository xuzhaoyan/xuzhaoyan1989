// $("input[name=plan]").click(function () {
//     alert("test");
//     hidetable();
// })

function hidetable() {
    alert("test");
    switch ($("input[name=price_type]:checked").attr("id")) {
        case "plan1":
            $('tr').find('th:eq(0)').hide();
            $('tr').find('td:eq(0)').hide();
            break;
        case "plan2":
            $('tr').find('th:eq(0)').hide();
            $('tr').find('td:eq(0)').hide();
            break;
        default:
            break;
    }
}