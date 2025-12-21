"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsS3Config = void 0;
exports.AwsS3Config = {
    region: process.env.AWS_REGION,
    bucket: process.env.AWS_S3_BUCKET,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
};
//# sourceMappingURL=aws-s3.config.js.map