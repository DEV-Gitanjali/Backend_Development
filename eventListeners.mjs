import { userEvents } from "./userEvents.mjs"; // Ensure the correct path

const ue = new userEvents(); // Correct instantiation

// Function to handle post creation
function saveToDatabase() {
  console.log("saving post to database");
}

function sendNotification() {
  console.log("sending notification");
}

function updateTimeline() { // Correct function name
  console.log("updating timeline");
}

// Add listeners before creating a post
ue.addListener('postCreated', saveToDatabase);
ue.addListener('postCreated', sendNotification);
ue.addListener('postCreated', updateTimeline);

// Create post to trigger event
ue.createPost('this is my first post');
