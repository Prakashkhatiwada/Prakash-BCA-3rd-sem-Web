// Get the form elements
const addRoomForm = document.getElementById('add-room-form');
const updateRoomForm = document.getElementById('update-room-form');
const deleteRoomForm = document.getElementById('delete-room-form');
const roomTable = document.getElementById('room-table');
const roomTbody = document.getElementById('room-tbody');

// Add event listeners to the forms
addRoomForm.addEventListener('submit', addRoom);
updateRoomForm.addEventListener('submit', updateRoom);
deleteRoomForm.addEventListener('submit', deleteRoom);

// Function to add a room
function addRoom(event) {
    event.preventDefault();
    const roomNumber = document.getElementById('room-number').value;
    const roomType = document.getElementById('room-type').value;
    const roomPrice = document.getElementById('room-price').value;
    // Add the room to the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${roomNumber}</td>
        <td>${roomType}</td>
        <td>${roomPrice}</td>
        <td>
            <button class="update-btn">Update</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;
    roomTbody.appendChild(newRow);
    // Clear the form fields
    addRoomForm.reset();
}

// Function to update a room
function updateRoom(event) {
    event.preventDefault();
    const updateRoomNumber = document.getElementById('update-room-number').value;
    const updateRoomType = document.getElementById('update-room-type').value;
    const updateRoomPrice = document.getElementById('update-room-price').value;
    // Update the room in the table
    const rows = roomTbody.children;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const roomNumber = row.children[0].textContent;
        if (roomNumber === updateRoomNumber) {
            row.children[1].textContent = updateRoomType;
            row.children[2].textContent = updateRoomPrice;
            break;
        }
    }
    // Clear the form fields
    updateRoomForm.reset();
}

// Function to delete a room
function deleteRoom(event) {
    event.preventDefault();
    const deleteRoomNumber = document.getElementById('delete-room-number').value;
    // Delete the room from the table
    const rows = roomTbody.children;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const roomNumber = row.children[0].textContent;
        if (roomNumber === deleteRoomNumber) {
            roomTbody.removeChild(row);
            break;
        }
    }
    // Clear the form fields
    deleteRoomForm.reset();
}  