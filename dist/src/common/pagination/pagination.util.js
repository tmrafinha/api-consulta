"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPaginationResponse = buildPaginationResponse;
function buildPaginationResponse(items, total, page, limit) {
    return {
        items,
        meta: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        },
    };
}
//# sourceMappingURL=pagination.util.js.map