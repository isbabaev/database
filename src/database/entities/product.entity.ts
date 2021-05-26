import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  UpdateDateColumn,
  JoinColumn, PrimaryColumn,
} from 'typeorm';
import { AccountEntity } from './account.entity';

@Entity('products')
export class ProductEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('text', { array: true, name: 'photo_urls' })
  photoUrls: string[];

  @Column()
  price: number;

  @ManyToOne(() => AccountEntity)
  @JoinColumn({ name: 'seller_id' })
  seller: AccountEntity;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}
