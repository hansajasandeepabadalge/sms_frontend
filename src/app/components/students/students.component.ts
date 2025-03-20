import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Classroom, Student} from "../../student.model";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  classrooms: Classroom[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient, private studentService: StudentService,) {}

  ngOnInit(): void {
    this.fetchStudents();
    this.fetchClassrooms();
  }

  fetchStudents(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  fetchClassrooms(): void {
    this.studentService.getClassrooms().subscribe(data => {
      this.classrooms = data;
    })
  }

  isModalOpen = false;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  createNewStudent() {
    this.toggleModal();
  }

  print(): void {
    console.log('Print');
  }

  importData(): void {
    // Logic to import data
    console.log('Import data');
  }

  exportData(): void {
    // Logic to export data
    console.log('Export data');
  }

  viewStudent(student: any): void {
    // Logic to view student details
    console.log('View student:', student);
  }

  editStudent(student: any): void {
    // Logic to edit student details
    console.log('Edit student:', student);
  }

  deleteStudent(student: any): void {
    // Logic to delete student
    console.log('Delete student:', student);
  }
}
