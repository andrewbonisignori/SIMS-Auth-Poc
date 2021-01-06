import { Controller, Body, Param, Get, Patch, Post } from '@nestjs/common';
import CreateStudentDto from './dto/create-student.dto';
import GetStudentDto from './dto/get-student.dto'
import UpdatetStudentDto from './dto/update-student.dto'
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService){ }

  @Get(':id')
  async getStudent(@Param('id')id: number): Promise<GetStudentDto> {
    console.log(`students-get-${id}`)
    const student = await this.studentsService.findById(id);
    if(student === null){
      return null;
    }

    return <GetStudentDto>student;
  }

  @Get()
  async getAll(): Promise<GetStudentDto[]> {
    const students = await this.studentsService.findAll();
    return students.map(s => <GetStudentDto>{
      id: s.id,
      firstName: s.firstName,
      lastName: s.lastName,
      email: s.email,
      birthDate: s.birthDate
    });
  }

  @Post()
  async create(@Body() newStudent: CreateStudentDto): Promise<void> {
    console.log(newStudent);
    await this.studentsService.create(newStudent);
  }

  @Patch()
  async update(@Body() student: UpdatetStudentDto): Promise<void> {
    console.log(student);
    await this.studentsService.update(student);
  }
}
