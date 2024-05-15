
import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
  } from 'typeorm';
  
  export abstract class BaseEntity {
  
      @CreateDateColumn({
        type: 'timestamp',
      })
      createdAt: Date;
  
      @UpdateDateColumn({
        type: 'timestamp',
      })
      updatedAt: Date;
      
  }