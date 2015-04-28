var myObj = (function()
{
    var data;

    function loadData()
    {
        $.ajax({
            type: "POST",
            url: 'server.php',
            dataType: "json",
            success: function(result)
            {
                data =  result;
            }
        });
    }

    return{
        start: function()
        {
            alert('Hier Start');
        },
        getData: function()
        {
            return data;
        },
        loadData: function(){
            loadData();
        },
        test: function()
        {
            alert('Test');
        }
    }
})();