// Utility Function
// Takes any collection with a length property that can be
// emumerated numerically. Each item has it's own callback
function forEach(collection, action, scope) {
  for (var i = 0; i < collection.length; i++) {
    action.call(scope, collection[i], i);
  }
}

// Collection of names and randomly generated colors
// randomColor() is from http://llllll.li/randomColor/
var contactInformation = [{'firstName': 'Micheal', 'lastName': 'Carswell', 'color': randomColor({luminosity : 'light'})},
             { 'firstName': 'Jed', 'lastName': 'Cherry', 'color': randomColor({luminosity : 'light'})},
             { 'firstName': 'Freddie', 'lastName': 'Crimmins', 'color': randomColor({luminosity : 'light'})},
             { 'firstName': 'Dimple', 'lastName': 'Deloatch', 'color': randomColor({luminosity : 'light'})},
             { 'firstName': 'Tomas', 'lastName': 'Duhn', 'color': randomColor({luminosity : 'light'})},
             { 'firstName': 'Coralee', 'lastName': 'Earheart', 'color': randomColor(), 'color': randomColor({luminosity : 'light'})},
             { 'firstName': 'Solomon', 'lastName': 'Magruder', 'color': randomColor({luminosity : 'light'})},
             { 'firstName': 'Antionette', 'lastName': 'May', 'color': randomColor({luminosity : 'light'})},
             { 'firstName': 'Illa', 'lastName': 'Schwindt', 'color': randomColor({luminosity : 'light'})},
             { 'firstName': 'Jesica', 'lastName': 'Utt', 'color': randomColor({luminosity : 'light'})}];

// Adds a contact to the contact list using the data above
// Structure
// <tbody>
//   <tr class="contact">
//     ...
//   </tr>
//
//   <tr class="contact">
//     <td class="contact-image">
//       <div data-image-color="#xxxxxx"></div>
//     </td>
//     <td class="contact-name">
//       <span class="first-name">
//       <span class="last-name">
//     <td>
//   </tr>
//
//   <tr class="contact">
//     ...
//   </tr>
// </tbody>
var contactList = document.querySelector('#contactList tbody');
function addContact(contactInfo) {
  var contact = document.createElement('tr'),
      contactImgWrapper = document.createElement('td'),
      contactImg = document.createElement('div'),
      contactName = document.createElement('td'),
      firstName = document.createElement('span'),
      lastName = document.createElement('span');
  
  // Add classes to each element in a contact <tr>
  contact.classList.add('contact');
  contactName.classList.add('contact-name');
  firstName.classList.add('first-name');
  lastName.classList.add('last-name');
  contactImgWrapper.classList.add('contact-image');
  
  // Add the color to the contact-color <td> -> <div>
  contactImg.style.backgroundColor = contactInfo['color'];
  contactImg.setAttribute('data-image-color', contactInfo['color']);
  
  // Append each element to the contact <tr>
  // starting with the inner most element
  firstName.appendChild(document.createTextNode(contactInfo['firstName']));
  lastName.appendChild(document.createTextNode(contactInfo['lastName']));
  contactImgWrapper.appendChild(contactImg);
  contact.appendChild(contactImgWrapper);
  contactName.appendChild(firstName);
  contactName.appendChild(document.createTextNode(' '));
  contactName.appendChild(lastName);
  contact.appendChild(contactName); 
  
  // Append the contact to the contact list
  contactList.appendChild(contact);
}

// Use the contactInformation collection to build the contact list
forEach(contactInformation, function(contactInfo) {
  addContact(contactInfo);
});

// Event listener for table cells
// Use CSS directly to bring the selected tab into focus
// Rely on CSS Transitions for the animation
function focusSelectedContact(event) {
  var currentTarget = event.currentTarget,
      appBody = document.querySelector('.app-body'),
      rect = currentTarget.getBoundingClientRect(),
      appBarRect = appBody.getBoundingClientRect(),
      translate = appBarRect.top - rect.top + 171,
      root = document.querySelector('html'),
      menuToggleIcon = document.querySelector('#menuToggle i'),
      contactInfo = document.querySelector('.contact-info'),
      color = currentTarget.querySelector('.contact-image div').getAttribute('data-image-color');
  
  
  // Add the initial styles to the selected contact
  currentTarget.classList.remove('previously-selected');
  currentTarget.classList.add('selected-contact');
  
  // Hide the contacts that weren't clicked
  root.classList.add('hide-contacts');
  root.classList.remove('show-contacts');
  
  // Reposition the selected contact table cell
  currentTarget.style.webkitTransform = 'translateY(' + translate +'px)';
  currentTarget.style.transform = 'translateY(' + translate +'px)';
  currentTarget.offsetHeight; // Force a redraw so the animation works
  
  // Apply a gradient to the table's background
  appBody.style.backgroundImage = 'linear-gradient(' + color + ' 0%, #fff 100%)';
  appBody.style.backgroundPosition = '0 0';
  appBody.style.overflow = 'hidden';
  
  // Change the menu button icons
  menuToggleIcon.classList.remove('fa-bars');
  menuToggleIcon.classList.add('fa-arrow-left');
  contactInfo.classList.add('visible');
}

// Attach the focusSelectedContact event listener to each table cell
forEach(document.querySelectorAll('.contact'), function(contact) {
  contact.addEventListener('click', focusSelectedContact);
});



// Event listener for the menu button
// Undo all of the css set by focusSelectedContact
function showAllContacts() {
  var appBody = document.querySelector('.app-body'),
      selectedContact = document.querySelector(".selected-contact"),
      menuToggleIcon = document.querySelector('#menuToggle i'),
      contactInfo = document.querySelector('.contact-info');
  
  // Slide the selected contact back into its original position
  selectedContact.style.webkitTransform = '';
  selectedContact.style.transform = '';
  selectedContact.offsetHeight; // Force a redraw so the browser doesn't skip the animation
  
  // Remove the gradient on the table's background
  appBody.style.backgroundPosition = '';
  appBody.style.overflow = 'auto';
  
  // Revert the menu button icons
  menuToggleIcon.classList.add('fa-bars');
  menuToggleIcon.classList.remove('fa-arrow-left');
  contactInfo.classList.remove('visible');
  
  // After the selected contact is in position (the transition is complete)
  // display the other contacts again
  setTimeout(function() {
    var root = document.querySelector('html');
    root.classList.add('show-contacts');
    root.classList.remove('hide-contacts');
    selectedContact.classList.remove('selected-contact');
  }, 250);
}

// Attach the showAllContacts event listener to the menu button
document.querySelector('#menuToggle').addEventListener('click', showAllContacts);