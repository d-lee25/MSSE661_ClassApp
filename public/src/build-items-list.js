/**
 * html structure
 *
 * @example
 * <ul class="tasks-list">
 *  <li class="task-item">
 *    <div class="task-item-block">
 *      <span class="task-checkbox"><input type="checkbox"></span>
 *      <span class="task-name">Task name</span>
 *      <span class="task-status">pending</span>
 *      <span class="task-date">date create</span>
 *    </div>
 *  </li>
 * </ul>
 */

// This is an IIFE (Immediately Invoked Function Expression).
// What it does is in the name.
(async () => {
  const items = await getItems();
  console.log(items);

  if (items.length) {
    const div = document.getElementById('items');
    const loadingDiv = div.childNodes[1];

    const ul = document.createElement('ul');

    // replace 'loading...' with list
    div.replaceChild(ul, loadingDiv); // <- order is important here!

    // create the list
    items.map((item) => {
      // building blocks
      const li = document.createElement('li');
      li.className = 'item-item';
      const block = document.createElement('div');
      block.className = 'item-item-block';

      //   content
      const checkboxSpan = document.createElement('span');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkboxSpan.className = 'item-checkbox';
      checkboxSpan.appendChild(checkbox);

      const nameSpan = document.createElement('span');
      nameSpan.className = 'item-name';
      nameSpan.innerText = item.itemName;

      const statusSpan = document.createElement('span');
      statusSpan.className = 'item-model';
      statusSpan.innerText = item.itemModel;

      const dateSpan = document.createElement('span');
      dateSpan.className = 'item-date';
      dateSpan.innerText = item.created_date;

      // add list item
      block.appendChild(checkboxSpan);
      block.appendChild(nameSpan);
      block.appendChild(statusSpan);
      block.appendChild(dateSpan);

      li.appendChild(block);
      ul.appendChild(li);
    });
  }
})();
