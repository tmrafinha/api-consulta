import { S3Client } from "@aws-sdk/client-s3";
export declare const AWS_S3_CLIENT = "AWS_S3_CLIENT";
export declare const AwsS3ClientProvider: {
    provide: string;
    useFactory: () => S3Client;
};
