var wrapper = $('.js-table-body');
var data = [{name: 'name1', value: 'value1'}, {name: 'name2', value: 'value2'}];

$.each(data, function(i, item) {
  wrapper.append(`<tr class="js-row"><td class="js-cell">${item.name}</td><td class="js-cell">${item.value}</td><td class="js-remove">x</td></tr>`);
});

$('.js-remove').on('click', function() {
  $(this).parents('.js-row').remove();
  $('.js-textarea').val('');
});

$('.js-add-row').on('click', function() {
  wrapper.append('<tr class="js-row"><td class="js-cell"></td><td class="js-cell"></td><td class="js-remove">x</td></tr>');
  delEvent();
  editCell();
});

function delEvent() {
  $('.js-remove').on('click', function() {
    $(this).parents('.js-row').remove();
  });
}

delEvent();
editCell();

function editCell() {
  $('.js-cell').off().on('click', function(e) {
    var targetEl = e.target || e.srcElement;
    var elTag =  targetEl.tagName;
    if(elTag === 'INPUT')	{return false;}
    var cellValue = $(this).html();
    var cellInput = `<input type="text" class="js-cell-input" value="${cellValue}" />`;
    $(this).html(cellInput);
    $(this).find('.js-cell-input').focus();
    $(this).find('.js-cell-input').blur(function() {
      var val = $(this).val();
      $(this).parent().empty().html(val);
    });
  });

  $(window).keydown(function(e) {
    if(e.keyCode === 13) {
      $('.js-cell-input').blur();
    }
  });
}

$('.js-json-table').on('click', function() {
  if ($('.js-textarea').val().length === 0) {
    alert('textarea empty');
    return;
  }
  var data = JSON.parse($('.js-textarea').val());
  $('.js-textarea').val('');
  wrapper.html('');
  for (var i = 0; i < data.items.length; i++) {
    wrapper.append(`<tr class="js-row">
      <td class="js-cell">${data.items[i].name}</td><td class="js-cell">${data.items[i].value}</td><td class="js-remove">x</td>
    </tr>`);
  }
  delEvent();
  editCell();
});

function updJSON() {
  var cells = $('.js-cell');
  var arr = [];
  for (var i = 0; i < cells.length; i+=2) {
    var item = {
      name: $(cells[i]).html(),
      value: $(cells[i+1]).html()
    };
    arr.push(item);
  }
  var json = {
    'items': arr
  };
  var result = JSON.stringify(json);
  $('.js-textarea').val(result);
  localStorage.setItem('table', result);
  console.log('"localStorage.table" - ' + localStorage.table);
}

$('.js-json-generate').on('click', function() {
  $('.js-textarea').val('');
  updJSON();
});
