Handlebars.registerHelper('selectBox', function(select)
{
    var selectOptions = "";

    selectOptions += $.map(select, function(option, index){
        var selectOption = '';

        if(option.zustand == 1)
            selectOption = "<option value='" + index + "'>" + option.inhalt + "</option> \n";
        else
            selectOption = "<option value='" + index + "' selected>" + option.inhalt + "</option> \n";

        return selectOption;
    });

    return selectOptions;
});
