import mongoose from "mongoose";

// Define mongoose schemas
const userSchema = new mongoose.Schema({
    username: { type: String },
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});

// Check if the Admin model already exists before defining it
if (!mongoose.models.Admin) {
    // Define your Admin model
    mongoose.model('Admin', adminSchema);
}

// Check if the Course model already exists before defining it
if (!mongoose.models.Course) {
    // Define your Course model
    mongoose.model('Course', courseSchema);
}

// Check if the User model already exists before defining it
if (!mongoose.models.User) {
    // Define your User model
    mongoose.model('User', userSchema);
}

// Export your models
export const Admin = mongoose.model('Admin');
export const Course = mongoose.model('Course');
export const User = mongoose.model('User');
