import { User } from 'src/user/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',

  host: '127.0.0.1',

  port: 5432,

  username: 'postgres',

  password: 'postgres',

  database: 'postgres',

  entities: [User],

  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
