### 表单

- 使用 `label` 的`for`属性绑定控件元素的`id`

  ```html
  <input id="promo" type="checkbox"></input>
  <label for="promo">This is a checkbox</label>
  ```

- `aria-required`和`aria-invalid`

  ```html
  <form>
    <div>
      <label for="name">* Name:</label>
      <input type="text" value="name" id="name" aria-required="true"/>
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="text" value="phone" id="phone" aria-required="false"/>
    </div>
    <div>
      <label for="email">* E-mail:</label>
      <input type="text" value="email" id="email" aria-required="true"/>
    </div>
  </form>
  ```

  ```javascript
  var validate = function () {
    var emailElement = document.getElementById(emailFieldId);
    var valid = emailValid(formData.email); // returns true if valid, false otherwise
  
    emailElement.setAttribute("aria-invalid", !valid);
    setElementBorderColour(emailElement, valid); // sets the border to red if second arg is false
  };
  ```

