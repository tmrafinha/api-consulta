import { EmploymentType, WorkModel } from "@prisma/client";
export declare class UpdateJobSwaggerDto {
    title?: string;
    slug?: string;
    description?: string;
    employmentType?: EmploymentType;
    workModel?: WorkModel;
    location?: string;
    salaryMin?: number;
    salaryMax?: number;
    techStack?: string[];
    responsibilities?: string[];
    requirementsMust?: string[];
    requirementsNice?: string[];
    benefits?: string[];
    isActive?: boolean;
}
