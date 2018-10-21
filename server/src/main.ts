import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { timer } from 'rxjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8086, '0.0.0.0');
}

async function uberDaemon() {
  const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));
  while (true) {
    await snooze(1000);
    console.log('Uber Deamon TODO');
  }
}

// uberDaemon();
bootstrap();
