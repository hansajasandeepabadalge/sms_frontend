export interface Student {
  studentId: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string; // Format: YYYY-MM-DD
  gender: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  address: string;
  enrollmentDate: string; // Format: YYYY-MM-DD
  status: string;
  classroom: Classroom;
}

export interface Classroom {
  classId: number;
  className: string;
  teacher: Teacher;
}

export interface Teacher {
  teacherId: number;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phoneNumber: string;
  subject: string;
}
