import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { InformationModule } from './modules/information/information.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,        
      envFilePath: '.env',
    }),
    InformationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
