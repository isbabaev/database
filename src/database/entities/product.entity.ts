import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AccountEntity } from './account.entity';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column("text", {array: true})
  photoUrls: string[];

  @Column()
  price: number;

  @ManyToOne(() => AccountEntity)
  seller: AccountEntity;
}
