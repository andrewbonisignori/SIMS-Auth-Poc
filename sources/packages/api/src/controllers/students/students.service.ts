import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../../database/students.entity';
import CreateStudentDto from './dto/create-student.dto';
import UpdatetStudentDto from './dto/update-student.dto'

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}

  async findById(id: number): Promise<Student> {
    const result = await this.studentRepo.findOne(id);
    console.log(result);
    return result;
  }

  async findAll(): Promise<Student[]> {
    const result = await this.studentRepo.find();
    console.log(result);
    return result;
  }

  async create(student: CreateStudentDto): Promise<void> {
    const newStudent = new Student();
    (newStudent.firstName = student.firstName),
      (newStudent.lastName = student.lastName),
      (newStudent.birthDate = student.birthDate),
      (newStudent.email = student.email);
    const result = await this.studentRepo.insert(student);
    console.log(result);
  }

  async update(student: UpdatetStudentDto): Promise<void> {
    const result = await this.studentRepo.save(student);
    console.log(result);
  }
}