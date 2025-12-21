"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsS3ClientProvider = exports.AWS_S3_CLIENT = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const aws_s3_config_1 = require("./aws-s3.config");
exports.AWS_S3_CLIENT = "AWS_S3_CLIENT";
exports.AwsS3ClientProvider = {
    provide: exports.AWS_S3_CLIENT,
    useFactory: () => {
        return new client_s3_1.S3Client({
            region: aws_s3_config_1.AwsS3Config.region,
            credentials: aws_s3_config_1.AwsS3Config.credentials,
        });
    }
};
//# sourceMappingURL=aws-s3.client.js.map