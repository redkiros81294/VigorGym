// import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
// import { User } from '../user/user.entity';

// @Entity()
// export class Payment {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   amount: number;

//   @Column()
//   type: string;

//   @Column()
//   status: string;

//   @Column()
//   transactionReference: string;

//   @ManyToOne(() => User, user => user.payments)
//   user: User;

//   @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   createdAt: Date;
// }
