import model from "./model.js";

export async function findCoursesForUser(userId) {
 const enrollments = await model.find({ user: userId }).populate("course");
 return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).populate("user");
 return enrollments.map((enrollment) => enrollment.user);
}

export function enrollUserInCourse(user, course) {
 console.log(`DAO: Enrolling user ${user} in course ${course}`);
 const newEnrollment = { user, course, _id: `${user}-${course}` };
 console.log(`DAO: Creating enrollment:`, newEnrollment);
 return model.create(newEnrollment);
}

export function unenrollUserFromCourse(user, course) {
 return model.deleteOne({ user, course });
}

// Keep backward compatibility functions
export const findAllEnrollments = async () => await model.find();

export const findEnrollmentById = async (enrollmentId) => await model.findById(enrollmentId);

export const findEnrollmentsForUser = async (userId) => {
  console.log(`DAO: Finding enrollments for user ${userId}`);
  const enrollments = await model.find({ user: userId });
  console.log(`DAO: Found ${enrollments.length} enrollments for user ${userId}`);
  return enrollments;
};

export const findEnrollmentsForCourse = async (courseId) => await model.find({ course: courseId });

export const deleteEnrollment = async (enrollmentId) => await model.deleteOne({ _id: enrollmentId }); 