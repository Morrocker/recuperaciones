export let ActiveProgress = {
    active: true,
    'list-group-item-primary': true,
    'list-group-item-action': true,
    'list-group-item': false,
    disabled: false,
};

export let DoneProgress = {
      active: true,
      'list-group-item-primary': false,
      'list-group-item-action': true,
      'list-group-item': true,
      disabled: false,
};

export let DisabledProgress = {
      active: false,
      'list-group-item-primary': false,
      'list-group-item-action': true,
      'list-group-item': true,
      disabled: true,
};
