import {colors} from "./common";

export default {
  radioColorStyle: color => `
  input[type=radio].nyx-radio-${color}:checked:after, input[type=radio].nyx-radio-${color}:after{
    content: ' ';
    visibility: visible;
    padding: 5px;
    border-radius: 5px;
    line-height: 1.4;
    display: inline-block;
    cursor: pointer;
    color: ${colors[color]};
    border: solid 1px ${colors[color]};
  }
  
  input[type=radio].nyx-radio-${color}:checked:after{
    background-color: ${colors.brightness(colors[color], 100)};
  }
  
  input[type=radio].nyx-radio-${color}:after{
    background-color: ${colors.brightness(colors[color], -175)};
  }  
  `,
  default: `
    input[type=radio]{
      visibility: hidden;
    }
  
    /* Firefox */
    @-moz-document url-prefix() {
      input[type=radio]{
        visibility: visible;
      }
    }
    
    input[type=radio]:checked:after, input[type=radio]:after{
      content: ' ';
      visibility: visible;
      padding: 5px;
      border-radius: 5px;
      line-height: 1.4;
      display: inline-block;
      cursor: pointer;
      color: ${colors.standard};
      border: solid 1px ${colors.standard};
    }
    
    input[type=radio]:checked:after{
      background-color: ${colors.brightness(colors.standard, 100)};
    }
    
    input[type=radio]:after{
      background-color: ${colors.brightness(colors.standard, -175)};
    }  

  `
};
