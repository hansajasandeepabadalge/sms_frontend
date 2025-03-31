import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface StudentFormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  address: string;
  enrollmentDate: string;
  status: 'ACTIVE' | 'INACTIVE';
  classroom: {
    classId: number;
  };
}

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form in the constructor
    this.studentForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dateOfBirth: [''],
      gender: ['MALE'],
      parentName: [''],
      parentEmail: [''],
      parentPhone: [''],
      address: [''],
      enrollmentDate: [''],
      status: ['ACTIVE'],
      classId: ['']
    });
  }

  ngOnInit(): void {
    // You can still call additional setup in ngOnInit if needed
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      const formValue = this.studentForm.value;

      // Format the data to match the required JSON structure
      const studentData: StudentFormData = {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        dateOfBirth: formValue.dateOfBirth,
        gender: formValue.gender,
        parentName: formValue.parentName,
        parentEmail: formValue.parentEmail,
        parentPhone: formValue.parentPhone,
        address: formValue.address,
        enrollmentDate: formValue.enrollmentDate,
        status: formValue.status,
        classroom: {
          classId: parseInt(formValue.classId, 10) || 0
        }
      };

      // Log the JSON object to the console
      console.log(JSON.stringify(studentData, null, 2));

      // Here you would typically send this data to your backend
      // this.studentService.createStudent(studentData).subscribe(...);
    }
  }
}
