import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { Student } from '../../database/students.entity';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';

describe('StudentsController', () => {
  let studentsController: StudentsController;
  let studentsService: StudentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsController],
      providers: [
        StudentsService,
        {
          provide: getRepositoryToken(Student),
          useValue: {}
        }
      ],
    }).compile();
    console.log(getRepositoryToken(Student));
    console.log("CREATING studentsController");
    studentsController = module.get<StudentsController>(StudentsController);
    studentsService = module.get<StudentsService>(StudentsService);
    console.log("CREATE studentsController");
  });

  it('should be defined', () => {
    expect(studentsController).toBeDefined();
  });
});