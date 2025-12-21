import { CompanySize } from "@prisma/client";
export declare class UpdateCompanySwaggerDto {
    name?: string;
    website?: string;
    description?: string;
    industry?: string;
    size?: CompanySize;
}
