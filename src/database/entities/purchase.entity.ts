import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';
import { AccountEntity } from './account.entity';

@Entity('purchases')
export class PurchaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => ProductEntity)
  products: ProductEntity[];

  @ManyToOne(() => AccountEntity)
  buyer: AccountEntity;

  @Column()
  purchaseDate: Date;
}
