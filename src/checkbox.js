const colors = require("./colors");
const fonts = require("./fonts");

module.exports = {
  checkboxColorStyle: color => `
  input[type=checkbox].nyx-checkbox-${color}:checked:after, input[type=checkbox].nyx-checkbox-${color}:after{
    content: ' ';
    visibility: visible;
    padding: 5px;
    line-height: 1.4;
    display: inline-block;
    cursor: pointer;
    color: ${colors[color]};
    border: solid 1px ${colors[color]};
  }
  
  input[type=checkbox].nyx-checkbox-${color}:checked:after{
    background-color: ${colors.brightness(colors[color], 100)};
  }
  
  input[type=checkbox].nyx-checkbox-${color}:after{
    background-color: ${colors.brightness(colors[color], -175)};
  }
  `,
  default: `
    input[type=checkbox]{
      visibility: hidden;
    }
    
    /* Firefox and IE Edge */
    @-moz-document url-prefix() {
      input[type=checkbox]{
        visibility: visible;
      }
    }
  
    input[type=checkbox]:checked:after, input[type=checkbox]:after{
      content: ' ';
      visibility: visible;
      padding: 5px;
      line-height: 1.4;
      display: inline-block;
      cursor: pointer;
      color: ${colors.standard};
      border: solid 1px ${colors.standard};
    }
    
    input[type=checkbox]:checked:after{
      background-color: ${colors.brightness(colors.standard, 100)};
    }
    
    input[type=checkbox]:after{
      background-color: ${colors.brightness(colors.standard, -175)};
    }
    
  `
};
