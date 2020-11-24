import React from 'react';

function Form() {
  return (<form>
            <label>Name</label>
            <input type="text"/>
            
            <label>Last Name</label>
            <input type="text"/>

            <label>CPF</label>
            <input type="text"/>

            <label>Sale</label>
            <input type="checkbox"/>

            <label>News</label>
            <input type="checkbox"/>

            <button type="submit">Register</button>
          </form>);
}

export default Form;