const wrapper = $('.js-table-body');
let data = [{name:'name1', value:'value1'},{name:'name2', value:'value2'}];

$.each(data, function(i, item) {
  wrapper.append(`<tr><td class="js-cell">${item.name}</td><td class="js-cell">${item.value}</td></tr>`);
});


$('.js-add-row').on('click', function() {
  wrapper.append('<tr><td class="js-cell"></td><td class="js-cell"></td></tr>');
});

$('.js-cell').click(function() {
  var cellValue = $(this).html();
  var cellInput = `<input type="text" class="js-cell-input" value="${cellValue}" />`;
  $(this).html(cellInput);
  $(this).find('.js-cell-input').focus();
});
