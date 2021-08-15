import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      name: "default",
      type: 'postgres',
      url: 'postgres://etrtersv:KysIl55KSjm03p5_xl4JRdziTk4ASXK8@chunee.db.elephantsql.com/etrtersv',
      synchronize: true,
      logging: true,
      autoLoadEntities: true
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
