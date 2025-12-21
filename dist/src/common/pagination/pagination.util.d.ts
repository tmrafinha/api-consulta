export declare function buildPaginationResponse<T>(items: T[], total: number, page: number, limit: number): {
    items: T[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
};
