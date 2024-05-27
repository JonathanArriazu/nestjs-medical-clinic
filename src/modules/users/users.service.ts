import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async createUser(body: CreateUserDto) {
    
    
    const newUser = this.userRepository.create(body);
    
    try {
      const savedUser= await this.userRepository.save(newUser);

      if (!savedUser) {
        throw new Error('Failed to find result');
      }

      return savedUser;
    } catch (error) {
      throw new HttpException('Failed to create user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async findAllUsers(): Promise<User[]> {
    try {
      

      const user: User[] = await this.userRepository.find();

      if (user.length === 0) {
        throw new HttpException('No result found', HttpStatus.NOT_FOUND);
      }
      
      return user;
    } catch (error) {
      throw new HttpException('Failed to find users', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async findOneUser(email: string): Promise<User> {
    try {
      const user: User = await this.userRepository.findOne({
        where: [{email}]
      })
      if (!user) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return user;
    } catch (error) {
      throw new HttpException('Failed to find user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateUser(
    id: number,
    body: UpdateUserDto,
  ): Promise<UpdateResult> {
    try {
      const user: UpdateResult = await this.userRepository.update(
        id,
        body,
      );
      if (user.affected === 0) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return user;
    } catch (error) {
      throw new HttpException('Failed to update user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async removeUser(id: number): Promise<DeleteResult> {
    try {
      const user: DeleteResult = await this.userRepository.delete(id);
      if (user.affected === 0) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return user;
    } catch (error) {
      throw new HttpException('Failed to delete user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
