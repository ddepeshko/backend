import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function startApp() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle("Пет проект").setDescription("Документация").setVersion("0.0.1").build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, document);

  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

startApp();
