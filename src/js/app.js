const wrapper = $('.js-table-body');
let data = [{name:'name1', value:'value1'},{name:'name2', value:'value2'}];

$.each(data, function(i, item) {
  wrapper.append(`<tr><td>${item.name}</td><td>${item.value}</td></tr>`);
});


$('.js-add-row').on('click', function() {
  wrapper.append('<tr><td></td><td></td></tr>');
});
