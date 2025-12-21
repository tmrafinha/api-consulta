import { S3Client } from "@aws-sdk/client-s3";
import { AwsS3Config } from "./aws-s3.config";

export const AWS_S3_CLIENT = "AWS_S3_CLIENT";

export const AwsS3ClientProvider = {
  provide: AWS_S3_CLIENT,
  useFactory: () => {
    return new S3Client({
      region: AwsS3Config.region,
      credentials: AwsS3Config.credentials,
    });
  }
};