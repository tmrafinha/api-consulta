import { EmploymentType, WorkModel } from "@prisma/client";
export declare enum JobSortBy {
    CREATED_AT = "createdAt",
    SALARY_MIN = "salaryMin",
    SALARY_MAX = "salaryMax",
    APPLICATIONS_COUNT = "applicationsCount"
}
export declare enum SortOrder {
    ASC = "asc",
    DESC = "desc"
}
export declare class JobQuerySwaggerDto {
    page?: number;
    limit?: number;
    search?: string;
    companyId: string;
    employmentType?: EmploymentType;
    workModel?: WorkModel;
    location?: string;
    minSalary?: number;
    maxSalary?: number;
    sortBy?: JobSortBy;
    sortOrder?: SortOrder;
}
