import { EmploymentType, WorkModel } from "@prisma/client";
export declare class CreateJobSwaggerDto {
    companyId: string;
    title: string;
    slug: string;
    description: string;
    employmentType: EmploymentType;
    workModel: WorkModel;
    location?: string;
    salaryMin?: number | null;
    salaryMax?: number | null;
    techStack?: string[];
    responsibilities?: string[];
    requirementsMust?: string[];
    requirementsNice?: string[];
    benefits?: string[];
    isActive?: boolean;
}
