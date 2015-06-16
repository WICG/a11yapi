/**
 * HTML semantics description in accessibility taxonomy terms.
 *
 * Text selector syntax:
 *   :role a pseudo class pointing this element has to be accessible;
 *   :role(name) a pseudo class matching an element having an accessible element
 *     of 'name' role;
 *   > points this element has to have parent complying preceding selector;
 *   :id - resolved to id attribute of the element;
 *   :attr(value) - resolved to attribute value of the element;
 *   :prop(value) - resolved to property value of the element;
 *   :content - resolved to text content of the element.
 */
'use strict';
const HTMLControlName = [
  'label[for~=:id]',
  ':parent(label)'
];

var HTMLSemantics = {
  a: {
    match: 'a[href]',
    role: 'link',
    states: {
      visited: function(elm) {
        // change the style sheet and get computed style.
        // note: no legal way to obtain whether a link was visited, privacy
        // problem?
      }
    },
    text: ':content',
    actions: ['jump']
  },

  a_menuitem: {
    match: ':role(menu) > a',
    role: 'menuitem'
  },

  a_nohref: {
    match: 'a',
    role: 'text',
    text: ':content'
  },

  h1: {
    match: 'h1',
    role: 'heading',
    text: ':content',
    attrs: {
      level: 1
    }
  },
  h2: {
    match: 'h2',
    role: 'heading',
    text: ':content',
    attrs: {
      level: 2
    }
  },
  h3: {
    match: 'h3',
    role: 'heading',
    text: ':content',
    attrs: {
      level: 3
    }
  },
  h4: {
    match: 'h4',
    role: 'heading',
    text: ':content',
    attrs: {
      level: 4
    }
  },
  h5: {
    match: 'h5',
    role: 'heading',
    text: ':content',
    attrs: {
      level: 5
    }
  },

  button: {
    match: 'button',
    role: 'button',
    name: HTMLControlName.concat(':content', ':attr(title)'),
    states: {
      disabled: function(elm) { return elm.hasAttribute('disabled'); }
    }
  },

  img: {
    match: 'img',
    role: 'image',
    name: [':attr(alt)', ':attr(title)']
  },

  input_button: {
    match: 'input[type="button"]',
    role: 'button',
    name: HTMLControlName.concat(':attr(value)', ':attr(title)'),
    states: {
      disabled: ':prop(disabled)'
    }
  },

  input_checkbox: {
    match: 'input[type="checkbox"]',
    role: 'checkbox',
    name: HTMLControlName.concat(':attr(title)'),
    states: {
      checked: ':prop(checked)',
      disabled: ':prop(disabled)'
    }
  },

  input_text: {
    match: 'input',
    role: 'textbox',
    name: HTMLControlName,
    states: {
      readonly: ':prop(readonly)',
      disabled: ':prop(disabled)'
    },
    text: ':prop(value)'
  },

  p: {
    match: 'p',
    role: 'paragraph',
    text: ':content'
  }
};
