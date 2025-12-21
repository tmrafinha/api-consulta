import { CompanySize } from "@prisma/client";
export declare class CreateCompanySwaggerDto {
    name: string;
    website?: string;
    description?: string;
    industry?: string;
    size?: CompanySize;
}
