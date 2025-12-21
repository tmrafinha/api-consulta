import {
  PipeTransform,
  Injectable,
  BadRequestException
} from "@nestjs/common";
import { ZodSchema, ZodError } from "zod";

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema<any>) {}

  transform(value: any) {
    try {
      return this.schema.parse(value); 
    } catch (error) {
      console.log(error)
      if (error instanceof ZodError) {
        throw new BadRequestException({
          message: "Validation failed",
          errors: error.issues,
        });
      }
      throw error;
    }
  }
}
